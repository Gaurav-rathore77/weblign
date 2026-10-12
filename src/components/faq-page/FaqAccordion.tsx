'use client';

import { useState } from 'react';
import type { FaqEntry } from './faqData';

interface FaqAccordionProps {
  items: FaqEntry[];
  /** Prefix for the aria-controls ids, so two groups never collide. */
  idPrefix: string;
}

/**
 * Answers are collapsible and independently toggleable: on a long FAQ page
 * people compare several answers at once rather than reading one at a time.
 * Height animates via the grid-rows 0fr -> 1fr trick, which needs no JS
 * measurement and so survives font-size zoom.
 *
 * Note on the dark palette: `.dark` in globals.css remaps the zinc scale
 * (100-300 become dark surfaces, 600-950 become light text), so `dark:` values
 * here are chosen from the light end to avoid unreadable combinations.
 */
const FaqAccordion = ({ items, idPrefix }: FaqAccordionProps) => {
  const [open, setOpen] = useState<Set<string>>(() => new Set());

  const toggle = (question: string) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(question)) next.delete(question);
      else next.add(question);
      return next;
    });

  return (
    <div className="space-y-2.5">
      {items.map((item) => {
        const isOpen = open.has(item.question);
        const answerId = `${idPrefix}-answer-${item.question
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')}`;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xs transition-colors dark:border-zinc-300 dark:bg-zinc-100"
          >
            <h3>
              <button
                type="button"
                onClick={() => toggle(item.question)}
                aria-expanded={isOpen}
                aria-controls={answerId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:text-zinc-700 dark:hover:bg-zinc-300/40"
              >
                <span>{item.question}</span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                    <path
                      d="M10 4.5v11M4.5 10h11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>

            <div
              id={answerId}
              role="region"
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="border-t border-zinc-100 px-5 py-4 text-[15px] leading-relaxed text-zinc-600 dark:border-zinc-300 dark:text-zinc-600">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;