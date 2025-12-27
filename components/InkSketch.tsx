
import React from 'react';

interface Props {
  sceneType?: string;
}

// Fixed Error: Added return type and ensures the component returns a ReactNode
const InkSketch: React.FC<Props> = ({ sceneType = 'cove' }) => {
  const inkDark = '#1a365d';
  const inkMid = '#2b6cb0';
  const inkLight = '#63b3ed';

  const createHatching = (angle: number, density: string, color: string) => ({
    backgroundImage: `repeating-linear-gradient(${angle}deg, ${color} 0px, ${color} 0.8px, transparent 0.8px, transparent ${density})`
  });

  // Scene rendering logic
  const renderScene = () => {
    switch (sceneType) {
      case 'summit':
        return (
          <>
            <div className="absolute inset-0" style={{...createHatching(45, '4px', '#cbd5e0'), clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 30%)'}} />
            <div className="absolute inset-0" style={{...createHatching(155, '1.5px', inkDark), clipPath: 'polygon(50% 10%, 80% 80%, 20% 80%)'}} />
            <div className="absolute inset-0" style={{...createHatching(25, '2px', inkMid), clipPath: 'polygon(50% 10%, 65% 50%, 40% 60%, 20% 80%)'}} />
            <div className="absolute bottom-0 w-full h-1/4" style={createHatching(0, '3px', inkLight)} />
          </>
        );
      case 'midnight':
        return (
          <>
            <div className="absolute inset-0 bg-blue-950" />
            <div className="absolute top-10 right-10 w-24 h-24 bg-white rounded-full shadow-[0_0_20px_white]" />
            <div className="absolute inset-0" style={{...createHatching(0, '6px', '#ffffff22')}} />
            <div className="absolute bottom-0 w-full h-[40%] bg-blue-900" style={{...createHatching(0, '2px', '#ffffff44'), clipPath: 'ellipse(100% 50% at 50% 100%)'}} />
            <div className="absolute top-[60%] left-[20%] w-[60%] h-[20%] bg-white opacity-20 blur-xl" />
          </>
        );
      case 'forest':
        return (
          <>
            <div className="absolute inset-0" style={createHatching(90, '3px', '#eee')} />
            {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute bottom-0" style={{
                left: `${i * 15}%`,
                width: '10%',
                height: `${40 + Math.random() * 40}%`,
                ...createHatching(90, '2px', inkDark),
                clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'
              }} />
            ))}
            <div className="absolute inset-0" style={{...createHatching(45, '4px', inkMid), clipPath: 'polygon(0 80%, 100% 70%, 100% 100%, 0 100%)'}} />
          </>
        );
      case 'canyon':
        return (
          <>
            <div className="absolute left-0 w-[40%] h-full" style={{...createHatching(95, '1.5px', inkDark), clipPath: 'polygon(0 0, 100% 10%, 80% 90%, 0 100%)'}} />
            {/* Fixed Error on line 59: Ensuring className is a string and not a boolean result */}
            <div className="absolute right-0 w-[40%] h-full" style={{...createHatching(85, '1.5px', inkDark), clipPath: 'polygon(20% 10%, 100% 0, 100% 100%, 0 90%)'}} />
          </>
        );
      case 'cove':
      default:
        return (
          <>
            <div className="absolute inset-0" style={{...createHatching(90, '5px', '#f7fafc'), clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 40%)'}} />
            <div className="absolute inset-0" style={{...createHatching(145, '2px', inkDark), clipPath: 'polygon(10% 40%, 40% 25%, 60% 35%, 85% 45%, 10% 45%)'}} />
            <div className="absolute inset-0 top-[45%]" style={createHatching(0, '4px', inkMid)} />
          </>
        );
    }
  };

  // Fixed Error: Added the main return statement for the InkSketch component
  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      {renderScene()}
    </div>
  );
};

export default InkSketch;
