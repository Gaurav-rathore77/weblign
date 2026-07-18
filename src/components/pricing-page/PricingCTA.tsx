'use client';

import { motion } from 'framer-motion';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const PricingCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/[0.04] to-accent/10 p-8 text-center shadow-lg sm:p-12 dark:from-primary/20 dark:via-primary/10 dark:to-accent/20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25px 25px, currentColor 1px, transparent 0)',
          backgroundSize: '30px 30px',
        }}
      />
      <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
        Not Sure Which Plan Fits?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
        Book a free 30-minute consultation. We&rsquo;ll discuss your project,
      recommend the right plan, and answer any questions you have.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Book a Free Call
          <HiOutlineArrowLongRight className="h-4 w-4" />
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm dark:border-zinc-600 dark:text-zinc-300 dark:hover:border-zinc-500"
        >
          Email Us Instead
        </a>
      </div>
    </motion.div>
  );
};

export default PricingCTA;
