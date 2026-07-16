'use client';

import { motion } from 'framer-motion';

interface TrustCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  index: number;
}

const TrustCard = ({ icon, value, label, description, index }: TrustCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{
      delay: index * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    }}
    whileHover={{ y: -4 }}
    className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-100 dark:hover:shadow-zinc-900/30"
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.06] text-primary dark:bg-primary/[0.15]">
      {icon}
    </div>
    <div>
      <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{value}</div>
      <div className="mt-0.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">{label}</div>
    </div>
    <p className="text-sm leading-relaxed text-zinc-400 dark:text-zinc-500">{description}</p>
  </motion.div>
);

export default TrustCard;
