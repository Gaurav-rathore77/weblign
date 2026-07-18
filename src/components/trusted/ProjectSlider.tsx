'use client';
import { useState } from 'react';

const projects = [
  { name: 'ICFEI India', desc: 'Exam & Learning Portal', url: 'https://india.icfei.com', from: 'from-blue-600', to: 'to-indigo-700', shadow: 'shadow-blue-500/20' },
  { name: 'Future Mind Educare', desc: 'MBBS Admissions', url: 'https://futuremindedu.in', from: 'from-emerald-600', to: 'to-teal-700', shadow: 'shadow-emerald-500/20' },
  { name: 'Vidya Vriddhi', desc: 'College Guidance Platform', url: 'https://vidyavriddhi.com', from: 'from-violet-600', to: 'to-purple-700', shadow: 'shadow-violet-500/20' },
  { name: 'Alpha World Education', desc: 'Study Abroad Portal', url: 'https://alphaworldeducation.com', from: 'from-sky-600', to: 'to-cyan-700', shadow: 'shadow-sky-500/20' },
  { name: 'Education Times Abroad', desc: 'MBBS & Study Abroad', url: 'https://educationtimesabroad.com', from: 'from-rose-600', to: 'to-pink-700', shadow: 'shadow-rose-500/20' },
  { name: 'Admission Campus', desc: 'College Admission Hub', url: 'https://admissioncampus.in', from: 'from-amber-600', to: 'to-orange-700', shadow: 'shadow-amber-500/20' },
  { name: 'ICFEI India', desc: 'Exam & Learning Portal', url: 'https://india.icfei.com', from: 'from-blue-600', to: 'to-indigo-700', shadow: 'shadow-blue-500/20' },
  { name: 'Future Mind Educare', desc: 'MBBS Admissions', url: 'https://futuremindedu.in', from: 'from-emerald-600', to: 'to-teal-700', shadow: 'shadow-emerald-500/20' },
  { name: 'Vidya Vriddhi', desc: 'College Guidance Platform', url: 'https://vidyavriddhi.com', from: 'from-violet-600', to: 'to-purple-700', shadow: 'shadow-violet-500/20' },
  { name: 'Alpha World Education', desc: 'Study Abroad Portal', url: 'https://alphaworldeducation.com', from: 'from-sky-600', to: 'to-cyan-700', shadow: 'shadow-sky-500/20' },
  { name: 'Education Times Abroad', desc: 'MBBS & Study Abroad', url: 'https://educationtimesabroad.com', from: 'from-rose-600', to: 'to-pink-700', shadow: 'shadow-rose-500/20' },
  { name: 'Admission Campus', desc: 'College Admission Hub', url: 'https://admissioncampus.in', from: 'from-amber-600', to: 'to-orange-700', shadow: 'shadow-amber-500/20' },
];

const initials = (name: string) =>
  name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

const ProjectCard = ({ p }: { p: typeof projects[0] }) => {
  const [imgErr, setImgErr] = useState(false);

  return (
    <div className={`inline-flex items-center gap-4 rounded-xl bg-gradient-to-br ${p.from} ${p.to} px-5 py-4 shadow-lg ${p.shadow} shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
      {imgErr ? (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20 text-sm font-bold tracking-wide text-white backdrop-blur-sm">
          {initials(p.name)}
        </div>
      ) : (
        <img
          src={`${p.url}/favicon.ico`}
          alt={p.name}
          className="h-10 w-10 shrink-0 rounded-lg bg-white/20 object-contain p-1 backdrop-blur-sm"
          onError={() => setImgErr(true)}
        />
      )}
      <div className="text-left">
        <p className="text-sm font-semibold text-white">{p.name}</p>
        <p className="text-xs text-white/70">{p.desc}</p>
      </div>
    </div>
  );
};

const ProjectSlider = () => {
  return (
    <div className="w-full overflow-hidden py-4">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-zinc-400">
        Featured Projects
      </p>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex gap-5 whitespace-nowrap">
          {projects.map((p, i) => (
            <ProjectCard key={`first-${i}`} p={p} />
          ))}
        </div>
        <div className="animate-marquee2 absolute top-0 flex gap-5 whitespace-nowrap">
          {projects.map((p, i) => (
            <ProjectCard key={`second-${i}`} p={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
