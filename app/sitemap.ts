import { MetadataRoute } from 'next';
import { getCurrentSite } from '@/lib/sites';

/**
 * Dynamic sitemap based on current site configuration.
 * Only includes decks assigned to the current site.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const site = getCurrentSite();
  const baseUrl = site.baseUrl;

  // Start with homepage
  const routes: string[] = [''];

  // Add deck routes for current site
  for (const deck of site.decks) {
    routes.push(`/${deck}`);

    // Add known sub-routes for specific decks
    if (deck === 'resume-2hr') {
      routes.push(`/${deck}/pov`);
    }
    if (deck === 'zendesk') {
      routes.push(`/${deck}/whitepaper`);
    }
  }

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.split('/').length > 2 ? 0.6 : 0.8,
  }));
}
