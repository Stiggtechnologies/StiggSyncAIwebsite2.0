# SyncAI Deployment Architecture Map

## Current State (2026-02-25)

### Domain → Project Mapping
- **syncai.ca** → stiggsync-website project (Vercel)
- **app.syncai.ca** → syncai-github project (Vercel)

### GitHub Repositories
1. **Stiggtechnologies/StiggSyncAIwebsite2.0** → ?
2. **Stiggtechnologies/ai-maintenance-system** → syncai-github folder (app.syncai.ca)

### Local Workspace
- `/syncai-website/` - Static HTML site with Insights (NOT connected to syncai.ca)
- `/syncai-github/` - React app (connected to app.syncai.ca)
- `/syncai-control-plane/` - New build in progress

### Problem
The Insights files exist in `/syncai-website/` but syncai.ca is served by `stiggsync-website` project.
Need to identify which GitHub repo stiggsync-website deploys from.

### Action Required
1. Find the GitHub repo that deploys to stiggsync-website
2. Add Insights files to that repo
3. Commit, push, let Vercel auto-deploy
4. STOP using `vercel --prod` CLI shortcuts
