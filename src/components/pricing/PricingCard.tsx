'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import type { PricingPlan } from './pricingData';
import { HiCheck, HiOutlineStar } from 'react-icons/hi2';

interface PricingCardProps {
  plan: PricingPlan;
  yearly: boolean;
  index: number;
}

const PricingCard = ({ plan, yearly, index }: PricingCardProps) => {
  const isEnterprise = plan.id === 'enterprise';
  const price = isEnterprise ? null : yearly ? plan.yearlyPrice / 12 : plan.monthlyPrice;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      whileHover={{ y: -6 }}
      className={clsx(
        'group relative',
        plan.popular && 'lg:-mt-4 lg:mb-[-1rem]',
      )}
    >
      {/* Gradient border wrapper */}
      <div
        className={clsx(
          'relative rounded-2xl p-px shadow-lg shadow-zinc-900/5 transition-shadow duration-500 group-hover:shadow-xl',
          plan.popular
            ? 'bg-gradient-to-b from-primary via-accent to-primary/30'
            : 'bg-gradient-to-b from-primary/10 to-transparent',
        )}
      >
        {/* Card body */}
        <div
          className={clsx(
            'relative flex h-full flex-col rounded-[calc(1.5rem-1px)] p-6 transition-all duration-500 sm:p-7',
            plan.popular ? 'bg-white' : 'bg-white',
          )}
        >
          {/* Hover glow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[calc(1.5rem-1px)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/[0.04] blur-2xl" />
          </div>

          {/* Most Popular badge */}
          {plan.popular && (
            <div className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-lg bg-gradient-to-r from-primary to-accent px-4 py-1 text-[11px] font-semibold text-white shadow-sm">
              <HiOutlineStar className="mr-1 inline-block h-4 w-4" aria-hidden="true" /> Most Popular
            </div>
          )}

          {/* Icon */}
          <div
            className={clsx(
              'mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:text-white',
              plan.popular
                ? 'bg-primary text-white'
                : 'bg-primary/[0.06] text-primary group-hover:bg-primary',
            )}
          >
            {plan.icon}
          </div>

          {/* Plan name + description */}
          <h3 className="text-lg font-semibold text-zinc-900">{plan.name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-zinc-500">{plan.description}</p>

          {/* Price */}
          <div className="mt-5 flex items-baseline gap-1">
            {isEnterprise ? (
              <span className="text-3xl font-bold text-zinc-900">Custom</span>
            ) : (
              <>
                <span className="text-sm font-medium text-zinc-400">$</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={price}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="text-3xl font-bold tracking-tight text-zinc-900"
                  >
                    {price}
                  </motion.span>
                </AnimatePresence>
                <span className="text-sm text-zinc-400">/month</span>
              </>
            )}
          </div>

          {/* Divider */}
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-100" />
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-2.5">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-600">
                <span
                  className={clsx(
                    'mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full',
                    plan.popular
                      ? 'bg-primary/[0.08]'
                      : 'bg-zinc-100',
                  )}
                >
                  <HiCheck className={clsx('h-3 w-3', plan.popular ? 'text-primary' : 'text-zinc-500')} aria-hidden="true" />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Spacer */}
          <div className="mt-auto pt-6">
            {isEnterprise ? (
              <Link href={plan.ctaHref}>
                <button
                  type="button"
                  className="w-full rounded-full border-2 border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/[0.02] hover:text-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {plan.cta}
                </button>
              </Link>
            ) : (
              <Link href={plan.ctaHref}>
                <button
                  type="button"
                  className={clsx(
                    'w-full rounded-full px-6 py-3 text-sm font-semibold shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-primary/20'
                      : 'border border-zinc-200 bg-white text-zinc-700 hover:border-primary/30 hover:text-primary',
                  )}
                >
                  {plan.cta}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;
