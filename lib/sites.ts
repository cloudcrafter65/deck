/**
 * Multi-site configuration for deck platform
 *
 * This file maps site identifiers to their domains and allowed decks.
 * The NEXT_PUBLIC_SITE environment variable determines which site is active.
 *
 * Usage:
 * - Set NEXT_PUBLIC_SITE=bytejournal for deck.bytejournal.blog
 * - Set NEXT_PUBLIC_SITE=cyaire for deck.cyaire.com
 */

export type SiteId = 'bytejournal' | 'cyaire';

export interface SiteConfig {
  id: SiteId;
  name: string;
  domain: string;
  baseUrl: string;
  decks: string[];
  protected: boolean;  // If true, all decks on this site require auth
  metadata: {
    title: string;
    description: string;
    author?: string;
    keywords?: string[];
  };
}

export const sites: Record<SiteId, SiteConfig> = {
  bytejournal: {
    id: 'bytejournal',
    name: 'ByteJournal',
    domain: 'deck.bytejournal.blog',
    baseUrl: 'https://deck.bytejournal.blog',
    decks: ['cre-pov', 'resume-2hr', 'zendesk', 'example', 'sed-pov'],
    protected: false,  // Public decks — no auth required
    metadata: {
      title: 'Vijayakumar G.A. | CTO AI Transformation',
      description:
        'APAC CTO-calibre technology executive with 20+ years in AI Transformation, Generative AI, and Go-To-Market execution.',
      author: 'Vijayakumar G.A.',
      keywords: [
        'AI Transformation',
        'CTO',
        'Generative AI',
        'GenAI',
        'RAG',
        'AI Agents',
        'ML Ops',
        'Enterprise AI',
        'Digital Transformation',
        'Technology Executive',
        'APAC',
        'Singapore',
      ],
    },
  },
  cyaire: {
    id: 'cyaire',
    name: 'Cyaire',
    domain: 'deck.cyaire.com',
    baseUrl: 'https://deck.cyaire.com',
    decks: ['ams-client-pitch', 'appmod', 'ams-gtm-26'],
    protected: true,  // Private decks — auth required
    metadata: {
      title: 'Cyaire | AI Transformation & Application Modernization',
      description:
        'Strategic presentations on AI Transformation, Application Modernization, and Enterprise Technology Solutions.',
      keywords: [
        'Application Modernization',
        'AI Transformation',
        'Enterprise Solutions',
        'Cloud Migration',
        'Digital Transformation',
      ],
    },
  },
};

/**
 * Get the current site configuration based on NEXT_PUBLIC_SITE env var
 * Defaults to 'bytejournal' if not set
 */
export function getCurrentSite(): SiteConfig {
  const siteId = (process.env.NEXT_PUBLIC_SITE as SiteId) || 'bytejournal';
  return sites[siteId] || sites.bytejournal;
}

/**
 * Check if a deck slug is allowed on the current site
 */
export function isDeckAllowed(slug: string): boolean {
  const site = getCurrentSite();
  return site.decks.includes(slug);
}

/**
 * Get all deck slugs for the current site
 */
export function getCurrentSiteDecks(): string[] {
  return getCurrentSite().decks;
}

/**
 * Get all deck slugs across all sites (for build-time discovery)
 */
export function getAllDecks(): string[] {
  return Object.values(sites).flatMap((site) => site.decks);
}
