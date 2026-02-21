import { type NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase-server';

/**
 * Auth callback route — handles the magic link redirect from Supabase.
 *
 * Supabase redirects here with ?code=<PKCE code> after the user clicks
 * the magic link in their email. We exchange the code for a session,
 * set the session cookie, then redirect to the intended destination.
 */
export async function GET(request: NextRequest) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get('code');
    const next = searchParams.get('next') || '/';

    if (code) {
        const supabase = await createSupabaseServerClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (!error) {
            // Session established — redirect to the deck (or home)
            return NextResponse.redirect(`${origin}${next}`);
        }
    }

    // Code missing or exchange failed — redirect to login with error
    return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
