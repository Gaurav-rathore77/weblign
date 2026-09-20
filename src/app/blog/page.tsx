import type { Metadata } from 'next';
import { BlogHero, BlogGrid, BlogCTA } from '@/components/blog-page';
import { siteUrl } from '@/constants';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    "Read Weblign's blog for expert insights on web development, UI/UX design, AI & tech, and digital business strategy.",
  keywords: [
    'Web Development Blog',
    'UI/UX Design Articles',
    'AI Technology Blog',
    'Digital Strategy Insights',
    'Next.js Tutorials',
    'React Development Tips',
    'Tech Industry Trends',
    'Software Engineering Blog',
  ],
  openGraph: {
    title: 'Weblign Blog — Insights, Guides & Behind the Scenes',
    description:
      'Thoughts on web development, design, business strategy, and emerging tech from the Weblign team.',
    type: 'website',
    url: `${siteUrl}/blog`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Weblign Blog' }],
  },
  alternates: { canonical: `${siteUrl}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <section className="bg-zinc-50/50 py-20 sm:py-28 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogGrid />
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogCTA />
        </div>
      </section>
    </>
  );
}
