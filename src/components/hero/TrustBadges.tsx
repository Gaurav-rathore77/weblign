const logos = [
  {
    name: 'Google',
    svg: (
      <svg viewBox="0 0 80 24" className="h-6 w-auto" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
        <path d="M8 9a4 4 0 118 0M6 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
        <text x="28" y="17" fontFamily="system-ui" fontSize="15" fontWeight="550" fill="currentColor" opacity="0.35">Google</text>
      </svg>
    ),
  },
  {
    name: 'Microsoft',
    svg: (
      <svg viewBox="0 0 104 24" className="h-6 w-auto" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
        <rect x="14" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
        <rect x="2" y="14" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
        <rect x="14" y="14" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
        <text x="32" y="17" fontFamily="system-ui" fontSize="15" fontWeight="550" fill="currentColor" opacity="0.35">Microsoft</text>
      </svg>
    ),
  },
  {
    name: 'Amazon',
    svg: (
      <svg viewBox="0 0 84 24" className="h-6 w-auto" fill="none" aria-hidden="true">
        <path d="M2 18c.7-1.5 2-3 4-3s3.5 1.5 3.5 3.5" stroke="currentColor" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
        <path d="M2 18V6a4 4 0 014-4h0a4 4 0 014 4v2" stroke="currentColor" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
        <text x="18" y="17" fontFamily="system-ui" fontSize="15" fontWeight="550" fill="currentColor" opacity="0.35">Amazon</text>
      </svg>
    ),
  },
  {
    name: 'Spotify',
    svg: (
      <svg viewBox="0 0 84 24" className="h-6 w-auto" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
        <path d="M7 13s4-1.5 10 0M8 10.5s4-1.5 8 0M9 8s4-1.5 6 0" stroke="currentColor" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
        <text x="28" y="17" fontFamily="system-ui" fontSize="15" fontWeight="550" fill="currentColor" opacity="0.35">Spotify</text>
      </svg>
    ),
  },
];

const TrustBadges = () => {
  return (
    <div>
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">
        Trusted by industry leaders
      </p>
      <div className="flex flex-wrap items-center gap-8 sm:gap-10">
        {logos.map(({ name, svg }) => (
          <div
            key={name}
            className="text-zinc-300 transition-colors duration-300 hover:text-zinc-400"
          >
            {svg}
            <span className="sr-only">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
