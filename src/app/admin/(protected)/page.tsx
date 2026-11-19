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
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 ">Welcome back</h1>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500 ">
            Manage your website content and review new inquiries from one place.
          </p>
        </div>
        <Link href="/admin/content" className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark">
          Edit site content
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      {!stats.mongoConnected && (
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm text-blue-900   ">
          <p className="font-semibold">MongoDB is not connected.</p>
          <p className="mt-1 leading-relaxed">Add <code className="rounded bg-blue-100 px-1.5 py-0.5 ">MONGODB_URI</code> to your environment file, then restart the app. The public site is currently using its safe static fallback content.</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          const value = stats[card.key];
          return (
            <Link key={card.key} href={card.href} className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md  ">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-500 ">{card.label}</span>
                <Icon className="h-5 w-5 text-zinc-400 transition group-hover:text-primary" aria-hidden="true" />
              </div>
              <p className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 ">{value}</p>
              <p className="mt-1 text-xs text-zinc-400">Open manager</p>
            </Link>
          );
        })}
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-white shadow-sm  ">
        <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5 ">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 ">Recent inquiries</h2>
            <p className="mt-1 text-sm text-zinc-500 ">The latest contact form submissions.</p>
          </div>
          <Link href="/admin/inquiries" className="text-sm font-semibold text-primary hover:underline">View all</Link>
        </div>
        {recentInquiries.length === 0 ? (
          <div className="px-6 py-12 text-center text-sm text-zinc-500 ">No inquiries have been received yet.</div>
        ) : (
          <div className="divide-y divide-zinc-100 ">
            {recentInquiries.map((inquiry) => (
              <Link key={inquiry.id} href="/admin/inquiries" className="flex items-center justify-between gap-4 px-6 py-4 transition hover:bg-zinc-50 ">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-zinc-900 ">{inquiry.fullName}</p>
                  <p className="mt-1 truncate text-xs text-zinc-500 ">{inquiry.service || 'General inquiry'} · {inquiry.email}</p>
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${inquiry.status === 'new' ? 'bg-primary/10 text-primary' : 'bg-zinc-100 text-zinc-500  '}`}>
                  {inquiry.status === 'new' ? 'New' : 'Read'}
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/admin/content" className="group rounded-2xl border border-dashed border-zinc-300 p-5 transition hover:border-primary/50 hover:bg-primary/[0.02] ">
          <Settings2 className="h-5 w-5 text-primary" aria-hidden="true" />
          <h2 className="mt-4 font-semibold text-zinc-900 ">Website content</h2>
          <p className="mt-1 text-sm leading-relaxed text-zinc-500 ">Update the hero, call-to-action labels, and contact details.</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Open editor <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
        </Link>
        <Link href="/admin/library/projects" className="group rounded-2xl border border-dashed border-zinc-300 p-5 transition hover:border-primary/50 hover:bg-primary/[0.02] ">
          <BriefcaseBusiness className="h-5 w-5 text-primary" aria-hidden="true" />
          <h2 className="mt-4 font-semibold text-zinc-900 ">Content libraries</h2>
          <p className="mt-1 text-sm leading-relaxed text-zinc-500 ">Publish projects, services, and blog posts through simple content forms.</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Manage content <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
        </Link>
      </div>
    </div>
  );
}
