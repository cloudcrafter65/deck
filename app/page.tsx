'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import Image from 'next/image';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vijayakumar G.A.',
  jobTitle: 'CTO AI Transformation',
  description: 'APAC CTO-calibre technology executive with 20+ years in AI Transformation, Generative AI, and Go-To-Market execution.',
  url: 'https://deck.vercel.app',
  sameAs: ['https://www.linkedin.com/in/vijayga'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Singapore',
    addressCountry: 'SG',
  },
  knowsAbout: [
    'AI Transformation',
    'Generative AI',
    'RAG',
    'AI Agents',
    'ML Ops',
    'GTM Strategy',
    'Executive Advisory',
    'Enterprise Architecture',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'National University of Singapore',
  },
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Cyaire',
    },
  ],
};

const coreImpact = [
  { highlight: 'Accelerate AI adoption', text: 'from strategy to production' },
  { highlight: 'Build GenAI capabilities', text: 'RAG, Agents, and ML Ops' },
  { highlight: 'Drive enterprise transformation', text: 'with measurable ROI' },
];

const experience = [
  { company: 'Cyaire', role: 'Principal & CTO' },
  { company: 'Cisco Systems', role: 'Regional Industry Lead (FSI)' },
  { company: 'Accenture, IBM, Orange/BT', role: '' },
];

const skills = [
  'AI Transformation',
  'GenAI / RAG / Agents',
  'GTM Strategy',
  'Executive Advisory',
];

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center p-6 md:p-12 overflow-y-auto">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12">
            {/* Left Column - Image & Basic Info */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {/* Portrait Image - maintains 2:3 aspect ratio */}
              <div className="w-full max-w-[240px] mx-auto md:mx-0 mb-6">
                <Image
                  src="/images/profile-sketch.jpg"
                  alt="Vijayakumar G.A."
                  width={1024}
                  height={1536}
                  className="w-full h-auto"
                  quality={95}
                  priority
                />
              </div>

              <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-3 text-gray-900">
                Vijayakumar<br />G.A.
              </h1>

              <p className="text-gray-600 text-lg mb-5">
                CTO AI Transformation
              </p>

              <div className="space-y-2 text-gray-600 flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Singapore</span>
                </div>
                <a
                  href="https://www.linkedin.com/in/vijayga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-900 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>linkedin.com/in/vijayga</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {/* Bio */}
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-8">
                <p className="text-lg leading-relaxed text-gray-700">
                  Market-facing APAC CTO-calibre technology executive with <strong className="text-gray-900">20+ years</strong> at the
                  intersection of AI Transformation, Generative AI, and regional Go-To-Market
                  execution. Trusted advisor to senior customer executives across APAC.
                </p>
              </div>

              {/* Core Impact & Experience */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Core Impact */}
                <div>
                  <p className="text-xs tracking-[0.2em] text-gray-400 mb-4">CORE IMPACT</p>
                  <ul className="space-y-3">
                    {coreImpact.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <span className="text-gray-900 mt-1">•</span>
                        <span>
                          <strong className="text-gray-900">{item.highlight}</strong>{' '}
                          <span className="text-gray-600">{item.text}</span>
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Experience */}
                <div>
                  <p className="text-xs tracking-[0.2em] text-gray-400 mb-4">EXPERIENCE</p>
                  <ul className="space-y-3">
                    {experience.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                      >
                        <svg className="w-4 h-4 text-gray-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>
                          <strong className="text-gray-900">{item.company}</strong>
                          {item.role && <span className="text-gray-500"> — {item.role}</span>}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Skills */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-gray-900 text-gray-900 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
                <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm">
                  M.Eng — NUS
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
