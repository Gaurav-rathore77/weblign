export interface ServiceLink {
  label: string;
  href: string;
}

export interface CompanyLink {
  label: string;
  href: string;
  badge?: string;
}

export interface ContactDetail {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface SocialPlatform {
  label: string;
  href: string;
  initial: string;
}

export const services: ServiceLink[] = [
  { label: 'Web Development', href: '/services' },
  { label: 'Web Applications', href: '/services' },
  { label: 'Mobile Apps', href: '/services' },
  { label: 'UI/UX Design', href: '/services' },
  { label: 'AI Automation', href: '/services' },
  { label: 'E-commerce', href: '/services' },
  { label: 'Cloud Solutions', href: '/services' },
  { label: 'Custom Software', href: '/services' },
];

export const companyLinks: CompanyLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Careers', href: '#', badge: 'Coming Soon' },
  { label: 'Blog', href: '#', badge: 'Coming Soon' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQs', href: '/faqs' },
];

export const contactDetails: ContactDetail[] = [
  { icon: 'HiOutlineEnvelope', label: 'Email', value: 'info.weblign@gmail.com', href: 'mailto:info.weblign@gmail.com' },
  { icon: 'HiOutlinePhone', label: 'Phone', value: '+91 9315051726', href: 'tel:+919315051726' },
  { icon: 'HiOutlineMapPin', label: 'Location', value: 'India' },
  { icon: 'HiOutlineClock', label: 'Hours', value: 'Mon – Sat, 10 AM – 7 PM IST' },
];

export const socialPlatforms: SocialPlatform[] = [
  { label: 'LinkedIn', href: '#', initial: 'in' },
  { label: 'GitHub', href: '#', initial: 'GH' },
  { label: 'Instagram', href: '#', initial: 'IG' },
  { label: 'Facebook', href: '#', initial: 'f' },
  { label: 'X (Twitter)', href: '#', initial: 'X' },
];
