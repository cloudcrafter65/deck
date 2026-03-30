'use client';

import { Slide } from '@/components/core';
import { motion } from 'framer-motion';

// ─── Animation variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

// ─── Shared primitives ───────────────────────────────────────────────────────

const TW_RED = '#E4003B';

function SectionLabel({ part, title }: { part: string; title: string }) {
  return (
    <div className="mb-5">
      <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-1 text-slate-400">
        {part}
      </p>
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      <div className="w-10 h-0.5 mt-2" style={{ backgroundColor: TW_RED }} />
    </div>
  );
}

function SlideFooter({ glossary }: { glossary?: string }) {
  return (
    <div className="absolute bottom-4 left-8 right-8 flex items-center justify-between border-t border-slate-100 pt-2.5">
      <span className="text-[9px] tracking-widest uppercase text-slate-400 font-medium">
        Omnichannel Modernisation · Thoughtworks · March 2026
      </span>
      {glossary && (
        <span className="text-[9px] text-slate-400 italic max-w-lg text-right">{glossary}</span>
      )}
    </div>
  );
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-slate-200 rounded-xl bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function RedCallout({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border-l-4 pl-4 py-2 bg-red-50 rounded-r-lg ${className}`} style={{ borderColor: TW_RED }}>
      {children}
    </div>
  );
}

function AmberCallout({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border-l-4 border-amber-500 pl-4 py-2 bg-amber-50 rounded-r-lg ${className}`}>
      {children}
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left text-[10px] font-semibold tracking-[0.15em] uppercase text-slate-500 bg-slate-100 px-3 py-2">
      {children}
    </th>
  );
}

function Td({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-3 py-2 text-xs text-slate-700 align-top ${className}`}>{children}</td>;
}

function Tr({ children, even }: { children: React.ReactNode; even?: boolean }) {
  return <tr className={even ? 'bg-slate-50' : 'bg-white'}>{children}</tr>;
}

// ─── Slide 1: Title ──────────────────────────────────────────────────────────

export function TitleSlide() {
  return (
    <Slide className="flex items-center justify-center bg-white relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Left red bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: TW_RED }} />

      <div className="max-w-5xl w-full px-20 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="text-[10px] font-semibold tracking-[0.28em] uppercase text-slate-400 mb-8">
            Thoughtworks · March 2026
          </motion.p>
          <motion.div variants={fadeUp} className="w-14 h-0.5 mb-8" style={{ backgroundColor: TW_RED }} />
          <motion.h1 variants={fadeUp} className="text-5xl font-light text-slate-900 leading-tight mb-4">
            Omnichannel<br />
            <span className="font-bold">Modernisation Strategy</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-500 font-light mb-10">
            National Retail Chain · Transformation Programme
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center gap-6">
            <div>
              <p className="text-sm font-bold text-slate-900">Vijayakumar G A</p>
              <p className="text-xs text-slate-500">Principal Modernisation Strategist</p>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div>
              <p className="text-xs font-semibold text-slate-900">Programme Start</p>
              <p className="text-xs text-slate-500">April 2026 · 24-month transformation</p>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div>
              <p className="text-xs font-semibold text-slate-900">Hard Deadline</p>
              <p className="text-xs font-semibold" style={{ color: TW_RED }}>BOPIS live · November 2026</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Slide>
  );
}

// ─── Slide 2: Approach ───────────────────────────────────────────────────────

export function ApproachSlide() {
  const steps = [
    {
      n: '01',
      title: 'Patterns & Hypothesis Testing',
      body: 'Formed the mental model before asking a single question. Five hypotheses, five targeted questions — each one framing the strategy before a line was drawn.',
    },
    {
      n: '02',
      title: 'Root cause over symptom',
      body: 'Five structural causes, not surface-level debt. The organisational design mirrors a business model that no longer exists. Fix the model, not just the code.',
    },
    {
      n: '03',
      title: 'Architecture mirrors organisation',
      body: 'Applied Inverse Conway Manoeuvre and Team Topologies. Stream-aligned teams map to bounded contexts (DDD). Enabling teams are time-limited with named disengagement criteria.',
    },
    {
      n: '04',
      title: 'Hard deadline as forcing function',
      body: 'BOPIS November 2026¹ is non-negotiable. Every decision traces back to the critical path. The contingency is defined before the programme starts — not discovered mid-flight.',
    },
    {
      n: '05',
      title: 'Every decision has a contingency',
      body: 'OMS slip → MVP-BOPIS. Hiring miss → intervention protocol. SAP attrition → knowledge-capture sprint. Every trade-off carries an ADR with a funded retirement plan.',
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-10">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-7">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-slate-400 mb-1">
              Part 1 · Problem-Solving Approach
            </p>
            <h2 className="text-2xl font-bold text-slate-900">Method, not instinct.</h2>
            <div className="w-10 h-0.5 mt-2" style={{ backgroundColor: TW_RED }} />
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-5 gap-4">
            {steps.map((s) => (
              <motion.div key={s.n} variants={fadeUp} className="flex flex-col gap-2">
                <p className="text-2xl font-extralight" style={{ color: TW_RED }}>{s.n}</p>
                <p className="text-sm font-bold text-slate-900 leading-snug">{s.title}</p>
                <div className="w-6 h-px bg-slate-300" />
                <p className="text-xs text-slate-600 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-7">
            <RedCallout>
              <p className="text-xs text-slate-700">
                <span className="font-semibold">Core belief:</span> Technology modernisation serves one outcome — every customer treated as a single customer, regardless of where they shop. The org structure, architecture, and delivery model all follow from that.
              </p>
            </RedCallout>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="¹ Assumed date — not stated in the brief" />
    </Slide>
  );
}

// ─── Slide 2B: Approach (A/B variant) ───────────────────────────────────────

export function ApproachSlideB() {
  const patterns = [
    {
      num: '01',
      title: 'The Dual-Speed IT Trap',
      diagnosis: 'Two groups diverged culturally, contractually, and politically — convergence is a cultural negotiation, not a technology request.',
      insight: 'Shared domain model first, not shared infrastructure.',
    },
    {
      num: '02',
      title: 'The Outsourcing Capability Vacuum',
      diagnosis: 'Outsourcing left procurement muscle but no architectural memory — nobody inside could challenge a vendor estimate or own a runbook.',
      insight: 'Insourcing is not a cost decision — it is a survivability decision.',
    },
    {
      num: '03',
      title: 'The Board Has a Date, Not a Strategy',
      diagnosis: 'BOPIS by Q3 was load-bearing before any architect had seen the OMS schema — the critical path must be designed around minimum viable capability.',
      insight: 'Protect the date by controlling scope, not by compressing delivery.',
    },
    {
      num: '04',
      title: 'Technology Risk Is Knowledge Risk',
      diagnosis: 'Every legacy component with no internal owner was a live risk event.',
      insight: 'Transfer knowledge before transferring ownership. Not after.',
    },
    {
      num: '05',
      title: 'The Vendor as Programme Constraint',
      diagnosis: 'The incumbent SI was a constraint on the timeline, financial model, and migration sequence — vendor exit is a workstream, not a dependency.',
      insight: 'Budget for parallel-run costs. Treat vendor exit as an explicit workstream.',
    },
  ];

  return (
    <Slide className="flex flex-col justify-between bg-white relative">
      <div className="flex-1 flex flex-col justify-center max-w-5xl w-full mx-auto px-12 pt-10 pb-4">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col h-full">

          {/* Header */}
          {/* Header — Macro Insight as title */}
          <motion.div variants={fadeUp} className="mb-6">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: TW_RED }}>
              Macro Insight · The 30,000-Foot View
            </p>
            <h2 className="text-[28px] font-bold text-slate-900 leading-tight tracking-tight">
              The diagnosis was never technical.
            </h2>
            <p className="text-base text-slate-500 mt-2 leading-snug max-w-2xl">
              None of these are technology problems. They are organisational and governance failures that surface as technology symptoms.
            </p>
            <div className="w-10 h-0.5 mt-4" style={{ backgroundColor: TW_RED }} />
          </motion.div>

          {/* Pattern rows */}
          <motion.div variants={stagger} className="flex flex-col gap-2 flex-1">
            {patterns.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="grid grid-cols-[32px_1fr_1px_260px] items-center gap-3 px-4 py-2.5 rounded-lg border border-slate-100 bg-slate-50/50"
              >
                {/* Number */}
                <span className="text-xs font-bold tracking-widest text-slate-300">{p.num}</span>

                {/* Title + diagnosis */}
                <div>
                  <p className="text-sm font-semibold text-slate-900 leading-tight">{p.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">{p.diagnosis}</p>
                </div>

                {/* Divider */}
                <div className="self-stretch bg-slate-200" />

                {/* Implication */}
                <div className="pl-3">
                  <p className="text-[9px] font-semibold tracking-widest uppercase mb-1" style={{ color: TW_RED }}>Implication</p>
                  <p className="text-[11px] text-slate-700 leading-snug font-medium">{p.insight}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
      <SlideFooter glossary="BOPIS: Buy Online, Pick Up In-Store · OMS: Order Management System · SI: Systems Integrator" />
    </Slide>
  );
}

// ─── Slide 3: The Descent ────────────────────────────────────────────────────

export function DescentSlide() {
  const questions = [
    {
      q: 'Q1',
      title: 'Is SAP integration event-capable, or are we polling?',
      tests: 'Dual-Speed IT',
      why: 'If SAP cannot emit events natively, the architecture bifurcates. The entire Strangler Fig migration sequence changes.',
    },
    {
      q: 'Q2',
      title: 'Are the 200+ stores technically homogeneous?',
      tests: 'Board Has a Date',
      why: 'Heterogeneous POS means a two-tier architecture, dual accuracy models, and $2–6M of Tier B remediation added to Phase 2.',
    },
    {
      q: 'Q3',
      title: 'How many pricing engines are running — and who owns each?',
      tests: 'Outsourcing Trap',
      why: 'Two engines are invisible while channels are separate. BOPIS makes them visible — a customer sees price A online and pays price B in-store.',
    },
    {
      q: 'Q4',
      title: 'What are the vendor contract terms — is there an active IP dispute?',
      tests: 'Vendor as Constraint',
      why: 'A 6-month notice period means 6 months of dual costs. An IP dispute could make source code and credentials contested mid-migration.',
    },
    {
      q: 'Q5',
      title: 'Can this organisation hire 65+ engineers in 24 months?',
      tests: 'Talent Gap',
      why: 'The 65:35 ratio is the measure of success — but every transformation hits the same wall: HR processes, comp bands, and pipelines not built for this pace.',
    },
    {
      q: 'Q6',
      title: 'Does the digital group already have a working inventory view?',
      tests: 'Board Has a Date',
      why: 'If no: the BOPIS critical path runs through SAP real-time integration — an 18–24 month programme. November becomes structurally impossible.',
    },
  ];

  return (
    <Slide className="flex flex-col justify-center bg-white relative">
      <div className="max-w-5xl w-full mx-auto px-12 pt-8 pb-4">
        <motion.div variants={stagger} initial="hidden" animate="visible">

          {/* Header */}
          <motion.div variants={fadeUp} className="mb-5">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-slate-400 mb-1">
              Part 1 · From Hypothesis to Question
            </p>
            <h2 className="text-2xl font-bold text-slate-900">The Descent</h2>
            <p className="text-sm text-slate-500 mt-1.5 max-w-2xl leading-snug">
              The answers to these six questions determine whether the programme is buildable as designed — or whether the strategy needs to change before it starts.
            </p>
            <div className="w-10 h-0.5 mt-3" style={{ backgroundColor: TW_RED }} />
          </motion.div>

          {/* 2x3 question grid */}
          <motion.div variants={stagger} className="grid grid-cols-2 gap-3">
            {questions.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex gap-3 border border-slate-100 rounded-xl bg-slate-50/50 px-4 py-3"
              >
                {/* Q badge */}
                <div className="shrink-0 pt-0.5">
                  <span className="text-[10px] font-bold tracking-widest text-slate-300">{item.q}</span>
                </div>

                <div className="min-w-0">
                  <p className="text-[12px] font-semibold text-slate-900 leading-snug mb-1">{item.title}</p>
                  <p className="text-[9px] font-bold tracking-widest uppercase mb-1.5" style={{ color: TW_RED }}>
                    Tests: {item.tests}
                  </p>
                  <p className="text-[10.5px] text-slate-500 leading-snug">{item.why}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
      <SlideFooter glossary="BOPIS: Buy Online, Pick Up In-Store · POS: Point of Sale · SI: Systems Integrator · SAP: Enterprise ERP platform" />
    </Slide>
  );
}

// ─── Slide 5: Hypotheses ─────────────────────────────────────────────────────

export function HypothesesSlide() {
  const items = [
    {
      h: 'H1',
      pattern: 'Dual-Speed IT · Technical',
      revealed: 'SAP cannot emit events natively — middleware required. A constraint, not a blocker.',
      changed: 'Two-tier integration: events for modern systems, polling adapters for legacy POS.',
    },
    {
      h: 'H2',
      pattern: 'Dual-Speed IT · Governance',
      revealed: 'No governance authority existed. Conflicts resolved by seniority. The ESB accumulated logic because nobody could say no.',
      changed: 'Architecture Guild with binding authority, CTO escalation (5-day SLA), ADRs as mandatory institutional memory.',
    },
    {
      h: 'H3',
      pattern: 'Outsourcing Trap · Hidden Complexity',
      revealed: 'Two engines running in parallel — SAP for base pricing, digital for promotional logic. Neither formally documented.',
      changed: 'Unified Pricing Service in Phase 2. Discovery sprint in Phase 0. Freeze protocol around promotional periods. Daily reconciliation during transition.',
    },
    {
      h: 'H4',
      pattern: 'Board Has a Date · Critical Path',
      revealed: 'Yes — a proven inventory view built for online orders, not dependent on SAP real-time.',
      changed: 'Pilot on existing digital inventory — no SAP dependency. SAP real-time moves to Phase 2. November holds.',
    },
    {
      h: 'H5',
      pattern: 'Board Has a Date · Store Readiness',
      revealed: '~60% Tier A (event-capable POS), ~40% Tier B (legacy — cannot emit events without replacement).',
      changed: 'Phase 1 Tier A stores only. 90% accuracy threshold — suppress stale inventory rather than show it. Tier B remediation scoped as Phase 2 ($2–6M).',
    },
  ];

  return (
    <Slide className="flex flex-col justify-center bg-white relative">
      <div className="max-w-5xl w-full mx-auto px-12 pt-8 pb-4">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-5">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-slate-400 mb-1">
              Part 1 · The Descent
            </p>
            <h2 className="text-2xl font-bold text-slate-900">Hypothesis → Question → Approach</h2>
            <p className="text-sm text-slate-500 mt-1.5 leading-snug">
              Not gathering information — stress-testing a mental model before the budget is committed.
            </p>
            <div className="w-10 h-0.5 mt-3" style={{ backgroundColor: TW_RED }} />
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-2 gap-3">
            {items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="border border-slate-100 rounded-xl bg-slate-50/40 px-5 py-4 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold tracking-widest text-slate-300">{item.h}</span>
                  <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: TW_RED }}>{item.pattern}</span>
                </div>
                <div className="space-y-1.5">
                  <p className="text-[10.5px] text-slate-500 leading-snug">
                    <span className="font-semibold text-slate-700">Revealed — </span>{item.revealed}
                  </p>
                  <p className="text-[10.5px] text-slate-500 leading-snug">
                    <span className="font-semibold text-slate-700">Approach — </span>{item.changed}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="SAP: Enterprise ERP · ESB: Enterprise Service Bus · ADR: Architecture Decision Record · BOPIS: Buy Online, Pick Up In-Store · POS: Point of Sale" />
    </Slide>
  );
}

// ─── Slide 6: TOC ────────────────────────────────────────────────────────────

export function TOCSlide() {
  // Slide numbers are 1-indexed in the hash
  const parts = [
    { label: 'Part 1', title: 'Approach, Intent & Strategy', slides: 'Slides 3–10', hash: '#3' },
    { label: 'Part 2', title: 'Current State Assessment', slides: 'Slides 11–13', hash: '#11' },
    { label: 'Part 3', title: 'Target Architecture', slides: 'Slides 14–19', hash: '#14' },
    { label: 'Part 4', title: 'Organisational Design', slides: 'Slides 20–22', hash: '#20' },
    { label: 'Part 5', title: 'Change Management & People', slides: 'Slides 23–24', hash: '#23' },
    { label: 'Part 6', title: 'Delivery Model & Roadmap', slides: 'Slides 25–29', hash: '#25' },
    { label: 'Part 7', title: 'Vendor & Sourcing Strategy', slides: 'Slide 30', hash: '#30' },
    { label: 'Part 8', title: 'Trade-offs, Risks & Mitigations', slides: 'Slides 31–32', hash: '#31' },
    { label: 'Part 9', title: 'Outcomes & Success Measures', slides: 'Slides 33–34', hash: '#33' },
    { label: 'Part 10', title: 'Financial Framing', slides: 'Slide 35', hash: '#35' },
    // Note: slide count stays at 34 — StrategicRequirementsSlide replaces AssumptionsSlide
  ];

  return (
    <Slide className="flex items-center justify-center bg-slate-50 relative">
      <div className="max-w-5xl w-full px-12 py-10">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-6">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-slate-400 mb-1">Navigation</p>
            <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
            <div className="w-10 h-0.5 mt-2" style={{ backgroundColor: TW_RED }} />
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-2 gap-x-10 gap-y-3">
            {parts.map((p, i) => (
              <motion.a
                key={p.label}
                variants={fadeUp}
                href={p.hash}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <span
                  className="text-[10px] font-bold tracking-[0.12em] uppercase pt-0.5 min-w-[48px]"
                  style={{ color: TW_RED }}
                >
                  {p.label}
                </span>
                <div className="flex-1 border-b border-slate-200 pb-2.5">
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-[#E4003B] transition-colors">
                    {p.title}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{p.slides}</p>
                </div>
                <span className="text-xs text-slate-300 pt-0.5 group-hover:text-[#E4003B] transition-colors">→</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: TW_RED }} />
              <p className="text-[10px] text-slate-500">35 slides · 24-month programme</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <p className="text-[10px] text-slate-500">Hard deadline: BOPIS November 2026</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <p className="text-[10px] text-slate-500">Programme total: $25–45M · ROI 18–30 months</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter />
    </Slide>
  );
}

// ─── Slide 7: Strategic Requirements ─────────────────────────────────────────

export function StrategicRequirementsSlide() {
  const requirements = [
    {
      code: 'SR1',
      title: 'Design the integration architecture for the actual estate, not the ideal one',
      from: 'H1 + H5',
      intent: 'SAP cannot emit events; 40% of stores cannot either. Design for Tier A (event-driven) and Tier B (polling) — not for the ideal estate with 40% as exceptions.',
    },
    {
      code: 'SR2',
      title: 'Build Unified Inventory as the first domain service',
      from: 'H4 + H5',
      intent: 'The BOPIS pilot launches on the existing digital inventory system — a named bridge with documented decommission criteria, not a permanent workaround. Unified Inventory (CQRS) is Domain Service #1.',
    },
    {
      code: 'SR3',
      title: 'Resolve the dual pricing engine conflict before designing the Unified Pricing Service',
      from: 'H3',
      intent: 'A pricing model discovery sprint runs in Phase 0 — not in parallel with migration. The Unified Pricing Service requires documented inputs before design begins.',
    },
    {
      code: 'SR4',
      title: 'Prove OMS integration viability in Phase 0 and agree the contingency before it is needed',
      from: 'H4 · no OMS exists',
      intent: 'The OMS is the highest-risk integration on the critical path. If the PoC reveals a slip, MVP-BOPIS activates — the board agrees the contingency in Phase 0, before it is needed.',
    },
    {
      code: 'SR5',
      title: 'Rebuild the mobile platform on a sustainable architecture',
      from: 'Current state finding',
      intent: 'Screen-scraping cannot survive 24 months of SAP changes. React Native on BFF APIs from Sprint 1.',
    },
    {
      code: 'SR6',
      title: 'Establish an architecture governance body with binding decision authority',
      from: 'H2',
      intent: 'The Architecture Guild holds binding — not advisory — decision authority, with CTO escalation and a 5-day resolution SLA. The ESB accumulated logic because no authority existed to prevent it.',
    },
  ];

  return (
    <Slide className="flex flex-col justify-center bg-white relative">
      <div className="max-w-5xl w-full mx-auto px-12 pt-8 pb-4">
        <motion.div variants={stagger} initial="hidden" animate="visible">

          {/* Header */}
          <motion.div variants={fadeUp} className="mb-5">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-slate-400 mb-1">
              Part 1 · From Diagnosis to Strategy
            </p>
            <h2 className="text-2xl font-bold text-slate-900">From Diagnosis to Strategic Requirements</h2>
            <p className="text-sm text-slate-500 mt-1.5 leading-snug">
              Each requirement traces to a hypothesis. Each hypothesis traces to a finding. The connection is made visible — not assumed.
            </p>
            <div className="w-10 h-0.5 mt-3" style={{ backgroundColor: TW_RED }} />
          </motion.div>

          {/* 2×3 grid */}
          <motion.div variants={stagger} className="grid grid-cols-2 gap-3">
            {requirements.map((r, i) => (
              <motion.div key={i} variants={fadeUp} className="border border-slate-100 rounded-lg bg-slate-50/40 px-4 py-3">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[10px] font-bold tracking-widest text-slate-300">{r.code}</span>
                  <span className="text-[9px] text-slate-400 italic">← {r.from}</span>
                </div>
                <p className="text-[11.5px] font-semibold text-slate-900 leading-snug mb-1">{r.title}</p>
                <p className="text-[10px] text-slate-500 leading-snug">{r.intent}</p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
      <SlideFooter glossary="SR: Strategic Requirement · CQRS: Command Query Responsibility Segregation · BFF: Backend for Frontend · OMS: Order Management System" />
    </Slide>
  );
}

// ─── Slide 8 (hidden): Assumptions ───────────────────────────────────────────

export function AssumptionsSlide() {
  const facts = [
    { q: 'Primary business driver?', a: 'Revenue growth (BOPIS, cross-channel, loyalty); cost reduction secondary', impact: 'BOPIS is the critical path milestone' },
    { q: 'Hard deadline?', a: 'BOPIS live in 30+ pilot stores before Q4 peak. Programme starts April 2026', impact: 'Roadmap built backward from November 2026; zero margin for slippage' },
    { q: 'State of store POS?', a: '60% modern Tier A (near-real-time); 40% legacy Tier B (polling or hardware refresh)', impact: 'Two-tier inventory architecture required; BOPIS pilot Tier A only' },
    { q: 'Who owns pricing data?', a: 'SAP ERP = base pricing master. Separate digital pricing engine = promotional logic', impact: 'PIM migration must unify both engines — substantially harder than product data alone' },
    { q: 'Enterprise vendor contract?', a: '18 months remaining, 6-month notice. ERP customisation IP ownership disputed', impact: 'Vendor scope reduction cannot begin before Month 7; legal review Month 1' },
    { q: 'Internal hiring capacity?', a: 'Board approved 60 heads over 18 months. Realistic velocity: 3–5/month after 2-month ramp', impact: 'Hiring plan stress-tested; intervention protocol defined' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 1 · Assumptions, Intent & Strategy" title="Opening Assumptions" />
          </motion.div>

          <motion.p variants={fadeUp} className="text-xs text-slate-500 mb-4">
            6 clarifying questions posed at programme outset. All confirmed — now architectural constraints.
          </motion.p>

          <motion.div variants={fadeUp}>
            <table className="w-full border-collapse text-left rounded-lg overflow-hidden">
              <thead>
                <tr>
                  <Th>Question</Th>
                  <Th>Confirmed Answer</Th>
                  <Th>Impact on Strategy</Th>
                </tr>
              </thead>
              <tbody>
                {facts.map((f, i) => (
                  <Tr key={i} even={i % 2 === 1}>
                    <Td className="font-medium text-slate-800 w-[24%]">{f.q}</Td>
                    <Td className="w-[40%]">{f.a}</Td>
                    <Td className="w-[36%] text-slate-600">{f.impact}</Td>
                  </Tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4">
            <AmberCallout>
              <p className="text-xs text-slate-700">
                <span className="font-semibold">10 remaining Phase-0 assumptions</span> — each has a named owner, validation target date, and a defined contingency if invalidated (see Appendix B). Assumptions are not accepted risks; they are managed unknowns with explicit resolution paths.
              </p>
            </AmberCallout>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="BOPIS: Buy Online, Pick Up In-Store · ESB: Enterprise Service Bus · POS: Point of Sale · PIM: Product Information Management" />
    </Slide>
  );
}

// ─── Slide 5: North Star & Principles ───────────────────────────────────────

export function NorthStarSlide() {
  const principles = [
    { n: 'P1', title: 'Strangler Fig over Big Bang', body: 'Incremental replacement with agreed decommission criteria before migration begins.', group: 1 },
    { n: 'P2', title: 'DDD as architecture compass', body: 'Clear bounded contexts: Product, Pricing, Inventory, Order, Customer, Fulfilment.', group: 1 },
    { n: 'P3', title: 'Events as integration fabric', body: 'Managed event streaming replaces ESB. Schema registry governs evolution.', group: 1 },
    { n: 'P4', title: 'API-first, channel-agnostic', body: 'Commerce via APIs. Channels are consumers via BFFs — no privileged access.', group: 1 },
    { n: 'P5', title: 'Buy for commodity, build for diff.', body: 'SaaS PIM/OMS evaluated with PoC sprints against real edge cases — not vendor demos.', group: 1 },
    { n: 'P6', title: 'Continuous delivery non-negotiable', body: 'CI/CD, automated testing, trunk-based dev are prerequisites, not aspirations.', group: 2 },
    { n: 'P7', title: 'Measure from day one', body: 'Programme Measurement Dashboard live before first domain service. Outcomes tracked in near-real-time.', group: 2 },
    { n: 'P8', title: 'Inverse Conway Manoeuvre', body: 'Org structure mirrors target architecture. Teams that ship independently must not share pipelines.', group: 3 },
    { n: 'P9', title: 'Insource alongside delivery', body: 'Every workstream carries a capability transfer plan aligned to hiring velocity.', group: 3 },
    { n: 'P10', title: 'Security by design, not audit', body: 'PCI-DSS scope, GDPR, mTLS — architectural inputs, not post-delivery reviews.', group: 3 },
  ];

  const groupStyle: Record<number, { border: string; label: string; dot: string }> = {
    1: { border: 'border-blue-100 bg-blue-50/40', label: 'How the system is built', dot: 'bg-blue-300' },
    2: { border: 'border-amber-100 bg-amber-50/40', label: 'How it is delivered', dot: 'bg-amber-400' },
    3: { border: 'border-emerald-100 bg-emerald-50/40', label: 'How the org sustains it', dot: 'bg-emerald-400' },
  };

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 1 · Assumptions, Intent & Strategy" title="North Star & Guiding Principles" />
          </motion.div>

          <motion.div variants={fadeUp} className="mb-4">
            <RedCallout>
              <p className="text-sm font-light text-slate-800 leading-relaxed italic">
                "The goal is not to modernise technology. The goal is to <strong>treat every customer as a single customer</strong> — regardless of where they shop — at the speed the market demands. Technology modernisation is in service of that outcome."
              </p>
            </RedCallout>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-5 gap-3">
            {principles.map((p) => (
              <motion.div key={p.n} variants={fadeUp} className={`border rounded-lg p-3 ${groupStyle[p.group].border}`}>
                <p className="text-[10px] font-bold tracking-widest mb-1" style={{ color: TW_RED }}>{p.n}</p>
                <p className="text-xs font-semibold text-slate-900 leading-snug mb-1.5">{p.title}</p>
                <p className="text-[10px] text-slate-500 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Legend */}
          <motion.div variants={fadeUp} className="flex items-center gap-5 mt-3">
            {Object.entries(groupStyle).map(([g, s]) => (
              <div key={g} className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full ${s.dot}`} />
                <span className="text-[9px] text-slate-500">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="DDD: Domain-Driven Design · BFF: Backend for Frontend · ESB: Enterprise Service Bus · CI/CD: Continuous Integration/Continuous Delivery · mTLS: Mutual TLS" />
    </Slide>
  );
}

// ─── Slide 9: Omnichannel Sequencing ─────────────────────────────────────────

export function OmnichannelSequencingSlide() {
  const capabilities = [
    {
      n: 'C1',
      title: 'Unified Customer Identity',
      phase: 'Phase 1',
      contract: 'The customer is the same person in every channel.',
      decisions: [
        'Elevated to Phase 1 — not because BOPIS requires it at launch, but because every capability built without it accumulates identity debt.',
        'A genuine bounded context: GDPR consent, right-to-erasure, and identity verification rules live here — not in a shared database table.',
      ],
    },
    {
      n: 'C2',
      title: 'Unified Inventory',
      phase: 'Phase 1',
      contract: 'The stock position is the same truth in every channel.',
      decisions: [
        'CQRS: strongly consistent write model for stock mutations; eventually consistent read model for customer queries. Different concerns, different models.',
        'Tier A stores: near-real-time events. Tier B: polling at frequency modelled against transaction velocity.',
        '90% accuracy threshold: stores below it have inventory suppressed entirely — not shown as "limited." Inaccurate availability is worse than no availability.',
        'BOPIS pilot runs on the existing digital system as a named, time-bounded bridge. Unified Inventory replaces it in Phase 2.',
      ],
    },
    {
      n: 'C3',
      title: 'Unified Order Orchestration',
      phase: 'Phase 1 (PoC) · Phase 2 (full)',
      contract: 'Orders can be placed in any channel and fulfilled through any combination of channels.',
      decisions: [
        'Highest-risk integration on the BOPIS critical path. OMS proof-of-concept is a Phase 0 gate, not a Phase 1 assumption.',
        'Contingency: if OMS integration is not ready by Month 5, BOPIS launches in minimum viable mode — existing digital system, stores notified by email and SMS. November is protected.',
      ],
    },
  ];

  return (
    <Slide className="flex flex-col justify-center bg-white relative">
      <div className="max-w-5xl w-full mx-auto px-12 pt-8 pb-4">
        <motion.div variants={stagger} initial="hidden" animate="visible">

          {/* Header */}
          <motion.div variants={fadeUp} className="mb-4">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-slate-400 mb-1">
              Part 1 · Foundations Before Features
            </p>
            <h2 className="text-2xl font-bold text-slate-900">The Three Foundational Capabilities</h2>
            <p className="text-sm text-slate-500 mt-1.5 leading-snug max-w-3xl">
              BOPIS and cross-channel cart are not capabilities — they are use cases. A roadmap built around use cases rebuilds the same foundations multiple times, once per deadline. Build the foundations once; the use cases follow in order.
            </p>
            <div className="w-10 h-0.5 mt-3" style={{ backgroundColor: TW_RED }} />
          </motion.div>

          {/* Capability cards */}
          <motion.div variants={stagger} className="grid grid-cols-3 gap-4">
            {capabilities.map((c) => (
              <motion.div key={c.n} variants={fadeUp} className="border border-slate-100 rounded-xl bg-white px-4 py-4 flex flex-col gap-3">

                {/* Title */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded" style={{ backgroundColor: '#ffeef2', color: TW_RED }}>{c.n}</span>
                    <span className="text-[8px] font-semibold tracking-widest uppercase text-slate-400">{c.phase}</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900 leading-snug">{c.title}</p>
                  <p className="text-[10px] text-slate-500 italic mt-1 leading-snug">"{c.contract}"</p>
                </div>

                <div className="w-full h-px bg-slate-100" />

                {/* Design decisions */}
                <div>
                  <p className="text-[8px] font-bold tracking-widest uppercase mb-1.5" style={{ color: TW_RED }}>Design Decisions</p>
                  <ul className="space-y-1.5">
                    {c.decisions.map((d, i) => (
                      <li key={i} className="flex gap-1.5 text-[9px] text-slate-600 leading-snug">
                        <span className="shrink-0 mt-0.5 w-1 h-1 rounded-full bg-slate-300" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
      <SlideFooter glossary="CQRS: Command Query Responsibility Segregation · OMS: Order Management System · BOPIS: Buy Online, Pick Up In-Store · GDPR: General Data Protection Regulation" />
    </Slide>
  );
}

// ─── Slide 10: Strategy on a Page ────────────────────────────────────────────

export function StrategyOnPageSlide() {
  return (
    <Slide className="flex items-center justify-center bg-slate-50 relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-5">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-1 text-slate-400">
              Part 1 · Summary
            </p>
            <h2 className="text-2xl font-bold text-slate-900">Strategy on a Page</h2>
            <div className="w-10 h-0.5 mt-2" style={{ backgroundColor: TW_RED }} />
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-3 gap-4">
            {/* Problem */}
            <motion.div variants={fadeUp} className="col-span-3">
              <RedCallout>
                <p className="text-xs text-slate-800">
                  <span className="font-bold">The problem in one sentence:</span> Two separately designed business units — digital and physical — share customers but not systems, data, or delivery capability; the post-merger mandate demands they operate as one.
                </p>
              </RedCallout>
            </motion.div>

            {/* Three principle themes */}
            <motion.div variants={fadeUp}>
              <Card className="p-4 h-full">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: TW_RED }}>Architecture</p>
                <p className="text-xs font-semibold text-slate-900 mb-1.5">MACH composable commerce</p>
                <ul className="text-[10px] text-slate-600 space-y-1 leading-relaxed">
                  <li>· Unified PIM, Pricing, Inventory, OMS</li>
                  <li>· Event streaming replaces ESB</li>
                  <li>· BFF per channel, DDD bounded contexts</li>
                  <li>· Anti-corruption layer around SAP</li>
                  <li>· Two-tier inventory (Tier A events, Tier B polling)</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-4 h-full">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: TW_RED }}>Organisation</p>
                <p className="text-xs font-semibold text-slate-900 mb-1.5">Team Topologies + Insourcing</p>
                <ul className="text-[10px] text-slate-600 space-y-1 leading-relaxed">
                  <li>· 1 Platform team, 6 stream-aligned teams</li>
                  <li>· 2 time-limited enabling teams (Thoughtworks)</li>
                  <li>· 60 net-new hires over 18 months</li>
                  <li>· 65:35 internal:external by Month 18</li>
                  <li>· Architecture Guild with binding authority</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-4 h-full">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: TW_RED }}>Delivery</p>
                <p className="text-xs font-semibold text-slate-900 mb-1.5">Strangler Fig · Thin slices</p>
                <ul className="text-[10px] text-slate-600 space-y-1 leading-relaxed">
                  <li>· Phase 0: Foundations + critical decisions (M1–3)</li>
                  <li>· Phase 1: BOPIS 30 pilot stores (M3–8)</li>
                  <li>· Phase 2: Scale, SAP real-time, mobile exit (M8–16)</li>
                  <li>· Phase 3: Full estate, ESB retire, loyalty (M16–24)</li>
                </ul>
              </Card>
            </motion.div>

            {/* Critical path + outcomes + financial */}
            <motion.div variants={fadeUp}>
              <div className="border border-amber-200 rounded-xl bg-amber-50 p-4 h-full">
                <p className="text-[10px] font-bold tracking-widest uppercase text-amber-700 mb-2">Critical Path Anchor</p>
                <p className="text-lg font-bold text-amber-800 leading-tight">BOPIS live<br />November 2026</p>
                <p className="text-[10px] text-amber-700 mt-1.5">Month 7 · 30 Tier A pilot stores<br />OMS slip → MVP-BOPIS activated</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="border border-emerald-200 rounded-xl bg-emerald-50 p-4 h-full">
                <p className="text-[10px] font-bold tracking-widest uppercase text-emerald-700 mb-2">Target Outcomes</p>
                <ul className="text-[10px] text-emerald-800 space-y-1 leading-relaxed">
                  <li>· 15% BOPIS penetration (blended)</li>
                  <li>· Cross-channel NPS +10 pts</li>
                  <li>· Mobile conversion +20%</li>
                  <li>· Feature lead time ≤6 weeks</li>
                  <li>· ESB decommissioned Month 22</li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="border border-slate-200 rounded-xl bg-white p-4 h-full">
                <p className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2">Financial Envelope</p>
                <p className="text-lg font-bold text-slate-900 leading-tight">$25–45M<br /><span className="text-sm font-normal text-slate-500">24-month programme</span></p>
                <p className="text-[10px] text-slate-500 mt-1.5">Revenue uplift $14–29M/yr<br />Breakeven 18–30 months</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="MACH: Microservices, API-first, Cloud-native, Headless · OMS: Order Management System · MVP-BOPIS: Minimum Viable BOPIS contingency mode" />
    </Slide>
  );
}

// ─── Slide 10 V2: Strategy on a Page ─────────────────────────────────────────

export function StrategyOnPageSlideV2() {
  const objectives = [
    {
      label: 'Unify the Platform',
      detail: 'One platform, two channels — shared inventory, pricing, and identity',
      metric: 'Feature lead time ≤6 weeks',
    },
    {
      label: 'Launch Omnichannel',
      detail: 'BOPIS live in 30 stores · cross-channel cart by Phase 2',
      metric: '15% BOPIS penetration · NPS +10 pts',
    },
    {
      label: 'Own the Tech',
      detail: 'Insource engineering · exit Thoughtworks by Month 18',
      metric: '65:35 internal by M18 · ESB retired M22',
    },
    {
      label: 'Grow Revenue',
      detail: 'Cross-channel uplift driven by BOPIS and mobile',
      metric: '$14–29M/yr · mobile conversion +20%',
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-slate-50 relative">
      <div className="max-w-5xl w-full px-12 py-6">
        <motion.div variants={stagger} initial="hidden" animate="visible">

          {/* Header */}
          <motion.div variants={fadeUp} className="mb-3">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-1 text-slate-400">
              Part 1 · Strategy on a Page
            </p>
            <h2 className="text-2xl font-bold text-slate-900">Omnichannel Modernisation Strategy</h2>
            <div className="w-10 h-0.5 mt-2" style={{ backgroundColor: TW_RED }} />
          </motion.div>

          {/* North Star */}
          <motion.div variants={fadeUp} className="mb-3">
            <div className="border-l-4 pl-3 py-1.5 rounded-r-lg bg-slate-50 flex items-center gap-3" style={{ borderColor: TW_RED }}>
              <p className="text-[9px] font-bold tracking-widest uppercase text-slate-400 shrink-0">North Star</p>
              <p className="text-[10px] text-slate-700 italic leading-snug">"The goal is to <span className="font-semibold not-italic">treat every customer as a single customer</span> — regardless of where they shop — at the speed the market demands."</p>
            </div>
          </motion.div>

          {/* Business Objectives + Outcomes */}
          <motion.div variants={fadeUp} className="mb-3">
            <div className="grid grid-cols-4 gap-2.5">
              {objectives.map((o, i) => (
                <div key={i} className="border border-slate-200 rounded-xl bg-white px-3 py-2.5 flex flex-col">
                  <p className="text-[10px] font-bold text-slate-900 mb-1">{o.label}</p>
                  <p className="text-[9px] text-slate-500 leading-snug">{o.detail}</p>
                  <div className="mt-auto pt-2">
                    <p className="text-[9px] font-semibold" style={{ color: TW_RED }}>{o.metric}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Omnichannel Capabilities */}
          <motion.div variants={fadeUp} className="mb-3">
            <div className="border border-slate-200 rounded-xl bg-white px-4 py-2">
              <div className="flex items-center gap-0">
                {[
                  { phase: 'Phase 1', title: 'Unified Customer Identity' },
                  { phase: 'Phase 1', title: 'Unified Inventory' },
                  { phase: 'Phase 1 (PoC) · Phase 2 (full)', title: 'Unified Order Orchestration' },
                ].map((c, i, arr) => (
                  <div key={i} className={`flex-1 flex items-center gap-2 px-2.5 py-1.5 ${i > 0 ? 'border-l border-slate-100' : ''}`}>
                    <div className="min-w-0 flex-1">
                      <p className="text-[8px] font-semibold tracking-widest uppercase text-slate-400 leading-tight">{c.phase}</p>
                      <p className="text-[10px] font-bold text-slate-800 leading-tight">{c.title}</p>
                    </div>
                    {i < arr.length - 1 && <span className="text-slate-300 text-sm shrink-0">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-3 gap-3">
            {/* Architecture */}
            <motion.div variants={fadeUp}>
              <Card className="p-4 h-full">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: TW_RED }}>Architecture</p>
                <p className="text-xs font-semibold text-slate-900 mb-1.5">MACH composable commerce</p>
                <ul className="text-[10px] text-slate-600 space-y-1 leading-relaxed">
                  <li>· Unified PIM, Pricing, Inventory, OMS</li>
                  <li>· Event streaming replaces ESB</li>
                  <li>· CQRS — separate read/write models per domain</li>
                  <li>· BFF per channel · DDD bounded contexts</li>
                  <li>· Anti-corruption layer around SAP</li>
                </ul>
              </Card>
            </motion.div>

            {/* Organisation */}
            <motion.div variants={fadeUp}>
              <Card className="p-4 h-full">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: TW_RED }}>Organisation</p>
                <p className="text-xs font-semibold text-slate-900 mb-1.5">Team Topologies + Insourcing</p>
                <ul className="text-[10px] text-slate-600 space-y-1 leading-relaxed">
                  <li>· 1 Platform team, 6 stream-aligned teams</li>
                  <li>· 2 time-limited enabling teams (Thoughtworks)</li>
                  <li>· 60 net-new hires over 18 months</li>
                  <li>· 65:35 internal:external by Month 18</li>
                  <li>· Architecture Guild with binding authority</li>
                </ul>
              </Card>
            </motion.div>

            {/* Delivery */}
            <motion.div variants={fadeUp}>
              <Card className="p-4 h-full">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: TW_RED }}>Delivery</p>
                <p className="text-xs font-semibold text-slate-900 mb-1.5">Strangler Fig · Thin slices</p>
                <ul className="text-[10px] text-slate-600 space-y-1 leading-relaxed">
                  <li>· Phase 0: Foundations + critical decisions (M1–3)</li>
                  <li>· Phase 1: BOPIS 30 pilot stores (M3–8)</li>
                  <li>· Phase 2: Scale, SAP real-time, mobile exit (M8–16)</li>
                  <li>· Phase 3: Full estate, ESB retire, loyalty (M16–24)</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          {/* Financial — full width */}
          <motion.div variants={fadeUp} className="mt-3">
            <div className="border border-slate-200 rounded-xl bg-white px-4 py-2.5 flex items-center gap-8">
              <p className="text-[9px] font-bold tracking-widest uppercase text-slate-400 shrink-0">Financial Envelope</p>
              <div className="flex items-center gap-6 text-[10px]">
                <span className="font-bold text-slate-900">$25–45M <span className="font-normal text-slate-500">investment · 24-month programme</span></span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-600">Revenue uplift <span className="font-semibold text-slate-800">$14–29M/yr</span></span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-600">Breakeven <span className="font-semibold text-slate-800">18–30 months</span></span>
              </div>
            </div>
          </motion.div>


        </motion.div>
      </div>
      <SlideFooter glossary="MACH: Microservices, API-first, Cloud-native, Headless · CQRS: Command Query Responsibility Segregation · OMS: Order Management System" />
    </Slide>
  );
}

// ─── Slide 11: Trade-offs Made Explicit ──────────────────────────────────────

export function TradeoffsExplicitSlide() {
  const tradeoffs = [
    {
      n: 'T1',
      title: 'Delivery date vs. architectural purity',
      gained: 'November 2026 protected. Pilot launches on time, within a scope the organisation can execute.',
      gaveUp: 'Architectural coherence at launch. BOPIS runs on the digital inventory system we plan to replace.',
      why: 'Waiting for SAP real-time integration moves the launch to Month 18. No architectural purity is worth a programme that loses board confidence before it delivers.',
      cost: 'Architecture team accepted a named technical debt item with written decommission criteria.',
    },
    {
      n: 'T2',
      title: 'Timeline honesty vs. stakeholder expectation',
      gained: 'An achievable 24-month timeline. A programme designed to succeed, not to impress.',
      gaveUp: 'The 18-month commitment the CTO expected. The discomfort of delivering a number no one wanted to hear.',
      why: 'Three findings made 18 months impossible: SAP ERP assessment (4 months, not 8 weeks); Tier B POS remediation invisible in original scope; vendor exit with a 6-month notice period and active IP dispute.',
      cost: 'Board accepted a longer timeline. Commercial team accepted later delivery of some capabilities.',
    },
    {
      n: 'T3',
      title: 'Inventory availability vs. strict consistency',
      gained: 'Unified Inventory stays available under peak trading load, even when the write path is under stress.',
      gaveUp: 'Strict consistency. The read model is eventually consistent — up to 60 seconds stale at peak.',
      why: 'Unavailability at peak trading is a worse experience than a 60-second staleness window. The 90% accuracy threshold for Tier B stores follows the same logic.',
      cost: 'Customer experience team accepted that "in stock" reflects the last read model update, not this exact millisecond.',
    },
    {
      n: 'T4',
      title: 'Buy vs. build — the 80% threshold',
      gained: 'PIM, OMS, and search delivered faster. Engineering focused on differentiated work.',
      gaveUp: 'Exact fit. The org adapts its processes to the platform for the remaining 20% — not the reverse.',
      why: 'Customising beyond 20% produces a vendor-shaped monolith that cannot be upgraded without rework. The organisation has already lived through one generation of that problem.',
      cost: 'Product and operations teams accepted workflow changes. Bespoke OMS behaviour not in the chosen platform was deferred to Phase 2.',
    },
    {
      n: 'T5',
      title: 'Internal capability vs. delivery speed',
      gained: 'An organisation that operates the platform independently at Month 24. The 65:35 ratio measures capability — not headcount preference.',
      gaveUp: 'Speed in Phase 1. Internal engineers learn while delivering — and learning takes time.',
      why: 'A programme that delivers a modern platform but leaves the org dependent on contractors has not solved the problem. It has replaced one dependency with another.',
      cost: 'Programme sponsors accepted slower Phase 1 delivery. Thoughtworks accepted that enabling teams are measured by how quickly they make themselves unnecessary.',
    },
  ];

  return (
    <Slide className="flex flex-col justify-center bg-white relative">
      <div className="max-w-6xl w-full mx-auto px-12 pt-8 pb-4">
        <motion.div variants={stagger} initial="hidden" animate="visible">

          {/* Header */}
          <motion.div variants={fadeUp} className="mb-3">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-1 text-slate-400">
              Part 1 · Strategy
            </p>
            <h2 className="text-2xl font-bold text-slate-900">Where the Strategy Took Its Risks</h2>
            <p className="text-sm text-slate-500 mt-1.5 max-w-3xl leading-snug">
              Unnamed trade-offs surface as failures. These five were named, owned, and accepted before the cost arrived.
            </p>
            <div className="w-10 h-0.5 mt-3" style={{ backgroundColor: TW_RED }} />
          </motion.div>

          {/* Trade-off cards — 3-row aligned grid */}
          <motion.div variants={stagger} className="grid grid-cols-5 gap-3">
            {/* Row 1: titles */}
            {tradeoffs.map((t) => (
              <motion.div key={`title-${t.n}`} variants={fadeUp} className="border border-slate-100 rounded-xl bg-white px-4 py-3 flex items-start justify-between gap-2">
                <p className="text-[11px] font-bold text-slate-900 leading-snug">{t.title}</p>
                <span className="text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded shrink-0" style={{ backgroundColor: '#ffeef2', color: TW_RED }}>{t.n}</span>
              </motion.div>
            ))}
            {/* Row 2: Gained */}
            {tradeoffs.map((t) => (
              <motion.div key={`gained-${t.n}`} variants={fadeUp} className="rounded-xl bg-white border border-slate-100 px-3 py-2.5">
                <p className="text-[8px] font-bold tracking-widest uppercase text-emerald-600 mb-1">Gained</p>
                <p className="text-[9px] text-slate-700 leading-snug">{t.gained}</p>
              </motion.div>
            ))}
            {/* Row 3: Gave up */}
            {tradeoffs.map((t) => (
              <motion.div key={`gaveup-${t.n}`} variants={fadeUp} className="rounded-xl bg-white border border-slate-100 px-3 py-2.5">
                <p className="text-[8px] font-bold tracking-widest uppercase text-amber-600 mb-1">Gave up</p>
                <p className="text-[9px] text-slate-700 leading-snug">{t.gaveUp}</p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
      <SlideFooter />
    </Slide>
  );
}

// ─── Slide 7: Landscape Snapshot ─────────────────────────────────────────────

export function LandscapeSnapshotSlide() {
  const rows = [
    { dim: 'Delivery model', digital: 'Agile, internal teams, sprint-based', enterprise: 'Waterfall, outsourced vendors, change-board gated' },
    { dim: 'Product catalog', digital: 'Own copy — delta snapshots from SAP via ESB', enterprise: 'SAP ERP as master of record' },
    { dim: 'Pricing', digital: 'Separate promotional pricing engine', enterprise: 'SAP pricing module (base pricing)' },
    { dim: 'Inventory', digital: 'Custom digital inventory system (async sync)', enterprise: 'Legacy ERP-managed, stale' },
    { dim: 'Integration', digital: 'Corporate ESB (async, snapshot-based)', enterprise: 'ESB + point-to-point legacy interfaces' },
    { dim: 'POS estate', digital: '—', enterprise: '~60% modern Tier A · ~40% legacy Tier B' },
    { dim: 'Mobile channel', digital: 'Outsourced screen-scraping vendor', enterprise: '—' },
    { dim: 'Engineering maturity', digital: 'Moderate-to-high · DevOps present', enterprise: 'Very low · vendor-dependent · no DevOps' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 2 · Current State Assessment" title="Landscape Snapshot" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <Th>Dimension</Th>
                  <Th>Digital Group</Th>
                  <Th>Enterprise / Core IT</Th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <Tr key={i} even={i % 2 === 1}>
                    <Td className="font-semibold text-slate-800 w-[22%]">{r.dim}</Td>
                    <Td className="w-[39%]">{r.digital}</Td>
                    <Td className="w-[39%]">{r.enterprise}</Td>
                  </Tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4 grid grid-cols-3 gap-3">
            <AmberCallout>
              <p className="text-[10px] font-semibold text-amber-800">Dual pricing engines</p>
              <p className="text-[10px] text-amber-700 mt-0.5">Independent calculation → cross-channel price inconsistency. Structural, not a bug.</p>
            </AmberCallout>
            <AmberCallout>
              <p className="text-[10px] font-semibold text-amber-800">No cross-channel OMS</p>
              <p className="text-[10px] text-amber-700 mt-0.5">BOPIS requires fulfilment orchestration across channels and locations. Capability does not exist today.</p>
            </AmberCallout>
            <AmberCallout>
              <p className="text-[10px] font-semibold text-amber-800">Mobile via screen-scraping</p>
              <p className="text-[10px] text-amber-700 mt-0.5">Fragile dependency on presentation markup. Any web change can silently break mobile.</p>
            </AmberCallout>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="ESB: Enterprise Service Bus · POS: Point of Sale · OMS: Order Management System · BOPIS: Buy Online, Pick Up In-Store" />
    </Slide>
  );
}

// ─── Slide 8: Root Cause Analysis ────────────────────────────────────────────

export function RootCauseSlide() {
  const causes = [
    {
      n: 'RC1',
      title: 'No single source of truth',
      body: 'Digital group maintains its own catalog and promotional pricing engine, synced asynchronously via ESB snapshots. The dual pricing engine is not a technical bug — it is a structural misalignment between two independently-designed business units.',
    },
    {
      n: 'RC2',
      title: 'ESB = integration backbone + risk concentration',
      body: 'Asynchronous snapshot-based sync means all downstream systems operate on stale data. Proprietary ESB creates vendor lock-in and a bottleneck on every integration change. Every channel is one ESB outage away from total data blindness.',
    },
    {
      n: 'RC3',
      title: 'Mobile built on borrowed time',
      body: 'Screen-scraping is a fragile dependency on presentation markup, not an API contract. Any front-end refactor can silently break mobile. The organisation cannot iterate on web without fearing mobile regressions — limiting velocity on both.',
    },
    {
      n: 'RC4',
      title: 'Engineering capability vacuum in enterprise IT',
      body: 'Outsourcing core systems hollowed out internal understanding. The disputed IP ownership of ERP customisations is the proof point: the organisation has partially ceded control of its own systems. You cannot change what you do not understand.',
    },
    {
      n: 'RC5',
      title: 'No cross-channel order management capability',
      body: 'BOPIS requires an OMS that understands fulfilment promises across channels and locations. Neither the digital inventory system nor the legacy ERP was designed for this. The capability does not exist and cannot be retrofitted — it must be built.',
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 2 · Current State Assessment" title="Root Cause Analysis" />
          </motion.div>

          <motion.p variants={fadeUp} className="text-xs text-slate-600 mb-4 leading-relaxed max-w-3xl">
            The symptoms — inconsistent inventory, fragmented journeys, brittle mobile — are <strong>the predictable outcome of an organisational design that mirrored a business model that no longer exists.</strong> Five root causes, not isolated bugs.
          </motion.p>

          <motion.div variants={stagger} className="space-y-2.5">
            {causes.map((c) => (
              <motion.div key={c.n} variants={fadeUp} className="flex gap-4 border border-slate-200 rounded-lg p-3 bg-white">
                <p className="text-sm font-bold min-w-[36px]" style={{ color: TW_RED }}>{c.n}</p>
                <div>
                  <p className="text-xs font-bold text-slate-900 mb-0.5">{c.title}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="ESB: Enterprise Service Bus · OMS: Order Management System · ERP: Enterprise Resource Planning" />
    </Slide>
  );
}

// ─── Slide 9: Debt Map ───────────────────────────────────────────────────────

export function DebtMapSlide() {
  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 2 · Current State Assessment" title="Architectural Debt Map" />
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-5">
            {/* Architecture diagram */}
            <div className="bg-slate-950 rounded-xl p-5 font-mono text-[10px] leading-relaxed text-slate-300">
              <p className="text-slate-400 mb-2">// CURRENT STATE</p>
              <p>SAP ERP (customised)</p>
              <p className="text-amber-400 ml-4">├─ delta snapshots ──▶ Digital Catalog (own copy)</p>
              <p className="text-amber-400 ml-4">│                          └─▶ Digital Pricing Engine</p>
              <p className="text-amber-400 ml-4">└─ async/ESB ──▶ Enterprise Inventory (stale)</p>
              <p className="mt-2">POS Estate</p>
              <p className="text-slate-400 ml-4">├─ Tier A (~60%) near-real-time capable</p>
              <p className="text-amber-400 ml-4">└─ Tier B (~40%) no event emission</p>
              <p className="mt-2 text-amber-400">Digital Inventory (own system)</p>
              <p className="text-amber-400 ml-4">└─ Web channel + screen-scraping Mobile</p>
              <div className="mt-3 pt-3 border-t border-slate-700">
                <p className="text-red-400">⚠ Dual pricing engines → inconsistency</p>
                <p className="text-red-400">⚠ No real-time inventory across channels</p>
                <p className="text-red-400">⚠ No cross-channel cart capability</p>
                <p className="text-red-400">⚠ No BOPIS/OMS capability</p>
                <p className="text-red-400">⚠ Mobile via screen-scraping (fragile)</p>
                <p className="text-red-400">⚠ POS heterogeneity (2 software platforms)</p>
              </div>
            </div>

            {/* Complexity factors */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold text-slate-700">Confirmed Complexity Factors</p>

              <Card className="p-3">
                <p className="text-[10px] font-bold text-amber-700 mb-1">SAP ERP Customisation Depth</p>
                <p className="text-[10px] text-slate-600 leading-relaxed">Heavily customised over a decade. Previous integration assessments took 4 months and still discovered undocumented interfaces 6 months later. Phase 0 budgets a full 4-month assessment track accordingly.</p>
              </Card>

              <Card className="p-3">
                <p className="text-[10px] font-bold text-amber-700 mb-1">POS Estate Heterogeneity</p>
                <p className="text-[10px] text-slate-600 leading-relaxed">200+ stores across at least 3 generations of POS hardware and 2 POS software platforms (post-merger). ~40% cannot emit near-real-time events — directly constrains inventory architecture and BOPIS rollout sequencing.</p>
              </Card>

              <Card className="p-3">
                <p className="text-[10px] font-bold text-amber-700 mb-1">Dual Pricing Engine Complexity</p>
                <p className="text-[10px] text-slate-600 leading-relaxed">Two independent pricing systems produce independently calculated prices. Unification requires a joint pricing model discovery exercise with the Commercial Director — a business analysis effort, not just a technical migration.</p>
              </Card>

              <Card className="p-3">
                <p className="text-[10px] font-bold text-amber-700 mb-1">Vendor Contract & IP Dispute</p>
                <p className="text-[10px] text-slate-600 leading-relaxed">18-month contract, 6-month notice. IP ownership of ERP customisations disputed — legal review Month 1. Anti-corruption layer designed to read-only access of disputed extensions until resolution.</p>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="POS: Point of Sale · ERP: Enterprise Resource Planning · ESB: Enterprise Service Bus · BOPIS: Buy Online, Pick Up In-Store" />
    </Slide>
  );
}

// ─── Slide 10: Architecture Overview ─────────────────────────────────────────

export function ArchOverviewSlide() {
  const layers = [
    {
      label: 'Channel Layer',
      bg: 'bg-slate-100',
      items: ['Web / PWA', 'Mobile App (in-house)', 'In-Store POS', 'Partner / 3P APIs'],
    },
    {
      label: 'API Gateway / BFF Layer',
      bg: 'bg-blue-50',
      items: ['Web BFF', 'Mobile BFF', 'In-Store BFF', 'Experience APIs (GraphQL/REST) · Consumer-driven contract testing (Pact)'],
    },
    {
      label: 'Domain Capability Layer — Transactional',
      bg: 'bg-white',
      items: ['PIM / Catalog Service', 'Unified Inventory Service', 'Order Mgmt (OMS)', 'Customer Profile & Identity [P1]', 'Unified Pricing Service', 'Cart Service', 'Fulfilment Orchestrator'],
    },
    {
      label: 'Data & Intelligence Plane — Analytical',
      bg: 'bg-emerald-50',
      items: ['Analytics Data Platform · BI · Programme Measurement [P1]', 'Customer Data Platform (CDP) · Segmentation · Loyalty [P2]'],
    },
    {
      label: 'Event Streaming Platform — Confluent Cloud / AWS MSK',
      bg: 'bg-purple-50',
      items: ['Schema Registry (Avro/Protobuf + compatibility rules)', 'Topics: product.updated · inventory.updated · order.created · price.updated · customer.updated'],
    },
    {
      label: 'Integration / Legacy Layer',
      bg: 'bg-amber-50',
      items: ['SAP ERP Adapter (anti-corruption layer)', 'WMS Adapter', 'POS Adapter — Tier A: event emit · Tier B: polling', 'Legacy SAP ERP / WMS / POS estate'],
    },
  ];

  const layerColors = ['border-slate-300', 'border-blue-300', 'border-[#E4003B]', 'border-emerald-300', 'border-purple-300', 'border-amber-300'];

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 3 · Target Architecture" title="Architecture Overview — MACH Composable Commerce" />
          </motion.div>

          <motion.div variants={stagger} className="flex flex-col gap-1.5">
            {layers.map((layer, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`${layer.bg} border ${layerColors[i]} rounded-lg px-4 py-2.5`}
              >
                <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-slate-500 mb-1.5">{layer.label}</p>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item, j) => (
                    <span key={j} className="text-[10px] text-slate-700 bg-white/70 border border-white rounded px-2 py-0.5">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-3 grid grid-cols-3 gap-3">
            <div className="text-[10px] text-slate-600"><span className="font-semibold text-slate-800">Separation of planes:</span> Domain Capability Layer = transactional (commands, business rules, state). Data & Intelligence Plane = analytical (read-oriented, cross-domain aggregation, no business rules).</div>
            <div className="text-[10px] text-slate-600"><span className="font-semibold text-slate-800">Event streaming feeds both:</span> Domain services publish events consumed by other services (transactional flows) AND by the Analytics Consumer (analytical flows).</div>
            <div className="text-[10px] text-slate-600"><span className="font-semibold text-slate-800">Legacy encapsulation:</span> SAP ERP and POS estate remain behind anti-corruption layer adapters — incrementally superseded, never big-bang replaced.</div>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="MACH: Microservices, API-first, Cloud-native, Headless · BFF: Backend for Frontend · OMS: Order Management System · CDP: Customer Data Platform · WMS: Warehouse Management System" />
    </Slide>
  );
}

// ─── Slide 11: Key Decisions A ───────────────────────────────────────────────

export function KeyDecisionsASlide() {
  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 3 · Target Architecture — Key Decisions (1 of 2)" title="PIM · Unified Pricing · Two-Tier Inventory" />
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-3 gap-4">
            {/* PIM */}
            <motion.div variants={fadeUp}>
              <Card className="p-4 h-full flex flex-col gap-2">
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: TW_RED }}>Unified PIM</p>
                <p className="text-xs font-semibold text-slate-900">Single golden source for all product data</p>
                <p className="text-[10px] text-slate-600 leading-relaxed">Attributes, taxonomy, media, localisation. Both web and mobile consume from the same PIM API. Legacy ESB delta-snapshot approach is retired once PIM is established.</p>
                <div className="mt-auto pt-2 border-t border-slate-100">
                  <p className="text-[10px] font-semibold text-slate-700">Decision:</p>
                  <p className="text-[10px] text-slate-600">Evaluate SaaS PIM first. Run Phase 0 PoC sprint against top-3 vendors before committing — against real edge cases, not vendor demos.</p>
                </div>
              </Card>
            </motion.div>

            {/* Pricing */}
            <motion.div variants={fadeUp}>
              <Card className="p-4 h-full flex flex-col gap-2">
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: TW_RED }}>Unified Pricing Service</p>
                <p className="text-xs font-semibold text-slate-900">Rationalising the dual engine</p>
                <p className="text-[10px] text-slate-600 leading-relaxed">SAP base pricing + digital promotional engine → single API. Base price flows via ERP adapter; promotional logic migrated as configurable rules. Both legacy engines retired progressively after 30-day clean validation.</p>
                <div className="mt-auto pt-2 border-t border-slate-100">
                  <p className="text-[10px] font-semibold text-amber-700">⚠ Pricing Freeze Protocol:</p>
                  <p className="text-[10px] text-slate-600">No pricing migration during 7-day windows before/after major promotions (Black Friday, EOFY, season launches). Commercial Director shares calendar quarterly.</p>
                </div>
              </Card>
            </motion.div>

            {/* Inventory */}
            <motion.div variants={fadeUp}>
              <Card className="p-4 h-full flex flex-col gap-2">
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: TW_RED }}>Two-Tier Inventory</p>
                <p className="text-xs font-semibold text-slate-900">Reflects POS estate heterogeneity</p>
                <div className="space-y-1.5">
                  <div className="bg-emerald-50 rounded p-2">
                    <p className="text-[10px] font-semibold text-emerald-800">Tier A (~120 stores)</p>
                    <p className="text-[10px] text-emerald-700">POS emits inventory events on each transaction. Materialised view updated within seconds.</p>
                  </div>
                  <div className="bg-amber-50 rounded p-2">
                    <p className="text-[10px] font-semibold text-amber-800">Tier B (~80 stores)</p>
                    <p className="text-[10px] text-amber-700">Polling adapter. Frequency tiered by transaction velocity (5–30 min). If ≥90% accuracy threshold cannot be met → inventory not displayed. Showing nothing &gt; showing stale.</p>
                  </div>
                </div>
                <div className="mt-auto pt-2 border-t border-slate-100">
                  <p className="text-[10px] text-slate-600">BOPIS Phase 1 = Tier A only. Tier B programme begins Phase 2.</p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="PIM: Product Information Management · ERP: Enterprise Resource Planning · ESB: Enterprise Service Bus · EOFY: End of Financial Year · BOPIS: Buy Online, Pick Up In-Store" />
    </Slide>
  );
}

// ─── Slide 12: Key Decisions B ───────────────────────────────────────────────

export function KeyDecisionsBSlide() {
  const decisions = [
    {
      title: 'Customer Identity & Profile',
      tag: 'Phase 1 Foundation',
      tagColor: 'bg-blue-100 text-blue-800',
      body: 'Established before BOPIS. Unified identity across web, mobile, in-store. GDPR-compliant: explicit consent, right-to-erasure, data minimisation, data residency. Foundation for loyalty and personalisation. Deferring to Phase 3 risks rebuilding channel-specific silos.',
    },
    {
      title: 'OMS + MVP-BOPIS Contingency',
      tag: 'Critical Path Risk',
      tagColor: 'bg-amber-100 text-amber-800',
      body: 'SaaS OMS evaluated against mandatory criteria: hazardous goods routing, state-based tax, per-store capacity constraints. If OMS integration slips Month 5 → MVP-BOPIS activated: BOPIS orders routed via existing digital order flow, store notified by email/SMS, stock reservation by store staff. Operationally intensive, 30-store scale only. Protects November 2026 board commitment.',
    },
    {
      title: 'Managed Event Streaming',
      tag: 'Platform Decision',
      tagColor: 'bg-purple-100 text-purple-800',
      body: 'Confluent Cloud or AWS MSK — decision gates all Platform Team work at Month 1. Schema Registry mandatory: all schemas versioned, backward-compatible by default, breaking changes require version increment + consumer migration window. Compatibility violations fail CI/CD pipeline. Open Kafka-compatible protocols ensure portability.',
    },
    {
      title: 'BFF + Consumer-Driven Contract Testing',
      tag: 'Architecture Pattern',
      tagColor: 'bg-slate-100 text-slate-700',
      body: 'Each channel (web, mobile, in-store) has its own BFF. BFF-to-domain coupling managed via Pact contracts. Domain service cannot deploy a breaking API change without all consumer contracts updated and verified. Breaking changes introduce new API version alongside old, minimum 6-month migration window.',
    },
    {
      title: 'In-House Mobile — React Native',
      tag: 'Build Decision',
      tagColor: 'bg-emerald-100 text-emerald-800',
      body: 'Leverages existing digital group React expertise. Performance-critical features (maps, barcode scanning, push) use native bridge modules. Validated in a Phase 1 performance spike before full commitment. Flutter retained as alternative if talent or performance validation favours it.',
    },
    {
      title: 'Observability — Datadog → Grafana Review',
      tag: 'OpEx Trade-off',
      tagColor: 'bg-slate-100 text-slate-700',
      body: 'OpenTelemetry as instrumentation standard (vendor-neutral). Datadog recommended Phase 0–2: faster time-to-value, lower operational burden while Platform Team matures. Cost review at Phase 3 milestone against self-managed Grafana stack (Prometheus + Tempo + Loki). Mirrors managed Kafka reasoning.',
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 3 · Target Architecture — Key Decisions (2 of 2)" title="Customer Identity · OMS · Kafka · BFF · Mobile · Observability" />
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-3 gap-3">
            {decisions.map((d, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="p-3 h-full flex flex-col gap-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs font-bold text-slate-900 leading-snug">{d.title}</p>
                    <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full whitespace-nowrap ${d.tagColor}`}>{d.tag}</span>
                  </div>
                  <p className="text-[10px] text-slate-600 leading-relaxed">{d.body}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="OMS: Order Management System · BFF: Backend for Frontend · Pact: consumer-driven contract testing framework · OpenTelemetry: vendor-neutral observability instrumentation standard" />
    </Slide>
  );
}

// ─── Slide 13: Data Strategy ─────────────────────────────────────────────────

export function DataStrategySlide() {
  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 3 · Target Architecture" title="Event-Driven Data Strategy & Analytics" />
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-2 gap-5">
            {/* Pipeline diagram */}
            <motion.div variants={fadeUp} className="bg-slate-950 rounded-xl p-4 font-mono text-[10px] leading-loose text-slate-300">
              <p className="text-slate-400 mb-1">// EVENT-TO-ANALYTICS PIPELINE</p>
              <p>Domain Events (Managed Kafka)</p>
              <p className="text-purple-400 ml-4">product.updated · inventory.updated</p>
              <p className="text-purple-400 ml-4">order.created · price.updated</p>
              <p className="text-purple-400 ml-4">customer.interacted · ...</p>
              <p className="ml-4">↓</p>
              <p>Analytics Consumer (stream processor)</p>
              <p className="ml-4">↓</p>
              <p>Analytical Data Store</p>
              <p className="text-slate-400 ml-4">(Snowflake / BigQuery / Redshift / Athena)</p>
              <p className="text-amber-400 ml-4">⚠ Cloud provider selection gates this — Month 1</p>
              <p className="ml-4">↓ ↓</p>
              <p>BI Dashboards &nbsp;&nbsp;&nbsp; Data Science / ML</p>
              <p className="text-slate-400 ml-4">Programme metrics &nbsp;&nbsp; Personalisation</p>
              <div className="mt-3 pt-3 border-t border-slate-700">
                <p className="text-emerald-400">✓ Transactional: domain services → commands</p>
                <p className="text-blue-400">✓ Analytical: read-oriented, cross-domain</p>
                <p className="text-red-400">✗ CDP ≠ domain — belongs in intelligence plane</p>
              </div>
            </motion.div>

            {/* Right column */}
            <motion.div variants={stagger} className="flex flex-col gap-3">
              <motion.div variants={fadeUp}>
                <RedCallout>
                  <p className="text-[10px] font-semibold text-slate-800">Programme Measurement Dashboard — non-negotiable prereq</p>
                  <p className="text-[10px] text-slate-600 mt-0.5 leading-relaxed">Live before first domain service. Tracks: cross-channel inventory accuracy · product data consistency lag · BOPIS order volumes & completion rates · mobile crash-free rate · deployment frequency · hiring velocity vs. plan.</p>
                </RedCallout>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="p-3">
                  <p className="text-[10px] font-bold text-slate-900 mb-1">CDP — Phase 2 Analytical Layer</p>
                  <p className="text-[10px] text-slate-600 leading-relaxed">Built on top of Customer Profile Service (Phase 1 transactional master). Aggregates behaviour across channels for segmentation, loyalty, personalisation. Designed with: explicit consent, data minimisation, right-to-erasure propagation, jurisdictional residency controls.</p>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="p-3">
                  <p className="text-[10px] font-bold text-slate-900 mb-2">Data Governance Model</p>
                  <table className="w-full text-[10px]">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left text-slate-500 font-semibold px-2 py-1">Role</th>
                        <th className="text-left text-slate-500 font-semibold px-2 py-1">Owns</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Data Domain Owners', 'Schemas, evolution, quality for their domain'],
                        ['Data Platform Team', 'Analytical store, CDP, event pipeline (Phase 2)'],
                        ['Data Governance Council', 'Standards, new data products, privacy compliance quarterly'],
                        ['CISO / Privacy Officer', 'Reviews all new data collection before deployment'],
                      ].map(([role, owns], i) => (
                        <tr key={i} className={i % 2 === 1 ? 'bg-slate-50' : ''}>
                          <td className="px-2 py-1 font-medium text-slate-800">{role}</td>
                          <td className="px-2 py-1 text-slate-600">{owns}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <AmberCallout>
                  <p className="text-[10px] font-semibold text-amber-800">Cross-cloud data movement risk</p>
                  <p className="text-[10px] text-amber-700 mt-0.5">If AWS MSK + non-AWS analytics (e.g., Snowflake on Azure/GCP), egress costs and latency must be modelled in Phase 0 before commitment. Cloud provider selection and analytics store are co-decided at Month 1.</p>
                </AmberCallout>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="CDP: Customer Data Platform · BI: Business Intelligence · GDPR: General Data Protection Regulation · ML: Machine Learning" />
    </Slide>
  );
}

// ─── Slide 14: Security Architecture ─────────────────────────────────────────

export function SecurityArchSlide() {
  const controls = [
    { area: 'API Auth & AuthZ', detail: 'OAuth 2.0 / OpenID Connect at API Gateway for all APIs. Service-to-service: mutual TLS (mTLS) with service identities managed by Platform Team. RBAC within domain APIs. CISO signs off auth architecture before any service reaches production.' },
    { area: 'PCI-DSS Compliance', detail: 'Payment card data handled exclusively by a PCI-DSS-scoped payment service or compliant 3rd-party provider. All other domain services store and process payment tokens only. PCI scope boundaries agreed with CISO and external QSA before any payment flow is built.' },
    { area: 'Customer Data Privacy (GDPR)', detail: 'Customer Profile & Identity Service = single collection and governance point. Data minimisation enforced at schema level — no field added without a documented business purpose. Right-to-erasure propagates across all consuming systems including CDP and analytical snapshots.' },
    { area: 'Secrets Management', detail: 'HashiCorp Vault or cloud-native equivalent. Secrets never committed to source control. Automated rotation on defined schedule. Enforced as a CI/CD pipeline gate — a build that accesses secrets directly fails.' },
    { area: 'OWASP API Security Top 10', detail: 'All APIs assessed against OWASP API Security Top 10 before production release. SAST and DAST automated scanning integrated into CI/CD pipelines. No API reaches production without documented security review.' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 3 · Target Architecture" title="Security Architecture" />
          </motion.div>

          <motion.p variants={fadeUp} className="text-xs text-slate-600 mb-4">
            Security is designed into the architecture, not added post-delivery. The CISO is a <strong>standing member of the Architecture Guild</strong> — not a separate team reviewing completed work.
          </motion.p>

          <motion.div variants={stagger} className="space-y-2.5">
            {controls.map((c, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-4 border border-slate-200 rounded-lg p-3 bg-white">
                <p className="text-[10px] font-bold min-w-[140px] text-slate-800 pt-0.5">{c.area}</p>
                <div className="w-px bg-slate-200 self-stretch" />
                <p className="text-[10px] text-slate-600 leading-relaxed">{c.detail}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4">
            <RedCallout>
              <p className="text-xs text-slate-700">
                <span className="font-semibold">Security governance:</span> Security Architecture Review is a mandatory production gate for every new domain service. Security is embedded in delivery — a Security Architect participates in sprint reviews, not just at release gates.
              </p>
            </RedCallout>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="OAuth 2.0: authorisation framework · OIDC: OpenID Connect (identity layer) · mTLS: Mutual TLS (bi-directional certificate auth) · RBAC: Role-Based Access Control · PCI-DSS: Payment Card Industry Data Security Standard · SAST: Static Application Security Testing · DAST: Dynamic Application Security Testing · QSA: Qualified Security Assessor" />
    </Slide>
  );
}

// ─── Slide 15: NFRs ──────────────────────────────────────────────────────────

export function NFRsSlide() {
  const rto = [
    { service: 'Order Management (OMS)', rpo: '0 (no data loss)', rto: '< 15 min' },
    { service: 'Unified Inventory Service', rpo: '< 5 min', rto: '< 15 min' },
    { service: 'Customer Profile & Identity', rpo: '< 1 min', rto: '< 10 min' },
    { service: 'PIM / Product Catalog', rpo: '< 1 hr', rto: '< 30 min' },
    { service: 'Cart Service', rpo: '< 1 min', rto: '< 10 min' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 3 · Target Architecture" title="Non-Functional Requirements" />
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-2 gap-5">
            {/* Left: DR + Performance */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <Card className="p-3">
                <p className="text-[10px] font-bold text-slate-800 mb-2">Disaster Recovery — RPO / RTO Targets</p>
                <table className="w-full border-collapse text-[10px]">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-2 py-1 text-slate-500 font-semibold">Domain Service</th>
                      <th className="text-left px-2 py-1 text-slate-500 font-semibold">RPO</th>
                      <th className="text-left px-2 py-1 text-slate-500 font-semibold">RTO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rto.map((r, i) => (
                      <tr key={i} className={i % 2 === 1 ? 'bg-slate-50' : ''}>
                        <td className="px-2 py-1 text-slate-700">{r.service}</td>
                        <td className="px-2 py-1 font-medium text-slate-900">{r.rpo}</td>
                        <td className="px-2 py-1 font-medium text-slate-900">{r.rto}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-[9px] text-slate-400 mt-1.5">Multi-AZ deployment. Multi-region active-passive DR for Order and Customer domains.</p>
              </Card>

              <Card className="p-3">
                <p className="text-[10px] font-bold text-slate-800 mb-1.5">Performance Budgets</p>
                <ul className="text-[10px] text-slate-600 space-y-1 leading-relaxed">
                  <li>· Architecture designed for elastic scaling — peak trading 10x normal traffic</li>
                  <li>· Inventory Service query: p99 &lt; 200ms at 5x normal load</li>
                  <li>· Cart Service write: p99 &lt; 500ms</li>
                  <li>· All services horizontally scalable, stateless</li>
                  <li>· Peak readiness programme (load tests + game days) before every peak period</li>
                  <li>· First exercise completed before November 2026 BOPIS launch</li>
                </ul>
              </Card>
            </motion.div>

            {/* Right: Testing + API Governance */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <Card className="p-3">
                <p className="text-[10px] font-bold text-slate-800 mb-1.5">Testing Strategy</p>
                <ul className="text-[10px] text-slate-600 space-y-1 leading-relaxed">
                  <li>· <span className="font-semibold text-slate-800">Unit / Integration:</span> ≥80% coverage on new code — CI pipeline gate</li>
                  <li>· <span className="font-semibold text-slate-800">Contract (Pact):</span> BFFs publish contracts to Pact Broker; providers verify all consumer contracts in CI. Breaking changes cannot reach production without consumer updates.</li>
                  <li>· <span className="font-semibold text-slate-800">E2E Journey Tests:</span> BOPIS flow, cross-channel cart, unified checkout — automated on every deployment to staging</li>
                  <li>· <span className="font-semibold text-slate-800">Chaos Engineering:</span> Pre-BOPIS experiment Month 6: "What happens when Inventory Service degrades under BOPIS load?" Go-live prerequisite. Quarterly from Phase 2.</li>
                  <li>· <span className="font-semibold text-slate-800">Performance:</span> Load testing before each production launch + quarterly peak readiness</li>
                </ul>
              </Card>

              <Card className="p-3">
                <p className="text-[10px] font-bold text-slate-800 mb-1.5">API Governance & Versioning</p>
                <ul className="text-[10px] text-slate-600 space-y-1 leading-relaxed">
                  <li>· Semantic versioning. Breaking change = major version increment</li>
                  <li>· Minimum 6-month deprecation window with consumer notification</li>
                  <li>· All APIs documented in OpenAPI 3.0 / GraphQL schema — generated from code, published on merge. Undocumented APIs fail CI.</li>
                  <li>· Distributed tracing: <code className="bg-slate-100 px-1 rounded text-[9px]">trace-id</code> generated at API Gateway, propagated through all service calls and event headers — full BOPIS journey traceable in one trace</li>
                  <li>· Architecture Guild reviews new API designs before implementation</li>
                </ul>
              </Card>

              <AmberCallout>
                <p className="text-[10px] font-semibold text-amber-800">Rollback Strategy</p>
                <p className="text-[10px] text-amber-700 mt-0.5">Each migration slice defines: rollback trigger (specific metric) · max rollback time · data reconciliation procedure for dual-write state. Named Stream-Aligned Team Lead is responsible. Rollback rehearsed on staging before every production migration.</p>
              </AmberCallout>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="RPO: Recovery Point Objective · RTO: Recovery Time Objective · p99: 99th percentile latency · SLO: Service Level Objective · Pact: consumer-driven contract testing · Multi-AZ: multiple availability zones" />
    </Slide>
  );
}

// ─── Slide 16: Team Topologies ───────────────────────────────────────────────

export function TeamTopologiesSlide() {
  const streamTeams = [
    { name: 'Commerce Data Team', owns: 'PIM, Unified Pricing Service, SAP ERP adapter. Owns product/pricing golden source and ESB retirement. Operates under pricing freeze protocol.' },
    { name: 'Inventory & Fulfilment Team', owns: 'Unified Inventory Service (Tier A & B), Fulfilment Orchestrator, OMS integration. Owns BOPIS architecture and Tier B POS remediation programme.' },
    { name: 'Customer & Order Team', owns: 'Customer Profile/Identity Service, Cart Service, Order domain. Cross-channel cart and unified identity. Phase 1 priority.' },
    { name: 'Digital Experience Team', owns: 'Web BFF, web storefront, PWA. Evolved from existing digital group delivery team.' },
    { name: 'Mobile Team', owns: 'Mobile BFF, in-house React Native app. New internal team; formed in Phase 0.' },
    { name: 'In-Store Technology Team', owns: 'POS integration adapters, in-store associate tooling, Tier A/B migration programme. Store operations stakeholders embedded.' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 4 · Organisational Design" title="Team Topologies" />
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-3 gap-3">
            {/* Platform Team */}
            <motion.div variants={fadeUp} className="col-span-3">
              <div className="border-2 rounded-xl p-3 bg-purple-50" style={{ borderColor: '#7C3AED' }}>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[9px] font-bold tracking-widest uppercase text-purple-700">Platform Team</span>
                  <span className="text-[9px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-semibold">Funded from Day 1</span>
                </div>
                <p className="text-[10px] text-purple-800">Cloud platform, CI/CD pipelines, managed event streaming, observability stack, API gateway, security controls. All stream-aligned teams consume the platform as a product.</p>
              </div>
            </motion.div>

            {/* Stream-aligned teams */}
            {streamTeams.map((t, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="p-3 h-full border-red-100">
                  <p className="text-[9px] font-bold tracking-widest uppercase mb-1" style={{ color: TW_RED }}>Stream-Aligned</p>
                  <p className="text-xs font-semibold text-slate-900 mb-1">{t.name}</p>
                  <p className="text-[10px] text-slate-600 leading-relaxed">{t.owns}</p>
                </Card>
              </motion.div>
            ))}

            {/* Enabling + Complicated subsystem */}
            <motion.div variants={fadeUp} className="col-span-2">
              <div className="border border-blue-200 rounded-xl p-3 bg-blue-50">
                <p className="text-[9px] font-bold tracking-widest uppercase text-blue-700 mb-1">Enabling Teams — Time-Limited (Thoughtworks)</p>
                <div className="grid grid-cols-2 gap-3 text-[10px] text-blue-800">
                  <div><span className="font-semibold">DDD & Architecture Enablement:</span> Coaching on domain modelling, event storming, ADR practice. Disengages per team when self-sufficiency criteria are met (see Slide 18).</div>
                  <div><span className="font-semibold">DevOps & Engineering Practices:</span> Embeds with former enterprise IT staff. Builds CI/CD, testing, trunk-based dev capability. Criteria-based disengagement, target Month 16, ceiling Month 18.</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="border border-amber-200 rounded-xl p-3 bg-amber-50 h-full">
                <p className="text-[9px] font-bold tracking-widest uppercase text-amber-700 mb-1">Complicated Subsystem</p>
                <p className="text-[10px] text-amber-800"><span className="font-semibold">Legacy Integration Specialists:</span> Deep SAP and legacy POS expertise. Builds anti-corruption layer adapters. Shrinks as legacy is strangled. Critical knowledge retention plan in place (top 10 individuals).</p>
              </div>
            </motion.div>

            {/* Data Platform */}
            <motion.div variants={fadeUp} className="col-span-3">
              <div className="border border-emerald-200 rounded-xl p-3 bg-emerald-50">
                <p className="text-[9px] font-bold tracking-widest uppercase text-emerald-700 mb-1">Data Platform Team — Phase 2</p>
                <p className="text-[10px] text-emerald-800">Owns the Data & Intelligence Plane: Analytics Data Platform, CDP, event-to-analytics pipeline. Distinct from stream-aligned teams — aggregates events, no transactional bounded context. Platform Team operates analytics consumer in Phase 1; this team takes over in Phase 2.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="DDD: Domain-Driven Design · ADR: Architecture Decision Record · CI/CD: Continuous Integration/Delivery · CDP: Customer Data Platform · POS: Point of Sale" />
    </Slide>
  );
}

// ─── Slide 17: Governance & Insourcing ───────────────────────────────────────

export function GovernanceInsourcingSlide() {
  const hiringTable = [
    { q: 'Q1 (M1–3)', hires: '4 (ramp)', roles: 'Platform lead, Architect, Scrum Masters', ratio: '~25:75' },
    { q: 'Q2 (M4–6)', hires: '16', roles: 'Platform engineers, Mobile team, Commerce Data', ratio: '~35:65' },
    { q: 'Q3 (M7–9)', hires: '28', roles: 'Inventory team, Customer team, DevOps coaches', ratio: '~45:55' },
    { q: 'Q4 (M10–12)', hires: '40', roles: 'In-store tech, mobile expansion, QA', ratio: '~55:45' },
    { q: 'M13–18', hires: '60 (full)', roles: 'Fills remaining stream-aligned capacity', ratio: '~65:35' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 4 · Organisational Design" title="Governance Model & Capability Insourcing" />
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <Card className="p-3">
                <p className="text-[10px] font-bold text-slate-800 mb-2">Governance Structure</p>
                <div className="space-y-2">
                  {[
                    { body: 'Architecture Guild', detail: 'Representatives from each stream-aligned team, fortnightly. Binding authority on patterns, standards, API conventions, event schema governance. Named escalation path to CTO with 5-business-day resolution SLA for cross-programme decisions.' },
                    { body: 'Programme Increment Planning', detail: 'Quarterly cross-team planning. Aligns dependencies and delivery commitments across all stream-aligned teams.' },
                    { body: 'Executive Steering Group', detail: 'Business, technology, delivery leadership — monthly. Decision-making forum (budget, scope, vendor decisions) — not a status meeting.' },
                    { body: 'Architecture Decision Records (ADRs)', detail: 'Every significant decision recorded: context, options, decision, trade-offs accepted. Creates institutional memory. Prevents re-litigating past decisions.' },
                  ].map((g, i) => (
                    <div key={i} className="flex gap-2">
                      <div className="w-1 rounded-full min-h-full" style={{ backgroundColor: TW_RED }} />
                      <div>
                        <p className="text-[10px] font-semibold text-slate-900">{g.body}</p>
                        <p className="text-[10px] text-slate-600 leading-relaxed">{g.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <Card className="p-3">
                <p className="text-[10px] font-bold text-slate-800 mb-2">Capability Insourcing — 60 Heads over 18 Months</p>
                <table className="w-full border-collapse text-[10px]">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-2 py-1 text-slate-500 font-semibold">Quarter</th>
                      <th className="text-left px-2 py-1 text-slate-500 font-semibold">Cumul. Hires</th>
                      <th className="text-left px-2 py-1 text-slate-500 font-semibold">Int:Ext</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hiringTable.map((r, i) => (
                      <tr key={i} className={i % 2 === 1 ? 'bg-slate-50' : ''}>
                        <td className="px-2 py-1 text-slate-700 font-medium">{r.q}</td>
                        <td className="px-2 py-1 text-slate-700">{r.hires}</td>
                        <td className="px-2 py-1 font-semibold text-slate-900">{r.ratio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>

              <div className="grid grid-cols-2 gap-2">
                <div className="border border-emerald-200 rounded-lg p-2.5 bg-emerald-50">
                  <p className="text-[10px] font-bold text-emerald-800">Target: 65:35</p>
                  <p className="text-[10px] text-emerald-700">internal:external by Month 18</p>
                </div>
                <div className="border border-amber-200 rounded-lg p-2.5 bg-amber-50">
                  <p className="text-[10px] font-bold text-amber-800">Floor: 55:45</p>
                  <p className="text-[10px] text-amber-700">Below this → delivery scope review</p>
                </div>
              </div>

              <AmberCallout>
                <p className="text-[10px] font-semibold text-amber-800">Hiring intervention protocol</p>
                <p className="text-[10px] text-amber-700 mt-0.5">Velocity below 4/month for 2 consecutive quarters triggers: salary benchmarking review, expanded sourcing (specialist recruiters, referral bonuses, graduate pipeline). Intervention is a standing governance commitment — not optional.</p>
              </AmberCallout>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="ADR: Architecture Decision Record · PI Planning: Programme Increment Planning (SAFe-inspired) · Int:Ext: Internal to External engineer ratio" />
    </Slide>
  );
}

// ─── Slide 18: Disengagement Criteria ───────────────────────────────────────

export function DisengagementCriteriaSlide() {
  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 4 · Organisational Design" title="Thoughtworks Enabling Team Disengagement Criteria" />
          </motion.div>

          <motion.p variants={fadeUp} className="text-xs text-slate-600 mb-4">
            Enabling teams do not disband on a fixed date — they disengage per team when named self-sufficiency criteria are met. <strong>Target: Month 16. Hard ceiling: Month 18.</strong> Assessment is per team, not programme-wide.
          </motion.p>

          <motion.div variants={stagger} className="grid grid-cols-2 gap-5">
            <motion.div variants={fadeUp}>
              <Card className="p-4 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <p className="text-xs font-bold text-slate-900">DDD & Architecture Enablement</p>
                </div>
                <p className="text-[10px] text-slate-500 mb-3 italic">Disengages from a stream-aligned team when ALL of the following are met:</p>
                <ul className="space-y-2">
                  {[
                    'The team can independently run an Event Storming session and produce a bounded context map without facilitation.',
                    'The team has authored at least 5 ADRs independently, with decisions that withstand Architecture Guild review.',
                    'The team lead can articulate the DDD model for their domain and explain integration design choices to other teams.',
                  ].map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[10px] font-bold text-blue-500 mt-0.5">✓</span>
                      <p className="text-[10px] text-slate-700 leading-relaxed">{c}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-4 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: TW_RED }} />
                  <p className="text-xs font-bold text-slate-900">DevOps & Engineering Practices Enablement</p>
                </div>
                <p className="text-[10px] text-slate-500 mb-3 italic">Disengages from a team when ALL of the following are met:</p>
                <ul className="space-y-2">
                  {[
                    'The team deploys to production independently, without requiring external support for pipeline failures.',
                    'Automated test coverage on new code exceeds 80%, maintained over 3 consecutive sprints.',
                    'At least two internal engineers can independently diagnose and resolve CI/CD pipeline failures.',
                    'The team has conducted and published at least one blameless post-incident review without facilitation.',
                  ].map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[10px] font-bold mt-0.5" style={{ color: TW_RED }}>✓</span>
                      <p className="text-[10px] text-slate-700 leading-relaxed">{c}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4">
            <RedCallout>
              <p className="text-xs text-slate-700">
                <span className="font-semibold">Governance:</span> Progress against criteria is reviewed quarterly in the Executive Steering Group. An enabling team may disengage from the Digital Experience Team in Month 12 while still engaged with the In-Store Technology Team in Month 16. Disengagement is per team, not a programme-wide date.
              </p>
            </RedCallout>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="DDD: Domain-Driven Design · ADR: Architecture Decision Record · CI/CD: Continuous Integration/Continuous Delivery · Event Storming: collaborative domain modelling technique" />
    </Slide>
  );
}

// ─── Slide 19: Three Populations ─────────────────────────────────────────────

export function ThreePopulationsSlide() {
  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 5 · Change Management & People" title="Three Populations, Three Change Journeys" />
          </motion.div>

          <motion.p variants={fadeUp} className="text-xs text-slate-600 mb-5">
            The modernisation is as much an <strong>organisational transformation</strong> as a technology one. Each population faces a fundamentally different challenge — a single change programme cannot address all three.
          </motion.p>

          <motion.div variants={stagger} className="grid grid-cols-3 gap-4">
            {[
              {
                label: 'Enterprise IT Staff',
                size: '~150 people',
                color: 'border-amber-400 bg-amber-50',
                labelColor: 'text-amber-700',
                challenge: 'Many have never written an automated test or deployed without a change advisory board approval.',
                change: 'Adopting modern engineering practices, working in autonomous product teams, and taking ownership of systems previously managed by a vendor is a profound shift — not a training course.',
                risk: 'Waterfall habits, vendor dependency mindset, and fear of automation failure',
                approach: '12-month Engineering Transformation Academy. Pairing with experienced engineers on real work. Capability heat map Month 1–2.',
              },
              {
                label: 'Digital Group Engineers',
                size: '~30–40 people',
                color: 'border-blue-400 bg-blue-50',
                labelColor: 'text-blue-700',
                challenge: 'They earned their autonomy and engineering culture.',
                change: 'Being asked to share their platform, practices, and people — with teams they may view as less capable — is a cultural minefield requiring deliberate management.',
                risk: 'Resentment, talent flight, or passive obstruction of knowledge sharing',
                approach: 'Positioned as the modernisation nucleus and knowledge vanguard — not absorbed into a homogeneous team. Their practices set the standard.',
              },
              {
                label: 'Store Operations Teams',
                size: 'Store managers, floor staff',
                color: 'border-emerald-400 bg-emerald-50',
                labelColor: 'text-emerald-700',
                challenge: 'BOPIS changes store workflows, staffing requirements, and P&L metrics.',
                change: 'A store manager managing P&L pressure does not automatically welcome a technology-driven process change. If store adoption fails, the omnichannel value proposition fails — regardless of how elegant the architecture is.',
                risk: 'Technology delivered to stores, not designed with them',
                approach: 'Co-design from Month 4. Pilot store managers help design BOPIS process. Operational readiness checklist. Go/no-go per store signed by both Technology lead and Store Operations lead.',
              },
            ].map((p, i) => (
              <motion.div key={i} variants={fadeUp} className={`border-2 ${p.color} rounded-xl p-4 flex flex-col gap-2`}>
                <div>
                  <p className={`text-[10px] font-bold tracking-widest uppercase ${p.labelColor}`}>{p.label}</p>
                  <p className="text-xs font-semibold text-slate-900">{p.size}</p>
                </div>
                <div className="w-6 h-px bg-slate-300" />
                <div>
                  <p className="text-[10px] font-semibold text-slate-700 mb-0.5">The challenge:</p>
                  <p className="text-[10px] text-slate-600 leading-relaxed">{p.challenge} {p.change}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-700 mb-0.5">Key risk:</p>
                  <p className="text-[10px] text-slate-600">{p.risk}</p>
                </div>
                <div className="mt-auto pt-2 border-t border-white/60">
                  <p className="text-[10px] font-semibold text-slate-700 mb-0.5">Approach:</p>
                  <p className="text-[10px] text-slate-600 leading-relaxed">{p.approach}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="BOPIS: Buy Online, Pick Up In-Store · P&L: Profit and Loss · Nucleus team: the core group that sets engineering culture and practices for the wider programme" />
    </Slide>
  );
}

// ─── Slide 20: Change Programme ──────────────────────────────────────────────

export function ChangeProgrammeSlide() {
  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 5 · Change Management & People" title="Change Programme & SAP Knowledge Retention" />
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <Card className="p-3">
                <p className="text-[10px] font-bold text-slate-800 mb-2">Change Management Workstream</p>
                <p className="text-[10px] text-slate-600 leading-relaxed mb-2">Runs as a parallel workstream — own budget, own Change Lead (hired Month 1), own reporting line to Executive Steering Group. Not embedded in technical delivery.</p>
                <ul className="text-[10px] text-slate-600 space-y-1">
                  <li>· Skills assessment → capability heat map (Months 1–2)</li>
                  <li>· 12-month Engineering Transformation Academy (learn by doing)</li>
                  <li>· Pairing: every enterprise IT engineer paired for ≥3 months</li>
                  <li>· Practice guilds: testing, CI/CD, DDD, mobile (engineer-led)</li>
                  <li>· Annual learning budget per engineer</li>
                  <li>· Quarterly capability maturity matrix self-assessment</li>
                </ul>
              </Card>

              <Card className="p-3">
                <p className="text-[10px] font-bold text-slate-800 mb-2">Store Operations Engagement</p>
                <ul className="text-[10px] text-slate-600 space-y-1 leading-relaxed">
                  <li>· Co-design from Month 4 — pilot store managers help design BOPIS process</li>
                  <li>· Pilot store selection: Tier A POS + high foot traffic + willing management</li>
                  <li>· Hands-on associate training (not a PDF) before go-live</li>
                  <li>· Go/no-go checklist signed by Technology lead + Store Operations lead per store</li>
                  <li>· Weekly check-in calls with pilot store managers for 8 weeks post-launch</li>
                  <li>· Issues escalated and resolved within 48 hours</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="border-2 rounded-xl p-4 h-full flex flex-col gap-3" style={{ borderColor: TW_RED, backgroundColor: '#FFF5F7' }}>
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: TW_RED }}>SAP Critical Knowledge Retention — Top 10 Individuals</p>
                <p className="text-[10px] text-slate-700 leading-relaxed">The Legacy Integration Specialist team holds deep, largely undocumented SAP knowledge. Losing 2–3 key individuals during the ERP assessment phase is a <strong>programme-level risk</strong> — not a headcount problem. Irreplaceable institutional knowledge.</p>

                <div className="flex flex-col gap-2">
                  {[
                    { label: 'Retention incentives', detail: 'Market-rate salary review Month 1 (not annual cycle). Retention bonus tied to programme milestones (25% @ M6, 50% @ M12, 25% @ completion) — payable even if individual leaves after the milestone.' },
                    { label: 'Career path clarity', detail: 'Each individual receives a written career path in the new operating model. No ambiguity about whether there is a role for them.' },
                    { label: 'Mandatory knowledge-capture sprint (M1–2)', detail: 'Formal, facilitated programme. Produces durable artefacts: documented SAP interface maps, data model docs, process flow diagrams for undocumented customisations, recorded walkthroughs. Stored in a searchable repository — not in individuals\' heads. Treated as a Phase 0 deliverable with the same priority as platform setup.' },
                    { label: 'Attrition monitoring', detail: 'HR tracks risk indicators (engagement scores, leave patterns, salary gaps) monthly. At-risk individuals flagged to Change Lead. Knowledge-capture must be complete before any departure.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-[10px] font-bold mt-0.5" style={{ color: TW_RED }}>→</span>
                      <div>
                        <p className="text-[10px] font-semibold text-slate-900">{item.label}</p>
                        <p className="text-[10px] text-slate-600 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="DDD: Domain-Driven Design · CI/CD: Continuous Integration/Delivery · SAP: Systems, Applications & Products (ERP vendor) · ERP: Enterprise Resource Planning · BOPIS: Buy Online, Pick Up In-Store" />
    </Slide>
  );
}

// ─── Slide 21: Critical Path ─────────────────────────────────────────────────

export function CriticalPathSlide() {
  const path = [
    { month: 'Month 1', item: 'Cloud provider selection', note: 'GATES ALL PLATFORM WORK', critical: true },
    { month: 'Month 1', item: 'Platform foundations begin', note: 'CI/CD, managed streaming, observability', critical: false },
    { month: 'Month 1–2', item: 'OMS vendor selection begins', note: 'Requirements catalogue + top-3 evaluation', critical: true },
    { month: 'Month 2–3', item: 'OMS proof-of-concept sprint', note: 'Real edge cases — not vendor demos', critical: true },
    { month: 'Month 2–4', item: 'Customer Identity Service design + build', note: 'Foundation for BOPIS order association', critical: true },
    { month: 'Month 3–4', item: 'Pilot store selection + store ops engagement', note: '30 Tier A stores', critical: false },
    { month: 'Month 4–5', item: 'OMS integration (digital inventory — interim)', note: 'If slips → activate MVP-BOPIS', critical: true },
    { month: 'Month 5–6', item: 'BOPIS end-to-end flow build + training design', note: 'Channel-agnostic checkout → stock reservation → pickup', critical: true },
    { month: 'Month 6', item: 'Chaos experiment: Inventory degradation under BOPIS load', note: 'Go-live prerequisite — not a post-launch learning', critical: true },
    { month: 'Month 6–7', item: 'Pilot store UAT + operational readiness sign-off', note: 'Per-store go/no-go checklist', critical: true },
    { month: 'Month 7', item: 'BOPIS live — 30 pilot stores', note: 'HARD DEADLINE — November 2026', critical: true },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 6 · Delivery Model & Roadmap" title="Critical Path to November 2026" />
          </motion.div>

          <motion.div variants={stagger} className="space-y-1.5">
            {path.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${p.critical ? 'bg-red-50 border border-red-200' : 'bg-slate-50 border border-slate-200'}`}
              >
                <span className={`text-[10px] font-semibold min-w-[72px] ${p.critical ? '' : 'text-slate-500'}`} style={p.critical ? { color: TW_RED } : {}}>
                  {p.month}
                </span>
                <div className={`w-px h-5 ${p.critical ? 'bg-red-300' : 'bg-slate-300'}`} />
                <span className={`text-xs font-semibold flex-1 ${p.critical ? 'text-slate-900' : 'text-slate-700'}`}>{p.item}</span>
                <span className={`text-[10px] ${p.critical ? 'text-red-600' : 'text-slate-400'}`}>{p.note}</span>
                {p.item.includes('BOPIS live') && (
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: TW_RED }}>DEADLINE</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-3">
            <AmberCallout>
              <p className="text-xs text-slate-700">
                <span className="font-semibold">OMS Contingency — MVP-BOPIS:</span> If OMS integration slips beyond Month 5, MVP-BOPIS is activated immediately. Orders route via existing digital order flow; stores notified by email/SMS; stock reserved manually within defined SLA. 30-store scale only. Protects board commitment. Full OMS orchestration is Phase 2 first priority.
              </p>
            </AmberCallout>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="OMS: Order Management System · BOPIS: Buy Online, Pick Up In-Store · MVP-BOPIS: Minimum Viable BOPIS contingency · UAT: User Acceptance Testing · CI/CD: Continuous Integration/Delivery" />
    </Slide>
  );
}

// ─── Slide 22: Phase 0 ───────────────────────────────────────────────────────

export function Phase0Slide() {
  const tracks = [
    { n: 'T1', label: 'SAP ERP Assessment', months: 'M1–5', body: 'Legacy Integration Specialists assess full SAP integration surface. Output: definitive interface map, data model for anti-corruption layer, prioritised migration sequence. Previous assessments found undocumented interfaces 6 months after completion — 4 months budgeted.' },
    { n: 'T2', label: 'Platform & Team Formation', months: 'M1–3', body: 'Stand up Internal Developer Platform: cloud environment, managed event streaming, CI/CD, observability. Recruit Platform Team and begin Mobile Team hiring. Change Management Lead hired Month 1. Skills assessment of enterprise IT staff by Month 2.' },
    { n: 'T3', label: 'OMS & PIM Vendor Selection', months: 'M1–3', body: 'Requirements catalogues with mandatory criteria (hazardous goods routing, state-based tax, dual pricing, store capacity). Top-3 vendors evaluated. PoC integration sprints Months 2–3 before commitment. No vendor demos — real edge cases only.' },
    { n: 'T4', label: 'Tier B POS Cost Scoping', months: 'Weeks 1–2', body: 'PRIORITY: Rapid scoping determines hardware refresh vs. polling adapter split across Tier B estate. This is the single largest cost variable in the financial model ($2–6M range). Must be narrowed to ±15% for the board financial model within 3 weeks of programme start.' },
    { n: 'T5', label: 'Architecture & Domain Design', months: 'M1–3', body: 'Event Storming workshops across digital, enterprise IT, and store operations. Bounded context map produced. Team charters defined. Architecture Guild and ADR practice established.' },
    { n: 'T6', label: 'Pricing Model Discovery', months: 'M3–5', body: 'Structured exercise run jointly by Commerce Data Team and Commercial Director. Fully document promotional logic in digital pricing engine: rules, exceptions, overrides, historical context. This is a business analysis effort — the output is the design brief for the Unified Pricing Service.' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 6 · Delivery — Phase 0 (April–June 2026)" title="Discovery, Foundations & Key Decisions — Months 1–3" />
          </motion.div>

          <motion.p variants={fadeUp} className="text-xs text-slate-600 mb-4">
            Build the engineering runway, understand the real integration surface, make gated decisions with evidence before committing. <strong>Month 1 has 4 mandatory completions that gate downstream work.</strong>
          </motion.p>

          <motion.div variants={stagger} className="grid grid-cols-3 gap-3">
            {tracks.map((t, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className={`p-3 h-full ${t.n === 'T4' ? 'border-amber-300 bg-amber-50' : ''}`}>
                  <div className="flex items-start justify-between mb-1.5">
                    <p className="text-[10px] font-bold" style={{ color: TW_RED }}>{t.n}: {t.label}</p>
                    <span className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">{t.months}</span>
                  </div>
                  <p className="text-[10px] text-slate-600 leading-relaxed">{t.body}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-3">
            <RedCallout>
              <p className="text-xs text-slate-700">
                <span className="font-semibold">Month 1 mandatory completions (programme gates):</span> (1) Cloud provider selection — gates Platform Team work on streaming, analytics, CI/CD. (2) Datadog vs. Grafana cost analysis. (3) Formal scope-reduction notice to enterprise outsourcing vendor (starts 6-month clock). (4) SAP knowledge-capture sprint begins for top 10 critical individuals.
              </p>
            </RedCallout>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="SAP: ERP vendor · POS: Point of Sale · OMS: Order Management System · PIM: Product Information Management · ADR: Architecture Decision Record · PoC: Proof of Concept" />
    </Slide>
  );
}

// ─── Slide 23: Phase 1 ───────────────────────────────────────────────────────

export function Phase1Slide() {
  const milestones = [
    { month: 'Month 5', title: 'Customer Identity Service live', detail: 'Unified Customer Profile & Identity. GDPR-compliant data model. Cross-channel customer identification established. Foundation for cross-channel cart, BOPIS order association, loyalty.' },
    { month: 'Month 5', title: 'OMS integration with digital inventory', detail: 'Interim, not SAP real-time. Known accuracy limitations governed: stock buffer policy per pilot store, operational reconciliation for discrepancies. If integration slips → MVP-BOPIS activated immediately.' },
    { month: 'Month 6', title: 'Pre-BOPIS chaos experiment', detail: '"What happens to the BOPIS order flow when Inventory Service returns degraded responses?" Tests OMS behaviour under the most likely peak-trading failure mode. Results determine whether additional circuit breaker logic is needed. Go-live prerequisite — not optional.' },
    { month: 'Month 6', title: 'Mobile App v1 (parallel with vendor)', detail: 'Internal mobile app: browse, search, product detail, cart. Built on BFF and domain APIs. Runs alongside vendor screen-scraping app — no cutover yet.' },
    { month: 'Month 7', title: 'BOPIS live — 30 pilot stores', detail: 'Per-store operational readiness sign-off. Store associate training complete. Programme Measurement Dashboard live and tracking BOPIS metrics. Go/no-go per store signed jointly by Technology lead and Store Operations lead. Hard deadline: November 2026.' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 6 · Delivery — Phase 1 (June–November 2026)" title="Critical Path Delivery: BOPIS Pilot — Months 3–8" />
          </motion.div>

          <motion.div variants={stagger} className="space-y-3">
            {milestones.map((m, i) => (
              <motion.div key={i} variants={fadeUp} className={`flex gap-4 rounded-xl p-3 border ${m.title.includes('BOPIS live') ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-white'}`}>
                <div className="min-w-[64px]">
                  <p className="text-[10px] font-bold" style={{ color: TW_RED }}>{m.month}</p>
                </div>
                <div className="w-px bg-slate-200 self-stretch" />
                <div>
                  <p className={`text-xs font-bold mb-0.5 ${m.title.includes('BOPIS live') ? 'text-red-800' : 'text-slate-900'}`}>{m.title}</p>
                  <p className="text-[10px] text-slate-600 leading-relaxed">{m.detail}</p>
                </div>
                {m.title.includes('BOPIS live') && (
                  <div className="ml-auto">
                    <span className="text-[9px] font-bold px-2 py-1 rounded-lg text-white" style={{ backgroundColor: TW_RED }}>HARD DEADLINE</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-3 grid grid-cols-2 gap-3">
            <div className="border border-emerald-200 rounded-lg p-2.5 bg-emerald-50">
              <p className="text-[10px] font-semibold text-emerald-800">Phase 1 key outputs</p>
              <p className="text-[10px] text-emerald-700 mt-0.5">BOPIS live 30 Tier A stores · Customer Identity Service · Mobile App v1 (parallel)</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-2.5 bg-slate-50">
              <p className="text-[10px] font-semibold text-slate-700">Running in parallel (not on critical path)</p>
              <p className="text-[10px] text-slate-600 mt-0.5">SAP ERP assessment · PIM vendor evaluation · Tier B POS scoping · Pricing model discovery</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="OMS: Order Management System · GDPR: General Data Protection Regulation · MVP-BOPIS: Minimum Viable BOPIS contingency · BFF: Backend for Frontend · BOPIS: Buy Online, Pick Up In-Store" />
    </Slide>
  );
}

// ─── Slide 24: Phase 2 & 3 ───────────────────────────────────────────────────

export function Phase23Slide() {
  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 6 · Delivery — Phases 2 & 3" title="Omnichannel Scale, Legacy Retirement & Innovation" />
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-2 gap-5">
            <motion.div variants={fadeUp}>
              <div className="border-2 border-blue-300 rounded-xl p-4 bg-blue-50 h-full">
                <p className="text-[10px] font-bold tracking-widest uppercase text-blue-700 mb-1">Phase 2 — Months 8–16 (Nov 2026–Jul 2027)</p>
                <p className="text-xs font-semibold text-blue-900 mb-3">Omnichannel Scale & Legacy Integration</p>
                <ul className="text-[10px] text-blue-800 space-y-2 leading-relaxed">
                  <li><span className="font-semibold">M8–9:</span> Full OMS orchestration (replaces MVP-BOPIS if activated). Automated fulfilment for all pilot stores.</li>
                  <li><span className="font-semibold">M9:</span> Cross-channel cart persistence. Add to cart on web, continue on mobile.</li>
                  <li><span className="font-semibold">M10:</span> SAP real-time inventory integration. Tier A stores: inventory accuracy from events, not polling.</li>
                  <li><span className="font-semibold">M10:</span> Unified PIM & Pricing Service live. Legacy ESB product/price sync retired. Pricing reconciliation process decommissioned after 30-day clean validation.</li>
                  <li><span className="font-semibold">M9–14:</span> BOPIS scale to all Tier A stores. Tier B POS remediation: hardware refresh or polling adapter per cohort.</li>
                  <li><span className="font-semibold">M11:</span> Internal mobile app reaches feature parity. Screen-scraping vendor contract exited. Organisation owns mobile end-to-end.</li>
                  <li><span className="font-semibold">M14:</span> Ship-from-store. OMS infrastructure extended for store-sourced shipping.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="border-2 border-emerald-300 rounded-xl p-4 bg-emerald-50 h-full">
                <p className="text-[10px] font-bold tracking-widest uppercase text-emerald-700 mb-1">Phase 3 — Months 16–24 (Jul 2027–Apr 2028)</p>
                <p className="text-xs font-semibold text-emerald-900 mb-3">Optimise, Retire Legacy & Build for Next Horizon</p>
                <ul className="text-[10px] text-emerald-800 space-y-2 leading-relaxed">
                  <li>BOPIS to all stores (including Tier B as remediation completes)</li>
                  <li>Cross-channel returns: buy online, return in-store</li>
                  <li>Customer loyalty unification + personalisation (CDP + data science)</li>
                  <li>ESB decommission milestone — all integrations migrated to event streaming</li>
                  <li>Enterprise outsourcing vendor contract expires or negotiated to early exit. IP dispute resolved. Internal team fully owns ERP extension knowledge.</li>
                  <li>Thoughtworks enabling teams disbanding (against self-sufficiency criteria)</li>
                  <li>Engineering capability maturity assessment: are teams at target practices maturity?</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4">
            <div className="grid grid-cols-4 gap-3">
              {[
                { phase: 'Phase 0', deliverable: 'Foundations + decisions', color: 'bg-slate-100 text-slate-700' },
                { phase: 'Phase 1', deliverable: 'BOPIS 30 pilot stores', color: 'bg-red-100 text-red-800' },
                { phase: 'Phase 2', deliverable: 'Scale + legacy integration', color: 'bg-blue-100 text-blue-800' },
                { phase: 'Phase 3', deliverable: 'Full estate + legacy retired', color: 'bg-emerald-100 text-emerald-800' },
              ].map((p, i) => (
                <div key={i} className={`rounded-lg p-2.5 text-center ${p.color}`}>
                  <p className="text-[10px] font-bold">{p.phase}</p>
                  <p className="text-[10px] mt-0.5">{p.deliverable}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="OMS: Order Management System · ESB: Enterprise Service Bus · PIM: Product Information Management · CDP: Customer Data Platform · MVP-BOPIS: Minimum Viable BOPIS contingency" />
    </Slide>
  );
}

// ─── Slide 25: Running the Business ──────────────────────────────────────────

export function RunningBusinessSlide() {
  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 6 · Delivery" title="Running the Business While Changing It" />
          </motion.div>

          <motion.p variants={fadeUp} className="text-xs text-slate-600 mb-4">
            For each migration slice, the following is defined <strong>before migration begins</strong> — not after something goes wrong.
          </motion.p>

          <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
            {[
              { title: 'Decommission Criteria', badge: 'DC', badgeColor: 'bg-emerald-600 text-white', color: 'border-emerald-300 bg-emerald-50', textColor: 'text-emerald-800', body: 'Measurable condition that must be met before legacy is retired. Agreed with business stakeholders before migration begins. Example: "Unified Pricing Service has operated as sole source for 30 consecutive days without reconciliation discrepancies."' },
              { title: 'Rollback Trigger', badge: 'RT', badgeColor: 'bg-amber-500 text-white', color: 'border-amber-300 bg-amber-50', textColor: 'text-amber-800', body: 'Specific metric or event that initiates rollback. Pre-agreed, not negotiated in the moment. Example: "BOPIS order completion rate drops below 90% for 15 consecutive minutes." Trigger is configured in the observability platform as an alert, not a manual check.' },
              { title: 'Rollback Execution Time', badge: 'RE', badgeColor: 'bg-blue-600 text-white', color: 'border-blue-300 bg-blue-50', textColor: 'text-blue-800', body: 'Maximum time to restore from legacy. Agreed per slice. Rollback procedure rehearsed on staging before production migration. Named individual (Stream-Aligned Team Lead) is accountable for the rollback decision and execution.' },
              { title: 'Data Reconciliation Procedure', badge: 'DR', badgeColor: 'bg-slate-600 text-white', color: 'border-slate-300 bg-slate-50', textColor: 'text-slate-800', body: 'If dual-write was active and rollback occurs: procedure to identify and resolve records written only to the new system. Prevents data loss in rollback scenarios. Documented and tested before any dual-write migration begins.' },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className={`border-2 ${item.color} rounded-xl p-4`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono ${item.badgeColor}`}>{item.badge}</span>
                  <p className={`text-xs font-bold ${item.textColor}`}>{item.title}</p>
                </div>
                <p className="text-[10px] text-slate-600 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4">
            <RedCallout>
              <p className="text-xs text-slate-700">
                <span className="font-semibold">Hybrid-mode runbooks:</span> During the period when flows span both legacy and new systems, separate incident runbooks exist for each path. Written and tested before BOPIS pilot launch. Blameless post-incident review for every P1/P2 incident within 5 business days.
              </p>
            </RedCallout>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="Dual-write: temporary state where both old and new systems receive writes during migration · Strangler Fig: incremental migration pattern · P1/P2: Priority 1/2 incidents" />
    </Slide>
  );
}

// ─── Slide 26: Vendor Strategy ───────────────────────────────────────────────

export function VendorStrategySlide() {
  const vendors = [
    {
      vendor: 'Enterprise Outsourcing Vendor',
      risk: 'Holds SAP institutional knowledge. 18-month contract, 6-month notice. IP ownership dispute.',
      action: 'Formal scope-reduction notice Month 1 (starts 6-month clock). Knowledge transfer obligations written into amended contract. Retained for legacy BAU only (shrinking scope). IP dispute resolved with legal support before any ERP extension is modified by internal teams.',
      exit: 'Month 18–24',
      severity: 'high',
    },
    {
      vendor: 'Mobile Screen-Scraping Vendor',
      risk: 'No architectural value. Fragile dependency on presentation markup.',
      action: 'Exit notice issued aligned to Phase 2 mobile parity milestone. No earlier — internal app must reach feature parity before vendor exit to prevent channel regression.',
      exit: 'Month 11',
      severity: 'medium',
    },
    {
      vendor: 'SaaS PIM Vendor',
      risk: 'Vendor lock-in if contracts lack portability clauses.',
      action: 'Selected via Phase 0 PoC sprint. Contracts must include: data portability clauses, API stability commitments with defined deprecation notice periods, exit provisions. No commitment without PoC validation.',
      exit: 'Ongoing — governed',
      severity: 'low',
    },
    {
      vendor: 'SaaS OMS Vendor',
      risk: 'Critical path dependency. If no SaaS OMS qualifies, build path adds 3–4 months and ~$1–2M.',
      action: 'Phase 0 PoC sprint validates mandatory criteria: hazardous goods, state-based tax, store capacity constraints. Build-on-open-source OMS as contingency if no SaaS qualifies without prohibitive customisation.',
      exit: 'Ongoing — governed',
      severity: 'high',
    },
    {
      vendor: 'Managed Event Streaming (Confluent/MSK)',
      risk: 'Operational dependency on managed service.',
      action: 'Open Kafka-compatible protocols throughout. No proprietary schema formats. Portability of topic schemas. Annual review of managed vs. self-hosted as Platform Team matures.',
      exit: 'Annual review',
      severity: 'low',
    },
    {
      vendor: 'Corporate ESB',
      risk: 'Vendor-licensed. Integration bottleneck. Proprietary lock-in.',
      action: 'Retirement is a Phase 3 milestone (Month 22). Decommissioned after all integrations migrated to event streaming and validated.',
      exit: 'Month 22',
      severity: 'medium',
    },
  ];

  const severityStyle: Record<string, string> = {
    high: 'text-red-700 bg-red-100',
    medium: 'text-amber-700 bg-amber-100',
    low: 'text-emerald-700 bg-emerald-100',
  };

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 7 · Vendor & Sourcing Strategy" title="Vendor Strategy" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <Th>Vendor</Th>
                  <Th>Risk</Th>
                  <Th>Action</Th>
                  <Th>Exit / Review</Th>
                </tr>
              </thead>
              <tbody>
                {vendors.map((v, i) => (
                  <Tr key={i} even={i % 2 === 1}>
                    <Td className="w-[18%]">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${severityStyle[v.severity]}`}>
                          {v.severity}
                        </span>
                        <span className="font-semibold text-slate-800">{v.vendor}</span>
                      </div>
                    </Td>
                    <Td className="w-[28%] text-slate-600">{v.risk}</Td>
                    <Td className="w-[40%]">{v.action}</Td>
                    <Td className="w-[14%] font-medium text-slate-700">{v.exit}</Td>
                  </Tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="ESB: Enterprise Service Bus · OMS: Order Management System · PIM: Product Information Management · SaaS: Software as a Service · PoC: Proof of Concept · BAU: Business as Usual" />
    </Slide>
  );
}

// ─── Slide 27: Trade-offs ────────────────────────────────────────────────────

export function TradeOffsSlide() {
  const tradeoffs = [
    {
      title: 'BOPIS on Approximate Inventory',
      accepted: 'BOPIS pilot launches on existing digital inventory — not SAP real-time. Approximate accuracy at launch.',
      why: 'Hard November 2026 deadline cannot move. Real-time SAP integration requires 4-month assessment first.',
      mitigations: 'Scoped to Tier A modern-POS stores only. Per-store stock buffer policy. Operational reconciliation. Transparent communication to store teams. Real-time SAP follows in Phase 2.',
    },
    {
      title: 'Speed vs. Architectural Purity',
      accepted: 'Pragmatic adapters and transitional integrations acceptable to hit business deadlines.',
      why: 'A delivered imperfect solution beats an elegant undelivered one.',
      mitigations: 'Every pragmatic decision documented as an ADR with a funded retirement plan and a named team owning the timeline. Technical debt is visible — not allowed to accumulate invisibly.',
    },
    {
      title: 'Buy vs. Build (OMS & PIM)',
      accepted: 'SaaS platforms preferred for commodity capabilities — reduces time-to-value but introduces vendor dependency.',
      why: 'Building a full OMS from scratch adds 3–4 months minimum to the critical path.',
      mitigations: 'PoC sprints validate fit before commitment. Contracts require data portability, API stability, exit provisions. Build-on-open-source is the named contingency if SaaS doesn\'t qualify.',
    },
    {
      title: 'Managed Kafka vs. Self-Hosted',
      accepted: 'Managed streaming service trades operational control for operational simplicity.',
      why: 'Platform Team capability is still developing in early phases. Operational burden must be minimised.',
      mitigations: 'Open Kafka-compatible protocols. No proprietary schema formats. Annual review of managed vs. self-hosted as team matures.',
    },
    {
      title: 'Datadog vs. Self-Managed Grafana',
      accepted: 'Datadog\'s higher cost accepted in Phase 0–2 for faster time-to-value and lower operational overhead.',
      why: 'Self-managed Grafana stack requires engineering investment to operate; capacity is needed elsewhere early on.',
      mitigations: 'OpenTelemetry instrumentation standard is vendor-neutral — data can be redirected to Grafana. Cost review at Phase 3 milestone with empirical data.',
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 8 · Trade-offs, Risks & Mitigations" title="Key Trade-offs" />
          </motion.div>

          <motion.div variants={stagger} className="space-y-2.5">
            {tradeoffs.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="border border-slate-200 rounded-lg p-3 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-[10px] font-bold text-slate-900 mb-1">{t.title}</p>
                  <p className="text-[10px] text-slate-600 leading-relaxed"><span className="font-semibold">Accepted:</span> {t.accepted}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-500 mb-1">Why accepted</p>
                  <p className="text-[10px] text-slate-600 leading-relaxed">{t.why}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-500 mb-1">Mitigations</p>
                  <p className="text-[10px] text-slate-600 leading-relaxed">{t.mitigations}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="ADR: Architecture Decision Record · OMS: Order Management System · PIM: Product Information Management · SaaS: Software as a Service · PoC: Proof of Concept · OpenTelemetry: vendor-neutral observability instrumentation" />
    </Slide>
  );
}

// ─── Slide 28: Risk Register ─────────────────────────────────────────────────

export function RiskRegisterSlide() {
  const risks = [
    { risk: 'SAP integration surface more complex than 4-month assessment reveals', l: 'M', i: 'H', mitigation: 'Anti-corruption layer isolates blast radius. Strangler Fig — no big-bang cutover.' },
    { risk: 'OMS integration slips beyond Month 5', l: 'M', i: 'C', mitigation: 'MVP-BOPIS contingency activated immediately. Full OMS orchestration = Phase 2 first priority.' },
    { risk: 'Critical SAP knowledge lost through unplanned attrition', l: 'M', i: 'H', mitigation: 'Top-10 retention plan + retention bonuses. Knowledge-capture sprint Month 1–2 producing formal artefacts.' },
    { risk: 'Hiring velocity tracks below 3/month', l: 'M', i: 'H', mitigation: 'Intervention protocol triggered at 2 consecutive quarters below 4/month. Salary benchmarking + expanded sourcing.' },
    { risk: 'Enterprise vendor disputes IP, blocking ERP migration', l: 'M', i: 'H', mitigation: 'Legal review Month 1. Anti-corruption layer designed for read-only access of disputed extensions until resolution.' },
    { risk: 'Pricing engine unification disrupts major promotional campaign', l: 'M', i: 'H', mitigation: 'Pricing freeze protocol. Pricing model discovery Phase 0. Commercial Director co-owns migration sign-off.' },
    { risk: 'BOPIS store adoption fails despite technology being live', l: 'M', i: 'H', mitigation: 'Co-design with pilot managers from Month 4. Go/no-go checklist. Weekly feedback loops 8 weeks post-launch.' },
    { risk: 'Tier B POS remediation costs exceed Phase 0 scoping estimate', l: 'M', i: 'M', mitigation: 'Rapid scoping Weeks 1–2 narrows range. Per-cohort cost/benefit before each hardware commitment.' },
    { risk: 'Customer data privacy breach via Customer Profile service', l: 'L', i: 'C', mitigation: 'GDPR-compliant design from day one. CISO sign-off and pen testing before launch.' },
    { risk: 'Event streaming platform becomes single point of failure', l: 'L', i: 'H', mitigation: 'Managed service multi-AZ SLA. Dead-letter queues and replay. Circuit breakers on all consumers.' },
  ];

  const impactStyle: Record<string, string> = {
    C: 'bg-red-600 text-white',
    H: 'bg-orange-400 text-white',
    M: 'bg-amber-300 text-slate-800',
    L: 'bg-emerald-200 text-emerald-800',
  };

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 8 · Trade-offs, Risks & Mitigations" title="Risk Register" />
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-3">
            {[['C', 'Critical'], ['H', 'High'], ['M', 'Medium'], ['L', 'Low']].map(([k, v]) => (
              <div key={k} className="flex items-center gap-1.5">
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${impactStyle[k]}`}>{k}</span>
                <span className="text-[10px] text-slate-500">{v}</span>
              </div>
            ))}
            <span className="text-[10px] text-slate-400 ml-2">L = Likelihood · I = Impact</span>
          </motion.div>

          <motion.div variants={fadeUp}>
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <Th>Risk</Th>
                  <Th>L</Th>
                  <Th>I</Th>
                  <Th>Mitigation</Th>
                </tr>
              </thead>
              <tbody>
                {risks.map((r, i) => (
                  <Tr key={i} even={i % 2 === 1}>
                    <Td className="w-[42%] text-slate-800">{r.risk}</Td>
                    <Td className="w-[5%]"><span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${impactStyle[r.l]}`}>{r.l}</span></Td>
                    <Td className="w-[5%]"><span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${impactStyle[r.i]}`}>{r.i}</span></Td>
                    <Td className="w-[48%] text-slate-600">{r.mitigation}</Td>
                  </Tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="OMS: Order Management System · MVP-BOPIS: Minimum Viable BOPIS contingency · SAP: ERP vendor · GDPR: General Data Protection Regulation · Multi-AZ: multiple availability zones" />
    </Slide>
  );
}

// ─── Slide 29: Business Outcomes ─────────────────────────────────────────────

export function BusinessOutcomesSlide() {
  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 9 · Outcomes & Success Measures" title="Business Outcomes" />
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <Card className="p-4">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: TW_RED }}>BOPIS Penetration Targets (12 months post-launch)</p>
                <table className="w-full border-collapse text-[10px]">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-2 py-1 text-slate-500 font-semibold">Store Category</th>
                      <th className="text-left px-2 py-1 text-slate-500 font-semibold">Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Urban / High-Traffic', '20% of online orders in catchment'],
                      ['Suburban / Mid-Traffic', '12% of online orders in catchment'],
                      ['Regional / Low-Traffic', '8% of online orders in catchment'],
                      ['Overall blended', '~15% (validated against store footprint)'],
                    ].map(([cat, target], i) => (
                      <tr key={i} className={i % 2 === 1 ? 'bg-slate-50' : ''}>
                        <td className="px-2 py-1 text-slate-700">{cat}</td>
                        <td className="px-2 py-1 font-semibold text-slate-900">{target}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>

              <div className="grid grid-cols-2 gap-3">
                <Card className="p-4">
                  <p className="text-2xl font-bold mb-0.5" style={{ color: TW_RED }}>+10 pts</p>
                  <p className="text-xs font-semibold text-slate-900">Cross-Channel NPS</p>
                  <p className="text-[10px] text-slate-500 mt-1">Within 6 months of unified catalog + Unified Pricing Service launch</p>
                </Card>
                <Card className="p-4">
                  <p className="text-2xl font-bold text-blue-600 mb-0.5">+20%</p>
                  <p className="text-xs font-semibold text-slate-900">Mobile Conversion</p>
                  <p className="text-[10px] text-slate-500 mt-1">vs. vendor screen-scraping app baseline, within 3 months of internal app launch</p>
                </Card>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <Card className="p-4">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: TW_RED }}>Customer Experience Outcomes</p>
                <ul className="text-[10px] space-y-2.5">
                  {[
                    { label: 'Browse online, buy in-store', desc: 'Consistent product, price, and inventory view regardless of channel.' },
                    { label: 'Cross-channel cart', desc: 'Add to cart on web, continue and checkout on mobile — or any channel combination.' },
                    { label: 'Real-time store inventory', desc: 'Customer sees accurate stock before making the trip to the store.' },
                    { label: 'Cross-channel returns', desc: 'Buy online, return in-store — Phase 3 capability.' },
                    { label: 'Loyalty unification', desc: 'A single loyalty identity across all touchpoints — Phase 3 capability.' },
                  ].map((item, i) => (
                    <li key={i}>
                      <p className="font-bold text-slate-800 leading-snug">{item.label}</p>
                      <p className="text-slate-500 leading-snug mt-0.5">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-4">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: TW_RED }}>Engineering Velocity Outcome</p>
                <div className="flex items-center gap-3">
                  <p className="text-2xl font-bold text-emerald-600">≤ 6 wks</p>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">Feature lead time</p>
                    <p className="text-[10px] text-slate-500">Concept to production for digital-native teams. By end of Phase 2.</p>
                  </div>
                </div>
              </Card>

              <RedCallout>
                <p className="text-xs text-slate-700">
                  <span className="font-semibold">Primary success measure:</span> Incremental revenue generated through omnichannel capabilities. ESB retirement and vendor savings are secondary benefits, not the goal.
                </p>
              </RedCallout>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="BOPIS: Buy Online, Pick Up In-Store · NPS: Net Promoter Score · ESB: Enterprise Service Bus · Catchment area: geographic area from which a store draws its customer base" />
    </Slide>
  );
}

// ─── Slide 30: Technical Metrics ─────────────────────────────────────────────

export function TechMetricsSlide() {
  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 9 · Outcomes & Success Measures" title="Technical & Delivery Metrics" />
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-2 gap-5">
            <motion.div variants={fadeUp}>
              <Card className="p-3 mb-3">
                <p className="text-[10px] font-bold text-slate-800 mb-2">Technology Metrics</p>
                <table className="w-full border-collapse text-[10px]">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-2 py-1 text-slate-500 font-semibold">Metric</th>
                      <th className="text-left px-2 py-1 text-slate-500 font-semibold">Baseline</th>
                      <th className="text-left px-2 py-1 text-slate-500 font-semibold">Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Cross-channel inventory accuracy (Tier A)', '< 90% (stale)', '> 99.5%'],
                      ['Cross-channel inventory accuracy (Tier B)', '< 90% (stale)', '> 90% (modelled per cohort)'],
                      ['Product data consistency lag', 'Hours', '< 30 seconds (after PIM live)'],
                      ['Pricing consistency across channels', 'Inconsistent', '< 5 sec propagation'],
                      ['Mobile crash-free rate', 'Unknown', '> 99.5%'],
                      ['BOPIS order completion rate (Tier A)', '—', '> 95%'],
                      ['BOPIS order completion rate (Tier B)', '—', '> 92%'],
                      ['ESB decommission', 'Active', 'Month 22 milestone'],
                    ].map(([m, b, t], i) => (
                      <tr key={i} className={i % 2 === 1 ? 'bg-slate-50' : ''}>
                        <td className="px-2 py-1 text-slate-700">{m}</td>
                        <td className="px-2 py-1 text-red-600 font-medium">{b}</td>
                        <td className="px-2 py-1 text-emerald-700 font-semibold">{t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <Card className="p-3">
                <p className="text-[10px] font-bold text-slate-800 mb-2">Deployment Frequency Targets</p>
                <table className="w-full border-collapse text-[10px]">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-2 py-1 text-slate-500 font-semibold">Team Type</th>
                      <th className="text-center px-2 py-1 text-slate-500 font-semibold">M6</th>
                      <th className="text-center px-2 py-1 text-slate-500 font-semibold">M12</th>
                      <th className="text-center px-2 py-1 text-slate-500 font-semibold">M24</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Digital-native teams', 'Weekly', 'Daily', 'Daily'],
                      ['New platform services', 'Weekly', 'Daily', 'Daily'],
                      ['In-Store Technology (POS)', 'Monthly', 'Weekly', 'Weekly'],
                      ['Legacy adapter teams (SAP)', 'Monthly', 'Monthly', 'Weekly'],
                    ].map(([team, m6, m12, m24], i) => (
                      <tr key={i} className={i % 2 === 1 ? 'bg-slate-50' : ''}>
                        <td className="px-2 py-1 text-slate-700">{team}</td>
                        <td className="px-2 py-1 text-center text-slate-600">{m6}</td>
                        <td className="px-2 py-1 text-center text-slate-600">{m12}</td>
                        <td className="px-2 py-1 text-center font-semibold text-emerald-700">{m24}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>

              <Card className="p-3">
                <p className="text-[10px] font-bold text-slate-800 mb-2">Engineering Capability Measures</p>
                <ul className="text-[10px] text-slate-600 space-y-1 leading-relaxed">
                  <li>· Hiring velocity vs. plan — tracked monthly. Intervention at 4/month miss for 2 consecutive quarters.</li>
                  <li>· Internal:external ratio vs. plan. Floor 55:45 at Month 18.</li>
                  <li>· Automated test coverage ≥80% on new code — reported quarterly per team.</li>
                  <li>· Enabling team self-sufficiency criteria met per team (tracked against disengagement schedule).</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="PIM: Product Information Management · BOPIS: Buy Online, Pick Up In-Store · ESB: Enterprise Service Bus · POS: Point of Sale · SAP: ERP vendor" />
    </Slide>
  );
}

// ─── Slide 31: Financial Framing ─────────────────────────────────────────────

export function FinancialFramingSlide() {
  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="max-w-5xl w-full px-12 py-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel part="Part 10 · Financial Framing" title="Indicative Financial Framing" />
          </motion.div>

          <motion.p variants={fadeUp} className="text-xs text-slate-600 mb-4">
            Companion financial model developed jointly with CFO Office, targeting ±15% accuracy. <strong>Tier B POS cost scoping (Phase 0 Weeks 1–2) is the single most important input</strong> — it narrows the largest cost variable from a $2–6M range to a fundable estimate.
          </motion.p>

          <motion.div variants={stagger} className="grid grid-cols-3 gap-4">
            {/* Costs */}
            <motion.div variants={fadeUp}>
              <Card className="p-3 h-full">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: TW_RED }}>Programme Costs (24 months)</p>
                <table className="w-full text-[10px]">
                  <tbody>
                    {[
                      ['Internal engineering (60 hires)', '$12–18M'],
                      ['Thoughtworks advisory (tapering)', '$3–5M'],
                      ['Contractor augmentation', '$2–4M'],
                      ['SaaS licences (PIM, OMS, streaming)', '$1.5–3M/yr'],
                      ['Cloud infrastructure', '$0.8–1.5M/yr'],
                      ['Observability (Datadog)', '$0.3–0.8M/yr'],
                      ['Change management workstream', '$0.5–1M'],
                      ['Mobile vendor exit', '$0.2–0.5M'],
                      ['Tier B POS remediation', '$2–6M total'],
                    ].map(([cat, cost], i) => (
                      <tr key={i} className={i % 2 === 1 ? 'bg-slate-50' : ''}>
                        <td className="px-1.5 py-1 text-slate-700">{cat}</td>
                        <td className="px-1.5 py-1 font-semibold text-slate-900 text-right">{cost}</td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-slate-300">
                      <td className="px-1.5 py-1.5 font-bold text-slate-900">Programme total</td>
                      <td className="px-1.5 py-1.5 font-bold text-right" style={{ color: TW_RED }}>$25–45M</td>
                    </tr>
                    <tr>
                      <td className="px-1.5 pb-1 text-slate-500 text-[9px] italic" colSpan={2}>Narrows to $30–38M once Tier B scoped + salary benchmarks confirmed</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </motion.div>

            {/* Revenue */}
            <motion.div variants={fadeUp}>
              <Card className="p-3 h-full">
                <p className="text-[10px] font-bold tracking-widest uppercase text-emerald-700 mb-3">Revenue Uplift (Annual at Steady State)</p>
                <table className="w-full text-[10px]">
                  <tbody>
                    {[
                      ['BOPIS (15% penetration)', '$8–15M'],
                      ['Mobile conversion (+20%)', '$3–6M'],
                      ['Reduced pricing inconsistency', '$1–3M'],
                      ['Ship-from-store (Phase 2)', '$2–5M'],
                    ].map(([driver, uplift], i) => (
                      <tr key={i} className={i % 2 === 1 ? 'bg-slate-50' : ''}>
                        <td className="px-1.5 py-1 text-slate-700">{driver}</td>
                        <td className="px-1.5 py-1 font-semibold text-emerald-700 text-right">{uplift}</td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-slate-300">
                      <td className="px-1.5 py-1.5 font-bold text-slate-900">Total annual uplift</td>
                      <td className="px-1.5 py-1.5 font-bold text-emerald-700 text-right">$14–29M/yr</td>
                    </tr>
                  </tbody>
                </table>

                <div className="mt-3 pt-3 border-t border-slate-100">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-blue-700 mb-2">Annual Cost Savings</p>
                  <table className="w-full text-[10px]">
                    <tbody>
                      {[
                        ['ESB licence + maintenance retirement', '$0.5–1M'],
                        ['Screen-scraping vendor exit', '$0.3–0.6M'],
                        ['Enterprise outsourcing reduction', '$1–3M'],
                      ].map(([s, v], i) => (
                        <tr key={i} className={i % 2 === 1 ? 'bg-slate-50' : ''}>
                          <td className="px-1.5 py-1 text-slate-700">{s}</td>
                          <td className="px-1.5 py-1 font-semibold text-blue-700 text-right">{v}</td>
                        </tr>
                      ))}
                      <tr className="border-t border-slate-200">
                        <td className="px-1.5 py-1 font-bold text-slate-900">Total savings</td>
                        <td className="px-1.5 py-1 font-bold text-blue-700 text-right">$1.8–4.6M/yr</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>

            {/* Summary */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <div className="border-2 rounded-xl p-4 bg-slate-50 border-slate-300">
                <p className="text-[10px] font-bold tracking-widest uppercase text-slate-600 mb-3">Return Summary</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-2xl font-bold text-slate-900">18–30 mths</p>
                    <p className="text-xs text-slate-500">Indicative breakeven</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Narrows once revenue assumptions validated against actual order volumes (CFO Office can do immediately using existing data)</p>
                  </div>
                  <div className="w-full h-px bg-slate-200" />
                  <div>
                    <p className="text-lg font-bold text-emerald-700">$14–29M/yr</p>
                    <p className="text-xs text-slate-500">Revenue at steady state</p>
                  </div>
                  <div className="w-full h-px bg-slate-200" />
                  <div>
                    <p className="text-lg font-bold text-blue-700">$1.8–4.6M/yr</p>
                    <p className="text-xs text-slate-500">Cost savings (secondary)</p>
                  </div>
                </div>
              </div>

              <AmberCallout>
                <p className="text-[10px] font-semibold text-amber-800">Key variable to resolve first</p>
                <p className="text-[10px] text-amber-700 mt-0.5">Tier B POS remediation ($2–6M range). Phase 0 Weeks 1–2 scoping narrows this to ±15% — the single action that most improves financial model accuracy.</p>
              </AmberCallout>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <SlideFooter glossary="BOPIS: Buy Online, Pick Up In-Store · ESB: Enterprise Service Bus · POS: Point of Sale · SaaS: Software as a Service · CFO: Chief Financial Officer" />
    </Slide>
  );
}

// ─── Slide 32: Q&A ───────────────────────────────────────────────────────────

export function QASlide() {
  const questions = [
    { q: 'What is the board\'s actual risk appetite for the November BOPIS deadline — and what\'s the real cost if we miss it?', why: 'Shapes whether MVP-BOPIS is an acceptable contingency or whether the scope should be pre-negotiated.' },
    { q: 'How much of the SAP customisation debt is genuinely understood internally vs. locked in the vendor relationship?', why: 'Determines whether the 4-month assessment is sufficient or whether a longer Phase 0 is warranted.' },
    { q: 'Does the Commercial Director have the appetite to freeze pricing migrations during promotional windows?', why: 'The pricing freeze protocol only works with genuine commercial sign-off — not just IT agreement.' },
    { q: 'What does success look like for the enabling team in 18 months — and is "done" acceptable to the board?', why: 'Tests whether there\'s realistic alignment on what self-sufficiency means, before Thoughtworks disengagement begins.' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: TW_RED }} />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-5xl w-full px-20 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-6">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-slate-400 mb-1">Closing</p>
            <h2 className="text-2xl font-bold text-slate-900">Discussion & Questions</h2>
            <div className="w-10 h-0.5 mt-2" style={{ backgroundColor: TW_RED }} />
          </motion.div>

          <motion.div variants={fadeUp} className="mb-6">
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              Questions I would ask the CTO — to test alignment on the decisions that will determine whether this programme succeeds:
            </p>
          </motion.div>

          <motion.div variants={stagger} className="space-y-3">
            {questions.map((q, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-4 border border-slate-200 rounded-xl p-4 bg-white">
                <p className="text-lg font-light min-w-[24px]" style={{ color: TW_RED }}>Q{i + 1}</p>
                <div>
                  <p className="text-sm font-semibold text-slate-900 leading-snug mb-1">{q.q}</p>
                  <p className="text-[10px] text-slate-500 leading-relaxed"><span className="font-semibold">Why it matters:</span> {q.why}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 flex items-center gap-8">
            <div>
              <p className="text-xs font-semibold text-slate-500">Principal Modernisation Strategist</p>
              <p className="text-xs text-slate-400">Thoughtworks Advisory · March 2026</p>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div>
              <p className="text-xs font-semibold text-slate-500">24-month programme</p>
              <p className="text-xs text-slate-400">$25–45M · $14–29M/yr revenue uplift · 18–30 month breakeven</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Slide>
  );
}
