export interface TechItem {
  name: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  icon: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'High-performance websites and web applications built with modern frameworks and best practices.',
    longDescription:
      'We build web experiences that load fast, rank high, and convert visitors into customers. From marketing sites to complex SaaS platforms, our team delivers scalable, maintainable solutions using the latest technologies.',
    features: [
      'Custom React & Next.js applications',
      'Server-side rendering & static generation',
      'Headless CMS integration',
      'API development & third-party integrations',
      'Performance optimization & Core Web Vitals',
      'SEO-friendly architecture',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    icon: '🌐',
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    longDescription:
      'We craft mobile apps that users love — fast, intuitive, and beautiful. Using React Native and native technologies, we deliver consistent experiences across iOS and Android without compromising quality.',
    features: [
      'Cross-platform apps with React Native',
      'Native iOS (Swift) & Android (Kotlin)',
      'Offline-first architecture',
      'Push notifications & real-time features',
      'App store optimization & deployment',
      'Performance monitoring & analytics',
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL', 'Redux'],
    icon: '📱',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'User-centered design that combines aesthetics with usability to create memorable experiences.',
    longDescription:
      'Great design is invisible — it just feels right. Our design team conducts deep user research, iterates on prototypes, and delivers pixel-perfect interfaces that users love to interact with.',
    features: [
      'User research & persona development',
      'Information architecture & wireframes',
      'Interactive prototypes (Figma)',
      'Visual design & design systems',
      'Usability testing & iteration',
      'Accessibility-first approach',
    ],
    technologies: ['Figma', 'Adobe Creative Suite', 'Principle', 'Maze', 'Storybook', 'Zeroheight'],
    icon: '🎨',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description:
      'Scalable online stores and e-commerce platforms built to convert visitors into customers.',
    longDescription:
      'We build e-commerce solutions that drive revenue. From custom storefronts to enterprise marketplaces, our platforms are optimized for conversion speed, mobile shopping, and seamless checkout.',
    features: [
      'Custom storefront development',
      'Secure payment gateway integration',
      'Shopping cart & checkout optimization',
      'Inventory & order management systems',
      'Multi-currency & multi-language support',
      'Analytics & conversion tracking',
    ],
    technologies: ['Shopify', 'Next.js', 'Stripe', 'Algolia', 'Sanity', 'BigCommerce'],
    icon: '🛒',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description:
      'Cloud infrastructure and DevOps practices that keep your applications running smoothly.',
    longDescription:
      'We design and manage cloud infrastructure that scales with your business. From CI/CD pipelines to 24/7 monitoring, our DevOps practices ensure your applications are reliable, secure, and performant.',
    features: [
      'Cloud architecture design & migration',
      'CI/CD pipeline automation',
      'Containerization (Docker & Kubernetes)',
      'Infrastructure as Code (Terraform)',
      'Performance monitoring & alerting',
      'Security audits & compliance',
    ],
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Datadog'],
    icon: '☁️',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description:
      'Intelligent automation solutions that streamline operations and unlock data-driven insights.',
    longDescription:
      'We help businesses harness the power of AI. From custom machine learning models to workflow automation, we build intelligent systems that save time, reduce costs, and uncover valuable insights.',
    features: [
      'Custom ML model development & deployment',
      'Natural language processing solutions',
      'Workflow automation (RPA)',
      'Data pipeline & analytics',
      'AI-powered chatbots & assistants',
      'Predictive analytics & forecasting',
    ],
    technologies: ['Python', 'TensorFlow', 'OpenAI', 'LangChain', 'Airflow', 'Streamlit'],
    icon: '🤖',
  },
];

export const approachSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We dive deep into your business goals, target audience, and competitive landscape to define a clear roadmap for success.',
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description:
      'Our designers create wireframes and high-fidelity prototypes, iterating based on your feedback until every pixel is perfect.',
  },
  {
    number: '03',
    title: 'Development & Sprints',
    description:
      'We build your product in agile sprints, delivering working features incrementally so you can see progress in real time.',
  },
  {
    number: '04',
    title: 'Testing & Launch',
    description:
      'Rigorous QA testing, performance optimization, and a smooth deployment process ensure a flawless launch.',
  },
  {
    number: '05',
    title: 'Growth & Optimization',
    description:
      'Post-launch, we continue to monitor, optimize, and evolve your product based on real user data and feedback.',
  },
];
