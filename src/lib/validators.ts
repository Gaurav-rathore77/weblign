import { z } from 'zod';

export const adminLoginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8).max(200),
});

export const contactSubmissionSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(7).max(40),
  company: z.string().trim().max(160).optional().default(''),
  service: z.string().trim().min(1).max(120),
  budget: z.string().trim().min(1).max(120),
  details: z.string().trim().min(10).max(10_000),
  privacy: z.literal(true),
  website: z.string().max(0).optional(),
});

export const generalContactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().default(''),
  company: z.string().trim().max(160).optional().default(''),
  service: z.string().trim().max(120).optional().default('General inquiry'),
  budget: z.string().trim().max(120).optional().default('Not specified'),
  subject: z.string().trim().max(160).optional().default(''),
  message: z.string().trim().min(10).max(10_000),
  website: z.string().max(0).optional(),
});

export const newsletterSubscriptionSchema = z.object({
  email: z.string().trim().email().max(200),
  website: z.string().max(0).optional(),
});

export const siteSettingsSchema = z.object({
  brandName: z.string().trim().min(1).max(80),
  hero: z.object({
    badge: z.string().trim().min(1).max(160),
    titleLine1Before: z.string().trim().min(1).max(80),
    titleLine1Accent: z.string().trim().min(1).max(120),
    titleLine2Before: z.string().trim().min(1).max(80),
    titleLine2Accent: z.string().trim().min(1).max(120),
    description: z.string().trim().min(1).max(1_000),
    primaryCta: z.string().trim().min(1).max(80),
    secondaryCta: z.string().trim().min(1).max(80),
  }),
  contact: z.object({
    email: z.string().trim().email().max(200),
    phone: z.string().trim().min(1).max(40),
    address: z.string().trim().min(1).max(240),
  }),
});

const localAssetPath = z
  .string()
  .trim()
  .max(500)
  .refine((value) => value.startsWith('/'), 'Use a local asset path beginning with /.');

const projectSchema = z.object({
  id: z.string().trim().min(1).max(160),
  title: z.string().trim().min(1).max(240),
  description: z.string().trim().min(1).max(2_000),
  category: z.string().trim().min(1).max(80),
  image: localAssetPath,
  imageAlt: z.string().trim().max(240).optional(),
  gradient: z.string().trim().min(1).max(240),
  tech: z.array(z.string().trim().min(1).max(80)).max(30),
  metrics: z.string().trim().max(120),
  demoUrl: z.string().trim().max(500),
  overview: z.string().trim().min(1).max(4_000),
  problem: z.string().trim().min(1).max(4_000),
  solution: z.string().trim().min(1).max(4_000),
  technologies: z.array(z.string().trim().min(1).max(80)).max(50),
  timeline: z.string().trim().min(1).max(120),
  results: z.array(z.string().trim().min(1).max(500)).max(30),
  testimonial: z.object({
    quote: z.string().trim().min(1).max(2_000),
    name: z.string().trim().min(1).max(160),
    role: z.string().trim().min(1).max(160),
  }),
});

const blogPostSchema = z.object({
  id: z.string().trim().min(1).max(160),
  title: z.string().trim().min(1).max(240),
  excerpt: z.string().trim().min(1).max(2_000),
  category: z.string().trim().min(1).max(80),
  date: z.string().trim().min(1).max(80),
  readTime: z.string().trim().min(1).max(80),
  author: z.object({
    name: z.string().trim().min(1).max(160),
    role: z.string().trim().min(1).max(160),
    initials: z.string().trim().min(1).max(8),
  }),
  image: z.object({
    gradient: z.string().trim().min(1).max(240),
    iconName: z.string().trim().min(1).max(120),
    url: localAssetPath,
  }),
  href: z.string().trim().max(500),
});

const serviceSchema = z.object({
  id: z.string().trim().min(1).max(160),
  iconKey: z.string().trim().min(1).max(80),
  title: z.string().trim().min(1).max(160),
  description: z.string().trim().min(1).max(2_000),
  features: z.array(z.string().trim().min(1).max(300)).max(30),
});

export function contentSchemaForCollection(collection: string) {
  if (collection === 'projects') return z.array(projectSchema).max(500);
  if (collection === 'blog-posts') return z.array(blogPostSchema).max(500);
  return z.array(serviceSchema).max(500);
}

export type AdminLoginInput = z.infer<typeof adminLoginSchema>;
export type ContactSubmissionInput = z.infer<
  typeof contactSubmissionSchema
>;
export type GeneralContactInput = z.infer<typeof generalContactSchema>;
export type NewsletterSubscriptionInput = z.infer<
  typeof newsletterSubscriptionSchema
>;
