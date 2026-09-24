export const categories = [
  'All',
  'Web Apps',
  'Business Websites',
  'Education Portals',
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
  metrics: string;
  demoUrl: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  timeline: string;
  results: string[];
  testimonial: {
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
    title: 'ICFEI India — Exam & Learning Portal',
    description: 'Secure exam management and e-learning platform for the International Center for Education & Innovation.',
    category: 'Education Portals',
    image: '/images/portfolio-icfei.webp',
    gradient: 'from-blue-700 via-indigo-700 to-purple-700',
    tech: ['Next.js', 'Laravel', 'MySQL'],
    metrics: '10K+ Users',
    demoUrl: 'https://www.india.icfei.com/login',
    overview: 'A comprehensive exam management and e-learning platform that provides secure login, online assessments, result publishing, and student progress tracking for the International Center for Education & Innovation.',
    problem: 'The institution needed a centralized digital platform to manage student logins, conduct online exams, publish results, and track academic progress across multiple programs — all with strict security requirements.',
    solution: 'We built a secure portal with role-based access, online exam engine, automated result processing, and real-time progress dashboards — designed to scale across thousands of students.',
    technologies: ['Next.js', 'Laravel', 'MySQL', 'REST API', 'JWT Auth', 'Tailwind CSS'],
    timeline: '4 months',
    results: [
      '10K+ registered student accounts',
      '99.9% platform uptime during exams',
      '60% reduction in administrative workload',
    ],
    testimonial: {
      quote: 'The portal transformed how we conduct exams and manage student data. It\'s reliable, secure, and incredibly easy to use.',
      name: 'Dr. Anil Verma',
      role: 'Director, ICFEI',
    },
  },
  {
    id: 'future-mind',
    title: 'Future Mind Educare — MBBS Admissions',
    description: 'A complete Next.js website for India\'s trusted MBBS admission consultancy serving 5,000+ students.',
    category: 'Business Websites',
    image: '/images/portfolio-future-mind.webp',
    gradient: 'from-emerald-700 via-teal-700 to-cyan-700',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    metrics: '5K+ Students',
    demoUrl: 'https://www.futuremindedu.in/',
    overview: 'A full-featured website for Future Mind Educare, a leading MBBS admission consultancy. The site showcases medical colleges across India and 15+ countries, with dynamic college listings, country filters, blog, testimonials, and a complete counseling booking system.',
    problem: 'The consultancy needed a modern,trustworthy online presence that could showcase 100+ medical colleges across India and abroad, provide detailed course information, and convert visitors into leads through an intuitive consultation booking flow.',
    solution: 'We designed and built a complete Next.js website with dynamic college pages, country-based filtering, integrated blog, student testimonials, WhatsApp integration, and a streamlined consultation booking system.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API', 'SEO', 'Vercel'],
    timeline: '3 months',
    results: [
      '5,000+ students guided successfully',
      '15+ country pages with dynamic content',
      '95% client satisfaction rate',
    ],
    testimonial: {
      quote: 'The website perfectly represents our brand and has significantly increased student inquiries. The dynamic college listings are a game-changer.',
      name: 'Rajesh Patel',
      role: 'Founder, Future Mind Educare',
    },
  },
  {
    id: 'vidya-vriddhi',
    title: 'Vidya Vriddhi — College Guidance Platform',
    description: 'A comprehensive Next.js platform for college discovery, exam prep, and admission guidance serving 50K+ students.',
    category: 'Web Apps',
image: '/images/portfolio-vidya-vriddhi.webp',
    gradient: 'from-orange-700 via-amber-700 to-yellow-700',
    tech: ['Next.js', 'TypeScript', 'Node.js'],
    metrics: '50K+ Students',
    demoUrl: 'https://www.vidyavriddhi.com/',
    overview: 'A full-featured education platform offering college discovery, entrance exam preparation, NEET/JEE rank predictors, study abroad guidance, and personalized career counseling — all powered by a modern Next.js frontend.',
    problem: 'Students and parents lacked a single trusted platform to discover colleges, compare institutions, predict entrance exam ranks, and get personalized admission guidance across engineering, medical, management, and commerce streams.',
    solution: 'We built a comprehensive Next.js platform with dynamic college listings, AI-powered rank predictors, exam preparation resources, college comparison tools, and an integrated counseling booking system.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST API', 'SEO'],
    timeline: '5 months',
    results: [
      '50,000+ students guided across India',
      '6000+ institutions listed with detailed profiles',
      '200+ exams and courses covered',
    ],
    testimonial: {
      quote: 'Vidya Vriddhi has become the go-to platform for students seeking college guidance. The rank predictor alone has helped thousands make informed decisions.',
      name: 'Abhishek Singh',
      role: 'Founder, Vidya Vriddhi',
    },
  },
  {
    id: 'alpha-world',
    title: 'Alpha World Education — Study Abroad Portal',
    description: 'A modern Next.js platform connecting Indian students to 500+ universities across 40+ countries.',
    category: 'Business Websites',
    image: '/images/portfolio-alpha-world.webp',
    gradient: 'from-sky-700 via-blue-700 to-indigo-700',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    metrics: '15K+ Students',
    demoUrl: 'https://www.alphaworldeducation.com/',
    overview: 'A comprehensive study abroad platform featuring university discovery across 40+ countries, AI-powered counseling, visa assistance, scholarship guidance, and a full-stack student journey from application to departure.',
    problem: 'Indian students aspiring to study abroad lacked a single trusted platform that could guide them through the entire journey — from university selection and applications to visa processing and pre-departure support.',
    solution: 'We built a modern Next.js platform with dynamic country and university pages, AI-powered profile matching, integrated visa guidance tools, scholarship discovery engine, and a streamlined consultation booking system.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API', 'SEO', 'Vercel'],
    timeline: '4 months',
    results: [
      '15,000+ students guided to global universities',
      '500+ partner institutions across 40+ countries',
      '98% visa approval success rate',
    ],
    testimonial: {
      quote: 'Alpha World Education has transformed how students approach studying abroad. The platform is intuitive, comprehensive, and delivers real results.',
      name: 'Vikram Joshi',
      role: 'Director, Alpha World Education',
    },
  },
  {
    id: 'education-times',
    title: 'Education Times Abroad — MBBS & Study Abroad',
    description: 'A dedicated Next.js platform helping Indian students pursue MBBS abroad at NMC-approved universities.',
    category: 'Business Websites',
    image: '/images/portfolio-education-times.webp',
    gradient: 'from-violet-700 via-purple-700 to-fuchsia-700',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    metrics: '1K+ Placements',
    demoUrl: 'https://www.educationtimesabroad.com/',
    overview: 'A specialized platform focused on MBBS abroad admissions, featuring NMC & WHO approved university listings across 15+ countries, AI counseling, visa support, and complete pre-departure guidance for Indian medical aspirants.',
    problem: 'Indian medical aspirants needed a reliable platform to discover NMC-approved medical universities abroad, understand the admission process, and get end-to-end support — from application to campus integration.',
    solution: 'We engineered a Next.js platform with dynamic country and college pages, AI-powered university matching, NMC compliance verification, integrated visa support tools, and a seamless consultation booking flow.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API', 'SEO', 'Vercel'],
    timeline: '3 months',
    results: [
      '1,000+ students placed in NMC-approved universities',
      '15+ countries with dedicated landing pages',
      'Zero donation — 100% transparent fee structure',
    ],
    testimonial: {
      quote: 'The platform has made MBBS abroad accessible and transparent for Indian students. The response from parents and students has been overwhelming.',
      name: 'Rahul Sharma',
      role: 'CEO, Education Times Abroad',
    },
  },
  {
    id: 'admission-campus',
    title: 'Admission Campus — College Admission Hub',
    description: 'A comprehensive Next.js platform connecting students to 6000+ Indian colleges with expert admission guidance.',
    category: 'Web Apps',
    image: '/images/portfolio-admission-campus.webp',
    gradient: 'from-rose-700 via-pink-700 to-red-700',
    tech: ['Next.js', 'TypeScript', 'Node.js'],
    metrics: '10K+ Admitted',
    demoUrl: 'https://www.admissioncampus.in/',
    overview: 'A complete college admission platform featuring 6000+ institution profiles, entrance exam guides, college comparison tools, rank predictors, and expert counseling for engineering, medical, management, and arts streams across India.',
    problem: 'Students across India struggled to find reliable, up-to-date information about colleges, entrance exams, and admission procedures — leading to confusion and missed opportunities.',
    solution: 'We developed a feature-rich Next.js platform with comprehensive college and exam databases, AI-powered college matching, rank predictors, comparison tools, and direct counseling booking integration.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST API', 'SEO'],
    timeline: '5 months',
    results: [
      '10,000+ students successfully admitted',
      '6,000+ institutions with detailed profiles',
      '98% admission success rate',
    ],
    testimonial: {
      quote: 'Admission Campus has streamlined the entire college discovery and admission process. Students now have all the information they need at their fingertips.',
      name: 'Amit Gupta',
      role: 'Founder, Admission Campus',
    },
  },
];

export const featuredProject: Project = {
  id: 'featured-vidya-vriddhi',
  title: 'Vidya Vriddhi — College Guidance Platform',
  description: 'A comprehensive Next.js platform for college discovery, exam prep, and admission guidance serving 50K+ students.',
  category: 'Web Apps',
  image: '/images/portfolio-vidya-vriddhi.webp',
  gradient: 'from-orange-700 via-amber-700 to-yellow-700',
  tech: ['Next.js', 'TypeScript', 'Node.js'],
  metrics: '50K+ Students',
  demoUrl: 'https://www.vidyavriddhi.com/',
  overview: 'A full-featured education platform offering college discovery, entrance exam preparation, NEET/JEE rank predictors, study abroad guidance, and personalized career counseling — all powered by a modern Next.js frontend.',
  problem: 'Students and parents lacked a single trusted platform to discover colleges, compare institutions, predict entrance exam ranks, and get personalized admission guidance across engineering, medical, management, and commerce streams.',
  solution: 'We built a comprehensive Next.js platform with dynamic college listings, AI-powered rank predictors, exam preparation resources, college comparison tools, and an integrated counseling booking system.',
  technologies: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST API', 'SEO'],
  timeline: '5 months',
  results: [
    '50,000+ students guided across India',
    '6000+ institutions listed with detailed profiles',
    '200+ exams and courses covered',
  ],
  testimonial: {
    quote: 'Vidya Vriddhi has become the go-to platform for students seeking college guidance. The rank predictor alone has helped thousands make informed decisions.',
    name: 'Abhishek Singh',
    role: 'Founder, Vidya Vriddhi',
  },
};