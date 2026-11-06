import {icon} from "../ui/icons.js";
import {registerApp,type Context} from "./registry.js";
import {
  captureWorld,consumeEditorRecoverySkip,connectEditor,getEditorState,getWorldRevision,
  getWorldSummary,importMapAndWait,request,snapshot,subscribeEditor,waitUntilBooted
} from "../integration/azgaar.js";
import {
  loadEditorRecovery,loadWorldSlot,publishActiveWorld,saveEditorDraft
} from "../world/current.js";
import {downloadWorld,fileLabel,saveWorld} from "../world/library.js";

function worldEditor(host:HTMLElement,ctx:Context):()=>void {
  host.className="world-editor-app";
  const toolbar=document.createElement("div");toolbar.className="world-editor-toolbar";
  const title=document.createElement("div");title.className="world-editor-title";
  title.innerHTML=icon("globe",18)+'<div><strong>World Editor</strong><small>AZGAAR FANTASY MAP GENERATOR · FULL EDITION</small></div>';
  const status=document.createElement("span");status.className="world-editor-status";
  const buttons=document.createElement("div");buttons.className="world-editor-buttons";
  const input=document.createElement("input");input.type="file";input.accept=".map,.gz";input.hidden=true;
  const workspace=document.createElement("div");workspace.className="world-editor-frame-wrap";
  const iframe=document.createElement("iframe");
  iframe.title="Azgaar's Fantasy Map Generator — current editable world";
  iframe.className="world-editor-frame";iframe.loading="eager";
  iframe.allow="fullscreen; clipboard-read; clipboard-write";
  const loading=document.createElement("div");loading.className="world-editor-loading";
  loading.innerHTML=icon("globe",27)+'<strong>Preparing your world…</strong><span>Loading Azgaar and checking for your previous editable map.</span>';
  workspace.append(iframe,loading);toolbar.append(title,status,buttons,input);
  host.append(toolbar,workspace);

  let disposed=false,parked=false,initializing=true;
  let activeMapId:number|null=null,activeSeed:string|null=null;
  let activeName:string|null=null;
  let latestErrorAt=0;
  let autoSnapshotTimer:ReturnType<typeof setTimeout>|null=null;
  let lastWorldRevision=0;
  let workQueue:Promise<void>=Promise.resolve();

  const detach=connectEditor(iframe);
  function linked():boolean {
    const s=getWorldSummary();
    return activeSeed!==null&&s?.seed===activeSeed&&s?.mapId===activeMapId;
  }
  function renderStatus():void {
    if(disposed)return;
    const state=getEditorState(),summary=getWorldSummary();
    status.dataset.state=state;
    status.textContent=initializing?"RESTORING WORLD":
      state==="ready"?(summary?(linked()?"ATLAS LINKED · ":"SEED ")+summary.seed:"EDITOR READY"):
      state==="connecting"?"CONNECTING":"OFFLINE";
    status.title=summary?summary.settlements+" settlements · "+summary.states+" states · "+summary.cells+" map cells":"";
    loading.hidden=state==="ready"&&!initializing;
  }
  const unsubscribe=subscribeEditor(()=>{
    if(activeSeed!==null&&!linked()){activeSeed=null;activeMapId=null;activeName=null;}
    const revision=getWorldRevision();
    if(revision>lastWorldRevision){
      lastWorldRevision=revision;
      // A fresh generation or a successful native file load is safe to
      // checkpoint as soon as Azgaar finishes its own registration pipeline.
      if(!initializing&&!parked){
        if(autoSnapshotTimer)clearTimeout(autoSnapshotTimer);
        autoSnapshotTimer=setTimeout(()=>{void serial(saveDraft).catch(notifyError);},1800);
      }
    }
    renderStatus();
  });
  function button(label:string,graphic:string,fn:()=>void,primary=false):HTMLButtonElement {
    const b=document.createElement("button");b.type="button";
    b.className="editor-button"+(primary?" editor-primary":"");
    b.innerHTML=icon(graphic,15)+'<span></span>';
    b.querySelector("span")!.textContent=label;
    b.addEventListener("click",fn);return b;
  }
  function notifyError(error:unknown):void {
    if(disposed)return;
    ctx.toast(error instanceof Error?error.message:String(error));
  }
  function serial<T>(operation:()=>Promise<T>):Promise<T> {
    const result=workQueue.then(operation);
    workQueue=result.then(()=>{},()=>{});
    return result;
  }
  async function initializeEditor():Promise<void> {
    try {
      await waitUntilBooted();
      const before=getWorldRevision();
      const previous=await loadEditorRecovery();
      // An explicit World Hub or Atlas import always overrides recovery.
      if(consumeEditorRecoverySkip()||getWorldRevision()!==before||!previous)return;
      const native=new Blob([previous.mapText],{type:"text/plain"});
      await importMapAndWait(native,previous.name+".map");
      const active=await loadWorldSlot("active");
      if(active?.summary.mapId===previous.summary.mapId&&active.summary.seed===previous.summary.seed){
        activeMapId=previous.summary.mapId;activeSeed=previous.summary.seed;activeName=active.name;
      }
      if(!disposed)ctx.toast("Restored your previous editable world.");
    }catch(error){
      // Missing or corrupt browser data must not make the full editor unusable.
      notifyError("Workspace restore: "+(error instanceof Error?error.message:String(error)));
    }finally {initializing=false;renderStatus();}
  }
  const startup=initializeEditor();
  async function saveDraft():Promise<void> {
    if(initializing)await startup;
    if(getEditorState()!=="ready")return;
    const current=await snapshot();
    const name=activeName||"World "+current.summary.seed;
    await saveEditorDraft(current,name);
  }
  async function publish(openAtlas=false):Promise<void> {
    if(initializing)await startup;
    if(getEditorState()!=="ready")throw new Error("World Editor is not connected.");
    const capture=await captureWorld();
    const active=await loadWorldSlot("active");
    if(active&&(active.summary.mapId!==capture.summary.mapId||active.summary.seed!==capture.summary.seed)){
      if(!confirm("Set this map as the active World Atlas? It will replace the previously displayed world, but its original .map backups are unaffected."))return;
    }
    const name=active?.summary.mapId===capture.summary.mapId&&active.summary.seed===capture.summary.seed
      ?active.name:"World "+capture.summary.seed;
    await publishActiveWorld(capture,name);
    activeMapId=capture.summary.mapId;activeSeed=capture.summary.seed;activeName=name;
    renderStatus();
    ctx.toast("The active World Atlas now displays this exact map.");
    if(openAtlas)ctx.open("atlas");
  }
  function attempt(task:()=>Promise<unknown>):void {
    void serial(task).catch(notifyError);
  }
  buttons.append(
    button("Send to Atlas","globe",()=>attempt(()=>publish(true)),true),
    button("New Map","plus",()=>attempt(async()=>{
      await startup;
      await request("new-map");ctx.toast("Use Azgaar's dialog to confirm world regeneration.");
    })),
    button("Import","upload",()=>input.click()),
    button("Save to Library","save",()=>attempt(async()=>{
      await startup;
      const summary=getWorldSummary();
      const suggested=summary?.seed?"World "+summary.seed:"My Azgaar World";
      const name=window.prompt("Name the saved world project:",suggested);
      if(name===null)return;
      const current=await snapshot();
      const fileName=(name.trim()||suggested).replace(/[<>:"/\\|?*\u0000-\u001f]/g,"_").slice(0,96)+".map";
      await saveWorld(name,new Blob([current.mapText],{type:"text/plain"}),fileName,"captured",current.summary);
      window.dispatchEvent(new Event("kingdomos:library-changed"));
      ctx.toast("Editable .map saved to the World Library.");
    })),
    button("Export .map","download",()=>attempt(async()=>{
      await startup;
      const current=await snapshot();
      const fileName="KingdomOS-"+(current.summary.seed||"world").replace(/[^a-z0-9-_]/gi,"").slice(0,70)+".map";
      downloadWorld({blob:new Blob([current.mapText],{type:"text/plain"}),fileName});
    })),
    button("World Hub","map",()=>ctx.open("world-hub"))
  );
  input.addEventListener("change",()=>{
    const file=input.files?.[0];input.value="";
    if(!file)return;
    if(!/\.(?:map|gz)$/i.test(file.name)||file.size===0||file.size>100*1024*1024){
      ctx.toast("Choose a native Azgaar .map or .gz file under 100 MB.");return;
    }
    if(!confirm("Replace the editor's current map with this import? Save any changes you want to keep first."))return;
    attempt(async()=>{
      await startup;
      try {
        await saveWorld(fileLabel(file.name),file,file.name,"imported");
        window.dispatchEvent(new Event("kingdomos:library-changed"));
      }catch(error){notifyError("Could not back up import locally: "+(error instanceof Error?error.message:String(error)));}
      await importMapAndWait(file,file.name);
      await saveDraft();
      ctx.toast("Native Azgaar map loaded. Use Send to Atlas when ready.");
    });
  });
  // Closing hides the editor but keeps its iframe alive in the desktop.
  // Save to IndexedDB as extra protection against browser refresh/restart.
  const onPark=()=>{
    parked=true;
    attempt(async()=>{
      await startup;
      if(linked())await publish(false);
      else await saveDraft();
    });
  };
  const onResume=()=>{
    parked=false;
    // Recompute the embedded viewport after being hidden.
    attempt(async()=>{await startup;await request("fit");});
  };
  host.closest(".os-window")?.addEventListener("kingdomos:window-parked",onPark);
  host.closest(".os-window")?.addEventListener("kingdomos:window-resumed",onResume);
  const timer=setInterval(()=>{
    if(disposed||parked||initializing||getEditorState()!=="ready")return;
    void serial(saveDraft).catch(error=>{
      // Don't spam repeated quota warnings while the user is drawing.
      if(Date.now()-latestErrorAt>120000){
        latestErrorAt=Date.now();notifyError("Workspace autosave: "+(error instanceof Error?error.message:String(error)));
      }
    });
  },60000);
  iframe.addEventListener("error",()=>{
    if(disposed)return;
    loading.hidden=false;loading.querySelector("strong")!.textContent="Editor failed to load";
    loading.querySelector("span")!.textContent="Reload KingdomOS or check the deployed Azgaar assets.";
  });
  renderStatus();
  return ()=>{
    disposed=true;clearInterval(timer);if(autoSnapshotTimer)clearTimeout(autoSnapshotTimer);unsubscribe();detach();
    host.closest(".os-window")?.removeEventListener("kingdomos:window-parked",onPark);
    host.closest(".os-window")?.removeEventListener("kingdomos:window-resumed",onResume);
    iframe.src="about:blank";
  };
}

registerApp({
  id:"world-editor",title:"World Editor",icon:"globe",
  description:"Complete Azgaar map generator · current editable world",
  width:1200,height:800,maximizeOnOpen:true,keepAliveOnClose:true,
  render:worldEditor
});
