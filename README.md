# KingdomOS

**A living-world kingdom simulation and worldbuilding desktop, built around full creative freedom.**

### [Launch KingdomOS — live web app](https://mrektidd.github.io/KingdomOS/)

[Source code](https://github.com/MrEktidd/KingdomOS) · [World integration design](docs/world-integration.md)

KingdomOS is a sandbox project where players can generate, import, edit and eventually simulate entire worlds. The full map editor is the familiar **Azgaar's Fantasy Map Generator**, included directly inside the KingdomOS desktop and compiled from the separate [Azgaar-map fork](https://github.com/MrEktidd/Azgaar-map).

## v0.0.3 — The Worldbuilding Foundation

- **World Hub:** a dedicated launcher for creating, importing, loading and managing maps.
- **Full World Editor:** the original Azgaar application embedded in a maximizable KingdomOS window. Its native layers, tools, generation, military, terrain, political editing and file operations are preserved.
- **Native .map and .gz import:** load existing Azgaar projects into the full editor.
- **World Library:** store unmodified imported files or newly captured editor snapshots locally in IndexedDB, with open/export/delete support.
- **Native .map snapshots:** capture the complete editor state through a versioned bridge. Download an editable native project from KingdomOS.
- **Cross-application bridge:** same-origin `postMessage` with strict source/version checks and explicit commands (summary, import, snapshot and new map).
- **Separate upstream fork:** Azgaar is built during CI from a pinned commit; no generator code has been copied into the KingdomOS source tree.
- **Full creative freedom:** retain the existing editor’s ability to modify the world without arbitrary KingdomOS restrictions.

**Important:** The World Editor is real, but **the KingdomOS simulation engine does not exist yet**. World-edit reconciliation, a dedicated gameplay Atlas, SettleMaker integration, and true frontier-world generation are subsequent milestones. The pre-existing World Atlas is still a clearly labeled illustrative prototype.

## Live application

**[https://mrektidd.github.io/KingdomOS/](https://mrektidd.github.io/KingdomOS/)**

The public site is published from `main` on GitHub Pages. The `Build and verify` workflow compiles KingdomOS and the pinned Azgaar fork, then commits static assets into `dist/` for branch-based Pages deployment. The complete editor is served from:

`/KingdomOS/dist/world-editor/index.html?kingdomos=1`

The editor build uses the environment variable `KINGDOMOS_BASE` to configure Vite for this path. Standalone builds of the fork retain their original base path.

## Worldbuilding workflow

1. Open **World Hub** from the desktop launcher or dock.
2. Open **World Editor** to generate a map with Azgaar’s full controls, or choose **Import Existing World** to load your own `.map` or `.gz` project.
3. Make any desired edits using the original generator interface. You can use its native Save and Load tools as usual.
4. Use **Save to Library** to keep a native editable snapshot in this browser. Use **Export .map** to download a portable backup.
5. Return to World Hub to reopen, export or delete saved projects.

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
```

## Architecture

```
src/
  apps/                 OS apps, World Hub, full World Editor, appearance and help
  integration/azgaar.ts Versioned parent-side editor bridge
  world/library.ts      IndexedDB native-map project library
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

- **v0.0.4 — Shared World Model:** typed world snapshot extraction, stable entity identifiers and edit-impact detection.
- **v0.0.5 — World Reconciliation:** versioned edits, dependency recalculation and controlled world replacement.
- **v0.0.6 — Settlement Integration:** SettleMaker inside KingdomOS.
- **v0.1.0 — Simulation Foundations:** clock, persistent entities and first settlement lifecycle.

### Third-party licensing

The embedded editor is compiled from [MrEktidd/Azgaar-map](https://github.com/MrEktidd/Azgaar-map), forked from [Azgaar's Fantasy Map Generator](https://github.com/Azgaar/Fantasy-Map-Generator) under the MIT license. The deployment includes the upstream license where provided.

[SettleMaker](https://github.com/MrEktidd/settlemaker), planned for later integration, is GPL-3.0-only. Distribution and linking decisions for that component require separate licensing review.
