import type { Metadata } from 'next';
import { PricingHero, PricingPlans, PricingFAQ, PricingCTA } from '@/components/pricing-page';
import { siteUrl } from '@/constants';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    "Weblign's transparent pricing for web development, design, and digital strategy. Flexible plans for startups, growing businesses, and enterprises.",
  keywords: [
    'Web Development Pricing',
    'Mobile App Development Cost',
    'UI/UX Design Pricing',
    'Digital Agency Pricing India',
    'Custom Software Cost',
    'Website Development Cost',
    'Startup Pricing Plans',
    'Enterprise Solutions Pricing',
  ],
  openGraph: {
    title: 'Weblign Pricing — Simple Plans for Every Budget',
    description:
      'Choose from Starter, Growth, or Enterprise plans. All include custom design, development, and dedicated support.',
    type: 'website',
    url: `${siteUrl}/pricing`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Weblign Pricing' }],
  },
  alternates: { canonical: `${siteUrl}/pricing` },
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingPlans />
        </div>
      </section>
      <section className="bg-zinc-50/50 py-20 sm:py-28 dark:bg-zinc-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingFAQ />
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingCTA />
        </div>
      </section>
    </>
  );
}
