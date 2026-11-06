import { icon } from "../ui/icons.js";
import { actionButton, actionMenu, confirmAction, disposeActionMenu, promptText, statusChip, toolbarGroup } from "../ui/components.js";
import { registerApp } from "./registry.js";
import { NativeAtlasSession } from "../integration/native-atlas.js";
import { getEditorState, getWorldSummary, importMapAndWait, skipEditorRecoveryOnce, snapshot } from "../integration/azgaar.js";
import { loadWorldSlot, publishActiveWorld, renameActiveWorld, subscribeCurrentWorld, worldMapBlob } from "../world/current.js";
/**
 * The Atlas uses Azgaar's actual renderer and navigation stack.
 * Only its parent toolbar and status chrome belong to KingdomOS.
 * No exported SVG image or second pan/zoom implementation is used.
 */
function mountAtlas(host, ctx) {
    host.className = "atlas-app atlas-native-app";
    const toolbar = document.createElement("header");
    toolbar.className = "atlas-native-header";
    const title = document.createElement("div");
    title.className = "atlas-native-title";
    title.innerHTML = '<span class="eyebrow">ACTIVE WORLD / NATIVE AZGAAR MAP</span>';
    const name = document.createElement("strong");
    name.textContent = "No active world";
    title.append(name);
    const actions = document.createElement("div");
    actions.className = "atlas-native-actions";
    const area = document.createElement("section");
    area.className = "atlas-native-area";
    const information = document.createElement("aside");
    information.className = "atlas-native-info";
    information.hidden = true;
    const banner = document.createElement("div");
    banner.className = "atlas-native-banner";
    banner.setAttribute("role", "status");
    const footer = document.createElement("footer");
    footer.className = "atlas-native-footer";
    const footerStatus = document.createElement("div");
    const footerInfo = document.createElement("span");
    footer.append(footerStatus, footerInfo);
    area.append(banner, information);
    toolbar.append(title, actions);
    host.append(toolbar, area, footer);
    let active = null;
    let session = null;
    let frame = null;
    let appliedMapText = null;
    let disposed = false, operation = 0, busy = false;
    let queue = Promise.resolve();
    let unsubscribeSession = () => { };
    function notifyError(message) { ctx.toast(message, "error"); }
    function schedule(work) {
        queue = queue.then(work).catch(error => { if (!disposed)
            notifyError(error instanceof Error ? error.message : String(error)); });
    }
    function setBusy(next) {
        busy = next;
        updateButton.disabled = next;
        updateButton.querySelector("span").textContent = next ? "Publishing…" : "Update Atlas";
    }
    function showBanner(message, kind = "loading") {
        banner.hidden = false;
        banner.dataset.state = kind;
        banner.replaceChildren();
        const graphic = document.createElement("span");
        graphic.innerHTML = icon(kind === "error" ? "info" : "globe", 23);
        const text = document.createElement("span");
        text.textContent = message;
        banner.append(graphic, text);
    }
    function updateStatus() {
        const state = session?.getState() ?? "closed";
        if (!active) {
            footerStatus.replaceChildren(statusChip("No published world", "warning"));
            return;
        }
        const display = state === "loaded" ? "Native map ready" : state === "error" ? "Map load failed" : "Loading native map";
        footerStatus.replaceChildren(statusChip(display, state === "loaded" ? "success" : state === "error" ? "error" : "neutral"));
        if (state === "error")
            showBanner(session?.getError() || "Azgaar failed to load the native project.", "error");
    }
    function connect() {
        if (session)
            return session;
        frame = document.createElement("iframe");
        frame.className = "atlas-native-frame";
        frame.title = "Azgaar native Atlas: interactive world map, layers, style, and globe";
        frame.loading = "eager";
        frame.allow = "fullscreen";
        frame.setAttribute("aria-label", "Native interactive Azgaar map");
        // Append before connecting: the native renderer measures its SVG viewport.
        area.insertBefore(frame, area.firstChild);
        session = new NativeAtlasSession(frame);
        unsubscribeSession = session.subscribe(updateStatus);
        return session;
    }
    function disconnect() {
        unsubscribeSession();
        unsubscribeSession = () => { };
        session?.close();
        session = null;
        frame?.remove();
        frame = null;
        appliedMapText = null;
    }
    async function updateAtlasFromEditor() {
        if (busy)
            return;
        if (getEditorState() !== "ready") {
            ctx.toast("Open World Editor to publish your changes, then return to Atlas.", "warning");
            ctx.open("world-editor");
            return;
        }
        setBusy(true);
        try {
            const current = await snapshot();
            const old = await loadWorldSlot("active");
            if (old && (old.summary.seed !== current.summary.seed || old.summary.mapId !== current.summary.mapId)) {
                if (!await confirmAction("Replace the active world?", "This will publish the map open in World Editor. Saved World Library backups are unaffected."))
                    return;
            }
            const label = old && old.summary.seed === current.summary.seed && old.summary.mapId === current.summary.mapId
                ? old.name : "World " + current.summary.seed;
            await publishActiveWorld(current, label);
            ctx.toast("World Atlas updated from the editor's native map.", "success");
        }
        catch (error) {
            notifyError("Atlas update failed: " + (error instanceof Error ? error.message : String(error)));
        }
        finally {
            setBusy(false);
        }
    }
    async function editWorld() {
        if (!active) {
            ctx.open("world-hub");
            return;
        }
        const opening = getWorldSummary();
        if (getEditorState() === "ready" && opening?.mapId === active.summary.mapId && opening.seed === active.summary.seed) {
            ctx.open("world-editor");
            return;
        }
        if (getEditorState() === "ready" && !await confirmAction("Open Atlas world in editor?", "This replaces the current editor map with the published Atlas version. Preserve unsaved editor changes first."))
            return;
        if (getEditorState() !== "ready")
            skipEditorRecoveryOnce();
        ctx.open("world-editor");
        try {
            await importMapAndWait(worldMapBlob(active), active.name + ".map");
            ctx.toast("Active world loaded into the full editor.", "success");
        }
        catch (error) {
            notifyError("Could not load the Atlas map in World Editor: " + (error instanceof Error ? error.message : String(error)));
        }
    }
    async function rename() {
        if (!active)
            return;
        const value = await promptText("Rename active world", "Change the displayed world name without altering its native map.", active.name, 100);
        if (!value || value === active.name)
            return;
        try {
            await renameActiveWorld(value);
            ctx.toast("World renamed.", "success");
        }
        catch (error) {
            notifyError("World rename failed: " + (error instanceof Error ? error.message : String(error)));
        }
    }
    function exportNative() {
        if (!active)
            return;
        const url = URL.createObjectURL(worldMapBlob(active));
        const a = document.createElement("a");
        a.href = url;
        a.download = (active.name.replace(/[^a-z0-9 _-]/gi, "_").slice(0, 70) || "world") + ".map";
        document.body.append(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 30000);
    }
    const editButton = actionButton({ label: "Edit world", icon: "pencil", tone: "primary", onClick: () => void editWorld() });
    editButton.dataset.testid = "atlas-edit";
    const updateButton = actionButton({ label: "Update Atlas", icon: "refresh-cw", onClick: () => void updateAtlasFromEditor() });
    updateButton.dataset.testid = "atlas-sync";
    const infoButton = actionButton({ label: "World information", icon: "info", iconOnly: true, onClick: () => {
            information.hidden = !information.hidden;
            infoButton.setAttribute("aria-expanded", String(!information.hidden));
        } });
    infoButton.setAttribute("aria-expanded", "false");
    const menu = actionMenu("World actions", [
        { label: "World Hub", icon: "map", onClick: () => ctx.open("world-hub") },
        { label: "Rename world", icon: "pencil", onClick: () => void rename() },
        { label: "Export native .map", icon: "download", onClick: exportNative }
    ]);
    actions.append(toolbarGroup("World actions", editButton, updateButton, menu, infoButton));
    function info(world) {
        information.replaceChildren();
        const heading = document.createElement("strong");
        heading.textContent = "World information";
        const close = actionButton({ label: "Close", icon: "close", iconOnly: true, onClick: () => {
                information.hidden = true;
                infoButton.setAttribute("aria-expanded", "false");
            } });
        const top = document.createElement("div");
        top.className = "atlas-native-info-head";
        top.append(heading, close);
        const dl = document.createElement("dl");
        const fields = [
            ["World", world.name], ["Seed", world.summary.seed],
            ["States", String(world.summary.states)], ["Settlements", String(world.summary.settlements)],
            ["Cells", world.summary.cells.toLocaleString()],
            ["Dimensions", world.summary.width + " × " + world.summary.height],
            ["Generator", world.summary.generatorVersion],
            ["Published", new Date(world.savedAt).toLocaleString()]
        ];
        for (const [label, value] of fields) {
            const dt = document.createElement("dt"), dd = document.createElement("dd");
            dt.textContent = label;
            dd.textContent = value;
            dl.append(dt, dd);
        }
        information.append(top, dl);
    }
    async function refresh() {
        const revision = ++operation;
        const world = await loadWorldSlot("active");
        if (disposed || revision !== operation)
            return;
        active = world;
        name.textContent = world?.name || "No active world";
        name.title = world?.name || "";
        editButton.disabled = !world;
        infoButton.disabled = !world;
        footerInfo.textContent = world ? world.summary.width + " × " + world.summary.height + " · SEED " + world.summary.seed : "WORLD NOT PUBLISHED";
        if (!world) {
            disconnect();
            showBanner("No active world yet. Open World Editor, create or import a map, then choose Send to Atlas.", "empty");
            updateStatus();
            return;
        }
        info(world);
        if (session?.getState() === "error") {
            disconnect(); // Recover from a failed native import with a fresh renderer.
        }
        if (appliedMapText === world.mapText && session?.getState() === "loaded") {
            updateStatus();
            return; // Renames don't force a multi-megabyte reload or lose camera position.
        }
        showBanner("Opening Azgaar's native map. Layers, Style and zoom will be available when it finishes loading.");
        const renderer = connect();
        updateStatus();
        try {
            await renderer.load(world.mapText, world.name + ".map");
            if (disposed || revision !== operation)
                return;
            appliedMapText = world.mapText;
            banner.hidden = true;
            updateStatus();
        }
        catch (error) {
            if (disposed || revision !== operation)
                return;
            showBanner("Unable to open the native map: " + (error instanceof Error ? error.message : String(error)), "error");
            updateStatus();
        }
    }
    const stopWorld = subscribeCurrentWorld(() => schedule(refresh));
    const windowEl = host.closest(".os-window");
    // Parking retains the iframe and its D3 camera. Do not call fitMapToScreen
    // on resume, as that would reset the player's zoom and browsing position.
    const onResume = () => { updateStatus(); };
    windowEl?.addEventListener("kingdomos:window-resumed", onResume);
    schedule(refresh);
    return () => {
        disposed = true;
        stopWorld();
        windowEl?.removeEventListener("kingdomos:window-resumed", onResume);
        disposeActionMenu(menu);
        disconnect();
    };
}
registerApp({
    id: "atlas", title: "World Atlas", icon: "globe",
    description: "Interactive Azgaar map, Layers and Style",
    width: 1120, height: 740, maximizeOnOpen: true, keepAliveOnClose: true,
    render: mountAtlas
});
