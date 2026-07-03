'use client';

import { motion } from 'framer-motion';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { serviceIcons } from './Icons';
import type { Service } from './servicesData';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const Icon = serviceIcons[service.iconKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
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
            <motion.span
              className="flex items-center justify-center"
              whileHover={{ rotate: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <Icon className="h-6 w-6" />
            </motion.span>
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
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/[0.08] text-[10px] text-primary">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Spacer */}
          <div className="relative mt-auto pt-5">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-300 group-hover:gap-2.5">
              Learn More
              <HiOutlineArrowLongRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
