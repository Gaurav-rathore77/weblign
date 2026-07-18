'use client';

const projects = [
  'ICFEI India — Exam & Learning Portal',
  'Future Mind Educare — MBBS Admissions',
  'Vidya Vriddhi — College Guidance Platform',
  'Alpha World Education — Study Abroad Portal',
  'Education Times Abroad — MBBS & Study Abroad',
  'Admission Campus — College Admission Hub',
  'Future Mind Educare — MBBS Admission Platform',
  'ICFEI India — Exam & Learning Portal',
  'Future Mind Educare — MBBS Admissions',
  'Vidya Vriddhi — College Guidance Platform',
  'Alpha World Education — Study Abroad Portal',
  'Education Times Abroad — MBBS & Study Abroad',
  'Admission Campus — College Admission Hub',
  'Future Mind Educare — MBBS Admission Platform',
];

const ProjectSlider = () => {
  return (
    <div className="w-full overflow-hidden py-4">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-zinc-400">
        Our Projects
      </p>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          {projects.map((name, i) => (
            <span
              key={`first-${i}`}
              className="select-none text-base font-medium text-zinc-400 transition-colors hover:text-zinc-600"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="animate-marquee2 absolute top-0 flex gap-12 whitespace-nowrap">
          {projects.map((name, i) => (
            <span
              key={`second-${i}`}
              className="select-none text-base font-medium text-zinc-400 transition-colors hover:text-zinc-600"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
