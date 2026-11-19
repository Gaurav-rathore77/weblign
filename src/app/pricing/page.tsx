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
    'Transparent starting packages for business websites and custom digital solutions. Compare Starter, Business, Premium, and custom options with clear scope and support details.',
  keywords: [
    'Web Development Pricing',
    'Website Package Pricing India',
    'Business Website Cost',
    'Custom Software Quote',
    'CRM Development Pricing',
    'E-commerce Development Cost',
  ],
  openGraph: {
    title: 'Weblign Pricing — Clear Packages and Custom Solutions',
    description:
      'Starter, Business, and Premium website packages with transparent deliverables, limitations, and custom solution quotes.',
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
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-16 sm:py-20   ">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(37,99,235,0.04),transparent_30%),radial-gradient(circle_at_15%_70%,rgba(59,130,246,0.04),transparent_28%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingPlans />
        </div>
      </section>
      <section className="bg-zinc-100/60 py-16 sm:py-20 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingFAQ />
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <PricingCTA />
          </Reveal>
        </div>
      </section>
    </>
  );
}
