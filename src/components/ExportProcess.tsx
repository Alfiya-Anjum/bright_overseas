import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Wheat, ShieldCheck, PackageOpen, Warehouse, Container, Ship, Globe, HelpCircle } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

export default function ExportProcess() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  // Map the scroll progress to a percentage coordinate for the glowing shipment icon
  // Moves from 2% to 98% across the horizontal bar
  const iconTranslateX = useTransform(scrollYProgress, [0, 1], ["2%", "98%"]);
  // Moves from 0% to 100% vertically on mobile
  const iconTranslateY = useTransform(scrollYProgress, [0, 1], ["0%", "98%"]);

  // Render correct Lucide icon based on name
  const getIcon = (name: string, size = 20) => {
    switch (name) {
      case 'Wheat': return <Wheat size={size} />;
      case 'ShieldCheck': return <ShieldCheck size={size} />;
      case 'PackageCheck': return <PackageOpen size={size} />;
      case 'Warehouse': return <Warehouse size={size} />;
      case 'Container': return <Container size={size} />;
      case 'Ship': return <Ship size={size} />;
      case 'Globe': return <Globe size={size} />;
      default: return <HelpCircle size={size} />;
    }
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#0E1B2D] py-24 md:py-32 overflow-hidden flex flex-col justify-center"
    >
      {/* Background Ornaments */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5" />
      <div className="absolute top-1/4 right-0 orange-glow opacity-30" />
      <div className="absolute bottom-1/4 left-10 gold-glow opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs md:text-sm font-mono tracking-[0.4em] text-[#FF8C32] font-semibold uppercase mb-3 block">
            THE LOGISTICS PATHWAY
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6">
            Our Automated <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#FF8C32]">Export Process</span>
          </h2>
          <p className="text-[#B5C0CF] text-base md:text-lg max-w-2xl mx-auto">
            Scroll down to watch our glowing shipment container travel from the rural Indian farms to terminals worldwide.
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        
        {/* DESKTOP TIMELINE (Visible on md and up) */}
        <div className="hidden lg:block relative mt-20 mb-12">
          
          {/* Main Horizontal Timeline Track Line */}
          <div className="absolute top-12 left-0 w-full h-[3px] bg-white/10 rounded-full">
            {/* Active glowing progress line filling on scroll */}
            <motion.div 
              style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
              className="absolute inset-0 bg-gradient-to-r from-[#F5A623] to-[#FF8C32] shadow-[0_0_15px_rgba(255,140,50,0.5)]"
            />
          </div>

          {/* Scrolling Cargo Ship/Container Carrier Icon */}
          <motion.div
            style={{ left: iconTranslateX }}
            className="absolute top-5 -translate-x-1/2 z-20 w-14 h-14 rounded-full bg-gradient-to-r from-[#FF8C32] to-[#FF5E36] border-2 border-white flex items-center justify-center text-black shadow-[0_0_25px_#FF8C32]"
            title="Your cargo is in transit"
          >
            <Ship size={24} className="animate-pulse" />
            <div className="absolute -inset-2 rounded-full border border-[#FF8C32]/30 animate-ping" style={{ animationDuration: '3s' }} />
          </motion.div>

          {/* Timeline Steps Grid */}
          <div className="grid grid-cols-7 gap-4 relative z-10 pt-20">
            {PROCESS_STEPS.map((step, idx) => {
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Step Connector Node */}
                  <div className="absolute top-10 w-5 h-5 rounded-full bg-[#0E1B2D] border-2 border-white/20 group-hover:border-[#F5A623] transition-colors duration-300 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/25 group-hover:bg-[#F5A623] transition-colors duration-300" />
                  </div>

                  {/* Step Card Content */}
                  <div className="glass-card bg-[#07111E]/40 border border-white/10 hover:border-[#F5A623]/40 p-5 rounded-2xl w-full flex flex-col items-center h-[260px] justify-between transition-all duration-500">
                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-black transition-all duration-300 mb-4">
                        {getIcon(step.icon, 22)}
                      </div>

                      {/* Title */}
                      <h4 className="text-sm font-bold text-white tracking-wide mb-2 group-hover:text-[#F5A623] transition-colors font-display">
                        {step.title}
                      </h4>

                      {/* Description */}
                      <p className="text-[11px] text-[#B5C0CF] leading-relaxed line-clamp-3">
                        {step.description}
                      </p>
                    </div>

                    {/* Step tag */}
                    <span className="text-[10px] font-mono tracking-widest text-[#B5C0CF]/40">
                      STEP 0{step.id}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* MOBILE TIMELINE (Visible on mobile screens) */}
        <div className="block lg:hidden relative pl-8 pt-8">
          
          {/* Vertical Track Line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-[3px] bg-white/10 rounded-full">
            <motion.div
              style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
              className="absolute inset-0 bg-gradient-to-b from-[#F5A623] to-[#FF8C32] shadow-[0_0_15px_rgba(255,140,50,0.5)]"
            />
          </div>

          {/* Scrolling Container Cargo Ship on Mobile */}
          <motion.div
            style={{ top: iconTranslateY }}
            className="absolute left-[-11px] z-20 w-14 h-14 rounded-full bg-gradient-to-r from-[#FF8C32] to-[#FF5E36] border-2 border-white flex items-center justify-center text-black shadow-[0_0_20px_rgba(255,140,50,0.6)]"
          >
            <Ship size={22} className="animate-pulse" />
          </motion.div>

          {/* Vertical Steps */}
          <div className="space-y-8 pl-8">
            {PROCESS_STEPS.map((step) => {
              return (
                <div key={step.id} className="relative group">
                  {/* Step Connector Node */}
                  <div className="absolute left-[-45px] top-4 w-4 h-4 rounded-full bg-[#0E1B2D] border-2 border-white/20" />

                  {/* Step Card */}
                  <div className="glass-card bg-[#07111E]/40 border border-white/10 p-5 rounded-2xl">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#F5A623]">
                        {getIcon(step.icon, 18)}
                      </div>
                      <div>
                        <span className="text-[9px] font-mono tracking-wider text-[#FF8C32]">0{step.id} SYSTEM INTEGRATED</span>
                        <h4 className="text-base font-bold text-white font-display">{step.title}</h4>
                      </div>
                    </div>
                    <p className="text-xs text-[#B5C0CF] leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <ul className="text-[10px] text-white/50 space-y-1 pl-4 list-disc">
                      {step.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
