import Link from 'next/link';
import { HiOutlineArrowLongRight, HiCheck } from 'react-icons/hi2';
import { serviceIcons } from './Icons';
import type { Service } from './servicesData';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = serviceIcons[service.iconKey];

  return (
    <div className="group relative transition-transform duration-300 hover:-translate-y-1.5">
      {/* Gradient border wrapper */}
      <div className="relative rounded-2xl bg-gradient-to-b from-primary/20 to-transparent p-px shadow-lg shadow-zinc-900/5 transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-primary/5">
        {/* Card body */}
        <div className="relative flex h-full flex-col rounded-[calc(1.5rem-1px)] bg-white p-6 transition-all duration-500 group-hover:bg-white/70 group-hover:backdrop-blur-xl sm:p-7">
          {/* Background glow on hover */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[calc(1.5rem-1px)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/[0.04] blur-2xl" />
            <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-accent/[0.04] blur-2xl" />
          </div>

          {/* Icon */}
          <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/[0.06] text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
            <span className="flex items-center justify-center transition-transform duration-300 hover:-rotate-[8deg]">
              <Icon className="h-6 w-6" />
            </span>
          </div>

          {/* Title */}
          <h3 className="relative text-lg font-semibold text-zinc-900">
            {service.title}
          </h3>

          {/* Description */}
          <p className="relative mt-2 text-sm leading-relaxed text-zinc-500">
            {service.description}
          </p>

          {/* Features */}
          <ul className="relative mt-4 space-y-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-zinc-600">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/[0.08]">
                  <HiCheck className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Spacer */}
          <div className="relative mt-auto pt-5">
            <Link
              href={`/services/${service.id}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-300 hover:gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Learn More
              <HiOutlineArrowLongRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
