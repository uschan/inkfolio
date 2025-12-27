
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
const Reveal = ({ children, delay = 0 }: { children?: React.ReactNode, delay?: number }) => {
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

// --- Main App ---
const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allArt: Artwork[] = [
    // Series 4
    { id: 0, title: "Nebula Loom", desc: "Cosmic web generation.", component: <NebulaLoom />, specs: ["Radial Gradients", "Conic Gradients", "CSS Blending"] },
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
    <div className={`min-h-screen transition-colors duration-1000 ${isDark ? 'bg-[#050b18] text-slate-300' : 'bg-[#f5f3ef] text-blue-950'} paper-texture font-sans`}>
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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4 backdrop-blur-xl border-b' : 'py-6'} ${isDark ? 'border-slate-800 bg-slate-950/40' : 'border-gray-200/50 bg-white/40'}`}>
        <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all group-hover:rotate-180 ${isDark ? 'border-blue-500 text-blue-400' : 'border-blue-900 text-blue-900'}`}>
              <span className="typewriter text-[10px]">∑</span>
            </div>
            <span className="handwriting text-3xl font-bold tracking-tighter">Ink Folio</span>
          </div>
          <div className={`hidden lg:flex items-center gap-12 typewriter text-[9px] uppercase tracking-[0.4em] font-bold ${isDark ? 'text-blue-200/80' : 'text-blue-900/80'}`}>
            {series.map(s => (
              <a key={s.id} href={`#${s.id}`} className="hover:text-blue-500 transition-all">{s.title.split(' ')[1]}</a>
            ))}
          </div>
          <button onClick={() => setIsDark(!isDark)} className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl ${isDark ? 'bg-slate-800 text-yellow-400' : 'bg-white text-blue-950'}`}>
            {isDark ? '☼' : '☾'}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-10">
        <header className="min-h-[30vh] flex flex-col items-center justify-center text-center pt-20 pb-6">
          <Reveal>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 typewriter text-[22vw] font-black opacity-[0.015] select-none pointer-events-none ${isDark ? 'text-white' : 'text-blue-950'}`}>GALLERY</div>
            <h1 className={`handwriting text-[10vw] lg:text-[140px] mb-2 leading-none tracking-tighter ${isDark ? 'text-white' : 'text-blue-950'}`}>Wild Salt</h1>
            <p className={`typewriter text-[10px] md:text-xs tracking-[1em] uppercase font-bold ${isDark ? 'text-blue-200/60' : 'text-blue-900/60'}`}>Digital Ink Archive &bull; Est. 2025</p>
          </Reveal>
        </header>

        {/* Dynamic Series Rendering */}
        {series.map((section) => (
          <section id={section.id} key={section.id} className="py-8 relative">
            <div className="relative mb-8 text-center overflow-hidden">
               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 typewriter text-[15vw] font-black uppercase tracking-widest opacity-[0.03] select-none pointer-events-none whitespace-nowrap ${isDark ? 'text-blue-500' : 'text-blue-900'}`}>
                {section.bgText}
              </div>
              <Reveal>
                <h2 className={`handwriting text-6xl md:text-8xl mb-2 relative z-10 transition-colors ${isDark ? 'text-blue-100' : 'text-blue-950'}`}>{section.title}</h2>
                <p className={`typewriter text-[10px] tracking-[0.6em] uppercase font-bold transition-colors ${isDark ? 'text-blue-400/80' : 'text-blue-900/80'}`}>{section.subtitle}</p>
                 <div className={`h-[2px] w-16 mx-auto mt-4 rounded-full bg-gradient-to-r from-transparent ${isDark ? 'via-blue-500' : 'via-blue-200'} to-transparent`} />
              </Reveal>
            </div>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
              {allArt.slice(section.startIndex, section.endIndex).map((art, idx) => (
                <div key={art.id} onClick={() => setSelectedArt(art)} className="break-inside-avoid mb-8 cursor-zoom-in">
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-2xl" onClick={() => setSelectedArt(null)} />
          <div className={`relative w-full max-w-6xl max-h-full flex flex-col md:flex-row shadow-2xl overflow-hidden rounded-sm modal-enter-active ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
            <div className={`relative w-full aspect-[3/4] md:aspect-auto md:flex-1 md:h-auto shrink-0 overflow-hidden flex items-center justify-center ${isDark ? 'bg-black p-0 md:p-12' : 'bg-transparent p-0'}`}>
              <div className="w-full h-full md:w-auto md:h-auto md:scale-125 max-md:[&>div]:!w-full max-md:[&>div]:!h-full">
                {selectedArt.component}
              </div>
            </div>
            <div className="w-full md:w-[400px] p-6 md:p-12 flex flex-col justify-between overflow-y-auto bg-inherit">
              <div>
                <button onClick={() => setSelectedArt(null)} className="hidden md:block mb-12 typewriter text-xs opacity-50 hover:opacity-100 transition-opacity">← Back to Gallery</button>
                <h2 className={`handwriting text-5xl md:text-6xl ${isDark ? 'text-blue-100' : 'text-blue-950'}`}>{selectedArt.title}</h2>
                <p className={`typewriter text-sm leading-relaxed mb-8 opacity-50 ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>{selectedArt.desc}</p>
                <div className="space-y-4">
                  <h4 className="typewriter text-[10px] uppercase tracking-widest opacity-100">Technical Specs</h4>
                  <ul className="space-y-2">
                    {selectedArt.specs.map(s => <li key={s} className="typewriter text-[9px] uppercase opacity-60 tracking-wider flex items-center gap-2"><span className="w-1 h-1 bg-current rounded-full"/> {s}</li>)}
                  </ul>
                </div>
              </div>
              <div className="mt-6 md:mt-20 flex justify-between items-end opacity-20">
                <p className="handwriting text-2xl">Vol. {Math.floor((39 - selectedArt.id) / 10) + 1}</p>
                <p className="typewriter text-[8px]">#{selectedArt.id.toString().padStart(3, '0')}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="py-12 border-t border-gray-100/10 text-center relative z-10">
        <p className="handwriting text-4xl mb-4 opacity-40">@wildsalt_art</p>
        <p className="typewriter text-[8px] uppercase tracking-[1em] mb-8 opacity-40">Hand-coded &bull; Procedural &bull; Eternal</p>
        
        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-4">
            <SocialLink href="https://wildsalt.me/" label="Wild Salt">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </SocialLink>
            <SocialLink href="https://x.com/uschan" label="X">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </SocialLink>
            <SocialLink href="https://github.com/uschan" label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </SocialLink>
            <SocialLink href="https://www.instagram.com/bujjun" label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </SocialLink>
            <SocialLink href="https://bsky.app/profile/wildsalt.bsky.social" label="Bluesky">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.58 7.424-4.788 7.823-6.589.96 4.379 3.26 10.556 7.823 6.589 4.557-5.073 1.082-6.498-2.83-7.078-.139-.016-.277-.034-.415-.056.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/></svg>
            </SocialLink>
            <SocialLink href="https://paypal.me/wildsaltme?utm_source=wildsalt.me" label="PayPal">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.946 5.05-4.336 6.797-9.147 6.797h-2.19c-.524 0-.964.382-1.046.9l-.738 4.632-.196 1.238c-.082.518-.522.9-.196 1.236z"/></svg>
            </SocialLink>
            <SocialLink href="https://discord.gg/26nJEhq6Yj" label="Discord">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.46 13.46 0 0 0-.585 1.206C12.637 3.945 10.51 3.945 8.358 4.1c-.2.43-.404.834-.585 1.202a.073.073 0 0 0-.079-.037 19.797 19.797 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.118.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
            </SocialLink>
        </div>
      </footer>
    </div>
  );
};

// Helper for Footer Links
const SocialLink = ({ href, label, children }: { href: string, label: string, children?: React.ReactNode }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="opacity-40 hover:opacity-100 hover:text-blue-500 transition-all duration-300 flex items-center justify-center p-2"
        aria-label={label}
        title={label}
    >
        {children}
    </a>
);

const GalleryItem = ({ children, title, desc, isDark, index }: { children?: React.ReactNode, title: string, desc: string, isDark: boolean, index: number }) => {
  const rotation = (index % 3 - 1.5) * 1.5;
  const mt = (index % 3) * 15; // Reduced staggered top margin (was 30)

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
