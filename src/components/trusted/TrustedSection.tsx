'use client';

import { motion } from 'framer-motion';
import {
  HiOutlineStar,
  HiOutlineHeart,
  HiOutlineBriefcase,
  HiOutlineTrophy,
} from 'react-icons/hi2';
import TrustCard from './TrustCard';
import ProjectSlider from './ProjectSlider';

const cards = [
  {
    icon: <HiOutlineStar className="h-5 w-5" />,
    value: '5.0/5',
    label: 'Average Rating',
    description: 'Based on early client feedback across platforms.',
  },
  {
    icon: <HiOutlineHeart className="h-5 w-5" />,
    value: '100%',
    label: 'Client Satisfaction',
    description: 'Every client says they would recommend us to others.',
  },
  {
    icon: <HiOutlineBriefcase className="h-5 w-5" />,
    value: '50+',
    label: 'Projects Delivered',
    description: 'Delivered on time and within budget since day one.',
  },
  {
    icon: <HiOutlineTrophy className="h-5 w-5" />,
    value: '5+',
    label: 'Years Experience',
    description: 'Building digital products that make an impact.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const TrustedSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-20 sm:py-24">
      {/* Divider */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800"
        aria-hidden="true"
      />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/3 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/[0.02] blur-3xl dark:bg-primary/[0.05]" />
        <div className="absolute right-1/4 bottom-0 h-48 w-48 rounded-full bg-accent/[0.02] blur-3xl dark:bg-accent/[0.05]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* ── Section Header ── */}
          <motion.div variants={itemVariants} className="flex max-w-2xl flex-col items-center gap-4 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50/60 px-4 py-1.5 text-sm font-medium text-amber-700 dark:border-amber-700/40 dark:bg-amber-900/30 dark:text-amber-300">
              <HiOutlineStar className="h-4 w-4 text-amber-500 dark:text-amber-400" aria-hidden="true" />
              Trusted Worldwide
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
              Trusted by startups, growing businesses{' '}
              <span className="text-zinc-500 dark:text-zinc-400">and enterprise teams.</span>
            </h2>

            {/* Description */}
            <p className="max-w-xl text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
              From early-stage founders to established businesses, teams around
              the world trust us to deliver high-quality digital solutions that
              drive measurable results.
            </p>
          </motion.div>

          {/* ── Project Slider ── */}
          <motion.div variants={itemVariants} className="w-full">
            <ProjectSlider />
          </motion.div>

          {/* ── Trust Metrics ── */}
          <motion.div variants={itemVariants} className="w-full">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {cards.map((card, i) => (
                <TrustCard key={card.label} {...card} index={i} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedSection;
