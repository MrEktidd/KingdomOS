import assert from "node:assert/strict";
import {test} from "node:test";
import {zoomAt,panBy,fitCamera,limitZoom,cameraTransform} from "../dist/ui/map-camera.js";
import {notify,noticeHistory,clearNotices,subscribeNotices} from "../dist/desktop/notifications.js";

test("map camera zooms toward the pointer and restores its original anchor",()=>{
  const origin=fitCamera();
  const zoomed=zoomAt(origin,2.5,155,-80);
  assert.equal(zoomed.zoom,2.5);
  assert.equal(zoomed.x,-232.5);
  assert.equal(zoomed.y,120);
  const restored=zoomAt(zoomed,1,155,-80);
  assert.deepEqual(restored,origin);
  assert.ok(cameraTransform(panBy(origin,20,-15)).includes("translate(20px, -15px)"));
});
test("map zoom has safe bounds and doesn't produce overscaling",()=>{
  assert.equal(limitZoom(0),0.6);
  assert.equal(limitZoom(999),5);
  assert.equal(limitZoom(1.234),1.23);
});
test("notification history preserves important feedback after a toast disappears",()=>{
  clearNotices();
  const emitted=[];
  const stop=subscribeNotices(n=>emitted.push(n?.tone??"cleared"));
  notify("An import succeeded","success");
  notify("Autosave failed","error");
  assert.equal(noticeHistory()[0].message,"Autosave failed");
  assert.deepEqual(emitted.slice(0,2),["success","error"]);
  clearNotices();
  assert.deepEqual(noticeHistory(),[]);
  stop();
});
