import {
  HiOutlineStar,
  HiOutlineHeart,
  HiOutlineBriefcase,
  HiOutlineTrophy,
} from 'react-icons/hi2';

import TrustCard from './TrustCard';
import ProjectSlider from './ProjectSlider';

const cards = [
  {
    icon: <HiOutlineStar className="h-5 w-5" />,
    value: '5.0/5',
    label: 'Average Rating',
    description: 'Based on early client feedback across platforms.',
  },
  {
    icon: <HiOutlineHeart className="h-5 w-5" />,
    value: '100%',
    label: 'Client Satisfaction',
    description: 'Every client says they would recommend us to others.',
  },
  {
    icon: <HiOutlineBriefcase className="h-5 w-5" />,
    value: '50+',
    label: 'Projects Delivered',
    description: 'Delivered on time and within budget since day one.',
  },
  {
    icon: <HiOutlineTrophy className="h-5 w-5" />,
    value: '5+',
    label: 'Years Experience',
    description: 'Building digital products that make an impact.',
  },
];

const TrustedSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-20 sm:py-24">
      {/* Divider */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800"
        aria-hidden="true"
      />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_10%,rgba(37,99,235,0.05),transparent_28%),radial-gradient(circle_at_75%_90%,rgba(56,189,248,0.05),transparent_25%)] dark:opacity-80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16">
          {/* ── Section Header ── */}
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50/60 px-4 py-1.5 text-sm font-medium text-amber-700 dark:border-amber-700/40 dark:bg-amber-900/30 dark:text-amber-300">
              <HiOutlineStar className="h-4 w-4 text-amber-500 dark:text-amber-400" aria-hidden="true" />
              Trusted Worldwide
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Trusted by startups, growing businesses{' '}
              <span className="text-zinc-500 dark:text-zinc-400">and enterprise teams.</span>
            </h2>

            {/* Description */}
            <p className="max-w-xl text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
              From early-stage founders to established businesses, teams around
              the world trust us to deliver high-quality digital solutions that
              drive measurable results.
            </p>
          </div>

          {/* ── Project Slider ── */}
          <div className="w-full">
            <ProjectSlider />
          </div>

          {/* ── Trust Metrics ── */}
          <div className="w-full">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {cards.map((card, i) => (
                <TrustCard key={card.label} {...card} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
