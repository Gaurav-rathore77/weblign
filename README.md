# Weblign — Crafting Digital Experiences

A premium, production-ready landing page for a digital services agency built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript (strict) |
| **Styling** | Tailwind CSS v4 |
| **Animation** | Framer Motion |
| **Icons** | Lucide React, React Icons |
| **Font** | Poppins (next/font) |
| **Theme** | next-themes (dark/light) |
| **Deployment** | Vercel |

## Folder Structure

```
src/
├── app/                    # App Router pages & layouts
│   ├── layout.tsx          # Root layout (SEO, ThemeProvider, fonts)
│   ├── page.tsx            # Homepage
│   ├── loading.tsx         # Shimmer loading skeleton
│   ├── error.tsx           # Error boundary (client)
│   ├── not-found.tsx       # 404 page
│   ├── global-error.tsx    # Top-level error boundary
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Robots.txt
│   ├── manifest.ts         # PWA webmanifest
│   ├── icon.tsx            # Dynamic favicon
│   ├── apple-icon.tsx      # Apple touch icon
│   └── globals.css         # Global styles + CSS variables + dark mode
│
├── components/
│   ├── layout/             # Navbar, Footer, Logo, NavLinks, MobileMenu
│   │   └── footer/         # Newsletter, SocialLinks, BackToTop, FooterLinks
│   ├── hero/               # Hero section
│   ├── trusted/            # Trusted by / social proof
│   ├── about/              # About section
│   ├── services/           # Services section
│   ├── why-choose/         # Why choose us
│   ├── portfolio/          # Portfolio / case studies
│   ├── process/            # Development process timeline
│   ├── pricing/            # Pricing cards + comparison
│   ├── contact/            # Contact form + FAQ
│   ├── common/             # ThemeProvider, ScrollProgress, JSONLD, ThemeToggle
│   └── ui/                 # Button, Card primitives
│
├── constants/              # Company info, navigation, social links
└── app/globals.css         # Design tokens, dark mode, utilities
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Start production server
npm run build && npm start

# Lint
npm run lint
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (default: `https://weblign.com`) |

## Features

### SEO
- Metadata API with OpenGraph + Twitter Cards
- Dynamic sitemap.xml, robots.txt
- JSON-LD structured data (SoftwareCompany schema)
- Dynamic favicon + Apple touch icon
- PWA webmanifest

### Performance
- Optimized with `next/image`, `next/font`
- Scroll-linked progress bar via `framer-motion` `useScroll`
- Route-based code splitting
- Shimmer loading skeletons
- Security headers (CSP, XSS, etc.)

### Accessibility
- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation with visible focus rings
- Proper form labels + error announcements
- Screen reader friendly

### Dark Mode
- System preference detection (default)
- Manual toggle in navbar
- Persistent via `next-themes`
- Smooth CSS transitions

### Error Handling
- `loading.tsx` — Shimmer skeleton
- `error.tsx` — Client error recovery
- `global-error.tsx` — Top-level crash fallback
- `not-found.tsx` — 404 page

## Customization

### Colors
Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --color-primary: #2563EB;
  --color-accent: #38BDF8;
  /* ... */
}
.dark {
  --color-background: #09090B;
  /* ... */
}
```

### Content
Update data files under each component folder:
- `src/constants/index.ts` — Company info, navigation
- `src/components/*/data.ts` — Section-specific content

## Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push to GitHub
2. Import project in Vercel
3. Deploy (zero config)

### Build Output

```
Route (app)         Size     First Load
┌ ○ /               5.8 kB        85 kB
├ ○ /_not-found     882 B        80 kB
├ ○ /robots.txt     0 B           0 B
├ ○ /sitemap.xml    0 B           0 B
└ ○ /manifest       0 B           0 B
```

All routes are statically generated at build time.

## Lighthouse Targets

| Category | Target |
|----------|--------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
