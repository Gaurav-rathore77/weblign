'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Reveal from '@/components/common/Reveal';

const faqs = [
  {
    question: 'How much does a project cost?',
    answer:
      'Cost depends on scope, complexity, features, and timeline. We offer clear starting packages for common needs and provide custom estimates for dashboards, CRMs, mobile apps, and tailored software projects.',
  },
  {
    question: 'How long does delivery usually take?',
    answer:
      'Timelines vary by project size and requirements. A focused website can be delivered faster than a custom platform or app. After understanding your goals, we share a realistic timeline and milestones before starting.',
  },
  {
    question: 'How do revisions work during the project?',
    answer:
      'We follow a collaborative process with feedback checkpoints during design and development. Revision scope depends on the selected plan or agreed project scope, and we keep communication transparent throughout.',
  },
  {
    question: 'Which technologies do you use?',
    answer:
      'We choose modern, proven technologies based on your project needs. Depending on the solution, this may include Next.js, React, TypeScript, Node.js, databases, APIs, cloud services, and mobile frameworks.',
  },
  {
    question: 'Do you provide maintenance and support after launch?',
    answer:
      'Yes. We can assist with post-launch fixes, updates, improvements, and ongoing support. The level of support depends on your package or a separate maintenance arrangement.',
  },
  {
    question: 'Can you build custom dashboards, CRMs, or automation for my business?',
    answer:
      'Yes. We build custom digital products tailored to your workflows, including dashboards, CRM systems, mobile apps, integrations, and business automation solutions.',
  },
];

const HomeFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20 sm:py-24 ">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl ">
            Answers to common buyer questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600 ">
            Clear information about cost, delivery, revisions, technology, maintenance, and support.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            const panelId = `home-faq-panel-${i}`;
            const buttonId = `home-faq-button-${i}`;
            return (
              <Reveal key={faq.question} delay={i * 0.04}>
                <div
                  className={`rounded-2xl border transition-colors duration-300 ${
                    open
                      ? 'border-primary/20 bg-white shadow-sm  '
                      : 'border-zinc-200 bg-zinc-50/50  '
                  }`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    aria-expanded={open}
                    aria-controls={panelId}
                  >
                    <span className="text-base font-semibold text-zinc-950 ">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="shrink-0 text-zinc-500"
                      aria-hidden="true"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={reduceMotion ? { duration: 0 } : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-base leading-relaxed text-zinc-600 sm:px-6 sm:pb-6 ">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
