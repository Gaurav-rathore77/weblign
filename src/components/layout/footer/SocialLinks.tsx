'use client';

import { motion } from 'framer-motion';
import { socialPlatforms } from './footerData';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const SocialLinks = () => {
  return (
    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-white/30">
        Follow Us
      </p>
      <motion.div className="flex flex-wrap gap-2">
        {socialPlatforms.map((platform) => (
          <motion.a
            key={platform.label}
            variants={item}
            href={platform.href}
            aria-label={platform.label}
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-[11px] font-semibold text-zinc-500 shadow-xs transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/50 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:outline-white/50"
          >
            {platform.initial}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SocialLinks;
