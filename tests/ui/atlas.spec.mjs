import {test,expect} from "@playwright/test";

const testMap={
  summary:{
    generatorVersion:"1.156",mapId:123456789,seed:"422795537",
    width:1536,height:784,cells:600,states:4,settlements:11
  },
  name:"The Northern March"
};
async function prepareAtlas(page) {
  await page.goto("/");
  await page.evaluate(async data=>{
    const {publishActiveWorld}=await import("./dist/world/current.js");
    const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1536 784"><rect width="1536" height="784" fill="#7795ab"/><path d="M100 100L900 85 1350 360 930 650 225 700Z" fill="#b2c5a3"/><circle cx="745" cy="345" r="45" fill="#d0b381"/></svg>';
    const preview=new Blob([svg],{type:"image/svg+xml"});
    await publishActiveWorld({summary:data.summary,mapText:"Native map test document",preview},data.name);
  },testMap);
  await page.locator('.dock-app[aria-label="World Atlas"]').click();
  await expect(page.locator('.os-window[aria-label="World Atlas"] .atlas-v2-image')).toBeVisible();
}

for(const [width,height] of [[1440,900],[1130,800],[850,720],[670,670],[480,700]]) {
  test("Atlas toolbar fits without overlapping at "+width+"×"+height,async({page})=>{
    await page.setViewportSize({width,height});
    await prepareAtlas(page);
    const measurements=await page.locator(".atlas-v2-header").evaluate(header=>{
      const elements=header.querySelectorAll(".atlas-v2-toolbar button, .atlas-v2-toolbar summary");
      const a=header.getBoundingClientRect();
      const items=[...elements].map(el=>el.getBoundingClientRect()).filter(rect=>rect.width>0&&rect.height>0).map(r=>({x:r.x,y:r.y,right:r.right,bottom:r.bottom}));
      return {bounds:{x:a.x,y:a.y,right:a.right,bottom:a.bottom},items};
    });
    expect(measurements.items.length).toBeGreaterThanOrEqual(5);
    const {bounds,items}=measurements;
    for(const rect of items){
      expect(rect.x).toBeGreaterThanOrEqual(bounds.x-2);
      expect(rect.right).toBeLessThanOrEqual(bounds.right+2);
      expect(rect.y).toBeGreaterThanOrEqual(bounds.y-2);
      expect(rect.bottom).toBeLessThanOrEqual(bounds.bottom+2);
    }
    for(let i=0;i<items.length;i++)for(let j=i+1;j<items.length;j++){
      const a=items[i],b=items[j];
      const overlapX=Math.min(a.right,b.right)-Math.max(a.x,b.x);
      const overlapY=Math.min(a.bottom,b.bottom)-Math.max(a.y,b.y);
      expect(overlapX>2&&overlapY>2,
        "toolbar controls "+i+" and "+j+" overlap at "+width+"x"+height).toBe(false);
    }
  });
}

test("Atlas pan, zoom, fit and world rename keep the active project intact",async({page})=>{
  await page.setViewportSize({width:1280,height:850});
  await prepareAtlas(page);
  await expect(page.locator(".system-world")).toContainText(testMap.name);
  const viewport=page.locator(".atlas-v2-viewport");
  const box=await viewport.boundingBox();
  expect(box).not.toBeNull();
  await page.mouse.move(box.x+box.width/2,box.y+box.height/2);
  await page.mouse.wheel(0,-440);
  await expect(page.locator(".atlas-v2-zoom")).not.toHaveText("100%");
  await page.mouse.down();
  await page.mouse.move(box.x+box.width/2+65,box.y+box.height/2+35,{steps:5});
  await page.mouse.up();
  const transform=await page.locator(".atlas-v2-map-stage").evaluate(el=>el.style.transform);
  expect(transform).toContain("translate(");
  expect(transform).not.toContain("translate(0px, 0px)");
  await page.getByRole("button",{name:"Fit to window"}).click();
  await expect(page.locator(".atlas-v2-zoom")).toHaveText("100%");
  const atlas=page.locator('.os-window[aria-label="World Atlas"]');
  await atlas.locator(".ko-action-menu summary").click();
  await atlas.getByRole("button",{name:"Rename world"}).click();
  const dialog=page.locator("dialog.ko-dialog");
  await expect(dialog).toBeVisible();
  await dialog.locator("input").fill("Kingdom of Arvendale");
  await dialog.getByRole("button",{name:"Save"}).click();
  await expect(atlas.locator(".atlas-v2-project-name")).toHaveText("Kingdom of Arvendale");
  await expect(page.locator(".system-world")).toContainText("Kingdom of Arvendale");
  const native=await page.evaluate(async()=>{
    const {loadWorldSlot}=await import("./dist/world/current.js");
    const world=await loadWorldSlot("active");
    return {text:world?.mapText,seed:world?.summary.seed};
  });
  expect(native).toEqual({text:"Native map test document",seed:testMap.summary.seed});
});

test("Appearance presets use inherited theme tokens and preserve the map",async({page})=>{
  await prepareAtlas(page);
  await page.locator('.dock-app[aria-label="Appearance"]').click();
  await page.locator(".preset").filter({hasText:"Parchment"}).click();
  const bg=await page.evaluate(()=>getComputedStyle(document.documentElement).getPropertyValue("--ko-background").trim());
  expect(bg.toLowerCase()).toBe("#d9d5c9");
  await expect(page.locator(".atlas-v2-image")).toBeVisible();
});

test("Notification history retains messages after transient toasts",async({page})=>{
  await page.goto("/");
  await page.evaluate(async()=>{
    const {notify}=await import("./dist/desktop/notifications.js");
    notify("A world project was saved.","success");
  });
  await page.getByRole("button",{name:"Open notifications"}).click();
  await expect(page.locator(".notification-list")).toContainText("A world project was saved.");
  await page.getByRole("button",{name:"Clear all"}).click();
  await expect(page.locator(".notification-list")).toContainText("No notifications");
});

test("Closing the World Editor parks its iframe and reopening reuses the same node",async({page})=>{
  await page.setViewportSize({width:1365,height:850});
  await page.goto("/");
  await page.locator('.dock-app[aria-label="World Editor"]').click();
  const editor=page.locator('.os-window[aria-label="World Editor"]');
  await expect(editor.locator("iframe")).toHaveAttribute("src",/world-editor/);
  await page.evaluate(()=>{
    window.__originalEditorFrame=document.querySelector('.os-window[aria-label="World Editor"] iframe');
  });
  await editor.locator('[data-action="close"]').click();
  await expect(editor).toHaveClass(/parked/);
  await page.locator('.dock-app[aria-label="World Editor"]').click();
  await expect(editor).not.toHaveClass(/parked/);
  const reused=await page.evaluate(()=>window.__originalEditorFrame===document.querySelector('.os-window[aria-label="World Editor"] iframe'));
  expect(reused).toBe(true);
});
