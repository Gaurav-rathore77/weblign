import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { siteUrl } from '@/constants';
import { UPDATED, cookieSections } from './content';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Which cookies Weblign sets, what each one does, how long it lasts, and how to block or delete them in your browser.',
  keywords: [
    'Cookie Policy',
    'Weblign Cookies',
    'How We Use Cookies',
    'Browser Cookie Settings',
  ],
  alternates: { canonical: `${siteUrl}/cookies` },
  openGraph: {
    title: 'Cookie Policy — Weblign',
    description:
      'Which cookies Weblign sets, what each one does, and how to control them.',
    type: 'article',
    url: `${siteUrl}/cookies`,
    images: [
      { url: '/opengraph-image', width: 1200, height: 630, alt: 'Weblign Cookie Policy' },
    ],
  },
};

export default function CookiesPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Cookie"
      highlight="Policy"
      intro="What cookies are, which ones we set, and how to turn any of them off. Short and practical."
      updated={UPDATED}
      sections={cookieSections}
    />
  );
}