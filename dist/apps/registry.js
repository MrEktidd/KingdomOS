const apps = new Map();
const listeners = new Set();
export function registerApp(app) {
    if (!/^[a-z][a-z0-9-]{1,48}$/.test(app.id))
        throw new Error("Invalid app identifier: " + app.id);
    if (apps.has(app.id))
        throw new Error("Duplicate app identifier: " + app.id);
    if (!app.title || !app.icon || app.width < 300 || app.height < 210)
        throw new Error("Invalid app manifest: " + app.id);
    apps.set(app.id, app);
    listeners.forEach(listener => listener());
    return () => { if (apps.get(app.id) === app) {
        apps.delete(app.id);
        listeners.forEach(listener => listener());
    } };
}
export function getApps() { return [...apps.values()]; }
export function getApp(id) {
    const app = apps.get(id);
    if (!app)
        throw new Error("Application is not installed: " + id);
    return app;
}
export function onAppsChanged(listener) { listeners.add(listener); return () => listeners.delete(listener); }
