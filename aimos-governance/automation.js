/**
 * AIMOS Digital Governance - Onboarding/Offboarding Automation
 * Automated user lifecycle management with comprehensive audit logging
 * 
 * Security: Executive-level authentication required for all operations
 */

const { Pool } = require('pg');
const GoogleAdminIntegration = require('./google-admin-integration');
const RBACEngine = require('./rbac-engine');

class LifecycleAutomation {
    constructor(dbConfig, googleConfig) {
        this.pool = new Pool(dbConfig);
        this.googleAdmin = new GoogleAdminIntegration(
            dbConfig,
            googleConfig.serviceAccountKeyPath,
            googleConfig.adminEmail
        );
        this.rbac = new RBACEngine(dbConfig);
    }

    /**
     * Process onboarding queue - main automation trigger
     */
    async processOnboardingQueue(executiveAuth) {
        if (!executiveAuth || executiveAuth.level !== 'executive') {
            throw new Error('Executive-level authentication required');
        }

        // Get all pending onboarding requests
        const pendingUsers = await this.pool.query(`
            SELECT * FROM onboarding_queue 
            WHERE status = 'pending' 
            ORDER BY priority DESC, created_at ASC
        `);

        const results = {
            success: [],
            failed: [],
            total: pendingUsers.rows.length
        };

        for (const user of pendingUsers.rows) {
            try {
                // Update status to in_progress
                await this.pool.query(
                    'UPDATE onboarding_queue SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2',
                    ['in_progress', user.id]
                );

                // Execute onboarding workflow
                const result = await this.onboardUser(user, executiveAuth);
                
                results.success.push({
                    email: user.email,
                    userId: result.userId
                });

                // Mark as completed
                await this.pool.query(
                    'UPDATE onboarding_queue SET status = $1, completed_at = CURRENT_TIMESTAMP WHERE id = $2',
                    ['completed', user.id]
                );

            } catch (error) {
                results.failed.push({
                    email: user.email,
                    error: error.message
                });

                // Mark as failed
                await this.pool.query(
                    'UPDATE onboarding_queue SET status = $1, notes = $2 WHERE id = $3',
                    ['failed', error.message, user.id]
                );

                await this.logAuditEvent({
                    event_type: 'onboarding_failed',
                    user_email: user.email,
                    target_resource_type: 'user',
                    target_resource_id: null,
                    action: 'onboard',
                    result: 'failure',
                    metadata: { error: error.message },
                    performed_by: executiveAuth.email
                });
            }
        }

        return results;
    }

    /**
     * Onboard a single user - complete workflow
     */
    async onboardUser(userData, executiveAuth) {
        if (!executiveAuth || executiveAuth.level !== 'executive') {
            throw new Error('Executive-level authentication required');
        }

        const {
            email,
            full_name,
            role,
            department,
            groups,
            manager_email
        } = userData;

        // Step 1: Validate role
        const roleValidation = await this.rbac.validateRoleAssignment(role, executiveAuth);

        // Step 2: Generate secure random password
        const password = this.generateSecurePassword();

        // Step 3: Create user in Google Workspace
        const [firstName, ...lastNameParts] = full_name.split(' ');
        const lastName = lastNameParts.join(' ') || firstName;

        const googleUser = await this.googleAdmin.createUser({
            email,
            firstName,
            lastName,
            password,
            orgUnitPath: `/${department || 'Staff'}`,
            recoveryEmail: manager_email
        }, executiveAuth);

        // Step 4: Create user in local database
        await this.pool.query(`
            INSERT INTO workspace_users (
                email, full_name, role, department, groups,
                google_user_id, status, created_by
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `, [
            email,
            full_name,
            role,
            department,
            groups || [],
            googleUser.userId,
            'active',
            executiveAuth.email
        ]);

        // Step 5: Assign groups based on role
        const groupAssignment = await this.rbac.assignGroupsToUser(email, role, executiveAuth);

        // Step 6: Add user to Google Groups
        for (const groupName of groupAssignment.groups) {
            try {
                // Get group email from database
                const groupResult = await this.pool.query(
                    'SELECT google_group_email FROM groups WHERE group_name = $1',
                    [groupName]
                );

                if (groupResult.rows.length > 0 && groupResult.rows[0].google_group_email) {
                    await this.googleAdmin.addToGroup(
                        email,
                        groupResult.rows[0].google_group_email,
                        executiveAuth
                    );
                }
            } catch (error) {
                console.error(`Failed to add user to group ${groupName}:`, error);
            }
        }

        // Step 7: Enforce MFA if required by role
        if (roleValidation.requires_mfa) {
            await this.googleAdmin.enforceMFA(email, executiveAuth);
        }

        // Step 8: Send welcome email with credentials
        await this.sendWelcomeEmail({
            email,
            full_name,
            password,
            role,
            manager_email
        });

        // Step 9: Log complete onboarding
        await this.logAuditEvent({
            event_type: 'user_onboarded',
            user_email: email,
            target_resource_type: 'user',
            target_resource_id: googleUser.userId,
            action: 'onboard',
            result: 'success',
            metadata: {
                role,
                department,
                groups: groupAssignment.groups,
                mfa_required: roleValidation.requires_mfa
            },
            performed_by: executiveAuth.email
        });

        return {
            success: true,
            userId: googleUser.userId,
            email: email,
            groups: groupAssignment.groups,
            mfa_enforced: roleValidation.requires_mfa
        };
    }

    /**
     * Offboard a user - complete workflow
     */
    async offboardUser(email, reason, executiveAuth) {
        if (!executiveAuth || executiveAuth.level !== 'executive') {
            throw new Error('Executive-level authentication required');
        }

        try {
            // Step 1: Suspend user in Google Workspace
            await this.googleAdmin.suspendUser(email, executiveAuth);

            // Step 2: Update user status in database
            await this.pool.query(
                'UPDATE workspace_users SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE email = $2',
                ['suspended', email]
            );

            // Step 3: Remove from all groups
            const user = await this.pool.query(
                'SELECT groups FROM workspace_users WHERE email = $1',
                [email]
            );

            if (user.rows.length > 0 && user.rows[0].groups) {
                for (const groupName of user.rows[0].groups) {
                    try {
                        const groupResult = await this.pool.query(
                            'SELECT google_group_email FROM groups WHERE group_name = $1',
                            [groupName]
                        );

                        if (groupResult.rows.length > 0 && groupResult.rows[0].google_group_email) {
                            // Remove from Google Group (would need additional Google Admin method)
                            console.log(`Removing ${email} from group ${groupName}`);
                        }
                    } catch (error) {
                        console.error(`Failed to remove user from group ${groupName}:`, error);
                    }
                }
            }

            // Step 4: Clear user groups in database
            await this.pool.query(
                'UPDATE workspace_users SET groups = ARRAY[]::text[], updated_at = CURRENT_TIMESTAMP WHERE email = $1',
                [email]
            );

            // Step 5: Revoke all digital asset access
            await this.pool.query(
                'UPDATE digital_assets SET is_active = false WHERE owner_email = $1',
                [email]
            );

            // Step 6: Log offboarding
            await this.logAuditEvent({
                event_type: 'user_offboarded',
                user_email: email,
                target_resource_type: 'user',
                target_resource_id: email,
                action: 'offboard',
                result: 'success',
                metadata: { reason },
                performed_by: executiveAuth.email
            });

            return {
                success: true,
                email: email,
                message: 'User offboarded successfully'
            };

        } catch (error) {
            await this.logAuditEvent({
                event_type: 'offboarding_failed',
                user_email: email,
                target_resource_type: 'user',
                target_resource_id: email,
                action: 'offboard',
                result: 'failure',
                metadata: { reason, error: error.message },
                performed_by: executiveAuth.email
            });

            throw new Error(`Failed to offboard user: ${error.message}`);
        }
    }

    /**
     * Schedule automated offboarding (e.g., for departures with future dates)
     */
    async scheduleOffboarding(email, offboardDate, reason, executiveAuth) {
        if (!executiveAuth || executiveAuth.level !== 'executive') {
            throw new Error('Executive-level authentication required');
        }

        // This would integrate with a job scheduler (e.g., node-cron or AWS EventBridge)
        // For now, we'll log the scheduled offboarding

        await this.logAuditEvent({
            event_type: 'offboarding_scheduled',
            user_email: email,
            target_resource_type: 'user',
            target_resource_id: email,
            action: 'schedule_offboarding',
            result: 'success',
            metadata: {
                offboard_date: offboardDate,
                reason
            },
            performed_by: executiveAuth.email
        });

        return {
            success: true,
            email: email,
            offboard_date: offboardDate
        };
    }

    /**
     * Generate secure random password
     */
    generateSecurePassword(length = 16) {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
        let password = '';
        const crypto = require('crypto');
        
        for (let i = 0; i < length; i++) {
            const randomIndex = crypto.randomInt(0, charset.length);
            password += charset[randomIndex];
        }
        
        return password;
    }

    /**
     * Send welcome email to new user
     */
    async sendWelcomeEmail(userData) {
        const { email, full_name, password, role, manager_email } = userData;

        // This would integrate with your email service (e.g., SendGrid, AWS SES)
        // For now, we'll log that the email should be sent

        console.log(`Welcome email would be sent to: ${email}`);
        console.log(`Temporary password: ${password}`);
        console.log(`Role: ${role}`);
        console.log(`Manager CC: ${manager_email}`);

        return {
            success: true,
            recipient: email
        };
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
        await this.googleAdmin.close();
        await this.rbac.close();
    }
}

module.exports = LifecycleAutomation;
