import React from 'react';
import { ArrowLeftIcon, RefreshCwIcon, SettingsIcon, FileCheckIcon, BarChartIcon, FileIcon, ClipboardIcon, CheckIcon } from 'lucide-react';
import { Card } from '../shared/Card';
import { ProgressBar } from '../shared/ProgressBar';
import { StatusBadge } from '../shared/StatusBadge';
interface ProjectDashboardProps {
  onNavigate: (view: string) => void;
}
export const ProjectDashboard: React.FC<ProjectDashboardProps> = ({
  onNavigate
}) => {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  return <div className="container mx-auto">
      <div className="flex items-center mb-4">
        <button className="flex items-center text-gray-600 hover:text-gray-900" onClick={() => onNavigate('mainDashboard')}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          <span>All Projects</span>
        </button>
        <h1 className="text-xl font-semibold text-gray-800 mx-4">
          💼 Client XYZ Audit
        </h1>
        <div className="flex ml-auto">
          <button className="flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 mr-2">
            <RefreshCwIcon className="h-4 w-4 mr-1" />
            <span>Sync</span>
          </button>
          <button className="flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
            <SettingsIcon className="h-4 w-4 mr-1" />
            <span>Settings</span>
          </button>
        </div>
      </div>
      <div className="border-b border-gray-200 mb-6"></div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          🎯 Client XYZ Comprehensive Audit
        </h2>
        <div className="text-gray-600">{today}</div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-medium mb-4">📊 Project Health</h3>
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-600">Overall Progress:</span>
              <span className="text-sm font-medium">80%</span>
            </div>
            <ProgressBar progress={80} />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">On Track:</span>
              <span className="font-medium flex items-center">
                <span className="text-green-500 mr-1">🟢</span> Yes (2 days
                ahead)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Budget:</span>
              <span className="font-medium flex items-center">
                <span className="text-green-500 mr-1">🟢</span> 85% used / 15%
                remaining
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Risk Level:</span>
              <span className="font-medium flex items-center">
                <span className="text-green-500 mr-1">🟢</span> Low
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Team Velocity:</span>
              <span className="font-medium flex items-center">
                <span className="text-green-500 mr-1">📈</span> +12% this week
              </span>
            </div>
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-medium mb-4">🎯 Current Focus</h3>
          <div className="mb-3">
            <div className="flex items-center mb-2">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
              <span className="font-medium text-blue-700">
                Data Collection & Analysis
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Status:</span>
              <StatusBadge status="in-progress" />
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Due:</span>
              <span className="font-medium text-red-600">Tomorrow 5:00 PM</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Next:</span>
              <span className="font-medium">Financial Records</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Owner:</span>
              <span className="font-medium">Sarah Smith</span>
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                View Details
              </button>
              <button className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200">
                Update
              </button>
            </div>
          </div>
        </Card>
      </div>
      <section className="mb-8">
        <h3 className="text-lg font-medium mb-4">🚀 Quick Navigation</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <Card className="flex flex-col items-center justify-center py-4 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => onNavigate('epicView')}>
            <div className="h-8 w-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mb-2">
              🟣
            </div>
            <span className="text-sm font-medium text-gray-700">Epics (4)</span>
          </Card>
          <Card className="flex flex-col items-center justify-center py-4 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => onNavigate('storyView')}>
            <div className="h-8 w-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-2">
              🔵
            </div>
            <span className="text-sm font-medium text-gray-700">
              Stories (12)
            </span>
          </Card>
          <Card className="flex flex-col items-center justify-center py-4 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => onNavigate('taskView')}>
            <div className="h-8 w-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-2">
              🟢
            </div>
            <span className="text-sm font-medium text-gray-700">
              Tasks (31)
            </span>
          </Card>
          <Card className="flex flex-col items-center justify-center py-4 hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="h-8 w-8 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center mb-2">
              <BarChartIcon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Reports (5)
            </span>
          </Card>
          <Card className="flex flex-col items-center justify-center py-4 hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="h-8 w-8 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center mb-2">
              <div className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-gray-700">Team (3)</span>
          </Card>
        </div>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-medium mb-4">📋 Active Work Items</h3>
        <Card>
          <h4 className="text-base font-medium mb-3">🔥 High Priority Tasks</h4>
          <Card className="border-l-4 border-l-red-500">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <StatusBadge status="in-progress" size="sm" />
                  <span className="ml-2 font-medium">
                    Request Financial Records
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <div className="flex items-center mr-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
                    <span>Story: Data Collection</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 mr-1" />
                    <span>Sarah Smith</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Progress:</span>
                  <div className="w-24">
                    <ProgressBar progress={60} size="sm" />
                  </div>
                  <span className="text-sm text-gray-600 ml-2">60%</span>
                </div>
              </div>
              <div className="mt-3 sm:mt-0">
                <div className="flex items-center mb-2 text-sm">
                  <ClipboardIcon className="h-3 w-3 mr-1 text-gray-500" />
                  <span className="text-gray-600 mr-1">Due:</span>
                  <span className="font-medium text-red-600">Tomorrow</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-red-500 mr-1">🚨</span>
                  <span className="text-red-600">Blocker: Pending CFO</span>
                </div>
              </div>
            </div>
          </Card>
        </Card>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-medium mb-4">📊 Project Analytics</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 flex items-center">
                <CheckIcon className="h-4 w-4 text-green-500 mr-1" /> Completed:
              </span>
              <span className="font-medium">8 stories, 23 tasks</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 flex items-center">
                <span className="text-yellow-500 mr-1">🟡</span> In Progress:
              </span>
              <span className="font-medium">2 stories, 5 tasks</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 flex items-center">
                <span className="text-gray-300 mr-1">⚪</span> Pending:
              </span>
              <span className="font-medium">2 stories, 3 tasks</span>
            </div>
            <div className="border-t border-gray-100 my-2"></div>
            <div className="flex justify-between">
              <span className="text-gray-600">Team Utilization:</span>
              <span className="font-medium">78%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Completion:</span>
              <span className="font-medium">Dec 15</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Confidence Level:</span>
              <span className="font-medium flex items-center">
                <span className="text-green-500 mr-1">🟢</span> High (92%)
              </span>
            </div>
            <div className="border-t border-gray-100 mt-2 pt-3">
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                  Detailed Analytics
                </button>
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                  Export
                </button>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-medium mb-4">🤖 AI Project Assistant</h3>
          <div className="mb-4">
            <h4 className="font-medium mb-2">💡 Smart Recommendations:</h4>
            <ul className="space-y-2 pl-5 list-disc text-gray-700">
              <li>Consider parallel work on Process Mapping</li>
              <li>Schedule stakeholder interviews early</li>
              <li>Update risk assessment</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">📚 Relevant Knowledge:</h4>
            <ul className="space-y-2 pl-5 list-disc text-gray-700">
              <li>Financial Audit Checklist</li>
              <li>Client Communication Tips</li>
            </ul>
            <div className="mt-4 flex space-x-2">
              <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                View All
              </button>
              <button className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200">
                Apply Templates
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>;
};