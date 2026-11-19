export default function Loading() {
  return (
    <div className="bg-white ">
      <section className="border-b border-zinc-100 py-16 sm:py-20 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-28 animate-pulse rounded-full bg-zinc-200 " />
          <div className="mt-5 h-10 w-full max-w-lg animate-pulse rounded-xl bg-zinc-200 " />
          <div className="mt-4 h-5 w-full max-w-2xl animate-pulse rounded-lg bg-zinc-100 " />
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white  ">
              <div className="aspect-[16/10] animate-pulse bg-zinc-100 " />
              <div className="space-y-3 p-6">
                <div className="h-3 w-20 animate-pulse rounded-full bg-zinc-200 " />
                <div className="h-6 w-3/4 animate-pulse rounded-lg bg-zinc-200 " />
                <div className="h-4 w-full animate-pulse rounded-lg bg-zinc-100 " />
                <div className="h-4 w-5/6 animate-pulse rounded-lg bg-zinc-100 " />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
