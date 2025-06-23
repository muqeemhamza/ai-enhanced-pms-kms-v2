import React from 'react';
interface ProgressBarProps {
  progress: number;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}
export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = 'indigo',
  size = 'md'
}) => {
  const getHeight = () => {
    switch (size) {
      case 'sm':
        return 'h-1.5';
      case 'md':
        return 'h-2';
      case 'lg':
        return 'h-3';
      default:
        return 'h-2';
    }
  };
  const getColorClass = () => {
    switch (color) {
      case 'red':
        return 'bg-red-500';
      case 'green':
        return 'bg-green-500';
      case 'yellow':
        return 'bg-yellow-500';
      case 'blue':
        return 'bg-blue-500';
      case 'indigo':
        return 'bg-indigo-500';
      default:
        return 'bg-indigo-500';
    }
  };
  return <div className={`w-full ${getHeight()} bg-gray-200 rounded-full overflow-hidden`}>
      <div className={`${getHeight()} ${getColorClass()} rounded-full`} style={{
      width: `${progress}%`
    }} />
    </div>;
};