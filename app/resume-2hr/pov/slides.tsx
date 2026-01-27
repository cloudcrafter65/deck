'use client';

import { Slide } from '@/components/core';
import { AnimatedText } from '@/components/primitives';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Brain, Layers, Cpu, Users, Target, GitBranch, Gauge, Zap, Database, Network, Settings, MessageSquare } from 'lucide-react';

// ============================================================================
// TITLE & INTRO
// ============================================================================

export function POVTitleSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="text-center max-w-5xl px-8">
        <AnimatedText as="p" className="text-amber-400 text-sm font-medium uppercase tracking-wider mb-6">
          A Technical POV by Vijayakumar G A
        </AnimatedText>
        <AnimatedText as="h1" className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" delay={0.1}>
          AI as the Operating System of Mastery
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-white/60" delay={0.2}>
          Rethinking How Humans and Machines Learn Together
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function ThesisSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-amber-950 via-slate-950 to-slate-950 p-12">
      <div className="max-w-5xl w-full">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <AnimatedText as="p" className="text-amber-400 text-sm font-medium uppercase tracking-wider mb-4">
              Thesis
            </AnimatedText>
            <AnimatedText as="h2" className="text-3xl font-bold text-white leading-snug mb-4" delay={0.1}>
              AI as the operating system of personalised mastery
            </AnimatedText>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-lg text-white/70 leading-relaxed"
            >
              A system that continuously <span className="text-amber-400 font-semibold">senses</span>, <span className="text-amber-400 font-semibold">adapts</span>, and <span className="text-amber-400 font-semibold">supports deep understanding</span> — where humans and machines collaborate to accelerate comprehension, not merely increase speed.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="space-y-3"
          >
            <p className="text-white/40 text-xs uppercase tracking-wider">Core Capabilities</p>
            {[
              { label: 'Sense', desc: 'Capture rich cognitive signals' },
              { label: 'Reason', desc: 'Diagnose gaps & misconceptions' },
              { label: 'Adapt', desc: 'Personalise learning paths' },
              { label: 'Collaborate', desc: 'Augment human educators' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.3 }}
                className="bg-white/5 rounded-lg p-3"
              >
                <p className="text-amber-400 font-semibold text-sm">{item.label}</p>
                <p className="text-white/50 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function ProblemSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-12">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-3xl font-bold text-white mb-8">
          The Problem with AI in Education Today
        </AnimatedText>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-red-400 text-xs uppercase tracking-wider mb-4">Current State</p>
            <div className="space-y-4">
              {[
                { title: 'AI as Accessory', desc: 'Features bolted onto human-centric models — not rethinking the core' },
                { title: 'Wrong Optimisation Target', desc: 'Speed, scale, efficiency — but not what deep learning actually is' },
                { title: 'Same Process, Faster', desc: 'Automate the existing workflow instead of redesigning for outcomes' },
                { title: 'Shallow Signals', desc: 'Clicks, time-on-page, completion rates — none reveal understanding' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.3 }}
                  className="flex gap-3"
                >
                  <span className="text-red-400 mt-0.5">✗</span>
                  <div>
                    <p className="text-white font-medium text-sm">{item.title}</p>
                    <p className="text-white/50 text-xs">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <p className="text-amber-400 text-xs uppercase tracking-wider mb-4">The Reframe</p>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 mb-4">
              <p className="text-white font-medium mb-2">2 Hour Learning&apos;s Approach</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Reframe the <span className="text-amber-400">entire operating logic</span> around data, feedback, and adaptation. The goal isn&apos;t faster — it&apos;s <span className="text-amber-400">better</span>.
              </p>
            </div>
            <div className="space-y-2">
              {[
                'AI as the foundation, not a layer',
                'Mastery over velocity',
                'Rich signals over crude metrics',
                'Continuous adaptation over batch delivery',
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.06, duration: 0.3 }}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <span className="text-emerald-400">✓</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

// ============================================================================
// DEEP MASTERY
// ============================================================================

export function DeepMasteryIntroSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 p-12">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-3xl font-bold text-white mb-2">
          What Deep Mastery Really Means
        </AnimatedText>
        <AnimatedText as="p" className="text-base text-white/50 mb-8" delay={0.1}>
          Moving beyond surface markers to rich learning signals
        </AnimatedText>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: GitBranch,
              title: 'Transferability',
              desc: 'Apply concepts in new contexts',
              details: [
                'Exponential growth → compound interest, viral spread, algorithms',
                'Measure: can they use the idea meaningfully?',
                'Not "pass the test" but "solve new problems"',
              ],
            },
            {
              icon: Target,
              title: 'Error Pattern Recognition',
              desc: 'Distinguish slips from misconceptions',
              details: [
                'Slip: isolated error, context-specific',
                'Misconception: replicates across contexts',
                'Reveals how student thinks, not just what they answered',
              ],
            },
            {
              icon: Gauge,
              title: 'Confidence Alignment',
              desc: 'Know that you know',
              details: [
                'Correct + low confidence = guesswork',
                'Incorrect + high confidence = entrenched gap',
                'Mastery = confidence matches competence',
              ],
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-xl p-5"
            >
              <item.icon className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-white/50 text-xs mb-3">{item.desc}</p>
              <div className="space-y-1.5">
                {item.details.map((detail, j) => (
                  <p key={j} className="text-white/60 text-xs flex items-start gap-1.5">
                    <span className="text-amber-400/60 mt-0.5">•</span>
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-center text-white/40 text-sm mt-6"
        >
          AI systems optimising for these attributes create deeper thinkers, not just faster learners
        </motion.p>
      </div>
    </Slide>
  );
}

export function MasteryInsightSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-12">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-3xl font-bold text-white mb-8">
          Mastery ≠ Speed
        </AnimatedText>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-red-500/10 border border-red-500/20 rounded-xl p-5"
          >
            <p className="text-red-400 text-xs uppercase tracking-wider mb-3">Traditional Metrics (Lagging)</p>
            <div className="space-y-2">
              {[
                { metric: 'Completion rate', problem: 'Measures coverage, not comprehension' },
                { metric: 'Time on task', problem: 'Assumes time = learning (it doesn\'t)' },
                { metric: 'Test scores', problem: 'Snapshot without process insight' },
                { metric: 'Lessons completed', problem: 'Throughput, not understanding' },
                { metric: 'Seat time', problem: 'Industrial-era proxy metric' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-red-400 text-xs mt-0.5">✗</span>
                  <div>
                    <span className="text-white text-sm">{item.metric}</span>
                    <span className="text-white/40 text-xs ml-2">— {item.problem}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5"
          >
            <p className="text-emerald-400 text-xs uppercase tracking-wider mb-3">Mastery Signals (Leading)</p>
            <div className="space-y-2">
              {[
                { metric: 'Transfer success rate', signal: 'Apply in novel contexts' },
                { metric: 'Error structure shift', signal: 'Misconceptions → slips → mastery' },
                { metric: 'Confidence-competence alignment', signal: 'Knows that they know' },
                { metric: 'Generalisation patterns', signal: 'Performance across problem families' },
                { metric: 'Cognitive load trajectory', signal: 'Effort decreases appropriately' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 text-xs mt-0.5">✓</span>
                  <div>
                    <span className="text-white text-sm">{item.metric}</span>
                    <span className="text-white/40 text-xs ml-2">— {item.signal}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-6 text-center"
        >
          <p className="text-white/50 text-sm">
            Deep mastery rewards <span className="text-white">structured, meaningful progress</span> — even in smaller increments
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

// ============================================================================
// SIGNALS & FEEDBACK
// ============================================================================

export function SignalsSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-3xl font-bold text-white mb-2">
          What the System Must Track
        </AnimatedText>
        <AnimatedText as="p" className="text-base text-white/50 mb-6" delay={0.1}>
          Three classes of signals that reflect understanding — not activity
        </AnimatedText>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              num: '01',
              title: 'Error Patterns',
              desc: 'Errors have structure — they\'re informative data, not point losses',
              matrix: [
                { type: 'Slip', pattern: 'Isolated, context-specific', action: 'Minor reinforcement' },
                { type: 'Misconception', pattern: 'Replicates across contexts', action: 'Reteach fundamentals' },
                { type: 'Gap', pattern: 'Consistent failure in domain', action: 'Backtrack in curriculum' },
              ],
            },
            {
              num: '02',
              title: 'Confidence Scores',
              desc: 'Reality check on internalisation — not just correctness',
              matrix: [
                { type: 'Correct + High', pattern: 'Genuine understanding', action: 'Advance to transfer' },
                { type: 'Correct + Low', pattern: 'Lucky guess', action: 'Reinforce & verify' },
                { type: 'Incorrect + High', pattern: 'Entrenched misconception', action: 'Priority intervention' },
              ],
            },
            {
              num: '03',
              title: 'Transfer Success',
              desc: 'Can they apply it in a new context? The essence of real understanding',
              matrix: [
                { type: 'Same context', pattern: 'Basic recall', action: 'Necessary but insufficient' },
                { type: 'Near transfer', pattern: 'Similar problem type', action: 'Building fluency' },
                { type: 'Far transfer', pattern: 'Novel application', action: 'True mastery indicator' },
              ],
            },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amber-400 text-lg font-bold">{item.num}</span>
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
              <p className="text-white/50 text-xs mb-3">{item.desc}</p>
              <div className="space-y-2">
                {item.matrix.map((row, j) => (
                  <div key={j} className="bg-white/5 rounded p-2">
                    <div className="flex justify-between items-start">
                      <span className="text-amber-400/80 text-xs font-medium">{row.type}</span>
                      <span className="text-emerald-400/60 text-xs">{row.action}</span>
                    </div>
                    <p className="text-white/40 text-xs">{row.pattern}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

// ============================================================================
// AI + HUMAN COLLABORATION
// ============================================================================

export function CollaborationSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-12">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-3xl font-bold text-white mb-6">
          AI + Human: Partnership, Not Replacement
        </AnimatedText>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-5 h-5 text-amber-400" />
              <h3 className="text-white font-semibold">AI Handles</h3>
              <span className="text-white/30 text-xs ml-auto">Scale & Speed</span>
            </div>
            <div className="space-y-3">
              {[
                { task: 'Signal interpretation', detail: 'Pattern detection across thousands of learners' },
                { task: 'Pathway adaptation', detail: 'Real-time adjustment based on performance' },
                { task: 'Feedback loops', detail: 'Personalised, immediate, consistent' },
                { task: 'Content synthesis', detail: 'Generate variations, scaffolding, examples' },
                { task: 'Diagnostic reasoning', detail: 'Distinguish misconceptions from gaps' },
                { task: 'Progress tracking', detail: 'Longitudinal analysis of mastery signals' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-amber-400 text-xs mt-1">→</span>
                  <div>
                    <span className="text-white text-sm">{item.task}</span>
                    <span className="text-white/40 text-xs ml-1">— {item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-emerald-400" />
              <h3 className="text-white font-semibold">Humans Focus On</h3>
              <span className="text-white/30 text-xs ml-auto">Depth & Meaning</span>
            </div>
            <div className="space-y-3">
              {[
                { task: 'Inspiration', detail: 'Kindle curiosity — AI can\'t evoke wonder' },
                { task: 'Emotional perception', detail: 'Read socio-emotional cues AI misses' },
                { task: 'Meta-cognitive coaching', detail: 'Teach how to learn, not just what' },
                { task: 'Purpose & motivation', detail: 'Connect learning to meaning' },
                { task: 'Creative leaps', detail: 'Recognise insights beyond curriculum' },
                { task: 'Deep discussion', detail: 'Nuanced dialogue, Socratic method' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 text-xs mt-1">→</span>
                  <div>
                    <span className="text-white text-sm">{item.task}</span>
                    <span className="text-white/40 text-xs ml-1">— {item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-5 bg-white/5 rounded-lg p-4 text-center"
        >
          <p className="text-white/60 text-sm">
            <span className="text-white font-medium">Integration principle:</span> AI frees educators from repetitive assessment work → humans focus on high-leverage tasks that nurture lifelong learners
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

// ============================================================================
// ARCHITECTURE (DETAILED)
// ============================================================================

export function ArchitectureOverviewSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-amber-950 via-slate-950 to-slate-950 p-16">
      <div className="max-w-5xl w-full text-center">
        <AnimatedText as="p" className="text-amber-400 text-sm font-medium uppercase tracking-wider mb-4">
          Technical Deep Dive
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl md:text-5xl font-bold text-white mb-6" delay={0.1}>
          Architecting the AI Learning OS
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-white/60 mb-12" delay={0.2}>
          A continuous sense-decide-adapt loop — not a feature set
        </AnimatedText>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Database, label: 'Signal Layer', color: 'text-blue-400' },
            { icon: Brain, label: 'Decision Engine', color: 'text-purple-400' },
            { icon: Zap, label: 'Adaptation Layer', color: 'text-amber-400' },
            { icon: Users, label: 'Human Interface', color: 'text-emerald-400' },
          ].map((layer, i) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <layer.icon className={`w-10 h-10 ${layer.color} mb-3 mx-auto`} />
              <p className="text-white font-medium text-sm">{layer.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Slide>
  );
}

export function SignalLayerSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-blue-950 via-slate-950 to-slate-950 p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-blue-500/20 rounded-xl">
            <Database className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">Layer 1</p>
            <AnimatedText as="h2" className="text-3xl font-bold text-white">
              Signal Layer — The Sensory Cortex
            </AnimatedText>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <AnimatedText as="h3" className="text-xl font-semibold text-white mb-4" delay={0.1}>
              What It Captures
            </AnimatedText>
            <div className="space-y-4">
              {[
                { label: 'Error Structures', desc: 'Patterns over time revealing conceptual gaps' },
                { label: 'Derived Confidence', desc: 'How sure the learner is in their understanding' },
                { label: 'Transfer Success', desc: 'Performance on context-varied problems' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="bg-white/5 rounded-lg p-4"
                >
                  <p className="text-blue-400 font-semibold">{item.label}</p>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Key Design Principles</h3>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 space-y-4">
              <div>
                <p className="text-white font-medium mb-1">Normalise & Contextualise</p>
                <p className="text-white/60 text-sm">Don&apos;t just log events — link them to learner state and curriculum graph</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Timestamped Traces</p>
                <p className="text-white/60 text-sm">Enable longitudinal analysis of cognitive progression</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Format for Reasoning</p>
                <p className="text-white/60 text-sm">Output must feed directly into decision engine</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function DecisionEngineSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-purple-950 via-slate-950 to-slate-950 p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-purple-500/20 rounded-xl">
            <Brain className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <p className="text-purple-400 text-sm font-medium uppercase tracking-wider">Layer 2</p>
            <AnimatedText as="h2" className="text-3xl font-bold text-white">
              Decision Engine — The Cortex of Adaptation
            </AnimatedText>
          </div>
        </div>

        <AnimatedText as="p" className="text-lg text-white/70 mb-8" delay={0.1}>
          The heart of the OS: continuously evaluates learner state and decides what to do next
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <h3 className="text-white font-semibold mb-4">Questions It Must Answer</h3>
            <ul className="space-y-3">
              {[
                'Is the learner stuck on a misconception or simply unpracticed?',
                'Does performance drop indicate fatigue, confusion, or deeper gap?',
                'When to challenge with transfer tasks?',
                'When to recycle foundational material?',
              ].map((q, i) => (
                <li key={i} className="flex items-start gap-2 text-white/70">
                  <span className="text-purple-400 mt-1">?</span>
                  {q}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <h3 className="text-white font-semibold mb-4">Composite Architecture</h3>
            <div className="space-y-3">
              {[
                { label: 'Probabilistic Models', desc: 'Confidence & prediction' },
                { label: 'Diagnostic Models', desc: 'Error structure analysis' },
                { label: 'Generative Components', desc: 'Content synthesis' },
                { label: 'Policy Logic', desc: 'Action selection' },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-3 bg-purple-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <div>
                    <span className="text-white font-medium">{item.label}</span>
                    <span className="text-white/50 text-sm"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-center text-purple-400/80 mt-8 text-sm"
        >
          Components must be decoupled but orchestrated — replaceable without destabilising the system
        </motion.p>
      </div>
    </Slide>
  );
}

export function AdaptationLayerSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-amber-950 via-slate-950 to-slate-950 p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-amber-500/20 rounded-xl">
            <Zap className="w-8 h-8 text-amber-400" />
          </div>
          <div>
            <p className="text-amber-400 text-sm font-medium uppercase tracking-wider">Layer 3</p>
            <AnimatedText as="h2" className="text-3xl font-bold text-white">
              Adaptation Layer — The Actuator
            </AnimatedText>
          </div>
        </div>

        <AnimatedText as="p" className="text-lg text-white/70 mb-8" delay={0.1}>
          Translates decisions into experiences — the execution arm
        </AnimatedText>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Settings, title: 'Synthesise', desc: 'Generate practice problems with controlled variation' },
            { icon: Layers, title: 'Craft', desc: 'Match explanation modalities to learner preferences' },
            { icon: Network, title: 'Integrate', desc: 'Route to human teachers when AI confidence is low' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
            >
              <item.icon className="w-8 h-8 text-amber-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6"
        >
          <h3 className="text-amber-400 font-semibold mb-4">Guiding Principles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-white font-medium">Composability</p>
              <p className="text-white/60 text-sm">Modules reusable across different cognitive paths</p>
            </div>
            <div>
              <p className="text-white font-medium">Versioned Adaptability</p>
              <p className="text-white/60 text-sm">All changes logged and reversible</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

export function HumanInterfaceSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-950 p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-emerald-500/20 rounded-xl">
            <Users className="w-8 h-8 text-emerald-400" />
          </div>
          <div>
            <p className="text-emerald-400 text-sm font-medium uppercase tracking-wider">Layer 4</p>
            <AnimatedText as="h2" className="text-3xl font-bold text-white">
              Human Interface — Bridge to Purpose
            </AnimatedText>
          </div>
        </div>

        <AnimatedText as="p" className="text-lg text-white/70 mb-8" delay={0.1}>
          Not an afterthought — a first-class feedback port into the OS
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <h3 className="text-white font-semibold mb-4">What Humans Observe</h3>
            <p className="text-white/60 mb-4">Patterns AI cannot reliably infer:</p>
            <ul className="space-y-3">
              {[
                'Emotional states & engagement shifts',
                'Long-term goal changes',
                'Creative leaps beyond curriculum',
                'Social dynamics & peer influence',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-white/70">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <h3 className="text-white font-semibold mb-4">Interface Requirements</h3>
            <div className="space-y-4">
              <div className="bg-emerald-500/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <p className="text-white font-medium">High-Signal Alerts</p>
                </div>
                <p className="text-white/60 text-sm">No noise — only actionable insights</p>
              </div>
              <div className="bg-emerald-500/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Brain className="w-4 h-4 text-emerald-400" />
                  <p className="text-white font-medium">Explainable Recommendations</p>
                </div>
                <p className="text-white/60 text-sm">Why was this suggestion made?</p>
              </div>
              <div className="bg-emerald-500/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <p className="text-white font-medium">Pedagogical Respect</p>
                </div>
                <p className="text-white/60 text-sm">Align with human judgement, don&apos;t replace it</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function ArchitectureDiagramSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-3xl font-bold text-white mb-8 text-center">
          The Complete Loop
        </AnimatedText>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          {/* Flow diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {[
              { icon: Database, label: 'Signal', sublabel: 'Sense', color: 'blue' },
              { icon: Brain, label: 'Decision', sublabel: 'Reason', color: 'purple' },
              { icon: Zap, label: 'Adaptation', sublabel: 'Act', color: 'amber' },
              { icon: Users, label: 'Human', sublabel: 'Enrich', color: 'emerald' },
            ].map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                className="flex items-center gap-2"
              >
                <div className={`bg-${layer.color}-500/20 border border-${layer.color}-500/30 rounded-xl p-4 text-center min-w-[120px]`}
                  style={{
                    backgroundColor: layer.color === 'blue' ? 'rgba(59, 130, 246, 0.2)' :
                      layer.color === 'purple' ? 'rgba(168, 85, 247, 0.2)' :
                      layer.color === 'amber' ? 'rgba(245, 158, 11, 0.2)' :
                      'rgba(16, 185, 129, 0.2)',
                    borderColor: layer.color === 'blue' ? 'rgba(59, 130, 246, 0.3)' :
                      layer.color === 'purple' ? 'rgba(168, 85, 247, 0.3)' :
                      layer.color === 'amber' ? 'rgba(245, 158, 11, 0.3)' :
                      'rgba(16, 185, 129, 0.3)',
                  }}
                >
                  <layer.icon className={`w-6 h-6 mx-auto mb-2`}
                    style={{
                      color: layer.color === 'blue' ? '#60a5fa' :
                        layer.color === 'purple' ? '#c084fc' :
                        layer.color === 'amber' ? '#fbbf24' :
                        '#34d399'
                    }}
                  />
                  <p className="text-white font-medium text-sm">{layer.label}</p>
                  <p className="text-white/50 text-xs">{layer.sublabel}</p>
                </div>
                {i < 3 && (
                  <span className="text-white/30 text-2xl hidden md:block">→</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Feedback loop arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="text-center mt-6"
          >
            <p className="text-white/40 text-sm">↻ Continuous feedback loop</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-white/70 text-lg">
            The OS doesn&apos;t just deliver content — it <span className="text-amber-400 font-semibold">senses</span>, <span className="text-purple-400 font-semibold">reasons</span>, <span className="text-amber-400 font-semibold">adapts</span>, and <span className="text-emerald-400 font-semibold">collaborates</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

// ============================================================================
// METRICS
// ============================================================================

export function MetricsSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-12">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-3xl font-bold text-white mb-2">
          Measuring What Matters
        </AnimatedText>
        <AnimatedText as="p" className="text-base text-white/50 mb-6" delay={0.1}>
          Leading indicators that drive improvement — metrics feed back into the OS
        </AnimatedText>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              title: 'Transfer Success Rate',
              color: 'amber',
              what: 'Apply concepts in novel contexts',
              why: 'Most direct indicator of deep understanding',
              how: 'Track performance across problem families with controlled variation',
            },
            {
              title: 'Confidence-Competence Alignment',
              color: 'emerald',
              what: 'Self-assessment matches reality',
              why: 'Reveals internalisation vs. guessing',
              how: 'Capture confidence pre-answer, correlate with correctness over time',
            },
            {
              title: 'Error Structure Shift',
              color: 'blue',
              what: 'Misconceptions → slips → mastery',
              why: 'Shows learners reconstructing mental models',
              how: 'Classify error types, track distribution evolution',
            },
            {
              title: 'Cognitive Load Trajectory',
              color: 'purple',
              what: 'Effort decreases appropriately',
              why: 'Friction reduced without trivialising',
              how: 'Response time, hesitation patterns, help-seeking behaviour',
            },
          ].map((metric, i) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            >
              <div className="w-2 h-2 rounded-full mb-2"
                style={{
                  backgroundColor: metric.color === 'amber' ? '#fbbf24' :
                    metric.color === 'emerald' ? '#34d399' :
                    metric.color === 'blue' ? '#60a5fa' : '#c084fc'
                }}
              />
              <h3 className="text-white font-semibold text-sm mb-3">{metric.title}</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-white/30 text-xs">What</p>
                  <p className="text-white/70 text-xs">{metric.what}</p>
                </div>
                <div>
                  <p className="text-white/30 text-xs">Why</p>
                  <p className="text-white/70 text-xs">{metric.why}</p>
                </div>
                <div>
                  <p className="text-white/30 text-xs">How</p>
                  <p className="text-white/70 text-xs">{metric.how}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-5 bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-center"
        >
          <p className="text-amber-400 text-sm font-medium">
            The operating system measures learning with the same loop that drives learning
          </p>
          <p className="text-white/50 text-xs mt-1">Metrics → Signal Layer → Decision Engine → Adaptation → New Metrics</p>
        </motion.div>
      </div>
    </Slide>
  );
}

// ============================================================================
// 2 HOUR LEARNING RESULTS
// ============================================================================

export function ResultsSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-950 p-12">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-3xl font-bold text-white mb-6">
          2 Hour Learning: The Model in Practice
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-emerald-400 text-xs uppercase tracking-wider mb-4">Outcomes</p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { value: '2 hrs', label: 'Academic time', sub: 'AI-guided' },
                { value: 'Top 1-2%', label: 'National rank', sub: 'Standardised' },
                { value: '4+ hrs', label: 'Enrichment', sub: 'Freed daily' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.3 }}
                  className="bg-white/5 border border-white/10 rounded-lg p-3 text-center"
                >
                  <p className="text-emerald-400 text-2xl font-bold">{stat.value}</p>
                  <p className="text-white text-xs">{stat.label}</p>
                  <p className="text-white/40 text-xs">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="space-y-2"
            >
              {[
                'Students start exactly where they are, not grade-level',
                'Misconceptions addressed before they compound',
                'Human coaches provide mentorship & emotional support',
                'Remaining time for life skills & passion projects',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-white/60 text-sm">
                  <span className="text-emerald-400 text-xs mt-0.5">✓</span>
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <p className="text-white/40 text-xs uppercase tracking-wider mb-4">Architecture Alignment</p>
            <div className="space-y-3">
              {[
                { principle: 'True competence over crude completion', impl: 'Mastery-based progression, not time-based' },
                { principle: 'Confidence matched to competence', impl: 'Students know what they know' },
                { principle: 'Dynamic progression', impl: 'Age-independent, skill-dependent advancement' },
                { principle: 'Signal-rich feedback', impl: 'Real-time gap identification & intervention' },
                { principle: 'Human-AI partnership', impl: 'AI tutors + human guides in tandem' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-3">
                  <p className="text-white text-sm font-medium">{item.principle}</p>
                  <p className="text-white/40 text-xs">{item.impl}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

// ============================================================================
// CONCLUSION
// ============================================================================

export function ConclusionSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-3xl font-bold text-white mb-6">
          A Blueprint for the Future
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <motion.blockquote
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-lg text-white/90 leading-relaxed border-l-4 border-amber-500 pl-4 mb-6"
            >
              Education can be personalised, measured in meaningful signals, and deeply transformative — without being tied to seat time or legacy structures.
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="space-y-3"
            >
              <p className="text-white/40 text-xs uppercase tracking-wider">What This Requires</p>
              {[
                'Bold product leadership',
                'Architectural mindset — AI as the OS, not a feature',
                'Continuous sense-reason-adapt loop',
                'Human-AI collaboration by design',
                'Metrics that drive learning, not just measure it',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                  <span className="text-amber-400">→</span>
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5"
          >
            <p className="text-amber-400 text-xs uppercase tracking-wider mb-4">The Shift</p>
            <div className="space-y-3">
              {[
                { from: '6-hour school day', to: '2 hours of focused mastery' },
                { from: 'Age-based progression', to: 'Competency-based advancement' },
                { from: 'One-size curriculum', to: 'Personalised pathways' },
                { from: 'Test scores', to: 'Transfer success & confidence alignment' },
                { from: 'Teacher as lecturer', to: 'Guide as coach & mentor' },
                { from: 'AI as feature', to: 'AI as operating system' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="text-white/40 line-through text-xs">{item.from}</span>
                  <span className="text-white/30">→</span>
                  <span className="text-white">{item.to}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function POVEndSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-amber-950 via-slate-950 to-slate-950 p-16">
      <div className="max-w-4xl text-center">
        <AnimatedText as="p" className="text-white/40 text-sm uppercase tracking-wider mb-4">
          Written by
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-white mb-2" delay={0.1}>
          Vijayakumar G A
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-amber-400 mb-8" delay={0.2}>
          AI-Native Product Architect
        </AnimatedText>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <Link
            href="/resume-2hr"
            className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400 hover:bg-amber-500/20 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>View Resume Deck</span>
          </Link>
        </motion.div>
      </div>
    </Slide>
  );
}
