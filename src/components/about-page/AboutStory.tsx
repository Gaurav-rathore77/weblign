import {
  HiOutlineBuildingOffice2,
  HiOutlineWrenchScrewdriver,
  HiOutlineUserGroup,
  HiOutlineClipboardDocumentCheck,
  HiOutlineCheckBadge,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCodeBracket,
  HiOutlineShieldCheck,
} from 'react-icons/hi2';
import ProcessTimeline from '@/components/about/ProcessTimeline';

const workSteps = [
  { title: 'Discovery', description: 'Understand your goals, users, challenges, and requirements before defining scope.' },
  { title: 'Proposal', description: 'Share a clear plan covering scope, deliverables, timeline assumptions, and pricing considerations.' },
  { title: 'Design', description: 'Create usable, on-brand interfaces and user flows aligned with business objectives.' },
  { title: 'Development', description: 'Build with maintainable technologies and practical integrations suited to the project.' },
  { title: 'Testing', description: 'Review functionality, responsiveness, and key user journeys before launch.' },
  { title: 'Delivery', description: 'Launch with handover details, access, and guidance based on the agreed scope.' },
  { title: 'Support', description: 'Provide post-launch assistance and discuss ongoing maintenance or improvements as needed.' },
];

const trustItems = [
  { icon: HiOutlineCodeBracket, title: 'Actual technologies', text: 'Projects are built with modern, practical stacks such as Next.js, React, TypeScript, Node.js, and suitable integrations based on requirements.' },
  { icon: HiOutlineClipboardDocumentCheck, title: 'Real project work', text: 'Our portfolio showcases actual project screenshots and project information from delivered work.' },
  { icon: HiOutlineChatBubbleLeftRight, title: 'Direct contact', text: 'Email, phone, and WhatsApp details are available so you can discuss requirements before committing.' },
  { icon: HiOutlineCheckBadge, title: 'Clear process & pricing', text: 'We communicate scope, timelines, pricing factors, and support terms transparently—no hidden costs and no unlimited-revision promises.' },
  { icon: HiOutlineShieldCheck, title: 'Support information', text: 'Post-launch support depends on the agreed package or scope, with options for ongoing maintenance when needed.' },
];

const AboutStory = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 ">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-primary/[0.02] blur-3xl" />
        <div className="absolute -left-40 bottom-1/4 h-80 w-80 rounded-full bg-accent/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-14 sm:gap-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">About Weblign</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl ">
                What we do and how we work
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 ">
                Weblign helps businesses plan, design, and build digital products that solve practical problems.
                We work on business websites, e-commerce experiences, CRM and dashboard systems, mobile applications,
                automation workflows, and custom software tailored to specific requirements.
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 ">
                We work with startups, local businesses, service providers, education-focused organizations, and
                growing companies that need clear communication, dependable implementation, and solutions aligned
                with day-to-day operations.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-5  ">
                  <HiOutlineBuildingOffice2 className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-semibold text-zinc-950 ">Businesses we help</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 ">
                    Teams that need a stronger online presence, better customer journeys, streamlined workflows,
                    or custom tools built around their process.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-5  ">
                  <HiOutlineWrenchScrewdriver className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-semibold text-zinc-950 ">Our approach</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 ">
                    We start with discovery and clear scope, then design and develop in practical steps with
                    transparent communication, realistic timelines, and maintainable outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50/80 to-white p-6 shadow-sm sm:p-8   ">
              <HiOutlineUserGroup className="h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-zinc-950 ">Focus on practical business solutions</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600 ">
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Solutions shaped around your goals, users, and operational needs—not one-size-fits-all templates.</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Clear deliverables, scope-based revisions, and honest discussions about timelines and costs.</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Technology choices made for usability, performance, and long-term maintainability.</li>
                <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Support and handover details defined upfront so expectations are clear after launch.</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">How we work</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl ">
                A clear development workflow
              </h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-600 ">
                Discovery → Proposal → Design → Development → Testing → Delivery → Support
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
              {workSteps.map((step, i) => (
                <div key={step.title} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm  ">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Step {i + 1}</span>
                  <h3 className="mt-2 text-sm font-semibold text-zinc-950 ">{step.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-600 ">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6  ">
              <h3 className="text-sm font-semibold text-zinc-950 ">Project collaboration in practice</h3>
              <div className="mt-4">
                <ProcessTimeline />
              </div>
            </div>
          </div>

          <div>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Trust & transparency</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl ">
                Genuine information to help you decide
              </h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-600 ">
                We focus on clear communication, real project work, and transparent terms so first-time visitors can
                start a conversation with confidence.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {trustItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm  ">
                  <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-semibold text-zinc-950 ">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 ">{item.text}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-zinc-200 bg-primary/[0.03] p-5   sm:col-span-2 lg:col-span-1">
                <h3 className="text-base font-semibold text-zinc-950 ">Contact & support transparency</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700 ">
                  <li><span className="font-medium">Email:</span> <a href="mailto:info.weblign@gmail.com" className="text-primary hover:underline">info.weblign@gmail.com</a></li>
                  <li><span className="font-medium">Phone:</span> <a href="tel:+919315051726" className="text-primary hover:underline">+91 9315051726</a></li>
                  <li><span className="font-medium">WhatsApp:</span> <a href="https://wa.me/919315051726" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chat on WhatsApp</a></li>
                  <li><span className="font-medium">Location:</span> Noida, Uttar Pradesh, India</li>
                  <li><span className="font-medium">Hours:</span> Mon–Fri, 10 AM – 6 PM IST</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
