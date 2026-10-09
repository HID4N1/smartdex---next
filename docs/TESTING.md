# Testing and verification

## Automated checks currently available

| Command | What it checks | Important behavior |
| --- | --- | --- |
| `npm run lint` | ESLint 9 with `eslint-config-next/core-web-vitals`. | Scans the repository using `eslint.config.mjs`; build/output directories are ignored. |
| `npm run test:llms` | Generated LLM index structure, expected links, generated Markdown existence, and exclusion of private/optional content from the full file. | Regenerates files in `public/` before validating them. Review those changes. |
| `npm run build` | Runs the LLM generator and creates the Next.js production build. | A build is also the closest available render/type/static-generation integration check. |
| `npm run test:seo` | Assertions against prerendered HTML, `sitemap.xml`, and `robots.txt`. | Requires a successful current `npm run build`; it does not start or crawl a server. |

There is no test runner or configuration for unit, component, browser/E2E, screenshot, performance, accessibility, or API contract tests. There is no separate TypeScript/type-check command, and the application source is JavaScript/JSX. No CI workflow runs the available checks.

## Check selection by change

- Documentation only: verify links/paths and inspect the diff. Lint/build are unnecessary unless documentation changes generated sources or code.
- JavaScript/JSX or config: run `npm run lint` and `npm run build`.
- SEO metadata, routes, navigation, project/blog catalogs, robots, or sitemap: run lint, build, then `npm run test:seo`.
- MDX content or `lib/llms.mjs`: run `npm run test:llms`; run build/SEO checks if the public rendered route or metadata changed.
- CSS or component layout: run lint when JSX changed, then manually inspect affected routes on mobile and desktop. Use a build for changes that could affect rendering boundaries.
- API service or form workflow: run lint/build and manually verify against a compatible backend, including failure handling. Do not report a successful API test if only the UI was rendered.

## Important manual flows

When relevant, verify:

1. Header navigation, mobile menu, footer links, skip link, scroll reveal, and back-to-top behavior.
2. Contact validation (including professional email, minimum message length, and privacy acknowledgement), loading, success, and API-error states.
3. Quote validation, request creation, token-header generation, result rendering, reset, and PDF download/error behavior.
4. Chat open/close, send, persisted UUID reuse, stale-session 404 retry, reset, quote generation, and PDF download.
5. Cookie first visit, reject, accept, customize, reopen from footer, and version-expiry behavior. Confirm analytics scripts are absent before acceptance.
6. Blog and project list/detail routes, unknown project 404, `/saas-development` redirect, and noindex `/business-card` vCard download.
7. Contact map loading and its failure behavior when CDN or tile access is unavailable.

## Visual, responsive, and accessibility review

At minimum, inspect one narrow mobile viewport (around 375 px) and desktop (at least 1200 px). For affected pages, check intermediate layout near the owning stylesheet's breakpoint.

- Look for horizontal overflow, clipped copy, overlapping floating widgets, menu reachability, touch target size, image crop, and long French text wrapping.
- Navigate interactive controls by keyboard. Confirm visible focus, logical order, labels, error association, and status announcements.
- Verify heading hierarchy and a single useful H1 on public pages.
- Test with reduced motion enabled when changing animations and ensure state remains understandable.
- Check loading, empty/fallback, error, success, disabled, hover, and focus states that the component exposes.
- No automated accessibility or visual regression baseline exists; record the routes/viewports actually reviewed.

## Known coverage gaps and suggested future coverage

These are recommendations, not current capabilities:

- Add CI that runs `npm ci`, lint, build, LLM checks, and post-build SEO checks.
- Add component tests for form validation, API error mapping, cookie consent, and chatbot session recovery.
- Add browser tests for contact, quote, chatbot, cookie, redirect, and noindex flows using a controlled API stub.
- Add automated accessibility checks and screenshot baselines for key mobile/desktop routes.
- Generate or discover the SEO test route inventory from route/data sources to reduce manual drift.
- Add API contract fixtures for contact, chatbot, quote generation, and PDF responses.
