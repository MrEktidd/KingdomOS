# KingdomOS

**A living-world kingdom simulation and worldbuilding desktop, built around full creative freedom.**

### [Launch KingdomOS — live web app](https://mrektidd.github.io/KingdomOS/)

[Source code](https://github.com/MrEktidd/KingdomOS) · [World integration design](docs/world-integration.md)

KingdomOS is a sandbox project where players can generate, import, edit and eventually simulate entire worlds. The full map editor is the familiar **Azgaar's Fantasy Map Generator**, included directly inside the KingdomOS desktop and compiled from the separate [Azgaar-map fork](https://github.com/MrEktidd/Azgaar-map).

## v0.0.3.2 — Interface & Experience Overhaul

- **Atlas toolbar repaired:** replaced fixed-width legacy icon rules with responsive, content-sized groups and an overflow menu. Tested at desktop and narrow-window sizes.
- **Map navigation:** drag to pan, wheel zoom toward cursor, +/- controls, fit and keyboard map navigation.
- **World information:** a collapsible panel shows dimensions, seed, map cells, states, settlements and publication time. Rename a world without modifying Azgaar's native project; export `.map` from the Atlas.
- **Shared UI components:** `src/ui/components.ts` and CSS use live theme tokens for toolbar, button, menu, status indicator and consistent browser dialogs.
- **OS world status:** the system header now shows the active world rather than the obsolete "WORLD NOT LOADED" label.
- **Notification history:** a taskbar bell shows important messages after toasts fade, with clear-history controls.
- **Editor save feedback:** the recovery indicator distinguishes pending, saving, saved, published and failed work. Import, save and replace prompts use common dialogs.
- **World Hub fixes:** map imports wait for actual Azgaar load completion; world generation/import from a cold editor correctly overrides previous workspace recovery.
- **Keyboard safeguards:** desktop shortcuts no longer override form fields.
- **Regression suite:** pure camera and notification tests, world renaming, and Chromium UI tests for responsive controls, map interactions, themes, and editor keep-alive.

**Limits:** Atlas remains a map illustration with an interactive camera, not yet a semantic simulation viewport. Editor recovery is checkpoint-based, and native `.map` exports remain advisable as durable backups.

## v0.0.3.1 — Active World, Editor Recovery and Atlas Handoff

- **Current map survives closing the World Editor:** the editor is parked, not destroyed, when its OS window is closed. Reopening the app resumes the exact same in-memory Azgaar instance and unsaved editing state.
- **Reload recovery:** KingdomOS persists an editable native `.map` draft in IndexedDB when you close the editor, after world generation/import, and approximately every 60 seconds while the editor is open. On browser reload, the latest recoverable draft (or the active Atlas world) is imported back into the editor.
- **Send to Atlas:** capture Azgaar's full native project and a genuine full-map SVG illustration together. This publishes an **active world** independently of any library backups.
- **Real World Atlas:** displays the actual published map, supports zoom, and provides Edit World and Update Atlas commands.
- **Linked world updates:** closing an editor that is still editing the active Atlas world refreshes the published map. Switching to a different map requires selecting Send to Atlas again.
- **World Hub imports** override automatic session recovery rather than racing it.

**The Atlas visual is currently a read-only authored map, not yet a political/economic gameplay renderer.** Native Azgaar editing happens in World Editor. No simulation engine or automatic simulation reconciliation has been added.

### Important data-safety distinctions

- **Closing the editor window** does not close the embedded Azgaar application; its state persists for the lifetime of the KingdomOS browser tab.
- **Reloading the page** restores the latest successfully stored editor draft, not every unsaved mouse action. The periodic autosave may lag by up to around a minute, and some active Azgaar edit modes block native serialization until finalized.
- **Send to Atlas** stores the actively published world with its SVG illustration. A draft and an active world are different snapshots until published.
- **Export .map** or Azgaar's native save remains necessary for an independent backup outside this browser. Browser storage may be cleared and may run out of space.
- Importing or regenerating a new map never silently overwrites the previously published Atlas world.

## v0.0.3 — The Worldbuilding Foundation

- **World Hub:** a dedicated launcher for creating, importing, loading and managing maps.
- **Full World Editor:** the original Azgaar application embedded in a maximizable KingdomOS window. Its native layers, tools, generation, military, terrain, political editing and file operations are preserved.
- **Native .map and .gz import:** load existing Azgaar projects into the full editor.
- **World Library:** store unmodified imported files or newly captured editor snapshots locally in IndexedDB, with open/export/delete support.
- **Native .map snapshots:** capture the complete editor state through a versioned bridge. Download an editable native project from KingdomOS.
- **Cross-application bridge:** same-origin `postMessage` with strict source/version checks and explicit commands (summary, import, snapshot and new map).
- **Separate upstream fork:** Azgaar is built during CI from a pinned commit; no generator code has been copied into the KingdomOS source tree.
- **Full creative freedom:** retain the existing editor’s ability to modify the world without arbitrary KingdomOS restrictions.

**Important:** The World Editor and a real Atlas image are now implemented, but **the KingdomOS simulation engine does not exist yet**. World-edit reconciliation, a fully interactive strategic Atlas, SettleMaker integration, and true frontier-world generation are later milestones.

## Live application

**[https://mrektidd.github.io/KingdomOS/](https://mrektidd.github.io/KingdomOS/)**

The public site is published from `main` on GitHub Pages. The `Build and verify` workflow compiles KingdomOS and the pinned Azgaar fork, then commits static assets into `dist/` for branch-based Pages deployment. The complete editor is served from:

`/KingdomOS/dist/world-editor/index.html?kingdomos=1`

The editor build uses the environment variable `KINGDOMOS_BASE` to configure Vite for this path. Standalone builds of the fork retain their original base path.

## Worldbuilding workflow

1. Open **World Hub** from the desktop launcher or dock.
2. Open **World Editor** to generate a map with Azgaar’s full controls, or choose **Import Existing World** to load your own `.map` or `.gz` project.
3. Make any desired edits using the original generator interface. You can use its native Save and Load tools as usual.
4. Click **Send to Atlas** in the World Editor. KingdomOS saves the current native map and shows its full rendered preview in **World Atlas**.
5. Close World Editor whenever you want—reopening it in the same tab resumes the map you were working on. A separate IndexedDB draft enables recovery after a page reload.
6. Use **Save to Library** for named snapshots and **Export .map** for an independent backup. Return to World Hub to reopen, export or delete library projects.

The World Library is **browser-local, not cloud storage**. Browser data can be cleared by the user or browser. Export `.map` files as independent backups.

Imported worlds are saved byte-for-byte in the library before the editor's migration/loading process begins. A native editor-side import does not automatically become a library entry; use the KingdomOS toolbar to capture it.

## Development

Requires Node.js 24 or later for the bundled Azgaar Vite build (KingdomOS alone can compile with Node 20+).

```bash
npm install
npm run dev
```

Open http://localhost:4173. To run with the full World Editor locally, also build Azgaar using the deployment instructions in [World Integration](docs/world-integration.md). The editor is not installed by `npm install` in the root project.

```bash
npm test
npm run build
npm run test:ui  # Playwright / Chromium; install the browser first
```

## Architecture

```
src/
  apps/                 OS apps, real World Atlas, World Hub, full World Editor, appearance and help
  integration/azgaar.ts Versioned parent-side editor bridge
  world/library.ts      IndexedDB named native-map project library
  world/current.ts      Active Atlas world + recoverable editor draft
  desktop/              Windows, taskbar, launcher and session persistence
  theme/                Theme engine, saved presets and live design tokens
  ui/                   Reusable icon renderer
dist/
  world-editor/         Generated Azgaar static build (CI-managed, not handwritten)
docs/
  world-integration.md  Bridge protocol, constraints, architecture and roadmap
```

The simulation will ultimately own its own persistent entity state rather than allowing UI windows or map generators to overwrite it. Every world edit will be legal; future reconciliation will make associated systems respond appropriately.

## Next development phases

- **v0.0.4 — Shared World Model:** typed world snapshot extraction, stable entity identifiers, semantic edits and change-impact detection.
- **v0.0.5 — World Reconciliation:** versioned edits, dependency recalculation and controlled world replacement.
- **v0.0.6 — Settlement Integration:** SettleMaker inside KingdomOS.
- **v0.1.0 — Simulation Foundations:** clock, persistent entities and first settlement lifecycle.

### Third-party licensing

The embedded editor is compiled from [MrEktidd/Azgaar-map](https://github.com/MrEktidd/Azgaar-map), forked from [Azgaar's Fantasy Map Generator](https://github.com/Azgaar/Fantasy-Map-Generator) under the MIT license. The deployment includes the upstream license where provided.

[SettleMaker](https://github.com/MrEktidd/settlemaker), planned for later integration, is GPL-3.0-only. Distribution and linking decisions for that component require separate licensing review.
