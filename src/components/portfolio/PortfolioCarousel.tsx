'use client';

import Image from 'next/image';
import { useState, type CSSProperties } from 'react';
import type { PortfolioPreview, Project } from './portfolioData';

const initials = (name: string) =>
  name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();

interface Props<T extends PortfolioPreview = Project> {
  projects: T[];
  onSelect: (p: T) => void;
}

function PortfolioCarousel<T extends PortfolioPreview>({ projects, onSelect }: Props<T>) {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (id: string) => {
    setImageErrors((prev) => new Set(prev).add(id));
  };

  const doubled = [...projects, ...projects];

  return (
    <div className="relative w-full">
      <style>{`
        .h-scroll {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 20px 0;
        }
        .h-scroll::-webkit-scrollbar { display: none; }
        .h-card {
          flex: 0 0 300px;
          scroll-snap-align: center;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          box-shadow: 0 12px 32px -8px rgba(0,0,0,0.18);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .h-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px -12px rgba(0,0,0,0.28);
        }
        .h-card:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 4px;
        }
        .h-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }
        .h-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
          color: white;
        }
        .h-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, var(--gradient)),
                      linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.15), transparent);
        }
        .h-badge {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(255,255,255,0.22);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 12px;
          border: 1px solid rgba(255,255,255,0.35);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          position: relative;
          z-index: 1;
        }
        .h-title {
          font-size: 14px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 4px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.35);
          position: relative;
          z-index: 1;
        }
        .h-cat {
          font-size: 10px;
          opacity: 0.9;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          text-shadow: 0 1px 4px rgba(0,0,0,0.3);
          position: relative;
          z-index: 1;
        }
        .h-logo-divider {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 12px;
        }
        .h-logo-badge {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          background: white;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        @media (max-width: 640px) {
          .h-card { flex: 0 0 240px; }
          .h-img { height: 160px; }
          .h-logo-badge { width: 56px; height: 56px; border-radius: 16px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .h-card { transition: none; }
        }
      `}</style>

      <div className="h-scroll">
        {doubled.map((p, i) => {
          const isLogo = i === projects.length;
          if (isLogo) {
            return (
              <div className="h-logo-divider" key="logo-divider" aria-hidden="true">
                <div className="h-logo-badge">
                  <Image
                    src="/images/weblign-mark.svg"
                    alt="Weblign logo"
                    width={44}
                    height={44}
                    className="object-contain"
                  />
                </div>
              </div>
            );
          }
          return (
            <button
              key={`${p.id}-${i}`}
              type="button"
              className="h-card"
              onClick={() => onSelect(p)}
              aria-label={`View ${p.title} case study`}
            >
              {p.image && !imageErrors.has(p.id) ? (
                <>
                  <Image
                    src={p.image}
                    alt={p.imageAlt ?? p.title}
                    fill
                    sizes="300px"
                    loading="lazy"
                    className="h-img"
                    onError={() => handleImageError(p.id)}
                  />
                  <div
                    className="h-overlay"
                    style={{ '--gradient': `linear-gradient(to bottom right, ${p.gradient})` } as CSSProperties}
                  >
                    <div className="h-badge">{initials(p.title)}</div>
                    <p className="h-title">{p.title.split('—')[0].trim()}</p>
                    <p className="h-cat">{p.category}</p>
                  </div>
                </>
              ) : (
                <div
                  className="h-overlay"
                  style={{ '--gradient': `linear-gradient(to bottom right, ${p.gradient})` } as CSSProperties}
                >
                  <div className="h-badge">{initials(p.title)}</div>
                  <p className="h-title">{p.title.split('—')[0].trim()}</p>
                  <p className="h-cat">{p.category}</p>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioCarousel;
