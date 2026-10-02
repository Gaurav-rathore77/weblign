import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { siteUrl } from '@/constants';
import { UPDATED, termsSections } from './content';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms that govern work with Weblign — scope, proposals, payment, intellectual property, revisions, warranties and liability.',
  keywords: [
    'Terms of Service',
    'Service Agreement',
    'Weblign Terms',
    'Contract Terms',
    'Freelance Agreement India',
  ],
  alternates: { canonical: `${siteUrl}/terms` },
  openGraph: {
    title: 'Terms of Service — Weblign',
    description:
      'The terms that govern work with Weblign — scope, payment, IP, warranties and liability.',
    type: 'article',
    url: `${siteUrl}/terms`,
    images: [
      { url: '/opengraph-image', width: 1200, height: 630, alt: 'Weblign Terms of Service' },
    ],
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Terms of"
      highlight="Service"
      intro="The ground rules for working together — scope, payment, ownership, revisions and liability. Anything specific is confirmed in your written contract."
      updated={UPDATED}
      sections={termsSections}
    />
  );
}