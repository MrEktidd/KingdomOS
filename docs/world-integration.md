# KingdomOS / Azgaar world integration

## Guiding principle: world authorship is unrestricted

Every edit Azgaar permits should remain possible from KingdomOS: regenerate geography, raise terrain, move or delete settlements, change armies, redraw borders, or replace the world outright. The future simulation is responsible for reconciling those changes, not preventing authorship.

## What v0.0.3 implements

The **full** Azgaar UI is hosted in an iframe inside a KingdomOS application, with no reimplementation of the map generator UI. KingdomOS also provides a World Hub, native imports, and browser-local project backups.

```text
KingdomOS desktop / theme / windows
  ├── World Hub ─────────── IndexedDB World Library (.map/.gz blobs)
  ├── World Editor ──iframe── Azgaar fork (full independent web application)
  │                           ↕ postMessage bridge v1
  └── World Atlas (currently a separate illustrative prototype)

Future: shared world model → reconciliation → simulation engine
```

**The iframe is not a simulation adapter.** At this stage it is an authoring workspace with a native project interchange. A future World Atlas will read from an authoritative KingdomOS world model and offer strategic interactions, not duplicate the editor.

## Source and reproducible builds

The KingdomOS CI workflow checks out and builds:

- `MrEktidd/Azgaar-map`, branch `master`, pinned commit `3fda542b6ee59ec8c586afb467eaf07c4e14cf43`.
- Set `KINGDOMOS_BASE=/KingdomOS/dist/world-editor/`.
- Run `npm ci --ignore-scripts` then `npm run build`.
- Copy generated assets to `dist/world-editor/`, commit output to `main` for GitHub Pages.
- Ensure the editor's native license is distributed alongside its build.

Azgaar uses Vite and its own build pipeline. Only a small bridge module and base-path/embedded-worker guards have been added to the fork; the original standalone application remains functional.

### Running the full editor locally

KingdomOS expects the static Azgaar build in `dist/world-editor/`.

From the KingdomOS repository root (with Node 24+, git and npm available):

```bash
npm install
npm run build
git clone https://github.com/MrEktidd/Azgaar-map.git .azgaar
cd .azgaar
git checkout 3fda542b6ee59ec8c586afb467eaf07c4e14cf43
npm ci --ignore-scripts
KINGDOMOS_BASE=/KingdomOS/dist/world-editor/ npm run build
cd ..
mkdir -p dist/world-editor
cp -R .azgaar/dist/. dist/world-editor/
```

**Note:** That build uses the production Pages path. For a local root server, build with `KINGDOMOS_BASE=/dist/world-editor/` instead, or use the matching Pages subpath deployment. CI always uses the correct GitHub Pages path.

## Bridge protocol version 1

Transport: `window.postMessage` between the same-origin parent `/KingdomOS/` and editor iframe `/KingdomOS/dist/world-editor/`.

Every message carries:
- `protocol: "kingdomos-azgaar"`
- `version: 1`
- `kind: "command" | "result" | "event"`
- `id` for command/result correlation
- `name` for command/response/event type
- `payload` for commands; `data` for events/results

The iframe accepts messages **only from its parent with matching origin**. The parent accepts messages **only from the currently attached editor iframe with matching origin**. This is deliberately not implemented through `window.FMG` or direct frame DOM access.

Commands:
- `summary`: lightweight generator/world metadata.
- `snapshot`: native editable `.map` serialization plus summary; do not run while editing.
- `import-map`: Blob and native filename; delegates to Azgaar's `Load.uploadMap` pipeline.
- `new-map`: invokes Azgaar's existing regenerate confirmation flow.

Events:
- `ready`: communication module loaded (not necessarily world generation complete).
- `world-changed`: Azgaar registered a successfully generated or loaded map.

**Event coverage limitation:** ordinary edits do not yet emit granular change events. KingdomOS captures current state on explicit snapshot requests; future versions will instrument the editor's domain mutations and build an incremental edit journal. Import request success means accepted for asynchronous loading, *not* that the map was validated or loaded.

## Imported data and save rules

The World Library stores original imported Blob bytes without changing or parsing the payload. A `snapshot` instead saves a newly serialized `.map`, which remains editable in Azgaar.

- Supported: native `.map` and compressed `.gz` files up to 100 MB each.
- Invalid extensions and oversized files are rejected before invoking the editor.
- Original imported maps are never overwritten implicitly.
- No active simulation is modified in v0.0.3.
- The library uses IndexedDB; it is not synchronized across devices or backed up automatically.
- JSON exports and image/SVG maps are not treated as losslessly importable world projects.

**Security:** the editor is trusted application code running on the same origin as KingdomOS. An iframe is useful for CSS and browser-global isolation, but not a security boundary against untrusted embedded code. More defensive .map import validation, safe SVG handling, and storage quotas require dedicated hardening before community file sharing becomes a core feature.

## What comes next

**v0.0.4: Shared World Model**

Implement a stable read-only translation from Azgaar's graph, territories, settlements, economy and military into a KingdomOS domain snapshot. Establish stable IDs and handle map re-generation as a distinct replacement operation. Add granular edit-change notifications.

**v0.0.5: World Reconciliation**

Introduce authoring transactions, affected-dependency classification, recalculation and repair of references so arbitrary world edits can safely affect persistent simulation state. Examples: removing a city updates ownership and trade; raising terrain re-routes armies; spawning an army adds persistent units without re-running the original military generator destructively.

Keep world-authoring actions separate from in-world causal gameplay events. Deleting a city as an author does not automatically represent a siege, refugees or military casualties.
