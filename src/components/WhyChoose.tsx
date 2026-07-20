import { motion } from 'motion/react';
import { Award, Leaf, Ship, Coins, Handshake, Globe, HelpCircle } from 'lucide-react';
import { WHY_CHOOSE_CARDS } from '../data';

export default function WhyChoose() {
  
  // Dynamic Lucide icon lookup
  const getIcon = (name: string) => {
    const iconClass = "w-7 h-7 text-[#F5A623] group-hover:text-black transition-colors duration-300";
    switch (name) {
      case 'Award': return <Award className={iconClass} />;
      case 'Leaf': return <Leaf className={iconClass} />;
      case 'Ship': return <Ship className={iconClass} />;
      case 'Coins': return <Coins className={iconClass} />;
      case 'Handshake': return <Handshake className={iconClass} />;
      case 'Globe': return <Globe className={iconClass} />;
      default: return <HelpCircle className={iconClass} />;
    }
  };

  return (
    <section 
      id="why-us" 
      className="relative min-h-screen w-full bg-[#0E1B2D] py-24 md:py-32 overflow-hidden flex flex-col justify-center"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-[#07111E] to-transparent" />
      <div className="absolute top-1/4 left-0 orange-glow opacity-30" />
      <div className="absolute bottom-1/4 right-0 gold-glow opacity-35" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs md:text-sm font-mono tracking-[0.4em] text-[#FF8C32] font-semibold uppercase mb-3 block">
            OUR COMPETITIVE EDGE
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#FF8C32]">Bright Overseas</span>
          </h2>
          <p className="text-[#B5C0CF] text-base md:text-lg max-w-2xl mx-auto">
            Combining direct agricultural lineage with elite multi-modal logistics to offer unparalleled value and reliability.
          </p>
        </div>

        {/* 6 FLOATING GLASS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_CARDS.map((card, index) => {
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -12 }}
                className="relative group p-8 rounded-2xl glass-card bg-white/5 border border-white/10 hover:border-[#FF8C32]/40 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Custom radial hover background glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 10% 10%, ${card.glowColor}, transparent 60%)`
                  }}
                />

                <div>
                  {/* Icon Wrapper (Magnets style) */}
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#F5A623] group-hover:shadow-[0_0_20px_rgba(245,166,35,0.4)] mb-8">
                    {getIcon(card.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display tracking-wide text-white group-hover:text-[#F5A623] transition-colors mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#B5C0CF] leading-relaxed group-hover:text-white/90 transition-colors">
                    {card.description}
                  </p>
                </div>

                {/* Subtle bottom arrow accent */}
                <div className="mt-8 flex justify-between items-center text-[10px] font-mono tracking-widest text-[#B5C0CF]/40 group-hover:text-[#FF8C32]/80 transition-colors uppercase">
                  <span>Standard verified</span>
                  <span className="transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
