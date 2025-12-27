
import React from 'react';

const SlateCoast: React.FC = () => {
  const ink = '#334155'; // Slate/Grey-Blue
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Stormy Sky - Long Diagonal Hatching */}
      <div className="absolute inset-0 opacity-15" style={{
        backgroundImage: `repeating-linear-gradient(155deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 2px)`
      }} />

      {/* Crashing Waves - Kinetic Broken Lines */}
      <div className="absolute bottom-0 w-full h-1/2">
        {/* Deep Water Base */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `repeating-linear-gradient(0deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 4px)`
        }} />
        
        {/* Wave Crests - High Detail Broken Paths */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute w-full h-12" style={{ bottom: `${i * 15}%` }}>
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 1.5px, transparent 1.5px, transparent 3px)`,
              clipPath: 'polygon(0 80%, 20% 20%, 40% 60%, 60% 10%, 80% 70%, 100% 30%, 100% 100%, 0 100%)',
              opacity: 0.6
            }} />
          </div>
        ))}
      </div>

      {/* Shore Stippling (Spray) */}
      <div className="absolute bottom-0 w-full h-[40%] opacity-20" style={{
        backgroundImage: `radial-gradient(${ink} 0.8px, transparent 0)`,
        backgroundSize: '3px 3px',
        maskImage: 'linear-gradient(to top, black, transparent)',
        WebkitMaskImage: 'linear-gradient(to top, black, transparent)'
      }} />
    </div>
  );
};

export default SlateCoast;
