import {
  HiOutlineBolt, HiOutlineShieldCheck, HiOutlineDevicePhoneMobile,
  HiOutlineRocketLaunch, HiOutlinePaintBrush, HiOutlineHandRaised,
} from 'react-icons/hi2';
import type { Feature } from './whyChooseData';

const iconComponents: Record<string, React.ElementType> = {
  HiOutlineBolt, HiOutlineShieldCheck, HiOutlineDevicePhoneMobile,
  HiOutlineRocketLaunch, HiOutlinePaintBrush, HiOutlineHandRaised,
};

function FeatIcon({ name, className }: { name: string; className?: string }) {
  const Comp = iconComponents[name];
  return Comp ? <Comp className={className} /> : null;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard = ({ feature }: FeatureCardProps) => (
  <div className="card-glow group relative rounded-xl border border-zinc-100 bg-white p-5 shadow-xs sm:p-6">
    {/* Hover glow */}
    <div
      className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      aria-hidden="true"
    >
      <div className="animate-glow-pulse absolute -right-6 -top-6 h-16 w-16 rounded-full bg-primary/[0.05] blur-2xl" />
      <div className="animate-glow-pulse absolute -bottom-6 -left-6 h-14 w-14 rounded-full bg-accent/[0.04] blur-2xl" style={{ animationDelay: '1s' }} />
    </div>

    <div className="relative flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/[0.06] text-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
        <FeatIcon name={feature.icon} className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-primary">{feature.title}</h4>
          <span className="rounded-full bg-primary/[0.06] px-2 py-0.5 text-[10px] font-medium text-primary">
            {feature.badge}
          </span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-zinc-500">
          {feature.description}
        </p>
      </div>
    </div>
  </div>
);

export default FeatureCard;
