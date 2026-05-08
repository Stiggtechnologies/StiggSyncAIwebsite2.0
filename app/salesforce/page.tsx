'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Cloud, Shield, Zap, Workflow, Layers, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const PLANS = [
  {
    code: 'starter', name: 'Starter', price: '$99', cadence: 'per user / month',
    target: 'Pilots and small operations',
    features: [
      'Up to 10 SF users', '5 AI agents', '3 industry templates',
      'Asset + Work Order sync', 'Email support',
    ],
  },
  {
    code: 'pro', name: 'Professional', price: '$199', cadence: 'per user / month',
    target: 'Mid-size deployments', featured: true,
    features: [
      'Unlimited SF users', 'All 15 agents + orchestrator', 'All 13 industry templates',
      'Bi-directional sync', 'Custom Salesforce flows', 'SOC 2 reports',
    ],
  },
  {
    code: 'enterprise', name: 'Enterprise', price: '$349', cadence: 'per user / month',
    target: 'Multi-org deployments',
    features: [
      'Multi-org install', 'Custom Apex extensions', 'Autonomous mode',
      'Named CSM', 'Custom DPA / MSA',
    ],
  },
];

const HIGHLIGHTS = [
  {
    icon: Workflow, title: 'AppExchange managed package',
    body: 'Standard managed-package install with namespace isolation. Updates roll out via versioned package upgrades — no Apex deployments to manage.',
  },
  {
    icon: Layers, title: 'Bi-directional Asset + Work Order sync',
    body: 'SF Asset and WorkOrder records sync to SyncAI; agent recommendations write back as ServiceAppointment or Task records.',
  },
  {
    icon: Cloud, title: 'License Management App (LMA)',
    body: 'Standard SF LMA flow — license lifecycle (Active / Suspended / Expired) syncs to SyncAI within 5 minutes. Seat counts kept in lockstep.',
  },
  {
    icon: Zap, title: 'Embedded inside Salesforce',
    body: 'SyncAI dashboards render inline as Lightning components on Account, Asset, and WorkOrder pages — no second tab.',
  },
  {
    icon: Shield, title: 'Salesforce security model',
    body: 'Permission set + integration user pattern. Field-level security and sharing rules respected end-to-end.',
  },
  {
    icon: Users, title: 'Buy on AppExchange',
    body: 'Single-click install into your sandbox or production org. Subscription billed via Salesforce or directly — your call.',
  },
];

export default function SalesforceAppExchangePage() {
  return (
    <main className="pt-16">
      <Section>
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs uppercase tracking-wide text-blue-400">
              <Workflow size={14} />
              Available on Salesforce AppExchange
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              SyncAI on <span className="text-blue-400">Salesforce AppExchange</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Autonomous AI agents inside your Salesforce org. Asset and Work Order data
              syncs bi-directionally; agent recommendations land directly on your records.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://appexchange.salesforce.com/listingDetail?listingId=syncai-industrial"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold shadow-lg shadow-blue-600/30 transition-colors"
              >
                Get it on AppExchange
                <ArrowRight size={16} />
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 hover:border-white/40 text-white rounded-lg font-semibold transition-colors">
                Talk to sales
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Salesforce-native · Per-seat monthly billing · Free 14-day trial
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {HIGHLIGHTS.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div key={idx} className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-6">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-400" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{h.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{h.body}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Plans on AppExchange</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Same pricing as direct — embedded inside your Salesforce org.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {PLANS.map((plan) => (
              <div
                key={plan.code}
                className={`border rounded-lg p-8 backdrop-blur-sm ${
                  plan.featured ? 'border-blue-500/40 bg-blue-500/[0.04]' : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                {plan.featured && (
                  <div className="inline-block px-3 py-1 mb-4 bg-blue-500 text-white rounded-full text-[10px] uppercase tracking-wider font-semibold">
                    Most popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-400 mb-4 uppercase tracking-wide">{plan.target}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-gray-400 ml-2">{plan.cadence}</span>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://appexchange.salesforce.com/listingDetail?listingId=syncai-industrial"
                  className={`block text-center px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                    plan.featured ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'border border-blue-500/40 text-blue-400 hover:bg-blue-500/10'
                  }`}
                >
                  Install on AppExchange
                </a>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="text-center border border-blue-500/30 bg-blue-500/[0.05] rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Buy SyncAI through Salesforce</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Install the managed package into your sandbox today. Production install + LMA license sync ships in your first 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://appexchange.salesforce.com/listingDetail?listingId=syncai-industrial"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold shadow-lg shadow-blue-600/30 transition-colors"
              >
                Get it on AppExchange <ArrowRight size={16} />
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white rounded-lg font-semibold transition-colors">
                Talk to sales
              </a>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </main>
  );
}
