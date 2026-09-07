'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { APP_SETUP_URL } from '@/lib/site-links';

export default function FracasIsNotADecisionSystemPage() {
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
              FRACAS Is Not a Decision System
            </h1>
            <p className="text-xl text-gray-400">
              Closing the loop from failure code to approved action — why codes alone do not change
              reliability outcomes.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p>
              Mining reliability teams do not lack failure language. A haul truck trips, a crusher
              bearing runs hot, a conveyor tears, and someone enters a code. The computerized
              maintenance management system (CMMS) records a work order. A root-cause ticket may
              open. The week continues.
            </p>

            <p className="text-xl font-semibold text-white">
              The code is not the decision. The work order is not the proof. And a Failure
              Reporting, Analysis, and Corrective Action System (FRACAS) that stops at either one
              is a reporting loop, not a decision system.
            </p>

            <p>
              That distinction matters in asset-intensive operations because reliability outcomes
              do not move when events are classified. They move when a named person authorizes a
              change on the basis of evidence, then verifies whether the change did what it was
              supposed to do. Codes help you talk about failures. They do not, by themselves,
              change the failure.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What FRACAS actually is
            </h2>

            <p>
              FRACAS is a closed-loop reliability practice: report the failure, analyze it, take
              corrective action, and keep enough record that the organization can see whether the
              action prevented recurrence. DoD reliability program practice treated FRACAS as a
              requirement of MIL-STD-785. Uniform criteria were then written in MIL-STD-2155
              (1985) and later issued as MIL-HDBK-2155,{' '}
              <em>Failure Reporting, Analysis and Corrective Action Taken</em>. The public ASSIST
              listing for the handbook is{' '}
              <a
                href="https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=207200"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                ident_number 207200
              </a>
              .
            </p>

            <p>
              The handbook is explicit about purpose. FRACAS exists to give management visibility
              and control for reliability and maintainability improvement by using failure and
              maintenance data to generate and implement effective corrective actions — and to
              reduce or simplify the maintenance task.
            </p>

            <p>The intended sequence is not mysterious:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Failure reporting — what happened, on which item, under what conditions</li>
              <li>Failure analysis — what the evidence supports as cause, and what it does not</li>
              <li>Failure verification — confirm the reported failure is real and repeatable enough to act on</li>
              <li>Corrective action — the change intended to prevent recurrence</li>
              <li>Close-out — a record that the action was implemented and checked</li>
            </ul>

            <p>
              MIL-HDBK-2155 also assumes a Failure Review Board: a human forum with authority to
              accept, reject, or return analysis and action. That is not a software feature. It is
              an accountability design. The loop is closed only when someone can answer, later,
              what was believed, what was authorized, and what was verified.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              How mining reliability inherited a reporting loop
            </h2>

            <p>
              Few mines run a labeled “FRACAS program” with a standing Failure Review Board. Most
              run the fragments. Failure codes live in the CMMS. Analysis lives in a reliability
              spreadsheet, a contractor report, or a conversation on the radio. Corrective action
              lives as a work order, a setpoint change request, or a capital request. Verification
              — if it happens — lives in a later production meeting that no longer has the original
              evidence in view.
            </p>

            <p>
              The result is a FRACAS-shaped workflow without the object FRACAS was built to
              produce: a reviewable decision. The mine can show that a code was entered and a task
              was completed. It often cannot show that the organization decided anything in a way
              that would survive a shift change, an audit, or a repeat failure six weeks later.
            </p>

            <p>
              SAE reliability-program practice makes the same point without being mining-specific.
              SAE GEIA-STD-0009, the Reliability Program Standard, includes closed-loop feedback
              for corrective actions and field reliability monitoring. Its companion handbook, SAE
              TAHB0009A, describes that feedback method. Those documents are standards and
              practice context — not a SyncAI certification, and not a requirement to run a
              defense-style FRACAS office at a mine. They describe the industrial rule: a report
              that never returns as a checked action is not a closed loop.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Failure codes classify. They do not decide.
            </h2>

            <p>
              A failure code is a classification. At best it is a consistent label for a symptom,
              a mode, or a suspected cause. At worst it is the fastest pick-list item that lets
              the work order close before the next dispatch. Either way, the code answers a
              different question than the one the plant actually has to answer.
            </p>

            <p>The code asks: <em>How do we file this event?</em></p>

            <p>
              The plant asks: <em>What are we allowed to change, on what evidence, and who is
              accountable if we are wrong?</em>
            </p>

            <p>
              Those questions diverge under production pressure. A repeated “bearing failure” code
              on a pump family can mean a true bearing problem, a lubrication problem, a
              misalignment problem, a process-induced load problem, or a historian scaling
              problem that made a healthy machine look failed. The code collapses those
              possibilities into one string. A decision cannot.
            </p>

            <p className="text-xl font-semibold text-white">
              If the record does not separate observed evidence from hypothesis, the code is a
              story the system will treat as fact.
            </p>

            <p>
              That is why more complete coding schemes disappoint reliability leaders. Adding
              modes, mechanisms, and causes to the pick list increases the resolution of the
              archive. It does not add a governor. Nobody is forced to say what is proven, what
              is assumed, and what is still missing before the next action is approved.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Corrective action without a decision record
            </h2>

            <p>
              In the original FRACAS loop, corrective action is the change intended to prevent
              recurrence — not the repair that returns the asset to service. Replacing a failed
              component can be necessary work. It is not automatically corrective. If the
              condition that produced the failure is still in place, the organization has
              restored function and left the reliability problem intact.
            </p>

            <p>
              Work orders are good at the restore-function half. They assign a craft, a duration,
              a part, and a completion stamp. They are weak at the prevent-recurrence half
              because completion is a task state, not a decision state. A closed work order
              proves that someone did the job as written. It does not prove that the job was the
              right intervention, that the diagnosis was evidenced, or that the outcome was
              checked against a defined signal.
            </p>

            <p>A useful decision record, by contrast, has to hold at least four things:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Evidence</strong> — what the work history, condition
                data, inspection, or procedure actually shows
              </li>
              <li>
                <strong className="text-white">Hypothesis</strong> — competing explanations that
                remain unproven, stated as such
              </li>
              <li>
                <strong className="text-white">Named human approval</strong> — who accepted,
                rejected, escalated, or returned the recommended action
              </li>
              <li>
                <strong className="text-white">Verification</strong> — the signal that will show,
                later, whether the action worked
              </li>
            </ul>

            <p>
              Without those four, “corrective action” is a label applied to activity. The FRACAS
              loop looks closed in the CMMS and remains open in the operation.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Recommend ≠ authorize</h2>

            <p>
              The gap gets wider when analysis is fast. A reliability engineer, a contractor, or
              a model can draft a recommendation in minutes: change the PM interval, replace the
              assembly, lower the trip setpoint, add a vibration route, park the unit. Drafting
              is cheap. Authorization is not — not on a haul fleet, a processing plant, or any
              asset whose failure has safety, environmental, or production consequence.
            </p>

            <p className="text-xl font-semibold text-white">
              Recommend ≠ authorize. A recommendation is an argument. Authorization is an act by
              a person who can be named.
            </p>

            <p>
              That is the industrial version of the Failure Review Board, whether or not the mine
              uses the term. Someone with operating authority has to accept the action, reject it,
              send it back for evidence, or escalate it. If the system cannot show who did that,
              the organization has a suggestion trail, not a governed decision.
            </p>

            <p>
              This is also why unsupervised plant execute is the wrong default for reliability
              software. Writing a recommendation into a historian, a CMMS, or a control-system
              workflow is not the same as being allowed to change the plant. Approval, escalation,
              and accountability have to remain explicit. A tool that blurs recommend and
              authorize will look efficient in a demo and unaccountable on the night shift.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Closing the loop from failure code to approved action
            </h2>

            <p>
              A practical test for any mining reliability workflow — FRACAS software, CMMS
              module, or spreadsheet — is whether a later reviewer can reconstruct the decision
              without calling the original engineer.
            </p>

            <div className="bg-[#1E293B]/50 border border-[#334155] rounded-xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                If the record cannot answer these, the loop is still open
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] font-bold">1</span>
                  <span>What failure was reported, and on which asset configuration?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] font-bold">2</span>
                  <span>What evidence was observed, versus hypothesized?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] font-bold">3</span>
                  <span>What competing causes remain unproven?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] font-bold">4</span>
                  <span>What action was recommended, and what was actually authorized?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] font-bold">5</span>
                  <span>Who approved it, and under what boundary?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] font-bold">6</span>
                  <span>What verification would show the action worked — and was it checked?</span>
                </li>
              </ul>
            </div>

            <p>
              Those questions do not require a new standard. They are the FRACAS close-out
              discipline applied to the object mines already have: codes, analyses, and work.
              The missing piece is usually not another failure mode in the pick list. It is a
              decision record that can carry evidence grade, approval state, and verification
              criteria across shifts and systems of record.
            </p>

            <p>
              When that record exists, failure codes become inputs instead of conclusions. Work
              orders become the authorized work, not the argument. Corrective action becomes a
              change that can be falsified. Mining reliability starts to look like what FRACAS
              was designed to be: a closed loop from event to approved action to checked outcome.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What this article is not claiming
            </h2>

            <p>
              This is an educational argument about a common reliability practice, not a customer
              case study. It does not report named plants, testimonials, or savings percentages.
              It does not treat a recommendation engine as live plant execution. Direct plant
              execute is not a capability being marketed here. Self-guided onboarding is not
              claimed as a live product path.
            </p>

            <p>
              The public sources behind the FRACAS description are MIL-HDBK-2155 (historically
              implementing the MIL-STD-785 FRACAS requirement; earlier uniform criteria in
              MIL-STD-2155) and SAE closed-loop feedback practice in GEIA-STD-0009 and TAHB0009A.
              They are cited as reliability-program context, not as SyncAI certifications.
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
