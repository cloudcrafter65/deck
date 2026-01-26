'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Whitepaper() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur border-b border-gray-100 z-50">
                <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
                    <Link
                        href="/zendesk"
                        className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Presentation
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-32 pb-24 px-6">
                <article className="max-w-3xl mx-auto">

                    {/* Header */}
                    <div className="mb-16 border-b border-gray-200 pb-16">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
                            In APAC's High-Churn Markets, Service Is the New Loyalty Program
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-500 leading-relaxed font-light">
                            Retention Has Moved Downstream: Why Service Now Determines Customer Lifetime Value
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section className="mb-20">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Retention Has Moved Downstream</h3>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                For years, loyalty was treated as a function of brand, product, and marketing. Service sat downstream — a necessary cost to resolve failures after value had already been created.
                            </p>
                            <p>
                                In APAC, that mental model is now wrong.
                            </p>
                            <p>
                                Across digital-first sectors — financial services, travel, telco, marketplaces, consumer SaaS — loyalty has weakened structurally. Switching costs are negligible. Alternatives are one tap away. Super-app ecosystems have normalised churn as behaviour, not betrayal.
                            </p>
                            <p>
                                At the same time, customer acquisition cost has risen faster than lifetime value. Growth economics have tightened. Retention is no longer a secondary optimisation lever; it is now central to profitability.
                            </p>
                            <p>
                                What many leadership teams still underestimate is where retention is now decided.
                            </p>
                            <p>
                                In APAC's high-churn markets, the decisive moment increasingly occurs inside customer service operations. Not in campaigns. Not in loyalty schemes. Not in roadmap decks.
                            </p>
                            <p>
                                When something breaks — a payment fails, an account is locked, a booking goes wrong — customers are forced into direct contact. In that moment, service becomes the last point of leverage before downgrade, disengagement, or exit.
                            </p>
                        </div>
                        <div className="bg-gray-50 border-l-4 border-black p-8 my-10">
                            <p className="text-xl font-medium text-gray-900 leading-relaxed">
                                Many customers do not leave because of price or product.<br />
                                They leave after service.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-20">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">The Structural Shift Leaders Miss</h3>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                APAC customers are often labelled "disloyal". That diagnosis is lazy.
                            </p>
                            <p>What's actually happening is structural:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-gray-400">
                                <li>Onboarding and switching are frictionless</li>
                                <li>Price and feature parity is high</li>
                                <li>Regulation limits meaningful differentiation</li>
                                <li>Digital relationships are thin by design</li>
                            </ul>
                            <p>
                                In this environment, loyalty is conditional. Tolerance for friction is low.
                            </p>
                            <p>
                                Churn decisions are rarely made during moments of delight. They are made during moments of failure.
                            </p>
                            <div className="font-bold text-gray-900 pl-6 border-l-2 border-gray-200">
                                A billing discrepancy.<br />
                                A service outage.<br />
                                A fulfilment breakdown.
                            </div>
                            <p>
                                These are not brand problems. They are operational failures — surfaced through service.
                            </p>
                            <p>
                                What has changed is the consequence of those failures. When alternatives are abundant, customers no longer ask, "Do I like this company?" They ask, "Is it worth staying?"
                            </p>
                            <p>
                                Service is where that question is answered.
                            </p>
                            <p>In many APAC businesses, service is:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-gray-400">
                                <li>The first human interaction</li>
                                <li>The only place context is tested across channels</li>
                                <li>The final opportunity to restore trust</li>
                            </ul>
                            <p>Yet it is still designed as if loyalty were assumed.</p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-20">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">The Efficiency Trap</h3>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                Most service organisations are governed by efficiency metrics: average handle time, deflection, cost per contact. These metrics made sense when service was purely a cost to be contained.
                            </p>
                            <p className="font-bold text-gray-900">They are now actively misleading.</p>
                            <p>AI has accelerated the problem.</p>
                            <p>
                                Across APAC, AI has been deployed to shorten interactions, push self-service, and reduce frontline load. On paper, results look good. Handle time drops. Costs fall.
                            </p>
                            <p>Operationally, a different reality emerges.</p>
                            <p>
                                Service optimised for speed often resolves the interaction but not the intent. Issues are closed without closure. Context is lost across channels. Complex cases are pushed downstream.
                            </p>
                            <p>The symptoms are consistent:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-gray-400">
                                <li>Repeat contacts rise</li>
                                <li>Escalations cluster around edge cases</li>
                                <li>Supervisory and back-office rework increases</li>
                            </ul>
                            <p>
                                What's harder to see is the customer response. Many don't complain again. They churn quietly.
                            </p>
                        </div>
                        <div className="bg-red-50 p-8 rounded-xl my-10 border border-red-100">
                            <p className="text-red-900 font-bold mb-2 text-xl">The Efficiency Trap</p>
                            <p className="text-red-800 text-lg">Service looks cheaper while retention erodes.</p>
                        </div>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                From an economic standpoint, this is not optimisation. It is cost displacement — from service into acquisition, win-back, and discounting. Lifetime value declines while dashboards stay green.
                            </p>
                            <p>AI didn't cause this. It exposed it.</p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-20">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Continuity Is the Real Retention Lever</h3>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                When customers describe bad service, they rarely complain about speed. They complain about repetition.
                            </p>
                            <div className="pl-6 border-l-2 border-gray-200 italic text-gray-600">
                                Repeating the issue.<br />
                                Re-explaining context.<br />
                                Being transferred without memory.<br />
                                Receiving contradictory answers.
                            </div>
                            <p>
                                This is where churn is triggered — not by delay, but by exhaustion.
                            </p>
                            <p className="text-2xl font-bold text-gray-900 my-10 text-center">
                                Continuity is not personalisation. It is operational memory.
                            </p>
                            <p>It means:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-gray-400">
                                <li>The organisation remembers the state of the issue</li>
                                <li>Ownership persists across time and channels</li>
                                <li>Prior commitments are honoured</li>
                                <li>The customer is not forced to manage the process</li>
                            </ul>
                            <p>
                                In APAC's multi-market, multilingual environments, continuity reduces variance. It removes loops. It lowers rework. It stabilises operations under scale.
                            </p>
                            <p>
                                This is where AI creates real leverage — not by ending conversations faster, but by preserving intent across them.
                            </p>
                            <p>When continuity is designed into service operations:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-gray-400">
                                <li>Repeat contacts fall</li>
                                <li>Escalations become predictable</li>
                                <li>Frontline confidence improves</li>
                                <li>Customers stay even when outcomes are imperfect</li>
                            </ul>
                            <p>
                                Retention improves not because service is exceptional, but because it is coherent.
                            </p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="mb-20">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">What Must Change at the Executive Level</h3>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                This shift cannot be delegated to CX teams. It requires explicit executive decisions.
                            </p>
                            <p>
                                <strong className="text-gray-900">First</strong>, leaders must stop conflating speed with effectiveness. Fast resolution is meaningless if it increases rework or churn risk. Flow matters more than throughput.
                            </p>
                            <p>
                                <strong className="text-gray-900">Second</strong>, AI investment must be reframed. The question is no longer "How much cost can we remove?" but "Which service moments justify continuity because churn risk is asymmetric?"
                            </p>
                            <p>
                                Not every interaction deserves memory. Some deserve speed. The failure is treating them all the same.
                            </p>
                            <p>
                                <strong className="text-gray-900">Third</strong>, accountability must move upstream. Retention is no longer owned solely by marketing. It sits at the intersection of operations, technology, and customer experience — and should be governed that way.
                            </p>
                            <p>
                                Avoiding these decisions does not preserve simplicity. It merely shifts cost elsewhere.
                            </p>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="bg-gray-900 text-white p-12 rounded-2xl">
                        <h3 className="text-3xl font-bold mb-8">Service Is Now a Board-Level Retention Decision</h3>
                        <p className="text-gray-300 text-xl leading-relaxed mb-8">
                            In APAC's high-churn markets, customer service has become the place where lifetime value is either protected or destroyed. Treating it as a cost centre is no longer neutral. It is a strategic risk.
                        </p>
                        <p className="text-gray-300 text-xl leading-relaxed mb-12">
                            The organisations that will outperform in the next 12–24 months will not be those with the fastest bots or the lowest service cost. They will be those that design service as a continuity system, aligned to retention economics rather than efficiency optics.
                        </p>

                        <div className="border-t border-gray-700 pt-8">
                            <p className="text-gray-400 text-sm tracking-widest uppercase mb-4">The New Executive Question</p>
                            <div className="space-y-4">
                                <div className="opacity-50 line-through text-lg">
                                    "How fast did we close the ticket?"
                                </div>
                                <div className="text-2xl font-bold text-white">
                                    "Did this interaction increase or decrease the likelihood that the customer stays?"
                                </div>
                            </div>
                        </div>
                    </section>

                </article>
            </main>
        </div>
    )
}
