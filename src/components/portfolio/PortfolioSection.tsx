import PortfolioExperience from './PortfolioExperience';
import FeaturedCaseStudy from './FeaturedCaseStudy';
import { HiOutlineBriefcase } from 'react-icons/hi2';
import type { PortfolioPreview } from './portfolioData';
import { getProjects } from '@/lib/site-content';

const PortfolioSection = async () => {
  const projects = await getProjects();
  const carouselProjects: PortfolioPreview[] = projects.map(
    ({ id, title, image, imageAlt, gradient, category }) => ({
      id,
      title,
      image,
      imageAlt,
      gradient,
      category,
    }),
  );

  return (
    <section className="relative bg-gradient-to-b from-white via-zinc-50/30 to-white py-20 sm:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-primary/[0.02] blur-3xl" />
        <div className="absolute -left-32 bottom-1/3 h-72 w-72 rounded-full bg-accent/[0.02] blur-3xl" />
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
        <div className="flex flex-col gap-20 sm:gap-24">
          {/* ── Section Header ── */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
              <HiOutlineBriefcase className="h-4 w-4" aria-hidden="true" />
              Our Portfolio
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Real Projects.{' '}
              <span className="text-zinc-500">Real Results.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg">
              Every project we deliver is built with performance, scalability,
              thoughtful user experience, and measurable business impact at its
              core.
            </p>
          </div>

          {/* ── Portfolio Carousel ── */}
          <PortfolioExperience projects={carouselProjects} />

          {/* ── Featured Case Study ── */}
          <FeaturedCaseStudy />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
