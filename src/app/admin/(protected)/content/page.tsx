import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getSiteSettings } from '@/lib/site-content';
import SiteSettingsForm from './SiteSettingsForm';

export const metadata = { title: 'Site Content | Weblign Admin' };

export default async function AdminContentPage() {
  const settings = await getSiteSettings();

  return (
    <div className="space-y-8">
      <div>
        <Link href="/admin" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to overview
        </Link>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Site content</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">Update the homepage hero and contact information. Changes are read from MongoDB on the next page request.</p>
      </div>
      <SiteSettingsForm initialSettings={settings} />
      <div className="rounded-2xl border border-dashed border-zinc-300 p-5 text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
        Need to edit structured data? Use the collection editors for <Link href="/admin/library/projects" className="font-semibold text-primary hover:underline">projects</Link>, <Link href="/admin/library/blog-posts" className="font-semibold text-primary hover:underline">blog posts</Link>, or <Link href="/admin/library/services" className="font-semibold text-primary hover:underline">services</Link>.
      </div>
    </div>
  );
}
