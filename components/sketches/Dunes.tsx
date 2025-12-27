
import React from 'react';

const Dunes: React.FC = () => {
  const ink = '#2563eb';
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Heat Haze Background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(0deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 15px)`
      }} />

      {/* Dune Ridge 1 - The 'Light' Side */}
      <div className="absolute bottom-0 w-full h-[60%]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(12deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 6px)`,
          clipPath: 'polygon(0 45%, 35% 15%, 70% 35%, 100% 20%, 100% 100%, 0 100%)'
        }} />
      </div>

      {/* Dune Ridge 2 - The 'Shadow' Side */}
      <div className="absolute bottom-0 w-full h-[45%]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(172deg, ${ink} 0, ${ink} 1.5px, transparent 1.5px, transparent 3.5px)`,
          clipPath: 'polygon(0 85%, 55% 15%, 100% 45%, 100% 100%, 0 100%)',
          opacity: 0.8
        }} />
      </div>

      {/* Sand Ripples - Micro horizontal lines */}
      <div className="absolute bottom-[5%] w-full h-[15%]">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute h-[0.5px] bg-blue-600 opacity-20" style={{
            width: `${20 + Math.random() * 40}%`,
            left: `${Math.random() * 40}%`,
            top: `${i * 8}%`
          }} />
        ))}
      </div>

      {/* Fine Sand Texture - Tiny dots */}
      <div className="absolute bottom-0 w-full h-[30%] opacity-20" style={{
        backgroundImage: `radial-gradient(${ink} 0.5px, transparent 0)`,
        backgroundSize: '12px 3px'
      }} />
    </div>
  );
};

export default Dunes;
