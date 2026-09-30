interface TrustCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  index: number;
}

const TrustCard = ({ icon, value, label, description }: TrustCardProps) => (
  <div className="card-glow group flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-100">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.06] text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white dark:bg-primary/[0.15]">
      {icon}
    </div>
    <div>
      <div className="text-2xl font-bold text-zinc-900 transition-colors duration-300 group-hover:text-primary">{value}</div>
      <div className="mt-0.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">{label}</div>
    </div>
    <p className="text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-500 dark:text-zinc-500 dark:group-hover:text-zinc-400">{description}</p>
  </div>
);

export default TrustCard;
