'use client'

import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import {
  ChevronLeft, ChevronRight,
  TrendingUp, TrendingDown,
  AlertTriangle, RefreshCw, XCircle,
  FileText, Activity, Layers, ArrowRight,
  ShieldCheck, Zap, BarChart3, Users,
  Briefcase, MapPin, Linkedin
} from 'lucide-react'
import Link from 'next/link'

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Navigation Logic with proper cleanup
  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return
    setCurrentSlide(index)
    setIsAnimating(true)

    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current)
    }
    animationTimeoutRef.current = setTimeout(() => setIsAnimating(false), 400)
  }, [currentSlide, isAnimating])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current)
      }
    }
  }, [])

  const nextSlide = useCallback(() => currentSlide < 10 && goToSlide(currentSlide + 1), [currentSlide, goToSlide])
  const prevSlide = useCallback(() => currentSlide > 0 && goToSlide(currentSlide - 1), [currentSlide, goToSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide() }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  // Memoize slides to prevent recreation on every render
  const slides = useMemo(() => [
    // Slide 1: The Core Argument (DARK)
    <div key="1" className="slide bg-black text-white flex flex-col p-12">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Executive Thesis</span>
            <span className="text-gray-600">|</span>
            <span className="text-sm font-medium text-gray-400">Vijayakumar G.A.</span>
            <span className="text-gray-600">|</span>
            <span className="text-sm text-gray-500">January 2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Service Is the New<br />
            <span className="text-blue-500">Loyalty Program</span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-3xl">
            Retention Has Moved Downstream: Why Service Now Determines Customer Lifetime Value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-800 pt-12">
          <div>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span>In APAC's structurally high-churn markets, customer service has become the <strong className="text-white">primary determinant of retention</strong> and lifetime value.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span>Retention decisions increasingly occur <strong className="text-white">after something goes wrong</strong>, during service interactions.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span>Most service organisations are still optimised for efficiency and cost, <strong className="text-white">unintentionally increasing churn risk</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span>AI has accelerated this problem by improving speed while <strong className="text-white">exposing rework, escalation, and silent churn</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span>Leaders who redesign service for <strong className="text-white">continuity, not just efficiency</strong>, protect LTV and reduce future CAC.</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between items-start">
            <div className="bg-white/5 p-6 rounded-xl w-full border border-white/10">
              <span className="text-sm font-bold text-gray-500 uppercase">Bottom Line</span>
              <p className="text-2xl font-bold text-white mt-2">
                Service is no longer a neutral cost centre.<br />
                <span className="text-blue-400">It is a board-level retention system.</span>
              </p>
            </div>

            <Link href="/zendesk/whitepaper" className="mt-8 group flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all">
              <FileText className="w-4 h-4" />
              <span className="font-medium">Read Full Whitepaper</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>,

    // Slide 2: Why Loyalty Is Structurally Fragile in APAC (LIGHT)
    <div key="2" className="slide bg-white flex flex-col p-12">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
        <div className="mb-12 border-b border-gray-200 pb-8">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">APAC Context</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900">Why Loyalty Is Structurally Fragile</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Market Conditions That Weaken Loyalty</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Activity className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Near-zero switching costs across digital services</span>
              </li>
              <li className="flex gap-3 items-start">
                <Layers className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Abundant functional substitutes and aggregator platforms</span>
              </li>
              <li className="flex gap-3 items-start">
                <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Super-app ecosystems normalise multi-vendor usage</span>
              </li>
              <li className="flex gap-3 items-start">
                <ShieldCheck className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Regulatory parity limits differentiation (FSI, telco, utilities)</span>
              </li>
              <li className="flex gap-3 items-start">
                <BarChart3 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Price transparency + promotion-driven acquisition</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resulting Customer Behaviour</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Loyalty is conditional, not emotional</li>
                <li>• Tolerance for friction is low</li>
                <li>• Customers optimise for effort, not brand affinity</li>
              </ul>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-xl">
              <span className="text-blue-200 text-sm font-bold uppercase">Conclusion</span>
              <p className="text-xl font-bold mt-2">
                APAC customers are not disloyal.<br />
                They are economically rational in a low-friction market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 3: The Loyalty Model Most Organisations Still Operate Under (LIGHT)
    <div key="3" className="slide bg-white flex flex-col p-12">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
        <span className="text-gray-400 font-bold tracking-widest uppercase text-sm mb-4">The Legacy Mindset</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">The Loyalty Model Most Organisations Still Operate Under</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-gray-500 uppercase tracking-wide mb-6">Implicit Operating Assumptions</h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 font-bold flex-shrink-0">1</span>
                <span className="text-lg text-gray-700">Product and brand drive retention</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 font-bold flex-shrink-0">2</span>
                <span className="text-lg text-gray-700">Marketing and loyalty programmes own churn</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 font-bold flex-shrink-0">3</span>
                <span className="text-lg text-gray-700">Service exists to fix failures at lowest cost</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 font-bold flex-shrink-0">4</span>
                <span className="text-lg text-gray-700">Speed and deflection equal quality</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Why This Model Is Now Misaligned</h3>
              <ul className="space-y-3 text-lg text-gray-600">
                <li>• Loyalty decisions happen <strong className="text-gray-900">later</strong> in the journey</li>
                <li>• Often during moments of <strong className="text-gray-900">failure</strong>, not delight</li>
                <li>• Outside marketing's direct influence</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <span className="font-bold text-red-900 text-lg">The Mismatch</span>
              <p className="text-red-700 mt-2 text-lg">Retention economics have shifted downstream.<br />Operating models have not.</p>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 4: Where Retention Is Actually Decided Now (LIGHT)
    <div key="4" className="slide bg-white flex flex-col p-12">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
        <span className="text-gray-400 font-bold tracking-widest uppercase text-sm mb-4">Observed Pattern Across APAC Enterprises</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Where Retention Is <span className="text-blue-600">Actually</span> Decided Now</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 text-center">
            <AlertTriangle className="w-10 h-10 text-orange-500 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">Billing Disputes</h3>
            <p className="text-sm text-gray-500">Pricing discrepancies</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 text-center">
            <XCircle className="w-10 h-10 text-red-500 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">Access Failures</h3>
            <p className="text-sm text-gray-500">Account lockouts</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 text-center">
            <Activity className="w-10 h-10 text-purple-500 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">Fulfilment Issues</h3>
            <p className="text-sm text-gray-500">Delivery breakdowns</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 text-center">
            <Zap className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">Outages</h3>
            <p className="text-sm text-gray-500">Regulatory friction</p>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">What These Moments Have In Common</h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-blue-800">
            <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> They force customers into service</li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> They override prior goodwill</li>
            <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> They compress churn risk into a single window</li>
          </ul>
        </div>

        <div className="text-center">
          <div className="inline-block border-b-4 border-blue-600 pb-2">
            <p className="text-2xl font-bold text-gray-900">
              Service interactions are the last meaningful leverage point before churn.
            </p>
          </div>
        </div>
      </div>
    </div>,

    // Slide 5: How Service Is Still Optimised (LIGHT)
    <div key="5" className="slide bg-gray-50 flex flex-col p-12">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
        <span className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-4">And Why That's A Problem</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">How Service Is Still Optimised</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Dominant Service KPIs</h3>
            <ul className="space-y-3">
              <li className="bg-gray-50 p-3 rounded text-gray-700 font-mono text-sm">Average Handle Time (AHT)</li>
              <li className="bg-gray-50 p-3 rounded text-gray-700 font-mono text-sm">Deflection / Containment</li>
              <li className="bg-gray-50 p-3 rounded text-gray-700 font-mono text-sm">Cost Per Contact</li>
              <li className="bg-gray-50 p-3 rounded text-gray-700 font-mono text-sm">Volume Throughput</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">What These Optimise</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-2"><TrendingUp className="w-5 h-5 text-green-500" /> Closing interactions quickly</li>
              <li className="flex gap-2"><TrendingDown className="w-5 h-5 text-green-500" /> Reducing visible opex</li>
              <li className="flex gap-2"><Users className="w-5 h-5 text-green-500" /> Shifting work from humans</li>
            </ul>
          </div>

          <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
            <h3 className="text-xl font-bold text-red-600 mb-6">What They Systematically Ignore</h3>
            <ul className="space-y-3 text-red-800">
              <li className="flex gap-2"><XCircle className="w-5 h-5" /> Rework and repeat contact</li>
              <li className="flex gap-2"><XCircle className="w-5 h-5" /> Context loss across channels</li>
              <li className="flex gap-2"><XCircle className="w-5 h-5" /> Escalation concentration</li>
              <li className="flex gap-2"><XCircle className="w-5 h-5" /> Post-interaction churn probability</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-gray-900">
            Consequence: Service can look efficient while <span className="text-red-600">actively leaking retention</span>.
          </p>
        </div>
      </div>
    </div>,

    // Slide 6: The Efficiency Trap (LIGHT - Red Accents)
    <div key="6" className="slide bg-white flex flex-col p-12">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
        <span className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4">What Leaders Miss</span>
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-12 tracking-tight">The Efficiency Trap</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
            <h3 className="text-xl font-bold text-green-900 uppercase mb-6 tracking-widest">What Dashboards Show</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-green-800 text-lg"><TrendingUp className="w-6 h-6 text-green-600" /> Faster resolution</li>
              <li className="flex items-center gap-3 text-green-800 text-lg"><TrendingDown className="w-6 h-6 text-green-600" /> Lower unit cost</li>
              <li className="flex items-center gap-3 text-green-800 text-lg"><BarChart3 className="w-6 h-6 text-green-600" /> "Improved" operational performance</li>
            </ul>
          </div>

          <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
            <h3 className="text-xl font-bold text-red-900 uppercase mb-6 tracking-widest">What Actually Happens</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-red-800 text-lg"><XCircle className="w-6 h-6 text-red-600" /> Issues closed without being resolved</li>
              <li className="flex items-center gap-3 text-red-800 text-lg"><RefreshCw className="w-6 h-6 text-red-600" /> Customers re-enter the system multiple times</li>
              <li className="flex items-center gap-3 text-red-800 text-lg"><AlertTriangle className="w-6 h-6 text-red-600" /> Complex cases escalate and cluster</li>
              <li className="flex items-center gap-3 text-red-800 text-lg"><Users className="w-6 h-6 text-red-600" /> Back-office load increases</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-8 rounded-2xl text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Hidden Outcome</p>
          <p className="text-2xl font-bold mb-4">Customers stop complaining — and quietly leave.</p>
          <p className="text-lg text-gray-400">
            Efficiency reduces <span className="text-white">visible cost</span> while increasing <span className="text-red-400">future acquisition and churn cost</span>.
          </p>
        </div>
      </div>
    </div>,

    // Slide 7: AI Did Not Create the Problem (LIGHT)
    <div key="7" className="slide bg-white flex flex-col p-12">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AI Did Not Create the Problem.</h2>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mb-12">It Exposed It.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-600 mb-6">What AI Improves Quickly</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex gap-3"><Zap className="w-5 h-5 text-green-500" /> Speed</li>
              <li className="flex gap-3"><TrendingUp className="w-5 h-5 text-green-500" /> Throughput</li>
              <li className="flex gap-3"><Users className="w-5 h-5 text-green-500" /> First-level deflection</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
            <h3 className="text-xl font-bold text-orange-600 mb-6">What AI Exposes Immediately</h3>
            <ul className="space-y-3 text-lg text-orange-800">
              <li className="flex gap-3"><AlertTriangle className="w-5 h-5" /> Broken service flows</li>
              <li className="flex gap-3"><AlertTriangle className="w-5 h-5" /> Poor ownership models</li>
              <li className="flex gap-3"><AlertTriangle className="w-5 h-5" /> Lack of cross-channel memory</li>
              <li className="flex gap-3"><AlertTriangle className="w-5 h-5" /> High re-entry and exception rates</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-600 text-white p-8 rounded-2xl">
          <p className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-3">Critical Distinction</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg opacity-70 mb-2">AI optimised for speed</p>
              <p className="text-xl font-bold">Amplifies variance and rework</p>
            </div>
            <div>
              <p className="text-lg opacity-70 mb-2">AI optimised for continuity</p>
              <p className="text-xl font-bold">Reduces re-contact, escalation, and churn risk</p>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 8: What Customers Actually React To (LIGHT - Red Accents)
    <div key="8" className="slide bg-white flex flex-col p-12">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">What Customers <span className="italic text-red-600">Actually</span> React To</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="p-8 bg-gray-50 rounded-2xl">
            <h3 className="text-gray-500 font-bold uppercase tracking-widest mb-6">What Rarely Triggers Churn</h3>
            <ul className="space-y-4 text-xl text-gray-400">
              <li>Waiting slightly longer</li>
              <li>Speaking to a human vs a bot</li>
              <li>Channel choice</li>
            </ul>
          </div>

          <div className="p-8 bg-red-50 rounded-2xl border border-red-100">
            <h3 className="text-red-600 font-bold uppercase tracking-widest mb-6">What Consistently Triggers Churn</h3>
            <ul className="space-y-4 text-xl font-bold text-gray-900">
              <li>Repeating the same issue</li>
              <li>Restarting the process</li>
              <li>Contradictory answers</li>
              <li>Forgotten or broken commitments</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-8 rounded-2xl text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Interpretation</p>
          <p className="text-2xl font-bold">
            This is not an experience failure.<br />
            <span className="text-red-400">It is an operational memory failure.</span>
          </p>
        </div>
      </div>
    </div>,

    // Slide 9: Continuity Definition (LIGHT - Blue Accents)
    <div key="9" className="slide bg-white flex flex-col p-12">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
        <span className="font-mono text-blue-600 mb-4 font-bold uppercase tracking-widest">A Precise, Operational Definition</span>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-12 tracking-tight text-gray-900">Continuity</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-gray-400 font-bold uppercase tracking-widest mb-6">Continuity Is NOT</h3>
            <ul className="space-y-4 text-lg text-gray-500">
              <li className="flex gap-3"><span className="text-red-500 font-bold">×</span> Personalisation</li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">×</span> White-glove service</li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">×</span> Higher service levels for everyone</li>
            </ul>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-blue-100 font-bold uppercase tracking-widest mb-6">Continuity IS</h3>
            <ul className="space-y-4 font-bold text-lg">
              <li className="flex gap-3"><span className="text-green-300">✓</span> Persistent issue state across time and channels</li>
              <li className="flex gap-3"><span className="text-green-300">✓</span> Clear ownership until resolution</li>
              <li className="flex gap-3"><span className="text-green-300">✓</span> Context preserved between interactions</li>
              <li className="flex gap-3"><span className="text-green-300">✓</span> Commitments honoured without reset</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-blue-600 mb-1">↓</p>
            <p className="text-sm font-medium text-gray-700">Fewer loops</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-blue-600 mb-1">↓</p>
            <p className="text-sm font-medium text-gray-700">Lower rework cost</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-blue-600 mb-1">↑</p>
            <p className="text-sm font-medium text-gray-700">Predictable load</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-blue-600 mb-1">↑</p>
            <p className="text-sm font-medium text-gray-700">Failure tolerance</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl font-bold text-gray-900">
            Customers stay not because service is exceptional, but because it is <span className="text-blue-600">coherent</span>.
          </p>
        </div>
      </div>
    </div>,

    // Slide 10: Executive Reframing (DARK)
    <div key="10" className="slide bg-black text-white flex flex-col p-12">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
        <span className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-4">The New Question</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Executive Reframing</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">Measurement</h3>
            <ul className="space-y-2 text-gray-400">
              <li><span className="text-gray-600">From:</span> Throughput → <span className="text-white font-medium">Flow</span></li>
              <li><span className="text-gray-600">From:</span> AHT → <span className="text-white font-medium">Rework + Repeat</span></li>
              <li><span className="text-gray-600">From:</span> Cost optics → <span className="text-white font-medium">Retention risk</span></li>
            </ul>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">Investment Logic</h3>
            <ul className="space-y-2 text-gray-400">
              <li><span className="text-gray-600">From:</span> Cost removal → <span className="text-blue-400 font-medium">CAC avoidance</span></li>
              <li><span className="text-gray-600">From:</span> Uniform automation → <span className="text-blue-400 font-medium">Intent-based continuity</span></li>
            </ul>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">Accountability</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Retention shared across <span className="text-white font-medium">Ops, Tech, and CX</span></li>
              <li>Service outcomes linked to <span className="text-white font-medium">LTV</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mb-8">
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-6">Board-Level Reframing</p>
          <p className="text-gray-600 line-through text-xl mb-4">"How fast did we close the ticket?"</p>
          <p className="text-3xl md:text-4xl font-bold leading-tight">
            "Did this interaction increase or decrease the likelihood that the customer stays?"
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="bg-blue-600/20 border border-blue-500/30 p-6 rounded-xl flex-1">
            <p className="text-lg text-blue-100">
              In APAC's high-churn markets, service is no longer a cost centre to optimise.<br />
              <span className="text-white font-bold">It is a loyalty system to design.</span>
            </p>
          </div>

          <Link href="/zendesk/whitepaper" className="group flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all">
            <FileText className="w-4 h-4" />
            <span className="font-medium">Read Full Whitepaper</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>,

    // Slide 11: About the Author (DARK)
    <div key="11" className="slide bg-black text-white flex flex-col p-12">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left: Name and Title */}
          <div className="md:col-span-1">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4 block">About the Author</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Vijayakumar G.A.</h2>
            <p className="text-xl text-blue-400 font-medium mb-6">CTO AI Transformation</p>

            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>Singapore</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <a
                  href="https://www.linkedin.com/in/vijayga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-blue-500"
                >
                  linkedin.com/in/vijayga
                </a>
              </div>
            </div>
          </div>

          {/* Right: Experience and Skills */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <p className="text-lg text-gray-300 leading-relaxed">
                Market-facing APAC CTO-calibre technology executive with <span className="text-white font-bold">20+ years</span> at the intersection of AI Transformation, Generative AI, and regional Go-To-Market execution. Trusted advisor to senior customer executives across APAC.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Core Impact</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex gap-2"><span className="text-blue-500">•</span> <span><strong className="text-blue-400">Accelerate AI adoption</strong> from strategy to production</span></li>
                  <li className="flex gap-2"><span className="text-blue-500">•</span> <span><strong className="text-blue-400">Build GenAI capabilities</strong> RAG, Agents, and ML Ops</span></li>
                  <li className="flex gap-2"><span className="text-blue-500">•</span> <span><strong className="text-blue-400">Drive enterprise transformation</strong> with measurable ROI</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Experience</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex gap-2 items-start">
                    <Briefcase className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                    <span><strong className="text-white">Cyaire</strong> — Principal & CTO</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Briefcase className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                    <span><strong className="text-white">Cisco Systems</strong> — Regional Industry Lead (FSI)</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Briefcase className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                    <span><strong className="text-white">Accenture, IBM, Orange/BT</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300">AI Transformation</span>
              <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300">GenAI / RAG / Agents</span>
              <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300">GTM Strategy</span>
              <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300">Executive Advisory</span>
              <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300">M.Eng — NUS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ], [])

  const totalSlides = slides.length

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100 font-sans selection:bg-black selection:text-white">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div className="h-full bg-blue-600 transition-all duration-300 ease-out" style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }} />
      </div>

      {/* Slide content */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-screen h-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4 z-50 bg-white/50 backdrop-blur px-4 py-2 rounded-full border border-gray-200">
        <span className="text-xs font-mono font-bold text-gray-900">{currentSlide + 1} / {totalSlides}</span>
        <div className="flex gap-2">
          <button onClick={prevSlide} disabled={currentSlide === 0} className="p-2 rounded-full hover:bg-black/5 disabled:opacity-20 transition-all text-gray-900">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={nextSlide} disabled={currentSlide === totalSlides - 1} className="p-2 rounded-full hover:bg-black/5 disabled:opacity-20 transition-all text-gray-900">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
