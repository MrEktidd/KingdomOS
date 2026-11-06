/** Pure map-navigation math, independent of DOM and Azgaar. */
export interface MapCamera {zoom:number;x:number;y:number}
export const DEFAULT_CAMERA:MapCamera=Object.freeze({zoom:1,x:0,y:0});
export function limitZoom(zoom:number):number {
  return Math.min(5,Math.max(.6,Math.round(zoom*100)/100));
}
export function zoomAt(camera:MapCamera,targetZoom:number,focusX=0,focusY=0):MapCamera {
  const zoom=limitZoom(targetZoom),scale=zoom/camera.zoom;
  return {
    zoom,
    x:Math.round((focusX-(focusX-camera.x)*scale)*100)/100,
    y:Math.round((focusY-(focusY-camera.y)*scale)*100)/100
  };
}
export function panBy(camera:MapCamera,dx:number,dy:number):MapCamera {
  return {...camera,x:camera.x+dx,y:camera.y+dy};
}
export function fitCamera():MapCamera {return {...DEFAULT_CAMERA};}
export function cameraTransform(camera:MapCamera):string {
  return "translate("+camera.x+"px, "+camera.y+"px) scale("+camera.zoom+")";
}
