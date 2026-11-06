import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { resolve, extname, sep } from "node:path";

const ROOT = process.cwd();
const PORT = Number(process.env.PORT || 4173);
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url || "/", "http://localhost").pathname); }
  catch { res.writeHead(400).end("Invalid URL"); return; }
  // The production Vite bundle uses GitHub Pages project-base asset URLs.
  // Mirror that path locally while keeping '/' usable for the OS shell.
  const servingPath=pathname.startsWith("/KingdomOS/")
    ?pathname.slice("/KingdomOS".length)
    :pathname;
  const path=resolve(ROOT,"."+servingPath,servingPath.endsWith("/")?"index.html":"");
  if (path !== ROOT && !path.startsWith(ROOT + sep)) { res.writeHead(403).end("Forbidden"); return; }
  if (!existsSync(path) || !statSync(path).isFile()) { res.writeHead(404).end("Not found"); return; }
  const ext = extname(path);
  res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream", "Cache-Control": "no-cache" });
  createReadStream(path).pipe(res);
}).listen(PORT, () => console.log("KingdomOS available at http://localhost:" + PORT));
