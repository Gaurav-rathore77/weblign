'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ServicesCTA = () => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
    className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
  >
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-accent" />

    {/* Decorative blobs */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/[0.06] blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/[0.04] blur-3xl" />
      <div className="absolute right-1/4 top-1/3 h-24 w-24 rounded-full bg-white/[0.03] blur-2xl" />
    </div>

    {/* Glass overlay */}
    <div className="relative border border-white/10 bg-white/[0.02] px-6 py-12 backdrop-blur-sm sm:px-12 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Have a Project in Mind?
        </h2>
        <p className="mt-3 text-base leading-relaxed text-white/70 sm:text-lg">
          Let&rsquo;s build something amazing together. Tell us about your
          idea and we&rsquo;ll bring it to life.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start Your Project
            </button>
          </Link>
          <Link href="/contact">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Schedule a Call
            </button>
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ServicesCTA;
