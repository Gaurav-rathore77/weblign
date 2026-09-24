import { values, milestones } from './aboutData';
import {
  HiOutlineBookOpen,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineMagnifyingGlass,
  HiOutlineStar,
  HiOutlineCalendarDays,
  HiOutlineHandRaised,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2';

const iconComponents: Record<string, React.ElementType> = {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineMagnifyingGlass,
  HiOutlineHandRaised,
  HiOutlineRocketLaunch,
};

function ValIcon({ name, className }: { name: string; className?: string }) {
  const Comp = iconComponents[name];
  return Comp ? <Comp className={className} aria-hidden="true" /> : null;
}

const AboutStory = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-primary/[0.02] blur-3xl" />
        <div className="absolute -left-40 bottom-1/4 h-80 w-80 rounded-full bg-accent/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-20 sm:gap-24">
          {/* ── Story + Mission/Vision ── */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
                <HiOutlineBookOpen className="h-4 w-4" aria-hidden="true" />
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                From a Bold Idea to a{' '}
                <span className="text-zinc-500 dark:text-zinc-400">Trusted Digital Agency</span>
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-500 dark:text-zinc-400">
                Weblign was born from a simple belief — that great digital
                products are built at the intersection of technical excellence
                and human-centered design. What started as a passion project
                quickly grew into a full-service agency partnering with
                ambitious companies worldwide.
              </p>
              <p className="mt-3 leading-relaxed text-zinc-500 dark:text-zinc-400">
                Today, our team of designers, engineers, and strategists
                works across web, mobile, and AI to deliver products that drive
                measurable business outcomes. We&apos;ve shipped projects for
                clients ranging from early-stage startups to established
                businesses.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50/80 to-white p-8 shadow-sm dark:border-zinc-800">
                <HiOutlineAdjustmentsHorizontal className="h-8 w-8" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  Our Mission
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  To empower businesses with digital products that combine
                  cutting-edge technology, exceptional design, and transparent
                  collaboration — delivering solutions that users love and
                  businesses grow with.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50/80 to-white p-8 shadow-sm dark:border-zinc-800">
                <HiOutlineMagnifyingGlass className="h-8 w-8" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  Our Vision
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  To be the most trusted partner for businesses navigating the
                  digital landscape — setting the standard for quality,
                  transparency, and innovation in every product we create.
                </p>
              </div>
            </div>
          </div>

          {/* ── Core Values ── */}
          <div>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
                <HiOutlineStar className="h-4 w-4" aria-hidden="true" />
                Core Values
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                What We Stand For
              </h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
                Our values shape every project, every partnership, and every
                decision we make.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-100"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/[0.06] text-xl dark:bg-primary/[0.1]">
                    <ValIcon name={v.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Timeline ── */}
          <div>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
                <HiOutlineCalendarDays className="h-4 w-4" aria-hidden="true" />
                Our Journey
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Key Milestones
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-zinc-300 to-transparent lg:block dark:via-zinc-700" />

              <div className="space-y-8 lg:space-y-12">
                {milestones.map((m, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <div
                      key={m.year}
                      className={`group relative flex flex-col gap-2 lg:flex-row lg:items-start ${
                        isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      }`}
                    >
                      <div className={`hidden lg:block lg:w-1/2 ${isLeft ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                        <div className="inline-block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-md dark:border-zinc-800 dark:bg-zinc-100 dark:group-hover:border-primary/40">
                          <span className="inline-block rounded-full bg-primary/[0.08] px-3 py-0.5 text-xs font-semibold text-primary">
                            {m.year}
                          </span>
                          <h3 className="mt-2 text-base font-semibold text-zinc-900">
                            {m.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                            {m.description}
                          </p>
                        </div>
                      </div>

                      <div className="hidden lg:flex lg:w-12 lg:shrink-0 lg:justify-center">
                        <div
                          aria-hidden="true"
                          className="z-10 h-4 w-4 rounded-full border-2 border-zinc-300 bg-white transition-colors duration-300 group-hover:border-primary group-hover:bg-primary dark:border-zinc-600 dark:bg-zinc-100"
                        />
                      </div>

                      <div className="lg:hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-100">
                        <span className="inline-block rounded-full bg-primary/[0.08] px-3 py-0.5 text-xs font-semibold text-primary">
                          {m.year}
                        </span>
                        <h3 className="mt-2 text-base font-semibold text-zinc-900">
                          {m.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                          {m.description}
                        </p>
                      </div>

                      <div className={`hidden lg:block lg:w-1/2 ${isLeft ? 'lg:pl-12' : 'lg:pr-12 lg:text-right'}`} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
