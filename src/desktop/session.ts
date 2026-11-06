/** Versioned browser-local desktop session; never stores world/simulation state. */
export interface Bounds { x:number; y:number; w:number; h:number }
export interface Layout extends Bounds { minimized:boolean; maximized:boolean }
export interface Session {
  version:2;
  windows:Record<string,Layout>;
  open:string[];
  active:string|null;
}
const KEY="kingdomos.desktop.v2";
const LEGACY="kingdomos.desktop.v1";
const isObj=(x:unknown):x is Record<string,unknown>=>!!x && typeof x==="object" && !Array.isArray(x);
const isLayout=(v:unknown):v is Layout => {
  if (!isObj(v)) return false;
  return ["x","y","w","h"].every(key=>typeof v[key]==="number" && Number.isFinite(v[key]) && Math.abs(v[key] as number)<100000)
    && (v.w as number)>=200 && (v.h as number)>=180
    && typeof v.minimized==="boolean" && typeof v.maximized==="boolean";
};
export function loadSession():Session {
  const fallback:Session={version:2,windows:{},open:["atlas","overview"],active:"overview"};
  try {
    const raw=localStorage.getItem(KEY);
    if (raw) {
      const data:unknown=JSON.parse(raw);
      if (isObj(data) && data.version===2 && isObj(data.windows) && Array.isArray(data.open)) {
        const windows:Record<string,Layout>={};
        for(const [id,value] of Object.entries(data.windows)) if(isLayout(value))windows[id]=value;
        const open=[...new Set(data.open.filter((id:unknown):id is string=>typeof id==="string" && /^[a-z][a-z0-9-]{1,48}$/.test(id)))].slice(0,30);
        return {version:2,windows,open,active:typeof data.active==="string"?data.active:null};
      }
    }
    const old=localStorage.getItem(LEGACY);
    if(old) {
      const data:unknown=JSON.parse(old);
      if(isObj(data)) for (const [id,value] of Object.entries(data)) if(isLayout(value))fallback.windows[id]=value;
    }
  } catch { /* blocked storage or corrupt data: launch defaults */ }
  return fallback;
}
export function saveSession(session:Session):void {
  try {localStorage.setItem(KEY,JSON.stringify(session));}catch { /* private browsing / full storage */ }
}
export function resetSession():void {
  try {localStorage.removeItem(KEY);}catch { /* private browsing */ }
}
