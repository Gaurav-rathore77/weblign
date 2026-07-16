'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 dark:bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            Ready to Build Something{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Extraordinary
            </span>
            ?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
            Let&apos;s discuss your project and explore how we can help turn your
            ideas into impactful digital products. No commitment, just a
            conversation.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-3 text-sm font-semibold text-zinc-700 shadow-sm transition-all duration-300 hover:border-zinc-300 hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-100 dark:text-zinc-300 dark:hover:border-zinc-600"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
