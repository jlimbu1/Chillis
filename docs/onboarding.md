# Chillis — onboarding

## What it is

A community game guide for the **Chillis** guild in Dragon Nest. Static site,
no build step, no server logic. Originally a hand-built site with ~4,000 lines
of duplicated markup and 14 CSS files; refactored to one stylesheet + one
shared-shell script while preserving the original look and feel.

## Architecture

- `js/site.js` is the single source of truth for site structure. It defines
  `SITE.categories` (10 categories → pages) and renders, on every page:
  - the header (brand + nav + theme toggle)
  - the breadcrumb
  - the footer (About Us / Contact Us)
  - the landing page's image category menu
- Each page in `pages/*.html` is just `<main>` content plus three empty
  mount points (`#site-header`, `#breadcrumb`, `#site-footer`) that the script
  fills in. The script resolves the current page from `location.pathname`.

## Adding a guide page

1. Create `pages/<name>.html` (copy an existing page's `<head>` and skeleton).
2. Add the page to its category in `js/site.js` → `SITE.categories`.
3. Pick a category accent (already defined in `css/style.css` as `--cat-*`).

## Theming

- Light + dark themes via `data-theme` on `<html>`, stored in
  `localStorage['chillis-theme']`. Default is dark (matches the original look).
- Design tokens are in `css/style.css` under `:root[data-theme='light']` and
  `:root[data-theme='dark']`.

## Verification

- `python3 -m http.server 8000` and browse locally.
- No automated tests; verify nav, dropdowns, theme toggle and mobile menu by hand.

## Deploy

- Static files; any static host works (Nginx, GitHub Pages, Netlify, Dokploy).
- No `.env`, no secrets.
