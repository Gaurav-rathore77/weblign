'use client';

import { useState, type ElementType, type FormEvent } from 'react';
import {
  HiOutlineArrowLongRight,
  HiCheck,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClock,
} from 'react-icons/hi2';
import { contactInfo } from './contactData';

const iconComponents: Record<string, ElementType> = {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClock,
};

function ContactIcon({ name, className }: { name: string; className?: string }) {
  const Comp = iconComponents[name];
  return Comp ? <Comp className={className} aria-hidden="true" /> : null;
}

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-5">
      {/* Form */}
      <div className="lg:col-span-3">
        <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-lg sm:p-8 dark:border-zinc-800 dark:bg-zinc-100">
          {submitted ? (
            <div
              role="status"
              aria-live="polite"
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-900/30">
                <HiCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-zinc-900">Message Sent!</h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Thank you for reaching out. We&rsquo;ll get back to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-medium text-primary underline underline-offset-2 transition-colors hover:text-primary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-xs transition-all duration-300 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-xs transition-all duration-300 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-xs transition-all duration-300 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-xs transition-all duration-300 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Send Message
                <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Contact Info */}
      <div className="lg:col-span-2">
        <div className="flex flex-col gap-4">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-zinc-100 bg-white p-5 shadow-xs transition-shadow duration-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-100"
            >
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="text-xl">
                  <ContactIcon name={item.emoji} className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-0.5 block text-sm font-medium text-zinc-900 transition-colors hover:text-primary dark:hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="mt-0.5 text-sm font-medium text-zinc-900">
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
