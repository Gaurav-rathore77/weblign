import {
  HiOutlinePhone,
  HiOutlineClipboardDocumentList,
  HiOutlinePaintBrush,
  HiOutlineCodeBracket,
  HiOutlineBeaker,
  HiOutlineArrowTrendingUp,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCalendarDays,
  HiOutlineCube,
  HiOutlineTruck,
} from 'react-icons/hi2';

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface HighlightItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    number: '01',
    title: 'Discovery Call',
    description:
      'Understand business goals, target audience and project requirements.',
    icon: <HiOutlinePhone className="h-6 w-6" />,
  },
  {
    id: 'planning',
    number: '02',
    title: 'Planning & Strategy',
    description:
      'Define roadmap, timelines, technology stack and milestones.',
    icon: <HiOutlineClipboardDocumentList className="h-6 w-6" />,
  },
  {
    id: 'design',
    number: '03',
    title: 'UI/UX Design',
    description:
      'Design modern, responsive and user-friendly interfaces before development.',
    icon: <HiOutlinePaintBrush className="h-6 w-6" />,
  },
  {
    id: 'development',
    number: '04',
    title: 'Development',
    description:
      'Build scalable, secure and high-performance applications using modern technologies.',
    icon: <HiOutlineCodeBracket className="h-6 w-6" />,
  },
  {
    id: 'testing',
    number: '05',
    title: 'Testing & Deployment',
    description:
      'Perform QA testing, optimization and deploy the application securely.',
    icon: <HiOutlineBeaker className="h-6 w-6" />,
  },
  {
    id: 'support',
    number: '06',
    title: 'Support & Growth',
    description:
      'Provide maintenance, updates and continuous improvements after launch.',
    icon: <HiOutlineArrowTrendingUp className="h-6 w-6" />,
  },
];

export const highlights: HighlightItem[] = [
  {
    icon: <HiOutlineChatBubbleLeftRight className="h-5 w-5" />,
    title: 'Transparent Communication',
    description:
      'You get direct access to your project manager and dev team. Weekly reports, real-time updates, and zero guesswork.',
  },
  {
    icon: <HiOutlineCalendarDays className="h-5 w-5" />,
    title: 'Weekly Progress Updates',
    description:
      'Every Friday you receive a detailed progress report with screenshots, timelines, and next steps.',
  },
  {
    icon: <HiOutlineCube className="h-5 w-5" />,
    title: 'Scalable Architecture',
    description:
      'We build with growth in mind. Your product scales effortlessly as your user base and feature set expand.',
  },
  {
    icon: <HiOutlineTruck className="h-5 w-5" />,
    title: 'On-Time Delivery',
    description:
      'We hit deadlines. Our structured sprint system ensures every milestone is delivered on schedule.',
  },
];
