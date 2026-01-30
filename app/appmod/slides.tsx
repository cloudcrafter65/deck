'use client';

import { Slide } from '@/components/core';
import { AnimatedText } from '@/components/primitives';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Globe,
  Target,
  DollarSign,
  Users,
  Calendar,
  ShieldCheck,
  Zap,
  Building2,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Clock,
  Handshake,
} from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function TitleSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-emerald-400 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-cyan-400 blur-3xl" />
      </div>

      <div className="text-center relative z-10 px-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
            <Layers className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-300 font-medium">Strategic Business Plan 2026–2028</span>
          </div>
        </motion.div>

        <AnimatedText as="h1" className="text-7xl font-bold text-white mb-6 tracking-tight">
          Application Modernization
        </AnimatedText>
        <AnimatedText as="h2" className="text-4xl font-light text-emerald-300 mb-8" delay={0.2}>
          Services
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-white/70 max-w-2xl mx-auto" delay={0.4}>
          Transforming legacy systems into cloud-native platforms through incremental, outcome-focused engagements
        </AnimatedText>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 flex items-center justify-center gap-8 text-white/60"
        >
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <span>SEA & APAC Focus</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/40" />
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            <span>Mid-Market Enterprise</span>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

export function ExecutiveSummarySlide() {
  const highlights = [
    { icon: Target, label: 'Target Contract', value: 'SGD 500k–1.5M', desc: 'per engagement' },
    { icon: TrendingUp, label: 'Gross Margin', value: '45%', desc: 'blended delivery' },
    { icon: Clock, label: 'Sales Cycle', value: '2–3 months', desc: 'discovery-led' },
    { icon: Calendar, label: 'Sprint Duration', value: '8–12 weeks', desc: 'thin-slice delivery' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-slate-50 p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="h2" className="text-5xl font-bold text-slate-900 mb-4">
          Executive Summary
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-slate-600 mb-12 max-w-3xl" delay={0.1}>
          A specialized consulting firm delivering incremental cloud-native transformations through measurable, time-boxed engagements
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
            >
              <item.icon className="w-8 h-8 text-emerald-600 mb-4" />
              <p className="text-sm text-slate-500 mb-1">{item.label}</p>
              <p className="text-3xl font-bold text-slate-900">{item.value}</p>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-emerald-900 rounded-2xl p-8 text-white"
        >
          <h3 className="text-xl font-semibold mb-4">Year 1 Goals</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-emerald-300 text-sm mb-1">Revenue Target</p>
              <p className="text-2xl font-bold">SGD 500–600k</p>
            </div>
            <div>
              <p className="text-emerald-300 text-sm mb-1">New Clients</p>
              <p className="text-2xl font-bold">2–3 signed</p>
            </div>
            <div>
              <p className="text-emerald-300 text-sm mb-1">Team Scale</p>
              <p className="text-2xl font-bold">2 principals + 3–5 engineers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

export function MarketOpportunitySlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="p" className="text-emerald-400 font-medium mb-4 tracking-wide uppercase">
          Market Opportunity
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-white mb-12" delay={0.1}>
          Global Application Modernization Market
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center mb-8">
              <p className="text-7xl font-bold text-white mb-2">$20.82B</p>
              <p className="text-xl text-white/60">Global Market (2024)</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <TrendingUp className="w-8 h-8 text-emerald-400" />
                <div>
                  <p className="text-3xl font-bold text-white">16.8%</p>
                  <p className="text-white/60">CAGR through 2034</p>
                </div>
              </div>
              <p className="text-white/50 text-sm">
                Driven by cloud-first strategies, legacy constraints, and AI readiness requirements
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Key Demand Drivers</h3>
            {[
              { pct: '89%', text: 'APAC enterprises have cloud adoption policies' },
              { pct: '78%', text: 'Plan to invest in AI/ML capabilities' },
              { pct: '30–40%', text: 'Run cost reduction over 3–5 years' },
              { pct: '69%', text: 'Have migrated >50% of workloads to cloud' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-4 bg-white/5 rounded-xl p-4"
              >
                <span className="text-2xl font-bold text-emerald-400 w-24">{item.pct}</span>
                <span className="text-white/80">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function MarketGrowthSlide() {
  const regions = [
    { region: 'Global', size: '$20.82B', cagr: '16.8%', color: 'bg-slate-500' },
    { region: 'APAC', size: '$8.2B', cagr: '17.4%', color: 'bg-emerald-500', highlight: true },
    { region: 'SEA', size: '$3.1B', cagr: '16.2%', color: 'bg-teal-500' },
    { region: 'Singapore', size: '$0.35B', cagr: '10.8%', color: 'bg-cyan-500' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="p" className="text-emerald-600 font-medium mb-4 tracking-wide uppercase">
          Regional Analysis
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-slate-900 mb-4" delay={0.1}>
          APAC: Fastest Growing Region
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-slate-600 mb-12" delay={0.2}>
          High digitalization investments and rapid cloud adoption drive growth
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {regions.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`flex items-center gap-6 p-6 rounded-2xl ${
                item.highlight ? 'bg-emerald-50 border-2 border-emerald-200' : 'bg-slate-50'
              }`}
            >
              <div className={`w-4 h-16 rounded-full ${item.color}`} />
              <div className="flex-1">
                <p className="text-2xl font-bold text-slate-900">{item.region}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-slate-900">{item.size}</p>
                <p className="text-slate-500">Market Size (2024)</p>
              </div>
              <div className="text-right w-32">
                <p className={`text-2xl font-bold ${item.highlight ? 'text-emerald-600' : 'text-slate-700'}`}>
                  {item.cagr}
                </p>
                <p className="text-slate-500">CAGR</p>
              </div>
              {item.highlight && (
                <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Target
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Slide>
  );
}

export function IndustryAnalysisSlide() {
  const industries = [
    { name: 'Banking & Financial Services', legacy: '70%+', urgency: 'Critical', opportunity: 'Largest', color: 'emerald' },
    { name: 'Retail & E-commerce', legacy: '60–70%', urgency: 'High', opportunity: 'Large', color: 'teal' },
    { name: 'Insurance & Wealth', legacy: '55%', urgency: 'High', opportunity: 'Large', color: 'cyan' },
    { name: 'Manufacturing & Supply Chain', legacy: '50%', urgency: 'Medium–High', opportunity: 'Emerging', color: 'slate' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-slate-900 p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="p" className="text-emerald-400 font-medium mb-4 tracking-wide uppercase">
          Industry Segments
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-white mb-12" delay={0.1}>
          Where Demand Is Highest
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{industry.name}</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide mb-1">Legacy Trapped</p>
                  <p className="text-lg font-bold text-white">{industry.legacy}</p>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide mb-1">Urgency</p>
                  <p className={`text-lg font-bold ${
                    industry.urgency === 'Critical' ? 'text-red-400' :
                    industry.urgency === 'High' ? 'text-amber-400' : 'text-emerald-400'
                  }`}>{industry.urgency}</p>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide mb-1">Opportunity</p>
                  <p className="text-lg font-bold text-emerald-400">{industry.opportunity}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 p-6 bg-emerald-500/20 border border-emerald-500/30 rounded-xl"
        >
          <p className="text-emerald-300 font-medium">
            <Building2 className="w-5 h-5 inline mr-2" />
            Mid-market enterprises (USD 100M–1B revenue) represent the sweet spot: budget authority is local, willingness to work with specialists
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

export function CompetitiveLandscapeSlide() {
  const competitors = [
    {
      name: 'Global SIs',
      examples: 'Accenture, Deloitte, TCS',
      strength: 'Scale & brand',
      weakness: 'High cost, long cycles',
      threat: 'Moderate'
    },
    {
      name: 'Cloud Specialists',
      examples: 'Thoughtworks, Sapient',
      strength: 'Modern methods',
      weakness: 'Limited SEA presence',
      threat: 'High'
    },
    {
      name: 'Local Boutiques',
      examples: 'Regional players',
      strength: 'Cost competitive',
      weakness: 'Inconsistent quality',
      threat: 'Moderate'
    },
    {
      name: 'Vendor Practices',
      examples: 'AWS ProServe, MS Services',
      strength: 'Deep integration',
      weakness: 'Vendor bias',
      threat: 'Low'
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="p" className="text-emerald-600 font-medium mb-4 tracking-wide uppercase">
          Competitive Landscape
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-slate-900 mb-12" delay={0.1}>
          Know Your Competition
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {competitors.map((comp, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-slate-50 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{comp.name}</h3>
                  <p className="text-sm text-slate-500">{comp.examples}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  comp.threat === 'High' ? 'bg-red-100 text-red-700' :
                  comp.threat === 'Moderate' ? 'bg-amber-100 text-amber-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {comp.threat} threat
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-400 uppercase mb-1">Strength</p>
                  <p className="text-sm text-slate-700">{comp.strength}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase mb-1">Weakness</p>
                  <p className="text-sm text-slate-700">{comp.weakness}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Slide>
  );
}

export function PositioningSlide() {
  const dimensions = [
    { dimension: 'Time-to-value', ours: '8–12 weeks', others: '3–12 months' },
    { dimension: 'Cost efficiency', ours: 'Balanced hybrid', others: 'High or variable' },
    { dimension: 'Industry domain', ours: 'Deep verticals', others: 'Generic or shallow' },
    { dimension: 'Risk management', ours: 'Structured + agile', others: 'Heavy or informal' },
    { dimension: 'Vendor independence', ours: 'Partner-enabled', others: 'Locked or biased' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-emerald-900 to-teal-900 p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="p" className="text-emerald-300 font-medium mb-4 tracking-wide uppercase">
          Competitive Positioning
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-white mb-4" delay={0.1}>
          The Trusted Specialist Niche
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-white/70 mb-12" delay={0.2}>
          Independent, outcomes-focused, efficient execution
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-3 bg-white/10 p-4 text-sm font-medium text-white/80">
            <div>Dimension</div>
            <div className="text-center">Our Approach</div>
            <div className="text-center">Competitors</div>
          </div>
          {dimensions.map((row, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="grid grid-cols-3 p-4 border-t border-white/10 items-center"
            >
              <div className="text-white font-medium">{row.dimension}</div>
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-emerald-500 rounded-lg text-white font-medium">
                  {row.ours}
                </span>
              </div>
              <div className="text-center text-white/50">{row.others}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Slide>
  );
}

export function BusinessModelSlide() {
  const pricing = [
    { type: 'Assessment/Portfolio Scan', price: 'SGD 15–25k', duration: '2–4 weeks' },
    { type: 'Thin-Slice Sprint', price: 'SGD 80–200k', duration: '8–12 weeks' },
    { type: 'Operating Model/Enablement', price: 'SGD 50–150k', duration: '4–8 weeks' },
    { type: 'Retainer/Ongoing Support', price: 'SGD 25–50k/mo', duration: 'Continuous' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="p" className="text-emerald-600 font-medium mb-4 tracking-wide uppercase">
          Business Model
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-slate-900 mb-12" delay={0.1}>
          Revenue Model & Pricing
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Typical Engagement</h3>
            <div className="bg-emerald-50 rounded-2xl p-8 mb-6">
              <p className="text-4xl font-bold text-emerald-700 mb-2">SGD 500k–1.5M</p>
              <p className="text-slate-600">across 12–18 months (3–5 thin-slice sprints)</p>
            </div>
            <div className="space-y-3">
              {pricing.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div>
                    <p className="font-medium text-slate-900">{item.type}</p>
                    <p className="text-sm text-slate-500">{item.duration}</p>
                  </div>
                  <p className="text-lg font-bold text-emerald-600">{item.price}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Delivery Model</h3>
            <div className="space-y-4">
              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-emerald-400" />
                  <span className="font-semibold">Hybrid Onshore–Offshore</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-emerald-300 mb-1">Onshore (20%)</p>
                    <p className="text-white/80">Principals + Senior Architects</p>
                    <p className="text-white/50 text-xs mt-1">SGD 150–200/hr</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-emerald-300 mb-1">Offshore (80%)</p>
                    <p className="text-white/80">Engineers + Partner Network</p>
                    <p className="text-white/50 text-xs mt-1">SGD 30–50/hr</p>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-amber-800 font-medium">
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  Blended rate: ~SGD 85/hr — competitive for SEA/APAC
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function UnitEconomicsSlide() {
  const waterfall = [
    { label: 'Revenue', value: '500k', pct: '100%', color: 'bg-emerald-500' },
    { label: 'Direct Delivery Costs', value: '(275k)', pct: '55%', color: 'bg-red-400', indent: true },
    { label: 'Gross Profit', value: '225k', pct: '45%', color: 'bg-emerald-600', bold: true },
    { label: 'Overhead Allocation', value: '(95k)', pct: '19%', color: 'bg-red-300', indent: true },
    { label: 'Operating Profit', value: '130k', pct: '26%', color: 'bg-emerald-700', bold: true },
  ];

  return (
    <Slide className="flex items-center justify-center bg-slate-50 p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="p" className="text-emerald-600 font-medium mb-4 tracking-wide uppercase">
          Unit Economics
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-slate-900 mb-4" delay={0.1}>
          P&L per SGD 500k Engagement
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-slate-600 mb-12" delay={0.2}>
          Target 45% gross margin with balanced hybrid model
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-2xl p-8 shadow-sm"
        >
          {waterfall.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`flex items-center py-4 ${i > 0 ? 'border-t border-slate-100' : ''} ${item.indent ? 'pl-8' : ''}`}
            >
              <div className={`w-3 h-3 rounded-full ${item.color} mr-4`} />
              <span className={`flex-1 ${item.bold ? 'font-bold text-slate-900' : 'text-slate-700'}`}>
                {item.label}
              </span>
              <span className={`w-32 text-right ${item.bold ? 'font-bold text-slate-900' : 'text-slate-600'}`}>
                SGD {item.value}
              </span>
              <span className="w-20 text-right text-slate-400">{item.pct}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 grid grid-cols-3 gap-6"
        >
          <div className="bg-emerald-100 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-emerald-700">45%</p>
            <p className="text-sm text-emerald-600">Gross Margin</p>
          </div>
          <div className="bg-emerald-100 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-emerald-700">26%</p>
            <p className="text-sm text-emerald-600">Operating Margin</p>
          </div>
          <div className="bg-emerald-100 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-emerald-700">SGD 85/hr</p>
            <p className="text-sm text-emerald-600">Blended Rate</p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

export function SalesCycleSlide() {
  const months = [
    {
      month: 'Month 1',
      title: 'Lead Generation',
      activities: ['Warm introductions', 'Content discovery', 'Initial call', 'Pain validation']
    },
    {
      month: 'Month 2',
      title: 'Deep Dive',
      activities: ['Portfolio assessment', 'Technical discovery', 'Stakeholder alignment', 'Paid mini-discovery']
    },
    {
      month: 'Month 3',
      title: 'Close',
      activities: ['Proposal delivery', 'Negotiation', 'Contract signature', 'Team onboarding']
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-slate-900 p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="p" className="text-emerald-400 font-medium mb-4 tracking-wide uppercase">
          Sales Process
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-white mb-12" delay={0.1}>
          2–3 Month Sales Cycle
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {months.map((phase, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-white/50 text-sm">{phase.month}</p>
                    <p className="text-white font-semibold">{phase.title}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {phase.activities.map((activity, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/70 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
              {i < 2 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-emerald-400" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 grid grid-cols-3 gap-6"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-white">30–40%</p>
            <p className="text-white/50 text-sm">Inbound → Qualified</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">40–50%</p>
            <p className="text-white/50 text-sm">Qualified → Contract</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-400">12–20%</p>
            <p className="text-white/50 text-sm">Overall Conversion</p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

export function TargetCustomerSlide() {
  return (
    <Slide className="flex items-center justify-center bg-white p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="p" className="text-emerald-600 font-medium mb-4 tracking-wide uppercase">
          Go-To-Market
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-slate-900 mb-12" delay={0.1}>
          Ideal Customer Profile
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {[
              { label: 'Geography', value: 'Singapore, Malaysia, Indonesia, Thailand (primary); ANZ, HK, India (secondary)' },
              { label: 'Industry', value: 'BFSI (primary), Retail & E-commerce (primary), Manufacturing (secondary)' },
              { label: 'Company Size', value: 'USD 100M–1B revenue; IT budget SGD 5–30M/year' },
              { label: 'Buying Trigger', value: 'Regulatory pressure, digital competition, cost containment, AI ambitions' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-5">
                <p className="text-sm text-slate-500 mb-1">{item.label}</p>
                <p className="text-slate-900 font-medium">{item.value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Key Personas</h3>
            <div className="space-y-4">
              {[
                { role: 'CIO/CTO', focus: 'Technical buy-in, architecture decisions' },
                { role: 'CFO', focus: 'ROI justification, cost management' },
                { role: 'Business Unit Head', focus: 'User experience, speed to market' },
              ].map((persona, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{persona.role}</p>
                    <p className="text-sm text-slate-500">{persona.focus}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-emerald-900 rounded-xl p-5 text-white">
              <h4 className="font-semibold mb-2">Lighthouse Strategy</h4>
              <p className="text-sm text-white/80">
                Focus on 1–2 lighthouse clients in Year 1 that can serve as proof points and references for future sales.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function GTMChannelsSlide() {
  const channels = [
    { name: 'Warm Introductions', pct: '30–40%', conversion: '40–50%', effort: '60%', primary: true },
    { name: 'Vendor Partnerships', pct: '20–30%', conversion: '30–40%', effort: 'Included above', primary: true },
    { name: 'Thought Leadership', pct: '15–25%', conversion: '20–30%', effort: '30%', primary: false },
    { name: 'Direct Outreach', pct: '10–20%', conversion: '15–25%', effort: 'Included above', primary: false },
    { name: 'Referral & Organic', pct: '10–15%', conversion: '50%+', effort: '10%', primary: false },
  ];

  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="p" className="text-emerald-400 font-medium mb-4 tracking-wide uppercase">
          Acquisition Channels
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-white mb-12" delay={0.1}>
          Sales & Marketing Mix
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {channels.map((channel, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`flex items-center gap-6 p-5 rounded-xl ${
                channel.primary ? 'bg-emerald-500/20 border border-emerald-500/30' : 'bg-white/5 border border-white/10'
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-white">{channel.name}</span>
                  {channel.primary && (
                    <span className="px-2 py-0.5 bg-emerald-500 rounded text-xs font-medium text-white">
                      Primary
                    </span>
                  )}
                </div>
              </div>
              <div className="text-center w-28">
                <p className="text-lg font-bold text-white">{channel.pct}</p>
                <p className="text-xs text-white/50">of deals</p>
              </div>
              <div className="text-center w-28">
                <p className="text-lg font-bold text-emerald-400">{channel.conversion}</p>
                <p className="text-xs text-white/50">conversion</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-white/60"
        >
          Year 1: Focus 60% effort on warm intros + partnerships to close 1–2 deals
        </motion.div>
      </div>
    </Slide>
  );
}

export function PartnershipStrategySlide() {
  return (
    <Slide className="flex items-center justify-center bg-white p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="p" className="text-emerald-600 font-medium mb-4 tracking-wide uppercase">
          Partnerships
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-slate-900 mb-12" delay={0.1}>
          Partner Ecosystem Strategy
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-6 text-white"
          >
            <Handshake className="w-10 h-10 mb-4 opacity-80" />
            <h3 className="text-xl font-bold mb-3">Cloud Vendors</h3>
            <p className="text-white/80 text-sm mb-4">AWS, Azure, GCP, Salesforce, ServiceNow</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Co-selling & lead sharing
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Funding & credits (SGD 50–500k/deal)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Migration Partner status
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl p-6 text-white"
          >
            <Layers className="w-10 h-10 mb-4 opacity-80" />
            <h3 className="text-xl font-bold mb-3">Technology Platforms</h3>
            <p className="text-white/80 text-sm mb-4">Kubernetes, Kong, DataDog, GitHub</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Delivery accelerator integration
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Customer discount codes
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Reference architectures
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl p-6 text-white"
          >
            <Globe className="w-10 h-10 mb-4 opacity-80" />
            <h3 className="text-xl font-bold mb-3">Advisory & Ecosystem</h3>
            <p className="text-white/80 text-sm mb-4">Gartner, Forrester, Industry Groups</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Speaking slots & visibility
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Analyst relationships
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Industry credibility
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 bg-slate-100 rounded-xl p-6"
        >
          <p className="text-slate-700">
            <strong>Timeline:</strong> Begin vendor discussions Q1 → Partner status by Q3–Q4 → Active co-selling by end of Year 1
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}

export function Year1MilestonesSlide() {
  const quarters = [
    {
      q: 'Q1',
      title: 'Foundation',
      items: ['5–10 warm introductions', 'Launch website & LinkedIn', 'Finalize offshore partners', 'Initiate vendor talks']
    },
    {
      q: 'Q2',
      title: 'First Deal',
      items: ['Close 1st paid assessment', '2–3 proposals submitted', 'Hire 2nd engineer', 'Partner status with 1 vendor']
    },
    {
      q: 'Q3',
      title: 'Execution',
      items: ['Begin thin-slice sprint', 'Close 2nd engagement', 'Scale to 3–4 engineers', 'Publish 1st case study']
    },
    {
      q: 'Q4',
      title: 'Consolidation',
      items: ['Complete 1st sprint to prod', 'SGD 500k+ revenue', 'Team at 4–5 engineers', 'Year 2 planning']
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-slate-900 p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="p" className="text-emerald-400 font-medium mb-4 tracking-wide uppercase">
          Execution Plan
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-white mb-12" delay={0.1}>
          Year 1 Quarterly Milestones
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {quarters.map((quarter, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                  {quarter.q}
                </span>
                <span className="text-white font-semibold">{quarter.title}</span>
              </div>
              <ul className="space-y-3">
                {quarter.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-white/70 text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Slide>
  );
}

export function TeamPlanSlide() {
  const team = [
    { role: 'Principal/Co-founder', fte: '2', cost: 'SGD 200–250k each', timeline: 'On-board now' },
    { role: 'Sales/Account Lead', fte: '0.5', cost: 'SGD 80k', timeline: 'Q2–Q3 (contractor)' },
    { role: 'Offshore Engineers', fte: '4–5', cost: 'SGD 120–150k total', timeline: 'Q1–Q4 progressive' },
    { role: 'Operations/Finance', fte: '0.5', cost: 'SGD 40k', timeline: 'Q1–Q2 (part-time)' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="p" className="text-emerald-600 font-medium mb-4 tracking-wide uppercase">
          Team & Organization
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-slate-900 mb-12" delay={0.1}>
          Year 1 Staffing Plan
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-slate-50 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 bg-slate-200 p-4 text-sm font-medium text-slate-600">
                <div>Role</div>
                <div className="text-center">FTE</div>
                <div className="text-center">Annual Cost</div>
                <div className="text-center">Timeline</div>
              </div>
              {team.map((row, i) => (
                <div key={i} className="grid grid-cols-4 p-4 border-t border-slate-200 items-center text-sm">
                  <div className="font-medium text-slate-900">{row.role}</div>
                  <div className="text-center text-slate-600">{row.fte}</div>
                  <div className="text-center text-slate-600">{row.cost}</div>
                  <div className="text-center text-slate-500 text-xs">{row.timeline}</div>
                </div>
              ))}
              <div className="grid grid-cols-4 p-4 border-t-2 border-slate-300 bg-slate-100">
                <div className="font-bold text-slate-900">Total (midpoint)</div>
                <div className="text-center font-bold text-slate-900">~7 FTE</div>
                <div className="text-center font-bold text-emerald-600">SGD 600–700k</div>
                <div></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Hybrid Delivery Model</h3>
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <h4 className="font-semibold text-emerald-900 mb-2">In-house Offshore (2–3)</h4>
                <p className="text-sm text-emerald-700">
                  India or Philippines. Direct hire for continuity, IP ownership, and team identity.
                </p>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <h4 className="font-semibold text-teal-900 mb-2">Partner Network (2–3)</h4>
                <p className="text-sm text-teal-700">
                  Scale on-demand for surges, specialized skills, and geographic coverage.
                </p>
              </div>
              <div className="bg-slate-100 rounded-xl p-5">
                <h4 className="font-semibold text-slate-900 mb-2">Governance</h4>
                <p className="text-sm text-slate-600">
                  Weekly stand-ups, code review gates, QA gates, escalation protocol. Delivery manager hired in Q2.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function FinancialProjectionsSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="p" className="text-emerald-400 font-medium mb-4 tracking-wide uppercase">
          Financial Projections
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-white mb-12" delay={0.1}>
          Year 1 (2026) Baseline
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-5 bg-white/10 p-4 text-sm font-medium text-white/70">
              <div>Metric</div>
              <div className="text-center">Q1</div>
              <div className="text-center">Q2</div>
              <div className="text-center">Q3</div>
              <div className="text-center">Q4</div>
            </div>
            {[
              { metric: 'Revenue (SGD k)', values: ['15', '85', '180', '220'] },
              { metric: 'Deals Closed', values: ['0', '1', '1', '1'] },
              { metric: 'Gross Profit (k)', values: ['7', '38', '81', '99'] },
              { metric: 'OpEx (SGD k)', values: ['220', '240', '260', '280'] },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-5 p-4 border-t border-white/10 text-sm">
                <div className="text-white/80">{row.metric}</div>
                {row.values.map((val, j) => (
                  <div key={j} className="text-center text-white">{val}</div>
                ))}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Full Year Summary</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-emerald-300 text-sm">Total Revenue</p>
                  <p className="text-2xl font-bold text-white">SGD 500k</p>
                </div>
                <div>
                  <p className="text-emerald-300 text-sm">Gross Margin</p>
                  <p className="text-2xl font-bold text-white">45%</p>
                </div>
                <div>
                  <p className="text-emerald-300 text-sm">Deals Closed</p>
                  <p className="text-2xl font-bold text-white">3</p>
                </div>
                <div>
                  <p className="text-emerald-300 text-sm">Cash Burn</p>
                  <p className="text-2xl font-bold text-red-400">(SGD 775k)</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Path to Profitability</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-white/70">
                  <span>Year 2 Revenue Target</span>
                  <span className="text-white font-medium">SGD 1.5–2M</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Breakeven Timeline</span>
                  <span className="text-emerald-400 font-medium">Late Y2 / Early Y3</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function RiskAnalysisSlide() {
  const risks = [
    {
      risk: 'Market Risk',
      desc: 'Mid-market may not prioritize incremental modernization',
      mitigation: 'Discovery-led sales with paid assessments; build case studies',
      level: 'Medium'
    },
    {
      risk: 'Execution Risk',
      desc: 'First delivery fails; poor offshore quality',
      mitigation: 'Proven methodology; QA gates; start with well-scoped thin slices',
      level: 'Medium'
    },
    {
      risk: 'Unit Economics',
      desc: '45% GM challenged by long sales cycles or scope creep',
      mitigation: 'Fixed-price discovery; disciplined scoping; change control',
      level: 'Medium'
    },
    {
      risk: 'Talent Risk',
      desc: 'Key person dependency; offshore attrition',
      mitigation: 'Document processes; invest in retention; diversify partners',
      level: 'Medium'
    },
  ];

  return (
    <Slide className="flex items-center justify-center bg-slate-50 p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="p" className="text-emerald-600 font-medium mb-4 tracking-wide uppercase">
          Risk Analysis
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-slate-900 mb-12" delay={0.1}>
          Key Risks & Mitigation
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {risks.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-500" />
                  <h3 className="text-lg font-bold text-slate-900">{item.risk}</h3>
                </div>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                  {item.level}
                </span>
              </div>
              <p className="text-slate-600 text-sm mb-4">{item.desc}</p>
              <div className="bg-emerald-50 rounded-lg p-4">
                <p className="text-xs text-emerald-600 font-medium uppercase tracking-wide mb-1">Mitigation</p>
                <p className="text-sm text-emerald-800">{item.mitigation}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Slide>
  );
}

export function FundingSlide() {
  const uses = [
    { item: 'Payroll', amount: 'SGD 600–700k', pct: '60%' },
    { item: 'Infrastructure & Tooling', amount: 'SGD 80–100k', pct: '8%' },
    { item: 'Marketing & Sales', amount: 'SGD 80–120k', pct: '10%' },
    { item: 'Working Capital & Other', amount: 'SGD 140–280k', pct: '22%' },
  ];

  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-emerald-900 to-teal-900 p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="p" className="text-emerald-300 font-medium mb-4 tracking-wide uppercase">
          Capital Requirements
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-white mb-12" delay={0.1}>
          Funding Plan
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center mb-8">
              <p className="text-6xl font-bold text-white mb-2">SGD 900k–1.2M</p>
              <p className="text-xl text-white/60">Total Funding Need (18 months)</p>
            </div>

            <div className="space-y-3">
              {uses.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                  <div className="flex-1">
                    <p className="text-white font-medium">{item.item}</p>
                  </div>
                  <p className="text-white/80">{item.amount}</p>
                  <div className="w-16 text-right">
                    <span className="text-emerald-300 font-medium">{item.pct}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Phased Approach</h3>

            <div className="bg-white/10 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">1</span>
                <span className="text-white font-semibold">Seed/Founder Capital</span>
              </div>
              <p className="text-white/70 text-sm ml-11">SGD 300–500k (Q1) — Team salaries, infrastructure, initial marketing</p>
            </div>

            <div className="bg-white/10 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">2</span>
                <span className="text-white font-semibold">Pre-seed / Angel Round</span>
              </div>
              <p className="text-white/70 text-sm ml-11">SGD 400–700k (Q2–Q3) — Scale team, accelerate partnerships, extend runway</p>
            </div>

            <div className="bg-white/10 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">3</span>
                <span className="text-white font-semibold">Revenue-Based / Follow-on</span>
              </div>
              <p className="text-white/70 text-sm ml-11">Optional (Q3–Q4) — If revenue tracking well, pursue RBF or small follow-on</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function SuccessMetricsSlide() {
  const metrics = [
    { category: 'Revenue & Growth', items: ['SGD 500k+ revenue', '3+ signed engagements', '1–2 completed thin slices'] },
    { category: 'Customer & Market', items: ['1–2 lighthouse clients', 'NPS > 50', '1–2 vendor partnerships', '1,000+ LinkedIn followers'] },
    { category: 'Operational', items: ['2 principals + 4–5 offshore', '95%+ on-time delivery', '45%+ gross margin'] },
    { category: 'Financial', items: ['SGD 400–700k seed raised', 'Path to Y2 profitability', '12+ months runway'] },
  ];

  return (
    <Slide className="flex items-center justify-center bg-white p-16">
      <div className="max-w-6xl w-full">
        <AnimatedText as="p" className="text-emerald-600 font-medium mb-4 tracking-wide uppercase">
          Success Criteria
        </AnimatedText>
        <AnimatedText as="h2" className="text-5xl font-bold text-slate-900 mb-12" delay={0.1}>
          Year 1 Success Metrics
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {metrics.map((group, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-slate-50 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 bg-emerald-900 rounded-xl p-6 text-white"
        >
          <h4 className="font-semibold mb-2">Year 2 Leading Indicators</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-emerald-300">New Clients</p>
              <p className="font-bold">6–8</p>
            </div>
            <div>
              <p className="text-emerald-300">ARR Target</p>
              <p className="font-bold">SGD 1.5–2M</p>
            </div>
            <div>
              <p className="text-emerald-300">Team Growth</p>
              <p className="font-bold">+2–3 principals</p>
            </div>
            <div>
              <p className="text-emerald-300">Verticals</p>
              <p className="font-bold">Expand to 2–3</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

export function EndSlide() {
  return (
    <Slide className="flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-emerald-400 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-cyan-400 blur-3xl" />
      </div>

      <div className="text-center relative z-10 px-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Zap className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
        </motion.div>

        <AnimatedText as="h2" className="text-6xl font-bold text-white mb-6">
          Ready to Transform
        </AnimatedText>
        <AnimatedText as="p" className="text-2xl text-emerald-300 mb-8" delay={0.2}>
          Application Modernization Services
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-white/60 max-w-2xl mx-auto" delay={0.4}>
          Incremental. Outcome-focused. Cloud-native.
        </AnimatedText>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 flex items-center justify-center gap-8"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-white">8–12 weeks</p>
            <p className="text-white/50">Thin-slice delivery</p>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="text-center">
            <p className="text-3xl font-bold text-white">45%</p>
            <p className="text-white/50">Gross margin</p>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="text-center">
            <p className="text-3xl font-bold text-white">SGD 500k</p>
            <p className="text-white/50">Year 1 revenue</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-white/40 text-sm"
        >
          Strategic Business Plan 2026–2028 | Internal & Investor Document
        </motion.div>
      </div>
    </Slide>
  );
}
