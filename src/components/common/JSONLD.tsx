import Script from 'next/script';
import { companyInfo } from '@/constants';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareCompany',
  name: companyInfo.name,
  description: companyInfo.description,
  url: 'https://weblign.com',
  email: 'info.weblign@gmail.com',
  telephone: '+91 9315051726',
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: '',
    addressRegion: '',
    postalCode: '',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://linkedin.com/company/weblign',
    'https://github.com/weblign',
    'https://twitter.com/weblign',
    'https://facebook.com/weblign',
  ],
  knowsAbout: [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'AI Automation',
    'Cloud Solutions',
    'E-commerce',
    'Custom Software',
  ],
  employee: [
    {
      '@type': 'Person',
      name: 'Sachin Rathore',
      jobTitle: 'CEO & Founder',
    },
  ],
};

const JSONLD = () => (
  <Script
    id="json-ld-structured-data"
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    strategy="afterInteractive"
  />
);

export default JSONLD;
