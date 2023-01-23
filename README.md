# Mafs

Mafs is a set of opinionated React components for creating math visualizations.

[Visit the docs →](https://mafs.dev)

---

## Development

Development is done inside of the Next.js documentation site, which directly
imports Mafs components from `src/`. To start the development server, run:

```
pnpm install
pnpm start
```

Then visit [localhost:3000](http://localhost:3000).

## Tests

Mafs uses unit, end-to-end, and visual regression testing to ensure consistency between updates. It takes literal screenshots of components as rendered by the browser, and compares them to a known "correct" screenshot. Two of the browsers may require a Mac to run (Safari and iOS Safari).

All examples on the documentation site are visually tested automatically—the test file is autogenerated.

```bash
pnpm test      # run both suites
pnpm test:unit # to run just the Jest tests
pnpm test:e2e  # to run Playwright (end-to-end and visual tests)
pnpm test -- --update-snapshots # to update the visual test baselines
```
