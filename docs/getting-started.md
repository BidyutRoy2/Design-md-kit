# Getting started

## 1. Pick a system

Open the preview gallery (`preview/index.html`) and click through the six
themes on the *same* UI. Pick by product feeling, not by favourite colour:

- AI / SaaS product → `aurora-glass`
- Finance / data → `obsidian-fintech`
- Content / docs → `paper-editorial`
- Creator / indie → `neo-brutal`
- Health / wellness → `mint-clinic`
- Dev tool → `terminal-dev`

## 2. Install it in your project

```bash
cd your-project
npx design-md-kit add aurora-glass   # writes ./DESIGN.md
```

The installer refuses to overwrite an existing `DESIGN.md` — rename yours
first if you want to compare.

## 3. Design with your agent

Open your coding agent in the project and ask for UI normally:

> "Build a pricing page with monthly/yearly toggle and three tiers."

The agent reads `DESIGN.md` and follows its tokens: colours, type scale,
component specs, motion and the Do / Don't list.

## 4. Customise

Edit `DESIGN.md` freely — swap hex values, change the display font, tighten
the spacing. Re-run the validator any time:

```bash
npx design-md-kit validate DESIGN.md
```

## 5. (Optional) Publish the gallery

On GitHub: **Settings → Pages → Deploy from branch → `/ (root)`** won't
serve `preview/` directly; simplest is to point Pages at the `preview`
folder via a docs-site action, or just link the raw HTML file from your
README. The file is fully self-contained.
