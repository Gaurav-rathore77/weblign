import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  HiOutlineArrowLeft,
  HiOutlineArrowLongRight,
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineChevronRight,
} from 'react-icons/hi2';
import { FaLinkedinIn, FaWhatsapp, FaXTwitter, FaFacebookF, FaLink } from 'react-icons/fa6';
import { getBlogPost, getBlogPosts } from '@/lib/site-content';
import { blogHref, hasDisplayAuthor, normalizeBlogPost } from '@/components/blog-page/blogData';
import { siteUrl } from '@/constants';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: Promise<{ slug: string }>;
};

function slugifyHeading(value: string): string {
  return value
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'section';
}

function parseContent(content: string): { blocks: Array<{ type: 'h2' | 'h3' | 'p'; text: string; id?: string }>; toc: Array<{ id: string; text: string; level: 2 | 3 }> } {
  const lines = content.split(/\r?\n/);
  const blocks: Array<{ type: 'h2' | 'h3' | 'p'; text: string; id?: string }> = [];
  const toc: Array<{ id: string; text: string; level: 2 | 3 }> = [];
  const usedIds = new Set<string>();
  let paragraphBuffer: string[] = [];

  const flushParagraph = () => {
    const text = paragraphBuffer.join(' ').replace(/\s+/g, ' ').trim();
    if (text) blocks.push({ type: 'p', text });
    paragraphBuffer = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      continue;
    }
    const h2 = line.match(/^##\s+(.+)/);
    const h3 = line.match(/^###\s+(.+)/);
    if (h2 || h3) {
      flushParagraph();
      const level = h2 ? 2 : 3;
      const text = (h2?.[1] || h3?.[1] || '').trim();
      let id = slugifyHeading(text);
      let n = 2;
      while (usedIds.has(id)) { id = `${slugifyHeading(text)}-${n++}`; }
      usedIds.add(id);
      blocks.push({ type: level === 2 ? 'h2' : 'h3', text, id });
      toc.push({ id, text, level });
      continue;
    }
    paragraphBuffer.push(line.replace(/^#{1,6}\s*/, '').trim());
  }
  flushParagraph();

  return { blocks, toc: toc.filter((t) => t.level === 2 || t.level === 3) };
}

function fallbackContent(excerpt: string, category: string): string {
  return [
    excerpt,
    `## Understanding the topic`,
    `Practical ${category.toLowerCase()} decisions start with a clear goal, the right priorities, and a solution that fits how your business actually operates.`,
    `## What matters in practice`,
    `The most effective digital work balances usability, performance, maintainability, and clarity. Focusing on these fundamentals helps teams build solutions that remain useful as needs evolve.`,
    `## Moving forward`,
    `If you are planning a new website, system, or improvement, start with the problem you need to solve and the outcome you want to achieve. A focused approach often creates more value than adding complexity too early.`,
  ].join('\n\n');
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const postRaw = await getBlogPost(slug);
  if (!postRaw) return { title: 'Blog post not found' };
  const post = normalizeBlogPost(postRaw);

  const canonical = `${siteUrl}/blog/${blogHref(post).split('/').pop()}`;
  const imageUrl = post.image?.url
    ? post.image.url.startsWith('http')
      ? post.image.url
      : `${siteUrl}${post.image.url.startsWith('/') ? '' : '/'}${post.image.url}`
    : `${siteUrl}/opengraph-image`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: canonical,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const postRaw = await getBlogPost(slug);
  if (!postRaw) notFound();
  const post = normalizeBlogPost(postRaw);

  const allPosts = (await getBlogPosts()).map(normalizeBlogPost);
  const currentIndex = allPosts.findIndex((p) => p.id === post.id || blogHref(p) === blogHref(post));
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex >= 0 && currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const relatedPosts = allPosts
    .filter((item) => item.id !== post.id && item.category === post.category)
    .slice(0, 3);

  const content = post.content?.trim() || fallbackContent(post.excerpt, post.category);
  const { blocks, toc } = parseContent(content);
  const showToc = toc.length >= 3 || (content.length > 1800 && toc.length >= 2);
  const showAuthor = hasDisplayAuthor(post.author);

  const canonical = `${siteUrl}/blog/${blogHref(post).split('/').pop()}`;
  const imageUrl = post.image?.url
    ? post.image.url.startsWith('http')
      ? post.image.url
      : `${siteUrl}${post.image.url.startsWith('/') ? '' : '/'}${post.image.url}`
    : undefined;

  const shareText = encodeURIComponent(post.title);
  const shareUrl = encodeURIComponent(canonical);
  const shareLinks = [
    { label: 'X', href: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`, icon: FaXTwitter },
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, icon: FaLinkedinIn },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, icon: FaFacebookF },
    { label: 'WhatsApp', href: `https://wa.me/?text=${shareText}%20${shareUrl}`, icon: FaWhatsapp },
  ];

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: canonical,
    mainEntityOfPage: canonical,
    ...(post.date ? { datePublished: post.date } : {}),
    ...(showAuthor ? { author: { '@type': 'Person', name: post.author.name } } : { author: { '@type': 'Organization', name: 'Weblign' } }),
    publisher: { '@id': `${siteUrl}/#organization` },
    ...(imageUrl ? { image: [imageUrl] } : {}),
    articleSection: post.category,
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="border-b border-zinc-100 bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
            <Link href="/" className="transition hover:text-primary">Home</Link>
            <HiOutlineChevronRight className="h-4 w-4" aria-hidden="true" />
            <Link href="/blog" className="transition hover:text-primary">Blog</Link>
            <HiOutlineChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="line-clamp-1 font-medium text-zinc-700">{post.title}</span>
          </nav>
          <div className="mt-4">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-primary">
              <HiOutlineArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to all articles
            </Link>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <header className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{post.category}</span>
            {post.date ? <span className="inline-flex items-center gap-1.5"><HiOutlineCalendarDays className="h-4 w-4" aria-hidden="true" />{post.date}</span> : null}
            {post.readTime ? <span className="inline-flex items-center gap-1.5"><HiOutlineClock className="h-4 w-4" aria-hidden="true" />{post.readTime}</span> : null}
          </div>
          <h1 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">{post.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-600">{post.excerpt}</p>

          {(showAuthor || post.date) ? (
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-zinc-100 pb-7">
              {showAuthor ? (
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary" aria-hidden="true">
                    {post.author.initials || post.author.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900">{post.author.name}</p>
                    {post.author.role ? <p className="text-sm text-zinc-500">{post.author.role}</p> : null}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </header>

        {post.image?.url ? (
          <div className="relative mx-auto mt-8 aspect-[16/8] max-w-5xl overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-sm sm:mt-10">
            <Image src={post.image.url} alt={post.title} fill priority sizes="(max-width: 768px) 100vw, 1024px" className="object-cover" />
          </div>
        ) : null}

        <div className="mx-auto mt-10 grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
          <div className="min-w-0">
            <div className="space-y-6 text-[17px] leading-8 text-zinc-700">
              {blocks.map((block, index) => {
                if (block.type === 'h2') {
                  return <h2 key={`${block.id}-${index}`} id={block.id} className="scroll-mt-28 pt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">{block.text}</h2>;
                }
                if (block.type === 'h3') {
                  return <h3 key={`${block.id}-${index}`} id={block.id} className="scroll-mt-28 pt-1 text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">{block.text}</h3>;
                }
                return <p key={`p-${index}`}>{block.text}</p>;
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5 sm:p-6">
              <p className="text-sm font-semibold text-zinc-900">Share this article</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {shareLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-2 text-sm font-medium text-zinc-700 transition hover:border-primary/30 hover:text-primary"
                    aria-label={`Share on ${item.label}`}
                  >
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                    {item.label}
                  </a>
                ))}
                <a
                  href={canonical}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-2 text-sm font-medium text-zinc-700 transition hover:border-primary/30 hover:text-primary"
                  aria-label="Article link"
                >
                  <FaLink className="h-4 w-4" aria-hidden="true" />
                  Link
                </a>
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-primary/15 bg-gradient-to-br from-white via-zinc-50/70 to-primary/[0.06] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Work with Weblign</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">Ready to build or improve your digital solution?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">Tell us about your goals, challenges, or project idea. We can help you identify the right next step.</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                  Contact Weblign
                  <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/solutions" className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50">
                  Explore Solutions
                </Link>
              </div>
            </div>

            {(prevPost || nextPost) ? (
              <nav className="mt-10 grid gap-3 border-t border-zinc-100 pt-8 sm:grid-cols-2" aria-label="Article navigation">
                {prevPost ? (
                  <Link href={blogHref(prevPost)} className="group rounded-2xl border border-zinc-200 bg-white p-4 transition hover:border-primary/30 hover:shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Previous article</p>
                    <p className="mt-2 text-sm font-semibold leading-snug text-zinc-900 group-hover:text-primary">{prevPost.title}</p>
                  </Link>
                ) : <div />}
                {nextPost ? (
                  <Link href={blogHref(nextPost)} className="group rounded-2xl border border-zinc-200 bg-white p-4 text-left transition hover:border-primary/30 hover:shadow-sm sm:text-right">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Next article</p>
                    <p className="mt-2 text-sm font-semibold leading-snug text-zinc-900 group-hover:text-primary">{nextPost.title}</p>
                  </Link>
                ) : null}
              </nav>
            ) : null}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            {showToc ? (
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-zinc-900">Table of contents</p>
                <nav className="mt-3" aria-label="Table of contents">
                  <ul className="space-y-2 text-sm">
                    {toc.map((item) => (
                      <li key={item.id} className={item.level === 3 ? 'pl-3' : ''}>
                        <a href={`#${item.id}`} className="text-zinc-600 transition hover:text-primary">{item.text}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ) : null}

            <div className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-5">
              <p className="text-sm font-semibold text-zinc-900">Have a project in mind?</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">Tell us what you are building. We can help you shape the right solution and next steps.</p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:text-primary-dark">
                Get in touch <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {relatedPosts.length > 0 ? (
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Related articles</h2>
                <div className="mt-3 space-y-3">
                  {relatedPosts.map((related) => (
                    <Link key={related.id} href={blogHref(related)} className="group block rounded-xl border border-zinc-100 p-3 transition hover:border-primary/30 hover:bg-zinc-50">
                      <p className="text-xs font-medium text-primary">{related.category}</p>
                      <p className="mt-1 text-sm font-semibold leading-snug text-zinc-800 group-hover:text-primary">{related.title}</p>
                      <p className="mt-1 text-xs text-zinc-500">{[related.date, related.readTime].filter(Boolean).join(' • ')}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </article>
    </div>
  );
}
