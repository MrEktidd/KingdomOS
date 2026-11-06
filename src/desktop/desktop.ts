import {getApps,getApp,onAppsChanged,type AppId,type Context} from "../apps/registry.js";
import {loadSession,saveSession,type Layout} from "./session.js";
import {icon} from "../ui/icons.js";

interface WindowState extends Layout {id:AppId;z:number;element:HTMLElement;previous?:Pick<Layout,"x"|"y"|"w"|"h">;dispose?:()=>void}
export function mountDesktop(root:HTMLElement):void {
 root.innerHTML='<div id="desktop" class="desktop"><div class="wallpaper"><div class="orbit one"></div><div class="orbit two"></div><div class="wallpaper-grid"></div><div class="wallpaper-letter">K<span>·</span>OS</div><div class="wallpaper-caption">A WORLD WORTH BUILDING <span>—</span> A WORLD WORTH WATCHING</div></div><header class="system-bar"><div class="system-brand">'+icon("crown",22)+'<b>KINGDOM<span>OS</span></b><small>FOUNDATION EDITION</small></div><div class="system-state"><i class="pip on"></i> COMMAND INTERFACE <span class="bar-separator">/</span> WORLD NOT LOADED</div><div class="system-tools">BUILD 0.0.2 <button data-open="appearance" aria-label="Appearance settings" title="Appearance settings">'+icon("settings",17)+'</button></div></header><aside class="dock" aria-label="Application dock"><button id="dock-menu" aria-label="Open application launcher" title="App launcher">'+icon("grid",23)+'</button><div class="dock-apps"></div><div class="dock-foot"><button data-open="appearance" aria-label="Appearance" title="Appearance">'+icon("palette",21)+'</button><button data-open="about" aria-label="About" title="About">'+icon("info",20)+'</button></div></aside><main class="workspace" id="workspace" aria-label="Desktop windows"></main><div id="launcher" class="launcher" hidden><div class="launcher-head"><b>APPLICATIONS</b><small>KINGDOMOS</small></div><label class="launcher-search"><span>SEARCH APPLICATIONS</span><input id="launcher-search" type="search" autocomplete="off" placeholder="Find an application..." aria-label="Search applications" /></label><div class="launcher-list"></div><div class="launcher-tip">CTRL + K TO TOGGLE</div></div><div id="toasts" class="toasts" aria-live="polite"></div><footer class="taskbar"><button id="taskbar-menu">'+icon("grid",18)+' <span>Applications</span></button><div class="taskbar-line"></div><div class="task-apps"></div><div class="task-end"><i class="pip on"></i> LOCAL SESSION <span>/</span> v0.0.2</div></footer></div>';
 const desktop=root.querySelector<HTMLElement>("#desktop")!,workspace=root.querySelector<HTMLElement>("#workspace")!;
 const launcher=root.querySelector<HTMLElement>("#launcher")!,launcherList=launcher.querySelector<HTMLElement>(".launcher-list")!;
 const dock=root.querySelector<HTMLElement>(".dock-apps")!,taskbar=root.querySelector<HTMLElement>(".task-apps")!,toasts=root.querySelector<HTMLElement>("#toasts")!;
 const windows=new Map<AppId,WindowState>(),session=loadSession(),layouts=session.windows;let order=10;
 const search=launcher.querySelector<HTMLInputElement>("#launcher-search")!;
 const toast=(text:string)=>{
   const d=document.createElement("div");d.className="toast";d.innerHTML=icon("info",16);
   const span=document.createElement("span");span.textContent=text;d.append(span);toasts.append(d);
   setTimeout(()=>{d.classList.add("fading");setTimeout(()=>d.remove(),300);},4200);
 };
 function store():void {
   const obj:Record<string,Layout>={};
   for(const [id,w] of windows) {
     const original=w.maximized&&w.previous?w.previous:w;
     obj[id]={x:original.x,y:original.y,w:original.w,h:original.h,minimized:w.minimized,maximized:w.maximized};
   }
   const active=[...windows.values()].filter(w=>!w.minimized).sort((a,b)=>b.z-a.z)[0]?.id??null;
   saveSession({version:2,windows:obj,open:[...windows.keys()],active});
 }
 function clamp(w:WindowState):void {
   const maxW=Math.max(290,workspace.clientWidth-18),maxH=Math.max(210,workspace.clientHeight-18);
   w.w=Math.min(maxW,Math.max(Math.min(320,maxW),w.w));
   w.h=Math.min(maxH,Math.max(210,w.h));
   w.x=Math.max(9,Math.min(w.x,Math.max(9,workspace.clientWidth-w.w-9)));
   w.y=Math.max(9,Math.min(w.y,Math.max(9,workspace.clientHeight-w.h-9)));
 }
 function display(w:WindowState):void {
   const s=w.element.style;s.left=w.x+"px";s.top=w.y+"px";s.width=w.w+"px";s.height=w.h+"px";s.zIndex=String(w.z);
   w.element.hidden=w.minimized;w.element.classList.toggle("maximized",w.maximized);
 }
 function focused(w:WindowState):void {
   w.z=++order;
   for(const other of windows.values()){other.element.classList.toggle("focused",other===w);display(other);}
   refreshTaskbar();
 }
 function refreshTaskbar():void {
   dock.replaceChildren();taskbar.replaceChildren();
   for(const app of getApps()){
     if(app.id==="about")continue;
     const b=document.createElement("button");b.type="button";b.className="dock-app"+(windows.has(app.id)?" opened":"");
     b.title=app.title;b.setAttribute("aria-label",app.title);b.innerHTML=icon(app.icon,21);
     b.addEventListener("click",()=>open(app.id));dock.append(b);
   }
   for(const w of [...windows.values()].sort((a,b)=>a.z-b.z)){
     const b=document.createElement("button"),app=getApp(w.id);b.type="button";
     b.className="task-app"+(!w.minimized&&w.element.classList.contains("focused")?" active":"");
     b.innerHTML=icon(app.icon,16)+"<span></span>";b.querySelector("span")!.textContent=app.title;
     b.addEventListener("click",()=>{
       if(!w.minimized&&w.element.classList.contains("focused")){
         w.minimized=true;w.element.classList.remove("focused");display(w);refreshTaskbar();store();
       }else open(w.id);
     });taskbar.append(b);
   }
 }
 function maximize(w:WindowState):void {
   if(w.maximized){
     if(w.previous)Object.assign(w,w.previous);w.maximized=false;clamp(w);
   }else{
     w.previous={x:w.x,y:w.y,w:w.w,h:w.h};
     w.maximized=true;w.x=9;w.y=9;w.w=Math.max(290,workspace.clientWidth-18);w.h=Math.max(210,workspace.clientHeight-18);
   }
   display(w);store();
 }
 function moveWithPointer(w:WindowState,handle:HTMLElement,resizing:boolean):void {
   handle.addEventListener("pointerdown",e=>{
     if(e.button!==0||w.maximized||(!resizing&&(e.target as HTMLElement).closest("button")))return;
     e.preventDefault();e.stopPropagation();focused(w);
     const origin={x:e.clientX,y:e.clientY,l:w.x,t:w.y,width:w.w,height:w.h};
     handle.setPointerCapture(e.pointerId);
     const move=(event:PointerEvent)=>{
       if(resizing){w.w=origin.width+event.clientX-origin.x;w.h=origin.height+event.clientY-origin.y;}
       else{w.x=origin.l+event.clientX-origin.x;w.y=origin.t+event.clientY-origin.y;}
       clamp(w);display(w);
     };
     const stop=()=>{handle.removeEventListener("pointermove",move);handle.removeEventListener("pointerup",stop);handle.removeEventListener("pointercancel",stop);store();};
     handle.addEventListener("pointermove",move);handle.addEventListener("pointerup",stop);handle.addEventListener("pointercancel",stop);
   });
 }
 function open(id:AppId,restoring=false):void {
   launcher.hidden=true;
   const existing=windows.get(id);
   if(existing){existing.minimized=false;display(existing);focused(existing);store();return;}
   const app=getApp(id),preset=layouts[id],shift=windows.size*26;
   const w:WindowState={id,x:preset?.x??(id==="overview"?650+shift:75+shift),y:preset?.y??(id==="overview"?108:65+shift),w:preset?.w??app.width,h:preset?.h??app.height,maximized:false,minimized:false,z:++order,element:document.createElement("section")};
   const element=w.element;element.className="os-window";element.setAttribute("role","dialog");element.setAttribute("aria-label",app.title);element.tabIndex=-1;
   element.innerHTML='<div class="window-bar"><div class="window-icon">'+icon(app.icon,18)+'</div><div class="window-name"><strong></strong><small>KINGDOMOS / APPLICATION</small></div><div class="window-actions"><button data-action="min" aria-label="Minimize" title="Minimize">'+icon("minus",15)+'</button><button data-action="max" aria-label="Maximize" title="Maximize">'+icon("maximize",14)+'</button><button data-action="close" aria-label="Close" title="Close">'+icon("close",16)+'</button></div></div><div class="window-body"></div><div class="resize-handle" aria-hidden="true"></div>';
   element.querySelector(".window-name strong")!.textContent=app.title;
   windows.set(id,w);workspace.append(element);clamp(w);
   element.addEventListener("pointerdown",()=>focused(w));
   element.querySelector('[data-action="min"]')!.addEventListener("click",()=>{w.minimized=true;w.element.classList.remove("focused");display(w);refreshTaskbar();store();});
   element.querySelector('[data-action="max"]')!.addEventListener("click",()=>maximize(w));
   element.querySelector('[data-action="close"]')!.addEventListener("click",()=>closeWindow(id));
   const bar=element.querySelector<HTMLElement>(".window-bar")!;
   moveWithPointer(w,bar,false);moveWithPointer(w,element.querySelector<HTMLElement>(".resize-handle")!,true);
   bar.addEventListener("dblclick",event=>{if(!(event.target as HTMLElement).closest("button"))maximize(w);});
   try {
     const cleanup=app.render(element.querySelector<HTMLElement>(".window-body")!,{open,toast});
     if(typeof cleanup==="function")w.dispose=cleanup;
   }catch(error){toast(error instanceof Error?error.message:"Failed to open application.");}
   if(!restoring&&workspace.clientWidth<650) {
     w.previous={x:w.x,y:w.y,w:w.w,h:w.h};
     w.maximized=true;w.x=9;w.y=9;w.w=Math.max(290,workspace.clientWidth-18);w.h=Math.max(210,workspace.clientHeight-18);
   }
   if(restoring&&preset?.maximized) {
     w.previous={x:w.x,y:w.y,w:w.w,h:w.h};
     w.maximized=true;w.x=9;w.y=9;w.w=Math.max(290,workspace.clientWidth-18);w.h=Math.max(210,workspace.clientHeight-18);
   }
   if(restoring&&preset?.minimized)w.minimized=true;
   display(w);
   if(!w.minimized)focused(w);
   else refreshTaskbar();
   if(!restoring)store();
 }
 function redrawLauncher():void {
   launcherList.replaceChildren();
   for(const a of getApps()){
     const b=document.createElement("button");b.className="launcher-app";b.type="button";
     b.innerHTML='<span class="launcher-icon">'+icon(a.icon,22)+'</span><span class="launcher-copy"><b></b><small></small></span>'+icon("arrow",16);
     b.querySelector(".launcher-copy b")!.textContent=a.title;
     b.querySelector(".launcher-copy small")!.textContent=a.description;
     b.dataset.search=(a.title+" "+a.description).toLowerCase();
     b.addEventListener("click",()=>open(a.id));launcherList.append(b);
   }
   filterLauncher();
 }
 function filterLauncher():void {
   const q=search.value.trim().toLowerCase();
   launcherList.querySelectorAll<HTMLElement>(".launcher-app").forEach(b=>b.hidden=!b.dataset.search?.includes(q));
 }
 function closeWindow(id:AppId):void {
   const w=windows.get(id);if(!w)return;
   w.dispose?.();windows.delete(id);w.element.remove();
   const next=[...windows.values()].filter(other=>!other.minimized).sort((a,b)=>b.z-a.z)[0];
   if(next)focused(next);else refreshTaskbar();
   store();
 }
 redrawLauncher();
 onAppsChanged(()=>{redrawLauncher();refreshTaskbar();});
 search.addEventListener("input",filterLauncher);
 search.addEventListener("keydown",e=>{
   if(e.key==="ArrowDown"){
     const first=launcherList.querySelector<HTMLButtonElement>(".launcher-app:not([hidden])");
     if(first){e.preventDefault();first.focus();}
   }
 });
 launcherList.addEventListener("keydown",e=>{
   if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;
   const entries=[...launcherList.querySelectorAll<HTMLButtonElement>(".launcher-app:not([hidden])")];
   const index=entries.indexOf(document.activeElement as HTMLButtonElement);
   if(!entries.length)return;
   e.preventDefault();
   const next=e.key==="ArrowDown"?(index+1)%entries.length:(index-1+entries.length)%entries.length;
   entries[next].focus();
 });
 const toggle=()=>{
   launcher.hidden=!launcher.hidden;
   root.querySelector("#dock-menu")?.setAttribute("aria-expanded",String(!launcher.hidden));
   root.querySelector("#taskbar-menu")?.setAttribute("aria-expanded",String(!launcher.hidden));
   if(!launcher.hidden){search.value="";filterLauncher();search.focus();}
 };
 root.querySelector("#dock-menu")!.addEventListener("click",toggle);
 root.querySelector("#taskbar-menu")!.addEventListener("click",toggle);
 root.querySelectorAll<HTMLElement>("[data-open]").forEach(b=>b.addEventListener("click",()=>open(b.dataset.open as AppId)));
 desktop.addEventListener("pointerdown",e=>{
   if(!launcher.hidden&&!(e.target as HTMLElement).closest("#launcher,#dock-menu,#taskbar-menu"))launcher.hidden=true;
 });
 window.addEventListener("keydown",e=>{
   const modifier=e.ctrlKey||e.metaKey;
   if(modifier&&!e.altKey&&e.key.toLowerCase()==="k"){e.preventDefault();toggle();return;}
   if(modifier&&e.shiftKey&&!e.altKey&&e.key.toLowerCase()==="a"){e.preventDefault();open("appearance");return;}
   if(modifier&&e.shiftKey&&!e.altKey&&(e.code==="Slash"||e.key==="/"||e.key==="?")){e.preventDefault();open("shortcuts");return;}
   if(e.key==="Escape"&&!launcher.hidden){launcher.hidden=true;root.querySelector<HTMLElement>("#dock-menu")?.focus();return;}
   const active=[...windows.values()].filter(w=>!w.minimized).sort((a,b)=>b.z-a.z)[0];
   if(modifier&&!e.altKey&&!e.shiftKey&&e.key.toLowerCase()==="w"&&active){
     e.preventDefault();closeWindow(active.id);return;
   }
   if(e.ctrlKey&&e.altKey&&active&&e.key.startsWith("Arrow")){
     e.preventDefault();
     if(active.maximized)return;
     const amount=20;
     const dx=e.key==="ArrowLeft"?-amount:e.key==="ArrowRight"?amount:0;
     const dy=e.key==="ArrowUp"?-amount:e.key==="ArrowDown"?amount:0;
     if(e.shiftKey){active.w+=dx;active.h+=dy;}
     else{active.x+=dx;active.y+=dy;}
     clamp(active);display(active);store();
   }
 });
 window.addEventListener("resize",()=>{
   for(const w of windows.values()){
     if(w.maximized){w.w=Math.max(290,workspace.clientWidth-18);w.h=Math.max(210,workspace.clientHeight-18);}
     else clamp(w);display(w);
   }store();
 });
 for(const id of session.open){
   if(getApps().some(app=>app.id===id))open(id,true);
 }
 if(session.active&&windows.has(session.active)){
   const active=windows.get(session.active)!;
   if(!active.minimized)focused(active);
 }
 refreshTaskbar();
 store();
}
