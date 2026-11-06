const entries = [];
const listeners = new Set();
let number = 0;
export function notify(message, tone = "info") {
    const entry = { id: ++number, message, tone, createdAt: Date.now() };
    entries.unshift(entry);
    if (entries.length > 50)
        entries.length = 50;
    for (const listener of listeners)
        listener(entry);
    return entry;
}
export function noticeHistory() { return entries.slice(); }
export function clearNotices() { entries.length = 0; for (const listener of listeners)
    listener(null); }
export function subscribeNotices(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}
