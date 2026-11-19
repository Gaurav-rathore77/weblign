'use client';

import { animate, motion, useInView, useMotionValue, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

interface AnimatedCounterProps {
  value: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  once?: boolean;
}

const AnimatedCounter = ({
  value,
  from = 0,
  duration = 1.4,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
  once = true,
}: AnimatedCounterProps) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, amount: 0.5 });
  const motionValue = useMotionValue(from);

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (reduceMotion) {
      ref.current.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
      return;
    }
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, motionValue, value, duration, decimals, prefix, suffix, reduceMotion]);

  return (
    <motion.span
      ref={ref}
      className={clsx('tabular-nums', className)}
      aria-label={`${prefix}${value}${suffix}`}
    >
      {prefix}
      {reduceMotion ? value.toFixed(decimals) : from.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
