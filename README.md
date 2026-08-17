# Portfolio

Personal portfolio site. React + Vite + Tailwind CSS, no backend — fully static, deployed to GitHub Pages.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deployment

This repo deploys automatically to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.

One-time setup after pushing to GitHub:

1. Go to the repo's **Settings → Pages**.
2. Under **Source**, select **GitHub Actions**.
3. Push to `main` — the workflow builds and publishes the site.

Since this is the `<username>.github.io` user site, it's served from the root domain after the first successful deploy.

## Content

Placeholder content lives in `src/data/` (`skills.js`, `projects.js`, `socials.js`) and inline in the components under `src/components/` (look for `TODO` comments). Update these with real content, then adjust styling as desired.
