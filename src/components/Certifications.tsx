import { motion } from 'motion/react';
import { Award, FileText, CheckCircle, ShieldAlert, Sparkles } from 'lucide-react';
import { CERTIFICATIONS } from '../data';

export default function Certifications() {
  return (
    <section 
      id="certifications" 
      className="relative py-24 md:py-32 bg-[#0E1B2D] overflow-hidden flex flex-col justify-center"
    >
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#07111E] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#07111E] to-transparent" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 orange-glow opacity-25" />
      <div className="absolute bottom-10 right-10 gold-glow opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs md:text-sm font-mono tracking-[0.4em] text-[#FF8C32] font-semibold uppercase mb-3 block">
            REGULATORY CREDENTIALS
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6">
            Global Compliance & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#FF8C32]">Certifications</span>
          </h2>
          <p className="text-[#B5C0CF] text-base md:text-lg max-w-2xl mx-auto">
            We are fully registered with apex Indian food authorities and globally recognized inspection agencies to guarantee seamless port-of-entry custom clearances.
          </p>
        </div>

        {/* CERTIFICATION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CERTIFICATIONS.map((cert, index) => {
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5, 
                  rotateZ: 0.5,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(245,166,35,0.15)' 
                }}
                className={`relative p-8 rounded-2xl border glass-card ${cert.color} overflow-hidden flex flex-col justify-between h-[340px] cursor-pointer group`}
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                {/* Background Certificate Seal watermark */}
                <div className="absolute right-[-20px] bottom-[-20px] w-40 h-40 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none text-white flex items-center justify-center">
                  <Award size={160} />
                </div>

                {/* Card Header */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#F5A623]">
                      <FileText size={22} />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Sparkles size={12} className="text-[#FF8C32] animate-pulse" />
                      <span className="text-[9px] font-mono tracking-wider text-white/40 uppercase">Authentic Licence</span>
                    </div>
                  </div>

                  {/* License title */}
                  <h3 className="text-lg font-bold font-display tracking-wide text-white group-hover:text-[#F5A623] transition-colors leading-snug mb-3">
                    {cert.title}
                  </h3>

                  {/* Issuer details */}
                  <p className="text-xs text-[#B5C0CF]/80 leading-relaxed mb-6">
                    {cert.issuer}
                  </p>
                </div>

                {/* License verification details footer */}
                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-mono uppercase text-[#B5C0CF]/40">Reg No:</span>
                    <span className="text-[10px] font-mono text-white/90 tracking-wide font-semibold">{cert.regNo}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-mono uppercase text-[#B5C0CF]/40">Audit Year:</span>
                    <span className="text-[10px] font-mono text-[#F5A623]">{cert.year} Validated</span>
                  </div>

                  {/* Verification pill */}
                  <div className="inline-flex items-center space-x-1.5 pt-2 text-[9px] font-mono uppercase tracking-widest text-green-400">
                    <CheckCircle size={10} />
                    <span>Active Status verified</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Global Compliance Note banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-2xl glass-card bg-[#07111E]/40 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-[#FF8C32]/10 text-[#FF8C32]">
              <CheckCircle size={24} />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white uppercase tracking-wider">Hassle-Free Customs Port Operations</h4>
              <p className="text-xs text-[#B5C0CF] mt-1">We issue full Phyto-Sanitary, Quality, and Origin certificates with every vessel dispatch to safeguard custom clearance logs.</p>
            </div>
          </div>
          <span className="text-[10px] font-mono tracking-widest text-[#B5C0CF]/40 uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
            SGS Approved Packaging
          </span>
        </motion.div>

      </div>
    </section>
  );
}
