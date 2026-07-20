import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Send, CheckCircle, Navigation, Compass, Globe, Ship } from 'lucide-react';

export default function ContactAndFooter() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: 'Rice',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate premium submit transition
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: 'Rice',
        message: ''
      });
    }, 4000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section 
        id="contact" 
        className="relative min-h-screen w-full bg-[#07111E] py-24 md:py-32 overflow-hidden flex flex-col justify-center border-t border-white/5"
      >
        {/* Background Gradients */}
        <div className="absolute top-1/4 right-0 orange-glow opacity-30" />
        <div className="absolute bottom-1/4 left-0 gold-glow opacity-25" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <span className="text-xs md:text-sm font-mono tracking-[0.4em] text-[#F5A623] font-semibold uppercase mb-3 block">
              SECURE AN ALLIANCE
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6">
              Request a Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#FF8C32]">Export Quotation</span>
            </h2>
            <p className="text-[#B5C0CF] text-base md:text-lg max-w-2xl mx-auto">
              Ready to import? Complete our glassmorphic request sheet, and our logistics specialists in Karnataka will prepare an active CFR/CIF pricing sheet within 12 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left side: Premium Contact Details & Simulated Map */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              
              {/* Office Details */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold font-display text-white tracking-wide">
                  Bright Overseas HQ
                </h3>
                
                <div className="space-y-4">
                  
                  {/* Address */}
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="p-3 rounded-lg bg-[#F5A623]/10 text-[#F5A623] mt-1">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-[#B5C0CF]/40">Export Headquarters</p>
                      <p className="text-sm font-semibold text-white mt-1 leading-relaxed">
                        Bidar, Karnataka - 585401, India
                      </p>
                    </div>
                  </div>

                  {/* Emails */}
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="p-3 rounded-lg bg-[#FF8C32]/10 text-[#FF8C32] mt-1">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-[#B5C0CF]/40">Electronic Mail</p>
                      <a href="mailto:bmtbdr@gmail.com" className="text-sm font-semibold text-white hover:text-[#F5A623] transition-colors mt-1 block">
                        bmtbdr@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone Lines */}
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="p-3 rounded-lg bg-green-500/10 text-green-400 mt-1">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-[#B5C0CF]/40">Direct Cargo Line</p>
                      <a href="tel:+919513815388" className="text-sm font-semibold text-white hover:text-green-400 transition-colors mt-1 block">
                        +91 9513815388
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="p-3 rounded-lg bg-[#5C9CE6]/10 text-[#5C9CE6] mt-1">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-[#B5C0CF]/40">Trading Operations</p>
                      <div className="text-xs text-[#B5C0CF] mt-1 space-y-1">
                        <p><strong className="text-white">Monday - Friday:</strong> 7:00 AM - 6:00 PM IST</p>
                        <p><strong className="text-white">Saturday:</strong> Closed</p>
                        <p><strong className="text-white">Sunday:</strong> Half Day (9:00 AM - 1:00 PM IST)</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* simulated geometric world map highlighting Bidar */}
              <div className="relative aspect-[16/10] bg-[#0E1B2D] border border-white/10 rounded-2xl overflow-hidden shadow-inner p-4 flex flex-col justify-between">
                
                {/* Simulated Grid backdrop */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="contact-grid" width="15" height="15" patternUnits="userSpaceOnUse">
                        <rect width="15" height="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#contact-grid)" />
                  </svg>
                </div>

                {/* Simulated radar arcs pointing to Bidar */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="absolute w-28 h-28 rounded-full border border-[#F5A623]/25 animate-ping" />
                  <div className="absolute w-48 h-48 rounded-full border border-[#FF8C32]/10 animate-ping" style={{ animationDuration: '4s' }} />
                  <div className="w-2 h-2 rounded-full bg-[#F5A623] shadow-[0_0_15px_#F5A623]" />
                </div>

                {/* Map details labels */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-[#F5A623] uppercase tracking-widest font-bold">Trading Center coordinates</span>
                    <span className="text-[11px] font-mono text-white mt-0.5">17.9104° N, 77.5199° E</span>
                  </div>
                  <Navigation size={14} className="text-[#F5A623] animate-pulse" />
                </div>

                <div className="relative z-10 mt-auto">
                  <p className="text-sm font-semibold text-white tracking-wide">Bidar, Karnataka, India</p>
                  <p className="text-[10px] text-[#B5C0CF] mt-0.5 leading-normal">Main procurement, sorting, and dispatch administrative headquarters.</p>
                </div>
              </div>

            </div>

            {/* Right side: Glassmorphism Contact Form */}
            <div className="lg:col-span-7">
              <div className="relative h-full rounded-2xl glass-card bg-white/5 border border-white/10 p-8 md:p-10 flex flex-col justify-center">
                
                {/* Form state response overlay */}
                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-[#07111E]/95 backdrop-blur rounded-2xl z-20 flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center text-green-400 mb-6">
                      <CheckCircle size={32} className="animate-bounce" />
                    </div>
                    <h4 className="text-2xl font-bold font-display text-white tracking-wide mb-3">
                      Quotation Request Dispatched
                    </h4>
                    <p className="text-sm text-[#B5C0CF] max-w-md leading-relaxed">
                      Thank you for contacting Bright Overseas. Our Bidar export office has securely received your specifications. A senior representative will contact your company with CFR/CIF ocean freight schedules shortly.
                    </p>
                    <span className="text-[10px] font-mono text-white/30 uppercase mt-8 tracking-widest">
                      Processing reference: BOS-{Math.floor(100000 + Math.random() * 900000)}
                    </span>
                  </motion.div>
                ) : null}

                {/* Main Form Fields */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="contact-name" className="text-xs font-mono text-[#B5C0CF] uppercase tracking-wider">Full Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-[#F5A623] focus:outline-none transition-colors"
                      />
                    </div>
                    {/* Company */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="contact-company" className="text-xs font-mono text-[#B5C0CF] uppercase tracking-wider">Company / Importer Name</label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Global Foods LLC"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-[#F5A623] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="contact-email" className="text-xs font-mono text-[#B5C0CF] uppercase tracking-wider">Corporate Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="buyer@corporate.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-[#F5A623] focus:outline-none transition-colors"
                      />
                    </div>
                    {/* Phone */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="contact-phone" className="text-xs font-mono text-[#B5C0CF] uppercase tracking-wider">Contact Phone / WhatsApp</label>
                      <input
                        id="contact-phone"
                        type="text"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-[#F5A623] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Product Category Selection */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="contact-product" className="text-xs font-mono text-[#B5C0CF] uppercase tracking-wider">Selected Product Category</label>
                    <select
                      id="contact-product"
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0E1B2D] border border-white/10 text-white text-sm focus:border-[#F5A623] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Rice">Premium Rice (Basmati / Non-Basmati)</option>
                      <option value="Pulses">Organic Pulses (Lentils, Toor Dal, Bengal Gram)</option>
                      <option value="Spices">Luxury Spices (Turmeric, Cardamom, Pepper)</option>
                      <option value="Vegetables">Fresh Vegetables (Red Onions, Garlic, Ginger)</option>
                      <option value="Fruits">Tropical Fresh Fruits (Mangoes, Pomegranates)</option>
                      <option value="Meat">Halal Export Meat (Buffalo, Sheep carcasses)</option>
                    </select>
                  </div>

                  {/* Message / Specifications */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="contact-message" className="text-xs font-mono text-[#B5C0CF] uppercase tracking-wider">Specifications & Dest Terminal Port (CIF/CFR)</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please include details such as desired tonnage (MOQ met), customized branding parameters, packaging size requests, and the specific port of destination terminal."
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-[#F5A623] focus:outline-none transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  {/* CTA Animated Button */}
                  <button
                    id="submit-quote-btn"
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#F5A623] to-[#FF8C32] text-black font-semibold tracking-wider uppercase text-xs font-display rounded-xl hover:shadow-[0_0_25px_rgba(255,140,50,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
                  >
                    <span>Request Custom Quote Specification</span>
                    <Send size={14} />
                  </button>
                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PERSISTENT FLOATING WHATSAPP BUTTON (Always Visible, Bottom Right) */}
      <a
        href="https://wa.me/919513815388"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-[0_10px_25px_rgba(34,197,94,0.4)] hover:shadow-[0_10px_35px_rgba(34,197,94,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        title="Direct WhatsApp Cargo Inquiry"
      >
        {/* Subtle pulsing outer waves */}
        <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
        
        {/* WhatsApp Icon */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 fill-current"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.502 5.282 3.5 8.487-.005 6.657-5.343 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.503 4.975 1.505 5.4 0 9.794-4.39 9.799-9.78.002-2.61-1.01-5.064-2.852-6.908C16.68 2.128 14.229.06 11.62.06c-5.4 0-9.794 4.391-9.799 9.78-.001 2.05.545 4.05 1.583 5.823l-1.036 3.784 3.882-1.018zM17.486 14.4c-.3-.149-1.776-.875-2.05-.974-.275-.099-.475-.149-.675.15-.2.299-.775.974-.95 1.173-.175.2-.35.224-.65.075-.3-.149-1.267-.467-2.413-1.49-.893-.796-1.496-1.78-1.672-2.079-.175-.3-.019-.462.131-.611.135-.134.3-.349.45-.524.149-.175.2-.299.3-.499.1-.2.05-.374-.025-.524-.075-.15-.675-1.623-.925-2.223-.244-.588-.492-.509-.675-.518-.174-.01-.374-.012-.574-.012-.2 0-.525.075-.8.374-.275.299-1.05 1.024-1.05 2.5 0 1.475 1.075 2.898 1.225 3.098.15.2 2.115 3.23 5.124 4.53 1.033.447 1.834.717 2.457.915.753.239 1.44.205 1.983.124.605-.09 1.776-.724 2.025-1.424.25-.699.25-1.3.175-1.424-.075-.125-.275-.199-.575-.349z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out text-sm font-semibold tracking-wide ml-0 group-hover:ml-2 whitespace-nowrap">
          Inquiry
        </span>
      </a>

      {/* DARK PREMIUM FOOTER */}
      <footer className="relative bg-[#07111E] border-t border-white/10 pt-20 pb-10 overflow-hidden">
        
        {/* Subtle animated coordinates world coordinates background */}
        <div className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full">
            <g fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8">
              <path d="M 0 50 L 1920 50" />
              <path d="M 0 150 L 1920 150" />
              <path d="M 0 350 L 1920 350" />
              <path d="M 100 0 L 100 600" />
              <path d="M 400 0 L 400 600" />
              <path d="M 900 0 L 900 600" />
            </g>
            <circle cx="900" cy="350" r="10" fill="rgba(255, 140, 50, 0.2)" />
            <circle cx="400" cy="150" r="15" fill="rgba(245, 166, 35, 0.15)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          
          {/* Col 1: Brand details */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div 
                onClick={scrollToTop}
                className="flex flex-col cursor-pointer group mb-6"
              >
                <span className="text-2xl font-bold font-display tracking-[0.2em] text-white group-hover:text-[#F5A623] transition-colors">
                  BRIGHT
                </span>
                <span className="text-[10px] tracking-[0.45em] text-[#FF8C32] font-semibold -mt-1 group-hover:text-white transition-colors">
                  OVERSEAS
                </span>
              </div>
              <p className="text-xs text-[#B5C0CF] leading-relaxed max-w-sm">
                Award-winning merchant exporters of certified Indian agricultural grains, pulses, spices, and fresh produce. Bringing the proud heritage of Karnataka’s fertile valleys directly to global seaport terminals.
              </p>
            </div>

            <div className="flex space-x-4 mt-8">
              <span className="text-[10px] font-mono tracking-widest text-[#B5C0CF]/40 uppercase">Connect:</span>
              <a href="#" className="text-xs text-[#B5C0CF] hover:text-[#F5A623] transition-colors font-mono">LinkedIn</a>
              <a href="#" className="text-xs text-[#B5C0CF] hover:text-[#F5A623] transition-colors font-mono">Twitter</a>
              <a href="#" className="text-xs text-[#B5C0CF] hover:text-[#F5A623] transition-colors font-mono">Instagram</a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono tracking-[0.3em] uppercase text-[#F5A623] mb-6 font-bold">Logistics Hub</h4>
            <ul className="space-y-3.5 text-xs">
              <li>
                <a href="#about" className="text-[#B5C0CF] hover:text-white transition-colors font-sans">
                  About Story
                </a>
              </li>
              <li>
                <a href="#showcase" className="text-[#B5C0CF] hover:text-white transition-colors font-sans">
                  3D Portfolio
                </a>
              </li>
              <li>
                <a href="#featured" className="text-[#B5C0CF] hover:text-white transition-colors font-sans">
                  Export Catalog
                </a>
              </li>
              <li>
                <a href="#process" className="text-[#B5C0CF] hover:text-white transition-colors font-sans">
                  Logistics Flow
                </a>
              </li>
              <li>
                <a href="#map" className="text-[#B5C0CF] hover:text-white transition-colors font-sans">
                  Export Map
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Certifications links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono tracking-[0.3em] uppercase text-[#FF8C32] mb-6 font-bold">Certifications</h4>
            <ul className="space-y-3.5 text-xs text-[#B5C0CF]">
              <li className="flex items-center space-x-2">
                <CheckCircle size={10} className="text-green-500" />
                <span>APEDA Member Exporter</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={10} className="text-green-500" />
                <span>FSSAI License Holder</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={10} className="text-green-500" />
                <span>ISO 22000 Registered</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={10} className="text-green-500" />
                <span>SGS Inspected Shipments</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono tracking-[0.3em] uppercase text-[#F5A623] mb-6 font-bold">Cargo Newsletter</h4>
            <p className="text-xs text-[#B5C0CF] leading-relaxed mb-4">
              Subscribe to receive weekly Indian harvest market reports, dynamic container freight rate predictions, and crop yield forecasts.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                required
                placeholder="buyer@corporate.com"
                className="px-3.5 py-2 rounded-l bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#F5A623] w-full transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#F5A623] text-black font-semibold text-xs rounded-r hover:bg-[#FF8C32] transition-colors"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Legal copyright bar */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 relative z-10 flex flex-col md:flex-row items-center justify-between text-[10px] font-mono text-[#B5C0CF]/40 uppercase tracking-widest gap-4">
          <p>© 2026 BRIGHT OVERSEAS. All global rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Charter</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Logistics Agreement</a>
            <span>•</span>
            <span className="text-[#FF8C32]">Bidar, Karnataka, India</span>
          </div>
        </div>

      </footer>
    </>
  );
}
