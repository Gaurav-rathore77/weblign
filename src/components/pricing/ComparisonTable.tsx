import clsx from 'clsx';
import { comparisonFeatures } from './pricingData';
import { HiCheck, HiXMark } from 'react-icons/hi2';

const Tick = () => (
  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50">
    <HiCheck className="h-4 w-4 text-emerald-500" aria-hidden="true" />
  </span>
);

const Cross = () => (
  <span className="flex h-5 w-5 items-center justify-center rounded-full">
    <HiXMark className="h-4 w-4 text-red-500" aria-hidden="true" />
  </span>
);

const ComparisonTable = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-lg shadow-zinc-900/5">
      {/* Header */}
      <div className="border-b border-zinc-100 bg-zinc-50/50 p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-zinc-900">Feature Comparison</h3>
        <p className="mt-1 text-sm text-zinc-400">See exactly what&rsquo;s included in each plan.</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-100">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-zinc-400 sm:px-6">
                Feature
              </th>
              <th className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Landing
              </th>
              <th className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-widest text-primary">
                Business
              </th>
              <th className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Premium
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map((feature, i) => (
              <tr
                key={feature.name}
                className={clsx(
                  'transition-colors duration-150 hover:bg-zinc-50',
                  i < comparisonFeatures.length - 1 && 'border-b border-zinc-50',
                )}
              >
                <td className="px-4 py-3 font-medium text-zinc-700 sm:px-6">
                  {feature.name}
                </td>
                <td className="px-3 py-3 text-center">
                  {feature.starter ? <Tick /> : <Cross />}
                </td>
                <td className="px-3 py-3 text-center">
                  {feature.professional ? <Tick /> : <Cross />}
                </td>
                <td className="px-3 py-3 text-center">
                  {feature.enterprise ? <Tick /> : <Cross />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
