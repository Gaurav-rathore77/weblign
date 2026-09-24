import Link from 'next/link';
import { ArrowLeft, Inbox } from 'lucide-react';
import {
  DEFAULT_CONTACT_NOTIFICATION_EMAIL,
  isEmailConfigured,
} from '@/lib/email';
import { getContactSubmissions } from '@/lib/site-content';
import InquiryActions from './InquiryActions';

export const dynamic = 'force-dynamic';

export default async function AdminInquiriesPage() {
  const inquiries = await getContactSubmissions();
  const notificationEmail =
    process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_CONTACT_NOTIFICATION_EMAIL;

  return (
    <div className="space-y-8">
      <div>
        <Link href="/admin" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to overview
        </Link>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Inquiries</h1>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">Review, reply to, and organize contact form submissions.</p>
      </div>

      {!isEmailConfigured() && (
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900 dark:border-blue-900/60 dark:bg-blue-950/20 dark:text-blue-200">
          Email alerts are not configured yet. Inquiries are still saved here. Set <code className="rounded bg-blue-100 px-1.5 py-0.5 dark:bg-blue-900/40">SMTP_HOST</code>, <code className="rounded bg-blue-100 px-1.5 py-0.5 dark:bg-blue-900/40">SMTP_USER</code>, and <code className="rounded bg-blue-100 px-1.5 py-0.5 dark:bg-blue-900/40">SMTP_PASSWORD</code> to email new inquiries to {notificationEmail}.
        </div>
      )}

      <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        {inquiries.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-800">
              <Inbox className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">No inquiries yet</h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">New submissions from the website contact forms will appear here after MongoDB is connected.</p>
          </div>
        ) : (
          <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {inquiries.map((inquiry) => (
              <article key={inquiry.id} className="p-5 sm:p-6">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-base font-semibold text-zinc-900 dark:text-white">{inquiry.fullName}</h2>
                      <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${inquiry.status === 'new' ? 'bg-primary/10 text-primary' : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400'}`}>
                        {inquiry.status === 'new' ? 'New' : 'Read'}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      <a href={`mailto:${inquiry.email}`} className="hover:text-primary">{inquiry.email}</a>
                      {inquiry.phone && <span> · {inquiry.phone}</span>}
                    </p>
                    <p className="mt-3 max-w-3xl whitespace-pre-wrap text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{inquiry.details}</p>
                    <p className="mt-3 text-xs text-zinc-400">
                      {inquiry.service || 'General inquiry'} · {inquiry.budget || 'Budget not specified'} · {new Date(inquiry.createdAt).toLocaleString('en-IN')}
                      {inquiry.company && <span> · {inquiry.company}</span>}
                    </p>
                  </div>
                  <InquiryActions id={inquiry.id} status={inquiry.status} email={inquiry.email} />
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
