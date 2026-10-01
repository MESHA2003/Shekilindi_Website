# Shekilindi Company Website

Corporate website for **SHEKILINDI COMPANY LIMITED** — _Quality Products • Reliable Services • Trusted Solutions._

## Tech stack

| Tool | Purpose |
| --- | --- |
| React 19 | UI library |
| TypeScript 6 | Type safety |
| Vite 8 | Build tool & dev server |
| Tailwind CSS 4 | Utility-first styling (`@tailwindcss/vite`) |
| React Router 7 | Client-side routing |
| Lucide React | Icons |
| Oxlint | Linting |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Project structure

```text
src/
├── components/
│   ├── layout/      Navbar, Footer, MobileMenu, Layout (+ ScrollToTop)
│   ├── home/        HeroSlider
│   ├── business/    BusinessCard, BusinessDetail
│   ├── gallery/     GalleryGrid, GalleryLightbox
│   ├── contact/     ContactForm
│   └── ui/          Button, Container, SectionHeading, SmartImage,
│                    ProductCard, ServiceCard, CTASection
├── data/            businesses, products, services, gallery, heroSlides, site
├── lib/             icons (Lucide map), theme (accent system + cn helper)
├── pages/           Home, About, Businesses, ProductsServices, Gallery,
│                    Contact, NotFound, businesses/* (detail pages)
├── App.tsx          Router configuration
├── main.tsx         Entry point
└── index.css        Design system (Tailwind @theme tokens)
```

## Routes

```text
/                          Home (hero slider + previews)
/about                     About the company
/businesses                All business units
/products-services         Products & services overview
/gallery                   Filterable gallery with lightbox
/contact                   Contact details + form
/businesses/herbal-clinic
/businesses/bosnia-hardware
/businesses/bosnia-stationery
/businesses/triple-twelve-hotel
/businesses/shekilindi-wakala
/*                         Custom 404
```

## Design system

Defined in `src/index.css` via Tailwind's `@theme`:

- **Brand:** deep corporate navy (`brand-*`) with a gold accent (`gold-*`)
- **Business accents:** `herbal` (green), `hardware` (orange/red), `stationery` (blue),
  `hotel` (gold/warm), `wakala` (green/blue)
- Accent mappings live in `src/lib/theme.ts` (`accentThemes`)
- Fonts: Inter (body) + Plus Jakarta Sans (headings) with system fallbacks

## Replacing placeholder images

No real company images are bundled yet. Every image renders through
`SmartImage`, which shows a clean gradient placeholder when the file is
missing — so the site never breaks while photos are being collected.

To add a real image:

1. Drop the file into the matching folder:

   ```text
   public/images/logo/        logo files
   public/images/hero/        hero slider images (hero-1.jpg, hero-2.jpg, ...)
   public/images/businesses/  herbal-clinic.jpg, bosnia-hardware.jpg, ...
   public/images/products/    product photos
   public/images/gallery/     gallery photos
   ```

2. The data files already reference these paths (e.g. `/images/businesses/herbal-clinic.jpg`
   in `src/data/businesses.ts`) — nothing else to change, or update the path in the
   data file if you use a different filename.

**Logo:** the real logo lives at `public/images/logo/logo.png` and renders as a round
badge in `Navbar.tsx`, `MobileMenu.tsx` and `Footer.tsx` via `siteInfo.logo`
(`src/data/site.ts`).

## Configuration notes

- **Contact details** (phone, email, address) are placeholders — update them in
  `src/data/site.ts`.
- **Contact form** submission is simulated client-side — wire `handleSubmit` in
  `src/components/contact/ContactForm.tsx` to a real endpoint when available.
- **Path alias:** `@/` → `src/` (configured in both `vite.config.ts` and
  `tsconfig.app.json`).
