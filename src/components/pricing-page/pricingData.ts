export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  subtitle: string;
  idealFor: string;
  deliverables: string[];
  features: string[];
  support: string;
  limitations: string[];
  popular?: boolean;
  cta: string;
}

export interface ComparisonRow {
  label: string;
  starter: string | boolean;
  business: string | boolean;
  premium: string | boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'starter',
    name: 'STARTER',
    price: 9999,
    subtitle: 'For businesses that need a professional online presence.',
    idealFor:
      'New businesses, freelancers, and local service providers who need a clear, credible single-page or compact web presence to start generating inquiries.',
    deliverables: [
      '1 professionally designed website page (or compact landing experience)',
      'Mobile-responsive layout and core section structure',
      'Contact/lead form setup and basic call-to-action placement',
      'Basic on-page SEO setup (titles, meta basics, structure)',
      'Performance-minded implementation and launch-ready handover',
    ],
    features: [
      'Custom design aligned to your brand basics',
      'Responsive experience for mobile, tablet, and desktop',
      'Contact form and inquiry CTA integration',
      'Basic SEO-friendly structure',
      'Speed and usability-focused build',
    ],
    support:
      '7 days of post-launch support for minor fixes and launch-related issues (scope-based).',
    limitations: [
      'Best suited for a single-page or limited-scope presence (not a multi-page site)',
      'No blog/CMS, admin dashboard, e-commerce, or custom app functionality included',
      'Content writing, advanced integrations, and ongoing maintenance are not included unless scoped separately',
      'Revisions are handled within the agreed project scope (not unlimited)',
    ],
    cta: 'Discuss This Package',
  },
  {
    id: 'business',
    name: 'BUSINESS',
    price: 19999,
    subtitle:
      'For growing businesses that need a complete website and stronger business presence.',
    idealFor:
      'Growing businesses that need a multi-page website to present services clearly, build trust, and capture more qualified inquiries.',
    deliverables: [
      'Multi-page business website (typically 5–7 pages, based on scope)',
      'Service-focused page structure and conversion-oriented CTAs',
      'Responsive UI implementation across key devices',
      'Contact form, social links, and map/location integration (as applicable)',
      'Basic on-page SEO setup and launch support',
    ],
    features: [
      'Custom multi-page website design and development',
      'Responsive layouts for all core pages',
      'Inquiry/contact flow setup',
      'Social media and Google Maps integration (where relevant)',
      'Basic SEO foundations for key pages',
    ],
    support:
      '30 days of post-launch support for minor fixes and agreed adjustments after launch.',
    limitations: [
      'Does not include blog/CMS, e-commerce, CRM, or custom dashboard/app features by default',
      'Advanced SEO campaigns, copywriting, paid integrations, and hosting/domain costs are separate unless agreed',
      'Additional pages or features beyond agreed scope may affect timeline and cost',
      'Revisions are provided within the agreed scope and feedback rounds (not unlimited)',
    ],
    popular: true,
    cta: 'Discuss This Package',
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    price: 34999,
    subtitle:
      'For businesses requiring advanced functionality, enhanced performance and scalability.',
    idealFor:
      'Established businesses that need a more capable website with advanced sections, content management, and stronger performance foundations.',
    deliverables: [
      'Comprehensive website build with advanced page/section requirements (scope-defined)',
      'Blog/CMS setup for manageable content updates (as scoped)',
      'Enhanced performance and on-page SEO implementation',
      'Admin/dashboard-related functionality where included in agreed scope',
      'Priority launch assistance and post-launch support window',
    ],
    features: [
      'Everything in BUSINESS, expanded for advanced needs',
      'Blog/CMS capability for content publishing (as scoped)',
      'Advanced on-page SEO and performance optimization',
      'Admin or management features where agreed in scope',
      'Scalability-minded structure for future enhancements',
    ],
    support:
      'Priority post-launch support window for issue resolution and scoped refinements (details agreed in proposal).',
    limitations: [
      'Custom CRM, full e-commerce platforms, mobile apps, and complex integrations are quoted separately unless explicitly included',
      'Third-party tool subscriptions, APIs, hosting/domain, and ongoing maintenance are additional unless specified',
      'Delivery timeline depends on scope, content readiness, integrations, and feedback cycles',
      'Revisions are limited to the agreed scope and approval stages (not unlimited)',
    ],
    cta: 'Discuss This Package',
  },
];

export const customSolutions = {
  title: 'CUSTOM SOLUTIONS',
  description:
    'For projects that go beyond standard website packages, we scope and build solutions around your workflows, integrations, and growth goals.',
  forItems: [
    'CRM development',
    'Admin dashboards',
    'E-commerce platforms',
    'Mobile applications',
    'Custom business automation',
  ],
  includes: [
    'Discovery and requirement mapping',
    'Tailored scope, milestones, and estimate',
    'Solution design and development based on agreed priorities',
    'Integration planning with your existing tools (where feasible)',
  ],
  note: 'Final pricing and timeline depend on scope, complexity, integrations, and content/data readiness.',
  cta: 'Get a Custom Quote',
};

export const comparisonRows: ComparisonRow[] = [
  {
    label: 'Starting price',
    starter: '₹9,999+',
    business: '₹19,999+',
    premium: '₹34,999+',
  },
  {
    label: 'Ideal for',
    starter: 'Professional online presence',
    business: 'Complete business website',
    premium: 'Advanced functionality & scalability',
  },
  {
    label: 'Website scope',
    starter: 'Single-page / compact scope',
    business: 'Multi-page (typically 5–7, scope-based)',
    premium: 'Advanced multi-section/site scope',
  },
  {
    label: 'Responsive design',
    starter: true,
    business: true,
    premium: true,
  },
  {
    label: 'Contact/inquiry setup',
    starter: true,
    business: true,
    premium: true,
  },
  {
    label: 'Basic on-page SEO',
    starter: true,
    business: true,
    premium: true,
  },
  {
    label: 'Advanced SEO & performance focus',
    starter: false,
    business: false,
    premium: true,
  },
  {
    label: 'Blog/CMS capability',
    starter: false,
    business: false,
    premium: 'As scoped',
  },
  {
    label: 'Admin/management features',
    starter: false,
    business: false,
    premium: 'As scoped',
  },
  {
    label: 'Post-launch support',
    starter: '7 days (minor fixes)',
    business: '30 days (minor fixes)',
    premium: 'Priority support window (agreed scope)',
  },
  {
    label: 'Revisions',
    starter: 'Within agreed scope',
    business: 'Within agreed scope',
    premium: 'Within agreed scope',
  },
  {
    label: 'Custom CRM/e-commerce/apps',
    starter: false,
    business: false,
    premium: 'Quoted separately unless included',
  },
];

export const faqs = [
  {
    q: 'Are these fixed prices?',
    a: 'The listed amounts are starting prices for each package. Final pricing depends on your scope, required features, integrations, content readiness, and timeline. We share a clear estimate after understanding your requirements.',
  },
  {
    q: 'What can affect the final project cost?',
    a: 'Cost can vary based on number of pages/sections, custom design needs, content creation or migration, integrations (payments, CRM, APIs, tools), advanced functionality, and post-launch support requirements.',
  },
  {
    q: 'Do you offer unlimited revisions?',
    a: 'No. Revisions are included within the agreed project scope and feedback stages so timelines stay clear and realistic. If additional changes are requested beyond scope, we discuss the impact on time and cost before proceeding.',
  },
  {
    q: 'How long will my project take?',
    a: 'Timelines depend on project scope, complexity, and how quickly content and feedback are provided. We provide a realistic timeline during consultation and keep delivery milestones transparent.',
  },
  {
    q: 'What is not included in the package price?',
    a: 'Unless explicitly included in your proposal, items like domain/hosting, third-party subscriptions, paid plugins/APIs, advanced integrations, copywriting, custom app modules, and ongoing maintenance are additional. We explain these clearly before starting.',
  },
  {
    q: 'Can I choose a package and still add custom requirements?',
    a: 'Yes. You can start with the package that fits best and we can scope additional requirements separately. If your needs are primarily custom (CRM, dashboards, e-commerce platform, mobile app, automation), we recommend a custom quote.',
  },
];
