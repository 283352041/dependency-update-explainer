import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
test("explains update", () => {
  const out = execFileSync(process.execPath, ["bin/dep-explain.js", "examples/before.json", "examples/after.json"], { encoding: "utf8" });
  assert.match(out, /UPDATED a/);
  assert.match(out, /ADDED b/);
});