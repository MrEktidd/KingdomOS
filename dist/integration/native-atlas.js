export const NATIVE_ATLAS_URL = "./dist/world-editor/index.html?kingdomos=atlas&view=1";
const PROTOCOL = "kingdomos-azgaar", VERSION = 1;
function record(x) {
    return !!x && typeof x === "object" && !Array.isArray(x);
}
function summary(x) {
    return record(x) && typeof x.seed === "string" && typeof x.generatorVersion === "string" &&
        (x.mapId === null || typeof x.mapId === "number") &&
        ["width", "height", "cells", "states", "settlements"].every(k => typeof x[k] === "number" && Number.isFinite(x[k]));
}
export class NativeAtlasSession {
    pending = new Map();
    listeners = new Set();
    frame;
    closed = false;
    booted = false;
    serial = 0;
    revision = 0;
    current = null;
    state = "connecting";
    error = null;
    constructor(frame) {
        this.frame = frame;
        window.addEventListener("message", this.onMessage);
        frame.src = NATIVE_ATLAS_URL;
    }
    getState = () => this.state;
    getSummary = () => this.current;
    getError = () => this.error;
    subscribe(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
    announce() { for (const fn of this.listeners)
        fn(); }
    setState(next) { this.state = next; this.announce(); }
    onMessage = (event) => {
        if (this.closed || event.origin !== location.origin || event.source !== this.frame.contentWindow)
            return;
        const data = event.data;
        if (!record(data) || data.protocol !== PROTOCOL || data.version !== VERSION)
            return;
        if (data.kind === "event") {
            if (data.name === "ready") {
                const role = record(data.data) ? data.data.mode : null;
                if (role !== "atlas") {
                    this.error = "Embedded Azgaar did not enable native Atlas mode.";
                    this.setState("error");
                    return;
                }
                if (!this.booted)
                    this.setState("booting");
            }
            else if (data.name === "booted") {
                this.booted = true;
                if (summary(data.data))
                    this.current = data.data;
                this.setState("ready");
            }
            else if (data.name === "world-changed" && summary(data.data)) {
                this.current = data.data;
                this.revision++;
                this.announce();
            }
            return;
        }
        if (data.kind !== "result" || typeof data.id !== "string")
            return;
        const request = this.pending.get(data.id);
        if (!request)
            return;
        this.pending.delete(data.id);
        clearTimeout(request.timer);
        if (data.name === "ok")
            request.resolve(data.data);
        else
            request.reject(new Error(record(data.data) && typeof data.data.message === "string" ? data.data.message : "Atlas map renderer rejected the command."));
    };
    async awaitCondition(check, timeoutMs = 120000) {
        if (this.closed)
            throw new Error("Atlas renderer is closed.");
        if (this.state === "error")
            throw new Error(this.error || "Atlas renderer is unavailable.");
        if (check())
            return;
        return new Promise((resolve, reject) => {
            let timer;
            const stop = this.subscribe(() => {
                if (this.closed || this.state === "error") {
                    clearTimeout(timer);
                    stop();
                    reject(new Error(this.error || "Atlas renderer closed."));
                }
                else if (check()) {
                    clearTimeout(timer);
                    stop();
                    resolve();
                }
            });
            timer = setTimeout(() => { stop(); reject(new Error("The native Atlas did not finish initializing.")); }, timeoutMs);
        });
    }
    async command(name, payload) {
        if (this.closed || !this.frame.contentWindow)
            throw new Error("Atlas renderer is closed.");
        return new Promise((resolve, reject) => {
            const id = "atlas-" + (++this.serial);
            const timer = setTimeout(() => { this.pending.delete(id); reject(new Error("Azgaar timed out responding to " + name + ".")); }, 120000);
            this.pending.set(id, { resolve: data => resolve(data), reject, timer });
            this.frame.contentWindow.postMessage({ protocol: PROTOCOL, version: VERSION, kind: "command", id, name, payload }, location.origin);
        });
    }
    /** Load the exact published .map file, never regenerate it from a seed. */
    async load(mapText, name) {
        if (!mapText || new Blob([mapText]).size > 100 * 1024 * 1024)
            throw new Error("Published world has no valid native map data.");
        await this.awaitCondition(() => this.booted);
        const before = this.revision;
        this.setState("loading");
        try {
            const blob = new Blob([mapText], { type: "text/plain" });
            const response = await this.command("import-map", { file: blob, name: name.endsWith(".map") ? name : name + ".map" });
            if (!response?.accepted)
                throw new Error("Azgaar did not accept the active world map.");
            await this.awaitCondition(() => this.revision > before && this.current !== null);
            this.setState("loaded");
            return this.current;
        }
        catch (e) {
            this.error = e instanceof Error ? e.message : String(e);
            this.setState("error");
            throw e;
        }
    }
    async fit() {
        await this.awaitCondition(() => this.booted);
        await this.command("fit");
    }
    close() {
        if (this.closed)
            return;
        this.closed = true;
        window.removeEventListener("message", this.onMessage);
        for (const pending of this.pending.values()) {
            clearTimeout(pending.timer);
            pending.reject(new Error("Native Atlas renderer closed."));
        }
        this.pending.clear();
        this.setState("closed");
        this.listeners.clear();
        this.frame.src = "about:blank";
    }
}
