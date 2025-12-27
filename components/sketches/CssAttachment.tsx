
import React from 'react';

const CssAttachment: React.FC = () => {
  const ink = '#1e3a8a'; // Deep Blue Ink
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden flex items-center justify-center">
      {/* Background Texture Wash */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(45deg, ${ink} 0, ${ink} 0.5px, transparent 0.5px, transparent 10px)`
      }} />

      {/* The File Icon Document */}
      <div className="relative w-48 h-64 bg-slate-50 border-2 border-blue-900/80 shadow-[10px_10px_0px_rgba(30,58,138,0.1)]">
        
        {/* Folded Corner Effect (Pure CSS) */}
        <div className="absolute -top-[2px] -right-[2px] w-12 h-12 bg-white border-b-2 border-l-2 border-blue-900/80 overflow-hidden z-10">
             {/* Hatching inside the fold */}
             <div className="absolute inset-0" style={{
                 backgroundImage: `repeating-linear-gradient(-45deg, ${ink} 0, ${ink} 0.8px, transparent 0.8px, transparent 3px)`,
                 opacity: 0.2
             }}/>
        </div>
        {/* Triangle to hide the document corner under the fold */}
        <div className="absolute -top-[2px] -right-[2px] w-12 h-12 bg-slate-50 border-b-2 border-l-2 border-transparent" style={{
             clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)'
        }}/>

        {/* Image Area: Mountain & Sun Landscape */}
        <div className="absolute top-8 left-4 right-4 h-28 border border-blue-900/30 bg-white overflow-hidden">
            {/* Sun: Radial Gradient */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-blue-900/50" style={{
                 backgroundImage: `radial-gradient(${ink} 1px, transparent 0)`,
                 backgroundSize: '2px 2px',
                 opacity: 0.4
            }}/>
            
            {/* Mountain 1: CSS Clip-path + Hatching */}
            <div className="absolute bottom-0 left-[-10%] w-24 h-16 bg-blue-900" style={{
                 clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                 backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, #fff 2px, #fff 2.5px)`,
                 opacity: 0.8
            }}/>
            
            {/* Mountain 2: Overlap */}
            <div className="absolute bottom-0 left-10 w-20 h-20 bg-blue-800" style={{
                 clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                 backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 2px, #fff 2px, #fff 2.5px)`,
                 opacity: 0.6
            }}/>
        </div>

        {/* Text Lines: Linear Gradients */}
        <div className="absolute top-40 left-4 right-4 flex flex-col gap-3">
             <div className="h-3 w-1/3 bg-blue-900/20 mb-2" /> {/* Title line */}
             {[...Array(4)].map((_, i) => (
                 <div key={i} className="h-[2px] bg-blue-900" style={{
                     width: `${90 + Math.random() * 10}%`,
                     opacity: 0.3 - (i * 0.05)
                 }}/>
             ))}
             <div className="h-[2px] bg-blue-900 w-2/3 opacity-20" />
        </div>
        
        {/* Signature Stamp */}
        <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-blue-900/40 flex items-center justify-center opacity-50">
            <span className="text-[8px] font-bold text-blue-900">CSS</span>
        </div>
      </div>
    </div>
  );
};

export default CssAttachment;
