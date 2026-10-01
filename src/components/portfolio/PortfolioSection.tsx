import PortfolioExperience from './PortfolioExperience';
import FeaturedCaseStudy from './FeaturedCaseStudy';
import ProjectSlider from '@/components/trusted/ProjectSlider';
import { HiOutlineBriefcase } from 'react-icons/hi2';
import Reveal from '@/components/common/Reveal';
import type { PortfolioPreview } from './portfolioData';
import { getProjects } from '@/lib/site-content';

const PortfolioSection = async () => {
  const projects = await getProjects();
  /* The catalogue is ~49 projects. Keep the homepage rail to a curated 12
     so it stays browsable — the full list lives on /portfolio. */
  const carouselProjects: PortfolioPreview[] = projects.slice(0, 12).map(
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
    <section className="relative bg-gradient-to-b from-white via-zinc-50/40 to-white py-16 sm:py-20 dark:from-zinc-950 dark:via-zinc-900/40 dark:to-zinc-950">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-primary/[0.03] blur-3xl dark:bg-primary/[0.06]" />
        <div className="absolute -left-32 bottom-1/3 h-72 w-72 rounded-full bg-accent/[0.03] blur-3xl dark:bg-accent/[0.06]" />
        <div
          className="absolute inset-0 opacity-[0.012] dark:opacity-[0.02]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #2563EB 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:gap-10">
          {/* ── Section Header ── */}
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary dark:border-primary/25 dark:bg-primary/[0.08]">
              <HiOutlineBriefcase className="h-4 w-4" aria-hidden="true" />
              Our Portfolio
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Real Projects.{' '}
              <span className="text-zinc-400 dark:text-zinc-500">Real Results.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
              Every project we deliver is built with performance, scalability,
              thoughtful user experience, and measurable business impact at its
              core.
            </p>
          </Reveal>

          {/* ── Portfolio Carousel ── */}
          <Reveal>
            <PortfolioExperience projects={carouselProjects} />
          </Reveal>

          {/* ── Featured Case Study ── */}
          <Reveal>
            <FeaturedCaseStudy />
          </Reveal>

          {/* ── Project Slider ── */}
          <Reveal>
            <ProjectSlider />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
