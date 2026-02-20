'use client';

import { motion } from 'framer-motion';
import { FileText, Mail } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14]">
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/5 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm text-[#3B82F6] font-medium">Legal</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-gray-400 mb-4">Last updated: February 2026</p>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-gray-300">
                <Section title="1. Acceptance of Terms">
                  <p>
                    By accessing or using the StiggSync AI website and services, you agree to be bound by
                    these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </Section>

                <Section title="2. Description of Services">
                  <p>
                    StiggSync AI provides an enterprise-grade AI infrastructure platform for industrial
                    maintenance optimization. Our services include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>AI Readiness Assessment tools</li>
                    <li>ROI estimation calculators</li>
                    <li>Strategic consulting and pilot programs</li>
                    <li>AI agent deployment for maintenance operations</li>
                  </ul>
                </Section>

                <Section title="3. Assessment Tool Disclaimer">
                  <p>
                    The AI Readiness Assessment and ROI Calculator are provided for informational and
                    educational purposes only. The results generated are estimates based on industry
                    benchmarks and the information you provide.
                  </p>
                  <div className="bg-[#1E293B]/50 border border-[#F59E0B]/30 rounded-xl p-4 mt-4">
                    <p className="text-[#F59E0B] font-medium mb-2">Important Notice:</p>
                    <p className="text-gray-400">
                      We do not guarantee any specific ROI, cost savings, or operational improvements.
                      Actual results will vary based on implementation, operational factors, data quality,
                      and organizational readiness. The estimates provided should not be relied upon as
                      financial projections.
                    </p>
                  </div>
                </Section>

                <Section title="4. User Responsibilities">
                  <p className="mb-4">When using our services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Use the services only for lawful purposes</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Not interfere with the proper functioning of the services</li>
                    <li>Not use automated systems to access the services without permission</li>
                  </ul>
                </Section>

                <Section title="5. Intellectual Property">
                  <p>
                    All content on this website, including text, graphics, logos, software, and
                    methodologies, is the property of StiggSync AI or its licensors and is protected
                    by intellectual property laws.
                  </p>
                  <p className="mt-4">
                    You may not reproduce, distribute, modify, or create derivative works from our
                    content without express written permission. Your use of our assessment tools does
                    not grant you any intellectual property rights in our underlying technology.
                  </p>
                </Section>

                <Section title="6. Confidentiality">
                  <p>
                    Information you provide through our assessment tools and pilot applications will
                    be treated as confidential business information. We will not disclose your specific
                    assessment results or business data to third parties without your consent, except
                    as required by law or as described in our Privacy Policy.
                  </p>
                </Section>

                <Section title="7. Limitation of Liability">
                  <p>
                    To the maximum extent permitted by law, StiggSync AI shall not be liable for any
                    indirect, incidental, special, consequential, or punitive damages, including but
                    not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Loss of profits, revenue, or business opportunities</li>
                    <li>Business interruption</li>
                    <li>Loss of data</li>
                    <li>Damages arising from reliance on assessment results</li>
                  </ul>
                  <p className="mt-4">
                    Our total liability for any claims arising from these terms or your use of our
                    services shall not exceed the amount you paid us, if any, in the twelve months
                    preceding the claim.
                  </p>
                </Section>

                <Section title="8. Indemnification">
                  <p>
                    You agree to indemnify and hold harmless StiggSync AI, its officers, directors,
                    employees, and agents from any claims, damages, losses, or expenses arising from
                    your use of our services or violation of these terms.
                  </p>
                </Section>

                <Section title="9. Modifications to Services">
                  <p>
                    We reserve the right to modify, suspend, or discontinue any part of our services
                    at any time without notice. We will not be liable to you or any third party for
                    any modification, suspension, or discontinuation of services.
                  </p>
                </Section>

                <Section title="10. Governing Law">
                  <p>
                    These Terms of Service shall be governed by and construed in accordance with the
                    laws of Canada, without regard to its conflict of law provisions. Any disputes
                    arising from these terms shall be resolved in the courts of Alberta, Canada.
                  </p>
                </Section>

                <Section title="11. Changes to Terms">
                  <p>
                    We may update these Terms of Service from time to time. We will notify you of
                    material changes by posting the new terms on this page. Your continued use of
                    our services after changes are posted constitutes acceptance of the modified terms.
                  </p>
                </Section>

                <Section title="12. Contact">
                  <p className="mb-4">
                    For questions about these Terms of Service, contact us at:
                  </p>
                  <div className="bg-[#1E293B]/50 border border-[#334155] rounded-xl p-6">
                    <div className="flex items-center gap-3 text-[#3B82F6]">
                      <Mail className="w-5 h-5" />
                      <a href="mailto:legal@stiggsync.ai" className="hover:underline">
                        legal@stiggsync.ai
                      </a>
                    </div>
                  </div>
                </Section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pb-6 border-b border-[#1E293B] last:border-0">
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
      {children}
    </div>
  );
}
