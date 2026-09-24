import { benefitsList } from './whyChooseData';
import { HiCheck } from 'react-icons/hi2';

const BenefitsChecklist = () => (
  <div className="relative overflow-hidden rounded-2xl border border-zinc-100/80 bg-white/60 p-6 shadow-lg shadow-zinc-900/5 backdrop-blur-xl sm:p-8">
    <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-primary/[0.03] blur-3xl" aria-hidden="true" />

    <h3 className="text-lg font-semibold text-zinc-900">
      What You Get Working With Us
    </h3>
    <p className="mt-1 text-sm text-zinc-400">
      Every partnership includes these guarantees.
    </p>

    <ul className="mt-5 space-y-3">
      {benefitsList.map((benefit) => (
        <li
          key={benefit}
          className="flex items-center gap-3 text-sm text-zinc-700"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50">
            <HiCheck className="h-5 w-5 text-emerald-500" aria-hidden="true" />
          </span>
          {benefit}
        </li>
      ))}
    </ul>
  </div>
);

export default BenefitsChecklist;
