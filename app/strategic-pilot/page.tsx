'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { CheckCircle2, Clock, Users, FileCheck, Rocket } from 'lucide-react';

const pilotPhases = [
  {
    phase: 'Discovery',
    duration: 'Week 1-2',
    activities: 'Data integration, system mapping, stakeholder interviews',
  },
  {
    phase: 'Deployment',
    duration: 'Week 3-6',
    activities: 'AI agent configuration, workflow integration, team training',
  },
  {
    phase: 'Optimization',
    duration: 'Week 7-12',
    activities: 'Performance tuning, expanded use cases, ROI validation',
  },
];

export default function StrategicPilotPage() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    company: '',
    industry: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-16">
      <Section>
        <AnimatedSection>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Strategic <span className="text-[#3B82F6]">Pilot Program</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A 90-day engagement to deploy autonomous AI agents in your operations and validate measurable impact.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto mb-20">
          <div>
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-white mb-8">The 90-Day Framework</h2>
              <div className="space-y-6">
                {pilotPhases.map((phase, index) => (
                  <div
                    key={index}
                    className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-6"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                      <span className="text-sm text-[#3B82F6] font-semibold">{phase.duration}</span>
                    </div>
                    <p className="text-gray-400">{phase.activities}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mt-12 border border-[#3B82F6]/30 bg-[#3B82F6]/[0.05] rounded-lg p-8">
                <h3 className="text-xl font-bold text-white mb-4">What You Get</h3>
                <ul className="space-y-3">
                  {[
                    'Dedicated AI agent deployment team',
                    'Integration with existing CMMS/ERP systems',
                    'Custom workflow configuration',
                    'Team training and change management support',
                    'Executive reporting and ROI analysis',
                    'Post-pilot expansion roadmap',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="flex-shrink-0 text-[#3B82F6] mt-0.5" size={20} />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-12 border border-white/10 bg-white/[0.02] rounded-lg p-8">
                <h3 className="text-xl font-bold text-white mb-6">Next Steps After Application</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Review Within 48 Hours</h4>
                      <p className="text-sm text-gray-400">Our team reviews your application and operational context</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Executive Alignment Call</h4>
                      <p className="text-sm text-gray-400">30-minute call to discuss goals, constraints, and success criteria</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Data Discovery Session</h4>
                      <p className="text-sm text-gray-400">Technical assessment of your systems and data architecture</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Custom Pilot Proposal</h4>
                      <p className="text-sm text-gray-400">Tailored engagement plan with timeline, scope, and investment</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection delay={0.1}>
              <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-6">Apply for Pilot</h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="text-[#3B82F6] mx-auto mb-4" size={48} />
                    <h3 className="text-2xl font-bold text-white mb-2">Application Received</h3>
                    <p className="text-gray-400">
                      Thank you for your interest. Our team will review your application and be in touch within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                        Title *
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                        placeholder="VP of Operations"
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
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-2">
                        Industry *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                      >
                        <option value="" className="bg-[#0B0F14]">
                          Select an industry
                        </option>
                        <option value="manufacturing" className="bg-[#0B0F14]">
                          Manufacturing
                        </option>
                        <option value="energy" className="bg-[#0B0F14]">
                          Energy & Utilities
                        </option>
                        <option value="water" className="bg-[#0B0F14]">
                          Water & Wastewater
                        </option>
                        <option value="aviation" className="bg-[#0B0F14]">
                          Aviation & Aerospace
                        </option>
                        <option value="real-estate" className="bg-[#0B0F14]">
                          Commercial Real Estate
                        </option>
                        <option value="maritime" className="bg-[#0B0F14]">
                          Maritime & Shipping
                        </option>
                        <option value="other" className="bg-[#0B0F14]">
                          Other
                        </option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                        placeholder="john@acme.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Tell us about your operational challenges
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors resize-none"
                        placeholder="Describe your current maintenance challenges, team size, and what you hope to achieve..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-[#3B82F6]/30 hover:shadow-[#3B82F6]/50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Section>
    </main>
  );
}
