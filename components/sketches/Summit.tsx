
import React from 'react';

const Summit: React.FC = () => {
  const ink = '#0f172a';
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Sky Hatching */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 6px)`
      }} />

      {/* Main Mountain Body - Multi-pass */}
      <div className="absolute inset-0">
        {/* Base Layer */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(135deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 2px)`,
          clipPath: 'polygon(50% 15%, 85% 90%, 15% 90%)'
        }} />
        
        {/* Shadow Side - Vertical Hatching */}
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: `repeating-linear-gradient(180deg, ${ink} 0, ${ink} 1.2px, transparent 1.2px, transparent 2.5px)`,
          clipPath: 'polygon(50% 15%, 62% 50%, 55% 90%, 15% 90%)'
        }} />

        {/* Highlight Cracks - Negative Space */}
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute bg-white" style={{
            width: '0.8px',
            height: `${5 + Math.random() * 20}px`,
            left: `${40 + Math.random() * 20}%`,
            top: `${30 + Math.random() * 50}%`,
            transform: `rotate(${Math.random() * 45}deg)`,
            opacity: 0.8
          }} />
        ))}
      </div>

      {/* Foreground Rocks - Stippled Detail */}
      <div className="absolute bottom-0 w-full h-[25%] flex justify-center items-end">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-12 h-8 mx-[-5px] relative" style={{
            backgroundImage: `repeating-linear-gradient(45deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 2px)`,
            clipPath: 'polygon(20% 20%, 80% 0%, 100% 100%, 0% 100%)',
            opacity: 0.9 - (i * 0.1)
          }} />
        ))}
      </div>
    </div>
  );
};

export default Summit;
