'use client';

import { motion } from 'framer-motion';
import WhyFeatureCard from './WhyFeatureCard';
import WhyProcessTimeline from './WhyProcessTimeline';
import AchievementCard from './AchievementCard';
import BenefitsChecklist from './BenefitsChecklist';
import { HiOutlineStar } from 'react-icons/hi2';
import { features } from './whyChooseData';

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const WhyChooseSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-20 sm:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-primary/[0.02] blur-3xl" />
        <div className="absolute -right-32 bottom-1/3 h-80 w-80 rounded-full bg-accent/[0.02] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #2563EB 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-20 sm:gap-24">
          {/* ── Section Header ── */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.div variants={headerItem}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
                <HiOutlineStar className="h-4 w-4" aria-hidden="true" />
                Why Choose Us
              </div>
            </motion.div>
            <motion.h2
              variants={headerItem}
              className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
            >
              Why Businesses Trust Us To{' '}
              <span className="text-zinc-500">Build Their Digital Future</span>
            </motion.h2>
            <motion.p
              variants={headerItem}
              className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg"
            >
              We combine technical excellence with transparent communication to
              deliver digital products that exceed expectations. Every
              partnership is built on trust, quality, and a shared commitment
              to your success.
            </motion.p>
          </motion.div>

          {/* ── Features Grid ── */}
          <div className="space-y-4">
            {features.map((feature, i) => (
              <WhyFeatureCard key={feature.title} feature={feature} index={i} />
            ))}
          </div>

          {/* ── Process Timeline ── */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
              className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-zinc-400"
            >
              How We Work
            </motion.h3>
            <WhyProcessTimeline />
          </div>

          {/* ── Achievements + Benefits ── */}
          <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <AchievementCard />
            </div>
            <div className="lg:col-span-2">
              <BenefitsChecklist />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
