export default function Loading() {
  return (
    <div className="bg-white ">
      <section className="border-b border-zinc-100 py-16 sm:py-20 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-24 animate-pulse rounded-full bg-zinc-200 " />
          <div className="mt-5 h-10 w-full max-w-lg animate-pulse rounded-xl bg-zinc-200 " />
          <div className="mt-4 h-5 w-full max-w-2xl animate-pulse rounded-lg bg-zinc-100 " />
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 lg:col-span-3  ">
            <div className="grid gap-5 sm:grid-cols-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={i >= 4 ? 'sm:col-span-2' : ''}>
                  <div className="h-4 w-28 animate-pulse rounded-full bg-zinc-200 " />
                  <div className={`mt-2 animate-pulse rounded-xl bg-zinc-100  ${i === 5 ? 'h-28' : 'h-11'}`} />
                </div>
              ))}
            </div>
            <div className="mt-6 h-11 w-48 animate-pulse rounded-full bg-zinc-200 " />
          </div>
          <div className="space-y-4 lg:col-span-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-20 animate-pulse rounded-xl border border-zinc-200 bg-white  " />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
