'use client';

import { motion } from 'framer-motion';

const CEOCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
    className="relative overflow-hidden rounded-2xl border border-zinc-100/80 bg-white/60 p-8 shadow-lg shadow-zinc-900/5 backdrop-blur-xl sm:p-10"
  >
    {/* Decorative gradient */}
    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/[0.04] blur-3xl" aria-hidden="true" />
    <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-accent/[0.04] blur-3xl" aria-hidden="true" />

    <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
      {/* Avatar */}
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-2xl font-bold text-white shadow-md shadow-primary/20">
        SJ
      </div>

      {/* Content */}
      <div className="min-w-0">
        {/* Quote mark */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mb-3 h-6 w-6 text-primary/20"
          aria-hidden="true"
        >
          <path d="M11.3 3.7a1 1 0 011.4 0l6.4 6.4a1 1 0 010 1.4l-6.4 6.4a1 1 0 01-1.4-1.4L16.6 11 11.3 5.7a1 1 0 010-1.4z" />
        </svg>

        <blockquote className="text-lg leading-relaxed text-zinc-600 sm:text-xl">
          &ldquo;Our mission is simple — to build digital products that make a
          real difference. Every line of code, every pixel, every decision is
          driven by a commitment to our clients&rsquo; success.&rdquo;
        </blockquote>

        <div className="mt-5 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
          <div className="text-right">
            <div className="text-sm font-semibold text-zinc-900">Sarah Johnson</div>
            <div className="text-xs text-zinc-400">CEO &amp; Co-Founder</div>
          </div>
          {/* Signature placeholder */}
          <svg viewBox="0 0 80 32" className="h-8 w-20 text-zinc-300" aria-hidden="true">
            <path
              d="M8 24c4-6 10-16 18-18s14 8 18 12c4 4 10 6 16 4s8-8 12-12c4-4 8-8 8-8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  </motion.div>
);

export default CEOCard;
