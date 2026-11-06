import {test,expect} from "@playwright/test";

const summary={
  generatorVersion:"1.156",mapId:123456789,seed:"422795537",
  width:1536,height:784,cells:600,states:4,settlements:11
};
const name="The Northern March";
const stub=String.raw`<!doctype html><html><head><title>Native Atlas Test Renderer</title></head><body>
<button id="optionsTrigger">Menu</button><button id="layersTab">Layers</button><button id="styleTab">Style</button>
<svg id="map" width="100%" height="100%" viewBox="0 0 1536 784"><g id="viewbox"><rect width="1536" height="784" fill="#7795ab"/><path d="M100 100L900 85 1350 360 930 650 225 700Z" fill="#b2c5a3"/></g></svg>
<script>
const PROTOCOL="kingdomos-azgaar";
function send(kind,name,data,id){parent.postMessage({protocol:PROTOCOL,version:1,kind,name,data,id},location.origin);}
const summary={generatorVersion:"1.156",mapId:123456789,seed:"422795537",width:1536,height:784,cells:600,states:4,settlements:11};
addEventListener("message",event=>{
 if(event.origin!==location.origin||event.source!==parent)return;
 const msg=event.data;
 if(msg.protocol!==PROTOCOL||msg.version!==1)return;
 if(msg.name==="import-map"){send("result","ok",{accepted:true},msg.id);setTimeout(()=>send("event","world-changed",summary),0);}
 else send("result","ok",{ok:true},msg.id);
});
send("event","ready",{mode:"atlas",generatorVersion:"1.156",protocolVersion:1});
setTimeout(()=>send("event","booted",summary),0);
</script></body></html>`;
async function publish(page,mapText="test native map bytes"){
  await page.evaluate(async ({mapText,summary,name})=>{
    const {publishActiveWorld}=await import("./dist/world/current.js");
    await publishActiveWorld({mapText,summary},name);
  },{mapText,summary,name});
}
async function prepareAtlas(page){
  await page.route("**/dist/world-editor/index.html?kingdomos=atlas&view=1",route=>
    route.fulfill({status:200,contentType:"text/html",body:stub}));
  await page.goto("/");
  await publish(page);
  await page.locator('.dock-app[aria-label="World Atlas"]').click();
  await expect(page.locator(".atlas-native-frame")).toBeVisible();
  await expect(page.locator(".atlas-native-footer")).toContainText("Native map ready");
}

for(const [width,height] of [[1440,900],[1130,800],[850,720],[670,670],[480,700]]){
  test("Native Atlas actions fit without overlap at "+width+"×"+height,async({page})=>{
    await page.setViewportSize({width,height});
    await prepareAtlas(page);
    const bounds=await page.locator(".atlas-native-header").evaluate(header=>{
      const rect=header.getBoundingClientRect();
      const items=[...header.querySelectorAll(".atlas-native-actions button, .atlas-native-actions summary")]
        .map(el=>el.getBoundingClientRect()).filter(x=>x.width&&x.height)
        .map(x=>({x:x.x,y:x.y,right:x.right,bottom:x.bottom}));
      return {header:{x:rect.x,y:rect.y,right:rect.right,bottom:rect.bottom},items};
    });
    expect(bounds.items.length).toBeGreaterThan(2);
    for(const box of bounds.items){
      expect(box.x).toBeGreaterThanOrEqual(bounds.header.x-2);
      expect(box.right).toBeLessThanOrEqual(bounds.header.right+2);
      expect(box.y).toBeGreaterThanOrEqual(bounds.header.y-2);
      expect(box.bottom).toBeLessThanOrEqual(bounds.header.bottom+2);
    }
    for(let i=0;i<bounds.items.length;i++)for(let j=i+1;j<bounds.items.length;j++){
      const a=bounds.items[i],b=bounds.items[j];
      const intersectionX=Math.min(a.right,b.right)-Math.max(a.x,b.x);
      const intersectionY=Math.min(a.bottom,b.bottom)-Math.max(a.y,b.y);
      expect(intersectionX>2&&intersectionY>2,"Atlas controls must not overlap").toBe(false);
    }
  });
}

test("Native Atlas rename and information panel preserve the published .map",async({page})=>{
  await page.setViewportSize({width:1280,height:850});
  await prepareAtlas(page);
  const atlas=page.locator('.os-window[aria-label="World Atlas"]');
  await atlas.getByRole("button",{name:"World information"}).click();
  await expect(atlas.locator(".atlas-native-info")).toContainText("1536 × 784");
  await atlas.getByRole("button",{name:"World information"}).click();
  await atlas.locator(".ko-action-menu summary").click();
  await atlas.getByRole("button",{name:"Rename world"}).click();
  const dialog=page.locator("dialog.ko-dialog");
  await expect(dialog).toBeVisible();
  await dialog.locator("input").fill("Kingdom of Arvendale");
  await dialog.getByRole("button",{name:"Save"}).click();
  await expect(atlas.locator(".atlas-native-title strong")).toHaveText("Kingdom of Arvendale");
  await expect(page.locator(".system-world")).toContainText("Kingdom of Arvendale");
  await expect(atlas.locator(".atlas-native-footer")).toContainText("Native map ready");
  const persisted=await page.evaluate(async()=>{
    const {loadWorldSlot}=await import("./dist/world/current.js");
    const saved=await loadWorldSlot("active");
    return {name:saved?.name,mapText:saved?.mapText,preview:saved?.preview};
  });
  expect(persisted).toEqual({name:"Kingdom of Arvendale",mapText:"test native map bytes",preview:null});
});

test("Appearance preset updates OS chrome without replacing native Atlas",async({page})=>{
  await prepareAtlas(page);
  await page.locator('.dock-app[aria-label="Appearance"]').click();
  await page.locator(".preset").filter({hasText:"Parchment"}).click();
  const background=await page.evaluate(()=>getComputedStyle(document.documentElement).getPropertyValue("--ko-background").trim());
  expect(background.toLowerCase()).toBe("#d9d5c9");
  await expect(page.locator(".atlas-native-frame")).toBeVisible();
});

test("World Editor still parks and reuses its native iframe",async({page})=>{
  await page.goto("/");
  await page.locator('.dock-app[aria-label="World Editor"]').click();
  const editor=page.locator('.os-window[aria-label="World Editor"]');
  await expect(editor.locator("iframe")).toHaveAttribute("src",/kingdomos=1/);
  await page.evaluate(()=>{window.__editorFrame=document.querySelector('.os-window[aria-label="World Editor"] iframe');});
  await editor.locator('[data-action="close"]').click();
  await expect(editor).toHaveClass(/parked/);
  await page.locator('.dock-app[aria-label="World Editor"]').click();
  await expect(editor).not.toHaveClass(/parked/);
  expect(await page.evaluate(()=>window.__editorFrame===document.querySelector('.os-window[aria-label="World Editor"] iframe'))).toBe(true);
});

test("Actual Azgaar Atlas loads a native project and exposes Layers and Style, not editing tools",async({page})=>{
  test.setTimeout(85000);
  await page.setViewportSize({width:1330,height:860});
  await page.addInitScript(()=>{
    if(window===window.top){
      window.__atlasBridgeLog=[];
      window.addEventListener("message",event=>{
        if(event.data?.protocol==="kingdomos-azgaar"){
          window.__atlasBridgeLog.push({kind:event.data.kind,name:event.data.name,seed:event.data.data?.seed});
        }
      });
    }
  });
  await page.goto("/");
  const response=await page.request.get("/tests/fixtures/world.map");
  expect(response.ok(),"CI should stage an actual Azgaar .map fixture").toBe(true);
  const mapText=await response.text();
  expect(mapText.length).toBeGreaterThan(1000000);
  await publish(page,mapText);
  await page.locator('.dock-app[aria-label="World Atlas"]').click();
  try{
    await expect(page.locator(".atlas-native-footer")).toContainText("Native map ready",{timeout:45000});
  }catch(error){
    const diagnostic=await page.evaluate(()=>{
      const iframe=document.querySelector(".atlas-native-frame");
      const native=iframe?.contentWindow;
      let detail=null;
      try{
        const doc=native?.document;
        detail={
          readyState:doc?.readyState,
          location:native?.location.href,
          mode:doc?.documentElement.dataset.kingdomosMode,
          title:doc?.title,
          mapExists:!!doc?.querySelector("#map"),
          viewboxExists:!!doc?.querySelector("#viewbox"),
          mapSeed:native?.options?.map?.seed,
          viewOnly:native?.options?.map?.viewOnly,
          cellCount:native?.pack?.cells?.i?.length,
          tooltip:doc?.querySelector("#tooltip")?.textContent,
          loadingText:doc?.querySelector("#loading-text")?.textContent,
          dialogText:doc?.querySelector("#dialogs")?.textContent?.slice(0,300)
        };
      }catch(e){detail={error:String(e)};}
      return {
        bridgeEvents:window.__atlasBridgeLog,
        iframe:detail,
        atlasBanner:document.querySelector(".atlas-native-banner")?.textContent,
        footer:document.querySelector(".atlas-native-footer")?.textContent
      };
    });
    throw new Error("Native Atlas integration diagnostic: "+JSON.stringify(diagnostic)+"; "+String(error));
  }
  const native=page.frameLocator(".atlas-native-frame");
  const map=native.locator("#map");
  await expect(map).toBeVisible();
  await expect(native.locator("html")).toHaveAttribute("data-kingdomos-mode","atlas");
  await native.locator("#optionsTrigger").click();
  await expect(native.locator("#layersTab")).toBeVisible();
  await expect(native.locator("#styleTab")).toBeVisible();
  await expect(native.locator("#optionsTab")).toBeHidden();
  await expect(native.locator("#toolsTab")).toBeHidden();
  await expect(native.locator("#newMapButton")).toBeHidden();
  await expect(native.locator("#searchButton")).toBeHidden();
  await native.locator("#styleTab").click();
  await expect(native.locator("#styleContent")).toBeVisible();
  // Alt or F2 should not invoke the editor-only generation UI.
  await native.locator("#map").click({position:{x:50,y:50}});
  await page.keyboard.press("F2");
  await expect(native.locator("#regenerate")).toBeHidden();
  await native.locator("#map").click({button:"right",position:{x:50,y:50}});
  await expect(native.locator("#contextMenu")).toHaveCount(0);
});
