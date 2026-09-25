export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  readTime: string;
  published: string;
  author?: string;
};

export const insightArticles: InsightArticle[] = [
  {
    slug: 'closure-is-not-cash',
    title: 'Closure Is Not Cash',
    description:
      'Closure is not cash. Closing a work order, a ticket, or a shift is an operational close. Closure of the operating loop is the verified outcome recorded against named ownership: achieved, not_achieved, or inconclusive, with measured notes. Cash collected is money received. Revenue recognized is the earning event recorded on the books. Neither commercial record is produced by the close. Treating the closed work order, the closed ticket, or the closed shift as cash collected or revenue recognized ships an operational stamp into the books under the honesty and verification boundary. A closed record can inform a recommendation to investigate. It is not the plant, not a diagnosis, not root cause, not an invoice, not a cash receipt, and not a Decision Case that has already collected cash. Evidence from the plant beats the closed record. Sync may surface a closed work order, a closed ticket, or a closed shift beside Evidence, Verification, Proof, Authorization, and Accountability. Surfacing is still a read. Sync refuses false precision. Sync refuses when evidence is insufficient. Sync must not auto-close, auto-authorize, or treat a closed work order as cash collected, or as Learning credit. Sync does not collect cash. Sync does not recognize revenue. A named human remains accountable after the plant move. Direct plant execute stays off. CMMS write-back is not a live product path. Billing write-back is not a live product path. Companion to Accountability Is Not Closure, Complete Is Not Verified, Cleared Is Not Complete, Learning Requires a Verified Outcome, and Verification Is Not Optional.',
    excerpt:
      'Closing a work order, a ticket, or a shift records an operational close. Closure of the operating loop is the verified outcome recorded against named ownership. Neither is cash collected, and neither is revenue recognized.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'accountability-is-not-closure',
    title: 'Accountability Is Not Closure',
    description:
      'Accountability is not closure. A named human who owns consequences after authorized execution is accountability. That duty answers who remains responsible for results, exceptions, and learning after the plant move. Closure is the verified outcome recorded against that ownership: a measured result, not named intent. Accountability is still not loop closure. Treating the named owner as closure ships ownership into a finished loop nobody has measured, under the honesty and verification boundary. An accountable owner can inform a recommendation to investigate. It is not the plant, not a diagnosis, not root cause, not a work order, and not a Decision Case that is already closed. Evidence from the plant beats the accountable owner. Sync may surface an accountable owner beside Evidence, Verification, Proof, and Authorization. Surfacing is still a read. Sync refuses false precision. Sync refuses when evidence is insufficient. Sync must not auto-close, auto-authorize, or treat accountable closure as Learning credit. A named accountable human without a verified outcome leaves the operating loop open. A named human remains accountable after the plant move. Direct plant execute stays off. CMMS write-back is not a live product path. Companion to Authorization Is Not Accountability, Proof Is Not Authorization, Learning Requires a Verified Outcome, Verification Is Not Optional, and Verified Is Not Assured.',
    excerpt:
      'A named human who owns consequences after authorized execution answers who remains responsible for results, exceptions, and learning after the plant move. That ownership is not loop closure. Closure is the verified outcome recorded against that ownership — a measured result, not named intent.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'authorization-is-not-accountability',
    title: 'Authorization Is Not Accountability',
    description:
      'Authorization is not accountability. A named human decision that accepts consequence and routes intent to authorized execution systems is authorization. That act answers who may start. Accountability is the continuing named ownership of results, exceptions, and learning after the work runs. Authorization is still not accountability for outcomes after execution. Treating the authorized state as accountability ships a start decision into ownership of results nobody has kept, under the honesty and verification boundary. An authorized state can inform a recommendation to investigate. It is not the plant, not a diagnosis, not root cause, not a work order, and not a Decision Case that already owns the outcome. Evidence from the plant beats the authorized state. Sync may surface an authorized state beside Evidence, Verification, and Proof. Surfacing is still a read. Sync refuses false precision. Sync refuses when evidence is insufficient. Sync must not auto-close, auto-authorize, or treat authorized accountability as Learning credit. A named human remains accountable after the plant move. Direct plant execute stays off. CMMS write-back is not a live product path. Companion to Proof Is Not Authorization, Assured Is Not Proven, Verified Is Not Assured, Green Is Not Go, Action Is Not Execution, Human Decision Is Not Optional, Honesty Boundary Is Not Optional, and Verification Is Not Optional.',
    excerpt:
      'A named human decision that accepts consequence and routes intent to authorized execution systems answers who may start. It is not accountability for outcomes after the work runs. Accountability is the continuing named ownership of results, exceptions, and learning after execution.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'proof-is-not-authorization',
    title: 'Proof Is Not Authorization',
    description:
      'Proof is not authorization. A closed evidentiary chain for a specific claim under named conditions is proof: reproducible checks, lineage, and a decision authority that can refuse when evidence is incomplete. That chain answers whether the claim held. Authorization is a separate named human decision that accepts consequence and routes intent to authorized execution systems. Proof is still not authorization to execute plant work, write a CMMS work order, clear equipment to run, or treat the case as plant-execute. Treating the closed chain as authorization ships a settled claim into plant work nobody has accepted, under the honesty and verification boundary. A proof record can inform a recommendation to investigate. It is not the plant, not a diagnosis, not root cause, not authorization for corrective work, not a work order, and not a Decision Case that is already plant-execute. Evidence from the plant beats the chain. Sync may surface proof beside Evidence and Verification when the claim, the conditions, the checks, and the lineage are named. Surfacing is still a read. Sync refuses false precision. Sync refuses when evidence is insufficient. Sync must not auto-close, auto-authorize, or treat proven authorization as Learning credit. A named human still decides. Direct plant execute stays off. CMMS write-back is not a live product path. Companion to Assured Is Not Proven, Verified Is Not Assured, Green Is Not Go, Action Is Not Execution, Human Decision Is Not Optional, Honesty Boundary Is Not Optional, and Verification Is Not Optional.',
    excerpt:
      'A closed evidentiary chain for a specific claim under named conditions answers whether the claim held. It is not authorization to execute plant work, write a CMMS work order, clear equipment to run, or treat the case as plant-execute. Authorization is a named human decision that accepts consequence and routes intent to authorized execution systems.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'assured-is-not-proven',
    title: 'Assured Is Not Proven',
    description:
      'Assured is not proven. Assurance is time-bounded confidence that an asset stays in a known-good state under operating conditions, with ownership and monitoring. That standing claim can be probabilistic. Proof is a closed evidentiary chain for a specific claim under named conditions: reproducible checks, lineage, and a decision authority that can refuse when evidence is incomplete. Proof is claim-scoped and falsifiable. Treating assurance as proof ships false certainty into maintenance and production decisions under the honesty and verification boundary. An assurance record can inform a recommendation to investigate. It is not the plant, not a diagnosis, not root cause, not authorization for corrective work, not a verified operational outcome, and not a Decision Case that is already proven. Evidence from the plant beats the assurance. Sync may surface an assurance record beside approved evidence when the window, the owner, the monitoring, the conditions, and the assumptions are named. Sync refuses false precision. Sync refuses when evidence is insufficient. Sync must not auto-close, auto-authorize, or treat assured proof as Learning credit. A named human still decides. Proof stays open until the chain is closed for the specific claim. Companion to Verified Is Not Assured, Complete Is Not Verified, Verification Is Not Optional, Simulation Is Not Proof, Green Is Not Go, Honesty Boundary Is Not Optional, and Human Decision Is Not Optional.',
    excerpt:
      'Assurance is time-bounded confidence that an asset stays known-good under operating conditions, with ownership and monitoring. It can be standing and probabilistic. Proof is a closed evidentiary chain for a specific claim under named conditions: reproducible checks, lineage, and a decision authority that can refuse when evidence is incomplete. Treating assurance as proof ships false certainty.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'verified-is-not-assured',
    title: 'Verified Is Not Assured',
    description:
      'Verified is not assured. A work package, an inspection, or an AI recommendation can be marked verified — evidence collected, checks passed, lineage present — and still not be assured. Verification closes a claim about the past: named observation against named criteria, stored as achieved, not_achieved, or inconclusive, with measured notes. Assurance is a standing claim about continuing fitness: time-bounded confidence that the asset stays in a known-good state under operating conditions, with ownership, monitoring, and a human authority boundary. Treating a verified stamp as assurance ships false greens into operations under the honesty and verification boundary. A verified record can inform a recommendation to investigate. It is not the plant, not a diagnosis, not root cause, not authorization for corrective work, not a standing assurance, and not a Decision Case that remains closed. Evidence from the plant beats the verified stamp. Sync may surface a verified record beside approved evidence when the check, the lineage, the window, the owner, and the assumptions are named. Sync refuses false precision. Sync refuses when evidence is insufficient. Sync must not auto-close, auto-authorize, or treat verified assurance as Learning credit. A named human still decides. Assurance stays open until ownership, monitoring, and the human authority boundary are named for a bounded window. Companion to Complete Is Not Verified, Verification Is Not Optional, Learning Requires a Verified Outcome, Green Is Not Go, Honesty Boundary Is Not Optional, and Human Decision Is Not Optional.',
    excerpt:
      'A work package, inspection, or AI recommendation can be marked verified — evidence collected, checks passed, lineage present — and still not be assured. Verification closes a claim about the past. Assurance is time-bounded confidence that the asset stays known-good under operating conditions, with ownership, monitoring, and a human authority boundary.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'complete-is-not-verified',
    title: 'Complete Is Not Verified',
    description:
      'Complete is not verified. A completed checklist, a completed work order, a completed case, a 100% complete string, or a complete badge is a completion label under the criteria someone chose. It is not verification that the outcome happened, the measured result matches the Decision Case, learning closed with achieved, not_achieved, or inconclusive, or that the case can honestly close. Verification remains named observation against named criteria, not the completion stamp. Treating the completion stamp as verification is false closure under the honesty and verification boundary. A completion label can inform a recommendation to investigate. It is not the plant, not a diagnosis, not root cause, not authorization for corrective work, not a verified operational outcome, and not a Decision Case. Evidence from the plant beats the badge. Sync may surface a completion label beside approved evidence when the criteria, the coverage, and the assumptions are named. Sync refuses false precision. Sync refuses when evidence is insufficient. Sync must not auto-close, auto-authorize, or treat complete closure as Learning credit. A named human still decides. Verification stays open until a verified operational outcome is recorded. Companion to Verified Is Not Assured, Cleared Is Not Complete, Ready Is Not Cleared, Status Is Not Clearance, Verification Is Not Optional, Learning Requires a Verified Outcome, and Action Is Not Execution.',
    excerpt:
      'A completed checklist, completed work order, completed case, 100% complete string, or complete badge is a completion label under the criteria someone chose. It is not verification that the outcome happened or that the Decision Case can honestly close. Verification is named observation against named criteria.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'cleared-is-not-complete',
    title: 'Cleared Is Not Complete',
    description:
      'Cleared is not complete. A cleared flag, a cleared checklist, a cleared-to-proceed badge, or a cleared for start, cleared for service, or case cleared string is a clearance decision, or a label someone attached to one. It is not proof the work is finished, the outcome is verified, the value is realized, or the Decision Case can honestly close. Completion remains observed outcomes plus named verification: achieved, not_achieved, or inconclusive, with measured notes. Treating the clearance stamp as completion is false closure under the honesty and verification boundary. A cleared stamp can inform a recommendation to investigate. It is not the plant, not a diagnosis, not root cause, not authorization for corrective work, not a verified operational outcome, and not a Decision Case. Evidence from the plant beats the stamp. Sync may surface a cleared flag beside approved evidence when the decision, the coverage, and the assumptions are named. Sync refuses false precision. Sync refuses when evidence is insufficient. Sync must not auto-close, auto-authorize, or treat cleared completion as Learning credit. A named human still decides. Verification stays open until a verified operational outcome is recorded. Companion to Complete Is Not Verified, Status Is Not Clearance, Green Is Not Go, Silence Is Not Clearance, Verification Is Not Optional, Learning Requires a Verified Outcome, Action Is Not Execution, and Coverage Is Not Control.',
    excerpt:
      'A cleared flag, cleared checklist, cleared-to-proceed badge, or cleared for start, cleared for service, or case cleared string is a clearance decision or a label someone attached to one. It is not proof the work is finished, the outcome is verified, the value is realized, or the Decision Case can close. Completion is observed outcomes plus named verification.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'ready-is-not-cleared',
    title: 'Ready Is Not Cleared',
    description:
      'Ready is not cleared. A green ready flag, a ready checklist, a ready-to-start badge, or a system ready, crew ready, or parts ready string is a readiness label under the thresholds someone chose. It is not clearance to run, release, start work, leave equipment in service, or close a Decision Case. Clearance remains a named human decision against observed outcomes, named coverage and assumptions, and refusal when evidence is missing. Treating ready as cleared is another path to false clearance under the honesty and verification boundary. A readiness label can inform a recommendation to investigate. It is not the plant, not a diagnosis, not root cause, not authorization for corrective work, not a verified operational outcome, and not a Decision Case. Evidence from the plant beats the label. A status is not clearance. Sync may surface a readiness label beside approved evidence when the threshold, coverage, and assumptions are named. Sync refuses false precision. Sync refuses when evidence is insufficient. Sync must not auto-close, auto-authorize, or treat ready clearance as Learning credit. A named human still decides. Verification stays open until a verified operational outcome is recorded. Companion to Status Is Not Clearance, Green Is Not Go, Silence Is Not Clearance, Dashboard Is Not Control, Alert Is Not Decision, Coverage Is Not Control, Action Is Not Execution, Recommend Is Not Authorize, Verification Is Not Optional, Human Decision Is Not Optional, and Learning Requires a Verified Outcome.',
    excerpt:
      'A green ready flag, ready checklist, ready-to-start badge, or system ready, crew ready, or parts ready string is a readiness label under the thresholds someone chose. It is not clearance to run, release, start work, leave equipment in service, or close a Decision Case. Treating ready as cleared is false clearance.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'status-is-not-clearance',
    title: 'Status Is Not Clearance',
    description:
      'Status is not clearance. A status field, a status tile, a status badge, or an all systems status OK string is a label on stored or computed values under the thresholds someone chose. It is not clearance to run, release, start work, leave equipment in service, or close a Decision Case. Clearance is a named human decision against observed outcomes, named coverage and assumptions, and refusal when evidence is not enough. Treating a status label as clearance is another path to false clearance under the honesty and verification boundary. A status label can inform a recommendation to investigate. It is not the plant, not a diagnosis, not root cause, not authorization for corrective work, not a verified operational outcome, and not a Decision Case. Evidence from the plant beats the label. Sync may surface a status beside approved evidence when the threshold, coverage, and assumptions are named. Sync refuses false precision. Sync refuses when evidence is insufficient. Sync must not auto-close, auto-authorize, or treat status clearance as Learning credit. A named human still decides. Verification stays open until a verified operational outcome is recorded. Companion to Ready Is Not Cleared, Green Is Not Go, Silence Is Not Clearance, Alert Is Not Decision, Dashboard Is Not Control, Telemetry Is Not Truth, Coverage Is Not Control, Verification Is Not Optional, and Human Decision Is Not Optional.',
    excerpt:
      'A status field, status tile, status badge, or all systems status OK string is a label on stored or computed values under thresholds someone chose. It is not clearance to run, release, start work, leave equipment in service, or close a Decision Case. Clearance is a named human decision.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'green-is-not-go',
    title: 'Green Is Not Go',
    description:
      'Green is not go. A green tile, a green status, a green health score, or an all-green dashboard is a display of a stored or computed value under the thresholds someone chose. It is not permission to run, clear, start, or leave equipment in service. Go and clearance still require a named human decision against observed outcomes, named coverage and assumptions, and refusal when evidence is insufficient. Treating green as go is another path to false clearance under the honesty and verification boundary. A green display can inform a recommendation to investigate. It is not the plant, not a diagnosis, not root cause, not authorization for corrective work, not a verified operational outcome, and not a Decision Case. Evidence from the plant beats the color. Sync may surface a green status beside approved evidence when the threshold, coverage, and assumptions are named. Sync refuses false precision. Sync refuses when evidence is insufficient. Sync must not auto-close, auto-authorize, or treat green clearance as Learning credit. A named human still decides. Verification stays open until a verified operational outcome is recorded. Companion to Dashboard Is Not Control, Alert Is Not Decision, Telemetry Is Not Truth, Accuracy Is Not Precision, Calibration Is Not Validation, Coverage Is Not Control, Verification Is Not Optional, and Human Decision Is Not Optional.',
    excerpt:
      'A green tile, green status, green health score, or all-green dashboard is a stored or computed value under the thresholds someone chose. It is not permission to run, clear, start, or leave equipment in service. Treating green as go is false clearance.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'dashboard-is-not-control',
    title: 'Dashboard Is Not Control',
    description:
      'Dashboard is not control. A dashboard reads a stored or streamed value — a historian tag, a CMMS count, a health score, an alarm state — and renders it as a tile, a trend, or a color. Refreshing, filtering, or drilling into that display repeats the read. It does not write a setpoint, start or stop equipment, isolate a circuit, or create a work order. Control is that write, sent by a named actor through a system that already accepts the command. A live tile can update because the process moved, a sensor failed, or another person commanded the asset. The color does not name the actor and does not perform the write. Sync may surface a dashboard beside a Decision Case. Surfacing is still a read. Sync does not gain control authority because the tiles are on the case. A named human decides. Authorized execution systems write the work order or the isolation. Direct plant execute stays off. Companion to Telemetry Is Not Truth, Accuracy Is Not Precision, Calibration Is Not Validation, Dashboard Is Not Decision, Coverage Is Not Control, Action Is Not Execution, Recommend Is Not Authorize, and Silence Is Not Clearance.',
    excerpt:
      'A dashboard reads a value and renders a tile, a trend, or a color. Refreshing or filtering that display does not write a setpoint, start or stop equipment, isolate a circuit, or create a work order. Control is a write through a system that accepts the command.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'telemetry-is-not-truth',
    title: 'Telemetry Is Not Truth',
    description:
      'Telemetry is not truth. Telemetry is a stream of observations: tags, sensors, historians, SCADA, and CMMS counters. Truth for a plant decision is whether those readings, under their actual sensing, sampling, calibration, and context limits, justify the action or clearance at hand. A dense, high-frequency, green-looking telemetry feed can still be wrong for the decision — wrong sensor, wrong unit, stale sample, aliased signal, or a proxy that does not track the failure mode. Treating telemetry as truth is another path to false clearance under the honesty and verification boundary. A feed can inform a recommendation to investigate. It is not the plant decision, not a diagnosis, not root cause, not authorization for corrective work, not a verified operational outcome, and not a Decision Case. Evidence from the plant beats the feed. Sync may surface telemetry beside approved evidence when sensing, sampling, calibration, and context limits are named. Sync refuses false precision. Sync refuses when the readings do not justify the action. Sync must not auto-close, auto-authorize, or treat telemetry clearance as Learning credit. A named human still decides. Verification stays open until a verified operational outcome is recorded. Companion to Accuracy Is Not Precision, Calibration Is Not Validation, Simulation Is Not Proof, Forecast Is Not Fact, Model Is Not Reality, Proxy Is Not Outcome, Verification Is Not Optional, and Learning Requires a Verified Outcome.',
    excerpt:
      'Telemetry is a stream of observations: tags, sensors, historians, SCADA, and CMMS counters. Truth is whether those readings, under sensing, sampling, calibration, and context limits, justify the action. A dense, green-looking feed can still be the wrong sensor, the wrong unit, a stale sample, an aliased signal, or a proxy. Treating telemetry as truth is false clearance.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'accuracy-is-not-precision',
    title: 'Accuracy Is Not Precision',
    description:
      'Accuracy is not precision. Precision is repeatability: tight residuals, fine resolution, and stable decimals. Accuracy is truth relative to the plant decision and observed outcomes. A precise RUL, vibration feature, digital-twin residual, or forecast can still be wrong for the decision at hand. Treating precision as accuracy is another path to false clearance under the honesty and verification boundary. A precise reading can inform a recommendation to investigate. It is not the plant, not a diagnosis, not root cause, not authorization for corrective work, not a verified operational outcome, and not a Decision Case. Evidence from the plant beats the precise reading. Sync may surface a precise reading beside approved evidence when the limit of that precision is named. Sync refuses false precision. Sync refuses to store precision as accuracy. Sync must not auto-close, auto-authorize, or treat precision clearance as Learning credit. A named human still decides. Verification stays open until a verified operational outcome is recorded. Companion to Calibration Is Not Validation, Simulation Is Not Proof, Forecast Is Not Fact, Model Is Not Reality, Verification Is Not Optional, and Learning Requires a Verified Outcome.',
    excerpt:
      'Precision is repeatability: tight residuals, fine resolution, and stable decimals. Accuracy is truth relative to the plant decision and observed outcomes. A precise RUL, vibration feature, digital-twin residual, or forecast can still be wrong for the decision at hand. Treating precision as accuracy is false clearance.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'calibration-is-not-validation',
    title: 'Calibration Is Not Validation',
    description:
      'Calibration is not validation. Calibration tunes a model, a twin, a sensor, or a forecast so historical residuals look small. Validation confirms the representation is fit for the decision under the honesty and verification boundary. A well-calibrated simulation, RUL curve, or digital twin can still be wrong for the plant decision at hand. Validation still requires observed outcomes, named coverage and assumptions, and refusal when evidence is insufficient. Treating calibration as validation is another path to false clearance. A calibration can inform a recommendation to investigate. It is not the plant, not a diagnosis, not root cause, not authorization for corrective work, not a verified operational outcome, and not a Decision Case. Evidence from the plant beats the calibration. Sync may surface a calibration beside approved evidence when coverage and assumptions are named. Sync refuses false precision. Sync refuses when evidence is insufficient. Sync must not auto-close, auto-authorize, or treat calibration clearance as Learning credit. A named human still decides. Verification stays open until a verified operational outcome is recorded. Companion to Simulation Is Not Proof, Forecast Is Not Fact, Model Is Not Reality, Verification Is Not Optional, and Learning Requires a Verified Outcome.',
    excerpt:
      'Calibration tunes a model, twin, sensor, or forecast so historical residuals look small. Validation confirms the representation is fit for the decision. A well-calibrated simulation, RUL curve, or digital twin can still be wrong for the plant decision at hand. Treating calibration as validation is false clearance.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'simulation-is-not-proof',
    title: 'Simulation Is Not Proof',
    description:
      'Simulation is not proof. A digital-twin run, a Monte Carlo fan, a what-if scenario, or a failure simulation is a controlled representation of possible futures — not proof that an asset, a plan, or an intervention will behave that way in the plant. Proof still requires observed outcomes under the honesty and verification boundary. Sync refuses when coverage, assumptions, or calibration are insufficient. Treating the simulation as proof is how operators get false clearance. A simulation can inform a recommendation to investigate. It is not the plant, not a diagnosis, not root cause, not authorization for corrective work, not a verified operational outcome, and not a Decision Case. Evidence from the plant beats the simulation. Sync may surface a simulation beside approved evidence when coverage, assumptions, and calibration are named. Sync refuses false precision. Sync must not auto-close, auto-authorize, or treat simulation clearance as Learning credit. A named human still decides. Verification stays open until a verified operational outcome is recorded. Companion to Forecast Is Not Fact, Model Is Not Reality, Map Is Not Terrain, Verification Is Not Optional, and Learning Requires a Verified Outcome.',
    excerpt:
      'A digital-twin run, Monte Carlo fan, what-if scenario, or failure simulation is a controlled representation of possible futures. It is not proof that an asset, plan, or intervention will behave that way in the plant. Proof still requires observed outcomes. Sync refuses when coverage, assumptions, or calibration are insufficient.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'forecast-is-not-fact',
    title: 'Forecast Is Not Fact',
    description:
      'Forecast is not fact. A forecast, a projection, an RUL estimate, a demand plan, a Monte Carlo percentile, or an LLM-generated outlook is a forward-looking compression — useful for planning only when assumptions, uncertainty bands, and refusal conditions are explicit. Treating the forecast as a fact about the plant is how operators get false clearance. A forecast can inform a recommendation to investigate or prepare. It is not the plant state, not a diagnosis, not root cause, not authorization for corrective work, not a verified operational outcome, and not a Decision Case. Evidence from the plant beats the forecast. Sync may surface a forecast beside approved evidence when assumptions and uncertainty are named. Sync refuses false precision. Sync must not auto-close, auto-authorize, or treat forecast clearance as Learning credit. A named human still decides. Verification stays open until a verified operational outcome is recorded. Companion to Model Is Not Reality, Map Is Not Terrain, Proxy Is Not Outcome, Assumption Is Not Evidence, Confidence Is Not Evidence, Trend Is Not Truth, and Recommend Is Not Authorize.',
    excerpt:
      'A forecast, projection, RUL estimate, demand plan, Monte Carlo percentile, or LLM-generated outlook is a forward-looking compression. It is useful for planning only when assumptions, uncertainty bands, and refusal conditions are explicit. Treating the forecast as a fact about the plant is false clearance.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'model-is-not-reality',
    title: 'Model Is Not Reality',
    description:
      'Model is not reality. A digital twin, a KPI model, a risk matrix, an RUL curve, a Monte Carlo run, or an LLM summary is a compressed representation — useful for decisions only when its assumptions, coverage gaps, and refusal conditions are explicit. Treating the model as the plant is how operators get false clearance. A model can inform a recommendation to investigate. It is not the plant, not a diagnosis, not root cause, not authorization for corrective work, not a verified operational outcome, and not a Decision Case. Evidence from the plant beats the model. Sync may surface a model beside approved evidence when the limits are named. Sync refuses false precision. A named human still decides. Companion to Map Is Not Terrain, Proxy Is Not Outcome, Assumption Is Not Evidence, Confidence Is Not Evidence, and Recommend Is Not Authorize.',
    excerpt:
      'A digital twin, KPI model, risk matrix, RUL curve, Monte Carlo, or LLM summary is a compressed representation. It is useful only when assumptions, coverage gaps, and refusal conditions are explicit. Treating the model as the plant is false clearance.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'map-is-not-terrain',
    title: 'Map Is Not Terrain',
    description:
      'Map is not terrain. A diagram, a CMMS schema, a dashboard, a digital twin, or a process map is a compressed representation — not the operating reality. Operators who treat the map as the terrain miss degradation, local exceptions, and unverified outcomes. A map can inform a recommendation to investigate. It is not evidence from the plant, not a diagnosis, not root cause, not authorization for corrective work, not a verified operational outcome, and not a Decision Case. Evidence from the plant beats the model. Blank is not zero. Unknown is not clear. Recommend is not authorize. Sync may surface a map beside approved evidence. A named human still decides. Companion to Anecdote Is Not Evidence, Dashboard Is Not Decision, Proxy Is Not Outcome, Blank Is Not Zero, Unknown Is Not Clear, and Recommend Is Not Authorize.',
    excerpt:
      'A diagram, CMMS schema, dashboard, digital twin, or process map is a compressed representation, not the operating reality. Evidence from the plant beats the model. Blank is not zero. Unknown is not clear. Recommend is not authorize.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'anecdote-is-not-evidence',
    title: 'Anecdote Is Not Evidence',
    description:
      'Anecdote is not evidence. A single operator story, a hallway claim, one shift’s memory of “how it always fails,” a vendor demo vignette, or a loud near-miss retelling can feel persuasive. That is anecdote. Anecdote can prompt a question or a recommendation to gather approved evidence. It is not evidence, not a diagnosis, not root cause, not authorization for corrective work, not a verified operational outcome, and not a Decision Case. Sync may surface an anecdote as a prompt to investigate when it is labeled unconfirmed. A named human still decides. Companion to Sample Is Not Population, Noise Is Not Signal, Symptom Is Not Cause, Assumption Is Not Evidence, Confidence Is Not Evidence, Correlation Is Not Causation, and Verification Is Not Optional.',
    excerpt:
      'A single operator story, a hallway claim, a memory of how it always fails, a vendor demo vignette, or a loud near-miss retelling can prompt a question. It is not evidence, not a diagnosis, not root cause, and not a Decision Case.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'sample-is-not-population',
    title: 'Sample Is Not Population',
    description:
      'Sample is not population. A handful of observed cases, a few plants, a short list of assets that alarmed, or the work orders that happened to be written is a sample. The fleet, the asset class, and the sites the claim is supposed to cover are the population. A sample can inform a recommendation to investigate. It is not population-level proof, not a diagnosis of the fleet, not root cause for the class, not authorization for fleet-wide corrective work, not a verified operational outcome for assets that were not observed, and not a Decision Case. Sync may surface a sample beside approved evidence. Sync refuses to treat a sample as population-level proof. A named human still records the Decision Case. Companion to Noise Is Not Signal, Symptom Is Not Cause, Threshold Is Not Diagnosis, Correlation Is Not Causation, Proxy Is Not Outcome, and Verification Is Not Optional.',
    excerpt:
      'A handful of observed cases or plants is not the fleet. A sample can inform a recommendation to investigate. It is not population-level proof and not a Decision Case.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'noise-is-not-signal',
    title: 'Noise Is Not Signal',
    description:
      'Noise is not signal. Sensor chatter, false positives, process variation, nuisance alarms, telemetry spikes without a confirmed asset state change, and operator anecdote volume can fill a dashboard. That is noise. Noise can inform a recommendation to investigate. It is not an actionable signal, not a diagnosis, not root cause, not authorization for corrective work, not a verified operational outcome, and not a Decision Case. Sync may surface correlated noise with approved evidence. A named human still records the Decision Case. Companion to Symptom Is Not Cause, Threshold Is Not Diagnosis, Alert Is Not Decision, Correlation Is Not Causation, Proxy Is Not Outcome, and Verification Is Not Optional.',
    excerpt:
      'Sensor chatter, false positives, nuisance alarms, and telemetry spikes without a confirmed asset state change can fill a dashboard. That is noise. Noise can inform a recommendation to investigate. It is not an actionable signal and not a Decision Case.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'symptom-is-not-cause',
    title: 'Symptom Is Not Cause',
    description:
      'Symptom is not cause. A vibration spike, a hot bearing, a pressure drop, an operator report, a CMMS complaint code, a red tile, or any other observed symptom can inform a recommendation. It does not name the failure mode, prove root cause, authorize corrective work, verify outcome, or replace a named human decision on the Decision Case. Sync may surface symptoms and correlate them with approved evidence. A named human still decides. Companion to Threshold Is Not Diagnosis, Alert Is Not Decision, Correlation Is Not Causation, Proxy Is Not Outcome, and Verification Is Not Optional.',
    excerpt:
      'A vibration spike, a hot bearing, a pressure drop, an operator report, a CMMS complaint code, or a red tile can inform a recommendation. It does not name the failure mode, prove root cause, authorize corrective work, or replace a named human decision.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'threshold-is-not-diagnosis',
    title: 'Threshold Is Not Diagnosis',
    description:
      'Threshold is not diagnosis. Crossing a numeric threshold, limit, alarm band, or set-point is not a diagnosis and not a Decision Case. A threshold breach can inform a recommendation. It does not name the failure mode, authorize action, verify outcome, or replace a named human decision. Sync may surface threshold breaches. A named human still decides. Companion to Alert Is Not Decision, Correlation Is Not Causation, Proxy Is Not Outcome, and Verification Is Not Optional.',
    excerpt:
      'Crossing a numeric threshold, limit, alarm band, or set-point is not a diagnosis and not a Decision Case. A breach can inform a recommendation. It does not name the failure mode, authorize action, verify outcome, or replace a named human decision.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'proxy-is-not-outcome',
    title: 'Proxy Is Not Outcome',
    description:
      'Proxy is not outcome. A KPI, a leading indicator, a model score, a green tile, a closed work-order count, an MTBF estimate, a sensor health %, or any other stand-in measure can inform a recommendation. It is not the verified operational outcome on the Decision Case. Treating a proxy as the outcome invents false closure, skips verification, and teaches the wrong lesson into Learning. Sync may surface proxies. A named human still decides. Companion to Trend Is Not Truth, Correlation Is Not Causation, and Verification Is Not Optional.',
    excerpt:
      'A KPI, a leading indicator, a model score, a green tile, a closed work-order count, an MTBF estimate, or a sensor health % can inform a recommendation. It is not the verified operational outcome. Sync may surface proxies. A named human still decides.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'trend-is-not-truth',
    title: 'Trend Is Not Truth',
    description:
      'Trend is not truth. A rising or falling line, a co-moving tag cluster, a week-over-week delta, or a “we’ve been trending this way” narrative is not a recorded causal check and not a verified outcome. A trend can inform a recommendation. It does not authorize action, clear a gate, or replace a named human decision on the Decision Case. Sync recommends. A named human decides. Companion to Correlation Is Not Causation and Confidence Is Not Evidence.',
    excerpt:
      'A rising or falling line, a co-moving tag cluster, a week-over-week delta, or a “we’ve been trending this way” narrative is not a recorded causal check and not a verified outcome. Sync recommends. A named human decides.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'correlation-is-not-causation',
    title: 'Correlation Is Not Causation',
    description:
      'Correlation is not causation. Co-moving tags, coincident alerts, and dashboard trends can show that signals moved together. They are not a recorded causal check, and they do not authorize action. Sync recommends. A named human decides. Companion to Confidence Is Not Evidence and Assumption Is Not Evidence.',
    excerpt:
      'Co-moving tags, coincident alerts, and dashboard trends are not a recorded causal check. They do not authorize action. Sync recommends. A named human decides.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'confidence-is-not-evidence',
    title: 'Confidence Is Not Evidence',
    description:
      'Confidence is not evidence. A strong gut feel, a high model score, years of tribal “we’ve always known,” or a manager’s certainty is still not a recorded check or verified outcome on the Decision Case. Clearance, authorization, and learning require a recorded fact — a check, a measurement, or a verified outcome — not how sure someone feels. Companion to Assumption Is Not Evidence.',
    excerpt:
      'A strong gut feel, a high model score, or a manager’s certainty is not a recorded check. Clearance, authorization, and learning still require a recorded fact, not how sure someone feels.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'assumption-is-not-evidence',
    title: 'Assumption Is Not Evidence',
    description:
      'An assumption is not evidence. A belief, a habit, a prior shift’s story, a tribal “we always do it this way,” or an unverified model output is not a recorded fact on the Decision Case. Clearance, authorization, and learning require a recorded check or a verified outcome, not a confident guess. Companion to Unknown Is Not Clear, Blank Is Not Zero, and Silence Is Not Clearance.',
    excerpt:
      'A belief, a habit, a prior shift’s story, or an unverified model output is not a recorded fact. Clearance, authorization, and learning still require a recorded check or a verified outcome.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'silence-is-not-clearance',
    title: 'Silence Is Not Clearance',
    description:
      'Silence, no reply, no alert, and an empty inbox are not authorization and not clearance. A missing operator response is not approved. A quiet dashboard is not controlled. On the Decision Case, the named human decision and the recorded verification are the record. Companion to Unknown Is Not Clear and Blank Is Not Zero.',
    excerpt:
      'No reply is not approval. An empty inbox is not clearance. A quiet dashboard is not control. The Decision Case stays a proposal until a named person records the decision, and it stays open until verification is on the case.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'blank-is-not-zero',
    title: 'Blank Is Not Zero',
    description:
      'An empty field, a missing reading, or an unset value is not a measured zero. Blank means unknown or not yet collected. Zero means a verified measurement of none. Treating blank as zero invents false certainty, hides unknown constraints, and corrupts Recovery, verification, and Decision Case math. Companion to Unknown Is Not Clear.',
    excerpt:
      'Blank means the value was not collected. Zero means a verified measurement of none. Storing a blank as zero invents a result and hides the unknown constraint on the Decision Case, in Recovery, and in verification.',
    category: 'Decision Case',
    readTime: '7 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'unknown-is-not-clear',
    title: 'Unknown Is Not Clear',
    description:
      'In the Decision Case and in Recovery, missing evidence is recorded as unknown, not as clear or ready. Bad or not-ready evidence is blocked. A green dashboard, an empty field, or silence is not clearance. The operator must not treat unknown as go. A blank economic assumption is not zero.',
    excerpt:
      'Missing evidence stays unknown. Bad or not-ready evidence is blocked. A green dashboard, an empty field, or silence is not clearance, and the operator must not treat unknown as go.',
    category: 'Decision Case',
    readTime: '7 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'human-decision-is-not-optional',
    title: 'Human Decision Is Not Optional',
    description:
      'A named person accepts, rejects, escalates, or returns the recommendation. That act is the decision. Until it is recorded, the case is still a proposal, and authority stays with the person who can accept the operational consequence. The signed-in Decision Case keeps who decided visible beside the recommendation. The recorded act is mandatory: not optional, not implied by a green dashboard, and not auto-accepted by the system.',
    excerpt:
      'A named person accepts, rejects, escalates, or returns the recommendation. Until that act is recorded, the case is still a proposal. The signed-in Decision Case keeps who decided visible beside the recommendation.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'honesty-boundary-is-not-optional',
    title: 'Honesty Boundary Is Not Optional',
    description:
      'Sync states what is simulated, seeded, or out of scope. Calling a pilot “production,” hiding simulation, or marketing self-guided as live when it is not, crosses the honesty boundary. Naming the boundary is not weakness — it is the industrial requirement. A Decision Case that pretends plant authority Sync does not hold is not a Decision Case.',
    excerpt:
      'Calling a pilot production, hiding simulation, or marketing self-guided as live when it is not, crosses the honesty boundary. Naming what is simulated, seeded, or out of scope is the industrial requirement.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'alert-is-not-decision',
    title: 'Alert Is Not Decision',
    description:
      'An alert — a threshold breach, an anomaly flag, a red tile, a pager page, or a silenced notification — can surface that something crossed a rule. Seeing, acknowledging, or silencing an alert is not a Decision Case and not a decision. Sync may emit alerts, coverage gaps, and recommendations. A named human still opens a Decision Case on a question, cites approved evidence, and accepts, rejects, escalates, or returns.',
    excerpt:
      'Clearing an alert queue, muting a channel, or auto-closing a ticket must not be read as authorization, verification of outcome, work-order execution, or plant control.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'dashboard-is-not-decision',
    title: 'Dashboard Is Not Decision',
    description:
      'A dashboard can surface plant or maintenance state: KPI tiles, trend charts, health scores, and red, amber, and green status. Seeing that display is not a Decision Case and not a decision. Sync may show coverage, recommendations, and status. A named human still opens the case on a question, cites approved evidence, and accepts, rejects, escalates, or returns.',
    excerpt:
      'A green dashboard, an improved trend, or a cleared alert tile must not be read as authorization, verification of outcome, work-order execution, or plant control.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'question-is-not-decision',
    title: 'Question Is Not Decision',
    description:
      'A Decision Case opens on a reliability or maintenance question a named person can decide. The question is recorded before evidence or recommendation. Recording or refining a question is not the decision. Sync may hold the question and gather approved evidence. A named human accepts, rejects, escalates, or returns.',
    excerpt:
      'An open question, a clarified question, or a rephrased question is still a question. Sync may hold it and gather approved evidence. It is not authorization, execution, or plant control.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'coverage-is-not-control',
    title: 'Coverage Is Not Control',
    description:
      'Plant coverage is not control authority over work, isolation, or change. Sync may show coverage and recommend. A named human decides. Authorized execution systems write the work order or the isolation. A Decision Case that records a coverage gap does not put Sync in control of the plant.',
    excerpt:
      'Sensors, CMMS rows, dashboards, and patrol routes are coverage. They are not control authority over work, isolation, or change. A Decision Case that records a coverage gap does not put Sync in control of the plant.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'action-is-not-execution',
    title: 'Action Is Not Execution',
    description:
      'Recording an ACTION disposition on a Decision Case is work intent, not plant execution. Sync may recommend and a named human may decide. ACTION stays locked until authorized execution systems write the work order or isolate the equipment.',
    excerpt:
      'An ACTION disposition records the work a human decision intends. It does not write a work order, isolate equipment, or change the plant. Execution stays with the systems that already hold that authority.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'learning-requires-a-verified-outcome',
    title: 'Learning Requires a Verified Outcome',
    description:
      'After verification is recorded, Learning closes the loop for the next case. A hoped-for outcome, an unauthorized recommendation, and an unchecked action are not that record. Field Manual v0 states the order.',
    excerpt:
      'Verification records the check. Learning is what a later question is allowed to inherit: the closed case, not a hope, a draft that was never authorized, or an action that was never checked.',
    category: 'Decision Case',
    readTime: '7 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'verification-is-not-optional',
    title: 'Verification Is Not Optional',
    description:
      'After a named human authorizes an action, the Decision Case is not closed until verification is recorded. Learning requires a verified outcome, not a hoped-for one. Field Manual v0 states the order.',
    excerpt:
      'Authorization records who decided. It does not record whether the action did what it was supposed to do. The signed-in Decision Case stays open until that check is on the case.',
    category: 'Decision Case',
    readTime: '7 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'recommend-is-not-authorize',
    title: 'Recommend Is Not Authorize',
    description:
      'Recommend is not authorize. On the signed-in Decision Case, evidence is required before a recommendation is treated as a decision. Field Manual v0 states the order.',
    excerpt:
      'A drafted next action is a proposal. The signed-in Decision Case keeps the human decision separate, and evidence is required before that proposal is treated as a decision.',
    category: 'Decision Case',
    readTime: '7 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'evidence-lineage-is-not-optional',
    title: 'Evidence Lineage Is Not Optional',
    description:
      'A recommendation you cannot reconstruct is not an industrial decision. ISO 14224, SAE JA1011, and API RP 580 already require the evidence trail.',
    excerpt:
      'A haul-fleet planner ranks a truck for deferral. A superintendent gets a pump family tagged “bad actor.” A reliability engineer is handed PM intervals the model wants to stretch. The dashboard is confident. The record behind it is not.',
    category: 'Reliability Engineering',
    readTime: '8 min read',
    published: '2026-09-23',
  },
  {
    slug: 'fracas-is-not-a-decision-system',
    title: 'FRACAS Is Not a Decision System',
    description:
      'Closing the loop from failure code to approved action — why codes alone do not change reliability outcomes. FRACAS reports and analyzes; it does not authorize the next action.',
    excerpt:
      'Closing the loop from failure code to approved action — why codes alone do not change reliability outcomes.',
    category: 'Reliability Engineering',
    readTime: '10 min read',
    published: '2026-09-07',
  },
  {
    slug: 'why-cmms-alone-is-failing-2026',
    title: 'Why CMMS Alone Is Failing in 2026',
    description:
      'CMMS systems record work. They do not prove the reliability decision. Why maintenance teams still need evidence, approval, and verification above the system of record.',
    excerpt:
      'Modern maintenance demands have outpaced what traditional CMMS platforms can deliver. Organizations are adding a governed intelligence layer — not replacing the system of record.',
    category: 'Industry Analysis',
    readTime: '8 min read',
    published: '2026-02-19',
  },
  {
    slug: 'economics-of-autonomous-maintenance',
    title: 'The Economics of Autonomous Maintenance',
    description:
      'How to frame maintenance economics when evidence, named human approval, and outcome verification come before any savings claim. Industry discussion ranges are not SyncAI customer results.',
    excerpt:
      'How maintenance economics should be framed when evidence, approval, and verification come before any claim of savings.',
    category: 'ROI & Business Case',
    readTime: '12 min read',
    published: '2026-02-19',
  },
  {
    slug: 'governance-in-industrial-ai',
    title: 'Governance in Industrial AI: Human Oversight at Scale',
    description:
      'Recommend is not authorize. How industrial AI stays auditable when a named human still accepts, rejects, escalates, or returns every recommendation.',
    excerpt:
      'How enterprises can keep operational accountability when a model can draft a recommendation faster than a human can review it.',
    category: 'Security & Governance',
    readTime: '10 min read',
    published: '2026-02-19',
  },
];

export function getInsightArticle(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
}

export type InsightNextDestination = 'field-manual' | 'strategic-pilot';

export type InsightNextStep = {
  relatedSlug: string;
  relatedNote: string;
  next: InsightNextDestination;
  /** Further essays in Related reading, after the primary companion. */
  also?: readonly { slug: string; note: string }[];
  /** Also link Strategic Pilot when the doctrinal next step is the Field Manual. */
  includePilot?: boolean;
};

/**
 * One companion essay, plus the commercial or doctrinal next step.
 * Field Manual when the essay is about the Decision Case order.
 * Strategic Pilot when the essay already points at a governed proof of one decision.
 * `also` adds further essays. `includePilot` adds the Strategic Pilot beside the Field Manual.
 */
export const insightNextSteps: Record<string, InsightNextStep> = {
  'closure-is-not-cash': {
    relatedSlug: 'accountability-is-not-closure',
    relatedNote: 'Accountability names who remains responsible after the plant move. Closure is the verified outcome recorded against that ownership. A closed work order, ticket, or shift is not cash collected or revenue recognized.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'complete-is-not-verified',
        note: 'A completed work order is a completion label. It is not the verified outcome, and it is not cash collected.',
      },
      {
        slug: 'cleared-is-not-complete',
        note: 'A clearance stamp is not proof the work is finished or the value is realized. Value realized is still not cash collected or revenue recognized.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome. It does not inherit cash collected or revenue recognized.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check records achieved, not_achieved, or inconclusive, with measured notes. Recording the check does not collect cash.',
      },
    ],
  },
  'accountability-is-not-closure': {
    relatedSlug: 'closure-is-not-cash',
    relatedNote: 'Closing a work order, a ticket, or a shift is not cash collected or revenue recognized. Closure of the operating loop is the verified outcome. Cash is a commercial record.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'authorization-is-not-accountability',
        note: 'Authorization answers who may start. Accountability is continuing named ownership of results, exceptions, and learning after the plant move. Closure is the verified outcome recorded against that ownership.',
      },
      {
        slug: 'proof-is-not-authorization',
        note: 'A closed chain answers whether a claim held. It is not authorization, not accountability, and not closure of the operating loop.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome. A named accountable owner without that measured result leaves the loop open.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check records achieved, not_achieved, or inconclusive, with measured notes. Naming an owner does not record that check.',
      },
      {
        slug: 'verified-is-not-assured',
        note: 'A verified record closes a claim about the past. Closure of the operating loop is that measured result recorded against named ownership, not standing assurance.',
      },
    ],
  },
  'authorization-is-not-accountability': {
    relatedSlug: 'accountability-is-not-closure',
    relatedNote: 'Accountability names who remains responsible after the plant move. Closure is the verified outcome recorded against that ownership. A named owner is not loop closure.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'proof-is-not-authorization',
        note: 'A closed chain answers whether a claim held. Authorization is a named human decision that accepts consequence and routes intent. Accountability is the continuing named ownership of results, exceptions, and learning after the work runs.',
      },
      {
        slug: 'assured-is-not-proven',
        note: 'Assurance is standing confidence. Proof is a closed chain. Authorization is who may start. None of the three is accountability for the outcome after the work runs.',
      },
      {
        slug: 'verified-is-not-assured',
        note: 'A verified record closes a claim about the past. Accountability is continuing named ownership after execution, not that past check.',
      },
      {
        slug: 'green-is-not-go',
        note: 'A green tile is not permission to run. An authorized state beside that tile is not accountability for the result.',
      },
      {
        slug: 'action-is-not-execution',
        note: 'ACTION records intent. Authorized execution systems write the work. Accountability remains with a named human after the plant move.',
      },
      {
        slug: 'human-decision-is-not-optional',
        note: 'A named person accepts the consequence. That act authorizes the start. It does not, by itself, own the result, the exception, and the learning.',
      },
      {
        slug: 'honesty-boundary-is-not-optional',
        note: 'Calling an authorized state accountability crosses the honesty boundary. Surfacing the state is still a read.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check records achieved, not_achieved, or inconclusive. Recording the check is not the continuing ownership of the outcome.',
      },
    ],
  },
  'proof-is-not-authorization': {
    relatedSlug: 'authorization-is-not-accountability',
    relatedNote: 'Authorization answers who may start. Accountability is the continuing named ownership of results, exceptions, and learning after the work runs. The named decision is not that ownership.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'accountability-is-not-closure',
        note: 'A closed chain is not authorization, and a named accountable owner is not closure. Closure is the verified outcome recorded against that ownership.',
      },
      {
        slug: 'assured-is-not-proven',
        note: 'A closed evidentiary chain answers whether a specific claim held under named conditions. Authorization is a separate named human decision. Neither is accountability for the outcome.',
      },
      {
        slug: 'verified-is-not-assured',
        note: 'A verified record closes a claim about the past. Assurance is standing confidence. Proof is the closed chain. None of the three is authorization to execute.',
      },
      {
        slug: 'green-is-not-go',
        note: 'A green tile is not permission to run. A closed chain beside that tile does not clear equipment to run.',
      },
      {
        slug: 'action-is-not-execution',
        note: 'ACTION records intent. Authorized execution systems write the work order. A closed chain does not unlock ACTION and does not execute the work.',
      },
      {
        slug: 'human-decision-is-not-optional',
        note: 'A named person accepts the consequence. The closed chain does not.',
      },
      {
        slug: 'honesty-boundary-is-not-optional',
        note: 'Calling proof authorization crosses the honesty boundary. The chain answers whether the claim held. It does not accept the consequence.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check records achieved, not_achieved, or inconclusive. Recording the check is not authorization to execute.',
      },
    ],
  },
  'assured-is-not-proven': {
    relatedSlug: 'proof-is-not-authorization',
    relatedNote: 'Proof answers whether a claim held. Authorization is a named human decision that accepts consequence and routes intent to authorized execution systems. The closed chain is not that decision.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'authorization-is-not-accountability',
        note: 'Authorization answers who may start. Accountability is continuing named ownership of results, exceptions, and learning after the work runs.',
      },
      {
        slug: 'verified-is-not-assured',
        note: 'A verified record closes a claim about the past. Assurance is standing confidence that the asset stays known-good. Neither is proof of a specific claim under named conditions.',
      },
      {
        slug: 'complete-is-not-verified',
        note: 'A complete badge is a completion label. Verification is named observation. Assurance is standing confidence. None of the three is proof.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check closes a claim about the past. An assurance label does not replace that check, and the check does not prove the standing claim.',
      },
      {
        slug: 'simulation-is-not-proof',
        note: 'A controlled representation of possible futures is not proof. An assurance built on that run is not proof either.',
      },
      {
        slug: 'green-is-not-go',
        note: 'A green tile is not permission to run. An assurance label on that tile is not a closed chain.',
      },
      {
        slug: 'honesty-boundary-is-not-optional',
        note: 'The boundary keeps standing confidence from being stated as proof of a specific claim.',
      },
      {
        slug: 'human-decision-is-not-optional',
        note: 'A named person can refuse when evidence is incomplete. The assurance label does not.',
      },
    ],
  },
  'verified-is-not-assured': {
    relatedSlug: 'assured-is-not-proven',
    relatedNote: 'Assurance is time-bounded confidence that the asset stays known-good. Proof is a closed evidentiary chain for a specific claim under named conditions.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'accountability-is-not-closure',
        note: 'A verified record closes a claim about the past. Closure of the operating loop is that measured result recorded against named ownership, not the name alone.',
      },
      {
        slug: 'authorization-is-not-accountability',
        note: 'A verified record closes a claim about the past. An authorized state is not accountability for the outcome after the work runs.',
      },
      {
        slug: 'proof-is-not-authorization',
        note: 'A closed chain answers whether a specific claim held. It is not authorization to execute plant work, write a work order, or clear equipment to run.',
      },
      {
        slug: 'complete-is-not-verified',
        note: 'A complete badge is a completion label. A verified record is named observation against named criteria. Neither is assurance that the asset stays known-good under operating conditions.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check closes a claim about the past. Recording achieved, not_achieved, or inconclusive does not open a standing assurance.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome. It does not inherit a claim that the asset stays known-good.',
      },
      {
        slug: 'green-is-not-go',
        note: 'A verified stamp on a green tile is still not permission to run, and it is not assurance.',
      },
      {
        slug: 'honesty-boundary-is-not-optional',
        note: 'The boundary keeps a past check from being stated as continuing fitness.',
      },
      {
        slug: 'human-decision-is-not-optional',
        note: 'A named person still holds the authority boundary. The verified stamp does not.',
      },
    ],
  },
  'complete-is-not-verified': {
    relatedSlug: 'verified-is-not-assured',
    relatedNote: 'A verified record closes a claim about the past. Assurance is a standing claim that the asset stays known-good. The completion stamp is still not verification.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'closure-is-not-cash',
        note: 'A completed work order is not verification. Closing the work order is not cash collected or revenue recognized.',
      },
      {
        slug: 'assured-is-not-proven',
        note: 'A verified record is not assurance. Assurance is still not proof of a specific claim under named conditions.',
      },
      {
        slug: 'cleared-is-not-complete',
        note: 'A cleared flag is a clearance decision or a label on one. It is not completion. A complete badge is a completion label under criteria someone chose. It is not verification.',
      },
      {
        slug: 'ready-is-not-cleared',
        note: 'A ready label is not clearance. A complete badge is not verification that the outcome happened.',
      },
      {
        slug: 'status-is-not-clearance',
        note: 'A status of OK is not clearance. A complete badge is not named observation against named criteria.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'Verification stores achieved, not_achieved, or inconclusive, with measured notes. A completion stamp is not that record.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning closes on the verified outcome. A 100% complete string is not achieved, not_achieved, or inconclusive.',
      },
      {
        slug: 'action-is-not-execution',
        note: 'A completed work order in another system is not execution by Sync, and it is not verification of the Decision Case.',
      },
      {
        slug: 'human-decision-is-not-optional',
        note: 'A named decision does not verify the outcome. The complete badge does not record the check.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A proposal that cites a completed checklist is still a proposal.',
      },
    ],
  },
  'cleared-is-not-complete': {
    relatedSlug: 'complete-is-not-verified',
    relatedNote: 'A complete badge is a completion label under criteria someone chose. It is not verification. A cleared stamp is not proof the work is finished. Neither stamp closes the case.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'closure-is-not-cash',
        note: 'A clearance stamp is not completion. A closed work order, ticket, or shift is not cash collected or revenue recognized.',
      },
      {
        slug: 'status-is-not-clearance',
        note: 'A status field is a label, not clearance. A cleared flag can be a clearance decision or a label on one. Neither stamp is proof the work is finished.',
      },
      {
        slug: 'green-is-not-go',
        note: 'A green tile is not permission to go. A cleared-to-proceed badge on that screen is not the observed outcome.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. An affirmative cleared string is not completion.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is achieved, not_achieved, or inconclusive, with measured notes. A cleared stamp is not that check.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome. A cleared stamp is not that outcome.',
      },
      {
        slug: 'action-is-not-execution',
        note: 'Cleared for start is not execution. The stamp does not unlock ACTION and does not finish the work.',
      },
      {
        slug: 'coverage-is-not-control',
        note: 'A cleared flag on the watched set is not control, and it is not proof the watched work is finished.',
      },
      {
        slug: 'human-decision-is-not-optional',
        note: 'A named clearance decision is not verification. Recording who decided does not close the case.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A proposal that cites a cleared flag is still a proposal.',
      },
    ],
  },
  'ready-is-not-cleared': {
    relatedSlug: 'cleared-is-not-complete',
    relatedNote: 'A readiness label is not clearance. A cleared stamp is a later decision or a label on one. Neither is proof the work is finished.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'complete-is-not-verified',
        note: 'A complete badge is a completion label under criteria someone chose. It is not verification that the outcome happened.',
      },
      {
        slug: 'green-is-not-go',
        note: 'A green tile is not permission to go. A ready flag on that screen is not clearance.',
      },
      {
        slug: 'status-is-not-clearance',
        note: 'A status field, status tile, status badge, or all systems status OK string is a label on stored or computed values. A ready flag is a readiness label. Neither is clearance.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'A quiet board is not clearance. A ready label is not a stronger form of quiet. A status string is not the named decision.',
      },
      {
        slug: 'dashboard-is-not-control',
        note: 'A ready badge on a dashboard is still a read. It does not write a start, a release, or a work order.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'The absence of an open item on a ready checklist is the inside of a rule. It is not a decision to go.',
      },
      {
        slug: 'coverage-is-not-control',
        note: 'Parts ready for the watched set is not clearance to run the equipment the set watches, or the equipment it does not watch.',
      },
      {
        slug: 'action-is-not-execution',
        note: 'A ready-to-start badge does not start the work. ACTION stays locked until authorized execution systems write.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A proposal that cites a ready label is still a proposal.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is an observed outcome. A later ready flag is not the check, and it does not close the case.',
      },
      {
        slug: 'human-decision-is-not-optional',
        note: 'Clearance still requires a named person to accept, reject, escalate, or return. The label does not record that act.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the closed case, not ready clearance.',
      },
    ],
  },
  'status-is-not-clearance': {
    relatedSlug: 'green-is-not-go',
    relatedNote: 'A green tile is a color on a value under a threshold. A status field, status tile, status badge, or all systems status OK string is the label on that comparison. Neither is clearance.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'ready-is-not-cleared',
        note: 'A green ready flag, ready checklist, ready-to-start badge, or ready string is a readiness label under thresholds someone chose. It is not clearance.',
      },
      {
        slug: 'complete-is-not-verified',
        note: 'A complete badge is a completion label under criteria someone chose. It is not named observation, and it does not honestly close the case.',
      },
      {
        slug: 'cleared-is-not-complete',
        note: 'A cleared flag, cleared checklist, or case cleared string can be a clearance decision or a label on one. It is not proof the work is finished or that the Decision Case can close.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'No reply and an empty inbox are not clearance. An affirmative status label is not a stronger form of quiet.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'A rule crossing is not a decision. A status of OK on the inside of the same rule is not clearance.',
      },
      {
        slug: 'dashboard-is-not-control',
        note: 'A dashboard reads a value. A status tile on that read is a label, not a write and not clearance.',
      },
      {
        slug: 'telemetry-is-not-truth',
        note: 'A feed can compute an all systems status OK string and still be the wrong sensor, a stale sample, or a proxy.',
      },
      {
        slug: 'coverage-is-not-control',
        note: 'An all systems status OK string covers the watched set. Coverage is not clearance to run or leave equipment in service.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is an observed outcome. A later status of OK does not close the Decision Case.',
      },
      {
        slug: 'human-decision-is-not-optional',
        note: 'Clearance still requires a named person to accept, reject, escalate, or return. The status label does not record that act.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A proposal that cites a status field is still a proposal.',
      },
      {
        slug: 'action-is-not-execution',
        note: 'Work intent on the case is not a start. A status badge does not unlock ACTION.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the closed case, not status clearance.',
      },
    ],
  },
  'green-is-not-go': {
    relatedSlug: 'dashboard-is-not-control',
    relatedNote: 'A dashboard reads a value and draws it. A green tile on that read is a value under a threshold someone chose. It is not permission to run, clear, start, or leave equipment in service.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'authorization-is-not-accountability',
        note: 'A green tile is not go. An authorized state is not accountability for the result after the plant move.',
      },
      {
        slug: 'proof-is-not-authorization',
        note: 'A green tile is not go. A closed chain beside that tile is not authorization to clear equipment to run.',
      },
      {
        slug: 'assured-is-not-proven',
        note: 'A green tile is not go. An assurance label on that tile is not proof the asset stays known-good.',
      },
      {
        slug: 'verified-is-not-assured',
        note: 'A verified stamp on a green tile is a past check. It is not permission to go, and it is not assurance.',
      },
      {
        slug: 'ready-is-not-cleared',
        note: 'A ready flag, ready checklist, ready-to-start badge, or ready string is a label under a threshold someone chose. It is not clearance to run, release, start work, leave equipment in service, or close the case.',
      },
      {
        slug: 'cleared-is-not-complete',
        note: 'A green tile is not permission to go. A cleared-to-proceed badge is a later stamp. Neither is proof the work is finished.',
      },
      {
        slug: 'status-is-not-clearance',
        note: 'A status field, status tile, status badge, or all systems status OK string is a label on stored or computed values. It is not clearance to run, release, start work, leave equipment in service, or close a Decision Case.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'A red tile is not a decision. A green status inside the same rule is not permission to go.',
      },
      {
        slug: 'telemetry-is-not-truth',
        note: 'A green-looking feed can still be the wrong sensor, a stale sample, or a proxy. The color is not truth for the decision.',
      },
      {
        slug: 'accuracy-is-not-precision',
        note: 'A precise health score painted green is repeatability, not accuracy, and not permission to run.',
      },
      {
        slug: 'calibration-is-not-validation',
        note: 'A calibration that moves a score into the band is not validation. The green tile is not go.',
      },
      {
        slug: 'coverage-is-not-control',
        note: 'An all-green board is green for the watched set. Coverage is not permission to run or leave equipment in service.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is an observed outcome. A later green tile is not the check.',
      },
      {
        slug: 'human-decision-is-not-optional',
        note: 'Go still requires a named person to accept, reject, escalate, or return. The color does not record that act.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'A quiet board is not clearance. A green board is not a stronger form of quiet.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A proposal that cites a green tile is still a proposal.',
      },
      {
        slug: 'action-is-not-execution',
        note: 'Work intent on the case is not a start. A green tile does not unlock ACTION.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the closed case, not green clearance.',
      },
    ],
  },
  'dashboard-is-not-control': {
    relatedSlug: 'telemetry-is-not-truth',
    relatedNote: 'A telemetry feed is a stream of observations, not truth for the decision. Rendering that feed as a tile, a trend, or a color is still a read. It does not write a setpoint, an isolation, or a work order.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'ready-is-not-cleared',
        note: 'A ready badge on the dashboard is a label under a threshold. It is not clearance to run, release, or start work.',
      },
      {
        slug: 'status-is-not-clearance',
        note: 'A status tile on the dashboard is a label on a read. It is not clearance and not a write.',
      },
      {
        slug: 'green-is-not-go',
        note: 'A green tile on the dashboard is a value under a threshold someone chose. It is not permission to run, clear, start, or leave equipment in service.',
      },
      {
        slug: 'accuracy-is-not-precision',
        note: 'Precision is repeatability, not accuracy relative to the plant decision. A precise tile is still a read, not a write.',
      },
      {
        slug: 'calibration-is-not-validation',
        note: 'A calibration drawn on a screen is still a read. A small residual does not write a setpoint, an isolation, or a work order.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'Seeing the display is not a Decision Case and not a named decision. The same display is not the write.',
      },
      {
        slug: 'coverage-is-not-control',
        note: 'The watched set is not permission to order work. The tile that shows the set is a read, not a write.',
      },
      {
        slug: 'action-is-not-execution',
        note: 'Work intent on the case is not the write. A refreshed tile does not unlock ACTION.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A proposal that cites a dashboard is still a proposal.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is the observed outcome of the write, not a later color.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'A quiet dashboard is not clearance and not a command holding the asset.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'An empty cell means the read returned no value. It is not a commanded zero.',
      },
      {
        slug: 'map-is-not-terrain',
        note: 'The drawing is a copy of a value. It is not the asset and not a command.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the closed case, not a color change.',
      },
    ],
  },
  'telemetry-is-not-truth': {
    relatedSlug: 'accuracy-is-not-precision',
    relatedNote: 'Precision is repeatability, not accuracy relative to the plant decision. A telemetry feed, however dense or precise, is not truth for that decision.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'status-is-not-clearance',
        note: 'A status computed from a feed is a label on those readings. It is not clearance and not truth for the decision.',
      },
      {
        slug: 'green-is-not-go',
        note: 'A green-looking feed is a value under a threshold. It is not permission to run, clear, start, or leave equipment in service.',
      },
      {
        slug: 'dashboard-is-not-control',
        note: 'A dashboard that renders the feed is still a read. Refreshing the tile does not write a setpoint, an isolation, or a work order.',
      },
      {
        slug: 'calibration-is-not-validation',
        note: 'A calibration that makes historical residuals look small is not validation. A stream of tags is not truth for the decision, and a small residual on that feed is still not validation.',
      },
      {
        slug: 'simulation-is-not-proof',
        note: 'A simulation of possible futures is not proof. A feed of tags is not truth for the decision.',
      },
      {
        slug: 'forecast-is-not-fact',
        note: 'A forecast is not a fact about the plant. A historian trace is not truth for the decision.',
      },
      {
        slug: 'model-is-not-reality',
        note: 'A model is not the plant. A stream of observations is not truth for the decision.',
      },
      {
        slug: 'map-is-not-terrain',
        note: 'A diagram is not the operating reality. A SCADA picture of tags is not truth for the decision.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is an observed outcome. A green feed is not the check.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not telemetry clearance.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'A proxy that does not track the failure mode is not the verified outcome.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'An unnamed sensing limit is not a recorded fact about the plant.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'A dense green feed is not a recorded check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope of tags is not truth. The tags themselves are not truth for the decision.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A recommendation to investigate is still a proposal.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A display of tags is not a decision and not truth.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A feed does not fill it.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing plant evidence stays unknown. A green feed does not record it as clear.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'A high-frequency sample of the wrong window is not the population the decision needs.',
      },
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A story about a tag is not evidence. The tag is not truth by itself.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'Chatter on a tag is not an actionable signal, and it is not truth.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'A sensor that shows a symptom has not recorded the cause.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'A limit a tag sits inside is not a diagnosis.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Co-moving tags are not a recorded causal check.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert a tag raised is still not a decision.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'A quiet feed is not clearance. Silence on limits is not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A feed without a reconstructable trail is not observed truth for the decision.',
      },
    ],
  },
  'accuracy-is-not-precision': {
    relatedSlug: 'calibration-is-not-validation',
    relatedNote: 'A calibration that makes historical residuals look small is not validation. A precise residual is repeatability, not accuracy relative to the plant decision.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'green-is-not-go',
        note: 'A precise score painted green is still a display under a threshold. It is not permission to run or leave equipment in service.',
      },
      {
        slug: 'dashboard-is-not-control',
        note: 'A precise tile is still a read. Stable decimals do not write a setpoint, an isolation, or a work order.',
      },
      {
        slug: 'telemetry-is-not-truth',
        note: 'A stream of tags, sensors, historians, SCADA, or CMMS counters is not truth for the decision. Stable decimals on that feed are still not accuracy.',
      },
      {
        slug: 'simulation-is-not-proof',
        note: 'A precise run of possible futures is not proof the plant will behave that way, and precision is not accuracy.',
      },
      {
        slug: 'forecast-is-not-fact',
        note: 'A forecast with stable decimals is not a fact about the plant, and it is not accuracy.',
      },
      {
        slug: 'model-is-not-reality',
        note: 'A model output at fine resolution is still not the plant, and precision is not accuracy.',
      },
      {
        slug: 'map-is-not-terrain',
        note: 'A precise diagram is not the operating reality. Fine resolution is not accuracy.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is an observed outcome. Stable decimals are not the check.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not precision clearance.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'A precise stand-in is not the verified outcome.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'A precise assumption is not a recorded fact about the plant.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'A number that repeats is not a recorded check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope is not truth. A precise RUL drawn from that slope is not accuracy.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A recommendation to investigate is still a proposal.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A display of stable decimals is not a decision and not accuracy.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A precise reading does not fill it.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing plant evidence stays unknown. Stable decimals do not record it as clear.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'A precise number on a handful of cases is not the fleet.',
      },
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A precise retelling of a story is not evidence.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'A precise feature of chatter is still not an actionable signal.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'A precise vibration feature has not recorded the cause.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'A limit printed at fine resolution is not a diagnosis.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Precise co-movement is not a recorded causal check.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert a precise reading ranked is still not a decision.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'A quiet precise reading is not clearance. Silence on the limit is not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A precise number without a reconstructable trail is not observed accuracy.',
      },
    ],
  },
  'calibration-is-not-validation': {
    relatedSlug: 'simulation-is-not-proof',
    relatedNote: 'A simulation of possible futures is not proof the plant will behave that way. A calibration that makes historical residuals look small is not validation that the representation is fit for the decision.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'green-is-not-go',
        note: 'A calibrated score inside a band can paint the tile green. That color is not validation and not permission to run.',
      },
      {
        slug: 'dashboard-is-not-control',
        note: 'A dashboard that displays a calibration is a read. It does not write a setpoint, an isolation, or a work order.',
      },
      {
        slug: 'telemetry-is-not-truth',
        note: 'A stream of tags, sensors, historians, SCADA, or CMMS counters is not truth for the decision. A small residual on that feed is still not validation.',
      },
      {
        slug: 'accuracy-is-not-precision',
        note: 'A precise residual is repeatability. It is not accuracy relative to the plant decision and the observed outcome.',
      },
      {
        slug: 'forecast-is-not-fact',
        note: 'A forecast tuned so historical residuals look small is not a fact about the plant, and it is not validation.',
      },
      {
        slug: 'model-is-not-reality',
        note: 'A model tuned so historical residuals look small is still not the plant, and the fit is not validation.',
      },
      {
        slug: 'map-is-not-terrain',
        note: 'A diagram of a close overlay is not the operating reality. The fit is not validation.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is an observed outcome. A small historical residual is not the check.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not calibration clearance.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'A residual used as a stand-in is not the verified outcome.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'An unnamed tuning choice is not a recorded fact about the plant.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'A small residual is not a recorded check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope is not truth. An RUL curve fitted to that slope is not validation.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A recommendation to investigate is still a proposal.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A display of residuals is not a decision and not validation.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A calibration does not fill it.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing plant evidence stays unknown. A small residual does not record it as clear.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'A calibration fit to a handful of cases is not the fleet.',
      },
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A fit built to retell a story is not evidence.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'Tuning chatter until residuals look small does not make it an actionable signal.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'A sensor brought close to a symptom has not recorded the cause.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'A limit a calibrated model sits inside is not a diagnosis.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'A residual shrunk across co-moving tags is not a recorded causal check.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert the calibration ranked is still not a decision.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'A quiet calibration is not clearance. Silence on refusal is not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A residual without a reconstructable trail is not observed validation.',
      },
    ],
  },
  'simulation-is-not-proof': {
    relatedSlug: 'forecast-is-not-fact',
    relatedNote: 'A forecast of the plant is not a fact about the plant. A simulation of possible futures is not proof the plant will behave that way.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'assured-is-not-proven',
        note: 'A simulation is not proof. An assurance label is not proof either. Proof is a closed evidentiary chain for a specific claim.',
      },
      {
        slug: 'telemetry-is-not-truth',
        note: 'A dense feed is not truth for the decision. A well-sampled run is still not proof the plant will behave that way.',
      },
      {
        slug: 'accuracy-is-not-precision',
        note: 'A precise run is repeatability. It is not accuracy, and it is not proof the plant will behave that way.',
      },
      {
        slug: 'calibration-is-not-validation',
        note: 'A small historical residual is not validation. A well-calibrated run is still not proof the plant will behave that way.',
      },
      {
        slug: 'model-is-not-reality',
        note: 'A model of the plant is not the plant. A run of that model is not proof the plant will behave that way.',
      },
      {
        slug: 'map-is-not-terrain',
        note: 'A diagram of a simulated future is not the operating reality.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is an observed outcome. A settled simulation is not the check.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not simulation clearance.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'A simulation used as a stand-in is not the verified outcome.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'An unverified run is not a recorded fact about the plant.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'A tight fan is not a recorded check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope is not truth. A fan of futures is not proof.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A recommendation to investigate is still a proposal.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A display of runs is not a decision and not proof.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A simulation does not fill it.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing plant evidence stays unknown. A favorable run does not record it as clear.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'A simulation fit to a handful of cases is not the fleet.',
      },
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A failure simulation of a story is not evidence.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'Simulating chatter does not make it an actionable signal.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'A run that names a symptom as the future cause has not recorded the cause.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'A limit a simulation says will be crossed is not a diagnosis.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'A Monte Carlo fan of co-moving tags is not a recorded causal check.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert the simulation ranked is still not a decision.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'A quiet simulation is not clearance. Silence on refusal conditions is not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A run without a reconstructable trail is not observed proof.',
      },
    ],
  },
  'forecast-is-not-fact': {
    relatedSlug: 'model-is-not-reality',
    relatedNote: 'A model of the plant is not the plant. A forecast of the plant is not a fact about the plant.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'telemetry-is-not-truth',
        note: 'A historian trace treated as the future is not a fact about the plant, and it is not truth for the decision.',
      },
      {
        slug: 'accuracy-is-not-precision',
        note: 'A precise forecast is repeatability. Stable decimals are not accuracy, and they are not a fact about the plant.',
      },
      {
        slug: 'calibration-is-not-validation',
        note: 'A forecast tuned so historical residuals look small is not a fact about the plant, and it is not validation.',
      },
      {
        slug: 'simulation-is-not-proof',
        note: 'A digital-twin run, Monte Carlo fan, what-if scenario, or failure simulation is not proof the plant will behave that way.',
      },
      {
        slug: 'map-is-not-terrain',
        note: 'A diagram of a future is not the operating reality. A forecast is not a fact about the plant.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'A forecast used as a stand-in is not the verified outcome.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'An unverified outlook is not a recorded fact about the plant.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'A tight uncertainty band is not a recorded check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope is not truth. A projection of that slope is not a fact.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A recommendation to investigate or prepare is still a proposal.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A display of outlooks is not a decision and not the plant state.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A forecast does not fill it.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing plant evidence stays unknown. A favorable outlook does not record it as clear.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'A forecast fit to a handful of cases is not the fleet.',
      },
      {
        slug: 'anecdote-is-not-evidence',
        note: 'An LLM-generated outlook of a story is not evidence.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'Projecting chatter does not make it an actionable signal.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'A forecast that names a symptom as the future cause has not recorded the cause.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'A limit a projection says will be crossed is not a diagnosis.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'A Monte Carlo percentile of co-moving tags is not a recorded causal check.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. A settled forecast is not the check.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert the forecast ranked is still not a decision.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not forecast clearance.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'A quiet forecast is not clearance. Silence on refusal conditions is not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'An outlook without a reconstructable trail is not observed fact.',
      },
    ],
  },
  'model-is-not-reality': {
    relatedSlug: 'map-is-not-terrain',
    relatedNote: 'A diagram of the plant is not the operating reality. A model of the plant is not the plant.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'telemetry-is-not-truth',
        note: 'A stream of tags is not the plant, and treating the feed as truth does not make the model the plant.',
      },
      {
        slug: 'accuracy-is-not-precision',
        note: 'A precise model output is repeatability. Fine resolution is not accuracy, and the model is still not the plant.',
      },
      {
        slug: 'calibration-is-not-validation',
        note: 'A model tuned so historical residuals look small is still not the plant, and the fit is not validation.',
      },
      {
        slug: 'simulation-is-not-proof',
        note: 'A run of the model through possible futures is not proof. The model is still not the plant.',
      },
      {
        slug: 'forecast-is-not-fact',
        note: 'A forecast, projection, RUL estimate, demand plan, Monte Carlo percentile, or LLM-generated outlook is not a fact about the plant.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'A KPI model score is a stand-in. It is not the verified outcome.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'An unverified model output is not a recorded fact.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'A high model score is not a recorded check.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A drafted next step from a model is still a proposal.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A display of model scores is not a decision and not the plant.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A model default does not fill it.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing plant evidence stays unknown. A nominal model does not record it as clear.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'A model fit to a handful of cases is not the fleet.',
      },
      {
        slug: 'anecdote-is-not-evidence',
        note: 'An LLM summary of a story is not evidence.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'Chatter fitted by a model is still not an actionable signal.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'A model that names a symptom as the cause has not recorded the cause.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'A limit inside a model is not a diagnosis.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'A Monte Carlo of co-moving tags is not a recorded causal check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'An RUL curve is a projected slope. It is not a recorded check.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. A settled model is not the check.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert the model ranked is still not a decision.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not a model state.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'A quiet model is not clearance. Silence on refusal conditions is not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A model output without a reconstructable trail is not observed fact.',
      },
    ],
  },
  'map-is-not-terrain': {
    relatedSlug: 'anecdote-is-not-evidence',
    relatedNote: 'A story about the plant is not evidence. A diagram of the plant is not the operating reality.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'telemetry-is-not-truth',
        note: 'A SCADA picture of tags is still not the operating reality, and the feed is not truth for the decision.',
      },
      {
        slug: 'accuracy-is-not-precision',
        note: 'A precise diagram is still not the operating reality, and fine resolution is not accuracy.',
      },
      {
        slug: 'calibration-is-not-validation',
        note: 'A twin tuned until the diagram looks close is still not the operating reality, and the fit is not validation.',
      },
      {
        slug: 'simulation-is-not-proof',
        note: 'A diagram of a simulated future is not the operating reality, and the run is not proof.',
      },
      {
        slug: 'forecast-is-not-fact',
        note: 'A forecast of the terrain is not a fact about the plant.',
      },
      {
        slug: 'model-is-not-reality',
        note: 'A digital twin, KPI model, risk matrix, RUL curve, Monte Carlo, or LLM summary is not the plant.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A dashboard is a compressed display. It is not a decision and not the operating reality.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'A green tile on a digital twin is a stand-in. It is not the verified outcome.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank in the CMMS schema is not a measured zero. The map does not fill it.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing plant evidence stays unknown. A nominal twin does not record it as clear.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'A process map of a handful of plants is not the fleet.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'Chatter on the dashboard is still not an actionable signal.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'A symptom drawn on a diagram is not the cause.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'A limit printed on a process map is not a diagnosis.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'An unverified model of the plant is not a recorded fact.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'Being sure the twin matches the asset is not a recorded check.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Arrows on a diagram are not a recorded causal check.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. A settled map is not the check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope on the twin is not a recorded check.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert drawn on the dashboard is still not a decision.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not a model state.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'A quiet dashboard is not clearance. A nominal map is not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A diagram without a reconstructable trail is not observed fact.',
      },
    ],
  },
  'anecdote-is-not-evidence': {
    relatedSlug: 'sample-is-not-population',
    relatedNote: 'A handful of cases is not the fleet. A story about that handful is not evidence.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'model-is-not-reality',
        note: 'A model that retells the plant is not the plant. A story is still not evidence.',
      },
      {
        slug: 'map-is-not-terrain',
        note: 'A diagram, schema, dashboard, digital twin, or process map is not the operating reality.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'Chatter on the dashboard is not an actionable signal. A story about that chatter is not evidence.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'An observed symptom is not the cause. A story about that symptom is not evidence.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'A line that was crossed is not a diagnosis. A story about that line is not evidence.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'A belief is not a recorded fact. A retelling does not record it.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'Being sure the story is true is not a recorded check.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Co-moving tags are not a cause. A hallway claim does not record one.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. Anecdote clearance is not the check.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'A stand-in measure is not the verified outcome. A story is not the check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope is not the truth. A memory of the slope is not a recorded check.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert is not a decision. A story about the alert is not one either.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A display is not a decision. A vignette about the display is not evidence.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not a near-miss retelling.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. A story does not record it as clear.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. An anecdote does not fill it.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. A story about the quiet is not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A story without a reconstructable trail is not observed fact.',
      },
    ],
  },
  'sample-is-not-population': {
    relatedSlug: 'noise-is-not-signal',
    relatedNote: 'Chatter on a dashboard is not an actionable signal. A handful of cases is not the fleet.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'model-is-not-reality',
        note: 'A model fit to a handful of cases is not the fleet.',
      },
      {
        slug: 'map-is-not-terrain',
        note: 'A diagram of the fleet is not the fleet. A compressed representation is not the population.',
      },
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A story about the handful is not evidence and not the fleet.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'A symptom seen on a few assets is not the cause for the population.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'A line crossed on a sample is not a diagnosis of the fleet.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert on the observed units is still not a decision for the class.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Co-movement inside a sample is not a recorded causal check for the population.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'A stand-in computed on the handful is not the verified operational outcome.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. A settled sample is not the check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope drawn through the observed cases is still not a recorded check.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'Being sure the handful represents the fleet is not a recorded check.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A tile on the assets that alarmed is a display. It is not the population.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not a sample stored as the fleet.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'We saw it here, so the fleet has it, is not a recorded fact.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A sample does not fill the unobserved field.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. A sample does not record the fleet as clear.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. Plants that did not report are not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A list without a trail of who was observed is not population-level proof.',
      },
    ],
  },
  'noise-is-not-signal': {
    relatedSlug: 'symptom-is-not-cause',
    relatedNote: 'An observed symptom is not the cause. Chatter on the dashboard is not an actionable signal.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'model-is-not-reality',
        note: 'Chatter fitted by a model is still not an actionable signal.',
      },
      {
        slug: 'map-is-not-terrain',
        note: 'A dashboard of chatter is a map. The chatter is still not an actionable signal.',
      },
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A story about the chatter is not evidence and not an actionable signal.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'A handful of cases is not the fleet. Chatter in that handful is still not an actionable signal.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'A line that was crossed is not a diagnosis. Noise around the line is still noise.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert can report chatter. Seeing it is still not a decision.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Tags that move together are not a recorded causal check.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'A stand-in measure is not the verified operational outcome.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. Clearing the chatter is not the check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope in the chatter is still not a recorded check.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'Being sure the chatter names the mode is not a recorded check.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A full dashboard is a display. It is not the Decision Case.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not cleared noise.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'The room is loud, so the mode is known, is not a recorded fact.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. Chatter does not fill it.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. Noise does not record it as clear.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. A quiet queue is not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'Chatter without a reconstructable trail is not an actionable signal.',
      },
    ],
  },
  'symptom-is-not-cause': {
    relatedSlug: 'threshold-is-not-diagnosis',
    relatedNote: 'A line that was crossed is not the diagnosis. An observed symptom is not the cause.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'model-is-not-reality',
        note: 'A model that names a symptom as the cause has not recorded the cause.',
      },
      {
        slug: 'map-is-not-terrain',
        note: 'A diagram of the symptom is not the cause and not the operating reality.',
      },
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A story about the symptom is not evidence and not the cause.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'A symptom seen on a few assets is not the cause for the population.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'Chatter around a symptom is not an actionable signal and not the cause.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'Acknowledging the symptom the alert reports is still not a decision.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Holding a symptom beside approved evidence does not prove the cause.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'Symptom clearance is not the verified operational outcome.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. A symptom that went away is not the check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope that shows up as a symptom is still not a recorded cause.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'Being sure the symptom names the mode is not a recorded check.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A red tile is a display. It is not the cause.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not the symptom stored as the cause.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: '“The bearing is hot, so we know the cause” is not a recorded fact.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A symptom does not fill it.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. A symptom does not record it as clear.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. A quiet asset is not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A candidate cause without a reconstructable trail is not a cause.',
      },
    ],
  },
  'threshold-is-not-diagnosis': {
    relatedSlug: 'proxy-is-not-outcome',
    relatedNote: 'A stand-in is not the outcome. A threshold breach is not the diagnosis.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'model-is-not-reality',
        note: 'A limit inside a model is not a diagnosis of the asset.',
      },
      {
        slug: 'map-is-not-terrain',
        note: 'A limit drawn on a process map is not a diagnosis of the asset.',
      },
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A story about the breach is not evidence and not a diagnosis.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'A threshold crossed on a sample is not a diagnosis of the fleet.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'Chatter that filled the dashboard is not an actionable signal and not a Decision Case.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'An observed symptom is not the cause and not the Decision Case.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert can report a breach. Seeing it is still not a decision.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Tags that cross together are not a named failure mode.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. A return inside the band is not the check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope that later crosses a line is still not a recorded check.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'Being sure the breach names the mode is not a recorded check.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A red band is a display. It is not the Decision Case.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not a hoped-for return inside the band.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: '“It crossed, so we know what failed” is not a recorded fact.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A breach does not fill it.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. A breach does not record it as clear.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. A quiet band is not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A line without a reconstructable trail is not a diagnosis.',
      },
    ],
  },
  'proxy-is-not-outcome': {
    relatedSlug: 'trend-is-not-truth',
    relatedNote: 'A slope is not the truth. A proxy move is not the verified outcome.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'telemetry-is-not-truth',
        note: 'A tag used as a stand-in is not the verified outcome, and a green feed is not truth.',
      },
      {
        slug: 'accuracy-is-not-precision',
        note: 'A precise stand-in is still not the verified outcome, and precision is not accuracy.',
      },
      {
        slug: 'calibration-is-not-validation',
        note: 'A residual that looks small is a stand-in. It is not the verified outcome, and it is not validation.',
      },
      {
        slug: 'simulation-is-not-proof',
        note: 'A simulation used as a stand-in is not the verified outcome.',
      },
      {
        slug: 'forecast-is-not-fact',
        note: 'A forecast used as a stand-in is not the verified outcome.',
      },
      {
        slug: 'model-is-not-reality',
        note: 'A KPI model score is a stand-in. It is not the verified outcome.',
      },
      {
        slug: 'map-is-not-terrain',
        note: 'A green tile on a digital twin is a stand-in. It is not the verified outcome.',
      },
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A retelling of the proxy move is not evidence and not the outcome.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'A proxy that moved on a few assets is not a population outcome.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'A noisy stand-in is not an actionable signal and not the verified outcome.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'A symptom that cleared is not the verified outcome.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'A line that was crossed is not a diagnosis and not the Decision Case.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Co-movement is not causation. A proxy that moved with the work is not the check.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'A high model score is not a recorded check, and it does not close the case.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A green tile is a display. It is not the verified outcome.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. A proxy move is not the check.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not a hoped-for proxy move.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'A stand-in story is not a recorded fact.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert beside a green tile is still an alert, not a decision.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A proxy does not fill it.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. A proxy does not record it as clear.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. A quiet proxy is not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A score without a reconstructable trail is not the outcome.',
      },
    ],
  },
  'trend-is-not-truth': {
    relatedSlug: 'correlation-is-not-causation',
    relatedNote: 'Co-movement is not causation. A slope is not the recorded truth.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'telemetry-is-not-truth',
        note: 'A slope of tags is not a recorded check, and the feed under that slope is not truth.',
      },
      {
        slug: 'accuracy-is-not-precision',
        note: 'A precise slope is not a recorded check, and stable decimals are not accuracy.',
      },
      {
        slug: 'calibration-is-not-validation',
        note: 'A slope fitted until residuals look small is not a recorded check, and it is not validation.',
      },
      {
        slug: 'simulation-is-not-proof',
        note: 'A fan of projected slopes is not proof. An observed outcome is still the check.',
      },
      {
        slug: 'forecast-is-not-fact',
        note: 'A projected slope is not a fact. An RUL estimate is not a recorded check.',
      },
      {
        slug: 'model-is-not-reality',
        note: 'An RUL curve is a projected slope. It is not a recorded check.',
      },
      {
        slug: 'map-is-not-terrain',
        note: 'A slope on a dashboard is a compressed line. It is not a recorded check.',
      },
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A memory of how the line always fails is not a recorded check.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'A slope on a handful of tags is not fleet truth.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'A noisy slope is not an actionable signal and not a recorded check.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'A slope that looks like a symptom is still not the cause.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'A line that was crossed is not a diagnosis and not a recorded check.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'A stand-in measure is not the verified operational outcome.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'Being sure the line will continue is not a recorded check.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'A trend narrative is not a recorded fact.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A rising or falling line is a display. It does not authorize action.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert beside a slope is still an alert, not a decision.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A delta does not fill it.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. A trend does not record it as clear.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. A quiet slope is not the decision.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. A week-over-week delta is not the check.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A chart without a reconstructable trail is not observed truth.',
      },
    ],
  },
  'correlation-is-not-causation': {
    relatedSlug: 'confidence-is-not-evidence',
    relatedNote: 'Being sure is not a recorded check. A co-moving trend is not a causal check.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'model-is-not-reality',
        note: 'A Monte Carlo of co-moving tags is not a recorded causal check.',
      },
      {
        slug: 'map-is-not-terrain',
        note: 'Co-moving tags on a diagram are not a recorded causal check.',
      },
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A hallway claim about co-movement is not a recorded causal check.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'Co-movement in a sample is not a causal check for the population.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'Co-moving chatter is not a recorded causal check and not an actionable signal.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'A symptom held beside co-moving tags still does not prove the cause.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'Tags that cross a band together still do not name the failure mode.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'A KPI, a score, or a closed count is not the verified outcome.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A rising or falling line is not a recorded check and not a verified outcome.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'A belief is not a recorded fact. Co-movement does not record the cause.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. A related chart does not record it as clear.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A trend does not fill it.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. Coincident alerts are not the decision.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A dashboard trend is a display. It does not authorize action.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert is not a decision. Two alerts in one window are still alerts.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. Co-movement is not the check.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A chart without a reconstructable trail is not observed causation.',
      },
    ],
  },
  'confidence-is-not-evidence': {
    relatedSlug: 'assumption-is-not-evidence',
    relatedNote: 'An assumption is not a recorded fact. Being sure does not make it one.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'telemetry-is-not-truth',
        note: 'Being sure the feed is dense enough is not a recorded check, and it is not truth.',
      },
      {
        slug: 'accuracy-is-not-precision',
        note: 'A precise score is not a recorded check, and precision is not accuracy.',
      },
      {
        slug: 'calibration-is-not-validation',
        note: 'Being sure the residuals are small enough is not a recorded check, and it is not validation.',
      },
      {
        slug: 'simulation-is-not-proof',
        note: 'Being sure the simulation is right is not a recorded check.',
      },
      {
        slug: 'forecast-is-not-fact',
        note: 'Being sure the outlook is right is not a recorded check.',
      },
      {
        slug: 'model-is-not-reality',
        note: 'Being sure the model is right is not a recorded check.',
      },
      {
        slug: 'map-is-not-terrain',
        note: 'Being sure the model matches the plant is not a recorded check.',
      },
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A confident retelling is not a recorded check.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Tags that move together are not a recorded causal check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope and a week-over-week delta are not a recorded check.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'Being sure a proxy moved is not the verified outcome.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. Confidence does not record it as clear.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A high score does not fill it.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. Certainty about the quiet is not the decision.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. A gut feel is not the check.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A high model score without a reconstructable trail is not observed fact.',
      },
    ],
  },
  'assumption-is-not-evidence': {
    relatedSlug: 'unknown-is-not-clear',
    relatedNote: 'Missing evidence stays unknown. An assumption does not record it as fact.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'telemetry-is-not-truth',
        note: 'An unnamed sensing or sampling limit is not a recorded fact about the plant, and the feed is not truth for the decision.',
      },
      {
        slug: 'accuracy-is-not-precision',
        note: 'A precise assumption is not a recorded fact, and precision is not accuracy relative to the plant decision.',
      },
      {
        slug: 'calibration-is-not-validation',
        note: 'A tuned residual is not a recorded fact about the plant, and it is not validation that the representation is fit for the decision.',
      },
      {
        slug: 'simulation-is-not-proof',
        note: 'An uncalibrated simulation is not a recorded fact about the plant.',
      },
      {
        slug: 'forecast-is-not-fact',
        note: 'An unverified forecast is not a recorded fact about the plant.',
      },
      {
        slug: 'model-is-not-reality',
        note: 'An unverified model output is not a recorded fact. The model is not the plant.',
      },
      {
        slug: 'map-is-not-terrain',
        note: 'An unverified model of the plant is not a recorded fact.',
      },
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A prior shift story is not a recorded fact.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Co-moving tags are not a recorded causal check, and they do not authorize action.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'Being sure does not record the check. A high score is not the measurement.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'An empty field is not a measured zero. An assumption does not fill it.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not approval. A story about that quiet is not the decision.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. A confident guess is not the check.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A model line without a reconstructable trail is not observed fact.',
      },
    ],
  },
  'silence-is-not-clearance': {
    relatedSlug: 'unknown-is-not-clear',
    relatedNote: 'Missing evidence stays unknown. Silence does not clear it.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'ready-is-not-cleared',
        note: 'A quiet board is not clearance. A ready label is not a stronger form of quiet, and a status string is not the named decision.',
      },
      {
        slug: 'cleared-is-not-complete',
        note: 'Quiet is not clearance. An affirmative cleared string is not completion and does not close the case.',
      },
      {
        slug: 'status-is-not-clearance',
        note: 'An all systems status OK string is an affirmative label, not silence. The label is still not clearance.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'A belief or a model line is not a recorded fact.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'An empty field is not a measured zero, and silence does not fill it.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A proposal is not authorization. No reply does not authorize it.',
      },
      {
        slug: 'human-decision-is-not-optional',
        note: 'A missing operator response is not the named decision.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'A quiet case is not the check that closes it.',
      },
    ],
  },
  'blank-is-not-zero': {
    relatedSlug: 'unknown-is-not-clear',
    relatedNote: 'Missing evidence is unknown. A blank is not a measured zero.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'assumption-is-not-evidence',
        note: 'An assumption does not turn a blank into a measurement.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Silence does not turn a blank into a measured zero.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'A blank verification field is not a verified outcome of none.',
      },
      {
        slug: 'human-decision-is-not-optional',
        note: 'A named act does not turn an empty field into a measurement.',
      },
      {
        slug: 'honesty-boundary-is-not-optional',
        note: 'Stating the limit does not store a blank as zero.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A green tile does not fill an empty field with zero.',
      },
    ],
  },
  'unknown-is-not-clear': {
    relatedSlug: 'human-decision-is-not-optional',
    relatedNote: 'A named act still leaves missing evidence unknown.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'assumption-is-not-evidence',
        note: 'An assumption does not record missing evidence as fact.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'No reply, no alert, and an empty inbox are not clearance.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check still needs a record. Unknown is not that check.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A proposal is not clearance of missing evidence.',
      },
      {
        slug: 'honesty-boundary-is-not-optional',
        note: 'Stating the limit does not record missing evidence as clear.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A green display is not clearance, and it is not the decision.',
      },
    ],
  },
  'human-decision-is-not-optional': {
    relatedSlug: 'honesty-boundary-is-not-optional',
    relatedNote: 'Naming the limit does not record who decided.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'authorization-is-not-accountability',
        note: 'A named person accepts the consequence and may start the work. That act is not continuing ownership of the outcome after execution.',
      },
      {
        slug: 'proof-is-not-authorization',
        note: 'A named person accepts the consequence. Proof of a claim does not record that act and does not authorize execution.',
      },
      {
        slug: 'assured-is-not-proven',
        note: 'A named person can refuse when evidence is incomplete. An assurance label does not close the chain or supply that refusal.',
      },
      {
        slug: 'verified-is-not-assured',
        note: 'A named decision does not convert a verified record into assurance. The human authority boundary still has to be named.',
      },
      {
        slug: 'ready-is-not-cleared',
        note: 'A ready string does not record who decided. Clearance still requires a named human decision.',
      },
      {
        slug: 'status-is-not-clearance',
        note: 'A status label does not record who decided. Clearance still requires a named human decision.',
      },
      {
        slug: 'green-is-not-go',
        note: 'A green tile does not record who decided. Go still requires a named human decision.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A drafted proposal is not the recorded decision.',
      },
      {
        slug: 'question-is-not-decision',
        note: 'A recorded question is still not the named act.',
      },
      {
        slug: 'action-is-not-execution',
        note: 'The recorded decision is still not plant execution.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The case stays open until the check is recorded.',
      },
    ],
  },
  'honesty-boundary-is-not-optional': {
    relatedSlug: 'alert-is-not-decision',
    relatedNote: 'A rule crossing is still not the decision.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'authorization-is-not-accountability',
        note: 'Calling authorization accountability crosses the honesty boundary. Authorization answers who may start.',
      },
      {
        slug: 'proof-is-not-authorization',
        note: 'Calling a closed chain authorization crosses the honesty boundary. Proof answers whether the claim held.',
      },
      {
        slug: 'assured-is-not-proven',
        note: 'Calling assurance proof crosses the honesty boundary. Assurance is standing confidence. Proof is a closed chain for a specific claim.',
      },
      {
        slug: 'verified-is-not-assured',
        note: 'A verified record is a claim about the past. Stating it as continuing fitness crosses the honesty boundary.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A status display is still not the decision.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A drafted proposal is not permission.',
      },
      {
        slug: 'action-is-not-execution',
        note: 'Work intent on the case is still not plant execution.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The case stays open until the check is recorded.',
      },
    ],
  },
  'alert-is-not-decision': {
    relatedSlug: 'dashboard-is-not-decision',
    relatedNote: 'A status display is still not the decision.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'ready-is-not-cleared',
        note: 'A ready status is the inside of a rule. The label is not clearance to run, release, start work, or close the case.',
      },
      {
        slug: 'status-is-not-clearance',
        note: 'A status that says OK is the inside of a rule. The label is not clearance to run, release, or close the case.',
      },
      {
        slug: 'green-is-not-go',
        note: 'A green status is the other side of an alert. The color is not the decision to run, clear, start, or leave equipment in service.',
      },
      {
        slug: 'question-is-not-decision',
        note: 'Opening a question is still not the decision.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'An alert beside a proposal is not a named decision.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'A silenced notification is not the check that closes the case.',
      },
      {
        slug: 'action-is-not-execution',
        note: 'Clearing a queue does not write the work order.',
      },
    ],
  },
  'dashboard-is-not-decision': {
    relatedSlug: 'question-is-not-decision',
    relatedNote: 'Opening a question is still not the decision.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'dashboard-is-not-control',
        note: 'A display of state is not a decision. The same display is not a write that controls the plant.',
      },
      {
        slug: 'coverage-is-not-control',
        note: 'A dashboard is part of what is watched. It is not control of the plant.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A status display is not a named decision on a recommendation.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'A green tile is not the check that closes the case.',
      },
    ],
  },
  'question-is-not-decision': {
    relatedSlug: 'coverage-is-not-control',
    relatedNote: 'A watched set is still not control of the plant.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'action-is-not-execution',
        note: 'Work intent on the case is still not execution.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A drafted proposal is not the named decision.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The case stays open until the check is recorded.',
      },
    ],
  },
  'coverage-is-not-control': {
    relatedSlug: 'action-is-not-execution',
    relatedNote: 'A recorded intent still does not execute the work.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'ready-is-not-cleared',
        note: 'Parts ready for the watched set is still the watched set. Ready is not clearance to run or leave equipment in service.',
      },
      {
        slug: 'cleared-is-not-complete',
        note: 'A cleared flag on the watched set is not control, and it is not proof the watched work is finished.',
      },
      {
        slug: 'status-is-not-clearance',
        note: 'An all systems status OK string covers the watched set. It is not clearance to run or leave equipment in service.',
      },
      {
        slug: 'green-is-not-go',
        note: 'A watched set that paints every tile green is still the watched set. Green is not permission to run or leave equipment in service.',
      },
      {
        slug: 'dashboard-is-not-control',
        note: 'The watched set is not control authority. The screen that shows that set is a read, not a write.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The case stays open until the check is recorded.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A coverage recommendation is a proposal. A named person decides.',
      },
    ],
  },
  'action-is-not-execution': {
    relatedSlug: 'recommend-is-not-authorize',
    relatedNote: 'A named decision still does not execute the work.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'authorization-is-not-accountability',
        note: 'ACTION records intent. Authorization routes that intent. Neither owns the result, the exception, or the learning after execution.',
      },
      {
        slug: 'proof-is-not-authorization',
        note: 'A closed chain is not the write. Proof does not unlock ACTION and does not execute plant work.',
      },
      {
        slug: 'ready-is-not-cleared',
        note: 'A ready-to-start badge is not the write. The label does not unlock ACTION.',
      },
      {
        slug: 'cleared-is-not-complete',
        note: 'Cleared for start is not execution. The stamp does not unlock ACTION and does not finish the work.',
      },
      {
        slug: 'complete-is-not-verified',
        note: 'A completed work order is not verification. The label does not unlock ACTION and does not record the outcome.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The case stays open until the check is recorded.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'A later case inherits the verified outcome, not the work intent.',
      },
    ],
  },
  'learning-requires-a-verified-outcome': {
    relatedSlug: 'verification-is-not-optional',
    relatedNote: 'The check a later case is allowed to inherit.',
    next: 'field-manual',
    also: [
      {
        slug: 'closure-is-not-cash',
        note: 'Learning inherits the verified outcome. A closed work order is not cash collected, and it is not revenue recognized.',
      },
      {
        slug: 'accountability-is-not-closure',
        note: 'Learning inherits the verified outcome. A named accountable owner without that measured result is not closure.',
      },
      {
        slug: 'verified-is-not-assured',
        note: 'Learning inherits achieved, not_achieved, or inconclusive. A verified stamp is not a standing assurance.',
      },
      {
        slug: 'complete-is-not-verified',
        note: 'Learning closes on achieved, not_achieved, or inconclusive. A complete badge is not that close.',
      },
      {
        slug: 'cleared-is-not-complete',
        note: 'Learning inherits the verified outcome. A cleared stamp is not that outcome.',
      },
    ],
  },
  'verification-is-not-optional': {
    relatedSlug: 'learning-requires-a-verified-outcome',
    relatedNote: 'What a closed case is allowed to pass forward.',
    next: 'field-manual',
    also: [
      {
        slug: 'closure-is-not-cash',
        note: 'Recording the check is the measured result. The check does not collect cash and does not recognize revenue.',
      },
      {
        slug: 'accountability-is-not-closure',
        note: 'Recording the check is the measured result. Naming an accountable owner does not close the operating loop without that record.',
      },
      {
        slug: 'authorization-is-not-accountability',
        note: 'Recording the check does not make authorization into accountability for the outcome after the work runs.',
      },
      {
        slug: 'proof-is-not-authorization',
        note: 'Recording the check does not authorize plant work. Proof is not authorization.',
      },
      {
        slug: 'assured-is-not-proven',
        note: 'Recording the check does not prove a standing assurance. Proof is claim-scoped and falsifiable.',
      },
      {
        slug: 'verified-is-not-assured',
        note: 'The check closes a claim about the past. It does not assure that the asset stays known-good.',
      },
      {
        slug: 'complete-is-not-verified',
        note: 'The check is named observation against named criteria. A complete badge is not that check.',
      },
      {
        slug: 'ready-is-not-cleared',
        note: 'A ready flag is not the observed outcome that closes the case.',
      },
      {
        slug: 'cleared-is-not-complete',
        note: 'The check is achieved, not_achieved, or inconclusive, with measured notes. A cleared stamp is not that check.',
      },
      {
        slug: 'status-is-not-clearance',
        note: 'A status that returns to OK is not the observed outcome that closes the case.',
      },
      {
        slug: 'green-is-not-go',
        note: 'A green tile is not the observed outcome that closes the case.',
      },
    ],
  },
  'recommend-is-not-authorize': {
    relatedSlug: 'evidence-lineage-is-not-optional',
    relatedNote: 'A proposal still needs a record you can reconstruct.',
    next: 'field-manual',
  },
  'evidence-lineage-is-not-optional': {
    relatedSlug: 'recommend-is-not-authorize',
    relatedNote: 'The record is the basis. Authorization stays with a named person.',
    next: 'strategic-pilot',
  },
  'fracas-is-not-a-decision-system': {
    relatedSlug: 'evidence-lineage-is-not-optional',
    relatedNote: 'A failure code still needs a reconstructable record.',
    next: 'field-manual',
  },
  'why-cmms-alone-is-failing-2026': {
    relatedSlug: 'fracas-is-not-a-decision-system',
    relatedNote: 'The system of record still leaves the decision unproven.',
    next: 'strategic-pilot',
  },
  'economics-of-autonomous-maintenance': {
    relatedSlug: 'learning-requires-a-verified-outcome',
    relatedNote: 'A savings figure still needs a verified outcome.',
    next: 'field-manual',
  },
  'governance-in-industrial-ai': {
    relatedSlug: 'recommend-is-not-authorize',
    relatedNote: 'Oversight is the named human decision.',
    next: 'field-manual',
  },
};

export type FurtherReadingItem = {
  slug: string;
  note: string;
};

/** Evidence grade, named approval, and the check before a conclusion is treated as closed. */
export const riaFurtherReading: readonly FurtherReadingItem[] = [
  {
    slug: 'evidence-lineage-is-not-optional',
    note: 'A recommendation you cannot reconstruct is not an industrial decision.',
  },
  {
    slug: 'recommend-is-not-authorize',
    note: 'A drafted next action is a proposal. A named person decides.',
  },
  {
    slug: 'verification-is-not-optional',
    note: 'Authorization records who decided. The case stays open until the check is recorded.',
  },
];

/** Named approval, the outcome check, and what a later case is allowed to inherit. */
export const strategicPilotFurtherReading: readonly FurtherReadingItem[] = [
  {
    slug: 'recommend-is-not-authorize',
    note: 'A drafted next action is a proposal. A named person decides.',
  },
  {
    slug: 'verification-is-not-optional',
    note: 'Authorization records who decided. The case stays open until the check is recorded.',
  },
  {
    slug: 'learning-requires-a-verified-outcome',
    note: 'A later case inherits the closed record, not a hoped-for outcome.',
  },
];

export function assertInsightLinkGraph(): void {
  const slugs = new Set(insightArticles.map((article) => article.slug));

  for (const article of insightArticles) {
    const step = insightNextSteps[article.slug];
    if (!step) {
      throw new Error(`Missing insight next step for ${article.slug}`);
    }
    if (step.relatedSlug === article.slug || !slugs.has(step.relatedSlug)) {
      throw new Error(`Bad related essay for ${article.slug}`);
    }
    if (!step.relatedNote.trim()) {
      throw new Error(`Missing related note for ${article.slug}`);
    }
    const seen = new Set<string>([article.slug, step.relatedSlug]);
    for (const item of step.also ?? []) {
      if (seen.has(item.slug) || !slugs.has(item.slug) || !item.note.trim()) {
        throw new Error(`Bad extra related essay for ${article.slug}`);
      }
      seen.add(item.slug);
    }
    if (step.next !== 'field-manual' && step.next !== 'strategic-pilot') {
      throw new Error(`Bad next step for ${article.slug}`);
    }
  }

  for (const list of [riaFurtherReading, strategicPilotFurtherReading]) {
    if (list.length < 2 || list.length > 3) {
      throw new Error('Further reading must list two or three Insights essays');
    }
    for (const item of list) {
      if (!slugs.has(item.slug) || !item.note.trim()) {
        throw new Error(`Bad further reading item ${item.slug}`);
      }
    }
  }
}

assertInsightLinkGraph();
