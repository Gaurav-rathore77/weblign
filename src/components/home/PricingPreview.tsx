import Link from 'next/link';
import { HiCheck, HiOutlineChatBubbleLeftRight, HiOutlineSparkles } from 'react-icons/hi2';
import Reveal from '@/components/common/Reveal';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';

const packages = [
  {
    name: 'STARTER',
    price: '₹9,999+',
    subtitle: 'For businesses that need a professional online presence.',
    highlights: [
      'Single-page/compact website scope',
      'Responsive design and inquiry setup',
      'Basic on-page SEO foundations',
      '7 days post-launch support (minor fixes)',
    ],
    cta: 'Discuss This Package',
    popular: false,
  },
  {
    name: 'BUSINESS',
    price: '₹19,999+',
    subtitle: 'For growing businesses that need a complete website and stronger business presence.',
    highlights: [
      'Multi-page website (typically 5–7 pages)',
      'Service-focused structure and CTAs',
      'Social/map integration where relevant',
      '30 days post-launch support (minor fixes)',
    ],
    cta: 'Discuss This Package',
    popular: true,
  },
  {
    name: 'PREMIUM',
    price: '₹34,999+',
    subtitle: 'For businesses requiring advanced functionality, enhanced performance and scalability.',
    highlights: [
      'Advanced scope with performance focus',
      'Blog/CMS or admin features as scoped',
      'Advanced on-page SEO implementation',
      'Priority post-launch support window',
    ],
    cta: 'Discuss This Package',
    popular: false,
  },
];

const PricingPreview = () => {
  return (
    <section id="pricing-preview" className="scroll-mt-24 bg-zinc-50/60 py-20 sm:py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Pricing preview</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl ">
            Clear starting packages, transparent scope
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600 ">
            Choose a package that fits your current needs. Final pricing depends on
            scope and requirements—no hidden costs, no unlimited-revision promises.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.05}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-6 sm:p-7 ${
                  pkg.popular
                    ? 'border-primary/30 bg-white shadow-lg shadow-primary/5 '
                    : 'border-zinc-200 bg-white shadow-sm  '
                }`}
              >
                {pkg.popular ? (
                  <span className="mb-4 inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Popular choice
                  </span>
                ) : null}
                <h3 className="text-xl font-semibold text-zinc-950 ">{pkg.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 ">{pkg.subtitle}</p>
                <div className="mt-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Starting</p>
                  <p className="text-3xl font-semibold tracking-tight text-zinc-950 ">{pkg.price}</p>
                </div>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {pkg.highlights.map((feature) => (
                    <li key={feature} className="group flex items-start gap-2.5 text-sm text-zinc-700 ">
                      <HiCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 space-y-2.5">
                  <Link
                    href={`/contact?plan=${encodeURIComponent(pkg.name)}`}
                    prefetch={false}
                    data-track-event="pricing_cta_click"
                    data-track-label={pkg.name}
                    data-track-location="home_pricing_preview"
                    className={`inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg'
                        : 'border border-zinc-300 text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50   '
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                  <a
                    href={getWhatsAppUrlFor('pricing', `${pkg.name} package`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track-event="whatsapp_click"
                    data-track-label={`${pkg.name} package`}
                    data-track-location="home_pricing_preview"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 px-5 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary   "
                  >
                    <HiOutlineChatBubbleLeftRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
                    Chat on WhatsApp
                  </a>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.15}>
            <article className="flex h-full flex-col rounded-2xl border border-dashed border-zinc-300 bg-white p-6 sm:p-7  ">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <HiOutlineSparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-zinc-950 ">CUSTOM SOLUTIONS</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 ">
                For CRM development, admin dashboards, e-commerce platforms, mobile
                applications, and custom business automation.
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {[
                  'Scoped to your workflows and integrations',
                  'Clear milestones and tailored estimate',
                  'Timeline and pricing based on requirements',
                  'No one-size-fits-all promises',
                ].map((item) => (
                  <li key={item} className="group flex items-start gap-2.5 text-sm text-zinc-700 ">
                    <HiCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 space-y-2.5">
                <Link
                  href="/contact?plan=Custom%20Solution"
                  prefetch={false}
                  data-track-event="pricing_cta_click"
                  data-track-label="custom_solution"
                  data-track-location="home_pricing_preview"
                  className="inline-flex w-full items-center justify-center rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary   "
                >
                  Get a Custom Quote
                </Link>
                <a
                  href={getWhatsAppUrlFor('custom')}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event="whatsapp_click"
                  data-track-label="custom_solution"
                  data-track-location="home_pricing_preview"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 px-5 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary   "
                >
                  <HiOutlineChatBubbleLeftRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 space-y-3 text-center">
            <p className="text-sm text-zinc-600 ">
              Not sure which package fits your business? Let&apos;s discuss your requirements.
            </p>
            <Link href="/pricing" prefetch={false} className="text-sm font-semibold text-primary hover:text-primary-dark">
              View full package comparison →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PricingPreview;
