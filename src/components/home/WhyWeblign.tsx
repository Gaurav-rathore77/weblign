'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCpuChip,
  HiOutlineSquare3Stack3D,
  HiOutlineCodeBracket,
  HiOutlineLifebuoy,
  HiOutlineCheckCircle,
} from 'react-icons/hi2';
import type { IconType } from 'react-icons';

type Highlight = {
  title: string;
  description: string;
  icon: IconType;
  points: string[];
  visual: React.ReactNode;
};

function VisualCard({ title, lines }: { title: string; lines: string[] }) {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B1222] p-4 shadow-2xl sm:p-5">
      <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-300">{title}</p>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-blue-400/70" />
          <span className="h-2 w-2 rounded-full bg-blue-400/70" />
        </div>
      </div>
      <div className="space-y-2.5">
        {lines.map((line, i) => (
          <motion.div
            key={line}
            initial={reduceMotion ? false : { opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-300" aria-hidden="true" />
            <span className="text-sm text-zinc-200">{line}</span>
          </motion.div>
        ))}
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
    </div>
  );
}

const highlights: Highlight[] = [
  {
    title: 'Solutions tailored to requirements',
    description:
      'We shape products around your goals, workflows, and users—so the final solution fits how your business actually operates.',
    icon: HiOutlineAdjustmentsHorizontal,
    points: ['Requirement-driven planning', 'Custom workflows and features', 'Focused on practical outcomes'],
    visual: <VisualCard title="Tailored scope" lines={['Business goals mapped to features', 'User journeys defined clearly', 'Priorities aligned before build']} />,
  },
  {
    title: 'Transparent project communication',
    description:
      'Clear updates, shared expectations, and collaborative decisions help keep projects aligned from discovery through delivery.',
    icon: HiOutlineChatBubbleLeftRight,
    points: ['Clear milestones and updates', 'Collaborative feedback cycles', 'Honest scope and timeline discussions'],
    visual: <VisualCard title="Communication flow" lines={['Regular progress updates', 'Shared decisions and feedback', 'Clear next steps at each stage']} />,
  },
  {
    title: 'Modern technology choices',
    description:
      'We select proven, modern tools that suit the product and team needs—balancing performance, maintainability, and development speed.',
    icon: HiOutlineCpuChip,
    points: ['Fit-for-purpose tech stack', 'Reliable modern frameworks', 'Maintainable implementation'],
    visual: <VisualCard title="Technology stack" lines={['Modern frontend & backend tools', 'Integration-ready architecture', 'Performance-conscious choices']} />,
  },
  {
    title: 'Scalable architecture',
    description:
      'We design foundations that can grow with your business, making it easier to add features, users, and integrations over time.',
    icon: HiOutlineSquare3Stack3D,
    points: ['Structured, extensible systems', 'Ready for future enhancements', 'Integration-friendly foundations'],
    visual: <VisualCard title="Scalable foundation" lines={['Modular components and services', 'Room for new features', 'Designed for long-term growth']} />,
  },
  {
    title: 'Maintainable code',
    description:
      'Clean, organized code and thoughtful implementation practices make ongoing updates, fixes, and improvements more efficient.',
    icon: HiOutlineCodeBracket,
    points: ['Readable, organized codebase', 'Consistent implementation patterns', 'Easier updates and handover'],
    visual: <VisualCard title="Code quality" lines={['Clear structure and conventions', 'Reusable components and logic', 'Simpler maintenance over time']} />,
  },
  {
    title: 'Practical post-launch support',
    description:
      'After launch, we can provide agreed support for refinements, fixes, and improvements based on your evolving needs.',
    icon: HiOutlineLifebuoy,
    points: ['Agreed post-launch assistance', 'Refinements and fixes', 'Support for ongoing improvements'],
    visual: <VisualCard title="Post-launch care" lines={['Issue fixes and refinements', 'Iterative improvements', 'Support aligned to agreed scope']} />,
  },
];

const WhyWeblign = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#070A12] py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-[-10%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300/90">Why Weblign</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.05]">
            Built Around Your Business. Not a Generic Template.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            A thoughtful approach to design, engineering, and collaboration—focused on solutions that are clear, scalable, and maintainable.
          </p>
        </motion.div>

        <div className="mt-14 space-y-8 sm:space-y-10 lg:mt-16 lg:space-y-14">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const reverse = index % 2 === 1;
            return (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`grid items-center gap-6 lg:grid-cols-2 lg:gap-10 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-zinc-300 sm:text-lg">{item.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-200 sm:text-base">
                        <HiOutlineCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-3 -z-10 rounded-[1.75rem] bg-gradient-to-br from-blue-500/12 via-transparent to-blue-500/12 blur-xl"
                  />
                  {item.visual}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWeblign;
