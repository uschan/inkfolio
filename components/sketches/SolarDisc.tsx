
import React from 'react';

const SolarDisc: React.FC = () => {
  const ink = '#b45309'; // Golden Amber
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden flex items-center justify-center">
      {/* Background Radiance */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(0deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 15px)`
      }} />

      {/* The Disc */}
      <div className="relative w-48 h-48 rounded-full border-[0.5px] border-amber-200 overflow-hidden shadow-sm">
        {/* Radial Hatching */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-conic-gradient(from 0deg, ${ink} 0, ${ink} 0.1deg, transparent 0.1deg, transparent 2deg)`,
          opacity: 0.4
        }} />
        {/* Core Density - Stippling */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(${ink} 1.5px, transparent 0)`,
          backgroundSize: '4px 4px',
          opacity: 0.2
        }} />
      </div>

      {/* Intersecting Orbital Lines */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className="absolute border-[0.5px] border-amber-900 rounded-full opacity-20" style={{
          width: `${150 + i * 40}px`,
          height: `${60 + i * 20}px`,
          transform: `rotate(${i * 15}deg)`
        }} />
      ))}
    </div>
  );
};

export default SolarDisc;
