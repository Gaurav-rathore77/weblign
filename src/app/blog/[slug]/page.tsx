import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  HiOutlineArrowLeft,
  HiOutlineArrowLongRight,
  HiOutlineCalendarDays,
  HiOutlineClock,
} from 'react-icons/hi2';
import { getBlogPost, getBlogPosts } from '@/lib/site-content';
import { siteUrl } from '@/constants';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: Promise<{ slug: string }>;
};

function postHref(id: string, href?: string): string {
  return href && href !== '#' ? href : `/blog/${id}`;
}

function fallbackContent(title: string, excerpt: string, category: string): string {
  return [
    excerpt,
    `Great ${category.toLowerCase()} work starts with a clear problem, a thoughtful process, and a team that keeps learning. In this article, we break down the ideas that shape how we approach modern digital products at Weblign.`,
    'The most useful solutions are not built from complexity for its own sake. They begin with user needs, measurable outcomes, and a simple plan that allows the team to learn quickly.',
    'We focus on practical foundations such as performance, accessibility, maintainable code, and clear communication. These decisions compound over time and make every future release easier to ship.',
    `If you are planning a new website or product, use this as a starting point for your next conversation. A small, focused improvement can often create more value than a large change without a clear outcome.`,
  ].join('\n\n');
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return { title: 'Blog post not found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `${siteUrl}/blog/${post.id}`,
      images: post.image.url
        ? [{ url: `${siteUrl}${post.image.url}`, width: 1200, height: 630, alt: post.title }]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const [allPosts] = await Promise.all([getBlogPosts()]);
  const relatedPosts = allPosts
    .filter((item) => item.id !== post.id && item.category === post.category)
    .slice(0, 3);
  const content = post.content?.trim() || fallbackContent(post.title, post.excerpt, post.category);
  const paragraphs = content
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/^#{1,6}\s*/, '').trim())
    .filter(Boolean);

  return (
    <div className="bg-white dark:bg-[#09090b]">
      <section className="border-b border-zinc-100 py-8 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-primary dark:text-zinc-400">
            <HiOutlineArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to all articles
          </Link>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <header className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{post.category}</span>
            <span className="inline-flex items-center gap-1.5"><HiOutlineCalendarDays className="h-4 w-4" aria-hidden="true" />{post.date}</span>
            <span className="inline-flex items-center gap-1.5"><HiOutlineClock className="h-4 w-4" aria-hidden="true" />{post.readTime}</span>
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl dark:text-white">{post.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">{post.excerpt}</p>
          <div className="mt-7 flex items-center gap-3 border-b border-zinc-100 pb-8 dark:border-zinc-800">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary" aria-hidden="true">{post.author.initials}</div>
            <div>
              <p className="font-semibold text-zinc-900 dark:text-white">{post.author.name}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{post.author.role}</p>
            </div>
          </div>
        </header>

        {post.image.url && (
          <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-3xl bg-zinc-100 shadow-xl dark:bg-[#27272a]">
            <Image src={post.image.url} alt={post.title} fill priority sizes="(max-width: 768px) 100vw, 896px" className="object-cover" />
          </div>
        )}

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0">
            <div className="blog-article-body space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p key={`${post.id}-paragraph-${index}`}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-3 border-t border-zinc-100 pt-6 dark:border-zinc-800">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-dark">
                Discuss your project <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/blog" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:text-white">More articles</Link>
            </div>
          </div>

          <aside className="space-y-5 lg:pt-1">
            <div className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-5">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">Have a project in mind?</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">Tell us what you are building. Our team will help you find the right next step.</p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Get in touch <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>

            {relatedPosts.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">More in {post.category}</h2>
                <div className="mt-3 space-y-2">
                  {relatedPosts.map((related) => (
                    <Link key={related.id} href={postHref(related.id, related.href)} className="group block rounded-xl border border-zinc-100 p-3 transition hover:border-primary/30 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">
                      <p className="text-sm font-medium leading-snug text-zinc-800 group-hover:text-primary dark:text-zinc-200">{related.title}</p>
                      <p className="mt-1 text-xs text-zinc-400">{related.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </article>
    </div>
  );
}
