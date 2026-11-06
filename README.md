# KingdomOS

**A living-world kingdom simulation presented as a modular, customizable desktop operating system.**

### [Launch KingdomOS — Live demo](https://mrektidd.github.io/KingdomOS/)

[Source code](https://github.com/MrEktidd/KingdomOS) · [v0.0.2 release notes](docs/release-0.0.2.md)

KingdomOS is in its foundation stage. The longer-term goal is to let players found a kingdom on an unclaimed world, or observe and influence an autonomous world of competing states, using the same persistent simulation.

## Current milestone: v0.0.2 — Desktop polish and application framework

- Premium desktop with taskbar, dock, multi-window environment and **searchable application launcher**.
- Draggable and resizable windows, minimize/maximize, restore previous workspace and keep user window positions.
- Keyboard shortcuts for launching apps, moving and resizing windows, closing windows and navigating the launcher.
- Independent **theme service** with five presets, live color editing, opacity, radius, scaling, density and wallpaper controls.
- Personal theme saving, editing, reset, deletion, and validated versioned JSON import/export.
- Extensible application manifests in the independent `src/apps/registry.ts`; UI apps register without changes to the desktop.
- Keyboard Shortcuts help application, Command Overview, Appearance and World Atlas concept viewer.
- Versioned browser-local desktop session storage separate from any future game save.

**This is still a foundation prototype, not a playable kingdom game.** The Atlas is currently illustrative; it is not generating a world from Azgaar yet.

## Live GitHub Pages

**[https://mrektidd.github.io/KingdomOS/](https://mrektidd.github.io/KingdomOS/)**

The app is deployed to the `/KingdomOS/` project path, so `index.html` uses **relative asset paths**. The project is currently configured for GitHub Pages publishing from the `main` branch. The build workflow compiles TypeScript to native ES modules in `dist/`, then commits those generated modules so branch-based Pages can serve them.

If you later switch Pages **Source** to **GitHub Actions**, update the workflow to upload and deploy the built site rather than committing `dist/` to the branch.

## Run locally

Node.js 20 or later:

```bash
npm install
npm run dev
```

Open [http://localhost:4173](http://localhost:4173).

```bash
npm run check    # TypeScript type check
npm run build    # Compile native ES modules
npm test         # Check, build and run smoke/behavior tests
```

There are no production JavaScript runtime dependencies. This keeps the OS shell lightweight and avoids imposing a framework on the independent map generators.

## Desktop controls

| Action | Shortcut |
| --- | --- |
| Open app launcher and search | Ctrl / Cmd + K |
| Appearance settings | Ctrl / Cmd + Shift + A |
| Keyboard Shortcuts guide | Ctrl / Cmd + Shift + / |
| Close active OS window | Ctrl / Cmd + W |
| Move active window | Ctrl + Alt + Arrow |
| Resize active window | Ctrl + Alt + Shift + Arrow |
| Dismiss launcher | Escape |
| Maximize or restore window | Double-click title bar |

Themes auto-save current edits locally. **Save as new** creates a reusable personal preset; **Revert edits** restores the last saved values for the selected preset. Export a theme to a JSON file and import it on another browser using the buttons in Appearance.

## Architecture

```
src/
  apps/
    apps.ts              Built-in interactive OS applications
    registry.ts          Independent app registration and lifecycle contract
    shortcuts.ts         Keyboard Shortcuts help application
  desktop/
    desktop.ts           Desktop, window manager, launcher and taskbar
    session.ts           Versioned local workspace restoration
  theme/
    theme.ts             Theme definitions, validation, persistence and CSS tokens
  ui/
    icons.ts             Shared icon rendering
  main.ts                Register apps, initialize themes, boot desktop
  styles.css             Global and application styling
scripts/
  dev.mjs                TypeScript watch process and local server
  serve.mjs              Local static server
tests/
  foundation.test.mjs    Registry, appearance, session and deploy-path checks
```

The window manager is responsible for application presentation; the registry manages app definitions; the theme module owns global appearance tokens. The future simulation must remain independent of all three.

### Integrations

- [Azgaar-map](https://github.com/MrEktidd/Azgaar-map) — world generator, political geography, resource/market foundations.
- [SettleMaker](https://github.com/MrEktidd/settlemaker) — procedural settlement layouts and local GeoJSON.

The Azgaar fork is MIT-licensed; SettleMaker is GPL-3.0-only. Any eventual embedding, bundling or linked distribution must respect their licenses. Neither is bundled in v0.0.2.

## Roadmap

1. **v0.0.3:** Real World Atlas integration with generated and saved Azgaar worlds.
2. **v0.0.4:** Settlement views through SettleMaker.
3. **v0.0.5:** Persistent world state, simulation clock, commands and saving.
4. **v0.1.0:** Found a settlement and construct the first persistent building.

The OS is the interface, not the simulation authority. The same world data must serve all applications.
