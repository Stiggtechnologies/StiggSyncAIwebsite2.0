import { AssessmentData, ScoreResult, ROIResult } from './assessment-types';
import { formatFullCurrency } from './assessment-scoring';

export interface ReportData {
  assessment: AssessmentData;
  score: ScoreResult;
  roi: ROIResult;
  generatedAt: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function generateReportHTML(data: ReportData): string {
  const { assessment, score, roi, generatedAt } = data;

  const company = escapeHtml(assessment.company);
  const name = escapeHtml(assessment.name);
  const title = escapeHtml(assessment.title);
  const industry = escapeHtml(assessment.industry);
  const cmms = escapeHtml(assessment.cmmsType);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>SyncAI Readiness Assessment - ${company}</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; background: #081018; color: #e2e8f0; font-family: Arial, Helvetica, sans-serif; }
    .wrap { max-width: 820px; margin: 0 auto; padding: 42px 28px; }
    .eyebrow { color: #67e8f9; font-size: 12px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
    h1 { margin: 10px 0 6px; color: #fff; font-size: 34px; }
    h2 { margin: 0 0 14px; color: #fff; font-size: 21px; }
    p { line-height: 1.6; }
    .muted { color: #94a3b8; }
    .card { margin-top: 22px; padding: 24px; border: 1px solid #233142; border-radius: 12px; background: #0b151f; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .metric { padding: 14px; border: 1px solid #233142; border-radius: 8px; background: #081018; }
    .metric small { display: block; color: #64748b; margin-bottom: 5px; }
    .score { font-size: 58px; font-weight: 700; color: #fff; }
    .range { font-size: 32px; font-weight: 700; color: #fff; }
    .notice { margin-top: 22px; padding: 18px; border: 1px solid #785f1e; border-radius: 10px; background: #1b170c; color: #fde68a; }
    .footer { margin-top: 28px; padding-top: 18px; border-top: 1px solid #233142; color: #64748b; font-size: 12px; line-height: 1.6; }
    a { color: #67e8f9; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="eyebrow">SyncAI planning tool</div>
    <h1>Industrial AI Readiness Assessment</h1>
    <p class="muted">Generated for ${company} on ${escapeHtml(generatedAt)}</p>

    <div class="card">
      <h2>Operating context</h2>
      <div class="grid">
        <div class="metric"><small>Company</small>${company}</div>
        <div class="metric"><small>Industry</small>${industry}</div>
        <div class="metric"><small>Contact</small>${name}${title ? `, ${title}` : ''}</div>
        <div class="metric"><small>CMMS / EAM</small>${cmms}</div>
      </div>
    </div>

    <div class="card">
      <div class="eyebrow">Readiness score</div>
      <div class="score">${score.totalScore}<span style="font-size:20px;color:#64748b">/100</span></div>
      <p><strong>${escapeHtml(score.classification)}</strong></p>
      <div class="grid">
        <div class="metric"><small>Operational complexity</small>${score.breakdown.operationalComplexity.toFixed(0)}/25</div>
        <div class="metric"><small>Downtime exposure</small>${score.breakdown.downtimeExposure.toFixed(0)}/25</div>
        <div class="metric"><small>Reactive work ratio</small>${score.breakdown.reactiveRatio.toFixed(0)}/15</div>
        <div class="metric"><small>Governance pressure</small>${score.breakdown.governancePressure.toFixed(0)}/15</div>
      </div>
    </div>

    <div class="card">
      <div class="eyebrow">Illustrative scenario — not a forecast</div>
      <h2>Potential value pools to validate</h2>
      <p class="muted">The range below applies explicit sensitivity assumptions to the cost inputs supplied in the assessment. It is not an observed SyncAI customer outcome, savings claim, guarantee, or financial forecast.</p>
      <div class="range">${formatFullCurrency(roi.totalLow)} – ${formatFullCurrency(roi.totalHigh)}</div>
      <div class="grid" style="margin-top:16px">
        <div class="metric"><small>Downtime sensitivity (10–20%)</small>${formatFullCurrency(roi.downtimeLow)} – ${formatFullCurrency(roi.downtimeHigh)}</div>
        <div class="metric"><small>Labour sensitivity (5–12%)</small>${formatFullCurrency(roi.laborLow)} – ${formatFullCurrency(roi.laborHigh)}</div>
        <div class="metric"><small>Inventory sensitivity (3–8%)</small>${formatFullCurrency(roi.inventoryLow)} – ${formatFullCurrency(roi.inventoryHigh)}</div>
      </div>
    </div>

    <div class="notice">
      <strong>How to use this range:</strong> select one material use case, establish its real baseline, define the evidence and human-approval boundary, and measure the outcome during a controlled proof before building an investment case.
    </div>

    <div class="card">
      <h2>Suggested next step</h2>
      <p class="muted">Bring SyncAI one consequential reliability or maintenance decision. We will define the operating evidence required, the approval boundary, and the KPI that will verify value.</p>
      <p><a href="https://syncai.ca/strategic-pilot">Define a strategic pilot</a></p>
    </div>

    <div class="footer">
      This assessment is a planning aid based on information supplied by the participant. Scenario values are sensitivity calculations, not customer performance evidence. Actual outcomes depend on the selected use case, data quality, operating conditions, implementation, and approved interventions.
    </div>
  </div>
</body>
</html>
  `.trim();
}
