import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Anchor, Globe, Compass, ArrowUpRight, HelpCircle } from 'lucide-react';
import { MAP_DESTINATIONS } from '../data';
import { MapDestination } from '../types';

export default function GlobalMap() {
  const [hoveredDest, setHoveredDest] = useState<MapDestination | null>(null);

  // Core coordinates of India (the export hub) in our 100x100 relative grid
  const indiaCoords = { x: 62.5, y: 55 };

  return (
    <section 
      id="map" 
      className="relative min-h-screen w-full bg-[#07111E] py-24 md:py-32 overflow-hidden flex flex-col justify-center"
    >
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0E1B2D] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0E1B2D] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 orange-glow opacity-25" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs md:text-sm font-mono tracking-[0.4em] text-[#F5A623] font-semibold uppercase mb-3 block">
            INTERACTIVE LOGISTICS CONTROL
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6">
            Our Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#FF8C32]">Export Footprint</span>
          </h2>
          <p className="text-[#B5C0CF] text-base md:text-lg max-w-2xl mx-auto">
            Hover over the glowing destination ports to discover the custom Indian farm-produce arrays dispatched to each continent.
          </p>
        </div>

        {/* MAP STAGE CARD */}
        <div className="relative w-full aspect-[21/9] min-h-[380px] md:min-h-[500px] bg-[#0E1B2D]/40 border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4 flex items-center justify-center">
          
          {/* Cyber grid world map background */}
          <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none mix-blend-color-dodge">
            <svg width="100%" height="100%" className="w-full h-full">
              <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
                  <circle cx="30" cy="30" r="1.5" fill="rgba(255, 140, 50, 0.2)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Minimalist World Map Outline Simulation for luxury feel */}
          <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
            {/* Soft background text layout */}
            <div className="absolute top-1/4 left-1/10 text-[10vw] font-bold font-display tracking-widest text-white/5 uppercase select-none">
              PACIFIC
            </div>
            <div className="absolute bottom-1/4 right-1/4 text-[10vw] font-bold font-display tracking-widest text-white/5 uppercase select-none">
              INDIAN
            </div>
          </div>

          {/* REAL-TIME GLOWING LOGISTICS LAYER (SVG Canvas) */}
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
            {/* Glow filters */}
            <defs>
              <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-orange" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Render Shipping Routes (Lines from India to destinations) */}
            {MAP_DESTINATIONS.map((dest) => {
              const isHovered = hoveredDest?.id === dest.id;
              
              // Quadratic curve control point to make organic arched shipping routes
              const midX = (indiaCoords.x + dest.coordinates.x) / 2;
              const midY = Math.min(indiaCoords.y, dest.coordinates.y) - 10;

              return (
                <g key={`route-${dest.id}`}>
                  {/* Static route track */}
                  <path
                    d={`M ${indiaCoords.x}% ${indiaCoords.y}% Q ${midX}% ${midY}% ${dest.coordinates.x}% ${dest.coordinates.y}%`}
                    fill="none"
                    stroke={isHovered ? 'rgba(255, 140, 50, 0.4)' : 'rgba(255, 255, 255, 0.12)'}
                    strokeWidth={isHovered ? 2.5 : 1.2}
                    className="transition-all duration-500"
                  />

                  {/* Laser-pulse energy traveling along route */}
                  <path
                    d={`M ${indiaCoords.x}% ${indiaCoords.y}% Q ${midX}% ${midY}% ${dest.coordinates.x}% ${dest.coordinates.y}%`}
                    fill="none"
                    stroke="url(#route-gradient)"
                    strokeWidth={isHovered ? 3.5 : 2}
                    strokeDasharray="15, 150"
                    strokeDashoffset="100%"
                    filter="url(#glow-orange)"
                    style={{
                      animation: `stroke-pulse 4s linear infinite`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                </g>
              );
            })}

            {/* Custom animated route laser gradient */}
            <defs>
              <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5A623" />
                <stop offset="50%" stopColor="#FF8C32" />
                <stop offset="100%" stopColor="#FF5E36" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Custom keyframes injected via style tag */}
            <style>{`
              @keyframes stroke-pulse {
                0% { stroke-dashoffset: 200; }
                100% { stroke-dashoffset: 0; }
              }
            `}</style>
          </svg>

          {/* INTERACTIVE PINS */}
          <div className="absolute inset-0 w-full h-full z-20">
            
            {/* INDIA SOURCE HUB BEACON */}
            <div 
              style={{ left: `${indiaCoords.x}%`, top: `${indiaCoords.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <div className="absolute w-20 h-20 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 animate-pulse" />
              <div className="absolute w-12 h-12 rounded-full bg-[#F5A623]/20 border border-[#F5A623]/40 animate-ping" style={{ animationDuration: '4s' }} />
              <div className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-[#F5A623] to-[#FF8C32] border-2 border-white flex items-center justify-center shadow-[0_0_15px_#F5A623]">
                <Compass size={10} className="text-black animate-spin-slow" style={{ animationDuration: '10s' }} />
              </div>
              <span className="absolute top-6 whitespace-nowrap bg-black/80 backdrop-blur border border-[#F5A623]/30 px-2 py-0.5 rounded text-[8px] font-mono tracking-widest text-[#F5A623] uppercase">
                EXPORT HUB (INDIA)
              </span>
            </div>

            {/* DESTINATION PORT PINS */}
            {MAP_DESTINATIONS.map((dest) => {
              const isHovered = hoveredDest?.id === dest.id;

              return (
                <div
                  key={dest.id}
                  style={{ left: `${dest.coordinates.x}%`, top: `${dest.coordinates.y}%` }}
                  onMouseEnter={() => setHoveredDest(dest)}
                  onMouseLeave={() => setHoveredDest(null)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                >
                  {/* Radar Pulse waves */}
                  <div className={`absolute w-12 h-12 rounded-full -translate-x-1/2 -translate-y-1/2 bg-[#FF8C32]/10 border border-[#FF8C32]/30 transition-all duration-300 ${isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-60'}`} />
                  <div className="absolute w-16 h-16 rounded-full -translate-x-1/2 -translate-y-1/2 border border-[#FF8C32]/20 animate-ping" />
                  
                  {/* Pin Dot */}
                  <div className={`w-3.5 h-3.5 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 shadow-xl ${isHovered ? 'bg-[#FF8C32] scale-125' : 'bg-[#E7EDF5]'}`} />

                  {/* Tooltip Overlay Card */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 glass-panel border border-[#FF8C32]/40 rounded-2xl p-5 shadow-[0_15px_30px_rgba(0,0,0,0.7)] text-left select-none pointer-events-none"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[9px] font-mono tracking-widest text-[#FF8C32] uppercase flex items-center space-x-1">
                            <Anchor size={10} />
                            <span>Verified Terminal</span>
                          </span>
                          <span className="text-[9px] font-mono text-white/50">{dest.volume}</span>
                        </div>

                        <h4 className="text-sm font-bold font-display text-white tracking-wide mb-2">
                          {dest.name}
                        </h4>

                        <div className="h-px bg-white/10 w-full mb-3" />

                        <p className="text-[10px] font-mono text-[#B5C0CF] uppercase tracking-wider mb-1.5">Exported Assets:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {dest.products.map((p, pIdx) => (
                            <span 
                              key={pIdx} 
                              className="text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}

          </div>

          {/* Floating Instructions Legend */}
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 text-xs text-[#B5C0CF] flex flex-col space-y-1.5 z-30">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#F5A623] shadow-[0_0_5px_#F5A623]" />
              <span className="font-mono text-[10px] uppercase">Bidar Hub (Karnataka, India)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF8C32] shadow-[0_0_5px_#FF8C32]" />
              <span className="font-mono text-[10px] uppercase">Destination Port Terminals</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
