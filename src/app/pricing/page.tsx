import type { Metadata } from 'next';
import PricingHero from '@/components/pricing-page/PricingHero';
import PricingPlans from '@/components/pricing-page/PricingPlans';
import PricingFAQ from '@/components/pricing-page/PricingFAQ';
import PricingCTA from '@/components/pricing-page/PricingCTA';
import Reveal from '@/components/common/Reveal';
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
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-20 sm:py-28">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(37,99,235,0.04),transparent_30%),radial-gradient(circle_at_15%_70%,rgba(56,189,248,0.04),transparent_28%)]" />
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage:
                'radial-gradient(circle, #2563EB 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingPlans />
        </div>
      </section>
      <section className="bg-zinc-100/60 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingFAQ />
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <PricingCTA />
          </Reveal>
        </div>
      </section>
    </>
  );
}
