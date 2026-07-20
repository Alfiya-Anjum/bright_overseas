import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductCarousel from './components/ProductCarousel';
import FeaturedProducts from './components/FeaturedProducts';
import ExportProcess from './components/ExportProcess';
import GlobalMap from './components/GlobalMap';
import WhyChoose from './components/WhyChoose';
import Gallery from './components/Gallery';
import Certifications from './components/Certifications';
import ContactAndFooter from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'showcase', 'featured', 'process', 'map', 'why-us', 'contact'];
      
      const scrollPosition = window.scrollY + 200; // Offset to trigger early

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="app-root" className="bg-[#07111E] text-white overflow-hidden selection:bg-[#F5A623] selection:text-black min-h-screen">
      
      {/* Persistent Premium Global Navigation */}
      <Navbar activeSection={activeSection} />

      {/* 1. Full Screen Cinematic Hero (100vh) */}
      <Hero />

      {/* 2. Split Story Section featuring custom interactive 3D rice sack canvas */}
      <About />

      {/* 3. Glassmorphic Apple VisionOS-Style Carousel */}
      <ProductCarousel />

      {/* 4. Cinematic Featured Products (Rice, Pulses, Spices, Vegetables, Fruits, Meat) with individual canvas visualizers */}
      <FeaturedProducts />

      {/* 5. Horizontal Animated Timeline & Scroll progress tracker */}
      <ExportProcess />

      {/* 6. Dark Glowing Global Export Map with animated shipping routes */}
      <GlobalMap />

      {/* 7. Why Choose Bright Overseas (6 Floating Glass cards with Lucide icons) */}
      <WhyChoose />

      {/* 8. Luxury Masonry Gallery with hover and filter functions */}
      <Gallery />

      {/* 9. Floating Certificate Credential Cards with rotation triggers */}
      <Certifications />

      {/* 10. Glassmorphic Contact form, custom India/Bidar location grid, WhatsApp Widget and Footer */}
      <ContactAndFooter />

    </div>
  );
}
