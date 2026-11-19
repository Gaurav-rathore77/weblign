'use client';

import { useId, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

export interface FAQAccordionItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQAccordionItem[];
  className?: string;
  idPrefix?: string;
  allowMultiple?: boolean;
  defaultOpenIndex?: number | null;
}

const FAQAccordion = ({
  items,
  className,
  idPrefix,
  allowMultiple = true,
  defaultOpenIndex = null,
}: FAQAccordionProps) => {
  const autoId = useId().replace(/:/g, '');
  const prefix = idPrefix || `faq-${autoId}`;
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState<Set<number>>(
    () => new Set(defaultOpenIndex !== null ? [defaultOpenIndex] : []),
  );

  const toggle = (index: number) => {
    setOpen((current) => {
      const next = new Set(allowMultiple ? current : []);
      if (current.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className={clsx('space-y-3', className)}>
      {items.map((item, index) => {
        const isOpen = open.has(index);
        const answerId = `${prefix}-answer-${index}`;
        const buttonId = `${prefix}-button-${index}`;

        return (
          <div
            key={`${item.question}-${index}`}
            className={clsx(
              'overflow-hidden rounded-2xl border bg-[var(--color-surface)]/90 transition-colors ',
              isOpen
                ? 'border-primary/25 shadow-sm'
                : 'border-[var(--color-border)] hover:border-primary/20',
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={answerId}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-inset"
              >
                <span className="text-base font-medium leading-snug text-[var(--color-text-primary)] sm:text-[1.05rem]">
                  {item.question}
                </span>
                <motion.span
                  aria-hidden="true"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className={clsx(
                    'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border',
                    isOpen
                      ? 'border-primary/25 bg-primary/10 text-primary'
                      : 'border-[var(--color-border)] text-[var(--color-text-muted)]',
                  )}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--color-text-secondary)] sm:px-6 sm:pb-6 sm:text-[0.95rem]">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
