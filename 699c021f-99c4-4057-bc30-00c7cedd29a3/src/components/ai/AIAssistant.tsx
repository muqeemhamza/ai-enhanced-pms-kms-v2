import React, { useState } from 'react';
import { Card } from '../shared/Card';
import { XIcon, SendIcon } from 'lucide-react';
interface AIAssistantProps {
  onClose: () => void;
}
export const AIAssistant: React.FC<AIAssistantProps> = ({
  onClose
}) => {
  const [message, setMessage] = useState('');
  return <div className="fixed bottom-0 right-0 w-full md:w-96 bg-white shadow-lg rounded-t-lg border border-gray-200 z-50">
      <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-2 rounded-t-lg">
        <h3 className="font-medium">🤖 AI Assistant</h3>
        <button onClick={onClose} className="hover:bg-indigo-700 p-1 rounded">
          <XIcon className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-3">
          💬 Hi! I'm analyzing your current Epic progress...
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">🔍 Current Context:</h4>
          <ul className="space-y-1 text-sm text-gray-600 pl-4">
            <li>• Epic: Client XYZ Audit (80% complete)</li>
            <li>• Active Story: Data Collection & Analysis</li>
            <li>• Next Due: Financial Records Request (Tomorrow)</li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">💡 Recommendations:</h4>
          <ol className="space-y-1 text-sm text-gray-600 pl-4 list-decimal">
            <li>Consider starting "Process Mapping" in parallel</li>
            <li>Schedule stakeholder interview for next week</li>
            <li>Review similar audit KB entries for best practices</li>
          </ol>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">❓ Quick Actions:</h4>
          <div className="flex flex-wrap gap-2">
            <button className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">
              Generate Tasks
            </button>
            <button className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">
              Find Similar Work
            </button>
            <button className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">
              Update Timeline
            </button>
            <button className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">
              Ask Me
            </button>
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-500 mb-2">
            💬 Ask me anything about your project...
          </div>
          <div className="flex">
            <input type="text" placeholder="Type your question here..." value={message} onChange={e => setMessage(e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
            <button className="px-3 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700">
              <SendIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>;
};