'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-16">
      <Section>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3B82F6]/10 rounded-lg mb-6">
                <Mail className="text-[#3B82F6]" size={32} />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Get in <span className="text-[#3B82F6]">Touch</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Have questions about StiggSync? Want to discuss your operational challenges? We're here to help.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 md:p-12">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="text-[#3B82F6] mx-auto mb-4" size={64} />
                  <h2 className="text-3xl font-bold text-white mb-4">Message Received</h2>
                  <p className="text-xl text-gray-400 mb-2">
                    Thank you for reaching out, {formData.name}.
                  </p>
                  <p className="text-gray-400">
                    Our team will respond to {formData.email} within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                        placeholder="john@company.com"
                      />
                    </div>
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors resize-none"
                      placeholder="Tell us about your operational challenges or ask us a question..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-[#3B82F6]/30 hover:shadow-[#3B82F6]/50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Strategic Pilots</h3>
                <p className="text-gray-400 mb-6">
                  Ready to deploy autonomous AI in your operations?
                </p>
                <a
                  href="/strategic-pilot"
                  className="inline-block px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors"
                >
                  Apply Now
                </a>
              </div>

              <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Operator Brief</h3>
                <p className="text-gray-400 mb-6">
                  Download our executive guide to autonomous maintenance.
                </p>
                <a
                  href="/operator-brief"
                  className="inline-block px-6 py-3 bg-white/5 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Get the Brief
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </main>
  );
}
