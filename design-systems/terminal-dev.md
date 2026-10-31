# Terminal Dev — DESIGN.md

> Built for people who live in the shell. Mono-first, green-on-black, honest.

A developer-tool aesthetic that earns trust by looking like the tools
developers already love: monospace type, terminal green on true dark,
visible structure, zero decoration that doesn't carry information.

## Colors

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#0B0E11` | Background |
| `--panel` | `#12161B` | Panels / code blocks |
| `--line` | `#232A31` | Borders |
| `--text` | `#D6DEE6` | Primary text |
| `--muted` | `#8A97A5` | Comments / secondary |
| `--green` | `#3FB950` | Primary accent / success / prompt |
| `--cyan` | `#39C5CF` | Strings / links |
| `--yellow` | `#D29922` | Warnings / numbers |
| `--red` | `#F85149` | Errors |
| `--magenta` | `#BC8CFF` | Keywords / special tokens |

(Syntax palette intentionally mirrors common editor themes — familiarity is the feature.)

## Typography

- Everything UI: **JetBrains Mono**, 400–700
- Long-form docs only may pair a sans (Inter) for paragraphs; headings stay mono
- Scale: 12 / 13 / 14 / 16 / 20 / 26 / 34 — compact
- Prefix headings with shell-like markers (`##`, `$`, `>`) as decoration where tasteful

## Layout & Spacing

- 8pt grid, dense: 4 / 8 / 12 / 16 / 24 / 32 / 48
- Radius: 6px max; panels are rectangles with 1px `--line`
- Max width 1200px; docs column 760px
- ASCII/box-drawing dividers (`─`, `::`) are on-brand ornaments

## Components

- **Buttons:** bordered mono uppercase 12px, hover fills `--green` with black text. Primary = green border + green text.
- **Code blocks:** `--panel` bg, header strip with filename + copy button, syntax colours from the palette above.
- **Terminal window:** traffic-dot header optional; body shows `$ command` then output in `--muted`.
- **Tables:** mono, `--line` row rules, left-aligned, status dots in palette colours.
- **kbd / tags:** 1px border, `--panel` bg, 4px radius, 11px mono.

## Motion

- Blinking cursor (1s step) on terminal heroes — the only ambient animation
- Transitions 120ms, functional only
- Respect `prefers-reduced-motion`: cursor becomes static

## Accessibility

- `--muted` is for comments/labels only; body text uses `--text` (≥ 7:1 on `--bg`)
- Focus: 2px `--cyan` outline
- Colour-coded output always pairs with a text label (`ok`, `warn`, `error`)

## Do & Don't

- **Do** show real commands and real output in every example — devs smell fake terminals instantly.
- **Do** keep the grid visible: borders and alignment over shadows and float.
- **Don't** use gradients, glass, stock photos, or rounded bubbly shapes.
- **Don't** set marketing headlines in a decorative display font.
