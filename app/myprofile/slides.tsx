'use client';

import { Slide } from '@/components/core';
import { AnimatedText } from '@/components/primitives';
import { motion } from 'framer-motion';

// ============================================================
// DESIGN SYSTEM — MyProfile
// BG Main:   #070C18  (deep navy)
// BG Card:   #0D1526
// BG Raised: #142038
// Accent:    #F59E0B  (amber — AI / highlights)
// Cisco:     #049FD9
// Accenture: #9333EA
// IBM:       #3B82F6
// Orange:    #F97316
// Text:      #F1F5F9
// Muted:     #94A3B8
// Border:    #1E3050
// ============================================================

// ---- Shared primitives ----

function CompanyTag({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
      style={{ color, borderColor: color, backgroundColor: `${color}18` }}
    >
      {label}
    </span>
  );
}

function Bullet({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex gap-3 items-start text-[#94A3B8] text-sm leading-relaxed"
    >
      <span className="text-[#F59E0B] mt-[3px] flex-shrink-0">▸</span>
      <span>{text}</span>
    </motion.li>
  );
}

function TechTag({ label }: { label: string }) {
  return (
    <span className="text-xs bg-[#142038] border border-[#1E3050] text-[#94A3B8] px-2 py-0.5 rounded">
      {label}
    </span>
  );
}

// Reusable project slide layout
interface ProjectSlideProps {
  company: string;
  companyColor: string;
  period: string;
  title: string;
  context: string;
  bullets: string[];
  stats: Array<{ value: string; label: string; sub?: string }>;
  tags?: string[];
  accentGlow?: string;
}

function ProjectSlide({
  company,
  companyColor,
  period,
  title,
  context,
  bullets,
  stats,
  tags,
  accentGlow,
}: ProjectSlideProps) {
  const glow = accentGlow || companyColor;
  return (
    <Slide className="flex items-center justify-center bg-[#070C18] p-8 md:p-12 relative overflow-hidden">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg, transparent, ${companyColor}, transparent)` }} />

      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-15"
        style={{ background: `radial-gradient(circle, ${glow} 0%, transparent 70%)` }}
      />

      <div className="max-w-5xl w-full z-10">
        {/* Header row */}
        <AnimatedText delay={0} className="flex items-center gap-3 mb-4">
          <CompanyTag label={company} color={companyColor} />
          <span className="text-[#94A3B8] text-xs uppercase tracking-widest">{period}</span>
        </AnimatedText>

        <AnimatedText as="h2" className="text-4xl font-black text-[#F1F5F9] mb-1 leading-tight" delay={0.1}>
          {title}
        </AnimatedText>
        <AnimatedText as="p" className="text-[#94A3B8] text-sm mb-7 italic" delay={0.15}>
          {context}
        </AnimatedText>

        <div className="grid grid-cols-3 gap-5">
          {/* Bullets */}
          <div className="col-span-2 bg-[#0D1526] rounded-2xl p-6 border border-[#1E3050]">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: companyColor }}>
              What was done
            </p>
            <ul className="space-y-3">
              {bullets.map((b, i) => (
                <Bullet key={i} text={b} delay={0.2 + i * 0.1} />
              ))}
            </ul>
            {tags && tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + bullets.length * 0.1 + 0.1 }}
                className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-[#1E3050]"
              >
                {tags.map((t) => (
                  <TechTag key={t} label={t} />
                ))}
              </motion.div>
            )}
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 + i * 0.12, duration: 0.5 }}
                className="bg-[#0D1526] rounded-2xl p-5 border flex-1 flex flex-col items-center justify-center text-center"
                style={{ borderColor: i === 0 ? `${companyColor}40` : '#1E3050' }}
              >
                <div className="text-3xl font-black mb-1" style={{ color: i === 0 ? companyColor : '#F1F5F9' }}>
                  {s.value}
                </div>
                <div className="text-xs text-[#94A3B8] uppercase tracking-wide leading-tight">{s.label}</div>
                {s.sub && <div className="text-xs text-[#64748B] mt-1">{s.sub}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${companyColor}20, transparent)` }} />
    </Slide>
  );
}

// ============================================================
// SLIDE 1: TITLE
// ============================================================

export function TitleSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#070C18] relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#F59E0B 1px, transparent 1px), linear-gradient(90deg, #F59E0B 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      {/* Centre glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.1) 0%, transparent 70%)' }}
      />

      <div className="z-10 px-12 max-w-5xl w-full">
        <AnimatedText as="p" className="text-[#F59E0B] text-xs font-bold uppercase tracking-[0.3em] mb-8" delay={0.1}>
          Selected Projects · 2003 – 2026
        </AnimatedText>

        <AnimatedText as="h1" className="text-7xl font-black text-[#F1F5F9] mb-2 leading-none tracking-tight" delay={0.2}>
          Vijayakumar G.A.
        </AnimatedText>

        <AnimatedText as="p" className="text-lg text-[#94A3B8] mb-10 max-w-2xl leading-relaxed" delay={0.35}>
          Principal Consultant & Enterprise Architect — 25 years delivering national-scale
          platforms, enterprise AI systems, and technology strategy across ASEAN.
        </AnimatedText>

        <AnimatedText delay={0.5}>
          <div className="flex gap-4 flex-wrap">
            {[
              { v: '$200M+', l: 'Revenue Influenced' },
              { v: '25+', l: 'Years' },
              { v: '10+', l: 'ASEAN Banks' },
              { v: '85%', l: 'AI MTTR Reduction' },
              { v: '4', l: 'National Platforms' },
            ].map((s) => (
              <div
                key={s.l}
                className="border border-[#1E3050] rounded-xl px-5 py-3 bg-[#0D1526] text-center"
              >
                <div className="text-xl font-bold text-[#F59E0B]">{s.v}</div>
                <div className="text-xs text-[#94A3B8] mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </AnimatedText>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />
    </Slide>
  );
}

// ============================================================
// SLIDE 2: CYAIRE — RAG AI PLATFORM
// ============================================================

export function CyaireRagSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#070C18] p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent" />
      <div
        className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full blur-[160px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl w-full z-10">
        <AnimatedText delay={0} className="flex items-center gap-3 mb-4">
          <CompanyTag label="Cyaire" color="#F59E0B" />
          <span className="text-[#94A3B8] text-xs uppercase tracking-widest">May 2024 – Present · Singapore</span>
        </AnimatedText>

        <AnimatedText as="h2" className="text-4xl font-black text-[#F1F5F9] mb-1 leading-tight" delay={0.1}>
          Production RAG AI Platform
        </AnimatedText>
        <AnimatedText as="p" className="text-[#94A3B8] text-sm mb-7 italic" delay={0.15}>
          Regional logistics enterprise — customer enquiry resolution locked in 7-day manual cycles
        </AnimatedText>

        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2 bg-[#0D1526] rounded-2xl p-6 border border-[#1E3050]">
            <p className="text-[#F59E0B] text-xs font-semibold uppercase tracking-widest mb-4">What was built</p>
            <ul className="space-y-3">
              <Bullet delay={0.2} text="Architected end-to-end RAG platform — Python, LLMs (Llama3, Claude, GPT-4o), Kafka event streaming, Kubernetes microservices — from 6-week pilot to production." />
              <Bullet delay={0.3} text="Autonomous AI agent handling across 14 enterprise logistics workflows; continuous adaptation via retrieval quality scoring, confidence scoring, and feedback loops." />
              <Bullet delay={0.4} text="Built custom integration broker instead of OOTB platforms — faster delivery, lower cost, better domain alignment; directed 5+ onshore engineers, offshore teams, and delivery partners." />
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-[#1E3050]"
            >
              {['Python', 'LLMs', 'RAG', 'Kafka', 'Kubernetes', 'Pinecone', 'LangChain', 'AWS'].map((t) => (
                <TechTag key={t} label={t} />
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="bg-[#0D1526] rounded-2xl p-5 border border-[#F59E0B]/35 flex-1 flex flex-col items-center justify-center text-center"
            >
              <div className="text-[#94A3B8] text-xs mb-3 uppercase tracking-widest">Resolution Time</div>
              <div className="flex items-center gap-2 justify-center mb-3">
                <span className="text-xl font-bold text-[#94A3B8] line-through opacity-40">7 days</span>
                <span className="text-[#F59E0B] text-lg">→</span>
                <span className="text-3xl font-black text-[#F59E0B]">24 hrs</span>
              </div>
              <div className="text-4xl font-black text-[#FBBF24]">85%</div>
              <div className="text-[#94A3B8] text-xs uppercase tracking-wide mt-1">MTTR Reduction</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.38, duration: 0.5 }}
              className="bg-[#0D1526] rounded-2xl p-5 border border-[#1E3050] flex-1 flex flex-col items-center justify-center text-center"
            >
              <div className="text-3xl font-black text-[#F59E0B]">80%</div>
              <div className="text-[#94A3B8] text-xs uppercase tracking-wide mt-1">Same-day Response</div>
              <div className="text-[#64748B] text-xs mt-2">as of Q1 2026</div>
            </motion.div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

// ============================================================
// SLIDE 3: CISCO — MAYBANK CYBER STRATEGY WORKSHOP
// ============================================================

export function MaybankSlide() {
  return (
    <ProjectSlide
      company="Cisco · Maybank"
      companyColor="#049FD9"
      period="2017–2024 · Malaysia"
      title="Cybersecurity Strategy Workshop"
      context="Co-creating next-generation cybersecurity capabilities for a leading ASEAN bank's digital banking platform"
      bullets={[
        'Facilitated full-day design thinking workshop with cross-functional teams (IT, Applications, Risk, Compliance, Retail, Distribution, Consumer) to co-create cybersecurity solutions across 4 challenge domains.',
        'Challenges addressed: Insider Threats, External Threats & digital experience balance, Security-by-Design in product development, and Emerging Tech Risks (AI, Blockchain, API, Cloud).',
        'Delivered a 3-year prioritised capability roadmap — Transform Security Operations (next-gen SOC), Implement Defence-in-Depth (multi-layer enterprise architecture), and Strengthen Governance (risk-based, threat-centric approach).',
        'Executed executive-level tabletop exercises and risk workshops in collaboration with Deloitte.',
      ]}
      stats={[
        { value: '4', label: 'Challenge Domains', sub: 'co-created with client teams' },
        { value: '3yr', label: 'Capability Roadmap', sub: 'SOC · Defence · Governance' },
      ]}
      tags={['NIST', 'ISO 27001', 'SOC Design', 'Design Thinking', 'MAS TRM', 'Deloitte']}
    />
  );
}

// ============================================================
// SLIDE 4: CISCO — BANK INDONESIA EA & ACCOUNT STRATEGY
// ============================================================

export function BankIndonesiaSlide() {
  return (
    <ProjectSlide
      company="Cisco · Bank Indonesia"
      companyColor="#049FD9"
      period="2017–2024 · Indonesia"
      title="Enterprise Architecture & Account Strategy"
      context="Central bank requiring EA-led architecture planning to accelerate strategic decision-making and drive technology investments"
      bullets={[
        'Engaged Bank Indonesia\'s Enterprise Architecture team as Senior Technical Executive — led comprehensive as-is assessment of the central bank\'s technology landscape.',
        'Delivered a 5-year cybersecurity architecture roadmap through a structured 4-week EA Workshop methodology: Discover (stakeholder mapping, as-is spend) → Review (architecture assessment, CX review) → Refine (To-Be architecture, business case) → Rehearse (CxO pitch, EA deal structure).',
        'Developed ROI and business case models for multi-year technology investments; structured Enterprise Agreement and financing options for C-suite presentation.',
        'Multiple Cisco security architecture wins at the central bank — driving both security infrastructure and cloud adoption.',
      ]}
      stats={[
        { value: '$97M', label: 'Pipeline Generated', sub: 'from EA workshop engagement' },
        { value: '4wk', label: 'Workshop Methodology', sub: 'Discover → Rehearse' },
      ]}
      tags={['Enterprise Architecture', 'TOGAF', 'Cybersecurity', 'EA Workshop', 'ROI Modelling']}
    />
  );
}

// ============================================================
// SLIDE 5: CISCO — K-BANK BOARD ESCALATION
// ============================================================

export function KBankSlide() {
  return (
    <ProjectSlide
      company="Cisco · KasikornBank"
      companyColor="#049FD9"
      period="2017–2024 · Thailand"
      title="Board-Level Cybersecurity Escalation"
      context="Thai bank's cybersecurity posture required executive elevation to unlock strategic investment at board level"
      bullets={[
        'Advised K-Bank C-suite on cybersecurity strategy — assessed existing posture, quantified risk exposure, and framed a multi-year security capability investment case for board-level stakeholders.',
        'Escalated the engagement from IT leadership to Board level, where a $60M client investment in security infrastructure was approved — a landmark deal in the Cisco FSI Thailand portfolio.',
        'Landmark Cisco SOC deal delivered with CX support — establishing a full Security Operations Centre aligned to the bank\'s cybersecurity transformation roadmap.',
      ]}
      stats={[
        { value: '$60M', label: 'Board-Approved Investment', sub: 'in security infrastructure' },
        { value: 'SOC', label: 'Landmark Deal Delivered', sub: 'with Cisco CX support' },
      ]}
      tags={['C-Suite Advisory', 'Cybersecurity', 'SOC', 'Risk Quantification', 'Board Presentation']}
    />
  );
}

// ============================================================
// SLIDE 6: CISCO — ASEAN CYBERSECURITY PROGRAMME
// ============================================================

export function AseanCyberSlide() {
  return (
    <ProjectSlide
      company="Cisco · ASEAN FSI"
      companyColor="#049FD9"
      period="2017–2024 · ASEAN"
      title="ASEAN Cybersecurity Maturity Programme"
      context="First cross-ASEAN initiative to assess and strengthen cybersecurity resilience across 10+ financial institutions simultaneously"
      bullets={[
        'Pioneered a cross-ASEAN Cybersecurity Maturity Assessment initiative — co-developed the Cyber Risk Maturity Assessment framework with Deloitte and IDC, applied across 10+ major ASEAN financial institutions.',
        'Designed comprehensive maturity assessment frameworks, multi-year capability roadmaps, and transformation roadmaps incorporating network and cloud security architectures for each institution.',
        'Contributed to ASEAN whitepapers on Cybersecurity for Government Leaders and the State of ASEAN Cybersecurity — establishing thought leadership that opened new accounts.',
        'Co-developed Joint Value Propositions with GSI partners (Deloitte, Accenture) and presented GTM frameworks at QBRs — creating a repeatable enterprise security sales motion across the region.',
      ]}
      stats={[
        { value: '$35M', label: 'Security Pipeline', sub: 'created within 18 months' },
        { value: '$50M', label: 'Cloud Consumption', sub: 'driven alongside security' },
        { value: '10+', label: 'ASEAN FIs', sub: 'DBS · Maybank · K-Bank · BI' },
      ]}
      tags={['NIST', 'ISO 27001', 'MAS TRM', 'Deloitte', 'IDC', 'Accenture', 'GTM']}
    />
  );
}

// ============================================================
// SLIDE 7: CISCO — LG ENTERPRISE AGREEMENT
// ============================================================

export function LgEaSlide() {
  return (
    <ProjectSlide
      company="Cisco · LG Electronics"
      companyColor="#049FD9"
      period="2017–2024 · Korea"
      title="LG Enterprise Agreement Consolidation"
      context="Global manufacturer's multi-cloud, SD-WAN, and cybersecurity refresh initiatives were fragmented across separate budget owners and timelines"
      bullets={[
        'Consolidated LG\'s multi-cloud, SD-WAN, and cybersecurity refresh initiatives into a single $25M Enterprise Agreement — delivering 15% total cost savings to the client through Capex-to-Opex transition and subscription pricing.',
        'Deployed intent-based networking across LG\'s global infrastructure — reducing incident response times by 35% through automation and signal-driven remediation.',
        'Engineered multi-year commercial sizing and financial models for the EA consolidation; led end-to-end execution as the landmark regional manufacturing win for Cisco in Korea.',
        'Partnered with Cisco CX teams to de-risk implementation, achieving 100% of promised business outcomes post-signature.',
      ]}
      stats={[
        { value: '$25M', label: 'Enterprise Agreement', sub: 'landmark Korean win' },
        { value: '35%', label: 'Faster Incident Response', sub: 'via intent-based networking' },
        { value: '15%', label: 'Cost Savings', sub: 'delivered to client' },
      ]}
      tags={['SD-WAN', 'Multi-cloud', 'Intent-Based Networking', 'Enterprise Agreement', 'AIOps']}
    />
  );
}

// ============================================================
// SLIDE 8: CISCO — KRUNGSRI (PLACEHOLDER)
// ============================================================

export function KrungsriSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#070C18] p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent, #049FD9, transparent)' }} />

      <div className="max-w-5xl w-full z-10">
        <AnimatedText delay={0} className="flex items-center gap-3 mb-4">
          <CompanyTag label="Cisco · Krungsri" color="#049FD9" />
          <span className="text-[#94A3B8] text-xs uppercase tracking-widest">2017–2024 · Thailand</span>
        </AnimatedText>

        <AnimatedText as="h2" className="text-4xl font-black text-[#F1F5F9] mb-6 leading-tight" delay={0.1}>
          Krungsri Bank
        </AnimatedText>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="bg-[#0D1526] rounded-2xl p-8 border border-[#049FD9]/20 max-w-xl"
        >
          <div className="text-[#049FD9] text-xs font-semibold uppercase tracking-widest mb-3">Content Coming Soon</div>
          <p className="text-[#94A3B8] text-sm leading-relaxed">
            Detailed case study for the Krungsri Bank engagement will be added shortly.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

// ============================================================
// SLIDE 9: ACCENTURE — GREAT EASTERN DIGITAL STRATEGY
// ============================================================

export function GreatEasternSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#070C18] p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent, #9333EA, transparent)' }} />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, #9333EA 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl w-full z-10">
        <AnimatedText delay={0} className="flex items-center gap-3 mb-4">
          <CompanyTag label="Accenture · Great Eastern" color="#9333EA" />
          <span className="text-[#94A3B8] text-xs uppercase tracking-widest">Jun 2015 – May 2016 · Singapore / ASEAN</span>
        </AnimatedText>

        <AnimatedText as="h2" className="text-4xl font-black text-[#F1F5F9] mb-1 leading-tight" delay={0.1}>
          Digital Strategy & Enterprise Architecture
        </AnimatedText>
        <AnimatedText as="p" className="text-[#94A3B8] text-sm mb-7 italic" delay={0.15}>
          Leading ASEAN insurer losing market leadership in Singapore and Malaysia — 35% of profits at risk from digital disruption
        </AnimatedText>

        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2 bg-[#0D1526] rounded-2xl p-6 border border-[#1E3050]">
            <p className="text-[#9333EA] text-xs font-semibold uppercase tracking-widest mb-4">What was done</p>
            <ul className="space-y-3">
              <Bullet delay={0.2} text="Led Phase A digital strategy development (8 weeks) — market assessment, competitive analysis, digital proposition design, and capability gap identification across Singapore, Malaysia, and Indonesia." />
              <Bullet delay={0.3} text="Identified 13 differentiated digital capabilities required across 4 domains: Customer Experience, Digital Direct, Contextual Advice, and Data-Driven Business — with capability maturity scoring and gap analysis." />
              <Bullet delay={0.4} text="Designed 3-phase transformation programme: Digital Strategy Development → Validation & Business Case → Execution; recommended MVP Bundle-and-Evolve delivery model for accelerated time-to-market." />
              <Bullet delay={0.5} text="Architected technology stack across 7 digital insurance layers (Channels, Ecosystem, Integration, Core Systems, Analytics, Enablers, Security) aligned to future-state operating model." />
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-[#1E3050]"
            >
              {['Enterprise Architecture', 'Digital Strategy', 'Capability Modelling', 'Agile', 'MVP', 'Analytics'].map((t) => (
                <TechTag key={t} label={t} />
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { value: 'SGD 1.6Bn', label: 'In-force Premium Target', sub: 'digital transformation goal' },
              { value: '+2%', label: 'Incremental CAGR', sub: 'from digital investment' },
              { value: '13', label: 'Digital Capabilities', sub: 'identified & road-mapped' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 + i * 0.12, duration: 0.5 }}
                className="bg-[#0D1526] rounded-2xl p-4 border flex-1 flex flex-col items-center justify-center text-center"
                style={{ borderColor: i === 0 ? '#9333EA40' : '#1E3050' }}
              >
                <div className="text-2xl font-black mb-1" style={{ color: i === 0 ? '#9333EA' : '#F1F5F9' }}>
                  {s.value}
                </div>
                <div className="text-xs text-[#94A3B8] uppercase tracking-wide leading-tight">{s.label}</div>
                {s.sub && <div className="text-xs text-[#64748B] mt-1">{s.sub}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

// ============================================================
// SLIDE 10: ACCENTURE — GIC EA FRAMEWORK & DATA STRATEGY
// ============================================================

export function GicSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#070C18] p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent, #9333EA, transparent)' }} />
      <div
        className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-12"
        style={{ background: 'radial-gradient(circle, #9333EA 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl w-full z-10">
        <AnimatedText delay={0} className="flex items-center gap-3 mb-4">
          <CompanyTag label="Accenture · GIC" color="#9333EA" />
          <span className="text-[#94A3B8] text-xs uppercase tracking-widest">Jun 2015 – May 2016 · Singapore</span>
        </AnimatedText>

        <AnimatedText as="h2" className="text-4xl font-black text-[#F1F5F9] mb-1 leading-tight" delay={0.1}>
          EA Framework & Data Analytics Strategy
        </AnimatedText>
        <AnimatedText as="p" className="text-[#94A3B8] text-sm mb-7 italic" delay={0.15}>
          Singapore's sovereign wealth fund anchoring a major digital transformation — requiring a multi-year data platform and enterprise architecture governance
        </AnimatedText>

        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2 space-y-4">
            <div className="bg-[#0D1526] rounded-2xl p-6 border border-[#1E3050]">
              <p className="text-[#9333EA] text-xs font-semibold uppercase tracking-widest mb-4">What was done</p>
              <ul className="space-y-3">
                <Bullet delay={0.2} text="Architected a comprehensive data and analytics strategy anchoring a $60M digital transformation — developing the multi-year data platform roadmap that established data-informed decision capability at sovereign wealth scale." />
                <Bullet delay={0.3} text="Designed a 7-model EA framework across 3 architectural layers: Business (Capability Model, Processes), Information (Functional Capabilities, Information Distribution), and Technology (Application, Technical, Infrastructure)." />
                <Bullet delay={0.4} text="Established enterprise architecture governance framework and data governance workstreams — enabling consistent application of architecture principles across GIC's global investment operations." />
              </ul>
            </div>

            {/* EA Layer visual */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-[#0D1526] rounded-2xl p-4 border border-[#1E3050]"
            >
              <div className="grid grid-cols-3 gap-3 text-xs">
                {[
                  { layer: 'Business Layer', color: '#9333EA', items: ['B1 Capability Model', 'B2 Business Processes'] },
                  { layer: 'Information Layer', color: '#7C3AED', items: ['I1 Functional Capabilities', 'I2 Information Distribution'] },
                  { layer: 'Technology Layer', color: '#6D28D9', items: ['T1 Application', 'T2 Technical', 'T3 Infrastructure'] },
                ].map((l) => (
                  <div key={l.layer} className="rounded-lg p-3" style={{ backgroundColor: `${l.color}18`, border: `1px solid ${l.color}30` }}>
                    <div className="font-semibold mb-2" style={{ color: l.color }}>{l.layer}</div>
                    {l.items.map((it) => (
                      <div key={it} className="text-[#94A3B8] text-xs leading-tight mb-1">{it}</div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { value: '$60M', label: 'Digital Transformation', sub: 'investment anchored' },
              { value: '7', label: 'EA Models', sub: 'across 3 architecture layers' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 + i * 0.15, duration: 0.5 }}
                className="bg-[#0D1526] rounded-2xl p-6 border flex-1 flex flex-col items-center justify-center text-center"
                style={{ borderColor: i === 0 ? '#9333EA40' : '#1E3050' }}
              >
                <div className="text-4xl font-black mb-1" style={{ color: i === 0 ? '#9333EA' : '#F1F5F9' }}>
                  {s.value}
                </div>
                <div className="text-xs text-[#94A3B8] uppercase tracking-wide leading-tight">{s.label}</div>
                {s.sub && <div className="text-xs text-[#64748B] mt-1">{s.sub}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

// ============================================================
// SLIDE 11: IBM — GLOBAL SUPPLY CHAIN ANALYTICS
// ============================================================

export function IbmSupplyChainSlide() {
  return (
    <ProjectSlide
      company="IBM Global Services"
      companyColor="#3B82F6"
      period="Jul 2011 – Apr 2015 · Global"
      title="Global Supply Chain Analytics Platform"
      context="Global manufacturer needed cloud-based analytics to enable real-time demand forecasting and inventory optimisation at scale"
      bullets={[
        'Led architecture and design of the $50M global supply chain analytics transformation — directing a 5-person global architecture team across multiple geographies and data domains.',
        'Developed scalable cloud-based big data architecture integrating diverse data sources for real-time analytics — enabling data-driven supply chain optimisation across manufacturing, logistics, and distribution.',
        'Built a comprehensive business analytics capability model aligned with core supply chain processes; guided platform selection decisions for the enterprise technology stack.',
        'Delivered real-time analytics capability enabling significant improvements in inventory management, demand forecasting, and operational efficiency for the global manufacturer.',
      ]}
      stats={[
        { value: '$50M', label: 'Platform Delivered', sub: 'global supply chain transformation' },
        { value: '5-person', label: 'Global Arch Team', sub: 'directed across geographies' },
      ]}
      tags={['Big Data', 'Cloud Architecture', 'Supply Chain Analytics', 'Real-Time Analytics', 'IBM']}
    />
  );
}

// ============================================================
// SLIDE 12: IBM — SINGAPORE GOVERNMENT PROGRAMMES
// ============================================================

export function IbmGovSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#070C18] p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent, #3B82F6, transparent)' }} />
      <div
        className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-12"
        style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl w-full z-10">
        <AnimatedText delay={0} className="flex items-center gap-3 mb-4">
          <CompanyTag label="IBM · Singapore Government" color="#3B82F6" />
          <span className="text-[#94A3B8] text-xs uppercase tracking-widest">Jul 2011 – Apr 2015 · Singapore</span>
        </AnimatedText>

        <AnimatedText as="h2" className="text-4xl font-black text-[#F1F5F9] mb-1 leading-tight" delay={0.1}>
          National-Scale Government Platforms
        </AnimatedText>
        <AnimatedText as="p" className="text-[#94A3B8] text-sm mb-7 italic" delay={0.15}>
          Four national-scale Singapore government programmes — healthcare, social services, cross-agency integration
        </AnimatedText>

        <div className="grid grid-cols-3 gap-5">
          {/* Programme cards */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            {[
              {
                name: 'National Healthcare Analytics',
                client: 'IHIS / MOH',
                desc: 'Pre-sales architecture for advanced healthcare analytics — generating insights for national public health initiatives.',
              },
              {
                name: 'Integrated Social Services Platform',
                client: 'MSF',
                desc: 'Comprehensive IBM-based platform streamlining social welfare services delivery and citizen support systems.',
              },
              {
                name: 'National Cross-Agency Case Portal',
                client: 'Singapore Govt Agencies',
                desc: 'Cross-agency case management platform enabling collaboration across government ministries.',
              },
              {
                name: 'Healthcare Marketplace & Exchange',
                client: 'Singapore Healthcare Sector',
                desc: 'Healthcare marketplace platform for service exchange and ecosystem connectivity.',
              },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-[#0D1526] rounded-xl p-4 border border-[#1E3050]"
              >
                <div className="text-[#3B82F6] text-xs font-semibold mb-1">{p.client}</div>
                <div className="text-[#F1F5F9] text-sm font-bold mb-2 leading-tight">{p.name}</div>
                <div className="text-[#94A3B8] text-xs leading-relaxed">{p.desc}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {[
              { value: '$25M', label: 'Government Tender', sub: 'secured with Accenture' },
              { value: '4', label: 'National Platforms', sub: 'led as Advisory Architect' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 + i * 0.15, duration: 0.5 }}
                className="bg-[#0D1526] rounded-2xl p-6 border flex-1 flex flex-col items-center justify-center text-center"
                style={{ borderColor: i === 0 ? '#3B82F640' : '#1E3050' }}
              >
                <div className="text-4xl font-black mb-1" style={{ color: i === 0 ? '#3B82F6' : '#F1F5F9' }}>
                  {s.value}
                </div>
                <div className="text-xs text-[#94A3B8] uppercase tracking-wide leading-tight">{s.label}</div>
                {s.sub && <div className="text-xs text-[#64748B] mt-1">{s.sub}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

// ============================================================
// SLIDE 13: ORANGE — MHA COMMAND & CONTROL
// ============================================================

export function OrangeMhaSlide() {
  return (
    <ProjectSlide
      company="Orange Business Services · MHA"
      companyColor="#F97316"
      period="Dec 2008 – Jun 2011 · Singapore"
      title="MHA Command & Control Integration"
      context="Singapore's Ministry of Home Affairs and Police Force — mission-critical national security system requiring event-driven inter-agency integration"
      bullets={[
        'Architected a mission-critical Command & Control System integration for MHA and Singapore Police Force — event-driven architecture enabling real-time inter-agency coordination for national security and emergency response operations.',
        'Led the transition from vendor-dependent integration software to a custom in-house integration broker — replacing recurring licensing with purpose-built middleware that ensured guaranteed message delivery under government security classifications.',
        'Reduced recurring licensing costs by 40% while improving domain alignment and operational control; managed a 15-member Service Delivery team across government, transport, and port sectors.',
        'Grew top-line revenue 23% through active pre-sales and solution innovation across the government and critical infrastructure portfolio.',
      ]}
      stats={[
        { value: '40%', label: 'Licensing Cost Reduction', sub: 'vendor → in-house build' },
        { value: '23%', label: 'Revenue Growth', sub: 'top-line across portfolio' },
        { value: '15', label: 'Team Members', sub: 'managed across gov & port' },
      ]}
      tags={['Event-Driven Architecture', 'Systems Integration', 'Custom Middleware', 'Gov Security']}
    />
  );
}

// ============================================================
// SLIDE 14: CLOSE
// ============================================================

export function CloseSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#070C18] relative overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#F59E0B 1px, transparent 1px), linear-gradient(90deg, #F59E0B 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.1) 0%, transparent 70%)' }}
      />

      <div className="z-10 text-center px-12 max-w-3xl w-full">
        <AnimatedText as="p" className="text-[#F59E0B] text-xs font-bold uppercase tracking-[0.3em] mb-6" delay={0.1}>
          Let's Connect
        </AnimatedText>

        <AnimatedText as="h2" className="text-6xl font-black text-[#F1F5F9] mb-4 leading-none" delay={0.2}>
          Vijayakumar G.A.
        </AnimatedText>

        <AnimatedText as="p" className="text-[#94A3B8] text-lg mb-10 leading-relaxed" delay={0.3}>
          Principal Consultant & Enterprise Architect
          <br />
          Singapore · Available for Advisory & Consulting Engagements
        </AnimatedText>

        <AnimatedText delay={0.45}>
          <div className="mt-10 flex justify-center gap-3 flex-wrap">
            {['TOGAF 9 Certified', 'AWS Certified Solutions Architect', 'CRISC', 'IAPP AI Governance Professional'].map((cert) => (
              <span key={cert} className="text-xs border border-[#1E3050] text-[#94A3B8] px-3 py-1 rounded-full bg-[#0D1526]">
                {cert}
              </span>
            ))}
          </div>
        </AnimatedText>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />
    </Slide>
  );
}
