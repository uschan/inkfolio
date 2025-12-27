
import React from 'react';

const Cove: React.FC = () => {
  const ink = '#1a365d';
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden select-none shadow-inner">
      {/* Sky Hatching - Interrupted */}
      <div className="absolute inset-0 opacity-15" style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 5px)`
      }} />

      {/* Distant Hills - Double-pass hatching */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(165deg, ${ink} 0, ${ink} 0.8px, transparent 0.8px, transparent 2px)`,
          clipPath: 'polygon(0% 48%, 20% 40%, 45% 44%, 65% 38%, 90% 46%, 100% 40%, 100% 50%, 0% 50%)',
          opacity: 0.7
        }} />
      </div>
      
      {/* Foreground Promontory - Dense textures */}
      <div className="absolute inset-0">
        {/* Layer 1: Diagonal Shading */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${ink} 0, ${ink} 1.2px, transparent 1.2px, transparent 3px)`,
          clipPath: 'polygon(15% 50%, 35% 32%, 55% 48%, 65% 65%, 15% 65%)'
        }} />
        {/* Layer 2: Counter Shading */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `repeating-linear-gradient(135deg, ${ink} 0, ${ink} 1.5px, transparent 1.5px, transparent 4.5px)`,
          clipPath: 'polygon(20% 50%, 30% 38%, 50% 48%, 60% 65%, 20% 65%)'
        }} />
      </div>

      {/* Tidal Water - Dynamic broken lines */}
      <div className="absolute inset-x-0 top-[65%] bottom-0 bg-blue-50/10">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="absolute h-[0.6px] bg-blue-900 opacity-50" style={{
            width: `${20 + Math.random() * 50}%`,
            left: `${Math.random() * 30}%`,
            top: `${i * 3}%`
          }} />
        ))}
        {/* Shore Stippling - High detail */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(${ink} 0.8px, transparent 0)`,
          backgroundSize: '4px 3px',
          clipPath: 'polygon(0% 0%, 100% 5%, 80% 15%, 20% 8%, 0% 25%)',
          opacity: 0.4
        }} />
      </div>

      {/* Bottom Rocks - Organic shapes with jitter hatching */}
      <div className="absolute bottom-[-10px] left-[-20px] w-[70%] h-[30%]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(170deg, ${ink} 0, ${ink} 1.8px, transparent 1.8px, transparent 3.5px)`,
          clipPath: 'polygon(10% 100%, 10% 35%, 45% 55%, 85% 90%, 45% 100%)'
        }} />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(${ink} 1px, transparent 0)`,
          backgroundSize: '5px 8px'
        }} />
      </div>
    </div>
  );
};

export default Cove;
