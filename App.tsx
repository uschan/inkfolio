
import React, { useState, useEffect, useRef } from 'react';
import Cove from './components/sketches/Cove';
import Summit from './components/sketches/Summit';
import Midnight from './components/sketches/Midnight';
import Forest from './components/sketches/Forest';
import Canyon from './components/sketches/Canyon';
import Island from './components/sketches/Island';
import Storm from './components/sketches/Storm';
import Cliffs from './components/sketches/Cliffs';
import Valley from './components/sketches/Valley';
import Dunes from './components/sketches/Dunes';

// Series 2
import VermilionRidge from './components/sketches/VermilionRidge';
import JadeFen from './components/sketches/JadeFen';
import IronPort from './components/sketches/IronPort';
import AmberFields from './components/sketches/AmberFields';
import CobaltGlacier from './components/sketches/CobaltGlacier';
import OchreMesa from './components/sketches/OchreMesa';
import AmethystNight from './components/sketches/AmethystNight';
import CarbonSpire from './components/sketches/CarbonSpire';
import CopperOrchard from './components/sketches/CopperOrchard';
import SlateCoast from './components/sketches/SlateCoast';

// Series 3
import SolarDisc from './components/sketches/SolarDisc';
import Monolith from './components/sketches/Monolith';
import TetrahedralPeak from './components/sketches/TetrahedralPeak';
import CircularRipple from './components/sketches/CircularRipple';
import TheGateway from './components/sketches/TheGateway';
import FloatingCubes from './components/sketches/FloatingCubes';
import MosaicGarden from './components/sketches/MosaicGarden';
import PrismLight from './components/sketches/PrismLight';
import GridCity from './components/sketches/GridCity';
import OrbOfFog from './components/sketches/OrbOfFog';

// Series 4
import NebulaLoom from './components/sketches/NebulaLoom';
import CausticDepths from './components/sketches/CausticDepths';
import CyberZen from './components/sketches/CyberZen';
import PetalStorm from './components/sketches/PetalStorm';
import CrystalCave from './components/sketches/CrystalCave';
import AuroraVeil from './components/sketches/AuroraVeil';
import VoidBloom from './components/sketches/VoidBloom';
import MoltenCore from './components/sketches/MoltenCore';
import FractalCoast from './components/sketches/FractalCoast';
import GlitchGarden from './components/sketches/GlitchGarden';
import CssAttachment from './components/sketches/CssAttachment';

// --- Types ---
interface Artwork {
  id: number;
  title: string;
  desc: string;
  component: React.ReactNode;
  specs: string[];
}

interface SeriesConfig {
  id: string;
  title: string;
  subtitle: string;
  bgText: string;
  startIndex: number;
  endIndex: number;
}

// --- Animation Components ---
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      {children}
    </div>
  );
};

const CustomCursor = ({ isDark }: { isDark: boolean }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div ref={cursorRef} className={`fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[9999] transition-colors duration-500 mix-blend-difference border-white`} />
  );
};

// --- Main App ---
const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allArt: Artwork[] = [
    // Series 4
    { id: 0, title: "The Attachment", desc: "Pure CSS Iconography.", component: <CssAttachment />, specs: ["Clip-path Geometry", "Linear Gradients", "Box Model"] },
    { id: 1, title: "Caustic Depths", desc: "Underwater light simulation.", component: <CausticDepths />, specs: ["Overlay Gradients", "CSS Masking", "Procedural Caustics"] },
    { id: 2, title: "Cyber Zen", desc: "Neon minimalism.", component: <CyberZen />, specs: ["Neon Effects", "Carbon Wash", "Geometric Contrast"] },
    { id: 3, title: "Petal Storm", desc: "Dynamic pointillism.", component: <PetalStorm />, specs: ["400 Particles", "Transform-GPU", "Chaos Theory"] },
    { id: 4, title: "Crystal Cave", desc: "Geometric refraction study.", component: <CrystalCave />, specs: ["3D Transforms", "Backdrop Filter", "Angular Shadowing"] },
    { id: 5, title: "Aurora Veil", desc: "Magnetism in color.", component: <AuroraVeil />, specs: ["Radial Gradients", "Diffuse Grain", "Clip-path Geometry"] },
    { id: 6, title: "Void Bloom", desc: "Nature in the negative.", component: <VoidBloom />, specs: ["Negative Space", "Circular Masking", "Shadow Blooms"] },
    { id: 7, title: "Molten Core", desc: "Radiative heat study.", component: <MoltenCore />, specs: ["Incandescent Gradients", "Heat Hatching", "Core Glow"] },
    { id: 8, title: "Fractal Coast", desc: "Recursive shoreline study.", component: <FractalCoast />, specs: ["Recursive Polygons", "Erosion Textures", "Coast Strata"] },
    { id: 9, title: "Glitch Garden", desc: "Digital botanical study.", component: <GlitchGarden />, specs: ["Pixel Corruption", "Botanical Precision", "Chromatic Aberration"] },
    
    // Series 3
    { id: 10, title: "Solar Disc", desc: "Geometry meets organic decay.", component: <SolarDisc />, specs: ["Radial Conic Gradients", "Golden Ratio", "Orbital CSS"] },
    { id: 11, title: "Monolith", desc: "Brutalist silence.", component: <Monolith />, specs: ["Rectangular Hatching", "Perspective Transform", "Clip-path Shading"] },
    { id: 12, title: "Tetrahedral Peak", desc: "Abstract mountains.", component: <TetrahedralPeak />, specs: ["Polygon Masking", "Chaotic Scribble", "Linear Gradients"] },
    { id: 13, title: "Circular Ripple", desc: "Concentric ellipses.", component: <CircularRipple />, specs: ["Border Radius", "Opacity Layering", "Interference Patterns"] },
    { id: 14, title: "The Gateway", desc: "Architectural framing.", component: <TheGateway />, specs: ["Wood Grain Hatching", "Flex Layout", "Box Shadow"] },
    { id: 15, title: "Floating Cubes", desc: "Isometric perspective.", component: <FloatingCubes />, specs: ["RotateX/Y/Z", "Cross-hatched Planes", "Grid Background"] },
    { id: 16, title: "Mosaic Garden", desc: "Segmented flora.", component: <MosaicGarden />, specs: ["Rotational Transform", "Stippled Centers", "Pattern Repetition"] },
    { id: 17, title: "Prism Light", desc: "Refracted ink.", component: <PrismLight />, specs: ["Thin Linear Gradients", "Color Blending", "Ray Tracing Simulation"] },
    { id: 18, title: "Grid City", desc: "Urban grid study.", component: <GridCity />, specs: ["Randomized Heights", "Unique Hatch Angles", "Perspective Lines"] },
    { id: 19, title: "Orb of Fog", desc: "Soft boundary geometry.", component: <OrbOfFog />, specs: ["Radial Blur", "Sharp Shards", "Transparency"] },

    // Series 2
    { id: 20, title: "Vermilion Ridge", desc: "Warm pigment hatching.", component: <VermilionRidge />, specs: ["Deep Red Palette", "Cross-hatching", "Shadow Crevices"] },
    { id: 21, title: "Jade Fen", desc: "Verdant marshland.", component: <JadeFen />, specs: ["Vertical Strokes", "Randomized Reeds", "Stippled Clumps"] },
    { id: 22, title: "Iron Port", desc: "Industrial geometry.", component: <IronPort />, specs: ["Charcoal Density", "Precision Lines", "Oil Slick Texture"] },
    { id: 23, title: "Amber Fields", desc: "Golden harvest flow.", component: <AmberFields />, specs: ["Curved Jitter Lines", "Wind Motion", "Radiance Gradients"] },
    { id: 24, title: "Cobalt Glacier", desc: "Cold angles.", component: <CobaltGlacier />, specs: ["Sharp Polygons", "Minimal Dot Density", "Frost Texture"] },
    { id: 25, title: "Ochre Mesa", desc: "Earth-tone layers.", component: <OchreMesa />, specs: ["High-jitter Lines", "Sedimentary Layers", "Scrub Brush Dots"] },
    { id: 26, title: "Amethyst Night", desc: "Cosmic void study.", component: <AmethystNight />, specs: ["Violet Wash", "Radial Stippling", "Star Particles"] },
    { id: 27, title: "Carbon Spire", desc: "Architectural hatching.", component: <CarbonSpire />, specs: ["Intense Blacks", "Verticality", "Rubble Texture"] },
    { id: 28, title: "Copper Orchard", desc: "Autumnal decay.", component: <CopperOrchard />, specs: ["Branch Structures", "Foliage Dots", "Falling Leaves"] },
    { id: 29, title: "Slate Coast", desc: "Stormy waves.", component: <SlateCoast />, specs: ["Broken Kinetic Lines", "Spray Stippling", "Diagonal Rain"] },

    // Series 1
    { id: 30, title: "Low Tide Cove", desc: "Coastal layer study.", component: <Cove />, specs: ["Fine-point Pen", "Layered Opacity", "Organic Shapes"] },
    { id: 31, title: "Granite Summit", desc: "Mountain peaks.", component: <Summit />, specs: ["Short Vertical Strokes", "Highlight Cracks", "Negative Space"] },
    { id: 32, title: "Lake Reflection", desc: "Midnight glow.", component: <Midnight />, specs: ["Deep Blue Wash", "Reflection Masking", "Moon Halo"] },
    { id: 33, title: "Deep Grove", desc: "Forest depth.", component: <Forest />, specs: ["Stroke Thickness Variation", "Gradient Fade", "Infinite Trees"] },
    { id: 34, title: "Strata Canyon", desc: "Mechanical lines.", component: <Canyon />, specs: ["Thousands of Lines", "Atmospheric Perspective", "Sedimentary Clip-path"] },
    { id: 35, title: "Lonely Atoll", desc: "Rock detail.", component: <Island />, specs: ["Generative Texture", "Sea Ripples", "Foam Stippling"] },
    { id: 36, title: "Tempest Storm", desc: "Chaotic weather.", component: <Storm />, specs: ["Aggressive Layers", "Rain Sheets", "Turbulence"] },
    { id: 37, title: "Iron Cliffs", desc: "Dark stone contrast.", component: <Cliffs />, specs: ["Multi-directional Hatching", "Sea Spray Mask", "Debris Particles"] },
    { id: 38, title: "River Valley", desc: "Rolling hills.", component: <Valley />, specs: ["Contour Hatching", "Intersecting Ellipses", "Micro-strokes"] },
    { id: 39, title: "Whispering Dunes", desc: "Heat haze.", component: <Dunes />, specs: ["Sand Ripples", "Light/Shadow Sides", "Heat Distortion"] },
  ];

  const series: SeriesConfig[] = [
    { id: 'series4', title: 'The Resonance', subtitle: 'Volume IV: Synthetic Fluidity', bgText: 'SERIES-04', startIndex: 0, endIndex: 10 },
    { id: 'series3', title: 'The Structure', subtitle: 'Volume III: Geometric Rigor', bgText: 'SERIES-03', startIndex: 10, endIndex: 20 },
    { id: 'series2', title: 'The Palette', subtitle: 'Volume II: Chromatic Detail', bgText: 'SERIES-02', startIndex: 20, endIndex: 30 },
    { id: 'series1', title: 'The Origins', subtitle: 'Volume I: Pure Blue Ink', bgText: 'SERIES-01', startIndex: 30, endIndex: 40 },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${isDark ? 'bg-[#050b18] text-slate-300' : 'bg-[#f5f3ef] text-blue-950'} paper-texture font-sans cursor-none`}>
      <CustomCursor isDark={isDark} />
      
      {/* Scroll Progress Timeline */}
      <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-6 opacity-30 hover:opacity-100 transition-opacity">
        {series.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="typewriter text-[10px] group flex items-center gap-2">
            <span className="w-4 h-[1px] bg-current" />
            <span className="group-hover:text-blue-500 transition-colors">{s.bgText.split('-')[1]}</span>
          </a>
        ))}
      </aside>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4 backdrop-blur-xl border-b' : 'py-8'} ${isDark ? 'border-slate-800 bg-slate-950/40' : 'border-gray-200/50 bg-white/40'}`}>
        <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all group-hover:rotate-180 ${isDark ? 'border-blue-500 text-blue-400' : 'border-blue-900 text-blue-900'}`}>
              <span className="typewriter text-[10px]">∑</span>
            </div>
            <span className="handwriting text-3xl font-bold tracking-tighter">Ink Folio</span>
          </div>
          <div className="hidden lg:flex items-center gap-12 typewriter text-[9px] uppercase tracking-[0.4em] opacity-50">
            {series.map(s => (
              <a key={s.id} href={`#${s.id}`} className="hover:opacity-100 hover:text-blue-500 transition-all">{s.title.split(' ')[1]}</a>
            ))}
          </div>
          <button onClick={toggleTheme} className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl ${isDark ? 'bg-slate-800 text-yellow-400' : 'bg-white text-blue-950'}`}>
            {isDark ? '☼' : '☾'}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-10">
        <header className="h-screen flex flex-col items-center justify-center text-center">
          <Reveal>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 typewriter text-[22vw] font-black opacity-[0.015] select-none ${isDark ? 'text-white' : 'text-blue-950'}`}>GALLERY</div>
            <h1 className={`handwriting text-[14vw] mb-4 leading-none tracking-tighter ${isDark ? 'text-white' : 'text-blue-950'}`}>Wild Salt</h1>
            <p className="typewriter text-xs tracking-[1em] uppercase opacity-40">Digital Ink Archive &bull; Est. 2025</p>
          </Reveal>
        </header>

        {/* Dynamic Series Rendering */}
        {series.map((section) => (
          <section id={section.id} key={section.id} className="py-20 relative">
            <div className="relative mb-40 text-center overflow-hidden">
               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 typewriter text-[15vw] font-black uppercase tracking-widest opacity-[0.03] select-none pointer-events-none whitespace-nowrap ${isDark ? 'text-blue-500' : 'text-blue-900'}`}>
                {section.bgText}
              </div>
              <Reveal>
                <h2 className={`handwriting text-7xl md:text-9xl mb-4 relative z-10 transition-colors ${isDark ? 'text-blue-100' : 'text-blue-950'}`}>{section.title}</h2>
                <p className={`typewriter text-xs tracking-[0.8em] uppercase opacity-40 transition-colors ${isDark ? 'text-blue-400' : 'text-blue-900'}`}>{section.subtitle}</p>
                 <div className={`h-[2px] w-24 mx-auto mt-12 rounded-full bg-gradient-to-r from-transparent ${isDark ? 'via-blue-500' : 'via-blue-200'} to-transparent`} />
              </Reveal>
            </div>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-12">
              {allArt.slice(section.startIndex, section.endIndex).map((art, idx) => (
                <div key={art.id} onClick={() => setSelectedArt(art)} className="break-inside-avoid mb-16 cursor-zoom-in">
                  <GalleryItem index={idx} isDark={isDark} title={art.title} desc={art.desc}>
                    {art.component}
                  </GalleryItem>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Detail Modal */}
      {selectedArt && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-2xl" onClick={() => setSelectedArt(null)} />
          <div className={`relative w-full max-w-6xl h-full md:h-auto md:min-h-[600px] flex flex-col md:flex-row shadow-2xl overflow-hidden rounded-sm modal-enter-active ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
            <div className="flex-1 bg-black flex items-center justify-center p-12 overflow-hidden relative group">
               {/* Close button for mobile inside image area */}
               <button onClick={() => setSelectedArt(null)} className="absolute top-4 right-4 md:hidden text-white/50 border border-white/20 px-3 py-1 text-xs">CLOSE</button>
              <div className="scale-100 md:scale-125 transform transition-transform duration-1000 group-hover:scale-[1.3] group-hover:rotate-1">
                {selectedArt.component}
              </div>
            </div>
            <div className="w-full md:w-[400px] p-8 md:p-12 flex flex-col justify-between overflow-y-auto">
              <div>
                <button onClick={() => setSelectedArt(null)} className="hidden md:block mb-12 typewriter text-xs opacity-50 hover:opacity-100 transition-opacity">← Back to Gallery</button>
                <h2 className={`handwriting text-5xl md:text-6xl mb-6 ${isDark ? 'text-blue-100' : 'text-blue-950'}`}>{selectedArt.title}</h2>
                <p className={`typewriter text-sm leading-relaxed mb-12 opacity-60 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{selectedArt.desc}</p>
                <div className="space-y-4">
                  <h4 className="typewriter text-[10px] uppercase tracking-widest border-b border-gray-100/10 pb-2 opacity-50">Technical Specs</h4>
                  <ul className="space-y-2">
                    {selectedArt.specs.map(s => <li key={s} className="typewriter text-[9px] uppercase opacity-40 tracking-wider flex items-center gap-2"><span className="w-1 h-1 bg-current rounded-full"/> {s}</li>)}
                  </ul>
                </div>
              </div>
              <div className="mt-12 md:mt-20 flex justify-between items-end opacity-20">
                <p className="handwriting text-2xl">Vol. {Math.floor((39 - selectedArt.id) / 10) + 1}</p>
                <p className="typewriter text-[8px]">#{selectedArt.id.toString().padStart(3, '0')}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="py-40 border-t border-gray-100/10 text-center opacity-40">
        <p className="handwriting text-4xl mb-6">@wildsalt_art</p>
        <p className="typewriter text-[8px] uppercase tracking-[1em]">Hand-coded &bull; Procedural &bull; Eternal</p>
      </footer>
    </div>
  );
};

const GalleryItem = ({ children, title, desc, isDark, index }: { children: React.ReactNode, title: string, desc: string, isDark: boolean, index: number }) => {
  const rotation = (index % 3 - 1.5) * 1.5;
  const mt = (index % 3) * 30; // Staggered top margin

  return (
    <div className="group perspective-1000" style={{ marginTop: `${mt}px` }}>
      <Reveal delay={(index % 3) * 100}>
        <div className={`relative p-5 transition-all duration-700 transform-gpu group-hover:scale-[1.02] group-hover:rotate-0 group-hover:z-10 ${isDark ? 'bg-[#1e293b] shadow-2xl border-slate-700' : 'bg-white shadow-xl border-gray-100'} border`} style={{ transform: `rotate(${rotation}deg)` }}>
          <div className="relative overflow-hidden pointer-events-none border border-black/5">{children}</div>
          <div className="mt-8 px-2">
            <h3 className={`handwriting text-4xl mb-2 transition-colors ${isDark ? 'text-blue-300' : 'text-blue-950'}`}>{title}</h3>
            <div className={`h-[1px] w-0 group-hover:w-full transition-all duration-700 mb-3 ${isDark ? 'bg-blue-500/30' : 'bg-blue-200'}`} />
            <p className="typewriter text-[10px] opacity-40 tracking-tighter uppercase">{desc}</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

const toggleTheme = (prev: any) => !prev; // Helper for set state

export default App;
