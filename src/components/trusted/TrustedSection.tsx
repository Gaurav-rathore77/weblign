'use client';

import { motion } from 'framer-motion';
import {
  HiOutlineStar,
  HiOutlineHeart,
  HiOutlineBriefcase,
  HiOutlineTrophy,
} from 'react-icons/hi2';
import LogoGrid from './LogoGrid';
import TrustCard from './TrustCard';

const cards = [
  {
    icon: <HiOutlineStar className="h-5 w-5" />,
    value: '4.9/5',
    label: 'Average Rating',
    description: 'Based on 200+ verified client reviews across platforms.',
  },
  {
    icon: <HiOutlineHeart className="h-5 w-5" />,
    value: '99%',
    label: 'Client Satisfaction',
    description: 'Of our clients say they would recommend us to others.',
  },
  {
    icon: <HiOutlineBriefcase className="h-5 w-5" />,
    value: '150+',
    label: 'Successful Projects',
    description: 'Delivered on time and within budget since day one.',
  },
  {
    icon: <HiOutlineTrophy className="h-5 w-5" />,
    value: '12+',
    label: 'Industry Awards',
    description: 'Recognized for design excellence and innovation.',
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
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50/30 via-white to-white py-20 sm:py-24">
      {/* Divider */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-zinc-200 to-transparent"
        aria-hidden="true"
      />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/3 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/[0.02] blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-48 w-48 rounded-full bg-accent/[0.02] blur-3xl" />
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
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50/60 px-4 py-1.5 text-sm font-medium text-amber-700">
              <span className="text-amber-500" aria-hidden="true">✦</span>
              Trusted Worldwide
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Trusted by startups, growing businesses{' '}
              <span className="text-zinc-500">and enterprise teams.</span>
            </h2>

            {/* Description */}
            <p className="max-w-xl text-base leading-relaxed text-zinc-500 sm:text-lg">
              From early-stage founders to Fortune 500 companies, teams around
              the world trust us to deliver high-quality digital solutions that
              drive measurable results.
            </p>
          </motion.div>

          {/* ── Logo Showcase ── */}
          <motion.div variants={itemVariants} className="w-full">
            <LogoGrid />
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
