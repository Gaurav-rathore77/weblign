import Script from 'next/script';
import { companyInfo, siteUrl, contactInfo, socialLinks } from '@/constants';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareCompany',
  name: companyInfo.name,
  description: companyInfo.description,
  url: siteUrl,
  email: contactInfo.email,
  telephone: contactInfo.phone,
  foundingDate: '2020',
  logo: `${siteUrl}/icon.png`,
  image: `${siteUrl}/opengraph-image`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: contactInfo.address.street || 'Tech Park',
    addressLocality: contactInfo.address.city || 'Bengaluru',
    addressRegion: contactInfo.address.state || 'Karnataka',
    postalCode: contactInfo.address.zipCode || '560001',
    addressCountry: contactInfo.address.country || 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '12.9716',
    longitude: '77.5946',
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
    'Mobile Apps',
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
      worksFor: {
        '@type': 'Organization',
        name: 'Weblign',
      },
    },
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'Web Development',
      description: 'Custom web applications built with Next.js, React, and modern technologies.',
      category: 'Web Development',
      url: `${siteUrl}/services#web-development`,
    },
    {
      '@type': 'Offer',
      name: 'Mobile App Development',
      description: 'Cross-platform mobile apps for iOS and Android.',
      category: 'Mobile Development',
      url: `${siteUrl}/services#mobile-apps`,
    },
    {
      '@type': 'Offer',
      name: 'UI/UX Design',
      description: 'User-centered design for web and mobile applications.',
      category: 'Design',
      url: `${siteUrl}/services#ui-ux-design`,
    },
    {
      '@type': 'Offer',
      name: 'AI Automation',
      description: 'AI-powered solutions for business process automation.',
      category: 'AI/ML',
      url: `${siteUrl}/services#ai-automation`,
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Rajesh Patel',
      },
      datePublished: '2024-01-15',
      reviewBody:
        'Working with Weblign transformed our digital presence. The platform handles thousands of visitors seamlessly.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      itemReviewed: {
        '@type': 'SoftwareCompany',
        name: 'Weblign',
      },
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