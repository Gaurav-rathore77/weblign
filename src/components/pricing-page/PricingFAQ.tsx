'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMinus, HiPlus } from 'react-icons/hi2';
import { faqs } from './pricingData';

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-zinc-400"
      >
        FAQ
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
        className="mb-10 text-center text-3xl font-bold text-zinc-900 sm:text-4xl dark:text-zinc-100"
      >
        Frequently Asked Questions
      </motion.h3>

      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`overflow-hidden rounded-xl border transition-colors duration-300 ${isOpen ? 'border-primary/20 bg-primary/[0.02] dark:bg-primary/[0.04]' : 'border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-900'}`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-zinc-900 transition-colors hover:text-primary sm:px-6 dark:text-zinc-100 dark:hover:text-primary"
              >
                {faq.q}
                <span className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-primary/10 text-primary' : 'bg-zinc-100 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500'}`}>
                  {isOpen ? <HiMinus className="h-3 w-3" /> : <HiPlus className="h-3 w-3" />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-zinc-100 px-5 pb-4 pt-3 text-sm leading-relaxed text-zinc-500 sm:px-6 dark:border-zinc-800 dark:text-zinc-400">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingFAQ;
