'use client';

import { motion } from 'framer-motion';
import type { Feature } from './whyChooseData';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{
      delay: index * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    }}
    whileHover={{ y: -4 }}
    className="group relative rounded-xl border border-zinc-100 bg-white p-5 shadow-xs transition-shadow duration-300 hover:shadow-lg hover:shadow-zinc-900/5 sm:p-6"
  >
    {/* Hover glow */}
    <div
      className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      aria-hidden="true"
    >
      <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-primary/[0.03] blur-2xl" />
    </div>

    <div className="relative flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/[0.06] text-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
        {feature.icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-semibold text-zinc-900">{feature.title}</h4>
          <span className="rounded-full bg-primary/[0.06] px-2 py-0.5 text-[10px] font-medium text-primary">
            {feature.badge}
          </span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-zinc-500">
          {feature.description}
        </p>
      </div>
    </div>
  </motion.div>
);

export default FeatureCard;
