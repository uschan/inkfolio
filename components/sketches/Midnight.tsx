
import React from 'react';

const Midnight: React.FC = () => {
  const ink = '#172554';
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Deep Night wash */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `repeating-linear-gradient(45deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 4px)`
      }} />
      
      {/* Moon Halo */}
      <div className="absolute top-12 left-12 w-20 h-20 rounded-full border-[0.5px] border-blue-200" />
      <div className="absolute top-14 left-14 w-16 h-16 rounded-full" style={{
        backgroundImage: `radial-gradient(circle at center, transparent 80%, #eee 100%)`
      }} />

      {/* Night Water - High Density Horizontal */}
      <div className="absolute bottom-0 w-full h-[45%]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 2px)`,
          opacity: 0.8
        }} />
        {/* Moonlight Path on water */}
        <div className="absolute inset-y-0 left-[20%] w-[30%] bg-white" style={{
          clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
          maskImage: 'linear-gradient(to bottom, white, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, white, transparent)',
          opacity: 0.9
        }} />
      </div>

      {/* Silhouetted Trees (Dots/Short Lines) */}
      <div className="absolute bottom-[45%] left-0 w-full flex justify-around items-end">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="w-[1.5px] bg-blue-950" style={{
            height: `${20 + Math.random() * 60}px`,
            opacity: 0.9
          }} />
        ))}
      </div>
    </div>
  );
};

export default Midnight;
