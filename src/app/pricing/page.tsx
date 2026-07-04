import type { Metadata } from 'next';
import { PricingHero, PricingPlans, PricingFAQ, PricingCTA } from '@/components/pricing-page';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Weblign\'s transparent pricing for web development, design, and digital strategy. Flexible plans for startups, growing businesses, and enterprises.',
  openGraph: {
    title: 'Weblign Pricing — Simple Plans for Every Budget',
    description:
      'Choose from Starter, Growth, or Enterprise plans. All include custom design, development, and dedicated support.',
  },
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
      <section className="bg-zinc-50/50 py-20 sm:py-28 dark:bg-zinc-900/30">
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
