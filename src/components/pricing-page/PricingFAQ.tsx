'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMinus, HiPlus } from 'react-icons/hi2';
import Reveal from '@/components/common/Reveal';
import { faqs } from './pricingData';

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl">
      <Reveal className="mb-10 text-center">
        <div>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-zinc-400">
            FAQ
          </h2>
          <h3 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
            Frequently Asked Questions
          </h3>
        </div>
      </Reveal>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const questionId = `pricing-faq-question-${index}`;
          const answerId = `pricing-faq-answer-${index}`;

          return (
            <Reveal key={faq.q} delay={index * 0.05}>
              <div
                className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                  isOpen
                    ? 'border-primary/30 bg-primary/[0.04] dark:bg-primary/[0.08]'
                    : 'border-zinc-100 bg-white hover:border-zinc-200'
                }`}
              >
                <button
                  id={questionId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-zinc-900 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-6"
                >
                  <span>{faq.q}</span>
                  <span
                    aria-hidden="true"
                    className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? 'bg-primary/10 text-primary' : 'bg-zinc-100 text-zinc-400'
                    }`}
                  >
                    {isOpen ? <HiMinus className="h-3 w-3" /> : <HiPlus className="h-3 w-3" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-zinc-100 px-5 pb-4 pt-3 text-sm leading-relaxed text-zinc-600 sm:px-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export default PricingFAQ;
