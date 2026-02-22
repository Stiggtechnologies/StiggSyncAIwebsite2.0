# Quick Start Guide - AIMOS Digital Governance

Get up and running in 10 minutes.

## Prerequisites

- PostgreSQL 14+ installed and running
- Node.js 18+ installed
- Google Workspace admin account
- npm or yarn package manager

## 1. Database Setup (2 minutes)

```bash
# Create database
createdb aimos

# Initialize schema
psql -d aimos -f schema.sql

# Verify tables created
psql -d aimos -c "\dt"
```

Expected output: 7 tables (digital_assets, workspace_users, access_audit_log, onboarding_queue, role_templates, groups, mfa_compliance)

## 2. Install Dependencies (2 minutes)

```bash
npm install
```

## 3. Configure Environment (2 minutes)

```bash
# Copy template
cp .env.example .env

# Edit .env with your values
nano .env
```

Minimum required:
```env
DB_HOST=localhost
DB_NAME=aimos
DB_USER=postgres
DB_PASSWORD=your_password

GOOGLE_SERVICE_ACCOUNT_KEY_PATH=/path/to/key.json
GOOGLE_ADMIN_EMAIL=admin@yourdomain.com

JWT_SECRET=your_secret_here
```

## 4. Initialize Role Templates (1 minute)

```bash
npm run init-roles
```

Expected output: "✅ Role templates initialized successfully"

## 5. Start Server (1 minute)

```bash
npm start
```

Expected output: "AIMOS Governance API Server running on port 3000"

## 6. Verify Installation (2 minutes)

```bash
# Test health endpoint
curl http://localhost:3000/health

# Expected: {"status":"ok","timestamp":"..."}
```

## 7. Access Dashboard

Open your browser to the AIMOS platform and navigate to the Governance section. The dashboard will connect to the API server at `http://localhost:3000`.

## Test Onboarding

```bash
curl -X POST http://localhost:3000/api/governance/onboarding \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "X-Auth-Level: executive" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "full_name": "Test User",
    "role": "standard_user",
    "department": "Engineering",
    "groups": ["All Users"],
    "manager_email": "manager@example.com",
    "start_date": "2026-03-01",
    "priority": "normal"
  }'
```

## Common Issues

### Database Connection Failed
- Check PostgreSQL is running: `pg_isready`
- Verify credentials in `.env`
- Check database exists: `psql -l | grep aimos`

### Google API Errors
- Verify service account key path
- Check domain-wide delegation is configured
- Ensure Admin SDK API is enabled

### Port Already in Use
- Change PORT in `.env`
- Or stop conflicting process: `lsof -ti:3000 | xargs kill`

## Next Steps

1. Configure Google Workspace (see README.md)
2. Create your first admin user
3. Set up MFA compliance tracking
4. Integrate dashboard into AIMOS UI

## Production Deployment

For production deployment:

1. Set `NODE_ENV=production` in `.env`
2. Use environment-specific database
3. Configure SSL/TLS
4. Set up monitoring and logging
5. Enable rate limiting
6. Configure backup strategy

## Support

See `README.md` for detailed documentation.
See `IMPLEMENTATION_SUMMARY.md` for complete feature list.

---

**You're ready to go! 🚀**
