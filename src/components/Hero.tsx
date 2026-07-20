import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute scroll values for Apple-style transitions
  const videoScale = 1 + scrollY * 0.0005; // Slowly zooms in
  const textOpacity = Math.max(0, 1 - scrollY * 0.002); // Fades out
  const textY = -scrollY * 0.15; // Floats upward
  const blurValue = Math.min(10, scrollY * 0.015); // Blurs background video

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden bg-[#07111E] flex items-center justify-center"
    >
      {/* Cinematic Video Background with subtle dark overlay */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-300"
        style={{
          transform: `scale(${videoScale})`,
          filter: `blur(${blurValue}px)`,
        }}
      >
<video
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover opacity-60"
>
  <source src="/videos/ship.mp4" type="video/mp4" />
</video>
        {/* Apple-style gradient vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111E] via-transparent to-[#07111E]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111E]/50 via-transparent to-[#07111E]/50" />
      </div>

      {/* Floating Orange/Gold Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 orange-glow opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 gold-glow opacity-50" />

      {/* Foreground Content */}
      <div 
        className="relative z-10 max-w-5xl mx-auto px-6 text-center select-none"
        style={{
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
        }}
      >
        {/* Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card bg-white/5 border border-white/15 mb-6 md:mb-8 hover:border-[#F5A623]/40 transition-colors"
        >
          <Compass size={14} className="text-[#F5A623] animate-spin-slow" style={{ animationDuration: '20s' }} />
          <span className="text-[11px] md:text-xs font-mono font-semibold tracking-[0.3em] uppercase text-[#E7EDF5]">
            India's Premier Global Exporter
          </span>
        </motion.div>

        {/* Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.1] md:leading-[1.15]"
        >
          Connecting India's <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] via-[#FF8C32] to-[#FF5E36] drop-shadow-xl">
            Finest Food Products
          </span> <br />
          to Global Markets
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-xl text-[#B5C0CF] max-w-3xl mx-auto mt-6 md:mt-8 font-sans leading-relaxed tracking-wide"
        >
          Premium, certified exporters of Rice, Pulses, Spices, Fresh Fruits, Vegetables, and Meat. Sourced ethically, packed with state-of-the-art preservation, and shipped with absolute precision.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10 md:mt-12"
        >
          {/* Main CTA */}
          <button
            id="hero-explore-btn"
            onClick={() => handleScrollTo('showcase')}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#F5A623] to-[#FF8C32] text-black font-semibold tracking-wider uppercase text-sm font-display rounded-xl hover:shadow-[0_0_30px_rgba(255,140,50,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
          >
            <span>Explore Products</span>
            <ArrowRight size={16} />
          </button>

          {/* Secondary CTA */}
          <button
            id="hero-quote-btn"
            onClick={() => handleScrollTo('contact')}
            className="w-full sm:w-auto px-8 py-4 glass-card bg-white/5 border border-white/15 text-white font-semibold tracking-wider uppercase text-sm font-display rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            Request Custom Quote
          </button>
        </motion.div>
      </div>

      {/* Cinematic Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        onClick={() => handleScrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#B5C0CF] group-hover:text-[#FF8C32] transition-colors mb-2">
          Scroll to Begin Journey
        </span>
        <div className="w-[20px] h-[34px] rounded-full border-2 border-white/20 flex justify-center p-1 group-hover:border-[#FF8C32] transition-colors">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[4px] h-[8px] bg-white rounded-full group-hover:bg-[#FF8C32] transition-colors"
          />
        </div>
      </motion.div>
    </section>
  );
}
