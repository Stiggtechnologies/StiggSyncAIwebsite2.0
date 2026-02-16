// Project and Task Types

export type ProjectStatus = 'backlog' | 'todo' | 'in-progress' | 'review' | 'done';
export type ProjectPriority = 'low' | 'medium' | 'high' | 'urgent';
export type ProjectCategory = 'engineering' | 'growth' | 'operations' | 'finance' | 'legal' | 'product';

export interface Project {
  id: string;
  title: string;
  description?: string;
  companyId: string;
  category: ProjectCategory;
  status: ProjectStatus;
  priority: ProjectPriority;
  assignee?: string;
  dueDate?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  progress: number;
  subtasks: Subtask[];
}

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

export interface ActivityFeedItem {
  id: string;
  type: 'task_created' | 'task_moved' | 'task_completed' | 'comment' | 'alert' | 'milestone';
  companyId: string;
  projectId?: string;
  title: string;
  description: string;
  actor: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

export interface KanbanColumn {
  id: ProjectStatus;
  title: string;
  color: string;
  tasks: Project[];
}

export const KANBAN_COLUMNS: KanbanColumn[] = [
  { id: 'backlog', title: 'Backlog', color: '#6b7280', tasks: [] },
  { id: 'todo', title: 'To Do', color: '#3b82f6', tasks: [] },
  { id: 'in-progress', title: 'In Progress', color: '#f59e0b', tasks: [] },
  { id: 'review', title: 'Review', color: '#8b5cf6', tasks: [] },
  { id: 'done', title: 'Done', color: '#10b981', tasks: [] },
];

// Initial project data - current active work
export const INITIAL_PROJECTS: Project[] = [
  // Engineering / AIMOS
  {
    id: 'aim-1',
    title: 'Portfolio Command Center',
    description: 'Unified executive dashboard for all portfolio companies',
    companyId: 'aim',
    category: 'engineering',
    status: 'done',
    priority: 'high',
    assignee: 'Axium',
    dueDate: '2026-02-16',
    tags: ['dashboard', 'executive', 'portfolio'],
    createdAt: '2026-02-16T05:00:00Z',
    updatedAt: '2026-02-16T05:43:00Z',
    progress: 100,
    subtasks: [
      { id: '1', title: 'Build core components', completed: true },
      { id: '2', title: 'Connect AIMOS Supabase', completed: true },
      { id: '3', title: 'Deploy to Vercel', completed: true },
      { id: '4', title: 'Add company cards', completed: true },
    ],
  },
  {
    id: 'aim-2',
    title: 'AIMOS After-Hours Integration',
    description: 'Integrate after-hours call system into AIMOS as native module',
    companyId: 'aim',
    category: 'engineering',
    status: 'done',
    priority: 'high',
    assignee: 'Axium',
    dueDate: '2026-02-13',
    tags: ['voice', 'integration', 'twilio'],
    createdAt: '2026-02-12T22:00:00Z',
    updatedAt: '2026-02-12T23:45:00Z',
    progress: 100,
    subtasks: [
      { id: '1', title: 'Database schema', completed: true },
      { id: '2', title: 'Edge functions', completed: true },
      { id: '3', title: 'UI components', completed: true },
      { id: '4', title: 'Production deploy', completed: true },
    ],
  },
  {
    id: 'aim-3',
    title: 'Facebook Ads Integration',
    description: 'Automated lead capture from Facebook Lead Ads to AIMOS CRM',
    companyId: 'aim',
    category: 'growth',
    status: 'done',
    priority: 'high',
    assignee: 'Axium',
    dueDate: '2026-02-12',
    tags: ['facebook', 'leads', 'automation'],
    createdAt: '2026-02-11T22:00:00Z',
    updatedAt: '2026-02-12T23:15:00Z',
    progress: 100,
    subtasks: [
      { id: '1', title: 'Webhook endpoint', completed: true },
      { id: '2', title: 'Zapier integration', completed: true },
      { id: '3', title: 'Testing', completed: true },
    ],
  },
  {
    id: 'aim-4',
    title: 'Test Data Cleanup',
    description: 'Remove demo/test data from AIMOS before production use',
    companyId: 'aim',
    category: 'operations',
    status: 'in-progress',
    priority: 'medium',
    assignee: 'Orville',
    dueDate: '2026-02-17',
    tags: ['cleanup', 'database', 'production'],
    createdAt: '2026-02-12T23:00:00Z',
    updatedAt: '2026-02-13T01:00:00Z',
    progress: 60,
    subtasks: [
      { id: '1', title: 'Backup current data', completed: true },
      { id: '2', title: 'Run cleanup migration', completed: true },
      { id: '3', title: 'Remove demo auth users', completed: false },
      { id: '4', title: 'Verify cleanup', completed: false },
    ],
  },
  // Growth / Marketing
  {
    id: 'growth-1',
    title: 'Google Ads Optimization',
    description: 'Fix conversion tracking and increase budget',
    companyId: 'aim',
    category: 'growth',
    status: 'review',
    priority: 'urgent',
    assignee: 'Axium',
    dueDate: '2026-02-17',
    tags: ['google-ads', 'conversion', 'roi'],
    createdAt: '2026-02-08T08:00:00Z',
    updatedAt: '2026-02-15T20:00:00Z',
    progress: 80,
    subtasks: [
      { id: '1', title: 'Fix conversion values', completed: true },
      { id: '2', title: 'Update CPA targets', completed: true },
      { id: '3', title: 'Increase budget $25→$75/day', completed: false },
    ],
  },
  {
    id: 'growth-2',
    title: 'Meta Ads Campaign Setup',
    description: 'Launch Meta ad campaigns for AIM services',
    companyId: 'aim',
    category: 'growth',
    status: 'todo',
    priority: 'high',
    assignee: 'Axium',
    dueDate: '2026-02-20',
    tags: ['meta', 'facebook', 'ads'],
    createdAt: '2026-02-11T03:00:00Z',
    updatedAt: '2026-02-11T03:00:00Z',
    progress: 20,
    subtasks: [
      { id: '1', title: 'Create ad creatives', completed: true },
      { id: '2', title: 'Set up campaigns', completed: false },
      { id: '3', title: 'Configure targeting', completed: false },
    ],
  },
  // Stigg
  {
    id: 'stigg-1',
    title: 'StiggSync AI Product',
    description: 'AI-powered operational signal to action platform',
    companyId: 'stigg',
    category: 'product',
    status: 'in-progress',
    priority: 'high',
    assignee: 'Orville',
    dueDate: '2026-03-15',
    tags: ['ai', 'product', 'mvp'],
    createdAt: '2026-02-01T00:00:00Z',
    updatedAt: '2026-02-08T00:00:00Z',
    progress: 35,
    subtasks: [
      { id: '1', title: 'Define MVP scope', completed: true },
      { id: '2', title: 'Build data ingestion', completed: true },
      { id: '3', title: 'AI analysis layer', completed: false },
      { id: '4', title: 'Output workflow', completed: false },
    ],
  },
  {
    id: 'stigg-2',
    title: 'Stigg Pipeline Development',
    description: 'Build qualified pipeline for security/automation services',
    companyId: 'stigg',
    category: 'growth',
    status: 'backlog',
    priority: 'medium',
    assignee: 'Greg',
    dueDate: '2026-02-28',
    tags: ['sales', 'pipeline', 'bd'],
    createdAt: '2026-02-01T00:00:00Z',
    updatedAt: '2026-02-01T00:00:00Z',
    progress: 0,
    subtasks: [],
  },
  // Operations
  {
    id: 'ops-1',
    title: 'Weekly Executive Dashboard',
    description: 'Automated Monday morning executive summary',
    companyId: 'aim',
    category: 'operations',
    status: 'in-progress',
    priority: 'medium',
    assignee: 'Axium',
    dueDate: '2026-02-17',
    tags: ['reporting', 'automation', 'executive'],
    createdAt: '2026-02-01T00:00:00Z',
    updatedAt: '2026-02-16T05:00:00Z',
    progress: 75,
    subtasks: [
      { id: '1', title: 'Design template', completed: true },
      { id: '2', title: 'Connect data sources', completed: true },
      { id: '3', title: 'Automate delivery', completed: false },
    ],
  },
  // PE/Acquisitions
  {
    id: 'pe-1',
    title: 'Deal Flow Review',
    description: 'Review 3 opportunities in diligence',
    companyId: 'pe-fund',
    category: 'finance',
    status: 'review',
    priority: 'high',
    assignee: 'Orville',
    dueDate: '2026-02-20',
    tags: ['acquisitions', 'diligence', 'deals'],
    createdAt: '2026-02-10T00:00:00Z',
    updatedAt: '2026-02-16T05:00:00Z',
    progress: 60,
    subtasks: [
      { id: '1', title: 'Opportunity #1 analysis', completed: true },
      { id: '2', title: 'Opportunity #2 analysis', completed: true },
      { id: '3', title: 'Opportunity #3 analysis', completed: false },
    ],
  },
  // Outstanding items from memory review
  {
    id: 'aim-5',
    title: 'AIMOS Full Schema Rebuild',
    description: 'Deploy 140+ migrations for complete AIMOS feature set (moved to backup after login fix)',
    companyId: 'aim',
    category: 'engineering',
    status: 'todo',
    priority: 'high',
    assignee: 'Axium',
    dueDate: '2026-02-20',
    tags: ['database', 'migrations', 'schema'],
    createdAt: '2026-02-13T01:20:00Z',
    updatedAt: '2026-02-13T01:20:00Z',
    progress: 15,
    subtasks: [
      { id: '1', title: 'Review migration dependencies', completed: true },
      { id: '2', title: 'Build staged deployment plan', completed: false },
      { id: '3', title: 'Test in staging', completed: false },
      { id: '4', title: 'Production deployment', completed: false },
    ],
  },
  {
    id: 'aim-6',
    title: 'Twilio Webhook Configuration',
    description: 'Configure Twilio webhook URL for After-Hours call handling',
    companyId: 'aim',
    category: 'engineering',
    status: 'todo',
    priority: 'high',
    assignee: 'Axium',
    dueDate: '2026-02-17',
    tags: ['twilio', 'webhook', 'voice'],
    createdAt: '2026-02-12T23:45:00Z',
    updatedAt: '2026-02-12T23:45:00Z',
    progress: 0,
    subtasks: [
      { id: '1', title: 'Update webhook URL in Twilio console', completed: false },
      { id: '2', title: 'Test with real call', completed: false },
      { id: '3', title: 'Verify in AIMOS dashboard', completed: false },
    ],
  },
  {
    id: 'aim-7',
    title: 'Facebook Ads Zapier Setup',
    description: 'Configure Zapier to forward Facebook leads to AIMOS + email notifications',
    companyId: 'aim',
    category: 'growth',
    status: 'todo',
    priority: 'high',
    assignee: 'Axium',
    dueDate: '2026-02-18',
    tags: ['facebook', 'zapier', 'automation'],
    createdAt: '2026-02-12T22:22:00Z',
    updatedAt: '2026-02-12T22:22:00Z',
    progress: 0,
    subtasks: [
      { id: '1', title: 'Create Zapier webhook connection', completed: false },
      { id: '2', title: 'Add email notification action', completed: false },
      { id: '3', title: 'Test with real lead submission', completed: false },
    ],
  },
  {
    id: 'growth-3',
    title: 'Meta Ads Campaign Completion',
    description: 'Complete Meta Ads setup: Instant Form, creative, copy, page assignment',
    companyId: 'aim',
    category: 'growth',
    status: 'in-progress',
    priority: 'urgent',
    assignee: 'Axium',
    dueDate: '2026-02-17',
    tags: ['meta', 'facebook', 'ads', 'launch'],
    createdAt: '2026-02-11T22:36:00Z',
    updatedAt: '2026-02-11T22:41:00Z',
    progress: 55,
    subtasks: [
      { id: '1', title: 'Create Instant Form', completed: false },
      { id: '2', title: 'Upload ad creatives', completed: false },
      { id: '3', title: 'Write ad copy variations', completed: false },
      { id: '4', title: 'Change page to AIM (from Sunset Manor)', completed: false },
      { id: '5', title: 'Refine targeting radius (15-25km)', completed: true },
    ],
  },
  {
    id: 'growth-4',
    title: 'Google Ads Budget Increase',
    description: 'Increase daily budget from $25 to $75/day after conversion fixes',
    companyId: 'aim',
    category: 'growth',
    status: 'todo',
    priority: 'high',
    assignee: 'Axium',
    dueDate: '2026-02-17',
    tags: ['google-ads', 'budget', 'scaling'],
    createdAt: '2026-02-08T08:00:00Z',
    updatedAt: '2026-02-08T08:00:00Z',
    progress: 20,
    subtasks: [
      { id: '1', title: 'Neutralize "Local actions - Other engagements"', completed: false },
      { id: '2', title: 'Update budget $25→$75/day', completed: false },
      { id: '3', title: 'Monitor performance for 48h', completed: false },
    ],
  },
  {
    id: 'ops-2',
    title: 'GoDaddy Domain Renewals',
    description: 'Decide on 3 expiring domains: sunsetmanor.care, sunsetmanor.co, stiggsecurity.com',
    companyId: 'aim',
    category: 'operations',
    status: 'review',
    priority: 'medium',
    assignee: 'Orville',
    dueDate: '2026-03-15',
    tags: ['domains', 'godaddy', 'renewals'],
    createdAt: '2026-02-11T00:00:00Z',
    updatedAt: '2026-02-11T00:00:00Z',
    progress: 30,
    subtasks: [
      { id: '1', title: 'Review sunsetmanor.care value', completed: true },
      { id: '2', title: 'Review sunsetmanor.co value', completed: true },
      { id: '3', title: 'Review stiggsecurity.com value', completed: true },
      { id: '4', title: 'Decision: Renew or retire', completed: false },
    ],
  },
  {
    id: 'ops-3',
    title: 'MochaHost Security Assessment',
    description: 'Complete initial security and backup assessment for MochaHost hosting',
    companyId: 'aim',
    category: 'operations',
    status: 'backlog',
    priority: 'medium',
    assignee: 'Axium',
    dueDate: '2026-02-28',
    tags: ['hosting', 'security', 'mochahost'],
    createdAt: '2026-02-11T00:00:00Z',
    updatedAt: '2026-02-11T00:00:00Z',
    progress: 0,
    subtasks: [
      { id: '1', title: 'Security audit', completed: false },
      { id: '2', title: 'Backup configuration review', completed: false },
      { id: '3', title: 'Performance baseline', completed: false },
    ],
  },
  {
    id: 'ops-4',
    title: 'Weekly Executive Dashboard Automation',
    description: 'Automate Monday morning executive summary with portfolio metrics',
    companyId: 'aim',
    category: 'operations',
    status: 'in-progress',
    priority: 'medium',
    assignee: 'Axium',
    dueDate: '2026-02-24',
    tags: ['reporting', 'automation', 'executive'],
    createdAt: '2026-02-01T00:00:00Z',
    updatedAt: '2026-02-16T05:00:00Z',
    progress: 75,
    subtasks: [
      { id: '1', title: 'Design template', completed: true },
      { id: '2', title: 'Connect data sources', completed: true },
      { id: '3', title: 'Automate delivery (cron)', completed: false },
    ],
  },
];

// Generate initial activity feed
export const INITIAL_ACTIVITY_FEED: ActivityFeedItem[] = [
  {
    id: 'act-1',
    type: 'task_completed',
    companyId: 'aim',
    projectId: 'aim-1',
    title: 'Portfolio Command Center deployed',
    description: 'Command Center is now live with AIMOS integration',
    actor: 'Axium',
    timestamp: '2026-02-16T05:43:00Z',
    metadata: { url: 'https://portfolio-command-center-chi.vercel.app' },
  },
  {
    id: 'act-2',
    type: 'milestone',
    companyId: 'aim',
    title: 'AIMOS Login Fixed',
    description: 'Production database schema restored, login working',
    actor: 'Axium',
    timestamp: '2026-02-13T01:20:00Z',
  },
  {
    id: 'act-3',
    type: 'task_completed',
    companyId: 'aim',
    projectId: 'aim-2',
    title: 'After-Hours Module Live',
    description: 'Twilio voice integration deployed to production',
    actor: 'Axium',
    timestamp: '2026-02-12T23:45:00Z',
  },
  {
    id: 'act-4',
    type: 'alert',
    companyId: 'aim',
    title: 'Open Shifts Alert',
    description: 'Edmonton South clinic showing 12% open shifts (threshold: 10%)',
    actor: 'System',
    timestamp: '2026-02-12T18:00:00Z',
    metadata: { severity: 'warning' },
  },
  {
    id: 'act-5',
    type: 'task_moved',
    companyId: 'aim',
    projectId: 'aim-3',
    title: 'Facebook Ads Integration Complete',
    description: 'Lead capture automation now live',
    actor: 'Axium',
    timestamp: '2026-02-12T23:15:00Z',
  },
  {
    id: 'act-6',
    type: 'milestone',
    companyId: 'aim',
    title: 'Google Ads Conversion Fixed',
    description: 'Updated CPA values, 40 qualified conversions now valued at $3,400',
    actor: 'Axium',
    timestamp: '2026-02-08T08:30:00Z',
    metadata: { roas: '4.2x' },
  },
  {
    id: 'act-7',
    type: 'comment',
    companyId: 'stigg',
    projectId: 'stigg-1',
    title: 'StiggSync MVP Update',
    description: 'Data ingestion layer complete, starting AI analysis module',
    actor: 'Orville',
    timestamp: '2026-02-08T00:00:00Z',
  },
];
