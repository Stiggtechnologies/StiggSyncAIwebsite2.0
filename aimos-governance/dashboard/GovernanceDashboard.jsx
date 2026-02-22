/**
 * AIMOS Digital Governance Dashboard
 * Main dashboard component following AIMOS design language
 * 
 * Features:
 * - MFA Compliance %
 * - Admin Count
 * - License Count
 * - Audit Trail View
 */

import React, { useState, useEffect } from 'react';
import './GovernanceDashboard.css';

const GovernanceDashboard = ({ executiveAuth }) => {
    const [metrics, setMetrics] = useState({
        mfaCompliance: 0,
        totalUsers: 0,
        adminCount: 0,
        licenseCount: { used: 0, total: 0 },
        pendingOnboarding: 0
    });

    const [auditLog, setAuditLog] = useState([]);
    const [filters, setFilters] = useState({
        eventType: 'all',
        dateRange: '7days',
        userEmail: ''
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboardMetrics();
        fetchAuditLog();
        
        // Refresh metrics every 30 seconds
        const interval = setInterval(() => {
            fetchDashboardMetrics();
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetchAuditLog();
    }, [filters]);

    const fetchDashboardMetrics = async () => {
        try {
            const response = await fetch('/api/governance/metrics', {
                headers: {
                    'Authorization': `Bearer ${executiveAuth.token}`,
                    'X-Auth-Level': 'executive'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch metrics');
            }

            const data = await response.json();
            setMetrics(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching metrics:', error);
            setLoading(false);
        }
    };

    const fetchAuditLog = async () => {
        try {
            const params = new URLSearchParams({
                eventType: filters.eventType,
                dateRange: filters.dateRange,
                userEmail: filters.userEmail
            });

            const response = await fetch(`/api/governance/audit-log?${params}`, {
                headers: {
                    'Authorization': `Bearer ${executiveAuth.token}`,
                    'X-Auth-Level': 'executive'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch audit log');
            }

            const data = await response.json();
            setAuditLog(data);
        } catch (error) {
            console.error('Error fetching audit log:', error);
        }
    };

    const exportAuditLog = async () => {
        try {
            const response = await fetch('/api/governance/audit-log/export', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${executiveAuth.token}`,
                    'X-Auth-Level': 'executive',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(filters)
            });

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `audit-log-${new Date().toISOString()}.csv`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error exporting audit log:', error);
        }
    };

    if (loading) {
        return (
            <div className="governance-dashboard loading">
                <div className="spinner"></div>
                <p>Loading governance metrics...</p>
            </div>
        );
    }

    const mfaCompliancePercent = metrics.totalUsers > 0
        ? ((metrics.mfaCompliance / metrics.totalUsers) * 100).toFixed(1)
        : 0;

    const licenseUtilization = metrics.licenseCount.total > 0
        ? ((metrics.licenseCount.used / metrics.licenseCount.total) * 100).toFixed(1)
        : 0;

    return (
        <div className="governance-dashboard">
            <header className="dashboard-header">
                <h1>Digital Governance & Access Control</h1>
                <div className="header-actions">
                    <span className="auth-badge">🔒 Executive Access</span>
                    <span className="user-info">{executiveAuth.email}</span>
                </div>
            </header>

            {/* Key Metrics Section */}
            <section className="metrics-grid">
                <div className="metric-card mfa-compliance">
                    <div className="metric-icon">🛡️</div>
                    <div className="metric-content">
                        <h3>MFA Compliance</h3>
                        <div className="metric-value">
                            {mfaCompliancePercent}%
                        </div>
                        <div className="metric-detail">
                            {metrics.mfaCompliance} of {metrics.totalUsers} users
                        </div>
                        <div className={`compliance-bar ${mfaCompliancePercent >= 90 ? 'good' : mfaCompliancePercent >= 75 ? 'warning' : 'critical'}`}>
                            <div className="compliance-fill" style={{ width: `${mfaCompliancePercent}%` }}></div>
                        </div>
                    </div>
                </div>

                <div className="metric-card admin-count">
                    <div className="metric-icon">👥</div>
                    <div className="metric-content">
                        <h3>Admin Count</h3>
                        <div className="metric-value">
                            {metrics.adminCount}
                        </div>
                        <div className="metric-detail">
                            Active administrators
                        </div>
                    </div>
                </div>

                <div className="metric-card license-count">
                    <div className="metric-icon">📄</div>
                    <div className="metric-content">
                        <h3>License Utilization</h3>
                        <div className="metric-value">
                            {metrics.licenseCount.used} / {metrics.licenseCount.total}
                        </div>
                        <div className="metric-detail">
                            {licenseUtilization}% utilized
                        </div>
                        <div className={`utilization-bar ${licenseUtilization >= 90 ? 'critical' : licenseUtilization >= 75 ? 'warning' : 'good'}`}>
                            <div className="utilization-fill" style={{ width: `${licenseUtilization}%` }}></div>
                        </div>
                    </div>
                </div>

                <div className="metric-card onboarding-queue">
                    <div className="metric-icon">📋</div>
                    <div className="metric-content">
                        <h3>Pending Onboarding</h3>
                        <div className="metric-value">
                            {metrics.pendingOnboarding}
                        </div>
                        <div className="metric-detail">
                            Awaiting provisioning
                        </div>
                    </div>
                </div>
            </section>

            {/* Audit Trail Section */}
            <section className="audit-trail">
                <div className="audit-header">
                    <h2>Audit Trail</h2>
                    <div className="audit-actions">
                        <button onClick={exportAuditLog} className="btn-export">
                            📥 Export
                        </button>
                    </div>
                </div>

                <div className="audit-filters">
                    <select 
                        value={filters.eventType}
                        onChange={(e) => setFilters({ ...filters, eventType: e.target.value })}
                        className="filter-select"
                    >
                        <option value="all">All Events</option>
                        <option value="create_user">Create User</option>
                        <option value="suspend_user">Suspend User</option>
                        <option value="add_to_group">Add to Group</option>
                        <option value="enforce_mfa">Enforce MFA</option>
                        <option value="access_asset">Access Asset</option>
                        <option value="modify_permission">Modify Permission</option>
                    </select>

                    <select 
                        value={filters.dateRange}
                        onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
                        className="filter-select"
                    >
                        <option value="24hours">Last 24 Hours</option>
                        <option value="7days">Last 7 Days</option>
                        <option value="30days">Last 30 Days</option>
                        <option value="90days">Last 90 Days</option>
                    </select>

                    <input 
                        type="text"
                        placeholder="Filter by user email..."
                        value={filters.userEmail}
                        onChange={(e) => setFilters({ ...filters, userEmail: e.target.value })}
                        className="filter-input"
                    />
                </div>

                <div className="audit-table-container">
                    <table className="audit-table">
                        <thead>
                            <tr>
                                <th>Timestamp</th>
                                <th>Event Type</th>
                                <th>User</th>
                                <th>Action</th>
                                <th>Resource</th>
                                <th>Result</th>
                                <th>Performed By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {auditLog.map((event, index) => (
                                <tr key={index} className={`audit-row result-${event.result}`}>
                                    <td className="timestamp">
                                        {new Date(event.timestamp).toLocaleString()}
                                    </td>
                                    <td className="event-type">
                                        <span className={`badge event-${event.event_type}`}>
                                            {event.event_type}
                                        </span>
                                    </td>
                                    <td className="user-email">{event.user_email}</td>
                                    <td className="action">{event.action}</td>
                                    <td className="resource">
                                        {event.target_resource_type}
                                        {event.target_resource_id && (
                                            <span className="resource-id">
                                                {event.target_resource_id.substring(0, 8)}...
                                            </span>
                                        )}
                                    </td>
                                    <td className="result">
                                        <span className={`status-badge status-${event.result}`}>
                                            {event.result}
                                        </span>
                                    </td>
                                    <td className="performed-by">{event.performed_by}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {auditLog.length === 0 && (
                        <div className="no-results">
                            <p>No audit events found for the selected filters.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default GovernanceDashboard;
