# Obsidian Fintech — DESIGN.md

> Serious money, quietly luxurious. Near-black, hairlines, tabular numbers.

A precision design system for finance, trading and data-dense products.
Almost monochrome: trust comes from alignment, number formatting and
restraint — colour is reserved for meaning (up, down, warning).

## Colors

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#0A0A0B` | App background |
| `--panel` | `#131316` | Panels / tables |
| `--panel-2` | `#1B1B1F` | Raised rows / hover |
| `--line` | `#26262B` | Hairline dividers |
| `--text` | `#FAFAF9` | Primary text |
| `--muted` | `#A1A1AA` | Labels / secondary |
| `--faint` | `#63636B` | Timestamps / tertiary |
| `--gold` | `#D4AF6A` | The single brand accent |
| `--up` | `#4ADE80` | Positive values |
| `--down` | `#F87171` | Negative values |
| `--warn` | `#FBBF24` | Warnings |

## Typography

- UI: **Inter**, 400–600
- Numbers: **Inter with `font-variant-numeric: tabular-nums`** — always; figures must never jitter
- Display numerals: **JetBrains Mono** for tickers/prices in hero data
- Scale: 11 / 12 / 13 / 14 / 16 / 20 / 28 / 40. Small, dense, calm.

## Layout & Spacing

- 4pt base grid: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48
- Radius is small: 6px panels, 4px inputs — nothing bubbly
- Tables: 40px rows, hairline `--line` separators, right-aligned numbers
- Max width 1440px for dashboards; data may go edge-to-edge

## Components

- **Buttons:** solid `--text` bg with black text for primary; ghost + `--line` border for secondary. Gold is for links and key metrics, not buttons.
- **Stat blocks:** label in 11px uppercase `--faint`, value 28px tabular, delta chip in `--up`/`--down` at 12% opacity bg.
- **Tables:** zebra-free; hover row `--panel-2`; sticky header with `--bg`.
- **Charts:** 1px lines, gold or white series first, `--line` gridlines, no area-fill rainbows.

## Motion

- 120ms linear-ish transitions; numbers may count/tick, layouts never animate frivolously
- Live data flashes once at 8% accent opacity, then settles
- Respect `prefers-reduced-motion`

## Accessibility

- `--faint` only for non-essential text; labels use `--muted` (≥ 4.5:1 on `--bg`)
- Up/down never shown by colour alone — always with ▲▼ or +/− sign
- Focus ring: 2px `--gold` outline offset 2px

## Do & Don't

- **Do** align every decimal; format with thousands separators and fixed decimals per column.
- **Do** keep gold rare — one accent per view.
- **Don't** use rounded bubbly cards, drop shadows, or emoji in data UI.
- **Don't** centre numbers or let them wrap.
