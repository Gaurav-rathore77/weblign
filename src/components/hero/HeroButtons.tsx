'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const BLUE = '#2563EB';
const BLUE_HOVER = '#1D4ED8';

const HeroButtons = () => {
  const reduceMotion = useReducedMotion();

  const item = (delay: number, child: React.ReactNode) => {
    if (reduceMotion) return child;
    return (
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {child}
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      {item(
        0.6,
        <Link
          href="/contact"
          prefetch={false}
          className="group relative inline-flex min-h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(37,99,235,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-16px_rgba(37,99,235,0.65)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:w-auto"
          style={{ backgroundColor: BLUE }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = BLUE_HOVER;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = BLUE;
          }}
        >
          <span className="relative z-10">Start a Project</span>
          <HiOutlineArrowRight
            className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
        </Link>,
      )}
      {item(
        0.7,
        <Link
          href="/portfolio"
          prefetch={false}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:w-auto"
        >
          Explore Our Work
        </Link>,
      )}
    </div>
  );
};

export default HeroButtons;
