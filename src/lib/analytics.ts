export type ConversionEventName =
  | 'whatsapp_click'
  | 'inquiry_form_start'
  | 'inquiry_form_submit'
  | 'pricing_cta_click'
  | 'service_cta_click';

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(name: ConversionEventName, params: EventParams = {}) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}
