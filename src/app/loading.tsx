const shimmer = `
  <defs>
    <linearGradient id="s" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="currentColor" stop-opacity="0.05" />
      <stop offset="50%" stop-color="currentColor" stop-opacity="0.1" />
      <stop offset="100%" stop-color="currentColor" stop-opacity="0.05" />
      <animateTransform attributeName="gradientTransform" type="translate" from="-1" to="1" dur="1.5s" repeatCount="indefinite" />
    </linearGradient>
  </defs>`;

const ShimmerBlock = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    className={className}
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Loading..."
  >
    <rect width="100%" height="100%" fill="url(#s)" rx="8" />
  </svg>
);

const HomeSkeleton = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      {/* Hero skeleton */}
      <div className="mb-20 flex flex-col items-center gap-6 text-center">
        <ShimmerBlock className="h-8 w-32" />
        <ShimmerBlock className="h-12 w-[600px] max-w-full" />
        <ShimmerBlock className="mt-2 h-6 w-[450px] max-w-full" />
        <div className="mt-4 flex gap-4">
          <ShimmerBlock className="h-12 w-40" />
          <ShimmerBlock className="h-12 w-40" />
        </div>
      </div>

      {/* Section skeletons */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="mb-20">
          <div className="mb-10 flex flex-col items-center gap-4 text-center">
            <ShimmerBlock className="h-6 w-24" />
            <ShimmerBlock className="h-10 w-[400px] max-w-full" />
            <ShimmerBlock className="h-5 w-[300px] max-w-full" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, j) => (
              <ShimmerBlock key={j} className="h-64 w-full" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Loading() {
  return (
    <div className="min-h-screen" aria-live="polite" aria-busy="true">
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs
          dangerouslySetInnerHTML={{ __html: shimmer }}
        />
      </svg>
      <HomeSkeleton />
    </div>
  );
}
