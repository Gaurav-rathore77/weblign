import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Weblign - Crafting Digital Experiences',
    short_name: 'Weblign',
    description:
      'We build beautiful, functional, and user-centered digital products that help businesses grow.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563EB',
    icons: [
      { src: '/icon', sizes: 'any', type: 'image/png' },
    ],
  };
}
