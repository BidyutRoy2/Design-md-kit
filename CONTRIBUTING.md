# Contributing to design-md-kit

The best contribution is a **new design system**: one Markdown file that a
coding agent can design from, completely and unambiguously.

## Add a design system

1. Copy an existing file in `design-systems/` as your template and rename it
   (`kebab-case.md`). The file name becomes the CLI name.
2. Fill in *every* section — the test suite validates: colours with at
   least 8 concrete hex values, typography, layout & spacing, components,
   motion, accessibility, and a Do / Don't list.
3. Add the theme to `preview/index.html`: a picker button with
   `data-set="<your-name>"` and CSS rules under `[data-theme="<your-name>"]`
   that re-skin the sample UI. A system without a preview can't be reviewed
   properly.
4. Run the checks:
   ```bash
   npm test
   npm run validate:all
   ```
5. Open a PR using the pull request template, with a screenshot of your
   theme applied in the preview gallery.

Quality bar: tokens must be *decisions*, not placeholders. "Primary: #7C5CFF,
used for X" — never "choose a nice blue".

## Other contributions

- **Validator rules** — new completeness checks belong in `src/validate.js`
  with tests in `tests/`.
- **Docs and examples** — prompt patterns go in `examples/`, guides in `docs/`.
- **Bug reports** — use the issue templates; include your Node version and
  the exact command you ran.

## Development

```bash
git clone <this repo>
cd design-md-kit
npm test            # node --test, no dependencies to install
node src/cli.js list
```

Please keep the zero-dependency rule for the CLI itself.
