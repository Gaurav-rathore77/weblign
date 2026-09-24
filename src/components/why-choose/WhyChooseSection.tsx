import WhyFeatureCard from './WhyFeatureCard';
import WhyProcessTimeline from './WhyProcessTimeline';
import AchievementCard from './AchievementCard';
import BenefitsChecklist from './BenefitsChecklist';
import { HiOutlineStar } from 'react-icons/hi2';
import { features } from './whyChooseData';

const WhyChooseSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-20 sm:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_35%,rgba(37,99,235,0.04),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(56,189,248,0.04),transparent_30%)]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #2563EB 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-20 sm:gap-24">
          {/* ── Section Header ── */}
          <div className="mx-auto max-w-2xl text-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
                <HiOutlineStar className="h-4 w-4" aria-hidden="true" />
                Why Choose Us
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Why Businesses Trust Us To{' '}
              <span className="text-zinc-500">Build Their Digital Future</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg">
              We combine technical excellence with transparent communication to
              deliver digital products that exceed expectations. Every
              partnership is built on trust, quality, and a shared commitment
              to your success.
            </p>
          </div>

          {/* ── Features Grid ── */}
          <div className="space-y-4">
            {features.map((feature, i) => (
              <WhyFeatureCard key={feature.title} feature={feature} index={i} />
            ))}
          </div>

          {/* ── Process Timeline ── */}
          <div>
            <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-zinc-400">
              How We Work
            </h3>
            <WhyProcessTimeline />
          </div>

          {/* ── Achievements + Benefits ── */}
          <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <AchievementCard />
            </div>
            <div className="lg:col-span-2">
              <BenefitsChecklist />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
