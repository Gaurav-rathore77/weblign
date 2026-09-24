'use client';

import { useState } from 'react';
import FAQItem from './FAQItem';
import { faqItems } from './contactData';

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqItems.map((item, i) => (
        <FAQItem
          key={item.question}
          item={item}
          index={i}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex((current) => (current === i ? null : i))}
        />
      ))}
    </div>
  );
};

export default FAQList;
