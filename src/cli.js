#!/usr/bin/env node
// design-md-kit — install and validate DESIGN.md design systems for AI agents.
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { validateDesignMd } from "./validate.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const systemsDir = join(root, "design-systems");

export function listSystems() {
  return readdirSync(systemsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
    .sort();
}

function usage() {
  console.log(`design-md-kit — DESIGN.md systems for AI coding agents

Usage:
  design-md-kit list                 List available design systems
  design-md-kit add <name> [dir]     Copy a system to <dir>/DESIGN.md (default: .)
  design-md-kit validate <file>      Check a DESIGN.md for completeness
  design-md-kit validate --all       Validate every bundled system
`);
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
const [cmd, arg, target] = process.argv.slice(2);

if (!isMain) {
  // imported as a library (tests) — do not run the CLI
} else if (cmd === "list") {
  for (const name of listSystems()) {
    const md = readFileSync(join(systemsDir, `${name}.md`), "utf8");
    const firstLine = md.split("\n").find((l) => l.startsWith("> ")) || "";
    console.log(`  ${name.padEnd(16)} ${firstLine.replace("> ", "")}`);
  }
} else if (cmd === "add") {
  const name = arg;
  if (!name || !listSystems().includes(name)) {
    console.error(`Unknown system "${name ?? ""}". Run: design-md-kit list`);
    process.exit(1);
  }
  const destDir = target || ".";
  const dest = join(destDir, "DESIGN.md");
  if (existsSync(dest)) {
    console.error(`Refusing to overwrite existing ${dest}. Rename or remove it first.`);
    process.exit(1);
  }
  writeFileSync(dest, readFileSync(join(systemsDir, `${name}.md`), "utf8"));
  console.log(`Installed "${name}" -> ${dest}`);
  console.log("Your coding agent (Claude Code, Codex, Cursor, ...) will now design with this system.");
} else if (cmd === "validate") {
  const files = arg === "--all"
    ? listSystems().map((n) => join(systemsDir, `${n}.md`))
    : [arg];
  let failed = false;
  for (const file of files) {
    if (!file || !existsSync(file)) {
      console.error(`File not found: ${file ?? ""}`);
      process.exit(1);
    }
    const { results, passed, total, valid } = validateDesignMd(readFileSync(file, "utf8"));
    console.log(`${valid ? "PASS" : "FAIL"}  ${basename(file)}  (${passed}/${total})`);
    for (const r of results) if (!r.ok) console.log(`   missing: ${r.label}`);
    if (!valid) failed = true;
  }
  process.exit(failed ? 1 : 0);
} else {
  usage();
  process.exit(cmd ? 1 : 0);
}
