/**
 * AIMOS Digital Governance - Server Entry Point
 */

require('dotenv').config();
const GovernanceAPIServer = require('./api-server');

const config = {
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME || 'aimos',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD,
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000
    },
    google: {
        serviceAccountKeyPath: process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH,
        adminEmail: process.env.GOOGLE_ADMIN_EMAIL
    }
};

const server = new GovernanceAPIServer(config);
const port = process.env.PORT || 3000;

server.start(port);

// Graceful shutdown
process.on('SIGTERM', async () => {
    console.log('SIGTERM received, shutting down gracefully...');
    await server.close();
    process.exit(0);
});

process.on('SIGINT', async () => {
    console.log('SIGINT received, shutting down gracefully...');
    await server.close();
    process.exit(0);
});
