'use client';

import { useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import AIConcierge from './AIConcierge';
import FloatingWhatsApp from './FloatingWhatsApp';
import BackToTop from '@/components/layout/footer/BackToTop';

const GAP_PX = 14;

const FloatingActions = () => {
  const pathname = usePathname();
  const [chatOpen, setChatOpen] = useState(false);

  const isAdmin = pathname.startsWith('/admin');

  const positions = useMemo(() => {
    const base = 'max(1rem, calc(env(safe-area-inset-bottom, 0px) + 1rem))';
    const waBottom = base;
    const waSize = '3.5rem'; // 56px
    const chatSize = '3rem'; // 48px
    const chatBottom = `calc(${base} + ${waSize} + ${GAP_PX}px)`;
    const chatTop = `calc(${base} + ${waSize} + ${GAP_PX}px + ${chatSize} + ${GAP_PX}px)`;
    // panel should open above WhatsApp with spacing (and above chat toggle area visually)
    const panelBottom = `calc(${base} + ${waSize} + ${GAP_PX}px)`;
    return { waBottom, chatBottom, chatTop, panelBottom };
  }, []);

  if (isAdmin) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] print:hidden">
      {/* Scroll-to-top: desktop to the left of WhatsApp; mobile above chat toggle to keep bottom-right stack clean */}
      <div
        className="pointer-events-auto fixed right-[calc(max(1rem,env(safe-area-inset-right,0px)+1rem)+3.5rem+0.875rem)] hidden sm:block"
        style={{ bottom: positions.waBottom }}
      >
        <BackToTop hidden={chatOpen} />
      </div>
      <div
        className="pointer-events-auto fixed right-4 sm:hidden"
        style={{ bottom: positions.chatTop }}
      >
        <BackToTop hidden={chatOpen} />
      </div>

      {/* WhatsApp: bottom-right anchor */}
      <div
        className="pointer-events-auto fixed right-4 sm:right-6"
        style={{ bottom: positions.waBottom }}
      >
        <FloatingWhatsApp />
      </div>

      {/* Chatbot toggle + panel */}
      <AIConcierge
        buttonBottom={positions.chatBottom}
        panelBottom={positions.panelBottom}
        onOpenChange={setChatOpen}
      />
    </div>
  );
};

export default FloatingActions;
