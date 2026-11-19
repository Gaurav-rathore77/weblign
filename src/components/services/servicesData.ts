import type { ServiceIconKey, BenefitIconKey } from './Icons';

export interface Service {
  id: string;
  iconKey: ServiceIconKey;
  title: string;
  description: string;
  features: string[];
}

export interface Benefit {
  iconKey: BenefitIconKey;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'web-development',
    iconKey: 'web',
    title: 'Business Website Development',
    description:
      'Conversion-focused business websites that build trust, communicate clearly, and generate qualified inquiries.',
    features: [
      'Custom responsive website design',
      'Lead capture and consultation flows',
      'SEO and performance foundations',
    ],
  },
  {
    id: 'ecommerce',
    iconKey: 'ecommerce',
    title: 'E-commerce Development',
    description:
      'Online stores designed for smooth product discovery, confident checkout, and manageable operations.',
    features: [
      'Storefront and catalog experiences',
      'Payment and checkout integrations',
      'Order and product workflows',
    ],
  },
  {
    id: 'crm-dashboards',
    iconKey: 'dashboard',
    title: 'CRM & Business Dashboards',
    description:
      'Custom CRM systems and dashboards that centralize data, track activity, and improve visibility.',
    features: [
      'Lead and customer workflows',
      'Role-based dashboards and reporting',
      'Integrations with business tools',
    ],
  },
  {
    id: 'mobile-development',
    iconKey: 'mobile',
    title: 'Mobile App Development',
    description:
      'Mobile applications built for usability, performance, and reliable access on the go.',
    features: [
      'Customer or internal mobile experiences',
      'API and device integrations',
      'Release-ready testing and support',
    ],
  },
  {
    id: 'ai-automation',
    iconKey: 'ai',
    title: 'AI & Business Automation',
    description:
      'Practical automation and AI-assisted workflows that reduce manual effort and speed up operations.',
    features: [
      'Workflow and process automation',
      'Lead routing and follow-ups',
      'Connected tools and AI-assisted flows',
    ],
  },
  {
    id: 'custom-software',
    iconKey: 'software',
    title: 'Custom Software Development',
    description:
      'Tailored software solutions built around your processes, integrations, and long-term growth needs.',
    features: [
      'Custom modules and workflows',
      'Integrations and scalable architecture',
      'Admin, portal, and system experiences',
    ],
  },
];

export const benefits: Benefit[] = [
  {
    iconKey: 'fast',
    title: 'Fast Delivery',
    description:
      'Agile workflows and efficient processes ensure your project ships on time, every time.',
  },
  {
    iconKey: 'secure',
    title: 'Secure Solutions',
    description:
      'Enterprise-grade security baked into every layer of your application.',
  },
  {
    iconKey: 'growth',
    title: 'Business Growth',
    description:
      'Every solution is designed with your business goals and growth trajectory in mind.',
  },
  {
    iconKey: 'partnership',
    title: 'Long-term Partnership',
    description:
      'We invest in your success with ongoing support, maintenance, and strategic guidance.',
  },
];
