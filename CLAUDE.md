# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

Arte Piedra — a single-page French/English marketing site for a Moroccan marble & zellige (zellij tile) studio. Built with Next.js 16 (App Router), React 19, and Tailwind CSS v4. There is no backend/API layer in this repo; it's a static marketing page composed of full-width scroll sections.

## Commands

```bash
npm run dev     # start dev server (Next.js, default port 3000)
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test suite configured in this repo (no Jest/Vitest/Playwright).

## Architecture

### Page composition

`app/page.tsx` renders one section component after another in a fixed order: `Hero` → `Philosophy` → `Collections` → `MaterialCraft` → `CallToAction`. Each section lives in `components/sections/` as a self-contained, numbered content block (the copy inside each section includes its own step index, e.g. "02 — Philosophy", "03 — Collections"). To reorder or insert sections, edit the list in `app/page.tsx`; sections have no inter-dependencies.

`app/layout.tsx` wraps every page in `LenisProvider` → `Header` + page content + `Footer`, plus a global `Toaster`. Anchor nav links in `Header` (`#philosophy`, `#collections`, `#material-craft`, `#contact`) must match the `id` on each section's root element.

### Styling: hardcoded palette, not Tailwind color tokens

Brand colors live in `lib/theme.ts` as raw hex string constants (`CREAM`, `FOREST`, `TERRACOTTA`, `INK`) and are applied via inline `style={{ backgroundColor: ... }}` / `style={{ color: ... }}`, not Tailwind color classes. This is the established pattern throughout every section — follow it for new brand-colored elements rather than adding Tailwind utility colors or CSS variables for these four colors. Tailwind is still used for everything else (layout, spacing, typography, hover/focus states).

`app/globals.css` layers `tailwindcss` → `tw-animate-css` → `shadcn/tailwind.css`, then defines the shadcn/base-ui CSS-variable theme (`--background`, `--primary`, etc., in oklch) for the `components/ui/*` primitives. Those CSS variables are a separate system from the four Arte Piedra brand constants above — don't conflate them.

### UI primitives: base-ui, not Radix

`components/ui/*` are shadcn components generated against `@base-ui/react` (style `"base-nova"` per `components.json`), not the more common Radix-based shadcn output. Primitives are imported as e.g. `import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"`. When adding new shadcn components, make sure the base-ui variant is used so the API (`data-slot`, `data-checked`, etc.) stays consistent with existing components.

### Animation pattern

Section components use `framer-motion` (not GSAP, despite what generic Next.js boilerplate might suggest) with a repeated local convention:

```tsx
const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: EASE } }),
};
```
used with `initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={delay}`. Reuse this exact pattern (each section currently redefines it locally) rather than introducing a different animation approach.

Smooth scroll is `lenis` via the `lenis/react` `ReactLenis` wrapper in `components/layout/LenisProvider.tsx` (root-scoped, `anchors: true`) — there is no manual `gsap.ticker` wiring in this project.

### Forms

Forms (`CallToAction`, `Footer` newsletter signups) use `@tanstack/react-form`'s `useForm` + `form.Field`, validated with `zod` schemas (see `lib/schemas.ts` for shared schemas like `emailSchema`), and surface results via `sonner` (`toast.success` / `toast.error`) — not local component error state. There is no `@tanstack/react-query` and no axios instance in this project; forms don't hit any network endpoint yet (`onSubmit` just validates and shows a toast).

### Images

Section-specific photography lives under `app/assets/imgs1/` (Collections) and `app/assets/imgs2/` (MaterialCraft), imported directly as static assets and rendered with `next/image` `fill` + `sizes`. Filenames are raw AI-generation exports (e.g. `ChatGPT Image Jul 19, 2026, 08_16_51 PM.png`) and are explicitly flagged as placeholders in a comment at the top of `Collections.tsx` pending real product photography — don't treat them as final assets.

### Content language

Root `<html lang="fr">` and most copy (`Header`, `Philosophy`, form validation messages) is in French, but some sections (`CallToAction`, `MaterialCraft`, `Footer` taglines) are in English. This split currently exists as-is in the codebase; match whichever language the surrounding section already uses rather than unifying it unprompted.
