/**
 * AIMOS Digital Governance - API Server
 * RESTful API for governance dashboard and automation
 * 
 * Security: Executive-level authentication enforced on all endpoints
 */

const express = require('express');
const { Pool } = require('pg');
const RBACEngine = require('./rbac-engine');
const GoogleAdminIntegration = require('./google-admin-integration');
const LifecycleAutomation = require('./automation');

class GovernanceAPIServer {
    constructor(config) {
        this.app = express();
        this.pool = new Pool(config.database);
        this.rbac = new RBACEngine(config.database);
        this.googleAdmin = new GoogleAdminIntegration(
            config.database,
            config.google.serviceAccountKeyPath,
            config.google.adminEmail
        );
        this.automation = new LifecycleAutomation(config.database, config.google);
        
        this.setupMiddleware();
        this.setupRoutes();
    }

    setupMiddleware() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        
        // CORS middleware
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Level');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            
            if (req.method === 'OPTIONS') {
                return res.sendStatus(200);
            }
            
            next();
        });

        // Executive authentication middleware
        this.app.use('/api/governance', this.authenticateExecutive.bind(this));
    }

    async authenticateExecutive(req, res, next) {
        try {
            const authHeader = req.headers.authorization;
            const authLevel = req.headers['x-auth-level'];

            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return res.status(401).json({
                    error: 'Missing or invalid authorization header'
                });
            }

            if (authLevel !== 'executive') {
                return res.status(403).json({
                    error: 'Executive-level authentication required'
                });
            }

            const token = authHeader.substring(7);
            
            // Verify token (implement your token verification logic)
            const decoded = await this.verifyToken(token);
            
            req.executiveAuth = {
                email: decoded.email,
                level: authLevel,
                token: token
            };

            next();
        } catch (error) {
            return res.status(401).json({
                error: 'Authentication failed',
                message: error.message
            });
        }
    }

    async verifyToken(token) {
        // Implement JWT verification or your auth mechanism
        // This is a placeholder
        return {
            email: 'executive@example.com',
            level: 'executive'
        };
    }

    setupRoutes() {
        // Dashboard Metrics
        this.app.get('/api/governance/metrics', this.getMetrics.bind(this));

        // Audit Log
        this.app.get('/api/governance/audit-log', this.getAuditLog.bind(this));
        this.app.post('/api/governance/audit-log/export', this.exportAuditLog.bind(this));

        // User Management
        this.app.post('/api/governance/users', this.createUser.bind(this));
        this.app.put('/api/governance/users/:email/suspend', this.suspendUser.bind(this));
        this.app.put('/api/governance/users/:email/mfa', this.enforceMFA.bind(this));
        this.app.get('/api/governance/users/:email/permissions', this.getUserPermissions.bind(this));

        // Onboarding/Offboarding
        this.app.post('/api/governance/onboarding', this.queueOnboarding.bind(this));
        this.app.post('/api/governance/onboarding/process', this.processOnboarding.bind(this));
        this.app.post('/api/governance/offboarding', this.offboardUser.bind(this));

        // Groups
        this.app.post('/api/governance/groups/:groupEmail/members', this.addToGroup.bind(this));

        // Health check
        this.app.get('/health', (req, res) => {
            res.json({ status: 'ok', timestamp: new Date().toISOString() });
        });
    }

    async getMetrics(req, res) {
        try {
            const metrics = {};

            // Total users
            const totalUsersResult = await this.pool.query(
                'SELECT COUNT(*) as count FROM workspace_users WHERE status = $1',
                ['active']
            );
            metrics.totalUsers = parseInt(totalUsersResult.rows[0].count);

            // MFA Compliance
            const mfaCompliantResult = await this.pool.query(
                'SELECT COUNT(*) as count FROM workspace_users WHERE mfa_enabled = true AND status = $1',
                ['active']
            );
            metrics.mfaCompliance = parseInt(mfaCompliantResult.rows[0].count);

            // Admin Count
            const adminCountResult = await this.pool.query(
                'SELECT COUNT(*) as count FROM workspace_users WHERE role IN ($1, $2) AND status = $3',
                ['executive', 'admin', 'active']
            );
            metrics.adminCount = parseInt(adminCountResult.rows[0].count);

            // License Count (placeholder - integrate with actual license management)
            metrics.licenseCount = {
                used: metrics.totalUsers,
                total: 1000 // Replace with actual license limit
            };

            // Pending Onboarding
            const pendingOnboardingResult = await this.pool.query(
                'SELECT COUNT(*) as count FROM onboarding_queue WHERE status = $1',
                ['pending']
            );
            metrics.pendingOnboarding = parseInt(pendingOnboardingResult.rows[0].count);

            res.json(metrics);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch metrics',
                message: error.message
            });
        }
    }

    async getAuditLog(req, res) {
        try {
            const { eventType, dateRange, userEmail } = req.query;

            let query = 'SELECT * FROM access_audit_log WHERE 1=1';
            const params = [];

            if (eventType && eventType !== 'all') {
                params.push(eventType);
                query += ` AND event_type = $${params.length}`;
            }

            if (userEmail) {
                params.push(`%${userEmail}%`);
                query += ` AND user_email ILIKE $${params.length}`;
            }

            if (dateRange) {
                const now = new Date();
                let startDate;

                switch (dateRange) {
                    case '24hours':
                        startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
                        break;
                    case '7days':
                        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                        break;
                    case '30days':
                        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                        break;
                    case '90days':
                        startDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
                        break;
                }

                if (startDate) {
                    params.push(startDate.toISOString());
                    query += ` AND timestamp >= $${params.length}`;
                }
            }

            query += ' ORDER BY timestamp DESC LIMIT 500';

            const result = await this.pool.query(query, params);
            res.json(result.rows);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch audit log',
                message: error.message
            });
        }
    }

    async exportAuditLog(req, res) {
        try {
            const filters = req.body;

            // Build query based on filters (similar to getAuditLog)
            let query = 'SELECT * FROM access_audit_log WHERE 1=1';
            const params = [];

            if (filters.eventType && filters.eventType !== 'all') {
                params.push(filters.eventType);
                query += ` AND event_type = $${params.length}`;
            }

            query += ' ORDER BY timestamp DESC';

            const result = await this.pool.query(query, params);

            // Convert to CSV
            const csv = this.convertToCSV(result.rows);

            res.setHeader('Content-Type', 'text/csv');
            res.setHeader('Content-Disposition', `attachment; filename="audit-log-${new Date().toISOString()}.csv"`);
            res.send(csv);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to export audit log',
                message: error.message
            });
        }
    }

    convertToCSV(data) {
        if (data.length === 0) return '';

        const headers = Object.keys(data[0]);
        const rows = data.map(row => 
            headers.map(header => {
                const value = row[header];
                if (typeof value === 'object') {
                    return `"${JSON.stringify(value).replace(/"/g, '""')}"`;
                }
                return `"${String(value).replace(/"/g, '""')}"`;
            }).join(',')
        );

        return [headers.join(','), ...rows].join('\n');
    }

    async createUser(req, res) {
        try {
            const result = await this.googleAdmin.createUser(
                req.body,
                req.executiveAuth
            );
            res.json(result);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to create user',
                message: error.message
            });
        }
    }

    async suspendUser(req, res) {
        try {
            const { email } = req.params;
            const result = await this.googleAdmin.suspendUser(
                email,
                req.executiveAuth
            );
            res.json(result);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to suspend user',
                message: error.message
            });
        }
    }

    async enforceMFA(req, res) {
        try {
            const { email } = req.params;
            const result = await this.googleAdmin.enforceMFA(
                email,
                req.executiveAuth
            );
            res.json(result);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to enforce MFA',
                message: error.message
            });
        }
    }

    async getUserPermissions(req, res) {
        try {
            const { email } = req.params;
            const permissions = await this.rbac.getEffectivePermissions(
                email,
                req.executiveAuth
            );
            res.json({ email, permissions });
        } catch (error) {
            res.status(500).json({
                error: 'Failed to get user permissions',
                message: error.message
            });
        }
    }

    async queueOnboarding(req, res) {
        try {
            const result = await this.pool.query(`
                INSERT INTO onboarding_queue (
                    email, full_name, role, department, groups, 
                    manager_email, start_date, priority, created_by
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                RETURNING *
            `, [
                req.body.email,
                req.body.full_name,
                req.body.role,
                req.body.department,
                req.body.groups || [],
                req.body.manager_email,
                req.body.start_date,
                req.body.priority || 'normal',
                req.executiveAuth.email
            ]);

            res.json({
                success: true,
                onboarding: result.rows[0]
            });
        } catch (error) {
            res.status(500).json({
                error: 'Failed to queue onboarding',
                message: error.message
            });
        }
    }

    async processOnboarding(req, res) {
        try {
            const result = await this.automation.processOnboardingQueue(
                req.executiveAuth
            );
            res.json(result);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to process onboarding',
                message: error.message
            });
        }
    }

    async offboardUser(req, res) {
        try {
            const { email, reason } = req.body;
            const result = await this.automation.offboardUser(
                email,
                reason,
                req.executiveAuth
            );
            res.json(result);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to offboard user',
                message: error.message
            });
        }
    }

    async addToGroup(req, res) {
        try {
            const { groupEmail } = req.params;
            const { userEmail } = req.body;
            
            const result = await this.googleAdmin.addToGroup(
                userEmail,
                groupEmail,
                req.executiveAuth
            );
            res.json(result);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to add user to group',
                message: error.message
            });
        }
    }

    start(port = 3000) {
        this.app.listen(port, () => {
            console.log(`AIMOS Governance API Server running on port ${port}`);
            console.log(`Health check: http://localhost:${port}/health`);
        });
    }

    async close() {
        await this.pool.end();
        await this.rbac.close();
        await this.googleAdmin.close();
        await this.automation.close();
    }
}

module.exports = GovernanceAPIServer;
