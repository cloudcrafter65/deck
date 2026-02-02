'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const decks = [
  {
    slug: 'cre-pov',
    title: 'CRE Point of View',
    subtitle: 'Industry Analysis',
    description: 'Commercial real estate technology and market insights.',
  },
  {
    slug: 'resume-2hr',
    title: 'Executive Profile',
    subtitle: 'Career Overview',
    description: 'Professional background and experience summary.',
  },
  {
    slug: 'zendesk',
    title: 'Zendesk Integration',
    subtitle: 'Technical Deep-Dive',
    description: 'Enterprise customer service platform integration strategies.',
  },
  {
    slug: 'example',
    title: 'Example Deck',
    subtitle: 'Template',
    description: 'Sample presentation showcasing deck capabilities.',
  },
];

export default function BytejournalList() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                ByteJournal
              </h1>
              <p className="text-gray-500 mt-1">
                Presentations
              </p>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm"
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
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-8">
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
                className="group block h-full p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-gray-400 hover:bg-gray-100 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider text-gray-500">
                      {deck.subtitle}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 text-gray-900 group-hover:text-gray-700 transition-colors">
                      {deck.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm flex-grow">
                    {deck.description}
                  </p>
                  <div className="mt-6 flex items-center text-gray-700 text-sm font-medium">
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
      <footer className="border-t border-gray-200 mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ByteJournal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
