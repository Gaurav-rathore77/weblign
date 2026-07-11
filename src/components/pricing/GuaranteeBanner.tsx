'use client';

import { motion } from 'framer-motion';
import {
  HiOutlineShieldCheck, HiOutlineLockClosed,
  HiOutlineCurrencyDollar, HiOutlineClipboardDocument,
} from 'react-icons/hi2';
import { guarantees } from './pricingData';

const iconComponents: Record<string, React.ElementType> = {
  HiOutlineShieldCheck, HiOutlineLockClosed,
  HiOutlineCurrencyDollar, HiOutlineClipboardDocument,
};

function GuarIcon({ name, className }: { name: string; className?: string }) {
  const Comp = iconComponents[name];
  return Comp ? <Comp className={className} /> : null;
}

const GuaranteeBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {guarantees.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            whileHover={{ y: -3 }}
            className="flex flex-col gap-3 rounded-xl border border-zinc-100 bg-white p-5 shadow-xs transition-shadow duration-300 hover:shadow-md"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/[0.06] text-lg">
              <GuarIcon name={item.icon} className="h-5 w-5" />
            </span>
            <div>
              <h4 className="text-sm font-semibold text-zinc-900">{item.title}</h4>
              <p className="mt-0.5 text-sm leading-relaxed text-zinc-500">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GuaranteeBanner;
