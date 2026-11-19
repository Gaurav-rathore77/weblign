'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

type CardDef = {
  key: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  className: string;
  size: 'large' | 'small';
  visual: ReactNode;
  spotlight?: boolean;
};

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function BentoInteractiveCard({
  card,
  index,
}: {
  card: CardDef;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.article
      custom={index}
      variants={reveal}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={card.className}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,25,43,0.92),rgba(11,16,32,0.96))] p-5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:-translate-y-1 sm:p-6"
      >
        {/* gradient border glow on hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            padding: 1,
            background:
              'linear-gradient(130deg, rgba(37,99,235,0.55), rgba(59,130,246,0.18), rgba(37,99,235,0.12), rgba(59,130,246,0.45))',
            WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
        {/* animated hover sheen */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-60"
          style={{
            background:
              'conic-gradient(from 180deg at 50% 50%, rgba(37,99,235,0.25), rgba(59,130,246,0.2), rgba(37,99,235,0.25))',
          }}
        />

        {/* mouse-follow spotlight */}
        {card.spotlight !== false && !reduceMotion && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: hovered ? 1 : 0,
              background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(37,99,235,0.16), rgba(59,130,246,0.06) 30%, transparent 55%)`,
            }}
          />
        )}

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300/90">
                {card.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {card.title}
              </h3>
            </div>
            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-colors group-hover:border-blue-400/30 group-hover:text-blue-200">
              <HiOutlineArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-300 sm:text-[0.95rem]">
            {card.description}
          </p>

          <div className={`mt-5 ${card.size === 'large' ? 'min-h-[220px] sm:min-h-[260px] lg:min-h-[290px]' : 'min-h-[170px] sm:min-h-[190px]'} flex-1`}>
            {card.visual}
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <Link
              href={card.href}
              prefetch={false}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Explore
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </Link>
            <span className="text-xs text-zinc-500">View service</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

const floatAnim = (reduce: boolean | null, delay = 0, y = 6, d = 5.5) =>
  reduce
    ? undefined
    : {
        y: [0, -y, 0],
        transition: { duration: d, delay, repeat: Infinity, ease: 'easeInOut' as const },
      };

function BrowserMockupVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full w-full">
      <motion.div animate={floatAnim(reduce, 0, 5, 6)} className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0A1020] shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="h-2 w-2 rounded-full bg-blue-400/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          <span className="ml-2 flex-1 truncate rounded-md bg-black/30 px-2 py-1 text-[10px] text-zinc-400">weblign.in/launch</span>
        </div>
        <div className="grid h-[calc(100%-36px)] grid-cols-[1.1fr_0.9fr] gap-3 p-3 sm:p-4">
          <div className="space-y-3">
            <div className="h-2.5 w-24 rounded-full bg-blue-400/30" />
            <div className="space-y-2">
              <div className="h-3 w-full rounded-full bg-white/15" />
              <div className="h-3 w-4/5 rounded-full bg-white/10" />
              <div className="h-3 w-3/5 rounded-full bg-white/10" />
            </div>
            <div className="flex gap-2 pt-1">
              <div className="h-7 w-20 rounded-full bg-gradient-to-r from-blue-500/70 to-blue-400/60" />
              <div className="h-7 w-16 rounded-full border border-white/10 bg-white/[0.03]" />
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                  <div className="h-1.5 w-8 rounded bg-blue-300/30" />
                  <div className="mt-2 h-2 w-full rounded bg-white/10" />
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/15 via-white/[0.03] to-blue-500/10 p-2">
            <motion.div animate={floatAnim(reduce, 0.4, 4, 4.8)} className="absolute right-2 top-2 h-10 w-16 rounded-lg border border-white/10 bg-[#0D1528] p-1.5">
              <div className="h-1.5 w-8 rounded bg-emerald-300/40" />
              <div className="mt-1.5 h-1.5 w-full rounded bg-white/10" />
            </motion.div>
            <div className="mt-10 space-y-2">
              <div className="h-16 rounded-lg border border-white/10 bg-black/20" />
              <div className="h-10 rounded-lg border border-white/10 bg-black/20" />
              <div className="h-10 rounded-lg border border-white/10 bg-black/20" />
            </div>
          </div>
        </div>
      </motion.div>
      <div className="pointer-events-none absolute -right-3 -bottom-3 h-24 w-24 rounded-full bg-blue-400/20 blur-2xl" />
    </div>
  );
}

function EcommerceVisual() {
  const reduce = useReducedMotion();
  const products = [
    { name: 'Aura Headset', price: '$89', tone: 'from-blue-500/40 to-blue-500/20' },
    { name: 'Orbit Watch', price: '$129', tone: 'from-blue-500/35 to-blue-500/20' },
    { name: 'Nova Pack', price: '$49', tone: 'from-blue-500/35 to-blue-500/20' },
    { name: 'Pulse Lamp', price: '$59', tone: 'from-blue-500/30 to-blue-500/20' },
  ];
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0A1020] p-3 sm:p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-400/50 to-blue-400/40" />
          <div className="h-2.5 w-20 rounded-full bg-white/15" />
        </div>
        <div className="flex gap-1.5">
          <div className="h-6 w-10 rounded-full border border-white/10 bg-white/[0.03]" />
          <div className="h-6 w-6 rounded-full bg-blue-400/20" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            animate={floatAnim(reduce, i * 0.15, 3, 4.5 + i * 0.3)}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-2"
          >
            <div className={`h-14 rounded-lg bg-gradient-to-br ${p.tone} sm:h-16`} />
            <div className="mt-2 flex items-center justify-between gap-2">
              <div>
                <p className="text-[10px] font-medium text-zinc-200">{p.name}</p>
                <p className="text-[10px] text-blue-300">{p.price}</p>
              </div>
              <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[9px] text-blue-200">Add</span>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div animate={floatAnim(reduce, 0.5, 4, 5.2)} className="absolute -right-1 bottom-3 rounded-lg border border-white/10 bg-[#0D1528]/95 px-2.5 py-2 shadow-lg">
        <p className="text-[9px] text-zinc-400">Cart total</p>
        <p className="text-xs font-semibold text-white">$326.00</p>
      </motion.div>
    </div>
  );
}

function CrmDashboardVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative grid h-full gap-3 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A1020] p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-400">CRM dashboard</p>
            <p className="mt-1 text-sm font-semibold text-white">Pipeline & operations</p>
          </div>
          <span className="rounded-md border border-blue-400/20 bg-blue-400/10 px-2 py-1 text-[10px] text-blue-200">Live view</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[{ l: 'Leads', v: '248' }, { l: 'Deals', v: '36' }, { l: 'Tasks', v: '92' }].map((s) => (
            <div key={s.l} className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
              <p className="text-[10px] text-zinc-400">{s.l}</p>
              <p className="mt-1 text-sm font-semibold text-white">{s.v}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-white/10 bg-black/20 p-2.5">
          <div className="mb-2 flex items-center justify-between text-[10px] text-zinc-400">
            <span>Weekly activity</span><span>Team overview</span>
          </div>
          <div className="flex h-20 items-end gap-1.5 sm:h-24">
            {[40, 65, 50, 80, 62, 90, 74].map((h, i) => (
              <motion.div
                key={i}
                initial={reduce ? false : { height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.04 }}
                className="flex-1 rounded-md bg-gradient-to-t from-blue-500/70 to-blue-300/70"
              />
            ))}
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {['Qualified', 'Proposal', 'Negotiation', 'Won'].map((stage, i) => (
            <motion.div key={stage} animate={floatAnim(reduce, i * 0.2, 2.5, 5 + i)} className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
              <p className="text-[10px] text-zinc-400">{stage}</p>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-300" style={{ width: `${80 - i * 15}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <div className="rounded-2xl border border-white/10 bg-[#0A1020] p-3 sm:p-4">
          <p className="text-xs font-semibold text-white">Customer insights</p>
          <div className="mt-3 space-y-2">
            {[
              { n: 'Northline Co.', s: 'Follow-up today', c: 'text-blue-300' },
              { n: 'Orbit Retail', s: 'Proposal sent', c: 'text-blue-300' },
              { n: 'FinEdge', s: 'High priority', c: 'text-emerald-300' },
            ].map((row) => (
              <div key={row.n} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-2">
                <div>
                  <p className="text-[11px] font-medium text-zinc-100">{row.n}</p>
                  <p className={`text-[10px] ${row.c}`}>{row.s}</p>
                </div>
                <span className="h-6 w-6 rounded-full bg-white/5" />
              </div>
            ))}
          </div>
        </div>
        <motion.div animate={floatAnim(reduce, 0.6, 4, 6)} className="rounded-2xl border border-blue-400/15 bg-gradient-to-br from-blue-500/10 to-blue-500/10 p-3 sm:p-4">
          <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-400">Automation</p>
          <p className="mt-1 text-sm font-semibold text-white">Smart reminders active</p>
          <p className="mt-1 text-[11px] text-zinc-300">Follow-ups and status updates synced across the team.</p>
        </motion.div>
      </div>
    </div>
  );
}

function PhoneMock({
  className,
  delay = 0,
  reduce,
}: {
  className?: string;
  delay?: number;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      animate={floatAnim(reduce, delay, 5, 5.8)}
      className={`relative aspect-[9/19] w-28 rounded-[1.6rem] border border-white/15 bg-[#0A1020] p-2 shadow-2xl sm:w-32 ${className || ''}`}
    >
      <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-white/10" />
      <div className="space-y-2 rounded-[1.1rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-2">
        <div className="h-14 rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-400/20" />
        <div className="h-2 w-16 rounded bg-white/15" />
        <div className="h-2 w-12 rounded bg-white/10" />
        <div className="grid grid-cols-2 gap-1.5 pt-1">
          <div className="h-10 rounded-lg bg-white/[0.05]" />
          <div className="h-10 rounded-lg bg-white/[0.05]" />
        </div>
        <div className="h-8 rounded-lg bg-gradient-to-r from-blue-500/30 to-blue-400/25" />
      </div>
    </motion.div>
  );
}

function MobileAppsVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative flex h-full items-end justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_55%),#0A1020] p-4">
      <PhoneMock className="translate-y-3 opacity-70" delay={0.2} reduce={reduce} />
      <PhoneMock className="-translate-y-1 z-10 scale-[1.02]" delay={0} reduce={reduce} />
      <PhoneMock className="translate-y-4 opacity-70" delay={0.45} reduce={reduce} />
      <motion.div animate={floatAnim(reduce, 0.8, 4, 5)} className="absolute left-3 top-4 rounded-lg border border-white/10 bg-[#0D1528]/95 px-2.5 py-2 text-[10px] text-zinc-300 shadow-lg">
        iOS & Android
      </motion.div>
    </div>
  );
}

function FlowNode({
  label,
  tone,
  delay,
  reduce,
}: {
  label: string;
  tone: string;
  delay: number;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      animate={floatAnim(reduce, delay, 3.5, 5.2)}
      className={`relative z-10 rounded-xl border border-white/10 bg-[#0D1528] px-3 py-2 text-center shadow-lg ${tone}`}
    >
      <p className="text-[10px] font-medium text-zinc-100">{label}</p>
    </motion.div>
  );
}

function AutomationVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0A1020] p-4">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(148,163,184,0.2) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      <div className="relative grid h-full grid-cols-3 items-center gap-2">
        <div className="space-y-3">
          <FlowNode label="Lead form" tone="" delay={0} reduce={reduce} />
          <FlowNode label="Support inbox" tone="" delay={0.3} reduce={reduce} />
        </div>
        <div className="relative flex flex-col items-center gap-3">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 120" preserveAspectRatio="none" aria-hidden="true">
            <motion.path d="M5 25 C 40 25, 40 60, 50 60" fill="none" stroke="rgba(59,130,246,0.45)" strokeWidth="2" strokeDasharray="4 4" initial={reduce ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} />
            <motion.path d="M5 95 C 40 95, 40 60, 50 60" fill="none" stroke="rgba(37,99,235,0.45)" strokeWidth="2" strokeDasharray="4 4" initial={reduce ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} />
            <motion.path d="M50 60 C 65 60, 65 35, 95 35" fill="none" stroke="rgba(59,130,246,0.45)" strokeWidth="2" strokeDasharray="4 4" initial={reduce ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} />
            <motion.path d="M50 60 C 65 60, 65 85, 95 85" fill="none" stroke="rgba(37,99,235,0.45)" strokeWidth="2" strokeDasharray="4 4" initial={reduce ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} />
          </svg>
          <motion.div animate={floatAnim(reduce, 0.15, 4, 4.8)} className="relative z-10 rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-blue-500/15 px-3 py-3 text-center shadow-[0_0_30px_-10px_rgba(59,130,246,0.35)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-200">AI workflow</p>
            <p className="mt-1 text-[11px] text-zinc-200">Route · qualify · notify</p>
          </motion.div>
        </div>
        <div className="space-y-3">
          <FlowNode label="CRM update" tone="" delay={0.2} reduce={reduce} />
          <FlowNode label="Team alert" tone="" delay={0.5} reduce={reduce} />
        </div>
      </div>
      <motion.div animate={floatAnim(reduce, 0.7, 3, 5.5)} className="absolute bottom-3 left-3 rounded-lg border border-white/10 bg-[#0D1528]/95 px-2.5 py-1.5 text-[10px] text-emerald-300">
        Automated in real time
      </motion.div>
    </div>
  );
}
function CustomSoftwareVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0A1020] p-3 sm:p-4">
      <div className="grid h-full grid-cols-[0.9fr_1.1fr] gap-3">
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-400">Architecture</p>
          <div className="relative mt-2 h-[calc(100%-1.5rem)] min-h-[120px] rounded-xl border border-white/10 bg-black/20 p-2">
            {[
              { t: 'Client apps', top: '8%', left: '10%', w: '80%' },
              { t: 'API layer', top: '40%', left: '18%', w: '64%' },
              { t: 'Services', top: '60%', left: '8%', w: '38%' },
              { t: 'Data', top: '60%', left: '54%', w: '38%' },
            ].map((b, i) => (
              <motion.div
                key={b.t}
                animate={floatAnim(reduce, i * 0.12, 2.5, 5)}
                className="absolute rounded-lg border border-blue-400/20 bg-blue-500/10 px-2 py-1.5 text-center text-[10px] text-blue-100"
                style={{ top: b.top, left: b.left, width: b.w }}
              >
                {b.t}
              </motion.div>
            ))}
            <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
              <line x1="50%" y1="24%" x2="50%" y2="40%" stroke="rgba(59,130,246,0.35)" strokeWidth="1.5" />
              <line x1="35%" y1="52%" x2="27%" y2="60%" stroke="rgba(59,130,246,0.35)" strokeWidth="1.5" />
              <line x1="65%" y1="52%" x2="73%" y2="60%" stroke="rgba(59,130,246,0.35)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <motion.div animate={floatAnim(reduce, 0.2, 4, 6)} className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0D1528]">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-2.5 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
            <span className="ml-1 text-[9px] text-zinc-400">app.module.ts</span>
          </div>
          <div className="space-y-1.5 p-2.5 font-mono text-[9px] leading-relaxed text-zinc-400">
            <p><span className="text-blue-300">export</span> <span className="text-blue-300">class</span> Platform {'{'}</p>
            <p className="pl-2">modules = [</p>
            <p className="pl-4 text-zinc-300">&quot;Auth&quot;, &quot;Billing&quot;,</p>
            <p className="pl-4 text-zinc-300">&quot;Workflows&quot;, &quot;Reports&quot;</p>
            <p className="pl-2">];</p>
            <p className="pl-2"><span className="text-blue-300">async</span> deploy() {'{'}</p>
            <p className="pl-4 text-emerald-300">return ready();</p>
            <p className="pl-2">{'}'}</p>
            <p>{'}'}</p>
          </div>
          <div className="mt-auto border-t border-white/10 bg-white/[0.02] px-2.5 py-2 text-[10px] text-zinc-300">
            Purpose-built modules & integrations
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const cards: CardDef[] = [
  {
    key: 'web',
    eyebrow: 'Web Development',
    title: 'WEB DEVELOPMENT',
    description: 'High-performance websites and digital experiences.',
    href: '/services/web-development',
    size: 'large',
    spotlight: true,
    className: 'md:col-span-6 lg:col-span-7 lg:row-span-1',
    visual: <BrowserMockupVisual />,
  },
  {
    key: 'crm',
    eyebrow: 'CRM & Dashboards',
    title: 'CRM & DASHBOARDS',
    description: 'Centralize operations, customers and business intelligence.',
    href: '/services/crm-dashboards',
    size: 'large',
    spotlight: true,
    className: 'md:col-span-6 lg:col-span-5 lg:row-span-2',
    visual: <CrmDashboardVisual />,
  },
  {
    key: 'ecommerce',
    eyebrow: 'E-commerce',
    title: 'E-COMMERCE',
    description: 'Scalable online shopping experiences built for your business.',
    href: '/services/ecommerce',
    size: 'small',
    spotlight: true,
    className: 'md:col-span-3 lg:col-span-4',
    visual: <EcommerceVisual />,
  },
  {
    key: 'mobile',
    eyebrow: 'Mobile Applications',
    title: 'MOBILE APPLICATIONS',
    description: 'Intuitive mobile experiences for Android and iOS.',
    href: '/services/mobile-development',
    size: 'small',
    spotlight: true,
    className: 'md:col-span-3 lg:col-span-3',
    visual: <MobileAppsVisual />,
  },
  {
    key: 'ai',
    eyebrow: 'AI & Automation',
    title: 'AI & AUTOMATION',
    description: 'Reduce repetitive tasks with intelligent business workflows.',
    href: '/services/ai-automation',
    size: 'small',
    spotlight: true,
    className: 'md:col-span-3 lg:col-span-4',
    visual: <AutomationVisual />,
  },
  {
    key: 'custom',
    eyebrow: 'Custom Software',
    title: 'CUSTOM SOFTWARE',
    description: 'Purpose-built software for unique business requirements.',
    href: '/services/custom-software',
    size: 'small',
    spotlight: true,
    className: 'md:col-span-3 lg:col-span-5',
    visual: <CustomSoftwareVisual />,
  },
];

const HomeServices = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-[#070A12] py-20 sm:py-24 lg:py-28"
    >
      {/* background accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-10%] h-[360px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.14) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 80%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300/90">Capabilities</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.05]">
            Everything Your Business Needs to Go Digital.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            From your first digital presence to complex business systems, we engineer solutions around the way you work.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-6 md:auto-rows-[minmax(220px,auto)] lg:mt-14 lg:grid-cols-12">
          {cards.map((card, index) => (
            <BentoInteractiveCard key={card.key} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
