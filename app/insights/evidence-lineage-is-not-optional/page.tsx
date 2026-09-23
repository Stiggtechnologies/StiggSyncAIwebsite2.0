'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { APP_SETUP_URL } from '@/lib/site-links';

export default function EvidenceLineageIsNotOptionalPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14]">
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-[#3B82F6] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Insights
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <header className="mb-12">
            <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
              Reliability Engineering
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Evidence Lineage Is Not Optional
            </h1>
            <p className="text-xl text-gray-400">
              A haul-fleet planner ranks a truck for deferral. A superintendent gets a pump family
              tagged “bad actor.” A reliability engineer is handed PM intervals the model wants to
              stretch. The dashboard is confident. The record behind it is not.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              The score is not the decision. The chart is not the proof. And a recommendation that
              cannot show which asset configuration, which failure and maintenance records, and
              which human judgment produced it is not an industrial decision. It is a claim with
              the trail missing.
            </p>

            <p>
              Petroleum, petrochemical, and natural-gas reliability practice has required
              reconstructable data for years. Mining inherited the same problem even where the
              plant never named the standards: work history, condition data, and inspection live
              in different systems, and the argument that connects them to the next authorized
              action is lost at the shift change.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the public standards already require
            </h2>

            <p>
              ISO 14224:2016,{' '}
              <em>
                Petroleum, petrochemical and natural gas industries — Collection and exchange of
                reliability and maintenance data for equipment
              </em>
              , is the current international edition (third edition, 15 September 2016; ISO/TC 67).
              The official scope is public: a reliability language for collecting and exchanging
              reliability and maintenance data during the operational life of equipment, including
              data-quality control and assurance practices.
            </p>

            <p>The minimum data it asks for is not a vibe. Three categories:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Equipment data — taxonomy and attributes, including a defined equipment boundary</li>
              <li>Failure data — failure cause and failure consequence</li>
              <li>
                Maintenance data — the maintenance action, resources used, maintenance consequence,
                and downtime
              </li>
            </ul>

            <p>
              Those categories exist because reliability, availability, maintenance planning, and
              safety or environmental analysis need a shared object. ISO 14224 does not collect
              direct cost data and does not prescribe the analysis method. It is a data standard,
              not a decision engine. Without a common record of what failed, on which item, under
              what boundary, and what maintenance was actually done, later analysis is theatre.
            </p>

            <p>
              SAE JA1011 makes the same demand from the RCM side. SAE International revised{' '}
              <em>Evaluation Criteria for Reliability-Centered Maintenance (RCM) Processes</em> as
              JA1011_202411 on 5 November 2024 (DOI{' '}
              <a
                href="https://doi.org/10.4271/JA1011_202411"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                10.4271/JA1011_202411
              </a>
              ). Failure effects have to describe what would happen if no task were done to
              anticipate, prevent, or detect the failure, including what evidence, if any, that the
              failure has occurred. Hidden functions are separated from evident ones; safety and
              environmental consequences from economic ones. The analysis and the failure-management
              policy have to be documented in a form the asset owner or user can accept.
            </p>

            <p>
              API Recommended Practice 580, <em>Risk-Based Inspection</em>, makes reconstructability
              a program requirement. In the fourth edition, required data shall be captured and
              maintained so an RBI assessment can be recreated or updated later by people who were
              not on the original team. Inputs and assumptions are to be validated by qualified
              personnel. A ranking that cannot be rebuilt is not an RBI program. It is a snapshot.
            </p>

            <p>
              None of those documents is a SyncAI certification. They are the industrial rule: if a
              later reviewer cannot reconstruct what was believed, the organization does not have a
              decision record.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Lineage is not a data lake</h2>

            <p>
              Reliability teams already have data: historians, CMMS work orders, inspection reports,
              OEM manuals, contractor RCAs. What they often do not have is lineage — a durable chain
              from a named asset configuration through observed evidence to a recommendation, a named
              human authorization, and a verification signal.
            </p>

            <p>Lineage answers questions a warehouse does not:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Which equipment unit, at which indenture, inside which boundary?</li>
              <li>
                Were failure cause, mechanism, and mode kept distinct, as ISO 14224 requires of a
                reliability language?
              </li>
              <li>Was the failure hidden until demand, or evident to operations?</li>
              <li>Which records were observed, which were assumed, and which were missing?</li>
              <li>Who accepted the recommended action, and under what operating boundary?</li>
            </ul>

            <p>
              A data lake can store the files. It cannot, by itself, keep those distinctions.
              Merging tags without a boundary definition is how two pumps become one “bad actor.”
              Collapsing cause into mode is how a lubrication problem becomes a bearing code.
              Dropping the detection method is how a hidden protective function is treated as if it
              had been watched continuously.
            </p>

            <p>
              ISO 14224 names the failure that is not immediately evident to operations and
              maintenance personnel as a hidden failure. Those failures are first revealed when the
              function is tested or demanded. If the record does not say how the failure was
              detected, a model will treat a test finding and a running failure as the same event.
              The recommendation that follows will look precise and be unaccountable.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Dashboards classify. They do not reconstruct.
            </h2>

            <p>
              A ranked list is a classification. At best it is a consistent ordering of risk or
              remaining life. At worst it is the fastest way to fill a morning meeting. Either way,
              the list answers a different question than the plant has to answer.
            </p>

            <p>
              The list asks: <em>How do we sequence attention?</em>
            </p>

            <p>
              The plant asks:{' '}
              <em>
                What are we allowed to change, on what evidence, and who is accountable if the
                evidence was wrong?
              </em>
            </p>

            <p>
              Those questions diverge under production pressure. Stretching a PM interval or
              extending an inspection can be the right call. It can also be a call made on a
              rescaled historian tag, a work history that does not share the current asset
              configuration, or an inspection technique that cannot detect the damage mechanism in
              play. API RP 580 requires that inspection effectiveness be evaluated against the
              identified mechanism. A dashboard that cannot show that evaluation is not doing RBI.
              It is sorting.
            </p>

            <p>
              If the record does not separate observed evidence from hypothesis, the rank is a story
              the system will treat as fact. More sensors increase the volume of the archive. They
              do not add a governor. Nobody is forced to say what is proven, what is assumed, and
              what is still missing before the next action is approved.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Recommend ≠ authorize</h2>

            <p>
              The gap gets wider when analysis is fast. A reliability engineer, a contractor, or a
              model can draft a recommendation in minutes. Drafting is cheap. Authorization is not
              — not on a haul fleet, a processing plant, or any asset whose failure has safety,
              environmental, or production consequence.
            </p>

            <p className="text-xl font-semibold text-white">
              Recommend ≠ authorize. A recommendation is an argument. Authorization is an act by a
              person who can be named.
            </p>

            <p>
              SAE JA1011 already treats the documented analysis as something the asset owner or user
              must be able to accept. That is an accountability design, not a user-interface
              pattern. If the system cannot show who accepted, rejected, escalated, or returned the
              recommended action, the organization has a suggestion trail, not a governed decision.
            </p>

            <p>
              Unsupervised plant execute is the wrong default for the same reason. Writing a
              recommendation into a CMMS or a control-system workflow is not being allowed to change
              the plant. A tool that blurs recommend and authorize will look efficient in a demo and
              unaccountable on the night shift.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A practical test for evidence lineage
            </h2>

            <p>
              A useful test for any mining, energy, or oil-and-gas reliability workflow — CMMS
              module, RCM workbook, RBI tool, or model output — is whether a later reviewer can
              reconstruct the recommendation without calling the original engineer.
            </p>

            <div className="bg-[#1E293B]/50 border border-[#334155] rounded-xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                If the record cannot answer these, lineage is still missing
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] font-bold">1</span>
                  <span>Which equipment unit, taxonomy level, and boundary was this about?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] font-bold">2</span>
                  <span>
                    Which failure and maintenance records were used — cause, mechanism, mode,
                    detection method, and downtime kept distinct?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] font-bold">3</span>
                  <span>What was observed versus hypothesized, and what was missing?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] font-bold">4</span>
                  <span>What action was recommended, and what was actually authorized?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] font-bold">5</span>
                  <span>Who approved it, and under what operating boundary?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] font-bold">6</span>
                  <span>What verification would show the action worked — and was it checked?</span>
                </li>
              </ul>
            </div>

            <p>
              Those questions do not require a new standard. They are ISO 14224 data discipline, SAE
              JA1011 acceptance discipline, and API RP 580 reconstructability applied to the object
              plants already have. The missing piece is usually not another dashboard tile. It is a
              decision record that can carry evidence grade, approval state, and verification across
              shifts and systems of record.
            </p>

            <p>
              When that record exists, ranks become inputs instead of conclusions. Work orders
              become the authorized work, not the argument. A{' '}
              <Link
                href="/reliability-assessment"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Reliability Assessment
              </Link>{' '}
              that cannot support a conclusion says so, instead of decorating a gap. How{' '}
              <Link href="/company" className="text-[#3B82F6] hover:text-white transition-colors">
                SyncAI
              </Link>{' '}
              treats that difference is a product choice: recommend from approved evidence; a named
              human decides.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What this article is not claiming
            </h2>

            <p>
              This is an educational argument about common reliability-data practice, not a customer
              case study. It does not report named plants, testimonials, or savings percentages. It
              does not treat a recommendation engine as live plant execution. Direct plant execute
              is not a capability being marketed here. Self-guided onboarding is not claimed as a
              live product path.
            </p>

            <p>
              The public sources are ISO 14224:2016 (ISO/TC 67; current international edition for RM
              data collection and exchange in petroleum, petrochemical, and natural-gas operations),
              SAE JA1011_202411 (RCM evaluation criteria, revised 5 November 2024), and API RP 580
              documentation practice for risk-based inspection (reconstructability of the assessment
              by people who were not on the original team). They are cited as reliability-program
              context, not as SyncAI certifications.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Bring a real reliability question
              </h3>
              <p className="text-gray-400 mb-6">
                If you want to see how a decision record keeps evidence, hypothesis, and named
                human approval distinct, start in the Reliability Engineer workspace or request a
                Reliability Assessment. A bounded Strategic Pilot is the path when a specific
                workflow is ready to be operationalized with verification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={APP_SETUP_URL}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors"
                >
                  Try Reliability Engineer
                </a>
                <Link
                  href="/reliability-assessment"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/5 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Reliability Assessment
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-[#3B82F6] font-semibold hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
