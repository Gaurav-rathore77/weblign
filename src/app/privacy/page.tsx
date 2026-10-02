import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { siteUrl } from '@/constants';
import { UPDATED, privacySections } from './content';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Weblign collects, uses, stores and protects your personal information. Plain-language answers on data we collect, cookies, third-party sharing and your rights.',
  keywords: [
    'Privacy Policy',
    'Weblign Data Protection',
    'How We Handle Your Data',
    'GDPR Information',
    'Website Privacy',
  ],
  alternates: { canonical: `${siteUrl}/privacy` },
  openGraph: {
    title: 'Privacy Policy — Weblign',
    description:
      'How Weblign collects, uses, stores and protects your personal information.',
    type: 'article',
    url: `${siteUrl}/privacy`,
    images: [
      { url: '/opengraph-image', width: 1200, height: 630, alt: 'Weblign Privacy Policy' },
    ],
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Privacy"
      highlight="Policy"
      intro="What information we collect, why we collect it, and the choices you have. Written to be read, not to be skipped."
      updated={UPDATED}
      sections={privacySections}
    />
  );
}