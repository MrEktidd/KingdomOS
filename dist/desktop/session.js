const KEY = "kingdomos.desktop.v2";
const LEGACY = "kingdomos.desktop.v1";
const isObj = (x) => !!x && typeof x === "object" && !Array.isArray(x);
const isLayout = (v) => {
    if (!isObj(v))
        return false;
    return ["x", "y", "w", "h"].every(key => typeof v[key] === "number" && Number.isFinite(v[key]) && Math.abs(v[key]) < 100000)
        && v.w >= 200 && v.h >= 180
        && typeof v.minimized === "boolean" && typeof v.maximized === "boolean";
};
export function loadSession() {
    const fallback = { version: 2, windows: {}, open: ["atlas", "overview"], active: "overview" };
    try {
        const raw = localStorage.getItem(KEY);
        if (raw) {
            const data = JSON.parse(raw);
            if (isObj(data) && data.version === 2 && isObj(data.windows) && Array.isArray(data.open)) {
                const windows = {};
                for (const [id, value] of Object.entries(data.windows))
                    if (isLayout(value))
                        windows[id] = value;
                const open = [...new Set(data.open.filter((id) => typeof id === "string" && /^[a-z][a-z0-9-]{1,48}$/.test(id)))].slice(0, 30);
                return { version: 2, windows, open, active: typeof data.active === "string" ? data.active : null };
            }
        }
        const old = localStorage.getItem(LEGACY);
        if (old) {
            const data = JSON.parse(old);
            if (isObj(data))
                for (const [id, value] of Object.entries(data))
                    if (isLayout(value))
                        fallback.windows[id] = value;
        }
    }
    catch { /* blocked storage or corrupt data: launch defaults */ }
    return fallback;
}
export function saveSession(session) {
    try {
        localStorage.setItem(KEY, JSON.stringify(session));
    }
    catch { /* private browsing / full storage */ }
}
export function resetSession() {
    try {
        localStorage.removeItem(KEY);
    }
    catch { /* private browsing */ }
}
