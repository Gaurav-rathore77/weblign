'use client';

import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{
      delay: index * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    }}
    whileHover={{ y: -3 }}
    className="group flex gap-4 rounded-xl border border-zinc-100 bg-white p-4 shadow-xs transition-shadow duration-300 hover:shadow-md hover:shadow-zinc-900/5 dark:border-zinc-700 dark:bg-zinc-900"
  >
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/[0.06] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
      {icon}
    </div>
    <div className="min-w-0">
      <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{title}</h4>
      <p className="mt-0.5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{description}</p>
    </div>
  </motion.div>
);

export default FeatureCard;
