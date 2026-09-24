import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';

const PortfolioHero = () => {
  return (
    <section className="portfolio-hero-surface relative min-h-[65dvh] overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #2563EB 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute -left-48 -top-48 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-[450px] w-[450px] rounded-full bg-accent/[0.04] blur-3xl" />
        <div className="absolute left-1/3 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/[0.02] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
            <HiOutlineAdjustmentsHorizontal className="h-4 w-4" aria-hidden="true" />
            Our Portfolio
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Projects We&rsquo;ve Built With{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pride & Precision
            </span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
            From startups to enterprises — explore a curated selection of web
            apps, mobile experiences, and platforms we&rsquo;ve designed and
            engineered from the ground up.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
