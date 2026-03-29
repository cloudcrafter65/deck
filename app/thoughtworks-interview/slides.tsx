'use client';

import { Slide } from '@/components/core';

// ── Local helpers ─────────────────────────────────────────────────────────────

function SlideFooter({ section, glossary }: { section: string; glossary?: string }) {
  return (
    <div className="absolute bottom-4 left-8 right-8 flex items-end justify-between border-t border-slate-100 pt-2">
      <span className="text-[9px] tracking-widest uppercase text-slate-400 shrink-0">
        Omnichannel Modernisation · Thoughtworks · Mar 2026 · {section}
      </span>
      {glossary && (
        <span className="text-[9px] text-slate-400 italic text-right leading-[1.6] ml-4">
          {glossary}
        </span>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#E94339] mb-2">
      {children}
    </p>
  );
}

function Callout({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border-l-2 border-[#E94339] pl-3 py-1 bg-[#E94339]/5 rounded-r ${className}`}>
      {children}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center py-0.5 text-slate-300 text-xs">↓</div>
  );
}

// ── Slide 1 — Title ───────────────────────────────────────────────────────────

export function TitleSlide() {
  return (
    <Slide className="flex flex-col bg-white relative">
      {/* Coral top bar */}
      <div className="h-1 w-full bg-[#E94339]" />

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-16">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#E94339] mb-6">
          Principal Modernisation Strategist · Thoughtworks · March 2026
        </p>
        <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-4">
          Omnichannel Modernisation<br />Strategy
        </h1>
        <p className="text-xl text-slate-500 font-light mb-10">
          National Retail Chain — A Thoughtworks Principal Advisory Engagement
        </p>
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-[#E94339]" />
          <span className="text-sm text-slate-500">Interview Presentation · Vijayakumar</span>
        </div>
      </div>

      {/* Bottom metadata */}
      <div className="px-16 pb-8 flex items-center justify-between">
        <span className="text-[10px] tracking-widest uppercase text-slate-300">
          Confidential — Interview Use Only
        </span>
        <span className="text-[10px] tracking-widest uppercase text-slate-300">
          19 slides
        </span>
      </div>
    </Slide>
  );
}

// ── Slide 2 — Table of Contents ───────────────────────────────────────────────

const tocItems = [
  { n: 3, title: 'How I Approached This Problem', group: 'Problem Framing' },
  { n: 4, title: 'The Clarifying Questions I Asked First', group: 'Problem Framing' },
  { n: 5, title: 'Current State: What I Found', group: 'Diagnosis' },
  { n: 6, title: 'Root Cause Analysis: Five Structural Failures', group: 'Diagnosis' },
  { n: 7, title: 'The Guiding Principles', group: 'Strategy' },
  { n: 8, title: 'Target Architecture: The Two-Plane Model', group: 'Strategy' },
  { n: 9, title: 'The Three Omnichannel Capabilities', group: 'Strategy' },
  { n: 10, title: 'The Contingency Plans', group: 'Delivery' },
  { n: 11, title: 'The Pricing Problem', group: 'Delivery' },
  { n: 12, title: 'Organisational Design: Team Topologies', group: 'Delivery' },
  { n: 13, title: 'The Critical Path to November 2026', group: 'Delivery' },
  { n: 14, title: 'The 24-Month Programme in Four Phases', group: 'Delivery' },
  { n: 15, title: 'The Trade-offs I Made Explicit', group: 'Outcomes' },
  { n: 16, title: 'The Financial Frame', group: 'Outcomes' },
  { n: 17, title: 'How I Know If This Is Working', group: 'Outcomes' },
  { n: 18, title: 'What I Would Say to the Board', group: 'Closing' },
  { n: 19, title: 'Appendix: Architecture Decision Log', group: 'Closing' },
];

export function TOCSlide() {
  const col1Groups = ['Problem Framing', 'Diagnosis', 'Strategy'];
  const col2Groups = ['Delivery', 'Outcomes', 'Closing'];

  function renderGroup(group: string) {
    const items = tocItems.filter((i) => i.group === group);
    return (
      <div key={group} className="mb-4">
        <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#E94339] mb-1.5">{group}</p>
        <div className="space-y-0.5">
          {items.map((item) => (
            <button
              key={item.n}
              onClick={() => { window.location.hash = String(item.n); }}
              className="w-full flex items-baseline gap-3 text-left group hover:bg-slate-50 px-2 py-1 rounded transition-colors"
            >
              <span className="text-[#E94339] font-bold text-sm tabular-nums w-5 shrink-0">{item.n}</span>
              <span className="text-[13px] text-slate-700 group-hover:text-slate-900 transition-colors leading-snug">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Contents</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-5">Table of Contents</h2>

      <div className="flex-1 grid grid-cols-2 gap-x-12">
        <div>{col1Groups.map(renderGroup)}</div>
        <div>{col2Groups.map(renderGroup)}</div>
      </div>

      <SlideFooter section="TOC" />
    </Slide>
  );
}

// ── Slide 3 — How I Approached This Problem ───────────────────────────────────

export function ApproachSlide() {
  const questions = [
    {
      q: 'What does "done" actually mean for this organisation?',
      a: 'The board has a hard commitment: BOPIS in 30 pilot stores before peak trading, November 2026. Everything else is important, but this is the one thing that cannot slip. I worked backwards from that date.',
    },
    {
      q: 'What is the real constraint — technology or organisation?',
      a: 'Reading the case study carefully, the constraint is not architecture. It is capability. Years of outsourcing have left the organisation unable to operate what it already owns. The technical strategy only works if the organisational strategy works first.',
    },
    {
      q: 'What must I not get wrong?',
      a: 'The SAP ERP and legacy POS estate. These systems contain knowledge that exists nowhere else. If I design around them without understanding them, the programme fails quietly before it starts.',
    },
  ];

  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Slide 1 · Problem Framing</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-5">How I Approached This Problem</h2>

      <div className="flex-1 space-y-4">
        {questions.map((item, i) => (
          <div key={i} className="flex gap-4 border-b border-slate-100 pb-4">
            <span className="text-[#E94339] font-bold text-lg tabular-nums shrink-0 pt-0.5">{i + 1}</span>
            <div>
              <p className="text-[14px] font-semibold text-slate-900 mb-1">{item.q}</p>
              <p className="text-[13px] text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          </div>
        ))}
      </div>

      <Callout className="mt-4">
        <p className="text-[12px] italic text-slate-600">
          The discipline that shaped everything that followed: <strong className="text-slate-800">no architecture decisions before the diagnosis is complete.</strong>
        </p>
      </Callout>

      <SlideFooter section="Approach" glossary="BOPIS — Buy Online, Pick Up In Store · ERP — Enterprise Resource Planning · POS — Point of Sale" />
    </Slide>
  );
}

// ── Slide 4 — The Clarifying Questions I Asked First ─────────────────────────

export function ClarifyingQuestionsSlide() {
  const questions = [
    {
      n: 1,
      q: 'ERP type and integration capability',
      a: 'Is SAP\'s integration model event-capable, or will we be polling? This determines the integration architecture for the entire store estate.',
    },
    {
      n: 2,
      q: 'POS heterogeneity',
      a: 'Are the 200+ stores technically homogeneous? The answer (they are not) changed everything: two-tier POS architecture, differentiated inventory accuracy, and a contingency for BOPIS launch.',
    },
    {
      n: 3,
      q: 'Vendor contract flexibility',
      a: 'Can we exit existing vendors? A 6-month notice period with an IP dispute is not an obstacle to acknowledge — it is a programme-level risk that changes the financial model and the timeline.',
    },
    {
      n: 4,
      q: 'Hiring capacity',
      a: 'Can this organisation actually hire 65+ engineers over 24 months? The target internal:external ratio of 65:35 only works if the hiring engine exists. If it does not, we are building someone else\'s platform.',
    },
    {
      n: 5,
      q: 'Digital vs. enterprise inventory',
      a: 'Does the digital group already have an inventory view? It does. This becomes the bridge that makes the November deadline achievable.',
    },
    {
      n: 6,
      q: 'Pricing engine count',
      a: 'How many pricing engines are running? Two (SAP + digital). This is a structural problem the architecture must explicitly solve.',
    },
  ];

  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Slide 2 · Problem Framing</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-1">The Clarifying Questions I Asked First</h2>
      <p className="text-[12px] text-slate-500 mb-4">A strategy built on wrong assumptions is worse than no strategy.</p>

      <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-3">
        {questions.map((item) => (
          <div key={item.n} className="flex gap-3">
            <span className="text-[#E94339] font-bold text-[15px] tabular-nums shrink-0 pt-0.5">{item.n}.</span>
            <div>
              <p className="text-[13px] font-semibold text-slate-900 mb-0.5">{item.q}</p>
              <p className="text-[12px] text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          </div>
        ))}
      </div>

      <Callout className="mt-4">
        <p className="text-[12px] italic text-slate-600">
          Asking these questions before committing to a structure is how <strong className="text-slate-800">consulting differs from solutioning.</strong>
        </p>
      </Callout>

      <SlideFooter section="Clarifying Questions" glossary="ESB — Enterprise Service Bus · ERP — Enterprise Resource Planning · BOPIS — Buy Online, Pick Up In Store · POS — Point of Sale" />
    </Slide>
  );
}

// ── Slide 5 — Current State ───────────────────────────────────────────────────

export function CurrentStateSlide() {
  const findings = [
    {
      bold: 'The ESB is not an integration layer — it is a fragility multiplier.',
      rest: ' Every system connects through it. A change anywhere propagates everywhere. There is no safe way to evolve.',
    },
    {
      bold: 'The mobile app is a liability.',
      rest: ' Screen-scraping is not a product — it is a workaround that will break each time the underlying system changes.',
    },
    {
      bold: 'There is no single source of truth for inventory.',
      rest: ' Digital has one view. SAP has another. Neither is complete. BOPIS requires a third, reconciled view — and nothing currently provides it.',
    },
    {
      bold: 'The outsourcing model has hollowed out internal capability.',
      rest: ' The organisation does not employ people who can maintain or evolve the systems it depends on. This is not a technical risk — it is an existential one.',
    },
  ];

  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Slide 3 · Diagnosis</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Current State: What I Found</h2>

      {/* Two columns — system landscape */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-slate-50 rounded border border-slate-200 p-3">
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-2">Digital Group</p>
          <p className="text-[9px] font-semibold text-slate-500 mb-1">Agile · ~50 staff · Own systems</p>
          <ul className="space-y-0.5">
            {['Own product catalog + inventory views', 'ESB integration to enterprise core', 'Mobile app via screen-scraping (brittle)', 'Online-only: no in-store capability'].map((item) => (
              <li key={item} className="text-[11px] text-slate-700 flex gap-1.5">
                <span className="text-blue-400 shrink-0">·</span>{item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-50 rounded border border-slate-200 p-3">
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-amber-600 mb-2">Enterprise Core</p>
          <p className="text-[9px] font-semibold text-slate-500 mb-1">Outsourced · Waterfall · Legacy SAP</p>
          <ul className="space-y-0.5">
            {['SAP ERP — source of truth for finance, stock, pricing', '200+ stores, mixed POS estate', 'Waterfall governance — slow change', 'No real-time event capability'].map((item) => (
              <li key={item} className="text-[11px] text-slate-700 flex gap-1.5">
                <span className="text-amber-400 shrink-0">·</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Key findings */}
      <div className="flex-1 grid grid-cols-2 gap-x-6 gap-y-2">
        {findings.map((f, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-[#E94339] font-bold text-sm shrink-0 pt-0.5">→</span>
            <p className="text-[12px] text-slate-700 leading-relaxed">
              <strong className="text-slate-900">{f.bold}</strong>
              {f.rest}
            </p>
          </div>
        ))}
      </div>

      <SlideFooter section="Current State" glossary="ESB — Enterprise Service Bus · POS — Point of Sale · ERP — Enterprise Resource Planning · BOPIS — Buy Online, Pick Up In Store" />
    </Slide>
  );
}

// ── Slide 6 — Root Cause Analysis ────────────────────────────────────────────

export function RootCauseSlide() {
  const causes = [
    {
      n: 1,
      title: 'No single source of truth for inventory',
      body: 'Two systems, two inventory views, no reconciliation. Every cross-channel capability requires this to be resolved first.',
    },
    {
      n: 2,
      title: 'ESB coupling prevents safe evolution',
      body: 'The ESB connects everything to everything. You cannot change one system without auditing the impact on all others. This is the architectural equivalent of technical debt compounding at interest.',
    },
    {
      n: 3,
      title: 'Screen-scraping mobile has no future',
      body: 'A mobile product built on scraping is not a product — it is a maintenance burden. Every SAP upgrade is a potential mobile outage.',
    },
    {
      n: 4,
      title: 'Outsourcing has created a capability vacuum',
      body: 'The organisation has substituted vendor dependency for internal capability. There are no internal engineers who can operate, maintain, or evolve the core estate. The knowledge lives in the vendor\'s heads.',
    },
    {
      n: 5,
      title: 'No Order Management System',
      body: 'Cross-channel fulfilment — BOPIS, cross-channel cart, click-and-collect — requires an OMS to orchestrate. There is currently no such capability. It must be built or bought from scratch.',
    },
  ];

  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Slide 4 · Diagnosis</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-1">Root Cause Analysis: Five Structural Failures</h2>
      <p className="text-[12px] text-slate-500 mb-4">The symptoms are many. The causes are five.</p>

      <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-4">
        {causes.slice(0, 3).map((c) => (
          <div key={c.n} className="flex gap-3">
            <span className="text-[#E94339] font-bold text-lg tabular-nums shrink-0 leading-none pt-0.5">{c.n}</span>
            <div>
              <p className="text-[13px] font-semibold text-slate-900 mb-0.5">{c.title}</p>
              <p className="text-[12px] text-slate-600 leading-relaxed">{c.body}</p>
            </div>
          </div>
        ))}
        <div className="space-y-4">
          {causes.slice(3).map((c) => (
            <div key={c.n} className="flex gap-3">
              <span className="text-[#E94339] font-bold text-lg tabular-nums shrink-0 leading-none pt-0.5">{c.n}</span>
              <div>
                <p className="text-[13px] font-semibold text-slate-900 mb-0.5">{c.title}</p>
                <p className="text-[12px] text-slate-600 leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Callout className="mt-4">
        <p className="text-[12px] italic text-slate-600">
          A strategy that treats these as separate technical problems will fail.{' '}
          <strong className="text-slate-800">They are one organisational problem expressed in five technical symptoms.</strong>
        </p>
      </Callout>

      <SlideFooter section="Root Cause" glossary="ESB — Enterprise Service Bus · OMS — Order Management System · BOPIS — Buy Online, Pick Up In Store" />
    </Slide>
  );
}

// ── Slide 7 — Guiding Principles ─────────────────────────────────────────────

export function PrinciplesSlide() {
  const principles = [
    { n: 1, name: 'Strangler Fig, not Big Bang', desc: 'Incremental migration. Legacy systems decommission only after their replacement has operated under production load.' },
    { n: 2, name: 'Domain-Driven Design', desc: 'Bounded contexts mirror business capabilities. Teams own domains, not layers.' },
    { n: 3, name: 'Events as integration fabric', desc: 'Systems communicate through events, not point-to-point APIs. The ESB is replaced by a streaming platform, not by more APIs.' },
    { n: 4, name: 'API-first', desc: 'Every capability is a product, consumed through a documented, versioned contract.' },
    { n: 5, name: 'Buy for commodity, build for differentiation', desc: 'PIM, OMS, and search are bought. The integration layer, BFF layer, and organisational capability to operate them are built.' },
    { n: 6, name: 'Inverse Conway Manoeuvre', desc: 'We design the teams first, then the architecture emerges. The org chart must mirror the target architecture, not the legacy one.' },
    { n: 7, name: 'Continuous delivery from day one', desc: 'No big-bang releases. Thin vertical slices to production every two weeks, from Phase 0.' },
    { n: 8, name: 'Internal capability over external dependency', desc: 'The measure of success is not features delivered — it is engineers capable of operating and evolving the platform independently.' },
    { n: 9, name: 'Security and compliance by design', desc: 'Not a Phase 3 checklist. GDPR, PCI-DSS, OAuth 2.0/OIDC, and mTLS are Phase 0 foundations.' },
    { n: 10, name: 'Measure everything from day one', desc: 'The programme measurement dashboard is a Phase 1 prerequisite, not a Phase 2 feature.' },
  ];

  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Slide 5 · Strategy</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-1">The Guiding Principles</h2>
      <p className="text-[12px] text-slate-500 mb-4">Ten principles. Not values — operating constraints that governed every architectural and sequencing choice.</p>

      <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-2.5">
        {principles.map((p) => (
          <div key={p.n} className="flex gap-2.5">
            <span className="text-[#E94339] font-bold text-[13px] tabular-nums shrink-0 w-5">{p.n}.</span>
            <div>
              <span className="text-[12px] font-semibold text-slate-900">{p.name} — </span>
              <span className="text-[12px] text-slate-600">{p.desc}</span>
            </div>
          </div>
        ))}
      </div>

      <SlideFooter section="Principles" glossary="DDD — Domain-Driven Design · ESB — Enterprise Service Bus · BFF — Backend for Frontend · mTLS — Mutual TLS · OIDC — OpenID Connect · GDPR — General Data Protection Regulation · PCI-DSS — Payment Card Industry Data Security Standard · PIM — Product Information Mgmt · OMS — Order Management System" />
    </Slide>
  );
}

// ── Slide 8 — Target Architecture ────────────────────────────────────────────

export function ArchitectureSlide() {
  const layers = [
    {
      label: 'CHANNEL LAYER',
      color: 'border-blue-300 bg-blue-50',
      labelColor: 'text-blue-700',
      items: 'Web  ·  Mobile (React Native)  ·  In-Store',
    },
    {
      label: 'BFF LAYER',
      sublabel: 'Backend for Frontend',
      color: 'border-indigo-300 bg-indigo-50',
      labelColor: 'text-indigo-700',
      items: 'Web BFF  ·  Mobile BFF  ·  In-Store BFF  ·  Channel-specific composition  ·  Consumer-driven contract testing (Pact)',
    },
    {
      label: 'DOMAIN CAPABILITY LAYER',
      sublabel: 'Transactional — Commands · Business rules · State · Bounded contexts',
      color: 'border-emerald-300 bg-emerald-50',
      labelColor: 'text-emerald-700',
      items: 'PIM [P1]  ·  Unified Inventory — CQRS [P1]  ·  OMS [P1]  ·  Customer Profile & Identity [P1]  ·  Unified Pricing [P2]  ·  Cart [P2]  ·  Fulfilment [P3]',
    },
    {
      label: 'EVENT STREAMING PLATFORM',
      sublabel: '↕ Events',
      color: 'border-amber-300 bg-amber-50',
      labelColor: 'text-amber-700',
      items: 'Confluent Cloud / AWS MSK  ·  Schema Registry (backward-compatible)',
    },
    {
      label: 'DATA & INTELLIGENCE PLANE',
      sublabel: 'Analytical / Read-oriented — cross-domain aggregation · no business rules',
      color: 'border-violet-300 bg-violet-50',
      labelColor: 'text-violet-700',
      items: 'Analytics Data Platform [Phase 1]  ·  CDP — Customer Data Platform [Phase 2]',
    },
    {
      label: 'LEGACY INTEGRATION LAYER',
      sublabel: 'Strangler Fig — decommissions by Phase 3',
      color: 'border-slate-300 bg-slate-100',
      labelColor: 'text-slate-500',
      items: 'SAP Anti-Corruption Layer  ·  Tier B POS Polling Adapter  ·  ESB Adapter  ·  Legacy POS Connector',
    },
  ];

  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Slide 6 · Strategy</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-3">Target Architecture: The Two-Plane Model</h2>

      <div className="flex-1 flex flex-col gap-1.5">
        {layers.map((layer, i) => (
          <div key={i} className={`border rounded px-3 py-1.5 ${layer.color}`}>
            <div className="flex items-baseline gap-2">
              <span className={`text-[9px] font-bold tracking-[0.15em] uppercase ${layer.labelColor}`}>{layer.label}</span>
              {layer.sublabel && <span className="text-[9px] text-slate-500 italic">{layer.sublabel}</span>}
            </div>
            <p className="text-[10px] text-slate-700 mt-0.5">{layer.items}</p>
          </div>
        ))}
      </div>

      {/* Key notes */}
      <div className="grid grid-cols-2 gap-4 mt-3">
        <div>
          <p className="text-[11px] font-semibold text-slate-800 mb-0.5">Why separate the Data & Intelligence Plane?</p>
          <p className="text-[10px] text-slate-600">CDP and Analytics have no business rules and no bounded context. They aggregate events from across bounded contexts. Placing them in the Domain Layer would mislead every team building against the architecture.</p>
        </div>
        <div>
          <p className="text-[11px] font-semibold text-slate-800 mb-0.5">Why is Customer Profile & Identity a domain?</p>
          <p className="text-[10px] text-slate-600">Because it processes commands (register, update consent, merge accounts), has business rules (GDPR, right-to-erasure), and is the transactional system of record. The CDP is a separate analytical consumer built on top of it in Phase 2.</p>
        </div>
      </div>

      <SlideFooter section="Architecture" glossary="BFF — Backend for Frontend · CQRS — Command Query Responsibility Segregation · CDP — Customer Data Platform · DDD — Domain-Driven Design · PIM — Product Information Mgmt · OMS — Order Management System · MSK — Managed Streaming for Kafka · ESB — Enterprise Service Bus · POS — Point of Sale" />
    </Slide>
  );
}

// ── Slide 9 — The Three Omnichannel Capabilities ──────────────────────────────

export function OmnichannelCapabilitiesSlide() {
  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Slide 7 · Strategy</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-1">The Three Omnichannel Capabilities</h2>
      <p className="text-[12px] text-slate-500 mb-4">Not independent — they have a technical dependency chain that determined the entire programme sequence.</p>

      <div className="flex-1 space-y-2">
        {/* Capability 1 */}
        <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="bg-[#E94339] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">First</span>
            <p className="text-[14px] font-bold text-slate-900">Real-Time Store Inventory</p>
          </div>
          <div className="grid grid-cols-2 gap-x-4 text-[12px] text-slate-600">
            <ul className="space-y-0.5">
              <li className="flex gap-1.5"><span className="text-slate-400 shrink-0">·</span>Requires Unified Inventory Service (CQRS — write model from SAP/POS events, read model for queries)</li>
              <li className="flex gap-1.5"><span className="text-slate-400 shrink-0">·</span>Tier A stores: near-real-time events. Tier B stores: polling adapters with transaction-velocity-based frequency modelling</li>
            </ul>
            <ul className="space-y-0.5">
              <li className="flex gap-1.5"><span className="text-slate-400 shrink-0">·</span>Where 5-minute polling cannot meet the 90% accuracy threshold, inventory is not displayed — feature-flagged per store</li>
              <li className="flex gap-1.5"><span className="text-slate-400 shrink-0">·</span>The accuracy threshold is a <strong>business decision</strong>, not a technical one. Surfaced explicitly.</li>
            </ul>
          </div>
        </div>

        <Arrow />

        {/* Capability 2 */}
        <div className="border border-[#E94339]/30 rounded-lg p-3 bg-[#E94339]/5">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="bg-[#E94339] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">Second · BOPIS</span>
            <p className="text-[14px] font-bold text-slate-900">Buy Online, Pick Up In Store — depends on inventory</p>
          </div>
          <div className="grid grid-cols-2 gap-x-4 text-[12px] text-slate-600">
            <ul className="space-y-0.5">
              <li className="flex gap-1.5"><span className="text-[#E94339] shrink-0">·</span>Requires: real-time inventory + OMS + Customer Identity</li>
              <li className="flex gap-1.5"><span className="text-[#E94339] shrink-0">·</span>Customer Identity elevated to Phase 1 — deferring creates channel-specific silos that BOPIS is designed to eliminate</li>
            </ul>
            <div>
              <p className="flex gap-1.5"><span className="text-[#E94339] shrink-0">·</span>BOPIS Phase 1 scoped to Tier A stores. Tier B remediation is Phase 2.</p>
              <Callout className="mt-1.5">
                <p className="text-[11px] font-semibold text-slate-800">November 2026 protected by using the existing digital inventory system — not SAP real-time. This is the single most important sequencing decision.</p>
              </Callout>
            </div>
          </div>
        </div>

        <Arrow />

        {/* Capability 3 */}
        <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
          <div className="flex items-center gap-3 mb-1">
            <span className="bg-slate-600 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">Third</span>
            <p className="text-[14px] font-bold text-slate-900">Cross-Channel Cart — comes last</p>
          </div>
          <p className="text-[12px] text-slate-600">Requires stable Customer Identity, stable Inventory, and stable Pricing — all Phase 1/2 deliverables. Attempting this in Phase 1 without the upstream foundations would produce a feature that works in demos and fails in production.</p>
        </div>
      </div>

      <SlideFooter section="Omnichannel Capabilities" glossary="BOPIS — Buy Online, Pick Up In Store · CQRS — Command Query Responsibility Segregation · OMS — Order Management System · POS — Point of Sale" />
    </Slide>
  );
}

// ── Slide 10 — The Contingency Plans ─────────────────────────────────────────

export function ContingencyPlansSlide() {
  const plans = [
    {
      trigger: 'OMS slip past Month 5',
      title: 'MVP-BOPIS mode',
      body: 'If OMS integration proves more complex than the PoC reveals, the BOPIS pilot launches in a minimum viable mode: orders flow through the existing digital system, stores are notified via email/SMS rather than full OMS orchestration. The November commitment is protected. Full OMS orchestration becomes Phase 2 first priority.',
    },
    {
      trigger: 'Tier B stores below inventory accuracy threshold',
      title: 'Feature-flag suppression',
      body: "Rather than display stale stock data, those stores' inventory is simply not shown to customers. Showing inaccurate availability is far worse than showing nothing. The customer who travels to a store for an item that is not there is lost.",
    },
    {
      trigger: 'Cloud provider decision drift past Month 1',
      title: 'Hard gate: Month 1 decision',
      body: 'Cloud provider selection is the single most time-sensitive Phase 0 decision. It gates: event streaming (AWS MSK vs. Confluent Cloud), analytics data store alignment (Redshift/Athena vs. Snowflake/BigQuery), CI/CD toolchain, and Datadog pricing. Drifting to Month 3 means building on uncertain foundations from day one.',
    },
    {
      trigger: 'SAP knowledge holder attrition (10–20% expected)',
      title: 'Top-10 individual retention plan',
      body: 'General pairing programmes do not protect against two or three critical SAP knowledge holders leaving simultaneously. The plan names individuals explicitly: market-rate salary review (Month 1), milestone-linked retention bonuses, written career paths, and a mandatory knowledge-capture sprint (Months 1–2) producing formal artefacts — interface maps, data models, process flows, recorded walkthroughs. These are programme deliverables, not nice-to-haves.',
    },
  ];

  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Slide 8 · Delivery</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-1">The Contingency Plans I Built In</h2>
      <p className="text-[12px] text-slate-500 mb-4">A strategy without contingencies is a plan for good weather. Four explicit fallbacks.</p>

      <div className="flex-1 grid grid-cols-2 gap-4">
        {plans.map((plan, i) => (
          <div key={i} className="border border-slate-200 rounded-lg p-3">
            <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#E94339] mb-1">{plan.trigger}</p>
            <p className="text-[13px] font-semibold text-slate-900 mb-1.5">→ {plan.title}</p>
            <p className="text-[12px] text-slate-600 leading-relaxed">{plan.body}</p>
          </div>
        ))}
      </div>

      <SlideFooter section="Contingency Plans" glossary="OMS — Order Management System · BOPIS — Buy Online, Pick Up In Store · PoC — Proof of Concept · MSK — Managed Streaming for Kafka · CI/CD — Continuous Integration / Continuous Delivery" />
    </Slide>
  );
}

// ── Slide 11 — The Pricing Problem ───────────────────────────────────────────

export function PricingProblemSlide() {
  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Slide 9 · Delivery</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-1">The Pricing Problem: A Case Study in Hidden Complexity</h2>
      <p className="text-[12px] text-slate-500 mb-4">The dual pricing engine is the most underestimated problem in this case study.</p>

      <div className="flex-1 grid grid-cols-3 gap-5">
        {/* What we found */}
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-2">What We Found</p>
          <p className="text-[12px] font-semibold text-slate-900 mb-2">Two independent pricing engines running in production simultaneously.</p>
          <div className="space-y-2">
            <div className="bg-slate-50 rounded p-2 border border-slate-200">
              <p className="text-[10px] font-semibold text-slate-700 mb-0.5">SAP pricing module</p>
              <p className="text-[11px] text-slate-600">Base prices, supplier cost structure, financial reconciliation</p>
            </div>
            <div className="bg-slate-50 rounded p-2 border border-slate-200">
              <p className="text-[10px] font-semibold text-slate-700 mb-0.5">Digital pricing engine</p>
              <p className="text-[11px] text-slate-600">Promotional rules, campaign logic, discount stacking</p>
            </div>
          </div>
        </div>

        {/* Why harder */}
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-2">Why It&apos;s Harder Than It Looks</p>
          <p className="text-[12px] text-slate-600 leading-relaxed mb-2">The digital pricing engine contains years of accumulated promotional logic — Black Friday rules, end-of-season markdowns, loyalty discount interactions — that is poorly documented and politically sensitive.</p>
          <Callout>
            <p className="text-[11px] font-semibold text-slate-800">A pricing migration that inadvertently disrupts a promotional campaign will generate board-level escalation within hours.</p>
          </Callout>
        </div>

        {/* How addressed */}
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-2">How We Addressed It</p>
          <div className="space-y-2">
            <div>
              <p className="text-[10px] font-semibold text-[#E94339] uppercase tracking-wide mb-0.5">Architecturally</p>
              <p className="text-[11px] text-slate-600">Unified Pricing Service absorbs both engines under a single API. Daily reconciliation process surfaces discrepancies before customers see them. Dual engine decommissioned only after a clean 30-day validation period.</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-[#E94339] uppercase tracking-wide mb-0.5">Operationally</p>
              <p className="text-[11px] text-slate-600">Pricing freeze protocol: no migration activity 7 days before/after any major promotional period. Promotional calendar shared with Commerce Data Team lead each quarter.</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-[#E94339] uppercase tracking-wide mb-0.5">Discovery First</p>
              <p className="text-[11px] text-slate-600">Structured pricing model discovery in Phase 0, jointly owned by Commerce Data Team and Commercial Director. Unified Pricing Service design is built <em>against</em> this inventory — not ahead of it.</p>
            </div>
          </div>
        </div>
      </div>

      <SlideFooter section="Pricing Problem" />
    </Slide>
  );
}

// ── Slide 12 — Organisational Design ─────────────────────────────────────────

export function OrgDesignSlide() {
  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Slide 10 · Delivery</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-1">Organisational Design: Team Topologies in Practice</h2>
      <p className="text-[12px] text-slate-500 mb-3">The architecture is only as stable as the team structure that maintains it.</p>

      <div className="flex-1 space-y-2">
        {/* Platform team */}
        <div className="flex gap-3 border border-slate-200 rounded-lg p-2.5 bg-slate-50">
          <span className="bg-blue-600 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide shrink-0 self-start">Platform</span>
          <div>
            <p className="text-[12px] font-semibold text-slate-900">Permanent — owns event streaming, developer tooling, CI/CD, observability</p>
            <p className="text-[11px] text-slate-600">Purpose: reduce cognitive load on every stream-aligned team. Every hour a feature team spends wrestling with infrastructure is an hour not spent on business capability.</p>
          </div>
        </div>

        {/* Stream-aligned */}
        <div className="flex gap-3 border border-slate-200 rounded-lg p-2.5 bg-slate-50">
          <span className="bg-emerald-600 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide shrink-0 self-start">Stream-Aligned ×6</span>
          <div>
            <p className="text-[12px] font-semibold text-slate-900">Commerce Data · Inventory & Fulfilment · Customer & Order · Digital Experience · Mobile · In-Store Technology</p>
            <p className="text-[11px] text-slate-600">Each team owns its domain end-to-end — from database to production. No handoffs. No waiting.</p>
          </div>
        </div>

        {/* Enabling teams */}
        <div className="flex gap-3 border border-amber-200 rounded-lg p-2.5 bg-amber-50">
          <span className="bg-amber-500 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide shrink-0 self-start">Enabling ×2 (time-limited)</span>
          <div className="flex-1">
            <p className="text-[12px] font-semibold text-slate-900 mb-1">DDD & Architecture Enablement · DevOps & Engineering Practices Enablement</p>
            <p className="text-[11px] text-slate-600 mb-1">These teams exist to make themselves unnecessary. Disengagement criteria are explicit and measurable — not a calendar date:</p>
            <div className="grid grid-cols-2 gap-x-4 text-[11px] text-slate-600">
              <p><strong>DDD disengages</strong> when a team can independently run Event Storming, author ADRs without facilitation, and explain domain design decisions to others.</p>
              <p><strong>DevOps disengages</strong> when a team deploys independently, holds &gt;80% test coverage over 3 consecutive sprints, and has ≥2 engineers who can diagnose CI/CD failures.</p>
            </div>
          </div>
        </div>

        {/* Data Platform */}
        <div className="flex gap-3 border border-slate-200 rounded-lg p-2.5 bg-slate-50">
          <span className="bg-violet-600 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide shrink-0 self-start">Data Platform</span>
          <div>
            <p className="text-[12px] font-semibold text-slate-900">From Phase 2 — owns Analytics Data Platform and CDP</p>
            <p className="text-[11px] text-slate-600">Distinct from stream-aligned teams: does not own a transactional bounded context. Aggregates events from across all domains.</p>
          </div>
        </div>

        {/* Complicated Subsystem */}
        <div className="flex gap-3 border border-slate-200 rounded-lg p-2.5 bg-slate-50">
          <span className="bg-slate-500 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide shrink-0 self-start">Compl. Subsystem</span>
          <div>
            <p className="text-[12px] font-semibold text-slate-900">Transitional — Legacy Integration Specialists (SAP + legacy POS knowledge holders)</p>
            <p className="text-[11px] text-slate-600">Exists to contain and eventually eliminate legacy complexity. As Strangler Fig migration progresses, this team shrinks.</p>
          </div>
        </div>
      </div>

      <Callout className="mt-2">
        <p className="text-[11px] text-slate-700"><strong>Inverse Conway Manoeuvre:</strong> We designed the teams to mirror the target bounded contexts — and let the architecture emerge. Legacy org chart mapped to layers; target org chart maps to capabilities. This change alone is a multi-quarter organisational programme.</p>
      </Callout>

      <SlideFooter section="Org Design" glossary="DDD — Domain-Driven Design · ADR — Architectural Decision Record · CI/CD — Continuous Integration / Continuous Delivery · CDP — Customer Data Platform" />
    </Slide>
  );
}

// ── Slide 13 — Critical Path to November 2026 ────────────────────────────────

export function CriticalPathSlide() {
  const months = [
    {
      range: 'Month 0',
      phase: 'Phase 0: Discovery',
      items: [
        'SAP assessment scoping begins',
        'Team formation starts',
        'Cloud provider evaluation begins',
        'Tier B POS scoping (Weeks 1–2)',
      ],
    },
    {
      range: 'Month 1–2',
      phase: "Phase 0 cont\u2019d",
      items: [
        'Cloud provider decision (HARD GATE)',
        'SAP ERP assessment underway',
        'Top-10 retention plan activated',
        'Tier B cost scoping (±15%)',
        'Platform Team + CI/CD live',
      ],
    },
    {
      range: 'Month 3–5',
      phase: 'Phase 1 begins',
      items: [
        'Unified Inventory Service live (Tier A)',
        'OMS PoC + vendor select',
        'Customer Identity Phase 1',
        'Pricing model discovery (Months 3–5)',
        'React Native mobile foundation',
        'Payments tokenisation',
      ],
    },
    {
      range: 'Month 6–7',
      phase: 'BOPIS launch',
      items: [
        'Pre-BOPIS chaos experiment (GATE)',
        '30 pilot stores go live (Tier A)',
        'Uses existing digital inventory — not SAP real-time',
        'OMS in MVP mode if needed',
      ],
    },
  ];

  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Slide 11 · Delivery</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-1">The Critical Path to November 2026</h2>
      <p className="text-[12px] text-slate-500 mb-4">Working backward from the BOPIS pilot launch.</p>

      <div className="flex-1 grid grid-cols-4 gap-3 mb-3">
        {months.map((m, i) => (
          <div key={i} className={`border rounded-lg p-2.5 ${i === 3 ? 'border-[#E94339]/40 bg-[#E94339]/5' : 'border-slate-200 bg-slate-50'}`}>
            <p className={`text-[9px] font-bold tracking-[0.15em] uppercase mb-0.5 ${i === 3 ? 'text-[#E94339]' : 'text-slate-400'}`}>{m.range}</p>
            <p className="text-[12px] font-semibold text-slate-900 mb-2">{m.phase}</p>
            <ul className="space-y-1">
              {m.items.map((item, j) => (
                <li key={j} className={`text-[11px] flex gap-1.5 ${item.includes('GATE') ? 'font-semibold text-[#E94339]' : 'text-slate-600'}`}>
                  <span className="shrink-0">{item.includes('GATE') ? '⬛' : '·'}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Callout>
          <p className="text-[12px] font-semibold text-slate-800 mb-0.5">The BOPIS path does not wait for SAP.</p>
          <p className="text-[11px] text-slate-600">SAP real-time integration is not on the critical path for November 2026. The pilot uses the existing digital inventory system — already operational, already accurate for online orders. This is the insight that makes the deadline achievable without cutting architectural corners.</p>
        </Callout>
        <Callout>
          <p className="text-[12px] font-semibold text-slate-800 mb-0.5">Pre-BOPIS chaos experiment is a go-live prerequisite, not a post-launch learning.</p>
          <p className="text-[11px] text-slate-600">One targeted chaos engineering experiment (Month 6): &ldquo;What happens to the BOPIS order flow when the Inventory Service returns degraded responses?&rdquo; This is the most likely failure mode at peak trading. We must understand OMS behaviour under this condition before any store goes live.</p>
        </Callout>
      </div>

      <SlideFooter section="Critical Path" glossary="BOPIS — Buy Online, Pick Up In Store · OMS — Order Management System · PoC — Proof of Concept · CI/CD — Continuous Integration / Continuous Delivery" />
    </Slide>
  );
}

// ── Slide 14 — The 24-Month Programme ────────────────────────────────────────

export function ProgrammeSlide() {
  const phases = [
    {
      label: 'Phase 0',
      range: 'Months 0–3',
      title: 'Discovery & Foundations',
      color: 'border-slate-300',
      headerBg: 'bg-slate-100',
      items: [
        'Cloud provider selected (Month 1 gate)',
        'SAP ERP assessment begins',
        'Tier B POS cost scoping (Weeks 1–2)',
        'Platform Team formed, CI/CD pipeline live',
        'Schema Registry, event streaming foundation',
        'Pricing model discovery (Months 3–5)',
        'Top-10 SAP knowledge capture sprint',
        'OMS proof-of-concept sprint',
      ],
    },
    {
      label: 'Phase 1',
      range: 'Months 3–9',
      title: 'Inventory · Identity · Mobile',
      color: 'border-blue-300',
      headerBg: 'bg-blue-50',
      items: [
        'Unified Inventory Service (CQRS) — Tier A',
        'Analytics Data Platform + Measurement Dashboard',
        'Customer Identity & Profile (GDPR-compliant)',
        'PIM (SaaS selection + integration)',
        'React Native mobile (replaces screen-scraping)',
        'BOPIS pilot — 30 Tier A stores (Nov 2026)',
      ],
    },
    {
      label: 'Phase 2',
      range: 'Months 9–18',
      title: 'BOPIS Scale · Cross-Channel · Tier B',
      color: 'border-emerald-300',
      headerBg: 'bg-emerald-50',
      items: [
        'BOPIS scales to all Tier A stores',
        'Tier B POS remediation programme',
        'Cross-channel cart',
        'OMS full orchestration (or MVP-BOPIS → full)',
        'Unified Pricing Service',
        'CDP — Customer Data Platform (start)',
        'Mobile vendor exit',
      ],
    },
    {
      label: 'Phase 3',
      range: 'Months 18–24',
      title: 'Full Estate · ESB Retirement',
      color: 'border-[#E94339]/40',
      headerBg: 'bg-[#E94339]/5',
      items: [
        'Remaining domain services migrated',
        'ESB retired (Strangler Fig complete)',
        'SAP integration layer stabilised or bounded',
        'Fulfilment Service',
        'Full chaos engineering programme',
        'Enabling teams disengage (per measurable criteria)',
        'Complicated Subsystem Team winds down',
      ],
    },
  ];

  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Slide 12 · Delivery</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-1">The 24-Month Programme in Four Phases</h2>

      <div className="flex-1 grid grid-cols-4 gap-3 mb-3">
        {phases.map((p, i) => (
          <div key={i} className={`border rounded-lg overflow-hidden flex flex-col ${p.color}`}>
            <div className={`px-2.5 py-1.5 ${p.headerBg}`}>
              <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-slate-500">{p.label} · {p.range}</p>
              <p className="text-[11px] font-bold text-slate-900">{p.title}</p>
            </div>
            <ul className="p-2.5 space-y-1 flex-1">
              {p.items.map((item, j) => (
                <li key={j} className="text-[10px] text-slate-700 flex gap-1.5">
                  <span className="text-slate-300 shrink-0">·</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border border-amber-200 bg-amber-50 rounded-lg p-2.5">
        <p className="text-[11px] font-semibold text-slate-900 mb-1">Why 24 months, not 18?</p>
        <div className="grid grid-cols-3 gap-4">
          <p className="text-[11px] text-slate-600"><strong>1.</strong> SAP ERP assessment requires 4 months, not 8 weeks — the integration surface is that complex.</p>
          <p className="text-[11px] text-slate-600"><strong>2.</strong> POS heterogeneity requires a Tier B remediation programme that was not visible in the v1 estimate.</p>
          <p className="text-[11px] text-slate-600"><strong>3.</strong> Vendor exit with a 6-month notice period and an active IP dispute is a programme-level constraint, not a procurement footnote. An 18-month timeline that fails at Month 14 costs more than a 24-month timeline that delivers.</p>
        </div>
      </div>

      <SlideFooter section="24-Month Programme" glossary="CQRS — Command Query Responsibility Segregation · ESB — Enterprise Service Bus · PIM — Product Information Mgmt · OMS — Order Management System · CDP — Customer Data Platform · POS — Point of Sale · GDPR — General Data Protection Regulation · CI/CD — Continuous Integration / Continuous Delivery" />
    </Slide>
  );
}

// ── Slide 15 — The Trade-offs I Made Explicit ─────────────────────────────────

export function TradeoffsSlide() {
  const tradeoffs = [
    {
      title: 'Speed vs. Architectural Purity',
      body: 'The BOPIS pilot uses existing digital inventory, not SAP real-time. This is technically impure — we are launching on a system we plan to replace. The trade-off is explicit: protecting the November commitment takes priority over architectural elegance. Full SAP integration follows in Phase 2.',
    },
    {
      title: 'Buy vs. Build — the 80% threshold',
      body: 'For SaaS platforms (PIM, OMS), the selection criterion is: does the platform meet 80% of our requirements out of the box? If yes, we buy and adapt our processes to the product. If no, we build. We do not customise a vendor product to 100% of requirements — that path produces a vendor-shaped monolith that cannot be upgraded or replaced.',
    },
    {
      title: 'Inventory Consistency vs. Availability',
      body: 'The Inventory Service uses CQRS: the write model is strongly consistent, the read model is eventually consistent. For customer-facing inventory queries, we favour availability over strict consistency. A read model that is 30 seconds stale is acceptable. A read model that is unavailable at peak trading is not.',
    },
    {
      title: 'Internal Capability vs. Delivery Velocity',
      body: 'The 65:35 internal:external hiring ratio means delivery will be slower in Phase 1 than if we contracted the entire programme. This is deliberate. The purpose is not to deliver features — it is to build an organisation capable of operating and evolving a modern platform. Contractors deliver; internal engineers learn. Minimum acceptable ratio at Month 18: 55:45. Below that, the programme has delivered a platform the organisation cannot sustain.',
    },
  ];

  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Slide 13 · Outcomes</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-1">The Trade-offs I Made Explicit</h2>
      <p className="text-[12px] text-slate-500 mb-4">The trade-offs that destroy programmes are the ones made implicitly and never surfaced. I surfaced four.</p>

      <div className="flex-1 grid grid-cols-2 gap-4">
        {tradeoffs.map((t, i) => (
          <div key={i} className="border border-slate-200 rounded-lg p-3 bg-slate-50">
            <p className="text-[13px] font-bold text-slate-900 mb-2 flex gap-2">
              <span className="text-[#E94339]">{i + 1}.</span> {t.title}
            </p>
            <p className="text-[12px] text-slate-600 leading-relaxed">{t.body}</p>
          </div>
        ))}
      </div>

      <SlideFooter section="Trade-offs" glossary="BOPIS — Buy Online, Pick Up In Store · SaaS — Software as a Service · CQRS — Command Query Responsibility Segregation · PIM — Product Information Mgmt · OMS — Order Management System" />
    </Slide>
  );
}

// ── Slide 16 — The Financial Frame ───────────────────────────────────────────

export function FinancialFrameSlide() {
  const stats = [
    { value: '$30–38M', label: 'Programme Cost', sub: 'Narrowed from $25–45M once Tier B POS scoping and salary benchmarks confirmed' },
    { value: '$14–29M', label: 'Annual Revenue Uplift (steady state)', sub: 'BOPIS conversion uplift, cross-channel cart recovery, in-store associate effectiveness, reduced mobile churn' },
    { value: '$1.8–4.6M', label: 'Annual Cost Savings', sub: 'Vendor contract reduction, ESB retirement, legacy POS maintenance reduction' },
    { value: '18–30 mo', label: 'Indicative Breakeven', sub: 'Post-programme completion — subject to commercial validation' },
  ];

  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Slide 14 · Outcomes</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">The Financial Frame</h2>
      <p className="text-[12px] text-slate-500 mb-5">Indicative. Not a financial model — a framing for the CFO conversation.</p>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((s, i) => (
          <div key={i} className="border border-slate-200 rounded-lg p-3 bg-slate-50">
            <p className="text-2xl font-bold text-[#E94339] mb-1 tabular-nums">{s.value}</p>
            <p className="text-[12px] font-semibold text-slate-800 mb-1">{s.label}</p>
            <p className="text-[11px] text-slate-500 leading-relaxed">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <Callout>
          <p className="text-[12px] font-semibold text-slate-800 mb-0.5">The single largest cost variable: Tier B POS remediation ($2–6M range)</p>
          <p className="text-[11px] text-slate-600">Must be narrowed to ±15% through a scoping exercise in Phase 0 Weeks 1–2. This exercise is not optional: presenting a 3× cost range to the board is not a financial model — it is a question.</p>
        </Callout>
        <Callout>
          <p className="text-[12px] font-semibold text-slate-800 mb-0.5">The companion financial model is a joint deliverable with the CFO Office — not a Thoughtworks deliverable alone.</p>
          <p className="text-[11px] text-slate-600">Revenue assumptions require commercial validation. Cost assumptions require HR benchmarking and a Tier B scoping exercise. The Thoughtworks team provides the architecture for the model; the CFO Office provides the data.</p>
        </Callout>
      </div>

      <SlideFooter section="Financial Frame" glossary="CFO — Chief Financial Officer · POS — Point of Sale · ESB — Enterprise Service Bus · BOPIS — Buy Online, Pick Up In Store" />
    </Slide>
  );
}

// ── Slide 17 — How I Know If This Is Working ─────────────────────────────────

export function SuccessMeasuresSlide() {
  const outcomes = [
    {
      title: 'Cross-channel inventory accuracy',
      items: [
        'Tier A stores: >98% accuracy (event-driven, near real-time)',
        'Tier B stores: >90% accuracy for displayed inventory (polling, velocity-based; stores below threshold not displayed)',
        'Baseline established in Phase 0 to measure against',
      ],
    },
    {
      title: 'BOPIS adoption',
      items: [
        'Urban stores: 20% of eligible online orders fulfilled via BOPIS',
        'Suburban stores: 12%',
        'Regional stores: 8%',
        'Measured 90 days post-pilot launch',
      ],
    },
    {
      title: 'Internal capability',
      items: [
        '65:35 internal:external engineer ratio by Month 18 (minimum acceptable: 55:45)',
        'All stream-aligned teams deploying independently to production',
        'Enabling teams disengaged from each team per measurable criteria (not a calendar date)',
      ],
    },
    {
      title: 'Delivery health',
      items: [
        'Digital-native teams: daily deployment frequency',
        'In-Store Technology: weekly deployment frequency',
        'Legacy adapter teams: monthly, converging',
        'Lead time for change: <1 week across all stream-aligned teams by Phase 2',
      ],
    },
  ];

  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Slide 15 · Outcomes</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-1">How I Know If This Is Working</h2>
      <p className="text-[12px] text-slate-500 mb-4">Four business outcomes, each with a measurable target.</p>

      <div className="flex-1 grid grid-cols-2 gap-4 mb-4">
        {outcomes.map((o, i) => (
          <div key={i} className="border border-slate-200 rounded-lg p-3 bg-slate-50">
            <p className="text-[13px] font-bold text-[#E94339] mb-2">{i + 1}. {o.title}</p>
            <ul className="space-y-1">
              {o.items.map((item, j) => (
                <li key={j} className="text-[12px] text-slate-600 flex gap-2">
                  <span className="text-slate-300 shrink-0">·</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Callout>
        <p className="text-[12px] font-semibold text-slate-800 mb-1">What &ldquo;done&rdquo; looks like at Month 24:</p>
        <p className="text-[11px] text-slate-600">The SAP ERP assessment is complete and integration boundaries are clear. The ESB is retired. All stream-aligned teams deploy independently. The Tier B POS estate has a defined remediation path. The enabling teams have disengaged per measurable criteria. <strong className="text-slate-800">The organisation can evolve the platform without Thoughtworks.</strong></p>
      </Callout>

      <SlideFooter section="Success Measures" glossary="BOPIS — Buy Online, Pick Up In Store · ESB — Enterprise Service Bus · POS — Point of Sale" />
    </Slide>
  );
}

// ── Slide 18 — What I Would Say to the Board ─────────────────────────────────

export function BoardMessageSlide() {
  const statements = [
    {
      ordinal: 'First',
      headline: 'You are not behind schedule — you are at the moment of maximum leverage.',
      body: 'The technical debt is visible. The organisational capability gap is understood. The business case is clear. The window to act is now, before another year of ESB coupling and outsourcing dependency compounds the problem further.',
    },
    {
      ordinal: 'Second',
      headline: 'The November BOPIS deadline is achievable, and here is exactly why.',
      body: 'The critical path is clear. The contingency is named. The sequencing is built backward from the date. This is not optimism — it is engineering.',
    },
    {
      ordinal: 'Third',
      headline: 'The measure of success is not what we deliver in 24 months — it is what your organisation can deliver in Month 25 without us.',
      body: 'A modernisation programme that creates a new dependency is not modernisation — it is a different kind of lock-in. The programme is designed to make itself unnecessary. That is the benchmark I will hold Thoughtworks to.',
    },
  ];

  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Slide 16 · Closing</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-5">What I Would Say to the Board</h2>

      <div className="flex-1 space-y-5">
        {statements.map((s, i) => (
          <div key={i} className="flex gap-5">
            <div className="shrink-0 w-14 text-right">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E94339]">{s.ordinal}</span>
            </div>
            <div className="flex-1 border-l-2 border-[#E94339] pl-5">
              <p className="text-[16px] font-bold text-slate-900 mb-1.5 leading-snug">{s.headline}</p>
              <p className="text-[13px] text-slate-600 leading-relaxed">{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 italic">Interview Presentation · Vijayakumar · Thoughtworks Principal Modernisation Strategist</span>
        <button
          onClick={() => { window.location.hash = '2'; }}
          className="text-[10px] text-[#E94339] hover:underline"
        >
          ← Back to Contents
        </button>
      </div>

      <SlideFooter section="Board Message" glossary="ESB — Enterprise Service Bus · BOPIS — Buy Online, Pick Up In Store" />
    </Slide>
  );
}

// ── Slide 19 — Appendix ───────────────────────────────────────────────────────

const adl = [
  { decision: 'Event streaming', choice: 'Managed (Confluent Cloud / AWS MSK)', rationale: 'Reduces operational burden while internal capability builds. Self-hosted Kafka is a programme risk in Phase 1.' },
  { decision: 'Schema evolution', choice: 'Schema Registry with backward-compatible rules, CI/CD enforced', rationale: 'Prevents consumer breakage as producer schemas evolve.' },
  { decision: 'BFF coupling', choice: 'Consumer-driven contract testing via Pact', rationale: 'Decouples BFF deployment from domain service deployment.' },
  { decision: 'Mobile', choice: 'React Native with native bridge', rationale: 'Cross-platform for velocity; native bridge for maps, barcode, push notifications where performance requires it.' },
  { decision: 'POS integration', choice: 'Two-tier (Tier A events, Tier B polling)', rationale: 'Reflects the actual store estate. A single architecture that ignores 40% of stores is not an architecture.' },
  { decision: 'Inventory accuracy', choice: '90% threshold; below threshold = no display', rationale: 'Displaying stale "in stock" is worse than displaying nothing. Business decision surfaced explicitly.' },
  { decision: 'Observability', choice: 'Datadog (Phase 0), cost review at Phase 3', rationale: 'Consistent with managed-service principle for early phases. Empirical cost data at Phase 3 informs whether self-managed Grafana stack is justified.' },
  { decision: 'Pricing migration', choice: 'Discovery first; daily reconciliation; freeze protocol', rationale: 'Promotional logic complexity discovered before design, not during. Disrupting a Black Friday campaign is a board-level event.' },
  { decision: 'CDP placement', choice: 'Data & Intelligence Plane (Phase 2), not Domain Capability Layer', rationale: 'CDP is analytical and cross-domain. It is not a DDD domain. Placing it with transactional domains would mislead every team building against the architecture.' },
  { decision: 'Chaos engineering', choice: 'Pre-BOPIS experiment (Month 6) as go-live gate', rationale: 'The Inventory Service degradation failure mode is the most likely peak-trading risk. Discover it before launch, not after.' },
];

export function AppendixSlide() {
  return (
    <Slide className="flex flex-col bg-white relative p-8">
      <SectionLabel>Appendix · Architecture Decision Log</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Architecture Decisions and Rationale</h2>

      <div className="flex-1 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-slate-300">
              <th className="text-[10px] font-bold uppercase tracking-wide text-slate-500 pb-2 pr-3 w-[18%]">Decision</th>
              <th className="text-[10px] font-bold uppercase tracking-wide text-slate-500 pb-2 pr-3 w-[25%]">Choice</th>
              <th className="text-[10px] font-bold uppercase tracking-wide text-slate-500 pb-2">Rationale</th>
            </tr>
          </thead>
          <tbody>
            {adl.map((row, i) => (
              <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                <td className="py-1.5 pr-3 text-[11px] font-semibold text-slate-900 align-top">{row.decision}</td>
                <td className="py-1.5 pr-3 text-[11px] text-slate-700 align-top">{row.choice}</td>
                <td className="py-1.5 text-[11px] text-slate-600 align-top leading-relaxed">{row.rationale}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[9px] italic text-slate-400">Draft for interview panel review. Not a client deliverable. All scenario details are fictional and created for interview preparation purposes.</span>
        <button
          onClick={() => { window.location.hash = '2'; }}
          className="text-[10px] text-[#E94339] hover:underline"
        >
          ← Back to Contents
        </button>
      </div>

      <SlideFooter section="Appendix" glossary="BFF — Backend for Frontend · CQRS — Command Query Responsibility Segregation · CDP — Customer Data Platform · DDD — Domain-Driven Design · MSK — Managed Streaming for Kafka · POS — Point of Sale · ADR — Architectural Decision Record · BOPIS — Buy Online, Pick Up In Store · CI/CD — Continuous Integration / Continuous Delivery" />
    </Slide>
  );
}
