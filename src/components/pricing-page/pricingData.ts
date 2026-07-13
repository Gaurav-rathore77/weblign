export interface PricingTier {
  name: string;
  description: string;
  price: number;
  priceLabel?: string;
  popular?: boolean;
  features: { text: string; included: boolean }[];
  cta: string;
  gradient: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Landing Page',
    description: 'High-converting single-page website perfect for campaigns.',
    price: 9999,
    features: [
      { text: 'Single Page Design', included: true },
      { text: 'Responsive Layout', included: true },
      { text: 'Basic SEO', included: true },
      { text: 'Contact Form', included: true },
      { text: 'Performance Optimized', included: true },
      { text: '7 Days Support', included: true },
      { text: 'Admin Dashboard', included: false },
      { text: 'Blog & CMS', included: false },
      { text: 'Dedicated Manager', included: false },
      { text: 'Ongoing Maintenance', included: false },
    ],
    cta: 'Get Started',
    gradient: 'from-primary/20 to-accent/10',
  },
  {
    name: 'Business Website',
    description: 'Professional multi-page site (5–7 pages) for small businesses.',
    price: 19999,
    popular: true,
    features: [
      { text: '5–7 Pages', included: true },
      { text: 'Responsive Design', included: true },
      { text: 'Contact Form', included: true },
      { text: 'Basic SEO', included: true },
      { text: 'Social Media Integration', included: true },
      { text: 'Google Maps Integration', included: true },
      { text: 'Admin Dashboard', included: false },
      { text: 'Blog & CMS', included: false },
      { text: 'Dedicated Manager', included: false },
      { text: 'Ongoing Maintenance', included: false },
    ],
    cta: 'Get Started',
    gradient: 'from-primary to-accent',
  },
  {
    name: 'Premium Business',
    description: 'Feature-rich website with advanced capabilities.',
    price: 34999,
    features: [
      { text: 'Everything in Business', included: true },
      { text: 'Blog & CMS', included: true },
      { text: 'Advanced SEO', included: true },
      { text: 'Admin Dashboard', included: true },
      { text: 'Performance Optimization', included: true },
      { text: 'Priority Support', included: true },
      { text: 'E-commerce Ready', included: false },
      { text: 'Custom Integrations', included: false },
      { text: 'Dedicated Manager', included: false },
      { text: 'Ongoing Maintenance', included: false },
    ],
    cta: 'Learn More',
    gradient: 'from-accent/20 to-primary/10',
  },
  {
    name: 'Custom MERN Website',
    description: 'Full-stack MERN application tailored to your needs.',
    price: 59999,
    features: [
      { text: 'MERN Stack (MongoDB, Express, React, Node)', included: true },
      { text: 'Custom UI/UX Design', included: true },
      { text: 'RESTful API Development', included: true },
      { text: 'Authentication & Authorization', included: true },
      { text: 'Database Design & Management', included: true },
      { text: 'Admin Panel', included: true },
      { text: 'Third-Party Integrations', included: false },
      { text: 'Dedicated Team', included: false },
      { text: '24/7 Support', included: false },
      { text: 'Ongoing Maintenance', included: false },
    ],
    cta: 'Get Quote',
    gradient: 'from-primary/20 to-accent/10',
  },
  {
    name: 'Admin Dashboard',
    description: 'Powerful admin panel to manage your business operations.',
    price: 39999,
    features: [
      { text: 'Custom Dashboard Design', included: true },
      { text: 'User Management', included: true },
      { text: 'Data Visualization & Charts', included: true },
      { text: 'Role-Based Access Control', included: true },
      { text: 'Export & Reporting', included: true },
      { text: 'API Integration Ready', included: true },
      { text: 'Third-Party Integrations', included: false },
      { text: 'Dedicated Manager', included: false },
      { text: '24/7 Support', included: false },
      { text: 'Ongoing Maintenance', included: false },
    ],
    cta: 'Get Quote',
    gradient: 'from-accent/20 to-primary/10',
  },
  {
    name: 'Custom Web Application',
    description: 'End-to-end custom web application for complex requirements.',
    price: 79999,
    priceLabel: 'Starting',
    features: [
      { text: 'Tailored Architecture', included: true },
      { text: 'Full-Stack Development', included: true },
      { text: 'Third-Party Integrations', included: true },
      { text: 'Scalable Infrastructure', included: true },
      { text: 'Dedicated Team', included: true },
      { text: 'Priority Support & SLA', included: true },
      { text: 'Custom Training', included: true },
      { text: 'Unlimited Revisions', included: false },
      { text: '24/7 Support', included: false },
      { text: 'Ongoing Maintenance', included: false },
    ],
    cta: 'Contact Sales',
    gradient: 'from-primary to-accent',
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
