'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProcessCard from './ProcessCard';
import { processSteps } from './processData';

const TimelineLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block"
      aria-hidden="true"
    >
      {/* Track */}
      <div className="absolute inset-x-0 top-0 h-full w-px bg-zinc-200" />

      {/* Animated fill */}
      <motion.div
        className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-primary"
        style={{ height }}
      />

      {/* Dot at each step is rendered inline in ProcessCard — this is just the vertical line */}
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="relative">
      {/* Connecting line (desktop only) */}
      <TimelineLine />

      {/* Mobile line */}
      <div
        className="absolute left-6 top-0 hidden h-full w-px bg-zinc-200 max-lg:block"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-gradient-to-b from-primary via-accent to-primary opacity-20" />
      </div>

      <div className="relative space-y-10 lg:space-y-20">
        {processSteps.map((step, i) => (
          <div key={step.id} className="relative">
            {/* Desktop: dot on the center line */}
            <div
              className="absolute left-1/2 top-8 z-20 hidden -translate-x-1/2 lg:block"
              aria-hidden="true"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 20,
                  delay: 0.1,
                }}
                className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-md shadow-primary/20"
              >
                <div className="h-2 w-2 rounded-full bg-white" />
              </motion.div>
            </div>

            {/* Mobile: dot on the left line */}
            <div className="absolute left-6 top-8 z-20 -translate-x-1/2 lg:hidden" aria-hidden="true">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 20,
                  delay: 0.1,
                }}
                className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-sm shadow-primary/20"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              </motion.div>
            </div>

            {/* Mobile: card is full-width with left padding for the line */}
            <div className="lg:hidden">
              <ProcessCard step={step} index={i} />
            </div>

            {/* Desktop: card in its lane */}
            <div className="hidden lg:block">
              <ProcessCard step={step} index={i} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
