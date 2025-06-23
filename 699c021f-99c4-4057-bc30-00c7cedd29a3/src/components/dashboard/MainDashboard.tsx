import React from 'react';
import { CalendarIcon, PlusIcon, LineChartIcon, BriefcaseIcon, TargetIcon, SmartphoneIcon, VideoIcon, CheckIcon, ClockIcon, TrendingUpIcon } from 'lucide-react';
import { Card } from '../shared/Card';
import { ProgressBar } from '../shared/ProgressBar';
import { StatusBadge } from '../shared/StatusBadge';
interface MainDashboardProps {
  onNavigate: (view: string) => void;
}
export const MainDashboard: React.FC<MainDashboardProps> = ({
  onNavigate
}) => {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  return <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            👋 Welcome back, Sarah!
          </h1>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <CalendarIcon className="h-5 w-5 text-gray-500 mr-2" />
          <span className="text-gray-600">Today: {today}</span>
        </div>
      </div>
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          🚀 Your Active Projects
        </h2>
        <Card className="mb-4">
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">💼 Client XYZ Audit</h3>
              <div className="text-sm text-gray-600">
                📊 Progress: <span className="font-medium">80%</span>
              </div>
            </div>
            <ProgressBar progress={80} />
            <div className="flex flex-col sm:flex-row justify-between mt-3 space-y-2 sm:space-y-0">
              <div className="flex items-center">
                <StatusBadge status="in-progress" />
                <span className="mx-2">|</span>
                <span className="text-sm text-gray-600">Due: 7 days</span>
                <span className="mx-2">|</span>
                <span className="text-sm text-gray-600">Team: 3 members</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">
                  Next: Financial Records Review
                </span>
                <span className="mx-2">|</span>
                <span className="text-sm text-gray-600">
                  Risk: <StatusBadge status="low" size="sm" />
                </span>
              </div>
            </div>
            <div className="border-t border-gray-100 mt-3 pt-3">
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200" onClick={() => onNavigate('projectDashboard')}>
                  Open Project Dashboard
                </button>
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                  Quick Update
                </button>
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </Card>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          📌 Create New Project
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <Card className="flex flex-col items-center justify-center py-4 hover:bg-gray-50 cursor-pointer transition-colors">
            <LineChartIcon className="h-8 w-8 text-indigo-500 mb-2" />
            <span className="text-sm font-medium text-gray-700">
              📈 Stock Trading
            </span>
          </Card>
          <Card className="flex flex-col items-center justify-center py-4 hover:bg-gray-50 cursor-pointer transition-colors">
            <BriefcaseIcon className="h-8 w-8 text-indigo-500 mb-2" />
            <span className="text-sm font-medium text-gray-700">
              💼 Consulting
            </span>
          </Card>
          <Card className="flex flex-col items-center justify-center py-4 hover:bg-gray-50 cursor-pointer transition-colors">
            <TargetIcon className="h-8 w-8 text-indigo-500 mb-2" />
            <span className="text-sm font-medium text-gray-700">
              🎯 Goals Personal
            </span>
          </Card>
          <Card className="flex flex-col items-center justify-center py-4 hover:bg-gray-50 cursor-pointer transition-colors">
            <SmartphoneIcon className="h-8 w-8 text-indigo-500 mb-2" />
            <span className="text-sm font-medium text-gray-700">
              📱 Marketing
            </span>
          </Card>
          <Card className="flex flex-col items-center justify-center py-4 hover:bg-gray-50 cursor-pointer transition-colors">
            <VideoIcon className="h-8 w-8 text-indigo-500 mb-2" />
            <span className="text-sm font-medium text-gray-700">
              🎬 Video Gen
            </span>
          </Card>
        </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            📊 Global Overview
          </h2>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Card className="flex flex-col items-center justify-center py-3">
              <div className="text-2xl font-bold text-indigo-600">8</div>
              <div className="text-sm text-gray-600">📝 Projects</div>
            </Card>
            <Card className="flex flex-col items-center justify-center py-3">
              <div className="text-2xl font-bold text-green-600">23</div>
              <div className="text-sm text-gray-600">🟢 Complete</div>
            </Card>
            <Card className="flex flex-col items-center justify-center py-3">
              <div className="text-2xl font-bold text-yellow-600">12</div>
              <div className="text-sm text-gray-600">🟡 Active</div>
            </Card>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Card className="flex flex-col items-center justify-center py-3">
              <div className="text-2xl font-bold text-indigo-600">156</div>
              <div className="text-sm text-gray-600">✅ Tasks</div>
            </Card>
            <Card className="flex flex-col items-center justify-center py-3">
              <div className="text-2xl font-bold text-red-600">23</div>
              <div className="text-sm text-gray-600">⏰ Overdue</div>
            </Card>
            <Card className="flex flex-col items-center justify-center py-3">
              <div className="text-2xl font-bold text-green-600">89%</div>
              <div className="text-sm text-gray-600">📈 Velocity</div>
            </Card>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            🤖 Cross-Project Insights
          </h2>
          <Card className="h-full">
            <h3 className="font-medium mb-3">💡 Suggested Actions:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-gray-500 mt-2 mr-2"></span>
                <span>Review overdue tasks</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-gray-500 mt-2 mr-2"></span>
                <span>Schedule team sync</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-gray-500 mt-2 mr-2"></span>
                <span>Update project risks</span>
              </li>
            </ul>
          </Card>
        </section>
      </div>
    </div>;
};