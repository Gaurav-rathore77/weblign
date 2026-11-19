'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  className?: string;
  hidden?: boolean;
}

const BackToTop = ({ className = '', hidden = false }: BackToTopProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible || hidden) return null;

  return (
    <button
      type="button"
      className={`back-to-top inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-500 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white hover:text-zinc-700 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400         ${className}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
