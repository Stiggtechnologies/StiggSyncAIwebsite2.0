'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { CheckCircle2, FileText, Download } from 'lucide-react';

const sections = [
  'The Industrial AI Opportunity',
  'Governance Framework for Autonomous Agents',
  'Technical Integration Patterns',
  'ROI Model & Success Metrics',
  '90-Day Pilot Roadmap',
  'Change Management & Human-in-the-Loop',
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
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3B82F6]/10 rounded-lg mb-6">
                <FileText className="text-[#3B82F6]" size={32} />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Operator Brief
              </h1>
              <p className="text-3xl text-[#3B82F6] font-semibold mb-8">
                Deploying Autonomous Maintenance in 90 Days
              </p>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                A practical executive brief on deploying AI agents in maintenance & reliability — governance, ROI, and a 90-day rollout plan.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <AnimatedSection>
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6">Who This Is For</h2>
                  <ul className="space-y-3">
                    {[
                      'VP of Operations & Maintenance Leaders',
                      'Chief Operating Officers',
                      'Reliability & Asset Management Directors',
                      'Plant & Site Managers',
                      'Industrial Digitalization Teams',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">What You'll Learn</h2>
                  <ul className="space-y-3">
                    {[
                      'How autonomous AI agents differ from traditional software',
                      'Governance models for human-in-the-loop oversight',
                      'Integration patterns with existing CMMS and ERP systems',
                      'ROI modeling and success metrics',
                      'A proven 90-day pilot framework',
                      'Real-world use cases across industries',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="text-[#3B82F6] flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection delay={0.1}>
                <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 sticky top-24">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <Download className="text-[#3B82F6] mx-auto mb-4" size={48} />
                      <h3 className="text-2xl font-bold text-white mb-2">Check Your Email</h3>
                      <p className="text-gray-400">
                        The Operator Brief has been sent to {formData.email}. Please check your inbox.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-white mb-6">Download the Brief</h2>
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
                      </form>
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>

          <AnimatedSection delay={0.4}>
            <div className="border-t border-white/10 pt-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">What's Inside</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-6 flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center">
                      <span className="text-[#3B82F6] font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{section}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </main>
  );
}
