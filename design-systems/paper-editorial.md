# Paper Editorial — DESIGN.md

> A broadsheet that learned CSS. Serif display, warm paper, ink-black text.

For blogs, docs, newsletters and content products that should feel like a
beautiful printed magazine: generous measure, real typographic hierarchy,
almost no chrome.

## Colors

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FAF7F2` | Page background |
| `--paper-2` | `#F1EBE1` | Callouts / pull-quotes |
| `--ink` | `#1C1917` | Body text |
| `--ink-2` | `#44403C` | Secondary text |
| `--faint` | `#78716C` | Meta / captions |
| `--rule` | `#E7E0D2` | Hairline rules |
| `--accent` | `#B3402A` | The one accent: links, kickers |
| `--accent-soft` | `#F3D9CF` | Accent wash for highlights |
| `--code-bg` | `#292524` | Code blocks (dark island) |
| `--code-text` | `#E7E5E4` | Code text |

## Typography

- Display: **Fraunces** (or Playfair Display), 600, tight leading 1.05
- Body: **Source Serif 4** / Georgia, 18–19px, line-height 1.75
- UI / meta: **Inter**, 12–13px, uppercase kickers with 0.12em tracking
- Measure: 65–72ch for prose. Never full-width paragraphs.

## Layout & Spacing

- Single column centred at 720px for articles; 1080px for index pages
- Vertical rhythm in multiples of 8: 8 / 16 / 24 / 40 / 64 / 96
- Hairline `--rule` dividers instead of cards and boxes
- Radius: 2px (print-like) — images may be square-cornered

## Components

- **Kicker:** 12px uppercase `--accent`, above every headline.
- **Pull-quote:** Fraunces italic 28px, `--paper-2` wash, left border 3px `--accent`.
- **Links:** ink text, underline in `--accent` at 40%, full accent on hover. No blue links.
- **Code:** dark island `--code-bg`, 8px radius, mono 14px.
- **Buttons:** rare. When needed: solid `--ink`, paper text, 2px radius, uppercase 12px.

## Motion

- Almost none. 150ms colour transitions only.
- Images fade in on load (opacity 0 → 1, 300ms). Nothing slides or bounces.
- Respect `prefers-reduced-motion`.

## Accessibility

- Body text `--ink` on `--paper` is 14.5:1 — keep it that way; never set prose in `--faint`
- Accent is decorative + link-affordance only; links also underlined
- Headings form a real outline (one h1, sequential levels)

## Do & Don't

- **Do** let typography do the design work; remove UI before adding any.
- **Do** use drop caps or kickers — one flourish per article.
- **Don't** add cards, shadows, gradients or rounded pills.
- **Don't** set body copy in a sans-serif.
