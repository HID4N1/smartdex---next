# Deployment

## What the repository supports

The application builds as a standard Next.js 16 project:

```bash
npm ci
npm run build
npm run start
```

The locked Next.js package requires Node.js 20.9 or later. The repository does not pin a Node/npm version and does not declare `engines` in its own package manifest.

`npm run build` first runs `scripts/generate-llms.mjs`, which writes public text and Markdown artifacts, then runs `next build`. A writable checkout/build workspace is therefore required. `npm run start` serves the resulting `.next` output with the Next.js Node server.

The repository contains `@netlify/plugin-nextjs` as a development dependency and uses `@vercel/analytics`, but it has no `netlify.toml`, `vercel.json`, Dockerfile, platform project settings, or infrastructure code. Those packages do not establish where production is deployed. There are also no checked-in CI/CD workflows.

`next.config.mjs` removes the `X-Powered-By` header, enables AVIF/WebP image formats with a one-year minimum optimized-image cache TTL, and gives generated LLM/Markdown assets a one-hour public cache header. Its `allowedDevOrigins` entries cover localhost and specific LAN addresses for development; they are not a production-origin allowlist. No content-security policy or other custom security headers are configured.

## Configuration

| Variable | Exposure | Required | Use |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_API_BASE_URL` | Public browser/build value | Optional for static pages; operationally required for non-local contact/chatbot/quote flows | Base URL for all calls in `services/apiClient.js`. Defaults to `http://127.0.0.1:8000`. |

Because the variable is prefixed `NEXT_PUBLIC_` and imported by client code, set it in the build environment for each deployed frontend. Treat it as build-time configuration: changing the hosting runtime environment alone may not update an already-built client bundle. It must not contain credentials, tokens, or a private-only address.

Analytics IDs, canonical site URL, privacy/cookie versions, and sitemap static modification date are source constants in `lib/cookieConsent.js`, `lib/seo.js`, `lib/privacy.js`, and `app/sitemap.js`; they are not environment variables.

## Runtime and integration requirements

- The deployed frontend must be able to serve Next.js App Router output and optimized images.
- Browsers need HTTPS/CORS access from the frontend origin to the configured external API.
- The external API must implement the endpoint and response contracts listed in [Architecture](ARCHITECTURE.md), including `X-Devis-Access-Token` behavior and PDF responses.
- Browser policies must permit the consented analytics endpoints and, for `/contact`, Leaflet from unpkg and OpenStreetMap tiles. No content-security policy is configured here.
- Production canonical metadata always targets `https://www.smartdex.ma`, including in local and preview builds.

## Release verification

Before release:

1. Install with `npm ci` using the intended production Node version.
2. Set `NEXT_PUBLIC_API_BASE_URL` to the correct public HTTPS API origin.
3. Run `npm run lint`, `npm run test:llms`, and `npm run build`.
4. Run `npm run test:seo` against that build and ensure generated public files have no unexpected diff.
5. In the deployed environment, smoke-test home, contact, quote, chatbot, a blog post, a project detail, sitemap, robots, `/business-card`, and the permanent redirect.
6. Verify mobile/desktop rendering, consent before analytics, form/API success and failure, PDF download, canonical/social metadata, and the absence of local/preview origins from public output.

## Rollback

No repository-defined rollback command or deployment history mechanism exists. Use the chosen hosting platform's prior immutable deployment/artifact if it provides one, then smoke-test the same critical routes. Database rollback does not apply to this frontend repository, but backend compatibility must be considered because all conversion flows depend on the external API.

## Details requiring confirmation

- Production and preview hosting platforms, project identifiers, regions, and domain/DNS ownership.
- The production Node/npm versions and whether builds run on the platform or in a separate CI system.
- Where `NEXT_PUBLIC_API_BASE_URL` is managed for each environment and which origins the API permits.
- Deployment triggers, branch/environment mapping, approval process, monitoring, alerting, and ownership.
- Cache invalidation behavior for one-year optimized image TTL and one-hour LLM/Markdown cache headers.
- Whether generated `public/llms*` and Markdown files should be committed, created during CI only, or checked for a clean diff.
- Rollback retention and the expected procedure for a frontend/backend contract mismatch.
