import assert from "node:assert/strict";
import {test} from "node:test";

test("World Hub and full World Editor self-register through the app registry",async()=>{
  const {getApp}=await import("../dist/apps/registry.js");
  await import("../dist/apps/world-hub.js");
  await import("../dist/apps/world-editor.js");
  assert.equal(getApp("world-hub").title,"World Hub");
  const editor=getApp("world-editor");
  assert.equal(editor.maximizeOnOpen,true);
  assert.equal(editor.keepAliveOnClose,true);
  await import("../dist/apps/atlas.js");
  assert.equal(getApp("atlas").description,"Interactive Azgaar map, Layers and Style");
  assert.equal(getApp("atlas").keepAliveOnClose,true);
  assert.equal(typeof editor.render,"function");
});

test("World Library exposes safe filenames",async()=>{
  const lib=await import("../dist/world/library.js");
  assert.equal(lib.fileLabel("My World.map"),"My World");
  assert.equal(lib.fileLabel("Archive.gz"),"Archive");
  assert.equal(lib.fileLabel("River.map"),"River");
});

test("versioned bridge rejects wrong origins and sources, correlates messages, and disconnects",async()=>{
  const listeners=new Map();
  globalThis.location={origin:"https://kingdomos.test"};
  globalThis.window={
    addEventListener:(event,handler)=>listeners.set(event,handler),
    removeEventListener:event=>listeners.delete(event)
  };
  const bridge=await import("../dist/integration/azgaar.js");
  const posted=[];
  const frame={src:"",contentWindow:{postMessage:(payload,targetOrigin)=>posted.push({payload,targetOrigin})}};
  const detach=bridge.connectEditor(frame);
  assert.equal(frame.src,"./dist/world-editor/index.html?kingdomos=1");
  const send=(source,origin,name,data,id)=>{
    const handler=listeners.get("message");
    assert.equal(typeof handler,"function");
    handler({source,origin,data:{protocol:"kingdomos-azgaar",version:1,kind:id?"result":"event",id,name,data}});
  };
  send(frame.contentWindow,"https://attacker.test","ready",{},null);
  send({},"https://kingdomos.test","ready",{},null);
  assert.equal(bridge.getEditorState(),"connecting");
  send(frame.contentWindow,"https://kingdomos.test","ready",{generatorVersion:"1.156.0"},null);
  assert.equal(bridge.getEditorState(),"ready");
  await new Promise(resolve=>setImmediate(resolve));
  const request=posted.find(p=>p.payload.name==="summary");
  assert.ok(request,"bridge must request initial summary");
  assert.equal(request.targetOrigin,"https://kingdomos.test");
  const summary={generatorVersion:"1.156.0",mapId:12,seed:"abc",width:1000,height:600,cells:100,states:4,settlements:12};
  send(frame.contentWindow,"https://kingdomos.test","ok",summary,request.payload.id);
  await new Promise(resolve=>setImmediate(resolve));
  assert.equal(bridge.getWorldSummary()?.seed,"abc");
  send(frame.contentWindow,"https://kingdomos.test","booted",summary,null);
  assert.equal(bridge.isEditorBooted(),true);
  const beforeRevision=bridge.getWorldRevision();
  send({},"https://kingdomos.test","world-changed",{...summary,seed:"bad"},null);
  assert.equal(bridge.getWorldRevision(),beforeRevision);
  send(frame.contentWindow,"https://kingdomos.test","world-changed",summary,null);
  assert.equal(bridge.getWorldRevision(),beforeRevision+1);
  const capture=bridge.captureWorld();
  await new Promise(resolve=>setImmediate(resolve));
  const captureRequest=posted.find(p=>p.payload.name==="capture");
  assert.ok(captureRequest,"capture must use the typed bridge command");
  const preview=new Blob(['<svg xmlns="http://www.w3.org/2000/svg"></svg>'],{type:"image/svg+xml"});
  send(frame.contentWindow,"https://kingdomos.test","ok",{summary,mapText:"editable native map",preview},captureRequest.payload.id);
  assert.equal((await capture).preview.type,"image/svg+xml");

  await assert.rejects(bridge.importMap(new Blob(["x"]),"not-a-map.exe"),/\.map or \.gz/);
  const snapshot=bridge.snapshot();
  await new Promise(resolve=>setImmediate(resolve));
  const outgoing=posted.find(p=>p.payload.name==="snapshot");
  assert.ok(outgoing);
  send(frame.contentWindow,"https://kingdomos.test","ok",{summary,mapText:"native.map bytes"},outgoing.payload.id);
  assert.equal((await snapshot).mapText,"native.map bytes");
  detach();
  assert.equal(bridge.getEditorState(),"disconnected");
  assert.equal(listeners.has("message"),false);
});
