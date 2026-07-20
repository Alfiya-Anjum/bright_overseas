import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Award, ShieldCheck, Warehouse, Wheat } from 'lucide-react';

export default function About() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Track scroll position to move the sack aside on scroll down (as requested: "The sack slowly moves aside revealing the next section")
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Move the sack horizontally from center/right to further right, and fade it out slightly
  const sackX = useTransform(scrollYProgress, [0, 0.8, 1], [0, 180, 250]);
  const sackOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0]);
  const sackScale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.9, 0.75]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) - rect.width / 2;
      const y = (e.clientY - rect.top) - rect.height / 2;
      
      // Normalize to -1 to 1 range
      setMouse(prev => ({
        ...prev,
        targetX: Math.max(-1, Math.min(1, x / (rect.width / 2))),
        targetY: Math.max(-1, Math.min(1, y / (rect.height / 2)))
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 500;
    let height = 500;
    
    // Resize handler
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width * window.devicePixelRatio;
      height = rect.height * window.devicePixelRatio;
      canvas.width = width;
      canvas.height = height;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Rice Grain Particle Class
    class RiceGrain {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      angle: number;
      spinSpeed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 4 + 2;
        this.speedY = Math.random() * 0.8 + 0.3;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.angle = Math.random() * Math.PI * 2;
        this.spinSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update(mouseX: number, mouseY: number) {
        this.y -= this.speedY; // Float upwards
        this.x += this.speedX;
        this.angle += this.spinSpeed;

        // Mouse repelling force
        const dx = this.x - (width / 2 + mouseX * width * 0.25);
        const dy = this.y - (height / 2 + mouseY * height * 0.25);
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          this.x += (dx / dist) * force * 2;
          this.y += (dy / dist) * force * 2;
        }

        // Reset if goes off screen
        if (this.y < -10) {
          this.y = height + 10;
          this.x = Math.random() * width;
        }
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.angle);
        c.fillStyle = `rgba(245, 166, 35, ${this.opacity})`;
        c.shadowColor = 'rgba(245, 166, 35, 0.4)';
        c.shadowBlur = 6;
        
        // Draw miniature rice grain (ellipse/oval shape)
        c.beginPath();
        c.ellipse(0, 0, this.size * 1.8, this.size * 0.6, 0, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    }

    // Initialize grains
    const grainsCount = 45;
    const grains: RiceGrain[] = [];
    for (let i = 0; i < grainsCount; i++) {
      grains.push(new RiceGrain());
    }

    let localMouse = { x: 0, y: 0 };
    let time = 0;

    // Render loop
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse coordinates (lerp)
      localMouse.x += (mouse.targetX - localMouse.x) * 0.1;
      localMouse.y += (mouse.targetY - localMouse.y) * 0.1;

      // Draw warm ambient background glow behind the sack
      const bgGlow = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.min(width, height) * 0.45
      );
      bgGlow.addColorStop(0, 'rgba(255, 140, 50, 0.08)');
      bgGlow.addColorStop(1, 'rgba(7, 17, 30, 0)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Update and draw rice grain particles
      grains.forEach(g => {
        g.update(localMouse.x, localMouse.y);
        g.draw(ctx);
      });

      // RENDER THE 3D-LIKE SHADED BURLAP RICE SACK
      ctx.save();

      // Place sack in center, apply scale, subtle organic sway, and mouse rotation
      const scaleFactor = Math.min(width, height) / 500;
      const centerY = height / 2 + Math.sin(time) * 4 * scaleFactor;
      ctx.translate(width / 2 + localMouse.x * 25 * scaleFactor, centerY + localMouse.y * 15 * scaleFactor);
      ctx.scale(scaleFactor, scaleFactor);
      ctx.rotate(localMouse.x * 0.12 + Math.sin(time * 0.7) * 0.015);

      // Draw soft shadow beneath the sack
      ctx.beginPath();
      ctx.ellipse(0, 160, 110, 24, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowColor = 'rgba(0,0,0,0.8)';
      ctx.shadowBlur = 30;
      ctx.fill();
      ctx.shadowBlur = 0; // reset shadow

      // --- DRAW SACK OUTLINE & SACK BODY (Realistic Burlap Style) ---
      // Left ear, right ear, body curvature
      ctx.beginPath();
      ctx.moveTo(-60, -110); // top-left ear
      ctx.bezierCurveTo(-75, -135, -95, -125, -75, -100); // left ear loop
      ctx.bezierCurveTo(-90, -30, -95, 60, -85, 120); // left body side bulge
      ctx.bezierCurveTo(-80, 150, -40, 160, 0, 160); // bottom left curve
      ctx.bezierCurveTo(40, 160, 80, 150, 85, 120); // bottom right curve
      ctx.bezierCurveTo(95, 60, 90, -30, 75, -100); // right body side bulge
      ctx.bezierCurveTo(95, -125, 75, -135, 60, -110); // right ear loop
      ctx.bezierCurveTo(40, -100, -40, -100, -60, -110); // tie wrap top
      ctx.closePath();

      // Create rich dual linear/radial gradient representing premium golden-burlap burlap
      const sackGrad = ctx.createLinearGradient(-80, -100, 80, 120);
      sackGrad.addColorStop(0, '#A77D43'); // Highlighted burlap
      sackGrad.addColorStop(0.3, '#8B612C'); // Base organic jute
      sackGrad.addColorStop(0.7, '#6E451A'); // Deep shadow jute
      sackGrad.addColorStop(1, '#4B2A0A'); // Base shadow
      ctx.fillStyle = sackGrad;
      ctx.fill();

      // Draw Burlap Weave Texture Pattern (Mathematical Noise Lines)
      ctx.save();
      ctx.clip(); // Keep within sack outline
      
      // Draw vertical weave fibers
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1.5;
      for (let xCoord = -120; xCoord < 120; xCoord += 6) {
        ctx.beginPath();
        ctx.moveTo(xCoord, -150);
        ctx.quadraticCurveTo(xCoord + (xCoord * 0.15), 0, xCoord, 180);
        ctx.stroke();
      }

      // Draw horizontal weave fibers
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.12)';
      ctx.lineWidth = 1.2;
      for (let yCoord = -150; yCoord < 180; yCoord += 6) {
        ctx.beginPath();
        ctx.moveTo(-120, yCoord);
        ctx.quadraticCurveTo(0, yCoord + Math.sin(yCoord * 0.05) * 5, 120, yCoord);
        ctx.stroke();
      }

      // Draw Highlight reflection on left edge
      const highlightGrad = ctx.createLinearGradient(-80, 0, 40, 0);
      highlightGrad.addColorStop(0, 'rgba(255, 215, 100, 0.18)');
      highlightGrad.addColorStop(0.4, 'rgba(255, 215, 100, 0.03)');
      highlightGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = highlightGrad;
      ctx.fillRect(-120, -150, 240, 330);

      // Draw "BRIGHT OVERSEAS" branding stamped directly onto the sack fabric
      ctx.fillStyle = 'rgba(245, 166, 35, 0.8)';
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      ctx.shadowBlur = 4;
      ctx.textAlign = 'center';
      
      ctx.font = 'bold 15px "Space Grotesk", sans-serif';
      ctx.fillText('BRIGHT', 0, 10);
      
      ctx.font = '9px "Space Grotesk", sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fillText('OVERSEAS', 0, 25);

      ctx.strokeStyle = 'rgba(245, 166, 35, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(-35, 33);
      ctx.lineTo(35, 33);
      ctx.stroke();

      ctx.fillStyle = 'rgba(255,255,255,0.45)';
      ctx.font = '500 8px "JetBrains Mono", monospace';
      ctx.fillText('BASMATI RICE', 0, 45);
      ctx.fillText('NET WT. 50KG', 0, 58);
      ctx.fillText('PRODUCT OF INDIA', 0, 70);

      // Gold stars logo
      ctx.fillStyle = '#F5A623';
      ctx.font = '8px Arial';
      ctx.fillText('★ ★ ★ ★ ★', 0, -10);

      ctx.restore(); // end of clipping

      // --- DRAW SACK NECK TIE / WRAPS ---
      // Draw organic wrapped rope around the neck neck of the sack
      ctx.beginPath();
      ctx.ellipse(0, -96, 50, 8, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#4B331A';
      ctx.strokeStyle = '#F5A623';
      ctx.lineWidth = 1.8;
      ctx.fill();
      ctx.stroke();

      // Rope shadow
      ctx.beginPath();
      ctx.ellipse(0, -88, 54, 4, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fill();

      // Gold stitches/seams along the sides of the burlap sack for luxury feel
      ctx.strokeStyle = '#F5A623';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([3, 4]);
      
      // Left side stitching
      ctx.beginPath();
      ctx.moveTo(-64, -90);
      ctx.quadraticCurveTo(-80, 10, -74, 115);
      ctx.stroke();

      // Right side stitching
      ctx.beginPath();
      ctx.moveTo(64, -90);
      ctx.quadraticCurveTo(80, 10, 74, 115);
      ctx.stroke();
      
      ctx.setLineDash([]); // clear dash

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mouse]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#07111E] py-24 md:py-32 overflow-hidden flex items-center"
    >
      {/* Background Ornaments */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 orange-glow opacity-30" />
      <div className="absolute bottom-10 right-0 gold-glow opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Premium Corporate Story */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tagline */}
            <span className="text-xs md:text-sm font-mono tracking-[0.4em] text-[#FF8C32] font-semibold uppercase mb-3 block">
              ESTABLISHED IN KARNATAKA
            </span>
            
            {/* Title */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight mb-8">
              Pioneering the Path of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#FF8C32]">
                India's Agricultural Pride
              </span>
            </h2>

            {/* Core Story */}
            <div className="text-base md:text-lg text-[#B5C0CF] space-y-6 leading-relaxed font-sans">
              <p>
                Based in the historic city of <strong className="text-white">Bidar, Karnataka</strong>, Bright Overseas is a leading international merchant exporter specializing in sourcing and delivering India's finest agro-commodities to discerning markets across the globe.
              </p>
              <p>
                We do not simply ship products; we bridge the gap between Indian soil and global kitchens. From the aromatic basmati rice fields nurtured in the Himalayan foothills, to the nutrient-dense pulse crops of the Deccan plateau, we supervise the entire farm-to-shipping-container lifecycle.
              </p>
              <p>
                Driven by a deep commitment to uncompromising quality, strict safety regulations, and bulletproof logistical scheduling, we ensure our international partners receive produce that is as fresh and flavorful as the day it was harvested.
              </p>
            </div>

            {/* Micro Highlights Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#F5A623]">
                  <Wheat size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Direct Farm Sourcing</h4>
                  <p className="text-xs text-[#B5C0CF] mt-1">Direct contracts with cooperative Indian farming unions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#FF8C32]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Rigorous Inspection</h4>
                  <p className="text-xs text-[#B5C0CF] mt-1">Multi-stage clean checks & phytosanitary approvals.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Interactive Sack Canvas */}
        <div className="lg:col-span-5 h-[400px] md:h-[500px] flex items-center justify-center relative">
          <motion.div
            style={{
              x: sackX,
              opacity: sackOpacity,
              scale: sackScale,
            }}
            className="w-full h-full flex items-center justify-center"
          >
            {/* Canvas Component */}
            <canvas 
              ref={canvasRef} 
              className="w-full h-full max-w-[480px] max-h-[480px] cursor-grab active:cursor-grabbing"
              title="Interactive 3D Rice Sack - Move your cursor over me!"
            />
            
            {/* Floating Instructional tooltip */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 pointer-events-none text-[10px] font-mono uppercase tracking-widest text-[#B5C0CF] whitespace-nowrap animate-pulse">
              Hover mouse to rotate
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
