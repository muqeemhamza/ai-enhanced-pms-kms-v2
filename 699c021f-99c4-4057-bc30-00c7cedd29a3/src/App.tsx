import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { MainDashboard } from './components/dashboard/MainDashboard';
import { ProjectDashboard } from './components/dashboard/ProjectDashboard';
import { EpicView } from './components/project/EpicView';
import { StoryView } from './components/project/StoryView';
import { TaskView } from './components/project/TaskView';
import { KnowledgeBase } from './components/knowledge/KnowledgeBase';
import { KanbanBoard } from './components/project/KanbanBoard';
import { AIAssistant } from './components/ai/AIAssistant';
export function App() {
  const [currentView, setCurrentView] = useState('mainDashboard');
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const renderView = () => {
    switch (currentView) {
      case 'mainDashboard':
        return <MainDashboard onNavigate={setCurrentView} />;
      case 'projectDashboard':
        return <ProjectDashboard onNavigate={setCurrentView} />;
      case 'epicView':
        return <EpicView onNavigate={setCurrentView} />;
      case 'storyView':
        return <StoryView onNavigate={setCurrentView} />;
      case 'taskView':
        return <TaskView onNavigate={setCurrentView} />;
      case 'knowledgeBase':
        return <KnowledgeBase onNavigate={setCurrentView} />;
      case 'kanbanBoard':
        return <KanbanBoard onNavigate={setCurrentView} />;
      default:
        return <MainDashboard onNavigate={setCurrentView} />;
    }
  };
  return <div className="flex flex-col min-h-screen bg-gray-50">
      <Header currentView={currentView} onNavigate={setCurrentView} onToggleAI={() => setShowAIAssistant(!showAIAssistant)} />
      <main className="flex-1 p-4">{renderView()}</main>
      {showAIAssistant && <AIAssistant onClose={() => setShowAIAssistant(false)} />}
    </div>;
}