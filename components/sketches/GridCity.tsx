
import React from 'react';

const GridCity: React.FC = () => {
  const ink = '#334155'; // Slate
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(${ink} 0.5px, transparent 0)`,
        backgroundSize: '10px 10px'
      }} />

      {/* Buildings - Rectangular Modules */}
      {[...Array(20)].map((_, i) => {
        const h = 40 + Math.random() * 200;
        const w = 15 + Math.random() * 30;
        const x = (i / 20) * 100;
        const hatchAngle = [0, 45, 90, 135][i % 4];
        return (
          <div key={i} className="absolute bottom-0 border border-gray-50" style={{
            left: `${x}%`,
            width: `${w}px`,
            height: `${h}px`,
            backgroundImage: `repeating-linear-gradient(${hatchAngle}deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 4px)`,
            opacity: 0.2 + (h / 300)
          }} />
        );
      })}

      {/* Perspective Line */}
      <div className="absolute top-1/2 w-full h-[0.5px] bg-slate-100 opacity-50" />
    </div>
  );
};

export default GridCity;
