'use client';

import { motion } from 'framer-motion';
import { Shield, Mail } from 'lucide-react';

export default function PrivacyPage() {
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
              <Shield className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm text-[#3B82F6] font-medium">Legal</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-gray-400 mb-4">Last updated: February 2026</p>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-gray-300">
                <Section title="1. Introduction">
                  <p>
                    StiggSync AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                    when you visit our website or use our services.
                  </p>
                </Section>

                <Section title="2. Information We Collect">
                  <p className="mb-4">We collect information that you provide directly to us, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact information (name, email, job title, company)</li>
                    <li>Assessment data submitted through our AI Readiness Assessment tool</li>
                    <li>Communications you send to us</li>
                    <li>Business information relevant to service delivery</li>
                  </ul>
                  <p className="mt-4">We automatically collect certain information when you visit our website:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Device and browser information</li>
                    <li>IP address and approximate location</li>
                    <li>Pages visited and time spent</li>
                    <li>Referral source</li>
                  </ul>
                </Section>

                <Section title="3. How We Use Your Information">
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Generate your AI Readiness Assessment report</li>
                    <li>Respond to your inquiries and requests</li>
                    <li>Send relevant communications about our services</li>
                    <li>Analyze usage patterns to improve user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </Section>

                <Section title="4. Data Storage and Security">
                  <p>
                    Your data is stored securely using industry-standard encryption and security measures.
                    We use Supabase for data storage, which provides enterprise-grade security including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>AES-256 encryption at rest</li>
                    <li>TLS 1.3 encryption in transit</li>
                    <li>SOC 2 Type II compliance</li>
                    <li>Regular security audits</li>
                  </ul>
                </Section>

                <Section title="5. Data Retention">
                  <p>
                    We retain your personal information for as long as necessary to fulfill the purposes
                    for which it was collected, including to satisfy legal, accounting, or reporting requirements.
                    Assessment data is retained for 3 years unless you request earlier deletion.
                  </p>
                </Section>

                <Section title="6. Data Sharing">
                  <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service providers who assist in our operations (hosting, analytics, email delivery)</li>
                    <li>Professional advisors (lawyers, accountants) as needed</li>
                    <li>Law enforcement when required by law</li>
                  </ul>
                </Section>

                <Section title="7. Your Rights">
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request a copy of your data in portable format</li>
                  </ul>
                </Section>

                <Section title="8. Cookies and Analytics">
                  <p>
                    We use cookies and similar technologies to analyze website traffic and improve user experience.
                    We use PostHog for analytics, which collects anonymized usage data. You can opt out of
                    analytics tracking by enabling Do Not Track in your browser.
                  </p>
                </Section>

                <Section title="9. Changes to This Policy">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material
                    changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
                  </p>
                </Section>

                <Section title="10. Contact Us">
                  <p className="mb-4">
                    For questions about this Privacy Policy or to exercise your data rights, contact us at:
                  </p>
                  <div className="bg-[#1E293B]/50 border border-[#334155] rounded-xl p-6">
                    <div className="flex items-center gap-3 text-[#3B82F6]">
                      <Mail className="w-5 h-5" />
                      <a href="mailto:privacy@stiggsync.ai" className="hover:underline">
                        privacy@stiggsync.ai
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
