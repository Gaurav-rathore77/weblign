import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PublicChrome from '@/components/layout/PublicChrome';
import ThemeProvider from '@/components/common/ThemeProvider';
import ScrollProgress from '@/components/common/ScrollProgress';
import AIConcierge from '@/components/common/AIConcierge';
import JSONLD from '@/components/common/JSONLD';
import { siteUrl } from '@/constants';
import './globals.css';

/* Space Grotesk carries the tech/product character in headings, Inter keeps
   long-form body copy readable. Both are variable, latin-subset, and load as a
   single woff2 each. */
const spaceGrotesk = Space_Grotesk({
  variable: '--font-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weblign - Crafting Digital Experiences',
    description:
      'We build beautiful, functional, and user-centered digital products that help businesses grow.',
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
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-text-primary">
        <ThemeProvider>
          <PublicChrome
            nav={
              <>
                <ScrollProgress />
                <AIConcierge />
                <Navbar />
              </>
            }
            footer={<Footer />}
          >
            {children}
          </PublicChrome>
        </ThemeProvider>
        <JSONLD />
      </body>
    </html>
  );
}
