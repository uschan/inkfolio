
import React from 'react';

const CobaltGlacier: React.FC = () => {
  const ink = '#1e40af'; // Cobalt Blue
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden shadow-inner">
      {/* Arctic Atmosphere */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 20px)`
      }} />

      {/* Ice Formations - Sharp Angles */}
      <div className="absolute inset-0 flex items-end">
        {/* Main Berg */}
        <div className="absolute left-[10%] w-[80%] h-[60%]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(135deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 6px)`,
            clipPath: 'polygon(0 100%, 30% 20%, 50% 45%, 70% 10%, 100% 100%)'
          }} />
          {/* Crystalline Shading */}
          <div className="absolute inset-0 opacity-60" style={{
            backgroundImage: `repeating-linear-gradient(45deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 3px)`,
            clipPath: 'polygon(30% 20%, 50% 45%, 40% 100%, 15% 100%)'
          }} />
        </div>
      </div>

      {/* Frozen Water - Minimalist horizontal lines */}
      <div className="absolute bottom-0 w-full h-[15%]">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute h-[1px] bg-blue-100 opacity-80" style={{
            width: `${40 + Math.random() * 60}%`,
            left: `${Math.random() * 20}%`,
            top: `${i * 12}%`
          }} />
        ))}
      </div>

      {/* Frost Stippling */}
      <div className="absolute top-1/2 w-full h-1/4 opacity-10" style={{
        backgroundImage: `radial-gradient(${ink} 1px, transparent 0)`,
        backgroundSize: '8px 8px'
      }} />
    </div>
  );
};

export default CobaltGlacier;
