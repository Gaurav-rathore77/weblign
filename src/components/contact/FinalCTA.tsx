'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const FinalCTA = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="relative overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/[0.03] via-white to-accent/[0.03] p-8 shadow-lg shadow-zinc-900/5 sm:p-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/[0.06] blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-accent/[0.06] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #2563EB 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-6 text-center sm:gap-8">
        <motion.h3
          variants={itemVariants}
          className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl"
        >
          Ready To Transform Your Business?
        </motion.h3>

        <motion.p
          variants={itemVariants}
          className="max-w-lg text-base leading-relaxed text-zinc-500"
        >
          Let&rsquo;s build fast, scalable and beautiful digital products
          together.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </Link>

          <Link href="/contact">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-7 py-3 text-sm font-semibold text-zinc-700 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Schedule a Free Call
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FinalCTA;
