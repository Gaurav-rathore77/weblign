'use client';

import { motion } from 'framer-motion';
import Timeline from './Timeline';
import HighlightCard from './HighlightCard';
import ProcessCTA from './ProcessCTA';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { highlights } from './processData';

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

const ProcessSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-20 sm:py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-primary/[0.02] blur-3xl" />
        <div className="absolute -left-40 bottom-1/4 h-80 w-80 rounded-full bg-accent/[0.02] blur-3xl" />
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
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.div variants={headerItem}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
                <HiOutlineCog6Tooth className="h-4 w-4" aria-hidden="true" />
                Our Process
              </div>
            </motion.div>
            <motion.h2
              variants={headerItem}
              className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
            >
              From Idea to Launch —{' '}
              <span className="text-zinc-500">
                A Transparent Development Process
              </span>
            </motion.h2>
            <motion.p
              variants={headerItem}
              className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg"
            >
              We follow a structured, transparent and collaborative workflow to
              deliver high-quality digital solutions. From the first discovery
              call to post-launch growth, you&rsquo;re always in the loop.
            </motion.p>
          </motion.div>

          {/* ── Timeline ── */}
          <Timeline />

          {/* ── Why Our Process Works ── */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
              className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-zinc-400"
            >
              Why Our Process Works
            </motion.h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <HighlightCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <ProcessCTA />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
