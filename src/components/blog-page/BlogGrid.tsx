'use client';

import Image from 'next/image';
import { useState, type ElementType } from 'react';
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
} from 'react-icons/hi2';
import { blogPosts, categories, type BlogPost } from './blogData';

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

const BlogCard = ({ post }: { post: BlogPost }) => (
  <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-lg shadow-zinc-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-100">
    <a href={post.href} className="flex flex-1 flex-col">
      {/* Image */}
      <div className={`relative flex aspect-[16/9] items-end bg-gradient-to-br ${post.image.gradient}`}>
        {post.image.url && (
          <Image
            src={post.image.url}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            className="object-cover"
          />
        )}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25px 25px, currentColor 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
          aria-hidden="true"
        />
        <span className="relative p-5 text-3xl" aria-hidden="true">
          <BlogIcon name={post.image.iconName} className="h-8 w-8" />
        </span>
        <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-white/70 px-2.5 py-0.5 text-[10px] font-medium text-zinc-700 shadow-xs backdrop-blur-md dark:border-zinc-700/30 dark:bg-zinc-800/70 dark:text-zinc-300">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-3 text-xs text-zinc-400">
          <time dateTime={post.date}>{post.date}</time>
          <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" aria-hidden="true" />
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-zinc-900 transition-colors group-hover:text-primary dark:group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {post.excerpt}
        </p>

        {/* Author */}
        <div className="mt-auto flex items-center gap-3 pt-4">
          <div
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary"
          >
            {post.author.initials}
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-900">{post.author.name}</div>
            <div className="text-xs text-zinc-400">{post.author.role}</div>
          </div>
          <HiOutlineArrowLongRight
            className="ml-auto h-5 w-5 text-zinc-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary dark:text-zinc-600"
            aria-hidden="true"
          />
        </div>
      </div>
    </a>
  </article>
);

const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div>
      {/* Filters */}
      <div
        className="mb-10 flex flex-wrap items-center justify-center gap-2"
        role="group"
        aria-label="Filter blog posts"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              aria-controls="blog-grid"
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                isActive
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div
        id="blog-grid"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        aria-live="polite"
      >
        {filtered.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
