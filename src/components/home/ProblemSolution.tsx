import {
  HiOutlineClock,
  HiOutlineCircleStack,
  HiOutlineUserGroup,
  HiOutlineCursorArrowRays,
  HiOutlineCog6Tooth,
  HiOutlineArrowLongRight,
  HiOutlineCheckCircle,
} from 'react-icons/hi2';
import Reveal from '@/components/common/Reveal';

const items = [
  {
    problem: 'Manual work consumes time.',
    solution:
      'We automate repetitive workflows and connect tools so your team can focus on higher-value work.',
    icon: HiOutlineClock,
  },
  {
    problem: 'Business data is scattered.',
    solution:
      'We build centralized dashboards and systems that bring key information into one reliable view.',
    icon: HiOutlineCircleStack,
  },
  {
    problem: 'Managing customers is difficult.',
    solution:
      'We create CRM and customer-facing systems that make tracking leads, conversations, and follow-ups easier.',
    icon: HiOutlineUserGroup,
  },
  {
    problem: "Existing websites don't generate inquiries.",
    solution:
      'We design clear, conversion-focused experiences with strong messaging, CTAs, and performance in mind.',
    icon: HiOutlineCursorArrowRays,
  },
  {
    problem: 'Business processes lack automation.',
    solution:
      'We map your processes and implement practical automation to reduce friction and improve consistency.',
    icon: HiOutlineCog6Tooth,
  },
];

const ProblemSolution = () => {
  return (
    <section id="solutions" className="scroll-mt-24 bg-white py-20 sm:py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Problems to solutions
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl ">
            Your Business Deserves More Than Just a Website.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600 ">
            We help you identify what is slowing your business down and turn it
            into a digital system that works for you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:gap-6">
          {items.map(({ problem, solution, icon: Icon }, i) => (
            <Reveal key={problem} delay={i * 0.05}>
              <div className="group grid overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/60 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:grid-cols-[1fr_auto_1fr]  ">
                <div className="flex items-start gap-4 p-6 sm:p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700  ">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 ">
                      Business challenge
                    </p>
                    <p className="mt-2 text-lg font-medium text-zinc-900 ">
                      {problem}
                    </p>
                  </div>
                </div>

                <div className="hidden items-center justify-center px-2 text-zinc-300 md:flex " aria-hidden="true">
                  <HiOutlineArrowLongRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                <div className="flex items-start gap-4 border-t border-zinc-200 bg-white p-6 sm:p-7 md:border-l md:border-t-0  ">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700  ">
                    <HiOutlineCheckCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 ">
                      How Weblign helps
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-zinc-700 ">
                      {solution}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
