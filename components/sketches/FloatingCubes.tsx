
import React from 'react';

const FloatingCubes: React.FC = () => {
  const ink = '#3730a3'; // Indigo
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden flex items-center justify-center">
      {/* Ambient Grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(30deg, ${ink} 1px, transparent 1px),
          linear-gradient(150deg, ${ink} 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />

      {/* Isometric Cubes */}
      {[...Array(4)].map((_, i) => (
        <div key={i} className="absolute" style={{
          left: `${20 + i * 15}%`,
          top: `${20 + i * 15}%`,
          width: '60px',
          height: '60px',
          transform: `rotateX(45deg) rotateZ(45deg)`
        }}>
          {/* Top Face */}
          <div className="absolute inset-0 border border-indigo-100" style={{
            backgroundImage: `repeating-linear-gradient(45deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 5px)`,
            opacity: 0.3
          }} />
          {/* Front Left */}
          <div className="absolute inset-0 border border-indigo-200" style={{
            transformOrigin: 'left',
            transform: 'rotateY(90deg)',
            backgroundImage: `repeating-linear-gradient(0deg, ${ink} 0, ${ink} 1.2px, transparent 1.2px, transparent 3px)`,
            opacity: 0.7
          }} />
          {/* Front Right */}
          <div className="absolute inset-0 border border-indigo-200" style={{
            transformOrigin: 'bottom',
            transform: 'rotateX(90deg)',
            backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 2px)`,
            opacity: 0.9
          }} />
        </div>
      ))}
    </div>
  );
};

export default FloatingCubes;
