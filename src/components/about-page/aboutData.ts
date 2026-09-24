export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
  image: string;
  imageAlt: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '44+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
];

export const values: Value[] = [
  {
    icon: 'HiOutlineAdjustmentsHorizontal',
    title: 'Purpose-Driven Design',
    description:
      'Every pixel we place serves a strategic purpose. We design with intention, creating interfaces that guide users naturally toward their goals while aligning with your business objectives.',
  },
  {
    icon: 'HiOutlineMagnifyingGlass',
    title: 'Technical Excellence',
    description:
      'We write clean, maintainable, and scalable code using modern frameworks and best practices. Our commitment to quality ensures your product performs flawlessly as it grows.',
  },
  {
    icon: 'HiOutlineHandRaised',
    title: 'Radical Transparency',
    description:
      'No black boxes, no surprises. We keep you informed at every stage with regular updates, clear timelines, and honest communication about what works and what doesn\'t.',
  },
  {
    icon: 'HiOutlineRocketLaunch',
    title: 'Growth-First Mindset',
    description:
      'Your success is our success. We build products that not only look great but drive real business outcomes — more conversions, better retention, and sustainable long-term growth.',
  },
];

export const milestones: Milestone[] = [
  {
    year: '2026',
    title: 'The Beginning',
    description:
      'Weblign was founded with a simple mission — help businesses build digital products that truly make an impact. Started by Sachin Rathore, the company began as a two-person team.',
  },
  {
    year: '2026',
    title: 'First Clients',
    description:
      'We onboarded our first clients and began delivering high-quality web applications, e-commerce platforms, and custom software solutions.',
  },
  {
    year: '2026',
    title: 'Building Momentum',
    description:
      'Continued delivering impactful projects with a focus on modern web technologies, client satisfaction, and long-term partnerships.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Sachin Rathore',
    role: 'CEO & Founder',
    bio: 'Visionary leader with deep expertise in software engineering and product strategy. Sachin founded Weblign to bridge the gap between cutting-edge technology and real business value.',
    initials: 'SR',
    gradient: 'from-primary to-accent',
    image: '/images/team-sachin.svg',
    imageAlt: 'Cartoon portrait of Sachin Rathore, CEO and Founder',
  },
  {
    name: 'Gaurav',
    role: 'Tech Head',
    bio: 'Technology leader focused on scalable architecture, developer experience, and keeping our engineering team aligned around reliable solutions.',
    initials: 'GT',
    gradient: 'from-violet-500 to-cyan-500',
    image: '/images/team-gaurav.svg',
    imageAlt: 'Cartoon portrait of Gaurav, Tech Head',
  },
  {
    name: 'Sagar Bist',
    role: 'Web Developer',
    bio: 'Web developer passionate about building fast, accessible experiences and turning ideas into polished products that users love.',
    initials: 'SB',
    gradient: 'from-orange-500 to-fuchsia-500',
    image: '/images/team-sagar.svg',
    imageAlt: 'Cartoon portrait of Sagar Bist, Web Developer',
  },
  {
    name: 'Arun Rathore',
    role: 'Web Developer',
    bio: 'Web developer with a focus on thoughtful UI, clean implementation, and smooth performance across every project we deliver.',
    initials: 'AR',
    gradient: 'from-sky-500 to-blue-600',
    image: '/images/team-arun.svg',
    imageAlt: 'Cartoon portrait of Arun Rathore, Web Developer',
  },
];
