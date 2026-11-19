'use client';

import Link from 'next/link';
import {
  HiOutlineArrowLongRight,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheckCircle,
  HiOutlineChartBarSquare,
  HiOutlineCloud,
  HiOutlineCommandLine,
  HiOutlineCpuChip,
  HiOutlineDevicePhoneMobile,
  HiOutlineGlobeAlt,
  HiOutlinePaintBrush,
  HiOutlineShoppingCart,
  HiOutlineSquares2X2,
} from 'react-icons/hi2';
import type { ElementType } from 'react';
import Reveal from '@/components/common/Reveal';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';
import {
  serviceDetails as fallbackServiceDetails,
  type ServiceDetail,
} from './servicesData';

const iconComponents: Record<string, ElementType> = {
  HiOutlineGlobeAlt,
  HiOutlineDevicePhoneMobile,
  HiOutlinePaintBrush,
  HiOutlineShoppingCart,
  HiOutlineCloud,
  HiOutlineCpuChip,
  HiOutlineChartBarSquare,
  HiOutlineCommandLine,
  HiOutlineSquares2X2,
};

function SvcIcon({ name, className }: { name: string; className?: string }) {
  const Comp = iconComponents[name] ?? HiOutlineSquares2X2;
  return <Comp className={className} aria-hidden="true" />;
}

const ServicesGrid = ({
  serviceDetails = fallbackServiceDetails,
}: {
  serviceDetails?: ServiceDetail[];
}) => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 ">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Service experiences</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl ">
            Detailed solutions for different business needs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 ">
            Explore each service to see who it’s for, what problems it solves,
            what we deliver, process, pricing factors, and FAQs.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {serviceDetails.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.04}>
              <article className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-zinc-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7  ">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                    <SvcIcon name={service.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-primary">{service.title}</p>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight text-zinc-950 ">
                      {service.heroHeadline}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-base leading-relaxed text-zinc-600 ">
                  {service.description}
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 ">
                      Best for
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {(service.whoNeeds || []).slice(0, 2).map((item) => (
                        <li key={item} className="text-sm leading-relaxed text-zinc-700 ">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 ">
                      Key outcomes
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {(service.benefits || service.features || []).slice(0, 2).map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-zinc-700 ">
                          <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {service.relatedServiceIds?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.relatedServiceIds.map((id) => {
                      const related = serviceDetails.find((s) => s.id === id);
                      if (!related) return null;
                      return (
                        <Link
                          key={id}
                          href={`/services/${id}`}
                          prefetch={false}
                          className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 transition hover:border-primary/30 hover:text-primary   "
                        >
                          {related.title}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}

                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-zinc-200 pt-5 ">
                  <Link
                    href={`/services/${service.id}`}
                    prefetch={false}
                    data-track-event="service_cta_click"
                    data-track-label={service.title}
                    data-track-location="services_grid"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Explore service
                    <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href={`/contact?plan=${encodeURIComponent(service.title)}`}
                    prefetch={false}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary    "
                  >
                    Get Free Consultation
                  </Link>
                  <a
                    href={getWhatsAppUrlFor('general', service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track-event="whatsapp_click"
                    data-track-label={service.title}
                    data-track-location="services_grid"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 "
                  >
                    <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
                    Chat on WhatsApp
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
