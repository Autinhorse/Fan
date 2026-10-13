# Zimo (Ethan) Fan — Portfolio

Static portfolio site built with [Astro](https://astro.build). Design: "Midnight Glow" (dark, glow background, serif headings).

## Editing content

All copy (stats, AP scores, research, activities, awards, gallery) lives in `src/data/site.ts`.
Images live in `src/assets/img/` and are optimized automatically at build time.
The performance video is `public/media/seitz-concerto-viola.mp4`.

Source material (not deployed) is in `Raw/`, design references in `Ref/`.

## Commands

```sh
npm install      # first time only
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the built site
```

## Deploying to Vercel

Import the repository in Vercel — it detects Astro automatically (build `npm run build`, output `dist`).
After the first deploy, set `site` in `astro.config.mjs` to the real domain.
