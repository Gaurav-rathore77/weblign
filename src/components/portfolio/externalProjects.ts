/**
 * External project references sourced from CodeWithSagar's public live-projects
 * list: https://www.codewithsagar.online/live-projects
 *
 * These are NOT Weblign client work. Only information actually available on the
 * reference page is recorded here: project name, live URL and the category
 * label shown on the source page. Preview images point to local illustrative
 * assets that already exist in this codebase. Every card carries attribution
 * and links back to the original live website.
 */

export const EXTERNAL_SOURCE_NAME = 'CodeWithSagar';
export const EXTERNAL_SOURCE_URL = 'https://www.codewithsagar.online/live-projects';

export const EXTERNAL_CATEGORIES = [
  'All',
  'Education',
  'Business Website',
  'Landing Page',
  'Google Ads',
  'CRM & Dashboard',
  'AI Website',
  'Creative Website',
  'Corporate Website',
  'Portfolio Website',
  'Real Estate',
] as const;

export type ExternalCategory = (typeof EXTERNAL_CATEGORIES)[number];
export type ExternalProjectCategory = Exclude<ExternalCategory, 'All'>;

export interface ExternalProject {
  id: string;
  title: string;
  domain: string;
  description: string;
  category: ExternalProjectCategory;
  image: string;
  imageAlt: string;
  gradient: string;
  demoUrl: string;
  source: string;
  sourceUrl: string;
}

const source = EXTERNAL_SOURCE_NAME;
const sourceUrl = EXTERNAL_SOURCE_URL;
const gr = 'from-blue-700 via-blue-600 to-sky-700';

/** Short, factual description that only uses information available on the source page. */
const ref = (label: string) => `A live ${label} project listed in ${source}'s live projects collection.`;

export const externalProjects: ExternalProject[] = [
  { id: 'ext-alpha-world', title: 'Alpha World Education', domain: 'alphaworldeducation.com', description: ref('education website'), category: 'Education', image: '/images/portfolio-alpha-world.webp', imageAlt: 'Alpha World Education website preview', gradient: gr, demoUrl: 'https://alphaworldeducation.com/', source, sourceUrl },
  { id: 'ext-education-times', title: 'Education Times Abroad', domain: 'educationtimesabroad.com', description: ref('education website'), category: 'Education', image: '/images/portfolio-education-times.webp', imageAlt: 'Education Times Abroad website preview', gradient: gr, demoUrl: 'https://educationtimesabroad.com/', source, sourceUrl },
  { id: 'ext-admission-campus', title: 'Admission Campus', domain: 'admissioncampus.in', description: ref('education website'), category: 'Education', image: '/images/portfolio-admission-campus.webp', imageAlt: 'Admission Campus website preview', gradient: gr, demoUrl: 'https://admissioncampus.in/', source, sourceUrl },
  { id: 'ext-my-mba-admission', title: 'My MBA Admission', domain: 'mymbaadmission.com', description: ref('education website'), category: 'Education', image: '/images/projects/my-mba-admission.webp', imageAlt: 'My MBA Admission website preview', gradient: gr, demoUrl: 'https://mymbaadmission.com/', source, sourceUrl },
  { id: 'ext-aspire-edification', title: 'Aspire Edification', domain: 'aspireedification.com', description: ref('education website'), category: 'Education', image: '/images/projects/aspire-edification.webp', imageAlt: 'Aspire Edification website preview', gradient: gr, demoUrl: 'https://aspireedification.com/', source, sourceUrl },
  { id: 'ext-coraledu-mba', title: 'Coraledu MBA', domain: 'coraledu.in/mba', description: ref('landing page'), category: 'Landing Page', image: '/images/projects/coraledu-mba.webp', imageAlt: 'Coraledu MBA landing page preview', gradient: gr, demoUrl: 'https://coraledu.in/mba', source, sourceUrl },
  { id: 'ext-vidya-vriddhi', title: 'Vidya Vriddhi', domain: 'vidyavriddhi.com', description: ref('education website'), category: 'Education', image: '/images/portfolio-vidya-vriddhi.webp', imageAlt: 'Vidya Vriddhi website preview', gradient: gr, demoUrl: 'https://vidyavriddhi.com/', source, sourceUrl },
  { id: 'ext-btech-bangalore', title: 'BTech in Bangalore', domain: 'btechinbangalore.in', description: ref('Google Ads website'), category: 'Google Ads', image: '/images/projects/btech-in-bangalore.webp', imageAlt: 'BTech in Bangalore website preview', gradient: gr, demoUrl: 'https://btechinbangalore.in/', source, sourceUrl },
  { id: 'ext-diamond-matrimonial', title: 'Diamond Matrimonial Services', domain: 'diamondmatrimonialservices.com', description: ref('CRM project'), category: 'CRM & Dashboard', image: '/images/projects/diamond-matrimonial.svg', imageAlt: 'Diamond Matrimonial Services preview', gradient: gr, demoUrl: 'https://diamondmatrimonialservices.com/', source, sourceUrl },
  { id: 'ext-zabin', title: 'Zabin', domain: 'zabin.in', description: ref('CRM project'), category: 'CRM & Dashboard', image: '/images/projects/zabin-crm.svg', imageAlt: 'Zabin CRM preview', gradient: gr, demoUrl: 'https://zabin.in/', source, sourceUrl },
  { id: 'ext-iibs-admission', title: 'IIBS Admission', domain: 'mbaenroll.com/iibs-admission', description: ref('landing page'), category: 'Landing Page', image: '/images/projects/mbaenroll-iibs.webp', imageAlt: 'IIBS Admission landing page preview', gradient: gr, demoUrl: 'https://mbaenroll.com/iibs-admission', source, sourceUrl },
  { id: 'ext-fizzi', title: 'Fizzi', domain: 'fizzi-animinated-project.vercel.app', description: ref('animated website'), category: 'Creative Website', image: '/images/projects/fizzi-animated.svg', imageAlt: 'Fizzi animated website preview', gradient: gr, demoUrl: 'https://fizzi-animinated-project.vercel.app/', source, sourceUrl },
  { id: 'ext-ibi-admission', title: 'IBI Admission', domain: 'mbaenroll.com/ibi', description: ref('landing page'), category: 'Landing Page', image: '/images/projects/mbaenroll-ibi.webp', imageAlt: 'IBI Admission landing page preview', gradient: gr, demoUrl: 'https://mbaenroll.com/ibi/', source, sourceUrl },
  { id: 'ext-beer-animation', title: 'Beer Animation', domain: 'beer-animation.vercel.app', description: ref('animated website'), category: 'Creative Website', image: '/images/projects/beer-animation.webp', imageAlt: 'Beer Animation website preview', gradient: gr, demoUrl: 'https://beer-animation.vercel.app/', source, sourceUrl },
  { id: 'ext-seven-theta', title: 'Seven Theta AI', domain: 'ai-landing-page-seven-theta.vercel.app', description: ref('AI website'), category: 'AI Website', image: '/images/projects/seven-theta-ai.webp', imageAlt: 'Seven Theta AI landing page preview', gradient: gr, demoUrl: 'https://ai-landing-page-seven-theta.vercel.app/', source, sourceUrl },
  { id: 'ext-enroll-study-abroad', title: 'MBAEnroll Study Abroad', domain: 'mbaenroll.com/study-abroad', description: ref('landing page'), category: 'Landing Page', image: '/images/projects/mbaenroll-study-abroad.webp', imageAlt: 'MBAEnroll Study Abroad landing page preview', gradient: gr, demoUrl: 'https://mbaenroll.com/study-abroad', source, sourceUrl },
  { id: 'ext-enroll-mbbs-abroad', title: 'MBAEnroll MBBS Abroad', domain: 'mbaenroll.com/mbbs-abroad', description: ref('landing page'), category: 'Landing Page', image: '/images/projects/mbaenroll-mbbs-abroad.webp', imageAlt: 'MBAEnroll MBBS Abroad landing page preview', gradient: gr, demoUrl: 'https://mbaenroll.com/mbbs-abroad', source, sourceUrl },
  { id: 'ext-enroll-mba', title: 'MBAEnroll MBA', domain: 'mbaenroll.com/mba', description: ref('landing page'), category: 'Landing Page', image: '/images/projects/mbaenroll-mba.svg', imageAlt: 'MBAEnroll MBA landing page preview', gradient: gr, demoUrl: 'https://mbaenroll.com/mba', source, sourceUrl },
  { id: 'ext-enroll-firebird', title: 'Firebird', domain: 'mbaenroll.com/firebird', description: ref('landing page'), category: 'Landing Page', image: '/images/projects/mbaenroll-firebird.svg', imageAlt: 'Firebird landing page preview', gradient: gr, demoUrl: 'https://mbaenroll.com/firebird', source, sourceUrl },
  { id: 'ext-key2education', title: 'Key2Education', domain: 'key2education.com', description: ref('education website'), category: 'Education', image: '/images/projects/key2education.webp', imageAlt: 'Key2Education website preview', gradient: gr, demoUrl: 'https://www.key2education.com/', source, sourceUrl },
  { id: 'ext-future-mind', title: 'Future Mind Educare', domain: 'futuremindedu.in', description: ref('education website'), category: 'Education', image: '/images/portfolio-future-mind.webp', imageAlt: 'Future Mind Educare website preview', gradient: gr, demoUrl: 'https://www.futuremindedu.in/', source, sourceUrl },
  { id: 'ext-jp-technologies', title: 'JP Technologies', domain: 'jptechnologies.co', description: ref('business website'), category: 'Business Website', image: '/images/projects/jp-tech.webp', imageAlt: 'JP Technologies website preview', gradient: gr, demoUrl: 'https://jptechnologies.co/', source, sourceUrl },
  { id: 'ext-theprint', title: 'ThePrint', domain: 'theprint.in', description: ref('business website'), category: 'Business Website', image: '/images/projects/theprint.webp', imageAlt: 'ThePrint website preview', gradient: gr, demoUrl: 'https://theprint.in/', source, sourceUrl },
  { id: 'ext-super-nova-ai', title: 'Super Nova AI', domain: 'super-nova-ai-ruddy.vercel.app', description: ref('AI website'), category: 'AI Website', image: '/images/projects/super-nova-ai.svg', imageAlt: 'Super Nova AI website preview', gradient: gr, demoUrl: 'https://super-nova-ai-ruddy.vercel.app/', source, sourceUrl },
  { id: 'ext-abroad-russia', title: 'MBBS in Russia', domain: 'abroadstudy4u.com/mbbs-in-russia', description: ref('Google Ads website'), category: 'Google Ads', image: '/images/projects/abroadstudy4u-russia.webp', imageAlt: 'MBBS in Russia page preview', gradient: gr, demoUrl: 'https://abroadstudy4u.com/mbbs-in-russia/', source, sourceUrl },
  { id: 'ext-abroad-india', title: 'MBBS in India', domain: 'abroadstudy4u.com/mbbs-in-india', description: ref('Google Ads website'), category: 'Google Ads', image: '/images/projects/abroadstudy4u-india.webp', imageAlt: 'MBBS in India page preview', gradient: gr, demoUrl: 'https://abroadstudy4u.com/mbbs-in-india/', source, sourceUrl },
  { id: 'ext-abroad-georgia', title: 'MBBS in Georgia', domain: 'abroadstudy4u.com/mbbs-in-georgia', description: ref('Google Ads website'), category: 'Google Ads', image: '/images/projects/abroadstudy4u-georgia.webp', imageAlt: 'MBBS in Georgia page preview', gradient: gr, demoUrl: 'https://abroadstudy4u.com/mbbs-in-georgia', source, sourceUrl },
  { id: 'ext-abroad-kyrgyzstan', title: 'MBBS in Kyrgyzstan', domain: 'abroadstudy4u.com/mbbs-in-kyrgyzstan', description: ref('Google Ads website'), category: 'Google Ads', image: '/images/projects/abroadstudy4u-kyrgyzstan.webp', imageAlt: 'MBBS in Kyrgyzstan page preview', gradient: gr, demoUrl: 'https://abroadstudy4u.com/mbbs-in-kyrgyzstan', source, sourceUrl },
  { id: 'ext-mbbs-neet', title: 'MBBS India NEET', domain: 'mbbsindianeet.com', description: ref('landing page'), category: 'Landing Page', image: '/images/projects/mbbs-india-neet.webp', imageAlt: 'MBBS India NEET landing page preview', gradient: gr, demoUrl: 'https://mbbsindianeet.com/', source, sourceUrl },
  { id: 'ext-your-online-mba', title: 'Your Online MBA', domain: 'youronlinemba.in', description: ref('education website'), category: 'Education', image: '/images/projects/your-online-mba.svg', imageAlt: 'Your Online MBA website preview', gradient: gr, demoUrl: 'https://youronlinemba.in/', source, sourceUrl },
  { id: 'ext-summit-global', title: 'Summit Global', domain: 'summitglobal.co.in', description: ref('corporate website'), category: 'Corporate Website', image: '/images/projects/summit-global.webp', imageAlt: 'Summit Global website preview', gradient: gr, demoUrl: 'https://www.summitglobal.co.in/', source, sourceUrl },
  { id: 'ext-summit-foundation', title: 'Summit Foundation', domain: 'summitfoundationglobal.com', description: ref('corporate website'), category: 'Corporate Website', image: '/images/projects/summit-foundation.webp', imageAlt: 'Summit Foundation website preview', gradient: gr, demoUrl: 'https://www.summitfoundationglobal.com/', source, sourceUrl },
  { id: 'ext-coffee-bilingual', title: 'Bilingual Coffee Website', domain: 'coffee-on-bilingual-website.vercel.app', description: ref('business website'), category: 'Business Website', image: '/images/projects/coffee-bilingual.webp', imageAlt: 'Bilingual Coffee website preview', gradient: gr, demoUrl: 'https://coffee-on-bilingual-website.vercel.app/', source, sourceUrl },
  { id: 'ext-real-estate-theme', title: 'Real Estate Theme', domain: 'real-eastate-theme-1.vercel.app', description: ref('real estate website'), category: 'Real Estate', image: '/images/projects/real-estate-theme.webp', imageAlt: 'Real Estate website preview', gradient: gr, demoUrl: 'https://real-eastate-theme-1.vercel.app/?theme=template-1', source, sourceUrl },
  { id: 'ext-css-founder', title: 'CSS Founder', domain: 'cssfounder.com', description: ref('portfolio website'), category: 'Portfolio Website', image: '/images/projects/css-founder.webp', imageAlt: 'CSS Founder website preview', gradient: gr, demoUrl: 'https://www.cssfounder.com/', source, sourceUrl },
  { id: 'ext-dream-medicine', title: 'Dream Medicine', domain: 'dreammedicine.org', description: ref('Google Ads website'), category: 'Google Ads', image: '/images/projects/dream-medicine.webp', imageAlt: 'Dream Medicine website preview', gradient: gr, demoUrl: 'https://dreammedicine.org/', source, sourceUrl },
];
