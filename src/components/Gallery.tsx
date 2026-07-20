import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Eye, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Warehouse', 'Packaging', 'Containers', 'Spices', 'Fresh Produce'];

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section 
      id="gallery" 
      className="relative min-h-screen w-full bg-[#07111E] py-24 md:py-32 overflow-hidden flex flex-col justify-center"
    >
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0E1B2D] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0E1B2D] to-transparent" />
      <div className="absolute top-1/2 right-0 orange-glow opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs md:text-sm font-mono tracking-[0.4em] text-[#F5A623] font-semibold uppercase mb-3 block">
            VISUAL PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6">
            Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#FF8C32]">Logistics Gallery</span>
          </h2>
          <p className="text-[#B5C0CF] text-base md:text-lg max-w-2xl mx-auto">
            A glimpse into our high-tech packaging centers, modern insulated storage complexes, and seaport dispatch centers in India.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg border transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#F5A623] border-[#F5A623] text-black shadow-[0_4px_15px_rgba(245,166,35,0.3)]' 
                    : 'bg-white/5 border-white/10 text-[#B5C0CF] hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry-like Grid Layout with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden glass-card group cursor-pointer border border-white/10 shadow-xl"
                >
                  {/* Photo Layer */}
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-110"
                  />

                  {/* Dark Vignette and Hover Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 group-hover:from-black/90 group-hover:backdrop-blur-[2px] transition-all duration-300" />

                  {/* Hover Floating indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Eye size={14} />
                    </div>
                  </div>

                  {/* Caption & Category Metadata */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[9px] font-mono tracking-widest text-[#FF8C32] uppercase bg-black/50 px-2 py-0.5 rounded border border-white/5 mb-2 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold font-display tracking-wide text-white leading-tight group-hover:text-[#F5A623] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[10px] font-mono text-[#B5C0CF] opacity-0 group-hover:opacity-100 mt-1 transition-opacity duration-300">
                      Export Quality Verified • 2026 Batch
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
