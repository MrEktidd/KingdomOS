/**
 * Versioned boundary between the KingdomOS desktop and the independently built
 * Azgaar editor. Never use window.FMG or reach into the iframe's DOM.
 */
export const EDITOR_URL = "./dist/world-editor/index.html?kingdomos=1";
export const BRIDGE_PROTOCOL = "kingdomos-azgaar";
export const BRIDGE_VERSION = 1;

export interface WorldSummary {
  generatorVersion:string;
  mapId:number|null;
  seed:string;
  width:number;
  height:number;
  cells:number;
  states:number;
  settlements:number;
}
export interface WorldSnapshot { summary:WorldSummary; mapText:string }
export interface WorldCapture extends WorldSnapshot {preview:Blob}
type Command = "summary"|"snapshot"|"capture"|"import-map"|"new-map"|"fit";
type Listener=()=>void;
type Pending={resolve:(value:unknown)=>void;reject:(error:Error)=>void;timeout:ReturnType<typeof setTimeout>};
type State="disconnected"|"connecting"|"ready";

const listeners=new Set<Listener>();
const pending=new Map<string,Pending>();
let currentFrame:HTMLIFrameElement|null=null;
let state:State="disconnected";
let booted=false;
let worldRevision=0;
let skipRecovery=false;
let world:WorldSummary|null=null;
let serial=0;
let generation=0;
const emit=()=>listeners.forEach(fn=>fn());
const isObject=(x:unknown):x is Record<string,unknown>=>!!x&&typeof x==="object"&&!Array.isArray(x);
function isSummary(x:unknown):x is WorldSummary {
  if(!isObject(x))return false;
  return typeof x.generatorVersion==="string"&&typeof x.seed==="string"&&
    (typeof x.mapId==="number"||x.mapId===null)&&
    ["width","height","cells","states","settlements"].every(k=>typeof x[k]==="number"&&Number.isFinite(x[k]));
}
function setState(next:State):void {state=next;emit();}
function rejectPending(reason:string):void {
  for(const [id,item] of pending){clearTimeout(item.timeout);item.reject(new Error(reason));pending.delete(id);}
}
function receive(event:MessageEvent):void {
  if(event.origin!==location.origin||event.source!==currentFrame?.contentWindow)return;
  const message:unknown=event.data;
  if(!isObject(message)||message.protocol!==BRIDGE_PROTOCOL||message.version!==BRIDGE_VERSION)return;
  if(message.kind==="event"){
    if(message.name==="booted"){
      booted=true;
      if(isSummary(message.data))world=message.data;
      emit();
    }else if(message.name==="ready"){
      setState("ready");
      // An initial map may not yet have finished generating.
      void request<WorldSummary>("summary").then(s=>{world=s;emit();}).catch(()=>{});
    }else if(message.name==="world-changed"&&isSummary(message.data)){
      world=message.data;worldRevision++;emit();
    }
    return;
  }
  if(message.kind!=="result"||typeof message.id!=="string")return;
  const item=pending.get(message.id);if(!item)return;
  pending.delete(message.id);clearTimeout(item.timeout);
  if(message.name==="ok")item.resolve(message.data);
  else item.reject(new Error(isObject(message.data)&&typeof message.data.message==="string"?message.data.message:"World Editor command failed."));
}

export function connectEditor(frame:HTMLIFrameElement):()=>void {
  disconnectEditor();
  currentFrame=frame;
  const session=++generation;
  state="connecting";booted=false;world=null;worldRevision=0;emit();
  window.addEventListener("message",receive);
  // Setting src after registering avoids racing the editor's 'ready' message.
  frame.src=EDITOR_URL;
  return ()=>{if(generation===session)disconnectEditor();};
}
function disconnectEditor():void {
  window.removeEventListener("message",receive);
  currentFrame=null;booted=false;world=null;
  rejectPending("World Editor was closed or reloaded.");
  setState("disconnected");
}
export const getEditorState=()=>state;
export const isEditorBooted=()=>booted;
export const getWorldRevision=()=>worldRevision;
/** Opening/importing an explicitly chosen world overrides recovery of a previous draft. */
export function skipEditorRecoveryOnce():void {skipRecovery=true;}
export function consumeEditorRecoverySkip():boolean {const result=skipRecovery;skipRecovery=false;return result;}
export const getWorldSummary=()=>world;
export function subscribeEditor(fn:Listener):()=>void {listeners.add(fn);return()=>listeners.delete(fn);}

export function waitUntilReady(timeoutMs=120000):Promise<void> {
  if(state==="ready")return Promise.resolve();
  return new Promise((resolve,reject)=>{
    const stop=subscribeEditor(()=>{if(state==="ready"){clearTimeout(timer);stop();resolve();}});
    const timer=setTimeout(()=>{stop();reject(new Error("World Editor did not become ready. Check the embedded build and reload."));},timeoutMs);
  });
}
/**
 * This is stronger than the protocol "ready": the map graph, layers, and
 * native import handlers have completed the editor's startup sequence.
 */
export function waitForWorldRevision(since:number,timeoutMs=90000):Promise<WorldSummary> {
  if(worldRevision>since && world)return Promise.resolve(world);
  return new Promise((resolve,reject)=>{
    let timer:ReturnType<typeof setTimeout>;
    const stop=subscribeEditor(()=>{
      if(worldRevision>since && world){clearTimeout(timer);stop();resolve(world);}
      else if(state==="disconnected"){clearTimeout(timer);stop();reject(new Error("World Editor disconnected while loading the map."));}
    });
    timer=setTimeout(()=>{stop();reject(new Error("Azgaar did not confirm the world load. Check its dialogs for import errors."));},timeoutMs);
  });
}
export async function importMapAndWait(file:Blob,name:string):Promise<WorldSummary> {
  await waitUntilBooted();
  const revision=worldRevision;
  await importMap(file,name);
  return waitForWorldRevision(revision);
}
export function waitUntilBooted(timeoutMs=120000):Promise<void> {
  if(booted&&state==="ready")return Promise.resolve();
  return new Promise((resolve,reject)=>{
    let timer:ReturnType<typeof setTimeout>;
    const stop=subscribeEditor(()=>{
      if(booted&&state==="ready"){clearTimeout(timer);stop();resolve();}
      else if(state==="disconnected"){clearTimeout(timer);stop();reject(new Error("The World Editor was closed before starting."));}
    });
    timer=setTimeout(()=>{stop();reject(new Error("Azgaar did not finish loading. Check the editor window."));},timeoutMs);
  });
}
export async function request<T>(name:Command,payload?:unknown):Promise<T> {
  await waitUntilReady();
  const frame=currentFrame;
  if(!frame?.contentWindow||state!=="ready")throw new Error("World Editor is unavailable.");
  return new Promise<T>((resolve,reject)=>{
    const id="ko-"+(++serial);
    const timeout=setTimeout(()=>{
      pending.delete(id);
      reject(new Error("The World Editor took too long to respond to "+name+"."));
    },120000);
    pending.set(id,{resolve:value=>resolve(value as T),reject,timeout});
    frame.contentWindow!.postMessage({
      protocol:BRIDGE_PROTOCOL,version:BRIDGE_VERSION,kind:"command",id,name,payload
    },location.origin);
  });
}
export async function importMap(file:Blob,name:string):Promise<void> {
  if(!/\.(map|gz)$/i.test(name))throw new Error("Choose an Azgaar .map or .gz project.");
  if(!file.size||file.size>100*1024*1024)throw new Error("Map file must be between 1 byte and 100 MB.");
  await waitUntilBooted();
  const result=await request<{accepted:boolean}>("import-map",{file,name});
  if(!result?.accepted)throw new Error("World Editor did not accept the map.");
  // Importing is asynchronous: only world-changed confirms actual loading.
}
export async function snapshot():Promise<WorldSnapshot> {
  const result=await request<WorldSnapshot>("snapshot");
  if(!result||typeof result.mapText!=="string"||!isSummary(result.summary))throw new Error("Invalid world snapshot response.");
  return result;
}
export async function captureWorld():Promise<WorldCapture> {
  await waitUntilBooted();
  const result=await request<WorldCapture>("capture");
  if(!result||typeof result.mapText!=="string"||!isSummary(result.summary)||
     !(result.preview instanceof Blob)||result.preview.size===0)throw new Error("Invalid Atlas capture response.");
  return result;
}
export async function generateNewMap():Promise<void> {
  await waitUntilBooted();
  await request("new-map");
}
