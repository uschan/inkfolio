
import React from 'react';

const Canyon: React.FC = () => {
  const ink = '#1e3a8a';
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Atmospheric Perspective */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(${ink} 0.5px, transparent 0)`,
        backgroundSize: '10px 10px'
      }} />

      {/* Sedimentary Layers - Multi-angle jitter */}
      <div className="absolute left-0 w-[46%] h-full">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(1.5deg, ${ink} 0, ${ink} 0.8px, transparent 0.8px, transparent 4px)`,
          clipPath: 'polygon(0% 0%, 100% 5%, 85% 95%, 0% 100%)'
        }} />
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `repeating-linear-gradient(-1deg, ${ink} 0, ${ink} 1.2px, transparent 1.2px, transparent 3px)`,
          clipPath: 'polygon(0% 5%, 95% 10%, 80% 90%, 0% 95%)'
        }} />
      </div>

      <div className="absolute right-0 w-[46%] h-full">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(-1.5deg, ${ink} 0, ${ink} 0.8px, transparent 0.8px, transparent 4.5px)`,
          clipPath: 'polygon(15% 5%, 100% 0%, 100% 100%, 25% 95%)'
        }} />
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `repeating-linear-gradient(1deg, ${ink} 0, ${ink} 1.2px, transparent 1.2px, transparent 3.5px)`,
          clipPath: 'polygon(20% 10%, 100% 5%, 100% 95%, 30% 90%)'
        }} />
      </div>

      {/* The Deep Gap - Intense cross-hatching */}
      <div className="absolute left-[40%] right-[40%] h-full">
        <div className="absolute inset-0 bg-blue-50 opacity-10" />
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 2px)`,
          opacity: 0.2
        }} />
      </div>

      {/* Dust/Mist stippling at floor */}
      <div className="absolute bottom-5 left-1/4 right-1/4 h-12" style={{
        backgroundImage: `radial-gradient(${ink} 0.8px, transparent 0)`,
        backgroundSize: '3px 3px',
        opacity: 0.3
      }} />
    </div>
  );
};

export default Canyon;
