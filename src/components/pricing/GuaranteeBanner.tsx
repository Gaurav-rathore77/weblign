import {
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineCurrencyDollar,
  HiOutlineClipboardDocument,
} from 'react-icons/hi2';
import { guarantees } from './pricingData';

const iconComponents: Record<string, React.ElementType> = {
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineCurrencyDollar,
  HiOutlineClipboardDocument,
};

function GuarIcon({ name, className }: { name: string; className?: string }) {
  const Comp = iconComponents[name];
  return Comp ? <Comp className={className} /> : null;
}

const GuaranteeBanner = () => {
  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {guarantees.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 rounded-xl border border-zinc-100 bg-white p-5 shadow-xs transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/[0.06] text-lg">
              <GuarIcon name={item.icon} className="h-5 w-5" />
            </span>
            <div>
              <h4 className="text-sm font-semibold text-zinc-900">{item.title}</h4>
              <p className="mt-0.5 text-sm leading-relaxed text-zinc-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuaranteeBanner;
