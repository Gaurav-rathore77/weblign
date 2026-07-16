'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import { serviceOptions, budgetOptions } from './contactData';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  details: string;
  privacy: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  budget?: string;
  details?: string;
  privacy?: string;
}

const initialForm: FormData = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  details: '',
  privacy: false,
};

const ContactForm = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!form.fullName.trim()) errs.fullName = 'Full name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    if (!form.service) errs.service = 'Please select a service';
    if (!form.budget) errs.budget = 'Please select a budget';
    if (!form.details.trim()) errs.details = 'Please provide project details';
    if (!form.privacy) errs.privacy = 'You must agree to the Privacy Policy';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const update = <K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50/50 p-10 text-center shadow-lg shadow-zinc-900/5"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-zinc-900">
          Message Sent Successfully!
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-500">
          Thank you for reaching out. We&rsquo;ll review your details and get
          back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      onSubmit={handleSubmit}
      noValidate
      className="relative space-y-5 rounded-2xl border border-zinc-100 bg-white p-6 shadow-lg shadow-zinc-900/5 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Full Name"
          placeholder="John Doe"
          required
          value={form.fullName}
          onChange={(e) => update('fullName', e.target.value)}
          error={errors.fullName}
          disabled={status === 'loading'}
        />
        <Input
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          required
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          error={errors.email}
          disabled={status === 'loading'}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+91 00000 00000"
          required
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
          error={errors.phone}
          disabled={status === 'loading'}
        />
        <Input
          label="Company Name"
          placeholder="Acme Inc. (optional)"
          value={form.company}
          onChange={(e) => update('company', e.target.value)}
          disabled={status === 'loading'}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Select
          label="Service Interested In"
          options={serviceOptions}
          required
          value={form.service}
          onChange={(e) => update('service', e.target.value)}
          error={errors.service}
          disabled={status === 'loading'}
        />
        <Select
          label="Project Budget"
          options={budgetOptions}
          required
          value={form.budget}
          onChange={(e) => update('budget', e.target.value)}
          error={errors.budget}
          disabled={status === 'loading'}
        />
      </div>

      <Textarea
        label="Project Details"
        placeholder="Tell us about your project, goals, and timeline..."
        required
        value={form.details}
        onChange={(e) => update('details', e.target.value)}
        error={errors.details}
        disabled={status === 'loading'}
      />

      <div className="space-y-1">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={form.privacy}
            onChange={(e) => update('privacy', e.target.checked)}
            disabled={status === 'loading'}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-zinc-300 text-primary focus:ring-primary/20"
          />
          <span className="text-sm text-zinc-600">
            I agree to the{' '}
            <a
              href="/privacy"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.privacy && (
          <p className="pl-7 text-xs text-red-500" role="alert">
            {errors.privacy}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === 'loading' ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Get Free Quote
            <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </motion.form>
  );
};

export default ContactForm;
