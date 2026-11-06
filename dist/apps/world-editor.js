import { icon } from "../ui/icons.js";
import { registerApp } from "./registry.js";
import { connectEditor, getEditorState, getWorldSummary, generateNewMap, importMap, snapshot, subscribeEditor } from "../integration/azgaar.js";
import { downloadWorld, fileLabel, saveWorld } from "../world/library.js";
/**
 * Full Azgaar UI runs in its own same-origin iframe. We do not restyle,
 * monkey-patch, or replace any of Azgaar's native editor controls.
 */
function worldEditor(host, ctx) {
    host.className = "world-editor-app";
    const toolbar = document.createElement("div");
    toolbar.className = "world-editor-toolbar";
    const title = document.createElement("div");
    title.className = "world-editor-title";
    title.innerHTML = icon("globe", 18) + '<div><strong>World Editor</strong><small>AZGAAR FANTASY MAP GENERATOR · FULL EDITION</small></div>';
    const status = document.createElement("span");
    status.className = "world-editor-status";
    const buttons = document.createElement("div");
    buttons.className = "world-editor-buttons";
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".map,.gz";
    input.hidden = true;
    function makeButton(label, graphic, fn) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "editor-button";
        b.innerHTML = icon(graphic, 15) + '<span></span>';
        b.querySelector("span").textContent = label;
        b.addEventListener("click", fn);
        return b;
    }
    const workspace = document.createElement("div");
    workspace.className = "world-editor-frame-wrap";
    const iframe = document.createElement("iframe");
    iframe.title = "Azgaar's Fantasy Map Generator — full world editor";
    iframe.className = "world-editor-frame";
    iframe.loading = "eager";
    iframe.allow = "fullscreen; clipboard-read; clipboard-write";
    const failure = document.createElement("div");
    failure.className = "world-editor-loading";
    failure.innerHTML = icon("globe", 27) + '<strong>Preparing the world editor…</strong><span>Loading the complete Azgaar toolset.</span>';
    workspace.append(iframe, failure);
    toolbar.append(title, status, buttons, input);
    host.append(toolbar, workspace);
    let disposed = false;
    const applyStatus = () => {
        const state = getEditorState();
        const summary = getWorldSummary();
        status.textContent = state === "ready" ? (summary ? "SEED " + summary.seed : "EDITOR READY") : state === "connecting" ? "CONNECTING" : "OFFLINE";
        status.dataset.state = state;
        failure.hidden = state === "ready";
        status.title = summary ? summary.settlements + " settlements · " + summary.states + " states · " + summary.cells + " map cells" : "";
    };
    const detach = connectEditor(iframe);
    const unsubscribe = subscribeEditor(applyStatus);
    applyStatus();
    function attempt(fn) {
        void fn().catch(error => { if (!disposed)
            ctx.toast(error instanceof Error ? error.message : String(error)); });
    }
    buttons.append(makeButton("New Map", "plus", () => attempt(async () => {
        await generateNewMap();
        ctx.toast("Follow Azgaar's confirmation dialog to generate a new map.");
    })), makeButton("Import", "upload", () => input.click()), makeButton("Save to Library", "save", () => attempt(async () => {
        const summary = getWorldSummary();
        const suggested = summary?.seed ? "World " + summary.seed : "My Azgaar World";
        const name = window.prompt("Name the snapshot to save in the World Library:", suggested);
        if (name === null)
            return;
        const current = await snapshot();
        const fileName = (name.trim() || suggested).replace(/[<>:"/\\|?*\u0000-\u001f]/g, "_").slice(0, 96) + ".map";
        const blob = new Blob([current.mapText], { type: "text/plain" });
        await saveWorld(name, blob, fileName, "captured", current.summary);
        window.dispatchEvent(new Event("kingdomos:library-changed"));
        ctx.toast("Editable world snapshot saved locally. Export a backup for long-term safety.");
    })), makeButton("Export .map", "download", () => attempt(async () => {
        const current = await snapshot();
        const name = "KingdomOS-" + (current.summary.seed || "world").replace(/[^a-z0-9-_]/gi, "").slice(0, 70) + ".map";
        downloadWorld({ blob: new Blob([current.mapText], { type: "text/plain" }), fileName: name });
        ctx.toast("Native Azgaar .map export prepared.");
    })), makeButton("Library", "map", () => ctx.open("world-hub")));
    input.addEventListener("change", () => {
        const file = input.files?.[0];
        input.value = "";
        if (!file)
            return;
        if (!confirm("Load a different world into Azgaar? Unsaved changes in the current editor may be lost."))
            return;
        attempt(async () => {
            // Keep a byte-for-byte backup before Azgaar's migration pipeline alters the project.
            try {
                await saveWorld(fileLabel(file.name), file, file.name, "imported");
                window.dispatchEvent(new Event("kingdomos:library-changed"));
            }
            catch (error) {
                ctx.toast("Local backup not saved: " + (error instanceof Error ? error.message : String(error)));
            }
            await importMap(file, file.name);
            ctx.toast("Map accepted for import. Azgaar will show confirmation after loading.");
        });
    });
    iframe.addEventListener("error", () => {
        if (disposed)
            return;
        failure.hidden = false;
        failure.querySelector("strong").textContent = "Could not load the bundled editor.";
        failure.querySelector("span").textContent = "Check the KingdomOS deployment and reload the window.";
    });
    return () => {
        disposed = true;
        unsubscribe();
        detach();
        iframe.src = "about:blank";
    };
}
registerApp({
    id: "world-editor",
    title: "World Editor",
    icon: "globe",
    description: "Complete Azgaar map generator",
    width: 1200,
    height: 800,
    maximizeOnOpen: true,
    render: worldEditor
});
