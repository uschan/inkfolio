
import React from 'react';

const AmberFields: React.FC = () => {
  const ink = '#92400e'; // Amber/Gold
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Sky Radiance */}
      <div className="absolute top-0 w-full h-1/2" style={{
        backgroundImage: `radial-gradient(circle at 50% 100%, transparent 60%, #fff9e6 100%)`
      }} />

      {/* Rolling Hills of Wheat */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className="absolute bottom-0 w-[150%] h-[60%]" style={{
          left: `${-25 + i * 5}%`,
          bottom: `${-10 + i * 8}%`,
          backgroundImage: `repeating-linear-gradient(${15 - i * 5}deg, ${ink} 0, ${ink} 0.8px, transparent 0.8px, transparent 4px)`,
          clipPath: 'ellipse(60% 40% at 50% 100%)',
          opacity: 0.3 + (i * 0.15)
        }} />
      ))}

      {/* Wind Motion - Curved Jitter Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute border-t-[0.5px] border-amber-900 rounded-full" style={{
            width: '100px',
            height: '40px',
            left: `${Math.random() * 100}%`,
            top: `${50 + Math.random() * 40}%`,
            transform: `rotate(${Math.random() * 20 - 10}deg)`
          }} />
        ))}
      </div>

      {/* Foreground Detail - Heavy Stippling */}
      <div className="absolute bottom-0 w-full h-[10%] opacity-40" style={{
        backgroundImage: `radial-gradient(${ink} 1.2px, transparent 0)`,
        backgroundSize: '3px 5px'
      }} />
    </div>
  );
};

export default AmberFields;
