'use client';

import { useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi2';
import { faqs } from './pricingData';

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-zinc-400">
        FAQ
      </h2>
      <h3 className="mb-10 text-center text-3xl font-bold text-zinc-900 sm:text-4xl">
        Frequently Asked Questions
      </h3>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const questionId = `pricing-faq-question-${index}`;
          const answerId = `pricing-faq-answer-${index}`;

          return (
            <div
              key={faq.q}
              className={`overflow-hidden rounded-xl border transition-colors duration-300 ${isOpen ? 'border-primary/30 bg-primary/[0.04] dark:bg-primary/[0.08]' : 'border-zinc-100 bg-white dark:border-zinc-700 dark:bg-zinc-100'}`}
            >
              <button
                id={questionId}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={answerId}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-zinc-900 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-6 dark:hover:text-primary"
              >
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-primary/10 text-primary' : 'bg-zinc-100 text-zinc-400 dark:bg-zinc-700 dark:text-zinc-400'}`}
                >
                  {isOpen ? <HiMinus className="h-3 w-3" /> : <HiPlus className="h-3 w-3" />}
                </span>
              </button>
              {isOpen && (
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className="border-t border-zinc-100 px-5 pb-4 pt-3 text-sm leading-relaxed text-zinc-600 sm:px-6 dark:border-zinc-700 dark:text-zinc-300"
                >
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingFAQ;
