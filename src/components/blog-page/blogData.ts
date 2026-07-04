export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: { name: string; role: string; initials: string };
  image: { gradient: string; emoji: string };
  href: string;
}

export const categories = ['All', 'Development', 'Design', 'Business', 'AI & Tech'] as const;

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Performant Next.js Apps with Turbopack',
    excerpt:
      'Learn how Turbopack speeds up local development and production builds in Next.js 16, and how to configure it for maximum performance.',
    category: 'Development',
    date: 'Jun 28, 2026',
    readTime: '8 min read',
    author: { name: 'Sachin Rathore', role: 'Lead Developer', initials: 'SR' },
    image: { gradient: 'from-blue-600/20 to-cyan-600/20', emoji: '⚡' },
    href: '#',
  },
  {
    id: '2',
    title: 'The Future of UI Design: AI-Assisted Workflows',
    excerpt:
      'How AI tools are reshaping the design process — from wireframing to prototyping — and what it means for designers and developers.',
    category: 'Design',
    date: 'Jun 22, 2026',
    readTime: '6 min read',
    author: { name: 'Sachin Rathore', role: 'Lead Developer', initials: 'SR' },
    image: { gradient: 'from-purple-600/20 to-pink-600/20', emoji: '🎨' },
    href: '#',
  },
  {
    id: '3',
    title: 'Scaling from Startup to Enterprise: A Technical Roadmap',
    excerpt:
      'A practical guide to scaling your architecture, team, and processes as you grow from MVP to millions of users.',
    category: 'Business',
    date: 'Jun 15, 2026',
    readTime: '10 min read',
    author: { name: 'Sachin Rathore', role: 'Lead Developer', initials: 'SR' },
    image: { gradient: 'from-emerald-600/20 to-teal-600/20', emoji: '📈' },
    href: '#',
  },
  {
    id: '4',
    title: 'How We Built a Real-Time SaaS Analytics Dashboard',
    excerpt:
      'A deep dive into the architecture, tech stack, and design decisions behind a real-time analytics dashboard handling millions of events.',
    category: 'Development',
    date: 'Jun 8, 2026',
    readTime: '12 min read',
    author: { name: 'Sachin Rathore', role: 'Lead Developer', initials: 'SR' },
    image: { gradient: 'from-orange-600/20 to-amber-600/20', emoji: '📊' },
    href: '#',
  },
  {
    id: '5',
    title: 'Accessibility First: Why It Matters and Where to Start',
    excerpt:
      'An accessibility-first approach isn\'t just ethical — it improves SEO, user experience, and conversion rates across the board.',
    category: 'Design',
    date: 'May 29, 2026',
    readTime: '7 min read',
    author: { name: 'Sachin Rathore', role: 'Lead Developer', initials: 'SR' },
    image: { gradient: 'from-sky-600/20 to-indigo-600/20', emoji: '♿' },
    href: '#',
  },
  {
    id: '6',
    title: 'Integrating LLMs into Your Web Application',
    excerpt:
      'A beginner-friendly walkthrough of adding GPT-powered features — chatbots, content generation, and smart search — to your web app.',
    category: 'AI & Tech',
    date: 'May 20, 2026',
    readTime: '9 min read',
    author: { name: 'Sachin Rathore', role: 'Lead Developer', initials: 'SR' },
    image: { gradient: 'from-violet-600/20 to-fuchsia-600/20', emoji: '🤖' },
    href: '#',
  },
  {
    id: '7',
    title: 'E-Commerce Migration: Monolith to Headless CMS',
    excerpt:
      'Why we migrated a legacy e-commerce platform to a headless architecture and how it improved performance, flexibility, and revenue.',
    category: 'Development',
    date: 'May 12, 2026',
    readTime: '11 min read',
    author: { name: 'Sachin Rathore', role: 'Lead Developer', initials: 'SR' },
    image: { gradient: 'from-rose-600/20 to-red-600/20', emoji: '🛒' },
    href: '#',
  },
  {
    id: '8',
    title: 'Designing for Conversion: Psychology Principles That Work',
    excerpt:
      'Understand the psychological triggers — social proof, scarcity, reciprocity — that drive user action and boost conversion rates.',
    category: 'Business',
    date: 'May 4, 2026',
    readTime: '6 min read',
    author: { name: 'Sachin Rathore', role: 'Lead Developer', initials: 'SR' },
    image: { gradient: 'from-yellow-600/20 to-orange-600/20', emoji: '🧠' },
    href: '#',
  },
  {
    id: '9',
    title: 'Edge Computing with Next.js: Deploying at the Edge',
    excerpt:
      'How to leverage edge functions and regional deployments to reduce latency and improve global performance for your Next.js app.',
    category: 'AI & Tech',
    date: 'Apr 25, 2026',
    readTime: '8 min read',
    author: { name: 'Sachin Rathore', role: 'Lead Developer', initials: 'SR' },
    image: { gradient: 'from-cyan-600/20 to-blue-600/20', emoji: '🌐' },
    href: '#',
  },
];
