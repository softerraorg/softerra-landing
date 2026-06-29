# Softerra Landing

Marketing landing page for Softerra. Built with **Next.js 15 (App Router)**, React 19, and Tailwind CSS v4. Deployed on **Vercel**.

## Commands

All commands run from the repo root:

| Command | Purpose |
|---|---|
| `npm run dev` | Start the dev server (http://localhost:3000) |
| `npm run build` | Production build (`next build`) |
| `npm run start` | Serve the production build locally (run `build` first) |

## Project layout

- `app/` — App Router entry: `layout.jsx`, `page.jsx`, `globals.css`
- `src/` — component library (`sections/`, `components/`, `lib/`) and the `Softerra-landing.jsx` composition root
- `public/` — static assets served at the site root

See [CLAUDE.md](CLAUDE.md) for architecture, theming conventions, and gotchas.
