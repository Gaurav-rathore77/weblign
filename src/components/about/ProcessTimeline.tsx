'use client';

import { motion } from 'framer-motion';
import {
  HiOutlineMagnifyingGlass,
  HiOutlinePencilSquare,
  HiOutlineCodeBracket,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2';

const steps = [
  {
    number: '01',
    icon: <HiOutlineMagnifyingGlass className="h-5 w-5" />,
    title: 'Discover',
    description:
      'We dive deep into your business, goals, and audience to uncover opportunities and define a clear roadmap.',
  },
  {
    number: '02',
    icon: <HiOutlinePencilSquare className="h-5 w-5" />,
    title: 'Plan',
    description:
      'We create a detailed strategy with timelines, milestones, and deliverables tailored to your needs.',
  },
  {
    number: '03',
    icon: <HiOutlineCodeBracket className="h-5 w-5" />,
    title: 'Develop',
    description:
      'Our team builds your product using modern tech stacks, with regular updates and iterative reviews.',
  },
  {
    number: '04',
    icon: <HiOutlineRocketLaunch className="h-5 w-5" />,
    title: 'Launch',
    description:
      'We deploy, test, and optimize — ensuring a smooth go-live with ongoing support and maintenance.',
  },
];

const ProcessTimeline = () => {
  return (
    <div className="relative">
      {/* Desktop horizontal */}
      <div className="hidden grid-cols-4 gap-6 lg:grid">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              delay: i * 0.15,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="relative flex flex-col items-start"
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div
                className="absolute left-4 top-5 hidden h-0.5 w-[calc(100%+1.5rem)] bg-gradient-to-r from-primary/20 to-transparent lg:block"
                style={{ left: '1rem', width: 'calc(100% + 0.5rem)' }}
              />
            )}

            {/* Number + Icon */}
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.06] text-primary">
              {step.icon}
            </div>

            {/* Step title */}
            <div className="mt-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Step {step.number}
            </div>
            <h4 className="mt-1 text-lg font-semibold text-zinc-900">{step.title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-zinc-500">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile vertical */}
      <div className="relative lg:hidden">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              delay: i * 0.12,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="relative flex gap-5 pb-10 last:pb-0"
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-0.5 bg-gradient-to-b from-primary/20 to-transparent" />
            )}

            {/* Number + Icon */}
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/[0.06] text-primary">
              {step.icon}
            </div>

            {/* Content */}
            <div className="min-w-0 pt-1">
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                Step {step.number}
              </div>
              <h4 className="mt-0.5 text-base font-semibold text-zinc-900">{step.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-zinc-500">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
