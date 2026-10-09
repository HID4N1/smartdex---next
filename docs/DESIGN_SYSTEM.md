# Implemented design system

## Foundations

The main site is a dark, glass-like blue interface. `app/globals.css` is the shared source of truth.

| Token | Implemented value |
| --- | --- |
| `--sd-bg` | `#08111f` |
| `--sd-bg-secondary` | `#0d1b31` |
| `--sd-accent` | `#31c6ff` |
| `--sd-accent-hover` | `#64d8ff` |
| `--sd-accent-2` | `#7c5cff` |
| `--sd-accent-3` | `#27f3c8` |
| `--sd-white` | `#FFFFFF` |
| `--sd-text` | `#f4f8ff` |
| `--sd-text-muted` | `#a9bad2` |
| `--sd-text-light` | `#7e97b8` |
| `--sd-border` | `rgba(183, 215, 255, 0.16)` |
| `--sd-accent-light` | `rgba(49, 198, 255, 0.1)` |

Cards use a translucent white gradient, `rgba(200, 226, 255, 0.16)` borders, and dark shadows. Page backgrounds combine navy gradients, cyan/purple glows, a 52 px grid, and a fine dot texture.

Both declared `light` and `dark` theme token blocks currently contain the same colors. The theme toggle persists and changes `data-theme`, but it does not produce a visual light palette.

## Typography, spacing, and widths

- Font stack: `system-ui, -apple-system, sans-serif`; there is no webfont loader.
- Base line height: `1.6`; headings use weight `700`, line height `1.15`. Page heroes often use `clamp()` and heavier `800`/`900` weights in their local CSS.
- Global content container: `max-width: 1200px`, horizontally centered, with `24px` side padding.
- Shared grid gap: `24px`.
- Shared section padding tokens: `86px` desktop and `58px` mobile.
- Radius tokens: `2px`, `12px`, `18px`, and `20px`. Hero and widget styles sometimes introduce larger local radii.
- Transition tokens: `180ms ease` and `200ms ease`.

Breakpoints are stylesheet-local rather than centralized. Repeated thresholds are 640 px, 767/768 px, 900 px, 980/992 px, and 1024 px, with specialized 390/420/430 px rules. The global three-column utility becomes one column below 768 px; header navigation becomes a mobile menu at 767 px.

## Shared patterns

- `.btn` is an inline-flex translucent button with a minimum 42 px height; `.btn-primary` uses a cyan-to-purple gradient.
- `.badge` and `.section-badge` provide compact cyan labels.
- `.card` and `.sd-card` provide glass backgrounds, borders, shadows, and hover elevation.
- `.container`, `.grid`, `.grid-cols-3-md`, and `.muted` are the principal layout/text utilities.
- `Header` and `Footer` are global navigation components. `ThemeToggle`, `ChatbotTrigger`, cookie actions, and back-to-top controls are shared interactive controls.
- Contact fields use global page CSS; quote and chatbot fields use CSS Modules. Labels, error text, disabled submission states, spinners, and status panels are implemented in those flows.

## Interaction states

- Hover states generally lift cards/buttons, strengthen cyan borders, or brighten backgrounds.
- Keyboard focus is globally visible for buttons and explicitly styled for contact, quote, cookie, footer, and several link controls. New interactive elements must add an equally visible `:focus-visible` state.
- Contact and quote forms expose inline validation, disabled/loading submit controls, API error copy, and success/result states.
- The chatbot shows message loading, quote-generation errors, PDF errors, disabled actions, and a reset action.
- Blog/project lists have no explicit empty-state UI because their source-controlled collections are assumed non-empty.
- Images missing from the project image map fall back to the card's styled background/no image; there is no network image error component.

## Images, icons, and animation

Local raster/SVG assets live under `public/images/` and `public/`; `next/image` is used for logos and project imagery with explicit dimensions or `fill`/`sizes`. Project images typically display within fixed card/hero frames and use CSS cropping. `next.config.mjs` enables AVIF/WebP output and a one-year minimum image cache TTL.

Icons come from inline SVG, `react-icons`, text/emoji, and CSS-drawn elements. Maintain the owning component's icon approach instead of adding a second library for one icon.

Reveal-on-scroll is driven by `data-reveal` and `IntersectionObserver`. CSS includes hero floats, gradients, charts, marquees, spinners, and modal transitions. Global and selected page/widget CSS contains `prefers-reduced-motion: reduce` overrides, but coverage is not uniform. Keep essential state understandable with animation disabled.

## Responsive behavior and accessibility

- The body has a 320 px minimum width. Main layouts collapse grids and wrap actions at their local breakpoints.
- Mobile navigation is button-controlled; form fields and cards become single-column; floating widgets constrain themselves to viewport width.
- A skip link targets `#main-content`; the root wrapper supplies a semantic main region.
- Forms associate most errors through `aria-invalid`/`aria-describedby`; submission feedback uses `role="status"` or `role="alert"`.
- Decorative visuals commonly use `aria-hidden`; content images have alt text sourced from project data or descriptive literals.
- The site is French-only (`lang="fr"`). There is no RTL stylesheet, locale router, translated navigation, or language-alternative metadata. Do not infer RTL support from service marketing copy.

## Visual references

There is no checked-in design file, Storybook, or screenshot baseline. The closest references are the running routes and assets in `public/images/`, including the 1200×630 `public/og-image.png`. Project screenshots are 1536×1024 images except for the logo/SVG assets and `RATPDev.jpg`, whose file contents are WebP despite the extension.

## Known inconsistencies

- Light and dark token sets are duplicates, so the visible theme toggle does not currently switch color schemes.
- `app/page.module.css` contains unused create-next-app light/dark tokens that do not represent the rendered home page.
- Shared visual values are often repeated in route CSS rather than expressed as global tokens, and breakpoints are not centralized.
- Focus and reduced-motion handling exist but are uneven across the many hover/animation rules.
- Styling mixes global classes, inline styles, page CSS, and CSS Modules; follow the existing boundary for the component being changed.
- The project type `mobile-webapp` has no explicit label/banner mapping in the project detail helpers and falls back to its raw value/default gradient.
