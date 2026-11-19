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

import { getWhatsAppUrlFor } from '@/lib/whatsapp';

export interface SocialPlatform {
  label: string;
  href: string;
  /** Key into the icon map in `SocialLinks`. */
  icon: string;
}

export const services: ServiceLink[] = [
  { label: 'Website Development', href: '/#services' },
  { label: 'E-commerce Development', href: '/#services' },
  { label: 'CRM & Custom Dashboards', href: '/#services' },
  { label: 'Mobile App Development', href: '/#services' },
  { label: 'AI & Business Automation', href: '/#services' },
  { label: 'Custom Software Development', href: '/#services' },
];

export const companyLinks: CompanyLink[] = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQs', href: '/faqs' },
];

export const contactDetails: ContactDetail[] = [
  { icon: 'HiOutlineEnvelope', label: 'Email', value: 'info.weblign@gmail.com', href: 'mailto:info.weblign@gmail.com' },
  { icon: 'HiOutlinePhone', label: 'Phone', value: '+91 9315051726', href: 'tel:+919315051726' },
  { icon: 'HiOutlineMapPin', label: 'Location', value: 'Noida, Delhi NCR' },
  { icon: 'HiOutlineClock', label: 'Hours', value: 'Mon – Fri, 10 AM – 6 PM IST' },
];

export const WHATSAPP_NUMBER = '919315051726';

export const socialPlatforms: SocialPlatform[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/weblign-undefined-534300440/?isSelfProfile=true', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/Gaurav-rathore77', icon: 'github' },
  { label: 'Instagram', href: 'https://www.instagram.com/info.weblign/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61595129480839', icon: 'facebook' },
  { label: 'X (Twitter)', href: 'https://x.com/Info_weblign', icon: 'x' },
  { label: 'YouTube', href: 'https://www.youtube.com/@Weblign-d7g', icon: 'youtube' },
  { label: 'Reddit', href: 'https://www.reddit.com/user/Basic_Clothes_9772/', icon: 'reddit' },
  { label: 'WhatsApp', href: getWhatsAppUrlFor('consultation'), icon: 'whatsapp' },
];
