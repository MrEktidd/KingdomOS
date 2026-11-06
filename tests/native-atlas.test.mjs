import assert from "node:assert/strict";
import {test} from "node:test";

test("Atlas bridge only accepts messages from its own native iframe",async()=>{
  const handlers=new Map();
  const source={postMessage:(payload,origin)=>posted.push({payload,origin})};
  const posted=[];
  globalThis.location={origin:"https://kingdomos.test"};
  globalThis.window={
    addEventListener:(key,fn)=>handlers.set(key,fn),
    removeEventListener:key=>handlers.delete(key)
  };
  const {NativeAtlasSession,NATIVE_ATLAS_URL}=await import("../dist/integration/native-atlas.js");
  const frame={src:"",contentWindow:source};
  const atlas=new NativeAtlasSession(frame);
  assert.equal(frame.src,NATIVE_ATLAS_URL);
  assert.match(frame.src,/kingdomos=atlas/);
  const emit=(src,origin,kind,name,data,id)=>handlers.get("message")({
    source:src,origin,data:{protocol:"kingdomos-azgaar",version:1,kind,name,data,id}
  });
  emit(source,"https://malicious.example","event","ready",{mode:"atlas"});
  emit({},"https://kingdomos.test","event","ready",{mode:"atlas"});
  assert.equal(atlas.getState(),"connecting");
  emit(source,"https://kingdomos.test","event","ready",{mode:"atlas"});
  assert.equal(atlas.getState(),"booting");
  const initial={generatorVersion:"1.160",mapId:1,seed:"SEED",width:1536,height:784,cells:123,states:1,settlements:2};
  emit(source,"https://kingdomos.test","event","booted",initial);
  assert.equal(atlas.getState(),"ready");
  const loading=atlas.load("native editable map bytes","Test.map");
  await new Promise(resolve=>setImmediate(resolve));
  const importCommand=posted.find(p=>p.payload.name==="import-map");
  assert.ok(importCommand);
  assert.equal(importCommand.origin,"https://kingdomos.test");
  assert.equal(importCommand.payload.payload.name,"Test.map");
  emit(source,"https://kingdomos.test","result","ok",{accepted:true},importCommand.payload.id);
  emit(source,"https://kingdomos.test","event","world-changed",{...initial,mapId:2,seed:"LOADED"});
  assert.equal((await loading).seed,"LOADED");
  assert.equal(atlas.getState(),"loaded");
  const fit=atlas.fit();
  await new Promise(resolve=>setImmediate(resolve));
  const fitCommand=posted.find(p=>p.payload.name==="fit");
  assert.ok(fitCommand);
  emit(source,"https://kingdomos.test","result","ok",{ok:true},fitCommand.payload.id);
  await fit;
  atlas.close();
  assert.equal(atlas.getState(),"closed");
  assert.equal(handlers.has("message"),false);
  assert.equal(frame.src,"about:blank");
});

test("No-preview published worlds are valid for native Atlas rendering",async()=>{
  const database=new Map();
  globalThis.indexedDB={open:()=>{
    const connection={
      objectStoreNames:{contains:()=>true},
      createObjectStore:()=>{},close:()=>{},
      transaction:(_name,_mode)=>{
        const tx={oncomplete:null,onerror:null,onabort:null,
          objectStore:()=>({
            put:value=>reply(()=>{database.set(value.slot,value);return value.slot;}),
            get:key=>reply(()=>database.get(key)),
            delete:key=>reply(()=>{database.delete(key);return undefined;})
          })
        };
        function reply(fn){
          const req={result:undefined,onsuccess:null};
          queueMicrotask(()=>{req.result=fn();req.onsuccess?.();queueMicrotask(()=>tx.oncomplete?.());});
          return req;
        }
        return tx;
      }
    };
    const req={result:connection,onsuccess:null,onerror:null,onupgradeneeded:null};
    queueMicrotask(()=>req.onsuccess?.());return req;
  }};
  const {publishActiveWorld,loadWorldSlot}=await import("../dist/world/current.js");
  const summary={generatorVersion:"1.160",mapId:1,seed:"abcd",width:500,height:350,cells:300,states:2,settlements:1};
  const saved=await publishActiveWorld({mapText:"Native published .map text",summary},"Native Atlas Test");
  assert.equal(saved.preview,null);
  assert.equal((await loadWorldSlot("active"))?.mapText,"Native published .map text");
});
