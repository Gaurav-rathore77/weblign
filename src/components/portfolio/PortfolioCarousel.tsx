'use client';

import Image from 'next/image';
import { useState, useRef, useEffect, useCallback, type CSSProperties } from 'react';
import type { PortfolioPreview, Project } from './portfolioData';

const initials = (name: string) =>
  name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();

interface Props<T extends PortfolioPreview = Project> {
  projects: T[];
  onSelect: (p: T) => void;
}

function PortfolioCarousel<T extends PortfolioPreview>({ projects, onSelect }: Props<T>) {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleImageError = (id: string) => {
    setImageErrors((prev) => new Set(prev).add(id));
  };

  const syncEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    syncEdges();
    el.addEventListener('scroll', syncEdges, { passive: true });
    window.addEventListener('resize', syncEdges);
    return () => {
      el.removeEventListener('scroll', syncEdges);
      window.removeEventListener('resize', syncEdges);
    };
  }, [syncEdges]);

  const page = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(280, el.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <div className="hs">
      <style>{`
        .hs {
          position: relative;
          --pad: 0px;
        }

        .hs-viewport {
          position: relative;
        }

        /* edge fades so clipped cards look intentional */
        .hs-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 88px;
          pointer-events: none;
          z-index: 2;
        }
        .hs-fade-l {
          left: 0;
          background: linear-gradient(to right, #fff 12%, rgba(255, 255, 255, 0));
        }
        .hs-fade-r {
          right: 0;
          background: linear-gradient(to left, #fff 12%, rgba(255, 255, 255, 0));
        }

        .hs-track {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          scroll-padding-inline: 4px;
          padding: 6px 4px 22px;
        }
        .hs-track::-webkit-scrollbar {
          display: none;
        }

        .hs-card {
          position: relative;
          flex: 0 0 300px;
          scroll-snap-align: start;
          /* Matches the 1440x900 screenshots so nothing important is cropped. */
          aspect-ratio: 16 / 10;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          padding: 0;
          border: 0;
          font: inherit;
          color: inherit;
          text-align: left;
          background: #0f172a;
          isolation: isolate;
          box-shadow:
            0 12px 28px -14px rgba(15, 23, 42, 0.4),
            0 0 0 1px rgba(15, 23, 42, 0.06);
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.4s ease;
        }
        .hs-card:hover,
        .hs-card:focus-visible {
          transform: translateY(-6px);
          box-shadow:
            0 26px 46px -16px rgba(15, 23, 42, 0.45),
            0 0 0 1px rgba(37, 99, 235, 0.28);
        }
        .hs-card:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 4px;
        }

        .hs-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hs-card:hover .hs-img {
          transform: scale(1.06);
        }

        .hs-scrim {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(2, 6, 23, 0.92) 0%, rgba(2, 6, 23, 0.45) 44%, rgba(2, 6, 23, 0.06) 74%),
            linear-gradient(to bottom right, var(--gradient));
          opacity: 0.9;
        }

        /* unique touch: thin gradient rail that fills as you scroll */
        .hs-rail {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 8px;
          height: 3px;
          border-radius: 999px;
          background: rgba(100, 116, 139, 0.18);
          overflow: hidden;
          z-index: 3;
        }
        .hs-rail span {
          display: block;
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #2563eb, #38bdf8);
          transform-origin: left center;
        }

        .hs-body {
          position: absolute;
          inset: auto 0 0 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 7px;
          padding: 16px 16px 18px;
        }

        .hs-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 36px;
          height: 26px;
          padding: 0 9px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.92);
          color: #0f172a;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.02em;
          box-shadow: 0 3px 10px rgba(2, 6, 23, 0.35);
        }

        .hs-title {
          font-size: 14px;
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: #fff;
          text-shadow: 0 2px 8px rgba(2, 6, 23, 0.6);
        }

        .hs-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.78);
        }
        .hs-dot {
          width: 3px;
          height: 3px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.5);
        }

        .hs-nav {
          position: absolute;
          top: 42%;
          z-index: 4;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: #fff;
          color: #334155;
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 8px 22px rgba(15, 23, 42, 0.12);
          cursor: pointer;
          transition:
            background 0.25s ease,
            color 0.25s ease,
            box-shadow 0.25s ease,
            opacity 0.25s ease,
            transform 0.25s ease;
        }
        .hs-nav:hover {
          background: #2563eb;
          color: #fff;
          border-color: #2563eb;
          box-shadow: 0 10px 26px rgba(37, 99, 235, 0.35);
        }
        .hs-nav:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 3px;
        }
        .hs-nav[disabled] {
          opacity: 0;
          pointer-events: none;
          transform: scale(0.85);
        }
        .hs-nav-l {
          left: -14px;
        }
        .hs-nav-r {
          right: -14px;
        }

        @media (max-width: 1024px) {
          .hs-nav {
            display: none;
          }
          .hs-fade {
            width: 40px;
          }
        }

        @media (max-width: 640px) {
          .hs-track {
            gap: 14px;
            scroll-snap-type: x proximity;
          }
          .hs-card {
            flex-basis: 250px;
            border-radius: 15px;
          }
          .hs-body {
            padding: 13px 13px 15px;
          }
          .hs-title {
            font-size: 12px;
          }
          .hs-badge {
            min-width: 32px;
            height: 22px;
            font-size: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hs-card,
          .hs-img {
            transition: none;
          }
          .hs-card:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="hs-viewport">
        {!atStart && <span className="hs-fade hs-fade-l" aria-hidden="true" />}
        {!atEnd && <span className="hs-fade hs-fade-r" aria-hidden="true" />}

        <button
          type="button"
          className="hs-nav hs-nav-l"
          onClick={() => page(-1)}
          disabled={atStart}
          aria-label="Scroll projects left"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          className="hs-nav hs-nav-r"
          onClick={() => page(1)}
          disabled={atEnd}
          aria-label="Scroll projects right"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="hs-track" ref={trackRef} tabIndex={0} role="region" aria-label="Project gallery">
          {projects.map((p) => (
            <button
              key={p.id}
              type="button"
              className="hs-card"
              onClick={() => onSelect(p)}
              aria-label={`View ${p.title} case study`}
            >
              {p.image && !imageErrors.has(p.id) ? (
                <Image
                  src={p.image}
                  alt={p.imageAlt ?? p.title}
                  fill
                  sizes="(max-width: 640px) 250px, 300px"
                  loading="lazy"
                  className="hs-img"
                  onError={() => handleImageError(p.id)}
                />
              ) : null}

              <div
                className="hs-scrim"
                style={
                  {
                    '--gradient': `linear-gradient(to bottom right, ${p.gradient.replace(
                      /-(700|600|500|800)\b/g,
                      '',
                    )}, rgba(2,6,23,0.55))`,
                  } as CSSProperties
                }
              />

              <div className="hs-body">
                <span className="hs-badge">{initials(p.title)}</span>
                <span className="hs-title">{p.title.split('—')[0].trim()}</span>
                <span className="hs-meta">
                  {p.category}
                  <span className="hs-dot" />
                  Weblign
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="hs-rail" aria-hidden="true">
          <span style={{ width: '34%' }} />
        </div>
      </div>
    </div>
  );
}

export default PortfolioCarousel;