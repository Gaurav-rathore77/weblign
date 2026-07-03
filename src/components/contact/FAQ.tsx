'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FAQItem from './FAQItem';
import { faqItems } from './contactData';

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-2xl">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-8 text-center"
      >
        <motion.h2
          variants={headerItem}
          className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          variants={headerItem}
          className="mt-3 text-base leading-relaxed text-zinc-500"
        >
          Got questions? We&rsquo;ve got answers. If you don&rsquo;t see what
          you&rsquo;re looking for, feel free to reach out.
        </motion.p>
      </motion.div>

      <div className="space-y-2">
        {faqItems.map((item, i) => (
          <FAQItem
            key={i}
            item={item}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
