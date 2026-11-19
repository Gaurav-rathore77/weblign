import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  HiOutlineArrowLeft,
  HiOutlineArrowLongRight,
  HiOutlineCheck,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCurrencyRupee,
  HiOutlineQuestionMarkCircle,
  HiOutlineSquares2X2,
  HiOutlineWrenchScrewdriver,
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentCheck,
  HiOutlineUserGroup,
} from 'react-icons/hi2';
import Reveal from '@/components/common/Reveal';
import { serviceIcons } from '@/components/services/Icons';
import { getServiceDetail, getServiceDetails } from '@/lib/site-content';
import { siteUrl } from '@/constants';
import { getWhatsAppUrlFor, type WhatsAppIntent } from '@/lib/whatsapp';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: Promise<{ slug: string }>;
};

function serviceHref(id: string): string {
  return `/services/${id}`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceDetail(slug);
  if (!service) return { title: 'Service not found' };

  const canonical = `${siteUrl}${serviceHref(service.id)}`;
  const image = service.visuals?.[0]?.src || '/opengraph-image';

  return {
    title: `${service.title} Services`,
    description: service.description,
    alternates: { canonical },
    openGraph: {
      title: `${service.heroHeadline} | Weblign`,
      description: service.description,
      url: canonical,
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: service.visuals?.[0]?.alt || service.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.heroHeadline} | Weblign`,
      description: service.description,
      images: [image],
    },
  };
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl ">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-zinc-600 ">{description}</p>
      ) : null}
    </div>
  );
}

function getServiceWhatsAppIntent(serviceId: string): WhatsAppIntent {
  if (serviceId.includes('ecommerce') || serviceId.includes('e-commerce')) return 'ecommerce';
  if (serviceId.includes('crm') || serviceId.includes('dashboard')) return 'crm';
  if (serviceId.includes('mobile')) return 'mobile';
  if (serviceId.includes('custom') || serviceId.includes('automation') || serviceId.includes('ai')) return 'custom';
  if (serviceId.includes('website') || serviceId.includes('web-development')) return 'website';
  return 'consultation';
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceDetail(slug);
  if (!service) notFound();

  const allServices = await getServiceDetails();
  const relatedServices =
    service.relatedServiceIds?.length
      ? service.relatedServiceIds
          .map((id) => allServices.find((item) => item.id === id))
          .filter((item): item is NonNullable<typeof item> => Boolean(item))
      : allServices.filter((item) => item.id !== service.id).slice(0, 3);

  const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? HiOutlineSquares2X2;
  const waHref = getWhatsAppUrlFor(getServiceWhatsAppIntent(service.id), service.title);
  const waConsultHref = getWhatsAppUrlFor(getServiceWhatsAppIntent(service.id), service.title);

  return (
    <div className="bg-white ">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-100 bg-gradient-to-b from-zinc-50/70 via-white to-white py-12 sm:py-16    ">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-primary "
          >
            <HiOutlineArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to all services
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <Reveal>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/20">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {service.title}
              </p>
              <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-5xl ">
                {service.heroHeadline}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600 ">
                {service.longDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/contact?plan=${encodeURIComponent(service.title)}`}
                  data-track-event="service_cta_click"
                  data-track-label={service.title}
                  data-track-location="service_detail_hero"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Get Free Consultation
                  <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event="whatsapp_click"
                  data-track-label={service.title}
                  data-track-location="service_detail_hero"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary    "
                >
                  <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-4 sm:grid-cols-2">
                {(service.visuals?.length ? service.visuals : []).map((visual, idx) => (
                  <div
                    key={visual.src}
                    className={`overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm   ${idx === 0 ? 'sm:col-span-2' : ''}`}
                  >
                    <div className={`relative ${idx === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                      <Image
                        src={visual.src}
                        alt={visual.alt}
                        fill
                        sizes={idx === 0 ? '(min-width: 1024px) 40vw, 100vw' : '(min-width: 1024px) 20vw, 50vw'}
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="border-t border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700   ">
                      {visual.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Who needs + Benefits */}
        <section className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="h-full rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6 sm:p-8  ">
              <SectionTitle eyebrow="Who it’s for" title="Who needs this service?" />
              <ul className="mt-6 space-y-3">
                {service.whoNeeds.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700 ">
                    <HiOutlineUserGroup className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8  ">
              <SectionTitle eyebrow="Outcomes" title="Business benefits you can expect" />
              <ul className="mt-6 space-y-3">
                {service.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700 ">
                    <HiOutlineCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* Problems & Solutions */}
        <section>
          <Reveal>
            <SectionTitle
              eyebrow="From challenge to solution"
              title="Problems we solve — and how we solve them"
              description="A focused approach tailored to the real requirements of this service."
            />
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {service.problems.map((problem, i) => (
              <Reveal key={problem} delay={i * 0.04}>
                <div className="h-full overflow-hidden rounded-2xl border border-zinc-200 ">
                  <div className="flex items-start gap-3 bg-blue-50/70 p-5 ">
                    <HiOutlineWrenchScrewdriver className="mt-0.5 h-5 w-5 shrink-0 text-blue-700 " aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-800/80 ">Problem</p>
                      <p className="mt-1 text-sm font-medium text-zinc-900 ">{problem}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-5 ">
                    <HiOutlineLightBulb className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">Our solution</p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-700 ">{service.solutions[i] || service.solutions[0]}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Deliverables & Features */}
        <section className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8  ">
              <SectionTitle eyebrow="Deliverables" title="What exactly we will deliver" />
              <ul className="mt-6 space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-zinc-100 bg-zinc-50/60 p-4 text-sm leading-relaxed text-zinc-700   ">
                    <HiOutlineClipboardDocumentCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8  ">
              <SectionTitle eyebrow="Features" title="Key capabilities included" />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.features.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700 ">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <HiOutlineCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {service.technologies?.length ? (
                <div className="mt-8 border-t border-zinc-100 pt-6 ">
                  <p className="text-sm font-semibold text-zinc-900 ">Technologies & tools</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700   ">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>
        </section>

        {/* Development process */}
        <section>
          <Reveal>
            <SectionTitle
              eyebrow="Development process"
              title="How we deliver this service"
              description="A clear, collaborative process from discovery to launch and support."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {service.developmentProcess.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-zinc-200 bg-zinc-50/60 p-5  ">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Step {i + 1}</span>
                  <h3 className="mt-2 text-base font-semibold text-zinc-950 ">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 ">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Pricing factors & consultation */}
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8  ">
              <SectionTitle eyebrow="Project cost" title="What affects the project cost?" />
              <ul className="mt-6 space-y-3">
                {service.pricingFactors.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700 ">
                    <HiOutlineCurrencyRupee className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-zinc-500 ">
                We provide clear estimates after understanding your goals, scope, and priorities.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <aside className="h-full rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 sm:p-8 ">
              <h2 className="text-xl font-semibold text-zinc-950 ">How to get a consultation</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 ">
                Share your requirements, current challenges, and timeline. We’ll discuss the right approach, scope, and next steps for your {service.title.toLowerCase()} project.
              </p>
              <div className="mt-6 space-y-3">
                <Link
                  href={`/contact?plan=${encodeURIComponent(service.title)}`}
                  data-track-event="service_cta_click"
                  data-track-label={service.title}
                  data-track-location="service_detail_consultation"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  Discuss Your Project
                  <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={waConsultHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event="whatsapp_click"
                  data-track-label={service.title}
                  data-track-location="service_detail_consultation"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50    "
                >
                  <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-zinc-500 ">
                Prefer email? Reach us at <a href="mailto:info.weblign@gmail.com" className="font-medium text-primary hover:underline">info.weblign@gmail.com</a>.
              </p>
            </aside>
          </Reveal>
        </section>

        {/* FAQs */}
        {service.faqs?.length ? (
          <section>
            <Reveal>
              <SectionTitle eyebrow="FAQs" title={`Questions about ${service.title}`} />
            </Reveal>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {service.faqs.map((faq, i) => (
                <Reveal key={faq.question} delay={i * 0.04}>
                  <div className="h-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6  ">
                    <div className="flex items-start gap-3">
                      <HiOutlineQuestionMarkCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <div>
                        <h3 className="text-base font-semibold text-zinc-950 ">{faq.question}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-600 ">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        {/* Related services */}
        {relatedServices.length > 0 ? (
          <section className="border-t border-zinc-100 pt-12 ">
            <Reveal>
              <SectionTitle
                eyebrow="Related services"
                title="Explore related services"
                description="Services that often complement this solution."
              />
            </Reveal>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedServices.map((related) => {
                const RelatedIcon = serviceIcons[related.icon as keyof typeof serviceIcons] ?? HiOutlineSquares2X2;
                return (
                  <Reveal key={related.id}>
                    <Link
                      href={serviceHref(related.id)}
                      className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-md  "
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <RelatedIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-lg font-semibold text-zinc-950 group-hover:text-primary ">
                        {related.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 ">
                        {related.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        View service <HiOutlineArrowLongRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}