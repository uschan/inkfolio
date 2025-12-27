
import React from 'react';

const MosaicGarden: React.FC = () => {
  const ink = '#166534'; // Sage Green
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Background Vertical Wash */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 0.8px, transparent 0.8px, transparent 12px)`
      }} />

      {/* Geometric Flowers */}
      {[...Array(12)].map((_, i) => (
        <div key={i} className="absolute" style={{
          left: `${(i % 3) * 33 + 5}%`,
          top: `${Math.floor(i / 3) * 20 + 10}%`,
        }}>
          {/* Petals - Repeated Circles */}
          {[...Array(6)].map((__, j) => (
            <div key={j} className="absolute w-8 h-8 rounded-full border-[0.5px] border-green-200" style={{
              transform: `rotate(${j * 60}deg) translateX(12px)`,
              backgroundImage: `repeating-linear-gradient(${j * 30}deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 4px)`,
              opacity: 0.4
            }} />
          ))}
          {/* Center - Stippled Disc */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full" style={{
            backgroundImage: `radial-gradient(${ink} 1.5px, transparent 0)`,
            backgroundSize: '3px 3px',
            opacity: 0.8
          }} />
        </div>
      ))}

      {/* Ground Grid */}
      <div className="absolute bottom-0 w-full h-1/4 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(45deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 8px)`
      }} />
    </div>
  );
};

export default MosaicGarden;
