
import React from 'react';

const CrystalCave: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[400px] bg-[#1e1b4b] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-indigo-900/50" />
      
      {/* Geometric Crystals */}
      {[...Array(8)].map((_, i) => (
        <div key={i} className="absolute border border-white/5 shadow-2xl" style={{
          width: `${40 + i * 20}px`,
          height: `${100 + i * 30}px`,
          left: `${10 + (i % 3) * 25}%`,
          bottom: '-20px',
          transform: `rotate(${i * 15 - 45}deg) skewY(${i * 10}deg)`,
          background: `linear-gradient(45deg, #818cf822, transparent)`,
          backdropFilter: 'blur(2px)',
          mixBlendMode: 'screen'
        }}>
          {/* Internal Structure Lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, #fff2 0, #fff2 0.5px, transparent 0.5px, transparent 4px)`
          }} />
        </div>
      ))}

      {/* Stalactite Shadows */}
      <div className="absolute top-0 w-full h-1/2 flex justify-around">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-[1px] bg-white/10" style={{
            height: `${20 + Math.random() * 60}%`,
            opacity: 0.3
          }} />
        ))}
      </div>
    </div>
  );
};

export default CrystalCave;
