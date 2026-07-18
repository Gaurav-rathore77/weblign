'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: '5', suffix: '+', label: 'Projects Completed' },
  { value: '3', suffix: '+', label: 'Happy Clients' },
  { value: '1', suffix: '+', label: 'Years Experience' },
  { value: '24/7', label: 'Support' },
];

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

const HeroStats = () => {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </div>
          <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroStats;
