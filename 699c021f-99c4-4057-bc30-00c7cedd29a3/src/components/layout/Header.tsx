import React from 'react';
import { MoonIcon, SearchIcon, UserIcon, BrainCircuitIcon } from 'lucide-react';
interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onToggleAI: () => void;
}
export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onToggleAI
}) => {
  return <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BrainCircuitIcon className="h-6 w-6 text-indigo-600" />
          <h1 className="text-xl font-semibold text-gray-800">AI-PMS & KMS</h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <button className={`px-3 py-1 rounded-md ${currentView === 'mainDashboard' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => onNavigate('mainDashboard')}>
            Dashboard
          </button>
          <button className={`px-3 py-1 rounded-md ${currentView === 'projectDashboard' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => onNavigate('projectDashboard')}>
            Project
          </button>
          <button className={`px-3 py-1 rounded-md ${currentView === 'epicView' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => onNavigate('epicView')}>
            Epics
          </button>
          <button className={`px-3 py-1 rounded-md ${currentView === 'storyView' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => onNavigate('storyView')}>
            Stories
          </button>
          <button className={`px-3 py-1 rounded-md ${currentView === 'taskView' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => onNavigate('taskView')}>
            Tasks
          </button>
          <button className={`px-3 py-1 rounded-md ${currentView === 'knowledgeBase' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => onNavigate('knowledgeBase')}>
            Knowledge Base
          </button>
          <button className={`px-3 py-1 rounded-md ${currentView === 'kanbanBoard' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => onNavigate('kanbanBoard')}>
            Kanban
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input type="text" placeholder="Search..." className="pl-8 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
            <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <MoonIcon className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-1 rounded-full hover:bg-gray-100" onClick={onToggleAI}>
            <BrainCircuitIcon className="h-5 w-5 text-indigo-600" />
          </button>
          <button className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
            <UserIcon className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </header>;
};