
import React from 'react';

const TheGateway: React.FC = () => {
  const ink = '#dc2626'; // Bright Red
  return (
    <div className="relative w-[300px] h-[400px] bg-white overflow-hidden">
      {/* Background Stippling */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(${ink} 1px, transparent 0)`,
        backgroundSize: '15px 15px'
      }} />

      {/* The Torii-like Structure */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Top Beam */}
        <div className="w-56 h-6 rounded-sm mb-2 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 1.2px, transparent 1.2px, transparent 4px)`,
            opacity: 0.8
          }} />
        </div>
        {/* Second Beam */}
        <div className="w-48 h-4 rounded-sm mb-8 relative overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(90deg, ${ink} 0, ${ink} 0.8px, transparent 0.8px, transparent 3px)`,
            opacity: 0.6
          }} />
        </div>
        {/* Vertical Posts */}
        <div className="flex justify-between w-32 h-48">
          {[0, 1].map(i => (
            <div key={i} className="w-4 h-full relative overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(0deg, ${ink} 0, ${ink} 1.5px, transparent 1.5px, transparent 3px)`,
                opacity: 0.8
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* Foundation Line */}
      <div className="absolute bottom-[20%] w-full h-[1px] bg-gray-200" />
    </div>
  );
};

export default TheGateway;
