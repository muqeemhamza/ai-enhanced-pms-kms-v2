import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  bordered = true,
  padding = 'md'
}) => {
  const getPaddingClass = () => {
    switch (padding) {
      case 'none':
        return 'p-0';
      case 'sm':
        return 'p-2';
      case 'md':
        return 'p-4';
      case 'lg':
        return 'p-6';
      default:
        return 'p-4';
    }
  };
  return <div className={`
        bg-white rounded-lg shadow-sm 
        ${bordered ? 'border border-gray-200' : ''} 
        ${getPaddingClass()} 
        ${className}
      `}>
      {children}
    </div>;
};