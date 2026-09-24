import { ObjectId, type Document } from 'mongodb';
import { getDb } from '@/lib/mongodb';
import {
  blogPosts as fallbackBlogPosts,
  type BlogPost,
} from '@/components/blog-page/blogData';
import {
  projects as fallbackProjects,
  featuredProject as fallbackFeaturedProject,
  type Project,
} from '@/components/portfolio/portfolioData';
import {
  services as fallbackServices,
  type Service,
} from '@/components/services/servicesData';
import { contentSchemaForCollection, siteSettingsSchema } from '@/lib/validators';

export interface SiteSettings {
  brandName: string;
  hero: {
    badge: string;
    titleLine1Before: string;
    titleLine1Accent: string;
    titleLine2Before: string;
    titleLine2Accent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}

export interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  details: string;
  status: 'new' | 'read';
  createdAt: string;
}

interface ContentDocument extends Document {
  key: string;
  value: unknown;
  published: boolean;
  updatedAt: Date;
}

interface SubmissionDocument extends Document {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  details: string;
  status: 'new' | 'read';
  createdAt: Date;
}

export const defaultSiteSettings: SiteSettings = {
  brandName: 'Weblign',
  hero: {
    badge: 'Trusted by Innovative Founders',
    titleLine1Before: 'Build',
    titleLine1Accent: 'Digital Experiences',
    titleLine2Before: 'That',
    titleLine2Accent: 'Grow Your Business',
    description:
      'We craft beautiful, high-performance digital products that drive real results. From web applications to complete digital ecosystems, we transform your vision into reality.',
    primaryCta: 'Get Started',
    secondaryCta: 'View Portfolio',
  },
  contact: {
    email: 'info.weblign@gmail.com',
    phone: '+91 9315051726',
    address: 'India',
  },
};

function mergeSettings(value: Partial<SiteSettings> | null | undefined): SiteSettings {
  return {
    ...defaultSiteSettings,
    ...value,
    hero: { ...defaultSiteSettings.hero, ...value?.hero },
    contact: { ...defaultSiteSettings.contact, ...value?.contact },
  };
}

async function getContentDocument(
  key: string,
  includeUnpublished = false,
): Promise<ContentDocument | null> {
  try {
    const db = await getDb();
    if (!db) return null;
    return await db.collection<ContentDocument>('content').findOne({
      key,
      ...(includeUnpublished ? {} : { published: { $ne: false } }),
    });
  } catch {
    return null;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const document = await getContentDocument('site-settings');
  const value = document?.value;
  const parsed = siteSettingsSchema.safeParse(value);
  return mergeSettings(parsed.success ? parsed.data : undefined);
}

export async function saveSiteSettings(settings: SiteSettings): Promise<boolean> {
  try {
    const db = await getDb();
    if (!db) return false;

    await db.collection<ContentDocument>('content').updateOne(
      { key: 'site-settings' },
      {
        $set: {
          key: 'site-settings',
          value: settings,
          published: true,
          updatedAt: new Date(),
        },
      },
      { upsert: true },
    );
    return true;
  } catch {
    return false;
  }
}

async function getCollection<T>(key: string, fallback: T[]): Promise<T[]> {
  const document = await getContentDocument(key);
  if (!Array.isArray(document?.value) || document.value.length === 0) {
    return fallback;
  }

  const parsed = contentSchemaForCollection(key).safeParse(document.value);
  return parsed.success ? (parsed.data as T[]) : fallback;
}

export async function saveCollection(
  key: string,
  value: unknown,
  published = true,
): Promise<boolean> {
  try {
    const db = await getDb();
    if (!db) return false;

    await db.collection<ContentDocument>('content').updateOne(
      { key },
      {
        $set: { key, value, published, updatedAt: new Date() },
      },
      { upsert: true },
    );
    return true;
  } catch {
    return false;
  }
}

export async function getProjects(): Promise<Project[]> {
  return getCollection('projects', fallbackProjects);
}

export async function getFeaturedProject(): Promise<Project> {
  const projects = await getProjects();
  return (
    projects.find(
      (project) =>
        project.id === 'vidya-vriddhi' ||
        project.id === 'featured-vidya-vriddhi',
    ) ??
    projects[0] ??
    fallbackFeaturedProject
  );
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return getCollection('blog-posts', fallbackBlogPosts);
}

export async function getServices(): Promise<Service[]> {
  return getCollection('services', fallbackServices);
}

export async function getAdminCollection(
  key: string,
): Promise<unknown | null> {
  const document = await getContentDocument(key, true);
  return document?.value ?? null;
}

function serializeSubmission(document: SubmissionDocument): ContactSubmission {
  return {
    id: document._id.toString(),
    fullName: document.fullName,
    email: document.email,
    phone: document.phone,
    company: document.company,
    service: document.service,
    budget: document.budget,
    details: document.details,
    status: document.status,
    createdAt: document.createdAt.toISOString(),
  };
}

export async function saveContactSubmission(input: {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  details: string;
}): Promise<boolean> {
  try {
    const db = await getDb();
    if (!db) return false;

    await db.collection<SubmissionDocument>('contact_submissions').insertOne({
      ...input,
      status: 'new',
      createdAt: new Date(),
    });
    return true;
  } catch {
    return false;
  }
}

export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  try {
    const db = await getDb();
    if (!db) return [];

    const documents = await db
      .collection<SubmissionDocument>('contact_submissions')
      .find({})
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();

    return documents.map(serializeSubmission);
  } catch {
    return [];
  }
}

export async function updateContactSubmission(
  id: string,
  status: 'new' | 'read',
): Promise<boolean> {
  try {
    const db = await getDb();
    if (!db || !ObjectId.isValid(id)) return false;

    const result = await db.collection<SubmissionDocument>('contact_submissions').updateOne(
      { _id: new ObjectId(id) },
      { $set: { status } },
    );
    return result.modifiedCount === 1;
  } catch {
    return false;
  }
}

export async function deleteContactSubmission(id: string): Promise<boolean> {
  try {
    const db = await getDb();
    if (!db || !ObjectId.isValid(id)) return false;

    const result = await db.collection<SubmissionDocument>('contact_submissions').deleteOne({
      _id: new ObjectId(id),
    });
    return result.deletedCount === 1;
  } catch {
    return false;
  }
}

export async function getAdminStats(): Promise<{
  projects: number;
  services: number;
  blogPosts: number;
  newInquiries: number;
  mongoConnected: boolean;
}> {
  try {
    const db = await getDb();
    if (!db) {
      return {
        projects: fallbackProjects.length,
        services: fallbackServices.length,
        blogPosts: fallbackBlogPosts.length,
        newInquiries: 0,
        mongoConnected: false,
      };
    }

    const [contentDocuments, newInquiries] = await Promise.all([
      db
        .collection<ContentDocument>('content')
        .find({
          key: { $in: ['projects', 'services', 'blog-posts'] },
          published: { $ne: false },
        })
        .toArray(),
      db.collection('contact_submissions').countDocuments({ status: 'new' }),
    ]);

    const countEntries = (key: string, fallbackLength: number) => {
      const value = contentDocuments.find((document) => document.key === key)?.value;
      return Array.isArray(value) ? value.length : fallbackLength;
    };

    return {
      projects: countEntries('projects', fallbackProjects.length),
      services: countEntries('services', fallbackServices.length),
      blogPosts: countEntries('blog-posts', fallbackBlogPosts.length),
      newInquiries,
      mongoConnected: true,
    };
  } catch {
    return {
      projects: fallbackProjects.length,
      services: fallbackServices.length,
      blogPosts: fallbackBlogPosts.length,
      newInquiries: 0,
      mongoConnected: false,
    };
  }
}

export const contentCollectionNames = ['projects', 'blog-posts', 'services'] as const;
export type ContentCollectionName = (typeof contentCollectionNames)[number];

export function isContentCollectionName(value: string): value is ContentCollectionName {
  return contentCollectionNames.includes(value as ContentCollectionName);
}
