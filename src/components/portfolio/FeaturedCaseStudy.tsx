'use client';

import { motion } from 'framer-motion';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { featuredProject } from './portfolioData';

const FeaturedCaseStudy = () => {
  const p = featuredProject;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="relative overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-xl shadow-zinc-900/5"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25px 25px, currentColor 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-0">
        {/* Left: Image area */}
        <div className={`relative flex min-h-[280px] items-end bg-gradient-to-br ${p.gradient} lg:min-h-full`}>
          {/* Brand placeholder */}
          <div className="p-8 sm:p-10">
            <div className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/60 px-4 py-2.5 backdrop-blur-md">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-sm font-bold text-primary">U</div>
              <div>
                <div className="text-sm font-semibold text-zinc-900">UrbanGo</div>
                <div className="text-xs text-zinc-500">Featured Case Study</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Featured Project</span>
          <h3 className="mt-2 text-2xl font-bold text-zinc-900 sm:text-3xl">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500">{p.description}</p>

          {/* Challenge / Solution / Outcome */}
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-red-500">Challenge</span>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                Legacy system couldn&rsquo;t scale to handle 5M+ users across 15 cities.
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Solution</span>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                Microservices architecture with real-time matching engine and dynamic pricing.
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Outcome</span>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                250K+ daily rides with 99.5% uptime across all markets.
              </p>
            </div>
          </div>

          {/* Client quote */}
          <div className="mt-5 rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
            <blockquote className="text-sm leading-relaxed text-zinc-600 italic">
              &ldquo;{p.testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                {p.testimonial.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div className="text-xs">
                <span className="font-semibold text-zinc-900">{p.testimonial.name}</span>
                <span className="text-zinc-400"> — {p.testimonial.role}</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={p.demoUrl}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
          >
            Read Full Case Study
            <HiOutlineArrowLongRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedCaseStudy;
