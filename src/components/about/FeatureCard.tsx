interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="group flex gap-4 rounded-xl border border-zinc-100 bg-white p-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-900/5 dark:border-zinc-700 dark:bg-zinc-100">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/[0.06] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
      {icon}
    </div>
    <div className="min-w-0">
      <h4 className="text-sm font-semibold text-zinc-900">{title}</h4>
      <p className="mt-0.5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{description}</p>
    </div>
  </div>
);

export default FeatureCard;
