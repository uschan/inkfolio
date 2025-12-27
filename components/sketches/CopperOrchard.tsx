
import React from 'react';

const CopperOrchard: React.FC = () => {
  const ink = '#78350f'; // Copper/Brown
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Ground Layer */}
      <div className="absolute bottom-0 w-full h-[20%] opacity-40" style={{
        backgroundImage: `repeating-linear-gradient(45deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 4px)`
      }} />

      {/* Trees - Generative Structure */}
      {[...Array(3)].map((_, i) => (
        <div key={i} className="absolute bottom-[15%] h-[70%]" style={{
          left: `${20 + i * 25}%`,
          width: '4px'
        }}>
          {/* Trunk */}
          <div className="absolute inset-0 bg-amber-900 opacity-60" style={{
            clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0 100%)'
          }} />
          {/* Foliage - Concentrated Dots */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-32 opacity-80" style={{
            backgroundImage: `radial-gradient(${ink} 1.5px, transparent 0)`,
            backgroundSize: '4px 6px',
            maskImage: 'radial-gradient(circle, black, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle, black, transparent 80%)'
          }} />
        </div>
      ))}

      {/* Falling Leaves - Sparse Stippling */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(${ink} 1px, transparent 0)`,
        backgroundSize: '20px 30px'
      }} />
    </div>
  );
};

export default CopperOrchard;
