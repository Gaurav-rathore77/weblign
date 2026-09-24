import { HiOutlineRocketLaunch } from 'react-icons/hi2';

const ServicesHero = () => {
  return (
    <section className="relative min-h-[65dvh] overflow-hidden bg-gradient-to-b from-white via-zinc-50/40 to-white pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="absolute -left-48 -top-48 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-[450px] w-[450px] rounded-full bg-accent/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
            <HiOutlineRocketLaunch className="h-4 w-4" aria-hidden="true" />
            Our Services
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            End-to-End Digital Solutions That{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Drive Real Results
            </span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
            From strategy and design to development and growth — we provide
            everything you need to build, launch, and scale successful digital
            products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
