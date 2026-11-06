/** Extend the OS by registering an application manifest. No desktop code changes required. */
export type AppId = string;
export interface Context {
  open(id: AppId): void;
  toast(message: string): void;
}
export interface AppSpec {
  id: AppId;
  title: string;
  icon: string;
  description: string;
  width: number;
  height: number;
  maximizeOnOpen?: boolean;
  render(host: HTMLElement, context: Context): void | (() => void);
}
type Listener = () => void;
const apps = new Map<AppId, AppSpec>();
const listeners = new Set<Listener>();

export function registerApp(app: AppSpec): () => void {
  if (!/^[a-z][a-z0-9-]{1,48}$/.test(app.id)) throw new Error("Invalid app identifier: " + app.id);
  if (apps.has(app.id)) throw new Error("Duplicate app identifier: " + app.id);
  if (!app.title || !app.icon || app.width < 300 || app.height < 210) throw new Error("Invalid app manifest: " + app.id);
  apps.set(app.id, app);
  listeners.forEach(listener => listener());
  return () => { if (apps.get(app.id) === app) { apps.delete(app.id); listeners.forEach(listener => listener()); } };
}
export function getApps(): AppSpec[] { return [...apps.values()]; }
export function getApp(id: AppId): AppSpec {
  const app = apps.get(id);
  if (!app) throw new Error("Application is not installed: " + id);
  return app;
}
export function onAppsChanged(listener: Listener): () => void { listeners.add(listener); return () => listeners.delete(listener); }
