
import React from 'react';

const PrismLight: React.FC = () => {
  const ink = '#0e7490'; // Cyan
  const rainbow = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden flex items-center justify-center">
      {/* The Prism - Triangle */}
      <div className="relative w-32 h-32 border border-gray-100 shadow-sm overflow-hidden" style={{
        clipPath: 'polygon(50% 0, 100% 100%, 0 100%)'
      }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 3px)`,
          opacity: 0.4
        }} />
      </div>

      {/* The Rays - Linear Gradients */}
      <div className="absolute left-1/2 top-1/2 flex flex-col gap-1 origin-left rotate-[15deg] translate-x-4">
        {rainbow.map((color, i) => (
          <div key={i} className="h-[1.5px] w-64" style={{
            backgroundImage: `repeating-linear-gradient(90deg, ${color} 0, ${color} 2px, transparent 2px, transparent 4px)`,
            opacity: 0.6
          }} />
        ))}
      </div>

      {/* Light Source Path */}
      <div className="absolute left-0 top-1/2 w-48 h-[0.5px] bg-gray-200 -rotate-[25deg] origin-right" />
    </div>
  );
};

export default PrismLight;
