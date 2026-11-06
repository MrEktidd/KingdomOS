import "./apps/apps.js";
import "./apps/world-hub.js";
import "./apps/world-editor.js";
import "./apps/shortcuts.js";
import { initializeThemes } from "./theme/theme.js";
import { mountDesktop } from "./desktop/desktop.js";
initializeThemes();
const root = document.getElementById("app");
if (!root)
    throw new Error("KingdomOS root not found");
mountDesktop(root);
