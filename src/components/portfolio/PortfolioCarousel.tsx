'use client';

import type { Project } from './portfolioData';

const colors = [
  '142, 249, 252',
  '142, 252, 204',
  '142, 252, 157',
  '215, 252, 142',
  '252, 252, 142',
  '252, 208, 142',
  '252, 142, 142',
  '252, 142, 239',
  '204, 142, 252',
  '142, 202, 252',
];

const initials = (name: string) =>
  name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

interface Props {
  projects: Project[];
  onSelect: (p: Project) => void;
}

const PortfolioCarousel = ({ projects, onSelect }: Props) => {
  const qty = projects.length;

  return (
    <div className="wrapper relative flex h-[650px] w-full items-center justify-center text-center">
      <style>{`
        .carousel-inner {
          --w: 200px;
          --h: 270px;
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
          animation: rotating 30s linear infinite;
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
          border-radius: 20px;
          overflow: hidden;
          inset: 0;
          cursor: pointer;
          border: 2px solid rgba(var(--color-card), 0.6);
          box-shadow: 0 0 30px rgba(var(--color-card), 0.15);
          transform: rotateY(calc((360deg / ${qty}) * var(--index))) translateZ(var(--translateZ));
          transition: all 0.4s ease;
          backface-visibility: hidden;
        }
        .carousel-card:hover {
          border-color: rgba(var(--color-card), 1);
          box-shadow: 0 0 50px rgba(var(--color-card), 0.35);
          transform: rotateY(calc((360deg / ${qty}) * var(--index))) translateZ(calc(var(--translateZ) + 20px));
        }
        .carousel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: radial-gradient(circle at center, rgba(var(--color-card), 0.25) 0%, rgba(var(--color-card), 0.65) 80%, rgba(var(--color-card), 0.9) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px;
          text-align: center;
        }
        @media (max-width: 640px) {
          .carousel-inner {
            --w: 130px;
            --h: 180px;
            --translateZ: calc(var(--w) + var(--h) - 30px);
          }
        }
      `}</style>

      <div className="carousel-inner" style={{ '--quantity': qty } as React.CSSProperties}>
        {projects.map((p, i) => (
          <div
            key={p.id}
            className="carousel-card"
            style={{ '--index': i, '--color-card': colors[i % colors.length] } as React.CSSProperties}
            onClick={() => onSelect(p)}
          >
            <div className="carousel-img">
              {p.image ? (
                <img src={p.image} alt="" className="mb-3 h-12 w-12 rounded-xl bg-white/10 p-1 backdrop-blur-sm" />
              ) : (
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-base font-bold text-white backdrop-blur-sm">
                  {initials(p.title)}
                </div>
              )}
              <p className="text-sm font-bold leading-tight text-white drop-shadow-sm">
                {p.title.split('—')[0].trim()}
              </p>
              <p className="mt-1 text-[11px] text-white/75">{p.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCarousel;
