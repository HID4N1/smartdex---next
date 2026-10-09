# SmartDex website

SmartDex's public marketing website presents the agency, services, case studies, and French-language articles for businesses in Morocco. It also provides contact, AI-chatbot, and quote-request journeys backed by an external API, plus a consent-gated analytics implementation.

The application uses Next.js 16's App Router, React 19, JavaScript/JSX, CSS and CSS Modules, local JavaScript content, and MDX blog posts. It has no repository-owned database, authentication system, or API routes.

## Current capabilities

- Marketing pages for services, projects, the agency, and targeted service topics.
- Statically generated project detail and MDX blog routes.
- Contact form, chatbot, quote generation, and protected quote-PDF download through an external API.
- Cookie preferences for Google Analytics 4, Microsoft Clarity, and Vercel Analytics.
- Metadata, structured data, sitemap, robots rules, canonical URLs, and generated LLM-readable Markdown.
- A separate, no-index digital business-card page with vCard download.

See [Product](docs/PRODUCT.md) for a route and user-journey inventory.

## Prerequisites

- Node.js 20.9 or later (required by the locked Next.js version).
- npm. `package-lock.json` is the authoritative lockfile; use npm rather than generating another lockfile.
- Access to a compatible backend if you need the contact, chatbot, or quote flows to succeed. Static content can be developed without one.

The repository does not pin a Node or npm version. The versions above describe package compatibility, not a production runtime decision.

## Install and run

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open <http://localhost:3000>. `NEXT_PUBLIC_API_BASE_URL` defaults to `http://127.0.0.1:8000` when omitted; set it in `.env.local` to use another compatible API.

Do not place secrets in `NEXT_PUBLIC_*` variables: Next.js exposes them to browser code.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Generate LLM-readable assets, then create a production build. |
| `npm run start` | Serve an existing production build. |
| `npm run lint` | Run ESLint with Next.js Core Web Vitals rules. |
| `npm run test:llms` | Regenerate and validate `llms.txt`, `llms-full.txt`, and public Markdown copies. This writes files under `public/`. |
| `npm run test:seo` | Validate metadata, links, sitemap, and robots output from an existing `.next` production build. Run `npm run build` first. |

There is no unit, component, end-to-end, formatter, or standalone type-check script. See [Testing](docs/TESTING.md) for the appropriate checks by change type.

## Repository map

| Path | Responsibility |
| --- | --- |
| `app/` | App Router pages, layouts, route metadata, and page-level styles. |
| `components/` | Reusable sections, layout, forms, chatbot, cookie consent, and shared UI. |
| `data/` | Local service, project, testimonial, contact, and agency content. |
| `services/` | Local data accessors and the browser-facing external API client. |
| `lib/` | SEO, MDX post loading, privacy/cookie constants, and LLM-content catalog. |
| `posts/` | Blog articles in MDX with frontmatter. |
| `public/` | Images and generated LLM-readable text/Markdown assets. |
| `scripts/` | SEO checks and LLM-content generation/validation. |
| `docs/` | Product, architecture, design, SEO, testing, deployment, and decision guidance. |

## Documentation

- [Agent instructions](AGENTS.md)
- [Product scope](docs/PRODUCT.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [SEO](docs/SEO.md)
- [Testing](docs/TESTING.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Architecture decisions](docs/decisions/README.md)

## Content maintenance

Blog content belongs in `posts/*.mdx`; project and service records belong in `data/`. Public page metadata should use `createPageMetadata` from `lib/seo.js`. When adding a curated public page, review both `lib/seo.js` and `lib/llms.mjs`, then regenerate the public LLM files with `npm run test:llms`.
