'use client';

import { motion } from 'framer-motion';
import { teamMembers, stats } from './aboutData';
import { HiOutlineUserGroup } from 'react-icons/hi2';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const AboutTeam = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-20 sm:py-24 dark:from-zinc-950 dark:via-zinc-900/20 dark:to-zinc-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-primary/[0.02] blur-3xl" />
        <div className="absolute -right-32 bottom-1/3 h-80 w-80 rounded-full bg-accent/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-20 sm:gap-24">
          {/* ── Stats ── */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={item}
                className="rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-100"
              >
                <span className="block text-3xl font-bold tracking-tight text-primary">
                  {s.value}
                </span>
                <span className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Team ── */}
          <div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="mx-auto mb-12 max-w-2xl text-center"
            >
              <motion.div variants={item}>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
                  <HiOutlineUserGroup className="h-5 w-5" aria-hidden="true" />
                  Our Team
                </div>
              </motion.div>
              <motion.h2
                variants={item}
                className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100"
              >
                Meet the People Behind the Products
              </motion.h2>
              <motion.p
                variants={item}
                className="mt-3 text-base leading-relaxed text-zinc-500 dark:text-zinc-400"
              >
                A passionate team of designers, engineers, and strategists
                dedicated to building exceptional digital experiences.
              </motion.p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-100 dark:hover:border-primary/30"
                >
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="mx-auto h-20 w-20 rounded-full shadow-sm"
                    />
                  ) : (
                    <div
                      className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} shadow-sm`}
                    >
                      <span className="text-xl font-bold text-white">
                        {member.initials}
                      </span>
                    </div>
                  )}
                  <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
