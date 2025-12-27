
import React from 'react';

const JadeFen: React.FC = () => {
  const ink = '#064e3b'; // Jade Green
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Background Mist */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(${ink} 2px, transparent 0)`,
        backgroundSize: '20px 20px'
      }} />

      {/* Water Shading */}
      <div className="absolute bottom-0 w-full h-[60%]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 3px)`,
          opacity: 0.3
        }} />
      </div>

      {/* Reeds - Thousands of fine vertical strokes */}
      <div className="absolute bottom-0 w-full h-[70%] flex justify-around items-end px-2">
        {[...Array(60)].map((_, i) => (
          <div key={i} className="w-[0.5px] bg-emerald-900" style={{
            height: `${20 + Math.random() * 60}%`,
            opacity: 0.2 + Math.random() * 0.4,
            transform: `rotate(${Math.random() * 4 - 2}deg)`,
            marginBottom: `${Math.random() * 20}px`
          }} />
        ))}
      </div>

      {/* Lotus/Floating clusters - Stippled clumps */}
      {[...Array(12)].map((_, i) => (
        <div key={i} className="absolute rounded-full" style={{
          width: `${10 + Math.random() * 20}px`,
          height: `${5 + Math.random() * 10}px`,
          left: `${Math.random() * 80}%`,
          bottom: `${10 + Math.random() * 40}%`,
          backgroundImage: `repeating-linear-gradient(45deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 2px)`,
          opacity: 0.6
        }} />
      ))}
    </div>
  );
};

export default JadeFen;
