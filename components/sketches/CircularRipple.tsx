
import React from 'react';

const CircularRipple: React.FC = () => {
  const ink = '#0f766e'; // Teal
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden flex items-center justify-center">
      {/* Concentric Rings */}
      {[...Array(8)].map((_, i) => (
        <div key={i} className="absolute rounded-full border-[0.5px] border-teal-800 opacity-30" style={{
          width: `${40 + i * 35}px`,
          height: `${20 + i * 20}px`,
          backgroundImage: i % 2 === 0 ? `radial-gradient(${ink} 0.5px, transparent 0)` : 'none',
          backgroundSize: '4px 4px'
        }} />
      ))}

      {/* Horizontal Interruption Lines */}
      {[...Array(20)].map((_, i) => (
        <div key={i} className="absolute h-[1px] bg-teal-900 opacity-10" style={{
          width: `${60 + Math.random() * 40}%`,
          top: `${i * 5}%`
        }} />
      ))}

      {/* Central Focal Orb */}
      <div className="relative w-4 h-4 rounded-full bg-teal-950 opacity-80 shadow-lg" />
    </div>
  );
};

export default CircularRipple;
