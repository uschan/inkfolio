
import React from 'react';

const Storm: React.FC = () => {
  const ink = '#1e293b';
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Turbulence - Chaotic backdrop */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `repeating-linear-gradient(175deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 2px)`
      }} />

      {/* The Thunderhead - Aggressive layers */}
      <div className="absolute top-0 w-full h-1/2">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${ink} 0, ${ink} 2px, transparent 2px, transparent 4px)`,
          clipPath: 'polygon(0 0, 100% 0, 100% 70%, 75% 95%, 45% 75%, 20% 90%, 0 60%)'
        }} />
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `repeating-linear-gradient(135deg, ${ink} 0, ${ink} 1.5px, transparent 1.5px, transparent 3px)`,
          clipPath: 'polygon(10% 0, 90% 0, 85% 60%, 50% 85%, 15% 55%)'
        }} />
        {/* Cloud Stippling */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(${ink} 1.5px, transparent 0)`,
          backgroundSize: '4px 4px',
          opacity: 0.2
        }} />
      </div>

      {/* Rain Sheets - Smeared verticality */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="absolute bg-blue-900 opacity-30" style={{
            width: '0.5px',
            height: `${50 + Math.random() * 50}%`,
            left: `${i * 2}%`,
            top: `${-20 + Math.random() * 20}%`,
            transform: `skewX(-20deg)`
          }} />
        ))}
      </div>
      
      {/* Surface Disturbance */}
      <div className="absolute bottom-0 w-full h-12" style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 8px)`,
        opacity: 0.2
      }} />
    </div>
  );
};

export default Storm;
