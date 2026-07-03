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
    title: 'Web Development',
    description:
      'High-performance websites and web applications built with modern frameworks and best practices.',
    features: [
      'Custom website & web app development',
      'Responsive & mobile-first design',
      'SEO-optimized architecture',
    ],
  },
  {
    id: 'mobile-development',
    iconKey: 'mobile',
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: [
      'Native iOS & Android apps',
      'Cross-platform solutions',
      'App store deployment & support',
    ],
  },
  {
    id: 'ui-ux-design',
    iconKey: 'design',
    title: 'UI/UX Design',
    description:
      'User-centered design that combines aesthetics with usability to create memorable experiences.',
    features: [
      'User research & testing',
      'Wireframing & prototyping',
      'Design system creation',
    ],
  },
  {
    id: 'ecommerce',
    iconKey: 'ecommerce',
    title: 'E-commerce Solutions',
    description:
      'Scalable online stores and e-commerce platforms built to convert visitors into customers.',
    features: [
      'Secure payment integration',
      'Inventory & order management',
      'Mobile-optimized storefront',
    ],
  },
  {
    id: 'cloud-devops',
    iconKey: 'cloud',
    title: 'Cloud & DevOps',
    description:
      'Cloud infrastructure and DevOps practices that keep your applications running smoothly.',
    features: [
      'AWS, Azure & GCP expertise',
      'CI/CD pipeline automation',
      '24/7 monitoring & support',
    ],
  },
  {
    id: 'ai-automation',
    iconKey: 'ai',
    title: 'AI Automation',
    description:
      'Intelligent automation solutions that streamline operations and unlock data-driven insights.',
    features: [
      'Custom ML model integration',
      'Workflow automation',
      'Data analytics & insights',
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
