import type { Metadata } from 'next';
import FaqPage from '@/components/faq-page/FaqPage';
import { allFaqs } from '@/components/faq-page/faqData';
import { siteUrl } from '@/constants';

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Answers to common questions about working with Weblign: project timelines, website cost, maintenance after launch, the technologies we build on, and how our plans work.',
  keywords: [
    'Web Development FAQs',
    'Website Cost India',
    'How Long Does a Website Take',
    'Website Maintenance Cost',
    'Next.js Development Agency',
    'Custom Software India',
    'Website Redesign Services',
  ],
  alternates: { canonical: `${siteUrl}/faqs` },
  openGraph: {
    title: 'FAQs — Weblign',
    description:
      'Timelines, costs, maintenance, tech stack and plans — answered before you ask.',
    type: 'website',
    url: `${siteUrl}/faqs`,
    images: [
      { url: '/opengraph-image', width: 1200, height: 630, alt: 'Weblign FAQs' },
    ],
  },
};

/** FAQPage structured data, which is what earns the rich result in Google. */
const FaqJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: allFaqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }),
    }}
  />
);

export default function FaqsRoute() {
  return (
    <>
      <FaqJsonLd />
      <FaqPage />
    </>
  );
}