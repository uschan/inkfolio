
import React from 'react';

const Monolith: React.FC = () => {
  const ink = '#111827'; // Carbon Grey
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Distant Moon - Perfect Circle */}
      <div className="absolute top-20 right-10 w-12 h-12 rounded-full border-[0.5px] border-gray-200" />
      
      {/* The Monolith - Sharp Rectangle */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-[75%] bg-white border border-gray-100 flex flex-col">
        {/* Front Face - Horizontal Hatching */}
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(0deg, ${ink} 0, ${ink} 1.2px, transparent 1.2px, transparent 3px)`,
          opacity: 0.8
        }} />
        {/* Side Face (Simulated with mask) */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 2px, transparent 2px, transparent 4px)`,
          clipPath: 'polygon(0 0, 15% 0, 15% 100%, 0 100%)'
        }} />
      </div>

      {/* Ground Plane - Geometric Grid */}
      <div className="absolute bottom-0 w-full h-24 opacity-10" style={{
        backgroundImage: `
          linear-gradient(90deg, ${ink} 1px, transparent 1px),
          linear-gradient(0deg, ${ink} 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
        transform: 'perspective(100px) rotateX(60deg)'
      }} />
    </div>
  );
};

export default Monolith;
