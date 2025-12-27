
import React from 'react';

const GlitchGarden: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden flex flex-col items-center">
      {/* Botanical Base - Fine Hatching */}
      <div className="w-24 h-[80%] bottom-0 absolute">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, #166534 0, #166534 0.5px, transparent 0.5px, transparent 4px)`,
          clipPath: 'polygon(50% 0, 100% 100%, 0 100%)'
        }} />
        
        {/* Leaf Structures */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="absolute w-20 h-4 border-b border-green-800/30" style={{
            top: `${i * 10}%`,
            left: i % 2 === 0 ? '50%' : '-50%',
            transform: `rotate(${i % 2 === 0 ? -30 : 30}deg)`,
            opacity: 0.4
          }} />
        ))}
      </div>

      {/* The Glitch - Horizontal Pixel Shifting */}
      {[...Array(15)].map((_, i) => (
        <div key={i} className="absolute w-full h-1 bg-white opacity-40 mix-blend-difference" style={{
          top: `${Math.random() * 100}%`,
          transform: `translateX(${Math.random() * 10 - 5}px)`
        }} />
      ))}

      {/* Chromatic Aberration - Ghost Outlines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 translate-x-[2px] bg-red-500 mix-blend-screen mask-image" style={{
           backgroundImage: `radial-gradient(#000 1px, transparent 0)`,
           backgroundSize: '10px 10px'
        }} />
      </div>

      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `
          linear-gradient(#000 1px, transparent 1px),
          linear-gradient(90deg, #000 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
    </div>
  );
};

export default GlitchGarden;
