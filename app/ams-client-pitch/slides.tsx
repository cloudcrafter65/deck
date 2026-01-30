'use client';

import { Slide } from '@/components/core';
import { AnimatedText } from '@/components/primitives';
import { motion } from 'framer-motion';
import {
  Clock,
  TrendingDown,
  Users,
  ShieldAlert,
  Frown,
  Scale,
  Brain,
  UserMinus,
  Cloud,
  Puzzle,
  ShieldCheck,
  Database,
  Bot,
  RefreshCw,
  UserCheck,
  Target,
  Layers,
  Handshake,
  Map,
  FileSearch,
  Compass,
  Rocket,
  Settings,
  ArrowRight,
  CheckCircle2,
  Building2,
  Landmark,
  ShoppingCart,
  Factory,
  Heart,
  Calendar,
  MessageCircle,
  ChevronRight,
} from 'lucide-react';

// Design System
// Primary: #0F172A (Slate 900) - Dark backgrounds
// Secondary: #1E293B (Slate 800) - Card backgrounds
// Accent: #0EA5E9 (Sky 500) - Primary accent
// Accent Alt: #06B6D4 (Cyan 500) - Secondary accent
// Light: #F8FAFC (Slate 50) - Light backgrounds
// Text: #1E293B (Slate 800) - Dark text
// Muted: #64748B (Slate 500) - Muted text

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ============================================
// TITLE
// ============================================

export function TitleSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="text-center z-10 px-8 max-w-5xl">
        <AnimatedText delay={0.1} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium">
            <Layers className="w-4 h-4" />
            Application Modernization Services
          </span>
        </AnimatedText>

        <AnimatedText as="h1" className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" delay={0.2}>
          Turn Legacy Constraints Into
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">
            Competitive Advantage
          </span>
        </AnimatedText>

        <AnimatedText as="p" className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed" delay={0.4}>
          A pragmatic approach to modernizing critical business applications through incremental, outcome-focused transformations
        </AnimatedText>

        <AnimatedText delay={0.6} className="flex flex-wrap items-center justify-center gap-4">
          <span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
            8-12 Week Sprints
          </span>
          <span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
            Senior Practitioners
          </span>
          <span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
            Measurable Outcomes
          </span>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// PROBLEM
// ============================================

export function ProblemSlide() {
  const painPoints = [
    {
      icon: TrendingDown,
      stat: '60-80%',
      title: 'Budget Trapped in Maintenance',
      desc: 'IT spend goes to "keeping the lights on" for legacy systems, leaving little room for innovation',
    },
    {
      icon: Clock,
      stat: 'Months',
      title: 'Painfully Slow Release Cycles',
      desc: 'Changes that should take days stretch into months while competitors ship weekly',
    },
    {
      icon: Users,
      stat: 'Shrinking',
      title: 'Concentrated Knowledge Risk',
      desc: 'Critical system understanding sits with a shrinking group of specialists',
    },
    {
      icon: ShieldAlert,
      stat: 'Growing',
      title: 'Compliance Exposure',
      desc: 'Security audits and regulatory reviews flag gaps that older platforms cannot address',
    },
    {
      icon: Frown,
      stat: 'Frustrated',
      title: 'Poor User Experience',
      desc: 'Customers and staff forced through fragmented, manual journeys that no longer meet expectations',
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-slate-50 p-8 md:p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-sky-600 font-semibold mb-4">
          The Reality
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" delay={0.1}>
          Why &quot;Good Enough&quot; Is No Longer Enough
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-slate-600 mb-10 max-w-3xl" delay={0.15}>
          Across APAC, enterprises are racing to deliver on digital, data, and AI initiatives—but a familiar problem keeps getting in the way.
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              variants={fadeInUp}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-200 ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 mb-1">{point.stat}</p>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{point.title}</h3>
                  <p className="text-sm text-slate-600">{point.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-slate-900 rounded-2xl p-6 text-white"
        >
          <p className="text-lg">
            <strong className="text-sky-400">The cost is not just technical.</strong> It shows up as lost revenue, higher cost-to-serve, operational incidents, and missed opportunities—like AI-powered products that cannot be delivered because underlying systems aren&apos;t ready.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

// ============================================
// PRESSURE POINTS
// ============================================

export function PressurePointsSlide() {
  const pressures = [
    {
      icon: Scale,
      title: 'Regulatory Tailwinds',
      desc: 'APRA, MAS, HKMA, and sector regulators across the region are raising the bar on operational resilience, data sovereignty, and cyber hygiene—requirements that legacy architectures struggle to meet.',
      color: 'amber',
    },
    {
      icon: Brain,
      title: 'AI Readiness Gap',
      desc: 'Organizations without modern, API-first, data-accessible application estates cannot deploy machine learning, intelligent automation, or generative AI against their operational data.',
      color: 'purple',
    },
    {
      icon: UserMinus,
      title: 'Talent Scarcity',
      desc: 'The pool of engineers who understand COBOL, monolithic architectures, and decades-old middleware shrinks every year, creating existential risk for systems that still run core business processes.',
      color: 'red',
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-sky-400 font-semibold mb-4">
          Intensifying Pressures
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl md:text-5xl font-bold text-white mb-12" delay={0.1}>
          The pressure points are intensifying
        </AnimatedText>

        <div className="space-y-6">
          {pressures.map((pressure, i) => (
            <motion.div
              key={pressure.title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  pressure.color === 'amber' ? 'bg-amber-500/20' :
                  pressure.color === 'purple' ? 'bg-purple-500/20' : 'bg-red-500/20'
                }`}>
                  <pressure.icon className={`w-7 h-7 ${
                    pressure.color === 'amber' ? 'text-amber-400' :
                    pressure.color === 'purple' ? 'text-purple-400' : 'text-red-400'
                  }`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{pressure.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{pressure.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <p className="text-xl text-cyan-400 font-medium">
            The good news: modernization does not require a multi-year, high-risk &quot;big bang.&quot;
          </p>
          <p className="text-lg text-white/70 mt-2">
            There is a more pragmatic path.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

// ============================================
// VISION
// ============================================

export function VisionSlide() {
  const outcomes = [
    {
      icon: Cloud,
      title: 'Cloud-Ready & Scalable',
      desc: 'Systems that handle peak demand elastically. Infrastructure costs that flex with business volumes.',
    },
    {
      icon: Puzzle,
      title: 'API-First & Composable',
      desc: 'Core capabilities exposed through secure interfaces. New channels and partners plug in quickly.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Compliant by Design',
      desc: 'Modern security controls and audit trails built in. Compliance becomes a byproduct of good architecture.',
    },
    {
      icon: Database,
      title: 'Data-Accessible & Insight-Ready',
      desc: 'Operational data available in near real-time. No more fragile batch jobs or week-old dashboards.',
    },
    {
      icon: Bot,
      title: 'AI & Automation Enabled',
      desc: 'Clean data and modular services make it feasible to apply ML and AI to high-value processes.',
    },
    {
      icon: RefreshCw,
      title: 'Changeable & Resilient',
      desc: 'Teams can ship updates in days, test safely, roll back quickly. Failures are isolated and recovered automatically.',
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white p-8 md:p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-sky-600 font-semibold mb-4">
          The Vision
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" delay={0.1}>
          What Modernized Applications Enable
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-slate-600 mb-10" delay={0.15}>
          Move at the speed of your strategy—not the speed of your oldest system.
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {outcomes.map((outcome) => (
            <motion.div
              key={outcome.title}
              variants={fadeInUp}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 hover:border-sky-300 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center mb-4">
                <outcome.icon className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{outcome.title}</h3>
              <p className="text-sm text-slate-600">{outcome.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl p-6 text-white text-center"
        >
          <p className="text-lg">
            This is not a distant future state requiring years of transformation. It&apos;s achievable through{' '}
            <strong>disciplined, incremental modernization</strong>—each step creating business value while building toward the target architecture.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

// ============================================
// DIFFERENTIATOR
// ============================================

export function DifferentiatorSlide() {
  const differentiators = [
    {
      icon: UserCheck,
      title: 'Senior Practitioners, Directly Engaged',
      desc: 'Our core team leads your engagement from day one through delivery. No bait-and-switch, no offshore handoff to junior resources. You get experienced architects and engineers who have delivered modernization programs across banking, insurance, retail, manufacturing, and government.',
    },
    {
      icon: Target,
      title: 'Right-Sized for Meaningful Outcomes',
      desc: 'We\'re structured for $500K–$2M programs—large enough to deliver real transformation, lean enough to move quickly without the overhead and governance burden of global SI engagements. Our incentives align with your outcomes, not maximizing billable hours.',
    },
    {
      icon: Layers,
      title: 'Pattern Recognition Across Industries',
      desc: 'We\'re not a single-vertical shop. That means we bring proven approaches and hard-won lessons from across sectors, accelerating your program and helping you avoid pitfalls others have already encountered.',
    },
    {
      icon: Handshake,
      title: 'Skin in the Game',
      desc: 'We structure engagements with clear success criteria and phase gates. If the discovery doesn\'t reveal a compelling case for modernization, we\'ll tell you. If a thin-slice sprint isn\'t delivering value, we course-correct or stop.',
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-slate-50 p-8 md:p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-sky-600 font-semibold mb-4">
          Why Us
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" delay={0.1}>
          What Makes Us Different
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-slate-600 mb-10" delay={0.15}>
          Why a boutique firm rather than a global systems integrator?
        </AnimatedText>

        <div className="space-y-4">
          {differentiators.map((diff, i) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0">
                <diff.icon className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{diff.title}</h3>
                <p className="text-sm text-slate-600">{diff.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

// ============================================
// APPROACH OVERVIEW
// ============================================

export function ApproachOverviewSlide() {
  const stages = [
    { num: '1', title: 'Assess', duration: '2-4 weeks', color: 'sky' },
    { num: '2', title: 'Blueprint', duration: '3-4 weeks', color: 'cyan' },
    { num: '3', title: 'Sprint', duration: '8-12 weeks', color: 'emerald' },
    { num: '4', title: 'Continuous', duration: 'Ongoing', color: 'purple' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-16 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-5xl w-full z-10">
        <AnimatedText className="text-sm uppercase tracking-widest text-sky-400 font-semibold mb-4 text-center">
          Our Approach
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl md:text-5xl font-bold text-white mb-4 text-center" delay={0.1}>
          Pragmatic Modernization in Four Stages
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-slate-300 mb-12 text-center max-w-3xl mx-auto" delay={0.15}>
          Turn legacy constraints into competitive advantage through 8–12 week modernization &quot;thin slices&quot; that deliver real outcomes and build momentum.
        </AnimatedText>

        <div className="flex items-center justify-center gap-3 mb-8">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.num}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 text-center w-44">
                <p className={`text-4xl font-bold mb-2 ${
                  stage.color === 'sky' ? 'text-sky-400' :
                  stage.color === 'cyan' ? 'text-cyan-400' :
                  stage.color === 'emerald' ? 'text-emerald-400' : 'text-purple-400'
                }`}>{stage.num}</p>
                <h3 className="text-lg font-semibold text-white mb-1">{stage.title}</h3>
                <p className="text-sm text-white/60">{stage.duration}</p>
              </div>
              {i < 3 && (
                <ArrowRight className="hidden md:block w-5 h-5 text-white/40 flex-shrink-0" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-slate-400 text-center"
        >
          <strong className="text-white">Big enough to matter, small enough to manage.</strong> Each sprint delivers measurable improvement, not just technical artifacts.
        </motion.p>
      </div>
    </Slide>
  );
}

// ============================================
// STAGE 1
// ============================================

export function Stage1Slide() {
  const deliverables = [
    'Executive summary with business case and recommended sequencing',
    'Application portfolio heatmap showing criticality vs. technical debt',
    'Recommendations for first 1–2 thin-slice initiatives with indicative scope and success criteria',
  ];

  const activities = [
    { title: 'Map Your Portfolio', desc: 'Against business criticality, technical health, operational risk, and run cost' },
    { title: 'Identify Value Blocks', desc: 'Where legacy is directly blocking revenue growth, customer experience, compliance, or AI initiatives' },
    { title: 'Define Options', desc: 'Re-platform, refactor, re-architect, or selective rebuild for priority systems' },
    { title: 'Prioritize Roadmap', desc: '12–24 month modernization roadmap balancing quick wins with structural improvements' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white p-8 md:p-16">
      <div className="max-w-6xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center">
            <span className="text-3xl font-bold text-sky-600">1</span>
          </div>
          <div>
            <AnimatedText className="text-sm uppercase tracking-widest text-sky-600 font-semibold">
              Stage One
            </AnimatedText>
            <AnimatedText as="h2" className="text-3xl font-bold text-slate-900" delay={0.1}>
              Rapid Modernization Assessment & Roadmap
            </AnimatedText>
          </div>
          <span className="ml-auto px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
            2-4 weeks
          </span>
        </div>

        <AnimatedText as="p" className="text-lg text-slate-600 mb-8" delay={0.15}>
          Working with your technology and business leaders to build a clear picture and prioritized plan.
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Compass className="w-5 h-5 text-sky-600" />
              What We Do
            </h3>
            <div className="space-y-3">
              {activities.map((activity, i) => (
                <div key={activity.title} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <h4 className="font-medium text-slate-900 mb-1">{activity.title}</h4>
                  <p className="text-sm text-slate-600">{activity.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <FileSearch className="w-5 h-5 text-sky-600" />
              Deliverables
            </h3>
            <div className="bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl p-6 text-white">
              <ul className="space-y-4">
                {deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

// ============================================
// STAGE 2
// ============================================

export function Stage2Slide() {
  const examples = [
    'Customer onboarding or self-service journey currently blocked by legacy constraints',
    'API exposure from a core system to enable new channels or partner integration',
    'Modernizing a regulatory reporting process that relies on manual work and fragile scripts',
    'Migrating a high-cost, high-risk monolith component to cloud-native services',
  ];

  return (
    <Slide className="flex items-center justify-center bg-slate-50 p-8 md:p-16">
      <div className="max-w-6xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center">
            <span className="text-3xl font-bold text-cyan-600">2</span>
          </div>
          <div>
            <AnimatedText className="text-sm uppercase tracking-widest text-cyan-600 font-semibold">
              Stage Two
            </AnimatedText>
            <AnimatedText as="h2" className="text-3xl font-bold text-slate-900" delay={0.1}>
              Modernization Blueprint & First Thin-Slice Design
            </AnimatedText>
          </div>
          <span className="ml-auto px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
            3-4 weeks
          </span>
        </div>

        <AnimatedText as="p" className="text-lg text-slate-600 mb-8" delay={0.15}>
          Turn the roadmap into a concrete execution plan with a high-impact first slice.
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <Map className="w-8 h-8 text-cyan-600 mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Target Architecture</h3>
            <p className="text-sm text-slate-600">
              Refine the architecture for applications, integration, data, and security—aligned with your cloud strategy and vendor ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <Target className="w-8 h-8 text-cyan-600 mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Thin-Slice Selection</h3>
            <p className="text-sm text-slate-600">
              Select a single, high-impact use case for the first thin slice that demonstrates value quickly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <Settings className="w-8 h-8 text-cyan-600 mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Delivery Governance</h3>
            <p className="text-sm text-slate-600">
              Co-design team structure, working agreements, KPIs, risk management, and escalation paths.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-900 rounded-2xl p-6 text-white"
        >
          <h3 className="text-lg font-semibold mb-4">Typical First Thin-Slice Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {examples.map((example, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/5 rounded-lg p-3">
                <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">{example}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

// ============================================
// STAGE 3
// ============================================

export function Stage3Slide() {
  const patterns = [
    { title: 'Strangler-Fig', desc: 'Incrementally extract modern services from monoliths' },
    { title: 'API Gateway', desc: 'Integration refactoring to reduce point-to-point complexity' },
    { title: 'Containerization', desc: 'Cloud re-platforming with minimal disruption' },
    { title: 'UX Uplift', desc: 'Workflow improvements where they unlock clear business value' },
  ];

  const practices = [
    'Automated testing',
    'CI/CD pipelines',
    'Feature flags',
    'Progressive rollout',
    'Rollback capabilities',
  ];

  return (
    <Slide className="flex items-center justify-center bg-white p-8 md:p-16">
      <div className="max-w-6xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">
            <span className="text-3xl font-bold text-emerald-600">3</span>
          </div>
          <div>
            <AnimatedText className="text-sm uppercase tracking-widest text-emerald-600 font-semibold">
              Stage Three
            </AnimatedText>
            <AnimatedText as="h2" className="text-3xl font-bold text-slate-900" delay={0.1}>
              8–12 Week Thin-Slice Modernization Sprint
            </AnimatedText>
          </div>
          <span className="ml-auto px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
            8-12 weeks
          </span>
        </div>

        <AnimatedText as="p" className="text-lg text-slate-600 mb-8" delay={0.15}>
          A focused sprint that&apos;s big enough to matter, small enough to manage.
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Proven Patterns</h3>
            <div className="grid grid-cols-2 gap-3">
              {patterns.map((pattern) => (
                <div key={pattern.title} className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl p-4 border border-emerald-200">
                  <h4 className="font-medium text-slate-900 mb-1">{pattern.title}</h4>
                  <p className="text-sm text-slate-600">{pattern.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-4">De-Risk Through Modern Practices</h3>
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <div className="flex flex-wrap gap-2 mb-4">
                {practices.map((practice) => (
                  <span key={practice} className="px-3 py-1.5 bg-white/10 rounded-full text-sm">
                    {practice}
                  </span>
                ))}
              </div>
              <p className="text-sm text-white/70">
                Regular demos, steering sessions, and business stakeholder involvement ensure progress is visible and feedback is incorporated.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl p-6 text-white"
        >
          <h3 className="text-lg font-semibold mb-2">Outcome</h3>
          <p>
            A <strong>live, measurable improvement</strong>—not just a technical artifact. Examples: faster processing times, reduced manual effort, improved customer experience scores, fewer incidents, or new capability enabled for downstream initiatives.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

// ============================================
// STAGE 4
// ============================================

export function Stage4Slide() {
  const elements = [
    {
      title: 'Repeatable Modernization Factory',
      items: ['Pipelines & environments', 'Templates & reference architectures', 'Coding standards'],
    },
    {
      title: 'DevOps & Reliability Practices',
      items: ['Monitoring & alerting', 'SLOs & incident management', 'On-call processes'],
    },
    {
      title: 'Periodic Value Reviews',
      items: ['Assess completed slice outcomes', 'Prioritize next set based on business impact', 'Not just technical wishlists'],
    },
    {
      title: 'Progressive Knowledge Transfer',
      items: ['Your teams lead future modernization', 'Our support focused where it adds most value', 'Build internal capability'],
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-slate-50 p-8 md:p-16">
      <div className="max-w-6xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">
            <span className="text-3xl font-bold text-purple-600">4</span>
          </div>
          <div>
            <AnimatedText className="text-sm uppercase tracking-widest text-purple-600 font-semibold">
              Stage Four
            </AnimatedText>
            <AnimatedText as="h2" className="text-3xl font-bold text-slate-900" delay={0.1}>
              Continuous Modernization & Capability Building
            </AnimatedText>
          </div>
          <span className="ml-auto px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            Ongoing
          </span>
        </div>

        <AnimatedText as="p" className="text-lg text-slate-600 mb-8" delay={0.15}>
          Modernization is not a one-off project. After initial thin slices are in production:
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {elements.map((element) => (
            <motion.div
              key={element.title}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">{element.title}</h3>
              <ul className="space-y-2">
                {element.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-6 text-white text-center"
        >
          <p className="text-lg">
            Over time, this approach allows your organization to <strong>progressively retire legacy components</strong>, simplify your landscape, and <strong>shift budget from maintenance to innovation</strong>.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

// ============================================
// DELIVERY MODEL
// ============================================

export function DeliveryModelSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-sky-400 font-semibold mb-4">
          Delivery Model
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl md:text-5xl font-bold text-white mb-4" delay={0.1}>
          Senior Guidance, Efficient Execution
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-slate-300 mb-10" delay={0.15}>
          Balancing quality, speed, and cost for APAC clients
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-sky-500/20 backdrop-blur rounded-2xl p-6 border border-sky-500/30"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-500/30 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-sky-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Senior Core Team</h3>
            <p className="text-sm text-white/70 mb-4">Onshore / Near-shore</p>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                Work directly with your leadership
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                Assessment & architecture
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                Critical decisions & stakeholder management
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-cyan-500/20 backdrop-blur rounded-2xl p-6 border border-cyan-500/30"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/30 flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Engineering Team</h3>
            <p className="text-sm text-white/70 mb-4">Blended</p>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                Build, test, and automation work
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                Clear technical direction
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                Quality standards enforced
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-emerald-500/20 backdrop-blur rounded-2xl p-6 border border-emerald-500/30"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/30 flex items-center justify-center mb-4">
              <Handshake className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Your Teams</h3>
            <p className="text-sm text-white/70 mb-4">Involved Throughout</p>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                Knowledge transfer & buy-in
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                Building internal capability
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                Not creating new dependencies
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 bg-white/5 rounded-xl p-5 border border-white/10 text-center"
        >
          <p className="text-white/80">
            This model delivers <span className="text-sky-400 font-semibold">enterprise-grade outcomes at a competitive price point</span>, well-suited for programs in the $500K+ range where a series of thin slices form a coherent modernization journey.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

// ============================================
// OUTCOMES
// ============================================

export function OutcomesSlide() {
  const outcomes = [
    { metric: 'Release Cycles', stat: '60–80%', unit: 'faster', detail: 'From quarterly to weekly or continuous delivery' },
    { metric: 'Maintenance Costs', stat: '30–50%', unit: 'reduction', detail: 'Shift from firefighting to proactive engineering' },
    { metric: 'Incidents', stat: '40–60%', unit: 'fewer', detail: 'Better observability and modern practices' },
    { metric: 'Time-to-Market', stat: '50–70%', unit: 'faster', detail: 'Core capabilities via stable APIs' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-sky-400 font-semibold mb-4">
          Typical Outcomes
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl md:text-5xl font-bold text-white mb-4" delay={0.1}>
          Measurable Results
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-slate-300 mb-10" delay={0.15}>
          Organizations consistently achieve significant improvements across key metrics
        </AnimatedText>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={outcome.metric}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
            >
              <p className="text-sm text-slate-400 mb-3">{outcome.metric}</p>
              <p className="text-4xl font-bold text-white mb-1">{outcome.stat}</p>
              <p className="text-sky-400 font-medium mb-3">{outcome.unit}</p>
              <p className="text-sm text-slate-400">{outcome.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-sky-500/20 border border-sky-500/30 rounded-xl p-5"
        >
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-sky-400 flex-shrink-0" />
            <div>
              <p className="text-white font-medium">Compliance Posture: Significantly Improved</p>
              <p className="text-sm text-slate-300">Audit findings reduced, regulatory reporting automated, security controls modernized</p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 text-slate-400 text-sm text-center"
        >
          Even a single well-chosen thin slice can often fund the next step through cost savings or revenue enablement.
        </motion.p>
      </div>
    </Slide>
  );
}

// ============================================
// CASE STUDIES
// ============================================

export function CaseStudiesSlide() {
  const cases = [
    {
      icon: Landmark,
      industry: 'Regional Financial Services',
      challenge: 'Customer onboarding was a 45-minute, branch-dependent process',
      outcome: 'Under 10 minutes, fully digital',
      impact: 'API-first redesign exposed KYC and identity verification as reusable services, enabling three additional business lines to launch digital onboarding within 6 months',
      color: 'sky',
    },
    {
      icon: Building2,
      industry: 'Government Agency',
      challenge: 'Legacy case management system serving 500,000+ citizens annually',
      outcome: 'Cloud-native microservices architecture',
      impact: '35% reduction in average case processing time, elimination of a $2M annual mainframe maintenance contract, platform ready for AI-assisted case routing',
      color: 'emerald',
    },
    {
      icon: ShoppingCart,
      industry: 'Regional Retailer',
      challenge: 'Order management locked in monolithic ERP extension',
      outcome: 'Event-driven microservices via strangler-fig migration',
      impact: 'Black Friday peak handled with zero manual intervention (previously required war-room staffing), new fulfillment options enabled in weeks vs. 9-month estimate',
      color: 'purple',
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-sky-400 font-semibold mb-4">
          Example Outcomes
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl md:text-5xl font-bold text-white mb-10" delay={0.1}>
          From Similar Engagements
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((caseStudy, i) => (
            <motion.div
              key={caseStudy.industry}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
            >
              <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                caseStudy.color === 'sky' ? 'bg-sky-500/20' :
                caseStudy.color === 'emerald' ? 'bg-emerald-500/20' : 'bg-purple-500/20'
              }`}>
                <caseStudy.icon className={`w-6 h-6 ${
                  caseStudy.color === 'sky' ? 'text-sky-400' :
                  caseStudy.color === 'emerald' ? 'text-emerald-400' : 'text-purple-400'
                }`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{caseStudy.industry}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-white/50 uppercase text-xs tracking-wide mb-1">Challenge</p>
                  <p className="text-white/80">{caseStudy.challenge}</p>
                </div>
                <div>
                  <p className="text-white/50 uppercase text-xs tracking-wide mb-1">Outcome</p>
                  <p className={`font-medium ${
                    caseStudy.color === 'sky' ? 'text-sky-400' :
                    caseStudy.color === 'emerald' ? 'text-emerald-400' : 'text-purple-400'
                  }`}>{caseStudy.outcome}</p>
                </div>
                <div>
                  <p className="text-white/50 uppercase text-xs tracking-wide mb-1">Impact</p>
                  <p className="text-white/70">{caseStudy.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

// ============================================
// CONCERNS
// ============================================

export function ConcernsSlide() {
  const concerns = [
    {
      concern: 'We\'ve tried this before and it stalled',
      response: 'Thin-slice approach delivers value in 8–12 weeks, not years. Each phase has clear exit criteria. If value isn\'t emerging, we stop and reassess.',
    },
    {
      concern: 'We can\'t afford the disruption',
      response: 'Strangler-fig and parallel-run patterns allow legacy systems to continue operating. Cutover happens only when the new capability is validated.',
    },
    {
      concern: 'Our systems are too complex',
      response: 'Discovery includes architecture reverse-engineering. We scope thin slices to bounded domains where complexity is manageable.',
    },
    {
      concern: 'We don\'t have internal skills',
      response: 'Our model embeds your team members throughout with deliberate knowledge transfer. Goal is building your capability, not dependency.',
    },
    {
      concern: 'Business case is hard to quantify',
      response: 'We define measurable success criteria upfront—cycle time, cost, incidents, NPS—and track them through delivery.',
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-slate-50 p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-sky-600 font-semibold mb-4">
          Common Concerns
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" delay={0.1}>
          We&apos;ve Heard It Before
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-slate-600 mb-10" delay={0.15}>
          Here&apos;s how we address the most common objections
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {concerns.map((item, i) => (
            <motion.div
              key={item.concern}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
              className={`bg-white rounded-xl border border-slate-200 overflow-hidden ${
                i === 4 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="px-5 py-4 bg-slate-100 border-b border-slate-200">
                <p className="text-slate-900 font-semibold">
                  &ldquo;{item.concern}&rdquo;
                </p>
              </div>
              <div className="px-5 py-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.response}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >
          <p className="text-slate-500 text-sm">
            Our reputation depends on outcomes, not on selling the next phase regardless of results.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

// ============================================
// INDUSTRY APPLICATIONS
// ============================================

export function IndustryApplicationsSlide() {
  const industries = [
    {
      icon: Landmark,
      name: 'Banking & Insurance',
      useCases: 'Core banking/policy admin modernization, open banking APIs, regulatory reporting, customer onboarding',
      drivers: 'MAS/APRA resilience requirements, neo-bank competition, open finance mandates',
    },
    {
      icon: ShoppingCart,
      name: 'Retail & E-commerce',
      useCases: 'Order management, inventory/fulfillment, customer data platforms, omnichannel experiences',
      drivers: 'Peak scalability, marketplace integration, personalization/AI',
    },
    {
      icon: Factory,
      name: 'Manufacturing',
      useCases: 'MES/ERP integration, supply chain visibility, IoT/edge connectivity, quality systems',
      drivers: 'Industry 4.0, supply chain resilience, sustainability reporting',
    },
    {
      icon: Building2,
      name: 'Public Sector',
      useCases: 'Citizen services portals, case management, grants/benefits processing, inter-agency data sharing',
      drivers: 'Digital government mandates, service delivery expectations, cost pressure',
    },
    {
      icon: Heart,
      name: 'Healthcare',
      useCases: 'Patient portals, clinical system integration, claims processing, data interoperability',
      drivers: 'Regulatory compliance, patient experience, analytics/AI for care',
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white p-8 md:p-12">
      <div className="max-w-6xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-sky-600 font-semibold mb-4">
          Industry Applications
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl md:text-5xl font-bold text-slate-900 mb-10" delay={0.1}>
          Tailored for Your Sector
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              variants={fadeInUp}
              className={`bg-slate-50 rounded-xl p-5 border border-slate-200 ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center">
                  <industry.icon className="w-5 h-5 text-sky-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{industry.name}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-slate-500 uppercase text-xs tracking-wide mb-1">Priority Use Cases</p>
                  <p className="text-slate-700">{industry.useCases}</p>
                </div>
                <div>
                  <p className="text-slate-500 uppercase text-xs tracking-wide mb-1">Typical Drivers</p>
                  <p className="text-slate-600">{industry.drivers}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Slide>
  );
}

// ============================================
// NEXT STEPS
// ============================================

export function NextStepsSlide() {
  const sessionTopics = [
    'Review your top legacy-related pain points and their business impact',
    'Sketch your current application landscape and identify likely "hot spots"',
    'Share thin-slice modernization patterns relevant to your situation',
    'Propose 1–2 candidate use cases for a first modernization sprint',
  ];

  const participants = [
    'CIO, CTO, or Head of Engineering',
    'Business owner for a candidate process or system',
    'Enterprise architect or technical lead (if available)',
  ];

  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-sky-600 to-cyan-600 p-8 md:p-16 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-4xl w-full z-10">
        <AnimatedText className="text-sm uppercase tracking-widest text-white/80 font-semibold mb-4 text-center">
          Next Step
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl md:text-5xl font-bold text-white mb-6 text-center" delay={0.1}>
          Modernization Discovery Session
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-white/90 mb-10 text-center" delay={0.15}>
          A practical 60–90 minute starting point with your leadership team
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              In This Session We Will
            </h3>
            <ul className="space-y-3">
              {sessionTopics.map((topic, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90 text-sm">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  {topic}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Who Should Participate
            </h3>
            <ul className="space-y-3">
              {participants.map((participant, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90 text-sm">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  {participant}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="text-sm text-white/70">
                A short pre-read will be sent ahead of time so everyone arrives aligned.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-6 text-center"
        >
          <p className="text-slate-600 mb-4">
            <strong className="text-slate-900">There is no obligation beyond the session.</strong> The goal is to give you a clearer view of how modernization could be structured to deliver results within the next 3–6 months.
          </p>
          <p className="text-sky-600 font-medium">
            Reply with 2–3 suitable time slots over the next two weeks to schedule.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

// ============================================
// END
// ============================================

export function EndSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="text-center z-10 px-8 max-w-4xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Rocket className="w-16 h-16 text-sky-400 mx-auto" />
        </motion.div>

        <AnimatedText as="h2" className="text-5xl md:text-6xl font-bold text-white mb-6" delay={0.2}>
          Let&apos;s Transform Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">
            Application Estate
          </span>
        </AnimatedText>

        <AnimatedText as="p" className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto" delay={0.4}>
          Pragmatic modernization that delivers value in weeks, not years
        </AnimatedText>

        <AnimatedText delay={0.6} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <span className="px-6 py-3 rounded-full bg-sky-500 text-white font-medium">
            8-12 Week Thin Slices
          </span>
          <span className="px-6 py-3 rounded-full bg-cyan-500 text-white font-medium">
            Measurable Outcomes
          </span>
          <span className="px-6 py-3 rounded-full border border-white/30 text-white font-medium">
            No Big Bang Risk
          </span>
        </AnimatedText>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-white/50 text-sm"
        >
          Application Modernization Services
        </motion.div>
      </div>
    </Slide>
  );
}
