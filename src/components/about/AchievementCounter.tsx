interface Achievement {
  icon: React.ReactNode;
  value: string;
  suffix?: string;
  label: string;
}

const achievements: Achievement[] = [
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M10 2a6 6 0 00-6 6v3l-1.5 2.5a.5.5 0 00.43.75h14.14a.5.5 0 00.43-.75L16 11V8a6 6 0 00-6-6z" />
        <path d="M8 15a2 2 0 004 0" />
      </svg>
    ),
    value: '50',
    suffix: '+',
    label: 'Projects Delivered',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M10 1a6 6 0 00-5.3 8.7l1.2 2.5.4.8.3.6a1 1 0 00.9.6h5a1 1 0 00.9-.6l.3-.6.4-.8 1.2-2.5A6 6 0 0010 1z" />
        <path d="M7 14a3 3 0 006 0" />
      </svg>
    ),
    value: '44',
    suffix: '+',
    label: 'Happy Clients',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M10 1a9 9 0 100 18 9 9 0 000-18zM2.5 7h15M2.5 13h15M7 2v16M13 2v16" />
        <circle cx="10" cy="10" r="9" />
      </svg>
    ),
    value: '5',
    suffix: '+',
    label: 'Years Experience',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M12 2l3.1 6.3L22 9.5l-5 4.9 1.2 7L12 17.5 5.8 21.4 7 14.4 2 9.5l6.9-1.2L12 2z" />
      </svg>
    ),
    value: '100',
    suffix: '%',
    label: 'Client Satisfaction',
  },
];

const AchievementCounter = () => {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
      {achievements.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-xs dark:border-zinc-700 dark:bg-zinc-100"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.06] text-primary">
            {item.icon}
          </div>
          <div className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">
            <span>
              {item.value}
              {item.suffix}
            </span>
          </div>
          <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AchievementCounter;
