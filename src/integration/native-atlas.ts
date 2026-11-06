/**
 * An independent, read-only Azgaar renderer connection for the World Atlas.
 *
 * It deliberately does NOT share the World Editor's singleton iframe bridge.
 * Both Azgaar instances render the same published native .map, but have
 * independent viewports, layers, style controls and iframe lifetimes.
 */
import type {WorldSummary} from "./azgaar.js";

export const NATIVE_ATLAS_URL="./dist/world-editor/index.html?kingdomos=atlas&view=1";
const PROTOCOL="kingdomos-azgaar",VERSION=1;
type AtlasState="connecting"|"booting"|"ready"|"loading"|"loaded"|"error"|"closed";
type Pending={resolve:(data:unknown)=>void;reject:(error:Error)=>void;timer:ReturnType<typeof setTimeout>};
type Listener=()=>void;

function record(x:unknown):x is Record<string,unknown>{
  return !!x && typeof x==="object" && !Array.isArray(x);
}
function summary(x:unknown):x is WorldSummary{
  return record(x)&&typeof x.seed==="string"&&typeof x.generatorVersion==="string"&&
    (x.mapId===null||typeof x.mapId==="number")&&
    ["width","height","cells","states","settlements"].every(k=>typeof x[k]==="number"&&Number.isFinite(x[k]));
}

export class NativeAtlasSession {
  private pending=new Map<string,Pending>();
  private listeners=new Set<Listener>();
  private frame:HTMLIFrameElement;
  private closed=false;
  private booted=false;
  private serial=0;
  private revision=0;
  private current:WorldSummary|null=null;
  private state:AtlasState="connecting";
  private error:string|null=null;

  constructor(frame:HTMLIFrameElement){
    this.frame=frame;
    window.addEventListener("message",this.onMessage);
    frame.src=NATIVE_ATLAS_URL;
  }
  readonly getState=()=>this.state;
  readonly getSummary=()=>this.current;
  readonly getError=()=>this.error;
  subscribe(fn:Listener):()=>void{this.listeners.add(fn);return()=>this.listeners.delete(fn);}
  private announce():void{for(const fn of this.listeners)fn();}
  private setState(next:AtlasState):void{this.state=next;this.announce();}
  private onMessage=(event:MessageEvent):void=>{
    if(this.closed||event.origin!==location.origin||event.source!==this.frame.contentWindow)return;
    const data:unknown=event.data;
    if(!record(data)||data.protocol!==PROTOCOL||data.version!==VERSION)return;
    if(data.kind==="event"){
      if(data.name==="ready"){
        const role=record(data.data)?data.data.mode:null;
        if(role!=="atlas"){this.error="Embedded Azgaar did not enable native Atlas mode.";this.setState("error");return;}
        if(!this.booted)this.setState("booting");
      }else if(data.name==="booted"){
        this.booted=true;
        if(summary(data.data))this.current=data.data;
        this.setState("ready");
      }else if(data.name==="world-changed"&&summary(data.data)){
        this.current=data.data;this.revision++;this.announce();
      }
      return;
    }
    if(data.kind!=="result"||typeof data.id!=="string")return;
    const request=this.pending.get(data.id);
    if(!request)return;
    this.pending.delete(data.id);clearTimeout(request.timer);
    if(data.name==="ok")request.resolve(data.data);
    else request.reject(new Error(record(data.data)&&typeof data.data.message==="string"?data.data.message:"Atlas map renderer rejected the command."));
  };
  private async awaitCondition(check:()=>boolean,timeoutMs=120000):Promise<void>{
    if(this.closed)throw new Error("Atlas renderer is closed.");
    if(this.state==="error")throw new Error(this.error||"Atlas renderer is unavailable.");
    if(check())return;
    return new Promise((resolve,reject)=>{
      let timer:ReturnType<typeof setTimeout>;
      const stop=this.subscribe(()=>{
        if(this.closed||this.state==="error"){
          clearTimeout(timer);stop();reject(new Error(this.error||"Atlas renderer closed."));
        }else if(check()){clearTimeout(timer);stop();resolve();}
      });
      timer=setTimeout(()=>{stop();reject(new Error("The native Atlas did not finish initializing."));},timeoutMs);
    });
  }
  private async command<T>(name:"import-map"|"fit"|"summary",payload?:unknown):Promise<T>{
    if(this.closed||!this.frame.contentWindow)throw new Error("Atlas renderer is closed.");
    return new Promise((resolve,reject)=>{
      const id="atlas-"+(++this.serial);
      const timer=setTimeout(()=>{this.pending.delete(id);reject(new Error("Azgaar timed out responding to "+name+"."));},120000);
      this.pending.set(id,{resolve:data=>resolve(data as T),reject,timer});
      this.frame.contentWindow!.postMessage({protocol:PROTOCOL,version:VERSION,kind:"command",id,name,payload},location.origin);
    });
  }
  /** Load the exact published .map file, never regenerate it from a seed. */
  async load(mapText:string,name:string):Promise<WorldSummary>{
    if(!mapText||new Blob([mapText]).size>100*1024*1024)throw new Error("Published world has no valid native map data.");
    await this.awaitCondition(()=>this.booted);
    const before=this.revision;
    this.setState("loading");
    try{
      const blob=new Blob([mapText],{type:"text/plain"});
      const response=await this.command<{accepted:boolean}>("import-map",{file:blob,name:name.endsWith(".map")?name:name+".map"});
      if(!response?.accepted)throw new Error("Azgaar did not accept the active world map.");
      await this.awaitCondition(()=>this.revision>before&&this.current!==null);
      this.setState("loaded");
      return this.current!;
    }catch(e){
      this.error=e instanceof Error?e.message:String(e);
      this.setState("error");
      throw e;
    }
  }
  async fit():Promise<void>{
    await this.awaitCondition(()=>this.booted);
    await this.command("fit");
  }
  close():void{
    if(this.closed)return;
    this.closed=true;
    window.removeEventListener("message",this.onMessage);
    for(const pending of this.pending.values()){
      clearTimeout(pending.timer);
      pending.reject(new Error("Native Atlas renderer closed."));
    }
    this.pending.clear();this.setState("closed");this.listeners.clear();
    this.frame.src="about:blank";
  }
}
