import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-1 transition-all duration-300' : '';
  
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
