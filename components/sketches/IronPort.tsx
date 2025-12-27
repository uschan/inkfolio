
import React from 'react';

const IronPort: React.FC = () => {
  const ink = '#1f2937'; // Charcoal/Iron
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Background wash */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(0deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 10px)`
      }} />

      {/* Giant Crane Structure - Precision Hatching */}
      <div className="absolute left-1/4 w-[2px] h-[80%] bg-gray-300" />
      <div className="absolute left-[20%] right-[10%] top-[25%] h-[20px]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 3px)`,
          clipPath: 'polygon(0 0, 100% 20%, 100% 40%, 0 20%)'
        }} />
      </div>

      {/* Dock Silhouettes */}
      <div className="absolute bottom-0 w-full h-[30%]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 1.2px, transparent 1.2px, transparent 2px)`,
          clipPath: 'polygon(0 50%, 40% 50%, 45% 40%, 65% 40%, 70% 50%, 100% 50%, 100% 100%, 0 100%)'
        }} />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `repeating-linear-gradient(0deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 4px)`
        }} />
      </div>

      {/* Water with Oil Slick Texture */}
      <div className="absolute bottom-0 w-full h-[15%] opacity-20" style={{
        backgroundImage: `radial-gradient(${ink} 1px, transparent 0)`,
        backgroundSize: '15px 3px'
      }} />
    </div>
  );
};

export default IronPort;
