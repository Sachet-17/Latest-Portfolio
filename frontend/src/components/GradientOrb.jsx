import React from 'react';

const GradientOrb = ({ top, left, size = 'large', delay = 0 }) => {
  const sizeClasses = {
    small: 'w-64 h-64',
    medium: 'w-96 h-96',
    large: 'w-[600px] h-[600px]',
  };

  return (
    <div
      className={`absolute ${sizeClasses[size]} rounded-full blur-3xl opacity-20 animate-pulse`}
      style={{
        top,
        left,
        background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(168,85,247,0.3) 50%, transparent 70%)',
        animationDelay: `${delay}s`,
        animationDuration: '8s',
      }}
    />
  );
};

export default GradientOrb;
