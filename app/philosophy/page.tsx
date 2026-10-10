import Link from 'next/link';
const principles = [
 ['Evidence before confidence', 'Keep observed facts, assumptions, competing explanations, and missing information visible. Teams should be able to review the basis for a recommendation.'],
 ['Expertise with clear authority', 'SyncAI supports engineering judgment. A named person decides what proceeds, with approval and escalation kept explicit.'],
 ['Work with your operating context', 'Use approved knowledge and authorized records to investigate failures, prioritize work, and review maintenance strategy. Confirm data and implementation requirements for each deployment.'],
 ['Learn from outcomes', 'Carry the decision record forward. Compare what happened with the agreed baseline and use the evidence to improve the next decision.'],
];
export default function PhilosophyPage() { return <main className="bg-ink pt-16 text-bone"><div className="mx-auto max-w-5xl px-6 py-20 sm:py-28"><p className="font-mono text-sm uppercase tracking-widest text-cyan-300">Our approach</p><h1 className="mt-6 text-4xl font-bold sm:text-6xl">Better decisions, with your team in control.</h1><div className="mt-14 divide-y divide-bone/15 border-y border-bone/15">{principles.map(([title,body]) => <section key={title} className="grid gap-5 py-8 md:grid-cols-2"><h2 className="text-2xl font-semibold">{title}</h2><p className="leading-7 text-bone/75">{body}</p></section>)}</div><Link href="/contact" className="mt-12 inline-block font-semibold text-cyan-300">Discuss SyncAI for your team →</Link></div></main>; }
