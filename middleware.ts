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
    let supabaseResponse = NextResponse.next({ request });

    // Create a Supabase client that can read/write cookies in middleware
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
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
        }
    );

    // IMPORTANT: Always call getUser() — it refreshes the session token.
    // Do not add any logic between createServerClient and getUser().
    const {
        data: { user },
    } = await supabase.auth.getUser();

    // Run site/deck routing logic (returns 404 for decks not on this site)
    const proxyResponse = proxy(request);
    if (proxyResponse.status === 404) {
        return proxyResponse;
    }

    // Check if this deck requires auth
    const pathname = request.nextUrl.pathname;
    const segments = pathname.split('/').filter(Boolean);
    const deckSlug = segments[0];

    if (deckSlug && isProtectedDeck(deckSlug)) {
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
