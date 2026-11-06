# KingdomOS v0.0.3.3 — Native Atlas

## Goal
World Atlas uses the same native Azgaar SVG renderer as World Editor rather than a flattened map image. It preserves dynamically rendered layers, styles, labels, navigation, globe/3D views and map tooltips.

## Architecture
- World Editor: existing standalone Azgaar iframe with \`?kingdomos=1\` and full authoring controls.
- World Atlas: a separate Azgaar iframe with \`?kingdomos=atlas&view=1\` and restricted browsing controls.
- Published active world: native \`.map\` stored in \`src/world/current.ts\`. The Atlas loads the exact published project after Azgaar boots; it never generates a replacement from the seed.
- Parent client: \`src/integration/native-atlas.ts\`, independent of the Editor bridge; same-origin, exact-source message validation.
- Native fork mode: \`src/app/kingdomos-mode.ts\` and \`src/app/kingdomos-atlas.css\`, imported only when Azgaar is compiled, so standalone editor operation is unaffected.

## Permissions
Atlas exposes Layers, Style and About, including the native map navigation controls. Its Options and Tools tabs, generation, editor-only sticky actions, file load/save/export, command search, and assistant entry points are hidden.

These are behavioral restrictions as well as CSS: view-only is reapplied after native map loading, mutation hotkeys are blocked, map click-to-edit and context menus are disabled, drag/drop loading is prevented, direct restricted tab calls are blocked, and the bridge rejects editor-only \`snapshot\`, \`capture\` and \`new-map\` commands. The parent can still import an already-published map via the bridge.

This is **not** a security sandbox for untrusted same-origin scripts. It is the correct in-product browse-only experience.

## Persistence
Publishing no longer requires an SVG preview: new active worlds store \`preview:null\`, preserving the native editable .map as the source of truth. Previously saved worlds with SVG previews continue to load. Editor recovery drafts and World Library entries are unchanged.

Closing the Atlas parks the iframe so it retains its independent pan, zoom, layer and style state in that browser tab. Republishing a different native map reloads its initial presentation; separate persisted Atlas presentation profiles are future work.

## Tests
CI builds the pinned Azgaar fork, copies the fork's native \`tests/fixtures/1.154.0.map\` fixture into a temporary served test directory, then runs Chromium integration tests verifying actual native loading, browsing tabs, no authoring controls and responsive KingdomOS chrome.

## Next
v0.0.4 — typed world entity selection, shared IDs, data subscriptions, and the foundations of world-edit reconciliation and simulation.
