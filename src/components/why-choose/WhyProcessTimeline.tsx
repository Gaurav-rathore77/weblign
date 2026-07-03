'use client';

import { motion } from 'framer-motion';
import { processSteps } from './whyChooseData';

const ProcessTimeline = () => {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Desktop horizontal */}
      <div className="hidden justify-between lg:flex">
        {processSteps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="relative flex w-24 flex-col items-center text-center"
          >
            {/* Connector */}
            {i < processSteps.length - 1 && (
              <div className="absolute left-[calc(50%+1.75rem)] top-5 h-0.5 w-[calc(100%-3.5rem)] bg-gradient-to-r from-primary/20 to-transparent" />
            )}

            {/* Step circle */}
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/20 bg-white text-sm font-semibold text-primary transition-colors duration-300">
              {step.icon}
            </div>

            <div className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-primary">
              Step {step.number}
            </div>
            <h4 className="mt-0.5 text-xs font-semibold text-zinc-900">{step.title}</h4>
            <p className="mt-0.5 text-[11px] leading-relaxed text-zinc-400">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile vertical */}
      <div className="lg:hidden">
        {processSteps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="relative flex gap-5 pb-8 last:pb-0"
          >
            {/* Connector line */}
            {i < processSteps.length - 1 && (
              <div className="absolute left-5 top-10 h-[calc(100%-2rem)] w-0.5 bg-gradient-to-b from-primary/20 to-transparent" />
            )}

            {/* Step circle */}
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/20 bg-white text-sm font-semibold text-primary">
              {step.icon}
            </div>

            <div className="min-w-0 pt-1">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                Step {step.number}
              </div>
              <h4 className="mt-0.5 text-sm font-semibold text-zinc-900">{step.title}</h4>
              <p className="mt-0.5 text-sm leading-relaxed text-zinc-500">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
