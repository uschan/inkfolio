
import React from 'react';

const AmethystNight: React.FC = () => {
  const ink = '#581c87'; // Deep Purple
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Cosmic Void - Violet Wash */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `repeating-linear-gradient(45deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 2px)`
      }} />

      {/* Nebula Stippling - Radial clusters */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-48 h-48 rounded-full opacity-30" style={{
        backgroundImage: `radial-gradient(${ink} 1px, transparent 0)`,
        backgroundSize: '4px 4px',
        maskImage: 'radial-gradient(circle, black, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(circle, black, transparent 70%)'
      }} />

      {/* Alien Hills - High Contrast Cross Hatching */}
      <div className="absolute bottom-0 w-full h-[40%]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(165deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 2px)`,
          clipPath: 'polygon(0 70%, 30% 40%, 60% 80%, 100% 30%, 100% 100%, 0 100%)'
        }} />
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `repeating-linear-gradient(75deg, ${ink} 0, ${ink} 1.5px, transparent 1.5px, transparent 3px)`,
          clipPath: 'polygon(0 70%, 30% 40%, 60% 80%, 100% 30%, 100% 100%, 0 100%)'
        }} />
      </div>

      {/* Falling Stars - Fine short strokes */}
      {[...Array(10)].map((_, i) => (
        <div key={i} className="absolute w-[1px] bg-purple-200" style={{
          height: '15px',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 40}%`,
          transform: `rotate(-45deg)`,
          opacity: 0.8
        }} />
      ))}
    </div>
  );
};

export default AmethystNight;
