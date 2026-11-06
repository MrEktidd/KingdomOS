import assert from "node:assert/strict";
import { test } from "node:test";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve, dirname } from "node:path";
const ROOT=resolve(dirname(fileURLToPath(import.meta.url)),"..");

test("static Pages assets use relative URLs and exist after build",()=>{
  const html=readFileSync(resolve(ROOT,"index.html"),"utf8");
  assert.match(html,/href="\.\x2fsrc\x2fstyles\.css"/);
  assert.match(html,/src="\.\x2fdist\x2fmain\.js"/);
  for(const path of ["dist/main.js","dist/desktop/desktop.js","dist/desktop/session.js","dist/apps/registry.js","dist/apps/apps.js","dist/apps/shortcuts.js","dist/theme/theme.js","src/styles.css"]){
    assert.ok(existsSync(resolve(ROOT,path)),path+" missing");
  }
});

test("application registry validates manifests and unregisters without affecting other apps",async()=>{
  const {registerApp,getApps,getApp,onAppsChanged}=await import("../dist/apps/registry.js");
  let notices=0;
  const unsub=onAppsChanged(()=>notices++);
  const manifest={id:"test-module",title:"Test Module",description:"A test app",icon:"grid",width:400,height:300,render:()=>{}};
  const unregister=registerApp(manifest);
  assert.equal(getApp("test-module").title,"Test Module");
  assert.ok(getApps().some(a=>a.id==="test-module"));
  assert.throws(()=>registerApp(manifest),/Duplicate app identifier/);
  unregister();unsub();
  assert.equal(notices,2);
  assert.throws(()=>getApp("test-module"),/not installed/);
});

test("desktop session can persist and recover a layout and an empty workspace",async()=>{
  const data=new Map();
  globalThis.localStorage={getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v),removeItem:k=>data.delete(k)};
  const {loadSession,saveSession,resetSession}=await import("../dist/desktop/session.js");
  let session=loadSession();assert.deepEqual(session.open,["world-hub","overview"]);
  const state={version:2,windows:{atlas:{x:12,y:22,w:650,h:470,minimized:false,maximized:false}},open:["atlas"],active:"atlas"};
  saveSession(state);session=loadSession();
  assert.deepEqual(session.open,["atlas"]);assert.equal(session.windows.atlas.w,650);
  saveSession({...state,open:[],active:null,windows:{}});
  assert.deepEqual(loadSession().open,[]);
  resetSession();
  assert.deepEqual(loadSession().open,["world-hub","overview"]);
});

test("appearance validates imports and supports reversible customizations",async()=>{
  const data=new Map();
  const storage={getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v),removeItem:k=>data.delete(k)};
  globalThis.window={localStorage:storage};
  const applied=new Map();
  globalThis.document={documentElement:{style:{setProperty:(k,v)=>applied.set(k,v)},dataset:{}}};
  const theme=await import("../dist/theme/theme.js");
  theme.initializeThemes();
  assert.equal(theme.isThemeModified(),false);
  theme.patchThemeColor("accent","#123456");
  assert.equal(theme.isThemeModified(),true);
  theme.resetTheme();
  assert.equal(theme.isThemeModified(),false);
  const saved=theme.saveTheme("My Command Style");
  assert.equal(saved.name,"My Command Style");
  assert.equal(theme.isThemeModified(),false);
  const exported=theme.exportTheme();
  const imported=theme.importTheme(exported);
  assert.equal(imported.name,"My Command Style");
  assert.equal(applied.get("--ko-accent"),theme.getActiveTheme().colors.accent);
  const invalid=JSON.parse(exported);invalid.theme.colors.accent="red;background:url(javascript:evil)";
  assert.throws(()=>theme.importTheme(JSON.stringify(invalid)),/Invalid color/);
  theme.deleteSavedTheme(imported.id);
});
