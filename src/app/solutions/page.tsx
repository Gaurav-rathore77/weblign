import type { Metadata } from 'next';
import { getProjects } from '@/lib/site-content';
import { siteUrl } from '@/constants';
import SolutionsPage from '@/components/solutions/SolutionsPage';

export const metadata: Metadata = {
  title: 'Business Solutions',
  description:
    'Digital solutions built around your business — from websites and e-commerce to CRM, dashboards, mobile apps, and workflow automation tailored to real operational needs.',
  keywords: [
    'Business Digital Solutions',
    'Custom Software Solutions',
    'CRM Solutions',
    'E-commerce Solutions',
    'Business Automation',
    'Industry Digital Solutions',
  ],
  alternates: { canonical: `${siteUrl}/solutions` },
  openGraph: {
    title: 'Digital Solutions Built Around Your Business | Weblign',
    description:
      'Explore practical digital solutions for business challenges across websites, e-commerce, CRM, dashboards, mobile apps, and automation.',
    type: 'website',
    url: `${siteUrl}/solutions`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Weblign Business Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Solutions Built Around Your Business | Weblign',
    description:
      'Practical digital solutions for business challenges — websites, systems, apps, and automation.',
    images: ['/opengraph-image'],
  },
};

export const dynamic = 'force-dynamic';

export default async function SolutionsRoute() {
  const projects = await getProjects();
  return <SolutionsPage projects={projects} />;
}
