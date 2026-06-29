# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project layout

This is a **Next.js 15 (App Router) app** at the **repo root**, deployed to **Vercel**. It was migrated from Vite + React — there is no `index.html`, `vite.config.js`, or `main.jsx` anymore. Layout:

- **`app/`** — the App Router entry: `layout.jsx` (root `<html>`/`<body>`, fonts, global metadata, imports `globals.css`), `page.jsx` (server component that renders the landing), and `globals.css`.
- **`src/`** — the component library (`sections/`, `components/`, `lib/`, and the composition root `Softerra-landing.jsx`). Imported by `app/page.jsx`.
- Config at root: `next.config.mjs`, `postcss.config.mjs`, `package.json`, `.gitignore`.

**Run every command from the repo root.** This is a git repository (remote: `softerraorg/softerra-landing`).

## Commands

All commands run from the repo root:

| Command | Purpose |
|---|---|
| `npm run dev` | Start the Next.js dev server (HMR; serves on `localhost:3000`) |
| `npm run build` | Production build (`next build`) — prerenders pages to `.next/` |
| `npm run start` | Serve the production build locally (run `build` first) |

There is **no test suite** and **no TypeScript** — plain JS/JSX. **ESLint is not wired up for Next.js yet** (`next.config.mjs` sets `eslint.ignoreDuringBuilds: true` so a missing config can't block builds); wiring up `eslint-config-next` is a known follow-up.

## Stack

Next.js 15 (App Router, React 19), Tailwind CSS v4 via the **`@tailwindcss/postcss`** plugin (`postcss.config.mjs` is **required** now — opposite of the old Vite setup; **no `tailwind.config.js`**, content is auto-detected). Deployed on Vercel.

**Animations are currently disabled.** framer-motion and GSAP have been removed. Components still import a `motion` API, but from a local no-op shim — see [src/lib/no-motion.js](src/lib/no-motion.js): `motion.*` renders plain elements and drops all animation props/transform style keys, and the hooks return inert values. To re-enable, repoint those imports back to `framer-motion` (re-add the dep) and restore the `ThemeToggle` thumb. `src/lib/motion.js` still exports the unused `fadeUp`/`stagger` variants (harmlessly ignored by the shim).

## Architecture

**Render path:** `app/layout.jsx` (server) → `app/page.jsx` (server) → `src/Softerra-landing.jsx` (**`"use client"` boundary**) → sections.

`Softerra-landing.jsx` is the **composition root** and the single `"use client"` boundary — everything it imports (sections, components, hooks) is therefore a client component, so individual files do **not** need their own `"use client"`. It imports every section and renders them in page order inside one wrapper. It is a single-page marketing site — no router. `page.jsx` stays a server component, so Next prerenders the whole client tree to static HTML at build time (this is what avoids the blank-screen flash on first load).

Global CSS, fonts, and `<head>` metadata live in `app/` (`globals.css` + `layout.jsx`), **not** in a `<style>` block in the composition root.

Source is organized by *role*, and new code should follow the same split:

- **`src/sections/`** — full-width page sections (`Hero`, `Stats`, `Services`, `SelectedWork`, `Reviews`, etc.), each an `export default` component.
- **`src/components/`** — reusable pieces used *inside* sections: `Counter` (scroll-triggered count-up; the only animation still running, via `requestAnimationFrame` — not the motion lib), `Aurora` / `Grain` (decorative background layers), `ThemeToggle`.
- **`src/lib/`** — non-visual helpers: `no-motion.js` (the animation shim, see Stack), `motion.js` (now-unused variants), and `useTheme.js`.

Each file imports its own dependencies — there is no shared barrel or globals.

## Theming — read before touching any color

The site has a light/dark toggle built on CSS variables, spanning three files:

1. **`app/globals.css`** defines the tokens: `:root` holds light values, `.dark` overrides with dark values, for `--bg`, `--surface`, `--surface-2`, `--fg`. An `@theme inline` block maps them to Tailwind color utilities. (Also holds `.font-serif`, `::selection`, smooth scroll.)
2. **`src/lib/useTheme.js`** toggles the `.dark` class on `<html>` and persists the choice to `localStorage`. **Dark is the default** — `app/layout.jsx` ships `className="dark"` on `<html>`. State defaults to `"dark"` and the saved preference is read in an effect (not in the `useState` initializer) so server and first client render agree — **do not read `localStorage` during render** or SSR will crash / hydration will mismatch.
3. **`ThemeToggle`** (rendered in the Nav) is the only consumer of `useTheme`. Its thumb position is a CSS-only conditional class (`translate-x-9` in dark), not a motion animation.

**Convention for any new or edited markup:** use the semantic token utilities, never hardcoded colors:

- `bg-bg` (page), `bg-surface` / `bg-surface-2` (panels), `text-fg` (text).
- The `/opacity` modifier works on these tokens — use `text-fg/60`, `border-fg/10`, `bg-fg/5` instead of the old `white/60` etc. One `fg` token covering both themes is the whole point.

Intentionally kept as **hardcoded** colors (do not tokenize): the purple accents `#6B5BFF` / `#8B7BFF`, the colored gradient banners on `SelectedWork` cards, and the decorative rgba glows in `Aurora` / CTA / case-study backgrounds — these read correctly on both themes.

## Gotchas

- The composition root file is `Softerra-landing.jsx` with a **capital `S`**; `app/page.jsx` imports `../src/Softerra-landing`. It resolves on Windows (case-insensitive FS) — keep the casing consistent.
- `AllStoraCaseStudy` (a section) is currently **commented out** in `Softerra-landing.jsx`; Allstora instead appears as the first card in `SelectedWork`.
- The VS Code CSS linter flags `@theme` in `globals.css` as an "unknown at-rule" — false positive; Tailwind v4's PostCSS plugin handles it.
- Any component using hooks/browser APIs is fine without its own `"use client"` because it's imported under the `Softerra-landing.jsx` boundary — but if you ever render a section directly from a server component, add `"use client"` to it.
- Leftover Vite-era artifacts (`dist/`, `dist-upload/`, `deploy.ps1`, `src/App.css`, `src/assets/`) are dead and safe to delete.
