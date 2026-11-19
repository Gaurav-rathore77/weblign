'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState, type ElementType } from 'react';
import {
  HiOutlineArrowLongRight,
  HiOutlineBolt,
  HiOutlinePaintBrush,
  HiOutlineArrowTrendingUp,
  HiOutlineChartBarSquare,
  HiOutlineCpuChip,
  HiOutlineShoppingCart,
  HiOutlineLightBulb,
  HiOutlineGlobeAlt,
  HiOutlineHandRaised,
  HiOutlineMagnifyingGlass,
  HiOutlineCalendarDays,
  HiOutlineClock,
} from 'react-icons/hi2';
import {
  blogHref,
  categories,
  hasDisplayAuthor,
  normalizeBlogPost,
  type BlogPost,
} from './blogData';

const iconComponents: Record<string, ElementType> = {
  HiOutlineBolt,
  HiOutlinePaintBrush,
  HiOutlineArrowTrendingUp,
  HiOutlineChartBarSquare,
  HiOutlineCpuChip,
  HiOutlineShoppingCart,
  HiOutlineLightBulb,
  HiOutlineGlobeAlt,
  HiOutlineHandRaised,
};

function BlogIcon({ name, className }: { name: string; className?: string }) {
  const Comp = iconComponents[name];
  return Comp ? <Comp className={className} aria-hidden="true" /> : null;
}

function Meta({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
      {post.date ? (
        <span className="inline-flex items-center gap-1.5">
          <HiOutlineCalendarDays className="h-4 w-4" aria-hidden="true" />
          <time dateTime={post.date}>{post.date}</time>
        </span>
      ) : null}
      {post.readTime ? (
        <span className="inline-flex items-center gap-1.5">
          <HiOutlineClock className="h-4 w-4" aria-hidden="true" />
          {post.readTime}
        </span>
      ) : null}
    </div>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  const showAuthor = hasDisplayAuthor(post.author);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link href={blogHref(post)} className="flex h-full flex-col">
        <div className={`relative flex aspect-[16/10] items-end bg-gradient-to-br ${post.image?.gradient || 'from-primary/10 to-accent/10'}`}>
          {post.image?.url ? (
            <Image
              src={post.image.url}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
              className="object-cover"
            />
          ) : null}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle at 25px 25px, currentColor 1px, transparent 0)', backgroundSize: '30px 30px' }}
            aria-hidden="true"
          />
          <span className="relative p-5 text-3xl text-white drop-shadow-sm" aria-hidden="true">
            <BlogIcon name={post.image?.iconName || 'HiOutlineLightBulb'} className="h-8 w-8" />
          </span>
          <span className="absolute right-3 top-3 rounded-full border border-white/30 bg-white/85 px-2.5 py-0.5 text-[10px] font-semibold text-zinc-700 shadow-sm backdrop-blur-md">
            {post.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <Meta post={post} />
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-950 transition-colors group-hover:text-primary">
            {post.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">{post.excerpt}</p>

          <div className="mt-auto flex items-center gap-3 pt-5">
            {showAuthor ? (
              <>
                <div aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                  {post.author.initials || post.author.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-zinc-900">{post.author.name}</div>
                  {post.author.role ? <div className="truncate text-xs text-zinc-500">{post.author.role}</div> : null}
                </div>
              </>
            ) : (
              <span className="text-xs font-medium text-zinc-500">Weblign Insights</span>
            )}
            <HiOutlineArrowLongRight className="ml-auto h-5 w-5 text-zinc-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" />
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function BlogGrid({ posts = [] }: { posts?: BlogPost[] }) {
  const normalized = useMemo(() => (posts || []).map(normalizeBlogPost), [posts]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return normalized.filter((post) => {
      const categoryMatch = activeCategory === 'All' || post.category === activeCategory;
      if (!categoryMatch) return false;
      if (!q) return true;
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        (post.category || '').toLowerCase().includes(q)
      );
    });
  }, [normalized, activeCategory, query]);

  const featured = filtered[0] || normalized[0] || null;
  const latestBase = featured ? filtered.filter((p) => p.id !== featured.id) : filtered;
  const latest = latestBase.slice(0, visibleCount);
  const canLoadMore = latestBase.length > latest.length;

  if (normalized.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center">
        <h2 className="text-xl font-semibold text-zinc-900">No articles yet</h2>
        <p className="mt-2 text-sm text-zinc-600">Blog articles will appear here once published. The blog structure is ready for upcoming insights and updates.</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {featured ? (
        <section aria-label="Featured article" className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <Link href={blogHref(featured)} className="group relative block min-h-[260px] bg-gradient-to-br from-zinc-100 to-zinc-50 sm:min-h-[340px]">
              {featured.image?.url ? (
                <Image
                  src={featured.image.url}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent lg:bg-gradient-to-r" aria-hidden="true" />
            </Link>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Featured article
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
                <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">{featured.category}</span>
                <Meta post={featured} />
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                <Link href={blogHref(featured)} className="transition-colors hover:text-primary">{featured.title}</Link>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">{featured.excerpt}</p>
              <div className="mt-6">
                <Link href={blogHref(featured)} className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-dark">
                  Read article <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section aria-label="Browse articles" className="space-y-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">Latest articles</h2>
            <p className="mt-1 text-sm text-zinc-600">Explore insights by category or search for a topic.</p>
          </div>
          <label className="relative block w-full max-w-md">
            <span className="sr-only">Search articles</span>
            <HiOutlineMagnifyingGlass className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setVisibleCount(6); }}
              placeholder="Search articles..."
              className="w-full rounded-full border border-zinc-200 bg-white py-2.5 pl-9 pr-4 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
            />
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter blog posts">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => { setActiveCategory(category); setVisibleCount(6); }}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  isActive ? 'bg-primary text-white shadow-sm' : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {latest.length > 0 ? (
          <>
            <div id="blog-grid" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
              {latest.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            {canLoadMore ? (
              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  onClick={() => setVisibleCount((v) => v + 6)}
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:bg-zinc-50 hover:shadow-sm"
                >
                  Load more articles
                </button>
              </div>
            ) : null}
          </>
        ) : (
          <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center text-sm text-zinc-600">
            No articles match your search or selected category.
          </div>
        )}
      </section>
    </div>
  );
}
