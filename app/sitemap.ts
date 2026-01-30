import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://deck.bytejournal.blog';

  const routes = [
    '',
    '/appmod',
    '/cre-pov',
    '/ams-gtm-26',
    '/resume-2hr',
    '/resume-2hr/pov',
    '/zendesk',
    '/zendesk/whitepaper',
    '/example',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.split('/').length > 2 ? 0.6 : 0.8,
  }));
}
