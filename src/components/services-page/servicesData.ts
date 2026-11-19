export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceVisual {
  src: string;
  alt: string;
  label: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  heroHeadline: string;
  description: string;
  longDescription: string;
  whoNeeds: string[];
  problems: string[];
  solutions: string[];
  deliverables: string[];
  benefits: string[];
  features: string[];
  developmentProcess: ServiceProcessStep[];
  pricingFactors: string[];
  faqs: ServiceFaq[];
  technologies: string[];
  relatedServiceIds: string[];
  visuals: ServiceVisual[];
  icon: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'web-development',
    title: 'Business Website Development',
    heroHeadline: 'A professional website that builds trust and generates inquiries.',
    description:
      'Conversion-focused business websites designed to present your brand clearly, load fast, and turn visitors into qualified leads.',
    longDescription:
      'We design and develop business websites that do more than look good. From clear messaging and responsive layouts to performance, SEO foundations, and lead capture, we build sites that help customers understand your offering and take action with confidence.',
    whoNeeds: [
      'Businesses that need a credible online presence to attract and convert customers',
      'Companies whose current website is outdated, slow, or not generating inquiries',
      'Founders launching a new service, brand, or local business presence',
      'Teams that need a scalable marketing site they can grow over time',
    ],
    problems: [
      'Visitors do not understand your services or value quickly enough',
      'Existing websites look dated, load slowly, or perform poorly on mobile',
      'Important inquiries are lost because calls-to-action and contact flows are unclear',
      'Content, service pages, and branding feel inconsistent or hard to manage',
    ],
    solutions: [
      'Business-focused information architecture and messaging that clarifies your offer',
      'Modern, responsive UI designed for trust, readability, and conversion',
      'Fast, SEO-ready implementation with accessible navigation and clean code',
      'Clear contact paths, consultation CTAs, and integrations tailored to your workflow',
    ],
    deliverables: [
      'Custom-designed responsive website pages',
      'Service, about, contact, and landing page content structure',
      'Lead capture forms and contact/consultation integrations',
      'On-page SEO basics, metadata, and performance optimization',
      'Analytics-ready setup and cross-device/browser testing',
      'Launch support and handover guidance',
    ],
    benefits: [
      'Stronger first impression and brand credibility',
      'Better mobile experience for prospects researching on the go',
      'Clearer path from visit to inquiry or consultation',
      'A scalable foundation for future pages, campaigns, and content',
    ],
    features: [
      'Custom responsive design',
      'Conversion-focused page structure',
      'Fast loading and Core Web Vitals-minded build',
      'SEO-friendly architecture',
      'Contact and consultation CTAs',
      'CMS/content-ready foundations when needed',
    ],
    developmentProcess: [
      { title: 'Discover', description: 'Understand your business, audience, services, and conversion goals.' },
      { title: 'Plan', description: 'Define sitemap, page priorities, messaging flow, and technical approach.' },
      { title: 'Design', description: 'Create clean, on-brand layouts focused on clarity and trust.' },
      { title: 'Develop', description: 'Build a responsive, performant website with the required integrations.' },
      { title: 'Launch & Support', description: 'Test, deploy, and provide guidance for updates and improvements.' },
    ],
    pricingFactors: [
      'Number of pages and content complexity',
      'Custom design and branding requirements',
      'Forms, integrations, or CMS functionality',
      'Content creation, migration, and SEO scope',
      'Timeline and post-launch support needs',
    ],
    faqs: [
      { question: 'How long does a business website take to build?', answer: 'Timelines depend on scope, content readiness, and feedback cycles. A focused business website is typically faster than a larger multi-section or CMS-driven site. We share a realistic timeline after discovery.' },
      { question: 'Can you redesign my existing website?', answer: 'Yes. We can improve structure, messaging, design, performance, and conversion paths while preserving what already works for your business.' },
      { question: 'Will the website be mobile-friendly and SEO-ready?', answer: 'Yes. We build responsive layouts and implement on-page SEO and performance foundations appropriate for the project scope.' },
      { question: 'Can you add WhatsApp, forms, or booking/contact options?', answer: 'Yes. We can integrate consultation and contact options that fit how your team prefers to receive inquiries.' },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'SEO tooling'],
    relatedServiceIds: ['ecommerce', 'crm-dashboards', 'custom-software'],
    visuals: [
      { src: '/images/projects/real-estate-theme.webp', alt: 'Business website project screenshot', label: 'Business website experience' },
      { src: '/images/projects/anita-printers.webp', alt: 'Service business website screenshot', label: 'Service-focused web presence' },
    ],
    icon: 'HiOutlineGlobeAlt',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Development',
    heroHeadline: 'Online stores built to showcase products and drive confident purchases.',
    description:
      'E-commerce experiences designed for product discovery, smooth checkout, and manageable day-to-day operations.',
    longDescription:
      'We build e-commerce solutions that help customers find products easily, trust your brand, and complete purchases with less friction. From storefront design and catalog structure to checkout, integrations, and management workflows, we focus on both customer experience and operational efficiency.',
    whoNeeds: [
      'Retail and D2C businesses selling products online',
      'Brands moving from offline/manual sales to a digital storefront',
      'Businesses needing a better shopping experience or improved checkout flow',
      'Teams that require catalog, order, or payment workflow improvements',
    ],
    problems: [
      'Customers struggle to browse products or find relevant information',
      'Checkout friction and poor mobile UX reduce completed purchases',
      'Managing products, orders, and inquiries manually is time-consuming',
      'The current store does not reflect brand quality or scale with needs',
    ],
    solutions: [
      'Clear product/catalog structure with conversion-focused storefront design',
      'Mobile-friendly shopping journeys and streamlined checkout experiences',
      'Integrations for payments, shipping, notifications, or business tools as needed',
      'Operationally practical setups for managing products, orders, and content',
    ],
    deliverables: [
      'Custom storefront and key commerce page templates',
      'Product/category structure and navigation planning',
      'Cart and checkout flow implementation',
      'Payment gateway and essential third-party integrations',
      'Order/customer workflow setup aligned to your process',
      'Testing, launch support, and optimization guidance',
    ],
    benefits: [
      'A smoother path from product discovery to purchase',
      'Improved trust through professional, consistent store experience',
      'Reduced manual effort in handling catalog and order workflows',
      'A scalable foundation for promotions, growth, and new products',
    ],
    features: [
      'Responsive storefront design',
      'Product and category architecture',
      'Secure checkout and payment integrations',
      'Search/filter-friendly browsing patterns',
      'Operational workflows for orders and updates',
      'Performance and conversion-minded implementation',
    ],
    developmentProcess: [
      { title: 'Discover', description: 'Review products, customers, sales flow, and operational requirements.' },
      { title: 'Plan', description: 'Define catalog structure, checkout journey, integrations, and priorities.' },
      { title: 'Design', description: 'Design storefront and purchase flows for clarity and confidence.' },
      { title: 'Develop', description: 'Implement commerce features, integrations, and management workflows.' },
      { title: 'Launch & Support', description: 'Test transactions and usability, launch, and refine post-release.' },
    ],
    pricingFactors: [
      'Catalog size and product/content complexity',
      'Payment, shipping, tax, and third-party integrations',
      'Custom design and unique storefront functionality',
      'Migration of existing products/orders/content',
      'Operational workflows and post-launch support scope',
    ],
    faqs: [
      { question: 'Can you build a store for a small catalog as well as larger inventories?', answer: 'Yes. We tailor the architecture and management approach to your catalog size, growth plans, and operational needs.' },
      { question: 'Do you integrate payment gateways and shipping tools?', answer: 'Yes, we can integrate suitable payment and fulfillment-related tools based on your region, platform, and business requirements.' },
      { question: 'Can you improve an existing e-commerce site instead of rebuilding?', answer: 'In many cases, yes. We can assess your current setup and recommend targeted improvements or a phased rebuild where appropriate.' },
      { question: 'Will the store work well on mobile devices?', answer: 'Absolutely. Mobile-friendly browsing and checkout are core parts of our e-commerce implementation approach.' },
    ],
    technologies: ['Next.js', 'React', 'Headless commerce APIs', 'Stripe/Razorpay integrations', 'Tailwind CSS', 'Analytics tools'],
    relatedServiceIds: ['web-development', 'crm-dashboards', 'ai-automation'],
    visuals: [
      { src: '/images/projects/theprint.webp', alt: 'E-commerce and catalog-style website screenshot', label: 'Product-focused storefront' },
      { src: '/images/projects/ad2print.webp', alt: 'Online business storefront screenshot', label: 'Commerce-ready web experience' },
    ],
    icon: 'HiOutlineShoppingCart',
  },
  {
    id: 'crm-dashboards',
    title: 'CRM & Business Dashboards',
    heroHeadline: 'Centralize data, track customers, and make operations easier to manage.',
    description:
      'Custom CRM systems and dashboards that bring scattered business information into clear, actionable workflows.',
    longDescription:
      'When customer data, leads, and operational metrics live in spreadsheets, chats, and disconnected tools, teams lose time and visibility. We build CRM and dashboard solutions tailored to your process—so you can track activity, manage relationships, and monitor performance from one place.',
    whoNeeds: [
      'Teams managing leads, customers, or follow-ups across multiple tools',
      'Businesses that need visibility into sales, operations, or performance metrics',
      'Organizations with manual reporting and fragmented data sources',
      'Growing companies that need workflows tailored to how they actually operate',
    ],
    problems: [
      'Customer and lead information is scattered and hard to track consistently',
      'Manual reporting consumes time and delays decisions',
      'Teams lack a shared view of pipeline, tasks, or business performance',
      'Off-the-shelf tools do not match internal processes or roles',
    ],
    solutions: [
      'Custom CRM workflows for leads, contacts, activities, and follow-ups',
      'Role-based dashboards with the metrics and views your team needs',
      'Centralized data and integrations to reduce duplicate/manual work',
      'Clear interfaces that make daily operations faster and more reliable',
    ],
    deliverables: [
      'Requirements and workflow mapping for CRM/dashboard use cases',
      'Custom dashboards, views, and reporting modules',
      'Lead/contact/activity management features as required',
      'Role-based access and permissions (where needed)',
      'Integrations with forms, communication tools, or data sources',
      'Testing, deployment, and onboarding support',
    ],
    benefits: [
      'Better visibility into customers, pipeline, and operations',
      'Less manual tracking and spreadsheet dependency',
      'Faster, more consistent team workflows',
      'Data-driven decisions supported by clearer reporting',
    ],
    features: [
      'Custom CRM entities and workflows',
      'Interactive dashboards and reporting views',
      'Role-based access and team collaboration',
      'Search, filters, and activity tracking',
      'Integrations with existing business tools',
      'Scalable architecture for evolving processes',
    ],
    developmentProcess: [
      { title: 'Discover', description: 'Map current workflows, pain points, users, and reporting needs.' },
      { title: 'Plan', description: 'Define data model, modules, permissions, and integration scope.' },
      { title: 'Design', description: 'Design usable dashboards and workflow screens for each role.' },
      { title: 'Develop', description: 'Build CRM/dashboard features, integrations, and access controls.' },
      { title: 'Launch & Support', description: 'Validate with real scenarios, deploy, and iterate with feedback.' },
    ],
    pricingFactors: [
      'Number of modules, user roles, and workflow complexity',
      'Data migration and third-party integrations',
      'Reporting, analytics, and automation requirements',
      'Security/access control needs',
      'Training, iteration, and ongoing support scope',
    ],
    faqs: [
      { question: 'Can you build a CRM tailored to our specific sales or operations process?', answer: 'Yes. We focus on understanding your workflow first, then design modules and screens around how your team actually works.' },
      { question: 'Can dashboards pull data from our existing tools?', answer: 'In many cases, yes. Integration feasibility depends on available APIs, exports, and data quality; we assess this during discovery.' },
      { question: 'Is this suitable for small teams or only large organizations?', answer: 'It can work for both. We can start with a focused scope and expand modules as your team and processes grow.' },
      { question: 'Can we include automation like follow-ups or status updates?', answer: 'Yes. We can add practical automation where it reduces manual work and fits your process and tooling.' },
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL/MongoDB', 'REST APIs', 'Charting libraries'],
    relatedServiceIds: ['custom-software', 'ai-automation', 'web-development'],
    visuals: [
      { src: '/images/projects/icfei-dashboard.webp', alt: 'Dashboard interface screenshot', label: 'Operational dashboard view' },
      { src: '/images/projects/zabin-crm.svg', alt: 'CRM product illustration', label: 'CRM and workflow management' },
    ],
    icon: 'HiOutlineChartBarSquare',
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    heroHeadline: 'Mobile experiences designed for usability, performance, and real-world use.',
    description:
      'Mobile applications that help businesses engage users, streamline access, and deliver services on the go.',
    longDescription:
      'We build mobile apps with a focus on clear user journeys, reliable performance, and maintainable architecture. Whether you need a customer-facing app or an internal tool, we help define the right scope and deliver an experience that works smoothly across devices.',
    whoNeeds: [
      'Businesses wanting to reach customers through iOS/Android experiences',
      'Teams needing internal mobile tools for field work or operations',
      'Products that require on-the-go access, notifications, or device capabilities',
      'Companies extending an existing web platform to mobile',
    ],
    problems: [
      'Customers expect convenient mobile access to services and information',
      'Web-only experiences are limiting for frequent or on-the-go use cases',
      'Manual/offline processes slow down teams working outside the office',
      'Existing apps are difficult to use, maintain, or scale',
    ],
    solutions: [
      'User-centered mobile flows designed for clarity and speed',
      'Cross-platform or platform-appropriate development based on project needs',
      'API-driven architecture and integrations with existing systems',
      'Testing, release preparation, and guidance for ongoing improvements',
    ],
    deliverables: [
      'Mobile app UX flows and interface implementation',
      'Core feature development for customer or internal use cases',
      'API integration and authentication flows as required',
      'Push notifications/device integrations where relevant',
      'Quality testing across supported devices/scenarios',
      'Launch preparation and post-release support guidance',
    ],
    benefits: [
      'More accessible and convenient experiences for users',
      'Improved engagement through mobile-first interactions',
      'Better operational efficiency for mobile workflows',
      'A scalable app foundation aligned with product goals',
    ],
    features: [
      'Intuitive mobile UI/UX',
      'Cross-platform or native development approach',
      'Secure authentication and API integrations',
      'Notifications and real-time capabilities where needed',
      'Performance-focused implementation',
      'Release and iteration support',
    ],
    developmentProcess: [
      { title: 'Discover', description: 'Define users, use cases, platforms, and success criteria.' },
      { title: 'Plan', description: 'Prioritize features, architecture, integrations, and release scope.' },
      { title: 'Design', description: 'Create mobile-first flows and interface patterns for key journeys.' },
      { title: 'Develop', description: 'Build app features, integrations, and backend connectivity.' },
      { title: 'Launch & Support', description: 'Test, prepare release, and support improvements after launch.' },
    ],
    pricingFactors: [
      'Platform scope (Android, iOS, cross-platform)',
      'Number of screens/features and complexity of flows',
      'Backend/API, authentication, and third-party integrations',
      'Device capabilities (notifications, maps, camera, offline, etc.)',
      'Release support, maintenance, and iteration plans',
    ],
    faqs: [
      { question: 'Should we build for iOS, Android, or both?', answer: 'It depends on your audience, timeline, and budget. We help you choose a practical platform strategy during discovery.' },
      { question: 'Can the app connect to our existing website or backend?', answer: 'Yes. We commonly build mobile apps that integrate with existing APIs, dashboards, or business systems.' },
      { question: 'Do you handle app store submission?', answer: 'We can assist with release preparation and submission guidance/process steps as part of the project scope.' },
      { question: 'Can we start with an MVP and expand later?', answer: 'Yes. A phased MVP approach is often a smart way to validate core needs before investing in broader functionality.' },
    ],
    technologies: ['React Native', 'TypeScript', 'Native APIs', 'Node.js APIs', 'Firebase/services as needed', 'App analytics'],
    relatedServiceIds: ['custom-software', 'web-development', 'ai-automation'],
    visuals: [
      { src: '/images/projects/vidya-vriddhi.svg', alt: 'Platform experience adaptable to mobile use cases', label: 'User-focused digital platform' },
      { src: '/images/projects/alpha-world.svg', alt: 'Digital service platform screenshot', label: 'Service platform experience' },
    ],
    icon: 'HiOutlineDevicePhoneMobile',
  },
  {
    id: 'ai-automation',
    title: 'AI & Business Automation',
    heroHeadline: 'Automate repetitive work and respond faster with practical AI-powered workflows.',
    description:
      'Business automation and AI-assisted solutions that reduce manual effort, improve consistency, and support faster operations.',
    longDescription:
      'We help businesses identify repetitive, time-consuming processes and implement automation that fits existing tools and teams. From lead routing and communication workflows to AI-assisted support and data handling, we focus on practical solutions that create measurable operational improvements.',
    whoNeeds: [
      'Businesses spending too much time on repetitive manual tasks',
      'Teams that need faster lead response, routing, or follow-up workflows',
      'Organizations handling repetitive support, data entry, or document processes',
      'Companies exploring AI/chat automation with clear business use cases',
    ],
    problems: [
      'Manual processes slow down response times and internal operations',
      'Leads and inquiries are handled inconsistently across channels',
      'Teams spend hours on repetitive admin, data, or communication tasks',
      'Existing tools are not connected, causing duplicate work and errors',
    ],
    solutions: [
      'Workflow mapping to identify high-impact automation opportunities',
      'Integrations between forms, CRM, communication, and business tools',
      'AI-assisted chat/support or content workflows where appropriate',
      'Automation dashboards/logging to monitor outcomes and improve over time',
    ],
    deliverables: [
      'Automation opportunity assessment and workflow plan',
      'Implemented automations/integrations for agreed use cases',
      'AI chatbot or AI-assisted workflow setup (if in scope)',
      'Routing, notifications, and process handoff logic',
      'Testing, documentation, and team handover guidance',
      'Post-launch tuning recommendations',
    ],
    benefits: [
      'Reduced manual workload and operational bottlenecks',
      'Faster, more consistent responses to leads and requests',
      'Better use of existing tools through connected workflows',
      'A foundation for scaling processes without adding repetitive effort',
    ],
    features: [
      'Workflow and process automation',
      'CRM/email/chat integrations',
      'Lead capture, routing, and follow-up flows',
      'AI-assisted responses/chat experiences where suitable',
      'Operational visibility and logging',
      'Practical, maintainable implementations',
    ],
    developmentProcess: [
      { title: 'Discover', description: 'Identify repetitive tasks, bottlenecks, tools, and desired outcomes.' },
      { title: 'Plan', description: 'Prioritize automation use cases, integrations, and success criteria.' },
      { title: 'Design', description: 'Define workflow logic, handoffs, fallback paths, and user touchpoints.' },
      { title: 'Develop', description: 'Implement automations, integrations, and AI-assisted components as scoped.' },
      { title: 'Launch & Support', description: 'Test scenarios, monitor results, and refine workflows after rollout.' },
    ],
    pricingFactors: [
      'Number and complexity of workflows/use cases',
      'Integrations with third-party tools and APIs',
      'AI/chat capabilities, knowledge sources, and safeguards required',
      'Data volume, reliability, and monitoring needs',
      'Ongoing optimization and support scope',
    ],
    faqs: [
      { question: 'Do we need AI for every automation project?', answer: 'No. Many valuable automations are rules- and integration-based. We recommend AI only where it clearly improves the workflow or experience.' },
      { question: 'Can you automate WhatsApp, forms, or CRM follow-ups?', answer: 'Yes, depending on available tools and integrations. We can design practical lead capture and follow-up workflows around your channels.' },
      { question: 'Will automation replace our team?', answer: 'Our goal is to reduce repetitive work and improve consistency so your team can focus on higher-value conversations and decisions.' },
      { question: 'How do you ensure automations are reliable?', answer: 'We define clear workflow logic, fallback handling, and testing scenarios, and we recommend monitoring/tuning after launch.' },
    ],
    technologies: ['Node.js', 'APIs/webhooks', 'OpenAI/LLM APIs as needed', 'CRM integrations', 'Messaging integrations', 'Automation tooling'],
    relatedServiceIds: ['crm-dashboards', 'custom-software', 'web-development'],
    visuals: [
      { src: '/images/projects/super-nova-ai.svg', alt: 'AI-focused digital project visual', label: 'AI-enabled digital experience' },
      { src: '/images/projects/seven-theta-ai.svg', alt: 'Automation and AI solution visual', label: 'Automation-oriented solution' },
    ],
    icon: 'HiOutlineCpuChip',
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    heroHeadline: 'Software tailored to your workflows, integrations, and growth plans.',
    description:
      'Custom-built software solutions for businesses that need more than off-the-shelf tools can provide.',
    longDescription:
      'Every business has unique processes, constraints, and opportunities. We design and develop custom software—web platforms, internal tools, portals, and integrated systems—around your exact requirements, with an emphasis on usability, maintainability, and scalable architecture.',
    whoNeeds: [
      'Businesses with processes not well served by off-the-shelf products',
      'Teams needing internal tools, portals, or integrated systems',
      'Organizations replacing spreadsheets/manual workflows with purpose-built software',
      'Companies planning scalable platforms with evolving requirements',
    ],
    problems: [
      'Generic tools force workarounds and limit operational efficiency',
      'Critical workflows depend on spreadsheets, emails, or disconnected systems',
      'Teams need custom permissions, data flows, or integrations',
      'Existing systems are hard to extend, maintain, or align with growth',
    ],
    solutions: [
      'Discovery-led product definition aligned to real workflows and users',
      'Custom architecture, modules, and integrations tailored to requirements',
      'Usable interfaces for admins, teams, and customers as needed',
      'Iterative delivery with maintainable code and scalable foundations',
    ],
    deliverables: [
      'Solution planning, scope definition, and technical architecture',
      'Custom modules/features based on prioritized requirements',
      'Integrations with internal/external systems and APIs',
      'Role-based access, data management, and admin capabilities as needed',
      'Testing, deployment, and documentation/handover',
      'Post-launch support and enhancement options',
    ],
    benefits: [
      'Software that fits your process instead of constraining it',
      'Improved efficiency through purpose-built workflows',
      'Better data consistency and operational visibility',
      'A flexible foundation for future enhancements and scale',
    ],
    features: [
      'Tailored workflows and modules',
      'API and third-party integrations',
      'Secure, role-aware access patterns',
      'Scalable and maintainable architecture',
      'Custom admin and user experiences',
      'Iterative delivery and support',
    ],
    developmentProcess: [
      { title: 'Discover', description: 'Understand users, workflows, constraints, and business objectives.' },
      { title: 'Plan', description: 'Define scope, architecture, milestones, and integration strategy.' },
      { title: 'Design', description: 'Design user journeys and interfaces for each role and workflow.' },
      { title: 'Develop', description: 'Build and integrate features in iterative, testable increments.' },
      { title: 'Launch & Support', description: 'Deploy, validate, document, and support ongoing evolution.' },
    ],
    pricingFactors: [
      'Scope, number of modules, and workflow complexity',
      'Integrations, data migration, and infrastructure requirements',
      'User roles, permissions, and security considerations',
      'UI/UX depth and reporting/admin needs',
      'Timeline, phased delivery, and long-term support',
    ],
    faqs: [
      { question: 'How do we know if we need custom software instead of an existing tool?', answer: 'If your workflow, integrations, or customer experience require significant workarounds in off-the-shelf tools, custom software may be a better fit. We can help assess this during consultation.' },
      { question: 'Can you build in phases?', answer: 'Yes. We often recommend phased delivery—starting with the highest-impact core workflows and expanding based on feedback and priorities.' },
      { question: 'Can custom software integrate with our current systems?', answer: 'In many cases, yes. Integration options depend on available APIs, access, and data formats, which we evaluate early in the process.' },
      { question: 'Do you provide support after launch?', answer: 'Yes. We can provide post-launch assistance, fixes, and iterative improvements based on your support needs.' },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'SQL/NoSQL databases', 'Cloud & API integrations'],
    relatedServiceIds: ['crm-dashboards', 'ai-automation', 'web-development'],
    visuals: [
      { src: '/images/projects/future-mind.svg', alt: 'Custom platform project screenshot', label: 'Tailored digital platform' },
      { src: '/images/projects/dream-medicine.webp', alt: 'Custom web solution screenshot', label: 'Business-specific web solution' },
    ],
    icon: 'HiOutlineCommandLine',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    heroHeadline: 'Clear, user-centered design that makes digital products easier to use.',
    description:
      'UI/UX design services focused on usability, clarity, and conversion for websites and digital products.',
    longDescription:
      'We help teams shape digital experiences that are intuitive and aligned with business goals. From research-informed structure to interface design and prototypes, we focus on making products easier to understand, navigate, and act on.',
    whoNeeds: [
      'Businesses planning a new website or product and needing strong UX foundations',
      'Teams with existing interfaces that are confusing or underperforming',
      'Companies that want to improve usability before development',
      'Founders validating ideas through prototypes and user flows',
    ],
    problems: [
      'Users struggle to find information or complete key actions',
      'Interfaces feel cluttered, inconsistent, or outdated',
      'Conversion paths and messaging hierarchy are unclear',
      'Development starts without a validated design direction',
    ],
    solutions: [
      'User journeys and information architecture aligned to goals',
      'Wireframes and interface designs that prioritize clarity',
      'Design systems/components for consistency and scalability',
      'Prototypes and iteration support to reduce implementation risk',
    ],
    deliverables: [
      'UX audit or discovery insights (as scoped)',
      'User flows and information architecture',
      'Wireframes and high-fidelity UI designs',
      'Clickable prototypes for key journeys',
      'Design handoff assets and component guidance',
    ],
    benefits: [
      'More intuitive and consistent user experiences',
      'Clearer conversion paths and product messaging',
      'Reduced rework during development',
      'A stronger foundation for scalable product design',
    ],
    features: [
      'User flow and IA design',
      'Wireframing and prototyping',
      'Responsive UI design',
      'Design consistency and components',
      'Usability-focused iteration',
      'Developer-ready handoff',
    ],
    developmentProcess: [
      { title: 'Discover', description: 'Understand users, goals, pain points, and product context.' },
      { title: 'Plan', description: 'Define structure, priorities, and key experience flows.' },
      { title: 'Design', description: 'Create wireframes, UI concepts, and prototypes.' },
      { title: 'Develop Support', description: 'Collaborate during implementation to preserve design intent.' },
      { title: 'Support', description: 'Iterate based on feedback and evolving product needs.' },
    ],
    pricingFactors: [
      'Number of screens/pages and journey complexity',
      'Research/audit depth and stakeholder input cycles',
      'Prototype fidelity and iteration rounds',
      'Design system/component scope',
      'Timeline and collaboration requirements',
    ],
    faqs: [
      { question: 'Do you provide design only, or design and development?', answer: 'We can do both. Many clients start with UI/UX design and continue into development for a smoother handoff and execution.' },
      { question: 'Can you improve an existing product’s UX without a full redesign?', answer: 'Yes. We can focus on specific flows, pages, or usability issues to deliver targeted improvements.' },
      { question: 'Will designs be responsive for mobile and desktop?', answer: 'Yes. Responsive considerations are included so experiences work well across screen sizes.' },
      { question: 'Do you create prototypes?', answer: 'Yes, when useful for validation and stakeholder alignment, we create interactive prototypes for key journeys.' },
    ],
    technologies: ['Figma', 'Prototyping tools', 'Design systems', 'Accessibility best practices'],
    relatedServiceIds: ['web-development', 'mobile-development', 'custom-software'],
    visuals: [
      { src: '/images/projects/coffee-bilingual.webp', alt: 'Designed digital experience screenshot', label: 'User-focused interface design' },
      { src: '/images/projects/fizzi-animated.webp', alt: 'Creative web experience visual', label: 'Engaging product presentation' },
    ],
    icon: 'HiOutlinePaintBrush',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    heroHeadline: 'Reliable infrastructure and deployment practices for growing digital products.',
    description:
      'Cloud and DevOps support to improve deployment, reliability, scalability, and operational visibility.',
    longDescription:
      'We help teams set up and improve the infrastructure behind their products. From deployment workflows and hosting environments to monitoring and scalability planning, we focus on practical DevOps foundations that support stable, maintainable operations.',
    whoNeeds: [
      'Teams launching new products and needing reliable deployment setups',
      'Businesses experiencing performance, uptime, or release-process issues',
      'Companies scaling applications and infrastructure demands',
      'Teams wanting better CI/CD, monitoring, or environment management',
    ],
    problems: [
      'Deployments are manual, risky, or inconsistent',
      'Performance and reliability issues are hard to diagnose',
      'Infrastructure is not prepared for growth or traffic changes',
      'Teams lack visibility into system health and operational processes',
    ],
    solutions: [
      'Cloud architecture and environment setup aligned to project needs',
      'CI/CD workflows for more reliable releases',
      'Monitoring, logging, and performance-minded operational practices',
      'Scalability and security-oriented infrastructure improvements',
    ],
    deliverables: [
      'Infrastructure/deployment assessment and recommendations',
      'Environment and hosting configuration support',
      'CI/CD pipeline setup or improvements',
      'Monitoring/logging setup guidance',
      'Documentation for deployment and operations workflows',
    ],
    benefits: [
      'More reliable and repeatable releases',
      'Improved visibility into application health',
      'Better preparedness for growth and traffic',
      'Reduced operational friction for development teams',
    ],
    features: [
      'Cloud hosting and environment setup',
      'CI/CD pipeline automation',
      'Monitoring and alerting foundations',
      'Performance and scalability planning',
      'Infrastructure best-practice guidance',
      'Deployment documentation',
    ],
    developmentProcess: [
      { title: 'Discover', description: 'Review current stack, deployment flow, and reliability challenges.' },
      { title: 'Plan', description: 'Define infrastructure priorities, tooling, and rollout approach.' },
      { title: 'Design', description: 'Plan environments, pipelines, and operational safeguards.' },
      { title: 'Develop', description: 'Implement configurations, pipelines, and monitoring foundations.' },
      { title: 'Launch & Support', description: 'Validate deployments, document workflows, and optimize as needed.' },
    ],
    pricingFactors: [
      'Current infrastructure complexity and technical debt',
      'Hosting/provider requirements and environments',
      'CI/CD, monitoring, and security scope',
      'Migration or scaling needs',
      'Ongoing operational support requirements',
    ],
    faqs: [
      { question: 'Can you work with our existing cloud provider?', answer: 'Often yes. We can assess your current setup and recommend improvements based on your provider, stack, and goals.' },
      { question: 'Do you only help with new projects?', answer: 'No. We can also improve deployment, reliability, and infrastructure practices for existing applications.' },
      { question: 'Is this only for large-scale systems?', answer: 'Not necessarily. Even smaller products benefit from reliable deployment and monitoring foundations.' },
      { question: 'Can DevOps work be combined with development services?', answer: 'Yes. Infrastructure and application delivery often work best when planned together.' },
    ],
    technologies: ['AWS/Azure/GCP (as needed)', 'Docker', 'CI/CD pipelines', 'Monitoring tools', 'Infrastructure automation'],
    relatedServiceIds: ['custom-software', 'web-development', 'ai-automation'],
    visuals: [
      { src: '/images/projects/future-mind.svg', alt: 'Scalable platform infrastructure context', label: 'Scalable platform foundation' },
      { src: '/images/projects/alpha-world.svg', alt: 'Reliable web platform visual', label: 'Reliable product delivery' },
    ],
    icon: 'HiOutlineCloud',
  },
];

export const approachSteps = [
  {
    number: '01',
    title: 'Discover & Align',
    description:
      'We clarify goals, users, requirements, and constraints so every service engagement starts with the right priorities.',
  },
  {
    number: '02',
    title: 'Plan the Solution',
    description:
      'We define scope, milestones, and the technical approach—whether it’s a website, dashboard, app, or automation workflow.',
  },
  {
    number: '03',
    title: 'Design & Build',
    description:
      'We craft usable experiences and implement reliable solutions with transparent collaboration throughout delivery.',
  },
  {
    number: '04',
    title: 'Test & Launch',
    description:
      'We validate quality, performance, and readiness before launch so your solution works smoothly in real-world use.',
  },
  {
    number: '05',
    title: 'Support & Improve',
    description:
      'After launch, we help with refinements, fixes, and enhancements based on your evolving business needs.',
  },
];
