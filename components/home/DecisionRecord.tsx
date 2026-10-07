'use client';

import { useState } from 'react';

type Outcome = 'awaiting' | 'approved' | 'returned' | 'escalated';

const outcomes: Record<Outcome, { badge: string; badgeClass: string; log: string }> = {
  awaiting: {
    badge: 'Awaiting approval',
    badgeClass: 'border-signal/60 text-signal',
    log: 'Approver: Reliability Superintendent',
  },
  approved: {
    badge: 'Approved',
    badgeClass: 'border-cyan-300/60 text-cyan-300',
    log: 'Approved by Reliability Superintendent. The next step is now on the work plan, and the outcome will be checked after the next startup.',
  },
  returned: {
    badge: 'Returned for evidence',
    badgeClass: 'border-bone/40 text-bone/80',
    log: 'Returned by Reliability Superintendent. SyncAI will collect the controlled startup sample and the pressure calibration before it recommends again.',
  },
  escalated: {
    badge: 'Escalated',
    badgeClass: 'border-signal/60 text-signal',
    log: 'Escalated to the Plant Manager. The setpoint stays unchanged until they decide.',
  },
};

const headingStyle = { fontStretch: '100%' } as const;

const actions: { id: Exclude<Outcome, 'awaiting'>; label: string }[] = [
  { id: 'approved', label: 'Approve' },
  { id: 'returned', label: 'Return for evidence' },
  { id: 'escalated', label: 'Escalate' },
];

export default function DecisionRecord() {
  const [outcome, setOutcome] = useState<Outcome>('awaiting');
  const current = outcomes[outcome];

  return (
    <figure aria-label="Example decision record" className="relative">
      <div className="border border-bone/15 bg-graphite shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
        <div className="flex items-start justify-between gap-4 border-b border-bone/10 px-5 py-4 sm:px-6">
          <div>
            <p className="font-mono text-xs text-bone/50">Decision record · example</p>
            <p className="mt-1 text-base font-semibold text-white">Compressor low lube-pressure trips</p>
          </div>
          <p
            aria-live="polite"
            className={`shrink-0 border px-2.5 py-1 text-xs font-semibold ${current.badgeClass}`}
          >
            {current.badge}
          </p>
        </div>

        <div className="space-y-6 px-5 py-6 sm:px-6">
          <div>
            <h3 className="text-sm font-semibold text-white" style={headingStyle}>
              The question
            </h3>
            <p className="mt-2 text-[0.95rem] leading-6 text-bone/80">
              Seven low-lube-pressure trips in six weeks. Five happened within 20 minutes of startup. Lower the trip setpoint, or replace the bearings?
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-bone/10">
            <div className="sm:pr-6">
              <h3 className="text-sm font-semibold text-cyan-300" style={headingStyle}>
                What the evidence shows
              </h3>
              <ul className="mt-2 space-y-1.5 text-[0.95rem] leading-6 text-bone/80">
                <li>Seven trips in six weeks</li>
                <li>Five clustered just after startup</li>
                <li>Historian scaling disagrees with field calibration</li>
              </ul>
            </div>
            <div className="sm:pl-6">
              <h3 className="text-sm font-semibold text-signal" style={headingStyle}>
                What is not proven
              </h3>
              <ul className="mt-2 space-y-1.5 text-[0.95rem] leading-6 text-bone/80">
                <li>That the bearings are damaged</li>
                <li>That pressure was truly low</li>
                <li>That a lower setpoint is safe</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-bone/10 pt-5">
            <h3 className="text-sm font-semibold text-white" style={headingStyle}>
              Recommended next step
            </h3>
            <p className="mt-2 text-[0.95rem] leading-6 text-bone/80">
              Leave the setpoint alone and hold off condemning the bearings. Reconcile the pressure scaling, capture a controlled startup sample, and inspect after the next trip before choosing a fix.
            </p>
          </div>
        </div>

        <div className="border-t border-bone/10 px-5 py-4 sm:px-6">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Respond to this recommendation">
            {actions.map((action) => (
              <button
                key={action.id}
                type="button"
                onClick={() => setOutcome(action.id)}
                aria-pressed={outcome === action.id}
                className={`min-h-10 rounded-sm border px-4 py-2 text-sm font-semibold transition-colors ${
                  outcome === action.id
                    ? 'border-cyan-300 bg-cyan-300 text-ink'
                    : 'border-bone/25 text-bone hover:border-bone/60 hover:bg-bone/5'
                }`}
              >
                {action.label}
              </button>
            ))}
            {outcome !== 'awaiting' && (
              <button
                type="button"
                onClick={() => setOutcome('awaiting')}
                className="min-h-10 px-2 text-sm text-bone/60 underline underline-offset-4 hover:text-bone"
              >
                Reset
              </button>
            )}
          </div>
          <p className="mt-4 min-h-[3rem] font-mono text-xs leading-5 text-bone/55" aria-live="polite">
            {current.log}
          </p>
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-bone/45">
        An illustration. Try the buttons to see how a decision is recorded.
      </figcaption>
    </figure>
  );
}
