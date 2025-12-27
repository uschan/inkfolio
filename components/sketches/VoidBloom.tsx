
import React from 'react';

const VoidBloom: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* The Void - Heavy Black Wash */}
      <div className="absolute inset-0 bg-[#0f172a]" />

      {/* The Bloom - Emerging Light Lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="absolute w-32 h-32 border-[0.3px] border-white/20 rounded-full" style={{
            transform: `rotate(${i * 15}deg) translateX(40px)`,
            maskImage: 'linear-gradient(to right, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, black, transparent)'
          }} />
        ))}
      </div>

      {/* Pollen Particles - Glowing Stippling */}
      <div className="absolute inset-0 mix-blend-screen opacity-40" style={{
        backgroundImage: `radial-gradient(white 1px, transparent 0)`,
        backgroundSize: '15px 15px'
      }} />

      {/* Center Pistil - Geometric core */}
      <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
      </div>

      {/* Distant Spores */}
      {[...Array(8)].map((_, i) => (
        <div key={i} className="absolute w-[1px] h-[1px] bg-white rounded-full" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          boxShadow: '0 0 5px white'
        }} />
      ))}
    </div>
  );
};

export default VoidBloom;
