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

/**
 * Content is taken from the FAQ blocks that already ship on /contact and
 * /pricing, regrouped so the answers are easier to scan on a dedicated page.
 * Both sources are single-sourced here rather than imported, because the
 * contact and pricing copies each hold their own local interface.
 */
export const faqGroups: FaqGroup[] = [
  {
    id: 'projects-process',
    label: 'Projects & process',
    blurb: 'Timelines, how we start, and what happens after launch.',
    items: [
      {
        question: 'How long does a project take?',
        answer:
          'Timelines vary by scope. A simple website takes 2–4 weeks, while a web app or custom platform can take 6–12 weeks. We provide a clear timeline during our planning phase so you know exactly what to expect.',
      },
      {
        question: 'How do we get started?',
        answer:
          "Getting started is simple. Fill out the contact form or email us at info.weblign@gmail.com. We'll schedule a free discovery call to understand your goals, then provide a proposal and timeline within 48 hours.",
      },
      {
        question: 'Do you provide maintenance after launch?',
        answer:
          'Yes, we offer ongoing maintenance and support plans to keep your site secure, up to date, and performing at its best. We also provide continuous improvement recommendations as your business grows.',
      },
      {
        question: 'Do you sign NDAs?',
        answer:
          'Yes, we routinely sign NDAs to protect your ideas and confidential information. Your trust and privacy are important to us from the very first conversation.',
      },
    ],
  },
  {
    id: 'what-we-build',
    label: 'What we build',
    blurb: 'The kinds of products we make, and the stack behind them.',
    items: [
      {
        question: 'Can you redesign an existing website?',
        answer:
          'Absolutely. We specialize in modernizing outdated websites while preserving your SEO rankings, content, and brand identity. We make the transition seamless and stress-free.',
      },
      {
        question: 'Do you build custom software applications?',
        answer:
          'Yes, we build custom software including SaaS platforms, internal tools, API integrations, and AI-powered applications. Our Enterprise plan is designed for large-scale custom builds.',
      },
      {
        question: 'Which technologies do you use?',
        answer:
          'We build with modern, battle-tested technologies including Next.js, React, TypeScript, Node.js, Python, PostgreSQL, Tailwind CSS, and cloud platforms like AWS and Vercel. We choose the best stack for your specific project.',
      },
    ],
  },
  {
    id: 'pricing-plans',
    label: 'Pricing & plans',
    blurb: 'What things cost, what is included, and how billing changes.',
    items: [
      {
        question: 'How much does a website cost?',
        answer:
          'Pricing depends on complexity and features. Our plans start at ₹9,999/month for a Starter site and scale up based on your needs. Contact us for a custom quote tailored to your project.',
      },
      {
        question: 'Can I upgrade my plan later?',
        answer:
          "Yes, you can upgrade or switch plans at any time. We'll prorate the difference and seamlessly migrate your project to the new plan without any downtime.",
      },
      {
        question: 'Do you offer refunds?',
        answer:
          "Absolutely. We offer a 30-day money-back guarantee on all plans. If you're not satisfied for any reason, we'll refund your first payment in full.",
      },
      {
        question: 'Is hosting included in the price?',
        answer:
          "Yes, all plans include managed hosting on our enterprise-grade infrastructure. We handle performance, security, and uptime monitoring so you don't have to.",
      },
      {
        question: 'Can I request custom features?',
        answer:
          'Custom feature requests are available on the Professional plan and included with Enterprise. Our team will work with you to scope, build, and integrate exactly what you need.',
      },
    ],
  },
];

/** Flat list, used for the FAQPage structured data. */
export const allFaqs: FaqEntry[] = faqGroups.flatMap((group) => group.items);