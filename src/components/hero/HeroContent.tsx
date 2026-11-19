'use client';

import { motion, useReducedMotion } from 'framer-motion';
import HeroButtons from './HeroButtons';

const BLUE = '#2563EB';

const headline = 'We Build Digital Experiences That Move Businesses Forward.';
const words = headline.split(' ');
const accentWords = new Set(['Digital', 'Experiences', 'Move', 'Forward.']);

const HeroContent = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative z-10 flex flex-col items-start">
      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400 sm:text-xs"
      >
        <span
          aria-hidden="true"
          className="h-px w-8 rounded-full"
          style={{ background: `linear-gradient(90deg, ${BLUE}, rgba(37,99,235,0))` }}
        />
        Digital Engineering Studio
      </motion.p>

      <h1 className="mt-5 max-w-[14ch] text-balance text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:max-w-[13ch] sm:text-5xl md:text-6xl xl:text-[4.35rem]">
        <span className="sr-only">{headline}</span>
        <motion.span
          aria-hidden="true"
          className="inline"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.04,
                delayChildren: reduceMotion ? 0 : 0.12,
              },
            },
          }}
        >
          {words.map((word, i) => {
            const clean = word.replace(/[.,]/g, '');
            const accent = accentWords.has(word) || accentWords.has(clean);
            return (
              <motion.span
                key={`${word}-${i}`}
                className="mr-[0.28em] inline-block"
                style={accent ? { color: BLUE } : { color: '#FFFFFF' }}
                variants={{
                  hidden: { opacity: 0, y: '0.55em', filter: 'blur(8px)' },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.span>
      </h1>

      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.46, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg sm:leading-relaxed"
      >
        From high-performance websites to intelligent business systems, we design and engineer digital solutions that help ambitious businesses grow.
      </motion.p>

      <div className="mt-8 w-full sm:mt-9 sm:w-auto">
        <HeroButtons />
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.78, ease: [0.22, 1, 0.36, 1] }}
        className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-xs text-zinc-400 sm:text-sm"
      >
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BLUE }} aria-hidden="true" />
          Websites, platforms & business systems
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" aria-hidden="true" />
          Engineered for clarity, performance & growth
        </span>
      </motion.div>
    </div>
  );
};

export default HeroContent;
