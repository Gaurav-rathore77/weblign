import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Admin Login',
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  if (await getAdminSession()) redirect('/admin');

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-16 dark:bg-zinc-950">
      <div className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-7 shadow-xl shadow-zinc-900/5 sm:p-10 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Weblign</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Admin dashboard</h1>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Sign in to manage website content, projects and inquiries.
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
