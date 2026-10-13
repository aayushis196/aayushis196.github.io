# Aayushi Shrivastava — personal website

Static academic portfolio, hosted at https://aayushis196.github.io/.

**Direct CV link:** https://aayushis196.github.io/Aayushi_CV.pdf

The CV navigation item opens the PDF directly. The old `cv.html` URL redirects to the same PDF.

## Editing

- Edit `index.html` for the biography, news, selected projects, and education.
- Edit the other named HTML files for their respective pages.
- Replace `Aayushi_CV.pdf` with the latest CV using the same filename to preserve application links.
- Images live in `assets/`. Styles and interactions live in `styles.css` and `site.js`.
- Videos and their poster images live in `assets/videos/`. Native HTML video players use `preload="none"` so clips load only when played. MP4s have their playback metadata at the front of the file for streaming.
- `assets/videos/manifest.json` records each clip's source, title, duration, and local file. Replace the corresponding MP4 and poster to update a clip; keep individual files below GitHub's 100 MiB limit.
- There is no build step and no package installation required.

## Preview locally

Run `python3 -m http.server 8000` from this directory, then open http://localhost:8000.

## Hosting

GitHub Pages publishes the root of the `main` branch. `.nojekyll` preserves the static files as written. Push updates to `main` to publish them.

Content and public assets migrated from the author's Google Site in October 2026. Publication statuses are preserved from that site. The CV was updated from the author's supplied PDF. Videos are hosted here and play without YouTube or Google Drive embeds.
