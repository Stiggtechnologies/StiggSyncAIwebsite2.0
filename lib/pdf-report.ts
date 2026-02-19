import { AssessmentData, ScoreResult, ROIResult } from './assessment-types';
import { formatFullCurrency } from './assessment-scoring';

export interface ReportData {
  assessment: AssessmentData;
  score: ScoreResult;
  roi: ROIResult;
  generatedAt: string;
}

export function generateReportHTML(data: ReportData): string {
  const { assessment, score, roi, generatedAt } = data;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>AI Readiness Assessment Report - ${assessment.company}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #0B0F14; color: #fff; padding: 40px; }
    .container { max-width: 800px; margin: 0 auto; }
    .header { text-align: center; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 1px solid #1E293B; }
    .logo { font-size: 24px; font-weight: 700; color: #3B82F6; margin-bottom: 10px; }
    .title { font-size: 32px; font-weight: 700; margin-bottom: 10px; }
    .subtitle { color: #94A3B8; font-size: 16px; }
    .section { margin-bottom: 40px; }
    .section-title { font-size: 20px; font-weight: 600; color: #3B82F6; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #1E293B; }
    .score-box { background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%); border-radius: 16px; padding: 30px; text-align: center; margin-bottom: 30px; border: 1px solid #334155; }
    .score-value { font-size: 72px; font-weight: 700; color: #3B82F6; }
    .score-label { font-size: 14px; color: #94A3B8; margin-top: 5px; }
    .classification { font-size: 24px; font-weight: 600; margin-top: 20px; color: #10B981; }
    .breakdown { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 30px; }
    .breakdown-item { background: #0F172A; border-radius: 8px; padding: 15px; border: 1px solid #1E293B; }
    .breakdown-label { font-size: 12px; color: #94A3B8; margin-bottom: 5px; }
    .breakdown-value { font-size: 24px; font-weight: 600; color: #fff; }
    .roi-box { background: linear-gradient(135deg, #064E3B 0%, #0F172A 100%); border-radius: 16px; padding: 30px; text-align: center; border: 1px solid #10B981; }
    .roi-title { font-size: 14px; color: #94A3B8; margin-bottom: 10px; }
    .roi-range { font-size: 36px; font-weight: 700; color: #10B981; }
    .roi-subtitle { font-size: 14px; color: #94A3B8; margin-top: 10px; }
    .roi-breakdown { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-top: 25px; }
    .roi-item { background: #0F172A; border-radius: 8px; padding: 15px; text-align: center; }
    .roi-item-label { font-size: 12px; color: #94A3B8; margin-bottom: 5px; }
    .roi-item-value { font-size: 16px; font-weight: 600; color: #fff; }
    .company-info { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .info-item { background: #0F172A; border-radius: 8px; padding: 15px; border: 1px solid #1E293B; }
    .info-label { font-size: 12px; color: #94A3B8; margin-bottom: 5px; }
    .info-value { font-size: 16px; font-weight: 500; }
    .pilot-box { background: linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%); border-radius: 16px; padding: 30px; border: 1px solid #3B82F6; }
    .pilot-title { font-size: 20px; font-weight: 600; margin-bottom: 15px; }
    .pilot-list { list-style: none; }
    .pilot-list li { padding: 10px 0; padding-left: 25px; position: relative; color: #CBD5E1; }
    .pilot-list li::before { content: ""; position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 8px; height: 8px; background: #3B82F6; border-radius: 50%; }
    .cta { text-align: center; margin-top: 40px; padding: 30px; background: #0F172A; border-radius: 16px; border: 1px solid #1E293B; }
    .cta-title { font-size: 24px; font-weight: 600; margin-bottom: 10px; }
    .cta-text { color: #94A3B8; margin-bottom: 20px; }
    .cta-link { display: inline-block; padding: 15px 30px; background: #3B82F6; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600; }
    .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #1E293B; color: #64748B; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">StiggSync AI</div>
      <div class="title">AI Readiness Assessment Report</div>
      <div class="subtitle">Generated for ${assessment.company} on ${generatedAt}</div>
    </div>

    <div class="section">
      <div class="section-title">Executive Summary</div>
      <div class="company-info">
        <div class="info-item">
          <div class="info-label">Company</div>
          <div class="info-value">${assessment.company}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Industry</div>
          <div class="info-value">${assessment.industry}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Contact</div>
          <div class="info-value">${assessment.name}, ${assessment.title}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Asset Count</div>
          <div class="info-value">${assessment.assetCount}</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">AI Readiness Score</div>
      <div class="score-box">
        <div class="score-value">${score.totalScore}</div>
        <div class="score-label">out of 100</div>
        <div class="classification">${score.classification}</div>
        <div class="breakdown">
          <div class="breakdown-item">
            <div class="breakdown-label">Operational Complexity</div>
            <div class="breakdown-value">${score.breakdown.operationalComplexity.toFixed(0)}/25</div>
          </div>
          <div class="breakdown-item">
            <div class="breakdown-label">Downtime Exposure</div>
            <div class="breakdown-value">${score.breakdown.downtimeExposure.toFixed(0)}/25</div>
          </div>
          <div class="breakdown-item">
            <div class="breakdown-label">Reactive Work Ratio</div>
            <div class="breakdown-value">${score.breakdown.reactiveRatio.toFixed(0)}/15</div>
          </div>
          <div class="breakdown-item">
            <div class="breakdown-label">Governance Pressure</div>
            <div class="breakdown-value">${score.breakdown.governancePressure.toFixed(0)}/15</div>
          </div>
          <div class="breakdown-item">
            <div class="breakdown-label">AI Strategic Alignment</div>
            <div class="breakdown-value">${score.breakdown.aiStrategicAlignment.toFixed(0)}/20</div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">ROI Optimization Potential</div>
      <div class="roi-box">
        <div class="roi-title">Estimated Annual Optimization Potential</div>
        <div class="roi-range">${formatFullCurrency(roi.totalLow)} - ${formatFullCurrency(roi.totalHigh)}</div>
        <div class="roi-subtitle">Based on conservative industry benchmarks</div>
        <div class="roi-breakdown">
          <div class="roi-item">
            <div class="roi-item-label">Downtime Reduction</div>
            <div class="roi-item-value">${formatFullCurrency(roi.downtimeLow)} - ${formatFullCurrency(roi.downtimeHigh)}</div>
          </div>
          <div class="roi-item">
            <div class="roi-item-label">Labor Optimization</div>
            <div class="roi-item-value">${formatFullCurrency(roi.laborLow)} - ${formatFullCurrency(roi.laborHigh)}</div>
          </div>
          <div class="roi-item">
            <div class="roi-item-label">Inventory Efficiency</div>
            <div class="roi-item-value">${formatFullCurrency(roi.inventoryLow)} - ${formatFullCurrency(roi.inventoryHigh)}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">90-Day Strategic Pilot Summary</div>
      <div class="pilot-box">
        <div class="pilot-title">Recommended Implementation Path</div>
        <ul class="pilot-list">
          <li><strong>Week 1-2:</strong> Discovery and data architecture assessment</li>
          <li><strong>Week 3-4:</strong> Integration with existing ${assessment.cmmsType} system</li>
          <li><strong>Week 5-8:</strong> AI agent deployment and calibration</li>
          <li><strong>Week 9-10:</strong> Operational validation and KPI benchmarking</li>
          <li><strong>Week 11-12:</strong> Results analysis and enterprise rollout planning</li>
        </ul>
      </div>
    </div>

    <div class="cta">
      <div class="cta-title">Ready to Transform Your Operations?</div>
      <div class="cta-text">Schedule a strategic consultation to discuss your custom implementation roadmap.</div>
      <a href="https://stiggsync.ai/strategic-pilot" class="cta-link">Request Strategic Pilot</a>
    </div>

    <div class="footer">
      <p>This report was generated by StiggSync AI. The estimates provided are based on industry benchmarks and the information provided. Actual results may vary based on implementation and operational factors.</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}
