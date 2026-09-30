# Chillis — Dragon Nest Guide

A community game guide for the **Chillis** guild (Dragon Nest). Originally a
hand-built static site with per-page CSS files and duplicated markup; cleaned up
into a single stylesheet, a single shared-shell script, semantic HTML and a
light/dark theme — while keeping the original look (dark gaming background,
image category menu, category color-coding, white content cards).

## Stack

- Static HTML + CSS + vanilla JS — no build step, no dependencies.
- Single stylesheet: `css/style.css` (design tokens for light/dark themes and
  category accents).
- Single script: `js/site.js` (nav data, shared header/footer/breadcrumb, home
  menu, dropdowns, theme toggle).
- Content: `index.html` (landing) + 29 pages in `pages/`.
- Images are hotlinked from Imgur; favicon is local (`assets/favicon.svg`).

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure

```
index.html          landing page (hero + image category menu)
pages/*.html        one page per guide topic
css/style.css       all styling + design tokens
js/site.js          nav data + shared shell + interactions
assets/favicon.svg
```

## Conventions

- Design tokens and components follow the JimmyCorp style guide
  (`~/Documents/projects/JimmyCorp/styleguide`): brand purple `#825991`,
  8px spacing scale, system font stack + Didot display serif.
- 4-space indentation, Prettier (see `.prettierrc` / `.editorconfig`).
- kebab-case for CSS classes/HTML ids; camelCase in JS.
- No commits without approval (see `AGENTS.md`).
