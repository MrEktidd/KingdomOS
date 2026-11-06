# KingdomOS v0.0.2 — Desktop polish and application framework

## Goals and completion checklist

- [x] Separate app registry with manifest validation, registration/unregistration and change subscription.
- [x] Searchable application launcher with arrow-key navigation and app shortcuts.
- [x] Versioned desktop session state, legacy layout migration and restored open windows.
- [x] Keyboard-driven window movement and resizing, close command and Appearance shortcut.
- [x] New Keyboard Shortcuts app integrated like any other app.
- [x] Improve focus indicators, launcher input and mobile styling.
- [x] Theme draft detection and revert-to-saved behavior without changing built-in presets.
- [x] Fix project-path-relative asset URLs and compile native JS for branch-based GitHub Pages.
- [x] Automated check, compilation and smoke tests.

## Design and technical constraints

**System appearance:** Defined solely in `src/theme/theme.ts`, applied using CSS custom properties. Every app inherits the current tokens; an application must not introduce an independent global theme controller.

**App registry:** Each app registers a manifest `{ id, title, icon, description, width, height, render }` via `registerApp`. `render(host, context)` may optionally return a cleanup function, called by the desktop when the window is closed. Registration changes update the launcher and dock without rewriting the desktop.

**Workspace persistence:** `src/desktop/session.ts` stores open app IDs, active app and window layout in browser storage. It migrates the v0.0.1 layout format and intentionally does not store simulation data.

**GitHub Pages:** `index.html` references `./src/styles.css` and `./dist/main.js`, not root-absolute paths, so the app works at `/KingdomOS/`. CI commits compiled modules for the existing branch-based Pages configuration.

## Remaining limitations

- The Atlas map is illustrative and does not yet load, render or simulate Azgaar world data.
- Only one instance of each registered app is supported.
- Window sizing uses pointer interactions and keyboard shortcuts; multitouch window gestures and more advanced tiling are future improvements.
- Workspace layout is local to the browser; unlike themes, layouts are not yet exportable.
- Future live simulation remains deliberately separate from the UI shell.

## Acceptance tests

Run `npm test` after `npm install`. This checks TypeScript, emits the native modules and executes tests covering deployment paths, desktop session persistence, app registry lifecycle and theme import validation.
