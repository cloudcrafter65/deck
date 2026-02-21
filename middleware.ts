import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { proxy } from './lib/proxy';

/**
 * Next.js Middleware
 *
 * 1. Refreshes the Supabase session cookie on every request (required by @supabase/ssr)
 * 2. Enforces deck access control via proxy()
 * 3. Redirects unauthenticated users away from protected decks
 */
export async function middleware(request: NextRequest) {
    // Run site/deck routing logic first (returns 404 for decks not on this site)
    const proxyResponse = proxy(request);
    if (proxyResponse.status === 404) {
        return proxyResponse;
    }

    // Check if this route is a protected deck
    const pathname = request.nextUrl.pathname;
    const segments = pathname.split('/').filter(Boolean);
    const deckSlug = segments[0];

    // Only initialize Supabase for protected deck routes
    if (!deckSlug || !isProtectedDeck(deckSlug)) {
        return NextResponse.next({ request });
    }

    // Protected deck — need Supabase auth
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        // Supabase not configured — allow through (dev/bytejournal site)
        return NextResponse.next({ request });
    }

    let supabaseResponse = NextResponse.next({ request });

    const supabase = createServerClient(supabaseUrl, supabaseKey, {
        cookies: {
            getAll() {
                return request.cookies.getAll();
            },
            setAll(cookiesToSet) {
                cookiesToSet.forEach(({ name, value }) =>
                    request.cookies.set(name, value)
                );
                supabaseResponse = NextResponse.next({ request });
                cookiesToSet.forEach(({ name, value, options }) =>
                    supabaseResponse.cookies.set(name, value, options)
                );
            },
        },
    });

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        // Unauthenticated — redirect to login with return path
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('next', pathname);
        const redirectResponse = NextResponse.redirect(loginUrl);
        supabaseResponse.cookies.getAll().forEach((cookie) => {
            redirectResponse.cookies.set(cookie.name, cookie.value, cookie);
        });
        return redirectResponse;
    }

    // Authenticated — check per-deck access
    const { data } = await supabase
        .from('deck_access')
        .select('id')
        .eq('deck_slug', deckSlug)
        .limit(1)
        .single();

    if (!data) {
        const unauthorizedUrl = new URL('/unauthorized', request.url);
        const redirectResponse = NextResponse.redirect(unauthorizedUrl);
        supabaseResponse.cookies.getAll().forEach((cookie) => {
            redirectResponse.cookies.set(cookie.name, cookie.value, cookie);
        });
        return redirectResponse;
    }

    return supabaseResponse;
}

/**
 * Protected decks require a valid Supabase session.
 * All cyaire decks are protected; bytejournal decks are public.
 */
function isProtectedDeck(slug: string): boolean {
    const protectedDecks = new Set([
        'ams-client-pitch',
        'appmod',
        'ams-gtm-26',
    ]);
    return protectedDecks.has(slug);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (SEO files)
         * - public files with extensions
         * Note: /api/ and /auth/ are intentionally NOT excluded so auth
         * callback routes work correctly.
         */
        '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
    ],
};
