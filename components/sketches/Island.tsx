
import React from 'react';

const Island: React.FC = () => {
  const ink = '#1e40af';
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden flex flex-col justify-center items-center">
      {/* Horizon Detail */}
      <div className="absolute top-[62%] w-[80%] h-[0.5px] bg-blue-100" />
      
      {/* The Central Rock - Generative texture */}
      <div className="w-36 h-28 relative">
        {/* Layer 1: Diagonal */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${ink} 0, ${ink} 1.2px, transparent 1.2px, transparent 2.5px)`,
          clipPath: 'polygon(25% 15%, 75% 5%, 95% 85%, 5% 90%)'
        }} />
        {/* Layer 2: Counter-Diagonal */}
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: `repeating-linear-gradient(135deg, ${ink} 0, ${ink} 1.5px, transparent 1.5px, transparent 4px)`,
          clipPath: 'polygon(30% 20%, 70% 10%, 90% 80%, 10% 85%)'
        }} />
        {/* Layer 3: Pitted surface dots */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(${ink} 1px, transparent 0)`,
          backgroundSize: '5px 5px',
          opacity: 0.3
        }} />
      </div>

      {/* Sea Texture - Broken concentric lines */}
      <div className="absolute top-[68%] w-full h-[25%] opacity-40">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="absolute h-[1px] bg-blue-800" style={{
            width: `${15 + i * 5}%`,
            left: `${50 - (7.5 + i * 2.5)}%`,
            top: `${i * 6}%`,
            opacity: 1 - (i / 15),
            borderRadius: '50% / 10%'
          }} />
        ))}
      </div>

      {/* Shoreline Foam - Fine stippling */}
      <div className="absolute bottom-[20%] w-[60%] h-8" style={{
        backgroundImage: `radial-gradient(${ink} 0.5px, transparent 0)`,
        backgroundSize: '2px 2px',
        maskImage: 'radial-gradient(ellipse, black, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse, black, transparent 70%)',
        opacity: 0.2
      }} />
    </div>
  );
};

export default Island;
