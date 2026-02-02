'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

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
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://cal.com/vijayga/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-white font-medium rounded-lg transition-all"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:vijay@cyaire.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-500 text-white font-medium rounded-lg transition-all"
                >
                  Contact Us
                </a>
              </div>
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

      {/* Footer */}
      <footer className="border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Cyaire. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://www.linkedin.com/company/cyaire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:vijay@cyaire.com"
              className="text-slate-400 hover:text-white transition-colors"
            >
              vijay@cyaire.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
