'use client';

import { useState, type FormEvent } from 'react';
import type { SiteSettings } from '@/lib/site-content';

export default function SiteSettingsForm({ initialSettings }: { initialSettings: SiteSettings }) {
  const [settings, setSettings] = useState(initialSettings);
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const updateHero = (field: keyof SiteSettings['hero'], value: string) => {
    setSettings((current) => ({
      ...current,
      hero: { ...current.hero, [field]: value },
    }));
  };

  const updateContact = (field: keyof SiteSettings['contact'], value: string) => {
    setSettings((current) => ({
      ...current,
      contact: { ...current.contact, [field]: value },
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('saving');
    setMessage('');

    try {
      const response = await fetch('/api/admin/site-settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ settings }),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || 'Unable to save settings.');

      setStatus('saved');
      setMessage('Website content saved successfully.');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to save settings.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Homepage hero</h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">These values appear in the first section visitors see.</p>
        </div>
        <div className="grid gap-5">
          <label className="grid gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Badge text
            <input value={settings.hero.badge} onChange={(event) => updateHero('badge', event.target.value)} className="admin-input" />
          </label>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Heading line 1 prefix
              <input value={settings.hero.titleLine1Before} onChange={(event) => updateHero('titleLine1Before', event.target.value)} className="admin-input" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Heading line 1 accent
              <input value={settings.hero.titleLine1Accent} onChange={(event) => updateHero('titleLine1Accent', event.target.value)} className="admin-input" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Heading line 2 prefix
              <input value={settings.hero.titleLine2Before} onChange={(event) => updateHero('titleLine2Before', event.target.value)} className="admin-input" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Heading line 2 accent
              <input value={settings.hero.titleLine2Accent} onChange={(event) => updateHero('titleLine2Accent', event.target.value)} className="admin-input" />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Description
            <textarea rows={4} value={settings.hero.description} onChange={(event) => updateHero('description', event.target.value)} className="admin-input resize-y" />
          </label>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Primary button
              <input value={settings.hero.primaryCta} onChange={(event) => updateHero('primaryCta', event.target.value)} className="admin-input" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Secondary button
              <input value={settings.hero.secondaryCta} onChange={(event) => updateHero('secondaryCta', event.target.value)} className="admin-input" />
            </label>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Contact details</h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Keep public contact information up to date.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Email
            <input type="email" value={settings.contact.email} onChange={(event) => updateContact('email', event.target.value)} className="admin-input" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Phone
            <input value={settings.contact.phone} onChange={(event) => updateContact('phone', event.target.value)} className="admin-input" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 md:col-span-2">
            Address
            <input value={settings.contact.address} onChange={(event) => updateContact('address', event.target.value)} className="admin-input" />
          </label>
        </div>
      </section>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === 'saving'} className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-60">
          {status === 'saving' ? 'Saving…' : 'Save website content'}
        </button>
        {message && <p className={`text-sm ${status === 'error' ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'}`} role="status">{message}</p>}
      </div>
    </form>
  );
}
