'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { CheckCircle2, FileText, Download, ChevronRight } from 'lucide-react';

const tableOfContents = [
  'The Structural Problem',
  'The Shift: From Software to Infrastructure',
  'The StiggSync Agent Model',
  'Governance & Human Oversight',
  'The 90-Day Deployment Framework',
  'Typical 90-Day Impact',
  'ROI Considerations',
  'Security & Data Governance',
];

const impactMetrics = [
  'Reduced unplanned downtime',
  'Improved work order prioritization',
  'Lower reactive overtime',
  'Increased audit readiness',
  'Greater asset risk visibility',
  'Clear executive reporting',
];

const idealCandidates = [
  'Downtime costs are material',
  'Work order backlogs are persistent',
  'Compliance audits are high-pressure',
  'Leadership is exploring AI integration',
  'Data exists but intelligence is lacking',
];

export default function OperatorBriefPage() {
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    role: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-16">
      <Section>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#3B82F6]/10 rounded-lg mb-6">
                <FileText className="text-[#3B82F6]" size={40} />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Operator Brief
              </h1>
              <p className="text-3xl text-[#3B82F6] font-semibold mb-8">
                Deploying Autonomous Maintenance in 90 Days
              </p>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                A practical executive guide for asset-intensive organizations
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-12 mb-20">
            <div className="lg:col-span-3 space-y-16">
              <AnimatedSection>
                <div className="border border-[#3B82F6]/30 bg-[#3B82F6]/[0.05] rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Executive Summary</h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Asset-intensive industries are facing a structural shift. Maintenance complexity has surpassed the limits of human coordination.
                    </p>
                    <p>
                      This Operator Brief outlines how autonomous AI agents operate inside maintenance organizations, provides a structured 90-day pilot deployment framework, and addresses governance and ROI considerations.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">What's Inside</h2>
                  <div className="space-y-3">
                    {tableOfContents.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-4"
                      >
                        <ChevronRight className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">The Core Problem</h2>
                  <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 space-y-4">
                    <p className="text-xl text-gray-300 leading-relaxed">
                      Traditional CMMS platforms track work, store records, and generate reports. They are{' '}
                      <span className="text-white font-semibold">not designed</span> to:
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Continuously analyze risk',
                        'Dynamically reprioritize work',
                        'Forecast emerging failures',
                        'Coordinate across departments',
                        'Optimize strategy autonomously',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-lg text-white font-semibold pt-4">
                      This leaves maintenance managers in perpetual firefighting mode.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">The Shift to Infrastructure</h2>
                  <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 space-y-4">
                    <p className="text-xl text-gray-300 leading-relaxed">
                      StiggSync functions as <span className="text-[#3B82F6] font-semibold">an AI workforce embedded above existing systems</span>.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      It does not replace CMMS or ERP platforms. It orchestrates them intelligently with:
                    </p>
                    <ul className="space-y-3">
                      {[
                        'AI agents aligned to RACI structures',
                        'Continuous risk scoring models',
                        'Autonomous work prioritization',
                        'Predictive asset health models',
                        'Escalation frameworks with governance',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="text-[#3B82F6] flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Typical 90-Day Impact</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {impactMetrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-4 flex items-start space-x-3"
                      >
                        <CheckCircle2 className="text-[#3B82F6] flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-300 text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg text-white font-semibold mt-6">
                    Maintenance leadership shifts from reactive coordination to predictive control.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">When to Deploy</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Organizations are ideal candidates when:
                  </p>
                  <div className="space-y-3">
                    {idealCandidates.map((item, idx) => (
                      <div
                        key={idx}
                        className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-4 flex items-start space-x-3"
                      >
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.7}>
                <div className="border border-[#3B82F6]/30 bg-[#3B82F6]/[0.05] rounded-lg p-8">
                  <h2 className="text-3xl font-bold text-white mb-4">The Strategic Outlook</h2>
                  <p className="text-xl text-gray-300 leading-relaxed mb-4">
                    Industrial organizations that adopt AI infrastructure early will reduce operational volatility, improve financial predictability, and gain strategic control over asset risk.
                  </p>
                  <p className="text-lg text-white font-semibold">
                    The question is not whether autonomous intelligence will enter maintenance.
                    <br />
                    <span className="text-[#3B82F6]">It is whether your organization leads or follows.</span>
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2">
              <AnimatedSection delay={0.1}>
                <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 sticky top-24">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <Download className="text-[#3B82F6] mx-auto mb-4" size={48} />
                      <h3 className="text-2xl font-bold text-white mb-2">Check Your Email</h3>
                      <p className="text-gray-400 mb-6">
                        The Operator Brief has been sent to <span className="text-white">{formData.email}</span>
                      </p>
                      <div className="border-t border-white/10 pt-6 mt-6">
                        <p className="text-sm text-gray-400 mb-4">While you're here:</p>
                        <a
                          href="/strategic-pilot"
                          className="inline-block w-full px-6 py-3 bg-white/5 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                        >
                          Apply for Strategic Pilot
                        </a>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-white mb-4">Download the Full Brief</h2>
                      <p className="text-gray-400 mb-6 text-sm">
                        Get the complete 25-page executive guide with detailed frameworks, ROI models, and deployment roadmaps.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                            placeholder="your.name@company.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                            Company *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                            placeholder="Acme Industries"
                          />
                        </div>

                        <div>
                          <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                            Role *
                          </label>
                          <input
                            type="text"
                            id="role"
                            name="role"
                            required
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                            placeholder="VP of Operations"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-all shadow-lg shadow-[#3B82F6]/30 hover:shadow-[#3B82F6]/50 flex items-center justify-center space-x-2"
                        >
                          <Download size={20} />
                          <span>Download Brief</span>
                        </button>

                        <p className="text-xs text-gray-500 text-center">
                          25-page PDF • Immediate delivery • No spam
                        </p>
                      </form>

                      <div className="mt-8 pt-8 border-t border-white/10">
                        <h3 className="text-sm font-semibold text-white mb-4">Who This Is For</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                          <li>• VP of Operations</li>
                          <li>• Chief Operating Officers</li>
                          <li>• Reliability Directors</li>
                          <li>• Plant & Site Managers</li>
                          <li>• Industrial Digital Teams</li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
