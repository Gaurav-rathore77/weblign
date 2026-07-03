'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements, techStack } from './portfolioData';

const AnimatedNumber = ({
  value,
  suffix = '',
}: {
  value: string;
  suffix?: string;
}) => {
  const isStatic = !/^\d+$/.test(value);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(isStatic ? value : '0');
  const target = parseInt(value, 10);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isStatic || !isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * target).toString());
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isStatic, isInView, target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

const ResultsSection = () => (
  <div className="flex flex-col gap-16">
    {/* Animated achievements */}
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-zinc-400"
      >
        Results That Matter
      </motion.h3>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
        {achievements.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="flex flex-col items-center rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-xs"
          >
            <div className="text-3xl font-bold tracking-tight text-zinc-900">
              <AnimatedNumber value={item.value} suffix={item.suffix} />
            </div>
            <div className="mt-1 text-sm text-zinc-500">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Tech stack */}
    <div>
      <motion.h4
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-zinc-400"
      >
        Technologies We Work With
      </motion.h4>
      <div className="flex flex-wrap justify-center gap-2">
        {techStack.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            whileHover={{ y: -2 }}
            className="rounded-full border border-zinc-100 bg-white px-4 py-1.5 text-sm font-medium text-zinc-600 shadow-xs transition-colors duration-200 hover:border-primary/20 hover:text-primary hover:shadow-sm"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  </div>
);

export default ResultsSection;
