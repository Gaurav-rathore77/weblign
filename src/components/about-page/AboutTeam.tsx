import { teamMembers, stats } from './aboutData';
import { HiOutlineUserGroup } from 'react-icons/hi2';

const AboutTeam = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_35%,rgba(37,99,235,0.04),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(56,189,248,0.04),transparent_30%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-20 sm:gap-24">
          {/* ── Stats ── */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-100"
              >
                <span className="block text-3xl font-bold tracking-tight text-primary">
                  {s.value}
                </span>
                <span className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* ── Team ── */}
          <div>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
                <HiOutlineUserGroup className="h-5 w-5" aria-hidden="true" />
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Meet the People Behind the Products
              </h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
                A passionate team of designers, engineers, and strategists
                dedicated to building exceptional digital experiences.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-100 dark:hover:border-primary/30"
                >
                  <div
                    role="img"
                    aria-label={member.name}
                    className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} shadow-sm`}
                  >
                    <span aria-hidden="true" className="text-xl font-bold text-white">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-zinc-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
