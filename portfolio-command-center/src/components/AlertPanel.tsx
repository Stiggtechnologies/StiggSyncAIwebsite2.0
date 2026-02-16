// AlertPanel component
import {
  AlertTriangle, AlertCircle, Info, CheckCircle, X,
  Building2, DollarSign, Activity, Shield
} from 'lucide-react';
import { Alert, CompanyId, PORTFOLIO_COMPANIES } from '../types/portfolio';

interface AlertPanelProps {
  alerts: Alert[];
  onAcknowledge?: (alertId: string) => void;
  onDismiss?: (alertId: string) => void;
}

export function AlertPanel({ alerts, onAcknowledge, onDismiss }: AlertPanelProps) {
  if (alerts.length === 0) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-green-600" />
          <div>
            <h3 className="font-semibold text-green-900">All Systems Operational</h3>
            <p className="text-sm text-green-700">No active alerts across the portfolio</p>
          </div>
        </div>
      </div>
    );
  }

  const getCompanyName = (companyId: CompanyId) => {
    return PORTFOLIO_COMPANIES.find(c => c.id === companyId)?.shortName || companyId;
  };

  const getCompanyColor = (companyId: CompanyId) => {
    return PORTFOLIO_COMPANIES.find(c => c.id === companyId)?.color || '#6b7280';
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      default:
        return <Info className="w-5 h-5 text-blue-600" />;
    }
  };

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-50 border-red-300';
      case 'warning':
        return 'bg-yellow-50 border-yellow-300';
      default:
        return 'bg-blue-50 border-blue-300';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'financial':
        return <DollarSign className="w-4 h-4" />;
      case 'operational':
        return <Activity className="w-4 h-4" />;
      case 'compliance':
        return <Shield className="w-4 h-4" />;
      default:
        return <Building2 className="w-4 h-4" />;
    }
  };

  const criticalCount = alerts.filter(a => a.severity === 'critical').length;
  const warningCount = alerts.filter(a => a.severity === 'warning').length;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Active Alerts</h2>
            <p className="text-sm text-gray-500">
              {criticalCount > 0 && (
                <span className="text-red-600 font-medium">{criticalCount} critical</span>
              )}
              {criticalCount > 0 && warningCount > 0 && ' • '}
              {warningCount > 0 && (
                <span className="text-yellow-600 font-medium">{warningCount} warning</span>
              )}
              {alerts.length > 0 && criticalCount === 0 && warningCount === 0 && (
                <span>{alerts.length} info</span>
              )}
            </p>
          </div>
        </div>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          Acknowledge all
        </button>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`flex items-start gap-4 p-4 rounded-lg border-l-4 ${getSeverityStyles(alert.severity)}`}
          >
            <div className="flex-shrink-0 mt-0.5">
              {getSeverityIcon(alert.severity)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium text-white"
                  style={{ backgroundColor: getCompanyColor(alert.companyId) }}
                >
                  {getCompanyName(alert.companyId)}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                  {getCategoryIcon(alert.category)}
                  {alert.category}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  alert.severity === 'critical' ? 'bg-red-100 text-red-700' :
                  alert.severity === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {alert.severity}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900">{alert.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(alert.created_at).toLocaleString()}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {!alert.acknowledged && (
                <button
                  onClick={() => onAcknowledge?.(alert.id)}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  Ack
                </button>
              )}
              <button
                onClick={() => onDismiss?.(alert.id)}
                className="p-1 hover:bg-gray-200 rounded"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
