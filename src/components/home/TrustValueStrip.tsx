import {
  HiOutlineCodeBracket,
  HiOutlineBolt,
  HiOutlineDevicePhoneMobile,
  HiOutlineCpuChip,
  HiOutlineLifebuoy,
} from 'react-icons/hi2';
import Reveal from '@/components/common/Reveal';

const capabilities = [
  { label: 'Custom Development', icon: HiOutlineCodeBracket },
  { label: 'Business Automation', icon: HiOutlineBolt },
  { label: 'Mobile App Development', icon: HiOutlineDevicePhoneMobile },
  { label: 'Modern Technologies', icon: HiOutlineCpuChip },
  { label: 'Ongoing Support', icon: HiOutlineLifebuoy },
];

const TrustValueStrip = () => {
  return (
    <section className="border-y border-zinc-200/70 bg-zinc-50/70 py-8 sm:py-10  ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500 ">
              What we bring to every project
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
              {capabilities.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md  "
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-zinc-800 ">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TrustValueStrip;
