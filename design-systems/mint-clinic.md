# Mint Clinic — DESIGN.md

> Calm, clean, trustworthy. Healthcare and wellness without the cold.

A soft light system for health, wellness and care products: warm whites,
mint and teal, large friendly type, and lots of air. The feeling to aim for
is a good clinic — competent and kind, never sterile, never playful.

## Colors

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#F7FAF8` | Page background |
| `--surface` | `#FFFFFF` | Cards |
| `--mint` | `#DDF3E7` | Soft section washes / icon chips |
| `--teal` | `#0E7C66` | Primary actions / brand |
| `--teal-dark` | `#0A5C4B` | Primary hover / headings accent |
| `--ink` | `#1E2B26` | Primary text |
| `--muted` | `#5C6F68` | Secondary text |
| `--line` | `#E2EDE6` | Borders / dividers |
| `--amber` | `#D97706` | Gentle warnings |
| `--red` | `#DC4446` | Errors (soft, never alarming-red) |
| `--blue` | `#2F6FED` | Informational states |

## Typography

- Headings: **Fraunces** soft serif *or* Inter 650 — pick one per product; default Inter for apps, Fraunces for marketing
- Body: **Inter**, 400–500, 16–17px, line-height 1.65
- Scale: 13 / 15 / 17 / 20 / 24 / 32 / 44
- Sentence case everywhere. No shouting uppercase except tiny labels.

## Layout & Spacing

- 8pt grid: 8 / 16 / 24 / 32 / 48 / 72
- Radius is generous: 16px cards, 12px inputs, 999px buttons
- Soft shadow only: `0 4px 24px rgba(14,124,102,.08)`
- Max width 1120px; one primary action per section

## Components

- **Buttons:** primary solid `--teal`, white text, pill. Secondary: white bg, `--line` border, teal text.
- **Cards:** white, `--line` border, 16px radius, soft shadow on hover only.
- **Icon chips:** 44px circles in `--mint` with teal icon — the recurring motif.
- **Forms:** large 48px inputs, labels above fields, help text in `--muted`, errors with icon + text (never colour alone).
- **Alerts:** tinted bg (mint/amber/red at 10%), left icon, plain-language copy.

## Motion

- Gentle 200ms ease transitions; fades over slides
- Loading = soft pulse skeletons in `--mint`
- Respect `prefers-reduced-motion`

## Accessibility

- Target WCAG AA+ : body text ≥ 4.5:1, large text ≥ 3:1, focus rings 2px `--blue`
- Minimum touch target 44px; forms fully keyboard navigable with visible focus
- Plain language is an accessibility feature: short sentences, no jargon in UI copy

## Do & Don't

- **Do** write copy like a kind professional speaks: "Your results are ready", not "Operation completed".
- **Do** give every state (empty, loading, error) a designed, reassuring version.
- **Don't** use clinical cold blues/greys as the dominant palette, or stock-photo handshakes.
- **Don't** use red for anything except true errors.
