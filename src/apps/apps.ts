import {icon} from "../ui/icons.js";
import {BUILTIN_THEMES,COLOR_KEYS,getAllThemes,getCustomThemes,getActiveTheme,selectTheme,patchTheme,patchThemeColor,saveTheme,updateSavedTheme,deleteSavedTheme,importTheme,exportTheme,isThemeModified,resetTheme,type ColorKey,type Theme} from "../theme/theme.js";

import {registerApp, type AppSpec, type Context} from "./registry.js";
function el<K extends keyof HTMLElementTagNameMap>(tag:K,cls="",value?:string):HTMLElementTagNameMap[K] {const e=document.createElement(tag);e.className=cls;if(value!==undefined)e.textContent=value;return e;}
function button(label:string,ico:string,fn:()=>void,extra=""):HTMLButtonElement {const b=el("button","btn "+extra);b.type="button";b.innerHTML=icon(ico,15)+"<span></span>";b.querySelector("span")!.textContent=label;b.addEventListener("click",fn);return b;}
const section=(title:string,help="")=>{const d=el("div","section-title");d.append(el("strong","eyebrow",title),el("small","muted",help));return d;};
function overview(host:HTMLElement,ctx:Context):void {
 host.className="overview-app";host.innerHTML='<div class="hero"><div class="eyebrow">'+icon("spark",14)+' KINGDOMOS / FOUNDATION 0.0.3</div><h1>A world, awaiting<br><em>your command.</em></h1><p>Your command environment is online. Shape the workspace that will one day govern a living world.</p></div><div class="heading"><span>PLATFORM STATUS</span><small>INITIALIZATION COMPLETE</small></div><div class="status-grid"><div><i class="pip on"></i><span>Desktop shell</span><b>ONLINE</b></div><div><i class="pip on"></i><span>Theme service</span><b>ONLINE</b></div><div><i class="pip off"></i><span>World simulation</span><b>PLANNED</b></div><div><i class="pip off"></i><span>Generator adapter</span><b>PLANNED</b></div></div><div class="heading"><span>QUICK ACCESS</span><small>APPLICATIONS</small></div>';
 const actions=el("div","actions");actions.append(button("World Hub","map",()=>ctx.open("world-hub"),"accent"),button("Personalize OS","palette",()=>ctx.open("appearance")));host.append(actions);
 const note=el("div","notice");note.innerHTML=icon("info",17)+"<p>The <b>World Editor</b> now includes the full Azgaar map generator. The separate World Atlas remains an illustrative prototype; gameplay simulation is not connected yet.</p>";host.append(note);
}
const mapSvg='<svg viewBox="0 0 1000 690" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><pattern id="ko-coordinates" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M60 0H0V60" fill="none" stroke="currentColor" stroke-width=".5" opacity=".1"/></pattern><pattern id="ko-grain" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r=".7" fill="currentColor" opacity=".17"/></pattern></defs><rect width="1000" height="690" fill="var(--ko-map-sea)"/><path d="M55 0L112 62 171 45 212 91 280 78 327 117 350 182 388 231 364 277 397 310 345 358 320 418 274 443 256 509 193 535 155 610 117 690H0V0Z" fill="var(--ko-map-land)" stroke="var(--ko-accent)" stroke-width="1" stroke-opacity=".28"/><path d="M492 0 527 65 493 113 523 172 474 224 507 275 486 327 533 373 553 411 609 430 669 463 714 477 740 522 807 540 845 604 914 655 940 690H1000V0Z" fill="var(--ko-map-land)" stroke="var(--ko-accent)" stroke-width="1" stroke-opacity=".28"/><g fill="none" stroke="var(--ko-text)" opacity=".15" stroke-width="1.5"><path d="M105 0 185 130 209 228 274 297 233 386 172 483 124 617M225 0 290 108 314 194 296 272 334 354 277 458 220 590M585 0 601 91 560 178 614 279 587 364 665 454 714 544 771 660M752 0 738 95 792 167 758 264 818 361 804 471 904 603"/><path d="M132 190 209 172 289 197 378 174M133 390 219 370 284 412M553 219 631 184 737 217 858 177M601 384 713 350 841 383 965 350"/></g><g fill="none" stroke="#85aab1" stroke-width="3" opacity=".8"><path d="M331 147Q263 179 253 246T197 364Q169 399 119 412M745 129Q677 180 671 234T634 318Q604 354 523 373M840 298Q777 313 751 391T716 476"/></g><g fill="none" stroke="var(--ko-accent)" stroke-dasharray="9 8" opacity=".45"><path d="M180 177Q266 202 345 184T516 247M533 408Q652 362 755 413T956 401"/></g><g fill="none" stroke="#d0c5a5" stroke-width="2" opacity=".32"><path d="m248 185 17-35 9 17 15-29 19 45m-19 29 16-33 9 16 17-30 16 47m370-14 13-28 10 15 16-26 19 40"/></g><rect width="1000" height="690" fill="url(#ko-coordinates)"/><rect width="1000" height="690" fill="url(#ko-grain)"/><g fill="var(--ko-text)" opacity=".19" font-family="Georgia,serif" letter-spacing="7"><text x="65" y="94" font-size="26">THE NORTHERN MARCH</text><text x="562" y="148" font-size="25">THE HIGHLANDS</text><text x="434" y="562" font-size="21" transform="rotate(-18 434 562)">THE INNER SEA</text></g><g stroke="var(--ko-text)" stroke-width="1.5" opacity=".43" fill="none"><path d="M35 612v47m-12-23h24m-12-24-12 24h24z"/></g><text x="35" y="601" fill="var(--ko-text)" opacity=".6" font-size="15" text-anchor="middle">N</text></svg>';
const markers=[{name:"Asterholm",note:"Highland citadel",x:43,y:34},{name:"Westhaven",note:"Coastal trading port",x:20,y:61},{name:"Elderford",note:"Riverside market",x:66,y:67}];
function atlas(host:HTMLElement,ctx:Context):void {
 host.className="atlas-app";
 host.innerHTML='<div class="atlas-header"><div class="atlas-title">'+icon("globe",19)+'<div><b>World Atlas</b><span>EXPLORATION / CONCEPT VIEW</span></div></div><div class="atlas-controls"><button data-zoom="out" aria-label="Zoom out">'+icon("minus",16)+'</button><span id="zoom-text">100%</span><button data-zoom="in" aria-label="Zoom in">'+icon("plus",16)+'</button></div></div><div class="atlas-viewport"><div class="atlas-map"></div><div class="map-watermark">'+icon("info",13)+' ILLUSTRATIVE MAP · NO WORLD LOADED</div><div class="map-coordinates">CARTOGRAPHY PROTOTYPE / GENERATOR NOT CONNECTED</div></div><div class="atlas-status"><span><i class="pip on"></i> ATLAS INTERFACE READY</span><span>AZGAAR INTEGRATION: PLANNED</span></div>';
 const view=host.querySelector<HTMLElement>(".atlas-viewport")!,map=host.querySelector<HTMLElement>(".atlas-map")!;
 map.innerHTML=mapSvg;let zoom=1;
 const detail=el("div","marker-detail");detail.hidden=true;view.append(detail);
 markers.forEach(m=>{
   const b=el("button","marker");b.type="button";b.style.left=m.x+"%";b.style.top=m.y+"%";
   b.innerHTML='<span class="marker-symbol">'+icon("flag",15)+'</span><span></span>';b.querySelector("span:last-child")!.textContent=m.name;
   b.addEventListener("click",()=>{
     detail.replaceChildren();
     const heading=el("div","detail-heading");
     heading.append(el("b","",m.name),button("Close","close",()=>detail.hidden=true));
     detail.append(heading,el("small","muted",m.note),el("p","","Illustrative location. World data will be available once Azgaar is integrated."));detail.hidden=false;
   });view.append(b);
 });
 const setZoom=(d:number)=>{zoom=Math.min(1.8,Math.max(.7,Math.round((zoom+d)*10)/10));map.style.transform="scale("+zoom+")";host.querySelector("#zoom-text")!.textContent=Math.round(zoom*100)+"%";};
 host.querySelector('[data-zoom="out"]')!.addEventListener("click",()=>setZoom(-.1));
 host.querySelector('[data-zoom="in"]')!.addEventListener("click",()=>setZoom(.1));
}
const colorNames:Record<ColorKey,string>={background:"Desktop background",surface:"Window surface",surfaceRaised:"Raised surface",surfaceInset:"Inset surface",border:"Borders",text:"Primary text",muted:"Secondary text",accent:"Accent",accentText:"Accent text",success:"Success",warning:"Warning",danger:"Danger",mapSea:"Map water",mapLand:"Map terrain"};
function appearance(host:HTMLElement,ctx:Context):void {
 host.className="appearance-app";
 host.innerHTML='<div class="appearance-header"><span class="eyebrow">PERSONALIZATION / SYSTEM SETTINGS</span><h2>Make it yours.</h2><p>Customize every corner of your command environment.</p></div><nav class="appearance-tabs" aria-label="Appearance sections"></nav><div class="appearance-body"></div><div class="appearance-footer"></div>';
 const tabs=host.querySelector<HTMLElement>(".appearance-tabs")!,body=host.querySelector<HTMLElement>(".appearance-body")!,footer=host.querySelector<HTMLElement>(".appearance-footer")!;
 let tab:"presets"|"colors"|"layout"="presets";
 const safe=(fn:()=>void)=>{try{fn();}catch(error){ctx.toast(error instanceof Error?error.message:"Operation failed.");}};
 function draw():void {
   const t=getActiveTheme();tabs.replaceChildren();body.replaceChildren();footer.replaceChildren();
   for(const [name,label] of [["presets","Presets"],["colors","Colors"],["layout","Layout"]] as const){
     const b=el("button",tab===name?"tab active":"tab",label);b.type="button";b.addEventListener("click",()=>{tab=name;draw();});tabs.append(b);
   }
   if(tab==="presets"){
     body.append(section("PRESET LIBRARY","Choose a preset to apply instantly"));
     const grid=el("div","presets");
     getAllThemes().forEach(p=>{
       const b=el("button",t.id===p.id?"preset selected":"preset");b.type="button";
       const sw=el("div","preset-colors");
       for(const k of ["background","surface","accent","text"] as ColorKey[]){const chip=el("i");chip.style.background=p.colors[k];sw.append(chip);}
       b.append(sw,el("b","",p.name),el("small","",p.description));
       if(p.id===t.id)b.append(el("span","preset-active","ACTIVE"));
       b.addEventListener("click",()=>safe(()=>{selectTheme(p.id);draw();}));grid.append(b);
     });body.append(grid,section("PERSONAL LIBRARY","Built-in presets remain unchanged"));
     const actions=el("div","actions");
     if(isThemeModified())actions.append(button("Revert edits","close",()=>safe(()=>{resetTheme();draw();ctx.toast("Changes reverted to the saved preset.");})));
     actions.append(button("Save as new","plus",()=>{const name=prompt("Name this preset:",t.name+" Custom");if(name!==null)safe(()=>{saveTheme(name);ctx.toast("Theme saved locally.");draw();});},"accent"));
     if(getCustomThemes().some(p=>p.id===t.id)){
       actions.append(button("Update preset","save",()=>safe(()=>{updateSavedTheme();draw();ctx.toast("Preset updated.");})));
       actions.append(button("Remove","close",()=>{if(confirm("Remove this saved preset?"))safe(()=>{deleteSavedTheme(t.id);draw();});}));
     }body.append(actions);
   }
   if(tab==="colors"){
     body.append(section("COLOR TOKENS","Live changes apply across every app"));
     const grid=el("div","color-grid");
     for(const key of COLOR_KEYS){
       const row=el("label","color-row"),input=el("input") as HTMLInputElement;input.type="color";input.value=t.colors[key];input.setAttribute("aria-label",colorNames[key]);
       const value=el("code","",t.colors[key].toUpperCase());
       input.addEventListener("input",()=>safe(()=>{patchThemeColor(key,input.value);value.textContent=input.value.toUpperCase();}));
       row.append(input,el("span","",colorNames[key]),value);grid.append(row);
     }body.append(grid);
   }
   if(tab==="layout"){
     body.append(section("SURFACES & SCALING","Adjust the OS in real time"));
     const sliders=el("div","sliders");
     const makeSlider=(label:string,min:number,max:number,val:number,unit:string,apply:(v:number)=>void)=>{
       const row=el("div","slider-row"),title=el("label","",label),out=el("b","",val+unit),input=el("input") as HTMLInputElement;
       input.type="range";input.min=String(min);input.max=String(max);input.step="1";input.value=String(val);
       input.id="range-"+label.replace(/\s+/g,"-");title.htmlFor=input.id;
       input.addEventListener("input",()=>safe(()=>{apply(Number(input.value));out.textContent=input.value+unit;}));
       row.append(title,out,input);sliders.append(row);
     };
     makeSlider("Surface opacity",70,100,Math.round(t.surfaceOpacity*100),"%",v=>patchTheme({surfaceOpacity:v/100}));
     makeSlider("Corner radius",0,24,t.radius,"px",v=>patchTheme({radius:v}));
     makeSlider("Interface scaling",85,120,Math.round(t.fontScale*100),"%",v=>patchTheme({fontScale:v/100}));
     body.append(sliders,section("DESKTOP BACKGROUND"));
     const wall=el("div","choices");
     for(const [id,label] of [["atlas","Atlas"],["grid","Technical grid"],["solid","Minimal"]] as const){
       const b=el("button",t.wallpaper===id?"choice selected":"choice",label);b.type="button";b.addEventListener("click",()=>safe(()=>{patchTheme({wallpaper:id});draw();}));wall.append(b);
     }body.append(wall,section("INFORMATION DENSITY"));
     const density=el("div","choices");
     for(const [id,label] of [["comfortable","Comfortable"],["compact","Compact"]] as const){
       const b=el("button",t.density===id?"choice selected":"choice",label);b.type="button";b.addEventListener("click",()=>safe(()=>{patchTheme({density:id});draw();}));density.append(b);
     }body.append(density);
   }
   const file=el("input") as HTMLInputElement;file.type="file";file.accept=".json,application/json";file.hidden=true;
   file.addEventListener("change",async()=>{
     const selected=file.files?.[0];if(!selected)return;
     try{if(selected.size>100000)throw new Error("Theme file too large.");importTheme(await selected.text());ctx.toast("Theme imported successfully.");draw();}
     catch(e){ctx.toast(e instanceof Error?e.message:"Import failed.");}
   });
   footer.append(button("Export JSON","download",()=>{
     const blob=new Blob([exportTheme()],{type:"application/json"}),url=URL.createObjectURL(blob),a=el("a");
     a.href=url;a.download="kingdomos-theme.json";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
   }),button("Import JSON","upload",()=>file.click()),file,el("span","muted","Autosaved in this browser"));
 }
 draw();
}
function about(host:HTMLElement):void{
 host.className="about-app";host.innerHTML='<div class="about-logo">'+icon("crown",48)+'</div><span class="eyebrow">KINGDOM OPERATING SYSTEM</span><h1>KingdomOS</h1><strong>FOUNDATION RELEASE 0.0.3</strong><hr/><p>An evolving operating environment for an autonomous kingdom simulator.</p><p>This release adds the full Azgaar World Editor, native map imports and exports, a local World Library, and a versioned communication bridge. Game simulation is not yet implemented.</p>';
}
const BUILTIN_APPS:AppSpec[]=[
 {id:"atlas",title:"World Atlas",icon:"globe",description:"Explore the map",width:875,height:605,render:atlas},
 {id:"overview",title:"Command Overview",icon:"grid",description:"System status",width:448,height:555,render:overview},
 {id:"appearance",title:"Appearance",icon:"palette",description:"Themes and settings",width:700,height:635,render:appearance},
 {id:"about",title:"About KingdomOS",icon:"info",description:"Foundation release details",width:420,height:450,render:about}
];
for (const app of BUILTIN_APPS) registerApp(app);
