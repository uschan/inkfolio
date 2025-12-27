
import React from 'react';

const FractalCoast: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Background Water Wash */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(135deg, #1e3a8a 0, #1e3a8a 0.5px, transparent 0.5px, transparent 6px)`
      }} />

      {/* The Fractal Shoreline - Recursive Polygon Layers */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="absolute inset-0" style={{
          background: i === 0 ? '#1e293b' : 'transparent',
          backgroundImage: i > 0 ? `repeating-linear-gradient(${i * 60}deg, #1e293b 0, #1e293b 1px, transparent 1px, transparent 3px)` : 'none',
          clipPath: `polygon(0 ${100 - i * 5}%, ${20 + i * 5}% ${70 - i * 10}%, ${40 + i * 2}% ${85 - i * 5}%, ${70 - i * 5}% ${60 + i * 5}%, 100% ${80 - i * 5}%, 100% 100%, 0 100%)`,
          opacity: 1 - (i * 0.15)
        }} />
      ))}

      {/* Erosion Texture - Stippled Spray */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(#1e293b 0.8px, transparent 0)`,
        backgroundSize: '4px 4px',
        maskImage: 'linear-gradient(to top, black, transparent 40%)',
        WebkitMaskImage: 'linear-gradient(to top, black, transparent 40%)',
        opacity: 0.2
      }} />

      {/* Horizon Line */}
      <div className="absolute top-[60%] w-full h-[0.5px] bg-slate-200" />
    </div>
  );
};

export default FractalCoast;
