'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  HiOutlineArrowLongRight,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheckCircle,
  HiOutlineChevronDown,
  HiOutlineBuildingOffice2,
  HiOutlineShoppingCart,
  HiOutlineUserGroup,
  HiOutlineChartBarSquare,
  HiOutlineDevicePhoneMobile,
  HiOutlineBolt,
  HiOutlineExclamationTriangle,
  HiOutlineLightBulb,
  HiOutlineCog6Tooth,
  HiOutlineRocketLaunch,
  HiOutlineAcademicCap,
  HiOutlineHeart,
  HiOutlineHomeModern,
  HiOutlineTruck,
  HiOutlineBriefcase,
} from 'react-icons/hi2';
import type { Project } from '@/components/portfolio/portfolioData';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <motion.p
        variants={fadeUp}
        className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
          light
            ? 'border-white/15 bg-white/5 text-blue-200'
            : 'border-primary/20 bg-primary/10 text-primary'
        }`}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className={`mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-zinc-950 '
        }`}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUp}
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-zinc-300' : 'text-zinc-600 '
          }`}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}

const challenges = [
  {
    title: 'Manual business operations',
    description:
      'Time-consuming, repetitive workflows slow teams down and increase the risk of errors across day-to-day operations.',
  },
  {
    title: 'Poor online presence',
    description:
      'Outdated or unclear digital experiences make it harder for potential customers to understand, trust, and engage with your business.',
  },
  {
    title: 'Disconnected customer data',
    description:
      'When leads, conversations, and customer information live in separate tools, visibility and follow-up suffer.',
  },
  {
    title: 'Inefficient order management',
    description:
      'Fragmented processes for products, orders, payments, and fulfillment create delays and operational friction.',
  },
  {
    title: 'Repetitive tasks',
    description:
      'Routine actions that could be automated consume valuable time and limit your team’s focus on higher-value work.',
  },
  {
    title: 'Lack of business insights',
    description:
      'Without clear dashboards and reporting, it becomes difficult to track performance and make confident decisions.',
  },
];

const needSolutions = [
  {
    icon: HiOutlineBuildingOffice2,
    title: 'Business Websites',
    description:
      'Professional, high-performance websites designed to communicate clearly, build credibility, and generate qualified inquiries.',
    points: ['Clear service presentation', 'Conversion-focused structure', 'Responsive, fast experience'],
  },
  {
    icon: HiOutlineShoppingCart,
    title: 'E-commerce Systems',
    description:
      'Online selling experiences that make product discovery, checkout, and order management smoother for businesses and customers.',
    points: ['Product & catalog flows', 'Checkout and payment journeys', 'Order and inventory visibility'],
  },
  {
    icon: HiOutlineUserGroup,
    title: 'CRM & Lead Management',
    description:
      'Centralized systems to capture, track, and manage leads and customer relationships with better visibility and follow-up.',
    points: ['Lead pipeline tracking', 'Customer records in one place', 'Follow-up and status clarity'],
  },
  {
    icon: HiOutlineChartBarSquare,
    title: 'Custom Admin Dashboards',
    description:
      'Tailored dashboards that bring key business data, workflows, and reporting into a single, usable interface.',
    points: ['Operational visibility', 'Role-based views', 'Actionable reporting'],
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: 'Mobile Applications',
    description:
      'Mobile experiences designed around your users and business processes to extend access, engagement, and convenience.',
    points: ['Customer or internal apps', 'Focused user journeys', 'Scalable mobile foundations'],
  },
  {
    icon: HiOutlineBolt,
    title: 'AI & Workflow Automation',
    description:
      'Practical automation and intelligent workflows that reduce manual effort and improve consistency across operations.',
    points: ['Process automation', 'System integrations', 'Smarter operational workflows'],
  },
];

const industries = [
  {
    icon: HiOutlineAcademicCap,
    title: 'Education',
    challenge: 'Managing inquiries, admissions information, and communication across multiple channels.',
    solution: 'Web platforms, lead capture flows, and organized systems to present programs and handle inquiries clearly.',
  },
  {
    icon: HiOutlineHeart,
    title: 'Healthcare',
    challenge: 'Providing clear information, appointment pathways, and accessible digital touchpoints for patients.',
    solution: 'Informative websites and streamlined digital experiences designed for clarity and ease of access.',
  },
  {
    icon: HiOutlineHomeModern,
    title: 'Real Estate',
    challenge: 'Showcasing listings, capturing interest, and managing inquiries efficiently.',
    solution: 'Property-focused websites, inquiry systems, and lead management tools to support sales workflows.',
  },
  {
    icon: HiOutlineShoppingCart,
    title: 'E-commerce',
    challenge: 'Delivering smooth product discovery, checkout, and order handling experiences.',
    solution: 'E-commerce platforms and supporting systems designed for conversion, operations, and scalability.',
  },
  {
    icon: HiOutlineTruck,
    title: 'Logistics',
    challenge: 'Tracking operations, orders, and coordination across teams and processes.',
    solution: 'Custom dashboards and workflow tools that improve visibility and operational coordination.',
  },
  {
    icon: HiOutlineBriefcase,
    title: 'Professional Services',
    challenge: 'Communicating expertise, generating inquiries, and managing client interactions effectively.',
    solution: 'Credible websites, lead capture systems, and tailored digital tools aligned with service workflows.',
  },
];

const transformSteps = [
  {
    step: '01',
    title: 'Problem',
    icon: HiOutlineExclamationTriangle,
    description:
      'We start by understanding your business challenges, goals, users, and operational constraints to define the real problem clearly.',
  },
  {
    step: '02',
    title: 'Strategy',
    icon: HiOutlineLightBulb,
    description:
      'We shape the right solution approach, scope, and priorities—aligning technology choices with practical business outcomes.',
  },
  {
    step: '03',
    title: 'Engineering',
    icon: HiOutlineCog6Tooth,
    description:
      'We design and build reliable, scalable digital systems with a focus on usability, performance, and maintainability.',
  },
  {
    step: '04',
    title: 'Launch',
    icon: HiOutlineRocketLaunch,
    description:
      'We deploy with care, validate key flows, and support a smooth transition so your solution is ready to deliver value.',
  },
];

const faqs = [
  {
    q: 'What types of business problems can Weblign solve?',
    a: 'We help businesses address challenges such as weak online presence, manual workflows, disconnected data, inefficient operations, and the need for custom digital systems like websites, dashboards, CRMs, apps, and automation.',
  },
  {
    q: 'How do you decide which solution is right for my business?',
    a: 'We begin with discovery to understand your goals, users, current processes, and constraints. Based on that, we recommend a practical solution and scope aligned with your priorities and budget.',
  },
  {
    q: 'Can you build a custom solution instead of a standard package?',
    a: 'Yes. Many businesses need tailored solutions. We can scope and engineer custom websites, platforms, dashboards, integrations, and applications based on your specific requirements.',
  },
  {
    q: 'Do you work with different industries?',
    a: 'Yes. We design solutions around business needs and workflows, which allows us to support a range of industries including education, healthcare, real estate, e-commerce, logistics, and professional services.',
  },
  {
    q: 'Can you show examples of solutions you have built?',
    a: 'Yes. Our portfolio includes real project work with screenshots and details where available. We can also discuss relevant solution approaches and provide clearly labeled illustrative demos when helpful.',
  },
];

function DemoVisual({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#0E1116] via-[#0B1020] to-[#09090B]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(37,99,235,0.35), transparent 35%), radial-gradient(circle at 80% 30%, rgba(59,130,246,0.2), transparent 30%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: 'auto, auto, 28px 28px, 28px 28px',
        }}
      />
      <div className="absolute inset-0 p-4 sm:p-5">
        <div className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-zinc-500" />
              <span className="h-2 w-2 rounded-full bg-zinc-600" />
              <span className="h-2 w-2 rounded-full bg-zinc-700" />
            </div>
            <span className="rounded-full border border-blue-500/25 bg-blue-500/10 px-2 py-0.5 text-[10px] font-medium text-blue-200">
              Illustrative demo
            </span>
          </div>
          <div className="mt-3 grid flex-1 grid-cols-3 gap-2">
            <div className="col-span-2 space-y-2">
              <div className="h-16 rounded-lg border border-white/10 bg-black/20 p-2">
                <div className="h-2 w-24 rounded bg-white/20" />
                <div className="mt-2 flex h-8 items-end gap-1.5">
                  {[35, 55, 45, 70, 60, 82].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-[#2563EB] to-[#3B82F6]" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-14 rounded-lg border border-white/10 bg-black/20 p-2">
                  <div className="h-1.5 w-16 rounded bg-white/20" />
                  <div className="mt-2 h-1.5 w-full rounded bg-white/10" />
                  <div className="mt-1.5 h-1.5 w-4/5 rounded bg-white/10" />
                </div>
                <div className="h-14 rounded-lg border border-blue-500/20 bg-blue-500/10 p-2">
                  <div className="h-1.5 w-14 rounded bg-blue-200/40" />
                  <div className="mt-2 text-sm font-semibold text-white">+24%</div>
                  <div className="text-[10px] text-blue-200">Sample metric</div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-black/20 p-2">
                  <div className="h-1.5 w-12 rounded bg-white/20" />
                  <div className="mt-2 h-1.5 w-full rounded bg-white/10" />
                  <div className="mt-1 h-1.5 w-3/4 rounded bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#09090B]/90 via-[#09090B]/30 to-transparent p-4 sm:p-5">
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-0.5 text-xs text-zinc-300">{subtitle}</p>
      </div>
    </div>
  );
}

export default function SolutionsPage({ projects }: { projects: Project[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();
  const featuredProjects = (projects || []).filter((p) => p?.image).slice(0, 3);

  const demoCards = [
    ...featuredProjects.map((p) => ({
      kind: 'project' as const,
      title: p.title,
      subtitle: p.category ? `${p.category} — real project screenshot` : 'Real project screenshot',
      image: p.image,
      href: p.demoUrl || '/portfolio',
      external: Boolean(p.demoUrl),
      label: 'Actual project',
    })),
    {
      kind: 'demo' as const,
      title: 'Operations Dashboard',
      subtitle: 'Custom admin view for tracking workflows, metrics, and tasks',
      label: 'Illustrative demo',
    },
    {
      kind: 'demo' as const,
      title: 'Lead & CRM Pipeline',
      subtitle: 'Centralized lead management and follow-up workflow interface',
      label: 'Illustrative demo',
    },
  ].slice(0, 3);

  return (
    <div className="overflow-x-clip bg-[var(--color-background)] text-[var(--color-text-primary)]">
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/40 to-white px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)', backgroundSize: '32px 32px' }}
          />
          <motion.div
            className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-primary/[0.05] blur-3xl"
            animate={reduceMotion ? undefined : { x: [0, 18, 0], y: [0, -12, 0] }}
            transition={reduceMotion ? undefined : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-40 -right-32 h-[360px] w-[360px] rounded-full bg-accent/[0.05] blur-3xl"
            animate={reduceMotion ? undefined : { x: [0, -14, 0], y: [0, 10, 0] }}
            transition={reduceMotion ? undefined : { duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary"
            >
              <HiOutlineLightBulb className="h-4 w-4" aria-hidden="true" />
              Solutions
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl"
            >
              Digital Solutions Built Around{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Your Business.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg"
            >
              From powerful websites to intelligent business systems, we engineer digital solutions that simplify operations and move your business forward.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Discuss Your Project
                <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#business-challenges"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Explore Solutions
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-600">
              {['Problem-led discovery', 'Tailored digital systems', 'Clear, practical delivery'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <HiOutlineCheckCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.12, ease: EASE }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-5 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.25)] sm:p-6">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl" aria-hidden="true" />
              <div className="relative flex items-center justify-between border-b border-zinc-100 pb-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-950">Solution mapping</p>
                  <p className="mt-1 text-xs text-zinc-500">From challenge to practical outcome</p>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                  Business-first
                </span>
              </div>
              <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
                {needSolutions.slice(0, 4).map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22 + i * 0.07, duration: 0.4, ease: EASE }}
                    className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-3"
                  >
                    <s.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <p className="mt-2 text-sm font-medium text-zinc-900">{s.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600">Designed around specific goals and workflows.</p>
                  </motion.div>
                ))}
              </div>
              <div className="relative mt-4 rounded-xl border border-primary/15 bg-gradient-to-r from-primary/[0.08] to-accent/[0.06] p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Outcome focus</p>
                <p className="mt-1 text-sm text-zinc-700">Identify the problem, choose the right approach, and engineer a solution ready to launch.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Business Challenges */}
      <section id="business-challenges" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Business challenges"
            title="Problems that hold businesses back"
            description="Many businesses face operational and digital challenges that limit growth, efficiency, and customer experience. We help identify and solve them with the right technology approach."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {challenges.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md  "
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <HiOutlineExclamationTriangle className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-950 ">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 ">{item.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Solutions by Business Need */}
      <section className="bg-zinc-50/70 px-4 py-20  sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Solutions by business need"
            title="Practical systems for real requirements"
            description="Every solution is shaped around your goals, users, and workflows—so technology supports the way your business actually operates."
            align="center"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {needSolutions.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg  "
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-zinc-950 ">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 ">{item.description}</p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-zinc-700 ">
                      <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Solutions by Industry */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Solutions by industry"
            title="Tailored approaches across industries"
            description="Different industries face different challenges. We adapt solution design and implementation to the context, workflows, and goals of each business."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {industries.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border border-zinc-200 bg-white p-6  "
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-950 ">{item.title}</h3>
                </div>
                <div className="mt-4 space-y-3 text-sm leading-relaxed">
                  <p className="text-zinc-600 "><span className="font-semibold text-zinc-900 ">Challenge:</span> {item.challenge}</p>
                  <p className="text-zinc-600 "><span className="font-semibold text-zinc-900 ">Solution approach:</span> {item.solution}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. How We Transform Businesses */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/40 to-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.08),rgba(37,99,235,0)_70%)] blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)', backgroundSize: '30px 30px' }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Transformation process"
            title="How we transform businesses"
            description="A clear path from understanding the problem to launching a solution that is practical, reliable, and ready to grow."
            align="center"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {transformSteps.map((step, index) => (
              <motion.div key={step.title} variants={fadeUp} className="relative">
                <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-primary">{step.step}</span>
                    <step.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-zinc-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{step.description}</p>
                </div>
                {index < transformSteps.length - 1 ? (
                  <div className="pointer-events-none absolute right-[-0.75rem] top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-primary/40 to-transparent lg:block" aria-hidden="true" />
                ) : null}
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mt-8 max-w-3xl text-center text-sm text-zinc-600 sm:text-base"
          >
            <span className="font-medium text-zinc-900">Problem → Strategy → Engineering → Launch</span> — a structured approach focused on clarity, quality, and business value.
          </motion.p>
        </div>
      </section>

      {/* 6. Featured Solution Demonstrations */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Solution demonstrations"
            title="Examples of solutions in action"
            description="A mix of actual project work and clearly labeled illustrative demos showing how digital solutions can be designed for real business needs."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-6 lg:grid-cols-3"
          >
            {demoCards.map((card, i) => (
              <motion.article
                key={`${card.title}-${i}`}
                variants={fadeUp}
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg  "
              >
                {card.kind === 'project' && card.image ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 ">
                    <Image
                      src={card.image}
                      alt={`${card.title} project screenshot`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/45 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                      {card.label}
                    </div>
                  </div>
                ) : (
                  <DemoVisual title={card.title} subtitle={card.subtitle} />
                )}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-zinc-950 ">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 ">{card.subtitle}</p>
                  {card.kind === 'project' ? (
                    <a
                      href={card.href}
                      target={card.external ? '_blank' : undefined}
                      rel={card.external ? 'noopener noreferrer' : undefined}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-dark"
                    >
                      {card.external ? 'View live project' : 'View portfolio'}
                      <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 ">
                      <HiOutlineCheckCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                      Clearly labeled illustrative demo
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
          <p className="mt-4 text-xs text-zinc-500 ">
            Actual projects are shown where available. Illustrative demos are labeled and do not represent delivered client work.
          </p>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-zinc-50/70 px-4 py-20  sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionIntro
            eyebrow="FAQ"
            title="Questions about our solutions"
            description="Answers to common questions about how we approach business challenges and deliver tailored digital solutions."
            align="center"
          />
          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white  ">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                    aria-controls={`solutions-faq-${index}`}
                  >
                    <span className="text-base font-semibold text-zinc-950 ">{faq.q}</span>
                    <HiOutlineChevronDown
                      className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`solutions-faq-${index}`}
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: EASE }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-600 sm:px-6 sm:pb-6 ">{faq.a}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-white via-zinc-50/70 to-primary/[0.06] px-6 py-12 text-center shadow-[0_24px_60px_-30px_rgba(15,23,42,0.2)] sm:px-10 sm:py-16"
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.12),rgba(37,99,235,0)_70%)] blur-2xl" />
              <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.1),rgba(59,130,246,0)_70%)] blur-2xl" />
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            </div>
            <div className="relative">
              <p className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Let’s solve the right problem
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
                Let’s Find the Right Solution for Your Business.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                Share your challenge, goals, or idea—and we’ll help you identify the most practical digital solution to move forward.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Start a Conversation
                  <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={getWhatsAppUrlFor('consultation')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-7 py-3.5 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                >
                  <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
