import { socialLinks } from '@/constants';

export type WhatsAppIntent =
  | 'general'
  | 'consultation'
  | 'website'
  | 'ecommerce'
  | 'crm'
  | 'mobile'
  | 'custom'
  | 'pricing';

const MESSAGES: Record<WhatsAppIntent, string> = {
  general:
    'Hi Weblign, I would like to discuss my project requirements. Please share the details.',
  consultation:
    'Hi Weblign, I would like to get a free consultation for my project. Please share the details.',
  website:
    'Hi Weblign, I am interested in developing a business website. Please share the details.',
  ecommerce:
    'Hi Weblign, I want to develop an e-commerce website. Can we discuss my requirements?',
  crm:
    'Hi Weblign, I need a custom CRM or business dashboard. I would like to discuss my project.',
  mobile:
    'Hi Weblign, I am interested in developing a mobile application.',
  custom:
    'Hi Weblign, I have a custom software project requirement.',
  pricing:
    'Hi Weblign, I would like to discuss pricing and the right package for my project.',
};

export function getWhatsAppMessage(intent: WhatsAppIntent = 'general', context?: string): string {
  if (context) {
    const normalized = context.toLowerCase();
    if (normalized.includes('e-commerce') || normalized.includes('ecommerce') || normalized.includes('store')) {
      return MESSAGES.ecommerce;
    }
    if (normalized.includes('crm') || normalized.includes('dashboard')) {
      return MESSAGES.crm;
    }
    if (normalized.includes('mobile') || normalized.includes('app development') || normalized.includes('application')) {
      return MESSAGES.mobile;
    }
    if (normalized.includes('custom') || normalized.includes('automation') || normalized.includes('software')) {
      return MESSAGES.custom;
    }
    if (normalized.includes('website') || normalized.includes('landing')) {
      return MESSAGES.website;
    }
  }
  return MESSAGES[intent];
}

export function getWhatsAppUrl(message: string): string {
  return `${socialLinks.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppUrlFor(intent: WhatsAppIntent = 'general', context?: string): string {
  return getWhatsAppUrl(getWhatsAppMessage(intent, context));
}
