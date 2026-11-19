'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { HiOutlineArrowRight, HiOutlineCheckCircle } from 'react-icons/hi2';

type TabId = 'websites' | 'ecommerce' | 'crm' | 'mobile';

type TabContent = {
  id: TabId;
  label: string;
  heading: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  visual: React.ReactNode;
};

const tabs: Omit<TabContent, 'visual'>[] = [
  {
    id: 'websites',
    label: 'Business Websites',
    heading: 'Business websites designed to build trust and drive action',
    description:
      'Fast, responsive website experiences that communicate clearly, present your brand professionally, and guide visitors toward meaningful inquiries.',
    features: [
      'Responsive browser experiences for desktop and mobile',
      'Clear messaging, service presentation, and conversion paths',
      'Performance-minded layouts with modern UI foundations',
      'Flexible sections for growth, content, and campaigns',
    ],
    ctaLabel: 'Explore Website Development',
    ctaHref: '/services/web-development',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    heading: 'E-commerce experiences built for discovery and confident purchases',
    description:
      'Storefront interfaces that make products easy to browse, evaluate, and buy—supported by management views that keep operations organized.',
    features: [
      'Product listing and discovery-focused storefront layouts',
      'Product detail views with clear purchase actions',
      'Shopping cart preview and checkout-oriented flow patterns',
      'Order management views for day-to-day operations',
    ],
    ctaLabel: 'Explore E-commerce Development',
    ctaHref: '/services/ecommerce',
  },
  {
    id: 'crm',
    label: 'CRM & Dashboards',
    heading: 'CRM and dashboard systems for visibility, follow-up, and control',
    description:
      'Operational interfaces that centralize leads, customer activity, and performance signals so teams can track work and make informed decisions.',
    features: [
      'Lead management tables with actionable customer records',
      'Lead status indicators for pipeline clarity',
      'Activity overview to track follow-ups and team actions',
      'Dashboard cards highlighting key business metrics',
    ],
    ctaLabel: 'Explore CRM & Dashboards',
    ctaHref: '/services/crm-dashboards',
  },
  {
    id: 'mobile',
    label: 'Mobile Applications',
    heading: 'Mobile app experiences designed for on-the-go users and teams',
    description:
      'Intuitive mobile interfaces for customer-facing and operational use cases, crafted for clarity, speed, and consistent interaction patterns.',
    features: [
      'Realistic multi-screen mobile application flows',
      'Touch-friendly navigation and focused task interfaces',
      'Data, messaging, and status views for everyday usage',
      'Scalable UI patterns for Android and iOS products',
    ],
    ctaLabel: 'Explore Mobile App Development',
    ctaHref: '/services/mobile-development',
  },
];

function BrowserFrame({
  children,
  url,
  className = '',
}: {
  children: React.ReactNode;
  url: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-[#0B1222] shadow-2xl ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/80" />
        <span className="h-2 w-2 rounded-full bg-blue-400/80" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
        <span className="ml-2 flex-1 truncate rounded-md bg-black/30 px-2 py-1 text-[10px] text-zinc-400">{url}</span>
      </div>
      <div className="relative bg-[#070A12]">{children}</div>
    </div>
  );
}

function WebsitesVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[460px]">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <BrowserFrame url="business-website.demo" className="mx-auto w-full max-w-[560px]">
          <div className="relative aspect-[16/10]">
            <Image
              src="/images/projects/real-estate-theme.webp"
              alt="Actual business website project screenshot (Weblign portfolio)"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070A12]/35 via-transparent to-transparent" />
            <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur">
              Actual project screenshot
            </span>
          </div>
        </BrowserFrame>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, x: 16, y: 12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-2 right-0 z-20 hidden w-[132px] sm:block lg:-right-2 lg:bottom-2 lg:w-[150px]"
      >
        <div className="rounded-[1.4rem] border border-white/15 bg-[#0B1222] p-2 shadow-2xl">
          <div className="mx-auto mb-1.5 h-1 w-10 rounded-full bg-white/15" />
          <div className="overflow-hidden rounded-[1rem] border border-white/10">
            <div className="relative aspect-[9/19]">
              <Image
                src="/images/projects/anita-printers.webp"
                alt="Actual project screenshot shown in mobile preview"
                fill
                sizes="150px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={reduce ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-0 top-6 z-20 hidden rounded-xl border border-white/10 bg-[#0D1528]/95 px-3 py-2 text-[10px] text-zinc-200 shadow-xl backdrop-blur sm:block"
      >
        Desktop + mobile responsive views
      </motion.div>
    </div>
  );
}

function EcommerceVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="grid h-full gap-3 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <BrowserFrame url="storefront.demo/products" className="h-full">
          <div className="relative aspect-[16/11]">
            <Image
              src="/images/projects/theprint.webp"
              alt="Actual e-commerce/catalog-style project screenshot (Weblign portfolio)"
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover object-top"
            />
            <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur">
              Actual project screenshot
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-white/10 p-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                <div className="h-10 rounded-md bg-gradient-to-br from-blue-500/20 to-blue-400/15" />
                <div className="mt-2 h-1.5 w-12 rounded bg-white/15" />
                <div className="mt-1 h-1.5 w-8 rounded bg-blue-300/30" />
              </div>
            ))}
          </div>
        </BrowserFrame>
      </motion.div>

      <div className="grid gap-3">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="rounded-xl border border-white/10 bg-[#0B1222] p-3"
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-white">Product details</p>
            <span className="text-[10px] text-zinc-500">Illustrative demo</span>
          </div>
          <div className="mt-3 grid grid-cols-[72px_1fr] gap-3">
            <div className="rounded-lg bg-gradient-to-br from-blue-500/25 to-blue-400/15" />
            <div>
              <p className="text-sm font-medium text-zinc-100">Premium Workspace Kit</p>
              <p className="mt-1 text-[11px] text-zinc-400">Variants, pricing, stock and add-to-cart actions.</p>
              <div className="mt-2 flex gap-2">
                <span className="rounded-full bg-blue-400/15 px-2 py-0.5 text-[10px] text-blue-200">$129</span>
                <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-zinc-300">In stock</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="rounded-xl border border-white/10 bg-[#0B1222] p-3"
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-white">Cart & orders</p>
            <span className="text-[10px] text-zinc-500">Illustrative demo</span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
              <p className="text-[11px] text-zinc-300">Shopping cart preview</p>
              <div className="mt-1.5 flex items-center justify-between text-[10px] text-zinc-400"><span>2 items</span><span className="text-blue-200">$178.00</span></div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
              <p className="text-[11px] text-zinc-300">Order management</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {['Processing', 'Packed', 'Shipped'].map((s, i) => (
                  <span key={s} className={`rounded-full px-2 py-0.5 text-[10px] ${i === 1 ? 'bg-blue-400/15 text-blue-200' : 'bg-white/5 text-zinc-300'}`}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function CrmVisual() {
  const reduce = useReducedMotion();
  const rows = [
    { name: 'Aarav Mehta', company: 'Northline', status: 'Qualified', statusTone: 'bg-blue-400/15 text-blue-200 border-blue-400/20', next: 'Call today' },
    { name: 'Sara Khan', company: 'Orbit Labs', status: 'Proposal', statusTone: 'bg-blue-400/15 text-blue-200 border-blue-400/20', next: 'Send deck' },
    { name: 'Rohit Jain', company: 'FinEdge', status: 'Negotiation', statusTone: 'bg-blue-400/15 text-blue-200 border-blue-400/20', next: 'Follow-up' },
    { name: 'Maya Iyer', company: 'Acme Retail', status: 'New', statusTone: 'bg-emerald-400/15 text-emerald-200 border-emerald-400/20', next: 'Intro email' },
  ];

  return (
    <div className="grid h-full gap-3 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-xl border border-white/10 bg-[#0B1222] p-3 sm:p-4"
      >
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold text-white">Lead management</p>
            <p className="text-[10px] text-zinc-500">Illustrative demo interface</p>
          </div>
          <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] text-zinc-300">Pipeline table</span>
        </div>
        <div className="mt-3 overflow-hidden rounded-lg border border-white/10">
          <div className="grid grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr] gap-2 border-b border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] font-medium text-zinc-400">
            <span>Lead</span><span>Company</span><span>Status</span><span>Next step</span>
          </div>
          <div className="divide-y divide-white/10">
            {rows.map((r) => (
              <div key={r.name} className="grid grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr] items-center gap-2 px-3 py-2.5 text-[10px] sm:text-[11px]">
                <span className="font-medium text-zinc-100">{r.name}</span>
                <span className="text-zinc-400">{r.company}</span>
                <span className={`inline-flex w-fit rounded-full border px-2 py-0.5 ${r.statusTone}`}>{r.status}</span>
                <span className="text-zinc-300">{r.next}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.02] p-2.5">
          <p className="text-[11px] font-medium text-zinc-200">Activity overview</p>
          <ul className="mt-2 space-y-1.5 text-[10px] text-zinc-400">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />3 follow-ups scheduled today</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />2 proposals awaiting review</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />1 new lead assigned to sales</li>
          </ul>
        </div>
      </motion.div>

      <div className="grid gap-3">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <BrowserFrame url="dashboard.demo/overview">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/projects/icfei-dashboard.webp"
                alt="Actual dashboard project screenshot (Weblign portfolio)"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover object-top"
              />
              <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur">
                Actual project screenshot
              </span>
            </div>
          </BrowserFrame>
        </motion.div>
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="grid grid-cols-2 gap-2"
        >
          {[{ l: 'Open leads', v: '128' }, { l: 'Won this month', v: '24' }, { l: 'Pending tasks', v: '37' }, { l: 'Response rate', v: '92%' }].map((c) => (
            <div key={c.l} className="rounded-xl border border-white/10 bg-[#0B1222] p-3">
              <p className="text-[10px] text-zinc-400">{c.l}</p>
              <p className="mt-1 text-base font-semibold text-white">{c.v}</p>
              <p className="text-[10px] text-zinc-500">Dashboard card (demo)</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function PhoneShell({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="rounded-[1.8rem] border border-white/15 bg-[#0B1222] p-2 shadow-2xl">
      <div className="mx-auto mb-1.5 h-1.5 w-14 rounded-full bg-white/15" />
      <div className="overflow-hidden rounded-[1.3rem] border border-white/10 bg-[#070A12]">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-[10px] text-zinc-400">
          <span>{title}</span>
          <span>9:41</span>
        </div>
        <div className="aspect-[9/18] p-2.5">{children}</div>
      </div>
    </div>
  );
}

function MobileVisual() {
  const reduce = useReducedMotion();
  const phoneAnim = (delay: number) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -6, 0] },
          transition: { duration: 5.5, delay, repeat: Infinity, ease: 'easeInOut' as const },
        };

  return (
    <div className="relative flex h-full min-h-[360px] items-end justify-center gap-3 sm:gap-4 lg:min-h-[460px]">
      <motion.div {...phoneAnim(0.1)} className="w-[30%] max-w-[150px] opacity-90">
        <PhoneShell title="Home">
          <div className="space-y-2">
            <div className="rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-400/20 p-2.5">
              <p className="text-[10px] text-blue-100">Welcome back</p>
              <p className="mt-1 text-xs font-semibold text-white">Your dashboard</p>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {['Projects', 'Messages', 'Tasks', 'Insights'].map((x) => (
                <div key={x} className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                  <div className="h-5 w-5 rounded-md bg-blue-400/20" />
                  <p className="mt-1.5 text-[10px] text-zinc-300">{x}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
              <p className="text-[10px] text-zinc-400">Today</p>
              <div className="mt-1.5 h-1.5 w-full rounded bg-white/10"><div className="h-1.5 w-2/3 rounded bg-gradient-to-r from-blue-400 to-blue-300" /></div>
            </div>
          </div>
        </PhoneShell>
      </motion.div>

      <motion.div {...phoneAnim(0)} className="z-10 w-[34%] max-w-[170px]">
        <PhoneShell title="Activity">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-medium text-zinc-200">Recent activity</p>
              <span className="rounded-full bg-blue-400/15 px-1.5 py-0.5 text-[9px] text-blue-200">Live</span>
            </div>
            {[
              ['Order confirmed', '2m ago', 'bg-emerald-400'],
              ['New message', '12m ago', 'bg-blue-400'],
              ['Task completed', '1h ago', 'bg-blue-400'],
              ['Status updated', '3h ago', 'bg-blue-400'],
            ].map(([t, m, c]) => (
              <div key={t} className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2">
                <span className={`mt-1 h-1.5 w-1.5 rounded-full ${c}`} />
                <div>
                  <p className="text-[10px] text-zinc-200">{t}</p>
                  <p className="text-[9px] text-zinc-500">{m}</p>
                </div>
              </div>
            ))}
          </div>
        </PhoneShell>
      </motion.div>

      <motion.div {...phoneAnim(0.25)} className="w-[30%] max-w-[150px] opacity-90">
        <PhoneShell title="Profile">
          <div className="space-y-2">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400/50 to-blue-400/40" />
              <div>
                <p className="text-[10px] font-medium text-zinc-100">Alex Morgan</p>
                <p className="text-[9px] text-zinc-500">Premium member</p>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2">
              <p className="text-[10px] text-zinc-400">Preferences</p>
              <div className="mt-2 space-y-1.5">
                {['Notifications', 'Security', 'Payments'].map((x, i) => (
                  <div key={x} className="flex items-center justify-between text-[10px] text-zinc-300">
                    <span>{x}</span>
                    <span className={`h-3.5 w-6 rounded-full ${i < 2 ? 'bg-blue-400/30' : 'bg-white/10'}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-gradient-to-r from-blue-500/25 to-blue-400/20 p-2 text-center text-[10px] font-medium text-white">
              Continue
            </div>
          </div>
        </PhoneShell>
      </motion.div>

      <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-[#0D1528]/90 px-3 py-1 text-[10px] text-zinc-400 backdrop-blur">
        Illustrative mobile UI demo (not a delivered client project)
      </div>
    </div>
  );
}

const DigitalExperiences = () => {
  const [active, setActive] = useState<TabId>('websites');
  const reduceMotion = useReducedMotion();

  const visuals: Record<TabId, React.ReactNode> = useMemo(
    () => ({
      websites: <WebsitesVisual />,
      ecommerce: <EcommerceVisual />,
      crm: <CrmVisual />,
      mobile: <MobileVisual />,
    }),
    [],
  );

  const activeIndex = tabs.findIndex((t) => t.id === active);
  const current = tabs[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#070A12] py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300/90">Product showcase</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.05]">
            Not Just Ideas. Real Digital Experiences.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            Explore the types of digital products Weblign can engineer—from customer-facing experiences to operational systems.
          </p>
        </motion.div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <div
            role="tablist"
            aria-label="Digital experience types"
            className="inline-flex w-full max-w-4xl flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-sm sm:rounded-full"
          >
            {tabs.map((tab) => {
              const selected = tab.id === active;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(tab.id)}
                  className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    selected ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="showcase-tab-pill"
                      className="absolute inset-0 rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/25 to-blue-500/20"
                      transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 lg:mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10, scale: 0.99 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid items-center gap-8 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,25,43,0.78),rgba(11,16,32,0.9))] p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] sm:p-7 lg:grid-cols-[0.95fr_1.15fr] lg:gap-10 lg:p-8"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/90">{current.label}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{current.heading}</h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-300">{current.description}</p>

                <ul className="mt-6 space-y-3">
                  {current.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-zinc-200">
                      <HiOutlineCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href={current.ctaHref}
                    prefetch={false}
                    className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_-18px_rgba(37,99,235,0.7)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {current.ctaLabel}
                    <HiOutlineArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/contact"
                    prefetch={false}
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:border-white/25 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Discuss your project
                  </Link>
                </div>
              </div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[460px]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-500/15 via-transparent to-blue-500/15 blur-2xl"
                />
                {visuals[current.id]}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-5 text-center text-xs text-zinc-500">
          Showcase includes actual project screenshots where available and illustrative demo interfaces for capability demonstration.
        </p>
      </div>
    </section>
  );
};

export default DigitalExperiences;
