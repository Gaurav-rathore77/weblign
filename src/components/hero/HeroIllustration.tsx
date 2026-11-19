'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useId } from 'react';

type Props = {
  parallaxX?: number;
  parallaxY?: number;
};

const BLUE = '#2563EB';
const BLUE_2 = '#3B82F6';

const bars = [42, 58, 50, 72, 66, 84, 78];

const HeroIllustration = ({ parallaxX = 0, parallaxY = 0 }: Props) => {
  const reduceMotion = useReducedMotion();
  const uid = useId().replace(/:/g, '');
  const lineGrad = `line-grad-${uid}`;
  const lineGrad2 = `line-grad2-${uid}`;

  const float = (delay: number, y = 6, x = 0, d = 6.5) =>
    reduceMotion
      ? {}
      : {
          animate: { y: [0, -y, 0], x: [0, x, 0] },
          transition: { duration: d, delay, repeat: Infinity, ease: 'easeInOut' as const },
        };

  return (
    <div className="relative mx-auto w-full max-w-[38rem] lg:max-w-none">
      {/* ambient blue glow behind composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 40% 35%, rgba(37,99,235,0.22), transparent 42%), radial-gradient(circle at 70% 65%, rgba(37,99,235,0.14), transparent 46%)',
        }}
      />

      <motion.div
        className="relative"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.965, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        style={{
          transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
          willChange: parallaxX || parallaxY ? 'transform' : undefined,
        }}
      >
        {/* connection lines (SVG overlay) */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full overflow-visible md:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={lineGrad} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(37,99,235,0)" />
              <stop offset="50%" stopColor="rgba(37,99,235,0.85)" />
              <stop offset="100%" stopColor="rgba(37,99,235,0)" />
            </linearGradient>
            <linearGradient id={lineGrad2} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(37,99,235,0)" />
              <stop offset="50%" stopColor="rgba(37,99,235,0.75)" />
              <stop offset="100%" stopColor="rgba(37,99,235,0)" />
            </linearGradient>
          </defs>
          {/* main to website preview */}
          <motion.path
            d="M 18 58 C 10 58, 8 68, 6 74"
            fill="none"
            stroke={`url(#${lineGrad})`}
            strokeWidth="0.35"
            strokeDasharray="2 2"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 1.4, delay: 0.7, ease: 'easeInOut' }}
          />
          {/* main to mobile */}
          <motion.path
            d="M 86 34 C 92 34, 96 28, 98 22"
            fill="none"
            stroke={`url(#${lineGrad})`}
            strokeWidth="0.35"
            strokeDasharray="2 2"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 1.2, delay: 0.85, ease: 'easeInOut' }}
          />
          {/* main to workflow */}
          <motion.path
            d="M 72 86 C 78 90, 86 92, 92 90"
            fill="none"
            stroke={`url(#${lineGrad2})`}
            strokeWidth="0.35"
            strokeDasharray="2 2"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 1.3, delay: 0.95, ease: 'easeInOut' }}
          />
          {/* subtle pulse dots */}
          {!reduceMotion && (
            <>
              <circle cx="18" cy="58" r="0.7" fill={BLUE}>
                <animate attributeName="opacity" values="0.2;0.9;0.2" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="86" cy="34" r="0.7" fill={BLUE_2}>
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3.4s" repeatCount="indefinite" />
              </circle>
            </>
          )}
        </svg>

        {/* Primary browser/dashboard interface */}
        <motion.div
          className="relative z-[2] overflow-hidden rounded-2xl border border-white/10 bg-[#0E1116]/95 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur-xl"
          {...float(0.1, 5, 2, 7.5)}
        >
          {/* browser chrome */}
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-2.5 sm:px-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              </div>
              <div className="hidden items-center gap-2 rounded-md border border-white/10 bg-black/30 px-3 py-1 text-[10px] text-zinc-400 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" aria-hidden="true" />
                studio.weblign.app / operations
              </div>
            </div>
            <span className="rounded-full border border-blue-500/25 bg-blue-500/10 px-2.5 py-1 text-[10px] font-medium text-blue-200">
              Product interface
            </span>
          </div>

          <div className="grid gap-3 p-3 sm:gap-4 sm:p-4 lg:grid-cols-[1.15fr_0.85fr]">
            {/* analytics + business management */}
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 sm:p-4 transition-colors duration-300 hover:border-blue-500/20">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">Analytics dashboard</p>
                    <p className="mt-1 text-sm font-semibold text-white">Performance overview</p>
                  </div>
                  <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] text-zinc-400">
                    Illustrative demo
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { label: 'Qualified leads', value: '128', note: '+18%' },
                    { label: 'Active projects', value: '24', note: 'On track' },
                    { label: 'Response time', value: '1.2h', note: 'Avg.' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-lg border border-white/10 bg-[#0B0E13] p-2.5">
                      <p className="text-[10px] text-zinc-500">{s.label}</p>
                      <p className="mt-1 text-sm font-semibold text-white">{s.value}</p>
                      <p className="mt-0.5 text-[10px] text-blue-300">{s.note}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-white/10 bg-[#0B0E13] p-3">
                  <div className="mb-2 flex items-center justify-between text-[10px] text-zinc-500">
                    <span>Weekly activity (sample)</span>
                    <span style={{ color: BLUE_2 }}>System view</span>
                  </div>
                  <div className="flex h-24 items-end gap-2 sm:h-28">
                    {bars.map((h, i) => (
                      <div key={i} className="flex flex-1 items-end">
                        <motion.div
                          initial={reduceMotion ? false : { height: 0, opacity: 0.4 }}
                          animate={{ height: `${h}%`, opacity: 1 }}
                          transition={{ duration: 0.7, delay: 0.35 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                          className="w-full rounded-md"
                          style={{
                            background: `linear-gradient(180deg, ${BLUE_2} 0%, ${BLUE} 100%)`,
                            boxShadow: '0 0 0 1px rgba(255,255,255,0.04) inset',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 sm:p-4 transition-colors duration-300 hover:border-blue-500/20">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-white">Business management</p>
                    <span className="text-[10px] text-zinc-500">Tasks</span>
                  </div>
                  <ul className="mt-3 space-y-2.5">
                    {[
                      { t: 'Client onboarding flow', s: 'In progress' },
                      { t: 'Website QA review', s: 'Scheduled' },
                      { t: 'Invoice follow-up', s: 'Automated' },
                    ].map((item, i) => (
                      <li key={item.t} className="flex items-start gap-2.5">
                        <span
                          className="mt-1 h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: i === 0 ? BLUE : 'rgba(255,255,255,0.35)' }}
                        />
                        <div className="min-w-0">
                          <p className="truncate text-[11px] font-medium text-zinc-200">{item.t}</p>
                          <p className="text-[10px] text-zinc-500">{item.s}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 sm:p-4 transition-colors duration-300 hover:border-blue-500/20">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-white">Operations</p>
                    <span className="text-[10px] text-zinc-500">Status</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {[
                      { n: 'Deployment pipeline', w: '88%' },
                      { n: 'Support queue', w: '64%' },
                    ].map((row) => (
                      <div key={row.n} className="rounded-lg border border-white/10 bg-[#0B0E13] p-2.5">
                        <div className="flex items-center justify-between text-[10px] text-zinc-400">
                          <span>{row.n}</span>
                          <span className="text-zinc-300">{row.w}</span>
                        </div>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full rounded-full" style={{ width: row.w, backgroundColor: BLUE }} />
                        </div>
                      </div>
                    ))}
                    <p className="pt-1 text-[10px] text-zinc-500">Sample operational metrics</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CRM lead management preview */}
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 sm:p-4 transition-colors duration-300 hover:border-blue-500/20">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-white">CRM lead management</p>
                  <span className="text-[10px] text-zinc-500">Pipeline</span>
                </div>
                <div className="mt-3 space-y-2.5">
                  {[
                    { name: 'Northline Retail', stage: 'Qualified', value: '$12.4k' },
                    { name: 'Apex Logistics', stage: 'Proposal', value: '$18.0k' },
                    { name: 'Brightline Studio', stage: 'Discovery', value: '$9.2k' },
                  ].map((lead) => (
                    <div key={lead.name} className="rounded-lg border border-white/10 bg-[#0B0E13] p-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[11px] font-semibold text-zinc-100">{lead.name}</p>
                          <p className="text-[10px] text-zinc-500">Sample record · demo</p>
                        </div>
                        <span className="text-[10px] font-medium" style={{ color: BLUE_2 }}>{lead.value}</span>
                      </div>
                      <div className="mt-2 inline-flex rounded-full border border-blue-500/25 bg-blue-500/10 px-2 py-0.5 text-[10px] text-blue-200">
                        {lead.stage}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-blue-500/15 bg-blue-500/[0.05] p-3 sm:p-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-400">Integrated ecosystem</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['Website', 'CRM', 'Mobile', 'Automation'].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-[10px] leading-relaxed text-zinc-500">
                  Illustrative interface composition demonstrating connected digital systems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Smaller layered element: website browser preview (actual screenshot) */}
        <motion.div
          className="absolute -bottom-6 -left-2 z-[3] hidden w-[42%] max-w-[220px] overflow-hidden rounded-xl border border-white/10 bg-[#0E1116] shadow-2xl md:block lg:-bottom-8 lg:-left-10 lg:w-[40%]"
          {...float(0.5, 7, -2, 7)}
        >
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.02] px-2.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
            <span className="ml-1 truncate text-[9px] text-zinc-500">Live website preview</span>
          </div>
          <div className="relative aspect-[16/10] bg-zinc-900">
            <Image
              src="/images/portfolio-alpha-world.webp"
              alt="Website project preview screenshot"
              fill
              sizes="220px"
              className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
          <div className="border-t border-white/10 px-2.5 py-1.5 text-[9px] font-medium text-zinc-400">Website interface</div>
        </motion.div>

        {/* Smaller layered element: mobile application frame */}
        <motion.div
          className="absolute -right-1 -top-4 z-[3] hidden w-[22%] max-w-[118px] md:block lg:-right-8 lg:-top-6 lg:w-[20%]"
          {...float(0.9, 8, 2, 7.8)}
        >
          <div className="rounded-[1.4rem] border border-white/15 bg-[#0B0E13] p-1.5 shadow-2xl">
            <div className="mx-auto mb-1 h-1 w-10 rounded-full bg-white/15" />
            <div className="space-y-1.5 rounded-[1rem] border border-white/10 bg-[#0F141C] p-2">
              <div className="h-2 w-12 rounded-full bg-white/10" />
              <div className="h-8 rounded-lg border border-blue-500/20 bg-blue-500/10" />
              <div className="space-y-1">
                <div className="h-1.5 w-full rounded-full bg-white/10" />
                <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
                <div className="h-1.5 w-3/5 rounded-full bg-white/10" />
              </div>
              <div className="mt-1 grid grid-cols-2 gap-1">
                <div className="h-5 rounded-md bg-white/10" />
                <div className="h-5 rounded-md" style={{ backgroundColor: 'rgba(37,99,235,0.35)' }} />
              </div>
            </div>
          </div>
          <p className="mt-2 text-center text-[9px] font-medium uppercase tracking-[0.14em] text-zinc-500">Mobile app</p>
        </motion.div>

        {/* Smaller layered element: workflow automation */}
        <motion.div
          className="absolute -bottom-4 -right-1 z-[3] hidden w-[38%] max-w-[210px] rounded-xl border border-white/10 bg-[#0E1116]/95 p-3 shadow-2xl backdrop-blur-md md:block lg:-bottom-6 lg:-right-8"
          {...float(1.2, 6, 3, 7.2)}
        >
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold text-white">Workflow automation</p>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>
          <div className="mt-2.5 flex items-center gap-1.5 text-[9px] text-zinc-300">
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">Lead form</span>
            <span className="h-px flex-1" style={{ background: `linear-gradient(90deg, rgba(37,99,235,0.1), ${BLUE}, rgba(37,99,235,0.1))` }} />
            <span className="rounded-md border border-blue-500/25 bg-blue-500/10 px-2 py-1 text-blue-200">CRM sync</span>
            <span className="h-px flex-1" style={{ background: `linear-gradient(90deg, rgba(37,99,235,0.1), ${BLUE}, rgba(37,99,235,0.1))` }} />
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">Notify</span>
          </div>
          <p className="mt-2 text-[9px] leading-relaxed text-zinc-500">Connected trigger → process → action flow (demo)</p>
        </motion.div>

        {/* mobile: simplified stacked preview card below is handled by layout; add a small accent badge */}
        <motion.div
          aria-hidden="true"
          className="absolute -right-2 top-6 z-[3] rounded-lg border border-blue-500/20 bg-blue-500/10 px-2.5 py-1.5 text-[10px] font-medium text-blue-200 backdrop-blur-sm md:hidden"
          {...float(0.6, 4, 0, 5.5)}
        >
          Live system view
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroIllustration;
