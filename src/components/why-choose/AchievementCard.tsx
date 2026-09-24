import { achievements } from './whyChooseData';

const AchievementCard = () => {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
      {achievements.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-xs"
        >
          <div className="text-3xl font-bold tracking-tight text-zinc-900">
            <span>
              {item.value}
              {item.suffix}
            </span>
          </div>
          <div className="mt-1 text-sm text-zinc-500">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AchievementCard;
