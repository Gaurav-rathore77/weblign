'use client';

import { motion } from 'framer-motion';
import AboutImages from './AboutImages';
import AboutContent from './AboutContent';
import AchievementCounter from './AchievementCounter';
import ProcessTimeline from './ProcessTimeline';
import CEOCard from './CEOCard';
import { HiOutlineSparkles } from 'react-icons/hi2';

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 dark:bg-zinc-950">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-primary/[0.02] blur-3xl" />
        <div className="absolute -right-32 bottom-1/3 h-80 w-80 rounded-full bg-accent/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-20 sm:gap-24">
          {/* ── Section Header ── */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.div variants={headerItem}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
                <HiOutlineSparkles className="h-4 w-4" aria-hidden="true" />
                About Our Company
              </div>
            </motion.div>
            <motion.h2
              variants={headerItem}
              className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100"
            >
              Building Digital Products That{' '}
              <span className="text-zinc-500 dark:text-zinc-400">Drive Business Growth</span>
            </motion.h2>
            <motion.p
              variants={headerItem}
              className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400"
            >
              We help businesses transform ideas into scalable digital products
              through modern technology, thoughtful design, and a relentless
              focus on user experience.
            </motion.p>
          </motion.div>

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
