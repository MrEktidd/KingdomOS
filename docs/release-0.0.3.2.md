# KingdomOS v0.0.3.2 — Interface & Experience Overhaul

## Delivered

- Fixed Atlas button overlap with shared content-sized toolbars and responsive overflow menus.
- Added pan by pointer drag, zoom at cursor by wheel, fit, keyboard navigation and world information panel.
- Added world renaming and native .map export from the Atlas without altering project data.
- Displayed active-world status globally in KingdomOS instead of stale "WORLD NOT LOADED".
- Added theme-aware notification center and ephemeral toasts.
- Added recovery/publish indicators and shared prompts in World Editor.
- Fixed World Hub native imports to await Azgaar's actual map-loaded event.
- Added pure camera and storage tests, plus Chromium UI tests that check non-overlap at five window sizes.

## Architecture

- \`src/ui/components.ts\` provides shared buttons, menus, toolbar groups, status labels and accessible native dialogs.
- \`src/ui/components.css\` consumes the existing \`--ko-*\` theme token service, leaving users' themes as the single source of appearance.
- \`src/ui/map-camera.ts\` contains pure camera mathematics, independently tested.
- \`src/desktop/notifications.ts\` holds in-session notifications so history outlives toast animations.
- \`src/world/current.ts\` handles active-world metadata renaming without rewriting an editable project or generated map SVG.
- The Azgaar fork, its current full editor, bridge and map format remain unchanged.

## Known limitations

- Atlas renders an inert SVG preview of the real Azgaar map; semantic selection and simulation overlays await the shared world model.
- Autosave captures snapshots periodically and may not preserve edits made just before a browser crash.
- In-browser IndexedDB projects remain subject to browser storage quotas; export native .map backups.
- Browser checks cover Chromium, not every platform, screen reader or mobile interaction.

## Verification

\`npm test\` runs TypeScript and node integration/unit tests.
\`npm run test:ui\` runs Chromium browser tests after native build assets are present.
The GitHub Actions workflow runs both before publishing a new Pages build.
