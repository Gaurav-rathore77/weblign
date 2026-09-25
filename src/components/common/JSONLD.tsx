import { companyInfo, siteUrl, contactInfo, socialLinks } from '@/constants';

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

const organization = {
  '@type': 'Organization',
  '@id': organizationId,
  name: companyInfo.name,
  description: companyInfo.description,
  url: siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/images/weblign-mark.png`,
    width: 512,
    height: 512,
  },
  image: `${siteUrl}/opengraph-image`,
  email: contactInfo.email,
  telephone: contactInfo.phone,
  foundingDate: '2026',
  address: {
    '@type': 'PostalAddress',
    addressCountry: contactInfo.address.country || 'IN',
  },
  sameAs: [
    socialLinks.linkedin,
    socialLinks.github,
    socialLinks.twitter,
    socialLinks.facebook,
    socialLinks.instagram,
    socialLinks.dribbble,
  ],
  knowsAbout: [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'AI Automation',
    'Cloud Solutions',
    'E-commerce',
    'Custom Software',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Python',
    'AWS',
    'Vercel',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: `${siteUrl}/contact`,
    servicePhone: contactInfo.phone,
    availableLanguage: ['English', 'Hindi'],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '10:00',
      closes: '19:00',
      timeZone: 'Asia/Kolkata',
    },
  },
  employee: [
    {
      '@type': 'Person',
      name: 'Sachin Rathore',
      jobTitle: 'CEO & Founder',
      worksFor: { '@id': organizationId },
    },
    {
      '@type': 'Person',
      name: 'Gaurav',
      jobTitle: 'Tech Head',
      worksFor: { '@id': organizationId },
    },
    {
      '@type': 'Person',
      name: 'Sagar Bist',
      jobTitle: 'Web Developer',
      worksFor: { '@id': organizationId },
    },
    {
      '@type': 'Person',
      name: 'Arun Rathore',
      jobTitle: 'Web Developer',
      worksFor: { '@id': organizationId },
    },
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'Web Development',
      description: 'Custom web applications built with Next.js, React, and modern technologies.',
      category: 'Web Development',
      url: `${siteUrl}/services/web-development`,
    },
    {
      '@type': 'Offer',
      name: 'Mobile App Development',
      description: 'Cross-platform mobile apps for iOS and Android.',
      category: 'Mobile Development',
      url: `${siteUrl}/services/mobile-development`,
    },
    {
      '@type': 'Offer',
      name: 'UI/UX Design',
      description: 'User-centered design for web and mobile applications.',
      category: 'Design',
      url: `${siteUrl}/services/ui-ux-design`,
    },
    {
      '@type': 'Offer',
      name: 'AI Chatbot',
      description: 'Custom conversational AI assistants for websites, WhatsApp and customer support.',
      category: 'AI/ML',
      url: `${siteUrl}/services/ai-automation`,
    },
    {
      '@type': 'Offer',
      name: 'Business Automation',
      description: 'Workflow, CRM, document and data automation for growing businesses.',
      category: 'Business Automation',
      url: `${siteUrl}/services/ai-automation`,
    },
    {
      '@type': 'Offer',
      name: 'AI Automation',
      description: 'AI-powered solutions for business process automation.',
      category: 'AI/ML',
      url: `${siteUrl}/services/ai-automation`,
    },
  ],
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    organization,
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: siteUrl,
      name: companyInfo.name,
      description: companyInfo.description,
      publisher: { '@id': organizationId },
      inLanguage: 'en-US',
    },
  ],
};

const JSONLD = () => (
  <script
    id="json-ld-structured-data"
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
  />
);

export default JSONLD;
