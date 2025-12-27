
import React from 'react';

const CarbonSpire: React.FC = () => {
  const ink = '#020617'; // Carbon Black
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden shadow-2xl">
      {/* Background Shadow Wash */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 4px)`
      }} />

      {/* The Spire - Intensive Verticality */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-[85%]">
        {/* Main Pillar */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 1.5px, transparent 1.5px, transparent 3px)`,
          clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0 100%)'
        }} />
        {/* Horizontal Detail Bands */}
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute w-full h-[2px] bg-gray-100 opacity-20" style={{
            bottom: `${i * 8}%`
          }} />
        ))}
        {/* Corner Deep Shadows */}
        <div className="absolute inset-0 opacity-70" style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 2px)`,
          clipPath: 'polygon(0 0, 30% 0, 30% 100%, 0 100%)'
        }} />
      </div>

      {/* Base Rubble - Chaos Hatching */}
      <div className="absolute bottom-0 w-full h-16 opacity-80" style={{
        backgroundImage: `repeating-linear-gradient(135deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 3px)`,
        clipPath: 'polygon(0 60%, 20% 40%, 40% 70%, 60% 30%, 80% 80%, 100% 50%, 100% 100%, 0 100%)'
      }} />
    </div>
  );
};

export default CarbonSpire;
