#!/usr/bin/env node
import fs from "node:fs";
if (process.argv.includes("--help")) { console.log("Usage: dep-explain before-lock.json after-lock.json"); process.exit(0); }
const [beforeFile, afterFile] = process.argv.slice(2);
if (!beforeFile || !afterFile) throw new Error("Provide before and after package-lock files.");
const read = f => JSON.parse(fs.readFileSync(f, "utf8")).packages || {};
const before = read(beforeFile), after = read(afterFile);
const names = new Set([...Object.keys(before), ...Object.keys(after)].filter(k => k.startsWith("node_modules/")));
for (const key of names) {
  const name = key.replace("node_modules/", "");
  const b = before[key]?.version, a = after[key]?.version;
  if (!b && a) console.log(`ADDED ${name}@${a}`);
  else if (b && !a) console.log(`REMOVED ${name}@${b}`);
  else if (b !== a) console.log(`UPDATED ${name}: ${b} -> ${a}`);
}
