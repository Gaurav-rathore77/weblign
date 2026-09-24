import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HiOutlineArrowLeft, HiOutlineArrowLongRight, HiOutlineCheck, HiOutlineSquares2X2 } from 'react-icons/hi2';
import { getServiceDetail, getServiceDetails } from '@/lib/site-content';
import { serviceIcons } from '@/components/services/Icons';
import { siteUrl } from '@/constants';

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

  return {
    title: `${service.title} Services`,
    description: service.description,
    openGraph: {
      title: `${service.title} — Weblign`,
      description: service.description,
      url: `${siteUrl}${serviceHref(service.id)}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceDetail(slug);
  if (!service) notFound();

  const allServices = await getServiceDetails();
  const relatedServices = allServices.filter((item) => item.id !== service.id).slice(0, 3);
  const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? HiOutlineSquares2X2;

  return (
    <div className="bg-white dark:bg-[#09090b]">
      <section className="border-b border-zinc-100 py-8 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-primary dark:text-zinc-400">
            <HiOutlineArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to all services
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-20">
          <div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
              <Icon className="h-8 w-8" aria-hidden="true" />
            </div>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Weblign service</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">{service.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">{service.longDescription}</p>

            <div className="mt-10 border-t border-zinc-100 pt-8 dark:border-zinc-800">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">What you get</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 rounded-xl border border-zinc-100 bg-zinc-50/60 p-4 text-sm leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><HiOutlineCheck className="h-3.5 w-3.5" aria-hidden="true" /></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {service.technologies.length > 0 && (
              <div className="mt-10">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Technologies we use</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">{technology}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-primary-dark">
                Start a conversation <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 dark:border-zinc-700 dark:text-zinc-200">Explore other services</Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-primary/15 bg-primary/[0.04] p-6 sm:p-8 lg:sticky lg:top-28">
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">Need this service?</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">Tell us about your goals and we will create a practical plan for your project.</p>
            <Link href="/contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark">Get a free quote <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" /></Link>
          </aside>
        </div>

        {relatedServices.length > 0 && (
          <div className="mt-20 border-t border-zinc-100 pt-10 dark:border-zinc-800">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Explore more services</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {relatedServices.map((related) => (
                <Link key={related.id} href={serviceHref(related.id)} className="group rounded-2xl border border-zinc-100 p-5 transition hover:-translate-y-1 hover:border-primary/30 dark:border-zinc-800">
                  <h3 className="font-semibold text-zinc-900 group-hover:text-primary dark:text-white">{related.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{related.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">View service <HiOutlineArrowLongRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
