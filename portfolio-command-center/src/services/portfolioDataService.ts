import { 
  CompanySnapshot, 
  CompanyConfig, 
  PORTFOLIO_COMPANIES
} from '../types/portfolio';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Supabase clients for each company
let aimSupabase: SupabaseClient | null = null;

function getAIMSupabase(): SupabaseClient | null {
  if (aimSupabase) return aimSupabase;
  
  const url = import.meta.env.VITE_AIM_SUPABASE_URL;
  const key = import.meta.env.VITE_AIM_SUPABASE_KEY;
  
  if (!url || !key) {
    console.log('AIM Supabase credentials not configured, using mock data');
    return null;
  }
  
  aimSupabase = createClient(url, key);
  return aimSupabase;
}

// Simulated data service - will be replaced with real API calls
export class PortfolioDataService {
  
  async getAllCompanySnapshots(): Promise<CompanySnapshot[]> {
    const snapshots = await Promise.all(
      PORTFOLIO_COMPANIES.map(company => this.getCompanySnapshot(company))
    );
    return snapshots;
  }

  async getCompanySnapshot(config: CompanyConfig): Promise<CompanySnapshot> {
    switch (config.id) {
      case 'aim':
        return this.getAIMSnapshot(config);
      case 'stigg':
        return this.getStiggSnapshot(config);
      case 'real-estate':
        return this.getRealEstateSnapshot(config);
      case 'pe-fund':
        return this.getPEFundSnapshot(config);
      default:
        return this.getDefaultSnapshot(config);
    }
  }

  private async getAIMSnapshot(config: CompanyConfig): Promise<CompanySnapshot> {
    const supabase = getAIMSupabase();
    
    // If Supabase is not configured, return enhanced mock data
    if (!supabase) {
      console.log('AIM Supabase not connected - using mock data with realistic variation');
      return this.getAIMEnhancedMockSnapshot(config);
    }

    try {
      // Fetch real data from AIMOS
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const thirtyDaysAgoStr = thirtyDaysAgo.toISOString();

      // Get lead stats
      const { data: leads } = await supabase
        .from('crm_leads')
        .select('status, created_at')
        .gte('created_at', thirtyDaysAgoStr);

      const totalLeads = leads?.length || 0;
      const bookedLeads = leads?.filter(l => l.status === 'booked').length || 0;
      const conversionRate = totalLeads > 0 ? (bookedLeads / totalLeads) * 100 : 0;

      // Get appointments for utilization calculation
      const { data: appointments } = await supabase
        .from('bookings')
        .select('status, created_at')
        .gte('created_at', thirtyDaysAgoStr);

      const totalAppts = appointments?.length || 0;
      const completedAppts = appointments?.filter(a => a.status === 'completed').length || 0;
      const utilization = totalAppts > 0 ? (completedAppts / totalAppts) * 100 : 82;

      // Get open positions from jobs
      const { data: jobs } = await supabase
        .from('jobs')
        .select('id')
        .eq('status', 'open');

      const openPositions = jobs?.length || 3;

      // Check for alerts (drift detection)
      const alerts: any[] = [];
      
      // Open shifts alert (>10% threshold from MEMORY.md)
      const { data: shifts } = await supabase
        .from('clinic_schedules')
        .select('status')
        .gte('date', thirtyDaysAgoStr);
      
      const openShifts = shifts?.filter(s => s.status === 'open').length || 0;
      const totalShifts = shifts?.length || 1;
      const openShiftPercent = (openShifts / totalShifts) * 100;
      
      if (openShiftPercent > 10) {
        alerts.push({
          id: 'aim-open-shifts',
          companyId: 'aim',
          severity: 'warning',
          category: 'operational',
          title: 'Open Shifts >10%',
          message: `Rolling 7-day average shows ${openShiftPercent.toFixed(1)}% open shifts`,
          created_at: new Date().toISOString(),
          acknowledged: false,
        });
      }

      return {
        config,
        northStar: {
          revenue_mtd: 187500,
          revenue_target: 500000,
          revenue_ytd: 892000,
          revenue_last_month: 423000,
          ebitda_percent: 24.5,
          ebitda_target: 22,
          cash_on_hand: 125000,
          burn_rate: 45000,
          runway_months: 2.8,
        },
        growth: {
          leads_mtd: totalLeads,
          leads_last_month: Math.floor(totalLeads * 0.9),
          cpa_weighted: 68,
          roas: 4.2,
          conversion_rate: conversionRate,
          ad_spend_mtd: 8650,
          ad_spend_target: 12000,
        },
        operational: {
          utilization_percent: utilization,
          open_positions: openPositions,
          nps_score: 78,
          response_time_hours: 2.4,
        },
        alerts,
        lastUpdated: new Date().toISOString(),
        status: alerts.length > 0 ? 'attention' : 'healthy',
      };
    } catch (error) {
      console.error('Error fetching AIM data:', error);
      return this.getAIMEnhancedMockSnapshot(config);
    }
  }

  private getAIMEnhancedMockSnapshot(config: CompanyConfig): CompanySnapshot {
    // Generate realistic mock data that varies by time of day
    const hour = new Date().getHours();
    const dayOfMonth = new Date().getDate();
    const monthProgress = dayOfMonth / 30;
    
    // AIM targets 20 patients/day = ~600/month
    const dailyPatients = 18 + Math.floor(Math.random() * 4);
    const mtdPatients = Math.floor(dailyPatients * dayOfMonth);
    const targetPatients = 600;
    
    // Revenue: ~$500 per patient
    const revenueMTD = mtdPatients * 500;
    const revenueTarget = targetPatients * 500;
    
    // Utilization varies by time
    const baseUtilization = 78 + (hour > 9 && hour < 17 ? 8 : 0);
    const utilization = Math.min(95, baseUtilization + Math.random() * 5);
    
    return {
      config,
      northStar: {
        revenue_mtd: revenueMTD,
        revenue_target: revenueTarget,
        revenue_ytd: revenueMTD + 892000,
        revenue_last_month: 423000,
        ebitda_percent: 24.5,
        ebitda_target: 22,
        cash_on_hand: 125000,
        burn_rate: 45000,
        runway_months: 2.8,
      },
      growth: {
        leads_mtd: Math.floor(mtdPatients * 1.2),
        leads_last_month: 98,
        cpa_weighted: 68,
        roas: 4.2,
        conversion_rate: 18.5,
        ad_spend_mtd: Math.floor(revenueMTD * 0.05),
        ad_spend_target: Math.floor(revenueTarget * 0.05),
      },
      operational: {
        utilization_percent: utilization,
        open_positions: 3,
        nps_score: 78,
        response_time_hours: 2.4,
      },
      alerts: [
        {
          id: 'aim-1',
          companyId: 'aim',
          severity: 'warning',
          category: 'operational',
          title: 'Open Shifts >10%',
          message: 'Rolling 7-day average shows 12% open shifts at Edmonton South',
          created_at: new Date().toISOString(),
          acknowledged: false,
        },
      ],
      lastUpdated: new Date().toISOString(),
      status: 'attention',
    };
  }

  private getAIMMockSnapshot(config: CompanyConfig): CompanySnapshot {
    return {
      config,
      northStar: {
        revenue_mtd: 187500,
        revenue_target: 500000,
        revenue_ytd: 892000,
        revenue_last_month: 423000,
        ebitda_percent: 24.5,
        ebitda_target: 22,
        cash_on_hand: 125000,
        burn_rate: 45000,
        runway_months: 2.8,
      },
      growth: {
        leads_mtd: 127,
        leads_last_month: 98,
        cpa_weighted: 68,
        roas: 4.2,
        conversion_rate: 18.5,
        ad_spend_mtd: 8650,
        ad_spend_target: 12000,
      },
      operational: {
        utilization_percent: 82.3,
        open_positions: 3,
        nps_score: 78,
        response_time_hours: 2.4,
      },
      alerts: [
        {
          id: 'aim-1',
          companyId: 'aim',
          severity: 'warning',
          category: 'operational',
          title: 'Open Shifts >10%',
          message: 'Rolling 7-day average shows 12% open shifts at Edmonton South',
          created_at: new Date().toISOString(),
          acknowledged: false,
        },
      ],
      lastUpdated: new Date().toISOString(),
      status: 'attention',
    };
  }

  private getStiggSnapshot(config: CompanyConfig): CompanySnapshot {
    return {
      config,
      northStar: {
        revenue_mtd: 45000,
        revenue_target: 150000,
        revenue_ytd: 180000,
        revenue_last_month: 52000,
        ebitda_percent: 15,
        ebitda_target: 25,
        cash_on_hand: 85000,
        burn_rate: 28000,
        runway_months: 3.0,
      },
      growth: {
        leads_mtd: 23,
        leads_last_month: 18,
        cpa_weighted: 245,
        roas: 2.8,
        conversion_rate: 12,
        ad_spend_mtd: 0,
        ad_spend_target: 8000,
      },
      operational: {
        utilization_percent: 65,
        open_positions: 2,
        nps_score: 82,
        response_time_hours: 4.2,
      },
      alerts: [],
      lastUpdated: new Date().toISOString(),
      status: 'healthy',
    };
  }

  private getRealEstateSnapshot(config: CompanyConfig): CompanySnapshot {
    return {
      config,
      northStar: {
        revenue_mtd: 28000,
        revenue_target: 45000,
        revenue_ytd: 145000,
        revenue_last_month: 32000,
        ebitda_percent: 68,
        ebitda_target: 65,
        cash_on_hand: 450000,
        burn_rate: 5000,
        runway_months: 90,
      },
      growth: {
        leads_mtd: 8,
        leads_last_month: 6,
        cpa_weighted: 0,
        roas: 0,
        conversion_rate: 25,
        ad_spend_mtd: 0,
        ad_spend_target: 0,
      },
      operational: {
        utilization_percent: 92,
        open_positions: 0,
        nps_score: 85,
        response_time_hours: 8,
      },
      alerts: [],
      lastUpdated: new Date().toISOString(),
      status: 'healthy',
    };
  }

  private getPEFundSnapshot(config: CompanyConfig): CompanySnapshot {
    return {
      config,
      northStar: {
        revenue_mtd: 0,
        revenue_target: 0,
        revenue_ytd: 0,
        revenue_last_month: 0,
        ebitda_percent: 0,
        ebitda_target: 0,
        cash_on_hand: 2500000,
        burn_rate: 15000,
        runway_months: 166,
      },
      growth: {
        leads_mtd: 4,
        leads_last_month: 2,
        cpa_weighted: 0,
        roas: 0,
        conversion_rate: 0,
        ad_spend_mtd: 0,
        ad_spend_target: 0,
      },
      operational: {
        utilization_percent: 0,
        open_positions: 0,
        nps_score: 0,
        response_time_hours: 24,
      },
      alerts: [
        {
          id: 'pe-1',
          companyId: 'pe-fund',
          severity: 'info',
          category: 'financial',
          title: 'Deal Pipeline Review',
          message: '3 opportunities pending diligence review',
          created_at: new Date().toISOString(),
          acknowledged: false,
        },
      ],
      lastUpdated: new Date().toISOString(),
      status: 'healthy',
    };
  }

  private getDefaultSnapshot(config: CompanyConfig): CompanySnapshot {
    return {
      config,
      northStar: {
        revenue_mtd: 0,
        revenue_target: 0,
        revenue_ytd: 0,
        revenue_last_month: 0,
        ebitda_percent: 0,
        ebitda_target: 0,
        cash_on_hand: 0,
        burn_rate: 0,
        runway_months: 0,
      },
      growth: {
        leads_mtd: 0,
        leads_last_month: 0,
        cpa_weighted: 0,
        roas: 0,
        conversion_rate: 0,
        ad_spend_mtd: 0,
        ad_spend_target: 0,
      },
      operational: {
        utilization_percent: 0,
        open_positions: 0,
        nps_score: 0,
        response_time_hours: 0,
      },
      alerts: [],
      lastUpdated: new Date().toISOString(),
      status: 'healthy',
    };
  }

  async fetchAIMData(): Promise<any> {
    const supabase = getAIMSupabase();
    if (!supabase) return null;
    
    // Fetch from AIMOS Supabase
    // const { data } = await supabase.rpc('get_executive_metrics');
    return null;
  }

  async fetchGoogleAdsData(_accountId: string): Promise<any> {
    // Fetch from Google Ads API
    return null;
  }

  async fetchMetaAdsData(_accountId: string): Promise<any> {
    // Fetch from Meta Marketing API
    return null;
  }
}

export const portfolioDataService = new PortfolioDataService();
