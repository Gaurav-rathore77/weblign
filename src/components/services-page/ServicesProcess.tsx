'use client';

import { motion } from 'framer-motion';
import { approachSteps } from './servicesData';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';

const ServicesProcess = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-20 sm:py-24 dark:from-zinc-950 dark:via-zinc-900/20 dark:to-zinc-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-primary/[0.02] blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-accent/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
            <HiOutlineCog6Tooth className="h-4 w-4" aria-hidden="true" />
            How We Deliver
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            A Process Built for{' '}
            <span className="text-zinc-500 dark:text-zinc-400">Quality & Transparency</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
            From the first conversation to post-launch growth, we follow a
            proven process that keeps you informed and in control.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-zinc-300 to-transparent sm:block dark:via-zinc-700" />

          <div className="space-y-8 sm:space-y-0">
            {approachSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="relative sm:ml-16 sm:pb-12"
              >
                {/* Number circle — on the line */}
                <div className="absolute -left-10 top-0 hidden sm:flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-100 dark:ring-zinc-700">
                  <span className="text-xs font-bold text-primary">{step.number}</span>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-100">
                  <div className="flex items-center gap-3 sm:hidden">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/[0.08] text-xs font-bold text-primary">
                      {step.number}
                    </span>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{step.title}</h3>
                  </div>
                  <h3 className="hidden text-base font-semibold text-zinc-900 sm:block dark:text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesProcess;
