'use client';

import { motion } from 'framer-motion';
import {
  HiOutlineUserGroup,
  HiOutlineCodeBracket,
  HiOutlineHeart,
  HiOutlineLifebuoy,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineMagnifyingGlass,
} from 'react-icons/hi2';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: <HiOutlineUserGroup className="h-5 w-5" />,
    title: 'Experienced Team',
    description:
      'Senior designers, engineers, and strategists with decades of combined experience.',
  },
  {
    icon: <HiOutlineCodeBracket className="h-5 w-5" />,
    title: 'Agile Development',
    description:
      'Iterative sprints, transparent workflows, and rapid delivery without sacrificing quality.',
  },
  {
    icon: <HiOutlineHeart className="h-5 w-5" />,
    title: 'Customer First',
    description:
      'Your goals drive every decision. We measure success by your business outcomes.',
  },
  {
    icon: <HiOutlineLifebuoy className="h-5 w-5" />,
    title: 'Long-Term Support',
    description:
      'We stand by our work with ongoing maintenance, monitoring, and priority support.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const AboutContent = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="flex flex-col gap-8"
    >
      {/* Introduction */}
      <motion.div variants={itemVariants}>
        <p className="text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
          We are a team of passionate designers, engineers, and strategists who
          believe in the power of great digital products. Since our founding,
          we&rsquo;ve helped startups, scale-ups, and enterprise organizations
          transform complex challenges into elegant, high-performing solutions.
        </p>
      </motion.div>

      {/* Mission + Vision */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-zinc-100 bg-white p-5 shadow-xs dark:border-zinc-700 dark:bg-zinc-100">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
            <HiOutlineAdjustmentsHorizontal className="h-4 w-4 text-primary" />
            Our Mission
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            To empower businesses with digital products that drive growth,
            efficiency, and meaningful user experiences.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-100 bg-white p-5 shadow-xs dark:border-zinc-700 dark:bg-zinc-100">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
            <HiOutlineMagnifyingGlass className="h-4 w-4 text-primary" />
            Our Vision
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            To be the most trusted partner for digital innovation — known for
            quality, integrity, and measurable impact.
          </p>
        </div>
      </motion.div>

      {/* Feature Cards */}
      <motion.div variants={itemVariants} className="space-y-3">
        <h3 className="text-sm font-semibold text-zinc-900">Why work with us</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;
