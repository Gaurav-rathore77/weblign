export interface FaqEntry {
  question: string;
  answer: string;
}

export interface FaqGroup {
  id: string;
  label: string;
  blurb: string;
  items: FaqEntry[];
}

export const faqGroups: FaqGroup[] = [
  {
    id: 'getting-started',
    label: 'Getting started',
    blurb: 'How projects begin, what to expect, and how we communicate.',
    items: [
      {
        question: 'How do we get started?',
        answer:
          'Share your requirements through the contact form, email, or WhatsApp. We’ll discuss your goals, current challenges, and timeline, then recommend a suitable approach and outline the next steps. If the project is a good fit, we follow with a clear scope and proposal.',
      },
      {
        question: 'What types of businesses do you work with?',
        answer:
          'We work with startups, local businesses, service providers, and growing companies that need practical digital solutions—such as business websites, e-commerce experiences, dashboards/CRMs, mobile apps, automation, or custom software.',
      },
      {
        question: 'Do you help define the right scope if I’m not sure what I need?',
        answer:
          'Yes. During discovery we help clarify goals, priorities, and required features so the scope is practical and aligned with your business needs. Final recommendations depend on your requirements and constraints.',
      },
    ],
  },
  {
    id: 'pricing-payments',
    label: 'Pricing & payments',
    blurb: 'How pricing works, what affects cost, and payment structure.',
    items: [
      {
        question: 'How much does a project cost?',
        answer:
          'Our website packages start at ₹9,999+ (Starter), ₹19,999+ (Business), and ₹34,999+ (Premium). Custom solutions are quoted based on requirements. Final pricing depends on scope, features, integrations, content readiness, and timeline.',
      },
      {
        question: 'What affects the final project cost?',
        answer:
          'Cost is influenced by the number of pages or modules, design complexity, custom functionality, integrations (payments, APIs, CRM/tools), content or data migration, and the level of post-launch support required.',
      },
      {
        question: 'What is the payment structure?',
        answer:
          'Payment structure is shared clearly in the proposal based on project scope and milestones. The exact schedule and terms depend on the engagement and are agreed before work begins.',
      },
      {
        question: 'Are there hidden costs?',
        answer:
          'No. We aim to keep pricing transparent. Any third-party costs (such as domain, hosting, paid plugins/APIs, subscriptions, or additional out-of-scope work) are discussed and approved before implementation whenever applicable.',
      },
    ],
  },
  {
    id: 'delivery-scope',
    label: 'Delivery, revisions & timelines',
    blurb: 'Realistic timelines, feedback cycles, and revision expectations.',
    items: [
      {
        question: 'How long does a project take?',
        answer:
          'Timelines depend on scope, complexity, integrations, and how quickly content and feedback are provided. We share a realistic timeline during discovery/proposal and keep milestones clear throughout delivery.',
      },
      {
        question: 'Do you offer unlimited revisions?',
        answer:
          'No. Revisions are handled within the agreed project scope and feedback stages so timelines and expectations remain clear. If changes go beyond the agreed scope, we discuss the impact on cost and schedule before proceeding.',
      },
      {
        question: 'Can you redesign or improve an existing website or system?',
        answer:
          'Yes, where it makes sense for the project. We can review your current setup and recommend improvements or a phased rebuild based on your goals, technical constraints, and content.',
      },
    ],
  },
  {
    id: 'ownership-support',
    label: 'Ownership, hosting & support',
    blurb: 'Buyer concerns about source code, ownership, hosting, and maintenance.',
    items: [
      {
        question: 'Will I own the website/app and source code?',
        answer:
          'Ownership and handover details (including source code, assets, and access) are defined in the project agreement/proposal. We discuss this upfront so expectations are clear before development begins.',
      },
      {
        question: 'Do you provide hosting and domain services?',
        answer:
          'Hosting and domain setup can be supported as part of the project when needed, but hosting/domain charges and third-party subscriptions are typically separate unless explicitly included in the agreed scope.',
      },
      {
        question: 'Do you provide maintenance and post-launch support?',
        answer:
          'Yes. Post-launch support depends on the package or agreed scope (for example, a defined support window for fixes). Ongoing maintenance and enhancements can also be arranged separately based on your needs.',
      },
      {
        question: 'What technologies do you use?',
        answer:
          'We choose technologies based on project requirements. Our work commonly includes modern web technologies such as Next.js, React, TypeScript, Node.js, and suitable databases/integrations. The final stack is selected for practicality, maintainability, and fit.',
      },
    ],
  },
];

/** Flat list, used for the FAQPage structured data. */
export const allFaqs: FaqEntry[] = faqGroups.flatMap((group) => group.items);