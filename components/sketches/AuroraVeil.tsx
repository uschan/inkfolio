
import React from 'react';

const AuroraVeil: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[400px] bg-[#020617] overflow-hidden flex items-end">
      {/* Aurora Layers - Multi-blur Gradients */}
      <div className="absolute inset-0 opacity-40 blur-[50px] mix-blend-screen">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 100%, #10b981 0%, transparent 70%)'
        }} />
        <div className="absolute inset-0 translate-y-10" style={{
          background: 'radial-gradient(ellipse at 30% 100%, #3b82f6 0%, transparent 70%)'
        }} />
      </div>

      {/* The Veil - Vertical "Magnets" */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(60)].map((_, i) => (
          <div key={i} className="absolute w-[0.5px] bg-emerald-100" style={{
            left: `${i * 1.6}%`,
            height: `${60 + Math.sin(i / 5) * 30}%`,
            opacity: 0.1 + Math.random() * 0.4,
            bottom: '0'
          }} />
        ))}
      </div>

      {/* Grain Surface - Analog Texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      {/* Silhouetted Landscape */}
      <div className="absolute bottom-0 w-full h-12 bg-black opacity-90" style={{
        clipPath: 'polygon(0 80%, 15% 40%, 30% 70%, 50% 20%, 75% 60%, 100% 30%, 100% 100%, 0 100%)'
      }} />
    </div>
  );
};

export default AuroraVeil;
