# Project Memory — Apex Auto Care

Read this first in any new chat. Keep it short; log only important decisions.

## Business
- Owner: **Cody Montgomery** (solo operator). Auto detailing business.
- Old name "Duo Shine" retired. New name: **Apex Auto Care** — chosen because it's expandable (more staff, services like tint/PPF/boats, multiple locations).
- Phone: **(681) 297-7706** (call or text; on site + print). Email: Cody creating a new one — site still has placeholder info@apexautocare.com. Location: **Harrisonburg, VA** — service area listed as Harrisonburg & Rockingham County (on site, card, flyer; LocalBusiness schema in `<head>` for Google). Hours not confirmed (site shows Mon–Sat 8–6 placeholder).

## Website
- Static site lives in **`public/`** (`index.html`, `styles.css`, `script.js`, `assets/logo.svg`, `_headers`). No build step, no dependencies. Only `public/` gets deployed (`netlify.toml` publish = public) so CLAUDE.md/print are never served.
- Style (redesigned 2026-11-25 to look **natural / less AI**): dark header, hero, booking and footer; light off-white content sections; one solid brand blue (`--brand`), no gradients/glows/gradient text, no scroll animations. Fonts Barlow + Barlow Condensed. Left-aligned sections. Add-ons and tint extras as a dotted price "menu". Hamburger ≤960px; phones get a sticky Call/Text/Book bar.
- **Copy voice:** casual first person from Cody, local (Harrisonburg, Valley winters, pollen), short sentences, **no em-dashes**, no hype slogans. Don't invent history or experience Cody hasn't given.
- Hero stat "Fully Insured" removed (unconfirmed) — re-add only if Cody confirms insurance.
- Logo: mountain-peak "A" SVG (placeholder, can be replaced).
- Sections: Promo bar, Hero (text-a-photo-for-a-quote line), Packages + Add-ons menu, Deals, Tint & Wraps, About ("Hey, I'm Cody"; logo placeholder until real photo), FAQ, Book (dark) + form, Footer. Process and Gallery sections removed (empty photo boxes looked fake). Re-add gallery once real before/after photos exist.
- Packages: Exterior Refresh, Interior Revive, Full Detail ("Most people book this one"), Paint Correction, Ceramic Coating, Maintenance Plan. 8 add-ons. (Form option value still "Apex Full Detail".)
- **Beginner launch prices** (car/small SUV; large SUV/truck/van +$20–40): Exterior $49, Interior $89, Full $149, Paint Correction $299 (1-step), Ceramic $449 (1-yr), Maintenance $69/visit. Add-ons $25–$99. Plan: raise prices after ~10–20 reviews/portfolio photos.
- **Offers section + top promo bar:** 20% off first detail; free add-on (≤$35) w/ Full Detail; referral give $15/get $15 (stackable); $20 off each extra vehicle; 10% Hometown Hero (military/first responders/teachers/healthcare); 50% off first Maintenance visit. One discount per visit except referral credits.
- **Tint & Wraps section** (`#tint`, marked "Coming Soon" — remove `.soon` badge + "Join the list" wording when Cody is trained). Carbon tint $199, Ceramic $329 (sedan sides+rear); sun strip $49, removal $99, single window $49; mirror/accents $99, chrome delete $299, roof wrap $299, full wrap = quote. Booking select has Window Tint / Vinyl / Wrap. VA tint law note on site (front sides 50%, rear 35% cars / any on SUV-truck-van, windshield above AS-1). Advised: start carbon+ceramic only (skip dyed), small vinyl jobs before full wraps, take a training class.
- Do NOT offer discounts for Google reviews (violates Google policy).
- Booking form has Offer, Referred by, and "How did you hear about us" fields (track marketing).

## Print (`print/`)
- Print pieces still use the OLD look (Sora/Inter, gradient) — restyle to match new site if Cody wants.
- Print HTML loads logo from `../public/assets/logo.svg`. `business-card.html/.pdf` (3.5x2 + 0.125" bleed; front = contact, back = referral "Give $15 Get $15" w/ Referred by line) and `flyer.html/.pdf` (letter, white body, 8 tear-off phone tabs). PNG previews alongside. Edit HTML, re-render PDFs with Playwright.

## Security (audited 2026-11-25)
- Code clean: all commits ours, git fsck OK, no eval/innerHTML/iframes; JS only uses textContent. Only external resource = Google Fonts.
- `public/_headers`: strict CSP (self + Google Fonts + formspree.io), HSTS, nosniff, X-Frame-Options DENY, Permissions-Policy. Works on Netlify/Cloudflare Pages (NOT GitHub Pages). Tested: no CSP violations. If adding a new external service (analytics, booking widget, maps), add its domain to the CSP or it will be blocked.
- Form: honeypot `_gotcha`, maxlength on all fields, phone pattern.
- **GitHub repo `ReFuZR/Website` is PUBLIC** — recommended Cody make it private (Netlify works with private repos). Turn on 2FA for GitHub, email, domain registrar, host.

## TODO
- New business email (then add to site; cards/flyer have no email yet), confirm hours.
- Ideas not yet added: JMU student/staff discount; Google Business Profile.
- **Before launch:** hook booking form to a service (e.g. Formspree: set `action` on `#bookForm`). Until then it shows "received" but sends nothing.
- Add real before/after photos to `.gallery`; optional photo of Cody in About.
- Hosting: **Netlify** recommended (honors `_headers` + `netlify.toml`) + domain.

## Git
- Repo `refuzr/website`, working branch `ccr-2b8b9624-ek3esh`.
- Private preview: https://claude.ai/artifact/3qf9iZkyD8K6wmXfu1zTzZ (republish `public/index.html` with files styles.css, script.js, assets/logo.svg; pass this URL). Not public yet.
