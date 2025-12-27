
import React from 'react';

const PetalStorm: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[400px] bg-[#fffbf2] overflow-hidden flex flex-wrap gap-4 p-4">
      {/* Atmospheric Blur */}
      <div className="absolute inset-0 bg-rose-50/30 blur-3xl" />

      {/* Storm of 400 CSS "Petals" */}
      {[...Array(400)].map((_, i) => (
        <div key={i} className="w-[1.5px] h-[1.5px] rounded-full bg-rose-900" style={{
          opacity: 0.1 + Math.random() * 0.5,
          transform: `translate(${Math.sin(i) * 150}px, ${Math.cos(i) * 200}px) rotate(${Math.random() * 360}deg)`,
          width: `${Math.random() * 3}px`
        }} />
      ))}

      {/* Hidden Structure - Large abstract branch */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(175deg, #4c0519 0, #4c0519 2px, transparent 2px, transparent 8px)`,
        clipPath: 'polygon(20% 0, 30% 0, 100% 100%, 90% 100%)'
      }} />

      {/* Ground Silt */}
      <div className="absolute bottom-0 w-full h-20" style={{
        backgroundImage: `radial-gradient(#4c0519 1px, transparent 0)`,
        backgroundSize: '2px 3px',
        opacity: 0.2
      }} />
    </div>
  );
};

export default PetalStorm;
