import type { HighlightItem } from './processData';

interface HighlightCardProps {
  item: HighlightItem;
  index: number;
}

const HighlightCard = ({ item }: HighlightCardProps) => {
  return (
    <div className="card-glow group relative overflow-hidden rounded-xl border border-zinc-100 bg-white p-5 shadow-xs hover:border-primary/20 sm:p-6">
      {/* Hover accent */}
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="animate-glow-pulse absolute inset-0 rounded-xl bg-gradient-to-br from-primary/[0.03] to-accent/[0.03]" />
      </div>

      <div className="relative flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/[0.06] text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:ring-0">
          {item.icon}
        </div>

        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-primary">{item.title}</h4>
          <p className="mt-1 text-sm leading-relaxed text-zinc-500">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
