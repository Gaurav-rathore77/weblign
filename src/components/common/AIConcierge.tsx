'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot, Loader2, Send, Sparkles, X } from 'lucide-react';

type GuideRole = 'user' | 'assistant';

interface GuideLink {
  label: string;
  href: string;
}

interface UiMessage {
  role: GuideRole;
  content: string;
  links?: GuideLink[];
}

const openingMessage: UiMessage = {
  role: 'assistant',
  content:
    'Hi! I am the Weblign Guide. Ask me about our services, pricing, projects, process or team.',
};

const starterPrompts = [
  'What services do you offer?',
  'Show me your pricing',
  'Tell me about your projects',
  'How can I contact you?',
];

export default function AIConcierge() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<UiMessage[]>([openingMessage]);
  const [suggestions, setSuggestions] = useState(starterPrompts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  if (pathname.startsWith('/admin')) return null;

  const sendMessage = async (value: string) => {
    const content = value.trim();
    if (!content || loading) return;

    setError('');
    setInput('');
    setLoading(true);
    setMessages((current) => [...current, { role: 'user', content }]);

    try {
      const history = messages
        .filter((message) => message.role === 'user' || message.role === 'assistant')
        .map(({ role, content: messageContent }) => ({ role, content: messageContent }));
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content, history }),
      });
      const result = (await response.json()) as {
        reply?: string;
        links?: GuideLink[];
        suggestions?: string[];
        message?: string;
      };

      if (!response.ok || !result.reply) {
        throw new Error(result.message || 'The guide is temporarily unavailable.');
      }

      setMessages((current) => [
        ...current,
        { role: 'assistant', content: result.reply!, links: result.links || [] },
      ]);
      if (result.suggestions?.length) setSuggestions(result.suggestions);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'The guide is temporarily unavailable.',
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage(input);
  };

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="Weblign website guide"
          className="fixed bottom-20 right-3 z-[70] flex max-h-[min(34rem,calc(100dvh-6rem))] w-[min(24rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-950/20 dark:border-zinc-700 dark:bg-[#18181b] dark:shadow-black/40"
        >
          <div className="flex items-center justify-between bg-gradient-to-r from-primary to-accent px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15" aria-hidden="true"><Bot className="h-5 w-5" /></span>
              <div><p className="text-sm font-semibold">Weblign Guide</p><p className="text-[11px] text-white/75">Your website assistant</p></div>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close guide" className="rounded-lg p-1.5 transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><X className="h-4 w-4" /></button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${message.role === 'user' ? 'rounded-br-md bg-primary text-white' : 'rounded-bl-md bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100'}`}>
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  {message.links && message.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="inline-flex items-center gap-1 rounded-lg border border-primary/20 bg-white px-2.5 py-1.5 text-xs font-semibold text-primary transition hover:bg-primary/5 dark:border-primary/30 dark:bg-zinc-900">{link.label}<Send className="h-3 w-3 rotate-[-45deg]" aria-hidden="true" /></Link>)}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && <div className="flex justify-start"><div className="flex items-center gap-2 rounded-2xl rounded-bl-md bg-zinc-100 px-3.5 py-2.5 text-sm text-zinc-500 dark:bg-zinc-800"><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />Typing…</div></div>}
            {error && <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300" role="alert">{error}</p>}
            <div ref={endRef} />
          </div>

          {!loading && messages.length <= 1 && <div className="flex flex-wrap gap-2 border-t border-zinc-100 px-4 py-3 dark:border-zinc-800"><p className="w-full text-xs font-medium text-zinc-500 dark:text-zinc-400">Try asking:</p>{suggestions.map((suggestion) => <button key={suggestion} type="button" onClick={() => void sendMessage(suggestion)} className="rounded-full border border-zinc-200 px-2.5 py-1.5 text-left text-xs text-zinc-600 transition hover:border-primary/30 hover:text-primary dark:border-zinc-700 dark:text-zinc-300">{suggestion}</button>)}</div>}

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-zinc-100 p-3 dark:border-zinc-800">
            <input value={input} onChange={(event) => setInput(event.target.value)} maxLength={1000} placeholder="Ask about Weblign…" aria-label="Ask the Weblign guide" className="min-w-0 flex-1 rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-primary focus:ring-2 focus:ring-primary/15 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Send question" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"><Send className="h-4 w-4" aria-hidden="true" /></button>
          </form>
          <p className="px-4 pb-3 text-center text-[10px] text-zinc-400 dark:text-zinc-500">Guide answers are for general information. Contact us for a tailored quote.</p>
        </div>
      )}

      <button type="button" onClick={() => setOpen((current) => !current)} aria-label={open ? 'Close Weblign guide' : 'Open Weblign guide'} className="fixed bottom-20 right-4 z-[69] inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 text-sm font-semibold text-white shadow-xl shadow-primary/25 transition hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:bottom-20">
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Sparkles className="h-5 w-5" aria-hidden="true" />}
        <span className="hidden sm:inline">{open ? 'Close' : 'Ask Weblign'}</span>
      </button>
    </>
  );
}
