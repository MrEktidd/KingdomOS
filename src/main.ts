import {initializeThemes} from "./theme/theme.js";
import {mountDesktop} from "./desktop/desktop.js";
initializeThemes();
const root=document.getElementById("app");
if(!root)throw new Error("KingdomOS root not found");
mountDesktop(root);
