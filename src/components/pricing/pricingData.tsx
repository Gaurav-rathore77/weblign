import {
  HiOutlineRocketLaunch,
  HiOutlineBriefcase,
  HiOutlineBuildingOffice2,
  HiOutlineSquares2X2,
  HiOutlineChartBarSquare,
  HiOutlineCommandLine,
} from 'react-icons/hi2';

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  price: number;
  priceLabel?: string;
  popular?: boolean;
  features: string[];
  cta: string;
  ctaHref: string;
}

export const plans: PricingPlan[] = [
  {
    id: 'landing',
    name: 'Landing Page',
    description: 'High-converting single-page website perfect for campaigns.',
    icon: <HiOutlineRocketLaunch className="h-6 w-6" />,
    price: 9999,
    features: [
      'Single Page Design',
      'Responsive Layout',
      'Basic SEO',
      'Contact Form',
      'Performance Optimized',
      '7 Days Support',
    ],
    cta: 'Get Started',
    ctaHref: '/contact',
  },
  {
    id: 'business-starter',
    name: 'Business Website',
    description: 'Professional multi-page site for small businesses.',
    icon: <HiOutlineSquares2X2 className="h-6 w-6" />,
    price: 19999,
    popular: true,
    features: [
      '5–7 Pages',
      'Responsive Design',
      'Contact Form',
      'Basic SEO',
      'Social Media Integration',
      'Google Maps Integration',
      '30 Days Support',
    ],
    cta: 'Get Started',
    ctaHref: '/contact',
  },
  {
    id: 'premium-business',
    name: 'Premium Business',
    description: 'Feature-rich website with advanced capabilities.',
    icon: <HiOutlineBriefcase className="h-6 w-6" />,
    price: 34999,
    features: [
      'Everything in Business',
      'Blog & CMS',
      'Advanced SEO',
      'Admin Dashboard',
      'Performance Optimization',
      'Priority Support',
    ],
    cta: 'Learn More',
    ctaHref: '/contact',
  },
  {
    id: 'mern-custom',
    name: 'Custom MERN Website',
    description: 'Full-stack MERN application tailored to your needs.',
    icon: <HiOutlineCommandLine className="h-6 w-6" />,
    price: 59999,
    features: [
      'MERN Stack (MongoDB, Express, React, Node)',
      'Custom UI/UX Design',
      'RESTful API Development',
      'Authentication & Authorization',
      'Database Design & Management',
      'Admin Panel',
      '3 Months Support',
    ],
    cta: 'Get Quote',
    ctaHref: '/contact',
  },
  {
    id: 'admin-dashboard',
    name: 'Admin Dashboard',
    description: 'Powerful admin panel to manage your business operations.',
    icon: <HiOutlineChartBarSquare className="h-6 w-6" />,
    price: 39999,
    features: [
      'Custom Dashboard Design',
      'User Management',
      'Data Visualization & Charts',
      'Role-Based Access Control',
      'Export & Reporting',
      'API Integration Ready',
      '3 Months Support',
    ],
    cta: 'Get Quote',
    ctaHref: '/contact',
  },
  {
    id: 'web-app',
    name: 'Custom Web Application',
    description: 'End-to-end custom web application for complex requirements.',
    icon: <HiOutlineBuildingOffice2 className="h-6 w-6" />,
    price: 79999,
    priceLabel: 'Starting',
    features: [
      'Tailored Architecture',
      'Full-Stack Development',
      'Third-Party Integrations',
      'Scalable Infrastructure',
      'Dedicated Team',
      'Priority Support & SLA',
      'Custom Training',
    ],
    cta: 'Contact Sales',
    ctaHref: '/contact',
  },
];

export interface ComparisonFeature {
  name: string;
  starter: boolean;
  professional: boolean;
  enterprise: boolean;
}

export const comparisonFeatures: ComparisonFeature[] = [
  { name: 'Responsive Design', starter: true, professional: true, enterprise: true },
  { name: 'SEO Optimization', starter: true, professional: true, enterprise: true },
  { name: 'CMS Integration', starter: false, professional: true, enterprise: true },
  { name: 'Admin Panel', starter: false, professional: true, enterprise: true },
  { name: 'API Integration', starter: false, professional: true, enterprise: true },
  { name: 'Cloud Deployment', starter: false, professional: false, enterprise: true },
  { name: 'AI Features', starter: false, professional: false, enterprise: true },
  { name: 'Priority Support', starter: false, professional: false, enterprise: true },
  { name: 'Custom Development', starter: false, professional: false, enterprise: true },
];

export interface GuaranteeItem {
  icon: string;
  title: string;
  description: string;
}

export const guarantees: GuaranteeItem[] = [
  {
    icon: 'HiOutlineShieldCheck',
    title: '30-Day Satisfaction Guarantee',
    description: 'Not happy? We\'ll refund your first month — no questions asked.',
  },
  {
    icon: 'HiOutlineLockClosed',
    title: 'Secure Payments',
    description: 'All transactions are encrypted and processed securely through Stripe.',
  },
  {
    icon: 'HiOutlineCurrencyDollar',
    title: 'No Hidden Fees',
    description: 'What you see is what you pay. No surprise charges or upsells.',
  },
  {
    icon: 'HiOutlineClipboardDocument',
    title: 'Transparent Process',
    description: 'Clear milestones, timelines, and communication every step of the way.',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes, you can upgrade or switch plans at any time. We\'ll prorate the difference and seamlessly migrate your project to the new plan without any downtime.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Absolutely. We offer a 30-day money-back guarantee on all plans. If you\'re not satisfied for any reason, we\'ll refund your first payment in full.',
  },
  {
    question: 'Is hosting included in the price?',
    answer: 'Yes, all plans include managed hosting on our enterprise-grade infrastructure. We handle performance, security, and uptime monitoring so you don\'t have to.',
  },
  {
    question: 'Can I request custom features?',
    answer: 'Custom feature requests are available on the Professional plan and included with Enterprise. Our team will work with you to scope, build, and integrate exactly what you need.',
  },
];
