'use client';

import { Slide } from '@/components/core';
import { AnimatedText } from '@/components/primitives';
import { motion } from 'framer-motion';

// Design System for SED-POV
// A calm, professional palette that conveys trust and clarity
// Primary: #1E3A5F (deep navy - authority, trust)
// Accent: #C45C26 (warm rust - selective emphasis)
// Background Light: #F7F6F3 (warm off-white)
// Background Dark: #1A1F2E (dark slate)
// Text Primary: #1C2024 (near black)
// Text Muted: #5A6068 (slate gray)

interface BulletPointProps {
  children: React.ReactNode;
  delay?: number;
}

function BulletPoint({ children, delay = 0 }: BulletPointProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-start gap-3 text-lg text-[#5A6068]"
    >
      <span className="text-[#C45C26] mt-1.5">—</span>
      <span>{children}</span>
    </motion.li>
  );
}

interface QuoteBlockProps {
  children: React.ReactNode;
  delay?: number;
}

function QuoteBlock({ children, delay = 0 }: QuoteBlockProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="border-l-4 border-[#C45C26] pl-6 py-2 my-8"
    >
      <p className="text-lg md:text-xl text-[#1C2024] italic leading-relaxed">
        {children}
      </p>
    </motion.blockquote>
  );
}

// ============================================
// SLIDE 1: TITLE / FRAMING THE PROBLEM
// ============================================

export function TitleSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#1A1F2E] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(30, 58, 95, 0.4) 0%, transparent 60%)',
        }}
      />

      <div className="text-center z-10 px-8 max-w-4xl">
        <AnimatedText as="h1" className="text-5xl md:text-6xl font-bold text-[#F7F6F3] mb-10 tracking-tight leading-tight">
          The Technical Close Is Where Trust Is Won (or Lost)
        </AnimatedText>

        <AnimatedText as="p" className="text-xl md:text-2xl text-[#F7F6F3]/70 leading-relaxed mb-12" delay={0.3}>
          Enterprise SaaS deals rarely fail because of weak products. They fail because decision-makers never reach a level of confidence they are willing to be accountable for.
        </AnimatedText>

        <AnimatedText delay={0.5}>
          <div className="inline-block border-t border-[#F7F6F3]/20 pt-6">
            <p className="text-lg text-[#F7F6F3]">Vijayakumar G.A.</p>
            <a
              href="https://linkedin.com/in/vijayga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#C45C26] hover:text-[#C45C26]/80 transition-colors"
            >
              linkedin.com/in/vijayga
            </a>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 2: THE INVISIBLE DECISION MOMENT
// ============================================

export function InvisibleDecisionSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F7F6F3] p-8 md:p-16">
      <div className="max-w-4xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2024] mb-4">
          The Invisible Decision Moment
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#5A6068] mb-8" delay={0.1}>
          Buying enterprise software is a career-risk decision.
        </AnimatedText>

        <QuoteBlock delay={0.2}>
          &ldquo;I am prepared to personally stand behind this decision.&rdquo;
        </QuoteBlock>

        <AnimatedText delay={0.4} className="mb-6">
          <p className="text-lg text-[#1C2024] font-medium mb-4">
            This decision is not driven by feature coverage. It is driven by perceived downside:
          </p>
        </AnimatedText>

        <ul className="space-y-3 mb-8">
          <BulletPoint delay={0.5}>Operational risk if the system fails under real conditions</BulletPoint>
          <BulletPoint delay={0.6}>Reputational risk if assumptions prove wrong</BulletPoint>
          <BulletPoint delay={0.7}>Organisational risk if delivery friction escalates</BulletPoint>
        </ul>

        <AnimatedText delay={0.8}>
          <div className="bg-[#1A1F2E] rounded-lg p-5">
            <p className="text-[#F7F6F3]">
              Once this threshold is crossed, deals close quickly. When it is not, deals stall—even when everything looks positive on paper. The buyer who says &ldquo;we need more time&rdquo; is rarely waiting for information. They are waiting for confidence.
            </p>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 3: CAPABILITY VS CONSEQUENCE (Merged 3+4)
// ============================================

export function CapabilityVsConsequenceSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#1A1F2E] p-8 md:p-16">
      <div className="max-w-4xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#F7F6F3] mb-4">
          Capability vs Consequence
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#F7F6F3]/60 mb-8" delay={0.1}>
          Most teams confuse validating capability with resolving consequence.
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <AnimatedText delay={0.2}>
            <div className="bg-[#F7F6F3]/5 border border-[#F7F6F3]/20 rounded-lg p-5">
              <div className="text-[#C45C26] font-semibold text-sm uppercase tracking-wide mb-3">
                What teams celebrate
              </div>
              <ul className="space-y-2 text-[#F7F6F3]/70 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#5A6068]">•</span> Demo runs smoothly</li>
                <li className="flex items-start gap-2"><span className="text-[#5A6068]">•</span> POC meets success criteria</li>
                <li className="flex items-start gap-2"><span className="text-[#5A6068]">•</span> No open technical objections</li>
                <li className="flex items-start gap-2"><span className="text-[#5A6068]">•</span> Buyer says &ldquo;looks good technically&rdquo;</li>
              </ul>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <div className="bg-[#C45C26]/10 border border-[#C45C26]/30 rounded-lg p-5">
              <div className="text-[#C45C26] font-semibold text-sm uppercase tracking-wide mb-3">
                What actually closes deals
              </div>
              <ul className="space-y-2 text-[#F7F6F3] text-sm">
                <li className="flex items-start gap-2"><span className="text-[#C45C26]">1</span> Key risks identified and acknowledged</li>
                <li className="flex items-start gap-2"><span className="text-[#C45C26]">2</span> Unknowns bounded, not ignored</li>
                <li className="flex items-start gap-2"><span className="text-[#C45C26]">3</span> Trade-offs explicit and understood</li>
                <li className="flex items-start gap-2"><span className="text-[#C45C26]">4</span> Failure modes discussed and accepted</li>
              </ul>
            </div>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.5}>
          <div className="border-l-4 border-[#C45C26] pl-6 py-2">
            <p className="text-xl text-[#F7F6F3]/90 leading-relaxed">
              The outcome is not excitement—it is <span className="text-[#C45C26] font-medium">informed confidence</span>.
              Buyers move forward not because they believe nothing will go wrong, but because they understand what might go wrong and why it is acceptable.
            </p>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 4: WHY DEMOS AND POCS CREATE FALSE CONFIDENCE (Merged 5+6)
// ============================================

export function FalseConfidenceSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F7F6F3] p-8 md:p-16">
      <div className="max-w-4xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2024] mb-4">
          Why Demos and POCs Create False Confidence
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#5A6068] mb-8" delay={0.1}>
          Many failed deals had excellent demos and credible architectures. They failed because these validation activities systematically avoid the questions buyers actually need answered.
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            { problem: 'Optimise for clarity', reality: 'Real environments are messy' },
            { problem: 'Use curated data', reality: 'Production data has gaps and anomalies' },
            { problem: 'Narrow success criteria', reality: 'Edge cases determine actual success' },
            { problem: 'Avoid governance complexity', reality: 'Compliance kills more projects than technology' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="bg-white border border-[#E5E0DB] rounded-lg p-4"
            >
              <div className="text-[#1C2024] font-medium mb-1">{item.problem}</div>
              <div className="text-sm text-[#5A6068]">But {item.reality.toLowerCase()}</div>
            </motion.div>
          ))}
        </div>

        <AnimatedText delay={0.6}>
          <div className="bg-[#1A1F2E] rounded-lg p-5">
            <p className="text-[#F7F6F3] mb-3">
              This reduces uncertainty for the <span className="text-[#C45C26]">seller</span> but leaves residual anxiety for the <span className="text-[#C45C26]">buyer</span>.
            </p>
            <p className="text-[#F7F6F3]/80 text-sm">
              A POC should not answer &ldquo;can this work?&rdquo; It should answer <span className="text-[#C45C26]">&ldquo;what breaks first, and why?&rdquo;</span> Without that, confidence is borrowed, not earned.
            </p>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 5: WHAT EXPERIENCED BUYERS ARE EVALUATING
// ============================================

export function ExperiencedBuyersSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F7F6F3] p-8 md:p-16">
      <div className="max-w-4xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2024] mb-4">
          What Experienced Buyers Are Actually Evaluating
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#5A6068] mb-8" delay={0.1}>
          Senior buyers have seen demos before. They are not evaluating your product. They are evaluating your judgement.
        </AnimatedText>

        <div className="space-y-4 mb-8">
          {[
            { label: 'Omissions', desc: 'What the team chooses not to demonstrate', signal: 'Are they hiding limitations or genuinely focused?' },
            { label: 'Transparency', desc: 'How openly limitations are discussed', signal: 'Do they volunteer constraints or wait to be caught?' },
            { label: 'Candour', desc: 'Whether risks are acknowledged calmly or defensively', signal: 'Will they be honest when things go wrong post-sale?' },
            { label: 'Judgment', desc: 'How trade-offs are explained under pressure', signal: 'Do they understand our business, or just their product?' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="bg-white border border-[#E5E0DB] rounded-lg p-4"
            >
              <div className="flex items-start gap-4">
                <span className="text-[#C45C26] font-semibold text-sm uppercase tracking-wide min-w-[100px] mt-1">
                  {item.label}
                </span>
                <div>
                  <span className="text-[#1C2024]">{item.desc}</span>
                  <div className="text-sm text-[#5A6068] mt-1 italic">&ldquo;{item.signal}&rdquo;</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedText delay={0.7}>
          <div className="bg-[#1E3A5F] rounded-lg p-5">
            <p className="text-[#F7F6F3] leading-relaxed">
              They are assessing the <span className="text-[#C45C26] font-medium">judgement, honesty, and maturity</span> of the team they will depend on post-sale. A polished demo from a defensive team loses to an honest conversation from a credible one.
            </p>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 6: THE MULTI-STAKEHOLDER REALITY
// ============================================

export function MultiStakeholderSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#1A1F2E] p-8 md:p-16">
      <div className="max-w-4xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#F7F6F3] mb-4">
          The Multi-Stakeholder Reality
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#F7F6F3]/60 mb-8" delay={0.1}>
          You do not have one technical close. You have several—each with different risk tolerances and political positions.
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            { persona: 'IT / Security', concern: 'Compliance, integration risk, maintenance burden', hidden: 'May want to kill the deal to protect their team\'s relevance' },
            { persona: 'Business Users', concern: 'Workflow disruption, learning curve, daily friction', hidden: 'Often excluded from technical discussions but will determine adoption' },
            { persona: 'Finance', concern: 'ROI defensibility, hidden costs, vendor lock-in', hidden: 'Needs ammunition to defend the spend to the board' },
            { persona: 'Executive Sponsor', concern: 'Strategic alignment, political exposure, timeline', hidden: 'May have oversold the project internally to get budget' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="bg-[#F7F6F3]/5 border border-[#F7F6F3]/20 rounded-lg p-4"
            >
              <div className="text-[#C45C26] font-semibold text-sm uppercase tracking-wide mb-2">
                {item.persona}
              </div>
              <div className="text-[#F7F6F3] text-sm mb-2">{item.concern}</div>
              <div className="text-[#F7F6F3]/50 text-xs italic">{item.hidden}</div>
            </motion.div>
          ))}
        </div>

        <AnimatedText delay={0.7}>
          <div className="border-l-4 border-[#C45C26] pl-6 py-3">
            <p className="text-[#F7F6F3]">
              Each stakeholder can independently stall or kill a deal. A technical close with the evaluator means nothing if the CISO has unresolved concerns. <span className="text-[#F7F6F3]/60">Map the buying committee. Close each one.</span>
            </p>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 7: THE DEMO-TO-DELIVERY GAP
// ============================================

export function DemoToDeliveryGapSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F7F6F3] p-8 md:p-16">
      <div className="max-w-4xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2024] mb-4">
          The Demo-to-Delivery Gap
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#5A6068] mb-8" delay={0.1}>
          The most damaging trust failures occur after contracts are signed—when sales assumptions meet delivery reality.
        </AnimatedText>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <AnimatedText delay={0.2}>
            <div className="text-center p-5 bg-white border border-[#E5E0DB] rounded-lg">
              <div className="text-sm text-[#5A6068] uppercase tracking-wide mb-2">Pre-Sales Incentive</div>
              <div className="text-xl text-[#1C2024] font-medium">Prioritise <span className="text-[#C45C26]">momentum</span></div>
              <div className="text-sm text-[#5A6068] mt-2">Measured on deal velocity and win rate</div>
            </div>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <div className="text-center p-5 bg-white border border-[#E5E0DB] rounded-lg">
              <div className="text-sm text-[#5A6068] uppercase tracking-wide mb-2">Delivery Incentive</div>
              <div className="text-xl text-[#1C2024] font-medium">Prioritise <span className="text-[#C45C26]">feasibility</span></div>
              <div className="text-sm text-[#5A6068] mt-2">Measured on margin and client satisfaction</div>
            </div>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.4} className="mb-6">
          <div className="bg-[#1A1F2E] rounded-lg p-5">
            <p className="text-[#F7F6F3]/80 italic mb-3">
              &ldquo;Sales assumptions meet delivery reality. Scope ambiguity becomes visible. &lsquo;That wasn&apos;t what we expected&rsquo; conversations begin.&rdquo;
            </p>
            <p className="text-[#F7F6F3] text-sm">
              When these incentives are not reconciled before signing—often because a competitor is circling—trust erodes rapidly. The buyer feels misled. The delivery team feels set up to fail.
            </p>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.6}>
          <p className="text-[#5A6068] text-sm border-t border-[#E5E0DB] pt-4">
            <span className="text-[#1C2024] font-medium">The fix:</span> Require delivery sign-off before commercial close. If delivery would not thank you for this deal, the deal is not ready.
          </p>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 8: THE SE AS RISK MANAGER (Merged 11+12)
// ============================================

export function SEAsRiskManagerSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#1A1F2E] p-8 md:p-16">
      <div className="max-w-4xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#F7F6F3] mb-4">
          The SE as Risk Manager
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#F7F6F3]/60 mb-8" delay={0.1}>
          Solutions Engineering is not about making the product look good. It is a risk management function disguised as technical sales.
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            { action: 'Surface constraints early', outcome: 'Prevents scope explosions post-sale' },
            { action: 'Translate ambiguity into explicit decisions', outcome: 'Creates accountability before contracts' },
            { action: 'Make trade-offs visible and deliberate', outcome: 'Reduces "that\'s not what we expected"' },
            { action: 'Reduce future regret for both sides', outcome: 'Protects renewals and references' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="bg-[#F7F6F3]/5 border border-[#F7F6F3]/20 rounded-lg p-4"
            >
              <div className="text-[#F7F6F3] font-medium mb-1">{item.action}</div>
              <div className="text-[#F7F6F3]/60 text-sm">{item.outcome}</div>
            </motion.div>
          ))}
        </div>

        <AnimatedText delay={0.6} className="mb-6">
          <div className="border-l-4 border-[#C45C26] pl-6 py-3">
            <p className="text-[#F7F6F3] font-medium mb-2">Why scoping is a trust signal:</p>
            <p className="text-[#F7F6F3]/80 text-sm">
              Most delivery failures originate in scoping that is <span className="text-[#C45C26]">vague</span> (to preserve momentum), <span className="text-[#C45C26]">optimistic</span> (to maintain enthusiasm), or <span className="text-[#C45C26]">deferred</span> (to avoid discomfort). Rigorous scoping tells the buyer their risk is being taken seriously.
            </p>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.8}>
          <div className="bg-[#1E3A5F] rounded-lg p-4 text-center">
            <p className="text-[#F7F6F3]">
              A strong technical close protects not just the deal—but the relationship that follows.
            </p>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 9: THE POWER OF "NO"
// ============================================

export function PowerOfNoSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F7F6F3] p-8 md:p-16">
      <div className="max-w-4xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2024] mb-4">
          The Power of &ldquo;No&rdquo;
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#5A6068] mb-6" delay={0.1}>
          Sometimes the strongest technical close is recommending the buyer not proceed.
        </AnimatedText>

        <AnimatedText delay={0.2} className="mb-6">
          <div className="bg-[#1A1F2E] rounded-lg p-5">
            <p className="text-[#F7F6F3]/90 italic mb-3">
              A financial services firm passed every technical gate, had executive sponsorship, and closed in under 90 days. Within six months, the project was in escalation. Data quality assumptions made during the POC did not hold at production scale. The VP who championed the deal was reassigned.
            </p>
            <p className="text-[#F7F6F3]/60 text-sm">
              The SE knew the data was concerning. The timeline was aggressive. But the deal had momentum, a competitor was circling, and the quarter was ending.
            </p>
          </div>
        </AnimatedText>

        <div className="space-y-3 mb-6">
          {[
            'Walking away from a bad-fit deal protects the relationship you might have later',
            'Qualifying out builds more trust than qualifying in under pressure',
            'The deals you decline define your reputation as much as the deals you win',
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="flex items-start gap-3"
            >
              <span className="text-[#C45C26] mt-1">—</span>
              <span className="text-[#1C2024]">{item}</span>
            </motion.div>
          ))}
        </div>

        <AnimatedText delay={0.7}>
          <p className="text-[#5A6068] border-t border-[#E5E0DB] pt-4">
            A buyer who hears &ldquo;this is not right for you&rdquo; remembers it. They come back. They refer. The short-term loss becomes a long-term asset.
          </p>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 10: WHY THIS IS A LEADERSHIP PROBLEM (Merged 14+15)
// ============================================

export function LeadershipProblemSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#1A1F2E] p-8 md:p-16">
      <div className="max-w-4xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#F7F6F3] mb-4">
          Why This Is a Leadership Problem
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#F7F6F3]/60 mb-8" delay={0.1}>
          Client success is largely determined before contracts are signed. By the time onboarding starts, expectations are fixed, trust levels are set, and CS teams inherit what pre-sales created.
        </AnimatedText>

        <AnimatedText delay={0.2} className="mb-6">
          <p className="text-[#F7F6F3] font-medium mb-3">If leaders care about:</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              'Deal quality over deal volume',
              'Retention and expansion',
              'Referenceable customers',
              'Long-term brand credibility',
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                className="bg-[#1E3A5F] rounded-lg p-3"
              >
                <span className="text-[#F7F6F3] text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedText>

        <AnimatedText delay={0.6} className="mb-6">
          <div className="border-l-4 border-[#C45C26] pl-6 py-3">
            <p className="text-[#F7F6F3] font-medium mb-2">Then the technical close requires:</p>
            <ul className="space-y-2 text-[#F7F6F3]/80 text-sm">
              <li className="flex items-start gap-2"><span className="text-[#C45C26]">→</span> Delivery sign-off before commercial close</li>
              <li className="flex items-start gap-2"><span className="text-[#C45C26]">→</span> SE empowerment to slow down or walk away</li>
              <li className="flex items-start gap-2"><span className="text-[#C45C26]">→</span> Metrics that reward deal quality, not just velocity</li>
              <li className="flex items-start gap-2"><span className="text-[#C45C26]">→</span> Post-close reviews that trace problems to pre-sales decisions</li>
            </ul>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.8}>
          <div className="bg-[#C45C26]/10 border border-[#C45C26]/30 rounded-lg p-4 text-center">
            <p className="text-[#F7F6F3]">
              The technical close must be treated as a <span className="text-[#C45C26] font-medium">leadership responsibility</span>, not a functional task delegated without oversight.
            </p>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 11: THE TECHNICAL CLOSE CHECKLIST
// ============================================

export function ChecklistSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#F7F6F3] p-8 md:p-16">
      <div className="max-w-4xl w-full">
        <AnimatedText as="h2" className="text-4xl font-bold text-[#1C2024] mb-4">
          The Technical Close Checklist
        </AnimatedText>
        <AnimatedText as="p" className="text-lg text-[#5A6068] mb-8" delay={0.1}>
          Before moving to commercial close, verify:
        </AnimatedText>

        <div className="space-y-3 mb-8">
          {[
            { q: 'Would delivery thank us for this deal?', sub: 'Have they reviewed scope and signed off?' },
            { q: 'Were material risks surfaced early?', sub: 'Can you list the top 3 implementation risks and buyer acknowledgment?' },
            { q: 'Does the buyer understand what they now own?', sub: 'Can they articulate the trade-offs they accepted?' },
            { q: 'Is each stakeholder closed?', sub: 'IT, Security, Finance, Business, Executive—all aligned?' },
            { q: 'Have you stress-tested assumptions?', sub: 'Data quality, scale, integration, governance—validated against reality?' },
            { q: 'Could you walk away?', sub: 'If this deal fails, would you have seen it coming?' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
              className="flex items-start gap-4 bg-white border border-[#E5E0DB] rounded-lg p-4"
            >
              <span className="text-[#C45C26] text-lg font-bold mt-0.5">{i + 1}</span>
              <div>
                <div className="text-[#1C2024] font-medium">{item.q}</div>
                <div className="text-sm text-[#5A6068]">{item.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedText delay={0.7}>
          <div className="bg-[#1A1F2E] rounded-lg p-5 text-center">
            <p className="text-[#F7F6F3]">
              If any answer is unclear, confidence was <span className="text-[#C45C26] font-medium">deferred</span>—not resolved.
            </p>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}

// ============================================
// SLIDE 12: CLOSING PERSPECTIVE
// ============================================

export function ClosingSlide() {
  return (
    <Slide className="flex items-center justify-center bg-[#1A1F2E] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 80%, rgba(196, 92, 38, 0.15) 0%, transparent 50%)',
        }}
      />

      <div className="text-center z-10 px-8 max-w-4xl">
        <AnimatedText as="p" className="text-lg text-[#F7F6F3]/50 uppercase tracking-widest mb-8">
          In Enterprise SaaS
        </AnimatedText>

        <AnimatedText as="h2" className="text-4xl md:text-5xl font-bold text-[#F7F6F3] mb-4" delay={0.2}>
          Trust is not built by confidence.
        </AnimatedText>

        <AnimatedText as="h2" className="text-4xl md:text-5xl font-bold text-[#C45C26] mb-12" delay={0.4}>
          It is built by clarity.
        </AnimatedText>

        <AnimatedText delay={0.6}>
          <div className="border-t border-[#F7F6F3]/20 pt-8 max-w-2xl mx-auto">
            <p className="text-xl text-[#F7F6F3]/80 leading-relaxed">
              The technical close is not about proving that a solution works. It is about ensuring no one is surprised later.
            </p>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.8}>
          <div className="mt-12">
            <p className="text-base text-[#F7F6F3]/70">Vijayakumar G.A.</p>
            <a
              href="https://linkedin.com/in/vijayga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#C45C26] hover:text-[#C45C26]/80 transition-colors"
            >
              linkedin.com/in/vijayga
            </a>
          </div>
        </AnimatedText>
      </div>
    </Slide>
  );
}
