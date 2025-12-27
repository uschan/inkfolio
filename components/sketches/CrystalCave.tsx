
import React from 'react';

const CrystalCave: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[400px] bg-[#020617] overflow-hidden flex items-end justify-center">
      {/* Background Depth - Radial Gradient */}
      <div className="absolute inset-0 bg-[#0f172a]">
        <div className="absolute inset-0 opacity-30" style={{
            background: 'radial-gradient(circle at 50% 0%, #4338ca 0%, transparent 60%)'
        }} />
      </div>

      {/* Hanging Stalactites (Top) */}
      <div className="absolute top-0 w-full h-[40%]">
          {[...Array(5)].map((_, i) => (
             <div key={`stal-${i}`} className="absolute top-0 bg-[#1e1b4b]" style={{
                 left: `${i * 20 + 5}%`,
                 width: `${10 + Math.random() * 20}px`,
                 height: `${40 + Math.random() * 80}px`,
                 clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                 opacity: 0.8
             }}>
                 {/* Internal Texture */}
                 <div className="absolute inset-0 opacity-20" style={{
                     backgroundImage: `repeating-linear-gradient(90deg, #fff 0, #fff 0.5px, transparent 0.5px, transparent 2px)`
                 }} />
             </div>
          ))}
      </div>

      {/* Main Crystal Structures (Bottom) */}
      <div className="relative w-full h-[70%]">
          {/* Back Layer Crystals */}
          <div className="absolute bottom-0 left-[10%] w-[40%] h-[60%] bg-[#312e81] opacity-60" style={{
              clipPath: 'polygon(20% 0, 80% 20%, 100% 100%, 0% 100%)'
          }} />
          <div className="absolute bottom-0 right-[15%] w-[30%] h-[50%] bg-[#3730a3] opacity-60" style={{
              clipPath: 'polygon(50% 0, 100% 100%, 0% 100%)'
          }} />

          {/* Hero Crystal 1 (Left) */}
          <div className="absolute bottom-0 left-[15%] w-[80px] h-[240px] z-10">
               {/* Shape */}
               <div className="absolute inset-0 bg-[#4f46e5]/20" style={{
                   clipPath: 'polygon(40% 0, 100% 30%, 80% 100%, 0 100%, 0 30%)',
                   background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(99,102,241,0.4))'
               }} />
               {/* Edges/Hatching */}
               <div className="absolute inset-0 opacity-30" style={{
                   clipPath: 'polygon(40% 0, 100% 30%, 80% 100%, 0 100%, 0 30%)',
                   backgroundImage: `repeating-linear-gradient(60deg, #fff 0, #fff 0.5px, transparent 0.5px, transparent 4px)`
               }} />
               {/* Highlight Facet */}
               <div className="absolute inset-0 bg-white/10" style={{
                   clipPath: 'polygon(40% 0, 60% 100%, 0 30%)'
               }} />
          </div>

          {/* Hero Crystal 2 (Center-Right) */}
          <div className="absolute bottom-0 left-[45%] w-[100px] h-[300px] z-20">
               <div className="absolute inset-0 bg-[#6366f1]/20" style={{
                   clipPath: 'polygon(60% 0, 100% 40%, 90% 100%, 10% 100%, 0 30%)',
                   background: 'linear-gradient(160deg, rgba(255,255,255,0.2), rgba(79,70,229,0.5))'
               }} />
               <div className="absolute inset-0 opacity-30" style={{
                   clipPath: 'polygon(60% 0, 100% 40%, 90% 100%, 10% 100%, 0 30%)',
                   backgroundImage: `repeating-linear-gradient(-30deg, #fff 0, #fff 0.5px, transparent 0.5px, transparent 5px)`
               }} />
               {/* Actual facet overlay */}
               <div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay" style={{
                    clipPath: 'polygon(60% 0, 100% 40%, 60% 100%)'
               }} />
          </div>

          {/* Foreground Shards */}
          <div className="absolute bottom-0 right-[5%] w-[60px] h-[120px] z-30">
               <div className="absolute inset-0 bg-[#818cf8]/30" style={{
                   clipPath: 'polygon(30% 0, 100% 100%, 0 100%)'
               }} />
                <div className="absolute inset-0 opacity-40" style={{
                   clipPath: 'polygon(30% 0, 100% 100%, 0 100%)',
                   backgroundImage: `repeating-linear-gradient(0deg, #fff 0, #fff 0.5px, transparent 0.5px, transparent 3px)`
               }} />
          </div>
      </div>

      {/* Floating Particles/Glints */}
      <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
             <div key={i} className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_4px_white]" style={{
                 top: `${20 + Math.random() * 60}%`,
                 left: `${10 + Math.random() * 80}%`,
                 opacity: 0.4 + Math.random() * 0.6,
                 animation: `pulse ${2 + Math.random()}s infinite`
             }} />
          ))}
      </div>
    </div>
  );
};

export default CrystalCave;
