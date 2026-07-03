'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements } from './whyChooseData';

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

const AchievementCard = () => {
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
          className="flex flex-col items-center rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-xs"
        >
          <div className="text-3xl font-bold tracking-tight text-zinc-900">
            <AnimatedNumber value={item.value} suffix={item.suffix} />
          </div>
          <div className="mt-1 text-sm text-zinc-500">{item.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default AchievementCard;
