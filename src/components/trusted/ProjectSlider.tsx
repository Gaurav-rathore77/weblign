'use client';

const projects = [
  { name: 'ICFEI India', desc: 'Exam & Learning Portal', color: 'from-blue-500 to-indigo-600' },
  { name: 'Future Mind Educare', desc: 'MBBS Admissions', color: 'from-emerald-500 to-teal-600' },
  { name: 'Vidya Vriddhi', desc: 'College Guidance Platform', color: 'from-violet-500 to-purple-600' },
  { name: 'Alpha World Education', desc: 'Study Abroad Portal', color: 'from-sky-500 to-cyan-600' },
  { name: 'Education Times Abroad', desc: 'MBBS & Study Abroad', color: 'from-rose-500 to-pink-600' },
  { name: 'Admission Campus', desc: 'College Admission Hub', color: 'from-amber-500 to-orange-600' },
  { name: 'ICFEI India', desc: 'Exam & Learning Portal', color: 'from-blue-500 to-indigo-600' },
  { name: 'Future Mind Educare', desc: 'MBBS Admissions', color: 'from-emerald-500 to-teal-600' },
  { name: 'Vidya Vriddhi', desc: 'College Guidance Platform', color: 'from-violet-500 to-purple-600' },
  { name: 'Alpha World Education', desc: 'Study Abroad Portal', color: 'from-sky-500 to-cyan-600' },
  { name: 'Education Times Abroad', desc: 'MBBS & Study Abroad', color: 'from-rose-500 to-pink-600' },
  { name: 'Admission Campus', desc: 'College Admission Hub', color: 'from-amber-500 to-orange-600' },
];

const ProjectSlider = () => {
  return (
    <div className="w-full overflow-hidden py-4">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-zinc-400">
        Featured Projects
      </p>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex gap-5 whitespace-nowrap">
          {projects.map((p, i) => (
            <div
              key={`first-${i}`}
              className="inline-flex items-center gap-3.5 rounded-xl border border-zinc-100 bg-white px-5 py-3.5 shadow-sm shadow-zinc-900/5"
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${p.color} text-sm font-bold text-white shadow-xs`}
              >
                {p.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-zinc-800">{p.name}</p>
                <p className="text-xs text-zinc-400">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="animate-marquee2 absolute top-0 flex gap-5 whitespace-nowrap">
          {projects.map((p, i) => (
            <div
              key={`second-${i}`}
              className="inline-flex items-center gap-3.5 rounded-xl border border-zinc-100 bg-white px-5 py-3.5 shadow-sm shadow-zinc-900/5"
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${p.color} text-sm font-bold text-white shadow-xs`}
              >
                {p.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-zinc-800">{p.name}</p>
                <p className="text-xs text-zinc-400">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
