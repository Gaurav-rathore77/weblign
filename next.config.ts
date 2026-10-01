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
  ['5', 'accessibility-first-why-it-matters-where-to-start'],
  ['6', 'integrating-llms-into-your-web-application'],
  ['7', 'ecommerce-migration-monolith-to-headless-cms'],
  ['8', 'designing-for-conversion-psychology-principles'],
  ['9', 'edge-computing-with-nextjs-deploying-at-the-edge'],
] as const;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  async redirects() {
    return blogSlugRedirects.map(([id, slug]) => ({
      source: `/blog/${id}`,
      destination: `/blog/${slug}`,
      permanent: true,
    }));
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
