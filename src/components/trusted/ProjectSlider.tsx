'use client';

const projects = [
  { name: 'ICFEI India', desc: 'Exam & Learning Portal', logo: 'https://www.google.com/s2/favicons?domain=india.icfei.com&sz=64' },
  { name: 'Future Mind Educare', desc: 'MBBS Admissions', logo: 'https://www.google.com/s2/favicons?domain=futuremindedu.in&sz=64' },
  { name: 'Vidya Vriddhi', desc: 'College Guidance Platform', logo: 'https://www.google.com/s2/favicons?domain=vidyavriddhi.com&sz=64' },
  { name: 'Alpha World Education', desc: 'Study Abroad Portal', logo: 'https://www.google.com/s2/favicons?domain=alphaworldeducation.com&sz=64' },
  { name: 'Education Times Abroad', desc: 'MBBS & Study Abroad', logo: 'https://www.google.com/s2/favicons?domain=educationtimesabroad.com&sz=64' },
  { name: 'Admission Campus', desc: 'College Admission Hub', logo: 'https://www.google.com/s2/favicons?domain=admissioncampus.in&sz=64' },
  { name: 'ICFEI India', desc: 'Exam & Learning Portal', logo: 'https://www.google.com/s2/favicons?domain=india.icfei.com&sz=64' },
  { name: 'Future Mind Educare', desc: 'MBBS Admissions', logo: 'https://www.google.com/s2/favicons?domain=futuremindedu.in&sz=64' },
  { name: 'Vidya Vriddhi', desc: 'College Guidance Platform', logo: 'https://www.google.com/s2/favicons?domain=vidyavriddhi.com&sz=64' },
  { name: 'Alpha World Education', desc: 'Study Abroad Portal', logo: 'https://www.google.com/s2/favicons?domain=alphaworldeducation.com&sz=64' },
  { name: 'Education Times Abroad', desc: 'MBBS & Study Abroad', logo: 'https://www.google.com/s2/favicons?domain=educationtimesabroad.com&sz=64' },
  { name: 'Admission Campus', desc: 'College Admission Hub', logo: 'https://www.google.com/s2/favicons?domain=admissioncampus.in&sz=64' },
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
              <img
                src={p.logo}
                alt={p.name}
                className="h-9 w-9 shrink-0 rounded-lg"
              />
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
              <img
                src={p.logo}
                alt={p.name}
                className="h-9 w-9 shrink-0 rounded-lg"
              />
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
