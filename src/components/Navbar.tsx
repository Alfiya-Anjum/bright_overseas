import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Showcase', id: 'showcase' },
    { label: 'Featured', id: 'featured' },
    { label: 'Process', id: 'process' },
    { label: 'Global Map', id: 'map' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        id="main-nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-[#07111E]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex flex-col cursor-pointer group"
          >
            <span className="text-xl md:text-2xl font-bold font-display tracking-[0.2em] text-white group-hover:text-[#F5A623] transition-colors duration-300">
              BRIGHT
            </span>
            <span className="text-[9px] tracking-[0.45em] text-[#FF8C32] font-semibold -mt-1 group-hover:text-white transition-colors duration-300">
              OVERSEAS
            </span>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full cursor-pointer hover:text-white ${
                    isActive ? 'text-[#F5A623]' : 'text-[#B5C0CF]'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white/5 rounded-full border border-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+919513815388"
              className="flex items-center space-x-2 text-xs font-mono text-[#B5C0CF] hover:text-[#FF8C32] transition-colors"
            >
              <Phone size={12} className="text-[#FF8C32]" />
              <span>+91 9513815388</span>
            </a>
            <button
              id="nav-cta-button"
              onClick={() => scrollToSection('contact')}
              className="relative px-6 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#F5A623] text-black rounded-lg font-display hover:bg-[#FF8C32] active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(245,166,35,0.3)] hover:shadow-[0_4px_25px_rgba(255,140,50,0.5)] flex items-center space-x-1"
            >
              <span>Get Quote</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center space-x-4">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[65px] z-40 lg:hidden bg-[#07111E]/95 backdrop-blur-2xl border-t border-white/5 flex flex-col justify-between p-8"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`py-3 text-left text-xl font-display font-medium border-b border-white/5 tracking-wide flex items-center justify-between ${
                      isActive ? 'text-[#FF8C32]' : 'text-[#E7EDF5]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} className={isActive ? 'text-[#FF8C32]' : 'text-white/20'} />
                  </motion.button>
                );
              })}
            </div>

            <div className="space-y-6 pt-6 border-t border-white/5">
              <div className="flex items-center space-x-3 text-[#B5C0CF]">
                <Phone size={18} className="text-[#FF8C32]" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono tracking-widest text-[#B5C0CF]/60 uppercase">Direct Line</span>
                  <a href="tel:+919513815388" className="text-base font-semibold text-white">+91 9513815388</a>
                </div>
              </div>
              <button
                id="mobile-nav-cta"
                onClick={() => scrollToSection('contact')}
                className="w-full py-4 text-center bg-[#F5A623] hover:bg-[#FF8C32] text-black font-semibold tracking-wider uppercase font-display rounded-xl shadow-[0_10px_30px_rgba(245,166,35,0.2)] transition-colors duration-300"
              >
                Request Custom Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
