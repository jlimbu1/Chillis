# Chillis — project rules

Project-level rules. Override customer (`../AGENTS.md`) and global rules.

## About

- Static community game guide (Dragon Nest) for the Chillis guild.
- Zero build step, zero dependencies: plain HTML/CSS/JS.

## Editing

- **Nav & site structure live in one place:** `js/site.js` (`SITE.categories`).
  To add a page, add it there and create the matching `pages/<file>.html`.
- Keep the shared header/footer in `js/site.js` — never copy them into pages.
- Styles go in `css/style.css` (design tokens at the top). No inline styles,
  no per-page CSS files.
- Follow `.editorconfig` / `.prettierrc` (4 spaces, LF, 100 cols).

## Content

- Game data (drop rates, costs, mechanics) is factual — verify against the
  game before changing numbers. Fixing typos/grammar is fine.

## Git

- Conventional Commits. No commits/pushes/deploys without approval.
