interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: '50', suffix: '+', label: 'Projects Completed' },
  { value: '44', suffix: '+', label: 'Happy Clients' },
  { value: '5', suffix: '+', label: 'Years Experience' },
  { value: '24/7', label: 'Support' },
];

const HeroStats = () => {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            {stat.value}
            {stat.suffix}
          </div>
          <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
