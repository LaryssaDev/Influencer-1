import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 bg-gray-900 z-50">
      <div 
        className="h-full bg-gradient-to-r from-brand-yellow via-brand-pink to-brand-purple transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;