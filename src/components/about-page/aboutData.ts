export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
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
  { value: '30+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '99%', label: 'Client Satisfaction' },
];

export const values: Value[] = [
  {
    icon: '🎯',
    title: 'Purpose-Driven Design',
    description:
      'Every pixel we place serves a strategic purpose. We design with intention, creating interfaces that guide users naturally toward their goals while aligning with your business objectives.',
  },
  {
    icon: '🔬',
    title: 'Technical Excellence',
    description:
      'We write clean, maintainable, and scalable code using modern frameworks and best practices. Our commitment to quality ensures your product performs flawlessly as it grows.',
  },
  {
    icon: '🤝',
    title: 'Radical Transparency',
    description:
      'No black boxes, no surprises. We keep you informed at every stage with regular updates, clear timelines, and honest communication about what works and what doesn\'t.',
  },
  {
    icon: '🚀',
    title: 'Growth-First Mindset',
    description:
      'Your success is our success. We build products that not only look great but drive real business outcomes — more conversions, better retention, and sustainable long-term growth.',
  },
];

export const milestones: Milestone[] = [
  {
    year: '2020',
    title: 'The Beginning',
    description:
      'Weblign was founded with a simple mission — help businesses build digital products that truly make an impact. Started by Sachin Rathore, the company began as a two-person team.',
  },
  {
    year: '2021',
    title: 'First Major Clients',
    description:
      'We onboarded our first enterprise clients and grew the team to 8. Our portfolio expanded across web apps, e-commerce platforms, and custom software solutions.',
  },
  {
    year: '2022',
    title: 'AI & Automation',
    description:
      'Launched our AI automation practice, helping clients integrate machine learning, intelligent workflows, and data-driven features into their products.',
  },
  {
    year: '2023',
    title: '20+ Projects Delivered',
    description:
      'Crossed the 20-project milestone with a 100% client satisfaction rate. Expanded to mobile app development and cloud-native solutions.',
  },
  {
    year: '2024',
    title: 'Trusted Partner',
    description:
      'Became a trusted technology partner for startups and enterprises alike. Our team of 15+ delivers end-to-end digital solutions across web, mobile, and AI.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Sachin Rathore',
    role: 'CEO & Founder',
    bio: 'Visionary leader with deep expertise in software engineering and product strategy. Sachin founded Weblign to bridge the gap between cutting-edge technology and real business value.',
    initials: 'SR',
    gradient: 'from-primary to-accent',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Design',
    bio: 'Award-winning designer with 8+ years crafting beautiful, intuitive interfaces. Priya ensures every product we ship delivers a world-class user experience.',
    initials: 'PS',
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    name: 'Arjun Mehta',
    role: 'Lead Engineer',
    bio: 'Full-stack engineer and architect specializing in scalable systems. Arjun has led development for products serving millions of users across fintech and healthcare.',
    initials: 'AM',
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    name: 'Neha Kapoor',
    role: 'Project Manager',
    bio: 'Certified PMP with a talent for keeping complex projects on track. Neha ensures every milestone is met with clear communication and zero surprises.',
    initials: 'NK',
    gradient: 'from-orange-500 to-rose-500',
  },
];
