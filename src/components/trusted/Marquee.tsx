'use client';

import { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const Marquee = ({ children, speed = 30, className = '' }: MarqueeProps) => (
  <div className={`group overflow-hidden ${className}`}>
    <div
      className="flex w-max animate-marquee gap-12 sm:gap-16 md:gap-20 hover:[animation-play-state:paused]"
      style={{ animationDuration: `${speed}s` }}
    >
      {children}
      {children}
    </div>
  </div>
);

export default Marquee;
