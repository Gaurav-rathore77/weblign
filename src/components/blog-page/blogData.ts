export interface BlogPost {
  id: string;
  /** SEO-friendly URL segment. Falls back to a slugified title when absent
   *  (older entries saved via the admin panel may not have one). */
  slug?: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: { name: string; role: string; initials: string };
  image: { gradient: string; iconName: string; url: string };
  content?: string;
  href: string;
}

/** Mirrors the lookup order used by `getBlogPost`. */
export function blogSlug(post: BlogPost): string {
  return post.slug?.trim() || slugify(post.title);
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

/** Canonical, indexable URL for a post. */
export function blogHref(post: BlogPost): string {
  return post.href && post.href !== '#' ? post.href : `/blog/${blogSlug(post)}`;
}

export const BLOG_CATEGORIES = [
  'All',
  'Web Development',
  'Technology',
  'AI & Automation',
  'E-commerce',
  'Business Growth',
  'Software & CRM',
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

// Backward-compatible export name used by existing components/imports.
export const categories = BLOG_CATEGORIES;

const LEGACY_CATEGORY_MAP: Record<string, Exclude<BlogCategory, 'All'>> = {
  Development: 'Web Development',
  Design: 'Technology',
  Business: 'Business Growth',
  'AI & Tech': 'Technology',
  'AI & Automation': 'AI & Automation',
  'E-commerce': 'E-commerce',
  Ecommerce: 'E-commerce',
  'Web Development': 'Web Development',
  Technology: 'Technology',
  'Business Growth': 'Business Growth',
  'Software & CRM': 'Software & CRM',
};

export function normalizeBlogCategory(category: string | undefined | null): Exclude<BlogCategory, 'All'> {
  if (!category) return 'Technology';
  return LEGACY_CATEGORY_MAP[category] ?? 'Technology';
}

export function normalizeBlogPost(post: BlogPost): BlogPost {
  return {
    ...post,
    category: normalizeBlogCategory(post.category),
  };
}

export function hasDisplayAuthor(author?: BlogPost['author'] | null): boolean {
  if (!author) return false;
  const name = (author.name || '').trim();
  if (!name) return false;
  const lowered = name.toLowerCase();
  return !['sample author', 'anonymous', 'guest author', 'unknown', 'n/a'].includes(lowered);
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'building-performant-nextjs-apps-with-turbopack',
    title: 'Building Performant Next.js Apps with Turbopack',
    excerpt:
      'Learn how Turbopack speeds up local development and production builds in Next.js 16, and how to configure it for maximum performance.',
    category: 'Web Development',
    date: 'Jun 28, 2026',
    readTime: '8 min read',
    author: { name: 'Sachin Rathore', role: 'Lead Developer', initials: 'SR' },
    image: {
      gradient: 'from-blue-600/20 to-blue-600/20',
      iconName: 'HiOutlineBolt',
      url: '/images/blog-nextjs.webp',
    },
    href: '#',
  },
  {
    id: '2',
    slug: 'future-of-ui-design-ai-assisted-workflows',
    title: 'The Future of UI Design: AI-Assisted Workflows',
    excerpt:
      'How AI tools are reshaping the design process — from wireframing to high-fidelity prototypes — and what it means for designers.',
    category: 'Technology',
    date: 'Jun 20, 2026',
    readTime: '6 min read',
    author: { name: 'Sachin Rathore', role: 'Lead Developer', initials: 'SR' },
    image: {
      gradient: 'from-blue-600/20 to-blue-600/20',
      iconName: 'HiOutlinePaintBrush',
      url: '/images/blog-ui-design.webp',
    },
    href: '#',
  },
  {
    id: '3',
    slug: 'scaling-from-startup-to-enterprise-technical-roadmap',
    title: 'Scaling from Startup to Enterprise: A Technical Roadmap',
    excerpt:
      'Key architectural decisions and infrastructure patterns that help businesses scale without costly rewrites down the line.',
    category: 'Business Growth',
    date: 'Jun 12, 2026',
    readTime: '10 min read',
    author: { name: 'Sachin Rathore', role: 'Lead Developer', initials: 'SR' },
    image: {
      gradient: 'from-blue-600/20 to-blue-600/20',
      iconName: 'HiOutlineArrowTrendingUp',
      url: '/images/blog-scaling.webp',
    },
    href: '#',
  },
  {
    id: '4',
    slug: 'building-real-time-saas-analytics-dashboard',
    title: 'How We Built a Real-Time SaaS Analytics Dashboard',
    excerpt:
      'A behind-the-scenes look at the architecture, challenges, and solutions involved in building CloudPulse for our client.',
    category: 'Software & CRM',
    date: 'Jun 5, 2026',
    readTime: '12 min read',
    author: { name: 'Anas Khan', role: 'Full Stack Developer', initials: 'AK' },
    image: {
      gradient: 'from-blue-600/20 to-blue-600/20',
      iconName: 'HiOutlineChartBarSquare',
      url: '/images/blog-saas-dashboard.webp',
    },
    href: '#',
  },
  {
    id: '5',
    slug: 'accessibility-first-why-it-matters-and-where-to-start',
    title: 'Accessibility-First: Why It Matters and Where to Start',
    excerpt:
      'Practical steps to make your web applications accessible to everyone, from semantic HTML to ARIA patterns and testing tools.',
    category: 'Web Development',
    date: 'May 28, 2026',
    readTime: '7 min read',
    author: { name: 'Sachin Rathore', role: 'Lead Developer', initials: 'SR' },
    image: {
      gradient: 'from-blue-600/20 to-blue-600/20',
      iconName: 'HiOutlineHandRaised',
      url: '/images/blog-accessibility.webp',
    },
    href: '#',
  },
  {
    id: '6',
    slug: 'integrating-llms-into-your-web-application',
    title: 'Integrating LLMs into Your Web Application',
    excerpt:
      'A practical guide to adding AI capabilities — chatbots, content generation, and smart search — into existing web products.',
    category: 'AI & Automation',
    date: 'May 18, 2026',
    readTime: '9 min read',
    author: { name: 'Sachin Rathore', role: 'Lead Developer', initials: 'SR' },
    image: {
      gradient: 'from-blue-600/20 to-blue-600/20',
      iconName: 'HiOutlineCpuChip',
      url: '/images/blog-llm.webp',
    },
    href: '#',
  },
  {
    id: '7',
    slug: 'ecommerce-migration-monolith-to-headless-cms',
    title: 'E-commerce Migration: From Monolith to Headless CMS',
    excerpt:
      'Lessons learned from migrating a large e-commerce platform to a headless architecture with Next.js and a modern CMS.',
    category: 'E-commerce',
    date: 'May 10, 2026',
    readTime: '11 min read',
    author: { name: 'Anas Khan', role: 'Full Stack Developer', initials: 'AK' },
    image: {
      gradient: 'from-blue-600/20 to-red-600/20',
      iconName: 'HiOutlineShoppingCart',
      url: '/images/blog-ecommerce.webp',
    },
    href: '#',
  },
  {
    id: '8',
    slug: 'designing-for-conversion-psychology-principles',
    title: 'Designing for Conversion: Psychology Principles That Work',
    excerpt:
      'Understand the psychological triggers — social proof, scarcity, reciprocity — that drive user action and boost conversion rates.',
    category: 'Business Growth',
    date: 'May 4, 2026',
    readTime: '6 min read',
    author: { name: 'Sachin Rathore', role: 'Lead Developer', initials: 'SR' },
    image: {
      gradient: 'from-blue-600/20 to-blue-600/20',
      iconName: 'HiOutlineLightBulb',
      url: '/images/blog-conversion.webp',
    },
    href: '#',
  },
  {
    id: '9',
    slug: 'edge-computing-with-nextjs-deploying-at-the-edge',
    title: 'Edge Computing with Next.js: Deploying at the Edge',
    excerpt:
      'How to leverage edge functions and regional deployments to reduce latency and improve global performance for your Next.js app.',
    category: 'Technology',
    date: 'Apr 25, 2026',
    readTime: '8 min read',
    author: { name: 'Sachin Rathore', role: 'Lead Developer', initials: 'SR' },
    image: {
      gradient: 'from-blue-600/20 to-blue-600/20',
      iconName: 'HiOutlineGlobeAlt',
      url: '/images/blog-edge.webp',
    },
    href: '#',
  },
];
