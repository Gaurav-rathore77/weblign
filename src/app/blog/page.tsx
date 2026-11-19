import type { Metadata } from 'next';
import BlogHero from '@/components/blog-page/BlogHero';
import BlogGrid from '@/components/blog-page/BlogGrid';
import BlogCTA from '@/components/blog-page/BlogCTA';
import { getBlogPosts } from '@/lib/site-content';
import { siteUrl } from '@/constants';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    "Explore Weblign insights on web development, technology, AI and automation, e-commerce, software systems, and business growth.",
  keywords: [
    'Web Development Blog',
    'Technology Insights',
    'AI and Automation Blog',
    'E-commerce Insights',
    'Business Growth Blog',
    'Software and CRM Articles',
  ],
  openGraph: {
    title: 'Weblign Blog — Insights, Ideas & Digital Innovation',
    description:
      'Practical perspectives on web development, technology, AI, e-commerce, software, and business growth from Weblign.',
    type: 'website',
    url: `${siteUrl}/blog`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Weblign Blog' }],
  },
  alternates: { canonical: `${siteUrl}/blog` },
};

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <BlogHero />
      <section className="bg-zinc-50/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogGrid posts={posts} />
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogCTA />
        </div>
      </section>
    </>
  );
}
