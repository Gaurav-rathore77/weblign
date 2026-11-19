'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';
import clsx from 'clsx';

type MotionTag = 'section' | 'div' | 'article' | 'header' | 'footer' | 'main' | 'aside';

interface AnimatedSectionProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  as?: MotionTag;
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
  y?: number;
  staggerChildren?: number;
}

const motionTags = {
  section: motion.section,
  div: motion.div,
  article: motion.article,
  header: motion.header,
  footer: motion.footer,
  main: motion.main,
  aside: motion.aside,
} as const;

const AnimatedSection = ({
  as = 'section',
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.2,
  y = 28,
  staggerChildren,
  ...props
}: AnimatedSectionProps) => {
  const reduceMotion = useReducedMotion();
  const Component = motionTags[as];

  if (reduceMotion) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  const variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
        ...(staggerChildren ? { staggerChildren, delayChildren: delay } : {}),
      },
    },
  };

  return (
    <Component
      className={clsx(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
