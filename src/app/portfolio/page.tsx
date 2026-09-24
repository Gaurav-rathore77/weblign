import type { Metadata } from 'next';
import PortfolioHero from '@/components/portfolio-page/PortfolioHero';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import FeaturedCaseStudy from '@/components/portfolio/FeaturedCaseStudy';
import { siteUrl } from '@/constants';

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description:
    "Browse Weblign's portfolio of web development, mobile app, UI/UX design, e-commerce, and AI projects. See how we turn ideas into impact.",
  keywords: [
    'Web Development Portfolio',
    'Mobile App Portfolio',
    'UI/UX Design Portfolio',
    'Case Studies',
    'Digital Agency Projects',
    'Client Success Stories',
    'Weblign Projects',
    'Software Development Case Studies',
  ],
  openGraph: {
    title: 'Weblign Portfolio — Projects That Drive Results',
    description:
      'Explore real-world projects built with modern tech stacks — from SaaS platforms and e-commerce stores to AI-powered tools.',
    type: 'website',
    url: `${siteUrl}/portfolio`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Weblign Portfolio' }],
  },
  alternates: { canonical: `${siteUrl}/portfolio` },
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <section className="bg-zinc-50/50 pb-16 pt-10 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PortfolioGrid />
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeaturedCaseStudy />
        </div>
      </section>
    </>
  );
}
