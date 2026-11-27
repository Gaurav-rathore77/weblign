import type { Metadata } from 'next';
import Link from 'next/link';
import { HiOutlineArrowLongRight, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import PortfolioHero from '@/components/portfolio-page/PortfolioHero';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import FeaturedCaseStudy from '@/components/portfolio/FeaturedCaseStudy';
import ExternalProjectsShowcase from '@/components/portfolio/ExternalProjectsShowcase';
import { externalProjects } from '@/components/portfolio/externalProjects';
import { getProjects } from '@/lib/site-content';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';
import { siteUrl } from '@/constants';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies',
  description:
    "Explore Weblign's project portfolio and case studies with actual screenshots, technologies used, challenges, solutions, and key features.",
  keywords: [
    'Web Development Portfolio',
    'Project Case Studies',
    'Weblign Projects',
    'Custom Software Examples',
  ],
  openGraph: {
    title: 'Weblign Portfolio & Case Studies',
    description:
      'Actual project work with screenshots, technologies, challenges, solutions, and key features.',
    type: 'website',
    url: `${siteUrl}/portfolio`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Weblign Portfolio' }],
  },
  alternates: { canonical: `${siteUrl}/portfolio` },
};

export const dynamic = 'force-dynamic';

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <>
      <PortfolioHero />
      <section className="bg-zinc-50/50 pb-16 pt-10 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 ">Project portfolio</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 ">
              Each project includes category, screenshots, technologies, the problem addressed, solution approach,
              and key features based on existing project information.
            </p>
          </div>
          <PortfolioGrid projects={projects} />
        </div>
      </section>
      <section className="bg-white py-20 sm:py-28 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Case study</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 ">Project case study example</h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-600 ">
              A reusable case study format covering project overview, challenge, solution, features, technology, and screenshots.
            </p>
          </div>
          <FeaturedCaseStudy />
        </div>
      </section>

      <ExternalProjectsShowcase projects={externalProjects} />

      <section className="bg-zinc-50/60 py-16 sm:py-20 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm sm:p-12  ">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 ">
              Have a similar project in mind?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 ">
              Share your requirements and we&apos;ll discuss the right approach, scope, and next steps for your website, platform, or custom solution.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                data-track-event="service_cta_click"
                data-track-label="portfolio_page_cta"
                data-track-location="portfolio_page"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Discuss Your Project
                <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={getWhatsAppUrlFor('consultation')}
                target="_blank"
                rel="noopener noreferrer"
                data-track-event="whatsapp_click"
                data-track-label="portfolio_page_cta"
                data-track-location="portfolio_page"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-7 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary    "
              >
                <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
