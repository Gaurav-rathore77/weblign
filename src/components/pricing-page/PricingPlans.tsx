import Link from 'next/link';
import clsx from 'clsx';
import {
  HiCheck,
  HiOutlineXMark,
  HiOutlineStar,
  HiOutlineRocketLaunch,
  HiOutlineBriefcase,
  HiOutlineSparkles,
  HiOutlineArrowLongRight,
  HiOutlineInformationCircle,
  HiOutlineCpuChip,
  HiOutlineShoppingCart,
  HiOutlineChartBarSquare,
  HiOutlineDevicePhoneMobile,
  HiOutlineBolt,
  HiOutlineChatBubbleLeftRight,
} from 'react-icons/hi2';
import Reveal from '@/components/common/Reveal';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';
import { pricingPackages, customSolutions, comparisonRows } from './pricingData';

const packageIcons = {
  STARTER: HiOutlineRocketLaunch,
  BUSINESS: HiOutlineBriefcase,
  PREMIUM: HiOutlineSparkles,
} as const;

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center text-emerald-600">
        <HiCheck className="h-5 w-5" aria-hidden="true" />
        <span className="sr-only">Included</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center text-zinc-400">
        <HiOutlineXMark className="h-5 w-5" aria-hidden="true" />
        <span className="sr-only">Not included</span>
      </span>
    );
  }
  return <span className="text-sm text-zinc-700 ">{value}</span>;
}

const PricingPlans = () => {
  return (
    <div className="space-y-16 sm:space-y-20">
      {/* Pricing cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        {pricingPackages.map((pkg, i) => {
          const Icon = packageIcons[pkg.name as keyof typeof packageIcons] ?? HiOutlineStar;
          return (
            <Reveal key={pkg.id} delay={i * 0.05} className={clsx('h-full', pkg.popular && 'lg:-mt-2')}>
              <article
                className={clsx(
                  'relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm sm:p-7 ',
                  pkg.popular
                    ? 'border-primary/40 shadow-lg shadow-primary/10 ring-1 ring-primary/10'
                    : 'border-zinc-200 ',
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-semibold text-white shadow-sm">
                    Most popular choice
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      {pkg.name}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 ">
                      {pkg.subtitle}
                    </p>
                  </div>
                  <span
                    className={clsx(
                      'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl',
                      pkg.popular
                        ? 'bg-gradient-to-br from-primary to-accent text-white'
                        : 'bg-primary/10 text-primary',
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-sm font-medium text-zinc-500">Starting</span>
                  <span className="text-3xl font-bold tracking-tight text-zinc-950 ">
                    ₹{pkg.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm font-medium text-zinc-500">+</span>
                </div>

                <div className="mt-6 space-y-5">
                  <section>
                    <h3 className="text-sm font-semibold text-zinc-950 ">Ideal customer</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 ">
                      {pkg.idealFor}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-sm font-semibold text-zinc-950 ">Clear deliverables</h3>
                    <ul className="mt-2 space-y-2">
                      {pkg.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-700 ">
                          <HiCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-sm font-semibold text-zinc-950 ">Included features</h3>
                    <ul className="mt-2 space-y-2">
                      {pkg.features.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-700 ">
                          <HiCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-sm font-semibold text-zinc-950 ">Support details</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 ">{pkg.support}</p>
                  </section>

                  <section>
                    <h3 className="text-sm font-semibold text-zinc-950 ">Transparent limitations</h3>
                    <ul className="mt-2 space-y-2">
                      {pkg.limitations.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-600 ">
                          <HiOutlineInformationCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className="mt-7 mt-auto space-y-3 pt-2">
                  <Link
                    href={`/contact?plan=${encodeURIComponent(pkg.name)}`}
                    data-track-event="pricing_cta_click"
                    data-track-label={pkg.name}
                    data-track-location="pricing_page"
                    className={clsx(
                      'inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                      pkg.popular
                        ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg'
                        : 'border border-zinc-300 bg-white text-zinc-800 hover:border-primary/30 hover:text-primary   ',
                    )}
                  >
                    {pkg.cta}
                    <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <a
                    href={getWhatsAppUrlFor('pricing', `${pkg.name} package`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track-event="whatsapp_click"
                    data-track-label={`${pkg.name} package`}
                    data-track-location="pricing_page"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary    "
                  >
                    <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
                    Chat on WhatsApp
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Pricing note */}
      <Reveal>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5 sm:p-6  ">
          <p className="text-sm leading-relaxed text-zinc-700 ">
            <span className="font-semibold text-zinc-950 ">Important:</span> All package prices are
            starting points. Final pricing depends on scope and requirements (such as pages, features, integrations,
            content readiness, and timeline). We do not include hidden costs—any third-party expenses or out-of-scope
            additions are discussed and approved before implementation.
          </p>
          <p className="mt-3 text-sm font-medium text-primary">
            Not sure which package fits your business? Let&apos;s discuss your requirements.
          </p>
        </div>
      </Reveal>

      {/* Comparison table */}
      <Reveal>
        <section aria-labelledby="pricing-comparison-heading" className="space-y-4">
          <div className="max-w-3xl">
            <h2 id="pricing-comparison-heading" className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl ">
              Package comparison
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 ">
              Compare the three website packages at a glance. Custom solutions are scoped separately based on your needs.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-sm  ">
            <table className="min-w-[720px] w-full text-left text-sm">
              <thead className="bg-zinc-50 ">
                <tr>
                  <th scope="col" className="px-4 py-4 font-semibold text-zinc-900 sm:px-6 ">Feature / detail</th>
                  <th scope="col" className="px-4 py-4 font-semibold text-zinc-900 sm:px-6 ">STARTER</th>
                  <th scope="col" className="px-4 py-4 font-semibold text-primary sm:px-6">BUSINESS</th>
                  <th scope="col" className="px-4 py-4 font-semibold text-zinc-900 sm:px-6 ">PREMIUM</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={row.label} className={idx % 2 === 0 ? 'bg-white ' : 'bg-zinc-50/40 '}>
                    <th scope="row" className="px-4 py-4 font-medium text-zinc-800 sm:px-6 ">
                      {row.label}
                    </th>
                    <td className="px-4 py-4 sm:px-6"><CellValue value={row.starter} /></td>
                    <td className="px-4 py-4 sm:px-6"><CellValue value={row.business} /></td>
                    <td className="px-4 py-4 sm:px-6"><CellValue value={row.premium} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs leading-relaxed text-zinc-500 ">
            “As scoped” means the capability can be included based on agreed requirements and may affect final pricing and timeline.
          </p>
        </section>
      </Reveal>

      {/* Custom solutions */}
      <Reveal>
        <section
          aria-labelledby="custom-solutions-heading"
          className="overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 text-white sm:p-8 lg:p-10 "
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-200">Custom scope</p>
              <h2 id="custom-solutions-heading" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                {customSolutions.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                {customSolutions.description}
              </p>

              <div className="mt-6">
                <h3 className="text-sm font-semibold text-white">Best for</h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {[
                    { label: 'CRM development', Icon: HiOutlineBriefcase },
                    { label: 'Admin dashboards', Icon: HiOutlineChartBarSquare },
                    { label: 'E-commerce platforms', Icon: HiOutlineShoppingCart },
                    { label: 'Mobile applications', Icon: HiOutlineDevicePhoneMobile },
                    { label: 'Custom business automation', Icon: HiOutlineBolt },
                  ].map(({ label, Icon }) => (
                    <li key={label} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-zinc-100">
                      <Icon className="h-4.5 w-4.5 shrink-0 text-primary-200" aria-hidden="true" />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-white">What to expect</h3>
              <ul className="mt-3 space-y-2.5">
                {customSolutions.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-200">
                    <HiOutlineCpuChip className="mt-0.5 h-4 w-4 shrink-0 text-primary-200" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-zinc-400">{customSolutions.note}</p>
              <div className="mt-6 space-y-3">
                <Link
                  href="/contact?plan=Custom%20Solution"
                  data-track-event="pricing_cta_click"
                  data-track-label="custom_solution"
                  data-track-location="pricing_page"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {customSolutions.cta}
                  <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={getWhatsAppUrlFor('custom')}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event="whatsapp_click"
                  data-track-label="custom_solution"
                  data-track-location="pricing_page"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default PricingPlans;
