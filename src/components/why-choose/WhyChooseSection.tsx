'use client';

import WhyFeatureCard from './WhyFeatureCard';
import WhyProcessTimeline from './WhyProcessTimeline';
import BenefitsChecklist from './BenefitsChecklist';
import Link from 'next/link';
import { HiOutlineStar, HiOutlineArrowLongRight } from 'react-icons/hi2';
import Reveal from '@/components/common/Reveal';
import { features } from './whyChooseData';

const WhyChooseSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-16 sm:py-20">
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
        <div className="flex flex-col gap-12 sm:gap-16">
          {/* ── Section Header ── */}
          <Reveal className="mx-auto max-w-2xl text-center">
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
          </Reveal>

          {/* ── Features Grid ── */}
          <div className="space-y-4">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.06}>
                <WhyFeatureCard feature={feature} index={i} />
              </Reveal>
            ))}
          </div>

          {/* ── Process Timeline ── */}
          <div>
            <Reveal>
              <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-zinc-400">
                How We Work
              </h3>
            </Reveal>
            <WhyProcessTimeline />
          </div>

          {/* ── Achievements + Benefits ── */}
          <div className="grid items-stretch gap-8 lg:grid-cols-5 lg:gap-12">
            <Reveal className="lg:col-span-3">
              <div className="flex h-full flex-col">
                <div className="group relative flex-1 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-accent p-8 shadow-lg shadow-primary/20 sm:p-10">
                  <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                    <div className="animate-glow-pulse absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-3xl" />
                    <div
                      className="animate-glow-pulse absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/10 blur-3xl"
                      style={{ animationDelay: '1.5s' }}
                    />
                    <div
                      className="absolute inset-0 opacity-[0.08]"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 25px 25px, #ffffff 1px, transparent 0)',
                        backgroundSize: '30px 30px',
                      }}
                    />
                  </div>
                  <div className="relative flex h-full flex-col items-start justify-center">
                    <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Have a project in mind?
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                      Tell us about your goals — get a free consultation and a
                      transparent quote within 24 hours. No pressure, no
                      obligations.
                    </p>
                    <Link
                      href="/contact"
                      prefetch={false}
                      className="btn-shine group/btn relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      <span className="relative z-10">Get Free Quote</span>
                      <HiOutlineArrowLongRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" aria-hidden="true" />
                      <span
                        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/15 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="lg:col-span-2">
              <BenefitsChecklist />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
