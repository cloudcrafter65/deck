'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, Presentation } from 'lucide-react';

const capabilities = [
  {
    icon: Sparkles,
    title: 'AI Transformation',
    description: 'Strategic AI adoption from proof-of-concept to enterprise-scale deployment.',
  },
  {
    icon: Zap,
    title: 'Application Modernization',
    description: 'Migrate and modernize legacy systems with cloud-native architectures.',
  },
  {
    icon: Shield,
    title: 'Enterprise Solutions',
    description: 'End-to-end technology consulting for complex business challenges.',
  },
];

export default function CyaireHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="text-cyan-400">Cyaire</span>
            </h1>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Main Message */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-cyan-400 text-sm uppercase tracking-widest mb-4">
                AI Transformation & Enterprise Solutions
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Accelerate Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500">
                  Digital Future
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                We partner with enterprises to transform legacy systems, adopt AI at scale,
                and build technology capabilities that drive measurable business outcomes.
              </p>
              <a
                href="https://cyaire.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-white font-medium rounded-lg transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Right - Capabilities */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-cyan-500/10 rounded-lg">
                      <capability.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {capability.title}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>

      {/* Decks Section */}
      <section className="border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Presentation className="w-5 h-5 text-cyan-400" />
              <h2 className="text-lg font-semibold text-white">Presentations</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  slug: 'ams-client-pitch',
                  title: 'AMS Client Pitch',
                  description: 'Application modernisation client engagement deck',
                },
                {
                  slug: 'appmod',
                  title: 'AppMod Strategy',
                  description: 'Strategic business plan 2026–2028',
                },
                {
                  slug: 'ams-gtm-26',
                  title: 'AMS GTM 2026',
                  description: 'Go-to-market pitch for application modernisation',
                },
                {
                  slug: 'arch-readiness',
                  title: 'Architecture of Readiness',
                  description: 'App modernisation in the agentic era — thought leadership',
                },
              ].map((deck, index) => (
                <motion.a
                  key={deck.slug}
                  href={`/${deck.slug}/`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.08, duration: 0.4 }}
                  className="group p-5 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                >
                  <p className="text-sm font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {deck.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">{deck.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-cyan-500 font-medium">
                    Open <ArrowRight className="w-3 h-3" />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Cyaire. All rights reserved.
          </p>
          <a
            href="https://cyaire.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            cyaire.com
          </a>
        </div>
      </footer>
    </div>
  );
}
