/**
 * AIMOS Digital Governance - RBAC Engine
 * Role-Based Access Control with templates, permission mapping, and group assignment
 * 
 * Security: Executive-level authentication required for all mutations
 */

const { Pool } = require('pg');

class RBACEngine {
    constructor(dbConfig) {
        this.pool = new Pool(dbConfig);
        this.permissionHierarchy = {
            'owner': ['read', 'write', 'delete', 'share', 'admin'],
            'admin': ['read', 'write', 'delete', 'share'],
            'editor': ['read', 'write', 'share'],
            'contributor': ['read', 'write'],
            'viewer': ['read']
        };
    }

    /**
     * Role Templates - Predefined configurations
     */
    async initializeRoleTemplates() {
        const templates = [
            {
                role_name: 'executive',
                display_name: 'Executive',
                description: 'Full system access with governance oversight',
                permissions: {
                    assets: ['read', 'write', 'delete', 'admin'],
                    users: ['read', 'write', 'delete', 'admin'],
                    groups: ['read', 'write', 'delete', 'admin'],
                    audit: ['read', 'export'],
                    settings: ['read', 'write']
                },
                default_groups: ['Executives', 'Admins'],
                requires_mfa: true,
                max_users: 10
            },
            {
                role_name: 'admin',
                display_name: 'Administrator',
                description: 'System administration and user management',
                permissions: {
                    assets: ['read', 'write', 'delete'],
                    users: ['read', 'write'],
                    groups: ['read', 'write'],
                    audit: ['read'],
                    settings: ['read']
                },
                default_groups: ['Admins', 'IT'],
                requires_mfa: true,
                max_users: 25
            },
            {
                role_name: 'manager',
                display_name: 'Manager',
                description: 'Department management and asset oversight',
                permissions: {
                    assets: ['read', 'write', 'share'],
                    users: ['read'],
                    groups: ['read'],
                    audit: ['read'],
                    settings: []
                },
                default_groups: ['Managers'],
                requires_mfa: true,
                max_users: null
            },
            {
                role_name: 'power_user',
                display_name: 'Power User',
                description: 'Advanced access with collaboration capabilities',
                permissions: {
                    assets: ['read', 'write', 'share'],
                    users: [],
                    groups: ['read'],
                    audit: [],
                    settings: []
                },
                default_groups: ['Power Users'],
                requires_mfa: true,
                max_users: null
            },
            {
                role_name: 'standard_user',
                display_name: 'Standard User',
                description: 'Basic access for regular employees',
                permissions: {
                    assets: ['read', 'write'],
                    users: [],
                    groups: ['read'],
                    audit: [],
                    settings: []
                },
                default_groups: ['All Users'],
                requires_mfa: false,
                max_users: null
            },
            {
                role_name: 'read_only',
                display_name: 'Read Only',
                description: 'View-only access for contractors and limited users',
                permissions: {
                    assets: ['read'],
                    users: [],
                    groups: [],
                    audit: [],
                    settings: []
                },
                default_groups: ['Contractors'],
                requires_mfa: false,
                max_users: null
            }
        ];

        for (const template of templates) {
            await this.pool.query(`
                INSERT INTO role_templates (
                    role_name, display_name, description, permissions, 
                    default_groups, requires_mfa, max_users
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7)
                ON CONFLICT (role_name) DO UPDATE SET
                    display_name = EXCLUDED.display_name,
                    description = EXCLUDED.description,
                    permissions = EXCLUDED.permissions,
                    default_groups = EXCLUDED.default_groups,
                    requires_mfa = EXCLUDED.requires_mfa,
                    max_users = EXCLUDED.max_users,
                    updated_at = CURRENT_TIMESTAMP
            `, [
                template.role_name,
                template.display_name,
                template.description,
                JSON.stringify(template.permissions),
                template.default_groups,
                template.requires_mfa,
                template.max_users
            ]);
        }

        return { success: true, message: 'Role templates initialized' };
    }

    /**
     * Check if user has permission for an action on a resource
     */
    async hasPermission(userEmail, resource, action, executiveAuth = null) {
        // Verify executive authentication
        if (!executiveAuth || !executiveAuth.level === 'executive') {
            throw new Error('Executive-level authentication required');
        }

        const user = await this.pool.query(
            'SELECT role, permissions, groups FROM workspace_users WHERE email = $1 AND status = $2',
            [userEmail, 'active']
        );

        if (user.rows.length === 0) {
            return false;
        }

        const { role, permissions: customPermissions, groups } = user.rows[0];

        // Check custom permissions first (overrides)
        if (customPermissions && customPermissions[resource]) {
            return customPermissions[resource].includes(action);
        }

        // Check role-based permissions
        const roleTemplate = await this.pool.query(
            'SELECT permissions FROM role_templates WHERE role_name = $1',
            [role]
        );

        if (roleTemplate.rows.length > 0) {
            const rolePermissions = roleTemplate.rows[0].permissions;
            if (rolePermissions[resource] && rolePermissions[resource].includes(action)) {
                return true;
            }
        }

        // Check group-based permissions
        if (groups && groups.length > 0) {
            const groupPerms = await this.pool.query(
                'SELECT permissions FROM groups WHERE group_name = ANY($1) AND is_active = true',
                [groups]
            );

            for (const group of groupPerms.rows) {
                if (group.permissions && group.permissions[resource] && 
                    group.permissions[resource].includes(action)) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Assign user to groups based on role
     */
    async assignGroupsToUser(userEmail, role, executiveAuth) {
        if (!executiveAuth || executiveAuth.level !== 'executive') {
            throw new Error('Executive-level authentication required');
        }

        // Get default groups for role
        const roleTemplate = await this.pool.query(
            'SELECT default_groups FROM role_templates WHERE role_name = $1',
            [role]
        );

        if (roleTemplate.rows.length === 0) {
            throw new Error(`Role template not found: ${role}`);
        }

        const defaultGroups = roleTemplate.rows[0].default_groups || [];

        // Update user's groups
        await this.pool.query(
            'UPDATE workspace_users SET groups = $1, updated_at = CURRENT_TIMESTAMP WHERE email = $2',
            [defaultGroups, userEmail]
        );

        // Log the action
        await this.logAuditEvent({
            event_type: 'assign_groups',
            user_email: userEmail,
            target_resource_type: 'user',
            target_resource_id: userEmail,
            action: 'assign_groups',
            result: 'success',
            metadata: { groups: defaultGroups, role },
            performed_by: executiveAuth.email
        });

        return { success: true, groups: defaultGroups };
    }

    /**
     * Permission mapping - resolve effective permissions
     */
    async getEffectivePermissions(userEmail, executiveAuth) {
        if (!executiveAuth || executiveAuth.level !== 'executive') {
            throw new Error('Executive-level authentication required');
        }

        const user = await this.pool.query(
            'SELECT role, permissions, groups FROM workspace_users WHERE email = $1 AND status = $2',
            [userEmail, 'active']
        );

        if (user.rows.length === 0) {
            throw new Error('User not found or inactive');
        }

        const { role, permissions: customPermissions, groups } = user.rows[0];

        // Start with role permissions
        const roleTemplate = await this.pool.query(
            'SELECT permissions FROM role_templates WHERE role_name = $1',
            [role]
        );

        let effectivePermissions = roleTemplate.rows[0]?.permissions || {};

        // Merge group permissions
        if (groups && groups.length > 0) {
            const groupPerms = await this.pool.query(
                'SELECT permissions FROM groups WHERE group_name = ANY($1) AND is_active = true',
                [groups]
            );

            for (const group of groupPerms.rows) {
                if (group.permissions) {
                    effectivePermissions = this.mergePermissions(effectivePermissions, group.permissions);
                }
            }
        }

        // Apply custom permissions (overrides)
        if (customPermissions) {
            effectivePermissions = this.mergePermissions(effectivePermissions, customPermissions);
        }

        return effectivePermissions;
    }

    /**
     * Merge permissions with union logic
     */
    mergePermissions(base, additional) {
        const merged = { ...base };

        for (const [resource, actions] of Object.entries(additional)) {
            if (!merged[resource]) {
                merged[resource] = [];
            }
            merged[resource] = [...new Set([...merged[resource], ...actions])];
        }

        return merged;
    }

    /**
     * Validate role assignment
     */
    async validateRoleAssignment(role, executiveAuth) {
        if (!executiveAuth || executiveAuth.level !== 'executive') {
            throw new Error('Executive-level authentication required');
        }

        const template = await this.pool.query(
            'SELECT max_users, requires_mfa FROM role_templates WHERE role_name = $1',
            [role]
        );

        if (template.rows.length === 0) {
            throw new Error(`Invalid role: ${role}`);
        }

        const { max_users, requires_mfa } = template.rows[0];

        // Check max users limit
        if (max_users) {
            const currentCount = await this.pool.query(
                'SELECT COUNT(*) as count FROM workspace_users WHERE role = $1 AND status = $2',
                [role, 'active']
            );

            if (currentCount.rows[0].count >= max_users) {
                throw new Error(`Maximum users limit reached for role: ${role}`);
            }
        }

        return { valid: true, requires_mfa };
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

module.exports = RBACEngine;
