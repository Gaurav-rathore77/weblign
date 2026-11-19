'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  HiOutlineAcademicCap,
  HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineBuildingOffice2,
  HiOutlineTruck,
  HiOutlineBriefcase,
} from 'react-icons/hi2';

const industries = [
  {
    title: 'Education',
    icon: HiOutlineAcademicCap,
    challenge:
      'Managing inquiries, course information, admissions workflows, and student communication across disconnected channels can be time-consuming.',
    solution:
      'Build education websites, portals, and inquiry management systems that centralize information and streamline engagement.',
    tech: 'Web platforms, CMS-driven sites, CRM workflows, and dashboards',
  },
  {
    title: 'E-commerce & Retail',
    icon: HiOutlineShoppingBag,
    challenge:
      'Customers expect smooth product discovery, clear checkout experiences, and reliable order handling across devices.',
    solution:
      'Create storefronts and operational tools that improve browsing, purchasing, and day-to-day order management.',
    tech: 'E-commerce websites, payment integrations, product catalogs, and admin panels',
  },
  {
    title: 'Healthcare',
    icon: HiOutlineHeart,
    challenge:
      'Clinics and wellness businesses often struggle with appointment coordination, service visibility, and patient communication workflows.',
    solution:
      'Develop accessible websites and digital systems for bookings, information sharing, and operational coordination.',
    tech: 'Responsive websites, appointment/request forms, dashboards, and communication integrations',
  },
  {
    title: 'Real Estate',
    icon: HiOutlineBuildingOffice2,
    challenge:
      'Showcasing listings, capturing qualified leads, and responding quickly to buyer or tenant interest can be difficult with manual processes.',
    solution:
      'Design property-focused websites and lead systems that present listings clearly and simplify inquiry follow-up.',
    tech: 'Listing websites, lead capture flows, CRM integrations, and automation tools',
  },
  {
    title: 'Logistics',
    icon: HiOutlineTruck,
    challenge:
      'Coordinating requests, tracking operational updates, and keeping teams aligned can create delays when information is scattered.',
    solution:
      'Implement digital dashboards and workflow tools that improve visibility, coordination, and status communication.',
    tech: 'Operations dashboards, tracking interfaces, APIs, and workflow automation',
  },
  {
    title: 'Professional Services',
    icon: HiOutlineBriefcase,
    challenge:
      'Service businesses need to communicate expertise, build trust, and convert website visitors into qualified consultations.',
    solution:
      'Deliver professional websites and client systems that clarify offerings, capture leads, and support ongoing client interactions.',
    tech: 'Business websites, landing pages, CRM systems, and scheduling/contact integrations',
  },
];

const IndustriesWeHelp = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--color-background)] py-20 sm:py-24 lg:py-28 ">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/8 blur-3xl " />
        <div className="absolute bottom-0 right-[-10%] h-72 w-96 rounded-full bg-blue-500/8 blur-3xl " />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary ">Industries we help</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl lg:leading-[1.05]">
            Digital Solutions for Businesses Moving Forward.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
            Practical digital products and systems tailored to common industry workflows, customer needs, and growth goals.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.article
                key={industry.title}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[var(--shadow-glow-primary)]  "
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(420px circle at 10% 0%, rgba(37,99,235,0.12), transparent 45%), radial-gradient(360px circle at 100% 100%, rgba(59,130,246,0.08), transparent 45%)',
                  }}
                />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary   ">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-primary)]">{industry.title}</h3>
                  </div>

                  <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Common challenge</dt>
                      <dd className="mt-1.5 text-[var(--color-text-secondary)]">{industry.challenge}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Possible solution</dt>
                      <dd className="mt-1.5 text-[var(--color-text-secondary)]">{industry.solution}</dd>
                    </div>
                    <div className="mt-auto pt-1">
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Relevant technology / system</dt>
                      <dd className="mt-1.5 font-medium text-[var(--color-text-primary)]">{industry.tech}</dd>
                    </div>
                  </dl>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeHelp;
