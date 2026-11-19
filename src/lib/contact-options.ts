export interface ContactOption {
  value: string;
  label: string;
}

export const contactServiceOptions: ContactOption[] = [
  { value: '', label: 'Select required service' },
  { value: 'web-development', label: 'Business Website Development' },
  { value: 'ecommerce', label: 'E-commerce Development' },
  { value: 'crm-dashboard', label: 'CRM / Business Dashboard' },
  { value: 'mobile-app', label: 'Mobile App Development' },
  { value: 'ai-automation', label: 'AI & Business Automation' },
  { value: 'custom-software', label: 'Custom Software Development' },
  { value: 'other', label: 'Other / Not sure yet' },
];

export const contactBudgetOptions: ContactOption[] = [
  { value: '', label: 'Select estimated budget' },
  { value: 'under-10000', label: 'Under ₹10,000' },
  { value: '10000-25000', label: '₹10,000 – ₹25,000' },
  { value: '25000-50000', label: '₹25,000 – ₹50,000' },
  { value: '50000-100000', label: '₹50,000 – ₹1,00,000' },
  { value: '100000-plus', label: '₹1,00,000+' },
  { value: 'not-sure', label: 'Not sure yet' },
];

export function getContactOptionLabel(
  value: string,
  options: ContactOption[],
  fallback: string,
): string {
  return options.find((option) => option.value === value)?.label ?? fallback;
}
