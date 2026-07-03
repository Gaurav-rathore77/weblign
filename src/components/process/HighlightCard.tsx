'use client';

import { motion } from 'framer-motion';
import type { HighlightItem } from './processData';

interface HighlightCardProps {
  item: HighlightItem;
  index: number;
}

const HighlightCard = ({ item, index }: HighlightCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl border border-zinc-100 bg-white p-5 shadow-xs transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 sm:p-6"
    >
      {/* Hover accent */}
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/[0.02] to-accent/[0.02]" />
      </div>

      <div className="relative flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/[0.06] text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:ring-0">
          {item.icon}
        </div>

        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-zinc-900">{item.title}</h4>
          <p className="mt-1 text-sm leading-relaxed text-zinc-500">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HighlightCard;
