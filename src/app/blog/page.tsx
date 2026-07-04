import type { Metadata } from 'next';
import { BlogHero, BlogGrid, BlogCTA } from '@/components/blog-page';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read Weblign\'s blog for expert insights on web development, UI/UX design, AI & tech, and digital business strategy.',
  openGraph: {
    title: 'Weblign Blog — Insights, Guides & Behind the Scenes',
    description:
      'Thoughts on web development, design, business strategy, and emerging tech from the Weblign team.',
  },
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
