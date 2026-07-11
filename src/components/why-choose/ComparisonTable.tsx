'use client';

import { motion } from 'framer-motion';
import { comparisonRows } from './whyChooseData';
import { HiCheck, HiXMark } from 'react-icons/hi2';

const Tick = () => (
  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50">
    <HiCheck className="h-4 w-4 text-emerald-500" aria-hidden="true" />
  </span>
);

const Cross = () => (
  <span className="flex h-5 w-5 items-center justify-center rounded-full">
    <HiXMark className="h-4 w-4 text-red-500" aria-hidden="true" />
  </span>
);

const ComparisonTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="relative overflow-hidden rounded-2xl border border-zinc-100/80 bg-white/60 shadow-lg shadow-zinc-900/5 backdrop-blur-xl"
    >
      {/* Header glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/[0.03] blur-3xl" aria-hidden="true" />

      <div className="p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-zinc-900">Why We&rsquo;re Different</h3>
        <p className="mt-1 text-sm text-zinc-400">
          An honest look at how we compare to the competition.
        </p>

        {/* Table header */}
        <div className="mt-6 grid grid-cols-3 gap-4 border-b border-zinc-100 pb-3 text-xs font-semibold uppercase tracking-widest">
          <div className="text-zinc-400">Category</div>
          <div className="text-center text-zinc-300">Others</div>
          <div className="text-center text-primary">Our Company</div>
        </div>

        {/* Rows */}
        <div className="mt-1 space-y-1">
          {comparisonRows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
              whileHover={{ x: 2 }}
              className="grid grid-cols-3 items-center gap-4 rounded-lg px-2 py-2.5 text-sm transition-colors duration-200 hover:bg-zinc-50"
            >
              <div className="font-medium text-zinc-700">{row.label}</div>
              <div className="flex justify-center">
                {row.others ? <Tick /> : <Cross />}
              </div>
              <div className="flex justify-center">
                {row.us ? <Tick /> : <Cross />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ComparisonTable;
