import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/signin', '/signup', '/privacy'],
    },
    sitemap: 'https://sparkstudios.qzz.io/sitemap.xml',
  };
}
