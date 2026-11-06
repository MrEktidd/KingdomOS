# KingdomOS / Azgaar world integration

## Guiding principle: world authorship is unrestricted

Every edit Azgaar permits should remain possible from KingdomOS: regenerate geography, raise terrain, move or delete settlements, change armies, redraw borders, or replace the world outright. The future simulation is responsible for reconciling those changes, not preventing authorship.

## v0.0.3.1 — Active World and reversible editor lifecycle

The full Azgaar editor is now treated as a **persistent workspace**, not a disposable window. KingdomOS parks its existing iframe when World Editor closes; reopening resumes the exact editor instance without triggering Azgaar's initial random/last-saved startup logic.

When the browser tab is reloaded, Azgaar does start its normal boot process, but a new `kingdomos:booted` bridge event allows KingdomOS to safely import a stored native .map **after** Azgaar's UI/map initialization is complete. A separately requested import from World Hub or Atlas takes priority and suppresses draft recovery.

### Two independent world slots

A small IndexedDB `kingdomos-current-world` database tracks:

- `draft`: most recently saved editable native map from the active World Editor (saved on closing, upon successful generation/import, and about every 60 seconds).
- `active`: the map explicitly published to World Atlas via **Send to Atlas** or **Update Atlas**, with its native .map plus an Azgaar-produced SVG illustration.

Saving a new draft **never** overwrites the active world. Publishing writes the new active world atomically, then clears the earlier recovery draft to avoid duplicating large project files. Closing an editor that remains linked to the active world's map ID updates the active world instead.

World Atlas renders the SVG through an `<img>` element using a browser Blob URL (no imported SVG is injected as active HTML or executable DOM). It currently provides zoom and open/sync controls; tactical selection and shared simulation entities are later milestones.

Azgaar's bridge protocol now also supports:
- `capture`: full native project and a full-map SVG preview together.
- `fit`: recalculate the SVG viewport on resuming a previously parked editor window.
- `booted` event: initial native map pipeline has finished.

The parent validates event origins and frames. Import completion is tracked through Azgaar's existing `map:generated` event; mere command acceptance does not count as a successful import.

The last saved browser recovery draft is not a replacement for native file exports: active edit modes can block serialization, IndexedDB may exhaust quota, and page close/crash may interrupt pending writes.

## What v0.0.3 implements

The **full** Azgaar UI is hosted in an iframe inside a KingdomOS application, with no reimplementation of the map generator UI. KingdomOS also provides a World Hub, native imports, and browser-local project backups.

```text
KingdomOS desktop / theme / windows
  ├── World Hub ─────────── IndexedDB World Library (.map/.gz blobs)
  ├── World Editor ──iframe── Azgaar fork (full independent web application)
  │                           ↕ postMessage bridge v1
  └── World Atlas (read-only actual Azgaar SVG preview)

Future: shared world model → reconciliation → simulation engine
```

**The iframe is not a simulation adapter.** At this stage it is an authoring workspace with a native project interchange. A future World Atlas will read from an authoritative KingdomOS world model and offer strategic interactions, not duplicate the editor.

## Source and reproducible builds

The KingdomOS CI workflow checks out and builds:

- `MrEktidd/Azgaar-map`, branch `master`, pinned commit `daaba81a2792e1851c6909fa553193f19b77c8c0`.
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
git checkout daaba81a2792e1851c6909fa553193f19b77c8c0
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

**Event coverage limitation:** ordinary edits do not yet emit granular change events. Periodic native-map recovery is a coarse checkpoint, not an incremental edit journal. KingdomOS captures current state on explicit snapshot requests; future versions will instrument the editor's domain mutations and build an incremental edit journal. Import request success means accepted for asynchronous loading, *not* that the map was validated or loaded.

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
