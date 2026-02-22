/**
 * Initialize Role Templates
 * Run this script once after database setup to populate role templates
 */

require('dotenv').config();
const RBACEngine = require('../rbac-engine');

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'aimos',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD
};

async function initializeRoles() {
    const rbac = new RBACEngine(dbConfig);

    try {
        console.log('Initializing role templates...');
        
        const result = await rbac.initializeRoleTemplates();
        
        console.log('✅ Role templates initialized successfully');
        console.log('Result:', result);
        
    } catch (error) {
        console.error('❌ Failed to initialize role templates:', error.message);
        process.exit(1);
    } finally {
        await rbac.close();
    }
}

initializeRoles();
