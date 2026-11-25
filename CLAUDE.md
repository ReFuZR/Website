# Project Memory — Apex Auto Care

Read this first in any new chat. Keep it short; log only important decisions.

## Business
- Owner: **Cody Montgomery** (solo operator). Auto detailing business.
- Old name "Duo Shine" retired (parent left the business). New name: **Apex Auto Care** — chosen because it's expandable (more staff, services like tint/PPF/boats, multiple locations).
- Location, phone, email, service area: **not provided yet** (placeholders in site).

## Website
- Static site: `index.html`, `styles.css`, `script.js`, `assets/logo.svg`. No build step.
- Style: modern/sleek dark theme, electric-blue gradient accent (`--accent` in `styles.css :root`), fonts Sora + Inter. Mobile + desktop responsive (hamburger menu ≤860px).
- Hero stat "Fully Insured" removed (unconfirmed) — re-add only if Cody confirms insurance.
- Logo: mountain-peak "A" SVG (placeholder, can be replaced).
- Sections: Hero, Packages, Add-Ons, Process, Gallery (placeholders), About (Cody), FAQ, Book/Contact form, Footer.
- Packages (modeled on industry norms): Exterior Refresh, Interior Revive, Apex Full Detail (featured), Paint Correction, Ceramic Coating, Maintenance Plan. 8 add-ons.
- **Prices intentionally blank** — fill `<span class="price__amt"><!-- PRICE --></span>` (shows "$ —" while empty).

## TODO
- Real prices, phone, email, hours, service area.
- **Before launch:** hook booking form to a service (e.g. Formspree: set `action` on `#bookForm`). Until then it shows "received" but sends nothing.
- Add real before/after photos to `.gallery`; optional photo of Cody in About.
- Hosting (e.g. GitHub Pages / Netlify) + domain.

## Git
- Repo `refuzr/website`, working branch `ccr-2b8b9624-ek3esh`.
- Private preview: https://claude.ai/artifact/3qf9iZkyD8K6wmXfu1zTzZ (republish index.html + styles.css, script.js, assets/logo.svg to update). Not public yet.
