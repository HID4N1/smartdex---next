# Coding agent guide

## Purpose and stack

This repository is SmartDex's French-first public agency website for Moroccan businesses. It is a JavaScript/JSX Next.js 16 App Router application using React 19, plain CSS and CSS Modules, local JS data, MDX blog posts, `next/image`, `react-icons`, and consent-gated analytics. npm and `package-lock.json` are authoritative.

No backend, database, user authentication, or account roles are implemented here. Browser flows call a separate API through `NEXT_PUBLIC_API_BASE_URL`.

## Work in the right place

- Add or change routes, layouts, route metadata, and route-specific CSS in `app/`.
- Reuse or extend shared sections and interaction code in `components/`; keep page-only UI near its route.
- Update structured marketing content in `data/`, blog articles in `posts/`, and static images in `public/`.
- Put API calls in `services/`; reuse `apiRequest`, `resolveApiUrl`, and `ApiError` from `services/apiClient.js`.
- Reuse SEO helpers/constants in `lib/seo.js`. Keep the public LLM content catalog in `lib/llms.mjs` synchronized with curated pages.
- Do not hand-edit generated `public/llms.txt`, `public/llms-full.txt`, or generated public Markdown copies; change their sources and run `npm run test:llms`.

## Setup and verification

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Choose checks proportionately:

```bash
npm run lint
npm run test:llms
npm run build
npm run test:seo
```

`test:llms` writes generated public files. `test:seo` reads prerendered output and therefore requires a successful current build first. There are no automated unit, component, E2E, or type-check commands.

## Existing conventions

- Follow the file's existing quote/semicolon style; the repository is JavaScript, not TypeScript.
- Prefer named data/service helpers and existing barrel exports from `services/index.js` over duplicating content access.
- Server components are the default. Add `'use client'` only when browser APIs, state, effects, or event handlers require it.
- Build internal navigation with `next/link` and local images with `next/image`; provide meaningful `alt` text unless an image is deliberately decorative.
- Use `createPageMetadata` for public pages and `createNoIndexMetadata` for pages that must not be indexed. Keep canonical paths on `https://www.smartdex.ma`.
- Preserve the French public copy and `lang="fr"` unless a task explicitly changes localization strategy.

## UI and accessibility

- Reuse global `.container`, `.btn`, `.btn-primary`, `.card`, `.sd-card`, `.badge`, typography, and color variables in `app/globals.css` before adding variants.
- Match the dark blue/cyan/purple system documented in `docs/DESIGN_SYSTEM.md`. CSS Modules are used for isolated complex widgets; shared/page styles use imported CSS.
- Check at least a narrow mobile viewport and a desktop viewport. Existing breakpoints cluster around 640, 767/768, 900, 980/992, and 1024 px; follow the owning stylesheet.
- Preserve keyboard focus, labels, validation messages, `aria-live` feedback, the skip link, semantic headings, and reduced-motion behavior. Do not make hover the only way to discover an action.
- For visible changes, inspect the rendered page, navigation, loading/error/success states, overflow, and image crop at both viewport sizes. No screenshot-regression suite exists, so record manual visual checks accurately.

## Data, secrets, and production boundaries

- Treat `NEXT_PUBLIC_API_BASE_URL` as public build-time/browser configuration. Never put credentials or private URLs in it or any client bundle.
- Contact and quote forms send personal data to the external API. Preserve privacy acknowledgement/version fields and avoid logging submitted content or access tokens.
- Quote access tokens must remain in memory/request headers; do not add them to URLs, analytics, logs, or persistent browser storage.
- The chatbot persists only its conversation UUID in local storage. Cookie consent and analytics IDs are implemented in `lib/cookieConsent.js`; preserve opt-in loading behavior.
- Do not claim backend validation, persistence, email delivery, analytics collection, deployment, or indexing without evidence outside this repository.

## Documentation map

Read only what the task needs:

- `README.md`: setup, scripts, and repository orientation.
- `docs/PRODUCT.md`: route inventory, user journeys, scope, and open product questions.
- `docs/ARCHITECTURE.md`: rendering, module boundaries, data/API flow, and extension points.
- `docs/DESIGN_SYSTEM.md`: implemented tokens, components, responsive and accessibility rules.
- `docs/SEO.md`: metadata, sitemap, structured data, indexing, and public-page checklist.
- `docs/TESTING.md`: existing checks and manual regression scope.
- `docs/DEPLOYMENT.md`: runtime/build configuration and release gaps.
- `docs/decisions/README.md`: format for future architecture decision records.

Update the relevant document when a change makes its verified description stale.
