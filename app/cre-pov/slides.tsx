'use client';

import { Slide } from '@/components/core';
import { AnimatedText } from '@/components/primitives';
import { motion } from 'framer-motion';

// Fifth Dimension Design System
// Primary: #CE4C0B (orange/rust)
// Background: #FCFAF8 (off-white)
// Text: #1C2321 (dark)
// Muted: #494E4C (gray)

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <AnimatedText delay={delay} className="text-center">
      <div className="text-4xl font-bold text-[#CE4C0B] mb-2">{value}</div>
      <div className="text-sm text-[#494E4C]">{label}</div>
    </AnimatedText>
  );
}

interface TableRowProps {
  cells: string[];
  isHeader?: boolean;
  delay?: number;
}

function TableRow({ cells, isHeader = false, delay = 0 }: TableRowProps) {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className={isHeader ? 'border-b-2 border-[#CE4C0B]' : 'border-b border-[#FCFAF8]/20'}
    >
      {cells.map((cell, i) => (
        <td
          key={i}
          className={`py-3 px-4 text-left ${
            isHeader ? 'font-semibold text-[#FCFAF8]' : 'text-[#FCFAF8]/80'
          } ${i === 0 ? 'font-medium text-[#FCFAF8]' : ''}`}
        >
          {cell}
        </td>
      ))}
    </motion.tr>
  );
}

// ============================================
// PART 1: THE PARADOX
// ============================================

export function TitleSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] relative overflow-hidden">
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(206, 76, 11, 0.08) 0%, rgba(206, 76, 11, 0) 60%)',
        }}
      />

      <div className="text-center z-10 px-8">
        <AnimatedText as="h1" className="text-6xl md:text-7xl font-bold text-[#1C2321] mb-6 tracking-tight">
          The APAC CRE Paradox
        </AnimatedText>
        <AnimatedText as="p" className="text-xl md:text-2xl text-[#494E4C] mb-12 max-w-3xl mx-auto" delay={0.2}>
          USD 106.6B in Capital. 5% AI Success Rate. What&apos;s Breaking?
        </AnimatedText>
        <AnimatedText delay={0.4} className="inline-block mb-8">
          <span className="text-sm uppercase tracking-widest text-[#CE4C0B] font-medium">
            A Strategic Point of View
          </span>
        </AnimatedText>
        <AnimatedText delay={0.6} className="block">
          <span className="text-lg text-[#1C2321]">Vijayakumar G. A.</span>
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function CapitalInflowSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2321] mb-2">
          Capital is Flooding In
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#494E4C] mb-10" delay={0.1}>
          2025 marks the strongest APAC CRE market in a decade
        </AnimatedText>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <StatCard value="$106.6B" label="Total Deployed (+11% YoY)" delay={0.2} />
          <StatCard value="+60%" label="Cross-border Investment" delay={0.3} />
          <StatCard value="+35%" label="Private Wealth Surge" delay={0.4} />
          <StatCard value="+511%" label="India YoY Growth" delay={0.5} />
        </div>

        <AnimatedText delay={0.6} className="bg-[#1C2321] rounded-lg p-6 font-mono text-sm">
          <div className="text-[#FCFAF8] space-y-1">
            <div className="text-[#CE4C0B] mb-3">// 2025 Capital Deployment by Market</div>
            <div><span className="text-[#CE4C0B]">├─</span> India: <span className="text-[#CE4C0B]">+511%</span> YoY <span className="text-[#FCFAF8]/60">(explosive growth)</span></div>
            <div><span className="text-[#CE4C0B]">├─</span> Japan: <span className="text-[#CE4C0B]">+23%</span> YoY <span className="text-[#FCFAF8]/60">(stable powerhouse)</span></div>
            <div><span className="text-[#CE4C0B]">├─</span> Australia: <span className="text-[#CE4C0B]">+8%</span> YoY <span className="text-[#FCFAF8]/60">(institutional weight)</span></div>
            <div><span className="text-[#CE4C0B]">└─</span> Singapore: <span className="text-[#CE4C0B]">+5-10%</span> forecast <span className="text-[#FCFAF8]/60">(capital concentration)</span></div>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.8} className="mt-8 text-sm text-[#494E4C]">
          <strong className="text-[#1C2321]">Drivers:</strong> Yield advantage (4.5-7%), urbanization curves, China de-risking, ESG premium, tech infrastructure readiness
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function ExecutionFailingSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#1C2321] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#FCFAF8] mb-2">
          But Execution is Failing
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#FCFAF8]/60 mb-10" delay={0.1}>
          The data reveals a stark paradox
        </AnimatedText>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <tbody>
              <TableRow cells={['Metric', 'Reality']} isHeader delay={0.2} />
              <TableRow cells={['Using AI', '37% of firms']} delay={0.3} />
              <TableRow cells={['Piloting AI', '92% of firms']} delay={0.35} />
              <TableRow cells={['Achieving goals', 'Only 5%']} delay={0.4} />
              <TableRow cells={['Singapore CEOs with expected ROI', '23% (despite 80% prioritizing)']} delay={0.45} />
              <TableRow cells={['Enterprise-wide AI', '14%']} delay={0.5} />
              <TableRow cells={['Abandoned due to data quality', '64%']} delay={0.55} />
              <TableRow cells={['AI projects failing in production', '85%']} delay={0.6} />
            </tbody>
          </table>
        </div>

        <AnimatedText delay={0.7} className="mt-10 p-6 border-l-4 border-[#CE4C0B] bg-[#FCFAF8]/5">
          <p className="text-xl text-[#FCFAF8] italic">
            &ldquo;This isn&apos;t a technology problem. It&apos;s an execution problem.&rdquo;
          </p>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// PART 2: THE FOUR STRUCTURAL FAILURES
// ============================================

export function FailureMapSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2321] mb-2">
          The Four Structural Failures
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#494E4C] mb-10" delay={0.1}>
          Root causes killing AI adoption in APAC CRE
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedText delay={0.2} className="bg-white border border-[#E5E0DB] rounded-lg p-6 shadow-sm">
            <div className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide mb-2">Failure #1</div>
            <h3 className="text-xl font-bold text-[#1C2321] mb-3">Legacy Systems</h3>
            <p className="text-[#494E4C] text-sm mb-4">60-70% of IT budgets maintaining old systems</p>
            <div className="text-2xl font-bold text-[#CE4C0B]">3-4x</div>
            <div className="text-xs text-[#494E4C]">more expensive to integrate AI</div>
          </AnimatedText>

          <AnimatedText delay={0.3} className="bg-white border border-[#E5E0DB] rounded-lg p-6 shadow-sm">
            <div className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide mb-2">Failure #2</div>
            <h3 className="text-xl font-bold text-[#1C2321] mb-3">Data Fragmentation</h3>
            <p className="text-[#494E4C] text-sm mb-4">64% abandoned strategies due to poor data quality</p>
            <div className="text-2xl font-bold text-[#CE4C0B]">70%</div>
            <div className="text-xs text-[#494E4C]">of transaction data trapped in PDFs</div>
          </AnimatedText>

          <AnimatedText delay={0.4} className="bg-white border border-[#E5E0DB] rounded-lg p-6 shadow-sm">
            <div className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide mb-2">Failure #3</div>
            <h3 className="text-xl font-bold text-[#1C2321] mb-3">Organizational Skepticism</h3>
            <p className="text-[#494E4C] text-sm mb-4">Teams rightly skeptical of &ldquo;replace humans&rdquo; narratives</p>
            <div className="text-2xl font-bold text-[#CE4C0B]">3.4x</div>
            <div className="text-xs text-[#494E4C]">change mgmt stronger predictor than tech quality</div>
          </AnimatedText>

          <AnimatedText delay={0.5} className="bg-white border border-[#E5E0DB] rounded-lg p-6 shadow-sm">
            <div className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide mb-2">Failure #4</div>
            <h3 className="text-xl font-bold text-[#1C2321] mb-3">ROI Measurement Gaps</h3>
            <p className="text-[#494E4C] text-sm mb-4">Metrics measure deployment, not outcomes</p>
            <div className="text-2xl font-bold text-[#CE4C0B]">85%</div>
            <div className="text-xs text-[#494E4C]">of AI projects die in production</div>
          </AnimatedText>
        </div>
      </div>
    </Slide>
  );
}

export function LegacySystemsSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide">Failure #1</span>
        </div>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2321] mb-8">
          Legacy System Fragmentation
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <AnimatedText delay={0.2} className="mb-6">
              <h3 className="text-lg font-semibold text-[#1C2321] mb-4">The Patchwork Reality</h3>
              <div className="bg-[#1C2321] rounded-lg p-5 font-mono text-sm text-[#FCFAF8] space-y-2">
                <div><span className="text-[#CE4C0B]">├─</span> Property Management <span className="text-[#FCFAF8]/60">(Yardi, JDE, SAP — 15-20 yrs old)</span></div>
                <div><span className="text-[#CE4C0B]">├─</span> Accounting <span className="text-[#FCFAF8]/60">(disconnected, local tax software)</span></div>
                <div><span className="text-[#CE4C0B]">├─</span> CRM <span className="text-[#FCFAF8]/60">(Salesforce, poorly integrated)</span></div>
                <div><span className="text-[#CE4C0B]">├─</span> Deal Tracking <span className="text-[#FCFAF8]/60">(spreadsheets)</span></div>
                <div><span className="text-[#CE4C0B]">└─</span> Documents <span className="text-[#FCFAF8]/60">(PDF repositories)</span></div>
              </div>
            </AnimatedText>
          </div>

          <div>
            <AnimatedText delay={0.3} className="mb-6">
              <h3 className="text-lg font-semibold text-[#1C2321] mb-4">The Cost</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl font-bold text-[#CE4C0B] min-w-[80px]">60-70%</div>
                  <div className="text-[#494E4C] text-sm">of IT budget goes to maintaining legacy (not innovating)</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl font-bold text-[#CE4C0B] min-w-[80px]">3-4x</div>
                  <div className="text-[#494E4C] text-sm">more expensive to integrate AI vs. cloud-native</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl font-bold text-[#CE4C0B] min-w-[80px]">40-60%</div>
                  <div className="text-[#494E4C] text-sm">timeline overruns on integration projects</div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>

        <AnimatedText delay={0.5} className="mt-8 p-5 bg-[#CE4C0B]/5 border-l-4 border-[#CE4C0B] rounded-r">
          <p className="text-[#1C2321] font-medium">
            Result: Most AI projects never move beyond proof-of-concept. The integration failure rate makes &ldquo;production deployment&rdquo; a theoretical concept for most APAC CRE firms.
          </p>
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function DataQualitySlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide">Failure #2</span>
        </div>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2321] mb-8">
          Data Quality is the Actual Blocker
        </AnimatedText>

        <AnimatedText delay={0.2} className="bg-[#1C2321] text-[#FCFAF8] rounded-lg p-6 mb-8">
          <div className="text-3xl font-bold mb-2">64%</div>
          <div className="text-[#FCFAF8]/70">of fund managers abandoned investment strategies or halted fundraising due to poor data quality</div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedText delay={0.3}>
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">Structural Data Problems</h3>
            <ul className="space-y-3 text-[#494E4C] text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B] mt-1">•</span>
                <span><strong className="text-[#1C2321]">Inconsistent standards:</strong> SG, HK, India, AU use different classifications, valuations, reporting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B] mt-1">•</span>
                <span><strong className="text-[#1C2321]">No single source of truth:</strong> Same property recorded differently across systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B] mt-1">•</span>
                <span><strong className="text-[#1C2321]">Incomplete records:</strong> 60-70% data completeness post-migration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B] mt-1">•</span>
                <span><strong className="text-[#1C2321]">Trapped in PDFs:</strong> 70% of transaction data in unstructured form</span>
              </li>
            </ul>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">The Reality</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-[#CE4C0B] pl-4">
                <div className="text-2xl font-bold text-[#CE4C0B]">70-80%</div>
                <div className="text-sm text-[#494E4C]">of AI project time spent on data preparation</div>
              </div>
              <div className="border-l-2 border-[#80643a] pl-4">
                <div className="text-lg font-semibold text-[#1C2321]">Pipeline failure</div>
                <div className="text-sm text-[#494E4C]">Most AI projects fail in data validation, not model development</div>
              </div>
            </div>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.5} className="mt-8 p-5 bg-[#CE4C0B]/5 border-l-4 border-[#CE4C0B] rounded-r">
          <p className="text-[#1C2321] font-medium italic">
            &ldquo;AI doesn&apos;t fail because algorithms are bad. AI fails because the data going into the algorithms is bad.&rdquo;
          </p>
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function OrganizationalSkepticismSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide">Failure #3</span>
        </div>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2321] mb-8">
          Organizational Skepticism
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedText delay={0.2}>
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">Why Skepticism is Rational</h3>
            <ul className="space-y-4 text-[#494E4C] text-sm">
              <li className="p-4 bg-white border border-[#E5E0DB] rounded-lg">
                <strong className="text-[#1C2321]">Relationship-driven industry:</strong> 15+ years of accumulated local knowledge. &ldquo;AI will replace me&rdquo; feels existential.
              </li>
              <li className="p-4 bg-white border border-[#E5E0DB] rounded-lg">
                <strong className="text-[#1C2321]">Long deal cycles:</strong> 6-12 month deals make 3-month pilot results feel disconnected.
              </li>
              <li className="p-4 bg-white border border-[#E5E0DB] rounded-lg">
                <strong className="text-[#1C2321]">Fiduciary concerns:</strong> Unauditable AI = governance risk for LP capital.
              </li>
              <li className="p-4 bg-white border border-[#E5E0DB] rounded-lg">
                <strong className="text-[#1C2321]">Past failures:</strong> Teams have watched tech disruptions fail before.
              </li>
            </ul>
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">The Research</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-[#CE4C0B]">3.4x</div>
                <div className="text-sm text-[#494E4C]">
                  <strong className="text-[#1C2321]">Structured change management</strong> increases adoption rates and accelerates ROI by 45%
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-[#CE4C0B]">62%</div>
                <div className="text-sm text-[#494E4C]">
                  <strong className="text-[#1C2321]">Drop in resistance</strong> when AI framed as &ldquo;enhancing&rdquo; vs. &ldquo;replacing&rdquo;
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-[#CE4C0B]">65%</div>
                <div className="text-sm text-[#494E4C]">
                  <strong className="text-[#1C2321]">Of leaders don&apos;t trust their own data</strong> — why would they trust AI on that data?
                </div>
              </div>
            </div>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.5} className="mt-8 p-5 bg-[#CE4C0B]/5 border-l-4 border-[#CE4C0B] rounded-r">
          <p className="text-[#1C2321] font-medium">
            &ldquo;You can&apos;t AI-wash organizational resistance.&rdquo; Teams need credible evidence that AI solves real problems without creating new governance risks.
          </p>
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function ROIMeasurementSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide">Failure #4</span>
        </div>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2321] mb-8">
          ROI Measurement is Broken
        </AnimatedText>

        <AnimatedText delay={0.2} className="bg-[#1C2321] rounded-lg p-6 mb-8 text-center">
          <div className="text-[#FCFAF8]/70 text-sm mb-2">The cruelest paradox</div>
          <div className="text-[#FCFAF8] text-lg">
            Can&apos;t measure ROI → Under-invest → Never scales enough to generate measurable ROI
          </div>
          <div className="text-[#CE4C0B] mt-2 text-sm font-medium">A closed loop</div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedText delay={0.3}>
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">The Measurement Trap</h3>
            <ul className="space-y-3 text-[#494E4C] text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B]">✗</span>
                <span><strong className="text-[#1C2321]">Deployment ≠ Outcome:</strong> &ldquo;50 docs processed&rdquo; ≠ &ldquo;20% productivity gain&rdquo;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B]">✗</span>
                <span><strong className="text-[#1C2321]">Pilot metrics don&apos;t scale:</strong> 3-month wins don&apos;t predict enterprise ROI</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B]">✗</span>
                <span><strong className="text-[#1C2321]">Long cycles break math:</strong> 6-18 month deals can&apos;t be measured in 3 months</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B]">✗</span>
                <span><strong className="text-[#1C2321]">Attribution problem:</strong> Did AI help or did the analyst work faster?</span>
              </li>
            </ul>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">The Evidence</h3>
            <div className="space-y-4">
              <div className="bg-white border border-[#E5E0DB] rounded-lg p-4">
                <div className="text-2xl font-bold text-[#CE4C0B]">85%</div>
                <div className="text-sm text-[#494E4C]">of AI projects die in production</div>
              </div>
              <div className="bg-white border border-[#E5E0DB] rounded-lg p-4">
                <div className="text-lg font-semibold text-[#1C2321]">6-12 months</div>
                <div className="text-sm text-[#494E4C]">Most failures occur post-deployment when sustained ROI doesn&apos;t materialize</div>
              </div>
            </div>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.5} className="mt-8 p-5 bg-[#CE4C0B]/5 border-l-4 border-[#CE4C0B] rounded-r">
          <p className="text-[#1C2321] font-medium italic">
            &ldquo;Pilots succeed on metrics that don&apos;t matter. Enterprise scaling fails because real ROI is invisible.&rdquo;
          </p>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// PART 3: THE SOLUTIONS
// ============================================

export function SolutionFrameworkSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#1C2321] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#FCFAF8] mb-2">
          The Solutions
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#FCFAF8]/60 mb-10" delay={0.1}>
          Mapping root causes to solution approaches
        </AnimatedText>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2 border-[#CE4C0B]">
                <th className="py-3 px-4 text-[#FCFAF8] font-semibold">Root Cause</th>
                <th className="py-3 px-4 text-[#FCFAF8] font-semibold">Solution Approach</th>
                <th className="py-3 px-4 text-[#FCFAF8] font-semibold">Key Capability</th>
              </tr>
            </thead>
            <tbody>
              <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="border-b border-[#FCFAF8]/10">
                <td className="py-4 px-4 text-[#FCFAF8]">Legacy fragmentation</td>
                <td className="py-4 px-4 text-[#FCFAF8]/70">API-first integration</td>
                <td className="py-4 px-4 text-[#CE4C0B] font-medium">Connect, don&apos;t replace</td>
              </motion.tr>
              <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="border-b border-[#FCFAF8]/10">
                <td className="py-4 px-4 text-[#FCFAF8]">Data quality</td>
                <td className="py-4 px-4 text-[#FCFAF8]/70">Domain-specific pipelines + governance</td>
                <td className="py-4 px-4 text-[#CE4C0B] font-medium">50+ CRE models, audit trails</td>
              </motion.tr>
              <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="border-b border-[#FCFAF8]/10">
                <td className="py-4 px-4 text-[#FCFAF8]">Organizational skepticism</td>
                <td className="py-4 px-4 text-[#FCFAF8]/70">Human-first positioning</td>
                <td className="py-4 px-4 text-[#CE4C0B] font-medium">Augment, don&apos;t automate</td>
              </motion.tr>
              <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <td className="py-4 px-4 text-[#FCFAF8]">ROI measurement</td>
                <td className="py-4 px-4 text-[#FCFAF8]/70">Transaction-level metrics</td>
                <td className="py-4 px-4 text-[#CE4C0B] font-medium">Measure deal outcomes</td>
              </motion.tr>
            </tbody>
          </table>
        </div>
      </div>
    </Slide>
  );
}

export function IntegrationSolutionSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide">Solution #1</span>
        </div>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2321] mb-8">
          Integration Without Replacement
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedText delay={0.2}>
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">API-First Architecture</h3>
            <div className="bg-[#1C2321] rounded-lg p-5 font-mono text-sm text-[#FCFAF8] space-y-2">
              <div className="text-[#CE4C0B]">// Data Flow</div>
              <div><span className="text-[#CE4C0B]">1.</span> Read from existing systems</div>
              <div><span className="text-[#CE4C0B]">2.</span> Process externally</div>
              <div><span className="text-[#CE4C0B]">3.</span> Write insights back</div>
              <div className="mt-4 text-[#CE4C0B]">// Adapters</div>
              <div><span className="text-[#CE4C0B]">├─</span> Yardi</div>
              <div><span className="text-[#CE4C0B]">├─</span> SAP</div>
              <div><span className="text-[#CE4C0B]">├─</span> Salesforce</div>
              <div><span className="text-[#CE4C0B]">└─</span> JDE</div>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">Multi-Channel Ingestion</h3>
            <ul className="space-y-3 text-[#494E4C] text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B]">→</span>
                <span><strong className="text-[#1C2321]">Structured:</strong> APIs, property management feeds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B]">→</span>
                <span><strong className="text-[#1C2321]">Unstructured:</strong> PDFs, emails, scans</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B]">→</span>
                <span><strong className="text-[#1C2321]">Real-time:</strong> Webhooks, continuous sync</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-white border border-[#E5E0DB] rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#494E4C]">Deployment Time</span>
              </div>
              <div className="flex items-end gap-4">
                <div>
                  <div className="text-2xl font-bold text-[#CE4C0B]">6-8 weeks</div>
                  <div className="text-xs text-[#494E4C]">API-first approach</div>
                </div>
                <div className="text-[#494E4C]">vs.</div>
                <div>
                  <div className="text-2xl font-bold text-[#494E4C]">18-24 months</div>
                  <div className="text-xs text-[#494E4C]">Rip-and-replace</div>
                </div>
              </div>
            </div>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.5} className="mt-8 p-5 bg-[#CE4C0B]/5 border-l-4 border-[#CE4C0B] rounded-r">
          <p className="text-[#1C2321] font-medium">
            <strong>Why this works:</strong> Zero appetite for system replacement in risk-averse markets. IT departments implement without organizational disruption. Narrow pilot → transaction-level ROI → scale incrementally.
          </p>
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function RexeraCaseStudySlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#1C2321] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide mb-2">
          Case Study
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#FCFAF8] mb-2" delay={0.1}>
          Rexera on AWS Bedrock
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#FCFAF8]/60 mb-10" delay={0.2}>
          Document automation for real estate transactions
        </AnimatedText>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <AnimatedText delay={0.3} className="bg-[#FCFAF8]/5 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#CE4C0B]">5M</div>
            <div className="text-sm text-[#FCFAF8]/70">pages/month</div>
          </AnimatedText>
          <AnimatedText delay={0.35} className="bg-[#FCFAF8]/5 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#CE4C0B]">99%</div>
            <div className="text-sm text-[#FCFAF8]/70">manual reduction</div>
          </AnimatedText>
          <AnimatedText delay={0.4} className="bg-[#FCFAF8]/5 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#CE4C0B]">80%</div>
            <div className="text-sm text-[#FCFAF8]/70">review time cut</div>
          </AnimatedText>
          <AnimatedText delay={0.45} className="bg-[#FCFAF8]/5 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#CE4C0B]">4 hrs</div>
            <div className="text-sm text-[#FCFAF8]/70">saved per transaction</div>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedText delay={0.5} className="bg-[#FCFAF8]/5 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#FCFAF8] mb-3">Technical Approach</h3>
            <ul className="space-y-2 text-sm text-[#FCFAF8]/70">
              <li>• RAG architecture with Claude + Llama models</li>
              <li>• Works with unstandardized documents</li>
              <li>• &gt;95% extraction accuracy</li>
              <li>• 5,000 transactions processed monthly</li>
            </ul>
          </AnimatedText>

          <AnimatedText delay={0.6} className="bg-[#FCFAF8]/5 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#FCFAF8] mb-3">ROI Delivered</h3>
            <ul className="space-y-2 text-sm text-[#FCFAF8]/70">
              <li>• 25% cost savings</li>
              <li>• Error-prone manual processes eliminated</li>
              <li>• Expansion to agentic workflows planned</li>
              <li>• Real-time processing at scale</li>
            </ul>
          </AnimatedText>
        </div>
      </div>
    </Slide>
  );
}

export function DomainSpecificAISlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide">Solution #2</span>
        </div>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2321] mb-8">
          Domain-Specific AI (Not Generic LLMs)
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedText delay={0.2}>
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">The Problem with Generic AI</h3>
            <ul className="space-y-3 text-[#494E4C] text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B]">✗</span>
                <span>ChatGPT/Claude don&apos;t understand CRE terminology</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B]">✗</span>
                <span>Hallucination on lease clauses, valuations, covenants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B]">✗</span>
                <span>No audit trail, no explainability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B]">✗</span>
                <span>Missing regional nuance (SG vs. HK vs. India)</span>
              </li>
            </ul>
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">Domain-Specific Approach</h3>
            <ul className="space-y-3 text-[#494E4C] text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B]">✓</span>
                <span><strong className="text-[#1C2321]">50+ CRE-specific models</strong> (lease extraction, investment memos, tenant risk)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B]">✓</span>
                <span><strong className="text-[#1C2321]">Trained on CRE documents</strong>, understands CRE semantics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B]">✓</span>
                <span><strong className="text-[#1C2321]">Confidence scoring</strong> on outputs (90% vs. 60% confident)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#CE4C0B]">✓</span>
                <span><strong className="text-[#1C2321]">Explainability</strong>: system explains reasoning, not black box</span>
              </li>
            </ul>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.5} className="mt-8 bg-[#1C2321] rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide">Case Study: JLL Lease Abstraction</span>
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-[#CE4C0B]">40,000+</div>
              <div className="text-sm text-[#FCFAF8]/70">legacy leases processed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#CE4C0B]">85%</div>
              <div className="text-sm text-[#FCFAF8]/70">manual review time cut</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#CE4C0B]">$2.4M</div>
              <div className="text-sm text-[#FCFAF8]/70">missed revenue uncovered</div>
            </div>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function GovernanceSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide">Solution #3</span>
        </div>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2321] mb-8">
          Governance as Architecture
        </AnimatedText>

        <AnimatedText delay={0.2} className="bg-[#1C2321] text-[#FCFAF8] rounded-lg p-6 mb-8 text-center">
          <p className="text-lg">Built-in, not bolted-on</p>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedText delay={0.3} className="bg-white border border-[#E5E0DB] rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">Audit Trails</h3>
            <ul className="space-y-2 text-sm text-[#494E4C]">
              <li>• Input → Processing → Output → Reasoning</li>
              <li>• Immutable log (can&apos;t be modified)</li>
              <li>• Queryable for regulatory review</li>
              <li>• Timestamped and versioned</li>
            </ul>
          </AnimatedText>

          <AnimatedText delay={0.35} className="bg-white border border-[#E5E0DB] rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">Explainability</h3>
            <ul className="space-y-2 text-sm text-[#494E4C]">
              <li>• &ldquo;Extracted lease term: 5 years (found page 3, matched template pattern)&rdquo;</li>
              <li>• Confidence scores on every output</li>
              <li>• Alternative interpretations shown</li>
            </ul>
          </AnimatedText>

          <AnimatedText delay={0.4} className="bg-white border border-[#E5E0DB] rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">Data Governance</h3>
            <ul className="space-y-2 text-sm text-[#494E4C]">
              <li>• Data lineage tracking</li>
              <li>• Retention policies enforced</li>
              <li>• Access controls logged</li>
              <li>• NIST-aligned framework</li>
            </ul>
          </AnimatedText>

          <AnimatedText delay={0.45} className="bg-white border border-[#E5E0DB] rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">Bias Detection</h3>
            <ul className="space-y-2 text-sm text-[#494E4C]">
              <li>• Demographic monitoring</li>
              <li>• Fairness metrics tracked</li>
              <li>• Drift monitoring over time</li>
              <li>• Singapore MAS ready</li>
            </ul>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.5} className="mt-8 p-5 bg-[#CE4C0B]/5 border-l-4 border-[#CE4C0B] rounded-r">
          <p className="text-[#1C2321] font-medium">
            <strong>Why this matters:</strong> Institutional capital requires governance trust. Fund managers must explain AI to LPs. Audit trails = risk mitigation = institutional confidence.
          </p>
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function AugmentationSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide">Solution #4</span>
        </div>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2321] mb-8">
          Augmentation, Not Replacement
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedText delay={0.2}>
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">Human-First Design</h3>
            <ul className="space-y-4 text-[#494E4C] text-sm">
              <li className="p-4 bg-white border border-[#E5E0DB] rounded-lg">
                <strong className="text-[#1C2321]">Analyst reviews + approves</strong> AI outputs before decisions
              </li>
              <li className="p-4 bg-white border border-[#E5E0DB] rounded-lg">
                <strong className="text-[#1C2321]">System is second opinion</strong>, not replacement for expertise
              </li>
              <li className="p-4 bg-white border border-[#E5E0DB] rounded-lg">
                <strong className="text-[#1C2321]">Empowers senior analysts</strong> to scale their expertise
              </li>
              <li className="p-4 bg-white border border-[#E5E0DB] rounded-lg">
                <strong className="text-[#1C2321]">Preserves agency:</strong> AI surfaces patterns, analyst judges implications
              </li>
            </ul>
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">Change Management as Product</h3>
            <div className="bg-[#1C2321] rounded-lg p-5 font-mono text-sm text-[#FCFAF8] space-y-2">
              <div className="text-[#CE4C0B]">// Implementation Flow</div>
              <div><span className="text-[#CE4C0B]">1.</span> Org assessment (workflow, champions, skeptics)</div>
              <div><span className="text-[#CE4C0B]">2.</span> First-win design (narrow, clean data, clear ROI)</div>
              <div><span className="text-[#CE4C0B]">3.</span> Show 30% time savings on one task</div>
              <div><span className="text-[#CE4C0B]">4.</span> Build internal credibility</div>
              <div><span className="text-[#CE4C0B]">5.</span> Expand to other workflows</div>
              <div className="mt-4 text-[#CE4C0B]">// Result</div>
              <div>Skepticism dissolves when people see results</div>
            </div>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.5} className="mt-8 p-5 bg-[#CE4C0B]/5 border-l-4 border-[#CE4C0B] rounded-r">
          <p className="text-[#1C2321] font-medium">
            CRE is relationship-driven. Local analysts have irreplaceable judgment. The goal: preserve expertise, reduce busywork, let analysts focus on judgment calls.
          </p>
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function AssetLivingCaseStudySlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#1C2321] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide mb-2">
          Case Study
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#FCFAF8] mb-2" delay={0.1}>
          Asset Living with EliseAI
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#FCFAF8]/60 mb-10" delay={0.2}>
          Communication automation at scale — augmenting, not replacing
        </AnimatedText>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <AnimatedText delay={0.3} className="bg-[#FCFAF8]/5 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#CE4C0B]">450K</div>
            <div className="text-sm text-[#FCFAF8]/70">units managed</div>
          </AnimatedText>
          <AnimatedText delay={0.35} className="bg-[#FCFAF8]/5 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#CE4C0B]">85%</div>
            <div className="text-sm text-[#FCFAF8]/70">automated communications</div>
          </AnimatedText>
          <AnimatedText delay={0.4} className="bg-[#FCFAF8]/5 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#CE4C0B]">+6%</div>
            <div className="text-sm text-[#FCFAF8]/70">on-time payments</div>
          </AnimatedText>
          <AnimatedText delay={0.45} className="bg-[#FCFAF8]/5 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#CE4C0B]">72 hrs</div>
            <div className="text-sm text-[#FCFAF8]/70">monthly capacity gained</div>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedText delay={0.5} className="bg-[#FCFAF8]/5 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#FCFAF8] mb-3">AI Modules Deployed</h3>
            <ul className="space-y-2 text-sm text-[#FCFAF8]/70">
              <li>• LeasingAI — lead management</li>
              <li>• Delinquency — payment follow-up</li>
              <li>• Maintenance — work order triage</li>
              <li>• Renewals — retention outreach</li>
              <li>• VoiceAI — call handling</li>
            </ul>
          </AnimatedText>

          <AnimatedText delay={0.6} className="bg-[#FCFAF8]/5 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#FCFAF8] mb-3">Key Insight</h3>
            <p className="text-sm text-[#FCFAF8]/70 mb-4">
              Teams didn&apos;t shrink — they scaled. AI handles volume, humans handle judgment. Supports multilingual needs across diverse markets.
            </p>
            <div className="text-[#CE4C0B] font-medium">
              Result: Reduced bad debt, faster response times, no job losses
            </div>
          </AnimatedText>
        </div>
      </div>
    </Slide>
  );
}

export function TransactionROISlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide">Solution #5</span>
        </div>
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2321] mb-8">
          Transaction-Level ROI Measurement
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedText delay={0.2}>
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">Measure What Matters</h3>
            <div className="bg-[#1C2321] rounded-lg p-5 font-mono text-sm text-[#FCFAF8] space-y-3">
              <div className="text-[#CE4C0B]">// ROI Calculation</div>
              <div><span className="text-[#CE4C0B]">baseline:</span> analyst time per document (current)</div>
              <div><span className="text-[#CE4C0B]">post_ai:</span> analyst time per document (with AI)</div>
              <div><span className="text-[#CE4C0B]">delta:</span> X minutes saved per document</div>
              <div className="mt-2 border-t border-[#FCFAF8]/20 pt-2">
                <span className="text-[#CE4C0B]">enterprise_roi =</span>
                <div className="pl-4">delta × annual_volume × (analyst_cost / hour)</div>
              </div>
              <div className="mt-2 text-[#FCFAF8]/50 text-xs">// Real, measurable, LP-reportable</div>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">Beyond Time Savings</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white border border-[#E5E0DB] rounded-lg">
                <div className="font-semibold text-[#1C2321] mb-1">Cycle Time Impact</div>
                <div className="text-sm text-[#494E4C]">Does AI accelerate investment decisions? Cycle time advantage = capital velocity advantage</div>
              </div>
              <div className="p-4 bg-white border border-[#E5E0DB] rounded-lg">
                <div className="font-semibold text-[#1C2321] mb-1">Quality Metrics</div>
                <div className="text-sm text-[#494E4C]">Error rate reduction, missed clause rate, audit findings reduction</div>
              </div>
              <div className="p-4 bg-white border border-[#E5E0DB] rounded-lg">
                <div className="font-semibold text-[#1C2321] mb-1">Adoption Rate</div>
                <div className="text-sm text-[#494E4C]">% of analysts using, frequency, satisfaction scores</div>
              </div>
            </div>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.5} className="mt-8 bg-[#1C2321] rounded-lg p-5">
          <h3 className="text-lg font-semibold text-[#FCFAF8] mb-3">Bounded Pilots</h3>
          <div className="grid grid-cols-4 gap-4 text-center text-sm">
            <div>
              <div className="text-[#CE4C0B] font-bold">Define</div>
              <div className="text-[#FCFAF8]/70">Success metrics before implementation</div>
            </div>
            <div>
              <div className="text-[#CE4C0B] font-bold">8-12 weeks</div>
              <div className="text-[#FCFAF8]/70">Pilot on one document type</div>
            </div>
            <div>
              <div className="text-[#CE4C0B] font-bold">Measure</div>
              <div className="text-[#FCFAF8]/70">Transaction-level outcomes</div>
            </div>
            <div>
              <div className="text-[#CE4C0B] font-bold">Scale or Diagnose</div>
              <div className="text-[#FCFAF8]/70">If ROI proven, scale; if not, retry</div>
            </div>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function ROIEvidenceSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2321] mb-2">
          The ROI Evidence
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#494E4C] mb-8" delay={0.1}>
          Case study compilation — real implementations, real returns
        </AnimatedText>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2 border-[#CE4C0B]">
                <th className="py-3 px-3 text-[#1C2321] font-semibold">Company</th>
                <th className="py-3 px-3 text-[#1C2321] font-semibold">Application</th>
                <th className="py-3 px-3 text-[#1C2321] font-semibold">ROI/Savings</th>
              </tr>
            </thead>
            <tbody className="text-[#494E4C]">
              <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="border-b border-[#E5E0DB]">
                <td className="py-3 px-3 font-medium text-[#1C2321]">Royal London (JLL Hank)</td>
                <td className="py-3 px-3">HVAC optimization</td>
                <td className="py-3 px-3 text-[#CE4C0B] font-semibold">708% ROI, 59% energy savings</td>
              </motion.tr>
              <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="border-b border-[#E5E0DB]">
                <td className="py-3 px-3 font-medium text-[#1C2321]">Rexera (AWS)</td>
                <td className="py-3 px-3">Document automation</td>
                <td className="py-3 px-3 text-[#CE4C0B] font-semibold">99% manual reduction, 25% cost cut</td>
              </motion.tr>
              <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="border-b border-[#E5E0DB]">
                <td className="py-3 px-3 font-medium text-[#1C2321]">Asset Living (EliseAI)</td>
                <td className="py-3 px-3">Communication automation</td>
                <td className="py-3 px-3 text-[#CE4C0B] font-semibold">+6% payments, 72 hrs/month</td>
              </motion.tr>
              <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="border-b border-[#E5E0DB]">
                <td className="py-3 px-3 font-medium text-[#1C2321]">BXP (Measurabl)</td>
                <td className="py-3 px-3">Energy monitoring</td>
                <td className="py-3 px-3 text-[#CE4C0B] font-semibold">$2.2M savings, 41% intensity cut</td>
              </motion.tr>
              <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="border-b border-[#E5E0DB]">
                <td className="py-3 px-3 font-medium text-[#1C2321]">AvalonBay (Parity)</td>
                <td className="py-3 px-3">HVAC optimization</td>
                <td className="py-3 px-3 text-[#CE4C0B] font-semibold">$540K + $290K penalties avoided</td>
              </motion.tr>
              <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="border-b border-[#E5E0DB]">
                <td className="py-3 px-3 font-medium text-[#1C2321]">Funnel Leasing</td>
                <td className="py-3 px-3">Lead management</td>
                <td className="py-3 px-3 text-[#CE4C0B] font-semibold">33-46% conversion increase</td>
              </motion.tr>
              <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <td className="py-3 px-3 font-medium text-[#1C2321]">Venn (Charney)</td>
                <td className="py-3 px-3">Leasing automation</td>
                <td className="py-3 px-3 text-[#CE4C0B] font-semibold">&lt;1 day to lease, &gt;$231/lease</td>
              </motion.tr>
            </tbody>
          </table>
        </div>

        <AnimatedText delay={0.6} className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-[#1C2321] rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-[#CE4C0B]">440%</div>
            <div className="text-sm text-[#FCFAF8]/70">Property mgmt annual ROI</div>
          </div>
          <div className="bg-[#1C2321] rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-[#CE4C0B]">10%+</div>
            <div className="text-sm text-[#FCFAF8]/70">NOI uplift (McKinsey)</div>
          </div>
          <div className="bg-[#1C2321] rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-[#CE4C0B]">2.85x</div>
            <div className="text-sm text-[#FCFAF8]/70">Average AI ROI (IBM)</div>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function FourCsFrameworkSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2321] mb-2">
          The Four Cs Framework
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#494E4C] mb-8" delay={0.1}>
          McKinsey&apos;s framework for how AI creates value in CRE
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedText delay={0.2} className="bg-white border border-[#E5E0DB] rounded-lg p-6">
            <div className="text-3xl font-bold text-[#CE4C0B] mb-2">Concision</div>
            <div className="text-lg font-semibold text-[#1C2321] mb-3">Summarize dense documents</div>
            <p className="text-sm text-[#494E4C]">
              Lease abstraction: extract terms, rent, ESG compliance from 100-page documents in minutes, not days
            </p>
          </AnimatedText>

          <AnimatedText delay={0.3} className="bg-white border border-[#E5E0DB] rounded-lg p-6">
            <div className="text-3xl font-bold text-[#CE4C0B] mb-2">Customer</div>
            <div className="text-lg font-semibold text-[#1C2321] mb-3">Personalize interactions</div>
            <p className="text-sm text-[#494E4C]">
              AI copilots handle tenant requests, monitor for risks, manage renewals — 24/7 responsiveness at scale
            </p>
          </AnimatedText>

          <AnimatedText delay={0.4} className="bg-white border border-[#E5E0DB] rounded-lg p-6">
            <div className="text-3xl font-bold text-[#CE4C0B] mb-2">Creation</div>
            <div className="text-lg font-semibold text-[#1C2321] mb-3">Generate content</div>
            <p className="text-sm text-[#494E4C]">
              Investment memos, market reports, property visualizations, furnished room previews — accelerating go-to-market
            </p>
          </AnimatedText>

          <AnimatedText delay={0.5} className="bg-white border border-[#E5E0DB] rounded-lg p-6">
            <div className="text-3xl font-bold text-[#CE4C0B] mb-2">Customization</div>
            <div className="text-lg font-semibold text-[#1C2321] mb-3">Tailor solutions</div>
            <p className="text-sm text-[#494E4C]">
              Regional compliance (SG, HK, India), multilingual support, local market nuance — APAC-specific deployment
            </p>
          </AnimatedText>
        </div>
      </div>
    </Slide>
  );
}

export function AdoptionParadoxSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#1C2321] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#FCFAF8] mb-2">
          Addressing the Adoption Paradox
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#FCFAF8]/60 mb-10" delay={0.1}>
          From 92% piloting → 5% achieving: the transformation required
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedText delay={0.2}>
            <h3 className="text-lg font-semibold text-[#FCFAF8] mb-4 flex items-center gap-2">
              <span className="text-[#CE4C0B]">✗</span> Current State
            </h3>
            <ul className="space-y-3 text-sm text-[#FCFAF8]/70">
              <li className="p-3 bg-[#FCFAF8]/5 rounded">Pilots on narrow tasks</li>
              <li className="p-3 bg-[#FCFAF8]/5 rounded">Deployment metrics</li>
              <li className="p-3 bg-[#FCFAF8]/5 rounded">6-month evaluation cycles</li>
              <li className="p-3 bg-[#FCFAF8]/5 rounded">Generic AI tools</li>
              <li className="p-3 bg-[#FCFAF8]/5 rounded">Bolt-on governance</li>
              <li className="p-3 bg-[#FCFAF8]/5 rounded">&ldquo;Replace humans&rdquo; framing</li>
            </ul>
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <h3 className="text-lg font-semibold text-[#FCFAF8] mb-4 flex items-center gap-2">
              <span className="text-[#CE4C0B]">✓</span> Target State
            </h3>
            <ul className="space-y-3 text-sm text-[#CE4C0B]">
              <li className="p-3 bg-[#CE4C0B]/10 rounded border border-[#CE4C0B]/30">Enterprise-wide deployment</li>
              <li className="p-3 bg-[#CE4C0B]/10 rounded border border-[#CE4C0B]/30">Outcome metrics</li>
              <li className="p-3 bg-[#CE4C0B]/10 rounded border border-[#CE4C0B]/30">Transaction-level proof in 8-12 weeks</li>
              <li className="p-3 bg-[#CE4C0B]/10 rounded border border-[#CE4C0B]/30">Domain-specific CRE models</li>
              <li className="p-3 bg-[#CE4C0B]/10 rounded border border-[#CE4C0B]/30">Architectural governance</li>
              <li className="p-3 bg-[#CE4C0B]/10 rounded border border-[#CE4C0B]/30">&ldquo;Augment expertise&rdquo; positioning</li>
            </ul>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.5} className="mt-10 text-center">
          <p className="text-xl text-[#FCFAF8]">
            The shift: Not &ldquo;deploy AI&rdquo; but <span className="text-[#CE4C0B] font-semibold">&ldquo;transform how decisions are made&rdquo;</span>
          </p>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// PART 4: SINGAPORE AS BEACHHEAD
// ============================================

export function SingaporeBeachheadSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2321] mb-8">
          Why Singapore is the Regional Template
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedText delay={0.2}>
            <div className="bg-[#1C2321] rounded-lg p-6 font-mono text-sm text-[#FCFAF8]">
              <div className="text-[#CE4C0B] mb-3">// Singapore Advantage</div>
              <div className="space-y-2">
                <div><span className="text-[#CE4C0B]">├─</span> 5G nationwide</div>
                <div><span className="text-[#CE4C0B]">├─</span> Digital twin (Virtual Singapore)</div>
                <div><span className="text-[#CE4C0B]">├─</span> Government mandate (ITM 2025)</div>
                <div><span className="text-[#CE4C0B]">├─</span> Regulatory clarity (MAS, URA)</div>
                <div><span className="text-[#CE4C0B]">├─</span> Capital concentration (~USD 5T AUM)</div>
                <div><span className="text-[#CE4C0B]">├─</span> Rare talent pool (CRE + AI)</div>
                <div><span className="text-[#CE4C0B]">└─</span> 100-150 CRE firms, 30+ funds</div>
              </div>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <h3 className="text-lg font-semibold text-[#1C2321] mb-4">First-Mover Logic</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white border border-[#E5E0DB] rounded-lg">
                <div className="font-semibold text-[#1C2321] mb-1">Small but dense</div>
                <div className="text-sm text-[#494E4C]">100-150 CRE firms means you can create a deep reference base quickly</div>
              </div>
              <div className="p-4 bg-white border border-[#E5E0DB] rounded-lg">
                <div className="font-semibold text-[#1C2321] mb-1">Credibility beachhead</div>
                <div className="text-sm text-[#494E4C]">Success in regulated Singapore = credible regional reference</div>
              </div>
              <div className="p-4 bg-white border border-[#E5E0DB] rounded-lg">
                <div className="font-semibold text-[#1C2321] mb-1">Regional template</div>
                <div className="text-sm text-[#494E4C]">Win Singapore → playbook for HK, Tokyo, Sydney, India</div>
              </div>
            </div>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.5} className="mt-8 p-6 bg-[#CE4C0B] rounded-lg text-center">
          <p className="text-xl font-semibold text-[#FCFAF8]">
            Win Singapore → Become the regional standard → Scale to APAC
          </p>
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function TimelineWindowSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2321] mb-8">
          The 24-Month Window
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedText delay={0.2} className="bg-white border-2 border-[#CE4C0B] rounded-lg p-6">
            <div className="text-[#CE4C0B] font-bold text-lg mb-2">2025-2026</div>
            <div className="text-xl font-semibold text-[#1C2321] mb-4">The Window</div>
            <ul className="space-y-2 text-sm text-[#494E4C]">
              <li>• Capital arriving at scale</li>
              <li>• Firms actively piloting</li>
              <li>• Skepticism high but surmountable</li>
              <li>• Integration solutions emerging</li>
            </ul>
          </AnimatedText>

          <AnimatedText delay={0.3} className="bg-white border border-[#E5E0DB] rounded-lg p-6">
            <div className="text-[#494E4C] font-bold text-lg mb-2">2027-2028</div>
            <div className="text-xl font-semibold text-[#1C2321] mb-4">Decision Point</div>
            <ul className="space-y-2 text-sm text-[#494E4C]">
              <li>• First-movers have 2-3 years ROI data</li>
              <li>• Successful firms scale aggressively</li>
              <li>• Failed firms abandon for 5+ years</li>
              <li>• Market separation begins</li>
            </ul>
          </AnimatedText>

          <AnimatedText delay={0.4} className="bg-[#1C2321] rounded-lg p-6">
            <div className="text-[#CE4C0B] font-bold text-lg mb-2">2029+</div>
            <div className="text-xl font-semibold text-[#FCFAF8] mb-4">Bifurcation</div>
            <ul className="space-y-2 text-sm text-[#FCFAF8]/70">
              <li>• Early-movers: 5-10% productivity edge</li>
              <li>• Winners consolidate the market</li>
              <li>• Laggards struggle for capital, talent</li>
              <li>• Generational advantage locked in</li>
            </ul>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.5} className="mt-8 p-5 bg-[#CE4C0B]/5 border-l-4 border-[#CE4C0B] rounded-r">
          <p className="text-[#1C2321] font-medium text-lg">
            &ldquo;The firms that solve integration in 2025-2026 will own APAC CRE for a decade.&rdquo;
          </p>
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function ConvergingForcesSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2321] mb-2">
          Three Converging Forces
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#494E4C] mb-8" delay={0.1}>
          Why AI integration is non-optional within 24 months
        </AnimatedText>

        <div className="space-y-6">
          <AnimatedText delay={0.2} className="bg-white border border-[#E5E0DB] rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-[#CE4C0B]">1</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1C2321] mb-2">Institutional Capital Requires Data Confidence</h3>
                <p className="text-[#494E4C]">
                  Sovereign wealth, pensions, family offices demand audit-ready reporting and measurable decision frameworks.
                  Firms without data integration lose allocation to firms that have it.
                </p>
              </div>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.3} className="bg-white border border-[#E5E0DB] rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-[#CE4C0B]">2</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1C2321] mb-2">Regulatory Momentum Accelerating</h3>
                <p className="text-[#494E4C]">
                  Singapore ITM 2025 mandates digitized transactions. ESG reporting (net-zero 2050, green certifications) requires reliable data.
                  Compliance and competitive advantage are now aligned.
                </p>
              </div>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.4} className="bg-white border border-[#E5E0DB] rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-[#CE4C0B]">3</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1C2321] mb-2">Talent Exodus Makes Institutions Critical</h3>
                <p className="text-[#494E4C]">
                  Senior professionals retiring with 20+ years of local knowledge. Knowledge management is now a competitive asset.
                  AI institutionalizes expertise so it scales and persists.
                </p>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </Slide>
  );
}

// ============================================
// PART 5: THE OPPORTUNITY
// ============================================

export function OpportunitySlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#1C2321] p-8 md:p-16">
      <div className="max-w-4xl w-full text-center">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#FCFAF8] mb-8">
          The Gap = The Opportunity
        </AnimatedText>

        <AnimatedText delay={0.2} className="mb-10">
          <div className="grid grid-cols-3 gap-6">
            <div className="p-6 bg-[#FCFAF8]/5 rounded-lg">
              <div className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide mb-2">Available</div>
              <div className="text-2xl font-bold text-[#FCFAF8]">Unlimited Capital</div>
              <div className="text-sm text-[#FCFAF8]/60 mt-1">$106.6B deployed in 2025</div>
            </div>
            <div className="p-6 bg-[#FCFAF8]/5 rounded-lg">
              <div className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide mb-2">Available</div>
              <div className="text-2xl font-bold text-[#FCFAF8]">Mature Technology</div>
              <div className="text-sm text-[#FCFAF8]/60 mt-1">AI is no longer experimental</div>
            </div>
            <div className="p-6 bg-[#FCFAF8]/5 rounded-lg">
              <div className="text-[#CE4C0B] text-sm font-semibold uppercase tracking-wide mb-2">Available</div>
              <div className="text-2xl font-bold text-[#FCFAF8]">Clear Pressure</div>
              <div className="text-sm text-[#FCFAF8]/60 mt-1">Early adopters will dominate</div>
            </div>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.4} className="mb-10">
          <div className="text-6xl font-bold text-[#CE4C0B] mb-2">5%</div>
          <div className="text-xl text-[#FCFAF8]/70">success rate on AI projects</div>
        </AnimatedText>

        <AnimatedText delay={0.6}>
          <p className="text-lg text-[#FCFAF8] leading-relaxed max-w-2xl mx-auto">
            The gap between resource availability and execution capability is the defining opportunity.
            Those who understand <span className="text-[#CE4C0B]">fragmented data</span>, <span className="text-[#CE4C0B]">legacy systems</span>,
            <span className="text-[#CE4C0B]"> organizational skepticism</span>, and <span className="text-[#CE4C0B]">integration challenges</span> —
            and can help institutions navigate them — will shape the region&apos;s competitive landscape.
          </p>
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function CloseSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] relative overflow-hidden">
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(206, 76, 11, 0.08) 0%, rgba(206, 76, 11, 0) 60%)',
        }}
      />

      <div className="text-center z-10 px-8 max-w-3xl">
        <AnimatedText className="font-mono text-[#494E4C] text-lg mb-8 space-y-2">
          <div>USD 106.6B in capital.</div>
          <div>92% piloting.</div>
          <div>5% achieving.</div>
        </AnimatedText>

        <AnimatedText delay={0.3} className="mb-8">
          <p className="text-2xl text-[#1C2321] leading-relaxed">
            The problem isn&apos;t technology.<br />
            It&apos;s <span className="text-[#CE4C0B] font-semibold">integration</span>, <span className="text-[#CE4C0B] font-semibold">governance</span>, and <span className="text-[#CE4C0B] font-semibold">trust</span>.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.5} className="mb-10">
          <p className="text-xl text-[#494E4C]">
            Singapore is the beachhead.<br />
            The window is 24 months.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.7}>
          <p className="text-3xl font-bold text-[#1C2321]">
            Who closes the gap?
          </p>
        </AnimatedText>
      </div>
    </Slide>
  );
}

export function ProfileSlide() {
  const coreImpact = [
    { highlight: 'Accelerate AI adoption', text: 'from strategy to production' },
    { highlight: 'Build GenAI capabilities', text: 'RAG, Agents, and ML Ops' },
    { highlight: 'Drive enterprise transformation', text: 'with measurable ROI' },
  ];

  const experience = [
    { company: 'Cyaire', role: 'Principal & CTO' },
    { company: 'Cisco Systems', role: 'Regional Industry Lead (FSI)' },
    { company: 'Accenture, IBM, Orange, BT', role: '' },
  ];

  const skills = [
    'AI Transformation',
    'GenAI / RAG / Agents',
    'GTM Strategy',
    'Executive Advisory',
  ];

  return (
    <Slide className="flex items-center justify-center bg-[#FCFAF8] p-8 md:p-12">
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-12">
          {/* Left Column - Image & Basic Info */}
          <AnimatedText className="text-center md:text-left">
            {/* Portrait Image */}
            <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-6 bg-[#FCFAF8]">
              <img
                src="/images/profile-sketch.jpg"
                alt="Vijayakumar G.A."
                className="w-full h-auto mix-blend-multiply"
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-2 text-[#1C2321]">
              Vijayakumar<br />G.A.
            </h2>

            <p className="text-[#CE4C0B] text-base mb-4">
              CTO - AI Transformation
            </p>

            <div className="space-y-2 text-[#494E4C] text-sm flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Singapore</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>linkedin.com/in/vijayga</span>
              </div>
            </div>
          </AnimatedText>

          {/* Right Column */}
          <div>
            {/* Bio */}
            <AnimatedText delay={0.1} className="bg-[#1C2321]/5 border border-[#E5E0DB] rounded-lg p-5 mb-6">
              <p className="text-base leading-relaxed text-[#494E4C]">
                Market-facing APAC CTO-calibre technology executive at the
                intersection of AI Transformation, Technology Consulting, and regional Go-To-Market
                execution. Trusted advisor to senior customer executives across APAC.
              </p>
            </AnimatedText>

            {/* Core Impact & Experience */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Core Impact */}
              <AnimatedText delay={0.2}>
                <p className="text-xs tracking-[0.2em] text-[#494E4C] mb-3">CORE IMPACT</p>
                <ul className="space-y-2">
                  {coreImpact.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-[#CE4C0B] mt-0.5">•</span>
                      <span>
                        <strong className="text-[#1C2321]">{item.highlight}</strong>{' '}
                        <span className="text-[#494E4C]">{item.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </AnimatedText>

              {/* Experience */}
              <AnimatedText delay={0.3}>
                <p className="text-xs tracking-[0.2em] text-[#494E4C] mb-3">EXPERIENCE</p>
                <ul className="space-y-2">
                  {experience.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-[#494E4C] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span>
                        <strong className="text-[#1C2321]">{item.company}</strong>
                        {item.role && <span className="text-[#494E4C]"> — {item.role}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </AnimatedText>
            </div>

            {/* Skills */}
            <AnimatedText delay={0.4} className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 border border-[#1C2321] text-[#1C2321] rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
              <span className="px-3 py-1.5 bg-[#E5E0DB] text-[#494E4C] rounded-full text-sm">
                M.Eng — NUS
              </span>
            </AnimatedText>
          </div>
        </div>
      </div>
    </Slide>
  );
}
