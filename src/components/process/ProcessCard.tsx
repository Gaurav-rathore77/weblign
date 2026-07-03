'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { ProcessStep } from './processData';

interface ProcessCardProps {
  step: ProcessStep;
  index: number;
}

const ProcessCard = ({ step, index }: ProcessCardProps) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-12">
      {/* Card — alternates left/right */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={clsx(
          'relative z-10',
          isLeft ? 'lg:order-1 lg:pr-8' : 'lg:order-2 lg:pl-8',
        )}
      >
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="group relative"
        >
          {/* Glass card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 p-6 shadow-lg shadow-zinc-900/5 backdrop-blur-xl transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 sm:p-7">
            {/* Animated gradient overlay on hover */}
            <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-accent/[0.03]" />
            </div>

            {/* Step number — large, subtle */}
            <span className="pointer-events-none absolute -right-3 -top-3 select-none text-[5rem] font-black leading-none text-zinc-900/[0.03] sm:text-[7rem]">
              {step.number}
            </span>

            <div className="relative flex items-start gap-4">
              {/* Icon container */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/[0.08] to-accent/[0.08] text-primary shadow-xs ring-1 ring-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:from-primary group-hover:to-accent group-hover:text-white group-hover:shadow-md group-hover:ring-0">
                {step.icon}
              </div>

              <div className="min-w-0">
                {/* Number + Title */}
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary/60">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="mt-1 text-lg font-semibold text-zinc-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Spacer for the other column (desktop) */}
      <div
        className={clsx(
          'hidden lg:block',
          isLeft ? 'lg:order-2' : 'lg:order-1',
        )}
        aria-hidden="true"
      />
    </div>
  );
};

export default ProcessCard;
