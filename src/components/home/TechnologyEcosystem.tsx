'use client';

import { motion, useReducedMotion } from 'framer-motion';

type Category = {
  name: string;
  items: string[];
  accent: string;
  position: string;
};

const categories: Category[] = [
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    accent: 'from-blue-400/30 to-blue-400/20',
    position: 'lg:left-[2%] lg:top-[8%]',
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express.js', 'Laravel', 'REST APIs'],
    accent: 'from-blue-400/25 to-blue-400/20',
    position: 'lg:right-[2%] lg:top-[10%]',
  },
  {
    name: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase'],
    accent: 'from-blue-400/25 to-blue-400/15',
    position: 'lg:left-[4%] lg:bottom-[14%]',
  },
  {
    name: 'Mobile',
    items: ['React Native', 'Expo'],
    accent: 'from-blue-400/25 to-blue-400/15',
    position: 'lg:right-[10%] lg:bottom-[34%]',
  },
  {
    name: 'Tools & Infrastructure',
    items: ['Docker', 'Git', 'GitHub', 'Vercel'],
    accent: 'from-blue-400/25 to-blue-400/15',
    position: 'lg:right-[3%] lg:bottom-[8%]',
  },
  {
    name: 'AI & Automation',
    items: ['Gemini', 'LangChain', 'Relevant integrations'],
    accent: 'from-blue-400/20 to-blue-400/20',
    position: 'lg:left-[38%] lg:bottom-[2%]',
  },
];

function TechPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-zinc-200 sm:text-xs">
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-300" aria-hidden="true" />
      {label}
    </span>
  );
}

const TechnologyEcosystem = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#05070F] py-20 sm:py-24 lg:py-28">
      {/* background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-[20%] top-[20%] h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.35) 1px, transparent 0)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 80%)',
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
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300/90">Technology ecosystem</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.05]">
            Built With Modern Technologies.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            A practical, modern stack for building websites, applications, integrations, and scalable digital systems.
          </p>
        </motion.div>

        {/* Desktop ecosystem diagram */}
        <div className="relative mt-12 hidden min-h-[620px] lg:mt-14 lg:block">
          {/* connecting lines */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1200 620"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1200" y2="620" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgba(37,99,235,0.45)" />
                <stop offset="1" stopColor="rgba(59,130,246,0.35)" />
              </linearGradient>
            </defs>
            {[
              'M 260 170 C 420 220, 460 260, 560 300',
              'M 940 170 C 780 220, 740 260, 640 300',
              'M 260 430 C 420 390, 470 360, 560 330',
              'M 900 430 C 760 390, 710 360, 640 330',
              'M 940 350 C 800 340, 720 330, 650 320',
              'M 600 520 C 600 450, 600 400, 600 360',
            ].map((d, i) => (
              <motion.path
                key={d}
                d={d}
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="6 8"
                initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: 0.15 + i * 0.08, ease: 'easeInOut' }}
              />
            ))}
            {/* subtle orbit rings */}
            <motion.circle
              cx="600"
              cy="315"
              r="150"
              stroke="rgba(148,163,184,0.18)"
              strokeWidth="1"
              strokeDasharray="4 10"
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            />
            <motion.circle
              cx="600"
              cy="315"
              r="235"
              stroke="rgba(148,163,184,0.12)"
              strokeWidth="1"
              strokeDasharray="3 12"
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            />
          </svg>

          {/* central identity */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-[45%] z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.35),rgba(11,16,32,0.95)_55%,rgba(7,10,18,1)_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_30px_80px_-30px_rgba(37,99,235,0.45)]">
              <motion.div
                aria-hidden="true"
                className="absolute inset-[-10px] rounded-full border border-blue-400/20"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={reduceMotion ? undefined : { duration: 24, repeat: Infinity, ease: 'linear' }}
                style={{ borderStyle: 'dashed' }}
              />
              <motion.div
                aria-hidden="true"
                className="absolute inset-[-22px] rounded-full border border-blue-400/15"
                animate={reduceMotion ? undefined : { rotate: -360 }}
                transition={reduceMotion ? undefined : { duration: 34, repeat: Infinity, ease: 'linear' }}
              />
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/40 to-blue-400/30 text-white">
                  <span className="text-sm font-bold">W</span>
                </div>
                <p className="text-sm font-semibold tracking-tight text-white">Weblign</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-zinc-400">Digital Engineering</p>
              </div>
            </div>
          </motion.div>

          {/* category nodes/cards */}
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute w-[280px] ${cat.position}`}
            >
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, i % 2 === 0 ? -4 : 4, 0] }}
                transition={reduceMotion ? undefined : { duration: 6 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,25,43,0.88),rgba(11,16,32,0.96))] p-4 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.8)] backdrop-blur-sm"
              >
                <div className={`mb-3 inline-flex rounded-lg bg-gradient-to-r ${cat.accent} px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-100`}>
                  {cat.name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <TechPill key={item} label={item} />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/tablet organized cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,25,43,0.9),rgba(11,16,32,0.96))] p-5 sm:col-span-2"
          >
            <div className="flex items-center gap-4">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/30 to-blue-400/20 text-lg font-bold text-white">
                W
              </div>
              <div>
                <p className="text-base font-semibold text-white">Weblign</p>
                <p className="text-sm text-zinc-400">Central engineering identity connecting modern tools and platforms</p>
              </div>
            </div>
          </motion.div>

          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,25,43,0.86),rgba(11,16,32,0.94))] p-5"
            >
              <div className={`mb-3 inline-flex rounded-lg bg-gradient-to-r ${cat.accent} px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-100`}>
                {cat.name}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <TechPill key={item} label={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-zinc-500">
          Technologies and tools used across web, mobile, integration, and automation projects based on solution requirements.
        </p>
      </div>
    </section>
  );
};

export default TechnologyEcosystem;
