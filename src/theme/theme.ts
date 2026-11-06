/**
 * KingdomOS theme service. This module is the ONLY writer of global visual tokens.
 * It does not know about windows, maps, or application implementations.
 */
export const COLOR_KEYS = [
  "background", "surface", "surfaceRaised", "surfaceInset", "border", "text",
  "muted", "accent", "accentText", "success", "warning", "danger", "mapSea", "mapLand"
] as const;

export type ColorKey = typeof COLOR_KEYS[number];
export type ThemeColors = Record<ColorKey, string>;
export type ThemeDensity = "comfortable" | "compact";
export type Wallpaper = "atlas" | "grid" | "solid";
export interface Theme {
  id: string;
  name: string;
  description: string;
  colors: ThemeColors;
  surfaceOpacity: number;
  radius: number;
  fontScale: number;
  density: ThemeDensity;
  wallpaper: Wallpaper;
}
export interface ThemeFile { kind: "kingdomos-theme"; version: 1; theme: Theme }
type Listener = () => void;
const KEY = "kingdomos.appearance.v1";
const DARK: ThemeColors = {
  background:"#0d141a",surface:"#18222b",surfaceRaised:"#25313c",surfaceInset:"#111a21",
  border:"#35434d",text:"#ecede8",muted:"#91a2ad",accent:"#d0aa70",
  accentText:"#171c20",success:"#7faf93",warning:"#d8a464",danger:"#d98581",
  mapSea:"#132f3d",mapLand:"#34443a"
};
const built = (id:string,name:string,description:string, colors:Partial<ThemeColors>, options:Partial<Theme>={}):Theme =>
 ({id,name,description,colors:{...DARK,...colors},surfaceOpacity:0.96,radius:12,fontScale:1,density:"comfortable",wallpaper:"atlas",...options});

export const BUILTIN_THEMES: readonly Theme[] = [
  built("imperial","Imperial Command","Warm brass, midnight slate, and archival ivory.",{}),
  built("nocturne","Nocturne","Deep navy, silver-blue, and cool contrast.",{
    background:"#090f1c",surface:"#141f30",surfaceRaised:"#20334b",surfaceInset:"#0d1929",
    border:"#31465e",text:"#e9f1f8",muted:"#91a8c1",accent:"#8eb8d8",accentText:"#09131e",
    mapSea:"#0e2c42",mapLand:"#2d4350"
  }),
  built("parchment","Parchment","A light, scholarly command desk.",{
    background:"#d9d5c9",surface:"#f2efe6",surfaceRaised:"#fffaf0",surfaceInset:"#e8e3d6",
    border:"#bbb5a5",text:"#252e2a",muted:"#65716e",accent:"#805f39",accentText:"#fff7eb",
    success:"#487a60",warning:"#a16b35",danger:"#ac514d",mapSea:"#8facb2",mapLand:"#99a688"
  },{surfaceOpacity:0.98,wallpaper:"grid"}),
  built("verdigris","Verdigris","Oxidized copper, pine, and subtle emerald.",{
    background:"#0b1919",surface:"#172926",surfaceRaised:"#263c35",surfaceInset:"#10211e",
    border:"#365147",text:"#e3eee6",muted:"#91afa2",accent:"#8ac3ae",
    accentText:"#12251d",mapSea:"#14383b",mapLand:"#354c36"
  }),
  built("iron","Iron & Ember","Monochrome graphite with restrained copper warmth.",{
    background:"#111214",surface:"#1e2125",surfaceRaised:"#2d3237",surfaceInset:"#16191b",
    border:"#41484d",text:"#f1eeea",muted:"#a6a5a2",accent:"#c58e74",
    accentText:"#191613",mapSea:"#26343d",mapLand:"#414744"
  },{wallpaper:"solid",radius:7})
];
export const DEFAULT_THEME = BUILTIN_THEMES[0];
const listeners = new Set<Listener>();
const copy = <T>(value:T):T => JSON.parse(JSON.stringify(value)) as T;
const isRecord = (x:unknown): x is Record<string,unknown> => Boolean(x) && typeof x==="object" && !Array.isArray(x);
const validHex = (v:unknown):v is string => typeof v==="string" && /^#[0-9a-fA-F]{6}$/.test(v);
const bounded = (v:unknown,min:number,max:number):v is number => typeof v==="number" && Number.isFinite(v) && v>=min && v<=max;
const storage = () => { try { return window.localStorage; } catch { return null; } };

function parseTheme(value:unknown):Theme {
  if (!isRecord(value) || !isRecord(value.colors)) throw new Error("Theme data must contain a colors object.");
  const colors = {} as ThemeColors;
  for (const key of COLOR_KEYS) {
    if (!validHex(value.colors[key])) throw new Error("Invalid color for " + key + ". Use #RRGGBB.");
    colors[key] = value.colors[key];
  }
  if (typeof value.id!=="string" || !/^[a-z0-9-]{1,64}$/.test(value.id)) throw new Error("Invalid theme ID.");
  if (typeof value.name!=="string" || value.name.trim().length<1 || value.name.length>64) throw new Error("Theme name must be 1–64 characters.");
  if (typeof value.description!=="string" || value.description.length>180) throw new Error("Invalid theme description.");
  if (!bounded(value.surfaceOpacity,0.7,1)) throw new Error("Opacity must be between 70% and 100%.");
  if (!bounded(value.radius,0,24)) throw new Error("Corner radius must be between 0 and 24.");
  if (!bounded(value.fontScale,0.85,1.2)) throw new Error("Font scale must be between 85% and 120%.");
  if (value.density!=="compact" && value.density!=="comfortable") throw new Error("Invalid density.");
  if (value.wallpaper!=="atlas" && value.wallpaper!=="grid" && value.wallpaper!=="solid") throw new Error("Invalid wallpaper.");
  return {
    id:value.id,name:value.name.trim(),description:value.description,colors,
    surfaceOpacity:value.surfaceOpacity,radius:value.radius,fontScale:value.fontScale,
    density:value.density,wallpaper:value.wallpaper
  };
}

function load():{active:Theme;custom:Theme[]} {
  try {
    const raw=storage()?.getItem(KEY);
    if (!raw) throw new Error("Not saved");
    const data:unknown=JSON.parse(raw);
    if (!isRecord(data) || !Array.isArray(data.custom)) throw new Error("Invalid storage");
    const custom=data.custom.slice(0,80).map(parseTheme).filter(t=>!BUILTIN_THEMES.some(b=>b.id===t.id));
    return {active:parseTheme(data.active),custom};
  } catch {return {active:copy(DEFAULT_THEME),custom:[]};}
}
let state:{active:Theme;custom:Theme[]} | null=null;
const current=()=>state ??= load();
function persist():void {
  try { storage()?.setItem(KEY,JSON.stringify(current())); } catch { /* storage optional */ }
}
function notify():void { applyTheme(current().active); persist(); listeners.forEach(fn=>fn()); }
function hexRgb(hex:string):string {
  const n=parseInt(hex.slice(1),16);
  return [(n>>16)&255,(n>>8)&255,n&255].join(", ");
}
export function applyTheme(theme:Theme):void {
  const root=document.documentElement;
  for (const key of COLOR_KEYS) root.style.setProperty("--ko-"+key.replace(/[A-Z]/g,m=>"-"+m.toLowerCase()),theme.colors[key]);
  root.style.setProperty("--ko-surface-rgb",hexRgb(theme.colors.surface));
  root.style.setProperty("--ko-raised-rgb",hexRgb(theme.colors.surfaceRaised));
  root.style.setProperty("--ko-opacity",String(theme.surfaceOpacity));
  root.style.setProperty("--ko-radius",theme.radius+"px");
  root.style.setProperty("--ko-scale",String(theme.fontScale));
  root.dataset.density=theme.density;
  root.dataset.wallpaper=theme.wallpaper;
  root.style.colorScheme=theme.id==="parchment" || lightness(theme.colors.background)>0.58?"light":"dark";
}
function lightness(hex:string):number {
  const nums=[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255);
  return nums.reduce((s,n)=>s+n,0)/3;
}
export function initializeThemes():void {applyTheme(current().active);}
export function subscribeTheme(fn:Listener):()=>void {listeners.add(fn);return()=>listeners.delete(fn);}
export function getActiveTheme():Theme {return copy(current().active);}
export function getCustomThemes():Theme[] {return copy(current().custom);}
export function getAllThemes():Theme[] {return [...copy(BUILTIN_THEMES),...getCustomThemes()];}
export function selectTheme(id:string):void {
  const match=getAllThemes().find(t=>t.id===id);
  if(!match) throw new Error("Unknown preset");
  current().active=copy(match);notify();
}
export function patchTheme(changes:Partial<Theme>):void {
  const next={...current().active,...changes,colors:{...current().active.colors,...changes.colors}};
  current().active=parseTheme(next);notify();
}
export function patchThemeColor(key:ColorKey,color:string):void {patchTheme({colors:{...current().active.colors,[key]:color}});}
export function saveTheme(name:string):Theme {
  const clean=name.trim();
  const id="user-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,7);
  const theme=parseTheme({...current().active,id,name:clean,description:"Personal theme preset"});
  current().custom.push(theme);current().active=copy(theme);notify();return copy(theme);
}
export function updateSavedTheme():void {
  const s=current(),index=s.custom.findIndex(t=>t.id===s.active.id);
  if(index<0) throw new Error("Built-in presets cannot be overwritten. Save a new preset.");
  s.custom[index]=copy(s.active);notify();
}
export function deleteSavedTheme(id:string):void {
  if(BUILTIN_THEMES.some(t=>t.id===id)) throw new Error("Built-in presets cannot be removed.");
  const s=current();s.custom=s.custom.filter(t=>t.id!==id);
  if(s.active.id===id) s.active=copy(DEFAULT_THEME);
  notify();
}
export function exportTheme():string {
  return JSON.stringify({kind:"kingdomos-theme",version:1,theme:getActiveTheme()} satisfies ThemeFile,null,2);
}
export function importTheme(text:string):Theme {
  if(text.length>100_000) throw new Error("Theme file is too large.");
  const value:unknown=JSON.parse(text);
  if(!isRecord(value)||value.kind!=="kingdomos-theme"||value.version!==1) throw new Error("Unsupported theme format or version.");
  const imported=parseTheme(value.theme);
  const id="user-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,7);
  const theme={...imported,id};
  const s=current();if(s.custom.length>=80) throw new Error("Maximum of 80 personal themes reached.");
  s.custom.push(theme);s.active=copy(theme);notify();return copy(theme);
}
