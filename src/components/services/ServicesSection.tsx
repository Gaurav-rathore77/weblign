import { services, benefits } from './servicesData';
import ServiceCard from './ServiceCard';
import BenefitCard from './BenefitCard';
import ServicesCTA from './ServicesCTA';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-20 sm:py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(37,99,235,0.04),transparent_30%),radial-gradient(circle_at_15%_70%,rgba(56,189,248,0.04),transparent_28%)]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #2563EB 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-20 sm:gap-24">
          {/* ── Section Header ── */}
          <div className="mx-auto max-w-2xl text-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
                <HiOutlineRocketLaunch className="h-4 w-4" aria-hidden="true" />
                Our Services
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Digital Solutions Designed To{' '}
              <span className="text-zinc-500">Grow Your Business</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg">
              We provide end-to-end digital solutions for startups, growing
              businesses, and enterprise organizations — from strategy and
              design to development and ongoing support.
            </p>
          </div>

          {/* ── Service Cards Grid ── */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          {/* ── Why Choose These Services ── */}
          <div>
            <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Why Choose These Services
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, i) => (
                <BenefitCard key={benefit.title} benefit={benefit} index={i} />
              ))}
            </div>
          </div>

          {/* ── CTA Banner ── */}
          <ServicesCTA />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
