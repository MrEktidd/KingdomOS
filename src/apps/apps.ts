import {icon} from "../ui/icons.js";
import {BUILTIN_THEMES,COLOR_KEYS,getAllThemes,getCustomThemes,getActiveTheme,selectTheme,patchTheme,patchThemeColor,saveTheme,updateSavedTheme,deleteSavedTheme,importTheme,exportTheme,isThemeModified,resetTheme,type ColorKey,type Theme} from "../theme/theme.js";

import {registerApp, type AppSpec, type Context} from "./registry.js";
function el<K extends keyof HTMLElementTagNameMap>(tag:K,cls="",value?:string):HTMLElementTagNameMap[K] {const e=document.createElement(tag);e.className=cls;if(value!==undefined)e.textContent=value;return e;}
function button(label:string,ico:string,fn:()=>void,extra=""):HTMLButtonElement {const b=el("button","btn "+extra);b.type="button";b.innerHTML=icon(ico,15)+"<span></span>";b.querySelector("span")!.textContent=label;b.addEventListener("click",fn);return b;}
const section=(title:string,help="")=>{const d=el("div","section-title");d.append(el("strong","eyebrow",title),el("small","muted",help));return d;};
function overview(host:HTMLElement,ctx:Context):void {
 host.className="overview-app";host.innerHTML='<div class="hero"><div class="eyebrow">'+icon("spark",14)+' KINGDOMOS / FOUNDATION 0.0.3.1</div><h1>A world, awaiting<br><em>your command.</em></h1><p>Your command environment is online. Shape the workspace that will one day govern a living world.</p></div><div class="heading"><span>PLATFORM STATUS</span><small>INITIALIZATION COMPLETE</small></div><div class="status-grid"><div><i class="pip on"></i><span>Desktop shell</span><b>ONLINE</b></div><div><i class="pip on"></i><span>Theme service</span><b>ONLINE</b></div><div><i class="pip off"></i><span>World simulation</span><b>PLANNED</b></div><div><i class="pip off"></i><span>Generator adapter</span><b>PLANNED</b></div></div><div class="heading"><span>QUICK ACCESS</span><small>APPLICATIONS</small></div>';
 const actions=el("div","actions");actions.append(button("World Hub","map",()=>ctx.open("world-hub"),"accent"),button("Personalize OS","palette",()=>ctx.open("appearance")));host.append(actions);
 const note=el("div","notice");note.innerHTML=icon("info",17)+"<p>The <b>World Editor</b> now includes the full Azgaar map generator. The separate World Atlas remains an illustrative prototype; gameplay simulation is not connected yet.</p>";host.append(note);
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
 host.className="about-app";host.innerHTML='<div class="about-logo">'+icon("crown",48)+'</div><span class="eyebrow">KINGDOM OPERATING SYSTEM</span><h1>KingdomOS</h1><strong>FOUNDATION RELEASE 0.0.3.1</strong><hr/><p>An evolving operating environment for an autonomous kingdom simulator.</p><p>This release adds the full Azgaar World Editor, native map imports and exports, a local World Library, and a versioned communication bridge. Game simulation is not yet implemented.</p>';
}
const BUILTIN_APPS:AppSpec[]=[
 {id:"overview",title:"Command Overview",icon:"grid",description:"System status",width:448,height:555,render:overview},
 {id:"appearance",title:"Appearance",icon:"palette",description:"Themes and settings",width:700,height:635,render:appearance},
 {id:"about",title:"About KingdomOS",icon:"info",description:"Foundation release details",width:420,height:450,render:about}
];
for (const app of BUILTIN_APPS) registerApp(app);
