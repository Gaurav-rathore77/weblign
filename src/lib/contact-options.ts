export interface ContactOption {
  value: string;
  label: string;
}

export const contactServiceOptions: ContactOption[] = [
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

export const contactBudgetOptions: ContactOption[] = [
  { value: '', label: 'Select your budget' },
  { value: 'under-500', label: 'Under $500' },
  { value: '500-1000', label: '$500 – $1,000' },
  { value: '1000-5000', label: '$1,000 – $5,000' },
  { value: '5000-plus', label: '$5,000+' },
];

export function getContactOptionLabel(
  value: string,
  options: ContactOption[],
  fallback: string,
): string {
  return options.find((option) => option.value === value)?.label ?? fallback;
}
