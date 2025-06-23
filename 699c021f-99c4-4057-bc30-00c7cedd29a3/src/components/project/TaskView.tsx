import React from 'react';
import { ArrowLeftIcon } from 'lucide-react';
import { Card } from '../shared/Card';
import { StatusBadge } from '../shared/StatusBadge';
import { ProgressBar } from '../shared/ProgressBar';
interface TaskViewProps {
  onNavigate: (view: string) => void;
}
export const TaskView: React.FC<TaskViewProps> = ({
  onNavigate
}) => {
  return <div className="container mx-auto">
      <div className="flex items-center mb-4">
        <button className="flex items-center text-gray-600 hover:text-gray-900" onClick={() => onNavigate('storyView')}>
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          <span>Back to Story</span>
        </button>
      </div>
      <div className="border-b border-gray-200 mb-6"></div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        🟢 TASK: Request Financial Records
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-medium mb-4">📋 Task Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Story:</span>
              <span className="font-medium">Data Collection</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Assignee:</span>
              <span className="font-medium">Sarah Smith</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Due:</span>
              <span className="font-medium text-red-600">Tomorrow 5:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <StatusBadge status="in-progress" />
            </div>
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-medium mb-4">🎯 Context</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Epic:</span>
              <span className="font-medium">Client XYZ Audit</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Priority:</span>
              <span className="font-medium flex items-center">
                <span className="text-red-500 mr-1">🔴</span> High
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Complexity:</span>
              <span className="font-medium flex items-center">
                <span className="text-yellow-500 mr-1">🟡</span> Medium
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Dependencies:</span>
              <span className="font-medium">Inventory complete</span>
            </div>
          </div>
        </Card>
      </div>
      <Card className="mb-8">
        <h3 className="text-lg font-medium mb-4">✅ Detailed Steps</h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3" checked readOnly />
            <div>
              <div className="font-medium">
                1. Contact CFO office to schedule data request meeting
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3" />
            <div>
              <div className="font-medium">
                2. Prepare formal data request letter with specifications
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3" />
            <div>
              <div className="font-medium">
                3. Submit request through official channels
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3" />
            <div>
              <div className="font-medium">
                4. Follow up within 48 hours if no response
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <input type="checkbox" className="mt-1 mr-3" />
            <div>
              <div className="font-medium">
                5. Verify data completeness upon receipt
              </div>
            </div>
          </div>
          <button className="flex items-center text-indigo-600 mt-2">
            <span className="mr-1">➕</span>
            <span>Add Step (🤖 AI can suggest more)</span>
          </button>
        </div>
      </Card>
      <Card>
        <h3 className="text-lg font-medium mb-4">🤖 AI Assistant</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center mb-2">
              <span className="text-indigo-600 mr-2">💡</span>
              <span className="font-medium">
                Based on similar tasks, I recommend:
              </span>
            </div>
            <ul className="space-y-2 pl-5 list-disc text-gray-700">
              <li>Adding a "data format specification" step</li>
              <li>Setting up a secure file transfer method</li>
              <li>Creating a receipt confirmation process</li>
            </ul>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-indigo-600 mr-2">📚</span>
            <span className="text-gray-700">
              Related Knowledge: "Client Data Request Template" (90%)
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <button className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200">
              Apply Recommendations
            </button>
            <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200" onClick={() => onNavigate('knowledgeBase')}>
              View Template
            </button>
            <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
              Ask AI
            </button>
          </div>
        </div>
      </Card>
    </div>;
};