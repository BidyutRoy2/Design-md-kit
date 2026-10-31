# Creating your own DESIGN.md

A good DESIGN.md is a set of *decisions* an agent cannot argue with.
Vague guidance ("modern, clean, nice colours") produces generic output;
tokens produce design.

## The required sections

1. **Colors** — named tokens with hex values and a stated use for each.
   At least 8. Include background, surface, text, muted, border, one accent
   family, success and danger.
2. **Typography** — real font names, weights, and a numeric scale. State
   line-heights for body and display, and what mono is for.
3. **Layout & Spacing** — a spacing scale (multiples of 4 or 8), max
   widths, radius rules, elevation/shadow rules.
4. **Components** — buttons (primary/secondary), cards, inputs, nav, and
   whatever your product repeats. Give states: hover, focus, disabled.
5. **Motion** — durations, easing character, what never animates, and
   `prefers-reduced-motion` behaviour.
6. **Accessibility** — contrast targets, focus visibility, touch targets,
   and "never encode meaning by colour alone" where relevant.
7. **Do / Don't** — the taste section. Short, opinionated, specific.
   This is what separates a system from a token dump.

## Process that works

1. Screenshot 3 sites that *feel* right. Extract their actual hex values,
   fonts and spacing — do not guess from memory.
2. Write the token tables first, components second, taste last.
3. Run `design-md-kit validate your-file.md` until it passes 8/8.
4. Generate one real page with your agent. Every place it goes off-system
   is a missing rule — add the rule, not a complaint.
5. Ship it: add the file to `design-systems/`, wire it into the preview
   gallery, and open a PR (see CONTRIBUTING.md).

## Anti-patterns

- Listing colours without uses.
- "Use a modern sans-serif" (name the font).
- Ten accent colours (one accent, used rarely, is a brand).
- Copying a famous product's system 1:1 — take the *structure*, make your
  own decisions.
