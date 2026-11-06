/**
 * Local native Azgaar project library (not a simulation save).
 * Stores original imported blobs unmodified, including compressed .gz files.
 */
import type { WorldSummary } from "../integration/azgaar.js";
export type WorldSource = "imported"|"captured";
export interface WorldEntry {
  id:string;
  name:string;
  fileName:string;
  source:WorldSource;
  createdAt:number;
  bytes:number;
  summary:WorldSummary|null;
  blob:Blob;
}
const DATABASE="kingdomos-world-library";
const VERSION=1;
const STORE="worlds";
const MAX_BYTES=100*1024*1024;
function db():Promise<IDBDatabase> {
  if(!("indexedDB" in window))return Promise.reject(new Error("World Library requires IndexedDB in this browser."));
  return new Promise((resolve,reject)=>{
    const request=indexedDB.open(DATABASE,VERSION);
    request.onupgradeneeded=()=>{
      const database=request.result;
      if(!database.objectStoreNames.contains(STORE))database.createObjectStore(STORE,{keyPath:"id"});
    };
    request.onerror=()=>reject(request.error||new Error("Could not open World Library."));
    request.onsuccess=()=>resolve(request.result);
  });
}
async function transact<T>(mode:IDBTransactionMode,act:(store:IDBObjectStore)=>IDBRequest<T>):Promise<T> {
  const database=await db();
  return new Promise((resolve,reject)=>{
    const tx=database.transaction(STORE,mode);
    let result:T;
    tx.oncomplete=()=>{database.close();resolve(result);};
    tx.onerror=()=>{database.close();reject(tx.error||new Error("World Library storage failed."));};
    tx.onabort=()=>{database.close();reject(tx.error||new Error("World Library operation was cancelled."));};
    try {const request=act(tx.objectStore(STORE));request.onsuccess=()=>{result=request.result;};}
    catch(e){database.close();reject(e);}
  });
}
export async function saveWorld(name:string,blob:Blob,fileName:string,source:WorldSource,summary:WorldSummary|null=null):Promise<WorldEntry> {
  if(blob.size===0||blob.size>MAX_BYTES)throw new Error("World file must be between 1 byte and 100 MB.");
  if(!/\.(?:map|gz)$/i.test(fileName))throw new Error("Only native Azgaar .map or .gz files are supported.");
  const label=name.trim().slice(0,100)||"Untitled World";
  const entry:WorldEntry={
    id:typeof crypto.randomUUID==="function"?crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).slice(2),
    name:label,fileName,source,createdAt:Date.now(),bytes:blob.size,summary,blob
  };
  await transact<IDBValidKey>("readwrite",store=>store.put(entry));
  return entry;
}
export async function listWorlds():Promise<WorldEntry[]> {
  const all=await transact<WorldEntry[]>("readonly",store=>store.getAll());
  return all.sort((a,b)=>b.createdAt-a.createdAt);
}
export async function getWorld(id:string):Promise<WorldEntry|null> {
  const result=await transact<WorldEntry|undefined>("readonly",store=>store.get(id));
  return result??null;
}
export async function deleteWorld(id:string):Promise<void> {
  await transact<undefined>("readwrite",store=>store.delete(id));
}
export function downloadWorld(entry:Pick<WorldEntry,"blob"|"fileName">):void {
  const url=URL.createObjectURL(entry.blob);
  const link=document.createElement("a");
  link.href=url;link.download=entry.fileName;link.style.display="none";
  document.body.append(link);link.click();link.remove();
  setTimeout(()=>URL.revokeObjectURL(url),30000);
}
export function fileLabel(fileName:string):string {
  return fileName.replace(/\.(?:map|gz)$/i,"").slice(0,100)||"Untitled World";
}
