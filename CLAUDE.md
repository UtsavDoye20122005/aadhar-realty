# Aadhar Realty — build rules

Real estate agency site, Lucknow. Next.js 15 (App Router) + React 19 +
Tailwind v4 + shadcn/ui + motion. Built as a client demo by Utsav Doye.

## Design skills

`design-taste` is installed globally and governs all work in this repo.
Follow its rules on typography, spacing, interaction states, motion and
anti-slop. Run its pre-flight checklist before calling any page done.

`ui-ux-pro-max` is deliberately NOT installed here. The design direction
is already decided and locked (see below). Do not install it, and do not
propose new palettes, fonts or style directions. If a look question comes
up, the answer is in globals.css.

## The design contract — locked

All tokens live in `app/globals.css`. They are the contract.

- Palette: ivory `#f4efe6`, ivory-deep `#ebe4d4`, charcoal `#1c1915`,
  brass `#8a734b`, brass-soft `#a38b62`. No other colours.
- Type: Cormorant (display/headings) + Inter (body). No other fonts.
- Radii are near-zero on purpose (1–4px). Nothing gets rounded corners.
- The type scale in `@theme inline` is bespoke. Use those steps. Never
  write an arbitrary `text-[22px]`.
- Reduced-motion handling already exists at the bottom of globals.css.
  Do not duplicate it.

Adding a colour, font, radius or type step to this file requires the
owner to ask for it explicitly. Otherwise: use what is there.

## Content

Never hardcode copy, photos, prices or business details into components.
Everything comes from `content/`:

- `content/site.ts` — business name, address, hours, phone, RERA details
- `content/copy.ts` — nav, labels, section text
- `content/photos.ts` — image data
- `content/reviews.ts` — testimonials
- `content/types.ts` — shared types

If a string is missing, add it to the right content file and import it.

## Known bug — fix before building

`app/layout.tsx` loads Geist and Geist_Mono, exposing `--font-geist-sans`
and `--font-geist-mono`. But `globals.css` reads `--font-inter` and
`--font-cormorant`. The fonts the design depends on are never loaded, so
every heading silently falls back to Georgia.

Fix: load Inter and Cormorant_Garamond from `next/font/google` in
layout.tsx with variables `--font-inter` and `--font-cormorant`, and put
both on the body. Also replace the placeholder metadata with real title
and description from `content/site.ts`.

## Build order

1. Fix the font bug in layout.tsx.
2. Build page sections as static components in `components/sections/`.
   No animation yet.
3. Add motion only once the static page is right. Subtle only — opacity
   and small translate. Nothing bounces, flies in, or staggers by more
   than a few frames. The `motion` package is already installed.
4. Run the design-taste pre-flight checklist. Fix what it flags.

`app/page.tsx` is still the create-next-app placeholder. Replace it.

## This is a real estate site

Premium here means restraint and evidence, not polish effects. Big
photography, generous whitespace, honest numbers, RERA details visible
rather than buried. No gradient blobs, no glassmorphism, no floating
cards with coloured shadows, no "Trusted by 10,000+ families" unless
`content/` actually says so.
