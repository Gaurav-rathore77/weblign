'use client';

import FAQAccordionBase, { type FAQAccordionItem } from '@/components/common/FAQAccordion';
import type { FaqEntry } from './faqData';

interface FaqAccordionProps {
  items: FaqEntry[];
  /** Prefix for the aria-controls ids, so two groups never collide. */
  idPrefix: string;
}

const FaqAccordion = ({ items, idPrefix }: FaqAccordionProps) => {
  const mapped: FAQAccordionItem[] = items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return <FAQAccordionBase items={mapped} idPrefix={idPrefix} allowMultiple />;
};

export default FaqAccordion;
