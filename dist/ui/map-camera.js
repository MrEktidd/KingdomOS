export const DEFAULT_CAMERA = Object.freeze({ zoom: 1, x: 0, y: 0 });
export function limitZoom(zoom) {
    return Math.min(5, Math.max(.6, Math.round(zoom * 100) / 100));
}
export function zoomAt(camera, targetZoom, focusX = 0, focusY = 0) {
    const zoom = limitZoom(targetZoom), scale = zoom / camera.zoom;
    return {
        zoom,
        x: Math.round((focusX - (focusX - camera.x) * scale) * 100) / 100,
        y: Math.round((focusY - (focusY - camera.y) * scale) * 100) / 100
    };
}
export function panBy(camera, dx, dy) {
    return { ...camera, x: camera.x + dx, y: camera.y + dy };
}
export function fitCamera() { return { ...DEFAULT_CAMERA }; }
export function cameraTransform(camera) {
    return "translate(" + camera.x + "px, " + camera.y + "px) scale(" + camera.zoom + ")";
}
