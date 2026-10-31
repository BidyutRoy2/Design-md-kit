# design-md-kit

**Stop your AI agent from designing like a robot.**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Node 18+](https://img.shields.io/badge/node-18+-brightgreen.svg)](https://nodejs.org)
[![Tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)](#development)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-blue.svg)](CONTRIBUTING.md)

Six complete, production-ready **DESIGN.md** design systems — plus a live
preview gallery and a one-command installer — that teach Claude Code, Codex,
Cursor and other coding agents *real design taste*: exact colour tokens,
typography scales, spacing systems, component rules, motion and
accessibility, in a file your agent actually reads.

```bash
npx design-md-kit add aurora-glass
```

That's it. Your next generated UI comes out designed, not defaulted.

![Themes](https://img.shields.io/badge/themes-6-purple) ![Format](https://img.shields.io/badge/format-DESIGN.md-orange) ![Dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen)

---

## The problem

Ask any AI coding agent for a landing page and you get the same page:
purple gradient, centred hero, three identical cards, Inter everything.
It is not the model's fault — it has taste only when you *give* it a design
system. A `DESIGN.md` file in your project root is how you give it one:
agents read it automatically and design within it.

**design-md-kit** gives you six finished systems to start from, a validator
that proves a DESIGN.md is complete, and a gallery so you can *see* each
system before you install it.

## Live preview

Open [`preview/index.html`](preview/index.html) — one self-contained file,
no build step — and click through the themes. The *same* UI re-skins itself
six ways. (Enable GitHub Pages on this repo and the gallery is your live demo site.)

## The six systems

| System | Personality | Best for |
|---|---|---|
| [`aurora-glass`](design-systems/aurora-glass.md) | Dark glass, violet→cyan aurora gradient | AI products, SaaS dashboards |
| [`obsidian-fintech`](design-systems/obsidian-fintech.md) | Near-black precision, gold accent, tabular numbers | Finance, trading, data tools |
| [`paper-editorial`](design-systems/paper-editorial.md) | Serif display, warm paper, ink | Blogs, docs, newsletters |
| [`neo-brutal`](design-systems/neo-brutal.md) | Thick borders, hard shadows, loud colour | Creator tools, indie SaaS, events |
| [`mint-clinic`](design-systems/mint-clinic.md) | Calm mint/teal, soft and kind | Health, wellness, care products |
| [`terminal-dev`](design-systems/terminal-dev.md) | Mono-first, terminal green | Dev tools, CLIs, infra products |

Each system is complete: colour tokens with hex values, typography,
layout/spacing, component specs, motion, accessibility rules and an
explicit Do / Don't list — validated by the test suite in this repo.

## Quickstart

```bash
# 1. See what's available
npx design-md-kit list

# 2. Install one into your project (writes ./DESIGN.md, never overwrites)
npx design-md-kit add obsidian-fintech

# 3. Ask your agent for UI. It reads DESIGN.md and designs within the system.
```

No install at all (from a clone):

```bash
git clone https://github.com/BidyutRoy2/Design-md-kit.git
cd design-md-kit
node src/cli.js list
node src/cli.js add mint-clinic ../my-project
```

## Validate your own DESIGN.md

Writing your own system? Make sure your agent is getting the full picture:

```bash
npx design-md-kit validate DESIGN.md
# PASS  DESIGN.md  (8/8)
# or: FAIL — missing: Motion & interaction, Do / Don't guidance ...
```

The validator checks for every section an agent needs (colours, typography,
layout, components, motion, accessibility, do/don't) plus concrete hex
values. It runs in CI for every system in this repo — see
[`src/validate.js`](src/validate.js).

## How it works

1. Coding agents (Claude Code, Codex, Cursor, OpenCode, Gemini CLI…)
   automatically read project-level design/context files.
2. `DESIGN.md` gives them tokens and rules instead of vibes.
3. Generated UI follows *your* system: same colours, same type scale,
   same components — across every page and every session.

Works alongside `AGENTS.md` / `CLAUDE.md`: those say how to *code*,
`DESIGN.md` says how it should *look and feel*.

## Make your own

Copy any system as a starting point, change the tokens, then run
`validate` until it passes. Full guide: [docs/creating-your-own.md](docs/creating-your-own.md).
Prompt patterns that pair well with a DESIGN.md: [examples/prompt-examples.md](examples/prompt-examples.md).

## Roadmap

- [ ] More systems: swiss-grid, y2k-chrome, warm-minimal, data-viz-dark
- [ ] Tailwind / CSS-variable export from any DESIGN.md
- [ ] Figma token (W3C design tokens) export
- [ ] Gallery deployed from `preview/` via GitHub Pages action
- [ ] Community gallery: systems submitted by contributors

## Contributing

New design systems are the best contribution — one file, validated by the
test suite. See [CONTRIBUTING.md](CONTRIBUTING.md) and our
[Code of Conduct](CODE_OF_CONDUCT.md).

## Support

See [SUPPORT.md](SUPPORT.md). Security issues: [SECURITY.md](SECURITY.md).

## License

MIT — see [LICENSE](LICENSE). Use the systems in commercial projects freely.
