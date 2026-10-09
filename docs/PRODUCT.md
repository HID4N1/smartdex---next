# Product

## Purpose and audience

The site markets SmartDex as a Casablanca-based digital agency serving Moroccan businesses. Repository copy targets SMEs and organizations seeking websites, mobile applications, SaaS products, ERP/CRM systems, automation, dashboards, and AI assistants. Content is primarily French and the document language is set to `fr`.

The code supports a public, anonymous visitor experience. There are no customer accounts, administrative screens, authenticated routes, or role/permission checks in this repository.

## Existing pages and features

| Route | Implemented purpose |
| --- | --- |
| `/` | Agency proposition, proof points, selected projects, industries, delivery approach, testimonials, and conversion links. |
| `/about` | Mission, values, partners, and agency presentation. |
| `/services` | Compact and detailed service catalog sourced from `data/services.js`. |
| `/projects` | Filterable/listed project portfolio sourced from `data/projects.js`. |
| `/projects/[slug]` | Prerendered case-study detail for each project record. Unknown slugs use the 404 page. |
| `/blog` | Article index generated from MDX frontmatter. |
| `/blog/[slug]` | Prerendered MDX article with publication date, reading time, metadata, and Article structured data. |
| `/contact` | Project inquiry form, contact information, FAQ, and an OpenStreetMap map loaded with Leaflet from unpkg. |
| `/devis` | Detailed project questionnaire, API-generated estimate/quote result, and authenticated-by-token PDF download. |
| `/ai-chatbot-morocco` | Chatbot service landing page and an entry point to the site-wide assistant. |
| `/saas-development-morocco` | SaaS service landing page. |
| `/agence-web-casablanca` | Web-agency landing page. |
| `/creation-application-mobile-maroc` | Mobile-application service landing page. |
| `/developpement-erp-crm-maroc` | ERP/CRM service landing page. |
| `/politique-de-confidentialite` | Privacy notice. |
| `/politique-de-cookies` | Cookie and analytics policy. |
| `/conditions-generales` | General terms. |
| `/business-card` | Standalone digital contact card and vCard download. It omits the main site chrome and is marked `noindex`. |
| `/saas-development` | Permanent redirect to `/saas-development-morocco`. |

The shared shell adds desktop/mobile navigation, a footer, scroll progress, a back-to-top action, cookie preferences, and the AI chat widget to every route except `/business-card`.

## User journeys and conversion actions

1. A visitor discovers the agency through the home, service, blog, or targeted SEO pages.
2. They inspect local portfolio data on `/projects` and `/projects/[slug]`.
3. They convert through one of three API-backed journeys:
   - submit a project inquiry on `/contact`;
   - complete the structured `/devis` questionnaire and download the resulting PDF when the API returns an ID and access token;
   - ask the floating assistant questions and optionally generate a quote from user messages.
4. Alternatively, they use direct email/telephone/LinkedIn links or download contact details from `/business-card`.

Cookie preferences form a separate journey: analytics remain rejected until the visitor explicitly accepts them, and preferences can be reopened from the footer.

## Roles and permissions

Only anonymous public visitors are represented. The quote API returns a per-quote access token that the client sends in the `X-Devis-Access-Token` header for generation and PDF download. This is resource access, not a site login or role system. Authorization and token lifetime are backend concerns and are not defined here.

## Current scope versus claims about delivered work

The website itself implements marketing content, local project/article rendering, browser interactions, and API clients. Statements within service pages and project records describe SmartDex's offerings and portfolio; they are content, not evidence that those technologies are dependencies or capabilities of this website.

Project data currently labels five records `completed`, one `ongoing`, and one `in-progress`. Those values describe portfolio items, not a website roadmap. No planned website features or formal backlog are stored in the repository. Commented-out quote-form fields are inactive code and should not be treated as committed plans.

## Open product questions

- Who owns final approval for pricing, performance claims, testimonials, legal text, and project status?
- Which conversion is primary: contact submission, structured quote, chatbot quote, phone, or email?
- What response schema, retention policy, availability target, and abuse controls does the external API guarantee?
- Should the site support Arabic, RTL, English, or other locales? Some marketing copy promises multilingual client solutions, but this site has no localization system.
- Is `/business-card` intended to be discoverable only by direct link, and is its personal contact content approved for public deployment despite `noindex` not being access control?
- Which deployment platform and production/preview environments are authoritative?
- Are the fixed analytics IDs and legal-policy version dates expected to vary by environment or release?
