# KingdomOS

**A living-world kingdom simulation presented as a modular, customizable desktop operating system.**

KingdomOS is currently in its foundation stage. The long-term aim is to provide two experiences built on one simulation: found and grow a kingdom on an unclaimed world, or watch and influence an established world of autonomous states.

## Foundation goals

- Premium, restrained desktop UI with draggable, resizable application windows.
- Independent theme engine: live customization, built-in and user presets, import/export.
- Modular applications registered through a single app registry.
- World Atlas integration with the separate [Azgaar-map](https://github.com/MrEktidd/Azgaar-map) repository.
- Settlement rendering with the separate [SettleMaker](https://github.com/MrEktidd/settlemaker) project.
- A persistent simulation authority independent of window state and map rendering.

## Current milestone: v0.0.1 — Desktop and theme foundations

The first executable foundation provides a desktop shell, World Atlas concept viewport, System Overview, and a working Appearance editor. **The concept viewport is not yet connected to Azgaar; there is no simulation or settlement generation in this milestone.**

### Running locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:4173. For a TypeScript compile without a server, run `npm run build`; for type checking only, `npm run check`.

The app intentionally has **no JavaScript runtime dependencies**: TypeScript compiles to native browser ES modules. This keeps the initial OS foundation small and makes it easy to test its architecture without imposing a frontend framework on the map generators.

### Theme system

Theme logic is isolated in `src/theme/theme.ts`. It applies validated design tokens as CSS custom properties, without coupling themes to any particular app. Built-in themes are immutable. Users may make live edits, save new presets, update or delete their own presets, and import/export versioned JSON presets. Theme selections and draft edits are stored locally in the browser.

A theme export contains only design tokens and appearance options—not simulation data or JavaScript.

### Source layout

```
src/
  apps/           Application registry and example apps
  desktop/        Window manager and desktop chrome
  theme/          Theme schema, presets, persistence and CSS token application
  ui/             Shared icons and UI utilities
  main.ts         Application entry point
  styles.css      Theme-consuming CSS and component styles
scripts/          Local development server
```

### Suggested next milestones

1. v0.0.2: Desktop interaction polish, accessibility, keyboard controls.
2. v0.0.3: Versioned Azgaar adapter and real World Atlas generation/loading.
3. v0.0.4: SettleMaker adapter and settlement viewer.
4. v0.0.5: World state, simulation clock, command handling and saves.
5. v0.1.0: Found a settlement and construct the first persistent building.

## Integration and licensing

[Azgaar-map](https://github.com/MrEktidd/Azgaar-map) is MIT-licensed; [SettleMaker](https://github.com/MrEktidd/settlemaker) is GPL-3.0-only. Any future bundling, dynamic linking, or separate-program integration must be reviewed for applicable licensing obligations before distribution. This prototype does not copy or bundle either generator.

This is an early development foundation, not a playable kingdom game.