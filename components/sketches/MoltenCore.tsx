
import React from 'react';

const MoltenCore: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[400px] bg-[#450a0a] overflow-hidden flex items-center justify-center">
      {/* The Glow */}
      <div className="absolute w-64 h-64 rounded-full bg-[#f87171] blur-[60px] opacity-20" />
      
      {/* Core Structure - Interlocking Rings */}
      {[...Array(12)].map((_, i) => (
        <div key={i} className="absolute border border-[#fca5a511] rounded-full" style={{
          width: `${100 + i * 20}px`,
          height: `${100 + i * 20}px`,
          transform: `rotateX(60deg) rotateY(${i * 10}deg)`
        }} />
      ))}

      {/* Intensive Heat Hatching */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #ef4444 0, #ef4444 0.5px, transparent 0.5px, transparent 3px)`
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, #ef4444 0, #ef4444 0.5px, transparent 0.5px, transparent 3px)`
        }} />
      </div>

      {/* Incandescent Sparkle */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(#fef08a 1px, transparent 0)`,
        backgroundSize: '8px 12px',
        opacity: 0.1
      }} />

      {/* Inner Core */}
      <div className="w-16 h-16 rounded-full bg-[#fca5a5] blur-[2px] shadow-[0_0_40px_#ef4444]" />
    </div>
  );
};

export default MoltenCore;
