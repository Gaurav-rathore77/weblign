'use client';

import { motion, useReducedMotion } from 'framer-motion';
import clsx from 'clsx';
import type { ReactNode } from 'react';

interface FloatingMockupProps {
  children: ReactNode;
  className?: string;
  layers?: ReactNode[];
  float?: boolean;
}

const FloatingMockup = ({ children, className, layers = [], float = true }: FloatingMockupProps) => {
  const reduceMotion = useReducedMotion();
  const shouldFloat = float && !reduceMotion;

  return (
    <div className={clsx('relative', className)}>
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl  " />
      {layers.map((layer, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute inset-0 -z-10"
          animate={
            shouldFloat
              ? { y: [0, i % 2 === 0 ? -6 : 6, 0], x: [0, i % 2 === 0 ? 4 : -4, 0] }
              : undefined
          }
          transition={
            shouldFloat
              ? { duration: 6 + i * 1.5, repeat: Infinity, ease: 'easeInOut' }
              : undefined
          }
        >
          {layer}
        </motion.div>
      ))}
      <motion.div
        animate={shouldFloat ? { y: [0, -8, 0] } : undefined}
        transition={shouldFloat ? { duration: 7, repeat: Infinity, ease: 'easeInOut' } : undefined}
        className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-2 shadow-[var(--shadow-xl)] backdrop-blur-sm "
      >
        <div className="overflow-hidden rounded-xl border border-[var(--color-border-light)] bg-white ">
          <div className="flex items-center gap-1.5 border-b border-[var(--color-border-light)] px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-blue-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="relative">{children}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingMockup;
