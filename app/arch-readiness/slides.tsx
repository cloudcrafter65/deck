'use client';

import { Slide } from '@/components/core';
import { motion } from 'framer-motion';

// ─── Shared animation variants ──────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

// ─── Shared primitives ───────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-amber-600 mb-5">
      {children}
    </p>
  );
}

function Rule({ className = '' }: { className?: string }) {
  return <div className={`w-8 h-px bg-amber-500 ${className}`} />;
}

function SlideFooter({ label }: { label?: string }) {
  return (
    <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between">
      <span className="text-[10px] tracking-widest uppercase text-slate-300 font-medium">
        The Architecture of Readiness
      </span>
      {label && (
        <span className="text-[10px] tracking-widest uppercase text-slate-300 font-medium">
          {label}
        </span>
      )}
    </div>
  );
}

// ─── Slide 1: Title ──────────────────────────────────────────────────────────

export function TitleSlide() {
  return (
    <Slide className="flex items-center justify-center bg-white relative">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

      <div className="max-w-4xl w-full px-16 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
           
            className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-400 mb-10"
          >
            Vijayakumar G A · March 2026
          </motion.p>

          {/* Thin rule */}
          <motion.div variants={fadeUp} className="w-16 h-px bg-slate-200 mb-10" />

          {/* Title */}
          <motion.h1
            variants={fadeUp}
           
            className="text-6xl md:text-7xl font-light text-slate-900 leading-[1.05] tracking-tight mb-2"
          >
            The Architecture
          </motion.h1>
          <motion.h1
            variants={fadeUp}
           
            className="text-6xl md:text-7xl font-light text-slate-900 leading-[1.05] tracking-tight mb-10"
          >
            of <span className="text-amber-600 font-normal">Readiness</span>
          </motion.h1>

          {/* Thin rule */}
          <motion.div variants={fadeUp} className="w-16 h-px bg-slate-200 mb-10" />

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
           
            className="text-lg text-slate-500 font-light leading-relaxed max-w-2xl"
          >
            Why Application Modernisation Is the Defining Sociotechnical
            Discipline of the Agentic Era
          </motion.p>
        </motion.div>
      </div>

      <SlideFooter />
    </Slide>
  );
}

// ─── Slide 2: The Modernisation Paradox ─────────────────────────────────────

export function ParadoxSlide() {
  const stats = [
    { value: '70%', label: 'of enterprise transformation initiatives fail to meet stated objectives' },
    { value: '$3.4T', label: 'in global digital transformation spending projected for 2026' },
    { value: '35%', label: 'global success rate across 850+ companies studied by BCG' },
    { value: '79%', label: 'of large-scale modernisation programmes collapse at production stage' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-stone-50 relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

      <div className="max-w-5xl w-full px-16 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel>The Modernisation Paradox</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
           
            className="text-4xl font-light text-slate-900 tracking-tight leading-tight mb-3"
          >
            The numbers should unsettle every executive.
          </motion.h2>
          <motion.p
            variants={fadeUp}
           
            className="text-base text-slate-500 mb-12 font-light"
          >
            Despite record investment, the correlation between spend and outcome remains stubbornly weak.
          </motion.p>

          <motion.div
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 3}
                className="bg-white p-7 flex flex-col"
              >
                <span className="text-5xl font-extralight text-amber-600 tracking-tight mb-4 leading-none">
                  {s.value}
                </span>
                <span className="text-sm text-slate-500 leading-relaxed font-light">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
           
            className="mt-8 text-sm text-slate-400 font-light italic"
          >
            Average cost per failed attempt: $1.5 million. Average recovery time: 16 months.
          </motion.p>
        </motion.div>
      </div>

      <SlideFooter label="01" />
    </Slide>
  );
}

// ─── Slide 3: The Failure Pattern ───────────────────────────────────────────

export function FailurePatternSlide() {
  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

      <div className="max-w-5xl w-full px-16 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel>The Pattern of Failure</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
           
            className="text-4xl font-light text-slate-900 tracking-tight leading-tight mb-10"
          >
            Big-bang transformations fail in the same way,
            <br />
            for the same reasons, across three continents.
          </motion.h2>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Birmingham */}
            <motion.div
              variants={fadeUp}
             
              className="border border-slate-100 p-7 bg-stone-50"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="mt-1">
                  <Rule />
                </div>
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
            </motion.div>

            {/* DoD */}
            <motion.div
              variants={fadeUp}
             
              className="border border-slate-100 p-7 bg-stone-50"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="mt-1">
                  <Rule />
                </div>
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
            </motion.div>
          </motion.div>

          {/* Pull quote */}
          <motion.blockquote
            variants={fadeUp}
           
            className="border-l-2 border-amber-400 pl-6"
          >
            <p className="text-lg text-slate-600 font-light italic leading-relaxed">
              &ldquo;The response &mdash; pouring more capital into transformation programmes structured
              identically to those that have already failed &mdash; borders on institutional insanity.&rdquo;
            </p>
          </motion.blockquote>
        </motion.div>
      </div>

      <SlideFooter label="02" />
    </Slide>
  );
}

// ─── Slide 4: Root Cause — Sociotechnical ───────────────────────────────────

export function RootCauseSlide() {
  return (
    <Slide className="flex items-center justify-center bg-slate-900 relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

      <div className="max-w-4xl w-full px-16 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p
            variants={fadeUp}
           
            className="text-[10px] font-semibold tracking-[0.22em] uppercase text-amber-500 mb-8"
          >
            Root Cause
          </motion.p>

          <motion.h2
            variants={fadeUp}
           
            className="text-5xl font-light text-white tracking-tight leading-tight mb-10"
          >
            The answer is <span className="text-amber-400 italic">sociotechnical</span>,
            <br />
            not technical.
          </motion.h2>

          <motion.p
            variants={fadeUp}
           
            className="text-lg text-slate-300 font-light leading-relaxed mb-10 max-w-2xl"
          >
            Every failed programme shares the same structural defect: the organisation designed
            a target architecture without redesigning the teams, incentives, governance, and
            communication structures needed to build and operate it.
          </motion.p>

          {/* Conway's Law */}
          <motion.div
            variants={fadeUp}
           
            className="border border-slate-700 bg-slate-800/50 p-8"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-4">
              Conway&apos;s Law &middot; 1967 &mdash; still ignored
            </p>
            <p className="text-xl text-white font-light italic leading-relaxed">
              &ldquo;Any organisation that designs a system will produce a design whose structure
              is a copy of the organisation&apos;s communication structure.&rdquo;
            </p>
            <p className="mt-4 text-sm text-slate-400 font-light">
              Conway&apos;s Law does not politely step aside. It produces the architecture your
              organisation is actually shaped to build — regardless of what your architects
              drew on a whiteboard.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between">
        <span className="text-[10px] tracking-widest uppercase text-slate-600 font-medium">
          The Architecture of Readiness
        </span>
        <span className="text-[10px] tracking-widest uppercase text-slate-600 font-medium">03</span>
      </div>
    </Slide>
  );
}

// ─── Slide 5: Team Topologies ────────────────────────────────────────────────

export function TeamTopologiesSlide() {
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

  const modes = [
    { name: 'Collaboration', desc: 'Two teams work closely for a bounded period.' },
    { name: 'X-as-a-service', desc: 'One team consumes from another with minimal interaction.' },
    { name: 'Facilitating', desc: 'One team helps another discover the right practices.' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

      <div className="max-w-5xl w-full px-16 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel>Team Topologies — Skelton & Pais</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
           
            className="text-4xl font-light text-slate-900 tracking-tight mb-2"
          >
            The mechanism that determines whether
            <br />
            architectural vision survives contact with reality.
          </motion.h2>
          <motion.p
            variants={fadeUp}
           
            className="text-base text-slate-500 font-light mb-10"
          >
            Four fundamental team types. Three interaction modes.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team types */}
            <motion.div variants={fadeUp} className="md:col-span-2">
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">
                Team Types
              </p>
              <div className="grid grid-cols-2 gap-3">
                {teamTypes.map((t, i) => (
                  <div key={i} className="border border-slate-100 p-5 bg-stone-50">
                    <div className={`w-5 h-0.5 ${t.accent} mb-3`} />
                    <p className="text-sm font-semibold text-slate-800 mb-1">{t.name}</p>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{t.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interaction modes */}
            <motion.div variants={fadeUp}>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">
                Interaction Modes
              </p>
              <div className="flex flex-col gap-3">
                {modes.map((m, i) => (
                  <div key={i} className="border border-slate-100 p-5 bg-stone-50">
                    <p className="text-sm font-semibold text-slate-800 mb-1">{m.name}</p>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <SlideFooter label="04" />
    </Slide>
  );
}

// ─── Slide 6: AI Forcing Function ────────────────────────────────────────────

export function AIForcingFunctionSlide() {
  const stats = [
    { value: '42%', label: 'of enterprises deploying AI agents in production today' },
    { value: '91%', label: 'of CXOs plan to increase agentic AI budgets this year' },
    { value: '88%', label: 'of organisations use AI in at least one business function' },
    { value: '40%+', label: 'of agentic AI projects will fail by 2027 — not due to AI, but legacy' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-stone-50 relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

      <div className="max-w-5xl w-full px-16 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel>The New Forcing Function</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
           
            className="text-4xl font-light text-slate-900 tracking-tight leading-tight mb-3"
          >
            AI demands what legacy cannot provide.
          </motion.h2>
          <motion.p
            variants={fadeUp}
           
            className="text-base text-slate-500 font-light mb-10 max-w-2xl"
          >
            In 2026, AI readiness has overtaken cost reduction, technical debt, and resilience
            as the primary modernisation imperative. The business case is no longer optional.
          </motion.p>

          <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 3}
                className="bg-white p-7"
              >
                <span className="text-4xl font-extralight text-amber-600 tracking-tight mb-3 block leading-none">
                  {s.value}
                </span>
                <span className="text-xs text-slate-500 leading-relaxed font-light">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
           
            className="mt-8 text-sm text-slate-500 font-light italic border-l-2 border-amber-400 pl-4"
          >
            &ldquo;Organisations that delay modernisation are not merely accumulating technical debt &mdash;
            they are forfeiting their capacity to participate in the most significant capability
            shift in enterprise computing since the internet.&rdquo;
          </motion.p>
        </motion.div>
      </div>

      <SlideFooter label="05" />
    </Slide>
  );
}

// ─── Slide 7: What AI Requires Architecturally ───────────────────────────────

export function AIRequirementsSlide() {
  const requirements = [
    {
      num: '01',
      title: 'Composable APIs',
      body:
        'Agents invoke services programmatically. Every capability must be exposed as a versioned, documented, contract-tested API. Systems visible only through UIs or batch interfaces are architecturally invisible to AI agents.',
    },
    {
      num: '02',
      title: 'Event-Driven Architecture',
      body:
        'Agents operate asynchronously and must react to state changes in real time. Request-response with polling cannot support this. You need event buses, domain events, and publish-subscribe patterns.',
    },
    {
      num: '03',
      title: 'Robust Observability',
      body:
        'Every agent action must be traceable: what input triggered the decision, what reasoning was applied, what outcome was produced. Structured logging and immutable audit records must be built in, not retrofitted.',
    },
    {
      num: '04',
      title: 'Fine-Grained Authorisation',
      body:
        'Agents need scoped, auditable permissions — not blanket service accounts. Token-based auth with delegated authority, row-level security, and real-time permission evaluation that can revoke access when conditions change.',
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

      <div className="max-w-5xl w-full px-16 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel>Architecture Requirements for AI</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
           
            className="text-4xl font-light text-slate-900 tracking-tight leading-tight mb-10"
          >
            Four non-negotiable architectural demands.
          </motion.h2>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100">
            {requirements.map((r, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 2}
                className="bg-white p-7"
              >
                <p className="text-xs font-semibold text-amber-600 tracking-widest mb-3">{r.num}</p>
                <p className="text-base font-semibold text-slate-900 mb-3">{r.title}</p>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{r.body}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
           
            className="mt-7 text-xs text-slate-400 font-light"
          >
            None of these can be meaningfully retrofitted onto a monolithic legacy system.
          </motion.p>
        </motion.div>
      </div>

      <SlideFooter label="06" />
    </Slide>
  );
}

// ─── Slide 8: Evolutionary Architecture ─────────────────────────────────────

export function EvolutionaryArchSlide() {
  const principles = [
    {
      title: 'Fitness Functions',
      body:
        'Automated, measurable tests that evaluate whether the architecture continues to meet its intended purpose as it evolves — running in CI/CD pipelines and failing builds that violate them. Architectural intent encoded into delivery.',
    },
    {
      title: 'Bounded Contexts',
      body:
        'Decomposing systems into independently evolvable domains with clear boundaries, explicit contracts, and the freedom to adopt different technologies. Boundaries discovered through business domain understanding, not technical convenience.',
    },
    {
      title: 'Guided Evolution',
      body:
        "Accepting that the target architecture will itself evolve. The organisation that defines a fixed state in 2026 and spends three years building toward it will arrive in 2029 with an architecture designed for 2026's problems.",
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-stone-50 relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

      <div className="max-w-5xl w-full px-16 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel>From Projects to Disciplines</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
           
            className="text-4xl font-light text-slate-900 tracking-tight leading-tight mb-3"
          >
            Evolutionary architecture.
          </motion.h2>
          <motion.p
            variants={fadeUp}
           
            className="text-base text-slate-500 font-light mb-10 max-w-2xl"
          >
            Designing systems and organisations that adapt incrementally, continuously, and safely
            over time. Routinely namedropped. Rarely demonstrated. Here is what it actually means.
          </motion.p>

          <motion.div variants={stagger} className="flex flex-col gap-4">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 3}
                className="flex gap-6 border border-slate-200 bg-white p-6"
              >
                <div className="flex-shrink-0 w-6 text-right">
                  <span className="text-xs font-semibold text-amber-600 tracking-widest">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-2">{p.title}</p>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <SlideFooter label="07" />
    </Slide>
  );
}

// ─── Slide 9: The Data Problem ───────────────────────────────────────────────

export function DataProblemSlide() {
  const stages = [
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
      callout: 'A distributed system with a single point of failure — arguably worse than the original monolith.',
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
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-stone-50 relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

      <div className="max-w-5xl w-full px-16 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible">

          {/* Header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <motion.div variants={fadeUp}>
                <SectionLabel>The Data Problem Nobody Wants to Talk About</SectionLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-4xl font-light text-slate-900 tracking-tight leading-tight"
              >
                The hardest part is not the code.
                <br />
                It is the <span className="text-amber-600">data</span>.
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp}
              className="text-xs text-slate-400 font-light text-right max-w-48 leading-relaxed shrink-0 ml-8"
            >
              Legacy monoliths carry decades of implicit coupling that survives application-layer decomposition.
            </motion.p>
          </div>

          {/* Three-stage progression */}
          <motion.div variants={stagger} className="grid grid-cols-3 gap-px bg-slate-200">
            {stages.map((s) => (
              <motion.div key={s.index} variants={fadeUp} className={`${s.bg} p-6 flex flex-col gap-4`}>
                {/* Stage header */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${s.labelColor}`}>
                    {s.index}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-sm font-medium ${s.tagBg} ${s.tagText}`}>
                    {s.tag}
                  </span>
                </div>

                {/* Stage title */}
                <p className={`text-sm font-semibold ${s.titleColor}`}>{s.label}</p>

                {/* Points */}
                <ul className="space-y-2 flex-1">
                  {s.points.map((pt, j) => (
                    <li key={j} className={`flex gap-2.5 text-xs font-light leading-relaxed ${s.bodyColor}`}>
                      <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-current opacity-40" />
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Optional callout */}
                {s.callout && (
                  <p className="text-xs text-amber-700 italic font-light leading-relaxed border-t border-amber-200 pt-3 mt-1">
                    {s.callout}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom principle */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-xs text-slate-400 font-light italic border-l-2 border-amber-400 pl-4"
          >
            Without domain-oriented data ownership, your beautifully decomposed services
            are still secretly coupled through a shared database that nobody is allowed to
            change because three hundred stored procedures depend on a table schema designed in 2004.
          </motion.p>

        </motion.div>
      </div>

      <SlideFooter label="08" />
    </Slide>
  );
}

// ─── Slide 10: The Contrarian Take ───────────────────────────────────────────

export function ContrarianSlide() {
  return (
    <Slide className="flex items-center justify-center bg-slate-900 relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

      <div className="max-w-5xl w-full px-16 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p
            variants={fadeUp}
           
            className="text-[10px] font-semibold tracking-[0.22em] uppercase text-amber-500 mb-8"
          >
            A Contrarian Position
          </motion.p>

          <motion.h2
            variants={fadeUp}
           
            className="text-4xl font-light text-white tracking-tight leading-tight mb-10"
          >
            Most organisations should not
            <br />
            adopt microservices.
          </motion.h2>

          {/* Evidence stats */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-3 gap-px bg-slate-700 mb-10"
          >
            {[
              { value: '42%', label: 'of microservices adopters have consolidated services back into larger units', src: 'CNCF 2025' },
              { value: '35%', label: 'more debugging time in microservices vs. modular monoliths', src: 'Industry survey' },
              { value: '3.75–6×', label: 'higher infrastructure costs for equivalent functionality', src: '$15K monolith vs $40–65K microservices/month' },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 2}
                className="bg-slate-800 p-6"
              >
                <span className="text-3xl font-extralight text-amber-400 block mb-3 leading-none">
                  {s.value}
                </span>
                <span className="text-xs text-slate-400 leading-relaxed block mb-2 font-light">{s.label}</span>
                <span className="text-[10px] text-slate-600 font-light">{s.src}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
           
            className="border border-slate-700 bg-slate-800/50 p-7"
          >
            <p className="text-sm font-semibold text-slate-300 mb-3">
              The architecture decision that actually matters
            </p>
            <p className="text-base text-white font-light italic leading-relaxed">
              &ldquo;It is not &lsquo;monolith versus microservices.&rsquo; It is: do we have clean domain
              boundaries, explicit contracts, automated fitness functions, and the organisational
              structure to evolve?&rdquo;
            </p>
            <p className="mt-4 text-sm text-slate-400 font-light">
              A well-structured modular monolith is a vastly better starting position than a
              poorly structured microservices estate where every service calls every other
              service synchronously.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between">
        <span className="text-[10px] tracking-widest uppercase text-slate-600 font-medium">
          The Architecture of Readiness
        </span>
        <span className="text-[10px] tracking-widest uppercase text-slate-600 font-medium">09</span>
      </div>
    </Slide>
  );
}

// ─── Slide 11: Industry Evidence ─────────────────────────────────────────────

export function IndustryEvidenceSlide() {
  return (
    <Slide className="flex items-center justify-center bg-stone-50 relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

      <div className="max-w-5xl w-full px-16 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel>Where Disciplined Modernisation Delivers</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
           
            className="text-4xl font-light text-slate-900 tracking-tight leading-tight mb-10"
          >
            Architecture and organisation must
            <br />
            co-evolve by design.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* DBS */}
            <motion.div variants={fadeUp} className="border border-slate-200 bg-white p-7">
              <div className="flex items-center gap-3 mb-6">
                <Rule />
                <p className="text-xs font-semibold tracking-widest uppercase text-slate-400">
                  DBS Bank · Singapore
                </p>
              </div>
              <p className="text-xs text-slate-500 font-light mb-6 leading-relaxed">
                Gradual strangler-fig approach via Kong Gateway. Internal technology marketplace
                for self-serve infrastructure. Server provisioning: 40 weeks → fraction of that.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
                {[
                  { v: 'SGD 780M', l: 'Economic value from AI, 2024' },
                  { v: '370+', l: 'AI use cases in production' },
                  { v: '1,500', l: 'Models deployed' },
                  { v: '<40%', l: 'Cost-to-income ratio' },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-xl font-extralight text-amber-600 mb-1 leading-none">{s.v}</p>
                    <p className="text-xs text-slate-400 font-light">{s.l}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Nubank */}
            <motion.div variants={fadeUp} className="border border-slate-200 bg-white p-7">
              <div className="flex items-center gap-3 mb-6">
                <Rule />
                <p className="text-xs font-semibold tracking-widest uppercase text-slate-400">
                  Nubank · Brazil
                </p>
              </div>
              <p className="text-xs text-slate-500 font-light mb-6 leading-relaxed">
                Cloud-native from inception. Decentralised autonomy with explicit ownership
                boundaries. Heavy investment in internal platform engineering and observability.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
                {[
                  { v: '4,000+', l: 'Microservices orchestrated' },
                  { v: '72B', l: 'Daily events via Kafka' },
                  { v: '122M', l: 'Customers served' },
                  { v: 'Teams', l: 'Structured by business domain' },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-xl font-extralight text-amber-600 mb-1 leading-none">{s.v}</p>
                    <p className="text-xs text-slate-400 font-light">{s.l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.p
            variants={fadeUp}
           
            className="mt-7 text-sm text-slate-500 font-light italic"
          >
            Neither succeeded by treating modernisation as a technology problem alone.
            The lesson is identical despite their different starting points.
          </motion.p>
        </motion.div>
      </div>

      <SlideFooter label="10" />
    </Slide>
  );
}

// ─── Slide 12: Thin-Slice Playbook ───────────────────────────────────────────

export function ThinSliceSlide() {
  const properties = [
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

  return (
    <Slide className="flex items-center justify-center bg-white relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

      <div className="max-w-5xl w-full px-16 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel>The Practitioner&apos;s Playbook</SectionLabel>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <motion.div variants={fadeUp} className="md:col-span-1">
              <h2 className="text-4xl font-light text-slate-900 tracking-tight leading-tight mb-5">
                Thin-slice modernisation.
              </h2>
              <div className="p-5 bg-amber-50 border border-amber-100 mb-5">
                <p className="text-sm font-semibold text-amber-800 mb-2">The cycle</p>
                <div className="space-y-2">
                  {['Select a narrow, high-value domain', 'Modernise end-to-end in 8–12 weeks', 'Demonstrate measurable outcomes', 'Use outcomes to fund the next slice'].map((s, i) => (
                    <div key={i} className="flex gap-3 text-xs text-amber-700 font-light">
                      <span className="font-semibold w-4">{i + 1}.</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-400 font-light italic leading-relaxed">
                The most effective catalyst for executive commitment is not a 200-page strategy
                document. It is a working production system that demonstrably outperforms its
                predecessor.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="md:col-span-2 grid grid-cols-2 gap-px bg-slate-100">
              {properties.map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 2}
                  className="bg-white p-6"
                >
                  <p className="text-xs font-semibold text-amber-600 tracking-widest mb-2">0{i + 1}</p>
                  <p className="text-sm font-semibold text-slate-900 mb-2">{p.title}</p>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
           
            className="border-l-2 border-slate-200 pl-5"
          >
            <p className="text-xs text-slate-400 font-light italic leading-relaxed">
              Caveat: some systems cannot be incrementally decomposed — real-time payment switches,
              safety-critical systems, nanosecond-latency transaction engines. Some are better
              replaced wholesale. Acknowledging this is intellectual honesty, not methodology weakness.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <SlideFooter label="11" />
    </Slide>
  );
}

// ─── Slide 13: Human Architecture ────────────────────────────────────────────

export function HumanArchSlide() {
  return (
    <Slide className="flex items-center justify-center bg-stone-50 relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

      <div className="max-w-5xl w-full px-16 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel>The Human Architecture</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
           
            className="text-4xl font-light text-slate-900 tracking-tight leading-tight mb-3"
          >
            Teams are the first design decision.
          </motion.h2>
          <motion.p
            variants={fadeUp}
           
            className="text-base text-slate-500 font-light mb-10 max-w-2xl"
          >
            Conway&apos;s Law is not optional. Your architecture will mirror your organisation
            whether you design for it or not.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
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
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 3}
                className="border border-slate-200 bg-white p-7"
              >
                <div className="w-5 h-0.5 bg-amber-500 mb-4" />
                <p className="text-sm font-semibold text-slate-900 mb-3">{item.title}</p>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
           
            className="mt-8 text-sm text-slate-500 font-light italic border-l-2 border-amber-400 pl-4"
          >
            &ldquo;Agile and Lean delivery not as methodology theatre &mdash; the standups, the sticky notes,
            the retros that change nothing &mdash; but as genuine operating principles: small batches,
            fast feedback, empowered teams, continuous improvement measured by outcomes.&rdquo;
          </motion.p>
        </motion.div>
      </div>

      <SlideFooter label="12" />
    </Slide>
  );
}

// ─── Slide 14: The Architecture of Readiness — Coda ─────────────────────────

export function CodaSlide() {
  return (
    <Slide className="flex items-center justify-center bg-slate-900 relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

      <div className="max-w-4xl w-full px-16 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p
            variants={fadeUp}
           
            className="text-[10px] font-semibold tracking-[0.22em] uppercase text-amber-500 mb-8"
          >
            The Architecture of Readiness
          </motion.p>

          <motion.h2
            variants={fadeUp}
           
            className="text-5xl font-light text-white tracking-tight leading-tight mb-10"
          >
            There is no end state.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-700 mb-10">
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
                variants={fadeUp}
                custom={i + 2}
                className="bg-slate-800 p-7"
              >
                <p className="text-xs font-semibold text-amber-500 tracking-widest uppercase mb-3">
                  {item.label}
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
           
            className="border-l-2 border-amber-500 pl-6"
          >
            <p className="text-lg text-white font-light italic leading-relaxed mb-4">
              &ldquo;The question for every technology leader is not whether your architecture is
              ready for the agentic era. It is whether your organisation &mdash; its incentives,
              its governance, its team structures, its tolerance for learning through disciplined
              experimentation &mdash; is designed to continuously become ready.&rdquo;
            </p>
            <p className="text-base text-amber-400 font-light italic">
              If the answer is no, the architecture is irrelevant.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
           
            className="mt-12 pt-8 border-t border-slate-700 flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-white font-light">Vijayakumar G A</p>
              <p className="text-xs text-slate-500 font-light mt-0.5">March 2026</p>
            </div>
            <p className="text-xs text-slate-500 font-light text-right max-w-xs leading-relaxed">
              Senior technology leader · Enterprise modernisation · Platform engineering ·
              Cloud-native architecture
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Slide>
  );
}
