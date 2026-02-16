// CompanyCard component
import {
  TrendingUp, DollarSign, Activity, Zap, ChevronRight
} from 'lucide-react';
import { CompanySnapshot } from '../types/portfolio';

interface CompanyCardProps {
  snapshot: CompanySnapshot;
  onClick?: () => void;
}

export function CompanyCard({ snapshot, onClick }: CompanyCardProps) {
  const { config, northStar, growth, operational, alerts, status } = snapshot;
  
  const revenueProgress = (northStar.revenue_mtd / northStar.revenue_target) * 100;
  // const adSpendProgress = (growth.ad_spend_mtd / growth.ad_spend_target) * 100;
  
  const statusColors = {
    healthy: 'border-green-200 bg-green-50/50',
    attention: 'border-yellow-200 bg-yellow-50/50',
    critical: 'border-red-200 bg-red-50/50',
  };

  const statusBadges = {
    healthy: { bg: 'bg-green-100', text: 'text-green-700', label: 'Healthy' },
    attention: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Attention' },
    critical: { bg: 'bg-red-100', text: 'text-red-700', label: 'Critical' },
  };

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl border-2 ${statusColors[status]} p-6 cursor-pointer hover:shadow-lg transition-all duration-200`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
            style={{ backgroundColor: config.color }}
          >
            {config.shortName.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{config.name}</h3>
            <p className="text-sm text-gray-500">{config.industry}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusBadges[status].bg} ${statusBadges[status].text}`}>
            {statusBadges[status].label}
          </span>
          {alerts.length > 0 && (
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
              {alerts.length} alert{alerts.length > 1 ? 's' : ''}
            </span>
          )}
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Revenue */}
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <DollarSign className="w-4 h-4" />
            Revenue MTD
          </div>
          <div className="text-xl font-bold text-gray-900">
            ${(northStar.revenue_mtd / 1000).toFixed(0)}k
          </div>
          <div className="mt-2">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Target</span>
              <span>{revenueProgress.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-blue-600 h-1.5 rounded-full transition-all"
                style={{ width: `${Math.min(revenueProgress, 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* EBITDA */}
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <TrendingUp className="w-4 h-4" />
            EBITDA
          </div>
          <div className="text-xl font-bold text-gray-900">
            {northStar.ebitda_percent.toFixed(1)}%
          </div>
          <div className={`text-xs mt-1 ${northStar.ebitda_percent >= northStar.ebitda_target ? 'text-green-600' : 'text-yellow-600'}`}>
            Target: {northStar.ebitda_target}%
          </div>
        </div>

        {/* Growth */}
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <Zap className="w-4 h-4" />
            Growth
          </div>
          <div className="text-lg font-bold text-gray-900">
            {growth.leads_mtd} leads
          </div>
          <div className="text-xs text-gray-500 mt-1">
            CPA: ${growth.cpa_weighted} • ROAS: {growth.roas}x
          </div>
        </div>

        {/* Operations */}
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <Activity className="w-4 h-4" />
            Operations
          </div>
          <div className="text-lg font-bold text-gray-900">
            {operational.utilization_percent.toFixed(0)}%
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Util • {operational.open_positions} open roles
          </div>
        </div>
      </div>

      {/* Cash & Runway */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center gap-4">
          <div>
            <span className="text-xs text-gray-500">Cash</span>
            <p className="font-semibold text-gray-900">
              ${(northStar.cash_on_hand / 1000).toFixed(0)}k
            </p>
          </div>
          <div>
            <span className="text-xs text-gray-500">Runway</span>
            <p className={`font-semibold ${northStar.runway_months < 3 ? 'text-red-600' : 'text-gray-900'}`}>
              {northStar.runway_months.toFixed(1)}mo
            </p>
          </div>
          <div>
            <span className="text-xs text-gray-500">Ad Spend</span>
            <p className="font-semibold text-gray-900">
              ${(growth.ad_spend_mtd / 1000).toFixed(1)}k
            </p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
}
