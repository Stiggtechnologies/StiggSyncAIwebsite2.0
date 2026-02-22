/**
 * AIMOS Digital Governance - Google Admin SDK Integration
 * Manages Google Workspace users, groups, and security policies
 * 
 * Security: Executive-level authentication required for all operations
 * No shared credentials allowed - uses service account with domain-wide delegation
 */

const { google } = require('googleapis');
const { Pool } = require('pg');

class GoogleAdminIntegration {
    constructor(dbConfig, serviceAccountKeyPath, adminEmail) {
        this.pool = new Pool(dbConfig);
        this.adminEmail = adminEmail;
        
        // Initialize Google Admin SDK with service account
        const auth = new google.auth.GoogleAuth({
            keyFile: serviceAccountKeyPath,
            scopes: [
                'https://www.googleapis.com/auth/admin.directory.user',
                'https://www.googleapis.com/auth/admin.directory.group',
                'https://www.googleapis.com/auth/admin.directory.user.security'
            ],
            subject: adminEmail // Domain-wide delegation
        });

        this.admin = google.admin({ version: 'directory_v1', auth });
    }

    /**
     * Create new Google Workspace user
     */
    async createUser(userData, executiveAuth) {
        if (!executiveAuth || executiveAuth.level !== 'executive') {
            throw new Error('Executive-level authentication required');
        }

        try {
            const {
                email,
                firstName,
                lastName,
                password,
                orgUnitPath = '/',
                recoveryEmail,
                recoveryPhone
            } = userData;

            // Create user in Google Workspace
            const response = await this.admin.users.insert({
                requestBody: {
                    primaryEmail: email,
                    name: {
                        givenName: firstName,
                        familyName: lastName
                    },
                    password: password,
                    changePasswordAtNextLogin: true,
                    orgUnitPath: orgUnitPath,
                    recoveryEmail: recoveryEmail,
                    recoveryPhone: recoveryPhone
                }
            });

            const googleUserId = response.data.id;

            // Log the action
            await this.logAuditEvent({
                event_type: 'create_user',
                user_email: email,
                target_resource_type: 'user',
                target_resource_id: googleUserId,
                action: 'create',
                result: 'success',
                metadata: { 
                    firstName, 
                    lastName, 
                    orgUnitPath,
                    googleUserId 
                },
                performed_by: executiveAuth.email
            });

            return {
                success: true,
                userId: googleUserId,
                email: email,
                message: 'User created successfully'
            };

        } catch (error) {
            await this.logAuditEvent({
                event_type: 'create_user',
                user_email: userData.email,
                target_resource_type: 'user',
                target_resource_id: null,
                action: 'create',
                result: 'failure',
                metadata: { error: error.message },
                performed_by: executiveAuth.email
            });

            throw new Error(`Failed to create user: ${error.message}`);
        }
    }

    /**
     * Suspend Google Workspace user
     */
    async suspendUser(email, executiveAuth) {
        if (!executiveAuth || executiveAuth.level !== 'executive') {
            throw new Error('Executive-level authentication required');
        }

        try {
            // Update user status to suspended
            const response = await this.admin.users.update({
                userKey: email,
                requestBody: {
                    suspended: true,
                    suspensionReason: 'Administrative action'
                }
            });

            // Update local database
            await this.pool.query(
                'UPDATE workspace_users SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE email = $2',
                ['suspended', email]
            );

            // Log the action
            await this.logAuditEvent({
                event_type: 'suspend_user',
                user_email: email,
                target_resource_type: 'user',
                target_resource_id: response.data.id,
                action: 'suspend',
                result: 'success',
                metadata: { reason: 'Administrative action' },
                performed_by: executiveAuth.email
            });

            return {
                success: true,
                email: email,
                message: 'User suspended successfully'
            };

        } catch (error) {
            await this.logAuditEvent({
                event_type: 'suspend_user',
                user_email: email,
                target_resource_type: 'user',
                target_resource_id: null,
                action: 'suspend',
                result: 'failure',
                metadata: { error: error.message },
                performed_by: executiveAuth.email
            });

            throw new Error(`Failed to suspend user: ${error.message}`);
        }
    }

    /**
     * Add user to Google Group
     */
    async addToGroup(userEmail, groupEmail, executiveAuth) {
        if (!executiveAuth || executiveAuth.level !== 'executive') {
            throw new Error('Executive-level authentication required');
        }

        try {
            // Add member to group
            const response = await this.admin.members.insert({
                groupKey: groupEmail,
                requestBody: {
                    email: userEmail,
                    role: 'MEMBER'
                }
            });

            // Update local database
            await this.pool.query(`
                UPDATE workspace_users 
                SET groups = array_append(groups, $1),
                    updated_at = CURRENT_TIMESTAMP
                WHERE email = $2 
                AND NOT ($1 = ANY(groups))
            `, [groupEmail, userEmail]);

            // Log the action
            await this.logAuditEvent({
                event_type: 'add_to_group',
                user_email: userEmail,
                target_resource_type: 'group',
                target_resource_id: groupEmail,
                action: 'add_member',
                result: 'success',
                metadata: { groupEmail, role: 'MEMBER' },
                performed_by: executiveAuth.email
            });

            return {
                success: true,
                message: `User ${userEmail} added to group ${groupEmail}`
            };

        } catch (error) {
            await this.logAuditEvent({
                event_type: 'add_to_group',
                user_email: userEmail,
                target_resource_type: 'group',
                target_resource_id: groupEmail,
                action: 'add_member',
                result: 'failure',
                metadata: { error: error.message },
                performed_by: executiveAuth.email
            });

            throw new Error(`Failed to add user to group: ${error.message}`);
        }
    }

    /**
     * Enforce MFA for user
     */
    async enforceMFA(email, executiveAuth) {
        if (!executiveAuth || executiveAuth.level !== 'executive') {
            throw new Error('Executive-level authentication required');
        }

        try {
            // Enable MFA enforcement in Google Workspace
            const response = await this.admin.users.update({
                userKey: email,
                requestBody: {
                    isEnforcedIn2Sv: true
                }
            });

            // Update local database
            await this.pool.query(`
                UPDATE workspace_users 
                SET mfa_enabled = true,
                    mfa_enforced_at = CURRENT_TIMESTAMP,
                    updated_at = CURRENT_TIMESTAMP
                WHERE email = $1
            `, [email]);

            // Update MFA compliance tracking
            await this.pool.query(`
                INSERT INTO mfa_compliance (
                    user_email, compliance_status, enrollment_date, updated_at
                )
                VALUES ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
                ON CONFLICT (user_email) DO UPDATE SET
                    compliance_status = EXCLUDED.compliance_status,
                    enrollment_date = CURRENT_TIMESTAMP,
                    updated_at = CURRENT_TIMESTAMP
            `, [email, 'compliant']);

            // Log the action
            await this.logAuditEvent({
                event_type: 'enforce_mfa',
                user_email: email,
                target_resource_type: 'user',
                target_resource_id: response.data.id,
                action: 'enforce_mfa',
                result: 'success',
                metadata: { enforcedAt: new Date().toISOString() },
                performed_by: executiveAuth.email
            });

            return {
                success: true,
                email: email,
                message: 'MFA enforced successfully'
            };

        } catch (error) {
            await this.logAuditEvent({
                event_type: 'enforce_mfa',
                user_email: email,
                target_resource_type: 'user',
                target_resource_id: null,
                action: 'enforce_mfa',
                result: 'failure',
                metadata: { error: error.message },
                performed_by: executiveAuth.email
            });

            throw new Error(`Failed to enforce MFA: ${error.message}`);
        }
    }

    /**
     * Get user MFA status
     */
    async getMFAStatus(email, executiveAuth) {
        if (!executiveAuth || executiveAuth.level !== 'executive') {
            throw new Error('Executive-level authentication required');
        }

        try {
            const response = await this.admin.users.get({
                userKey: email,
                projection: 'full'
            });

            const user = response.data;
            
            return {
                email: email,
                mfaEnabled: user.isEnrolledIn2Sv || false,
                mfaEnforced: user.isEnforcedIn2Sv || false,
                lastLogin: user.lastLoginTime,
                creationTime: user.creationTime
            };

        } catch (error) {
            throw new Error(`Failed to get MFA status: ${error.message}`);
        }
    }

    /**
     * Bulk MFA enforcement for role
     */
    async bulkEnforceMFAByRole(role, executiveAuth) {
        if (!executiveAuth || executiveAuth.level !== 'executive') {
            throw new Error('Executive-level authentication required');
        }

        const users = await this.pool.query(
            'SELECT email FROM workspace_users WHERE role = $1 AND status = $2 AND mfa_enabled = false',
            [role, 'active']
        );

        const results = {
            success: [],
            failed: []
        };

        for (const user of users.rows) {
            try {
                await this.enforceMFA(user.email, executiveAuth);
                results.success.push(user.email);
            } catch (error) {
                results.failed.push({
                    email: user.email,
                    error: error.message
                });
            }
        }

        return results;
    }

    /**
     * Log audit event
     */
    async logAuditEvent(event) {
        await this.pool.query(`
            INSERT INTO access_audit_log (
                event_type, user_email, target_resource_type, target_resource_id,
                action, result, metadata, performed_by
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `, [
            event.event_type,
            event.user_email,
            event.target_resource_type,
            event.target_resource_id,
            event.action,
            event.result,
            JSON.stringify(event.metadata || {}),
            event.performed_by
        ]);
    }

    async close() {
        await this.pool.end();
    }
}

module.exports = GoogleAdminIntegration;
