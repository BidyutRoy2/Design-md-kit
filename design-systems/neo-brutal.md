# Neo Brutal — DESIGN.md

> Loud, honest, unmistakable. Thick borders, hard shadows, zero blur.

Neo-brutalism for products that want personality: creator tools, indie
SaaS, events, portfolios. Flat vivid colour blocks, 2–3px black borders,
offset hard shadows, and type that shouts a little.

## Colors

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#FFF6E9` | Warm off-white background |
| `--ink` | `#111111` | Text, borders, shadows |
| `--yellow` | `#FFC900` | Primary buttons / hero blocks |
| `--pink` | `#FF90E8` | Secondary blocks / highlights |
| `--blue` | `#90BFFF` | Info blocks |
| `--green` | `#7FE0A8` | Success blocks |
| `--orange` | `#FF7A29` | Alerts / CTAs (sparingly) |
| `--white` | `#FFFFFF` | Card surfaces |
| `--red` | `#FF5C5C` | Errors |

## Typography

- Headings: **Archivo Black** / system black weights, uppercase for H1, tight leading
- Body: **Space Grotesk** or Inter, 500, 16–17px
- Mono accents: **Space Mono** for labels, prices, tags
- Scale: 14 / 16 / 20 / 28 / 40 / 56 / 72

## Layout & Spacing

- Spacing: 8 / 16 / 24 / 32 / 48 / 64 — chunky, never fussy
- Everything sits in bordered blocks; grid gaps 24px
- Radius: 0–4px max. Corners are square, shadows are hard.
- Borders: 2px solid `--ink` everywhere, 3px for hero cards

## Components

- **Buttons:** solid colour bg, 2px border, hard shadow `4px 4px 0 #111111`. Press: translate(4px,4px) + shadow 0. This interaction is the signature — never skip it.
- **Cards:** white or colour bg, 2px border, shadow `6px 6px 0 #111111`.
- **Inputs:** white bg, 2px border, focus shadow `4px 4px 0 var(--blue)` (colour, not blur).
- **Tags/badges:** mono uppercase, colour bg, 2px border, no radius.
- **Marquees/dividers:** repeating border patterns and star/asterisk glyphs welcome.

## Motion

- Snappy: 100–150ms. Hover = shadow grows to 6px and block lifts (-2px,-2px).
- No easing curves that feel "soft" — use steps or sharp ease-out.
- Respect `prefers-reduced-motion`: disable marquee animation.

## Accessibility

- All colour blocks pair with `--ink` text (contrast ≥ 7:1 on yellow/pink/blue/green)
- Focus state: 3px dashed outline offset 3px — visible and on-brand
- Never put white text on the pastel blocks

## Do & Don't

- **Do** commit: if one element is brutal, everything is. Consistency is the style.
- **Do** keep shadows 100% opaque, offset, and blur-free — always.
- **Don't** use gradients, blur, glass, or soft shadows anywhere. Ever.
- **Don't** centre everything; asymmetry is welcome.
