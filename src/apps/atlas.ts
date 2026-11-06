import {icon} from "../ui/icons.js";
import {registerApp,type Context} from "./registry.js";
import {captureWorld,getEditorState,getWorldSummary,importMapAndWait,skipEditorRecoveryOnce} from "../integration/azgaar.js";
import {loadWorldSlot,publishActiveWorld,subscribeCurrentWorld,worldMapBlob,type StoredWorld} from "../world/current.js";

/** An actual authored map, rendered as an inert image from Azgaar's full SVG export. */
function mountAtlas(host:HTMLElement,ctx:Context):()=>void {
  host.className="atlas-app atlas-real";
  const header=document.createElement("div");header.className="atlas-header";
  const title=document.createElement("div");title.className="atlas-title";
  title.innerHTML=icon("globe",19)+'<div><b>World Atlas</b><span>ACTIVE AUTHORING WORLD · MAP VIEW</span></div>';
  const controls=document.createElement("div");controls.className="atlas-controls";
  const viewport=document.createElement("div");viewport.className="atlas-viewport atlas-real-viewport";
  const footer=document.createElement("div");footer.className="atlas-status atlas-real-status";
  host.append(header,viewport,footer);
  header.append(title,controls);

  let active:StoredWorld|null=null;
  let imageURL:string|null=null;
  let zoom=1;
  let disposed=false,renderNumber=0;
  const mkButton=(label:string,graphic:string,fn:()=>void):HTMLButtonElement=>{
    const b=document.createElement("button");
    b.type="button";b.className="atlas-command";
    b.innerHTML=icon(graphic,15)+'<span></span>';
    b.querySelector("span")!.textContent=label;
    b.addEventListener("click",fn);return b;
  };
  const zoomLabel=document.createElement("span");zoomLabel.className="atlas-zoom-label";zoomLabel.textContent="100%";
  function updateZoom(change:number):void {
    zoom=Math.max(.5,Math.min(4,Math.round(change*10)/10));
    zoomLabel.textContent=Math.round(zoom*100)+"%";
    const img=viewport.querySelector<HTMLImageElement>(".atlas-live-image");
    if(img)img.style.transform="scale("+zoom+")";
  }
  async function updateFromEditor():Promise<void> {
    if(getEditorState()!=="ready"){ctx.toast("Open the World Editor first, then send its map to the Atlas.");ctx.open("world-editor");return;}
    try{
      const existing=await loadWorldSlot("active");
      const current=await captureWorld();
      if(existing && (existing.summary.mapId!==current.summary.mapId||existing.summary.seed!==current.summary.seed)
         && !confirm("Replace the active Atlas world with the map currently open in Azgaar?"))return;
      const name=(existing&&existing.summary.mapId===current.summary.mapId)
        ?existing.name:"World "+current.summary.seed;
      await publishActiveWorld(current,name);
      ctx.toast("Current Azgaar map is now the active Atlas world.");
    }catch(error){ctx.toast(error instanceof Error?error.message:String(error));}
  }
  function editWorld():void {
    const world=active;
    if(!world){ctx.open("world-hub");return;}
    const open=getWorldSummary();
    // Do not overwrite unsaved in-memory edits when the same world is already open.
    if(getEditorState()==="ready"&&open?.mapId===world.summary.mapId&&open.seed===world.summary.seed){
      ctx.open("world-editor");return;
    }
    if(getEditorState()==="ready"&&!confirm("Load the Atlas world into the editor? The current unsaved editor map may be replaced."))return;
    if(getEditorState()!=="ready")skipEditorRecoveryOnce();
    ctx.open("world-editor");
    void importMapAndWait(worldMapBlob(world),world.name+".map")
      .then(()=>ctx.toast("Active Atlas world loaded into the editor."))
      .catch(error=>ctx.toast(error instanceof Error?error.message:String(error)));
  }
  controls.append(
    mkButton("Edit world","pencil",editWorld),
    mkButton("Update Atlas","refresh-cw",()=>void updateFromEditor()),
    mkButton("World Hub","map",()=>ctx.open("world-hub"))
  );
  const minus=mkButton("","minus",()=>updateZoom(zoom-.2));minus.title="Zoom out";minus.setAttribute("aria-label","Zoom out");
  const plus=mkButton("","plus",()=>updateZoom(zoom+.2));plus.title="Zoom in";plus.setAttribute("aria-label","Zoom in");
  const reset=mkButton("Fit","maximize",()=>updateZoom(1));reset.title="Fit map";
  controls.append(minus,zoomLabel,plus,reset);

  async function refresh():Promise<void> {
    const num=++renderNumber;
    let world:StoredWorld|null;
    try{world=await loadWorldSlot("active");}
    catch(error){
      if(disposed||num!==renderNumber)return;
      viewport.replaceChildren();footer.replaceChildren();
      const message=document.createElement("div");message.className="atlas-empty";
      message.textContent="Unable to read the active Atlas world: "+(error instanceof Error?error.message:String(error));
      viewport.append(message);return;
    }
    if(disposed||num!==renderNumber)return;
    active=world;viewport.replaceChildren();footer.replaceChildren();
    if(imageURL){URL.revokeObjectURL(imageURL);imageURL=null;}
    if(!world){
      const empty=document.createElement("div");empty.className="atlas-empty";
      const symbol=document.createElement("div");symbol.className="atlas-empty-symbol";symbol.innerHTML=icon("map",42);
      const heading=document.createElement("h2");heading.textContent="Your Atlas is awaiting a world.";
      const p=document.createElement("p");
      p.textContent="Create or import a map in Azgaar's World Editor, then select “Send to Atlas.” Your real map will appear here and remain available after reloading KingdomOS.";
      empty.append(symbol,heading,p,mkButton("Open World Editor","globe",()=>ctx.open("world-editor")),mkButton("World Hub","map",()=>ctx.open("world-hub")));
      viewport.append(empty);
      footer.textContent="NO ACTIVE WORLD · OPEN AZGAAR TO BEGIN";
      return;
    }
    zoom=1;zoomLabel.textContent="100%";
    if(world.preview instanceof Blob && world.preview.size){
      imageURL=URL.createObjectURL(world.preview);
      const img=document.createElement("img");img.className="atlas-live-image";
      img.alt="Map of "+world.name+", exported from Azgaar's Fantasy Map Generator";
      img.src=imageURL;img.draggable=false;
      img.addEventListener("error",()=>ctx.toast("The Atlas image failed to render. Try updating it from the World Editor."));
      viewport.append(img);
    }else{
      const failure=document.createElement("div");failure.className="atlas-empty";
      failure.textContent="An active world is saved, but its illustration is missing. Reopen it in the editor and select Update Atlas.";
      viewport.append(failure);
    }
    const info=document.createElement("div");info.className="atlas-current-label";
    const nm=document.createElement("strong");nm.textContent=world.name;
    const detail=document.createElement("span");
    detail.textContent="SEED "+world.summary.seed+" · "+world.summary.states+" STATES · "+world.summary.settlements+" SETTLEMENTS";
    info.append(nm,detail);viewport.append(info);
    const left=document.createElement("span");left.innerHTML=icon("check",14);
    left.append(document.createTextNode(" ACTIVE WORLD · SAVED LOCALLY"));
    const right=document.createElement("span");right.textContent="SOURCE: AZGAAR · "+world.summary.width+" × "+world.summary.height;
    footer.append(left,right);
  }
  const stop=subscribeCurrentWorld(()=>void refresh());
  void refresh();
  return ()=>{
    disposed=true;stop();
    if(imageURL)URL.revokeObjectURL(imageURL);
  };
}

registerApp({
  id:"atlas",title:"World Atlas",icon:"globe",description:"View the active Azgaar world",
  width:900,height:640,render:mountAtlas
});
