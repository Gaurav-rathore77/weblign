import { notFound } from 'next/navigation';
import { getAdminCollectionState, getBlogPosts, getProjects, getServices, isContentCollectionName } from '@/lib/site-content';
import CollectionManager from '../CollectionManager';

export const dynamic = 'force-dynamic';

type PageProps = { params: Promise<{ collection: string }> };

export default async function AdminLibraryPage({ params }: PageProps) {
  const { collection } = await params;
  if (!isContentCollectionName(collection)) notFound();

  const fallback =
    collection === 'projects'
      ? await getProjects()
      : collection === 'blog-posts'
        ? await getBlogPosts()
        : await getServices();
  const stored = await getAdminCollectionState(collection);
  const value = Array.isArray(stored.value) ? stored.value : fallback;
  const title = collection === 'blog-posts' ? 'Blog posts' : collection[0].toUpperCase() + collection.slice(1);

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Content library</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">{title}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">Use the simple forms below to add or edit content. Image values must be local paths such as <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">/images/example.webp</code>. Uncheck publish to keep a draft.</p>
      </div>
      <CollectionManager
        collection={collection}
        initialItems={value as unknown[]}
        initialPublished={stored.published}
      />
    </div>
  );
}
