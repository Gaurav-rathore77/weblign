export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
  photo: string;
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
  { value: '5+', label: 'Projects Delivered' },
  { value: '3+', label: 'Happy Clients' },
  { value: '1+', label: 'Years Experience' },
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
    photo: 'https://ui-avatars.com/api/?name=Sachin+Rathore&background=2563EB&color=fff&size=128',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Design',
    bio: 'Designer passionate about crafting beautiful, intuitive interfaces. Priya ensures every product we ship delivers a great user experience.',
    initials: 'PS',
    gradient: 'from-emerald-500 to-cyan-500',
    photo: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=059669&color=fff&size=128',
  },
  {
    name: 'Arjun Mehta',
    role: 'Lead Engineer',
    bio: 'Full-stack engineer specializing in building scalable web applications. Arjun brings deep expertise in modern frameworks and clean architecture.',
    initials: 'AM',
    gradient: 'from-violet-500 to-fuchsia-500',
    photo: 'https://ui-avatars.com/api/?name=Arjun+Mehta&background=7C3AED&color=fff&size=128',
  },
  {
    name: 'Neha Kapoor',
    role: 'Project Manager',
    bio: 'Organized and detail-oriented project manager with a talent for keeping projects on track. Neha ensures every milestone is met with clear communication.',
    initials: 'NK',
    gradient: 'from-orange-500 to-rose-500',
    photo: 'https://ui-avatars.com/api/?name=Neha+Kapoor&background=F97316&color=fff&size=128',
  },
];
