export interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: { text: string; included: boolean }[];
  cta: string;
  gradient: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    description: 'Perfect for small projects and early-stage startups looking to establish a digital presence.',
    monthlyPrice: 999,
    annualPrice: 9999,
    features: [
      { text: 'Custom design (up to 5 pages)', included: true },
      { text: 'Responsive development', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'Contact form integration', included: true },
      { text: '1 revision round', included: true },
      { text: '2 weeks delivery', included: true },
      { text: 'Dedicated project manager', included: false },
      { text: 'Priority support', included: false },
      { text: 'Analytics dashboard', included: false },
      { text: 'Ongoing maintenance', included: false },
    ],
    cta: 'Get Started',
    gradient: 'from-primary/20 to-accent/10',
  },
  {
    name: 'Growth',
    description: 'Ideal for growing businesses that need a robust digital product with room to scale.',
    monthlyPrice: 2499,
    annualPrice: 24999,
    popular: true,
    features: [
      { text: 'Custom design (up to 15 pages)', included: true },
      { text: 'Responsive development', included: true },
      { text: 'Advanced SEO & performance', included: true },
      { text: 'Custom integrations (CRM, payments)', included: true },
      { text: '3 revision rounds', included: true },
      { text: '4 weeks delivery', included: true },
      { text: 'Dedicated project manager', included: true },
      { text: 'Priority support', included: true },
      { text: 'Analytics dashboard', included: true },
      { text: 'Ongoing maintenance', included: false },
    ],
    cta: 'Start Growing',
    gradient: 'from-primary to-accent',
  },
  {
    name: 'Enterprise',
    description: 'For organizations requiring a fully managed, white-glove experience with dedicated resources.',
    monthlyPrice: 4999,
    annualPrice: 49999,
    features: [
      { text: 'Unlimited pages & complexity', included: true },
      { text: 'Responsive development', included: true },
      { text: 'Full SEO & content strategy', included: true },
      { text: 'Any third-party integration', included: true },
      { text: 'Unlimited revision rounds', included: true },
      { text: 'Custom timeline', included: true },
      { text: 'Dedicated project manager', included: true },
      { text: '24/7 priority support', included: true },
      { text: 'Advanced analytics & reporting', included: true },
      { text: 'Ongoing maintenance & hosting', included: true },
    ],
    cta: 'Contact Us',
    gradient: 'from-accent/20 to-primary/10',
  },
];

export const faqs = [
  {
    q: 'How do your pricing plans work?',
    a: 'Each plan covers the full lifecycle of a project — from discovery and design to development, testing, and launch. You pay a fixed monthly or annual retainer based on the scope and complexity outlined in your plan. All plans include a kickoff call and a dedicated point of contact.',
  },
  {
    q: 'Can I switch plans mid-project?',
    a: 'Absolutely. As your needs evolve, you can upgrade or downgrade your plan at any time. We\'ll prorate the difference and adjust your timeline and deliverables accordingly.',
  },
  {
    q: 'What if I need more than what\'s listed?',
    a: 'No problem. The Enterprise plan is fully customizable. We\'ll build a scope of work tailored to your exact requirements, including custom integrations, dedicated infrastructure, and ongoing managed support.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'We stand behind our work. If you\'re not satisfied after the first milestone, we\'ll work with you to make it right. Refunds are handled on a case-by-case basis depending on the work completed.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'A typical website or web app takes 2–6 weeks depending on complexity. We\'ll provide a detailed timeline during the kickoff phase and keep you updated every step of the way.',
  },
  {
    q: 'Do you provide ongoing support after launch?',
    a: 'Yes. Every plan includes post-launch support. The Starter plan includes basic support, Growth includes priority support, and Enterprise includes 24/7 dedicated support with maintenance and hosting included.',
  },
];
