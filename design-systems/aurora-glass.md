# Aurora Glass — DESIGN.md

> Dark, glassy, gradient-lit SaaS. Think premium AI products at midnight.

A modern dark design system built on deep space neutrals, frosted glass
surfaces and a single aurora gradient (violet → cyan). Restraint is the
brand: one gradient, used sparingly, on a calm dark canvas.

## Colors

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#070812` | App background |
| `--surface` | `#0E1020` | Cards / panels |
| `--glass` | `#161A33` | Frosted glass surface (use with 70% opacity + blur) |
| `--border` | `#262B4D` | Hairline borders |
| `--text` | `#F2F3FA` | Primary text |
| `--muted` | `#9BA3C7` | Secondary text |
| `--violet` | `#7C5CFF` | Gradient start, primary actions |
| `--cyan` | `#22D3EE` | Gradient end, highlights |
| `--success` | `#34D399` | Success states |
| `--danger` | `#FB7185` | Errors / destructive |

Gradient: `linear-gradient(135deg, #7C5CFF, #22D3EE)` — hero headings,
primary button, and one accent per screen. Never as a page background.

## Typography

- Display / headings: **Inter**, 700–800, tight tracking (-0.02em)
- Body: **Inter**, 400–500, 16px, line-height 1.6
- Code / data: **JetBrains Mono**, 400
- Scale: 12 / 14 / 16 / 20 / 24 / 32 / 48 / 64

## Layout & Spacing

- 8pt grid: spacing tokens 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96
- Max content width 1200px; generous 96px section padding on desktop
- Radius: 12px cards, 10px inputs, 999px pills
- Elevation: `0 8px 32px rgba(0,0,0,.45)` + 1px `--border`; glass adds `backdrop-filter: blur(14px)`

## Components

- **Buttons:** primary = gradient bg, white text, 10px radius, subtle glow shadow. Secondary = glass bg + border. Hover: translateY(-1px).
- **Cards:** `--surface` bg, 1px border, 12px radius, hover lifts border to `--violet` at 50%.
- **Inputs:** `--glass` bg, border `--border`, focus ring 2px `--cyan` at 60%.
- **Badges:** pill, glass bg, 12px uppercase mono text.
- **Nav:** sticky, glass, blur 14px, hairline bottom border.

## Motion

- 160–240ms ease-out for hover/focus; 400ms for panel entrances
- Fade + 8px rise on mount; no bouncing, no spinning loaders (use shimmer skeletons)
- Respect `prefers-reduced-motion`: disable entrance animation

## Accessibility

- Text contrast ≥ 4.5:1 (`--muted` only on `--bg`/`--surface`, never on gradient)
- Visible focus rings on every interactive element
- Touch targets ≥ 44px; never rely on glow/colour alone for state

## Do & Don't

- **Do** keep one gradient moment per screen; let the dark canvas breathe.
- **Do** use glass only for floating layers (nav, modals, menus).
- **Don't** put gradients behind body text, or stack multiple glass layers.
- **Don't** use pure black `#000000` or pure white backgrounds anywhere.
