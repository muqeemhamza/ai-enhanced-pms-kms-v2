import React from 'react';
import { ArrowLeftIcon, BarChart2Icon, CalendarIcon } from 'lucide-react';
import { Card } from '../shared/Card';
import { StatusBadge } from '../shared/StatusBadge';
interface KanbanBoardProps {
  onNavigate: (view: string) => void;
}
export const KanbanBoard: React.FC<KanbanBoardProps> = ({
  onNavigate
}) => {
  return <div className="container mx-auto">
      <div className="flex items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-800">
          📊 Project: Client XYZ Audit
        </h1>
        <div className="flex ml-auto">
          <button className="flex items-center px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 mr-2">
            📋 Kanban
          </button>
          <button className="flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 mr-2">
            <BarChart2Icon className="h-4 w-4 mr-1" />
            <span>Gantt</span>
          </button>
          <button className="flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>Timeline</span>
          </button>
        </div>
      </div>
      <div className="border-b border-gray-200 mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex flex-col">
          <div className="bg-gray-100 px-3 py-2 rounded-t-lg">
            <h3 className="font-medium">📝 To Do (3)</h3>
          </div>
          <div className="bg-gray-50 p-3 rounded-b-lg min-h-[600px] space-y-3">
            <Card className="border-l-4 border-l-blue-500">
              <div className="flex items-center mb-1">
                <div className="h-4 w-4 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-2">
                  🔵
                </div>
                <span className="font-medium">Process Mapping</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">Sarah Smith</div>
              <div className="text-sm text-gray-600">📅 Dec 10</div>
            </Card>
            <Card className="border-l-4 border-l-blue-500">
              <div className="flex items-center mb-1">
                <div className="h-4 w-4 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-2">
                  🔵
                </div>
                <span className="font-medium">Interview Prep</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">John Doe</div>
              <div className="text-sm text-gray-600">📅 Dec 12</div>
            </Card>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-yellow-100 px-3 py-2 rounded-t-lg">
            <h3 className="font-medium">🟡 In Progress (2)</h3>
          </div>
          <div className="bg-yellow-50 p-3 rounded-b-lg min-h-[600px] space-y-3">
            <Card className="border-l-4 border-l-blue-500">
              <div className="flex items-center mb-1">
                <div className="h-4 w-4 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-2">
                  🔵
                </div>
                <span className="font-medium">Data Collection</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">Sarah Smith</div>
              <div className="text-sm text-red-600">🔥 Urgent</div>
            </Card>
            <Card className="border-l-4 border-l-green-500">
              <div className="flex items-center mb-1">
                <div className="h-4 w-4 bg-green-100 text-green-700 rounded-full flex items-center justify-center mr-2">
                  🟢
                </div>
                <span className="font-medium">Analysis Setup</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">Mike Johnson</div>
              <div className="text-sm text-gray-600">⏰ 2 days</div>
            </Card>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-blue-100 px-3 py-2 rounded-t-lg">
            <h3 className="font-medium">👀 Review (1)</h3>
          </div>
          <div className="bg-blue-50 p-3 rounded-b-lg min-h-[600px] space-y-3">
            <Card className="border-l-4 border-l-green-500">
              <div className="flex items-center mb-1">
                <div className="h-4 w-4 bg-green-100 text-green-700 rounded-full flex items-center justify-center mr-2">
                  🟢
                </div>
                <span className="font-medium">Inventory Review</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">Mike Johnson</div>
              <div className="text-sm text-gray-600">📅 Tomorrow</div>
            </Card>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-green-100 px-3 py-2 rounded-t-lg">
            <h3 className="font-medium">✅ Done (8)</h3>
          </div>
          <div className="bg-green-50 p-3 rounded-b-lg min-h-[600px] space-y-3">
            <Card className="border-l-4 border-l-green-500">
              <div className="flex items-center mb-1">
                <div className="h-4 w-4 bg-green-100 text-green-700 rounded-full flex items-center justify-center mr-2">
                  🟢
                </div>
                <span className="font-medium">Kickoff Meeting</span>
              </div>
              <div className="text-sm text-gray-600">✅ Complete</div>
            </Card>
            <Card className="border-l-4 border-l-green-500">
              <div className="flex items-center mb-1">
                <div className="h-4 w-4 bg-green-100 text-green-700 rounded-full flex items-center justify-center mr-2">
                  🟢
                </div>
                <span className="font-medium">Data Sources</span>
              </div>
              <div className="text-sm text-gray-600">✅ Complete</div>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};