
import React from 'react';

const VermilionRidge: React.FC = () => {
  const ink = '#991b1b'; // Deep Red/Vermilion
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden shadow-inner">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(45deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 6px)`
      }} />
      
      {/* Main Ridge */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(155deg, ${ink} 0, ${ink} 1px, transparent 1px, transparent 2px)`,
          clipPath: 'polygon(0% 60%, 40% 30%, 65% 55%, 100% 20%, 100% 100%, 0% 100%)'
        }} />
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `repeating-linear-gradient(25deg, ${ink} 0, ${ink} 1.2px, transparent 1.2px, transparent 3px)`,
          clipPath: 'polygon(0% 60%, 40% 30%, 65% 55%, 100% 20%, 100% 100%, 0% 100%)'
        }} />
      </div>

      {/* Shadow Crevices */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 0.8px, transparent 0.8px, transparent 1.5px)`,
          clipPath: 'polygon(35% 35%, 45% 50%, 40% 100%, 30% 60%)'
        }} />
      </div>

      {/* Surface Stippling */}
      <div className="absolute bottom-0 w-full h-[40%] opacity-20" style={{
        backgroundImage: `radial-gradient(${ink} 1px, transparent 0)`,
        backgroundSize: '4px 6px'
      }} />
    </div>
  );
};

export default VermilionRidge;
