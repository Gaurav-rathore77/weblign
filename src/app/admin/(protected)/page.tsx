import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, FileText, Inbox, Settings2, Wrench } from 'lucide-react';
import { getAdminStats, getContactSubmissions } from '@/lib/site-content';

export const dynamic = 'force-dynamic';

const statCards = [
  { key: 'projects', label: 'Projects', href: '/admin/library/projects', icon: BriefcaseBusiness },
  { key: 'blogPosts', label: 'Blog posts', href: '/admin/library/blog-posts', icon: FileText },
  { key: 'services', label: 'Services', href: '/admin/library/services', icon: Wrench },
  { key: 'newInquiries', label: 'New inquiries', href: '/admin/inquiries', icon: Inbox },
] as const;

export default async function AdminOverviewPage() {
  const [stats, inquiries] = await Promise.all([getAdminStats(), getContactSubmissions()]);
  const recentInquiries = inquiries.slice(0, 5);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Overview</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Welcome back</h1>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Manage your website content and review new inquiries from one place.
          </p>
        </div>
        <Link href="/admin/content" className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark">
          Edit site content
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      {!stats.mongoConnected && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/20 dark:text-amber-200">
          <p className="font-semibold">MongoDB is not connected.</p>
          <p className="mt-1 leading-relaxed">Add <code className="rounded bg-amber-100 px-1.5 py-0.5 dark:bg-amber-900/40">MONGODB_URI</code> to your environment file, then restart the app. The public site is currently using its safe static fallback content.</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          const value = stats[card.key];
          return (
            <Link key={card.key} href={card.href} className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{card.label}</span>
                <Icon className="h-5 w-5 text-zinc-400 transition group-hover:text-primary" aria-hidden="true" />
              </div>
              <p className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">{value}</p>
              <p className="mt-1 text-xs text-zinc-400">Open manager</p>
            </Link>
          );
        })}
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5 dark:border-zinc-800">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Recent inquiries</h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">The latest contact form submissions.</p>
          </div>
          <Link href="/admin/inquiries" className="text-sm font-semibold text-primary hover:underline">View all</Link>
        </div>
        {recentInquiries.length === 0 ? (
          <div className="px-6 py-12 text-center text-sm text-zinc-500 dark:text-zinc-400">No inquiries have been received yet.</div>
        ) : (
          <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {recentInquiries.map((inquiry) => (
              <Link key={inquiry.id} href="/admin/inquiries" className="flex items-center justify-between gap-4 px-6 py-4 transition hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-zinc-900 dark:text-white">{inquiry.fullName}</p>
                  <p className="mt-1 truncate text-xs text-zinc-500 dark:text-zinc-400">{inquiry.service || 'General inquiry'} · {inquiry.email}</p>
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${inquiry.status === 'new' ? 'bg-primary/10 text-primary' : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400'}`}>
                  {inquiry.status === 'new' ? 'New' : 'Read'}
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/admin/content" className="group rounded-2xl border border-dashed border-zinc-300 p-5 transition hover:border-primary/50 hover:bg-primary/[0.02] dark:border-zinc-700">
          <Settings2 className="h-5 w-5 text-primary" aria-hidden="true" />
          <h2 className="mt-4 font-semibold text-zinc-900 dark:text-white">Website content</h2>
          <p className="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">Update the hero, call-to-action labels, and contact details.</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Open editor <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
        </Link>
        <Link href="/admin/library/projects" className="group rounded-2xl border border-dashed border-zinc-300 p-5 transition hover:border-primary/50 hover:bg-primary/[0.02] dark:border-zinc-700">
          <BriefcaseBusiness className="h-5 w-5 text-primary" aria-hidden="true" />
          <h2 className="mt-4 font-semibold text-zinc-900 dark:text-white">Content libraries</h2>
          <p className="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">Publish projects, services, and blog posts through simple content forms.</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Manage content <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
        </Link>
      </div>
    </div>
  );
}
