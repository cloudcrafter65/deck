'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, MapPin, Briefcase, Brain, Code, Target, Linkedin, Download } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.4 },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="pt-16 pb-12 px-6 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Vijayakumar G A</h1>
            <p className="text-xl md:text-2xl text-amber-400 font-medium mb-3">
              AI-Native Product Architect | CTO-Level Builder
            </p>
            <div className="flex items-center gap-4 text-white/50">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Singapore
              </span>
              <a
                href="https://www.linkedin.com/in/vijayga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <Link
                href="/resume-2hr/pdf"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Download className="w-4 h-4" /> Save PDF
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Profile */}
        <motion.section className="mb-16" {...fadeIn}>
          <p className="text-lg text-white/80 leading-relaxed mb-4">
            Hands-on technical product leader who designs{' '}
            <span className="text-amber-400 font-semibold">AI-first systems from first principles</span>.
            I operate at CTO depth but execute like a product entrepreneur — making architectural trade-offs,
            writing code, and shipping systems that materially improve outcomes.
          </p>
          <div className="bg-gradient-to-r from-amber-500/15 to-transparent border-l-4 border-amber-500 pl-4 py-3">
            <p className="text-white/90">
              Recently built a production GenAI platform that reduced operational resolution time by{' '}
              <span className="text-amber-400 font-bold text-xl">85%</span>
            </p>
          </div>
        </motion.section>

        {/* What I Do */}
        <motion.section className="mb-16" {...fadeIn}>
          <SectionHeader icon={Target} title="What I Actually Do" />
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Architect end-to-end systems where AI replaces human decision loops',
              'Make hard build vs buy calls grounded in speed, cost, and long-term leverage',
              'Design adaptive, feedback-driven platforms (signals → inference → action)',
              'Ship production systems personally (Python, GenAI, cloud)',
              'Optimise for outcomes, not correctness theatre',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-white/70">
                <span className="text-amber-400 mt-0.5">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section className="mb-16" {...fadeIn}>
          <SectionHeader icon={Briefcase} title="Selected Work" />

          {/* Cyaire */}
          <div className="mb-10">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
              <h3 className="text-xl font-bold text-white">Principal & Acting CTO</h3>
              <span className="text-white/50">Cyaire</span>
              <span className="text-amber-400 text-sm">2024–Present</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="md:col-span-2 space-y-2">
                {[
                  ['Production GenAI RAG platform', 'Python, LLMs, vector DBs, cloud-native'],
                  ['Problem reframe', '"Ticket automation" → knowledge + decision automation'],
                  ['Continuous adaptation', 'Retrieval quality, confidence scoring, feedback loops'],
                  ['Custom integration broker', 'Faster, cheaper, better aligned than OOTB'],
                ].map(([title, desc], i) => (
                  <div key={i} className="text-sm">
                    <span className="text-white font-medium">{title}</span>
                    <span className="text-white/50 ml-2">— {desc}</span>
                  </div>
                ))}
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-center">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Key Result</p>
                <p className="text-amber-400 text-3xl font-bold">&lt;24h</p>
                <p className="text-white/70 text-sm">from ~7 days (-85%)</p>
              </div>
            </div>
          </div>

          {/* Cisco */}
          <div>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
              <h3 className="text-xl font-bold text-white">Regional Architecture & Product Influence</h3>
              <span className="text-white/50">Cisco Systems — APAC</span>
              <span className="text-amber-400 text-sm">2017–2024</span>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { value: '$50M+', label: 'Direct Bookings' },
                { value: '$200M+', label: 'Influenced Revenue' },
                { value: '~35%', label: 'Incident Response Improved' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                  <p className="text-amber-400 text-xl font-bold">{stat.value}</p>
                  <p className="text-white/50 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {[
                ['CTO-style technical owner', 'Multiple revenue-generating platforms'],
                ['Feedback-driven systems', 'AIOps, intent-based automation'],
                ['Field-to-product bridge', 'Roadmap decisions based on real-world constraints'],
              ].map(([title, desc], i) => (
                <div key={i} className="text-sm">
                  <span className="text-white font-medium">{title}</span>
                  <span className="text-white/50 ml-2">— {desc}</span>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-sm italic mt-3">
              Not roadmap theatre — architecture, trade-offs, and execution at scale.
            </p>
          </div>
        </motion.section>

        {/* How I Think */}
        <motion.section className="mb-16" {...fadeIn}>
          <SectionHeader icon={Brain} title="How I Think" subtitle="Battle-tested principles" />
          <div className="space-y-4">
            {[
              {
                principle: 'Reframe the problem before solving it',
                proof: 'Turned "ticket automation" into "knowledge + decision automation" — that reframe drove the 85% improvement',
              },
              {
                principle: 'Build vs Buy is a speed decision, not a cost decision',
                proof: 'Built a custom integration broker in weeks; enterprise platforms would have taken months to configure for the same outcome',
              },
              {
                principle: 'Design for adaptation, not perfection',
                proof: 'Confidence scoring and feedback loops let the system improve continuously without manual retraining cycles',
              },
              {
                principle: 'Ship the simplest thing that could work, then iterate',
                proof: 'Launched with 60% coverage, learned from production signals, and reached 90%+ within months',
              },
              {
                principle: 'Architecture is a business bet wearing a technical costume',
                proof: 'Every system decision I make answers: What outcome does this unlock? What does it cost to change later?',
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-amber-500/30 pl-4 hover:border-amber-500 transition-colors">
                <p className="text-white font-medium">{item.principle}</p>
                <p className="text-white/50 text-sm mt-1">{item.proof}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section className="mb-16" {...fadeIn}>
          <SectionHeader icon={Code} title="Core Technical Capabilities" />
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
            {[
              ['GenAI Systems', 'RAG, agents, LLM orchestration, automation pipelines'],
              ['Languages', 'Python (primary), modern JS/TS'],
              ['Cloud', 'AWS (hands-on), multi-cloud architecture'],
              ['Architecture', 'Lean system design, integration patterns, platform trade-offs'],
              ['AI Usage', 'Eliminating manual workflows, accelerating engineering'],
            ].map(([category, items], i) => (
              <div key={i} className="flex items-baseline gap-3">
                <span className="text-amber-400 font-semibold text-sm min-w-[120px]">{category}</span>
                <span className="text-white/60 text-sm">{items}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Why 2 Hour Learning */}
        <motion.section className="mb-16" {...fadeIn}>
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Why 2 Hour Learning?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  their: 'AI as the operating system, not a feature',
                  mine: 'Built production systems where AI replaces human decision loops — not wraps them',
                },
                {
                  their: 'Signals → Inference → Adaptation',
                  mine: 'Designed feedback-driven platforms with confidence scoring and continuous learning',
                },
                {
                  their: 'Reframe the problem, not optimise the process',
                  mine: '"Ticket automation" → "knowledge + decision automation" = 85% improvement',
                },
                {
                  their: 'Ship fast, learn faster',
                  mine: 'Launched at 60% coverage, iterated to 90%+ from production signals',
                },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-amber-400 text-sm font-medium">{item.their}</p>
                  <p className="text-white/70 text-sm">{item.mine}</p>
                </div>
              ))}
            </div>
            <p className="text-white/50 text-sm mt-6 pt-4 border-t border-white/10">
              You&apos;re rebuilding education by rewriting the system. That&apos;s exactly how I build technology.
            </p>
          </div>
        </motion.section>

        {/* POV Link */}
        <motion.section className="text-center pb-8" {...fadeIn}>
          <Link
            href="/resume-2hr/pov"
            className="inline-flex items-center gap-3 px-6 py-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400 hover:bg-amber-500/20 transition-colors"
          >
            <FileText className="w-5 h-5" />
            <div className="text-left">
              <p className="font-semibold">Read My POV</p>
              <p className="text-sm text-amber-400/70">AI as the Operating System of Mastery</p>
            </div>
          </Link>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-white/40 text-sm">Vijayakumar G A • Singapore</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <Icon className="w-5 h-5 text-amber-400" />
      <div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        {subtitle && <p className="text-white/40 text-sm">{subtitle}</p>}
      </div>
    </div>
  );
}
