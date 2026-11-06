import { icon } from "../ui/icons.js";
import { registerApp } from "./registry.js";
const shortcuts = [
    ["Ctrl / Cmd + K", "Open and search the application launcher"],
    ["Ctrl / Cmd + Shift + A", "Open Appearance settings"],
    ["Ctrl / Cmd + Shift + /", "Open keyboard shortcuts"],
    ["Ctrl / Cmd + W", "Close the active KingdomOS window"],
    ["Ctrl + Alt + Arrow", "Move the active window by 20 pixels"],
    ["Ctrl + Alt + Shift + Arrow", "Resize the active window by 20 pixels"],
    ["Escape", "Dismiss the launcher"],
    ["Double-click title bar", "Maximize or restore a window"]
];
registerApp({
    id: "shortcuts",
    title: "Keyboard Shortcuts",
    icon: "menu",
    description: "Desktop navigation guide",
    width: 525,
    height: 510,
    render(host) {
        host.className = "shortcuts-app";
        const heading = document.createElement("div");
        heading.className = "shortcuts-head";
        heading.innerHTML = '<span class="eyebrow">SYSTEM MANUAL / INPUT</span><h2>Work faster.</h2><p>The keyboard is another way to manage your command center.</p>';
        const list = document.createElement("div");
        list.className = "shortcuts-list";
        for (const [key, description] of shortcuts) {
            const row = document.createElement("div");
            row.className = "shortcut-row";
            const desc = document.createElement("span");
            desc.textContent = description;
            const combo = document.createElement("kbd");
            combo.textContent = key;
            row.append(desc, combo);
            list.append(row);
        }
        const notice = document.createElement("div");
        notice.className = "shortcut-note";
        notice.innerHTML = icon("info", 16) + "<span>Shortcuts only control the KingdomOS desktop. They do not advance simulation time.</span>";
        host.append(heading, list, notice);
    }
});
