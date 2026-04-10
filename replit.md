# Global Gallivant — Travel Services Site

Travel services landing page for **Intercontinental Zoe** at `artifacts/travel-youtuber/`.

## Sections
- **Hero**: Full-screen video background, animated headline, nav with Book Now CTA
- **Services**: 4 cards — Travel Consultations, Travel Guides, Local Rentals, Merchandise
- **Destinations**: Stats (21 countries / 39 cities / 4 continents) + scrolling city ticker + Cartagena aerial photo
- **Gallery**: Video tile + destination photo grid + consultation CTA strip
- **Footer**: Brand, service links, legal

## Assets (public/)
- `images/cartagena.png` — AI-generated aerial helicopter view of Cartagena, Colombia
- `images/tokyo.jpg` — Cinematic Asian city streets
- `images/mountain.jpg` — Adventure / explorer scene
- `videos/hero.mp4` — Tropical islands drone footage (hero background)
- `videos/people_moving.mp4` — AI-generated crowd/travel video (gallery tile)

---

# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
