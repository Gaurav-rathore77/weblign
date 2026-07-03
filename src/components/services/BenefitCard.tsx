'use client';

import { motion } from 'framer-motion';
import { benefitIcons } from './Icons';
import type { Benefit } from './servicesData';

interface BenefitCardProps {
  benefit: Benefit;
  index: number;
}

const BenefitCard = ({ benefit, index }: BenefitCardProps) => {
  const Icon = benefitIcons[benefit.iconKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      whileHover={{ y: -3 }}
      className="flex items-start gap-4 rounded-xl border border-zinc-100 bg-white p-5 shadow-xs transition-shadow duration-300 hover:shadow-md hover:shadow-zinc-900/5"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/[0.06] text-primary transition-colors duration-300">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <h4 className="text-sm font-semibold text-zinc-900">{benefit.title}</h4>
        <p className="mt-0.5 text-sm leading-relaxed text-zinc-500">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
};

export default BenefitCard;
