
import React from 'react';

const TetrahedralPeak: React.FC = () => {
  const ink = '#9d174d'; // Deep Rose
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Abstract Background - Linear Shards */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(120deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 10px)`
      }} />

      {/* Primary Peak - Triangle with Internal Chaos */}
      <div className="absolute bottom-0 left-[10%] w-[80%] h-[60%]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 2.5px),
            repeating-linear-gradient(135deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 4px)
          `,
          clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
          opacity: 0.7
        }} />
        {/* Geometric Highlight */}
        <div className="absolute inset-0 bg-rose-50 opacity-20" style={{
          clipPath: 'polygon(50% 0, 70% 100%, 50% 100%)'
        }} />
      </div>

      {/* Floating Shards - Polygons */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="absolute w-8 h-12" style={{
          left: `${20 + i * 15}%`,
          top: `${10 + (i % 3) * 10}%`,
          backgroundImage: `repeating-linear-gradient(${i * 30}deg, ${ink} 0, ${ink} 0.8px, transparent 0.8px, transparent 3px)`,
          clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
          opacity: 0.4
        }} />
      ))}
    </div>
  );
};

export default TetrahedralPeak;
