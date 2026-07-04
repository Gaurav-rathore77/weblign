import type { Metadata } from 'next';
import { PortfolioHero } from '@/components/portfolio-page';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import ResultsSection from '@/components/portfolio/ResultsSection';
import FeaturedCaseStudy from '@/components/portfolio/FeaturedCaseStudy';

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description:
    'Browse Weblign\'s portfolio of web development, mobile app, UI/UX design, e-commerce, and AI projects. See how we turn ideas into impact.',
  openGraph: {
    title: 'Weblign Portfolio — Projects That Drive Results',
    description:
      'Explore real-world projects built with modern tech stacks — from SaaS platforms and e-commerce stores to AI-powered tools.',
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <section className="bg-zinc-50/50 py-20 sm:py-28 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PortfolioGrid />
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeaturedCaseStudy />
        </div>
      </section>
      <section className="bg-zinc-50/50 py-20 sm:py-28 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ResultsSection />
        </div>
      </section>
    </>
  );
}
