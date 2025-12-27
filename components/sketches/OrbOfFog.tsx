
import React from 'react';

const OrbOfFog: React.FC = () => {
  const ink = '#5b21b6'; // Deep Lavender/Violet
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden flex items-center justify-center">
      {/* The Central Soft Orb */}
      <div className="relative w-40 h-40 rounded-full" style={{
        backgroundImage: `radial-gradient(circle, ${ink}22 0%, transparent 70%)`
      }} />
      <div className="absolute w-24 h-24 rounded-full border-[0.5px] border-violet-100 opacity-40 shadow-xl" />

      {/* The Shards - Clip Path Polygons */}
      {[...Array(15)].map((_, i) => (
        <div key={i} className="absolute" style={{
          width: `${10 + Math.random() * 40}px`,
          height: `${40 + Math.random() * 80}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          backgroundImage: `repeating-linear-gradient(${Math.random() * 360}deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 3px)`,
          clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
          opacity: 0.3 + Math.random() * 0.4,
          transform: `rotate(${Math.random() * 360}deg)`
        }} />
      ))}

      {/* Atmospheric Stippling */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(${ink} 1px, transparent 0)`,
        backgroundSize: '6px 8px'
      }} />
    </div>
  );
};

export default OrbOfFog;
