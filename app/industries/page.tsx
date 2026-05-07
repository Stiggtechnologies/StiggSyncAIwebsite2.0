'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import {
  Fuel, Zap, Truck, HardHat, Building2, Network,
  FlaskConical, ScrollText, Pill, Plane, GitBranch, Train, Server,
} from 'lucide-react';

const industries = [
  {
    icon: Fuel,
    name: 'Oil & Gas',
    slug: 'oil-and-gas',
    whatBreaks: [
      'Critical rotating equipment failures triggering $250K-$2M/hour production losses',
      'PM programs detached from real-time asset condition',
      'Work order prioritization driven by backlog, not risk exposure',
      'Cross-site coordination lag between field ops and central maintenance',
    ],
    whatChanges: [
      'Continuous risk scoring of critical rotating and static assets',
      'Real-time reprioritization of work based on production impact',
      'Cross-site operational intelligence layer',
      'Predictive escalation before shutdown thresholds are reached',
    ],
    economicFrame: 'In high-margin production environments, even marginal downtime reduction can justify autonomous infrastructure deployment within months.',
  },
  {
    icon: HardHat,
    name: 'Mining & Metals',
    slug: 'mining-and-metals',
    whatBreaks: [
      'Haul truck and shovel downtime cascading into lost throughput',
      'Reactive maintenance driven by failure, not degradation signals',
      'Massive asset fleets with fragmented visibility',
      'Compliance documentation prepared manually post-event',
    ],
    whatChanges: [
      'Equipment health scoring aligned to throughput impact',
      'Predictive maintenance windows synchronized with production cycles',
      'Fleet-level risk benchmarking across sites',
      'Continuous audit trail for environmental and safety compliance',
    ],
    economicFrame: 'With hourly downtime costs exceeding $100K on critical equipment, predictive maintenance pays for itself with a single avoided failure.',
  },
  {
    icon: Zap,
    name: 'Power Generation & Utilities',
    slug: 'power-generation-and-utilities',
    whatBreaks: [
      'Aging transmission and distribution assets increasing failure risk',
      'Deferred capital budgets compounding reliability exposure',
      'Manual compliance documentation for regulatory bodies',
      'Limited predictive modeling across distributed grid infrastructure',
    ],
    whatChanges: [
      'Risk-based asset replacement modeling',
      'Predictive grid reliability scoring (SAIDI/SAIFI impact)',
      'Automated compliance documentation and traceability',
      'Intelligent field dispatch prioritization',
    ],
    economicFrame: 'Regulatory penalties and outage costs far exceed infrastructure investment. Proactive risk management is economically defensible.',
  },
  {
    icon: Building2,
    name: 'Heavy Manufacturing',
    slug: 'heavy-manufacturing',
    whatBreaks: [
      'OEE degradation from unplanned stoppages',
      'Work order backlogs masking production-critical failures',
      'Siloed MES, CMMS, and ERP systems',
      'Maintenance strategy disconnected from production economics',
    ],
    whatChanges: [
      'AI-driven prioritization aligned to OEE impact',
      'Autonomous coordination between maintenance and production',
      'Real-time asset risk quantification',
      'Unified operational intelligence layer',
    ],
    economicFrame: 'Every percentage point of OEE improvement translates directly to throughput and margin. AI-driven prioritization compounds these gains.',
  },
  {
    icon: FlaskConical,
    name: 'Chemicals & Petrochemicals',
    slug: 'chemicals-and-petrochemicals',
    whatBreaks: [
      'Catastrophic failure risk on pressure vessels, fired heaters, and rotating equipment',
      'Mechanical integrity programs lagging real corrosion and fatigue progression',
      'Process Safety Management (PSM) documentation prepared reactively',
      'Turnaround scope decisions made without risk-quantified data',
    ],
    whatChanges: [
      'Continuous corrosion-rate and damage-mechanism modeling on static assets',
      'Risk-based inspection (API 580/581) driven by live condition data',
      'Automated PSM and MOC documentation aligned to OSHA 1910.119',
      'Turnaround scope optimization weighted by quantified risk reduction',
    ],
    economicFrame: 'A single uncontrolled release or LOPC event can exceed $100M in liability, environmental cost, and reputational damage. Mechanical integrity is balance-sheet-defensible spend.',
  },
  {
    icon: ScrollText,
    name: 'Pulp, Paper & Packaging',
    slug: 'pulp-paper-and-packaging',
    whatBreaks: [
      'Recovery boiler and paper machine downtime cascading across the line',
      'Aging continuous-process assets with deferred replacement capital',
      'Roll, felt, and screen-life forecasting based on calendar, not condition',
      'Energy-intensity penalties from unmonitored efficiency drift',
    ],
    whatChanges: [
      'Condition-based replacement forecasting for rolls, felts, and screens',
      'Real-time recovery boiler integrity monitoring',
      'Continuous energy efficiency scoring tied to ISO 50001',
      'Integrated DCS, CMMS, and reliability data layer',
    ],
    economicFrame: 'In continuous-process environments, a single avoided unplanned outage typically funds a year of autonomous infrastructure.',
  },
  {
    icon: Pill,
    name: 'Pharmaceuticals & Life Sciences',
    slug: 'pharmaceuticals',
    whatBreaks: [
      'GMP-critical equipment qualification and re-validation overhead',
      'Calibration and PM compliance gaps risking FDA 21 CFR Part 11 exposure',
      'Sterile/cleanroom asset deviations not detected until batch QC review',
      'Validated systems requiring manual audit trail reconstruction',
    ],
    whatChanges: [
      'Continuous qualification and calibration drift monitoring',
      'Automated GxP audit trails (immutable, signed, regulator-ready)',
      'Predictive deviation detection on cleanroom HVAC and utilities',
      'Risk-based revalidation scope driven by live condition data',
    ],
    economicFrame: 'A single GMP deviation can suspend a production line and cost more than a year of autonomous monitoring. Compliance is the buying signal.',
  },
  {
    icon: Plane,
    name: 'Aerospace & Defense Manufacturing + MRO',
    slug: 'aerospace-and-defense',
    whatBreaks: [
      'High-CAPEX assets (autoclaves, CNC, test stands) with idiosyncratic failure modes',
      'AS9100 and ITAR documentation prepared manually per audit cycle',
      'MRO turn times constrained by parts and tooling visibility',
      'Configuration-controlled work orders requiring full chain-of-custody',
    ],
    whatChanges: [
      'Predictive scheduling for high-value tooling and test equipment',
      'AS9100 / ITAR-compliant audit trails generated continuously',
      'Cross-program tooling utilization optimization',
      'Configuration-aware work order routing',
    ],
    economicFrame: 'A single grounded airframe can cost $500K/day in revenue and lease obligations. Asset availability is contractually monetized.',
  },
  {
    icon: GitBranch,
    name: 'Pipelines & Midstream',
    slug: 'pipelines-and-midstream',
    whatBreaks: [
      'Integrity management programs lagging real wall-loss and crack progression',
      'PHMSA / DOT documentation prepared reactively post-incident',
      'In-line inspection (ILI) data fragmented across vendors and runs',
      'Pump station and compressor reliability decoupled from throughput economics',
    ],
    whatChanges: [
      'Continuous threat-and-consequence modeling per ASME B31.8S',
      'Unified ILI history with predictive corrosion-rate modeling',
      'Automated PHMSA / NEB regulatory submittals',
      'Throughput-weighted compressor and pump reliability scoring',
    ],
    economicFrame: 'A single integrity event can exceed $1B in cleanup, regulatory, and litigation cost. Continuous monitoring is the only economically defensible posture.',
  },
  {
    icon: Train,
    name: 'Rail, Marine & Aviation Infrastructure',
    slug: 'rail-marine-and-aviation',
    whatBreaks: [
      'Locomotive, vessel, and airframe availability constrained by manual inspection cycles',
      'Crew, fuel, and slot-time costs amplified by unplanned downtime',
      'Component overhaul intervals based on usage hours, not actual condition',
      'Cross-fleet reliability data trapped in OEM telemetry silos',
    ],
    whatChanges: [
      'Cross-fleet reliability benchmarking and predictive overhaul scheduling',
      'Unified telemetry layer across OEMs and operators',
      'Condition-based component lifing replacing fixed-interval overhauls',
      'Network-level disruption forecasting for crew and slot optimization',
    ],
    economicFrame: 'A single grounded aircraft, derailed train, or stranded vessel can cost $100K-$1M/day. Network-effect reliability gains compound across the fleet.',
  },
  {
    icon: Truck,
    name: 'Equipment Rental',
    slug: 'equipment-rental',
    whatBreaks: [
      'Hidden degradation reducing rental readiness',
      'Maintenance cycles not aligned with utilization patterns',
      'Reactive repairs reducing asset availability windows',
      'Poor visibility into fleet-wide asset condition',
    ],
    whatChanges: [
      'Utilization-aware predictive maintenance scheduling',
      'Automated service timing between rental cycles',
      'Fleet-level health visibility dashboard',
      'Increased asset turnover efficiency',
    ],
    economicFrame: 'Higher fleet utilization and reduced emergency repairs directly improve unit economics and customer retention.',
  },
  {
    icon: Network,
    name: 'Multi-site Operators',
    slug: 'multi-site-operators',
    whatBreaks: [
      'Inconsistent maintenance standards across sites',
      'No enterprise-wide asset risk benchmarking',
      'Delayed executive visibility into operational risk',
      'Manual reporting aggregation across locations',
    ],
    whatChanges: [
      'Enterprise-wide risk visibility and benchmarking',
      'Standardized AI-driven prioritization logic',
      'Cross-site performance benchmarking',
      'Executive-level operational dashboards',
    ],
    economicFrame: 'Standardization at scale creates compounding efficiency gains that accelerate with each site brought online.',
  },
  {
    icon: Server,
    name: 'Data Centers & Critical Digital Infrastructure',
    slug: 'data-centers',
    whatBreaks: [
      'Thermal events from rising rack densities (50-100 kW GPU racks vs 5-10 kW traditional)',
      'Cooling and UPS failures cascading into customer SLA breaches',
      'PM cycles built for legacy densities, not AI/ML workload patterns',
      'Siloed BMS, DCIM, and CMMS preventing single-pane-of-glass risk visibility',
    ],
    whatChanges: [
      'Real-time thermal-risk scoring across cooling and power assets',
      'Predictive maintenance windows aligned to workload patterns (training runs vs steady-state)',
      'Unified BMS + DCIM + CMMS intelligence layer',
      'SLA-impact-weighted work prioritization across critical infrastructure',
    ],
    economicFrame: 'At hyperscale, a single hour of unplanned downtime can exceed $1M in customer credits and reputational cost. Predictive cooling and power maintenance pays for itself with a single avoided thermal event.',
  },
];

export default function IndustriesPage() {
  return (
    <main className="pt-16">
      <Section>
        <AnimatedSection>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Built for <span className="text-[#3B82F6]">Asset-Intensive</span> Industries
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Every industry has unique operational challenges. Our AI agents adapt to your specific context, constraints, and priorities.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-[#3B82F6]/10 to-transparent p-8 border-b border-white/10">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center">
                        <Icon className="text-[#3B82F6]" size={28} />
                      </div>
                      <h2 className="text-3xl font-bold text-white">{industry.name}</h2>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div>
                      <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-4">
                        What Breaks Today
                      </h3>
                      <ul className="space-y-3">
                        {industry.whatBreaks.map((point, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wider mb-4">
                        What SyncAI Changes
                      </h3>
                      <ul className="space-y-3">
                        {industry.whatChanges.map((change, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm font-medium">{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-8 pb-8">
                    <p className="text-sm text-gray-500 italic border-l-2 border-[#3B82F6]/30 pl-4 mb-6">
                      {industry.economicFrame}
                    </p>
                    <a
                      href={`https://app.syncai.ca/signup?industry=${industry.slug}`}
                      className="inline-flex items-center px-5 py-2.5 bg-[#3B82F6] text-white rounded-lg font-medium text-sm hover:bg-[#3B82F6]/90 transition-colors shadow-md shadow-[#3B82F6]/20"
                    >
                      Deploy {industry.name} template →
                    </a>
                    <span className="text-xs text-gray-500 ml-3">60-second tenant provisioning</span>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-32 max-w-4xl mx-auto">
            <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-12 mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Economic Impact Across Industries
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Even modest improvements in unplanned downtime, reactive labor allocation, spare parts carrying cost, and compliance preparation time can justify autonomous maintenance deployment within a single fiscal cycle.
                </p>
                <p className="text-white font-medium">
                  SyncAI is designed for environments where operational risk carries measurable financial consequences.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="text-center border border-[#3B82F6]/30 bg-[#3B82F6]/[0.05] rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Talk to Us About Your Environment
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              If you operate critical physical assets, SyncAI can adapt to your operational context.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors shadow-lg shadow-[#3B82F6]/30"
            >
              Contact Us
            </a>
          </div>
        </AnimatedSection>
      </Section>
    </main>
  );
}
