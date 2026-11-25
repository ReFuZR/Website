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
- **Beginner launch prices** (car/small SUV; large SUV/truck/van +$20–40): Exterior $49, Interior $89, Full $149, Paint Correction $299 (1-step), Ceramic $449 (1-yr), Maintenance $69/visit. Add-ons $25–$99. Plan: raise prices after ~10–20 reviews/portfolio photos.
- **Offers section + top promo bar:** 20% off first detail; free add-on (≤$35) w/ Full Detail; referral give $15/get $15 (stackable); $20 off each extra vehicle; 10% Hometown Hero (military/first responders/teachers/healthcare); 50% off first Maintenance visit. One discount per visit except referral credits.
- Do NOT offer discounts for Google reviews (violates Google policy).
- Booking form has Offer, Referred by, and "How did you hear about us" fields (track marketing).

## TODO
- Phone, email, hours, service area.
- **Before launch:** hook booking form to a service (e.g. Formspree: set `action` on `#bookForm`). Until then it shows "received" but sends nothing.
- Add real before/after photos to `.gallery`; optional photo of Cody in About.
- Hosting (e.g. GitHub Pages / Netlify) + domain.

## Git
- Repo `refuzr/website`, working branch `ccr-2b8b9624-ek3esh`.
- Private preview: https://claude.ai/artifact/3qf9iZkyD8K6wmXfu1zTzZ (republish index.html + styles.css, script.js, assets/logo.svg to update). Not public yet.
