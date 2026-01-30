'use client';

import { Slide } from '@/components/core';
import { AnimatedText } from '@/components/primitives';
import { motion } from 'framer-motion';
import { useCallback } from 'react';

// Design System - Modern Tech/Cloud Theme
// Primary: #0066CC (Azure Blue)
// Accent: #00B4D8 (Cyan)
// Background Light: #F8FAFC
// Background Dark: #0F172A (Slate 900)
// Text: #1E293B (Slate 800)
// Muted: #64748B (Slate 500)

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <AnimatedText delay={delay} className="text-center">
      <div className="text-4xl font-bold text-[#00B4D8] mb-2">{value}</div>
      <div className="text-sm text-[#64748B]">{label}</div>
    </AnimatedText>
  );
}


// ============================================
// TITLE & NAVIGATION
// ============================================

export function TitleSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] relative overflow-hidden">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 180, 216, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 180, 216, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 102, 204, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="text-center z-10 px-8">
        <AnimatedText delay={0.1} className="mb-8">
          <span className="text-sm uppercase tracking-[0.3em] text-[#00B4D8] font-medium">
            GTM Strategy 2026
          </span>
        </AnimatedText>
        <AnimatedText as="h1" className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" delay={0.2}>
          Application<br />Modernization
        </AnimatedText>
        <AnimatedText as="p" className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto" delay={0.4}>
          Transforming legacy systems into cloud-ready, API-first,<br />data-driven platforms for SEA/APAC enterprises
        </AnimatedText>
        <AnimatedText delay={0.6} className="inline-flex items-center gap-3">
          <span className="px-4 py-2 rounded-full border border-[#00B4D8]/30 text-[#00B4D8] text-sm">
            Mid-Market Focus
          </span>
          <span className="px-4 py-2 rounded-full border border-[#00B4D8]/30 text-[#00B4D8] text-sm">
            90-Day Transformations
          </span>
          <span className="px-4 py-2 rounded-full border border-[#00B4D8]/30 text-[#00B4D8] text-sm">
            500K+ Programs
          </span>
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function TOCSlide() {
  const sections = [
    { num: '01', title: 'Strategy Diagnosis', desc: 'Market timing, fit, and structural analysis', slide: 3 },
    { num: '02', title: 'Positioning & Value', desc: 'Ideal client profile and value proposition', slide: 7 },
    { num: '03', title: 'Use Cases', desc: 'High-value horizontal modernization opportunities', slide: 9 },
    { num: '04', title: 'Service Pillars', desc: 'Assessment to continuous modernization', slide: 15 },
    { num: '05', title: 'Delivery & Commercial', desc: 'Hybrid model and partnership strategy', slide: 21 },
  ];

  const handleJump = useCallback((slideNum: number) => {
    window.location.hash = String(slideNum);
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }, []);

  return (
    <Slide className="flex items-center justify-center bg-[#F8FAFC] p-8 md:p-16">
      <div className="max-w-4xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1E293B] mb-2">
          Overview
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#64748B] mb-10" delay={0.1}>
          Application modernization GTM strategy in five parts
        </AnimatedText>

        <div className="space-y-2">
          {sections.map((section, i) => (
            <AnimatedText key={section.num} delay={0.15 + i * 0.1}>
              <button
                onClick={() => handleJump(section.slide)}
                className="w-full flex items-center gap-6 p-4 border-b border-slate-200 last:border-b-0 hover:bg-[#0066CC]/5 transition-colors rounded-lg text-left group"
              >
                <span className="text-3xl font-bold text-[#0066CC] min-w-[50px]">{section.num}</span>
                <div className="flex-1">
                  <div className="text-xl font-semibold text-[#1E293B] group-hover:text-[#0066CC] transition-colors">{section.title}</div>
                  <div className="text-sm text-[#64748B]">{section.desc}</div>
                </div>
                <svg className="w-5 h-5 text-[#64748B] group-hover:text-[#0066CC] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </AnimatedText>
          ))}
        </div>
      </div>
    </Slide>
  );
}

// ============================================
// PART 1: STRATEGY DIAGNOSIS
// ============================================

export function MarketTimingSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8FAFC] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-[#0066CC] font-medium mb-4">
          Strategy Diagnosis
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1E293B] mb-2" delay={0.1}>
          Market & Timing
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#64748B] mb-10" delay={0.15}>
          Attractive timing for a 2-3 year focus on application modernization
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <StatCard value="17%" label="APAC CAGR to 2030" delay={0.2} />
          <StatCard value="90%" label="Multi-cloud adoption in APAC" delay={0.3} />
          <StatCard value="#1" label="Fastest growing region globally" delay={0.4} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-3">Global Growth</h3>
            <p className="text-sm text-[#64748B]">
              Application modernization services are growing mid- to high-teens CAGR globally,
              with APAC as the fastest-growing region due to aggressive digitization and cloud adoption.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-3">SEA/APAC Advantage</h3>
            <p className="text-sm text-[#64748B]">
              Rapid digital government and financial inclusion programs, multi-cloud adoption
              approaching 90%, and increasing edge-to-cloud use cases all amplify modernization needs.
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function StructuralAdvantagesSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8FAFC] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-[#0066CC] font-medium mb-4">
          Strategy Diagnosis
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1E293B] mb-8" delay={0.1}>
          Fit of an &quot;App-Mod-First&quot; Horizontal Play
        </AnimatedText>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#0066CC]"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-2">Horizontally Relevant Problem</h3>
            <p className="text-sm text-[#64748B]">
              Legacy constraints cut across banking, retail, manufacturing, logistics, and public sector.
              Core systems, customer portals, and analytics platforms are consistently the top modernization priorities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#00B4D8]"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-2">Use-Case Led Positioning</h3>
            <p className="text-sm text-[#64748B]">
              Horizontal is viable if positioned around cross-industry use cases: onboarding flows, order-to-cash,
              regulatory reporting, inventory/fulfillment, claims/approvals. More compelling than &quot;we modernize anything.&quot;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#0066CC]"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-2">Mid-Market Alignment</h3>
            <p className="text-sm text-[#64748B]">
              APAC mid-market enterprises and upper-end SMEs are a major driver of modernization demand
              and are more open to specialized consulting boutiques than large enterprises defaulting to global SIs.
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function SWOTSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8FAFC] p-8 md:p-12">
      <div className="max-w-6xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-[#0066CC] font-medium mb-4">
          Strategy Diagnosis
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1E293B] mb-6" delay={0.1}>
          SWOT Analysis
        </AnimatedText>

        <div className="grid grid-cols-2 gap-4">
          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl p-5 text-white"
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">S</span>
              Strengths
            </h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex items-start gap-2">
                <span className="text-[#00B4D8] mt-0.5">•</span>
                Senior team ideal for high-touch advisory + thin-slice delivery
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00B4D8] mt-0.5">•</span>
                Offshore capacity enables cost-competitive execution
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00B4D8] mt-0.5">•</span>
                Vendor partnerships provide pre-sales leverage and co-marketing
              </li>
            </ul>
          </motion.div>

          {/* Weaknesses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-white rounded-xl p-5 shadow-sm border border-amber-200"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm font-bold">W</span>
              Weaknesses
            </h3>
            <ul className="space-y-2 text-sm text-[#64748B]">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">•</span>
                Small team limits parallel program capacity (2-4 accounts max)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">•</span>
                Horizontal story risks sounding generic without sharp narratives
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">•</span>
                500K+ deals require proven methodology and governance
              </li>
            </ul>
          </motion.div>

          {/* Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-5 text-white"
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">O</span>
              Opportunities
            </h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex items-start gap-2">
                <span className="text-emerald-200 mt-0.5">•</span>
                APAC fastest-growing region (~17% CAGR to 2030)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-200 mt-0.5">•</span>
                Mid-market open to boutique consultancies vs global SIs
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-200 mt-0.5">•</span>
                90% multi-cloud adoption amplifies modernization needs
              </li>
            </ul>
          </motion.div>

          {/* Threats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="bg-white rounded-xl p-5 shadow-sm border border-red-200"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">T</span>
              Threats
            </h3>
            <ul className="space-y-2 text-sm text-[#64748B]">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                Competition from global SIs and offshore-heavy vendors
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                Long sales cycles and margin pressure on 500K+ deals
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                Client-side change resistance and siloed IT/business
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function RisksMitigationSlide() {
  const risks = [
    {
      type: 'Technical',
      risk: 'Underestimating legacy complexity, integration edges, and data quality',
      mitigation: 'Bounded thin-slice around single value stream; strangler-fig pattern; proper discovery before committing',
    },
    {
      type: 'Commercial',
      risk: 'Long sales cycles for 500K+ deals and margin pressure from offshore-heavy vendors',
      mitigation: 'Land with paid discovery, then expand; blended rates; outcome-tied fees where measurable',
    },
    {
      type: 'Organizational',
      risk: 'Lack of product ownership, change resistance, siloed IT vs business, weak engineering',
      mitigation: 'Bake operating model and DevOps enablement into offer; secure exec sponsor; define clear RACI',
    },
    {
      type: 'Dependency',
      risk: 'Over-reliance on specific cloud/AI/software vendors creating perceived bias',
      mitigation: 'Position as vendor-agnostic but partner-enabled; use vendor programs to reduce client risk/cost',
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-[#0F172A] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-[#00B4D8] font-medium mb-4">
          Delivery & Commercial
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-white mb-8" delay={0.1}>
          Key Risks & Mitigation
        </AnimatedText>

        <div className="space-y-4">
          {risks.map((item, i) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10"
            >
              <div className="flex items-start gap-4">
                <span className="px-3 py-1 rounded-full bg-[#0066CC] text-white text-xs font-medium">
                  {item.type}
                </span>
                <div className="flex-1">
                  <p className="text-white/80 text-sm mb-2">{item.risk}</p>
                  <p className="text-[#00B4D8] text-sm flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {item.mitigation}
                  </p>
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
// PART 2: POSITIONING & VALUE
// ============================================

export function PositioningSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-[#0066CC] to-[#0052A3] p-8 md:p-16 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-4xl w-full z-10">
        <AnimatedText className="text-sm uppercase tracking-widest text-[#00B4D8] font-medium mb-4">
          Positioning & Value Proposition
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-white mb-8" delay={0.1}>
          Our Position in the Market
        </AnimatedText>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 mb-8"
        >
          <h3 className="text-lg font-semibold text-[#00B4D8] mb-4">Positioning Statement</h3>
          <p className="text-xl text-white leading-relaxed">
            &quot;Application modernization specialists for SEA/APAC mid-market enterprises,
            turning legacy systems into cloud-ready, API-first, data-driven platforms
            through <span className="text-[#00B4D8] font-semibold">incremental, 90-day transformations</span>.&quot;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-lg font-semibold text-[#0066CC] mb-4">Core Value Proposition</h3>
          <p className="text-xl text-[#1E293B] leading-relaxed">
            &quot;Unlock trapped value in legacy applications through <span className="text-[#0066CC] font-semibold">thin-slice,
            self-funding modernization</span> that improves time-to-market, resilience, and cost efficiency—without
            disruptive big-bang rewrites.&quot;
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

export function IdealClientSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8FAFC] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-[#0066CC] font-medium mb-4">
          Positioning & Value Proposition
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1E293B] mb-8" delay={0.1}>
          Ideal Client Profile
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#0066CC]/10 flex items-center justify-center text-[#0066CC]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </span>
              Geography
            </h3>
            <p className="text-sm text-[#64748B]">
              SEA and broader APAC: Singapore, Malaysia, Indonesia, Thailand, Philippines, India, ANZ, Hong Kong
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#0066CC]/10 flex items-center justify-center text-[#0066CC]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Size
            </h3>
            <p className="text-sm text-[#64748B]">
              Mid-market and upper mid-market where 500K–1.5M modernization programs are material but not existential
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#0066CC]/10 flex items-center justify-center text-[#0066CC]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              Key Roles
            </h3>
            <p className="text-sm text-[#64748B]">
              CIO, CTO, Head of Engineering, Head of Digital/Transformation, BU leaders owning critical products/processes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#0066CC]/10 flex items-center justify-center text-[#0066CC]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Triggers
            </h3>
            <ul className="text-sm text-[#64748B] space-y-1">
              <li>• Regulatory or audit pressures (BFSI, public sector)</li>
              <li>• Competitive threat from digital natives</li>
              <li>• Replatforming/renewal deadlines</li>
              <li>• Cloud/AI initiatives blocked by legacy core</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

// ============================================
// PART 3: USE CASES
// ============================================

export function UseCasesOverviewSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#0F172A] p-8 md:p-16 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 180, 216, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 180, 216, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-4xl w-full z-10 text-center">
        <AnimatedText className="text-sm uppercase tracking-widest text-[#00B4D8] font-medium mb-4">
          Use Cases
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-white mb-6" delay={0.1}>
          High-Value Horizontal<br />Use Cases
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-slate-300 mb-12" delay={0.2}>
          Cross-industry modernization opportunities that drive measurable ROI
        </AnimatedText>

        <div className="grid grid-cols-5 gap-4">
          {[
            { icon: '⚙️', label: 'Core Systems' },
            { icon: '🌐', label: 'Digital Channels' },
            { icon: '📊', label: 'Data & Analytics' },
            { icon: '🔗', label: 'API Enablement' },
            { icon: '🤖', label: 'Workflow Automation' },
          ].map((item, i) => (
            <AnimatedText key={item.label} delay={0.3 + i * 0.1}>
              <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 hover:border-[#00B4D8]/50 transition-colors">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm text-white/80">{item.label}</div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </Slide>
  );
}

export function CoreTransactionSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8FAFC] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-[#0066CC] font-medium mb-4">
          Use Case 1
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1E293B] mb-4" delay={0.1}>
          Core Transaction & Processing Systems
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#64748B] mb-8" delay={0.15}>
          Directly linked to revenue, cost-to-serve, and regulatory/compliance risk
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-[#1E293B]">Examples</h3>
            <div className="flex flex-wrap gap-2">
              {['Policy/claims systems', 'Order management', 'Billing engines', 'Manufacturing execution', 'Inventory systems'].map((item) => (
                <span key={item} className="px-3 py-1.5 bg-[#0066CC]/10 text-[#0066CC] rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl p-6 text-white"
          >
            <h3 className="text-lg font-semibold mb-3">Why High Value</h3>
            <p className="text-white/90 text-sm">
              Small improvements in core systems often create outsized ROI. These are the beating heart
              of the enterprise—every transaction flows through them.
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function CustomerChannelsSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8FAFC] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-[#0066CC] font-medium mb-4">
          Use Case 2
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1E293B] mb-4" delay={0.1}>
          Customer-Facing Digital Channels
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#64748B] mb-8" delay={0.15}>
          Immediate impact on NPS, conversion, and churn
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-[#1E293B]">Examples</h3>
            <div className="flex flex-wrap gap-2">
              {['Self-service portals', 'Partner portals', 'Mobile apps', 'E-commerce frontends'].map((item) => (
                <span key={item} className="px-3 py-1.5 bg-[#00B4D8]/10 text-[#0066CC] rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-gradient-to-br from-[#00B4D8] to-[#0066CC] rounded-xl p-6 text-white"
          >
            <h3 className="text-lg font-semibold mb-3">Why High Value</h3>
            <p className="text-white/90 text-sm">
              Modernization enables personalization, omnichannel experiences, and faster feature releases.
              Direct line to customer satisfaction and competitive differentiation.
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function DataAnalyticsSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8FAFC] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-[#0066CC] font-medium mb-4">
          Use Case 3
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1E293B] mb-4" delay={0.1}>
          Data, Analytics & Reporting Platforms
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#64748B] mb-8" delay={0.15}>
          Unlock latent value and reduce manual reporting burden
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-[#1E293B]">Examples</h3>
            <div className="flex flex-wrap gap-2">
              {['Regulatory reporting', 'Management dashboards', 'Data warehouse/BI', 'Decision platforms'].map((item) => (
                <span key={item} className="px-3 py-1.5 bg-[#0066CC]/10 text-[#0066CC] rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-xl p-6 text-white"
          >
            <h3 className="text-lg font-semibold mb-3">Why High Value</h3>
            <p className="text-white/90 text-sm">
              Many SEA/APAC organizations cannot exploit AI/analytics because data sits in fragmented legacy systems.
              Modern data platforms are the foundation for AI-readiness.
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function APIEnablementSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8FAFC] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-[#0066CC] font-medium mb-4">
          Use Case 4
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1E293B] mb-4" delay={0.1}>
          Integration & API Enablement
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#64748B] mb-8" delay={0.15}>
          New products, ecosystem partnerships, and internal agility
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-[#1E293B]">Examples</h3>
            <div className="flex flex-wrap gap-2">
              {['API facades for legacy cores', 'API gateways', 'Integration hubs', 'Partner onboarding'].map((item) => (
                <span key={item} className="px-3 py-1.5 bg-[#00B4D8]/10 text-[#0066CC] rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-gradient-to-br from-[#0066CC] to-[#00B4D8] rounded-xl p-6 text-white"
          >
            <h3 className="text-lg font-semibold mb-3">Why High Value</h3>
            <p className="text-white/90 text-sm">
              Clean, secure, well-governed APIs are the backbone of digital business.
              Enables new revenue streams, faster partner integration, and composable architecture.
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function WorkflowAutomationSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8FAFC] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-[#0066CC] font-medium mb-4">
          Use Case 5
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1E293B] mb-4" delay={0.1}>
          Operational Efficiency & Workflow Automation
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#64748B] mb-8" delay={0.15}>
          Strong candidates for thin-slice pilots that fund further modernization
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-[#1E293B]">Examples</h3>
            <div className="flex flex-wrap gap-2">
              {['Approvals workflows', 'Reconciliations', 'Exception handling', 'Back-office processes'].map((item) => (
                <span key={item} className="px-3 py-1.5 bg-[#0066CC]/10 text-[#0066CC] rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white"
          >
            <h3 className="text-lg font-semibold mb-3">Why High Value</h3>
            <p className="text-white/90 text-sm">
              Quickly demonstrable cost and error-rate reductions. These pilots build credibility
              and generate savings that can be reinvested in broader modernization.
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

// ============================================
// PART 4: SERVICE PILLARS
// ============================================

export function ServicePillarsOverviewSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-8 md:p-16 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 70%, rgba(0, 102, 204, 0.15) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-5xl w-full z-10">
        <AnimatedText className="text-sm uppercase tracking-widest text-[#00B4D8] font-medium mb-4 text-center">
          Service Pillars
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-white mb-12 text-center" delay={0.1}>
          Five Pillars of Modernization
        </AnimatedText>

        <div className="grid grid-cols-5 gap-4">
          {[
            { num: '1', title: 'Assess', duration: '2-4 wks' },
            { num: '2', title: 'Blueprint', duration: '2-3 wks' },
            { num: '3', title: 'Sprint', duration: '8-12 wks' },
            { num: '4', title: 'Enable', duration: 'Ongoing' },
            { num: '5', title: 'Optimize', duration: 'Continuous' },
          ].map((pillar, i) => (
            <AnimatedText key={pillar.num} delay={0.2 + i * 0.1}>
              <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-[#00B4D8] mb-2">{pillar.num}</div>
                <div className="text-lg font-semibold text-white mb-1">{pillar.title}</div>
                <div className="text-xs text-white/60">{pillar.duration}</div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </Slide>
  );
}

export function PortfolioAssessmentSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8FAFC] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl font-bold text-[#0066CC]">1</span>
          <div>
            <AnimatedText className="text-sm uppercase tracking-widest text-[#0066CC] font-medium">
              Service Pillar
            </AnimatedText>
            <AnimatedText as="h2" className="text-3xl font-bold text-[#1E293B]" delay={0.1}>
              Portfolio & Value Assessment
            </AnimatedText>
          </div>
          <span className="ml-auto px-4 py-2 bg-[#00B4D8]/10 text-[#0066CC] rounded-full text-sm font-medium">
            2-4 weeks
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0066CC]/10 flex items-center justify-center text-[#0066CC] mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#1E293B] mb-2">Portfolio Scan</h3>
            <p className="text-sm text-[#64748B]">
              Automated + interview-based classification by business criticality, technical health, and modernization options
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0066CC]/10 flex items-center justify-center text-[#0066CC] mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#1E293B] mb-2">Value Stream Mapping</h3>
            <p className="text-sm text-[#64748B]">
              Identify where modernization drives revenue, margin, or risk reduction
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0066CC]/10 flex items-center justify-center text-[#0066CC] mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#1E293B] mb-2">Prioritized Roadmap</h3>
            <p className="text-sm text-[#64748B]">
              12-24 month modernization roadmap with cost/benefit ranges and dependency map
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function BlueprintDesignSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8FAFC] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl font-bold text-[#0066CC]">2</span>
          <div>
            <AnimatedText className="text-sm uppercase tracking-widest text-[#0066CC] font-medium">
              Service Pillar
            </AnimatedText>
            <AnimatedText as="h2" className="text-3xl font-bold text-[#1E293B]" delay={0.1}>
              Modernization Blueprint & Thin-Slice Design
            </AnimatedText>
          </div>
          <span className="ml-auto px-4 py-2 bg-[#00B4D8]/10 text-[#0066CC] rounded-full text-sm font-medium">
            2-3 weeks
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-3">Target Architecture</h3>
            <p className="text-sm text-[#64748B]">
              Cloud, data, integration, and security architecture defined in collaboration with cloud/software vendors
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-3">Thin-Slice Selection</h3>
            <p className="text-sm text-[#64748B]">
              First 1-2 thin slices: specific onboarding journey, API facade for a core system, or a critical reporting pipeline
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-3">Delivery Plan</h3>
            <p className="text-sm text-[#64748B]">
              Scope, success metrics, governance, and team structure (client + onshore + offshore)
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function ThinSliceSprintsSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8FAFC] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl font-bold text-[#0066CC]">3</span>
          <div>
            <AnimatedText className="text-sm uppercase tracking-widest text-[#0066CC] font-medium">
              Service Pillar
            </AnimatedText>
            <AnimatedText as="h2" className="text-3xl font-bold text-[#1E293B]" delay={0.1}>
              Thin-Slice Modernization Sprints
            </AnimatedText>
          </div>
          <span className="ml-auto px-4 py-2 bg-[#00B4D8]/10 text-[#0066CC] rounded-full text-sm font-medium">
            8-12 weeks each
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { title: 'Extract', desc: 'Microservice/functional extraction from monoliths' },
            { title: 'Enable', desc: 'API enablement and integration re-design' },
            { title: 'Replatform', desc: 'Cloud-native or containerized runtime' },
            { title: 'Uplift', desc: 'UX improvement and workflow automation' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              className="bg-white rounded-xl p-5 shadow-sm border border-slate-100"
            >
              <h3 className="text-lg font-semibold text-[#0066CC] mb-2">{item.title}</h3>
              <p className="text-sm text-[#64748B]">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="bg-gradient-to-r from-[#0066CC] to-[#00B4D8] rounded-xl p-6 text-white"
        >
          <div className="flex items-center gap-4">
            <svg className="w-8 h-8 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div>
              <h3 className="font-semibold mb-1">Risk Mitigation Built-In</h3>
              <p className="text-sm text-white/90">
                Strangler-fig pattern, feature flags, and progressive rollouts minimize operational risk.
                Each sprint ends with measurable outcomes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

export function OperatingModelSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8FAFC] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl font-bold text-[#0066CC]">4</span>
          <div>
            <AnimatedText className="text-sm uppercase tracking-widest text-[#0066CC] font-medium">
              Service Pillar
            </AnimatedText>
            <AnimatedText as="h2" className="text-3xl font-bold text-[#1E293B]" delay={0.1}>
              Operating Model, DevOps & Reliability
            </AnimatedText>
          </div>
          <span className="ml-auto px-4 py-2 bg-[#00B4D8]/10 text-[#0066CC] rounded-full text-sm font-medium">
            Ongoing
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-3">DevOps Foundation</h3>
            <ul className="text-sm text-[#64748B] space-y-2">
              <li>• CI/CD pipelines</li>
              <li>• Automated testing</li>
              <li>• Environment strategy</li>
              <li>• SRE/observability setup</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-3">Team Coaching</h3>
            <ul className="text-sm text-[#64748B] space-y-2">
              <li>• Product-centric ways of working</li>
              <li>• Modern engineering practices</li>
              <li>• Agile delivery methods</li>
              <li>• Knowledge transfer</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-3">Governance Model</h3>
            <ul className="text-sm text-[#64748B] space-y-2">
              <li>• Architecture guardrails</li>
              <li>• Backlog management</li>
              <li>• Prioritization cadence</li>
              <li>• Quality gates</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function ContinuousModernizationSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8FAFC] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl font-bold text-[#0066CC]">5</span>
          <div>
            <AnimatedText className="text-sm uppercase tracking-widest text-[#0066CC] font-medium">
              Service Pillar
            </AnimatedText>
            <AnimatedText as="h2" className="text-3xl font-bold text-[#1E293B]" delay={0.1}>
              Continuous Modernization & Optimization
            </AnimatedText>
          </div>
          <span className="ml-auto px-4 py-2 bg-[#00B4D8]/10 text-[#0066CC] rounded-full text-sm font-medium">
            Continuous
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl p-6 text-white"
          >
            <h3 className="text-lg font-semibold mb-3">Modernization Waves</h3>
            <p className="text-sm text-white/90">
              Recurring quarterly/half-yearly cadence guided by value realization reviews
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-gradient-to-br from-[#00B4D8] to-[#0066CC] rounded-xl p-6 text-white"
          >
            <h3 className="text-lg font-semibold mb-3">Optimization</h3>
            <p className="text-sm text-white/90">
              Cloud cost optimization, performance tuning, and technical-debt management
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white"
          >
            <h3 className="text-lg font-semibold mb-3">Legacy Decommission</h3>
            <p className="text-sm text-white/90">
              Progressive decommissioning of legacy components to release OPEX and simplify landscape
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

// ============================================
// PART 5: DELIVERY & COMMERCIAL
// ============================================

export function DeliveryModelSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#0F172A] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-[#00B4D8] font-medium mb-4">
          Delivery & Commercial
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-white mb-8" delay={0.1}>
          Hybrid Onshore-Offshore Delivery
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#0066CC] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Onshore Pod</h3>
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-[#00B4D8]">•</span>
                Strategy and stakeholder management
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00B4D8]">•</span>
                Architecture and critical design
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00B4D8]">•</span>
                Client relationship and governance
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#00B4D8] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Offshore Squad(s)</h3>
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-[#00B4D8]">•</span>
                Build, test, and automation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00B4D8]">•</span>
                Run support and maintenance
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00B4D8]">•</span>
                Clear quality and communication frameworks
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-8 bg-gradient-to-r from-[#0066CC]/20 to-[#00B4D8]/20 rounded-xl p-6 border border-[#00B4D8]/30"
        >
          <p className="text-center text-white/90">
            <span className="font-semibold text-[#00B4D8]">Option:</span> Embed client team members to ensure capability transfer
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

export function CommercialStructureSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8FAFC] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-[#0066CC] font-medium mb-4">
          Delivery & Commercial
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1E293B] mb-8" delay={0.1}>
          Commercial Structure for 500K+ Programs
        </AnimatedText>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex items-center gap-6 bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <div className="w-16 h-16 rounded-full bg-[#0066CC]/10 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-[#0066CC]">1</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1E293B] mb-1">Paid Assessment/Blueprint Phase</h3>
              <p className="text-sm text-[#64748B]">
                Smaller ticket engagement that de-risks the decision and builds trust before larger commitment
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex items-center gap-6 bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <div className="w-16 h-16 rounded-full bg-[#0066CC]/10 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-[#0066CC]">2</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1E293B] mb-1">Bundled Thin-Slice Sprints</h3>
              <p className="text-sm text-[#64748B]">
                One or more 8-12 week sprints bundled into a 500K+ program with clear milestones and deliverables
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex items-center gap-6 bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <div className="w-16 h-16 rounded-full bg-[#0066CC]/10 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-[#0066CC]">3</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1E293B] mb-1">Outcome-Tied Fees</h3>
              <p className="text-sm text-[#64748B]">
                Selective use where KPIs are measurable (e.g., reduction in processing time, incident rates, or infrastructure cost)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function PartnershipsSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F8FAFC] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText className="text-sm uppercase tracking-widest text-[#0066CC] font-medium mb-4">
          Delivery & Commercial
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1E293B] mb-8" delay={0.1}>
          Partnership Strategy
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-semibold text-[#1E293B] mb-4">Partner Benefits</h3>
            <ul className="space-y-3 text-sm text-[#64748B]">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#0066CC] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Access migration/modernization funding programs
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#0066CC] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Use reference architectures and accelerators
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#0066CC] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Co-sell into target accounts
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#0066CC] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Co-host workshops and events
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl p-6 text-white"
          >
            <h3 className="text-lg font-semibold mb-4">Our Position</h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-lg font-medium text-[#00B4D8] mb-1">Vendor-Agnostic</p>
                <p className="text-sm text-white/80">
                  Maintain advisory stance focused on client outcomes, not vendor quotas
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-lg font-medium text-[#00B4D8] mb-1">Partner-Enabled</p>
                <p className="text-sm text-white/80">
                  Leverage vendor programs to reduce risk and cost for the client
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

// ============================================
// CLOSING
// ============================================

export function CloseSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] relative overflow-hidden">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 180, 216, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 180, 216, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 102, 204, 0.2) 0%, transparent 70%)',
        }}
      />

      <div className="text-center z-10 px-8">
        <AnimatedText as="h2" className="text-5xl md:text-6xl font-bold text-white mb-6">
          Ready to Modernize
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto" delay={0.2}>
          Transform legacy constraints into competitive advantages through
          incremental, value-driven modernization
        </AnimatedText>

        <AnimatedText delay={0.4} className="inline-flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="px-6 py-3 rounded-full bg-[#0066CC] text-white font-medium">
              Thin-Slice Approach
            </span>
            <span className="px-6 py-3 rounded-full bg-[#00B4D8] text-white font-medium">
              90-Day Cycles
            </span>
            <span className="px-6 py-3 rounded-full border border-[#00B4D8] text-[#00B4D8] font-medium">
              Measurable Outcomes
            </span>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.6} className="block mt-12">
          <span className="text-sm uppercase tracking-widest text-[#00B4D8] font-medium">
            Application Modernization GTM 2026
          </span>
        </AnimatedText>
      </div>
    </Slide>
  );
}
