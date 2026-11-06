import {icon} from "../ui/icons.js";
import {actionButton,actionMenu,confirmAction,disposeActionMenu,promptText,statusChip,toolbarGroup} from "../ui/components.js";
import {cameraTransform,fitCamera,panBy,zoomAt,type MapCamera} from "../ui/map-camera.js";
import {registerApp,type Context} from "./registry.js";
import {captureWorld,getEditorState,getWorldSummary,importMapAndWait,skipEditorRecoveryOnce} from "../integration/azgaar.js";
import {loadWorldSlot,publishActiveWorld,renameActiveWorld,subscribeCurrentWorld,worldMapBlob,type StoredWorld} from "../world/current.js";

/** The real Atlas is an intentionally inert visual preview of the active native Azgaar project. */
function mountAtlas(host:HTMLElement,ctx:Context):()=>void {
  host.className="atlas-app atlas-real atlas-v2";
  const top=document.createElement("header");top.className="atlas-v2-header";
  const project=document.createElement("div");project.className="atlas-v2-project";
  const eyebrow=document.createElement("span");eyebrow.className="eyebrow";eyebrow.textContent="ACTIVE WORLD / CARTOGRAPHY";
  const heading=document.createElement("strong");heading.className="atlas-v2-project-name";heading.textContent="No active world";
  project.append(eyebrow,heading);

  const buttons=document.createElement("div");buttons.className="atlas-v2-toolbar";
  const viewport=document.createElement("div");viewport.className="atlas-viewport atlas-v2-viewport";
  viewport.tabIndex=0;
  viewport.setAttribute("role","region");
  viewport.setAttribute("aria-label","Interactive world map: drag to pan, scroll to zoom, press 0 to fit");
  const stage=document.createElement("div");stage.className="atlas-v2-map-stage";
  const infoPanel=document.createElement("aside");infoPanel.className="atlas-v2-information";infoPanel.hidden=true;
  const footer=document.createElement("div");footer.className="atlas-v2-footer";
  const leftFooter=document.createElement("span");leftFooter.className="atlas-v2-footer-state";
  const rightFooter=document.createElement("span");rightFooter.className="atlas-v2-footer-details";
  footer.append(leftFooter,rightFooter);viewport.append(stage,infoPanel);
  top.append(project,buttons);host.append(top,viewport,footer);
  let current:StoredWorld|null=null;
  let imageUrl:string|null=null;
  let camera:MapCamera=fitCamera();
  let disposed=false,requestNumber=0,busy=false,pointer:number|null=null;
  let pointerX=0,pointerY=0;
  const zoomReadout=document.createElement("span");zoomReadout.className="atlas-v2-zoom";
  zoomReadout.setAttribute("aria-live","off");

  function paintCamera():void {
    stage.style.transform=cameraTransform(camera);
    zoomReadout.textContent=Math.round(camera.zoom*100)+"%";
  }
  function zoom(factor:number,clientX?:number,clientY?:number):void {
    const rect=viewport.getBoundingClientRect();
    const x=clientX===undefined?0:clientX-(rect.left+rect.width/2);
    const y=clientY===undefined?0:clientY-(rect.top+rect.height/2);
    camera=zoomAt(camera,camera.zoom*factor,x,y);
    paintCamera();
  }
  function fit():void {camera=fitCamera();paintCamera();}
  function setBusy(value:boolean):void {
    busy=value;syncButton.disabled=value;syncButton.setAttribute("aria-busy",String(value));
    syncButton.querySelector("span")!.textContent=value?"Updating…":"Update Atlas";
  }
  async function publish():Promise<void> {
    if(busy)return;
    if(getEditorState()!=="ready"){
      ctx.toast("Open the World Editor first. The Atlas can only sync a loaded Azgaar map.");
      ctx.open("world-editor");return;
    }
    setBusy(true);
    try {
      const rendered=await captureWorld();
      const before=await loadWorldSlot("active");
      if(before&&(before.summary.mapId!==rendered.summary.mapId||before.summary.seed!==rendered.summary.seed)){
        if(!await confirmAction("Replace active world?","This will publish the map currently open in Azgaar. The existing Atlas snapshot will be replaced, but exported and library files remain untouched."))return;
      }
      const name=before?.summary.mapId===rendered.summary.mapId&&before.summary.seed===rendered.summary.seed
        ?before.name:"World "+rendered.summary.seed;
      await publishActiveWorld(rendered,name);
      ctx.toast("Atlas updated with your current editable Azgaar world.");
    }catch(error){ctx.toast("Atlas update failed: "+(error instanceof Error?error.message:String(error)));}
    finally{setBusy(false);}
  }
  async function edit():Promise<void> {
    const world=current;
    if(!world){ctx.open("world-hub");return;}
    const open=getWorldSummary();
    if(getEditorState()==="ready"&&open?.mapId===world.summary.mapId&&open.seed===world.summary.seed){
      ctx.open("world-editor");return;
    }
    if(getEditorState()==="ready"&&!await confirmAction("Open Atlas world for editing?","This loads the Atlas's published .map into the World Editor and replaces the editor's current map. Make a backup of any unsaved editor changes first."))return;
    if(getEditorState()!=="ready")skipEditorRecoveryOnce();
    ctx.open("world-editor");
    try {
      await importMapAndWait(worldMapBlob(world),world.name+".map");
      ctx.toast("The active Atlas world is ready to edit.");
    } catch(error){ctx.toast("Unable to open active world: "+(error instanceof Error?error.message:String(error)));}
  }
  async function rename():Promise<void> {
    const world=current;
    if(!world){ctx.toast("Publish a world before renaming it.");return;}
    const proposed=await promptText("Rename world","This changes the name in KingdomOS without editing the native Azgaar project.",world.name,100);
    if(proposed===null||proposed===world.name)return;
    try{await renameActiveWorld(proposed);ctx.toast("World renamed to "+proposed+".");}
    catch(error){ctx.toast("Could not rename world: "+(error instanceof Error?error.message:String(error)));}
  }
  function exportNative():void {
    const world=current;
    if(!world){ctx.toast("There is no active world to export.");return;}
    const blob=worldMapBlob(world);
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;a.download=(world.name.replace(/[^a-z0-9 _-]/gi,"_").slice(0,70)||"world")+".map";
    document.body.append(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),30000);
  }
  const editButton=actionButton({label:"Edit world",icon:"pencil",tone:"primary",onClick:()=>void edit()});
  editButton.dataset.testid="atlas-edit";
  const syncButton=actionButton({label:"Update Atlas",icon:"refresh-cw",onClick:()=>void publish()});
  syncButton.dataset.testid="atlas-sync";
  const menu=actionMenu("World actions",[
    {label:"World Hub",icon:"map",onClick:()=>ctx.open("world-hub")},
    {label:"Rename world",icon:"pencil",onClick:()=>void rename()},
    {label:"Export native .map",icon:"download",onClick:exportNative}
  ]);
  menu.dataset.testid="atlas-menu";

  const minus=actionButton({label:"Zoom out",icon:"minus",iconOnly:true,onClick:()=>zoom(1/1.25)});
  const plus=actionButton({label:"Zoom in",icon:"plus",iconOnly:true,onClick:()=>zoom(1.25)});
  const fitButton=actionButton({label:"Fit to window",icon:"maximize",iconOnly:true,onClick:fit});
  const infoButton=actionButton({label:"World information",icon:"info",iconOnly:true,onClick:()=>{
    infoPanel.hidden=!infoPanel.hidden;
    infoButton.setAttribute("aria-expanded",String(!infoPanel.hidden));
  }});
  infoButton.setAttribute("aria-expanded","false");
  buttons.append(
    toolbarGroup("World operations",editButton,syncButton,menu),
    toolbarGroup("Map navigation",minus,zoomReadout,plus,fitButton),
    toolbarGroup("Information panel",infoButton)
  );

  function fillInfo(world:StoredWorld):void {
    infoPanel.replaceChildren();
    const top=document.createElement("div");top.className="atlas-v2-info-head";
    const label=document.createElement("strong");label.textContent="World information";
    const close=actionButton({label:"Close information",icon:"close",iconOnly:true,onClick:()=>{
      infoPanel.hidden=true;infoButton.setAttribute("aria-expanded","false");
    }});
    top.append(label,close);infoPanel.append(top);
    const fields:[string,string][]=[
      ["Name",world.name],
      ["Seed",world.summary.seed],
      ["States",String(world.summary.states)],
      ["Settlements",String(world.summary.settlements)],
      ["Map cells",world.summary.cells.toLocaleString()],
      ["Map size",world.summary.width+" × "+world.summary.height],
      ["Generator",world.summary.generatorVersion],
      ["Last published",new Date(world.savedAt).toLocaleString()]
    ];
    const dl=document.createElement("dl");
    for(const [name,value] of fields){
      const dt=document.createElement("dt"),dd=document.createElement("dd");
      dt.textContent=name;dd.textContent=value;dl.append(dt,dd);
    }
    infoPanel.append(dl);
    const notice=document.createElement("p");
    notice.textContent="This is a published map snapshot. Edit changes are shown here after updating the Atlas.";
    infoPanel.append(notice);
  }
  function message(text:string,title:string):void {
    const empty=document.createElement("div");empty.className="atlas-v2-empty";
    const symbol=document.createElement("div");symbol.className="atlas-v2-empty-icon";symbol.innerHTML=icon("map",36);
    const h=document.createElement("h2");h.textContent=title;
    const p=document.createElement("p");p.textContent=text;
    empty.append(symbol,h,p,actionButton({label:"Open World Editor",icon:"globe",tone:"primary",onClick:()=>ctx.open("world-editor")}));
    stage.append(empty);
  }
  async function refresh():Promise<void> {
    const id=++requestNumber;
    try {
      const world=await loadWorldSlot("active");
      if(disposed||id!==requestNumber)return;
      current=world;
      stage.replaceChildren();
      if(imageUrl){URL.revokeObjectURL(imageUrl);imageUrl=null;}
      heading.textContent=world?.name||"No active world";
      heading.title=heading.textContent;
      editButton.disabled=!world;fit();
      infoPanel.hidden=true;infoButton.setAttribute("aria-expanded","false");
      if(!world){
        message("Create or import a world in Azgaar, then choose Send to Atlas to publish it here.","Your Atlas is waiting.");
        leftFooter.replaceChildren(statusChip("No active world","warning"));
        rightFooter.textContent="OPEN WORLD EDITOR TO BEGIN";
        return;
      }
      if(world.preview instanceof Blob&&world.preview.size){
        imageUrl=URL.createObjectURL(world.preview);
        const img=document.createElement("img");img.className="atlas-v2-image";
        img.alt="Complete Azgaar map of "+world.name;
        img.src=imageUrl;img.draggable=false;
        img.addEventListener("error",()=>ctx.toast("The Atlas illustration failed to display. Try updating the map from Azgaar."));
        stage.append(img);
      }else message("Reopen this world in Azgaar and choose Update Atlas to recreate its map preview.","Map preview unavailable");
      fillInfo(world);
      leftFooter.replaceChildren(statusChip("Published world","success"));
      rightFooter.textContent=world.summary.width+" × "+world.summary.height+"  ·  SEED "+world.summary.seed;
    }catch(error){
      if(disposed||id!==requestNumber)return;
      stage.replaceChildren();
      message(error instanceof Error?error.message:String(error),"Unable to load the Atlas");
      leftFooter.replaceChildren(statusChip("Storage error","error"));
      rightFooter.textContent="WORLD STORAGE";
    }
  }
  viewport.addEventListener("pointerdown",event=>{
    if(event.button!==0||!current?.preview||!(event.target as Element).closest(".atlas-v2-map-stage")||(event.target as Element).closest("button,a,input,[role=button]"))return;
    pointer=event.pointerId;pointerX=event.clientX;pointerY=event.clientY;
    viewport.setPointerCapture(event.pointerId);
    viewport.classList.add("is-panning");
    viewport.focus({preventScroll:true});
  });
  viewport.addEventListener("pointermove",event=>{
    if(pointer!==event.pointerId)return;
    camera=panBy(camera,event.clientX-pointerX,event.clientY-pointerY);
    pointerX=event.clientX;pointerY=event.clientY;paintCamera();
  });
  const stopPan=(event:PointerEvent)=>{
    if(pointer!==event.pointerId)return;
    pointer=null;viewport.classList.remove("is-panning");
    if(viewport.hasPointerCapture(event.pointerId))viewport.releasePointerCapture(event.pointerId);
  };
  viewport.addEventListener("pointerup",stopPan);
  viewport.addEventListener("pointercancel",stopPan);
  viewport.addEventListener("wheel",event=>{
    if(!(event.target as HTMLElement).closest(".atlas-v2-map-stage"))return;
    event.preventDefault();
    zoom(event.deltaY<0?1.12:1/1.12,event.clientX,event.clientY);
  },{passive:false});
  viewport.addEventListener("keydown",event=>{
    if(event.target!==viewport)return;
    if(event.key==="0"||event.key==="Home"){event.preventDefault();fit();}
    else if(event.key==="+"||event.key==="="){event.preventDefault();zoom(1.25);}
    else if(event.key==="-"){event.preventDefault();zoom(1/1.25);}
    else if(event.key.startsWith("Arrow")){
      const offsets:{[key:string]:[number,number]}={ArrowLeft:[55,0],ArrowRight:[-55,0],ArrowUp:[0,55],ArrowDown:[0,-55]};
      const d=offsets[event.key];if(d){event.preventDefault();camera=panBy(camera,...d);paintCamera();}
    }else if(event.key==="Escape"&&!infoPanel.hidden){infoPanel.hidden=true;infoButton.setAttribute("aria-expanded","false");}
  });
  const unsub=subscribeCurrentWorld(()=>void refresh());
  void refresh();
  paintCamera();
  return ()=>{
    disposed=true;unsub();
    disposeActionMenu(menu);
    if(imageUrl)URL.revokeObjectURL(imageUrl);
  };
}
registerApp({id:"atlas",title:"World Atlas",icon:"globe",description:"Explore the active world map",width:930,height:640,render:mountAtlas});
