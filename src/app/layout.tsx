import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import { Navbar, Footer } from '@/components/layout';
import { ThemeProvider, ScrollProgress, JSONLD } from '@/components/common';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const siteUrl = 'https://weblign.com';
const siteName = 'Weblign';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090B' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Crafting Digital Experiences`,
    template: `%s | ${siteName}`,
  },
  description:
    'We build beautiful, functional, and user-centered digital products that help businesses grow and succeed in the digital landscape.',
  keywords: [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'AI Automation',
    'E-commerce',
    'Custom Software',
    'Digital Agency',
    'San Francisco',
  ],
  authors: [{ name: 'Weblign' }],
  creator: 'Weblign',
  publisher: 'Weblign',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: 'Weblign - Crafting Digital Experiences',
    description:
      'We build beautiful, functional, and user-centered digital products that help businesses grow and succeed in the digital landscape.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Weblign - Crafting Digital Experiences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weblign - Crafting Digital Experiences',
    description:
      'We build beautiful, functional, and user-centered digital products that help businesses grow.',
    images: ['/og-image.png'],
    creator: '@weblign',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    title: siteName,
    capable: true,
    statusBarStyle: 'default',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to analytics/CDN origins if needed */}
      </head>
      <body className="flex min-h-full flex-col bg-background text-text-primary transition-colors duration-300">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
        <JSONLD />
      </body>
    </html>
  );
}
