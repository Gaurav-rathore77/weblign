# Weblign — Crafting Digital Experiences

A premium, production-ready digital services website built with Next.js 16, TypeScript, Tailwind CSS v4, and MongoDB.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript (strict) |
| **Styling** | Tailwind CSS v4 |
| **Animation** | CSS animations and reduced-motion support |
| **Icons** | Lucide React, React Icons |
| **Database** | MongoDB (official Node.js driver) |
| **Font** | Poppins (next/font) |
| **Theme** | next-themes (dark/light) |
| **Deployment** | Vercel |

## Folder Structure

```
src/
├── app/                    # App Router pages & layouts
│   ├── layout.tsx          # Root layout (SEO, ThemeProvider, fonts)
│   ├── page.tsx            # Homepage
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

Requires Node.js 20.19 or newer.

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

Copy `.env.example` to `.env.local` and configure the server-only values:

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB Atlas or local MongoDB connection string |
| `MONGODB_DB` | Database name (defaults to `weblign`) |
| `AUTH_SECRET` | Long random secret used to sign admin sessions |
| `ADMIN_EMAIL` | Admin email used for the environment-based fallback login |
| `ADMIN_PASSWORD_HASH` | Bcrypt hash generated with `npm run admin:hash -- "password"` |
| `SMTP_HOST` | SMTP host for inquiry email alerts (Gmail: `smtp.gmail.com`) |
| `SMTP_USER` | SMTP sender/login address |
| `SMTP_PASSWORD` | SMTP app password or provider password |
| `CONTACT_TO_EMAIL` | Inquiry recipient (defaults to `info.weblign@gmail.com`) |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (default: `https://weblign.in`) |

Never expose `MONGODB_URI` or `AUTH_SECRET` with a `NEXT_PUBLIC_` prefix.

## Admin Dashboard

The dashboard is available at `/admin` and is protected by an HTTP-only signed session cookie.

### MongoDB setup

1. Create a MongoDB Atlas database (or use a local MongoDB instance).
2. Put its connection string in `.env.local` as `MONGODB_URI`.
3. Set a long random `AUTH_SECRET`.
4. Create the initial admin account in MongoDB:

```bash
npm run admin:seed -- admin@example.com "use-a-long-password"
```

Alternatively, set `ADMIN_EMAIL` and `ADMIN_PASSWORD_HASH` for an environment-based admin login. The database-backed account is preferred because it can be rotated without changing application environment variables.

### Email notifications

New contact submissions are saved in MongoDB and emailed to `info.weblign@gmail.com` when SMTP is configured. For Gmail, enable 2-Step Verification and create a Google App Password, then set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and `SMTP_PASSWORD` in `.env.local`. Do not use the normal Gmail account password.

The admin Inquiries page remains the source of truth if email delivery is temporarily unavailable.

### What the dashboard manages

- Homepage hero copy, CTA labels, and contact details
- Projects, services, and blog posts through structured JSON editors
- Contact inquiries from both contact forms, including read/unread and delete actions

Public pages read MongoDB on each request when configured. If MongoDB is unavailable, the site safely falls back to the existing local content so the public pages remain available. Contact submissions return a clear configuration error until storage is connected.

Run the app with:

```bash
npm run dev
```

Then open `http://localhost:3000/admin`.

## Features

### SEO
- Metadata API with OpenGraph + Twitter Cards
- Dynamic sitemap.xml, robots.txt
- JSON-LD structured data (SoftwareCompany schema)
- Dynamic favicon + Apple touch icon
- PWA webmanifest

### Performance
- Optimized local `next/image` assets and `next/font`
- CSS-only scroll progress and reveal animations
- Route-based code splitting with on-demand portfolio modal loading
- `content-visibility` and reduced-motion support
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
- `error.tsx` — Client error recovery
- `global-error.tsx` — Top-level crash fallback
- `not-found.tsx` — 404 page
- MongoDB-aware fallbacks for public content

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
Use `/admin` when MongoDB is configured for homepage content, projects, services, blog posts, and contact inquiries. The files under `src/components/*/data.ts` remain the safe local fallback used when the database is empty or unavailable.

## Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push to GitHub
2. Import project in Vercel
3. Deploy (zero config)

### Build Output

The homepage, portfolio, and blog render dynamically so MongoDB edits are visible without a rebuild. Other supporting pages remain statically generated where they do not read CMS data.

## Lighthouse Targets

| Category | Target |
|----------|--------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
