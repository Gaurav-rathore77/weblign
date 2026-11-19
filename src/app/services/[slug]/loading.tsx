export default function Loading() {
  return (
    <div className="bg-white ">
      <section className="border-b border-zinc-100 py-14 sm:py-16 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-32 animate-pulse rounded-full bg-zinc-200 " />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="h-14 w-14 animate-pulse rounded-2xl bg-zinc-100 " />
              <div className="mt-6 h-4 w-36 animate-pulse rounded-full bg-zinc-200 " />
              <div className="mt-4 h-10 w-full animate-pulse rounded-xl bg-zinc-200 " />
              <div className="mt-3 h-10 w-4/5 animate-pulse rounded-xl bg-zinc-200 " />
              <div className="mt-5 space-y-2">
                <div className="h-4 w-full animate-pulse rounded-lg bg-zinc-100 " />
                <div className="h-4 w-full animate-pulse rounded-lg bg-zinc-100 " />
                <div className="h-4 w-3/4 animate-pulse rounded-lg bg-zinc-100 " />
              </div>
              <div className="mt-8 flex gap-3">
                <div className="h-11 w-44 animate-pulse rounded-full bg-zinc-200 " />
                <div className="h-11 w-40 animate-pulse rounded-full bg-zinc-100 " />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="aspect-[16/10] animate-pulse rounded-2xl bg-zinc-100 sm:col-span-2 " />
              <div className="aspect-[4/3] animate-pulse rounded-2xl bg-zinc-100 " />
              <div className="aspect-[4/3] animate-pulse rounded-2xl bg-zinc-100 " />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
