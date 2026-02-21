'use server';

import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase-server';

/**
 * Signs in with email and password.
 * On success, redirects to the intended deck (or home).
 */
export async function signIn(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const next = (formData.get('next') as string) || '/';

    if (!email || !password) {
        redirect(`/login?error=missing_fields&next=${encodeURIComponent(next)}`);
    }

    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.error('Sign in error:', error.message);
        redirect(`/login?error=${encodeURIComponent(error.message)}&next=${encodeURIComponent(next)}`);
    }

    redirect(next);
}

/**
 * Creates a new account with email and password.
 * On success, signs in and redirects to the intended deck (or home).
 */
export async function signUp(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const next = (formData.get('next') as string) || '/';

    if (!email || !password) {
        redirect(`/login?mode=signup&error=missing_fields&next=${encodeURIComponent(next)}`);
    }

    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        console.error('Sign up error:', error.message);
        redirect(`/login?mode=signup&error=${encodeURIComponent(error.message)}&next=${encodeURIComponent(next)}`);
    }

    redirect(next);
}
