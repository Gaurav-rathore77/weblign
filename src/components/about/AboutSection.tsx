'use client';

import AboutImages from './AboutImages';
import AboutContent from './AboutContent';
import AchievementCounter from './AchievementCounter';
import ProcessTimeline from './ProcessTimeline';
import CEOCard from './CEOCard';
import { HiOutlineSparkles } from 'react-icons/hi2';

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(37,99,235,0.04),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(56,189,248,0.04),transparent_30%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-20 sm:gap-24">
          {/* ── Section Header ── */}
          <div className="mx-auto max-w-2xl text-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
                <HiOutlineSparkles className="h-4 w-4" aria-hidden="true" />
                About Our Company
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Building Digital Products That{' '}
              <span className="text-zinc-500 dark:text-zinc-400">Drive Business Growth</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
              We help businesses transform ideas into scalable digital products
              through modern technology, thoughtful design, and a relentless
              focus on user experience.
            </p>
          </div>

          {/* ── Two-Column Layout ── */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AboutImages />
            <AboutContent />
          </div>

          {/* ── Achievement Counters ── */}
          <div>
            <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              By the Numbers
            </h3>
            <AchievementCounter />
          </div>

          {/* ── Process Timeline ── */}
          <div>
            <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Our Process
            </h3>
            <ProcessTimeline />
          </div>

          {/* ── CEO Card ── */}
          <CEOCard />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
