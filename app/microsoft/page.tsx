'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Cloud, Shield, Zap, Building2, Layers, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const PLANS = [
  {
    code: 'starter',
    name: 'Starter',
    price: '$99',
    cadence: 'per user / month',
    target: 'Pilots and small operations',
    features: [
      'Up to 10 users',
      '5 AI agents',
      '3 industry templates',
      'Core integrations (Anthropic, OpenAI)',
      'Email support',
    ],
  },
  {
    code: 'pro',
    name: 'Professional',
    price: '$199',
    cadence: 'per user / month',
    target: 'Mid-size deployments',
    featured: true,
    features: [
      'Unlimited users',
      'All 15 agents + orchestrator',
      'All 13 industry templates',
      'Full integrations roster (26 vendors)',
      'SOC 2 reports',
      'Up to 5 sites',
      'Conditional autonomy mode',
      'Priority email support',
    ],
  },
  {
    code: 'enterprise',
    name: 'Enterprise',
    price: '$349',
    cadence: 'per user / month',
    target: 'Multi-site, custom-prompt deployments',
    features: [
      'Unlimited users + sites',
      'Custom agent prompts',
      'On-prem deployment option',
      'Autonomous mode',
      'Named CSM',
      'Custom legal terms (DPA / MSA)',
    ],
  },
];

const HIGHLIGHTS = [
  {
    icon: Layers,
    title: '15 specialized AI agents',
    body: 'Reliability Engineering, Condition Monitoring, Compliance Auditing, and 12 more — each with industry-tuned system prompts and ISO-aligned KPIs.',
  },
  {
    icon: Building2,
    title: '13 industry templates',
    body: 'Oil & Gas, Mining, Pharmaceuticals, Data Centers, and 9 more verticals — pre-configured asset taxonomy, FMEA library, and integrations roster.',
  },
  {
    icon: Cloud,
    title: '26 integrations, customer-controlled',
    body: 'SAP PM, IBM Maximo, AVEVA PI, Schneider EcoStruxure, Veeva, Anthropic, and more. Credentials encrypted at rest with AES-256, never platform-controlled.',
  },
  {
    icon: Zap,
    title: '60-second deployment',
    body: 'Pick your industry, click Deploy. Tenant up with asset taxonomy, KPIs, and 15 agents prioritized for your context — before a sales call ends.',
  },
  {
    icon: Shield,
    title: 'Enterprise-ready compliance',
    body: 'API 580, OSHA PSM, FDA 21 CFR Part 11, NERC CIP, ISO 55000 / 14001 / 50001 — frameworks pre-configured per industry template.',
  },
  {
    icon: Users,
    title: 'Buy on Microsoft AppSource',
    body: 'Transactable SaaS offer — purchase via your Microsoft Enterprise Agreement, billed against your Azure consumption commit (MACC eligible).',
  },
];

export default function MicrosoftAppSourcePage() {
  return (
    <main className="pt-16">
      <Section>
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full text-xs uppercase tracking-wide text-[#3B82F6]">
              <Cloud size={14} />
              Available on Microsoft AppSource
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              SyncAI on <span className="text-[#3B82F6]">Microsoft AppSource</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Autonomous AI agents for asset-intensive industries — purchasable via your Microsoft Enterprise Agreement,
              billed against Azure consumption commit, deployed in 60 seconds.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://appsource.microsoft.com/en-us/product/web-apps/stiggtechnologies.syncai_industrial"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white rounded-lg font-semibold shadow-lg shadow-[#3B82F6]/30 transition-colors"
              >
                Get it on AppSource
                <ArrowRight size={16} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 hover:border-white/40 text-white rounded-lg font-semibold transition-colors"
              >
                Talk to sales
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              MACC-eligible · Per-seat monthly billing · Free 14-day trial
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {HIGHLIGHTS.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div key={idx} className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-6">
                  <div className="w-10 h-10 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-[#3B82F6]" size={20} />
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Plans on AppSource</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Same pricing on AppSource as on syncai.ca — but you can route the spend through your existing Microsoft commit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {PLANS.map((plan) => (
              <div
                key={plan.code}
                className={`border rounded-lg p-8 backdrop-blur-sm ${
                  plan.featured
                    ? 'border-[#3B82F6]/40 bg-[#3B82F6]/[0.04]'
                    : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                {plan.featured && (
                  <div className="inline-block px-3 py-1 mb-4 bg-[#3B82F6] text-white rounded-full text-[10px] uppercase tracking-wider font-semibold">
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
                      <CheckCircle2 size={14} className="text-[#3B82F6] flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://appsource.microsoft.com/en-us/product/web-apps/stiggtechnologies.syncai_industrial"
                  className={`block text-center px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                    plan.featured
                      ? 'bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white'
                      : 'border border-[#3B82F6]/40 text-[#3B82F6] hover:bg-[#3B82F6]/10'
                  }`}
                >
                  Get on AppSource
                </a>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How activation works</h2>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#3B82F6]/20 text-[#3B82F6] text-sm font-bold flex items-center justify-center">1</span>
                <div>
                  <strong className="text-white">Purchase on AppSource.</strong>
                  <p className="text-sm text-gray-400 mt-0.5">Pick your plan, set seat count, complete checkout via your Microsoft commit.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#3B82F6]/20 text-[#3B82F6] text-sm font-bold flex items-center justify-center">2</span>
                <div>
                  <strong className="text-white">Activate at app.syncai.ca.</strong>
                  <p className="text-sm text-gray-400 mt-0.5">AppSource redirects you to <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">app.syncai.ca/marketplace/activate</code> — your subscription is resolved automatically via SaaS Fulfillment v2.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#3B82F6]/20 text-[#3B82F6] text-sm font-bold flex items-center justify-center">3</span>
                <div>
                  <strong className="text-white">Pick your industry template.</strong>
                  <p className="text-sm text-gray-400 mt-0.5">Oil & Gas, Mining, Pharma, Data Centers — choose, click Deploy, working tenant in 60 seconds.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#3B82F6]/20 text-[#3B82F6] text-sm font-bold flex items-center justify-center">4</span>
                <div>
                  <strong className="text-white">Connect your AI provider.</strong>
                  <p className="text-sm text-gray-400 mt-0.5">Bring your own Anthropic key (encrypted at rest), or use the platform key. All 15 agents go live immediately.</p>
                </div>
              </li>
            </ol>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="text-center border border-[#3B82F6]/30 bg-[#3B82F6]/[0.05] rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Buy SyncAI through Microsoft</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Available now on Microsoft AppSource. Talk to sales for custom enterprise terms or co-sell engagements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://appsource.microsoft.com/en-us/product/web-apps/stiggtechnologies.syncai_industrial"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white rounded-lg font-semibold shadow-lg shadow-[#3B82F6]/30 transition-colors"
              >
                Get it on AppSource <ArrowRight size={16} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white rounded-lg font-semibold transition-colors"
              >
                Contact sales
              </a>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </main>
  );
}
