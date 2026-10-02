import type { NextConfig } from 'next';

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

/**
 * Legacy numeric blog URLs -> SEO slugs. Keeps existing rankings and any
 * shared links alive instead of 404ing.
 */
const blogSlugRedirects = [
  ['1', 'building-performant-nextjs-apps-with-turbopack'],
  ['2', 'future-of-ui-design-ai-assisted-workflows'],
  ['3', 'scaling-from-startup-to-enterprise-technical-roadmap'],
  ['4', 'building-real-time-saas-analytics-dashboard'],
  ['5', 'accessibility-first-why-it-matters-and-where-to-start'],
  ['6', 'integrating-llms-into-your-web-application'],
  ['7', 'ecommerce-migration-monolith-to-headless-cms'],
  ['8', 'designing-for-conversion-psychology-principles'],
  ['9', 'edge-computing-with-nextjs-deploying-at-the-edge'],
] as const;

/**
 * Slugs that have been corrected after being published. Google may already
 * have indexed the old form, so keep it alive as a permanent redirect.
 */
const blogSlugCorrections = [
  ['accessibility-first-why-it-matters-where-to-start', 'accessibility-first-why-it-matters-and-where-to-start'],
] as const;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Lets an editor paste a remote image URL instead of uploading a file.
    // Local paths under /public remain the faster option — a remote host adds
    // a DNS lookup and TLS handshake to every first load.
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.pixabay.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.ctfassets.net' },
      // Google image thumbnails. Works, but these are small cached copies and
      // can expire, so a local file is still the better long-term choice.
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'encrypted-tbn1.gstatic.com' },
      { protocol: 'https', hostname: 'encrypted-tbn2.gstatic.com' },
      { protocol: 'https', hostname: 'encrypted-tbn3.gstatic.com' },
    ],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  async redirects() {
    // Host-level apex -> www runs before Next.js, so legacy numeric URLs cost
    // two hops. That is fine — Google follows the chain — and a 308 keeps the
    // ranking signals attached to the slug.
    return [
      // Legacy numeric URLs -> current slug.
      ...blogSlugRedirects.map(([id, slug]) => ({
        source: `/blog/${id}`,
        destination: `/blog/${slug}`,
        permanent: true,
      })),
      // Superseded slug -> current slug, so renaming a post later cannot
      // silently 404 an already-indexed URL.
      ...blogSlugCorrections.map(([from, to]) => ({
        source: `/blog/${from}`,
        destination: `/blog/${to}`,
        permanent: true,
      })),
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
