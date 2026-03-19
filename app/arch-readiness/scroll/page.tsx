'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  HeroSection,
  ParadoxSection,
  RootCauseSection,
  OperatingModelSection,
  AISection,
  EvolutionSection,
  DataSection,
  ContrarianSection,
  EvidenceSection,
  PlaybookSection,
  TeamsSection,
  CodaSection,
} from './sections';

export default function ArchReadinessScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll overflow-x-hidden">
      {/* Amber progress bar — fixed, above nav */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-slate-100 z-50">
        <motion.div className="h-full bg-amber-500" style={{ width: progressWidth }} />
      </div>

      {/* Nav — fixed, below progress bar */}
      <nav className="fixed top-0.5 left-0 right-0 h-10 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-100 flex items-center justify-between px-8">
        <Link
          href="/arch-readiness"
          className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-light tracking-wide"
        >
          ← Slide deck
        </Link>
        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
          The Architecture of Readiness
        </span>
        <div className="w-24" />
      </nav>

      <main className="pt-10">
        <HeroSection />
        <ParadoxSection />
        <RootCauseSection />
        <OperatingModelSection />
        <AISection />
        <EvolutionSection />
        <DataSection />
        <ContrarianSection />
        <EvidenceSection />
        <PlaybookSection />
        <TeamsSection />
        <CodaSection />
      </main>
    </div>
  );
}
