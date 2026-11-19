export default function Loading() {
  return (
    <div className="bg-white ">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="h-4 w-28 animate-pulse rounded-full bg-zinc-200 " />
        <div className="mt-6 h-10 w-full animate-pulse rounded-xl bg-zinc-200 " />
        <div className="mt-3 h-10 w-4/5 animate-pulse rounded-xl bg-zinc-200 " />
        <div className="mt-6 flex items-center gap-3">
          <div className="h-4 w-24 animate-pulse rounded-full bg-zinc-100 " />
          <div className="h-4 w-20 animate-pulse rounded-full bg-zinc-100 " />
        </div>
        <div className="mt-10 aspect-[16/9] w-full animate-pulse rounded-2xl bg-zinc-100 " />
        <div className="mt-10 space-y-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={`h-4 animate-pulse rounded-lg bg-zinc-100  ${i % 3 === 2 ? 'w-4/5' : 'w-full'}`} />
          ))}
        </div>
      </article>
    </div>
  );
}
