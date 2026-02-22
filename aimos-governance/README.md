# AIMOS Digital Governance & Access Control Module

Complete enterprise-grade governance solution for digital assets and workspace access management.

## Features

✅ **PostgreSQL Database Schema**
- digital_assets table
- workspace_users table
- access_audit_log table
- onboarding_queue table
- role_templates table
- groups table
- mfa_compliance table

✅ **RBAC Engine**
- Role-based access control with templates
- Permission mapping and inheritance
- Group assignment automation
- Custom permission overrides

✅ **Google Admin SDK Integration**
- Create users in Google Workspace
- Suspend/reactivate users
- Add users to groups
- Enforce MFA policies
- Bulk MFA enforcement by role

✅ **Governance Dashboard**
- MFA compliance percentage
- Admin count monitoring
- License utilization tracking
- Comprehensive audit trail view
- Real-time metrics
- Export audit logs to CSV

✅ **Onboarding/Offboarding Automation**
- Automated user provisioning
- Role-based group assignment
- MFA enforcement based on role
- Welcome email automation
- Comprehensive offboarding workflow
- Scheduled offboarding support

✅ **Audit Logging**
- Every action logged to database
- Immutable audit trail
- Searchable and filterable
- Executive-level access required
- Export capabilities

## Security

🔒 **Executive-Level Authentication Required**
- All API endpoints require executive authentication
- No shared credentials allowed
- Service account with domain-wide delegation
- JWT-based authentication
- Role-based access control

## Installation

### Prerequisites

- Node.js >= 18.0.0
- PostgreSQL >= 14.0
- Google Workspace account with admin access
- Service account with domain-wide delegation

### Setup

1. **Clone and Install**
```bash
cd aimos-governance
npm install
```

2. **Configure Environment Variables**
```bash
cp .env.example .env
```

Edit `.env`:
```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=aimos
DB_USER=postgres
DB_PASSWORD=your_secure_password

# Google Workspace
GOOGLE_SERVICE_ACCOUNT_KEY_PATH=/path/to/service-account-key.json
GOOGLE_ADMIN_EMAIL=admin@yourdomain.com

# API
PORT=3000
JWT_SECRET=your_jwt_secret_here

# Environment
NODE_ENV=production
```

3. **Initialize Database**
```bash
npm run init-db
```

4. **Initialize Role Templates**
```bash
npm run init-roles
```

5. **Start Server**
```bash
npm start
```

For development with hot reload:
```bash
npm run dev
```

## Google Workspace Setup

### 1. Create Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google Admin SDK API
4. Create service account with domain-wide delegation
5. Download service account key JSON

### 2. Configure Domain-Wide Delegation

1. Go to Google Workspace Admin Console
2. Security → API Controls → Domain-wide Delegation
3. Add service account client ID with scopes:
   - `https://www.googleapis.com/auth/admin.directory.user`
   - `https://www.googleapis.com/auth/admin.directory.group`
   - `https://www.googleapis.com/auth/admin.directory.user.security`

## API Endpoints

### Metrics
```http
GET /api/governance/metrics
Authorization: Bearer <token>
X-Auth-Level: executive
```

### Audit Log
```http
GET /api/governance/audit-log?eventType=all&dateRange=7days&userEmail=
Authorization: Bearer <token>
X-Auth-Level: executive
```

### Create User
```http
POST /api/governance/users
Authorization: Bearer <token>
X-Auth-Level: executive
Content-Type: application/json

{
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "password": "SecurePassword123!",
  "orgUnitPath": "/Engineering",
  "recoveryEmail": "manager@example.com"
}
```

### Suspend User
```http
PUT /api/governance/users/:email/suspend
Authorization: Bearer <token>
X-Auth-Level: executive
```

### Enforce MFA
```http
PUT /api/governance/users/:email/mfa
Authorization: Bearer <token>
X-Auth-Level: executive
```

### Queue Onboarding
```http
POST /api/governance/onboarding
Authorization: Bearer <token>
X-Auth-Level: executive
Content-Type: application/json

{
  "email": "newuser@example.com",
  "full_name": "Jane Smith",
  "role": "standard_user",
  "department": "Marketing",
  "groups": ["All Users", "Marketing"],
  "manager_email": "manager@example.com",
  "start_date": "2026-03-01",
  "priority": "normal"
}
```

### Process Onboarding Queue
```http
POST /api/governance/onboarding/process
Authorization: Bearer <token>
X-Auth-Level: executive
```

### Offboard User
```http
POST /api/governance/offboarding
Authorization: Bearer <token>
X-Auth-Level: executive
Content-Type: application/json

{
  "email": "offboard@example.com",
  "reason": "Terminated - Last day 2026-02-28"
}
```

### Export Audit Log
```http
POST /api/governance/audit-log/export
Authorization: Bearer <token>
X-Auth-Level: executive
Content-Type: application/json

{
  "eventType": "all",
  "dateRange": "30days",
  "userEmail": ""
}
```

## Dashboard Integration

### React Component

```jsx
import GovernanceDashboard from './dashboard/GovernanceDashboard';

function App() {
  const executiveAuth = {
    email: 'executive@example.com',
    level: 'executive',
    token: 'your-jwt-token'
  };

  return (
    <div className="App">
      <GovernanceDashboard executiveAuth={executiveAuth} />
    </div>
  );
}
```

## Role Templates

The system includes 6 predefined role templates:

1. **Executive** - Full system access with governance oversight
2. **Admin** - System administration and user management
3. **Manager** - Department management and asset oversight
4. **Power User** - Advanced access with collaboration capabilities
5. **Standard User** - Basic access for regular employees
6. **Read Only** - View-only access for contractors

## Automation

### Onboarding Workflow

1. User added to onboarding_queue
2. System validates role assignment
3. Creates Google Workspace account
4. Assigns groups based on role
5. Enforces MFA if required
6. Sends welcome email with credentials
7. Logs complete workflow

### Offboarding Workflow

1. Suspend Google Workspace account
2. Update database status
3. Remove from all groups
4. Revoke digital asset access
5. Log complete workflow

## Monitoring

The system logs all actions to `access_audit_log` table:

- User creation/suspension
- Group assignments
- MFA enforcement
- Asset access
- Permission changes
- Onboarding/offboarding events

## Security Best Practices

1. ✅ No shared credentials
2. ✅ Executive-level authentication required
3. ✅ Service account with domain-wide delegation
4. ✅ All actions audited
5. ✅ MFA enforcement based on role
6. ✅ Secure password generation
7. ✅ JWT-based authentication
8. ✅ Rate limiting on API endpoints

## License

Proprietary - AIMOS

## Support

For issues or questions, contact the AIMOS security team.

---

**Built for AIMOS** - Enterprise Digital Governance & Access Control
