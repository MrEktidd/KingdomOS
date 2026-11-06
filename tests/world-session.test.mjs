import assert from "node:assert/strict";
import {test} from "node:test";

// A small in-memory asynchronous IndexedDB harness. It exercises the real
// World Workspace storage API without installing a browser test framework.
function fakeIndexedDb() {
  const values=new Map();
  const database={
    objectStoreNames:{contains:()=>true},
    createObjectStore:()=>{},
    close:()=>{},
    transaction:(_name,_mode)=>{
      const tx={oncomplete:null,onerror:null,onabort:null,
        objectStore:()=>({
          get:(key)=>schedule(()=>values.get(key)),
          put:(value)=>schedule(()=>{values.set(value.slot,value);return value.slot;}),
          delete:(key)=>schedule(()=>{values.delete(key);return undefined;})
        })
      };
      function schedule(fn) {
        const request={result:undefined,onsuccess:null,onerror:null};
        queueMicrotask(()=>{
          request.result=fn();
          request.onsuccess?.();
          queueMicrotask(()=>tx.oncomplete?.());
        });
        return request;
      }
      return tx;
    }
  };
  globalThis.indexedDB={open:()=>{
    const request={result:database,onupgradeneeded:null,onsuccess:null,onerror:null};
    queueMicrotask(()=>request.onsuccess?.());return request;
  }};
  return values;
}

test("Active Atlas world and editor draft remain distinct and restorable",async()=>{
  const data=fakeIndexedDb();
  const api=await import("../dist/world/current.js");
  const summary={generatorVersion:"1.156.0",mapId:27,seed:"KM-027",width:1200,height:800,cells:200,states:8,settlements:31};
  assert.equal(await api.loadWorldSlot("active"),null);
  const project={summary,mapText:"Azgaar native project draft"};
  await api.saveEditorDraft(project,"My edits");
  assert.equal((await api.loadEditorRecovery())?.mapText,project.mapText);
  assert.equal(await api.loadWorldSlot("active"),null);
  const preview=new Blob(['<svg xmlns="http://www.w3.org/2000/svg"></svg>'],{type:"image/svg+xml"});
  await api.publishActiveWorld({...project,preview},"The Inner Sea");
  assert.equal((await api.loadWorldSlot("active"))?.name,"The Inner Sea");
  assert.equal(await api.loadWorldSlot("draft"),null);
  assert.equal((await api.loadEditorRecovery())?.mapText,project.mapText);
  await api.saveEditorDraft({...project,mapText:"New edits not yet published"},"Working");
  assert.equal((await api.loadEditorRecovery())?.mapText,"New edits not yet published");
  assert.equal((await api.loadWorldSlot("active"))?.mapText,project.mapText);
  const latest=await api.loadWorldSlot("active");
  assert.ok(latest);
  assert.equal((await api.worldMapBlob(latest).text()),project.mapText);
  assert.equal(data.size,2);
  await api.removeWorldSlot("active");
  assert.equal(await api.loadWorldSlot("active"),null);
  assert.equal((await api.loadEditorRecovery())?.mapText,"New edits not yet published");
});

test("Invalid Atlas illustrations never replace a published map",async()=>{
  const api=await import("../dist/world/current.js");
  const summary={generatorVersion:"1.156.0",mapId:1,seed:"abc",width:500,height:400,cells:20,states:1,settlements:3};
  await assert.rejects(api.publishActiveWorld({mapText:"test",summary,preview:new Blob(["wrong type"],{type:"text/plain"})}),/valid map illustration/);
});
