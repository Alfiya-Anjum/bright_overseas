import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, ArrowUpRight, Compass, Shield, Anchor } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';

export default function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  // 3D Tilt Effect on mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Convert to percentage offsets (-0.5 to 0.5)
    const px = (x / rect.width) - 0.5;
    const py = (y / rect.height) - 0.5;

    // Apply tilt angles
    card.style.transform = `perspective(1000px) rotateY(${px * 20}deg) rotateX(${-py * 20}deg) scale3d(1.05, 1.05, 1.05)`;
    
    // Move reflective glow overlay
    const glow = card.querySelector('.card-glow') as HTMLDivElement;
    if (glow) {
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.opacity = '1';
    }
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    
    const glow = card.querySelector('.card-glow') as HTMLDivElement;
    if (glow) {
      glow.style.opacity = '0';
    }
  };

  return (
    <section 
      id="showcase" 
      className="relative min-h-screen w-full bg-[#0E1B2D] py-24 md:py-32 overflow-hidden flex flex-col justify-center"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#07111E] to-transparent" />
      <div className="absolute top-10 right-1/4 translate-x-1/2 orange-glow opacity-30" />
      <div className="absolute bottom-10 left-1/4 -translate-x-1/2 gold-glow opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs md:text-sm font-mono tracking-[0.4em] text-[#F5A623] font-semibold uppercase mb-3 block">
            VISIONARY PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6">
            Glassmorphic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#FF8C32]">3D Portfolio Showcase</span>
          </h2>
          <p className="text-[#B5C0CF] text-base md:text-lg max-w-2xl mx-auto font-sans">
            Float over our core exports in immersive 3D space. Click any category to expand full technical specification sheets.
          </p>
        </div>

        {/* 3D Floating Carousel Area */}
        <div className="relative flex flex-col items-center justify-center min-h-[480px]">
          
          {/* Active Carousel Container */}
          <div className="flex items-center justify-center w-full max-w-5xl relative gap-6">
            
            {/* Left Nav Button */}
            <button
              id="carousel-prev-btn"
              onClick={handlePrev}
              className="absolute -left-4 md:-left-12 z-30 p-4 rounded-full glass-card bg-white/5 border border-white/10 hover:border-[#F5A623] hover:text-[#F5A623] text-white/70 transition-all duration-300 active:scale-90"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Carousel Cards Track */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full py-8">
              {/* Render 3 cards at a time based on activeIndex for desktop */}
              {[0, 1, 2].map((offset) => {
                const index = (activeIndex + offset) % PRODUCTS.length;
                const product = PRODUCTS[index];
                
                return (
                  <motion.div
                    key={product.id}
                    layoutId={`product-card-${product.id}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    ref={(el) => { cardRefs.current[index] = el; }}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    onClick={() => setSelectedProduct(product)}
                    className="relative h-[420px] rounded-2xl overflow-hidden glass-card cursor-pointer flex flex-col justify-between p-6 shadow-2xl transition-all duration-500 ease-out group border border-white/10"
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: '1000px',
                    }}
                  >
                    {/* Glowing Spot Overlay */}
                    <div className="card-glow absolute -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-[#F5A623]/20 to-[#FF8C32]/20 pointer-events-none filter blur-2xl opacity-0 transition-opacity duration-300" />

                    {/* Product Image Layer with Parallax & Dark Overlay */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2D] via-[#0E1B2D]/40 to-black/30 group-hover:via-[#0E1B2D]/20 transition-all duration-500" />
                    </div>

                    {/* Floating Premium Badge */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[9px] font-mono tracking-[0.3em] uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[#FF8C32]">
                        {product.id} Class
                      </span>
                      <motion.div 
                        whileHover={{ rotate: 45 }}
                        className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#F5A623] group-hover:text-black transition-all duration-300"
                      >
                        <ArrowUpRight size={14} />
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="relative z-10 mt-auto">
                      <h3 className="text-2xl font-bold font-display tracking-tight text-white group-hover:text-[#F5A623] transition-colors mb-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#B5C0CF] leading-relaxed line-clamp-2 mb-4 group-hover:text-white/90 transition-colors">
                        {product.description}
                      </p>
                      
                      <div className="h-0.5 w-full bg-white/10 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#F5A623] to-[#FF8C32] w-0 group-hover:w-full transition-all duration-500 ease-out" 
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Nav Button */}
            <button
              id="carousel-next-btn"
              onClick={handleNext}
              className="absolute -right-4 md:-right-12 z-30 p-4 rounded-full glass-card bg-white/5 border border-white/10 hover:border-[#F5A623] hover:text-[#F5A623] text-white/70 transition-all duration-300 active:scale-90"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>

          </div>

          {/* Dot Indicator */}
          <div className="flex space-x-2 mt-8 z-10">
            {PRODUCTS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveIndex(dotIdx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === dotIdx 
                    ? 'bg-[#F5A623] w-8' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Immersive Immersive VisionOS Detail Overlay Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-xl">
            {/* Modal Backdrop click to close */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0"
            />

            {/* Modal Main Card */}
            <motion.div
              layoutId={`product-card-${selectedProduct.id}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-4xl bg-[#0E1B2D]/95 border border-white/20 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-10 grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto"
            >
              
              {/* Product Visual Image side */}
              <div className="relative h-64 md:h-auto min-h-[300px]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0E1B2D] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-[#F5A623]/20 backdrop-blur-md border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623]">
                    <Compass className="animate-spin-slow" style={{ animationDuration: '25s' }} size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#B5C0CF]">Sourcing Line</p>
                    <p className="text-xs font-bold text-white">{selectedProduct.origin}</p>
                  </div>
                </div>
              </div>

              {/* Product Specifications details side */}
              <div className="p-8 flex flex-col justify-between">
                
                {/* Header info */}
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono font-semibold tracking-widest text-[#FF8C32] uppercase">
                      Premium Catalog Specification
                    </span>
                    <button
                      id="close-spec-modal"
                      onClick={() => setSelectedProduct(null)}
                      className="p-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#FF8C32] text-white/70 hover:text-[#FF8C32] transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-2">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-[#F5A623] text-sm font-medium tracking-wide mb-6">
                    {selectedProduct.headline}
                  </p>

                  <div className="h-px bg-white/10 w-full mb-6" />

                  <p className="text-[#B5C0CF] text-sm leading-relaxed mb-6">
                    {selectedProduct.detailedDescription}
                  </p>

                  {/* Specifications Grid */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-12 py-2 border-b border-white/5">
                      <div className="col-span-4 text-xs font-mono text-[#B5C0CF] flex items-center space-x-1">
                        <Shield size={12} className="text-[#F5A623]" />
                        <span>QUALITY:</span>
                      </div>
                      <div className="col-span-8 text-xs font-semibold text-white uppercase tracking-wider">{selectedProduct.exportQuality}</div>
                    </div>

                    <div className="grid grid-cols-12 py-2 border-b border-white/5">
                      <div className="col-span-4 text-xs font-mono text-[#B5C0CF] flex items-center space-x-1">
                        <Compass size={12} className="text-[#FF8C32]" />
                        <span>ORIGIN:</span>
                      </div>
                      <div className="col-span-8 text-xs font-semibold text-white">{selectedProduct.origin}</div>
                    </div>

                    <div className="grid grid-cols-12 py-2 border-b border-white/5">
                      <div className="col-span-4 text-xs font-mono text-[#B5C0CF] flex items-center space-x-1">
                        <Anchor size={12} className="text-blue-400" />
                        <span>MIN ORDER (MOQ):</span>
                      </div>
                      <div className="col-span-8 text-xs font-semibold text-white">{selectedProduct.moq}</div>
                    </div>

                    <div className="grid grid-cols-12 py-2">
                      <div className="col-span-4 text-xs font-mono text-[#B5C0CF] flex items-center space-x-1">
                        <X size={12} className="opacity-0" />
                        <span>PACKAGING:</span>
                      </div>
                      <div className="col-span-8 text-xs text-[#B5C0CF] leading-relaxed">{selectedProduct.packaging}</div>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-[#B5C0CF]/50">BRIGHT OVERSEAS</span>
                  <button
                    id="spec-modal-cta"
                    onClick={() => {
                      setSelectedProduct(null);
                      // Scroll to contact form
                      setTimeout(() => {
                        const contact = document.getElementById('contact');
                        if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                    className="px-6 py-2.5 bg-gradient-to-r from-[#F5A623] to-[#FF8C32] hover:bg-[#FF8C32] text-black font-semibold text-xs tracking-wider uppercase font-display rounded-lg transition-colors"
                  >
                    Request Quote for {selectedProduct.name}
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
