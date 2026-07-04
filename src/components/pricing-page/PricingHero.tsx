'use client';

import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const PricingHero = () => {
  return (
    <section className="relative min-h-[65dvh] overflow-hidden bg-gradient-to-b from-white via-zinc-50/40 to-white pb-16 pt-32 sm:pb-20 sm:pt-40 dark:from-zinc-950 dark:via-zinc-900/30 dark:to-zinc-950">
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
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={heroItem}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
              <span aria-hidden="true">💎</span>
              Pricing
            </div>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-100"
          >
            Straightforward Plans for{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Stage
            </span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mt-5 text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400"
          >
            No hidden fees, no fine print. Choose a plan that fits your needs and
            budget — upgrade or customize anytime as your business grows.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;
