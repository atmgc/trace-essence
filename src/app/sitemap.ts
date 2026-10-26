import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://trace-essence.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://trace-essence.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
      {
      url: 'https://trace-essence.com/masterclass',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
      {
      url: 'https://trace-essence.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
