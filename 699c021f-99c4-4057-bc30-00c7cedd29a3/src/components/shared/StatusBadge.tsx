import React from 'react';
interface StatusBadgeProps {
  status: 'complete' | 'in-progress' | 'not-started' | 'review' | 'overdue' | 'low' | 'medium' | 'high';
  size?: 'sm' | 'md' | 'lg';
}
export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = 'md'
}) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'complete':
        return {
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
          emoji: '🟢'
        };
      case 'in-progress':
        return {
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-800',
          emoji: '🟡'
        };
      case 'not-started':
        return {
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          emoji: '⚪'
        };
      case 'review':
        return {
          bgColor: 'bg-blue-100',
          textColor: 'text-blue-800',
          emoji: '👀'
        };
      case 'overdue':
        return {
          bgColor: 'bg-red-100',
          textColor: 'text-red-800',
          emoji: '⏰'
        };
      case 'low':
        return {
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
          emoji: '🟢'
        };
      case 'medium':
        return {
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-800',
          emoji: '🟡'
        };
      case 'high':
        return {
          bgColor: 'bg-red-100',
          textColor: 'text-red-800',
          emoji: '🔴'
        };
      default:
        return {
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          emoji: '⚪'
        };
    }
  };
  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'text-xs px-1.5 py-0.5';
      case 'md':
        return 'text-sm px-2 py-1';
      case 'lg':
        return 'text-base px-3 py-1.5';
      default:
        return 'text-sm px-2 py-1';
    }
  };
  const {
    bgColor,
    textColor,
    emoji
  } = getStatusConfig();
  return <span className={`inline-flex items-center ${getSizeClass()} ${bgColor} ${textColor} rounded-full`}>
      <span className="mr-1">{emoji}</span>
      <span className="font-medium capitalize">{status.replace('-', ' ')}</span>
    </span>;
};