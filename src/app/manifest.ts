import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Weblign — Engineering Digital Experiences',
    short_name: 'Weblign',
    description:
      'Premium websites, custom software, mobile applications, and intelligent business systems for ambitious businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#05070F',
    theme_color: '#2563EB',
    icons: [{ src: '/icon', sizes: 'any', type: 'image/png' }],
  };
}
