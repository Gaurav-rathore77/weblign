import Link from 'next/link';
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClock,
  HiHeart,
} from 'react-icons/hi2';
import Logo from './Logo';
import FooterLinks from './footer/FooterLinks';
import SocialLinks from './footer/SocialLinks';
import Newsletter from './footer/Newsletter';
import BackToTop from './footer/BackToTop';
import {
  services,
  companyLinks,
  contactDetails,
} from './footer/footerData';

const iconComponents: Record<string, React.ElementType> = {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClock,
};

function FooterIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconComponents[name];
  return Icon ? <Icon className={className} /> : null;
}

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <BackToTop />

      <footer
        className="relative overflow-hidden bg-gradient-to-b from-zinc-50 via-white to-white dark:from-[#09090b] dark:via-[#18181b] dark:to-black"
        role="contentinfo"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_35%,rgba(37,99,235,0.04),transparent_30%),radial-gradient(circle_at_88%_72%,rgba(56,189,248,0.035),transparent_28%)]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-2">
                <Logo
                  showText
                  className="text-zinc-800 hover:text-zinc-600 dark:text-white dark:hover:text-white/80"
                />
                <p className="mt-4 text-sm leading-relaxed text-zinc-500 dark:text-white/40">
                  We build beautiful, functional, and user-centered digital
                  products that help businesses grow and succeed in the digital
                  landscape.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400 dark:text-white/30">
                  Our mission is to empower businesses with cutting-edge
                  technology, exceptional design, and transparent collaboration.
                </p>
                <div className="mt-6">
                  <SocialLinks />
                </div>
              </div>

              <div className="lg:col-span-1">
                <FooterLinks title="Services" links={services} />
              </div>

              <div className="lg:col-span-1">
                <FooterLinks title="Company" links={companyLinks} />
              </div>

              <div className="lg:col-span-1">
                <h3 className="mb-4 text-sm font-semibold text-zinc-800 dark:text-white">
                  Contact
                </h3>
                <ul className="space-y-3">
                  {contactDetails.map((detail) => (
                    <li key={detail.label}>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="group inline-flex items-center gap-2.5 text-sm text-zinc-500 transition-colors duration-200 hover:text-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:text-white/40 dark:hover:text-white/80 dark:focus-visible:outline-white/50"
                        >
                          <span className="text-sm" aria-hidden="true">
                            <FooterIcon
                              name={detail.icon}
                              className="h-4 w-4"
                            />
                          </span>
                          <span>{detail.value}</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2.5 text-sm text-zinc-500 dark:text-white/40">
                          <span className="text-sm" aria-hidden="true">
                            <FooterIcon
                              name={detail.icon}
                              className="h-4 w-4"
                            />
                          </span>
                          <span>{detail.value}</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 max-w-lg">
              <Newsletter />
            </div>
          </div>

          <div
            className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-white/10"
            aria-hidden="true"
          />

          <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row sm:gap-0">
            <p className="text-xs text-zinc-400 dark:text-white/30">
              &copy; {year} Weblign. All rights reserved.
            </p>

            <nav
              aria-label="Footer legal links"
              className="flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              <Link
                href="/privacy"
                className="text-xs text-zinc-400 transition-colors duration-200 hover:text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:text-white/30 dark:hover:text-white/60 dark:focus-visible:outline-white/50"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-zinc-400 transition-colors duration-200 hover:text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:text-white/30 dark:hover:text-white/60 dark:focus-visible:outline-white/50"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-xs text-zinc-400 transition-colors duration-200 hover:text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:text-white/30 dark:hover:text-white/60 dark:focus-visible:outline-white/50"
              >
                Cookies Policy
              </Link>
              <span className="inline-flex items-center gap-1 text-xs text-zinc-300 dark:text-white/20">
                Gaurav ne banaya h <HiHeart className="h-4 w-4 text-red-500" aria-hidden="true" />
              </span>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
