import Link from 'next/link';
import { BarChart3, FileText, FolderKanban, Inbox, Settings2 } from 'lucide-react';
import { requireAdmin } from '@/lib/auth';
import LogoutButton from './LogoutButton';

const navigation = [
  { href: '/admin', label: 'Overview', icon: BarChart3 },
  { href: '/admin/content', label: 'Site content', icon: Settings2 },
  { href: '/admin/library/projects', label: 'Projects', icon: FolderKanban },
  { href: '/admin/library/blog-posts', label: 'Blog posts', icon: FileText },
  { href: '/admin/inquiries', label: 'Inquiries', icon: Inbox },
];

export default async function ProtectedAdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await requireAdmin();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-7xl">
        <aside className="hidden w-64 shrink-0 border-r border-zinc-200 bg-white px-4 py-6 lg:block dark:border-zinc-800 dark:bg-zinc-900">
          <Link href="/admin" className="mb-8 block px-3 text-lg font-bold text-zinc-900 dark:text-white">
            Weblign <span className="text-primary">Admin</span>
          </Link>
          <nav className="space-y-1" aria-label="Admin navigation">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-4 sm:px-8 dark:border-zinc-800 dark:bg-zinc-900">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Content management</p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Signed in as {session.email}</p>
            </div>
            <LogoutButton />
          </header>
          <nav className="flex gap-1 overflow-x-auto border-b border-zinc-200 bg-white px-4 py-2 sm:px-8 lg:hidden dark:border-zinc-800 dark:bg-zinc-900" aria-label="Admin navigation">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className="inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="px-4 py-8 sm:px-8 lg:px-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
