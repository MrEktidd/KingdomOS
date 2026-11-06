import { spawn } from "node:child_process";
const commands = [
  spawn("npx", ["tsc", "-p", "tsconfig.json", "--watch", "--preserveWatchOutput"], { stdio: "inherit", shell: process.platform === "win32" }),
  spawn(process.execPath, ["scripts/serve.mjs"], { stdio: "inherit" })
];
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => {
  for (const child of commands) child.kill();
  process.exit();
});
for (const child of commands) child.on("exit", code => {
  if (code !== 0 && code !== null) { for (const sibling of commands) sibling.kill(); process.exit(code); }
});
