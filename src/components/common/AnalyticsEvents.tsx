'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

function getEventName(value: string | undefined) {
  switch (value) {
    case 'whatsapp_click':
    case 'inquiry_form_start':
    case 'inquiry_form_submit':
    case 'pricing_cta_click':
    case 'service_cta_click':
      return value;
    default:
      return null;
  }
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const el = target?.closest<HTMLElement>('[data-track-event]');
      if (!el) return;

      const name = getEventName(el.dataset.trackEvent);
      if (!name) return;

      trackEvent(name, {
        event_category: el.dataset.trackCategory || 'engagement',
        event_label: el.dataset.trackLabel || undefined,
        location: el.dataset.trackLocation || undefined,
        destination: el.dataset.trackDestination || undefined,
        intent: el.dataset.trackIntent || undefined,
      });
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
