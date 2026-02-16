import { useState, useEffect } from 'react';
import {
  Activity, CheckCircle2, MessageSquare, AlertTriangle, 
  GitCommit, Target, RefreshCw,
  Circle, Clock, Zap
} from 'lucide-react';
import { ActivityFeedItem, INITIAL_ACTIVITY_FEED } from '../types/projects';
import { PORTFOLIO_COMPANIES } from '../types/portfolio';

export function LiveActivityFeed() {
  const [activities] = useState<ActivityFeedItem[]>(INITIAL_ACTIVITY_FEED);
  const [filter, setFilter] = useState<string>('all');
  const [isLive, setIsLive] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Simulate live updates
  useEffect(() => {
    if (!isLive) return;
    
    const interval = setInterval(() => {
      // In real implementation, this would fetch from API
      setLastUpdate(new Date());
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [isLive]);

  const filteredActivities = activities.filter(a => {
    if (filter === 'all') return true;
    if (filter === 'alerts') return a.type === 'alert';
    if (filter === 'tasks') return ['task_created', 'task_moved', 'task_completed'].includes(a.type);
    if (filter === 'milestones') return a.type === 'milestone';
    return a.companyId === filter;
  });

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'task_completed':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'task_created':
        return <Circle className="w-5 h-5 text-blue-500" />;
      case 'task_moved':
        return <GitCommit className="w-5 h-5 text-purple-500" />;
      case 'alert':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'milestone':
        return <Target className="w-5 h-5 text-orange-500" />;
      case 'comment':
        return <MessageSquare className="w-5 h-5 text-gray-500" />;
      default:
        return <Activity className="w-5 h-5 text-gray-400" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'task_completed': return 'bg-green-50 border-green-200';
      case 'task_created': return 'bg-blue-50 border-blue-200';
      case 'task_moved': return 'bg-purple-50 border-purple-200';
      case 'alert': return 'bg-red-50 border-red-200';
      case 'milestone': return 'bg-orange-50 border-orange-200';
      case 'comment': return 'bg-gray-50 border-gray-200';
      default: return 'bg-white border-gray-200';
    }
  };

  const getCompanyColor = (companyId: string) => {
    return PORTFOLIO_COMPANIES.find(c => c.id === companyId)?.color || '#6b7280';
  };

  const getCompanyName = (companyId: string) => {
    return PORTFOLIO_COMPANIES.find(c => c.id === companyId)?.shortName || companyId;
  };

  const formatTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'task_completed': return 'Task Completed';
      case 'task_created': return 'New Task';
      case 'task_moved': return 'Task Updated';
      case 'alert': return 'Alert';
      case 'milestone': return 'Milestone';
      case 'comment': return 'Comment';
      default: return type;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 p-2 rounded-lg">
            <Activity className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Live Activity Feed</h3>
            <p className="text-xs text-gray-500">
              {isLive ? (
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Live updates
                </span>
              ) : (
                'Paused'
              )}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Activity</option>
            <option value="alerts">Alerts Only</option>
            <option value="tasks">Tasks</option>
            <option value="milestones">Milestones</option>
            <option value="---" disabled>──────────</option>
            {PORTFOLIO_COMPANIES.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          <button
            onClick={() => setIsLive(!isLive)}
            className={`p-2 rounded-lg transition-colors ${
              isLive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {isLive ? <Zap className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <RefreshCw className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Activity List */}
      <div className="max-h-[600px] overflow-y-auto">
        {filteredActivities.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <Activity className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>No activity matching your filters</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredActivities.map((activity, index) => (
              <div
                key={activity.id}
                className={`p-4 hover:bg-gray-50 transition-colors ${
                  index === 0 && isLive ? 'bg-blue-50/30' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`p-2 rounded-lg ${getActivityColor(activity.type)}`}>
                    {getActivityIcon(activity.type)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-xs font-medium px-2 py-0.5 rounded-full text-white"
                            style={{ backgroundColor: getCompanyColor(activity.companyId) }}
                          >
                            {getCompanyName(activity.companyId)}
                          </span>
                          <span className="text-xs text-gray-500">{getTypeLabel(activity.type)}</span>
                        </div>
                        <h4 className="font-medium text-gray-900">{activity.title}</h4>
                        <p className="text-sm text-gray-600 mt-0.5">{activity.description}</p>
                        
                        {/* Metadata */}
                        {activity.metadata && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {Object.entries(activity.metadata).map(([key, value]) => (
                              <span key={key} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                {key}: {String(value)}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <span className="text-xs text-gray-400 whitespace-nowrap">
                        {formatTimeAgo(activity.timestamp)}
                      </span>
                    </div>

                    {/* Actor */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium text-gray-600">
                        {activity.actor.charAt(0)}
                      </div>
                      <span className="text-xs text-gray-500">{activity.actor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-gray-200 bg-gray-50 rounded-b-xl">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Showing {filteredActivities.length} activities</span>
          <span>Last updated: {lastUpdate.toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
}
