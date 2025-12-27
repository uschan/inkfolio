
import React from 'react';

const NebulaLoom: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[400px] bg-[#020617] overflow-hidden flex items-center justify-center">
      {/* Cosmic Wash */}
      <div className="absolute inset-0 opacity-40 blur-[40px]" style={{
        backgroundImage: `
          radial-gradient(circle at 30% 30%, #4c1d95 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, #1d4ed8 0%, transparent 50%)
        `
      }} />

      {/* The Loom - Weaving sub-pixel lines */}
      <div className="absolute inset-0 mix-blend-screen opacity-60">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="absolute w-full h-[0.4px] bg-indigo-300" style={{
            top: `${i * 2.5}%`,
            transform: `skewY(${Math.sin(i / 5) * 20}deg)`,
            opacity: 0.2 + (Math.sin(i / 3) * 0.3)
          }} />
        ))}
      </div>

      {/* Star Pointillism - Grainy Texture */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(white 0.5px, transparent 0)`,
        backgroundSize: '12px 12px'
      }} />

      {/* Central Singularity */}
      <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center relative shadow-[0_0_80px_rgba(255,255,255,0.05)]">
        <div className="absolute inset-0 rounded-full" style={{
          backgroundImage: `repeating-conic-gradient(from 0deg, #fff2 0deg, transparent 5deg, #fff2 10deg)`,
          opacity: 0.5
        }} />
      </div>
    </div>
  );
};

export default NebulaLoom;
