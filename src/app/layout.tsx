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

/**
 * Meta Pixel (Facebook). The ID comes from the environment so the pixel can be
 * swapped without touching code; the fallback keeps the current pixel working
 * in local builds where .env.local is not present.
 */
const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '1630905818701473';

const metaPixelSnippet = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
`.trim();

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
    'Digital Agency India',
    'Web Development Company Noida',
    'Web Design Company Delhi NCR',
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
      // Lets Next.js skip smooth scrolling on route transitions while keeping
      // it for in-page anchor jumps.
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Meta Pixel — placed in <head> so the PageView fires on the first
            paint rather than after hydration. */}
        <script dangerouslySetInnerHTML={{ __html: metaPixelSnippet }} />
        <noscript>
          {/* Meta's own 1x1 fallback pixel. Plain <img> is intentional here:
              next/image cannot optimise a remote tracking pixel, and inside
              <noscript> there is no client runtime to optimise with anyway. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </head>
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
