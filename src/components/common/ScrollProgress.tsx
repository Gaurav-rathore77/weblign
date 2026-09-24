'use client';

import { useEffect, useRef } from 'react';

const ScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame = 0;
    let scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const updateProgress = () => {
      animationFrame = 0;

      const progress =
        scrollableHeight > 0
          ? Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1)
          : 0;

      const progressBar = progressRef.current;
      if (!progressBar) return;

      progressBar.style.transform = `scaleX(${progress})`;
      progressBar.setAttribute('aria-valuenow', String(Math.round(progress * 100)));
    };

    const requestUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    };

    const measurePage = () => {
      scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      requestUpdate();
    };

    const resizeObserver = new ResizeObserver(measurePage);
    resizeObserver.observe(document.body);

    measurePage();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', measurePage, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', measurePage);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary via-accent to-primary"
      style={{ transform: 'scaleX(0)', willChange: 'transform' }}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
    />
  );
};

export default ScrollProgress;
