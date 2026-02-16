# Portfolio Command Center

Unified executive dashboard for Orville's portfolio of companies: AIM, Stigg, Real Estate Holdings, and PE Fund.

## Features

### Portfolio Overview
- **Consolidated Revenue Tracking**: MTD vs targets across all companies
- **Blended EBITDA**: Portfolio-wide profitability metrics
- **Ad Spend Monitoring**: Cross-company growth engine spend
- **Alert Aggregation**: Unified view of all critical alerts

### Company Cards
Each company displays:
- **North Star Metrics**: Revenue, EBITDA, cash, runway
- **Growth Engine**: Leads, CPA, ROAS, conversion rates
- **Operational Health**: Utilization, open positions, NPS
- **Status Indicators**: Healthy / Attention / Critical

### Data Sources (To Be Integrated)
- AIM: AIMOS Supabase database
- Stigg: [TBD - Supabase/project database]
- Real Estate: Manual/spreadsheet input
- PE Fund: Manual/deal tracking

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
npm run deploy
```

## Project Structure

```
portfolio-command-center/
├── src/
│   ├── components/
│   │   ├── PortfolioCommandCenter.tsx  # Main dashboard
│   │   ├── CompanyCard.tsx             # Individual company view
│   │   ├── MetricCard.tsx              # Reusable metric component
│   │   └── AlertPanel.tsx              # Alert management
│   ├── services/
│   │   └── portfolioDataService.ts     # Data fetching layer
│   ├── types/
│   │   └── portfolio.ts                # TypeScript interfaces
│   ├── main.tsx                        # Entry point
│   └── index.css                       # Styles
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Data Integration Roadmap

### Phase 1: AIM (Complete)
- [ ] Connect to AIMOS Supabase
- [ ] Real-time lead metrics
- [ ] Live campaign performance
- [ ] Clinic capacity data

### Phase 2: Stigg
- [ ] Define data schema
- [ ] Connect to Stigg database
- [ ] Pipeline metrics
- [ ] Revenue tracking

### Phase 3: Real Estate & PE
- [ ] Manual input interface
- [ ] Spreadsheet import
- [ ] Deal tracking

### Phase 4: External APIs
- [ ] Google Ads API integration
- [ ] Meta Marketing API
- [ ] Automated daily sync

## Environment Variables

Create `.env` file:

```env
# AIM
VITE_AIM_SUPABASE_URL=
VITE_AIM_SUPABASE_KEY=

# Stigg
VITE_STIGG_SUPABASE_URL=
VITE_STIGG_SUPABASE_KEY=

# Google Ads (server-side only)
GOOGLE_ADS_CLIENT_ID=
GOOGLE_ADS_CLIENT_SECRET=
GOOGLE_ADS_REFRESH_TOKEN=
GOOGLE_ADS_DEVELOPER_TOKEN=

# Meta Ads (server-side only)
META_ACCESS_TOKEN=
META_APP_ID=
META_APP_SECRET=
```

## Deployment

### Vercel
```bash
vercel --prod
```

### Manual
```bash
npm run build
cp -r dist/* /var/www/html/
```

## Next Steps

1. **Install and test locally**
2. **Connect AIMOS database** for real AIM data
3. **Add authentication** (Supabase Auth)
4. **Deploy to Vercel**
5. **Set up automated data sync**

---

Built for Orville's executive operating system.
