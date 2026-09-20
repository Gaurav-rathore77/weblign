'use client';

import { useState } from 'react';
import type { Project } from './portfolioData';

const initials = (name: string) =>
  name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

interface Props {
  projects: Project[];
  onSelect: (p: Project) => void;
}

const PortfolioCarousel = ({ projects, onSelect }: Props) => {
  const qty = projects.length;
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (id: string) => {
    setImageErrors(prev => new Set(prev).add(id));
  };

  return (
    <div className="wrapper relative flex h-[650px] w-full items-center justify-center text-center">
      <style>{`
        .carousel-inner {
          --w: 280px;
          --h: 180px;
          --translateZ: calc(var(--w) + var(--h) - 40px);
          --rotateX: -6deg;
          --perspective: 2200px;
          position: absolute;
          width: var(--w);
          height: var(--h);
          top: 20%;
          left: calc(50% - (var(--w) / 2));
          z-index: 2;
          transform-style: preserve-3d;
          transform: perspective(var(--perspective));
          animation: rotating 40s linear infinite;
        }
        .carousel-inner:hover {
          animation-play-state: paused;
        }
        @keyframes rotating {
          from { transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0); }
          to { transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn); }
        }
        .carousel-card {
          position: absolute;
          border-radius: 16px;
          overflow: hidden;
          inset: 0;
          cursor: pointer;
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15);
          transform: rotateY(calc((360deg / ${qty}) * var(--index))) translateZ(var(--translateZ));
          transition: all 0.4s ease;
          backface-visibility: hidden;
        }
        .carousel-card:hover {
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.25);
          transform: rotateY(calc((360deg / ${qty}) * var(--index))) translateZ(calc(var(--translateZ) + 30px)) scale(1.05);
          z-index: 10;
        }
        .carousel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .carousel-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px;
          text-align: center;
          color: white;
        }
        .carousel-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, var(--gradient)), 
                      linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.2), transparent);
          background-size: 30px 30px;
          opacity: 1;
        }
        .carousel-overlay::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 25px 25px, currentColor 1px, transparent 0);
          background-size: 30px 30px;
          opacity: 0.05;
        }
        .carousel-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 14px;
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        }
        .carousel-title {
          font-size: 15px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 4px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        .carousel-category {
          font-size: 11px;
          opacity: 0.9;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }
        @media (max-width: 640px) {
          .carousel-inner {
            --w: 200px;
            --h: 140px;
            --translateZ: calc(var(--w) + var(--h) - 30px);
          }
          .carousel-title { font-size: 13px; }
          .carousel-category { fontSize: 10px; }
          .carousel-icon { width: 44px; height: 44px; font-size: 16px; }
        }
      `}</style>

      <div className="carousel-inner" style={{ '--quantity': qty } as React.CSSProperties}>
        {projects.map((p, i) => (
          <div
            key={p.id}
            className="carousel-card"
            style={{ '--index': i } as React.CSSProperties}
            onClick={() => onSelect(p)}
          >
            {p.image && !imageErrors.has(p.id) ? (
              <>
                <img
                  src={p.image}
                  alt={p.title}
                  className="carousel-img"
                  loading="lazy"
                  onError={() => handleImageError(p.id)}
                />
                <div
                  className="carousel-overlay"
                  style={{ '--gradient': `linear-gradient(to bottom right, ${p.gradient})` } as React.CSSProperties}
                >
                  <div className="carousel-icon">{initials(p.title)}</div>
                  <p className="carousel-title">{p.title.split('—')[0].trim()}</p>
                  <p className="carousel-category">{p.category}</p>
                </div>
              </>
            ) : (
              <div
                className="carousel-overlay"
                style={{ '--gradient': `linear-gradient(to bottom right, ${p.gradient})` } as React.CSSProperties}
              >
                <div className="carousel-icon">{initials(p.title)}</div>
                <p className="carousel-title">{p.title.split('—')[0].trim()}</p>
                <p className="carousel-category">{p.category}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Carousel pagination">
        {projects.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={false}
            aria-label={`Go to slide ${i + 1}`}
            className="h-2 w-2 rounded-full bg-white/40 transition-all duration-300 hover:bg-white hover:scale-125"
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioCarousel;