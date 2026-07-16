'use client';

import { motion } from 'framer-motion';

/* ───── floating helper: wraps entrance + continuous bob ───── */
const FloatWrapper = ({
  children,
  delay = 0,
  xOffset = 0,
  yOffset = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  xOffset?: number;
  yOffset?: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: xOffset, y: yOffset }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }}
  >
    <motion.div
      animate={{
        y: [0, -6, 0],
        transition: { duration: 4 + delay * 2, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      {children}
    </motion.div>
  </motion.div>
);

/* ───── growth-chart SVG ───── */
const GrowthChart = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 200 80" className={className} fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M0 70 L12 55 L28 60 L44 42 L60 50 L78 28 L94 36 L112 18 L130 24 L148 10 L164 14 L182 4 L200 6"
      stroke="#2563EB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
    />
    <path
      d="M0 70 L12 55 L28 60 L44 42 L60 50 L78 28 L94 36 L112 18 L130 24 L148 10 L164 14 L182 4 L200 6 L200 80 L0 80 Z"
      fill="url(#area-grad)"
    />
    {[12, 44, 78, 112, 148, 182].map((cx, i) => (
      <circle
        key={i}
        cx={cx}
        cy={[55, 42, 28, 18, 10, 4][i]}
        r="2.5"
        fill="#2563EB"
        className="drop-shadow-[0_0_4px_#2563EB]"
      />
    ))}
  </svg>
);

/* ───── mini bar chart ───── */
const MiniBarChart = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 80 28" className={className} fill="none" aria-hidden="true">
    {[16, 24, 12, 20, 18, 26, 22, 14].map((h, i) => (
      <rect
        key={i}
        x={i * 10 + 1}
        y={28 - h}
        width="7"
        height={h}
        rx="2"
        fill="#2563EB"
        opacity={0.25 + i * 0.06}
      />
    ))}
  </svg>
);

/* ────────────────────────────────────────────────────────────
   HeroIllustration
   ──────────────────────────────────────────────────────────── */
const HeroIllustration = () => {
  return (
    <div className="relative mx-auto mt-8 hidden h-full w-full max-w-lg lg:block xl:max-w-xl">
      {/* outer container: holds everything */}
      <div className="relative aspect-[4/4] w-full">
        {/* ── Browser window ── */}
        <motion.div
          className="relative z-10 h-full w-full overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-xl shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-100"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-1.5 border-b border-zinc-100 px-4 py-3 dark:border-zinc-700">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
            <div className="ml-3 flex-1 rounded-md bg-zinc-50 px-3 py-1 text-[11px] text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500">
              app.weblign.com/dashboard
            </div>
          </div>

          {/* Browser content */}
          <div className="grid grid-cols-2 gap-3 p-4">
            {/* Chart card */}
            <div className="col-span-2 rounded-xl border border-zinc-100 bg-white p-4 shadow-xs dark:border-zinc-700 dark:bg-zinc-800/50">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Revenue Overview</span>
                <span className="text-[11px] text-emerald-600">+12.5%</span>
              </div>
              <GrowthChart className="h-auto w-full" />
              <div className="mt-2 flex items-center justify-between border-t border-zinc-50 pt-2 dark:border-zinc-700">
                <span className="text-[11px] text-zinc-400 dark:text-zinc-500">Jan</span>
                <span className="text-[11px] text-zinc-400 dark:text-zinc-500">Mar</span>
                <span className="text-[11px] text-zinc-400 dark:text-zinc-500">May</span>
                <span className="text-[11px] text-zinc-400 dark:text-zinc-500">Jul</span>
              </div>
            </div>

            {/* Metric card */}
            <div className="rounded-xl border border-zinc-100 bg-white p-4 shadow-xs dark:border-zinc-700 dark:bg-zinc-800/50">
              <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Total Revenue</span>
              <p className="mt-1 text-xl font-bold text-zinc-900 dark:text-zinc-100">$48,290</p>
              <span className="text-[11px] text-emerald-600">↑ 12.5% this month</span>
            </div>

            {/* Metric card */}
            <div className="rounded-xl border border-zinc-100 bg-white p-4 shadow-xs dark:border-zinc-700 dark:bg-zinc-800/50">
              <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Active Users</span>
              <p className="mt-1 text-xl font-bold text-zinc-900 dark:text-zinc-100">2,847</p>
              <span className="text-[11px] text-emerald-600">↑ 8.3% this week</span>
            </div>
          </div>
        </motion.div>

        {/* ── Floating card: Analytics ── */}
        <FloatWrapper
          delay={0.5}
          xOffset={30}
          yOffset={-20}
          className="absolute -right-4 -top-3 z-20"
        >
          <div className="w-44 rounded-xl border border-zinc-100/80 bg-white/70 p-4 shadow-lg shadow-zinc-900/5 backdrop-blur-xl dark:border-zinc-700/80 dark:bg-zinc-100/70">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Page Views</span>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
                +18.2%
              </span>
            </div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">128.4K</p>
            <MiniBarChart className="mt-2 h-auto w-full" />
          </div>
        </FloatWrapper>

        {/* ── Floating card: Profile ── */}
        <FloatWrapper
          delay={0.7}
          xOffset={-20}
          yOffset={20}
          className="absolute bottom-1 -left-6 z-20"
        >
          <div className="flex w-52 items-center gap-3 rounded-xl border border-zinc-100/80 bg-white/70 p-3 shadow-lg shadow-zinc-900/5 backdrop-blur-xl dark:border-zinc-700/80 dark:bg-zinc-100/70">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-[11px] font-bold text-white">
              SR
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">Sachin Rathore</p>
              <p className="truncate text-[11px] text-zinc-400 dark:text-zinc-500">CEO, Weblign</p>
            </div>
          </div>
        </FloatWrapper>

        {/* ── Floating card: Revenue ── */}
        <FloatWrapper
          delay={0.9}
          xOffset={25}
          yOffset={15}
          className="absolute bottom-2 -right-3 z-20"
        >
          <div className="w-36 rounded-xl border border-zinc-100/80 bg-white/70 p-3 shadow-lg shadow-zinc-900/5 backdrop-blur-xl dark:border-zinc-700/80 dark:bg-zinc-100/70">
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Avg. Revenue</span>
            <p className="mt-0.5 text-lg font-bold text-zinc-900 dark:text-zinc-100">$12,847</p>
            <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-600">
              <svg viewBox="0 0 12 12" fill="currentColor" className="h-2.5 w-2.5" aria-hidden="true">
                <path d="M6 0l6 8H0z" />
              </svg>
              +3.2%
            </div>
          </div>
        </FloatWrapper>

        {/* ── Floating notification dot ── */}
        <FloatWrapper
          delay={0.4}
          xOffset={15}
          yOffset={-25}
          className="absolute right-8 top-2 z-20"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-100/80 bg-white/70 shadow-md shadow-zinc-900/5 backdrop-blur-xl dark:border-zinc-700/80 dark:bg-zinc-100/70">
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-zinc-500 dark:text-zinc-400" aria-hidden="true">
              <path
                d="M10 2a6 6 0 00-6 6v3l-1.5 2.5a.5.5 0 00.43.75h14.14a.5.5 0 00.43-.75L16 11V8a6 6 0 00-6-6z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M8 15a2 2 0 004 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
          </div>
        </FloatWrapper>

        {/* ── Decorative background shapes ── */}
        <div className="pointer-events-none absolute -inset-8" aria-hidden="true">
          <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-primary/[0.03] blur-3xl" />
          <div className="absolute -right-4 -top-4 h-48 w-48 rounded-full bg-accent/[0.04] blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 h-32 w-32 rounded-full bg-primary/[0.02] blur-2xl" />
        </div>
      </div>
    </div>
  );
};

export default HeroIllustration;
