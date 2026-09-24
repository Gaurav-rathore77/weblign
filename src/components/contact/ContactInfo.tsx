import ContactCard from './ContactCard';
import { contactInfo, socialLinks } from './contactData';
import type { SiteSettings } from '@/lib/site-content';

const ContactInfo = ({ contact }: { contact?: SiteSettings['contact'] }) => {
  const visibleContactInfo = contactInfo.map((item) => {
    if (item.title === 'Email' && contact) {
      return { ...item, value: contact.email, href: `mailto:${contact.email}` };
    }
    if (item.title === 'Phone' && contact) {
      return {
        ...item,
        value: contact.phone,
        href: `tel:${contact.phone.replace(/[^+\d]/g, '')}`,
      };
    }
    if (item.title === 'Location' && contact) {
      return { ...item, value: contact.address };
    }
    return item;
  });

  return (
    <div className="space-y-8">
      {/* Contact cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {visibleContactInfo.map((item, i) => (
          <ContactCard key={item.title} item={item} index={i} />
        ))}
      </div>

      {/* Social links */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Follow Us
        </p>
        <div className="flex flex-wrap gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-[11px] font-semibold text-zinc-500 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary hover:text-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {link.initial}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
