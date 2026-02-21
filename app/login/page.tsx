'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { sendMagicLink } from './actions';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

function LoginForm() {
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/';
  const sent = searchParams.get('sent') === '1';
  const error = searchParams.get('error');

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
        <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
          {sent ? (
            /* Success state */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Check your email</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                We sent a magic link to your email address. Click the link to
                sign in and access the deck.
              </p>
            </motion.div>
          ) : (
            /* Login form */
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cyan-400/10 rounded-lg">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Sign in</h2>
                  <p className="text-slate-400 text-sm">
                    Enter your email for a magic link
                  </p>
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg px-4 py-3 mb-4">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Authentication failed. Please try again.</span>
                </div>
              )}

              <form action={sendMagicLink} className="space-y-4">
                <input type="hidden" name="next" value={next} />
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-1.5"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoFocus
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  Send magic link
                </button>
              </form>
            </>
          )}
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

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
