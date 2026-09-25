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
  { value: 'under-10000', label: 'Under ₹10,000' },
  { value: '10000-25000', label: '₹10,000 – ₹25,000' },
  { value: '25000-75000', label: '₹25,000 – ₹75,000' },
  { value: '75000-plus', label: '₹75,000+' },
];

export function getContactOptionLabel(
  value: string,
  options: ContactOption[],
  fallback: string,
): string {
  return options.find((option) => option.value === value)?.label ?? fallback;
}
