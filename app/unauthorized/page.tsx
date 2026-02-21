'use client';

import { motion } from 'framer-motion';
import { ShieldOff, ArrowLeft } from 'lucide-react';
import { createBrowserClient } from '@supabase/ssr';
import { useEffect, useState } from 'react';

export default function UnauthorizedPage() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? null);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="text-cyan-400">Cyaire</span>
          </h1>
          <p className="text-slate-400 text-sm mt-2">Secure deck access</p>
        </div>

        {/* Card */}
        <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
          <div className="p-3 bg-red-500/10 rounded-full w-fit mx-auto mb-4">
            <ShieldOff className="w-8 h-8 text-red-400" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Access denied</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            You don&apos;t have permission to view this deck.
            {email && (
              <>
                {' '}You&apos;re signed in as{' '}
                <span className="text-slate-200 font-medium">{email}</span>.
              </>
            )}
          </p>
          <p className="text-slate-500 text-xs mt-3">
            Contact the deck owner to request access.
          </p>
        </div>

        {/* Back link */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-300 text-sm transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to home
          </a>
        </div>
      </motion.div>
    </div>
  );
}
