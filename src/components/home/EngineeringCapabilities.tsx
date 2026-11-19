'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  HiOutlineCubeTransparent,
  HiOutlinePaintBrush,
  HiOutlineCodeBracketSquare,
  HiOutlineArrowsRightLeft,
  HiOutlineCircleStack,
  HiOutlineCloudArrowUp,
  HiOutlineBolt,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2';

const capabilities = [
  {
    title: 'Product Engineering',
    description:
      'Turn ideas into reliable digital products with clear planning, scalable architecture, and features built around real business workflows.',
    icon: HiOutlineCubeTransparent,
  },
  {
    title: 'UI/UX Design',
    description:
      'Create intuitive, conversion-focused interfaces that help users understand quickly, navigate confidently, and complete key actions.',
    icon: HiOutlinePaintBrush,
  },
  {
    title: 'Full-Stack Development',
    description:
      'Deliver cohesive web experiences from frontend to backend, so your product looks polished, performs well, and works as one system.',
    icon: HiOutlineCodeBracketSquare,
  },
  {
    title: 'API Development & Integrations',
    description:
      'Connect your website, apps, CRM, payments, and third-party tools so data flows smoothly and manual handoffs are reduced.',
    icon: HiOutlineArrowsRightLeft,
  },
  {
    title: 'Database Architecture',
    description:
      'Structure and manage business data for accuracy, speed, and growth—making reporting, operations, and future features easier to support.',
    icon: HiOutlineCircleStack,
  },
  {
    title: 'Cloud Deployment',
    description:
      'Launch products on dependable cloud infrastructure with practical deployment workflows that support stability, security, and scale.',
    icon: HiOutlineCloudArrowUp,
  },
  {
    title: 'Business Automation',
    description:
      'Automate repetitive tasks and process steps to save time, improve consistency, and help teams focus on higher-value work.',
    icon: HiOutlineBolt,
  },
  {
    title: 'Performance Optimization',
    description:
      'Improve loading speed, responsiveness, and technical efficiency so customers get a smoother experience across devices.',
    icon: HiOutlineRocketLaunch,
  },
];

const EngineeringCapabilities = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#070A12] py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300/90">Engineering capabilities</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.05]">
            Technology Is Our Tool. Your Business Growth Is the Goal.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            Practical engineering capabilities that help businesses launch faster, operate smarter, and deliver better digital experiences.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-4">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,25,43,0.86),rgba(11,16,32,0.94))] p-5 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:shadow-[0_24px_60px_-30px_rgba(37,99,235,0.35)] sm:p-6"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(420px circle at 15% 0%, rgba(37,99,235,0.14), transparent 45%), radial-gradient(360px circle at 100% 100%, rgba(59,130,246,0.1), transparent 45%)',
                  }}
                />
                <div className="relative z-10">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngineeringCapabilities;
