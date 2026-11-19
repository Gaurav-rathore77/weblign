'use client';

import { useRef, useState, type ElementType, type FormEvent } from 'react';
import {
  HiOutlineArrowLongRight,
  HiCheck,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlineChatBubbleLeftRight,
  HiOutlineShieldCheck,
} from 'react-icons/hi2';
import { contactInfo } from './contactData';
import { budgetOptions, serviceOptions } from '@/components/contact/contactData';
import type { SiteSettings } from '@/lib/site-content';
import { trackEvent } from '@/lib/analytics';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';

const iconComponents: Record<string, ElementType> = {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlineChatBubbleLeftRight,
};

function ContactIcon({ name, className }: { name: string; className?: string }) {
  const Comp = iconComponents[name];
  return Comp ? <Comp className={className} aria-hidden="true" /> : null;
}

const ContactForm = ({ contact }: { contact: SiteSettings['contact'] }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formStartedRef = useRef(false);

  const handleFormFocus = () => {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    trackEvent('inquiry_form_start', {
      event_category: 'conversion',
      location: 'contact_page',
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setLoading(true);
    setErrorMessage('');

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      company: String(formData.get('company') || '').trim(),
      service: String(formData.get('service') || '').trim(),
      budget: String(formData.get('budget') || '').trim(),
      message: String(formData.get('message') || '').trim(),
      website: '',
    };

    try {
      const response = await fetch('/api/contact/general', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(result.message || 'Unable to send your inquiry. Please try again or contact us on WhatsApp.');
      }
      form.reset();
      setSubmitted(true);
      trackEvent('inquiry_form_submit', {
        event_category: 'conversion',
        location: 'contact_page',
        service: payload.service || undefined,
        budget: payload.budget || undefined,
      });
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send your inquiry. Please try again or contact us on WhatsApp.',
      );
    } finally {
      setLoading(false);
    }
  };

  const visibleContactInfo = contactInfo.map((item) => {
    if (item.label === 'Email') {
      return { ...item, value: contact.email, href: `mailto:${contact.email}` };
    }
    if (item.label === 'Phone') {
      return {
        ...item,
        value: contact.phone,
        href: `tel:${contact.phone.replace(/[^+\d]/g, '')}`,
      };
    }
    if (item.label === 'WhatsApp') {
      const digits = contact.phone.replace(/[^+\d]/g, '').replace(/^\+/, '');
      return { ...item, value: contact.phone, href: `https://wa.me/${digits}` };
    }
    if (item.label === 'Location') {
      return { ...item, value: contact.address };
    }
    return item;
  });

  return (
    <div id="inquiry-form" className="grid scroll-mt-24 gap-10 lg:grid-cols-5">
      {/* Form */}
      <div className="lg:col-span-3">
        <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-lg sm:p-8  ">
          {submitted ? (
            <div
              role="status"
              aria-live="polite"
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 ">
                <HiCheck className="h-6 w-6 text-emerald-600 " aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-zinc-900">Inquiry sent successfully</h3>
              <p className="mt-2 max-w-md text-sm text-zinc-500 ">
                Thank you for sharing your project details. We&apos;ll review your inquiry and get back to you to discuss the next steps.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-medium text-primary underline underline-offset-2 transition-colors hover:text-primary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Send another inquiry
                </button>
                <a
                  href={getWhatsAppUrlFor('consultation')}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event="whatsapp_click"
                  data-track-label="contact_form_success_whatsapp"
                  data-track-location="contact_page"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50   "
                >
                  <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} onFocusCapture={handleFormFocus} className="space-y-5" noValidate={false}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="contact-form-label block text-sm font-medium">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    maxLength={120}
                    autoComplete="name"
                    className="contact-form-field mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-xs transition-all duration-300 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10    "
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="contact-form-label block text-sm font-medium">
                    Business name <span className="text-zinc-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    maxLength={160}
                    autoComplete="organization"
                    className="contact-form-field mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-xs transition-all duration-300 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10    "
                    placeholder="Your business or company"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="contact-form-label block text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    autoComplete="email"
                    className="contact-form-field mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-xs transition-all duration-300 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10    "
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="contact-form-label block text-sm font-medium">
                    WhatsApp number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    minLength={7}
                    maxLength={40}
                    autoComplete="tel"
                    inputMode="tel"
                    className="contact-form-field mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-xs transition-all duration-300 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10    "
                    placeholder="+91 93150 51726"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="service" className="contact-form-label block text-sm font-medium">
                    Required service <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="contact-form-field mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 shadow-xs transition-all duration-300 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10   "
                  >
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value} disabled={option.value === ''}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="contact-form-label block text-sm font-medium">
                    Estimated budget <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    defaultValue=""
                    className="contact-form-field mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 shadow-xs transition-all duration-300 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10   "
                  >
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value} disabled={option.value === ''}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="contact-form-label block text-sm font-medium">
                  Project description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={10000}
                  rows={5}
                  className="contact-form-field mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-xs transition-all duration-300 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10    "
                  placeholder="Briefly describe your project, goals, and any key requirements."
                />
              </div>

              <div className="flex items-start gap-2 rounded-xl border border-zinc-200 bg-zinc-50/70 px-3 py-2.5 text-xs leading-relaxed text-zinc-600   ">
                <HiOutlineShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <p>
                  We use your details only to respond to your inquiry. No account or registration is required.
                </p>
              </div>

              {errorMessage && (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700   " role="alert">
                  {errorMessage}
                </p>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Sending inquiry…' : 'Discuss Your Project'}
                  <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <a
                  href={getWhatsAppUrlFor('consultation')}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event="whatsapp_click"
                  data-track-label="contact_form_whatsapp_alternative"
                  data-track-location="contact_page"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition-all hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary    "
                >
                  <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp instead
                </a>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Contact Info */}
      <div className="lg:col-span-2">
        <div className="flex flex-col gap-4">
          {visibleContactInfo.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-zinc-100 bg-white p-5 shadow-xs transition-shadow duration-300 hover:shadow-md  "
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
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="mt-0.5 block text-sm font-medium text-zinc-900 transition-colors hover:text-primary "
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
