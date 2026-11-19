'use client';

import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';

interface FloatingWhatsAppProps {
  className?: string;
}

const FloatingWhatsApp = ({ className = '' }: FloatingWhatsAppProps) => {
  const href = getWhatsAppUrlFor('consultation');

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Weblign"
      data-track-event="whatsapp_click"
      data-track-label="floating_whatsapp"
      data-track-location="global"
      className={`group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] print:hidden ${className}`}
    >
      <span
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366]/30 motion-safe:animate-ping [animation-duration:2.5s]"
        aria-hidden="true"
      />
      <HiOutlineChatBubbleLeftRight className="h-7 w-7" aria-hidden="true" />
    </a>
  );
};

export default FloatingWhatsApp;
