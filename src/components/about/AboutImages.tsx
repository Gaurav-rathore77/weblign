'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const src = (gradient: string, w = 600, h = 400) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">${gradient}</linearGradient></defs>
      <rect fill="url(#g)" width="${w}" height="${h}"/>
    </svg>`,
  )}`;

const gradients = {
  main: `<stop offset="0%" stop-color="#2563EB" stop-opacity="0.15"/><stop offset="100%" stop-color="#38BDF8" stop-opacity="0.08"/>`,
  secondary: `<stop offset="0%" stop-color="#38BDF8" stop-opacity="0.12"/><stop offset="100%" stop-color="#2563EB" stop-opacity="0.06"/>`,
  tertiary: `<stop offset="0%" stop-color="#6366F1" stop-opacity="0.1"/><stop offset="100%" stop-color="#2563EB" stop-opacity="0.05"/>`,
};

const FloatWrapper = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }}
  >
    <motion.div
      animate={{
        y: [0, -4, 0],
        transition: {
          duration: 5 + delay,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const AboutImages = () => {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-4 top-12 h-48 w-48 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute -bottom-4 right-8 h-36 w-36 rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <div className="relative grid grid-cols-2 gap-4">
        {/* Main image */}
        <FloatWrapper className="col-span-2" delay={0.1}>
          <div className="group relative overflow-hidden rounded-2xl shadow-lg shadow-zinc-900/5">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Our team collaborating on a digital project"
              width={600}
              height={340}
              className="h-auto w-full object-cover"
              priority
            />
            {/* Glassmorphism overlay badge */}
            <div className="absolute bottom-3 left-3 right-auto inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/60 px-3 py-2 text-xs font-medium text-zinc-700 shadow-xs backdrop-blur-md dark:bg-zinc-100/60 dark:text-zinc-300">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3" aria-hidden="true">
                  <path d="M8 0a1 1 0 011 1v.89A6 6 0 0114.11 7H15a1 1 0 110 2h-.89A6 6 0 019 14.11V15a1 1 0 11-2 0v-.89A6 6 0 011.89 9H1a1 1 0 110-2h.89A6 6 0 017 1.89V1a1 1 0 011-1z" />
                </svg>
              </span>
              Passion meets precision
            </div>
          </div>
        </FloatWrapper>

        {/* Small image 1 */}
        <FloatWrapper delay={0.3}>
          <div className="overflow-hidden rounded-xl shadow-md shadow-zinc-900/5">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80"
              alt="Modern office workspace"
              width={300}
              height={240}
              className="h-auto w-full object-cover"
            />
          </div>
        </FloatWrapper>

        {/* Small image 2 + badges stacked */}
        <div className="flex flex-col gap-4">
          <FloatWrapper delay={0.4}>
            <div className="overflow-hidden rounded-xl shadow-md shadow-zinc-900/5">
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=80"
                alt="Team brainstorming session"
                width={300}
                height={140}
                className="h-auto w-full object-cover"
              />
            </div>
          </FloatWrapper>

          {/* Badges row */}
          <div className="flex gap-3">
            <FloatWrapper delay={0.5}>
              <div className="flex items-center gap-1.5 rounded-xl border border-primary/10 bg-primary/[0.04] px-3 py-2 text-xs font-semibold text-primary shadow-xs">
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M8 0a1 1 0 011 1v.89A6 6 0 0114.11 7H15a1 1 0 110 2h-.89A6 6 0 019 14.11V15a1 1 0 11-2 0v-.89A6 6 0 011.89 9H1a1 1 0 110-2h.89A6 6 0 017 1.89V1a1 1 0 011-1z" />
                </svg>
                10+ Years
              </div>
            </FloatWrapper>
            <FloatWrapper delay={0.6}>
              <div className="flex items-center gap-1.5 rounded-xl border border-emerald-100 bg-emerald-50/60 px-3 py-2 text-xs font-semibold text-emerald-700 shadow-xs dark:border-emerald-900/50 dark:bg-emerald-900/30 dark:text-emerald-400">
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M8 1a4 4 0 014 4c0 1.5-.8 2.8-2 3.5V12h1a2 2 0 012 2H3a2 2 0 012-2h1V8.5A4 4 0 018 1z" />
                </svg>
                500+ Projects
              </div>
            </FloatWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImages;
