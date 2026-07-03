import {
  HiOutlineRocketLaunch,
  HiOutlineBriefcase,
  HiOutlineBuildingOffice2,
} from 'react-icons/hi2';

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  features: string[];
  cta: string;
  ctaHref: string;
}

export const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Best for freelancers and small businesses getting started.',
    icon: <HiOutlineRocketLaunch className="h-6 w-6" />,
    monthlyPrice: 299,
    yearlyPrice: 2990,
    features: [
      'Responsive Website',
      'Up to 5 Pages',
      'Basic SEO',
      'Contact Form',
      'Performance Optimization',
      '30 Days Support',
    ],
    cta: 'Get Started',
    ctaHref: '/contact',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing teams and businesses scaling their presence.',
    icon: <HiOutlineBriefcase className="h-6 w-6" />,
    monthlyPrice: 699,
    yearlyPrice: 6990,
    popular: true,
    features: [
      'Everything in Starter',
      'Unlimited Pages',
      'Admin Dashboard',
      'Blog & CMS Integration',
      'Advanced SEO',
      'API Integration',
      'E-commerce Ready',
      '6 Months Support',
    ],
    cta: 'Start Growing',
    ctaHref: '/contact',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Tailored solutions for large organizations with complex needs.',
    icon: <HiOutlineBuildingOffice2 className="h-6 w-6" />,
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      'Everything in Professional',
      'Custom Software',
      'AI Integrations',
      'Cloud Infrastructure',
      'Dedicated Team',
      'Priority Support & SLA',
      'Unlimited Revisions',
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
    icon: '🛡',
    title: '30-Day Satisfaction Guarantee',
    description: 'Not happy? We\'ll refund your first month — no questions asked.',
  },
  {
    icon: '🔒',
    title: 'Secure Payments',
    description: 'All transactions are encrypted and processed securely through Stripe.',
  },
  {
    icon: '💰',
    title: 'No Hidden Fees',
    description: 'What you see is what you pay. No surprise charges or upsells.',
  },
  {
    icon: '📋',
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
