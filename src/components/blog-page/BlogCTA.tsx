'use client';

import { motion } from 'framer-motion';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const BlogCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/[0.04] to-accent/10 p-8 text-center shadow-lg sm:p-12 dark:from-primary/5 dark:to-accent/5"
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
      <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-zinc-100">
        Stay Ahead of the Curve
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
        Get the latest articles, guides, and insights delivered straight to your
        inbox. No spam — just useful content every two weeks.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto mt-6 flex max-w-md gap-3"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="min-w-0 flex-1 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm text-zinc-900 placeholder-zinc-400 shadow-xs transition-all duration-300 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-primary/50 dark:focus:ring-primary/20"
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Subscribe
          <HiOutlineArrowLongRight className="h-4 w-4" />
        </button>
      </form>
    </motion.div>
  );
};

export default BlogCTA;
