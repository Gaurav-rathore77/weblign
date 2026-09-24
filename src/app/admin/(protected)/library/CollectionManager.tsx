'use client';

import { useState, type ReactNode } from 'react';
import {
  ExternalLink,
  FileText,
  FolderKanban,
  ImagePlus,
  Pencil,
  Plus,
  Save,
  Trash2,
  Wrench,
  X,
} from 'lucide-react';

export type CollectionName = 'projects' | 'blog-posts' | 'services';
type FormValues = Record<string, string>;

type CollectionManagerProps = {
  collection: CollectionName;
  initialItems: unknown[];
  initialPublished: boolean;
};

type SaveStatus = 'idle' | 'saving' | 'saved' | 'error';
const NEW_ITEM = '__new-item__';

const collectionMeta: Record<
  CollectionName,
  { title: string; description: string; icon: typeof FolderKanban }
> = {
  projects: {
    title: 'Projects',
    description: 'Add portfolio projects with images, case-study details and links.',
    icon: FolderKanban,
  },
  'blog-posts': {
    title: 'Blog posts',
    description: 'Publish articles, author details and blog artwork.',
    icon: FileText,
  },
  services: {
    title: 'Services',
    description: 'Manage the services shown across the website.',
    icon: Wrench,
  },
};

const projectCategories = [
  'Web Apps',
  'Business Websites',
  'Education Portals',
];
const serviceIconOptions = [
  { value: 'web', label: 'Web / globe' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'design', label: 'Design' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'cloud', label: 'Cloud' },
  { value: 'ai', label: 'AI' },
];

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' ? (value as Record<string, unknown>) : {};
}

function asText(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function asList(value: unknown): string {
  return Array.isArray(value) ? value.filter((item) => typeof item === 'string').join('\n') : '';
}

function splitList(value: string): string[] {
  return value
    .split(/[\n,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function newId(collection: CollectionName, title: string): string {
  const prefix = collection === 'blog-posts' ? 'post' : collection === 'projects' ? 'project' : 'service';
  return `${prefix}-${slugify(title) || Date.now().toString(36)}`;
}

function emptyValues(collection: CollectionName): FormValues {
  if (collection === 'projects') {
    return {
      id: '',
      title: '',
      description: '',
      category: projectCategories[0],
      image: '',
      imageAlt: '',
      gradient: 'from-blue-700 via-indigo-700 to-purple-700',
      tech: '',
      metrics: '',
      demoUrl: '',
      overview: '',
      problem: '',
      solution: '',
      technologies: '',
      timeline: '',
      results: '',
      testimonialQuote: '',
      testimonialName: '',
      testimonialRole: '',
    };
  }

  if (collection === 'blog-posts') {
    return {
      id: '',
      title: '',
      excerpt: '',
      category: 'Development',
      date: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      readTime: '5 min read',
      authorName: '',
      authorRole: '',
      authorInitials: '',
      imageGradient: 'from-blue-600/20 to-cyan-600/20',
      imageIconName: 'HiOutlineBolt',
      imageUrl: '',
      content: '',
      href: '#',
    };
  }

  return {
    id: '',
    title: '',
    description: '',
    iconKey: 'web',
    features: '',
  };
}

function itemToValues(collection: CollectionName, value: unknown): FormValues {
  const item = asRecord(value);

  if (collection === 'projects') {
    const testimonial = asRecord(item.testimonial);
    return {
      id: asText(item.id),
      title: asText(item.title),
      description: asText(item.description),
      category: asText(item.category) || projectCategories[0],
      image: asText(item.image),
      imageAlt: asText(item.imageAlt),
      gradient: asText(item.gradient),
      tech: asList(item.tech),
      metrics: asText(item.metrics),
      demoUrl: asText(item.demoUrl),
      overview: asText(item.overview),
      problem: asText(item.problem),
      solution: asText(item.solution),
      technologies: asList(item.technologies),
      timeline: asText(item.timeline),
      results: asList(item.results),
      testimonialQuote: asText(testimonial.quote),
      testimonialName: asText(testimonial.name),
      testimonialRole: asText(testimonial.role),
    };
  }

  if (collection === 'blog-posts') {
    const author = asRecord(item.author);
    const image = asRecord(item.image);
    return {
      id: asText(item.id),
      title: asText(item.title),
      excerpt: asText(item.excerpt),
      category: asText(item.category) || 'Development',
      date: asText(item.date),
      readTime: asText(item.readTime),
      authorName: asText(author.name),
      authorRole: asText(author.role),
      authorInitials: asText(author.initials),
      imageGradient: asText(image.gradient),
      imageIconName: asText(image.iconName),
      imageUrl: asText(image.url),
      content: asText(item.content),
      href: asText(item.href),
    };
  }

  return {
    id: asText(item.id),
    title: asText(item.title),
    description: asText(item.description),
    iconKey: asText(item.iconKey) || 'web',
    features: asList(item.features),
  };
}

function valuesToItem(collection: CollectionName, values: FormValues): Record<string, unknown> {
  const id = values.id.trim() || newId(collection, values.title);

  if (collection === 'projects') {
    return {
      id,
      title: values.title.trim(),
      description: values.description.trim(),
      category: values.category,
      image: values.image.trim(),
      imageAlt: values.imageAlt.trim() || undefined,
      gradient: values.gradient.trim(),
      tech: splitList(values.tech),
      metrics: values.metrics.trim(),
      demoUrl: values.demoUrl.trim(),
      overview: values.overview.trim(),
      problem: values.problem.trim(),
      solution: values.solution.trim(),
      technologies: splitList(values.technologies),
      timeline: values.timeline.trim(),
      results: splitList(values.results),
      testimonial: {
        quote: values.testimonialQuote.trim(),
        name: values.testimonialName.trim(),
        role: values.testimonialRole.trim(),
      },
    };
  }

  if (collection === 'blog-posts') {
    return {
      id,
      title: values.title.trim(),
      excerpt: values.excerpt.trim(),
      category: values.category.trim(),
      date: values.date.trim(),
      readTime: values.readTime.trim(),
      author: {
        name: values.authorName.trim(),
        role: values.authorRole.trim(),
        initials: values.authorInitials.trim().slice(0, 4).toUpperCase(),
      },
      image: {
        gradient: values.imageGradient.trim(),
        iconName: values.imageIconName.trim(),
        url: values.imageUrl.trim(),
      },
      content: values.content.trim(),
      href: values.href.trim() || '#',
    };
  }

  return {
    id,
    title: values.title.trim(),
    description: values.description.trim(),
    iconKey: values.iconKey,
    features: splitList(values.features),
  };
}

function validateValues(collection: CollectionName, values: FormValues): string | null {
  if (!values.title.trim()) return 'Title is required.';
  if (!values.id.trim()) return 'ID is required. Use a short unique ID.';

  if (collection === 'projects') {
    if (!values.image.trim()) return 'Project image path is required.';
    if (!values.description.trim()) return 'Project description is required.';
    if (!values.overview.trim()) return 'Project overview is required.';
    if (!values.problem.trim()) return 'Project problem is required.';
    if (!values.solution.trim()) return 'Project solution is required.';
    if (!values.demoUrl.trim()) return 'Live demo URL is required.';
    if (!values.testimonialQuote.trim() || !values.testimonialName.trim() || !values.testimonialRole.trim()) {
      return 'Complete the testimonial fields.';
    }
  }
  if (collection === 'blog-posts') {
    if (!values.excerpt.trim()) return 'Excerpt is required.';
    if (!values.category.trim() || !values.date.trim() || !values.readTime.trim()) {
      return 'Category, date and read time are required.';
    }
    if (!values.authorName.trim()) return 'Author name is required.';
    if (!values.authorInitials.trim()) return 'Author initials are required.';
    if (!values.imageUrl.trim()) return 'Blog image path is required.';
    if (!values.imageGradient.trim() || !values.imageIconName.trim()) {
      return 'Blog image gradient and icon name are required.';
    }
  }
  if (collection === 'services' && !values.description.trim()) {
    return 'Service description is required.';
  }
  return null;
}

const inputClass =
  'admin-form-field w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-primary focus:ring-2 focus:ring-primary/15 dark:border-zinc-700 dark:bg-[#27272a] dark:text-white dark:placeholder-zinc-400';
const labelClass = 'block text-sm font-medium text-zinc-700 dark:text-zinc-200';
const textareaClass = `${inputClass} min-h-28 resize-y leading-relaxed`;

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className={labelClass}>
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
      {hint && <span className="text-xs text-zinc-500 dark:text-zinc-400">{hint}</span>}
    </label>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
  hint,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <Field label={label} required={required} hint={hint}>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        className={inputClass}
      />
    </Field>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  required,
  hint,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  hint?: string;
  rows?: number;
}) {
  return (
    <Field label={label} required={required} hint={hint}>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={textareaClass}
      />
    </Field>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
  required,
}: {
  label: string;
  value: string;
  options: Array<{ value: string; label: string }>;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <Field label={label} required={required}>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className={inputClass}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Field>
  );
}

function ListField({
  label,
  value,
  onChange,
  placeholder,
  hint,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  hint?: string;
}) {
  return (
    <TextAreaField
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      hint={hint}
      rows={4}
    />
  );
}

function CollectionForm({
  collection,
  values,
  setValues,
  onSave,
  onCancel,
  saving,
  isNew,
}: {
  collection: CollectionName;
  values: FormValues;
  setValues: (values: FormValues) => void;
  onSave: () => void;
  onCancel: () => void;
  saving: boolean;
  isNew: boolean;
}) {
  const update = (key: string, value: string) => setValues({ ...values, [key]: value });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSave();
      }}
      className="space-y-6 rounded-2xl border border-primary/20 bg-zinc-50/70 p-5 dark:bg-[#18181b] sm:p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-white">
            {isNew ? `Add ${collectionMeta[collection].title.replace(/s$/, '')}` : 'Edit content'}
          </h3>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Fields marked with <span className="text-red-500">*</span> are required.
          </p>
        </div>
        <button type="button" onClick={onCancel} className="admin-secondary-button">
          <X className="h-4 w-4" aria-hidden="true" /> Cancel
        </button>
      </div>

      {collection === 'projects' && (
        <>
          <div className="grid gap-5 md:grid-cols-2">
            <TextField label="Unique ID" value={values.id} onChange={(value) => update('id', value)} placeholder="project-name" required />
            <TextField label="Project title" value={values.title} onChange={(value) => update('title', value)} placeholder="Project title" required />
          </div>
          <TextAreaField label="Short description" value={values.description} onChange={(value) => update('description', value)} placeholder="One or two lines shown on the project card" required />
          <div className="grid gap-5 md:grid-cols-2">
            <SelectField label="Category" value={values.category} options={projectCategories.map((category) => ({ value: category, label: category }))} onChange={(value) => update('category', value)} required />
            <TextField label="Image path" value={values.image} onChange={(value) => update('image', value)} placeholder="/images/project.webp" required hint="Use a local image path." />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <TextField label="Image alt text" value={values.imageAlt} onChange={(value) => update('imageAlt', value)} placeholder="Describe the image" />
            <TextField label="Gradient" value={values.gradient} onChange={(value) => update('gradient', value)} placeholder="from-blue-700 via-indigo-700 to-purple-700" />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <TextField label="Metrics" value={values.metrics} onChange={(value) => update('metrics', value)} placeholder="50K+ Students" />
            <TextField label="Live demo URL" value={values.demoUrl} onChange={(value) => update('demoUrl', value)} placeholder="https://example.com" type="url" required />
            <TextField label="Timeline" value={values.timeline} onChange={(value) => update('timeline', value)} placeholder="4 months" />
          </div>
          <ListField label="Technology tags" value={values.tech} onChange={(value) => update('tech', value)} placeholder={'Next.js\nTypeScript\nTailwind CSS'} hint="Write one tag per line." />
          <TextAreaField label="Overview" value={values.overview} onChange={(value) => update('overview', value)} placeholder="Full case-study overview" required rows={5} />
          <div className="grid gap-5 md:grid-cols-2">
            <TextAreaField label="Problem" value={values.problem} onChange={(value) => update('problem', value)} placeholder="What problem did the client have?" required rows={5} />
            <TextAreaField label="Solution" value={values.solution} onChange={(value) => update('solution', value)} placeholder="How did you solve it?" required rows={5} />
          </div>
          <ListField label="Technologies used" value={values.technologies} onChange={(value) => update('technologies', value)} placeholder={'Next.js\nNode.js\nPostgreSQL'} hint="Write one technology per line." />
          <ListField label="Results" value={values.results} onChange={(value) => update('results', value)} placeholder={'50,000+ users\n60% faster delivery'} hint="Write one result per line." />
          <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-[#27272a]">
            <h4 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-white">Testimonial</h4>
            <div className="grid gap-5 md:grid-cols-2">
              <TextField label="Client name" value={values.testimonialName} onChange={(value) => update('testimonialName', value)} placeholder="Client name" />
              <TextField label="Client role" value={values.testimonialRole} onChange={(value) => update('testimonialRole', value)} placeholder="Founder, Company" />
            </div>
            <div className="mt-5"><TextAreaField label="Quote" value={values.testimonialQuote} onChange={(value) => update('testimonialQuote', value)} placeholder="Client testimonial" rows={3} /></div>
          </div>
        </>
      )}

      {collection === 'blog-posts' && (
        <>
          <div className="grid gap-5 md:grid-cols-2">
            <TextField label="Unique ID" value={values.id} onChange={(value) => update('id', value)} placeholder="post-1" required />
            <TextField label="Post title" value={values.title} onChange={(value) => update('title', value)} placeholder="Blog post title" required />
          </div>
          <TextAreaField label="Excerpt" value={values.excerpt} onChange={(value) => update('excerpt', value)} placeholder="Short summary shown on the blog card" required />
          <TextAreaField label="Article content" value={values.content} onChange={(value) => update('content', value)} placeholder="Write the full article here. Separate paragraphs with a blank line." hint="Optional. If empty, the detail page will show a helpful default introduction." rows={10} />
          <div className="grid gap-5 md:grid-cols-2">
            <TextField label="Category" value={values.category} onChange={(value) => update('category', value)} placeholder="Development" required />
            <TextField label="Publish date" value={values.date} onChange={(value) => update('date', value)} placeholder="Jun 28, 2026" required />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <TextField label="Read time" value={values.readTime} onChange={(value) => update('readTime', value)} placeholder="8 min read" required />
            <TextField label="Post link" value={values.href} onChange={(value) => update('href', value)} placeholder="/blog/post-slug or #" />
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-[#27272a]">
            <h4 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-white">Author</h4>
            <div className="grid gap-5 md:grid-cols-3">
              <TextField label="Name" value={values.authorName} onChange={(value) => update('authorName', value)} placeholder="Author name" required />
              <TextField label="Role" value={values.authorRole} onChange={(value) => update('authorRole', value)} placeholder="Lead Developer" />
              <TextField label="Initials" value={values.authorInitials} onChange={(value) => update('authorInitials', value)} placeholder="SR" />
            </div>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-[#27272a]">
            <h4 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-white">Blog image</h4>
            <div className="grid gap-5 md:grid-cols-2">
              <TextField label="Image path" value={values.imageUrl} onChange={(value) => update('imageUrl', value)} placeholder="/images/blog-cover.webp" required />
              <TextField label="Gradient" value={values.imageGradient} onChange={(value) => update('imageGradient', value)} placeholder="from-blue-600/20 to-cyan-600/20" />
              <TextField label="Icon name" value={values.imageIconName} onChange={(value) => update('imageIconName', value)} placeholder="HiOutlineBolt" />
            </div>
          </div>
        </>
      )}

      {collection === 'services' && (
        <>
          <div className="grid gap-5 md:grid-cols-2">
            <TextField label="Unique ID" value={values.id} onChange={(value) => update('id', value)} placeholder="web-development" required />
            <TextField label="Service title" value={values.title} onChange={(value) => update('title', value)} placeholder="Web Development" required />
          </div>
          <SelectField label="Icon" value={values.iconKey} options={serviceIconOptions} onChange={(value) => update('iconKey', value)} />
          <TextAreaField label="Description" value={values.description} onChange={(value) => update('description', value)} placeholder="What does this service include?" required />
          <ListField label="Features" value={values.features} onChange={(value) => update('features', value)} placeholder={'Custom web development\nSEO optimization\nPerformance tuning'} hint="Write one feature per line." />
        </>
      )}

      <div className="flex flex-wrap items-center justify-end gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-700">
        <button type="button" onClick={onCancel} className="admin-secondary-button">Cancel</button>
        <button type="submit" disabled={saving} className="admin-primary-button">
          <Save className="h-4 w-4" aria-hidden="true" />
          {saving ? 'Saving…' : 'Save content'}
        </button>
      </div>
    </form>
  );
}

export default function CollectionManager({
  collection,
  initialItems,
  initialPublished,
}: CollectionManagerProps) {
  const meta = collectionMeta[collection];
  const Icon = meta.icon;
  const [items, setItems] = useState<FormValues[]>(() =>
    Array.isArray(initialItems) ? initialItems.map((item) => itemToValues(collection, item)) : [],
  );
  const [published, setPublished] = useState(initialPublished);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<FormValues>(() => emptyValues(collection));
  const [status, setStatus] = useState<SaveStatus>('idle');
  const [message, setMessage] = useState('');

  const startNew = () => {
    setEditingId(NEW_ITEM);
    setDraft(emptyValues(collection));
    setStatus('idle');
    setMessage('');
  };

  const startEdit = (values: FormValues) => {
    setEditingId(values.id);
    setDraft(values);
    setStatus('idle');
    setMessage('');
  };

  const persist = async (nextItems: FormValues[], nextPublished: boolean) => {
    setStatus('saving');
    setMessage('');
    try {
      const response = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          collection,
          value: nextItems.map((item) => valuesToItem(collection, item)),
          published: nextPublished,
        }),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || 'Unable to save content.');
      setItems(nextItems);
      setPublished(nextPublished);
      setStatus('saved');
      setMessage(nextPublished ? 'Content published successfully.' : 'Draft saved successfully.');
      return true;
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to save content.');
      return false;
    }
  };

  const saveForm = async () => {
    const preparedDraft = draft.id.trim()
      ? draft
      : { ...draft, id: newId(collection, draft.title) };
    const validationError = validateValues(collection, preparedDraft);
    if (validationError) {
      setStatus('error');
      setMessage(validationError);
      return;
    }

    const nextItems =
      editingId === NEW_ITEM
        ? [...items, preparedDraft]
        : items.map((item) => (item.id === editingId ? preparedDraft : item));
    const saved = await persist(nextItems, published);
    if (saved) setEditingId(null);
  };

  const deleteItem = async (id: string) => {
    if (!window.confirm('Delete this item? This cannot be undone.')) return;
    await persist(items.filter((item) => item.id !== id), published);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" aria-hidden="true" /></span>
          <div><h2 className="font-semibold text-zinc-900 dark:text-white">{meta.description}</h2><p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{items.length} {items.length === 1 ? 'item' : 'items'} configured</p></div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300"><input type="checkbox" checked={published} onChange={(event) => setPublished(event.target.checked)} className="h-4 w-4 rounded border-zinc-300 text-primary focus:ring-primary/20" />Publish on website</label>
          <button type="button" onClick={() => void persist(items, published)} disabled={status === 'saving'} className="admin-secondary-button"><Save className="h-4 w-4" aria-hidden="true" />{status === 'saving' ? 'Saving…' : 'Save all'}</button>
          <button type="button" onClick={startNew} className="admin-primary-button"><Plus className="h-4 w-4" aria-hidden="true" />Add new</button>
        </div>
      </div>

      {message && <p className={`rounded-xl border px-4 py-3 text-sm ${status === 'error' ? 'border-red-200 bg-red-50 text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300' : 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-300'}`} role="status">{message}</p>}

      {editingId === NEW_ITEM && <CollectionForm collection={collection} values={draft} setValues={setDraft} onSave={() => void saveForm()} onCancel={() => setEditingId(null)} saving={status === 'saving'} isNew />}

      {items.length === 0 && editingId !== NEW_ITEM && <div className="rounded-2xl border border-dashed border-zinc-300 p-12 text-center dark:border-zinc-700"><ImagePlus className="mx-auto h-8 w-8 text-zinc-400" aria-hidden="true" /><p className="mt-3 font-medium text-zinc-700 dark:text-zinc-200">Nothing here yet</p><p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Use “Add new” to create the first item.</p></div>}

      <div className="space-y-4">
        {items.map((item) => {
          const isEditing = editingId === item.id;
          const ItemIcon = collection === 'projects' ? FolderKanban : collection === 'blog-posts' ? FileText : Wrench;
          return (
            <article key={item.id} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex flex-wrap items-center justify-between gap-4 p-5">
                <div className="flex min-w-0 items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"><ItemIcon className="h-5 w-5" aria-hidden="true" /></span><div className="min-w-0"><h3 className="truncate font-semibold text-zinc-900 dark:text-white">{item.title || 'Untitled'}</h3><p className="mt-1 truncate text-xs text-zinc-500 dark:text-zinc-400">ID: {item.id} {collection === 'blog-posts' && item.category ? `· ${item.category}` : ''}</p></div></div>
                <div className="flex items-center gap-2"><button type="button" onClick={() => startEdit(item)} className="admin-secondary-button"><Pencil className="h-4 w-4" aria-hidden="true" />Edit</button><button type="button" onClick={() => void deleteItem(item.id)} className="admin-danger-button"><Trash2 className="h-4 w-4" aria-hidden="true" /><span className="sr-only">Delete {item.title}</span></button></div>
              </div>
              {isEditing && <div className="border-t border-zinc-100 p-5 dark:border-zinc-800"><CollectionForm collection={collection} values={draft} setValues={setDraft} onSave={() => void saveForm()} onCancel={() => setEditingId(null)} saving={status === 'saving'} isNew={false} /></div>}
            </article>
          );
        })}
      </div>

      <p className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"><ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> Changes appear on the public site after you save and publish.</p>
    </div>
  );
}
