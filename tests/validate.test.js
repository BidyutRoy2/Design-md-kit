import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { validateDesignMd } from "../src/validate.js";
import { listSystems } from "../src/cli.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("at least 6 bundled design systems", () => {
  assert.ok(listSystems().length >= 6, `found ${listSystems().length}`);
});

test("every bundled system passes validation", () => {
  for (const name of listSystems()) {
    const md = readFileSync(join(root, "design-systems", `${name}.md`), "utf8");
    const { valid, results } = validateDesignMd(md);
    const missing = results.filter((r) => !r.ok).map((r) => r.key).join(", ");
    assert.ok(valid, `${name} is missing: ${missing}`);
  }
});

test("an empty file fails validation", () => {
  const { valid, passed } = validateDesignMd("# Untitled\n");
  assert.equal(valid, false);
  assert.ok(passed < 3);
});

test("preview gallery exists and references every system", () => {
  const html = readFileSync(join(root, "preview", "index.html"), "utf8");
  for (const name of listSystems()) {
    assert.ok(html.includes(name), `preview is missing theme: ${name}`);
  }
});
