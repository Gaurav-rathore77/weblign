import { HiOutlineSparkles, HiOutlineMapPin, HiOutlineWrenchScrewdriver, HiOutlineBuildingOffice2 } from 'react-icons/hi2';

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/40 to-white pb-16 pt-20 sm:pb-20 sm:pt-24   ">
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
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
            <HiOutlineSparkles className="h-4 w-4" aria-hidden="true" />
            About Weblign
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl ">
            Practical digital solutions for{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              real business needs
            </span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg ">
            Weblign designs and develops websites, web applications, and custom
            digital solutions that help businesses present clearly, operate
            efficiently, and serve customers better. We focus on clear scope,
            usable design, and maintainable development.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-4 py-1.5 text-sm text-zinc-700  ">
              <HiOutlineBuildingOffice2 className="h-4 w-4" aria-hidden="true" /> Websites, apps & custom software
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-4 py-1.5 text-sm text-zinc-700  ">
              <HiOutlineWrenchScrewdriver className="h-4 w-4" aria-hidden="true" /> Practical, scope-driven delivery
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-4 py-1.5 text-sm text-zinc-700  ">
              <HiOutlineMapPin className="h-4 w-4" aria-hidden="true" /> Noida, India · Remote collaboration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
