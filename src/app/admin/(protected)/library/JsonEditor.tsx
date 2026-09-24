'use client';

import { useState } from 'react';

export default function JsonEditor({
  collection,
  initialValue,
}: {
  collection: string;
  initialValue: unknown;
}) {
  const [text, setText] = useState(() => JSON.stringify(initialValue, null, 2));
  const [published, setPublished] = useState(true);
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const save = async () => {
    setStatus('saving');
    setMessage('');

    let value: unknown;
    try {
      value = JSON.parse(text);
    } catch {
      setStatus('error');
      setMessage('JSON is not valid. Fix the syntax and try again.');
      return;
    }

    try {
      const response = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ collection, value, published }),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || 'Unable to save content.');

      setStatus('saved');
      setMessage(
        published ? 'Content published successfully.' : 'Draft saved successfully.',
      );
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to save content.');
    }
  };

  return (
    <div className="space-y-4">
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        spellCheck={false}
        className="min-h-[520px] w-full resize-y rounded-2xl border border-zinc-200 bg-zinc-950 p-5 font-mono text-xs leading-6 text-zinc-100 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 dark:border-zinc-700"
        aria-label={`${collection} JSON content`}
      />
      <label className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
        <input type="checkbox" checked={published} onChange={(event) => setPublished(event.target.checked)} className="h-4 w-4 rounded border-zinc-300 text-primary focus:ring-primary/20" />
        Publish this collection immediately
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" onClick={save} disabled={status === 'saving'} className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-60">
          {status === 'saving' ? 'Saving…' : published ? 'Publish content' : 'Save draft'}
        </button>
        <button type="button" onClick={() => setText(JSON.stringify(initialValue, null, 2))} className="rounded-xl border border-zinc-300 px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
          Reset changes
        </button>
        {message && <p className={`text-sm ${status === 'error' ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'}`} role="status">{message}</p>}
      </div>
    </div>
  );
}
