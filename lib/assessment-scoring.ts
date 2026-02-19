import { AssessmentData, ScoreResult, ROIResult, ASSET_COUNTS, AUDIT_FREQUENCIES, AUDIT_DIFFICULTIES, AI_ADOPTION_LEVELS } from './assessment-types';

export function calculateScore(data: AssessmentData): ScoreResult {
  const operationalComplexity = calculateOperationalComplexity(data);
  const downtimeExposure = calculateDowntimeExposure(data);
  const reactiveRatio = calculateReactiveRatio(data);
  const governancePressure = calculateGovernancePressure(data);
  const aiStrategicAlignment = calculateAIStrategicAlignment(data);

  const totalScore = Math.round(
    operationalComplexity + downtimeExposure + reactiveRatio + governancePressure + aiStrategicAlignment
  );

  const classification = getClassification(totalScore);

  return {
    totalScore,
    classification,
    breakdown: {
      operationalComplexity,
      downtimeExposure,
      reactiveRatio,
      governancePressure,
      aiStrategicAlignment,
    },
  };
}

function calculateOperationalComplexity(data: AssessmentData): number {
  const assetIndex = ASSET_COUNTS.indexOf(data.assetCount);
  const assetScore = ((assetIndex + 1) / ASSET_COUNTS.length) * 15;

  const laborCost = data.annualMaintenanceLaborCost;
  let laborScore = 0;
  if (laborCost >= 50000000) laborScore = 10;
  else if (laborCost >= 20000000) laborScore = 8;
  else if (laborCost >= 10000000) laborScore = 6;
  else if (laborCost >= 5000000) laborScore = 4;
  else if (laborCost >= 1000000) laborScore = 2;

  return Math.min(25, assetScore + laborScore);
}

function calculateDowntimeExposure(data: AssessmentData): number {
  const annualDowntimeCost = data.hourlyDowntimeCost * data.annualUnplannedDowntimeHours;

  if (annualDowntimeCost >= 50000000) return 25;
  if (annualDowntimeCost >= 20000000) return 22;
  if (annualDowntimeCost >= 10000000) return 18;
  if (annualDowntimeCost >= 5000000) return 14;
  if (annualDowntimeCost >= 1000000) return 10;
  if (annualDowntimeCost >= 500000) return 6;
  return 3;
}

function calculateReactiveRatio(data: AssessmentData): number {
  const percent = data.reactiveWorkPercent;
  if (percent >= 70) return 15;
  if (percent >= 50) return 12;
  if (percent >= 30) return 8;
  if (percent >= 15) return 4;
  return 2;
}

function calculateGovernancePressure(data: AssessmentData): number {
  const freqIndex = AUDIT_FREQUENCIES.indexOf(data.auditFrequency);
  const diffIndex = AUDIT_DIFFICULTIES.indexOf(data.auditDifficulty);

  const freqScore = ((AUDIT_FREQUENCIES.length - freqIndex) / AUDIT_FREQUENCIES.length) * 7;
  const diffScore = ((diffIndex + 1) / AUDIT_DIFFICULTIES.length) * 8;

  return Math.min(15, freqScore + diffScore);
}

function calculateAIStrategicAlignment(data: AssessmentData): number {
  const adoptionIndex = AI_ADOPTION_LEVELS.indexOf(data.aiAdoptionLevel);

  if (adoptionIndex <= 1) return 20;
  if (adoptionIndex === 2) return 16;
  if (adoptionIndex === 3) return 10;
  return 5;
}

function getClassification(score: number): string {
  if (score >= 81) return 'Strategic Priority Deployment';
  if (score >= 61) return 'High Impact Candidate';
  if (score >= 36) return 'Emerging Candidate';
  return 'Foundational';
}

export function calculateROI(data: AssessmentData): ROIResult {
  const HDC = data.hourlyDowntimeCost;
  const UDH = data.annualUnplannedDowntimeHours;
  const MLC = data.annualMaintenanceLaborCost;
  const SPV = data.sparePartsInventoryValue;

  const downtimeLow = HDC * UDH * 0.10;
  const downtimeHigh = HDC * UDH * 0.20;

  const laborLow = MLC * 0.05;
  const laborHigh = MLC * 0.12;

  const inventoryLow = SPV * 0.03;
  const inventoryHigh = SPV * 0.08;

  const totalLow = downtimeLow + laborLow + inventoryLow;
  const totalHigh = downtimeHigh + laborHigh + inventoryHigh;

  return {
    downtimeLow,
    downtimeHigh,
    laborLow,
    laborHigh,
    inventoryLow,
    inventoryHigh,
    totalLow,
    totalHigh,
  };
}

export function getLeadPriority(score: number, roiLow: number): string {
  if (score > 75 || roiLow > 2000000) {
    return 'High Priority Enterprise Lead';
  }
  if (score > 60) {
    return 'Mid Priority';
  }
  return 'Long Term Nurture';
}

export function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  }
  return `$${value.toFixed(0)}`;
}

export function formatFullCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
