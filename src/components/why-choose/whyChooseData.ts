export interface Feature {
  icon: string;
  title: string;
  description: string;
  badge: string;
}

export interface ProcessStep {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export interface Achievement {
  value: string;
  suffix?: string;
  label: string;
}

export const features: Feature[] = [
  {
    icon: 'HiOutlineBolt',
    title: 'Lightning Fast Development',
    description:
      'Agile workflows and modern toolchains mean your project ships faster without sacrificing quality.',
    badge: '2x faster',
  },
  {
    icon: 'HiOutlineShieldCheck',
    title: 'Enterprise Grade Security',
    description:
      'End-to-end encryption, secure authentication, and compliance with industry standards.',
    badge: 'Secure',
  },
  {
    icon: 'HiOutlineDevicePhoneMobile',
    title: 'Fully Responsive Design',
    description:
      'Every product we build looks and performs flawlessly across all devices and screen sizes.',
    badge: 'Responsive',
  },
  {
    icon: 'HiOutlineRocketLaunch',
    title: 'Scalable Architecture',
    description:
      'Built to grow with your business — from MVP to millions of users without a hitch.',
    badge: 'Scalable',
  },
  {
    icon: 'HiOutlinePaintBrush',
    title: 'Pixel Perfect UI',
    description:
      'Every interface is crafted with obsessive attention to detail, typography, and spacing.',
    badge: 'Premium',
  },
  {
    icon: 'HiOutlineHandRaised',
    title: 'Dedicated Support',
    description:
      'You get a dedicated project manager and direct line to your development team.',
    badge: '247',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: 'HiOutlineMagnifyingGlass',
    title: 'Discovery',
    description:
      'We analyze your goals, audience, and competition to build a solid foundation.',
  },
  {
    number: '02',
    icon: 'HiOutlineClipboardDocument',
    title: 'Planning',
    description:
      'A detailed roadmap with milestones, timelines, and deliverables is created.',
  },
  {
    number: '03',
    icon: 'HiOutlineWrench',
    title: 'Development',
    description:
      'Our engineers build your product using modern, battle-tested technologies.',
  },
  {
    number: '04',
    icon: 'HiOutlineBeaker',
    title: 'Testing',
    description:
      'Rigorous QA, performance optimization, and cross-browser testing ensures quality.',
  },
  {
    number: '05',
    icon: 'HiOutlineRocketLaunch',
    title: 'Launch',
    description:
      'We deploy, monitor, and optimize for a smooth go-live with zero downtime.',
  },
  {
    number: '06',
    icon: 'HiOutlineHeart',
    title: 'Support',
    description:
      'Ongoing maintenance, updates, and priority support to keep you running.',
  },
];

export const achievements: Achievement[] = [
  { value: '50', suffix: '+', label: 'Projects Delivered' },
  { value: '100', suffix: '%', label: 'Success Rate' },
  { value: '44', suffix: '+', label: 'Happy Clients' },
  { value: '5', suffix: '+', label: 'Years Experience' },
];

export const benefitsList = [
  'Dedicated Project Manager',
  'Transparent Pricing Model',
  'Weekly Progress Updates',
  'Clean, Maintainable Code',
  'SEO Optimized Architecture',
  'Lifetime Technical Support',
];
