import Link from 'next/link';
import {
  BarChart3,
  FileText,
  FolderKanban,
  Inbox,
  Settings2,
  ExternalLink,
} from 'lucide-react';
import Logo from '@/components/layout/Logo';
import AdminNavLink, { type AdminNavItem } from './AdminNavLink';
import LogoutButton from './LogoutButton';

const navigation: AdminNavItem[] = [
  { href: '/admin', label: 'Overview', icon: BarChart3, exact: true },
  { href: '/admin/content', label: 'Site content', icon: Settings2 },
  { href: '/admin/library/projects', label: 'Projects', icon: FolderKanban },
  { href: '/admin/library/blog-posts', label: 'Blog posts', icon: FileText },
  { href: '/admin/inquiries', label: 'Inquiries', icon: Inbox },
];

export default function AdminShell({
  email,
  children,
}: {
  email: string;
  children: React.ReactNode;
}) {
  return (
    <div className="admin-shell min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* ── Desktop sidebar ── */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-zinc-200 bg-white lg:flex dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex h-16 shrink-0 items-center border-b border-zinc-200 px-5 dark:border-zinc-800">
          <Link href="/admin" className="flex items-center gap-2.5">
            <Logo showText={false} className="text-zinc-900 dark:text-white" />
            <span className="text-base font-bold tracking-tight text-zinc-900 dark:text-white">
              Weblign
              <span className="ml-1.5 font-medium text-primary">Admin</span>
            </span>
          </Link>
        </div>

        <nav
          className="flex-1 space-y-1 overflow-y-auto p-3"
          aria-label="Admin navigation"
        >
          {navigation.map((item) => (
            <AdminNavLink key={item.href} item={item} />
          ))}
        </nav>

        <div className="shrink-0 border-t border-zinc-200 p-3 dark:border-zinc-800">
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            View live site
          </Link>

          <div className="mt-2 rounded-xl bg-zinc-50 px-3 py-2.5 dark:bg-zinc-800/60">
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Signed in as</p>
            <p className="truncate text-sm font-medium text-zinc-900 dark:text-white">
              {email}
            </p>
          </div>

          <div className="mt-2 px-1">
            <LogoutButton fullWidth />
          </div>
        </div>
      </aside>

      {/* ── Main column ── */}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-3 border-b border-zinc-200 bg-white/90 px-4 backdrop-blur-md lg:hidden dark:border-zinc-800 dark:bg-zinc-900/90">
          <Link href="/admin" className="flex items-center gap-2">
            <Logo showText={false} className="text-zinc-900 dark:text-white" />
            <span className="text-sm font-bold text-zinc-900 dark:text-white">
              Weblign <span className="font-medium text-primary">Admin</span>
            </span>
          </Link>
          <LogoutButton />
        </header>

        <nav
          className="flex gap-1 overflow-x-auto border-b border-zinc-200 bg-white px-3 py-2 lg:hidden dark:border-zinc-800 dark:bg-zinc-900"
          aria-label="Admin sections"
        >
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <main className="px-4 py-6 sm:px-6 sm:py-8 lg:px-10">{children}</main>
      </div>
    </div>
  );
}