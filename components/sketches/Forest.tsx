
import React from 'react';

const Forest: React.FC = () => {
  const ink = '#082f49';
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Background noise */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(${ink} 1px, transparent 0)`,
        backgroundSize: '10px 10px'
      }} />

      {/* Infinite Trees */}
      {[...Array(30)].map((_, i) => {
        const height = 60 + Math.random() * 40;
        const left = (i / 30) * 100;
        const width = 0.5 + Math.random() * 2;
        return (
          <div key={i} className="absolute bottom-0" style={{
            left: `${left}%`,
            width: `${width}px`,
            height: `${height}%`,
            background: `linear-gradient(to right, ${ink} 30%, transparent 30% 70%, ${ink} 70%)`,
            opacity: 0.3 + (height / 100) * 0.7
          }}>
            {/* Branches - Small diagonal lines */}
            {[...Array(5)].map((__, j) => (
              <div key={j} className="absolute w-4 h-[0.5px] bg-blue-900" style={{
                top: `${j * 15}%`,
                left: j % 2 === 0 ? '100%' : '-200%',
                transform: `rotate(${j % 2 === 0 ? -20 : 20}deg)`,
                opacity: 0.4
              }} />
            ))}
          </div>
        );
      })}

      {/* Ground Foliage - Stippling Clusters */}
      <div className="absolute bottom-0 w-full h-[15%]" style={{
        backgroundImage: `radial-gradient(${ink} 1.2px, transparent 0)`,
        backgroundSize: '3px 5px',
        opacity: 0.6
      }} />
      
      {/* Overlapping Bottom Shading */}
      <div className="absolute bottom-0 w-full h-[10%]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 3px)`,
        opacity: 0.4
      }} />
    </div>
  );
};

export default Forest;
