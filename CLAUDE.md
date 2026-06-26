# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project layout

The Vite + React app lives at the **repo root** (it was previously nested under `softerra-app/`; that folder has been flattened away). `src/` holds the source, and `index.html`, `package.json`, `vite.config.js`, `eslint.config.js`, and `.gitignore` sit at the root. **Run every command from the repo root** — there is no app subfolder anymore.

This is a git repository (remote: `softerraorg/softerra-landing`).

## Commands

All commands run from the repo root:

| Command | Purpose |
|---|---|
| `npm run dev` | Start the Vite dev server (HMR; prints a localhost URL) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint (flat config in `eslint.config.js`) |

There is **no test suite** and **no TypeScript** — plain JS/JSX.

ESLint does *not* run as part of `dev` or `build`, so unused imports / lint errors will not break the dev server or the build — they only surface via `npm run lint` and the editor.

## Stack

Vite 8, React 19, Tailwind CSS v4 via the `@tailwindcss/vite` plugin (**no `tailwind.config.js`, no PostCSS config** — a stray `postcss.config.js` will crash the dev server), framer-motion 12 for all animation, and GSAP 3 (`gsap` + `@gsap/react`) which is installed and registered in the composition root but does not yet drive any animation.

## Architecture

**Render path:** `index.html` → `src/main.jsx` → `src/App.jsx` → `src/Softerra-landing.jsx`

`Softerra-landing.jsx` is the **composition root**: it imports every section + `Grain`, renders them in page order inside one wrapper, and holds the global `<style>` block (Google Fonts `@import`, the `.font-serif` class, `::selection`, smooth scroll). It is a single-page marketing site — no router.

Source is organized by *role*, and new code should follow the same split:

- **`src/sections/`** — full-width page sections (`Hero`, `Stats`, `Services`, `SelectedWork`, `Reviews`, etc.), each an `export default` component.
- **`src/components/`** — reusable pieces used *inside* sections: `Counter` (scroll-triggered count-up via framer-motion `useInView`), `Aurora` / `Grain` (decorative background layers), `ThemeToggle`.
- **`src/lib/`** — non-visual helpers: `motion.js` (`fadeUp` / `stagger` framer-motion variants, imported by sections that animate) and `useTheme.js`.

Each file imports its own dependencies — there is no shared barrel or globals.

## Theming — read before touching any color

The site has a light/dark toggle built on CSS variables, spanning three files:

1. **`src/index.css`** defines the tokens: `:root` holds light values, `.dark` overrides with dark values, for `--bg`, `--surface`, `--surface-2`, `--fg`. An `@theme inline` block maps them to Tailwind color utilities.
2. **`src/lib/useTheme.js`** toggles the `.dark` class on `<html>` and persists the choice to `localStorage`. **Dark is the default** — `index.html` ships `class="dark"` on `<html>` to avoid a flash on load.
3. **`ThemeToggle`** (rendered in the Nav) is the only consumer of `useTheme`.

**Convention for any new or edited markup:** use the semantic token utilities, never hardcoded colors:

- `bg-bg` (page), `bg-surface` / `bg-surface-2` (panels), `text-fg` (text).
- The `/opacity` modifier works on these tokens — use `text-fg/60`, `border-fg/10`, `bg-fg/5` instead of the old `white/60` etc. One `fg` token covering both themes is the whole point.

Intentionally kept as **hardcoded** colors (do not tokenize): the purple accents `#6B5BFF` / `#8B7BFF`, the colored gradient banners on `SelectedWork` cards, and the decorative rgba glows in `Aurora` / CTA / case-study backgrounds — these read correctly on both themes.

## Gotchas

- The composition root file is `Softerra-landing.jsx` with a **capital `S`**; `App.jsx` imports `./Softerra-landing`. It resolves on Windows (case-insensitive FS) — keep the casing consistent.
- `AllStoraCaseStudy` (a section) is currently **commented out** in `Softerra-landing.jsx`; Allstora instead appears as the first card in `SelectedWork`.
- The VS Code CSS linter flags `@theme` in `index.css` as an "unknown at-rule" — false positive; Tailwind v4's Vite plugin handles it.
