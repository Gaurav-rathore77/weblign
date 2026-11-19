export const categories = [
  'All',
  'Web Apps',
  'Business Websites',
  'Education Portals',
  'Landing Pages',
] as const;

export type Category = (typeof categories)[number];

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  image: string;
  imageAlt?: string;
  gradient: string;
  tech: string[];
  metrics?: string;
  demoUrl: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  features?: string[];
  timeline?: string;
  results?: string[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
}

export type PortfolioPreview = Pick<
  Project,
  'id' | 'title' | 'image' | 'imageAlt' | 'gradient' | 'category'
>;

export const projects: Project[] = [
  {
    id: 'icfei-portal',
    title: 'ICFEI India – CRM & Learning Portal',
    description:
      'Secure CRM and learning portal for the International Center for Education & Innovation, supporting user management, assessments, and progress tracking.',
    category: 'Web Apps',
    image: '/images/portfolio-icfei.webp',
    imageAlt: 'ICFEI India CRM and learning portal screenshot',
    gradient: 'from-blue-700 via-blue-700 to-blue-700',
    tech: ['Next.js', 'Laravel', 'MySQL'],
    demoUrl: 'https://www.india.icfei.com/login',
    overview:
      'A centralized CRM and learning portal built to manage portal users, online assessments, academic workflows, and progress tracking for the International Center for Education & Innovation.',
    problem:
      'The institution needed a secure digital platform to manage users, conduct online assessments, publish results, and track progress across programs with role-based access and operational visibility.',
    solution:
      'We built a secure, role-based portal with user and workflow management, online assessment capabilities, result publishing, and dashboard views to support day-to-day academic operations.',
    technologies: ['Next.js', 'Laravel', 'MySQL', 'REST API', 'JWT Auth', 'Tailwind CSS'],
    features: [
      'Secure login and role-based access for portal users',
      'CRM-style management of users, workflows, and records',
      'Online assessment and result publishing workflows',
      'Student progress tracking and operational dashboard views',
    ],
  },
  {
    id: 'anita-printers',
    title: 'Anita Printers – Business Website',
    description:
      'Business website for Anita Printers showcasing printing services, offerings, and contact pathways for customer inquiries.',
    category: 'Business Websites',
    image: '/images/projects/anita-printers.webp',
    imageAlt: 'Anita Printers website preview',
    gradient: 'from-blue-700 via-blue-600 to-sky-700',
    tech: ['Website Development', 'Responsive Design', 'SEO'],
    demoUrl: 'https://www.anitaprinters.in/',
    overview:
      'A business website for Anita Printers designed to present services clearly, build credibility, and make it easy for customers to inquire online.',
    problem:
      'Printing businesses need a clear online presence to explain services, highlight capabilities, and help potential customers quickly find information and get in touch.',
    solution:
      'We delivered a responsive business website with structured service information, clear calls to action, and an accessible layout tailored for customer inquiries.',
    technologies: ['Responsive Web Design', 'Modern Frontend', 'SEO Foundations'],
    features: [
      'Clear presentation of printing services and business information',
      'Responsive layout for mobile and desktop visitors',
      'Contact and inquiry-focused user flow',
      'Professional online presence for the business',
    ],
  },
  {
    id: 'ad2print',
    title: 'AD2Print – Business Website',
    description:
      'Business website for AD2Print presenting print and advertising-related services with a clear, inquiry-ready experience.',
    category: 'Business Websites',
    image: '/images/projects/ad2print.webp',
    imageAlt: 'AD2Print website preview',
    gradient: 'from-blue-700 via-indigo-700 to-blue-700',
    tech: ['Website Development', 'Responsive Design', 'SEO'],
    demoUrl: 'https://www.ad2print.in/',
    overview:
      'A business website for AD2Print built to communicate services, showcase offerings, and support customer inquiries through a clean digital experience.',
    problem:
      'Businesses in print and advertising need an online presence that clearly communicates offerings and makes it simple for prospects to understand services and reach out.',
    solution:
      'We created a responsive website with organized service content, straightforward navigation, and conversion-focused contact pathways.',
    technologies: ['Responsive Web Design', 'Modern Frontend', 'SEO Foundations'],
    features: [
      'Service-focused content structure for print and advertising offerings',
      'Mobile-friendly, responsive browsing experience',
      'Clear calls to action for inquiries and contact',
      'Clean, professional business website presentation',
    ],
  },
  {
    id: 'negi-caterer',
    title: 'Negi Caterer – Business Website',
    description:
      'Business website for Negi Caterer highlighting catering services and making it easy for customers to explore offerings and get in touch.',
    category: 'Business Websites',
    image: '/images/projects/negicaterer.webp',
    imageAlt: 'Negi Caterer website preview',
    gradient: 'from-emerald-700 via-blue-700 to-blue-700',
    tech: ['Website Development', 'Responsive Design', 'SEO'],
    demoUrl: 'https://negicaterer.in/',
    overview:
      'A business website for Negi Caterer designed to showcase catering services, communicate key information, and support customer inquiries.',
    problem:
      'Catering businesses benefit from an accessible online presence where customers can understand services, view offerings, and quickly contact the business.',
    solution:
      'We built a responsive website with clear service presentation, user-friendly navigation, and inquiry-focused sections to help customers connect easily.',
    technologies: ['Responsive Web Design', 'Modern Frontend', 'SEO Foundations'],
    features: [
      'Clear presentation of catering services and offerings',
      'Responsive experience across devices',
      'Inquiry and contact-oriented page flow',
      'Professional digital presence for local customers',
    ],
  },
];

export const featuredProject: Project = projects[0];
