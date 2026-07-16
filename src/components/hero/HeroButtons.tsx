'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroButtons = () => {
  return (
    <motion.div
      className="flex flex-wrap gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <Link href="/contact">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Get Started
        </button>
      </Link>
      <Link href="/portfolio">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border-2 border-zinc-200 bg-white px-7 py-3 text-sm font-semibold text-zinc-700 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-100 dark:text-zinc-300 dark:hover:border-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          View Portfolio
        </button>
      </Link>
    </motion.div>
  );
};

export default HeroButtons;
