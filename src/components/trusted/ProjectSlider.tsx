const projects = [
  { name: 'ICFEI India', desc: 'Exam & Learning Portal', from: 'from-blue-600', to: 'to-indigo-700', shadow: 'shadow-blue-500/20' },
  { name: 'Future Mind Educare', desc: 'MBBS Admissions', from: 'from-emerald-600', to: 'to-teal-700', shadow: 'shadow-emerald-500/20' },
  { name: 'Vidya Vriddhi', desc: 'College Guidance Platform', from: 'from-violet-600', to: 'to-purple-700', shadow: 'shadow-violet-500/20' },
  { name: 'Alpha World Education', desc: 'Study Abroad Portal', from: 'from-sky-600', to: 'to-cyan-700', shadow: 'shadow-sky-500/20' },
  { name: 'Education Times Abroad', desc: 'MBBS & Study Abroad', from: 'from-rose-600', to: 'to-pink-700', shadow: 'shadow-rose-500/20' },
  { name: 'Admission Campus', desc: 'College Admission Hub', from: 'from-amber-600', to: 'to-orange-700', shadow: 'shadow-amber-500/20' },
];

const marqueeProjects = [...projects, ...projects];

const initials = (name: string) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => (
  <div
    className={`inline-flex items-center gap-4 rounded-xl bg-gradient-to-br ${project.from} ${project.to} px-5 py-4 shadow-lg ${project.shadow} transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-2xl`}
  >
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/15 text-sm font-bold tracking-wide text-white"
      aria-hidden="true"
    >
      {initials(project.name)}
    </span>
    <div className="text-left">
      <p className="text-sm font-semibold text-white">{project.name}</p>
      <p className="text-xs text-white/70">{project.desc}</p>
    </div>
  </div>
);

const ProjectSlider = () => {
  return (
    <div className="w-full overflow-hidden py-4">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-zinc-400">
        Featured Projects
      </p>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex gap-5 whitespace-nowrap">
          {marqueeProjects.map((project, index) => (
            <ProjectCard key={`first-${index}`} project={project} />
          ))}
        </div>
        <div
          className="animate-marquee2 absolute top-0 flex gap-5 whitespace-nowrap"
          aria-hidden="true"
        >
          {marqueeProjects.map((project, index) => (
            <ProjectCard key={`second-${index}`} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
