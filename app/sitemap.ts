import { MetadataRoute } from 'next';

const SITE_URL = 'https://quotex.my';
const lastModified = new Date('2025-05-17');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      priority: 1.0,
      changeFrequency: 'weekly',
      lastModified,
    },
    {
      url: `${SITE_URL}/quick-start`,
      priority: 0.8,
      changeFrequency: 'monthly',
      lastModified,
    },
    {
      url: `${SITE_URL}/assets`,
      priority: 0.8,
      changeFrequency: 'weekly',
      lastModified,
    },
    {
      url: `${SITE_URL}/faq`,
      priority: 0.7,
      changeFrequency: 'monthly',
      lastModified,
    },
    {
      url: `${SITE_URL}/about`,
      priority: 0.6,
      changeFrequency: 'monthly',
      lastModified,
    },
    {
      url: `${SITE_URL}/contact`,
      priority: 0.5,
      changeFrequency: 'yearly',
      lastModified,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      priority: 0.3,
      changeFrequency: 'yearly',
      lastModified,
    },
    {
      url: `${SITE_URL}/service-agreement`,
      priority: 0.3,
      changeFrequency: 'yearly',
      lastModified,
    },
  ];
}
