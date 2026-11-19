import Image from 'next/image';
import { teamMembers } from './aboutData';
import { HiOutlineUserGroup } from 'react-icons/hi2';

const AboutTeam = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-16 sm:py-20   ">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
            <HiOutlineUserGroup className="h-5 w-5" aria-hidden="true" />
            Our Team
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl ">
            People behind the work
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-600 ">
            A collaborative team focused on design, development, and practical delivery for client projects.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md  "
            >
              <div className="relative mx-auto aspect-square w-32 overflow-hidden rounded-3xl border-4 border-white bg-zinc-100 shadow-lg shadow-primary/10  ">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  sizes="128px"
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-zinc-950 ">{member.name}</h3>
              <p className="text-sm font-medium text-primary">{member.role}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-600 ">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
