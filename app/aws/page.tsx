'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Cloud, Shield, Zap, Building2, Layers, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const PLANS = [
  {
    code: 'starter', name: 'Starter', price: '$99', cadence: 'per user / month',
    target: 'Pilots and small operations',
    features: [
      'Up to 10 users', '5 AI agents', '3 industry templates',
      'Core integrations (Anthropic, OpenAI)', 'Email support',
    ],
  },
  {
    code: 'pro', name: 'Professional', price: '$199', cadence: 'per user / month',
    target: 'Mid-size deployments', featured: true,
    features: [
      'Unlimited users', 'All 15 agents + orchestrator', 'All 13 industry templates',
      'Full integrations roster (26 vendors)', 'SOC 2 reports', 'Up to 5 sites',
      'Priority email support',
    ],
  },
  {
    code: 'enterprise', name: 'Enterprise', price: 'Private offer', cadence: 'custom',
    target: 'Multi-site, autonomous deployments',
    features: [
      'Unlimited users + sites', 'Custom agent prompts', 'On-prem option',
      'Autonomous mode', 'Named CSM', 'AWS Private Offer with custom terms',
    ],
  },
];

const HIGHLIGHTS = [
  {
    icon: Cloud, title: 'AWS Marketplace SaaS Listing',
    body: 'Standard ResolveCustomer / GetEntitlements flow. Subscribe-success and lifecycle events relayed via SNS → SQS to our fulfillment endpoint.',
  },
  {
    icon: Layers, title: 'EDP / private-offer eligible',
    body: 'Burn down your AWS Enterprise Discount Program commit. Custom seat counts, term lengths, and MDF eligibility via private offer.',
  },
  {
    icon: Building2, title: '13 industry templates',
    body: 'Oil & Gas, Mining, Pharma, Data Centers + 9 more — pre-configured asset taxonomy, FMEA library, ISO 55000 KPIs, integrations roster.',
  },
  {
    icon: Zap, title: '60-second deployment',
    body: 'Pick your industry, click Deploy. Tenant up with assets, KPIs, and 15 agents prioritized for your context.',
  },
  {
    icon: Shield, title: 'SOC 2 + IAM-friendly',
    body: 'Customer-controlled credentials encrypted at rest. Optional VPC peering and PrivateLink for SAP/Maximo/PI connectors.',
  },
  {
    icon: Users, title: 'Buy on AWS Marketplace',
    body: 'Single subscription button. Customer billed by AWS, payouts handled via your AWS Marketplace Seller account.',
  },
];

export default function AwsMarketplacePage() {
  return (
    <main className="pt-16">
      <Section>
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs uppercase tracking-wide text-orange-400">
              <Cloud size={14} />
              Available on AWS Marketplace
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              SyncAI on <span className="text-orange-400">AWS Marketplace</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Autonomous AI agents for asset-intensive industries — purchase via AWS Marketplace,
              burn against your EDP commit, deploy in 60 seconds.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://aws.amazon.com/marketplace/pp/prodview-syncai-industrial"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-semibold shadow-lg shadow-orange-600/30 transition-colors"
              >
                Subscribe on AWS Marketplace
                <ArrowRight size={16} />
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 hover:border-white/40 text-white rounded-lg font-semibold transition-colors">
                Request private offer
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              EDP-eligible · Per-seat monthly billing · Free 14-day trial
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {HIGHLIGHTS.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div key={idx} className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-6">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-orange-400" size={20} />
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Plans on AWS Marketplace</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Same pricing as direct purchase — billed and burned against your AWS commit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {PLANS.map((plan) => (
              <div
                key={plan.code}
                className={`border rounded-lg p-8 backdrop-blur-sm ${
                  plan.featured
                    ? 'border-orange-500/40 bg-orange-500/[0.04]'
                    : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                {plan.featured && (
                  <div className="inline-block px-3 py-1 mb-4 bg-orange-500 text-white rounded-full text-[10px] uppercase tracking-wider font-semibold">
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
                      <CheckCircle2 size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://aws.amazon.com/marketplace/pp/prodview-syncai-industrial"
                  className={`block text-center px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                    plan.featured
                      ? 'bg-orange-600 hover:bg-orange-500 text-white'
                      : 'border border-orange-500/40 text-orange-400 hover:bg-orange-500/10'
                  }`}
                >
                  Subscribe on AWS
                </a>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="text-center border border-orange-500/30 bg-orange-500/[0.05] rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Buy SyncAI through AWS</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Available now on AWS Marketplace — public or private offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://aws.amazon.com/marketplace/pp/prodview-syncai-industrial"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-semibold shadow-lg shadow-orange-600/30 transition-colors"
              >
                Subscribe on AWS Marketplace <ArrowRight size={16} />
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white rounded-lg font-semibold transition-colors">
                Request private offer
              </a>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </main>
  );
}
