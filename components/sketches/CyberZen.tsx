
import React from 'react';

const CyberZen: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[400px] bg-[#0c0c0c] overflow-hidden flex flex-col items-center justify-center">
      {/* Carbon Grit Wash */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, #fff 0, #fff 0.5px, transparent 0.5px, transparent 2px),
          repeating-linear-gradient(-45deg, #fff 0, #fff 0.5px, transparent 0.5px, transparent 2px)
        `
      }} />

      {/* Neon Brushstroke - Abstract Circle */}
      <div className="relative w-40 h-40 border-[0.5px] border-[#06b6d4] rounded-full shadow-[0_0_15px_rgba(6,182,212,0.3)]">
        <div className="absolute inset-[-5px] rounded-full border-[0.5px] border-[#06b6d411]" />
        
        {/* Internal Precision Hatching */}
        <div className="absolute inset-4 rounded-full overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(90deg, #06b6d4 0, #06b6d4 0.5px, transparent 0.5px, transparent 6px)`,
            opacity: 0.4
          }} />
        </div>
      </div>

      {/* Binary Rain (Subtle) */}
      <div className="absolute bottom-10 flex gap-1 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1 h-8 bg-cyan-400" style={{
            opacity: 1 - (i * 0.2),
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
          }} />
        ))}
      </div>
    </div>
  );
};

export default CyberZen;
