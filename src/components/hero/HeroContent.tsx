'use client';

import { motion } from 'framer-motion';
import HeroButtons from './HeroButtons';
import TrustBadges from './TrustBadges';
import HeroStats from './HeroStats';

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

const HeroContent = () => {
  return (
    <motion.div
      className="flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div variants={itemVariants}>
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/[0.08] text-xs">
            <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3" aria-hidden="true">
              <path d="M8 0a1 1 0 011 1v.89A6 6 0 0114.11 7H15a1 1 0 110 2h-.89A6 6 0 019 14.11V15a1 1 0 11-2 0v-.89A6 6 0 011.89 9H1a1 1 0 110-2h.89A6 6 0 017 1.89V1a1 1 0 011-1zM4 8a4 4 0 008 0H4z" />
            </svg>
          </span>
          Trusted by 500+ Clients Worldwide
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold leading-[1.1] tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
      >
        Build{' '}
        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Digital Experiences
        </span>
        <br />
        That{' '}
        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Grow Your Business
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="max-w-lg text-lg leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-xl"
      >
        We craft beautiful, high-performance digital products that drive real
        results. From web applications to complete digital ecosystems, we
        transform your vision into reality.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div variants={itemVariants}>
        <HeroButtons />
      </motion.div>

      {/* Trust Badges */}
      <motion.div variants={itemVariants}>
        <TrustBadges />
      </motion.div>

      {/* Stats */}
      <motion.div variants={itemVariants}>
        <HeroStats />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
