import Link from 'next/link';
import clsx from 'clsx';
import type { ComponentType, SVGProps } from 'react';
import {
  HiCheck,
  HiOutlineMinus,
  HiOutlineStar,
  HiOutlineDevicePhoneMobile,
  HiOutlineBriefcase,
  HiOutlineSparkles,
  HiOutlineCodeBracket,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineCog6Tooth,
  HiOutlineChatBubbleLeftRight,
  HiOutlineBolt,
} from 'react-icons/hi2';
import Reveal from '@/components/common/Reveal';
import { pricingTiers } from './pricingData';

type TierIcon = ComponentType<SVGProps<SVGSVGElement>>;

const tierIcons: Record<string, TierIcon> = {
  'Landing Page': HiOutlineDevicePhoneMobile,
  'Business Website': HiOutlineBriefcase,
  'Premium Business': HiOutlineSparkles,
  'Custom MERN Website': HiOutlineCodeBracket,
  'Admin Dashboard': HiOutlineAdjustmentsHorizontal,
  'Custom Web Application': HiOutlineCog6Tooth,
  'AI Chatbot': HiOutlineChatBubbleLeftRight,
  'Business Automation': HiOutlineBolt,
};

const PricingPlans = () => {
  return (
    <div>
      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pricingTiers.map((tier, i) => {
          const TierIcon = tierIcons[tier.name] ?? HiOutlineStar;

          return (
            <Reveal
              key={tier.name}
              delay={i * 0.06}
              className={clsx('h-full', tier.popular && 'lg:-mt-4 lg:mb-[-1rem]')}
            >
              <div className="group relative h-full transition-transform duration-300 hover:-translate-y-1.5">
                {/* Gradient border wrapper */}
                <div
                  className={clsx(
                    'relative h-full rounded-2xl p-px shadow-lg shadow-zinc-900/5 transition-shadow duration-500 group-hover:shadow-xl',
                    tier.popular
                      ? 'animate-gradient-border bg-gradient-to-b from-primary via-accent to-primary/30'
                      : 'bg-gradient-to-b from-primary/10 to-transparent',
                  )}
                >
                  {/* Card body */}
                  <div className="relative flex h-full flex-col rounded-[calc(1.5rem-1px)] bg-white p-6 sm:p-7">
                    {/* Hover glow */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-[calc(1.5rem-1px)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      <div className="animate-glow-pulse absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/[0.06] blur-2xl" />
                      <div
                        className="animate-glow-pulse absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-accent/[0.05] blur-2xl"
                        style={{ animationDelay: '1.5s' }}
                      />
                    </div>

                    {/* Most Popular badge */}
                    {tier.popular && (
                      <div className="absolute -top-px left-1/2 z-10 -translate-x-1/2 rounded-b-lg bg-gradient-to-r from-primary to-accent px-4 py-1 text-[11px] font-semibold text-white shadow-sm">
                        <HiOutlineStar className="mr-1 inline-block h-4 w-4" aria-hidden="true" />{' '}
                        Most Popular
                      </div>
                    )}

                    {/* Icon */}
                    <div
                      className={clsx(
                        'mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110',
                        tier.popular
                          ? 'bg-gradient-to-br from-primary to-accent text-white shadow-md shadow-primary/25'
                          : clsx('bg-gradient-to-br text-primary', tier.gradient),
                      )}
                    >
                      <TierIcon className="h-6 w-6" aria-hidden="true" />
                    </div>

                    {/* Plan name + description */}
                    <h3 className="text-lg font-semibold text-zinc-900">{tier.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                      {tier.description}
                    </p>

                    {/* Price */}
                    <div className="mt-5 flex items-baseline gap-1">
                      <span className="text-sm font-medium text-zinc-400">₹</span>
                      <span className="text-3xl font-bold tracking-tight text-zinc-900">
                        {tier.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-sm text-zinc-400">
                        {tier.priceLabel ? `+ (${tier.priceLabel})` : '+'}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="my-5 border-t border-zinc-100" />

                    {/* Features */}
                    <ul className="flex-1 space-y-2.5">
                      {tier.features.map((f) => (
                        <li key={f.text} className="flex items-start gap-2.5 text-sm">
                          <span
                            className={clsx(
                              'mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full',
                              f.included ? 'bg-primary/10 text-primary' : 'bg-zinc-100 text-zinc-400',
                            )}
                          >
                            {f.included ? (
                              <HiCheck className="h-3 w-3" aria-hidden="true" />
                            ) : (
                              <HiOutlineMinus className="h-3 w-3" aria-hidden="true" />
                            )}
                          </span>
                          <span className={f.included ? 'text-zinc-600' : 'text-zinc-400'}>
                            {f.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-auto pt-6">
                      <Link
                        href={`/contact?plan=${encodeURIComponent(tier.name)}`}
                        className={clsx(
                          'btn-shine group/btn relative block w-full overflow-hidden rounded-full px-6 py-3 text-center text-sm font-semibold shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                          tier.popular
                            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-primary/20'
                            : 'border border-zinc-200 bg-white text-zinc-700 hover:border-primary/30 hover:text-primary',
                        )}
                      >
                        <span className="relative z-10">{tier.cta}</span>
                        <span
                          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Footnote */}
      <Reveal delay={0.1}>
        <p className="mt-10 text-center text-sm text-zinc-500">
          All prices are in ₹ (INR). Need something different? Custom quotes
          available on request.
        </p>
      </Reveal>
    </div>
  );
};

export default PricingPlans;
