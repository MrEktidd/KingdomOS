import { icon } from "../ui/icons.js";
import { registerApp, type Context } from "./registry.js";
import {actionButton,confirmAction} from "../ui/components.js";
import { getEditorState, getWorldSummary, importMapAndWait, generateNewMap, skipEditorRecoveryOnce, subscribeEditor, waitUntilBooted } from "../integration/azgaar.js";
import { deleteWorld, downloadWorld, fileLabel, listWorlds, saveWorld, type WorldEntry } from "../world/library.js";

function control(label:string,graphic:string,onclick:()=>void,primary=false):HTMLButtonElement {
  return actionButton({label,icon:graphic,onClick:onclick,tone:primary?"primary":"default"});
}
function actionCard(graphic:string,title:string,description:string,buttonText:string,onclick:()=>void):HTMLElement {
  const card=document.createElement("div");card.className="world-hub-card";
  const mark=document.createElement("div");mark.className="world-hub-icon";mark.innerHTML=icon(graphic,23);
  const heading=document.createElement("h3");heading.textContent=title;
  const detail=document.createElement("p");detail.textContent=description;
  card.append(mark,heading,detail,control(buttonText,"arrow",onclick,true));return card;
}
function simpleText(parent:HTMLElement,cls:string,text:string):HTMLElement {
  const el=document.createElement("span");el.className=cls;el.textContent=text;parent.append(el);return el;
}
function worldHub(host:HTMLElement,ctx:Context):()=>void {
  host.className="world-hub-app";
  const header=document.createElement("header");header.className="world-hub-head";
  header.innerHTML='<span class="eyebrow">WORLD OPERATIONS / KINGDOMOS</span><h1>Shape the world.</h1><p>Create a new map, open Azgaar’s complete editor, or continue a project saved to your local World Library.</p>';
  const actions=document.createElement("section");actions.className="world-hub-actions";
  const section=document.createElement("section");section.className="world-library";
  const libraryHeading=document.createElement("div");libraryHeading.className="world-library-heading";
  libraryHeading.innerHTML='<div><span class="eyebrow">YOUR WORKSPACE</span><h2>World Library</h2></div>';
  const refreshButton=control("Refresh","refresh-cw",()=>void refresh());libraryHeading.append(refreshButton);
  const list=document.createElement("div");list.className="world-library-list";section.append(libraryHeading,list);
  const footer=document.createElement("div");footer.className="world-hub-foot";
  footer.innerHTML=icon("info",16)+' <span>The World Editor has Send to Atlas for publishing the current map. Saved library projects remain local to this browser; export .map backups. Simulation and frontier presets are still in development.</span>';
  const chooser=document.createElement("input");chooser.type="file";chooser.accept=".map,.gz";chooser.hidden=true;
  actions.append(
    actionCard("globe","Open World Editor","Freely edit geography, states, cultures, armies and more. Use Send to Atlas when your world is ready.","Launch full editor",()=>ctx.open("world-editor")),
    actionCard("spark","Generate a World","Create a new procedural world with the original generator’s full controls.","Generate map",()=>{
      void (async()=>{
        const connected=getEditorState()==="ready";
        if(connected&&!await confirmAction("Generate a new world?","Azgaar will create a new map. Save any editor changes you want to preserve before continuing."))return;
        if(!connected)skipEditorRecoveryOnce();
        ctx.open("world-editor");
        try{
          await waitUntilBooted();
          await generateNewMap();
        }catch(error){ctx.toast(error instanceof Error?error.message:String(error),"error");}
      })();
    }),
    actionCard("upload","Import Existing World","Load a native Azgaar .map or .gz file into the editor, preserving its source project.","Choose file",()=>chooser.click())
  );
  chooser.addEventListener("change",()=>{
    const file=chooser.files?.[0];
    chooser.value="";if(!file)return;
    void importFile(file);
  });
  host.append(header,actions,section,footer,chooser);
  async function importFile(file:File):Promise<void> {
    if(!/\.(map|gz)$/i.test(file.name)||!file.size||file.size>100*1024*1024){ctx.toast("Choose a native .map or .gz file smaller than 100 MB.");return;}
    if(getEditorState()==="ready"&&!await confirmAction("Import world?","Importing this project will replace the current editor map. Save your current work first if needed."))return;
    // Preserve the original bytes even if Azgaar later migrates the loaded format.
    try {
      await saveWorld(fileLabel(file.name),file,file.name,"imported");
      window.dispatchEvent(new Event("kingdomos:library-changed"));
    }catch(error){
      ctx.toast("Could not store original locally: "+(error instanceof Error?error.message:String(error)),"warning");
      // Saving a safety copy is optional; the native file remains on the user's machine.
    }
    if(getEditorState()!=="ready")skipEditorRecoveryOnce();
    ctx.open("world-editor");
    try{
      await importMapAndWait(file,file.name);
      ctx.toast("Import complete. Use Send to Atlas to publish this world.","success");
    }catch(error){ctx.toast(error instanceof Error?error.message:String(error),"error");}
  }
  let disposed=false;
  async function refresh():Promise<void> {
    list.replaceChildren();
    simpleText(list,"world-library-loading","Loading saved worlds…");
    try {
      const items=await listWorlds();
      if(disposed)return;
      list.replaceChildren();
      if(!items.length){
        const empty=document.createElement("div");empty.className="world-library-empty";
        empty.innerHTML=icon("map",28)+'<strong>No saved worlds yet</strong><p>Import an existing project or capture a map from the World Editor to build your library.</p>';
        list.append(empty);return;
      }
      for(const entry of items)list.append(worldRow(entry));
    }catch(error){
      if(disposed)return;
      list.replaceChildren();
      simpleText(list,"world-library-error","World Library unavailable: "+(error instanceof Error?error.message:String(error)));
    }
  }
  function worldRow(entry:WorldEntry):HTMLElement {
    const row=document.createElement("div");row.className="world-library-row";
    const iconBox=document.createElement("div");iconBox.className="world-library-symbol";iconBox.innerHTML=icon("map",20);
    const body=document.createElement("div");body.className="world-library-copy";
    const name=document.createElement("strong");name.textContent=entry.name;
    const meta=document.createElement("small");
    const bits=[entry.source==="imported"?"Original import":"Editor snapshot",new Date(entry.createdAt).toLocaleDateString(),(entry.bytes/1024/1024).toFixed(1)+" MB"];
    if(entry.summary?.seed)bits.push("Seed "+entry.summary.seed);
    meta.textContent=bits.join("  ·  ");
    body.append(name,meta);
    const controls=document.createElement("div");controls.className="world-library-buttons";
    controls.append(control("Open","arrow",()=>{
      void (async()=>{
        if(getEditorState()==="ready"&&!await confirmAction("Open saved world?","This will replace the map currently open in Azgaar. Save your editor changes first if needed."))return;
        if(getEditorState()!=="ready")skipEditorRecoveryOnce();
        ctx.open("world-editor");
        try{
          await importMapAndWait(entry.blob,entry.fileName);
          ctx.toast("Loaded "+entry.name+". Select Send to Atlas to publish it.","success");
        }catch(e){ctx.toast(e instanceof Error?e.message:String(e),"error");}
      })();
    }),control("Export","download",()=>downloadWorld(entry)),control("Delete","close",()=>{
      void (async()=>{
        if(!await confirmAction("Delete saved project?","Remove “"+entry.name+"” from this browser's World Library? Export a backup first if needed.",true))return;
        try{
          await deleteWorld(entry.id);
          ctx.toast("Local world entry deleted.","success");
          window.dispatchEvent(new Event("kingdomos:library-changed"));
        }catch(e){ctx.toast(e instanceof Error?e.message:String(e),"error");}
      })();
    }));
    row.append(iconBox,body,controls);
    return row;
  }
  const onLibrary=()=>void refresh();
  window.addEventListener("kingdomos:library-changed",onLibrary);
  const unsubscribe=subscribeEditor(()=>{
    const summary=getWorldSummary();
    header.dataset.editorState=getEditorState();
    header.title=summary?"Active editor map: "+summary.seed:"No editor map currently loaded";
  });
  void refresh();
  return ()=>{disposed=true;window.removeEventListener("kingdomos:library-changed",onLibrary);unsubscribe();};
}

registerApp({
  id:"world-hub",
  title:"World Hub",
  icon:"map",
  description:"Create, import and manage worlds",
  width:1010,height:680,
  render:worldHub
});
