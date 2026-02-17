// Portfolio Company Types

export type CompanyId = 'aim' | 'stigg' | 'real-estate' | 'pe-fund';

export interface CompanyConfig {
  id: CompanyId;
  name: string;
  shortName: string;
  industry: string;
  color: string;
  logo?: string;
  supabaseUrl?: string;
  googleAdsAccountId?: string;
  metaAdsAccountId?: string;
}

export interface NorthStarMetrics {
  revenue_mtd: number;
  revenue_target: number;
  revenue_ytd: number;
  revenue_last_month: number;
  ebitda_percent: number;
  ebitda_target: number;
  cash_on_hand: number;
  burn_rate: number;
  runway_months: number;
}

export interface GrowthMetrics {
  leads_mtd: number;
  leads_last_month: number;
  cpa_weighted: number;
  roas: number;
  conversion_rate: number;
  ad_spend_mtd: number;
  ad_spend_target: number;
  active_campaigns?: number;
}

export interface OperationalMetrics {
  utilization_percent: number;
  open_positions: number;
  nps_score: number;
  response_time_hours: number;
}

export interface Alert {
  id: string;
  companyId: CompanyId;
  severity: 'critical' | 'warning' | 'info';
  category: 'financial' | 'operational' | 'growth' | 'compliance';
  title: string;
  message: string;
  created_at: string;
  acknowledged: boolean;
}

export interface CompanySnapshot {
  config: CompanyConfig;
  northStar: NorthStarMetrics;
  growth: GrowthMetrics;
  operational: OperationalMetrics;
  alerts: Alert[];
  lastUpdated: string;
  status: 'healthy' | 'attention' | 'critical';
}

export interface PortfolioSummary {
  companies: CompanySnapshot[];
  consolidated: {
    total_revenue_mtd: number;
    total_revenue_target: number;
    blended_ebitda: number;
    total_ad_spend: number;
    total_alerts: number;
    critical_alerts: number;
  };
}

export const PORTFOLIO_COMPANIES: CompanyConfig[] = [
  {
    id: 'aim',
    name: 'Alberta Injury Management',
    shortName: 'AIM',
    industry: 'Healthcare / Physical Therapy',
    color: '#2563eb', // blue-600
    supabaseUrl: 'https://optlghedswctsklcxlkn.supabase.co',
    googleAdsAccountId: '106-307-7866',
  },
  {
    id: 'stigg',
    name: 'Stigg Technologies',
    shortName: 'Stigg',
    industry: 'Security / AI Automation',
    color: '#059669', // emerald-600
  },
  {
    id: 'real-estate',
    name: 'Real Estate Holdings',
    shortName: 'RE Holdings',
    industry: 'Real Estate',
    color: '#7c3aed', // violet-600
  },
  {
    id: 'pe-fund',
    name: 'Private Equity Fund',
    shortName: 'PE Fund',
    industry: 'Private Equity',
    color: '#dc2626', // red-600
  },
];
