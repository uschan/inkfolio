
import React from 'react';

const OchreMesa: React.FC = () => {
  const ink = '#7c2d12'; // Burnt Orange/Ochre
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Desert Haze */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(0deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 4px)`
      }} />

      {/* Mesa Structure - High detail strata */}
      <div className="absolute bottom-0 left-[10%] right-[10%] h-[70%]">
        {/* Layered Sediments */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(2deg, ${ink} 0, ${ink} 1.2px, transparent 1.2px, transparent 3px)`,
          clipPath: 'polygon(0 100%, 5% 15%, 25% 10%, 45% 15%, 75% 10%, 95% 15%, 100% 100%)'
        }} />
        {/* Deep Shadows */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `repeating-linear-gradient(110deg, ${ink} 0, ${ink} 2px, transparent 2px, transparent 4px)`,
          clipPath: 'polygon(15% 15%, 25% 10%, 35% 100%, 10% 100%)'
        }} />
      </div>

      {/* Scrub Brush - Stippled clumps */}
      {[...Array(20)].map((_, i) => (
        <div key={i} className="absolute w-2 h-2" style={{
          left: `${Math.random() * 100}%`,
          bottom: `${Math.random() * 25}%`,
          backgroundImage: `radial-gradient(${ink} 1.5px, transparent 0)`,
          opacity: 0.6
        }} />
      ))}
    </div>
  );
};

export default OchreMesa;
