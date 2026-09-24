import { benefitIcons } from './Icons';
import type { Benefit } from './servicesData';

interface BenefitCardProps {
  benefit: Benefit;
  index: number;
}

const BenefitCard = ({ benefit }: BenefitCardProps) => {
  const Icon = benefitIcons[benefit.iconKey];

  return (
    <div className="flex items-start gap-4 rounded-xl border border-zinc-100 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-900/5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/[0.06] text-primary transition-colors duration-300">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <h4 className="text-sm font-semibold text-zinc-900">{benefit.title}</h4>
        <p className="mt-0.5 text-sm leading-relaxed text-zinc-500">
          {benefit.description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
