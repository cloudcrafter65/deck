'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Counter } from '@/components/primitives/Counter';

// ─── Animation wrapper components ────────────────────────────────────────────

function FadeUp({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FadeUpDark({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.95, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Section shell ────────────────────────────────────────────────────────────

function Section({
  children,
  bg = 'bg-white',
  minH = 'min-h-screen',
}: {
  children: React.ReactNode;
  bg?: string;
  minH?: string;
}) {
  return (
    <section className={`relative ${minH} ${bg}`}>
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
      <div className="max-w-6xl mx-auto px-8 md:px-20 py-32 md:py-40">{children}</div>
    </section>
  );
}

// ─── CounterStat — gates Counter on viewport enter ────────────────────────────

function CounterStat({
  value,
  suffix = '',
  label,
  dark = false,
}: {
  value: number;
  suffix?: string;
  label: string;
  dark?: boolean;
}) {
  const [triggered, setTriggered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onViewportEnter={() => setTriggered(true)}
      className="flex flex-col"
    >
      <span
        className={`text-5xl font-extralight tracking-tight mb-3 leading-none ${dark ? 'text-amber-400' : 'text-amber-600'}`}
      >
        {triggered ? <Counter value={value} duration={1.5} /> : '0'}
        {suffix}
      </span>
      <span className={`text-sm font-light leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
        {label}
      </span>
    </motion.div>
  );
}

// ─── SectionLabel ─────────────────────────────────────────────────────────────

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`text-[10px] font-semibold tracking-[0.22em] uppercase mb-8 ${dark ? 'text-amber-500' : 'text-amber-600'}`}
    >
      {children}
    </p>
  );
}

// ─── Section 1: Hero ─────────────────────────────────────────────────────────

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white flex items-center">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

      <div className="max-w-6xl mx-auto px-8 md:px-20 py-32 relative z-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-400 mb-10"
        >
          Vijayakumar G A · March 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-16 h-px bg-slate-200 mb-10"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="text-6xl md:text-7xl font-light text-slate-900 leading-[1.05] tracking-tight mb-2"
        >
          The Architecture
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
          className="text-6xl md:text-7xl font-light text-slate-900 leading-[1.05] tracking-tight mb-10"
        >
          of <span className="text-amber-600 font-normal">Readiness</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-16 h-px bg-slate-200 mb-10"
        />

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
          className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl"
        >
          Why Application Modernisation Is the Defining Sociotechnical Discipline of the Agentic Era
        </motion.p>
      </div>
    </section>
  );
}

// ─── Section 2: The Paradox (slides 2 + 3 merged) ────────────────────────────

export function ParadoxSection() {
  return (
    <Section bg="bg-stone-50" minH="min-h-[150vh]">
      <FadeUp>
        <SectionLabel>The Modernisation Paradox</SectionLabel>
      </FadeUp>

      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-light text-slate-900 tracking-tight leading-tight mb-4">
          The numbers should unsettle every executive.
        </h2>
      </FadeUp>
      <FadeUp>
        <p className="text-base text-slate-500 mb-16 font-light max-w-2xl">
          Despite record investment, the correlation between spend and outcome remains stubbornly weak.
        </p>
      </FadeUp>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 mb-6">
        <div className="bg-white p-7">
          <CounterStat value={70} suffix="%" label="of enterprise transformation initiatives fail to meet stated objectives" />
        </div>
        <div className="bg-white p-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <span className="text-5xl font-extralight text-amber-600 tracking-tight mb-3 leading-none">$3.4T</span>
            <span className="text-sm font-light leading-relaxed text-slate-500">
              in global digital transformation spending projected for 2026
            </span>
          </motion.div>
        </div>
        <div className="bg-white p-7">
          <CounterStat value={35} suffix="%" label="global success rate across 850+ companies studied by BCG" />
        </div>
        <div className="bg-white p-7">
          <CounterStat value={79} suffix="%" label="of large-scale modernisation programmes collapse at production stage" />
        </div>
      </div>

      <FadeUp>
        <p className="text-sm text-slate-400 font-light italic mb-24">
          Average cost per failed attempt: $1.5 million. Average recovery time: 16 months.
        </p>
      </FadeUp>

      {/* Failure pattern — merged from slide 3 */}
      <FadeUp>
        <SectionLabel>The Pattern of Failure</SectionLabel>
      </FadeUp>

      <FadeUp>
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight mb-12">
          Big-bang transformations fail in the same way,
          <br />
          for the same reasons, across three continents.
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Birmingham */}
        <FadeUp>
          <div className="border border-slate-100 p-8 bg-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-8 h-px bg-amber-500 mt-2 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-1">
                  Birmingham City Council
                </p>
                <p className="text-sm text-slate-500 font-light">Oracle Cloud ERP Migration</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-extralight text-amber-600 mb-1">£38M</p>
                <p className="text-xs text-slate-400 leading-snug">Initial estimate, 2022</p>
              </div>
              <div>
                <p className="text-2xl font-extralight text-amber-600 mb-1">£114M</p>
                <p className="text-xs text-slate-400 leading-snug">Actual cost by 2025</p>
              </div>
              <div>
                <p className="text-2xl font-extralight text-red-400 mb-1">Zero</p>
                <p className="text-xs text-slate-400 leading-snug">Finance processes reverted to manual bookkeeping</p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* DoD */}
        <FadeUp>
          <div className="border border-slate-100 p-8 bg-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-8 h-px bg-amber-500 mt-2 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-1">
                  U.S. Department of Defence
                </p>
                <p className="text-sm text-slate-500 font-light">IT Modernisation Programmes</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-extralight text-amber-600 mb-1">$10.9B</p>
                <p className="text-xs text-slate-400 leading-snug">Allocated FY2023–2025</p>
              </div>
              <div>
                <p className="text-2xl font-extralight text-amber-600 mb-1">24</p>
                <p className="text-xs text-slate-400 leading-snug">IT programmes in scope</p>
              </div>
              <div>
                <p className="text-2xl font-extralight text-red-400 mb-1">&gt;50%</p>
                <p className="text-xs text-slate-400 leading-snug">Encountered significant failures</p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Pull quote — scaled up */}
      <FadeUp>
        <blockquote className="border-l-4 border-amber-400 pl-8">
          <p className="text-3xl md:text-4xl text-slate-600 font-light italic leading-relaxed">
            &ldquo;The response &mdash; pouring more capital into transformation programmes structured
            identically to those that have already failed &mdash; borders on institutional insanity.&rdquo;
          </p>
        </blockquote>
      </FadeUp>
    </Section>
  );
}

// ─── Section 3: Root Cause (dark) ─────────────────────────────────────────────

export function RootCauseSection() {
  return (
    <section className="relative min-h-screen bg-slate-900 flex items-center">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
      <div className="max-w-6xl mx-auto px-8 md:px-20 py-32 md:py-40 w-full">
        <FadeUpDark>
          <SectionLabel dark>Root Cause</SectionLabel>
        </FadeUpDark>

        <FadeUpDark>
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight leading-tight mb-10">
            The answer is <span className="text-amber-400 italic">sociotechnical</span>,
            <br />
            not technical.
          </h2>
        </FadeUpDark>

        <FadeUpDark>
          <p className="text-lg text-slate-300 font-light leading-relaxed mb-14 max-w-2xl">
            Every failed programme shares the same structural defect: the organisation designed
            a target architecture without redesigning the teams, incentives, governance, and
            communication structures needed to build and operate it.
          </p>
        </FadeUpDark>

        {/* Conway's Law — visual hero of this section */}
        <FadeUpDark>
          <div className="border-l-4 border-amber-500 pl-8 mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-5">
              Conway&apos;s Law · 1967 — still ignored
            </p>
            <p className="text-3xl md:text-4xl text-white font-light italic leading-relaxed mb-6">
              &ldquo;Any organisation that designs a system will produce a design whose structure
              is a copy of the organisation&apos;s communication structure.&rdquo;
            </p>
            <p className="text-base text-slate-400 font-light leading-relaxed">
              Conway&apos;s Law does not politely step aside. It produces the architecture your
              organisation is actually shaped to build — regardless of what your architects
              drew on a whiteboard.
            </p>
          </div>
        </FadeUpDark>
      </div>
    </section>
  );
}

// ─── Section 4: The Operating Model ─────────────────────────────────────────

const teamTypes = [
  {
    name: 'Stream-aligned',
    description: 'Owns a business domain end-to-end. Produces domain-oriented services.',
    accent: 'bg-amber-500',
  },
  {
    name: 'Platform',
    description: 'Provides self-serve infrastructure. Produces consistent deployment pipelines.',
    accent: 'bg-slate-700',
  },
  {
    name: 'Enabling',
    description: 'Coaches and uplifts other teams. Produces capability transfer, not dependency.',
    accent: 'bg-slate-400',
  },
  {
    name: 'Complicated-subsystem',
    description: 'Owns specialist domains requiring deep expertise. Minimal interfaces.',
    accent: 'bg-amber-300',
  },
];

const interactionModes = [
  { name: 'Collaboration', desc: 'Two teams work closely for a bounded period.' },
  { name: 'X-as-a-service', desc: 'One team consumes from another with minimal interaction.' },
  { name: 'Facilitating', desc: 'One team helps another discover the right practices.' },
];

export function OperatingModelSection() {
  return (
    <Section bg="bg-white">
      <FadeUp>
        <SectionLabel>Team Topologies — Skelton &amp; Pais</SectionLabel>
      </FadeUp>

      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-light text-slate-900 tracking-tight leading-tight mb-4">
          The mechanism that determines whether
          <br />
          architectural vision survives contact with reality.
        </h2>
      </FadeUp>
      <FadeUp>
        <p className="text-base text-slate-500 font-light mb-14">
          Four fundamental team types. Three interaction modes.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Team types — spans 2 cols */}
        <FadeUp className="md:col-span-2">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-5">
            Team Types
          </p>
          <div className="grid grid-cols-2 gap-4">
            {teamTypes.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
                className="border border-slate-100 p-6 bg-stone-50"
              >
                <div className={`w-5 h-0.5 ${t.accent} mb-4`} />
                <p className="text-sm font-semibold text-slate-800 mb-2">{t.name}</p>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{t.description}</p>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* Interaction modes */}
        <FadeUp>
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-5">
            Interaction Modes
          </p>
          <div className="flex flex-col gap-4">
            {interactionModes.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
                className="border border-slate-100 p-6 bg-stone-50"
              >
                <p className="text-sm font-semibold text-slate-800 mb-2">{m.name}</p>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}

// ─── Section 5: AI Forces the Hand (slides 6 + 7 merged) ─────────────────────

const aiRequirements = [
  {
    num: '01',
    title: 'Composable APIs',
    body: 'Agents invoke services programmatically. Every capability must be exposed as a versioned, documented, contract-tested API. Systems visible only through UIs or batch interfaces are architecturally invisible to AI agents.',
  },
  {
    num: '02',
    title: 'Event-Driven Architecture',
    body: 'Agents operate asynchronously and must react to state changes in real time. Request-response with polling cannot support this. You need event buses, domain events, and publish-subscribe patterns.',
  },
  {
    num: '03',
    title: 'Robust Observability',
    body: 'Every agent action must be traceable: what input triggered the decision, what reasoning was applied, what outcome was produced. Structured logging and immutable audit records must be built in, not retrofitted.',
  },
  {
    num: '04',
    title: 'Fine-Grained Authorisation',
    body: 'Agents need scoped, auditable permissions — not blanket service accounts. Token-based auth with delegated authority, row-level security, and real-time permission evaluation that can revoke access when conditions change.',
  },
];

export function AISection() {
  return (
    <Section bg="bg-stone-50" minH="min-h-[150vh]">
      <FadeUp>
        <SectionLabel>The New Forcing Function</SectionLabel>
      </FadeUp>

      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-light text-slate-900 tracking-tight leading-tight mb-4">
          AI demands what legacy cannot provide.
        </h2>
      </FadeUp>
      <FadeUp>
        <p className="text-base text-slate-500 font-light mb-14 max-w-2xl">
          In 2026, AI readiness has overtaken cost reduction, technical debt, and resilience
          as the primary modernisation imperative. The business case is no longer optional.
        </p>
      </FadeUp>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 mb-6">
        <div className="bg-white p-7">
          <CounterStat value={42} suffix="%" label="of enterprises deploying AI agents in production today" />
        </div>
        <div className="bg-white p-7">
          <CounterStat value={91} suffix="%" label="of CXOs plan to increase agentic AI budgets this year" />
        </div>
        <div className="bg-white p-7">
          <CounterStat value={88} suffix="%" label="of organisations use AI in at least one business function" />
        </div>
        <div className="bg-white p-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <span className="text-5xl font-extralight text-amber-600 tracking-tight mb-3 leading-none">40%+</span>
            <span className="text-sm font-light leading-relaxed text-slate-500">
              of agentic AI projects will fail by 2027 — not due to AI, but legacy
            </span>
          </motion.div>
        </div>
      </div>

      <FadeUp>
        <p className="text-base text-slate-500 font-light italic border-l-2 border-amber-400 pl-4 mb-24">
          &ldquo;Organisations that delay modernisation are not merely accumulating technical debt &mdash;
          they are forfeiting their capacity to participate in the most significant capability
          shift in enterprise computing since the internet.&rdquo;
        </p>
      </FadeUp>

      {/* Divider */}
      <div className="w-full h-px bg-amber-500/20 my-8" />

      {/* AI requirements — merged from slide 7 */}
      <FadeUp>
        <SectionLabel>Architecture Requirements for AI</SectionLabel>
      </FadeUp>

      <FadeUp>
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight mb-12">
          Four non-negotiable architectural demands.
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 mb-8">
        {aiRequirements.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.1 }}
            className="bg-white p-8"
          >
            <p className="text-xs font-semibold text-amber-600 tracking-widest mb-3">{r.num}</p>
            <p className="text-base font-semibold text-slate-900 mb-3">{r.title}</p>
            <p className="text-sm text-slate-500 font-light leading-relaxed">{r.body}</p>
          </motion.div>
        ))}
      </div>

      <FadeUp>
        <p className="text-sm text-slate-400 font-light">
          None of these can be meaningfully retrofitted onto a monolithic legacy system.
        </p>
      </FadeUp>
    </Section>
  );
}

// ─── Section 6: Evolve, Don't Replace ────────────────────────────────────────

const evoPrinciples = [
  {
    title: 'Fitness Functions',
    body: 'Automated, measurable tests that evaluate whether the architecture continues to meet its intended purpose as it evolves — running in CI/CD pipelines and failing builds that violate them. Architectural intent encoded into delivery.',
  },
  {
    title: 'Bounded Contexts',
    body: 'Decomposing systems into independently evolvable domains with clear boundaries, explicit contracts, and the freedom to adopt different technologies. Boundaries discovered through business domain understanding, not technical convenience.',
  },
  {
    title: 'Guided Evolution',
    body: "Accepting that the target architecture will itself evolve. The organisation that defines a fixed state in 2026 and spends three years building toward it will arrive in 2029 with an architecture designed for 2026's problems.",
  },
];

export function EvolutionSection() {
  return (
    <Section bg="bg-white">
      <FadeUp>
        <SectionLabel>From Projects to Disciplines</SectionLabel>
      </FadeUp>

      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-light text-slate-900 tracking-tight leading-tight mb-4">
          Evolutionary architecture.
        </h2>
      </FadeUp>
      <FadeUp>
        <p className="text-base text-slate-500 font-light mb-14 max-w-2xl">
          Designing systems and organisations that adapt incrementally, continuously, and safely
          over time. Routinely namedropped. Rarely demonstrated. Here is what it actually means.
        </p>
      </FadeUp>

      {/* Full-width horizontal strips */}
      <div className="flex flex-col">
        {evoPrinciples.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.1 }}
            className="flex gap-8 py-10 border-b border-slate-100"
          >
            <span className="text-xs font-semibold text-amber-600 tracking-widest flex-shrink-0 w-8 mt-1">
              0{i + 1}
            </span>
            <div className="flex-1 md:flex md:gap-12">
              <p className="text-lg font-semibold text-slate-900 mb-3 md:mb-0 md:w-56 flex-shrink-0">
                {p.title}
              </p>
              <p className="text-base text-slate-500 font-light leading-relaxed">{p.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ─── Section 7: The Data Problem ──────────────────────────────────────────────

const dataStages = [
  {
    index: '01',
    label: 'The Legacy State',
    bg: 'bg-slate-800',
    labelColor: 'text-slate-500',
    titleColor: 'text-white',
    bodyColor: 'text-slate-300',
    tagBg: 'bg-slate-700',
    tagText: 'text-slate-400',
    tag: 'Starting point',
    points: [
      'Shared database across all domains',
      'Stored procedures encoding invisible business logic',
      'Triggers with cross-domain side effects',
    ],
    callout: '',
  },
  {
    index: '02',
    label: 'The False Escape',
    bg: 'bg-amber-50',
    labelColor: 'text-amber-600',
    titleColor: 'text-slate-900',
    bodyColor: 'text-slate-600',
    tagBg: 'bg-amber-100',
    tagText: 'text-amber-700',
    tag: 'The trap most orgs fall into',
    points: [
      'Application layer decomposed into microservices',
      'Database monolith left intact underneath',
      'One schema change collapses everything',
    ],
    callout:
      'A distributed system with a single point of failure — arguably worse than the original monolith.',
  },
  {
    index: '03',
    label: 'True Domain Ownership',
    bg: 'bg-white',
    labelColor: 'text-slate-400',
    titleColor: 'text-slate-900',
    bodyColor: 'text-slate-600',
    tagBg: 'bg-slate-100',
    tagText: 'text-slate-500',
    tag: 'Data Mesh — Dehghani',
    points: [
      'Each bounded context owns its data',
      'Data exposed as a product via APIs and events',
      'Federated governance, self-serve infrastructure',
    ],
    callout: '',
  },
];

export function DataSection() {
  return (
    <Section bg="bg-stone-50">
      <FadeUp>
        <SectionLabel>The Data Problem Nobody Wants to Talk About</SectionLabel>
      </FadeUp>

      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-light text-slate-900 tracking-tight leading-tight mb-4">
          The hardest part is not the code.
          <br />
          It is the <span className="text-amber-600">data</span>.
        </h2>
      </FadeUp>
      <FadeUp>
        <p className="text-base text-slate-500 font-light mb-14 max-w-2xl">
          Legacy monoliths carry decades of implicit coupling that survives application-layer decomposition.
        </p>
      </FadeUp>

      {/* Three-stage progression */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 mb-8">
        {dataStages.map((s, i) => (
          <motion.div
            key={s.index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.1 }}
            className={`${s.bg} p-7 flex flex-col gap-4`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${s.labelColor}`}>
                {s.index}
              </span>
              <span className={`text-[10px] px-2 py-0.5 rounded-sm font-medium ${s.tagBg} ${s.tagText}`}>
                {s.tag}
              </span>
            </div>
            <p className={`text-sm font-semibold ${s.titleColor}`}>{s.label}</p>
            <ul className="space-y-2 flex-1">
              {s.points.map((pt, j) => (
                <li key={j} className={`flex gap-2.5 text-sm font-light leading-relaxed ${s.bodyColor}`}>
                  <span className="flex-shrink-0 mt-2 w-1 h-1 rounded-full bg-current opacity-40" />
                  {pt}
                </li>
              ))}
            </ul>
            {s.callout && (
              <p className="text-xs text-amber-700 italic font-light leading-relaxed border-t border-amber-200 pt-3 mt-1">
                {s.callout}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      <FadeUp>
        <p className="text-sm text-slate-400 font-light italic border-l-2 border-amber-400 pl-4">
          Without domain-oriented data ownership, your beautifully decomposed services
          are still secretly coupled through a shared database that nobody is allowed to
          change because three hundred stored procedures depend on a table schema designed in 2004.
        </p>
      </FadeUp>
    </Section>
  );
}

// ─── Section 8: The Contrarian View (dark) ────────────────────────────────────

export function ContrarianSection() {
  return (
    <section className="relative min-h-screen bg-slate-900 flex items-center">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
      <div className="max-w-6xl mx-auto px-8 md:px-20 py-32 md:py-40 w-full">
        <FadeUpDark>
          <SectionLabel dark>A Contrarian Position</SectionLabel>
        </FadeUpDark>

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="text-6xl md:text-8xl font-light text-white tracking-tight leading-tight mb-14"
        >
          Most organisations should not
          <br />
          adopt microservices.
        </motion.h2>

        {/* Evidence stats */}
        <div className="grid grid-cols-3 gap-px bg-slate-700 mb-12">
          {[
            {
              value: '42%',
              label: 'of microservices adopters have consolidated services back into larger units',
              src: 'CNCF 2025',
            },
            {
              value: '35%',
              label: 'more debugging time in microservices vs. modular monoliths',
              src: 'Industry survey',
            },
            {
              value: '3.75–6×',
              label: 'higher infrastructure costs for equivalent functionality',
              src: '$15K monolith vs $40–65K microservices/month',
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.1 }}
              className="bg-slate-800 p-7"
            >
              <span className="text-3xl font-extralight text-amber-400 block mb-3 leading-none">
                {s.value}
              </span>
              <span className="text-sm text-slate-400 leading-relaxed block mb-2 font-light">{s.label}</span>
              <span className="text-[10px] text-slate-600 font-light">{s.src}</span>
            </motion.div>
          ))}
        </div>

        <FadeUpDark>
          <div className="border border-slate-700 bg-slate-800/50 p-8">
            <p className="text-sm font-semibold text-slate-300 mb-4">
              The architecture decision that actually matters
            </p>
            <p className="text-2xl md:text-3xl text-white font-light italic leading-relaxed mb-6">
              &ldquo;It is not &lsquo;monolith versus microservices.&rsquo; It is: do we have clean domain
              boundaries, explicit contracts, automated fitness functions, and the organisational
              structure to evolve?&rdquo;
            </p>
            <p className="text-base text-slate-400 font-light leading-relaxed">
              A well-structured modular monolith is a vastly better starting position than a
              poorly structured microservices estate where every service calls every other
              service synchronously.
            </p>
          </div>
        </FadeUpDark>
      </div>
    </section>
  );
}

// ─── Section 9: Evidence ─────────────────────────────────────────────────────

export function EvidenceSection() {
  return (
    <Section bg="bg-white">
      <FadeUp>
        <SectionLabel>Where Disciplined Modernisation Delivers</SectionLabel>
      </FadeUp>

      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-light text-slate-900 tracking-tight leading-tight mb-14">
          Architecture and organisation must
          <br />
          co-evolve by design.
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* DBS */}
        <FadeUp>
          <div className="border border-slate-200 bg-stone-50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-amber-500" />
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-400">
                DBS Bank · Singapore
              </p>
            </div>
            <p className="text-sm text-slate-500 font-light mb-8 leading-relaxed">
              Gradual strangler-fig approach via Kong Gateway. Internal technology marketplace
              for self-serve infrastructure. Server provisioning: 40 weeks → fraction of that.
            </p>
            <div className="grid grid-cols-2 gap-5 border-t border-slate-200 pt-6">
              {[
                { v: 'SGD 780M', l: 'Economic value from AI, 2024' },
                { v: '370+', l: 'AI use cases in production' },
                { v: '1,500', l: 'Models deployed' },
                { v: '<40%', l: 'Cost-to-income ratio' },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-extralight text-amber-600 mb-1 leading-none">{s.v}</p>
                  <p className="text-xs text-slate-400 font-light">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Nubank */}
        <FadeUp>
          <div className="border border-slate-200 bg-stone-50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-amber-500" />
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-400">
                Nubank · Brazil
              </p>
            </div>
            <p className="text-sm text-slate-500 font-light mb-8 leading-relaxed">
              Cloud-native from inception. Decentralised autonomy with explicit ownership
              boundaries. Heavy investment in internal platform engineering and observability.
            </p>
            <div className="grid grid-cols-2 gap-5 border-t border-slate-200 pt-6">
              {[
                { v: '4,000+', l: 'Microservices orchestrated' },
                { v: '72B', l: 'Daily events via Kafka' },
                { v: '122M', l: 'Customers served' },
                { v: 'Teams', l: 'Structured by business domain' },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-extralight text-amber-600 mb-1 leading-none">{s.v}</p>
                  <p className="text-xs text-slate-400 font-light">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>

      <FadeUp>
        <p className="text-base text-slate-500 font-light italic">
          Neither succeeded by treating modernisation as a technology problem alone.
          The lesson is identical despite their different starting points.
        </p>
      </FadeUp>
    </Section>
  );
}

// ─── Section 10: The Playbook (slides 12 + 13 merged) ────────────────────────

const thinSliceProperties = [
  {
    title: 'Blast radius containment',
    body: 'Failure is contained to a bounded context. The API gateway or service mesh can revert traffic to the legacy path instantly. Structurally unavailable in big-bang migrations.',
  },
  {
    title: 'Evidence generation',
    body: 'Each completed slice produces measurable outcomes: deployment frequency, processing time, incident rates, cost. These compound into a business case no theoretical roadmap can match.',
  },
  {
    title: 'Organisational muscle',
    body: 'Teams learn continuous delivery, infrastructure-as-code, automated testing, and observability-driven operations by practising them on real production problems.',
  },
  {
    title: 'CapEx → OpEx conversion',
    body: 'Thin slices convert capital expenditure into operational expenditure, fundamentally changing the risk profile for CFOs and boards.',
  },
];

const ctoPairs = [
  {
    q: 'How do you prevent architectural drift across slices?',
    a: 'Fitness functions enforced in CI/CD pipelines — automated tests that fail builds violating architectural intent. Pair with a lightweight ADR process for cross-cutting decisions and a platform team that builds the paved road: the blessed path of infrastructure, observability, and security controls that makes the right thing the easy thing.',
    tag: 'Governance',
  },
  {
    q: 'Who owns the intermediary layer?',
    a: 'A dedicated platform team. The API gateway, service mesh, and event bus enabling strangler-fig decomposition are themselves complex systems. The interaction mode must be explicitly X-as-a-service — stream-aligned teams consume platform capabilities through self-serve interfaces, not through tickets and waiting.',
    tag: 'Team structure',
  },
  {
    q: 'What happens between slices?',
    a: 'The legacy system does not pause. You need explicit parallel-evolution strategies: feature flags controlling routing between legacy and modern paths, branch-by-abstraction for new interfaces, and ownership boundaries preventing the monolith from growing new coupling faster than you decompose old coupling.',
    tag: 'Execution',
  },
  {
    q: 'When should you not thin-slice?',
    a: 'Real-time payment switches, safety-critical systems, and tightly coupled transaction engines with nanosecond latency requirements sometimes cannot be incrementally decomposed. Some systems are better replaced wholesale in a planned cutover window. Acknowledging this separates a trusted advisor from a methodology salesperson.',
    tag: 'Know the limits',
  },
];

export function PlaybookSection() {
  return (
    <Section bg="bg-stone-50" minH="min-h-[170vh]">
      <FadeUp>
        <SectionLabel>The Practitioner&apos;s Playbook</SectionLabel>
      </FadeUp>

      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-light text-slate-900 tracking-tight leading-tight mb-14">
          Thin-slice modernisation.
        </h2>
      </FadeUp>

      {/* Cycle box */}
      <FadeUp>
        <div className="p-7 bg-amber-50 border border-amber-100 mb-12 max-w-lg">
          <p className="text-sm font-semibold text-amber-800 mb-4">The cycle</p>
          <div className="space-y-3">
            {[
              'Select a narrow, high-value domain',
              'Modernise end-to-end in 8–12 weeks',
              'Demonstrate measurable outcomes',
              'Use outcomes to fund the next slice',
            ].map((s, i) => (
              <div key={i} className="flex gap-3 text-sm text-amber-700 font-light">
                <span className="font-semibold w-4">{i + 1}.</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Properties grid */}
      <div className="grid grid-cols-2 gap-px bg-slate-100 mb-8">
        {thinSliceProperties.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.1 }}
            className="bg-white p-7"
          >
            <p className="text-xs font-semibold text-amber-600 tracking-widest mb-3">0{i + 1}</p>
            <p className="text-sm font-semibold text-slate-900 mb-2">{p.title}</p>
            <p className="text-sm text-slate-500 font-light leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>

      <FadeUp>
        <p className="text-sm text-slate-400 font-light italic border-l-2 border-slate-200 pl-5 mb-24">
          The most effective catalyst for executive commitment is not a 200-page strategy
          document. It is a working production system that demonstrably outperforms its
          predecessor.
        </p>
      </FadeUp>

      {/* Divider */}
      <div className="w-full h-px bg-amber-500/20 my-8" />

      <FadeUp>
        <SectionLabel>Thin-Slice — The Hard Questions</SectionLabel>
      </FadeUp>

      <FadeUp>
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight mb-12">
          Failure modes practitioners rarely discuss openly.
        </h2>
      </FadeUp>

      {/* Q&A stacked list with staggered whileInView */}
      <div className="flex flex-col">
        {ctoPairs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.08 }}
            className="py-8 border-b border-slate-200"
          >
            <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-amber-600 bg-amber-50 px-2 py-0.5 mb-4">
              {item.tag}
            </span>
            <p className="text-lg text-slate-900 italic font-light leading-snug mb-4">
              &ldquo;{item.q}&rdquo;
            </p>
            <p className="text-sm text-slate-500 font-light leading-relaxed">{item.a}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ─── Section 11: Teams First ──────────────────────────────────────────────────

const humanArchItems = [
  {
    title: 'Reverse Conway Manoeuvre',
    body: 'Design team structures to match the desired target architecture before building it. The single highest-leverage intervention in any modernisation programme. Also the most consistently skipped — reorganising teams is politically harder than drawing diagrams.',
  },
  {
    title: 'SRE from Sprint One',
    body: 'Embed Site Reliability Engineering from the first sprint. Treat observability, incident response, and reliability as first-class engineering concerns — not afterthoughts delegated to a separate operations team.',
  },
  {
    title: 'Workforce Transformation',
    body: '78% of CHROs agree workflows and roles must change to capture AI investment value (Gartner, Dec 2025). CIOs cannot hire their way out of the talent gap. Enabling teams that pair with stream-aligned teams build capability through practice, not classroom training.',
  },
];

export function TeamsSection() {
  return (
    <Section bg="bg-white">
      <FadeUp>
        <SectionLabel>The Human Architecture</SectionLabel>
      </FadeUp>

      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-light text-slate-900 tracking-tight leading-tight mb-4">
          Teams are the first design decision.
        </h2>
      </FadeUp>
      <FadeUp>
        <p className="text-base text-slate-500 font-light mb-14 max-w-2xl">
          Conway&apos;s Law is not optional. Your architecture will mirror your organisation
          whether you design for it or not.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        {humanArchItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.1 }}
            className="border border-slate-200 bg-stone-50 p-8"
          >
            <div className="w-5 h-0.5 bg-amber-500 mb-5" />
            <p className="text-base font-semibold text-slate-900 mb-4">{item.title}</p>
            <p className="text-sm text-slate-500 font-light leading-relaxed">{item.body}</p>
          </motion.div>
        ))}
      </div>

      <FadeUp>
        <blockquote className="border-l-2 border-amber-400 pl-6">
          <p className="text-2xl md:text-3xl text-slate-600 font-light italic leading-relaxed">
            &ldquo;Agile and Lean delivery not as methodology theatre &mdash; the standups, the sticky notes,
            the retros that change nothing &mdash; but as genuine operating principles: small batches,
            fast feedback, empowered teams, continuous improvement measured by outcomes.&rdquo;
          </p>
        </blockquote>
      </FadeUp>
    </Section>
  );
}

// ─── Section 12: Coda (dark) ─────────────────────────────────────────────────

export function CodaSection() {
  return (
    <section className="relative min-h-screen bg-slate-900 flex items-center overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

      <div className="max-w-6xl mx-auto px-8 md:px-20 py-32 md:py-40 w-full relative z-10">
        <FadeUpDark>
          <SectionLabel dark>The Architecture of Readiness</SectionLabel>
        </FadeUpDark>

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="text-6xl md:text-8xl font-light text-white tracking-tight leading-tight mb-14"
        >
          There is no end state.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-700 mb-14">
          {[
            {
              label: 'Systems',
              desc: 'Composable, instrumented, failure-aware, domain-oriented — with fitness functions that enforce intent and bounded contexts that enable independent change.',
            },
            {
              label: 'Organisations',
              desc: 'Team structures that mirror architectural intent. Governance that enables speed rather than gates it. Talent strategies that grow capability.',
            },
            {
              label: 'Programmes',
              desc: 'Thin-slice, evidence-driven, self-funding. Continuously reprioritised against business outcomes rather than technical milestones.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: i * 0.12 }}
              className="bg-slate-800 p-8"
            >
              <p className="text-xs font-semibold text-amber-500 tracking-widest uppercase mb-4">
                {item.label}
              </p>
              <p className="text-base text-slate-300 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <FadeUpDark>
          <div className="border-l-2 border-amber-500 pl-8 mb-16">
            <p className="text-2xl md:text-3xl text-white font-light italic leading-relaxed mb-6">
              &ldquo;The question for every technology leader is not whether your architecture is
              ready for the agentic era. It is whether your organisation &mdash; its incentives,
              its governance, its team structures, its tolerance for learning through disciplined
              experimentation &mdash; is designed to continuously become ready.&rdquo;
            </p>
            <p className="text-xl text-amber-400 font-light italic">
              If the answer is no, the architecture is irrelevant.
            </p>
          </div>
        </FadeUpDark>

        <FadeUpDark>
          <div className="pt-10 border-t border-slate-700 flex items-center justify-between">
            <div>
              <p className="text-base text-white font-light">Vijayakumar G A</p>
              <p className="text-xs text-slate-500 font-light mt-1">March 2026</p>
            </div>
            <p className="text-xs text-slate-500 font-light text-right max-w-xs leading-relaxed">
              Senior technology leader · Enterprise modernisation · Platform engineering ·
              Cloud-native architecture
            </p>
          </div>
        </FadeUpDark>
      </div>
    </section>
  );
}
