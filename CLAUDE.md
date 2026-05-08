# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run lint     # run ESLint
```

There are no tests configured in this project.

## Stack

- **Next.js 16.2.4** (App Router) — this is a future version with potential breaking changes; consult `node_modules/next/dist/docs/` before writing any Next.js-specific code
- **React 19.2.4**
- **Tailwind CSS v4** via `@tailwindcss/postcss` — configured with `@import "tailwindcss"` in `app/globals.css`, no `tailwind.config.js` needed
- **TypeScript 5**

## Architecture

All routes live under `app/` using the App Router file-system convention:

- `app/layout.tsx` — root layout: defines the shared `<header>` nav and `<footer>`, wraps every page in `<main>`
- `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, `app/contact/page.tsx` — one Server Component per route, no client components currently

Nav links are defined as a static array in `app/layout.tsx`. Adding a new page requires creating `app/<name>/page.tsx` and adding an entry there.

## CSS conventions

- Tailwind v4 is imported with `@import "tailwindcss"` (not `@tailwind base/components/utilities`)
- Design tokens (font) are declared via `@theme inline` in `app/globals.css`
- All styling is done with Tailwind utility classes inline on elements; no CSS Modules are used
- Layout width is constrained to `max-w-5xl mx-auto px-6` across all pages
