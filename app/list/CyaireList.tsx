'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const decks = [
  {
    slug: 'ams-client-pitch',
    title: 'Application Modernization Services',
    subtitle: 'Client-Ready Pitch',
    description: 'Customer-facing presentation for AMS engagement opportunities.',
  },
  {
    slug: 'appmod',
    title: 'Application Modernization',
    subtitle: 'Strategic Overview',
    description: 'Comprehensive overview of application modernization strategies and approaches.',
  },
  {
    slug: 'ams-gtm-26',
    title: 'AMS Go-To-Market 2026',
    subtitle: 'GTM Strategy',
    description: 'Go-to-market strategy and execution plan for Application Modernization Services.',
  },
];

export default function CyaireList() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                <span className="text-cyan-400">Cyaire</span>
              </h1>
              <p className="text-slate-400 mt-1">
                Strategic Presentations
              </p>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-sm uppercase tracking-widest text-slate-500 mb-8">
            Available Presentations
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {decks.map((deck, index) => (
            <motion.div
              key={deck.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/${deck.slug}`}
                className="group block h-full p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider text-cyan-400">
                      {deck.subtitle}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 text-white group-hover:text-cyan-300 transition-colors">
                      {deck.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm flex-grow">
                    {deck.description}
                  </p>
                  <div className="mt-6 flex items-center text-cyan-400 text-sm font-medium">
                    <span>View Presentation</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Cyaire. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
