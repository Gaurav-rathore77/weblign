'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, Mail, Trash2 } from 'lucide-react';

export default function InquiryActions({
  id,
  status,
  email,
}: {
  id: string;
  status: 'new' | 'read';
  email: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const update = async (method: 'PATCH' | 'DELETE', body?: object) => {
    setLoading(true);
    try {
      await fetch(`/api/admin/inquiries/${id}`, {
        method,
        headers: body ? { 'Content-Type': 'application/json' } : undefined,
        body: body ? JSON.stringify(body) : undefined,
      });
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      <a href={`mailto:${email}`} className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-2.5 py-2 text-xs font-medium text-zinc-600 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
        <Mail className="h-3.5 w-3.5" aria-hidden="true" />
        Reply
      </a>
      {status === 'new' && (
        <button type="button" disabled={loading} onClick={() => void update('PATCH', { status: 'read' })} className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-2.5 py-2 text-xs font-medium text-zinc-600 transition hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
          Mark read
        </button>
      )}
      {status === 'read' && (
        <button type="button" disabled={loading} onClick={() => void update('PATCH', { status: 'new' })} className="rounded-lg border border-zinc-200 px-2.5 py-2 text-xs font-medium text-zinc-600 transition hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
          Mark unread
        </button>
      )}
      <button type="button" disabled={loading} onClick={() => void update('DELETE')} className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 px-2.5 py-2 text-xs font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-50 dark:border-red-900/60 dark:text-red-400 dark:hover:bg-red-950/20">
        <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
        Delete
      </button>
    </div>
  );
}
