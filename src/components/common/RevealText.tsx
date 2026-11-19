'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import clsx from 'clsx';
import type { ElementType } from 'react';

interface RevealTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  className?: string;
  delay?: number;
  once?: boolean;
  by?: 'word' | 'line';
}

const RevealText = ({
  text,
  as = 'div',
  className,
  delay = 0,
  once = true,
  by = 'word',
}: RevealTextProps) => {
  const reduceMotion = useReducedMotion();
  const Tag = as as ElementType;

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const segments = by === 'line' ? text.split('\n') : text.split(/(\s+)/);
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: by === 'word' ? 0.035 : 0.12,
        delayChildren: delay,
      },
    },
  };
  const child: Variants = {
    hidden: { opacity: 0, y: '0.6em', filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Tag className={clsx(className)}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        className="inline"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.4 }}
      >
        {segments.map((segment, i) => {
          if (segment === '\n') return <br key={i} />;
          const isSpace = /^\s+$/.test(segment);
          return (
            <motion.span
              key={`${segment}-${i}`}
              variants={child}
              className={isSpace ? 'inline' : 'inline-block'}
              style={{ willChange: 'transform, opacity, filter' }}
            >
              {segment === ' ' ? '\u00A0' : segment}
            </motion.span>
          );
        })}
      </motion.span>
    </Tag>
  );
};

export default RevealText;
