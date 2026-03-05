'use client';

import { Slide } from '@/components/core';
import { AnimatedText } from '@/components/primitives';
import { motion } from 'framer-motion';

// ============================================
// DESIGN SYSTEM — GCP FSI Architecture (All Light)
// Primary:    #1A73E8  (Google Blue)
// Accent:     #34A853  (Google Green)
// Warning:    #EA4335  (Google Red)
// Gold:       #FBBC05  (Google Yellow)
// BG Main:    #FFFFFF
// BG Alt:     #F8F9FA  (Google light gray)
// BG Blue:    #E8F0FE  (light blue tint)
// BG Green:   #E6F4EA  (light green tint)
// Text:       #202124
// Muted:      #5F6368
// Border:     #E8EAED
// ============================================

interface StatCardProps {
  stat: string;
  label: string;
  delay?: number;
  accent?: boolean;
}

function StatCard({ stat, label, delay = 0, accent = false }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`rounded-xl p-5 text-center ${accent ? 'bg-[#E8F0FE] border border-[#1A73E8]/30' : 'bg-white border border-[#E8EAED]'}`}
    >
      <div className={`text-3xl font-bold mb-1 ${accent ? 'text-[#1A73E8]' : 'text-[#202124]'}`}>{stat}</div>
      <div className="text-sm text-[#5F6368] leading-tight">{label}</div>
    </motion.div>
  );
}

// ============================================
// SLIDE 1: TITLE
// ============================================

export function TitleSlide() {
  return (
    <Slide className="flex items-center justify-center bg-white relative overflow-hidden">
      {/* Subtle blue gradient at top-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 0% 0%, rgba(26, 115, 232, 0.08) 0%, transparent 55%), radial-gradient(ellipse at 100% 100%, rgba(52, 168, 83, 0.05) 0%, transparent 45%)',
        }}
      />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#1A73E8]" />

      <div className="z-10 px-8 max-w-5xl w-full">
        <AnimatedText as="h1" className="text-5xl md:text-6xl font-bold text-[#202124] mb-6 leading-tight" delay={0.1}>
          Compliance as<br />
          <span className="text-[#1A73E8]">Competitive Edge</span>
        </AnimatedText>

        <AnimatedText as="p" className="text-xl text-[#5F6368] mb-12 max-w-2xl leading-relaxed" delay={0.3}>
          Accelerating AI Adoption through Secure Cloud Foundations —<br />
          where sovereign compliance becomes competitive advantage.
        </AnimatedText>

        <AnimatedText delay={0.5}>
          <div className="flex gap-8 items-center border-t border-[#E8EAED] pt-8">
            <div>
              <p className="text-[#202124] font-semibold">Vijayakumar G.A.</p>
              <p className="text-[#5F6368] text-sm">Principal Cloud Architect | FSI | ASEAN</p>
            </div>
            <div className="h-8 w-px bg-[#E8EAED]" />
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-[#1A73E8] font-bold text-lg">15+</p>
                <p className="text-[#5F6368] text-xs">Years Architecture</p>
              </div>
              <div className="text-center">
                <p className="text-[#1A73E8] font-bold text-lg">$200M+</p>
                <p className="text-[#5F6368] text-xs">FSI Programmes</p>
              </div>
              <div className="text-center">
                <p className="text-[#1A73E8] font-bold text-lg">25</p>
                <p className="text-[#5F6368] text-xs">Tier-1 FSI Accounts</p>
              </div>
            </div>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 2: MARKET REALITY
// ============================================

export function MarketRealitySlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8F9FA] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="p" className="text-[#1A73E8] text-sm font-semibold uppercase tracking-widest mb-3">
          The Market Reality
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#202124] mb-3" delay={0.1}>
          APAC Leads Global AI Adoption — ASEAN at the Centre
        </AnimatedText>
        <AnimatedText as="p" className="text-[#5F6368] text-lg mb-10" delay={0.15}>
          Four of the top five AI-adopting nations are in APAC, with ASEAN driving the regional lead. CEO-level mandates and capital allocation here outpace every other region.
        </AnimatedText>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { stat: '70%', label: 'APAC orgs expect agentic AI to disrupt their business within 18 months', accent: true },
            { stat: '33%', label: 'APAC CEOs personally own AI strategy — vs 8% in Europe', accent: false },
            { stat: '63%', label: 'FSI respondents have GenAI in live production', accent: true },
            { stat: '$400K+', label: '26% of APAC companies invest this strictly in GenAI per year', accent: false },
          ].map((item, i) => (
            <StatCard key={i} stat={item.stat} label={item.label} delay={0.2 + i * 0.1} accent={item.accent} />
          ))}
        </div>

        <AnimatedText delay={0.7}>
          <div className="bg-[#E8F0FE] border border-[#1A73E8]/20 rounded-xl p-6 flex items-start gap-4">
            <div className="w-1 min-h-[40px] bg-[#1A73E8] rounded-full flex-shrink-0" />
            <div>
              <p className="text-[#202124] font-medium mb-1">Beyond Chatbots — Production-Scale AI</p>
              <p className="text-[#5F6368] text-sm leading-relaxed">
                ASEAN banks are deploying GenAI across credit decisioning, risk management, predictive hedging, and compliance orchestration. The pilot era is over. The question is no longer <em>whether</em> to deploy — it is <em>how fast</em>.
              </p>
            </div>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 3: PROVEN ROI
// ============================================

export function ProvenROISlide() {
  const banks = [
    {
      name: 'DBS Bank',
      deployment: 'ADA platform + Vertex AI — 1,500 models across 370 use cases',
      impact: 'SGD 750M economic value (2024); 85% reduction in manual processing',
      highlight: true,
    },
    {
      name: 'OCBC Bank',
      deployment: 'OCBC GPT + AI assistants for 30,000 employees',
      impact: '6M AI-driven decisions daily; 50% employee productivity boost',
      highlight: false,
    },
    {
      name: 'Standard Chartered',
      deployment: 'SWOOSH AI engine for AML/KYC automation',
      impact: '90% accuracy in automated data extraction; reduced onboarding times',
      highlight: true,
    },
    {
      name: 'CIMB Bank',
      deployment: 'EVA Chatbot + OctoBiz SME platform',
      impact: '191% increase in SME loan approvals; 86,000 SMEs onboarded',
      highlight: false,
    },
    {
      name: 'Maybank',
      deployment: 'GenAI across 44,000 employees + 360 Digital Wealth',
      impact: '78% of total sales from digital channels; 229% surge in digital transactions',
      highlight: true,
    },
    {
      name: 'UOB Asset Mgmt',
      deployment: 'Vertex AI for predictive hedging',
      impact: 'Above-benchmark investment returns through complex pattern recognition',
      highlight: false,
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="p" className="text-[#1A73E8] text-sm font-semibold uppercase tracking-widest mb-3">
          Real-World Proof
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#202124] mb-2" delay={0.1}>
          AI ROI Across ASEAN Banking
        </AnimatedText>
        <AnimatedText as="p" className="text-[#5F6368] mb-8" delay={0.15}>
          These are not pilots. These are production systems delivering measurable economic value.
        </AnimatedText>

        <div className="space-y-2">
          {banks.map((bank, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
              className={`grid grid-cols-12 gap-4 rounded-lg p-4 ${
                bank.highlight ? 'bg-[#E8F0FE] border border-[#1A73E8]/20' : 'bg-[#F8F9FA] border border-[#E8EAED]'
              }`}
            >
              <div className="col-span-3 flex items-center">
                <span className={`font-semibold text-sm ${bank.highlight ? 'text-[#1A73E8]' : 'text-[#202124]'}`}>
                  {bank.name}
                </span>
              </div>
              <div className="col-span-5 flex items-center">
                <span className="text-[#5F6368] text-sm">{bank.deployment}</span>
              </div>
              <div className="col-span-4 flex items-center">
                <span className="text-[#34A853] text-sm font-medium">{bank.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedText delay={0.9}>
          <div className="mt-6 flex gap-6 pt-4 border-t border-[#E8EAED]">
            <div className="text-center">
              <p className="text-[#1A73E8] text-2xl font-bold">SGD 1B+</p>
              <p className="text-[#5F6368] text-xs">DBS projected 2025</p>
            </div>
            <div className="text-center">
              <p className="text-[#34A853] text-2xl font-bold">5x</p>
              <p className="text-[#5F6368] text-xs">Customer investment lift via AI nudges</p>
            </div>
            <div className="text-center">
              <p className="text-[#1A73E8] text-2xl font-bold">6M</p>
              <p className="text-[#5F6368] text-xs">AI decisions per day at OCBC</p>
            </div>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 4: THE BLOCKER
// ============================================

export function BlockerSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8F9FA] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="p" className="text-[#EA4335] text-sm font-semibold uppercase tracking-widest mb-3">
          The Structural Blocker
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#202124] mb-4" delay={0.1}>
          Innovation Stalls at Sovereign Risk
        </AnimatedText>
        <AnimatedText as="p" className="text-[#5F6368] text-lg mb-8" delay={0.15}>
          GenAI and multi-agent architectures reorganise how sensitive financial data is processed — introducing risks that regulators hold boards personally accountable for.
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            {
              country: 'Singapore',
              framework: 'MAS TRM + FEAT Principles',
              demand: 'Due diligence, contingency planning, third-party AI oversight',
              color: '#1A73E8',
              bg: '#E8F0FE',
              border: 'border-[#1A73E8]/20',
            },
            {
              country: 'Indonesia',
              framework: 'Government Regulation 71',
              demand: 'Strict data localisation — financial data must remain within borders',
              color: '#FBBC05',
              bg: '#FEF9E7',
              border: 'border-[#FBBC05]/30',
            },
            {
              country: 'Vietnam',
              framework: 'PDPD',
              demand: 'Comprehensive personal data protection with domestic processing requirements',
              color: '#34A853',
              bg: '#E6F4EA',
              border: 'border-[#34A853]/20',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className={`rounded-xl p-5 border ${item.border}`}
              style={{ backgroundColor: item.bg }}
            >
              <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: item.color }}>
                {item.country}
              </div>
              <div className="font-semibold text-[#202124] mb-2 text-sm">{item.framework}</div>
              <div className="text-[#5F6368] text-sm leading-relaxed">{item.demand}</div>
            </motion.div>
          ))}
        </div>

        <AnimatedText delay={0.6}>
          <div className="bg-white border border-[#E8EAED] rounded-xl p-6">
            <p className="text-[#202124] font-medium mb-2">The Result: Perpetual POC Syndrome</p>
            <p className="text-[#5F6368] text-sm leading-relaxed">
              FSI boards recognise that reliance on external cloud AI does not dilute legal and financial accountability for breaches. This perceived risk traps enterprise AI projects in endless proof-of-concept phases — costing institutions competitive position while peers move to production.
            </p>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 5: CORE THESIS
// ============================================

export function CoreThesisSlide() {
  return (
    <Slide className="flex items-center justify-center bg-white p-8 md:p-16">
      <div className="max-w-4xl text-center w-full">
        <AnimatedText as="p" className="text-[#5F6368] text-sm uppercase tracking-widest mb-10">
          The Google Cloud Opportunity
        </AnimatedText>

        <AnimatedText as="h2" className="text-4xl md:text-5xl font-bold text-[#202124] mb-6 leading-tight" delay={0.2}>
          Compliance Is Not the Barrier.<br />
          <span className="text-[#1A73E8]">It Is the Competitive Edge.</span>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <div className="border-t border-b border-[#E8EAED] py-8 mb-8">
            <p className="text-xl text-[#5F6368] leading-relaxed max-w-3xl mx-auto">
              Aggressive AI innovation demanded by C-level executives can only be unlocked through{' '}
              <span className="text-[#1A73E8] font-medium">uncompromising infrastructure safety and regulatory compliance</span>.
            </p>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Sovereign Cloud', desc: 'Hardware-level data residency with cryptographic guarantees', bg: '#E8F0FE', border: 'border-[#1A73E8]/20', color: '#1A73E8' },
            { label: 'Zero Trust AI', desc: 'Confidential Computing encrypts data in use — invisible to the hypervisor and cloud provider', bg: '#E6F4EA', border: 'border-[#34A853]/20', color: '#34A853' },
            { label: 'Audit-Ready', desc: 'Continuous compliance posture via policy-as-code and Security Command Centre', bg: '#FEF9E7', border: 'border-[#FBBC05]/30', color: '#FBBC05' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              className={`rounded-xl p-5 border ${item.border}`}
              style={{ backgroundColor: item.bg }}
            >
              <div className="font-semibold text-sm mb-2" style={{ color: item.color }}>{item.label}</div>
              <div className="text-[#5F6368] text-sm leading-relaxed">{item.desc}</div>
            </motion.div>
          ))}
        </div>

        <AnimatedText delay={0.9}>
          <div className="bg-[#F8F9FA] border border-[#E8EAED] rounded-xl px-6 py-4">
            <p className="text-[#202124] text-base">
              This transforms the C-level conversation from{' '}
              <span className="text-[#5F6368] italic">&ldquo;Is the public cloud safe enough?&rdquo;</span>
              {' '}to{' '}
              <span className="text-[#34A853] font-medium">&ldquo;How quickly can we deploy agentic AI to capture market share?&rdquo;</span>
            </p>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 6: THREE PILLARS OVERVIEW (NEW)
// ============================================

export function ThreePillarsSlide() {
  const pillars = [
    {
      num: '1',
      pillar: 'Pillar 1',
      name: 'Sovereign Foundation',
      desc: 'Compliance architecture that FSI boards can defend — to regulators, shareholders, and themselves.',
      color: '#1A73E8',
      bg: '#E8F0FE',
      border: 'border-[#1A73E8]/20',
      connector: 'Enables →',
    },
    {
      num: '2',
      pillar: 'Pillar 2',
      name: 'AI at Production Scale',
      desc: 'First AI workloads in production — grounded, hallucination-free, measurably tied to C-level ROI.',
      color: '#34A853',
      bg: '#E6F4EA',
      border: 'border-[#34A853]/20',
      connector: 'Sustained by →',
    },
    {
      num: '3',
      pillar: 'Pillar 3',
      name: 'Sustained Governance',
      desc: 'Multi-year transformation governed through ARB cadences, value reviews, and executive alignment — not a one-time engagement.',
      color: '#FBBC05',
      bg: '#FEF9E7',
      border: 'border-[#FBBC05]/30',
      connector: null,
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="p" className="text-[#5F6368] text-sm uppercase tracking-widest mb-4 text-center">
          The Framework
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl md:text-5xl font-bold text-[#202124] mb-4 leading-tight text-center" delay={0.15}>
          The Architecture That Resolves the Tension
        </AnimatedText>
        <AnimatedText as="p" className="text-[#5F6368] text-lg mb-12 max-w-2xl mx-auto text-center" delay={0.25}>
          Built for institutions where compliance, AI mandates, and regulatory risk collide.
        </AnimatedText>

        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-0">
          {pillars.map((item, i) => (
            <>
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.15, duration: 0.5 }}
                className={`rounded-2xl p-7 border ${item.border}`}
                style={{ backgroundColor: item.bg }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.num}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: item.color }}>{item.pillar}</span>
                </div>
                <h3 className="text-xl font-bold text-[#202124] mb-3">{item.name}</h3>
                <p className="text-[#5F6368] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>

              {item.connector && (
                <motion.div
                  key={`connector-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
                  className="flex items-center justify-center px-3"
                >
                  <p className="text-[#5F6368] text-xs whitespace-nowrap">{item.connector}</p>
                </motion.div>
              )}
            </>
          ))}
        </div>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 7: COMPLIANCE + MINDFORGE (MERGED)
// ============================================

export function ComplianceMindForgeSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8F9FA] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="p" className="text-[#1A73E8] text-sm font-semibold uppercase tracking-widest mb-3">
          Pillar 1 — Sovereign Foundation
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#202124] mb-4" delay={0.1}>
          Regulatory Compliance as Architecture Practice
        </AnimatedText>
        <AnimatedText as="p" className="text-[#5F6368] mb-6" delay={0.15}>
          Architecture engagements proactively map cloud infrastructure to regional frameworks — accelerating internal risk approval from months to weeks.
        </AnimatedText>

        <div className="space-y-2 mb-6">
          {[
            {
              mandate: 'MAS TRM',
              requirement: 'Third-party risk, data residency, incident response',
              solution: 'ISO 27001 / PCI DSS / SOC 1–3 / OSPAR / MTCS Tier 3; centralised compliance centres',
            },
            {
              mandate: 'MAS Notice 655',
              requirement: 'Cyber hygiene, admin controls, MFA, patching',
              solution: 'Zero Trust via BeyondCorp; automated security posture management',
            },
            {
              mandate: 'FEAT Principles',
              requirement: 'Fairness, Ethics, Accountability, Transparency in AI/ML',
              solution: 'Model cards, explainability tooling, immutable audit trails on Vertex AI',
            },
            {
              mandate: 'GR 71 / PDPD',
              requirement: 'Strict data localisation (Indonesia, Vietnam)',
              solution: 'GDC via Indosat (air-gapped); granular IAM + localised cloud regions',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="grid grid-cols-12 gap-4 bg-white border border-[#E8EAED] rounded-xl p-3"
            >
              <div className="col-span-2 flex items-center">
                <span className="text-[#1A73E8] font-bold text-sm">{item.mandate}</span>
              </div>
              <div className="col-span-4 flex items-center">
                <span className="text-[#202124] text-sm">{item.requirement}</span>
              </div>
              <div className="col-span-6 flex items-center">
                <span className="text-[#5F6368] text-sm">{item.solution}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedText delay={0.65}>
          <div className="bg-[#E8F0FE] border border-[#1A73E8]/20 rounded-xl p-5">
            <p className="text-[#1A73E8] font-semibold text-sm mb-2">Project MindForge — The Emerging Regulatory Layer</p>
            <p className="text-[#202124] text-sm leading-relaxed mb-3">
              MAS launched MindForge to define the GenAI regulatory standard for ASEAN FSI. Google participates directly in the consortium alongside DBS, OCBC, UOB, Standard Chartered, HSBC, and Citi — giving Google Cloud architects first-mover advantage on every regulatory shift before it becomes a compliance requirement.
            </p>
            <div className="flex gap-6 text-xs border-t border-[#1A73E8]/10 pt-3">
              <div>
                <span className="text-[#5F6368]">Outcome: </span>
                <span className="text-[#202124] font-medium">Platform-agnostic GenAI reference architecture for FSI risk management</span>
              </div>
              <div>
                <span className="text-[#5F6368]">Differentiator: </span>
                <span className="text-[#34A853] font-medium">Google is a named technology partner — not a follower</span>
              </div>
            </div>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 6 (LEGACY): COMPLIANCE FRAMEWORK
// ============================================

export function ComplianceFrameworkSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8F9FA] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="p" className="text-[#1A73E8] text-sm font-semibold uppercase tracking-widest mb-3">
          Pillar 1 — De-risking the Core Architecture
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#202124] mb-4" delay={0.1}>
          Standardising Compliance Within FSI Architecture
        </AnimatedText>
        <AnimatedText as="p" className="text-[#5F6368] mb-8" delay={0.15}>
          Architecture engagements must proactively map cloud infrastructure to regional regulatory frameworks — accelerating internal risk approval from months to weeks.
        </AnimatedText>

        <div className="space-y-3 mb-8">
          {[
            {
              mandate: 'MAS TRM',
              requirement: 'Third-party risk assessments, data residency, incident response',
              solution: 'ISO 27001 / PCI DSS / SOC 1–3 / OSPAR / MTCS Tier 3; centralised compliance resource centres',
            },
            {
              mandate: 'MAS Notice 655',
              requirement: 'Cyber hygiene, admin account controls, MFA enforcement, patching',
              solution: 'Zero Trust via BeyondCorp with contextual authentication; automated security posture management',
            },
            {
              mandate: 'FEAT Principles',
              requirement: 'Fairness, Ethics, Accountability, Transparency in AI/ML',
              solution: 'Model cards, explainability tooling, immutable audit trails for all AI workloads on Vertex AI',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
              className="grid grid-cols-12 gap-4 bg-white border border-[#E8EAED] rounded-xl p-4"
            >
              <div className="col-span-2 flex items-center">
                <span className="text-[#1A73E8] font-bold text-sm">{item.mandate}</span>
              </div>
              <div className="col-span-4 flex items-center">
                <span className="text-[#202124] text-sm">{item.requirement}</span>
              </div>
              <div className="col-span-6 flex items-center">
                <span className="text-[#5F6368] text-sm">{item.solution}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedText delay={0.7}>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-[#E8EAED] rounded-xl p-5">
              <p className="text-[#1A73E8] font-semibold text-sm mb-3">Sovereign Cloud by Market</p>
              <div className="space-y-1.5 text-sm">
                {[
                  { m: 'Indonesia (GR 71)', s: 'GDC via Indosat — air-gapped within borders' },
                  { m: 'Vietnam (PDPD)', s: 'Granular IAM + localised cloud region' },
                  { m: 'Thailand (PDPA)', s: '$1B Bangkok region — domestic residency' },
                  { m: 'Singapore (TRM)', s: 'Full sovereign portfolio + External Key Mgmt' },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-[#5F6368]">{row.m}</span>
                    <span className="text-[#202124] text-right max-w-[55%]">{row.s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#E8F0FE] border border-[#1A73E8]/20 rounded-xl p-5">
              <p className="text-[#1A73E8] font-semibold text-sm mb-2">External Key Management (EKM)</p>
              <p className="text-[#202124] text-sm leading-relaxed">
                True sovereignty beyond physical location. Encryption keys remain exclusively with the FSI customer — enabling unilateral denial of data access and immunising against extrajudicial foreign legal requests.
              </p>
            </div>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 7: PROJECT MINDFORGE
// ============================================

export function MindForgeSlide() {
  return (
    <Slide className="flex items-center justify-center bg-white p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="p" className="text-[#1A73E8] text-sm font-semibold uppercase tracking-widest mb-3">
          AI Regulatory Frontier
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#202124] mb-4" delay={0.1}>
          Project MindForge — MAS GenAI Framework
        </AnimatedText>
        <AnimatedText as="p" className="text-[#5F6368] mb-10" delay={0.15}>
          MAS launched MindForge to address the regulatory void created by generative AI. Architecture fluency in this framework is mandatory for FSI engagement credibility.
        </AnimatedText>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <AnimatedText delay={0.2}>
            <div className="bg-[#F8F9FA] border border-[#E8EAED] rounded-xl p-6">
              <p className="text-[#202124] font-semibold mb-4">Consortium Members</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {['DBS', 'OCBC', 'UOB', 'Standard Chartered', 'HSBC', 'Citi'].map((bank, i) => (
                  <div key={i} className="bg-white border border-[#E8EAED] rounded px-3 py-1.5 text-[#202124] text-sm">{bank}</div>
                ))}
              </div>
              <div className="border-t border-[#E8EAED] pt-3">
                <p className="text-[#5F6368] text-xs mb-1">Technology Partners</p>
                <div className="flex gap-2">
                  {['Google', 'Microsoft', 'Accenture'].map((p, i) => (
                    <div key={i} className="bg-[#E8F0FE] border border-[#1A73E8]/20 rounded px-3 py-1 text-[#1A73E8] text-xs">{p}</div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <div className="space-y-3">
              <div className="bg-[#E6F4EA] border border-[#34A853]/20 rounded-xl p-5">
                <p className="text-[#34A853] font-semibold text-sm mb-2">Phase One Outcome</p>
                <p className="text-[#202124] text-sm">Platform-agnostic GenAI reference architecture for financial services risk management</p>
              </div>
              <div className="bg-[#F8F9FA] border border-[#E8EAED] rounded-xl p-5">
                <p className="text-[#202124] font-semibold text-sm mb-3">FEAT Alignment Requirements</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    { f: 'F', label: 'Fairness', desc: 'No algorithmic bias' },
                    { f: 'E', label: 'Ethics', desc: 'Value-aligned decisions' },
                    { f: 'A', label: 'Accountability', desc: 'Human-in-the-loop' },
                    { f: 'T', label: 'Transparency', desc: 'Auditable reasoning' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[#1A73E8] font-bold">{item.f}</span>
                      <div>
                        <span className="text-[#202124] text-xs">{item.label}</span>
                        <p className="text-[#5F6368] text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.6}>
          <div className="bg-[#E8F0FE] border border-[#1A73E8]/20 rounded-xl p-5">
            <p className="text-[#202124] leading-relaxed text-sm">
              <span className="text-[#1A73E8] font-medium">Architecture Advisory Approach:</span> Designing AI solutions that align with MindForge reference architecture and FEAT principles signals deep regulatory empathy — proving proposed models are mathematically sound, ethically unbiased, and transparently auditable.
            </p>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 8: SECURE DATA ENCLAVES
// ============================================

export function SecureEnclavesSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8F9FA] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="p" className="text-[#1A73E8] text-sm font-semibold uppercase tracking-widest mb-3">
          Pillar 1 — Sovereign Foundation
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#202124] mb-4" delay={0.1}>
          Architecting Secure Data Enclaves for AI
        </AnimatedText>
        <AnimatedText as="p" className="text-[#5F6368] mb-8" delay={0.15}>
          Before ML models or multi-agent systems enter FSI environments, data lakes must be structurally secured. Layered defence-in-depth:
        </AnimatedText>

        <div className="space-y-3 mb-8">
          {[
            {
              layer: '01',
              name: 'VPC Service Controls',
              desc: 'Mathematically impenetrable perimeters preventing data exfiltration — even if IAM credentials are compromised',
              bg: '#E8F0FE', border: 'border-[#1A73E8]/20', color: '#1A73E8',
            },
            {
              layer: '02',
              name: 'Confidential Computing',
              desc: 'Encrypts data in use while processing in system memory — invisible to the hypervisor and cloud provider; critical for PII, trading algorithms, and raw transaction data fed into LLMs',
              bg: '#E6F4EA', border: 'border-[#34A853]/20', color: '#34A853',
            },
            {
              layer: '03',
              name: 'IaC Posture Management',
              desc: 'Terraform + posture templates for continuous scanning against NIST 800-53, ISO 27001, MAS TRM; auto-detects misconfigurations in production',
              bg: '#FEF9E7', border: 'border-[#FBBC05]/30', color: '#FBBC05',
            },
            {
              layer: '04',
              name: 'Security Command Centre (SCC)',
              desc: 'AI-powered security analytics across telemetry volumes for early anomaly detection and automated threat response',
              bg: '#FDE8E8', border: 'border-[#EA4335]/20', color: '#EA4335',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className={`flex items-start gap-5 rounded-xl p-4 border ${item.border}`}
              style={{ backgroundColor: item.bg }}
            >
              <span className="text-2xl font-bold flex-shrink-0 w-8 mt-0.5" style={{ color: item.color }}>{item.layer}</span>
              <div>
                <span className="font-semibold text-sm" style={{ color: item.color }}>{item.name}</span>
                <p className="text-[#5F6368] text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedText delay={0.7}>
          <div className="bg-white border border-[#E8EAED] rounded-xl p-5">
            <p className="text-[#5F6368] text-sm">
              <span className="text-[#202124] font-medium">Hybrid Cloud:</span> For FSIs with on-premise constraints, Anthos and Google Distributed Cloud provide consistent governance across hybrid environments — enabling phased migration without architecture compromise.
            </p>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 9: AGENTIC AI ARCHITECTURE
// ============================================

export function AgenticAISlide() {
  return (
    <Slide className="flex items-center justify-center bg-white p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="p" className="text-[#1A73E8] text-sm font-semibold uppercase tracking-widest mb-3">
          Pillar 2 — AI at Production Scale
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#202124] mb-4" delay={0.1}>
          Production-Grade Agentic Workflows
        </AnimatedText>
        <AnimatedText as="p" className="text-[#5F6368] mb-8" delay={0.15}>
          Multi-agent parallel architecture for FSI credit risk assessment — grounded, hallucination-free, and cryptographically secured.
        </AnimatedText>

        {/* Architecture diagram */}
        <div className="flex flex-col items-center gap-0 mb-8">
          {/* Root Agent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full bg-[#E8F0FE] border border-[#1A73E8]/30 rounded-xl p-4 text-center"
          >
            <p className="text-[#1A73E8] font-bold text-sm">Root Agent</p>
            <p className="text-[#5F6368] text-xs mt-1">Gemini on Vertex AI — validates input, establishes session state, routes tasks to subagents in parallel</p>
          </motion.div>

          {/* Connector line */}
          <div className="w-px h-6 bg-[#E8EAED]" />

          {/* Subagents row */}
          <div className="w-full grid grid-cols-3 gap-4">
            {[
              { label: 'Subagent A', desc: 'External MCP Server', sub: 'Yahoo Finance / FRED → real-time macro indicators', color: '#34A853', bg: '#E6F4EA', border: 'border-[#34A853]/20' },
              { label: 'Subagent B', desc: 'Internal RAG Datastore', sub: 'Credit policies + KYC documentation retrieval', color: '#FBBC05', bg: '#FEF9E7', border: 'border-[#FBBC05]/30' },
              { label: 'Subagent C', desc: 'Transaction Database', sub: 'Historical pattern validation', color: '#EA4335', bg: '#FDE8E8', border: 'border-[#EA4335]/20' },
            ].map((agent, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className={`rounded-xl p-4 text-center border ${agent.border}`}
                style={{ backgroundColor: agent.bg }}
              >
                <span className="font-bold text-xs" style={{ color: agent.color }}>{agent.label}</span>
                <p className="text-[#202124] text-xs mt-1 font-medium">{agent.desc}</p>
                <p className="text-[#5F6368] text-xs mt-1">{agent.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Connector line */}
          <div className="w-px h-6 bg-[#E8EAED]" />

          {/* Output */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="w-full bg-[#E6F4EA] border border-[#34A853]/30 rounded-xl p-4 text-center"
          >
            <p className="text-[#34A853] font-bold text-sm">Cross-validated Output</p>
            <p className="text-[#5F6368] text-xs mt-1">Grounded, hallucination-free credit risk assessment — processed entirely within Private Service Connect, no public internet traversal</p>
          </motion.div>
        </div>

        <AnimatedText delay={0.9}>
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: 'Shared VPCs', desc: 'Network perimeter isolation' },
              { label: 'Private Service Connect', desc: 'AI models on private IP' },
              { label: 'Cloud Interconnect', desc: 'External connectivity private' },
              { label: 'Apigee', desc: 'Legacy core banking integration' },
            ].map((item, i) => (
              <div key={i} className="bg-[#F8F9FA] border border-[#E8EAED] rounded-lg p-3 text-center">
                <p className="text-[#1A73E8] text-xs font-semibold">{item.label}</p>
                <p className="text-[#5F6368] text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 10: PILOT TO PRODUCTION
// ============================================

export function PilotToProductionSlide() {
  const stages = [
    {
      num: '01',
      stage: 'Experiment',
      desc: 'PoC built in sandbox. Model performs well in testing.',
      blocker: 'No path to production data. Risk team objects. No audit trail.',
      resolution: 'Compliant data access from day one via VPC Service Controls and pre-built MAS TRM mappings.',
    },
    {
      num: '02',
      stage: 'Validate',
      desc: 'Risk and compliance review. Architecture approval sought.',
      blocker: 'Months of internal sign-off. FEAT and MAS TRM gaps stall the process.',
      resolution: 'Pre-mapped regulatory frameworks and IaC posture templates compress approval from months to weeks.',
    },
    {
      num: '03',
      stage: 'Harden',
      desc: 'Security controls, monitoring, and failsafes applied.',
      blocker: 'PII exposure risk. No model explainability for regulators. Drift undetected.',
      resolution: 'Confidential Computing + SCC threat detection + Vertex AI model cards and immutable audit trails.',
    },
    {
      num: '04',
      stage: 'Scale',
      desc: 'Enterprise rollout. Multi-agent orchestration.',
      blocker: 'Legacy core banking integration. Latency at scale. Cost unpredictability.',
      resolution: 'Apigee for core banking + Private Service Connect + consumption-based Vertex AI pricing.',
    },
  ];

  const colors = [
    { color: '#1A73E8', bg: '#E8F0FE', border: 'border-[#1A73E8]/20' },
    { color: '#34A853', bg: '#E6F4EA', border: 'border-[#34A853]/20' },
    { color: '#FBBC05', bg: '#FEF9E7', border: 'border-[#FBBC05]/30' },
    { color: '#EA4335', bg: '#FDE8E8', border: 'border-[#EA4335]/20' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-[#F8F9FA] p-8 md:p-14">
      <div className="max-w-5xl w-full">
        <AnimatedText as="p" className="text-[#1A73E8] text-sm font-semibold uppercase tracking-widest mb-3">
          Pillar 2 — AI at Production Scale
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#202124] mb-3" delay={0.1}>
          From Pilot to Production
        </AnimatedText>
        <AnimatedText as="p" className="text-[#5F6368] mb-8" delay={0.15}>
          Most FSI AI programmes stall between experiment and production. The blocker is never the model — it&apos;s the architecture.
        </AnimatedText>

        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-0 mb-6">
          {stages.map((s, i) => {
            const c = colors[i];
            return (
              <>
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className={`rounded-2xl border ${c.border} flex flex-col overflow-hidden`}
                  style={{ backgroundColor: c.bg }}
                >
                  {/* Stage header */}
                  <div className="px-5 pt-5 pb-4 border-b border-black/5">
                    <span className="text-3xl font-bold leading-none" style={{ color: c.color }}>{s.num}</span>
                    <p className="text-[#202124] font-bold text-base mt-1">{s.stage}</p>
                    <p className="text-[#5F6368] text-xs mt-1 leading-relaxed">{s.desc}</p>
                  </div>

                  {/* Blocker */}
                  <div className="px-5 py-3 border-b border-black/5 bg-white/40">
                    <p className="text-[#EA4335] text-[10px] font-bold uppercase tracking-widest mb-1">Blocker</p>
                    <p className="text-[#202124] text-xs leading-relaxed">{s.blocker}</p>
                  </div>

                  {/* Resolution */}
                  <div className="px-5 py-3 flex-1 bg-white/60">
                    <p className="text-[#34A853] text-[10px] font-bold uppercase tracking-widest mb-1">Resolution</p>
                    <p className="text-[#202124] text-xs leading-relaxed">{s.resolution}</p>
                  </div>
                </motion.div>

                {i < stages.length - 1 && (
                  <motion.div
                    key={`arrow-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 + i * 0.1, duration: 0.4 }}
                    className="flex items-center justify-center px-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="#C4C7CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                )}
              </>
            );
          })}
        </div>

        <AnimatedText delay={0.7}>
          <div className="bg-[#E8F0FE] border border-[#1A73E8]/20 rounded-xl p-4 text-center">
            <p className="text-[#202124] text-sm">
              The architecture on the previous slide is how you clear{' '}
              <span className="font-semibold text-[#1A73E8]">every one of these gates</span>.
            </p>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 11: VALUE FRAMING
// ============================================

export function ValueFramingSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8F9FA] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="p" className="text-[#1A73E8] text-sm font-semibold uppercase tracking-widest mb-3">
          Pillar 3 — Sustained Governance
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#202124] mb-4" delay={0.1}>
          Framing Architecture Around C-Level ROI
        </AnimatedText>
        <AnimatedText as="p" className="text-[#5F6368] mb-8" delay={0.15}>
          Technical architectures must link to measurable outcomes. Every engagement includes a Value Realisation Roadmap co-signed by business and technology stakeholders.
        </AnimatedText>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            { exec: 'CEO / Board', priority: 'Competitive differentiation, shareholder value', frame: '"AI-driven operational efficiency = margin expansion"', color: '#1A73E8', bg: '#E8F0FE', border: 'border-[#1A73E8]/20' },
            { exec: 'CFO', priority: 'ROI, TCO visibility', frame: '"Consumption-based AI with measurable cost-per-query; phased investment aligned to value milestones"', color: '#34A853', bg: '#E6F4EA', border: 'border-[#34A853]/20' },
            { exec: 'CRO', priority: 'Revenue growth, customer retention', frame: '"Personalisation at scale without compliance risk; 5x customer investment lift"', color: '#FBBC05', bg: '#FEF9E7', border: 'border-[#FBBC05]/30' },
            { exec: 'CISO', priority: 'Risk management, security posture', frame: '"Zero Trust AI with audit-ready governance; continuous compliance via SCC"', color: '#EA4335', bg: '#FDE8E8', border: 'border-[#EA4335]/20' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className={`rounded-xl p-4 border ${item.border}`}
              style={{ backgroundColor: item.bg }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-bold text-sm" style={{ color: item.color }}>{item.exec}</span>
                <span className="text-[#5F6368] text-xs">— {item.priority}</span>
              </div>
              <p className="text-[#202124] text-sm italic">{item.frame}</p>
            </motion.div>
          ))}
        </div>

        <AnimatedText delay={0.7}>
          <div className="bg-white border border-[#E8EAED] rounded-xl p-5">
            <p className="text-[#5F6368] text-xs uppercase tracking-wide mb-3">Aggregated Market Data — Financial Services GenAI ROI</p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { stat: '20%', label: 'Average productivity gain across fraud detection, customer service, and software dev' },
                { stat: '60%', label: 'More research consumed by GenAI-assisted wealth management analysts' },
                { stat: 'MTTR↓', label: 'Agentic SOC reduces Mean-Time-To-Resolution via autonomous investigation' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-[#1A73E8] text-2xl font-bold mb-1">{item.stat}</p>
                  <p className="text-[#5F6368] text-xs leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 13: 90-DAY EXECUTION PLAN
// ============================================

export function ExecutionPlanSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8F9FA] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="p" className="text-[#1A73E8] text-sm font-semibold uppercase tracking-widest mb-3">
          90-Day Execution Plan
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#202124] mb-8" delay={0.1}>
          The First 90 Days
        </AnimatedText>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            {
              phase: 'Phase 1',
              period: 'Days 1–30',
              title: 'Discover & Map',
              items: [
                'Architecture discovery across 8 priority FSI accounts — document AI readiness, compliance gaps, and cloud maturity per account',
                'Shadow 3+ active sales cycles to map technical objections and recurring architecture blockers',
                'Produce MAS TRM gap register for each priority account as a reusable baseline artefact',
              ],
              color: '#1A73E8', bg: '#E8F0FE', border: 'border-[#1A73E8]/20', dot: 'bg-[#1A73E8]',
            },
            {
              phase: 'Phase 2',
              period: 'Days 31–60',
              title: 'Design & Align',
              items: [
                'Deliver executive architecture workshops for 5 priority accounts — co-designed with account teams, not pre-packaged',
                'Produce MAS TRM / FEAT compliance reference architecture for 3 accounts — reusable across the region',
                'Build ROI business case for 2 accounts using Vertex AI cost modelling and ASEAN peer benchmarks',
              ],
              color: '#34A853', bg: '#E6F4EA', border: 'border-[#34A853]/20', dot: 'bg-[#34A853]',
            },
            {
              phase: 'Phase 3',
              period: 'Days 61–90',
              title: 'Deliver & Anchor',
              items: [
                'Lead engineering sprint for 1–2 accounts: architecture approval to first POC deployment on Vertex AI',
                'Deliver 3 multi-year cloud transformation roadmaps with board-ready investment cases',
                'Establish ARB governance structure for 2 strategic accounts — inaugural session scheduled within 90 days',
              ],
              color: '#FBBC05', bg: '#FEF9E7', border: 'border-[#FBBC05]/30', dot: 'bg-[#FBBC05]',
            },
          ].map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
              className={`rounded-xl p-5 border ${phase.border}`}
              style={{ backgroundColor: phase.bg }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: phase.color }}>{phase.phase}</span>
                <span className="text-[#5F6368] text-xs">{phase.period}</span>
              </div>
              <p className="font-semibold text-[#202124] text-sm mb-4">{phase.title}</p>
              <ul className="space-y-2">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-[#5F6368]">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${phase.dot}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <AnimatedText delay={0.7}>
          <div className="bg-white border border-[#E8EAED] rounded-xl p-5">
            <p className="text-[#5F6368] text-xs uppercase tracking-wide mb-3">By Day 90</p>
            <div className="flex gap-4">
              {[
                '8 accounts mapped — AI readiness and compliance baseline documented',
                '2 active POCs initiated — architecture approved and first deployment underway',
                'ARB governance established in 2 strategic accounts — multi-year roadmap co-signed',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 flex-1">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1A73E8] flex-shrink-0" />
                  <span className="text-[#5F6368] text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 13: CONCLUSION
// ============================================

export function ConclusionSlide() {
  return (
    <Slide className="flex items-center justify-center bg-white p-8 md:p-16">
      <div className="max-w-4xl text-center w-full">
        <AnimatedText as="p" className="text-[#5F6368] text-sm uppercase tracking-widest mb-10">
          The ASEAN FSI Inflection Point
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <div className="mb-8">
            <p className="text-2xl text-[#202124] leading-relaxed font-light max-w-3xl mx-auto">
              CEO-level AI mandates are real. Sovereign risk concerns are real. The institutions that resolve this tension first will{' '}
              <span className="font-semibold text-[#202124]">own the next decade of ASEAN financial services.</span>
            </p>
          </div>
        </AnimatedText>

      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 10 (NEW): GOVERN
// ============================================

export function GovernSlide() {
  const cadences = [
    {
      title: 'Architecture Review Board (ARB)',
      freq: 'Quarterly',
      desc: 'Review major architecture decisions, evaluate platform evolution, prevent technical debt accumulation',
    },
    {
      title: 'Value Realisation Reviews',
      freq: 'Half-yearly',
      desc: 'Measure outcomes against business case; recalibrate roadmap to changing regulatory and market conditions',
    },
    {
      title: 'Compliance Posture Audits',
      freq: 'Ongoing',
      desc: 'Automated via IaC + SCC; manual review at each regulatory update cycle',
    },
    {
      title: 'Executive Steering',
      freq: 'Annual',
      desc: 'Present transformation progress at board level; co-sign multi-year investment roadmap',
    },
  ];

  const stages = [
    { num: '1', label: 'Foundation', desc: 'Secure enclaves, zero trust, sovereign data controls', color: '#EA4335', bg: '#FDE8E8', border: 'border-[#EA4335]/20' },
    { num: '2', label: 'Activation', desc: 'First production AI workloads, compliance validated', color: '#FBBC05', bg: '#FEF9E7', border: 'border-[#FBBC05]/30' },
    { num: '3', label: 'Scale', desc: 'Multi-agent workflows, enterprise-wide rollout', color: '#1A73E8', bg: '#E8F0FE', border: 'border-[#1A73E8]/20' },
    { num: '4', label: 'Optimise', desc: 'Continuous improvement, Centre of Excellence, external positioning', color: '#34A853', bg: '#E6F4EA', border: 'border-[#34A853]/20' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="p" className="text-[#1A73E8] text-sm font-semibold uppercase tracking-widest mb-3">
          Pillar 3 — Sustained Governance
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#202124] mb-4" delay={0.1}>
          Governing the Multi-Year Transformation
        </AnimatedText>
        <AnimatedText as="p" className="text-[#5F6368] mb-8" delay={0.15}>
          Cloud adoption at FSI scale is not a project. It&apos;s a programme — sustained by architecture governance, not vendor relationships.
        </AnimatedText>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Left: Governance Cadences */}
          <AnimatedText delay={0.2}>
            <p className="text-[#202124] text-xs font-semibold uppercase tracking-wide mb-3">Governance Cadences</p>
            <div className="space-y-3">
              {cadences.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.4 }}
                  className="bg-[#F8F9FA] border border-[#E8EAED] rounded-lg p-3"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#202124] text-xs font-semibold">{item.title}</span>
                    <span className="text-[10px] text-[#1A73E8] border border-[#1A73E8]/30 rounded px-1.5 py-0.5 leading-none">{item.freq}</span>
                  </div>
                  <p className="text-[#5F6368] text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedText>

          {/* Right: Transformation Lifecycle */}
          <AnimatedText delay={0.3}>
            <p className="text-[#202124] text-xs font-semibold uppercase tracking-wide mb-3">The Transformation Lifecycle</p>
            <div className="space-y-2">
              {stages.map((stage, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.1, duration: 0.4 }}
                  className={`rounded-lg p-3 border ${stage.border} flex items-start gap-3`}
                  style={{ backgroundColor: stage.bg }}
                >
                  <span className="text-lg font-bold leading-none mt-0.5" style={{ color: stage.color }}>{stage.num}</span>
                  <div>
                    <p className="text-[#202124] text-xs font-semibold">{stage.label}</p>
                    <p className="text-[#5F6368] text-xs mt-0.5 leading-relaxed">{stage.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.8}>
          <div className="bg-[#E8F0FE] border border-[#1A73E8]/20 rounded-xl p-4 text-center">
            <p className="text-[#202124] text-sm italic">
              &ldquo;The difference between a vendor and an advisor is who the CTO calls at 11pm when the regulator asks a question.&rdquo;
            </p>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 12: PRINCIPAL ARCHITECT PROFILE
// ============================================

export function ProfileSlide() {
  const coreImpact = [
    { highlight: '$200M+ FSI Design Authority', detail: '$50M direct bookings, $75M pipeline across ASEAN Tier-1 banks' },
    { highlight: 'GenAI to Production in 6 Weeks', detail: 'RAG platform — 7-day resolution SLA reduced to under 24h' },
    { highlight: '$35M Security Pipeline', detail: '10+ ASEAN FI assessments co-led with Deloitte & IDC' },
    { highlight: 'APAC Architecture CoE', detail: '20+ architects across Cloud, Security, and Data practices' },
  ];

  const advisoryCompetencies = [
    { n: '1', title: 'Technical Strategy', desc: 'Translate business requirements into deployable cloud-native architectures' },
    { n: '2', title: 'Coalition Building', desc: 'Align product, engineering, and security around customer architecture priorities' },
    { n: '3', title: 'Trusted Advisory', desc: 'Escalation point for technical objections and Architecture Review Board governance' },
    { n: '4', title: 'Value Engineering', desc: 'Quantify business outcomes: productivity gains, risk reduction, revenue enablement' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-[#F8F9FA] p-8 md:p-14">
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-[220px_1fr] gap-10">

          {/* Left: Portrait + identity */}
          <AnimatedText>
            <div className="flex flex-col items-center text-center">
              <div className="w-40 mb-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/profile-sketch.jpg"
                  alt="Vijayakumar G.A."
                  className="w-full h-auto"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
              <h2 className="text-xl font-bold text-[#202124] leading-tight">Vijayakumar G.A.</h2>
              <p className="text-[#1A73E8] text-sm font-medium mt-1">Principal Cloud Architect</p>
              <p className="text-[#5F6368] text-xs mt-1">FSI · ASEAN · APAC</p>
              <div className="mt-5 w-full bg-white border border-[#E8EAED] rounded-xl p-4 text-left space-y-3">
                <div className="text-center">
                  <p className="text-[#1A73E8] text-xl font-bold">15</p>
                  <p className="text-[#5F6368] text-xs leading-tight">Years FSI Architecture</p>
                </div>
                <div className="border-t border-[#E8EAED]" />
                <div className="text-center">
                  <p className="text-[#1A73E8] text-xl font-bold">25</p>
                  <p className="text-[#5F6368] text-xs leading-tight">Tier-1 FSI Accounts</p>
                </div>
                <div className="border-t border-[#E8EAED]" />
                <div className="text-center">
                  <p className="text-[#1A73E8] text-xl font-bold">$200M+</p>
                  <p className="text-[#5F6368] text-xs leading-tight">Architecture Authority</p>
                </div>
              </div>
            </div>
          </AnimatedText>

          {/* Right: Positioning + proof */}
          <div className="space-y-5">
            <AnimatedText delay={0.1}>
              <div className="border-l-4 border-[#1A73E8] bg-white rounded-r-xl p-4">
                <p className="text-[#202124] text-sm leading-relaxed">
                  Market-facing APAC technology executive at the intersection of AI transformation, enterprise architecture, and FSI Go-To-Market execution.
                  Trusted advisor to CTO, CIO, and VP Engineering stakeholders across ASEAN&apos;s top-tier financial institutions.
                </p>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <p className="text-[#5F6368] text-xs uppercase tracking-widest mb-3">Core Impact</p>
              <div className="space-y-2">
                {coreImpact.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.07, duration: 0.4 }}
                    className="bg-white border border-[#E8EAED] rounded-lg px-4 py-2.5"
                  >
                    <span className="text-[#202124] text-xs font-semibold">{item.highlight}</span>
                    <span className="text-[#5F6368] text-xs"> — {item.detail}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedText>

            <AnimatedText delay={0.55}>
              <p className="text-[#5F6368] text-xs uppercase tracking-widest mb-3">Core Advisory Competencies</p>
              <div className="grid grid-cols-2 gap-2">
                {advisoryCompetencies.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.07, duration: 0.4 }}
                    className="bg-white border border-[#E8EAED] rounded-lg p-3 flex items-start gap-2"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#1A73E8] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                      {item.n}
                    </span>
                    <div>
                      <p className="text-[#202124] text-xs font-semibold">{item.title}</p>
                      <p className="text-[#5F6368] text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedText>
          </div>

        </div>
      </div>
    </Slide>
  );
}
