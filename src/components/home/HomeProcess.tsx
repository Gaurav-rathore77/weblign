'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import {
  HiOutlineMagnifyingGlass,
  HiOutlineMap,
  HiOutlinePaintBrush,
  HiOutlineCodeBracketSquare,
  HiOutlineRocketLaunch,
  HiOutlineArrowPath,
} from 'react-icons/hi2';

const steps = [
  {
    number: '01',
    label: 'DISCOVER',
    title: 'Discover',
    description: 'Understand business goals and requirements.',
    icon: HiOutlineMagnifyingGlass,
  },
  {
    number: '02',
    label: 'STRATEGIZE',
    title: 'Strategize',
    description: 'Define scope, priorities and architecture.',
    icon: HiOutlineMap,
  },
  {
    number: '03',
    label: 'DESIGN',
    title: 'Design',
    description: 'Create user-friendly interfaces and experiences.',
    icon: HiOutlinePaintBrush,
  },
  {
    number: '04',
    label: 'ENGINEER',
    title: 'Engineer',
    description: 'Develop and integrate the solution.',
    icon: HiOutlineCodeBracketSquare,
  },
  {
    number: '05',
    label: 'TEST & LAUNCH',
    title: 'Test & Launch',
    description: 'Validate, optimize and deploy.',
    icon: HiOutlineRocketLaunch,
  },
  {
    number: '06',
    label: 'EVOLVE',
    title: 'Evolve',
    description: 'Provide agreed post-launch support and improvements.',
    icon: HiOutlineArrowPath,
  },
];

const HomeProcess = () => {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.7', 'end 0.45'],
  });

  const progressX = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const progressY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="relative overflow-hidden bg-[var(--color-background)] py-20 sm:py-24 lg:py-28 ">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-1/3 h-72 w-72 rounded-full bg-blue-500/8 blur-3xl " />
        <div className="absolute right-[-8%] bottom-0 h-72 w-72 rounded-full bg-blue-500/8 blur-3xl " />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary ">Our process</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl lg:leading-[1.05]">
            From First Conversation to Successful Launch.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
            A clear, collaborative process designed to turn requirements into reliable digital solutions.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative mt-14 lg:mt-16">
          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative px-2 pt-8">
              <div className="absolute left-0 right-0 top-[4.25rem] h-px bg-[var(--color-border)] " aria-hidden="true" />
              {!reduceMotion ? (
                <motion.div
                  className="absolute left-0 top-[4.25rem] h-px origin-left bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300"
                  style={{ width: progressX }}
                  aria-hidden="true"
                />
              ) : (
                <div className="absolute left-0 right-0 top-[4.25rem] h-px bg-gradient-to-r from-blue-500/60 via-blue-400/60 to-blue-300/60" aria-hidden="true" />
              )}

              <div className="grid grid-cols-6 gap-4">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.number}
                      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      className="relative pt-14"
                    >
                      <div className="absolute left-1/2 top-0 -translate-x-1/2">
                        <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-sm   ">
                          <span className="absolute inset-[-6px] rounded-full border border-primary/10 " aria-hidden="true" />
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      </div>

                      <div className="h-full rounded-2xl border border-[var(--color-border)] bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm  ">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary ">{step.number} {step.label}</p>
                        <h3 className="mt-2 text-lg font-semibold tracking-tight text-[var(--color-text-primary)]">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{step.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile/tablet vertical timeline */}
          <div className="relative lg:hidden">
            <div className="absolute bottom-4 left-5 top-4 w-px bg-[var(--color-border)]  sm:left-6" aria-hidden="true" />
            {!reduceMotion ? (
              <motion.div
                className="absolute left-5 top-4 w-px origin-top bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 sm:left-6"
                style={{ height: progressY }}
                aria-hidden="true"
              />
            ) : (
              <div className="absolute bottom-4 left-5 top-4 w-px bg-gradient-to-b from-blue-500/60 via-blue-400/60 to-blue-300/60 sm:left-6" aria-hidden="true" />
            )}

            <ol className="space-y-4 sm:space-y-5">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.li
                    key={step.number}
                    initial={reduceMotion ? false : { opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="relative pl-14 sm:pl-16"
                  >
                    <span className="absolute left-0 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-sm    sm:h-12 sm:w-12">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                    </span>
                    <div className="rounded-2xl border border-[var(--color-border)] bg-white/80 p-5 shadow-sm backdrop-blur-sm  ">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary ">{step.number} {step.label}</p>
                      <h3 className="mt-2 text-lg font-semibold tracking-tight text-[var(--color-text-primary)]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{step.description}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;
