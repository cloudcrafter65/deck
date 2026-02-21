'use server';

import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase-server';

/**
 * Sends a magic link to the given email address.
 * The link will redirect to /auth/callback?next=<nextPath> on click.
 */
export async function sendMagicLink(formData: FormData) {
    const email = formData.get('email') as string;
    const next = (formData.get('next') as string) || '/';

    if (!email) return;

    const supabase = await createSupabaseServerClient();

    const siteUrl =
        process.env.NEXT_PUBLIC_SITE === 'cyaire'
            ? 'https://deck.cyaire.com'
            : process.env.NEXT_PUBLIC_SITE === 'bytejournal'
                ? 'https://deck.bytejournal.blog'
                : 'http://localhost:3000';

    const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
            emailRedirectTo: `${siteUrl}/auth/callback?next=${encodeURIComponent(next)}`,
        },
    });

    if (error) {
        console.error('Magic link error:', error.message);
        redirect(`/login?error=${encodeURIComponent(error.message)}&next=${encodeURIComponent(next)}`);
    }

    redirect(`/login?sent=1&next=${encodeURIComponent(next)}`);
}
