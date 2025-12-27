
import React from 'react';

const CausticDepths: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[400px] bg-[#082f49] overflow-hidden">
      {/* Deep Sea Gradients */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, #0e7490, #082f49)'
      }} />

      {/* Caustic Network - Complex Gradient Layering */}
      <div className="absolute inset-0 opacity-40 mix-blend-overlay">
        {[...Array(3)].map((_, layer) => (
          <div key={layer} className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, transparent 0, #fff2 1px, transparent 2px),
              radial-gradient(circle at 30% 70%, transparent 0, #fff2 1.5px, transparent 3px)
            `,
            backgroundSize: `${40 + layer * 20}px ${40 + layer * 20}px`,
            transform: `rotate(${layer * 120}deg) scale(${1 + layer * 0.2})`,
            filter: 'blur(1px)'
          }} />
        ))}
      </div>

      {/* Floating Particles - Silt */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(#fff 0.5px, transparent 0)`,
        backgroundSize: '24px 32px',
        opacity: 0.1
      }} />

      {/* Sun Rays - Top Down */}
      <div className="absolute top-0 w-full h-full opacity-20" style={{
        backgroundImage: `repeating-linear-gradient(110deg, transparent 0, transparent 40px, #fff 41px, transparent 42px)`,
        maskImage: 'linear-gradient(to bottom, black, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'
      }} />
    </div>
  );
};

export default CausticDepths;
