/**
 * Authoritative current-workspace document for world authoring (not a game simulation).
 *
 * "active" is the deliberately published World Atlas map.
 * "draft" is the most recently recovered, still-editable editor workspace.
 * Both are native Azgaar .map data; never regenerate either from a seed.
 */
import type {WorldSummary,WorldSnapshot,WorldCapture} from "../integration/azgaar.js";

export type WorldSlot="active"|"draft";
export interface StoredWorld {
  slot:WorldSlot;
  name:string;
  mapText:string;
  summary:WorldSummary;
  preview:Blob|null;
  savedAt:number;
}
const DB_NAME="kingdomos-current-world";
const DB_VERSION=1;
const STORE="projects";
const MAX_NATIVE_BYTES=100*1024*1024;
const listeners=new Set<()=>void>();

function openDatabase():Promise<IDBDatabase> {
  if(typeof indexedDB==="undefined")return Promise.reject(new Error("This browser does not support the World Workspace database."));
  return new Promise((resolve,reject)=>{
    const request=indexedDB.open(DB_NAME,DB_VERSION);
    request.onupgradeneeded=()=>{
      if(!request.result.objectStoreNames.contains(STORE))request.result.createObjectStore(STORE,{keyPath:"slot"});
    };
    request.onerror=()=>reject(request.error||new Error("Unable to open the world workspace."));
    request.onsuccess=()=>resolve(request.result);
  });
}
async function operation<T>(mode:IDBTransactionMode,fn:(store:IDBObjectStore)=>IDBRequest<T>):Promise<T> {
  const database=await openDatabase();
  return new Promise((resolve,reject)=>{
    let settled=false,result:T;
    const tx=database.transaction(STORE,mode);
    tx.oncomplete=()=>{settled=true;database.close();resolve(result);};
    tx.onerror=()=>{if(!settled){settled=true;database.close();reject(tx.error||new Error("World workspace write failed."));}};
    tx.onabort=()=>{if(!settled){settled=true;database.close();reject(tx.error||new Error("World workspace operation was cancelled."));}};
    try {
      const req=fn(tx.objectStore(STORE));
      req.onsuccess=()=>{result=req.result;};
    } catch(e){tx.abort();if(!settled){settled=true;database.close();reject(e);}}
  });
}
function checkNative(mapText:string):void {
  if(!mapText||new Blob([mapText]).size>MAX_NATIVE_BYTES)throw new Error("Current world is empty or exceeds the 100 MB project limit.");
}
function notify():void {for(const fn of listeners)fn();}
export function subscribeCurrentWorld(fn:()=>void):()=>void {listeners.add(fn);return()=>listeners.delete(fn);}
export async function loadWorldSlot(slot:WorldSlot):Promise<StoredWorld|null> {
  return (await operation<StoredWorld|undefined>("readonly",store=>store.get(slot)))??null;
}
export async function loadEditorRecovery():Promise<StoredWorld|null> {
  return (await loadWorldSlot("draft"))??(await loadWorldSlot("active"));
}
export async function saveEditorDraft(world:WorldSnapshot,name?:string):Promise<StoredWorld> {
  checkNative(world.mapText);
  const doc:StoredWorld={slot:"draft",name:name?.trim()||"Working World",mapText:world.mapText,summary:world.summary,preview:null,savedAt:Date.now()};
  await operation<IDBValidKey>("readwrite",store=>store.put(doc));
  notify();return doc;
}
export async function publishActiveWorld(world:WorldSnapshot & {preview?:Blob},name?:string):Promise<StoredWorld> {
  checkNative(world.mapText);
  // Legacy active worlds retain their SVG previews, but native Atlas rendering
  // no longer needs an exported image when publishing new maps.
  if(world.preview!==undefined &&
    (!(world.preview instanceof Blob)||world.preview.size===0||world.preview.type.split(";")[0]!=="image/svg+xml"))
    throw new Error("Azgaar did not provide a valid map illustration.");
  if(world.preview && world.preview.size>80*1024*1024)throw new Error("World preview exceeds the 80 MB limit.");
  const doc:StoredWorld={
    slot:"active",name:name?.trim()||"World "+world.summary.seed,
    mapText:world.mapText,summary:world.summary,preview:world.preview??null,savedAt:Date.now()
  };
  // A publish is a single committed snapshot. Keep an earlier recovery draft
  // until after this write succeeds, then clear it to avoid duplicating large maps.
  await operation<IDBValidKey>("readwrite",store=>store.put(doc));
  await operation<undefined>("readwrite",store=>store.delete("draft"));
  notify();return doc;
}
/** Rename the published world without altering its native map, preview, or identity. */
export async function renameActiveWorld(name:string):Promise<StoredWorld> {
  const label=name.trim();
  if(!label||label.length>100)throw new Error("World name must be between 1 and 100 characters.");
  const original=await loadWorldSlot("active");
  if(!original)throw new Error("No active world is published yet.");
  const updated:StoredWorld={...original,name:label};
  await operation<IDBValidKey>("readwrite",store=>store.put(updated));
  notify();return updated;
}
export async function removeWorldSlot(slot:WorldSlot):Promise<void> {
  await operation<undefined>("readwrite",store=>store.delete(slot));notify();
}
export function worldMapBlob(world:StoredWorld):Blob {
  return new Blob([world.mapText],{type:"text/plain;charset=utf-8"});
}
