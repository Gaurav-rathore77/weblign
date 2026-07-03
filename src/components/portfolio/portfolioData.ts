export const categories = [
  'All',
  'Web Apps',
  'Business Websites',
  'E-commerce',
  'UI/UX',
  'Mobile Apps',
  'Admin Dashboards',
] as const;

export type Category = (typeof categories)[number];

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  image: string;
  gradient: string;
  tech: string[];
  metrics: string;
  demoUrl: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  timeline: string;
  results: string[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    id: 'fintech-dashboard',
    title: 'FinTech Analytics Hub',
    description: 'Real-time financial analytics platform processing millions of transactions daily.',
    category: 'Web Apps',
    image: '',
    gradient: 'from-blue-500/10 via-indigo-500/10 to-purple-500/10',
    tech: ['Next.js', 'TypeScript', 'Node.js'],
    metrics: '+120% Conversions',
    demoUrl: '#',
    overview: 'A comprehensive financial analytics dashboard that provides real-time insights into transaction data, user behavior, and business performance metrics.',
    problem: 'The client had fragmented data across multiple platforms with no unified view, making it impossible to make data-driven decisions in real-time.',
    solution: 'We built a centralized analytics platform aggregating data from 15+ sources with real-time processing, custom visualization widgets, and role-based access controls.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Tailwind CSS'],
    timeline: '5 months',
    results: [
      '120% increase in conversion rates',
      '60% reduction in reporting time',
      'Real-time data processing for 2M+ daily transactions',
    ],
    testimonial: {
      quote: 'This platform transformed how we understand our business. The real-time analytics have become indispensable for our team.',
      name: 'Michael Chen',
      role: 'CTO, FinSecure Inc.',
    },
  },
  {
    id: 'luxury-ecommerce',
    title: 'Luxe Boutique Online',
    description: 'Premium e-commerce experience for a luxury fashion brand with global reach.',
    category: 'E-commerce',
    image: '',
    gradient: 'from-rose-500/10 via-pink-500/10 to-orange-500/10',
    tech: ['React', 'Next.js', 'MongoDB'],
    metrics: '50K+ Monthly Users',
    demoUrl: '#',
    overview: 'A high-end e-commerce platform designed for a luxury fashion brand, featuring immersive product showcases and seamless checkout.',
    problem: 'The existing platform was slow, not mobile-optimized, and had a 68% cart abandonment rate, severely impacting revenue.',
    solution: 'We redesigned the entire shopping experience with server-side rendering, optimized images, one-click checkout, and personalized recommendations.',
    technologies: ['Next.js', 'TypeScript', 'React', 'MongoDB', 'Stripe', 'Redis', 'Docker', 'Tailwind CSS'],
    timeline: '6 months',
    results: [
      '50K+ monthly active users',
      '35% reduction in cart abandonment',
      '92% mobile satisfaction score',
    ],
    testimonial: {
      quote: 'The new platform exceeded our expectations. Our online sales have tripled and customer satisfaction is at an all-time high.',
      name: 'Sophie Laurent',
      role: 'CEO, Luxe Boutique',
    },
  },
  {
    id: 'health-app',
    title: 'VitalCare Health App',
    description: 'Cross-platform health monitoring app connecting patients with healthcare providers.',
    category: 'Mobile Apps',
    image: '',
    gradient: 'from-emerald-500/10 via-teal-500/10 to-cyan-500/10',
    tech: ['React Native', 'TypeScript', 'Node.js'],
    metrics: '4.8★ App Store',
    demoUrl: '#',
    overview: 'A cross-platform mobile application that connects patients with healthcare providers for remote monitoring, appointments, and prescriptions.',
    problem: 'Patients needed a better way to manage chronic conditions remotely. The existing solution was clunky and lacked real-time communication features.',
    solution: 'We developed a cross-platform app with real-time video consultations, medication tracking, wearable device integration, and AI-powered health insights.',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebRTC', 'Firebase', 'Tailwind CSS'],
    timeline: '7 months',
    results: [
      '4.8★ average rating on App Store',
      '200K+ downloads in first quarter',
      '40% reduction in hospital readmissions',
    ],
    testimonial: {
      quote: 'VitalCare has revolutionized how we manage patient care remotely. The impact on patient outcomes has been remarkable.',
      name: 'Dr. Sarah Williams',
      role: 'Medical Director, VitalCare',
    },
  },
  {
    id: 'corporate-site',
    title: 'NovaTech Corporate Website',
    description: 'Enterprise website redesign for a global technology company.',
    category: 'Business Websites',
    image: '',
    gradient: 'from-sky-500/10 via-blue-500/10 to-indigo-500/10',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    metrics: '3s Load Time',
    demoUrl: '#',
    overview: 'A complete digital transformation of a global tech company\'s online presence, focusing on performance, accessibility, and brand storytelling.',
    problem: 'The old website was outdated, slow (8s load time), not accessible, and failed to communicate the company\'s innovative brand effectively.',
    solution: 'We rebuilt the site with modern web technologies, focusing on performance optimization, WCAG 2.1 AA compliance, and a compelling visual narrative.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Sanity CMS', 'Vercel', 'AWS'],
    timeline: '4 months',
    results: [
      'Sub-3 second page load time',
      '45% increase in page views',
      'WCAG 2.1 AA accessibility compliant',
    ],
    testimonial: {
      quote: 'Our new website perfectly captures our brand identity and has significantly improved how we engage with prospects.',
      name: 'James Rodriguez',
      role: 'VP Marketing, NovaTech',
    },
  },
  {
    id: 'design-system',
    title: 'FlowUI Design System',
    description: 'Comprehensive design system powering 12+ products across a global team.',
    category: 'UI/UX',
    image: '',
    gradient: 'from-violet-500/10 via-purple-500/10 to-fuchsia-500/10',
    tech: ['React', 'TypeScript', 'Storybook'],
    metrics: '12 Products',
    demoUrl: '#',
    overview: 'A scalable design system and component library that unified design language across 12+ products and 50+ designers and engineers.',
    problem: 'Inconsistent design across products led to duplicated effort, brand fragmentation, and slow development cycles.',
    solution: 'We created a comprehensive design system with 200+ accessible components, detailed documentation, and automated visual regression testing.',
    technologies: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Figma', 'Chromatic', 'AWS'],
    timeline: '8 months',
    results: [
      'Powers 12+ products',
      '60% faster design-to-development',
      'Adopted by 50+ team members',
    ],
    testimonial: {
      quote: 'FlowUI has been a game-changer for our team. Development speed has improved dramatically and our products finally feel cohesive.',
      name: 'Elena Kowalski',
      role: 'Head of Design, TechFlow',
    },
  },
  {
    id: 'admin-portal',
    title: 'CloudAdmin Portal',
    description: 'Enterprise admin dashboard managing infrastructure across 3 cloud providers.',
    category: 'Admin Dashboards',
    image: '',
    gradient: 'from-slate-500/10 via-gray-500/10 to-zinc-500/10',
    tech: ['React', 'Node.js', 'Docker'],
    metrics: '99.9% Uptime',
    demoUrl: '#',
    overview: 'A unified cloud management dashboard that provides centralized control across AWS, Azure, and GCP infrastructure.',
    problem: 'Managing multi-cloud infrastructure required switching between 3 different consoles with no unified view of costs, performance, or security.',
    solution: 'We built a single-pane-of-glass dashboard with real-time monitoring, cost optimization insights, automated compliance checks, and one-click deployments.',
    technologies: ['React', 'Node.js', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'Terraform', 'Tailwind CSS'],
    timeline: '6 months',
    results: [
      '99.9% platform uptime',
      '30% reduction in cloud costs',
      'Centralized management of 200+ services',
    ],
    testimonial: {
      quote: 'Having a single dashboard for all our cloud infrastructure has simplified our operations enormously. The cost savings alone justified the investment.',
      name: 'David Park',
      role: 'VP Engineering, CloudScale',
    },
  },
];

export const achievements = [
  { value: '500', suffix: '+', label: 'Projects Delivered' },
  { value: '99', suffix: '%', label: 'Client Satisfaction' },
  { value: '50', suffix: 'M+', label: 'Users Reached' },
  { value: '20', suffix: '+', label: 'Industries Served' },
];

export const techStack = [
  'Next.js', 'TypeScript', 'React', 'Node.js',
  'MongoDB', 'Tailwind CSS', 'Docker', 'AWS',
];

export const featuredProject: Project = {
  id: 'featured-ride-sharing',
  title: 'UrbanGo — Ride Sharing Platform',
  description: 'A complete ride-sharing ecosystem serving 5 million users across 15 cities.',
  category: 'Mobile Apps',
  image: '',
  gradient: 'from-amber-500/10 via-orange-500/10 to-red-500/10',
  tech: ['React Native', 'Node.js', 'MongoDB'],
  metrics: '5M+ Users',
  demoUrl: '#',
  overview: 'A comprehensive ride-sharing platform connecting passengers with drivers across multiple cities with real-time tracking, dynamic pricing, and in-app payments.',
  problem: 'UrbanGo needed to scale their ride-sharing platform rapidly while maintaining reliability. Their legacy system couldn\'t handle the growing user base and frequent feature requests.',
  solution: 'We rebuilt the entire platform using a microservices architecture with real-time communication, dynamic pricing algorithms, and a robust matching engine.',
  technologies: ['React Native', 'Node.js', 'MongoDB', 'Redis', 'Kubernetes', 'Google Maps API', 'Stripe'],
  timeline: '12 months',
  results: [
    '5M+ registered users across 15 cities',
    '99.5% platform uptime',
    '250K+ rides completed daily',
  ],
  testimonial: {
    quote: 'Working with this team was transformative. They didn\'t just build a platform — they became true partners in our growth journey.',
    name: 'Alexandra Moreau',
    role: 'CEO & Founder, UrbanGo',
  },
};
