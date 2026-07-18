'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Achievement {
  icon: React.ReactNode;
  value: string;
  suffix?: string;
  label: string;
}

const achievements: Achievement[] = [
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M10 2a6 6 0 00-6 6v3l-1.5 2.5a.5.5 0 00.43.75h14.14a.5.5 0 00.43-.75L16 11V8a6 6 0 00-6-6z" />
        <path d="M8 15a2 2 0 004 0" />
      </svg>
    ),
    value: '500',
    suffix: '+',
    label: 'Projects Delivered',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M10 1a6 6 0 00-5.3 8.7l1.2 2.5.4.8.3.6a1 1 0 00.9.6h5a1 1 0 00.9-.6l.3-.6.4-.8 1.2-2.5A6 6 0 0010 1z" />
        <path d="M7 14a3 3 0 006 0" />
      </svg>
    ),
    value: '250',
    suffix: '+',
    label: 'Happy Clients',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M10 1a9 9 0 100 18 9 9 0 000-18zM2.5 7h15M2.5 13h15M7 2v16M13 2v16" />
        <circle cx="10" cy="10" r="9" />
      </svg>
    ),
    value: '15',
    suffix: '+',
    label: 'Countries Served',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M12 2l3.1 6.3L22 9.5l-5 4.9 1.2 7L12 17.5 5.8 21.4 7 14.4 2 9.5l6.9-1.2L12 2z" />
      </svg>
    ),
    value: '98',
    suffix: '%',
    label: 'Client Retention',
  },
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

const AchievementCounter = () => {
  return (
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
          className="flex flex-col items-center rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-xs dark:border-zinc-700 dark:bg-zinc-100"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.06] text-primary">
            {item.icon}
          </div>
          <div className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">
            <AnimatedNumber value={item.value} suffix={item.suffix} />
          </div>
          <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{item.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default AchievementCounter;
