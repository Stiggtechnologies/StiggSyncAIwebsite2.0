export interface AssessmentData {
  industry: string;
  assetCount: string;
  cmmsType: string;
  reactiveWorkPercent: number;
  annualMaintenanceLaborCost: number;
  sparePartsInventoryValue: number;
  hourlyDowntimeCost: number;
  annualUnplannedDowntimeHours: number;
  auditFrequency: string;
  auditDifficulty: string;
  aiAdoptionLevel: string;
  name: string;
  title: string;
  company: string;
  email: string;
}

export interface ScoreResult {
  totalScore: number;
  classification: string;
  breakdown: {
    operationalComplexity: number;
    downtimeExposure: number;
    reactiveRatio: number;
    governancePressure: number;
    aiStrategicAlignment: number;
  };
}

export interface ROIResult {
  downtimeLow: number;
  downtimeHigh: number;
  laborLow: number;
  laborHigh: number;
  inventoryLow: number;
  inventoryHigh: number;
  totalLow: number;
  totalHigh: number;
}

export const INDUSTRIES = [
  'Manufacturing',
  'Oil & Gas',
  'Utilities',
  'Mining',
  'Food & Beverage',
  'Pharmaceutical',
  'Transportation & Logistics',
  'Data Centers',
  'Healthcare Facilities',
  'Commercial Real Estate',
  'Other',
];

export const ASSET_COUNTS = [
  '< 500',
  '500 - 2,000',
  '2,000 - 10,000',
  '10,000 - 50,000',
  '50,000+',
];

export const CMMS_TYPES = [
  'SAP PM',
  'IBM Maximo',
  'Infor EAM',
  'Oracle EAM',
  'Microsoft Dynamics 365',
  'eMaint',
  'Fiix',
  'UpKeep',
  'Maintenance Connection',
  'Custom / Legacy',
  'None',
];

export const AUDIT_FREQUENCIES = [
  'Weekly',
  'Monthly',
  'Quarterly',
  'Annually',
  'Rarely / Ad-hoc',
];

export const AUDIT_DIFFICULTIES = [
  'Very Easy - Automated',
  'Easy - Well Documented',
  'Moderate - Manual Effort',
  'Difficult - Fragmented Data',
  'Very Difficult - No Standards',
];

export const AI_ADOPTION_LEVELS = [
  'No AI / Exploring',
  'Pilot Projects',
  'Limited Production Use',
  'Broad Production Use',
  'AI-First Strategy',
];
