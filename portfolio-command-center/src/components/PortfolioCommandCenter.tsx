import { useState, useEffect } from 'react';
import {
  TrendingUp, DollarSign, Building2, Zap,
  ChevronRight, RefreshCw, Bell, Settings, AlertTriangle, CheckCircle, Database,
  LayoutDashboard, Activity, Columns
} from 'lucide-react';
import { CompanySnapshot, PortfolioSummary } from '../types/portfolio';
import { portfolioDataService } from '../services/portfolioDataService';
import { CompanyCard } from './CompanyCard';
import { AlertPanel } from './AlertPanel';
import { MetricCard } from './MetricCard';
import { KanbanDashboard } from './KanbanDashboard';
import { LiveActivityFeed } from './LiveActivityFeed';

type ViewTab = 'overview' | 'projects';

export default function PortfolioCommandCenter() {
  const [snapshots, setSnapshots] = useState<CompanySnapshot[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());
  const [_selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [dataSource, setDataSource] = useState<'live' | 'mock'>('mock');
  const [activeTab, setActiveTab] = useState<ViewTab>('overview');

  useEffect(() => {
    // Check if AIM Supabase is configured
    const aimUrl = import.meta.env.VITE_AIM_SUPABASE_URL;
    const aimKey = import.meta.env.VITE_AIM_SUPABASE_KEY;
    if (aimUrl && aimKey) {
      setDataSource('live');
    }
    
    loadData();
    const interval = setInterval(loadData, 300000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);

  async function loadData() {
    try {
      setLoading(true);
      const data = await portfolioDataService.getAllCompanySnapshots();
      setSnapshots(data);
      setLastRefresh(new Date());
    } catch (error) {
      console.error('Error loading portfolio data:', error);
    } finally {
      setLoading(false);
    }
  }

  const portfolioSummary: PortfolioSummary = {
    companies: snapshots,
    consolidated: snapshots.reduce((acc, snapshot) => ({
      total_revenue_mtd: acc.total_revenue_mtd + snapshot.northStar.revenue_mtd,
      total_revenue_target: acc.total_revenue_target + snapshot.northStar.revenue_target,
      blended_ebitda: acc.blended_ebitda + (snapshot.northStar.ebitda_percent * snapshot.northStar.revenue_mtd),
      total_ad_spend: acc.total_ad_spend + snapshot.growth.ad_spend_mtd,
      total_alerts: acc.total_alerts + snapshot.alerts.length,
      critical_alerts: acc.critical_alerts + snapshot.alerts.filter(a => a.severity === 'critical').length,
    }), {
      total_revenue_mtd: 0,
      total_revenue_target: 0,
      blended_ebitda: 0,
      total_ad_spend: 0,
      total_alerts: 0,
      critical_alerts: 0,
    }),
  };

  const blendedEbitdaPercent = portfolioSummary.consolidated.total_revenue_mtd > 0 
    ? (portfolioSummary.consolidated.blended_ebitda / portfolioSummary.consolidated.total_revenue_mtd)
    : 0;

  const revenueProgress = (portfolioSummary.consolidated.total_revenue_mtd / portfolioSummary.consolidated.total_revenue_target) * 100;

  const allAlerts = snapshots.flatMap(s => s.alerts).sort((a, b) => {
    const severityOrder = { critical: 0, warning: 1, info: 2 };
    return severityOrder[a.severity] - severityOrder[b.severity];
  });

  if (loading && snapshots.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading Portfolio Command Center...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Portfolio Command Center</h1>
                <p className="text-xs text-gray-500">Real-time executive intelligence</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Data Source Indicator */}
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                dataSource === 'live' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {dataSource === 'live' ? (
                  <>
                    <Database className="w-3 h-3" />
                    <span>Live Data</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-3 h-3" />
                    <span>Mock Data</span>
                  </>
                )}
              </div>
              <span className="text-sm text-gray-500 hidden md:inline">
                Last updated: {lastRefresh.toLocaleTimeString()}
              </span>
              <button
                onClick={loadData}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Refresh data"
              >
                <RefreshCw className={`w-5 h-5 text-gray-600 ${loading ? 'animate-spin' : ''}`} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-gray-600" />
                {portfolioSummary.consolidated.total_alerts > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 -mb-px">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'overview'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'projects'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Columns className="w-4 h-4" />
              Projects & Activity
            </button>
          </div>
        </div>
      </div>

      {/* Data Source Banner (if using mock data) */}
      {dataSource === 'mock' && (
        <div className="bg-yellow-50 border-b border-yellow-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <span className="text-sm text-yellow-800">
                  Showing mock data. Connect AIMOS Supabase to see live metrics.
                </span>
              </div>
              <a 
                href="https://vercel.com/stiggtechnologies-projects/portfolio-command-center/settings/environment-variables"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-yellow-700 hover:text-yellow-900 font-medium"
              >
                Configure →
              </a>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' ? (
          <OverviewView 
            snapshots={snapshots}
            portfolioSummary={portfolioSummary}
            blendedEbitdaPercent={blendedEbitdaPercent}
            revenueProgress={revenueProgress}
            allAlerts={allAlerts}
            onSelectCompany={setSelectedCompany}
          />
        ) : (
          <ProjectsView />
        )}
      </main>
    </div>
  );
}

function OverviewView({ 
  snapshots, 
  portfolioSummary, 
  blendedEbitdaPercent, 
  revenueProgress, 
  allAlerts,
  onSelectCompany 
}: {
  snapshots: CompanySnapshot[];
  portfolioSummary: PortfolioSummary;
  blendedEbitdaPercent: number;
  revenueProgress: number;
  allAlerts: any[];
  onSelectCompany: (id: string) => void;
}) {
  return (
    <div className="space-y-8">
      {/* Portfolio Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard
          title="Portfolio Revenue (MTD)"
          value={`$${(portfolioSummary.consolidated.total_revenue_mtd / 1000).toFixed(0)}k`}
          subtitle={`Target: $${(portfolioSummary.consolidated.total_revenue_target / 1000).toFixed(0)}k`}
          progress={revenueProgress}
          icon={DollarSign}
          color="blue"
        />
        <MetricCard
          title="Blended EBITDA"
          value={`${blendedEbitdaPercent.toFixed(1)}%`}
          subtitle="Portfolio average"
          trend="up"
          trendValue="+2.3%"
          icon={TrendingUp}
          color="green"
        />
        <MetricCard
          title="Ad Spend (MTD)"
          value={`$${(portfolioSummary.consolidated.total_ad_spend / 1000).toFixed(1)}k`}
          subtitle="Across all companies"
          icon={Zap}
          color="orange"
        />
        <MetricCard
          title="Active Alerts"
          value={portfolioSummary.consolidated.total_alerts.toString()}
          subtitle={portfolioSummary.consolidated.critical_alerts > 0 ? `${portfolioSummary.consolidated.critical_alerts} critical` : 'All clear'}
          alert={portfolioSummary.consolidated.critical_alerts > 0}
          icon={AlertTriangle}
          color={portfolioSummary.consolidated.critical_alerts > 0 ? 'red' : 'gray'}
        />
      </div>

      {/* Company Cards Grid */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-gray-600" />
          Company Performance
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {snapshots.map(snapshot => (
            <CompanyCard
              key={snapshot.config.id}
              snapshot={snapshot}
              onClick={() => onSelectCompany(snapshot.config.id)}
            />
          ))}
        </div>
      </div>

      {/* Alerts Panel */}
      {allAlerts.length > 0 ? (
        <AlertPanel alerts={allAlerts} />
      ) : (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-900">All Systems Operational</h3>
              <p className="text-sm text-green-700">No active alerts across the portfolio</p>
            </div>
          </div>
        </div>
      )}

      {/* Quick Links */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickLink
            title="AIMOS Dashboard"
            url="https://aimos-ebon.vercel.app"
            color="blue"
          />
          <QuickLink
            title="Google Ads"
            url="https://ads.google.com"
            color="orange"
          />
          <QuickLink
            title="Meta Ads"
            url="https://business.facebook.com"
            color="indigo"
          />
          <QuickLink
            title="Supabase"
            url="https://supabase.com/dashboard"
            color="emerald"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectsView() {
  return (
    <div className="space-y-8">
      {/* Kanban Dashboard */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Columns className="w-5 h-5 text-gray-600" />
          Project Kanban
        </h2>
        <KanbanDashboard />
      </div>

      {/* Live Activity Feed */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-gray-600" />
          Live Activity
        </h2>
        <LiveActivityFeed />
      </div>
    </div>
  );
}

function QuickLink({ title, url, color }: { title: string; url: string; color: string }) {
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200',
    orange: 'bg-orange-50 text-orange-700 hover:bg-orange-100 border-orange-200',
    indigo: 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200',
    emerald: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200',
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${colorClasses[color]}`}
    >
      <span className="font-medium">{title}</span>
      <ChevronRight className="w-4 h-4" />
    </a>
  );
}
