import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware to restrict deck access based on site configuration.
 *
 * Reads NEXT_PUBLIC_SITE env var to determine which decks are allowed.
 * Returns 404 for decks not assigned to the current site.
 */

type SiteId = 'bytejournal' | 'cyaire';

// Inline site config to avoid dynamic imports in middleware
const siteDecks: Record<SiteId, string[]> = {
  bytejournal: ['cre-pov', 'resume-2hr', 'zendesk', 'example'],
  cyaire: ['ams-client-pitch', 'appmod', 'ams-gtm-26'],
};

// All known deck slugs (to identify deck routes)
const allDecks = new Set([
  'ams-client-pitch',
  'appmod',
  'ams-gtm-26',
  'cre-pov',
  'resume-2hr',
  'zendesk',
  'example',
]);

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Extract the first path segment (deck slug)
  const segments = pathname.split('/').filter(Boolean);
  const deckSlug = segments[0];

  // Only check deck routes
  if (!deckSlug || !allDecks.has(deckSlug)) {
    return NextResponse.next();
  }

  // Get current site from env
  const siteId = (process.env.NEXT_PUBLIC_SITE as SiteId) || 'bytejournal';
  const allowedDecks = siteDecks[siteId] || siteDecks.bytejournal;

  // Block access to decks not assigned to this site
  if (!allowedDecks.includes(deckSlug)) {
    return NextResponse.rewrite(new URL('/404', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (SEO files)
     * - api routes
     * - public files with extensions
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|api|.*\\.[a-zA-Z]+$).*)',
  ],
};
