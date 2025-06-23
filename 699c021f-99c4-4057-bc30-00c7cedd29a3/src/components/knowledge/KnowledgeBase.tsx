import React from 'react';
import { SearchIcon, StarIcon } from 'lucide-react';
import { Card } from '../shared/Card';
interface KnowledgeBaseProps {
  onNavigate: (view: string) => void;
}
export const KnowledgeBase: React.FC<KnowledgeBaseProps> = ({
  onNavigate
}) => {
  return <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">📚 Knowledge Base</h1>
        <div className="flex items-center mt-3 md:mt-0">
          <div className="relative mr-4">
            <input type="text" placeholder='Search: "data collection"' className="pl-9 pr-4 py-2 w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <button className="px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
            🏷️ Tags
          </button>
        </div>
      </div>
      <h2 className="text-lg font-medium text-gray-800 mb-4">
        🔍 Search Results (8 matches)
      </h2>
      <div className="space-y-4 mb-8">
        <Card>
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-medium">
              📄 Financial Data Collection Best Practices
            </h3>
            <span className="text-sm text-gray-500">📅 2 weeks ago</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center px-2 py-0.5 bg-gray-100 text-gray-700 text-sm rounded-full">
              🏷️ audit
            </span>
            <span className="inline-flex items-center px-2 py-0.5 bg-gray-100 text-gray-700 text-sm rounded-full">
              🏷️ finance
            </span>
            <span className="inline-flex items-center px-2 py-0.5 bg-gray-100 text-gray-700 text-sm rounded-full">
              🏷️ process
            </span>
            <span className="inline-flex items-center px-2 py-0.5 bg-indigo-100 text-indigo-700 text-sm rounded-full ml-auto">
              <StarIcon className="h-3 w-3 mr-1" />
              4.8/5 (12 uses)
            </span>
          </div>
          <p className="text-gray-700 mb-3">
            Complete guide for collecting financial data from clients including
            templates, checklists, and common pitfalls...
          </p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200">
              Open
            </button>
            <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
              Use Template
            </button>
            <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
              Add to Current Project
            </button>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-medium">
              📄 Data Validation Framework
            </h3>
            <span className="text-sm text-gray-500">📅 1 month ago</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center px-2 py-0.5 bg-gray-100 text-gray-700 text-sm rounded-full">
              🏷️ validation
            </span>
            <span className="inline-flex items-center px-2 py-0.5 bg-gray-100 text-gray-700 text-sm rounded-full">
              🏷️ quality-control
            </span>
            <span className="inline-flex items-center px-2 py-0.5 bg-indigo-100 text-indigo-700 text-sm rounded-full ml-auto">
              <StarIcon className="h-3 w-3 mr-1" />
              4.6/5 (8 uses)
            </span>
          </div>
          <p className="text-gray-700 mb-3">
            Step-by-step process for validating collected data accuracy...
          </p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200">
              Open
            </button>
            <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
              Use Template
            </button>
            <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
              Add to Current Project
            </button>
          </div>
        </Card>
      </div>
      <Card className="mb-8">
        <h3 className="text-lg font-medium mb-3">🤖 AI Suggestions</h3>
        <div className="mb-3">
          <p className="text-gray-700">
            Based on your current Epic "Client XYZ Audit", these entries might
            be helpful:
          </p>
        </div>
        <ul className="space-y-2 pl-5 list-disc text-gray-700">
          <li>Client Communication Templates</li>
          <li>Audit Report Structure Guide</li>
          <li>Risk Assessment Checklist</li>
        </ul>
      </Card>
      <div>
        <h3 className="text-lg font-medium mb-3">📊 Categories</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 cursor-pointer">
            🏷️ Audit (23)
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 cursor-pointer">
            🏷️ Finance (18)
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 cursor-pointer">
            🏷️ Process (15)
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 cursor-pointer">
            🏷️ Templates (12)
          </span>
        </div>
      </div>
    </div>;
};