import React from 'react';
import { ArrowLeftIcon, EditIcon, MessageSquareIcon, BrainIcon, CheckIcon } from 'lucide-react';
import { Card } from '../shared/Card';
import { StatusBadge } from '../shared/StatusBadge';
interface StoryViewProps {
  onNavigate: (view: string) => void;
}
export const StoryView: React.FC<StoryViewProps> = ({
  onNavigate
}) => {
  return <div className="container mx-auto">
      <div className="flex items-center mb-4">
        <button className="flex items-center text-gray-600 hover:text-gray-900" onClick={() => onNavigate('epicView')}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          <span>Back to Epic</span>
        </button>
        <h1 className="text-xl font-semibold text-gray-800 mx-4">🔵 STORY</h1>
        <div className="flex ml-auto">
          <button className="flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 mr-2">
            <EditIcon className="h-4 w-4 mr-1" />
            <span>Edit</span>
          </button>
          <button className="flex items-center px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 mr-2">
            <BrainIcon className="h-4 w-4 mr-1" />
            <span>AI Enhance</span>
          </button>
          <button className="flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
            <MessageSquareIcon className="h-4 w-4 mr-1" />
            <span>Comments</span>
          </button>
        </div>
      </div>
      <div className="border-b border-gray-200 mb-6"></div>
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        📊 Data Collection & Analysis
      </h2>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <Card className="md:w-1/4">
          <div className="flex items-center justify-center p-4 bg-purple-100 rounded-lg mb-4">
            <span className="text-lg">Epic: Client XYZ Audit</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Priority:</span>
              <span className="font-medium flex items-center">
                <span className="text-red-500 mr-1">🔴</span> High
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <StatusBadge status="in-progress" />
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated:</span>
              <span className="font-medium">5 days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Assigned:</span>
              <span className="font-medium">Sarah Smith</span>
            </div>
          </div>
          <div className="mt-4 bg-indigo-50 border border-indigo-100 rounded-lg p-3">
            <div className="flex items-start">
              <BrainIcon className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-indigo-700">
                  AI Suggestion:
                </div>
                <div className="text-sm text-gray-700">
                  "Consider adding data validation step based on similar past
                  projects"
                </div>
                <div className="mt-2 flex space-x-2">
                  <button className="px-2 py-0.5 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">
                    Apply
                  </button>
                  <button className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                    Dismiss
                  </button>
                  <button className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                    More Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div className="md:w-3/4 space-y-6">
          <Card>
            <h3 className="text-lg font-medium mb-3">📝 Description</h3>
            <p className="text-gray-700">
              Gather all financial records, process documents, and performance
              metrics from the past 2 years. Analyze patterns and identify
              potential areas for improvement.
            </p>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-lg font-medium mb-3">
                ✅ Acceptance Criteria
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-gray-500 mt-0.5 mr-2"></span>
                  <span>All data sources identified</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-gray-500 mt-0.5 mr-2"></span>
                  <span>Data quality verified</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-gray-500 mt-0.5 mr-2"></span>
                  <span>Analysis framework setup</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-gray-500 mt-0.5 mr-2"></span>
                  <span>Initial insights documented</span>
                </li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-lg font-medium mb-3">🟢 Generated Tasks</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <StatusBadge status="complete" size="sm" />
                    <span className="ml-2">Inventory data sources</span>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800" onClick={() => onNavigate('taskView')}>
                    View
                  </button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <StatusBadge status="in-progress" size="sm" />
                    <span className="ml-2">Request financial records</span>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800" onClick={() => onNavigate('taskView')}>
                    View
                  </button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <StatusBadge status="in-progress" size="sm" />
                    <span className="ml-2">Set up analysis tools</span>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800" onClick={() => onNavigate('taskView')}>
                    View
                  </button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <StatusBadge status="not-started" size="sm" />
                    <span className="ml-2">Conduct preliminary review</span>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800" onClick={() => onNavigate('taskView')}>
                    View
                  </button>
                </li>
              </ul>
            </Card>
          </div>
          <Card>
            <h3 className="text-lg font-medium mb-3">
              🧠 Knowledge Base Matches
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex items-center mb-1">
                  <span className="text-indigo-600 mr-2">💡</span>
                  <span className="font-medium">Found 2 similar entries:</span>
                </div>
                <ul className="space-y-2 pl-6">
                  <li className="flex items-center">
                    <span className="inline-block w-1 h-1 rounded-full bg-gray-500 mt-0.5 mr-2"></span>
                    <span>
                      "Financial Data Collection Best Practices" (85% match)
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-1 h-1 rounded-full bg-gray-500 mt-0.5 mr-2"></span>
                    <span>"Audit Framework Template" (78% match)</span>
                  </li>
                </ul>
              </div>
              <div className="flex space-x-2 mt-3">
                <button className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200" onClick={() => onNavigate('knowledgeBase')}>
                  View Details
                </button>
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                  Apply Template
                </button>
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                  Save for Later
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>;
};