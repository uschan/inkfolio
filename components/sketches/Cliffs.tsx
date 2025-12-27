
import React from 'react';

const Cliffs: React.FC = () => {
  const ink = '#0f172a';
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Sea Spray - Dense mist base */}
      <div className="absolute bottom-0 w-full h-[30%] opacity-40" style={{
        backgroundImage: `radial-gradient(${ink} 0.8px, transparent 0)`,
        backgroundSize: '3px 5px',
        maskImage: 'linear-gradient(to top, black, transparent)',
        WebkitMaskImage: 'linear-gradient(to top, black, transparent)'
      }} />

      {/* The Great Wall - Multi-directional Hatching */}
      <div className="absolute left-0 w-[48%] h-full">
        {/* Deep Vertical */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 1.2px, transparent 1.2px, transparent 2px)`,
          clipPath: 'polygon(0 0, 100% 5%, 85% 95%, 0 100%)'
        }} />
        {/* Horizontal Breaks */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `repeating-linear-gradient(0deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 15px)`,
          clipPath: 'polygon(5% 5%, 95% 10%, 80% 90%, 5% 95%)'
        }} />
        {/* Corner Shadow */}
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 3px)`,
          clipPath: 'polygon(0 40%, 40% 60%, 0 100%)'
        }} />
      </div>

      {/* Distant Sea Horizon - Minimalist lines */}
      <div className="absolute right-0 w-[55%] top-[55%]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-[0.5px] bg-blue-800 opacity-20 mb-[12px]" style={{
            width: `${100 - i * 15}%`
          }} />
        ))}
      </div>

      {/* Falling Debris / Texture Dots */}
      <div className="absolute left-[30%] top-1/4 bottom-1/4 w-4 opacity-30" style={{
        backgroundImage: `radial-gradient(${ink} 1px, transparent 0)`,
        backgroundSize: '10px 20px'
      }} />
    </div>
  );
};

export default Cliffs;
