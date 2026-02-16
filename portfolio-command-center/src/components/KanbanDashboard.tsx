import { useState, useMemo } from 'react';
import {
  Plus, MoreHorizontal, Calendar, User,
  ChevronDown, ChevronUp, CheckCircle2, Circle
} from 'lucide-react';
import { Project, ProjectStatus, KanbanColumn, KANBAN_COLUMNS, INITIAL_PROJECTS } from '../types/projects';
import { PORTFOLIO_COMPANIES } from '../types/portfolio';

export function KanbanDashboard() {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [filterCompany, setFilterCompany] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const columns: KanbanColumn[] = useMemo(() => {
    const filtered = projects.filter(p => {
      if (filterCompany !== 'all' && p.companyId !== filterCompany) return false;
      if (filterCategory !== 'all' && p.category !== filterCategory) return false;
      return true;
    });

    return KANBAN_COLUMNS.map(col => ({
      ...col,
      tasks: filtered.filter(p => p.status === col.id),
    }));
  }, [projects, filterCompany, filterCategory]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-700 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'medium': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  // const getCategoryIcon = (category: string) => {
  //   switch (category) {
  //     case 'engineering': return '🔧';
  //     case 'growth': return '📈';
  //     case 'operations': return '⚙️';
  //     case 'finance': return '💰';
  //     case 'legal': return '⚖️';
  //     case 'product': return '📱';
  //     default: return '📋';
  //   }
  // };

  const getCompanyColor = (companyId: string) => {
    return PORTFOLIO_COMPANIES.find(c => c.id === companyId)?.color || '#6b7280';
  };

  const getCompanyName = (companyId: string) => {
    return PORTFOLIO_COMPANIES.find(c => c.id === companyId)?.shortName || companyId;
  };

  const handleDragStart = (e: React.DragEvent, projectId: string) => {
    e.dataTransfer.setData('projectId', projectId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, status: ProjectStatus) => {
    e.preventDefault();
    const projectId = e.dataTransfer.getData('projectId');
    if (projectId) {
      setProjects(prev => prev.map(p => 
        p.id === projectId ? { ...p, status, updatedAt: new Date().toISOString() } : p
      ));
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600">Filter:</span>
          <select
            value={filterCompany}
            onChange={(e) => setFilterCompany(e.target.value)}
            className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Companies</option>
            {PORTFOLIO_COMPANIES.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Categories</option>
            <option value="engineering">Engineering</option>
            <option value="growth">Growth</option>
            <option value="operations">Operations</option>
            <option value="finance">Finance</option>
            <option value="product">Product</option>
          </select>
        </div>
        <div className="flex-1"></div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          New Project
        </button>
      </div>

      {/* Kanban Board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map(column => (
          <div
            key={column.id}
            className="flex-shrink-0 w-80"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id)}
          >
            {/* Column Header */}
            <div 
              className="flex items-center justify-between p-3 rounded-t-lg border-t-4 border-x border-b-0"
              style={{ borderTopColor: column.color, borderLeftColor: '#e5e7eb', borderRightColor: '#e5e7eb' }}
            >
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900">{column.title}</h3>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                  {column.tasks.length}
                </span>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded">
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Column Content */}
            <div className="bg-gray-50 border border-t-0 border-gray-200 rounded-b-lg p-3 min-h-[400px] space-y-3">
              {column.tasks.map(project => (
                <div
                  key={project.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, project.id)}
                  className="bg-white rounded-lg border border-gray-200 p-4 cursor-move hover:shadow-md transition-shadow"
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: getCompanyColor(project.companyId) }}
                      />
                      <span className="text-xs text-gray-500">{getCompanyName(project.companyId)}</span>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${getPriorityColor(project.priority)}`}>
                      {project.priority}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-medium text-gray-900 mb-1">{project.title}</h4>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">{project.description}</p>

                  {/* Progress */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-blue-600 h-1.5 rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      {project.assignee && (
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{project.assignee}</span>
                        </div>
                      )}
                      {project.dueDate && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(project.dueDate).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      {expandedProject === project.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Subtasks */}
                  {expandedProject === project.id && project.subtasks.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <h5 className="text-xs font-medium text-gray-600 mb-2">Subtasks</h5>
                      <div className="space-y-1">
                        {project.subtasks.map(subtask => (
                          <div key={subtask.id} className="flex items-center gap-2 text-sm">
                            {subtask.completed ? (
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                            ) : (
                              <Circle className="w-4 h-4 text-gray-300" />
                            )}
                            <span className={subtask.completed ? 'text-gray-400 line-through' : 'text-gray-700'}>
                              {subtask.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  {project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-gray-100">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
