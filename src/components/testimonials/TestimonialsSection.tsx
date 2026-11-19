import Link from 'next/link';
import { HiOutlineChatBubbleLeftRight, HiOutlineCodeBracket, HiOutlineClipboardDocumentCheck, HiOutlineShieldCheck } from 'react-icons/hi2';
import Reveal from '@/components/common/Reveal';
import { socialLinks } from '@/constants';

const items = [
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: 'Real project work',
    text: 'Explore portfolio case studies with actual screenshots, project overviews, challenges, solutions, features, and technologies used.',
  },
  {
    icon: HiOutlineCodeBracket,
    title: 'Practical technology choices',
    text: 'We use modern, maintainable technologies selected based on project requirements and long-term usability.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Transparent process & support',
    text: 'Clear workflow, scope-based pricing discussions, realistic timelines, and defined post-launch support expectations.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-16 sm:py-20   ">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
            <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
            Trust & transparency
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl ">
            Genuine reasons to start a conversation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg ">
            We focus on clear communication, real project work, and practical solutions—without fabricated claims.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm  ">
                <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-zinc-950 ">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 ">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm">
            <a href="mailto:info.weblign@gmail.com" className="font-medium text-primary hover:underline">info.weblign@gmail.com</a>
            <span className="text-zinc-300">•</span>
            <a href="tel:+919315051726" className="font-medium text-primary hover:underline">+91 9315051726</a>
            <span className="text-zinc-300">•</span>
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">WhatsApp</a>
            <span className="text-zinc-300">•</span>
            <Link href="/contact" className="font-medium text-primary hover:underline">Contact page</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
