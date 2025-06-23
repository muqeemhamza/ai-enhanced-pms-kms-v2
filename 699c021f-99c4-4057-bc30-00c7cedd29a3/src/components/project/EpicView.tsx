import React from 'react';
import { ArrowLeftIcon, BarChart2Icon, ListIcon } from 'lucide-react';
import { Card } from '../shared/Card';
import { ProgressBar } from '../shared/ProgressBar';
import { StatusBadge } from '../shared/StatusBadge';
interface EpicViewProps {
  onNavigate: (view: string) => void;
}
export const EpicView: React.FC<EpicViewProps> = ({
  onNavigate
}) => {
  return <div className="container mx-auto">
      <div className="flex items-center mb-4">
        <button className="flex items-center text-gray-600 hover:text-gray-900" onClick={() => onNavigate('projectDashboard')}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          <span>Project Dashboard</span>
        </button>
        <h1 className="text-xl font-semibold text-gray-800 mx-4">🟣 EPICS</h1>
        <div className="flex ml-auto">
          <button className="flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 mr-2">
            <BarChart2Icon className="h-4 w-4 mr-1" />
            <span>Timeline View</span>
          </button>
          <button className="flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
            <ListIcon className="h-4 w-4 mr-1" />
            <span>List View</span>
          </button>
        </div>
      </div>
      <div className="border-b border-gray-200 mb-6"></div>
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        🎯 Client XYZ Audit - Epic Overview
      </h2>
      <Card className="mb-8">
        <div className="flex items-center mb-4">
          <div className="h-6 w-6 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mr-2">
            🟣
          </div>
          <h3 className="text-lg font-medium">
            Epic 1: Data Collection & Analysis
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-600">Progress:</span>
              <span className="text-sm font-medium">75%</span>
            </div>
            <ProgressBar progress={75} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-600">Status:</div>
              <StatusBadge status="in-progress" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Due:</div>
              <div className="font-medium">Dec 12, 2024</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-sm text-gray-600">Stories:</div>
            <div className="font-medium">3/4 Complete</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Owner:</div>
            <div className="font-medium">Sarah Smith</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-sm text-gray-600">Tasks:</div>
            <div className="font-medium">12/15 Complete</div>
          </div>
        </div>
        <div className="border-t border-gray-100 my-4"></div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-4 w-4 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-2">
                🔵
              </div>
              <span className="font-medium">Financial Records Collection</span>
            </div>
            <StatusBadge status="complete" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-4 w-4 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-2">
                🔵
              </div>
              <span className="font-medium">Data Validation Framework</span>
            </div>
            <StatusBadge status="in-progress" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-4 w-4 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-2">
                🔵
              </div>
              <span className="font-medium">Analysis Tool Setup</span>
            </div>
            <StatusBadge status="in-progress" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-4 w-4 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-2">
                🔵
              </div>
              <span className="font-medium">Preliminary Data Review</span>
            </div>
            <StatusBadge status="not-started" />
          </div>
        </div>
        <div className="border-t border-gray-100 mt-4 pt-3">
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200" onClick={() => onNavigate('storyView')}>
              View Details
            </button>
            <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
              Add Story
            </button>
            <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
              Update Status
            </button>
          </div>
        </div>
      </Card>
      <Card>
        <h3 className="text-lg font-medium mb-4">🤖 Epic-Level AI Insights</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2 flex items-center">
              <span className="text-indigo-600 mr-2">💡</span>
              Based on project timeline, consider:
            </h4>
            <ul className="space-y-2 pl-5 list-disc text-gray-700">
              <li>Starting Epic 3 preparation while Epic 2 is in progress</li>
              <li>Risk: Data Collection delay might impact Process Mapping</li>
              <li>Opportunity: Parallel work possible on documentation</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div className="flex items-center mb-2 sm:mb-0">
              <span className="text-gray-600 mr-2">
                📊 Predicted completion:
              </span>
              <span className="font-medium">
                Dec 16 (1 day ahead of schedule)
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">
                🎯 Success probability:
              </span>
              <span className="font-medium">87% (High confidence)</span>
            </div>
          </div>
        </div>
      </Card>
    </div>;
};