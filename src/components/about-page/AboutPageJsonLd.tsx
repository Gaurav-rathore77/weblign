import { contactInfo, siteUrl } from '@/constants';

const aboutPageData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${siteUrl}/about#webpage`,
  url: `${siteUrl}/about`,
  name: 'About Weblign',
  description:
    'Learn about Weblign, our story, mission, values and the team behind our digital products.',
  isPartOf: { '@id': `${siteUrl}/#website` },
  inLanguage: 'en-US',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: `${siteUrl}/about`,
      },
    ],
  },
  mainEntity: {
    '@id': `${siteUrl}/#organization`,
    '@type': 'Organization',
    name: 'Weblign',
    email: contactInfo.email,
    telephone: contactInfo.phone,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: contactInfo.email,
      telephone: contactInfo.phone,
      availableLanguage: ['English', 'Hindi'],
    },
  },
};

export default function AboutPageJsonLd() {
  return (
    <script
      id="about-page-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageData) }}
    />
  );
}
