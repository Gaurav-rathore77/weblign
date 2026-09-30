interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="card-glow group flex gap-4 rounded-xl border border-zinc-100 bg-white p-4 shadow-xs dark:border-zinc-700 dark:bg-zinc-100">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/[0.06] text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
      {icon}
    </div>
    <div className="min-w-0">
      <h4 className="text-sm font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-primary">{title}</h4>
      <p className="mt-0.5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{description}</p>
    </div>
  </div>
);

export default FeatureCard;
