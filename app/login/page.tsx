'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';
import { signIn, signUp } from './actions';
import { motion } from 'framer-motion';
import { Lock, UserPlus, ArrowLeft, AlertCircle } from 'lucide-react';

function LoginForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const next = searchParams.get('next') || '/';
  const error = searchParams.get('error');
  const initialMode = searchParams.get('mode') === 'signup' ? 'signup' : 'signin';
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);

  const toggleMode = () => {
    const newMode = mode === 'signin' ? 'signup' : 'signin';
    setMode(newMode);
    // Clear error when switching modes
    router.replace(`/login?next=${encodeURIComponent(next)}${newMode === 'signup' ? '&mode=signup' : ''}`);
  };

  const isSignUp = mode === 'signup';
  const Icon = isSignUp ? UserPlus : Lock;

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
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-cyan-400/10 rounded-lg">
              <Icon className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                {isSignUp ? 'Create account' : 'Sign in'}
              </h2>
              <p className="text-slate-400 text-sm">
                {isSignUp
                  ? 'Enter your details to get started'
                  : 'Enter your credentials to continue'}
              </p>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg px-4 py-3 mb-4">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>
                {isSignUp
                  ? 'Could not create account. Please try again.'
                  : 'Invalid email or password.'}
              </span>
            </div>
          )}

          <form action={isSignUp ? signUp : signIn} className="space-y-4">
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
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-300 mb-1.5"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="••••••••"
                minLength={6}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-xl transition-colors cursor-pointer"
            >
              {isSignUp ? 'Create account' : 'Sign in'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={toggleMode}
              className="text-slate-400 hover:text-cyan-400 text-sm transition-colors cursor-pointer"
            >
              {isSignUp
                ? 'Already have an account? Sign in'
                : "Don\u2019t have an account? Sign up"}
            </button>
          </div>
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
