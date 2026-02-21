import { createBrowserClient } from '@supabase/ssr';

/**
 * Creates a Supabase client for use in Client Components ('use client').
 * Uses cookies for session storage (consistent with the SSR client).
 */
export function createSupabaseBrowserClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
}
