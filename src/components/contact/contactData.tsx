import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export interface ContactInfoItem {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}

export const contactInfo: ContactInfoItem[] = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: 'Email',
    value: 'Sachinr2012022@gmail.com',
    href: 'mailto:Sachinr2012022@gmail.com',
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: 'Phone',
    value: '+91 9315051726',
    href: 'tel:+919315051726',
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: 'Location',
    value: 'India',
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: 'Working Hours',
    value: 'Mon – Sat, 10 AM – 7 PM IST',
  },
];

export interface SocialLink {
  label: string;
  href: string;
  initial: string;
}

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: '#', initial: 'in' },
  { label: 'GitHub', href: '#', initial: 'GH' },
  { label: 'Instagram', href: '#', initial: 'IG' },
  { label: 'Facebook', href: '#', initial: 'f' },
  { label: 'X (Twitter)', href: '#', initial: 'X' },
  { label: 'Behance', href: '#', initial: 'Be' },
];

export const serviceOptions = [
  { value: '', label: 'Select a service' },
  { value: 'web-development', label: 'Web Development' },
  { value: 'web-app', label: 'Web App' },
  { value: 'mobile-app', label: 'Mobile App' },
  { value: 'ui-ux-design', label: 'UI/UX Design' },
  { value: 'ai-automation', label: 'AI Automation' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'custom-software', label: 'Custom Software' },
  { value: 'other', label: 'Other' },
];

export const budgetOptions = [
  { value: '', label: 'Select your budget' },
  { value: 'under-500', label: 'Under $500' },
  { value: '500-1000', label: '$500 – $1,000' },
  { value: '1000-5000', label: '$1,000 – $5,000' },
  { value: '5000-plus', label: '$5,000+' },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'How long does a project take?',
    answer:
      'Timelines vary by scope. A simple website takes 2–4 weeks, while a web app or custom platform can take 6–12 weeks. We provide a clear timeline during our planning phase so you know exactly what to expect.',
  },
  {
    question: 'How much does a website cost?',
    answer:
      'Pricing depends on complexity and features. Our plans start at $299/month for a Starter site and scale up based on your needs. Contact us for a custom quote tailored to your project.',
  },
  {
    question: 'Do you provide maintenance after launch?',
    answer:
      'Yes, we offer ongoing maintenance and support plans to keep your site secure, up to date, and performing at its best. We also provide continuous improvement recommendations as your business grows.',
  },
  {
    question: 'Can you redesign an existing website?',
    answer:
      'Absolutely. We specialize in modernizing outdated websites while preserving your SEO rankings, content, and brand identity. We make the transition seamless and stress-free.',
  },
  {
    question: 'Do you build custom software applications?',
    answer:
      'Yes, we build custom software including SaaS platforms, internal tools, API integrations, and AI-powered applications. Our Enterprise plan is designed for large-scale custom builds.',
  },
  {
    question: 'Do you sign NDAs?',
    answer:
      'Yes, we routinely sign NDAs to protect your ideas and confidential information. Your trust and privacy are important to us from the very first conversation.',
  },
  {
    question: 'Which technologies do you use?',
    answer:
      'We build with modern, battle-tested technologies including Next.js, React, TypeScript, Node.js, Python, PostgreSQL, Tailwind CSS, and cloud platforms like AWS and Vercel. We choose the best stack for your specific project.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Getting started is simple. Fill out the contact form or email us at Sachinr2012022@gmail.com. We\'ll schedule a free discovery call to understand your goals, then provide a proposal and timeline within 48 hours.',
  },
];
