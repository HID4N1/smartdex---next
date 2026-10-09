# SEO implementation

## Production identity and metadata

`lib/seo.js` fixes the canonical origin to `https://www.smartdex.ma`, site name to SmartDex, locale to `fr_MA`, and default social image to `/og-image.png`. `app/layout.jsx` sets `metadataBase`, default site metadata, icons, broad index/follow directives, Open Graph defaults, Twitter summary-card defaults, and `<html lang="fr">`.

Public pages use `createPageMetadata`, which provides one title, description, self-referencing canonical path, Open Graph URL/title/description/image, and Twitter metadata. Blog and project detail pages generate these values from their slug records. The title template is `%s`, so page titles are expected to contain the desired SmartDex wording themselves.

No `hreflang` or language-alternative URLs are implemented. The `alternates` object contains canonical URLs only.

## Sitemap, robots, redirects, and indexing

- `app/sitemap.js` combines the static `indexableRoutes` catalog, every MDX post, and every project record. Static/project `lastModified` values use the fixed date `2026-09-09`; post dates come from frontmatter.
- `app/robots.js` allows `/`, disallows `/api/` and `/admin/`, sets the sitemap, and declares the canonical host.
- `/business-card` and the custom 404 use `createNoIndexMetadata` with noindex/nofollow. `/business-card` is excluded from the sitemap.
- `/saas-development` is a permanent application redirect to `/saas-development-morocco` and is excluded from the sitemap.
- There is no `next.config.mjs` redirect table, middleware indexing policy, or repository evidence of search-engine-console configuration or actual indexing.

## Structured data

The root layout emits `LocalBusiness`/`ProfessionalService` organization data and `WebSite` data. Blog posts emit `Article`. The quote and targeted service landing pages emit `FAQPage`. JSON is serialized in component scripts; most uses replace `<` with its escaped form.

Structured data is source code only: the repository does not contain a rich-results validation workflow or evidence that search engines have accepted it.

## Images and alternative text

The shared Open Graph image is `public/og-image.png` at 1200×630. Metadata builders attach an alt string to default social image objects. Rendered logos and project images generally use `next/image` and descriptive alt strings, with project-specific text held in `data/projects.js`. Decorative CSS/SVG visuals use `aria-hidden` in many components.

`scripts/seo-check.mjs` verifies that built pages have an Open Graph image, but it does not audit every rendered `<img>` alt value.

## LLM-readable public content

`npm run build` runs `scripts/generate-llms.mjs` first. It writes `public/llms.txt`, `public/llms-full.txt`, and Markdown copies of catalogued public pages. `lib/llms.mjs` owns the curated page catalog and automatically adds MDX posts. Legal pages are listed as optional and excluded from `llms-full.txt`.

These files improve machine-readable discovery but are not a guarantee that any crawler consumes or indexes them.

## Existing automated SEO check

After a production build, `npm run test:seo` reads prerendered files from `.next/server/app` and asserts:

- canonical, single title, description, Open Graph image, Twitter card, and indexability for a fixed route list;
- no canonical-host drift to the non-`www` hostname;
- selected H1 counts and internal-link minimums;
- contact/quote and terms-specific markup expectations;
- noindex on `/business-card`;
- sitemap uniqueness/inclusion/exclusion and production-domain safety;
- robots allow/disallow and sitemap rules.

The route list is manually maintained, so adding a route does not automatically extend all assertions.

## Public-page checklist

When adding or changing an indexable route:

1. Use `createPageMetadata` with the exact route, a unique useful title, and a page-specific description.
2. Keep the canonical on `https://www.smartdex.ma`; do not derive it from local/preview hosts.
3. Add the route to `indexableRoutes` when it is static, or ensure the dynamic source is included by `app/sitemap.js`.
4. Update `scripts/seo-check.mjs` so the built route is tested. For redirects or private/noindex pages, add explicit exclusion assertions instead.
5. Add meaningful visible H1 content, internal links, and image alt text. Keep decorative images out of the accessibility tree.
6. Add structured data only when the visible content supports it; escape serialized JSON consistently.
7. Add curated marketing pages to `lib/llms.mjs`; blog posts are discovered automatically. Run `npm run test:llms` and review generated changes.
8. Run `npm run build` followed by `npm run test:seo`. Inspect the rendered page and social image manually.

Current gaps include no hreflang/localization, no automated duplicate-title/description analysis across all routes, no broken-external-link check, no comprehensive alt-text audit, no rich-results validation, and fixed sitemap modification dates for non-blog content.
