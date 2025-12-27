
import React from 'react';

const Valley: React.FC = () => {
  const ink = '#1e3a8a';
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Background Atmosphere - Vertical Lines */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 8px)`
      }} />

      {/* Rolling Hills - Generative Contour */}
      {/* Hill 1 */}
      <div className="absolute bottom-0 w-full h-[65%]" style={{
        backgroundImage: `repeating-linear-gradient(35deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 5px)`,
        clipPath: 'ellipse(110% 65% at 0% 100%)',
        opacity: 0.7
      }} />
      {/* Hill 2 (Intersecting) */}
      <div className="absolute bottom-0 w-full h-[55%]" style={{
        backgroundImage: `repeating-linear-gradient(-35deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 5px)`,
        clipPath: 'ellipse(110% 65% at 100% 100%)',
        opacity: 0.7
      }} />

      {/* Shaded Hollows - Double Hatching */}
      <div className="absolute bottom-0 left-[20%] right-[20%] h-[30%] opacity-40" style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 3px)`,
        clipPath: 'ellipse(50% 100% at 50% 100%)'
      }} />

      {/* Foreground Vegetation - Thousands of micro-strokes */}
      <div className="absolute bottom-0 w-full h-[12%] opacity-80">
        {[...Array(60)].map((_, i) => (
          <div key={i} className="absolute w-[0.8px] bg-blue-900" style={{
            height: `${8 + Math.random() * 20}px`,
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 15}%`,
            transform: `rotate(${Math.random() * 40 - 20}deg)`,
            opacity: 0.4 + Math.random() * 0.6
          }} />
        ))}
      </div>
      
      {/* Detail Stippling */}
      <div className="absolute bottom-4 inset-x-0 h-10" style={{
        backgroundImage: `radial-gradient(${ink} 1px, transparent 0)`,
        backgroundSize: '6px 4px',
        opacity: 0.3
      }} />
    </div>
  );
};

export default Valley;
