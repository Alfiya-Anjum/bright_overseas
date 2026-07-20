import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Wheat, Award, Compass, Shield, ArrowUpRight, Leaf, ShieldAlert } from 'lucide-react';
import { PRODUCTS } from '../data';

export default function FeaturedProducts() {
  const riceCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const pulsesCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const spicesCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const vegCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const fruitsCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const meatCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Scroll to contact helper
  const handleRequestQuote = (productName: string) => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
      // Pre-fill or focus subject
      setTimeout(() => {
        const messageInput = document.getElementById('contact-message') as HTMLTextAreaElement;
        if (messageInput) {
          messageInput.value = `Hello Bright Overseas, I am interested in importing premium ${productName}. Please provide a custom export quotation.`;
          messageInput.focus();
        }
      }, 800);
    }
  };

  // --- RICE CANVAS RENDERER ---
  useEffect(() => {
    const canvas = riceCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let time = 0;
    const width = 400;
    const height = 400;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const particles: {x: number, y: number, speedY: number, size: number, angle: number}[] = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speedY: Math.random() * 0.5 + 0.2,
        size: Math.random() * 3 + 2,
        angle: Math.random() * Math.PI
      });
    }

    const draw = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Warm background radial glow
      const glow = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, 180);
      glow.addColorStop(0, 'rgba(245, 166, 35, 0.08)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Draw rice grain particles
      ctx.fillStyle = 'rgba(245, 166, 35, 0.45)';
      ctx.shadowColor = 'rgba(245, 166, 35, 0.3)';
      ctx.shadowBlur = 4;
      particles.forEach(p => {
        p.y -= p.speedY;
        p.angle += 0.01;
        if (p.y < -10) p.y = height + 10;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 1.5, p.size * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      ctx.shadowBlur = 0;

      // Draw beautiful stylized burlap sack
      ctx.save();
      ctx.translate(width / 2, height / 2 + Math.sin(time) * 4);
      ctx.rotate(Math.sin(time * 0.7) * 0.02);

      // Sack outline & body
      ctx.beginPath();
      ctx.moveTo(-45, -80);
      ctx.bezierCurveTo(-55, -100, -70, -90, -55, -70);
      ctx.bezierCurveTo(-65, -20, -70, 40, -60, 90);
      ctx.bezierCurveTo(-55, 110, -30, 120, 0, 120);
      ctx.bezierCurveTo(30, 120, 55, 110, 60, 90);
      ctx.bezierCurveTo(70, 40, 65, -20, 55, -70);
      ctx.bezierCurveTo(70, -90, 55, -100, 45, -80);
      ctx.closePath();

      const grad = ctx.createLinearGradient(-60, -70, 60, 90);
      grad.addColorStop(0, '#9E743A');
      grad.addColorStop(0.5, '#7C5521');
      grad.addColorStop(1, '#4A2E0C');
      ctx.fillStyle = grad;
      ctx.fill();

      // Stitch lines
      ctx.strokeStyle = '#F5A623';
      ctx.lineWidth = 2;
      ctx.setLineDash([3, 4]);
      ctx.beginPath();
      ctx.moveTo(-50, -60);
      ctx.quadraticCurveTo(-60, 10, -50, 90);
      ctx.stroke();
      ctx.setLineDash([]);

      // Tied neck rope
      ctx.beginPath();
      ctx.ellipse(0, -72, 38, 6, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#4A2E0C';
      ctx.strokeStyle = '#F5A623';
      ctx.lineWidth = 1.5;
      ctx.fill();
      ctx.stroke();

      // Label text
      ctx.fillStyle = '#F5A623';
      ctx.textAlign = 'center';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('BRIGHT', 0, 0);
      ctx.font = '7px sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.fillText('BASMATI RICE', 0, 12);
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.fillText('INDIA ORIGIN', 0, 22);

      ctx.restore();
      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  // --- PULSES CANVAS RENDERER ---
  useEffect(() => {
    const canvas = pulsesCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let time = 0;
    const width = 400;
    const height = 400;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Circular pulse grains falling
    const particles: {x: number, y: number, speedY: number, size: number, color: string}[] = [];
    const pulseColors = ['#FF8C32', '#F5A623', '#E2B13C', '#CD7F32'];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speedY: Math.random() * 0.4 + 0.15,
        size: Math.random() * 3 + 2,
        color: pulseColors[Math.floor(Math.random() * pulseColors.length)]
      });
    }

    const draw = () => {
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      // Golden glow background
      const glow = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, 170);
      glow.addColorStop(0, 'rgba(255, 140, 50, 0.08)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Draw floating pulses
      particles.forEach(p => {
        p.y -= p.speedY;
        if (p.y < -10) p.y = height + 10;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Pulses Sack
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.scale(1, 0.95 + Math.sin(time) * 0.02); // Elastic floating stretch

      ctx.beginPath();
      ctx.moveTo(-50, -70);
      ctx.bezierCurveTo(-65, -85, -75, -75, -60, -60);
      ctx.bezierCurveTo(-75, -20, -72, 40, -62, 85);
      ctx.bezierCurveTo(-55, 105, -30, 115, 0, 115);
      ctx.bezierCurveTo(30, 115, 55, 105, 62, 85);
      ctx.bezierCurveTo(72, 40, 75, -20, 60, -60);
      ctx.bezierCurveTo(75, -75, 65, -85, 50, -70);
      ctx.closePath();

      const grad = ctx.createLinearGradient(-60, -70, 60, 95);
      grad.addColorStop(0, '#B35E1B');
      grad.addColorStop(0.5, '#8C440E');
      grad.addColorStop(1, '#592500');
      ctx.fillStyle = grad;
      ctx.fill();

      // Open top revealing pulses
      ctx.beginPath();
      ctx.ellipse(0, -68, 48, 12, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#FFA500';
      ctx.fill();

      // Draw lentils inside open top
      ctx.fillStyle = '#FF8C32';
      for (let j = -30; j <= 30; j += 6) {
        for (let k = -5; k <= 5; k += 3) {
          ctx.beginPath();
          ctx.arc(j, -68 + k + Math.sin(j)*2, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Label text
      ctx.fillStyle = '#FFA500';
      ctx.textAlign = 'center';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('BRIGHT', 0, 10);
      ctx.font = '7px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText('ORGANIC LENTILS', 0, 22);

      ctx.restore();
      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  // --- SPICES CANVAS RENDERER ---
  useEffect(() => {
    const canvas = spicesCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let time = 0;
    const width = 400;
    const height = 400;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Shimmering orange spice dust particles
    const particles: {x: number, y: number, radius: number, speedY: number, speedX: number, alpha: number}[] = [];
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        speedY: Math.random() * 0.7 + 0.3,
        speedX: Math.random() * 0.8 - 0.4,
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    const draw = () => {
      time += 0.018;
      ctx.clearRect(0, 0, width, height);

      // Deep orange glowing radial spotlight
      const bgGlow = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, 190);
      bgGlow.addColorStop(0, 'rgba(255, 94, 54, 0.12)');
      bgGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Draw spice dust cloud
      particles.forEach(p => {
        p.y -= p.speedY;
        p.x += p.speedX;
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10 || p.x > width + 10) p.x = Math.random() * width;

        ctx.fillStyle = `rgba(255, 140, 50, ${p.alpha})`;
        ctx.shadowColor = '#FF8C32';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
        ctx.fill();
      });
      ctx.shadowBlur = 0;

      // Draw luxury spice sack
      ctx.save();
      ctx.translate(width/2, height/2 + Math.sin(time * 0.8) * 3);
      ctx.rotate(-Math.sin(time * 0.5) * 0.01);

      ctx.beginPath();
      ctx.moveTo(-45, -70);
      ctx.bezierCurveTo(-55, -85, -65, -80, -55, -60);
      ctx.bezierCurveTo(-65, -15, -65, 45, -55, 90);
      ctx.bezierCurveTo(-45, 110, -25, 115, 0, 115);
      ctx.bezierCurveTo(25, 115, 45, 110, 55, 90);
      ctx.bezierCurveTo(65, 45, 65, -15, 55, -60);
      ctx.bezierCurveTo(65, -80, 55, -85, 45, -70);
      ctx.closePath();

      const grad = ctx.createLinearGradient(-50, -70, 50, 90);
      grad.addColorStop(0, '#B33E17'); // Rich chili red-brown
      grad.addColorStop(0.5, '#7F1A00');
      grad.addColorStop(1, '#4A0800');
      ctx.fillStyle = grad;
      ctx.fill();

      // Top fold
      ctx.beginPath();
      ctx.ellipse(0, -68, 42, 8, 0, 0, Math.PI*2);
      ctx.fillStyle = '#D35400';
      ctx.fill();

      // Brand tag
      ctx.fillStyle = '#FF8C32';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('BRIGHT', 0, 10);
      ctx.font = '8px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText('LUXURY SPICES', 0, 22);

      ctx.restore();
      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  // --- VEGETABLES CANVAS RENDERER ---
  useEffect(() => {
    const canvas = vegCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let time = 0;
    const width = 400;
    const height = 400;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Fluttering green leaves
    const leaves: {x: number, y: number, speedY: number, angle: number, spin: number, size: number}[] = [];
    for (let i = 0; i < 20; i++) {
      leaves.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speedY: Math.random() * 0.4 + 0.15,
        angle: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.02,
        size: Math.random() * 4 + 4
      });
    }

    const draw = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Nature light background glow
      const glow = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, 170);
      glow.addColorStop(0, 'rgba(76, 175, 80, 0.06)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Draw leaves
      ctx.fillStyle = 'rgba(76, 175, 80, 0.4)';
      leaves.forEach(l => {
        l.y -= l.speedY;
        l.angle += l.spin;
        if (l.y < -15) l.y = height + 15;
        ctx.save();
        ctx.translate(l.x, l.y);
        ctx.rotate(l.angle);
        ctx.beginPath();
        // Leaf shape
        ctx.ellipse(0, 0, l.size * 1.6, l.size * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // DRAW WOODEN CRATE
      ctx.save();
      ctx.translate(width/2, height/2 + 20);

      // Base Crate back shadow
      ctx.fillStyle = '#2d1810';
      ctx.fillRect(-65, -45, 130, 90);

      // Draw green vegetables inside (Onions, Cabbages, Ginger outlines)
      ctx.fillStyle = '#4CAF50'; // green veg
      ctx.beginPath();
      ctx.arc(-30, -18, 22, 0, Math.PI*2);
      ctx.arc(0, -22, 26, 0, Math.PI*2);
      ctx.arc(32, -16, 20, 0, Math.PI*2);
      ctx.fill();

      // Onion/Ginger details
      ctx.fillStyle = '#D35400'; // red onions
      ctx.beginPath();
      ctx.arc(-40, -10, 14, 0, Math.PI*2);
      ctx.arc(40, -8, 12, 0, Math.PI*2);
      ctx.fill();

      // Crate Main Slats (Front)
      ctx.fillStyle = '#834F2C'; // Brown wood
      // Bottom slat
      ctx.fillRect(-70, 15, 140, 25);
      // Middle slat
      ctx.fillRect(-70, -15, 140, 25);

      // Draw wood lines / shadows
      ctx.fillStyle = '#5A3319';
      ctx.fillRect(-70, 10, 140, 5);
      ctx.fillRect(-70, -20, 140, 5);

      // Corner posts
      ctx.fillStyle = '#9C623B';
      ctx.fillRect(-70, -45, 12, 90);
      ctx.fillRect(58, -45, 12, 90);

      // Lid (Slightly open and sways as requested: "Crate lid opens slightly")
      const lidAngle = -0.15 + Math.sin(time) * 0.05; // opens and sways slightly
      ctx.save();
      ctx.translate(-70, -45); // hinge top left
      ctx.rotate(lidAngle);
      ctx.fillStyle = 'rgba(156, 98, 59, 0.9)'; // lid wood
      ctx.fillRect(0, -12, 140, 12);
      // Lid structural slats
      ctx.fillStyle = '#5A3319';
      ctx.fillRect(10, -12, 12, 12);
      ctx.fillRect(118, -12, 12, 12);
      ctx.restore();

      ctx.restore();
      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  // --- FRUITS CANVAS RENDERER ---
  useEffect(() => {
    const canvas = fruitsCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let time = 0;
    const width = 400;
    const height = 400;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const draw = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Vibrant natural sunlight rays glow
      const bgGrad = ctx.createRadialGradient(width/2, height/2 - 20, 0, width/2, height/2, 180);
      bgGrad.addColorStop(0, 'rgba(245, 166, 35, 0.12)');
      bgGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Sunbeams overlay
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.03)';
      ctx.lineWidth = 15;
      for (let i = 0; i < 6; i++) {
        const beamAngle = 0.5 + i * 0.2 + Math.sin(time * 0.2) * 0.05;
        ctx.beginPath();
        ctx.moveTo(width/2, 0);
        ctx.lineTo(width/2 + Math.cos(beamAngle) * 300, Math.sin(beamAngle) * 300);
        ctx.stroke();
      }

      // DRAW FRUIT LUXURY CRATE
      ctx.save();
      ctx.translate(width/2, height/2 + 20);

      // Crate shadow back
      ctx.fillStyle = '#21120B';
      ctx.fillRect(-65, -40, 130, 80);

      // Ripe Mangoes & Pomegranates inside (vibrant colored circles)
      // Mangoes (Warm golden-yellow)
      ctx.fillStyle = '#FFC107';
      ctx.beginPath();
      ctx.ellipse(-30, -10, 16, 22, Math.PI/4, 0, Math.PI*2);
      ctx.ellipse(10, -15, 18, 24, -Math.PI/6, 0, Math.PI*2);
      ctx.fill();

      // Pomegranates (Vibrant ruby red)
      ctx.fillStyle = '#C2185B';
      ctx.beginPath();
      ctx.arc(-10, -5, 18, 0, Math.PI*2);
      ctx.arc(32, -8, 16, 0, Math.PI*2);
      ctx.fill();
      // Little crowns on pomegranates
      ctx.fillStyle = '#C2185B';
      ctx.beginPath();
      ctx.moveTo(-10, -23);
      ctx.lineTo(-14, -28);
      ctx.lineTo(-10, -25);
      ctx.lineTo(-6, -28);
      ctx.closePath();
      ctx.fill();

      // Bananas (Yellow curved shapes)
      ctx.strokeStyle = '#FFEE58';
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.arc(10, -5, 28, 0, Math.PI/2);
      ctx.stroke();

      // Front Wood slats
      ctx.fillStyle = '#9C623B';
      ctx.fillRect(-70, 10, 140, 30); // bottom
      ctx.fillRect(-70, -20, 140, 25); // middle

      // Wood textures
      ctx.fillStyle = '#5A3319';
      ctx.fillRect(-70, 5, 140, 5);
      ctx.fillRect(-70, -25, 140, 5);

      // Corner pillars
      ctx.fillStyle = '#B17A57';
      ctx.fillRect(-70, -40, 12, 80);
      ctx.fillRect(58, -40, 12, 80);

      ctx.restore();
      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  // --- MEAT CONTAINER CANVAS RENDERER ---
  useEffect(() => {
    const canvas = meatCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let time = 0;
    const width = 400;
    const height = 400;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Mist/cold fog particles falling slowly downwards
    const particles: {x: number, y: number, r: number, speedY: number, alpha: number, speedX: number}[] = [];
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * (height / 2) + height / 2, // starts at bottom half
        r: Math.random() * 25 + 10,
        speedY: Math.random() * 0.4 + 0.2,
        speedX: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.15 + 0.05
      });
    }

    const draw = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Cool blue neon radial glow
      const glow = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, 180);
      glow.addColorStop(0, 'rgba(92, 156, 230, 0.08)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Draw container model (Refrigerated container)
      ctx.save();
      ctx.translate(width/2, height/2);
      ctx.scale(1, 1);

      // Main container metal box
      ctx.fillStyle = '#111E2E';
      ctx.strokeStyle = '#5C9CE6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(-80, -50, 160, 100, 4);
      ctx.fill();
      ctx.stroke();

      // Ribs of container (refrigerated grooved lines)
      ctx.strokeStyle = 'rgba(92, 156, 230, 0.3)';
      ctx.lineWidth = 4;
      for (let x = -60; x <= 60; x += 15) {
        ctx.beginPath();
        ctx.moveTo(x, -46);
        ctx.lineTo(x, 46);
        ctx.stroke();
      }

      // Neon Cool lines (Refrigerated temperature status glow)
      ctx.strokeStyle = `rgba(92, 156, 230, ${0.6 + Math.sin(time * 3) * 0.2})`; // pulsating cool status
      ctx.lineWidth = 2;
      ctx.beginPath();
      // top status bar
      ctx.moveTo(-70, -40);
      ctx.lineTo(70, -40);
      ctx.stroke();

      // Digital Temp reading " -18 °C "
      ctx.fillStyle = '#5C9CE6';
      ctx.font = 'bold 9px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('-18 °C TEMP ACTIVE', 0, 3);
      ctx.font = '7px sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.fillText('HALAL EXPORT LOCK', 0, 15);

      ctx.restore();

      // Draw Mist/fog particles cascading downwards
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(92, 156, 230, 0.1)';
      particles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y > height + 20) {
          p.y = height/2 - 20;
          p.x = Math.random() * width;
        }
        ctx.fillStyle = `rgba(180, 210, 245, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.shadowBlur = 0;

      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section id="featured" className="relative w-full bg-[#07111E] overflow-hidden">
      
      {/* Background Section Intro */}
      <div className="py-20 md:py-24 text-center max-w-4xl mx-auto px-6 relative z-10">
        <span className="text-xs md:text-sm font-mono tracking-[0.4em] text-[#FF8C32] font-semibold uppercase mb-3 block">
          CINEMATIC EXPERIENCE
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6">
          Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#FF8C32]">Featured Products</span>
        </h2>
        <p className="text-[#B5C0CF] text-base md:text-lg">
          Dive deep into our dynamic export lines. Each product undergoes individual micro-climate logistics, specialized processing, and custom state validation.
        </p>
      </div>

      {/* RICE SECTION */}
      <div className="py-16 md:py-28 border-t border-white/5 bg-[#0E1B2D]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#F5A623] uppercase">
              PRODUCT 01 • PREMIUM GRAIN
            </span>
            <h3 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
              Basmati & White Rice
            </h3>
            <p className="text-lg text-[#B5C0CF] leading-relaxed">
              Our extra-long grain Basmati Rice is globally renowned for its enticing fragrance, separate fluffy grains, and exquisite taste. Sourced straight from pesticide-free cooperative farms, graded with high-def Sortex technology.
            </p>
            {/* Specs list */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Origin</span>
                <p className="text-sm font-semibold text-white mt-1">Himalayan Foothills, India</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Export Grade</span>
                <p className="text-sm font-semibold text-white mt-1">SGS Extra-Premium Quality</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Min Order (MOQ)</span>
                <p className="text-sm font-semibold text-white mt-1">20 Metric Tons</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Moisture Content</span>
                <p className="text-sm font-semibold text-white mt-1">Below 12% Stabilized</p>
              </div>
            </div>
            <button
              id="rice-quote-cta"
              onClick={() => handleRequestQuote('Premium Rice')}
              className="px-8 py-3.5 bg-[#F5A623] hover:bg-[#FF8C32] text-black font-semibold text-sm uppercase tracking-wider font-display rounded-xl transition-all hover:scale-105"
            >
              Request Rice Quote
            </button>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px] h-[400px]">
              <canvas ref={riceCanvasRef} className="w-full h-full" />
              <div className="absolute top-4 right-4 bg-[#07111E]/80 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-[#F5A623] uppercase tracking-widest">
                Floating grains
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PULSES SECTION */}
      <div className="py-16 md:py-28 border-y border-white/5 bg-[#07111E]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[400px] h-[400px]">
              <canvas ref={pulsesCanvasRef} className="w-full h-full" />
              <div className="absolute top-4 left-4 bg-[#07111E]/80 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-[#FF8C32] uppercase tracking-widest">
                Elastic Floating Sack
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#FF8C32] uppercase">
              PRODUCT 02 • ORGANIC LEGUMES
            </span>
            <h3 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
              Organic Pulses & Lentils
            </h3>
            <p className="text-lg text-[#B5C0CF] leading-relaxed">
              Our protein-packed Indian pulses include premium Toor Dal, Chana Dal, Chickpeas, and Peas. Cleaned with multi-layered optical laser sorters (Sortex) to ensure uniform grain size, zero impurities, and perfect organic grading.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Origin</span>
                <p className="text-sm font-semibold text-white mt-1">Karnataka Deccan Plateau</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Protein content</span>
                <p className="text-sm font-semibold text-white mt-1">22% - 25% High Nutrition</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Min Order (MOQ)</span>
                <p className="text-sm font-semibold text-white mt-1">15 Metric Tons</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Sortex Quality</span>
                <p className="text-sm font-semibold text-white mt-1">99.9% Clean Grade A</p>
              </div>
            </div>
            <button
              id="pulses-quote-cta"
              onClick={() => handleRequestQuote('Organic Pulses')}
              className="px-8 py-3.5 bg-[#FF8C32] hover:bg-[#FF5E36] text-black font-semibold text-sm uppercase tracking-wider font-display rounded-xl transition-all hover:scale-105"
            >
              Request Pulses Quote
            </button>
          </div>
        </div>
      </div>

      {/* SPICES SECTION */}
      <div className="py-16 md:py-28 border-b border-white/5 bg-[#0E1B2D]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#FF5E36] uppercase">
              PRODUCT 03 • AROMATIC SPICES
            </span>
            <h3 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
              Luxury Spice Selection
            </h3>
            <p className="text-lg text-[#B5C0CF] leading-relaxed">
              Harvested in single-origin spice fields of the Western Ghats, our Turmeric, Cardamom, Cumin, and Chilies are evaluated for intense curcumins and essential oils. No artificial colorings or chemical residuals.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Origin</span>
                <p className="text-sm font-semibold text-white mt-1">Kerala & Southern India</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Active Compound</span>
                <p className="text-sm font-semibold text-white mt-1">High Curcumin / Piperine</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Min Order (MOQ)</span>
                <p className="text-sm font-semibold text-white mt-1">5 Metric Tons</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Purity Level</span>
                <p className="text-sm font-semibold text-white mt-1">100% Organic Certified</p>
              </div>
            </div>
            <button
              id="spices-quote-cta"
              onClick={() => handleRequestQuote('Luxury Spices')}
              className="px-8 py-3.5 bg-[#FF5E36] hover:bg-[#FF8C32] text-black font-semibold text-sm uppercase tracking-wider font-display rounded-xl transition-all hover:scale-105"
            >
              Request Spices Quote
            </button>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px] h-[400px]">
              <canvas ref={spicesCanvasRef} className="w-full h-full" />
              <div className="absolute top-4 right-4 bg-[#07111E]/80 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-[#FF5E36] uppercase tracking-widest">
                Floating spice dust
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VEGETABLES SECTION */}
      <div className="py-16 md:py-28 border-b border-white/5 bg-[#07111E]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[400px] h-[400px]">
              <canvas ref={vegCanvasRef} className="w-full h-full" />
              <div className="absolute top-4 left-4 bg-[#07111E]/80 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-[#4CAF50] uppercase tracking-widest">
                Swaying Crate Lid
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#4CAF50] uppercase">
              PRODUCT 04 • HORTICULTURE
            </span>
            <h3 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-[#4CAF50]">
              Fresh Vegetables
            </h3>
            <p className="text-lg text-[#B5C0CF] leading-relaxed">
              Harvested straight from Bidar Valley, our export quality Red Onions, Fresh Potatoes, Ginger, and Garlic are optimized for durability in ocean transit. Packed in robust ventilated wooden crates or eco mesh sacks.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Origin</span>
                <p className="text-sm font-semibold text-white mt-1">Bidar Valley, Karnataka</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Transit Prep</span>
                <p className="text-sm font-semibold text-white mt-1">Dynamic Field pre-cooling</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Min Order (MOQ)</span>
                <p className="text-sm font-semibold text-white mt-1">12 Metric Tons</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Shelf Life</span>
                <p className="text-sm font-semibold text-white mt-1">Highly Prolonged (30+ Days)</p>
              </div>
            </div>
            <button
              id="veg-quote-cta"
              onClick={() => handleRequestQuote('Fresh Vegetables')}
              className="px-8 py-3.5 bg-[#4CAF50] hover:bg-[#388E3C] text-black font-semibold text-sm uppercase tracking-wider font-display rounded-xl transition-all hover:scale-105"
            >
              Request Vegetables Quote
            </button>
          </div>
        </div>
      </div>

      {/* FRUITS SECTION */}
      <div className="py-16 md:py-28 border-b border-white/5 bg-[#0E1B2D]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#E2B13C] uppercase">
              PRODUCT 05 • FRESH ORCHARDS
            </span>
            <h3 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
              Vibrant Tropical Fruits
            </h3>
            <p className="text-lg text-[#B5C0CF] leading-relaxed">
              India produces the sweetest tropical fruits. We export hand-picked Alphonso & Kesar Mangoes, fresh Grapes, and ruby red Pomegranates under APEDA standards. Our fruits undergo professional waxing and transit cooling.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Origin</span>
                <p className="text-sm font-semibold text-white mt-1">Maharashtra & Karnataka</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Standard</span>
                <p className="text-sm font-semibold text-white mt-1">GlobalGAP & APEDA Certified</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Min Order (MOQ)</span>
                <p className="text-sm font-semibold text-white mt-1">10 Metric Tons (Reefer)</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Transit Packaging</span>
                <p className="text-sm font-semibold text-white mt-1">Thermal ventilated fiber cases</p>
              </div>
            </div>
            <button
              id="fruits-quote-cta"
              onClick={() => handleRequestQuote('Fresh Fruits')}
              className="px-8 py-3.5 bg-[#E2B13C] hover:bg-[#FF8C32] text-black font-semibold text-sm uppercase tracking-wider font-display rounded-xl transition-all hover:scale-105"
            >
              Request Fruits Quote
            </button>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px] h-[400px]">
              <canvas ref={fruitsCanvasRef} className="w-full h-full" />
              <div className="absolute top-4 right-4 bg-[#07111E]/80 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-[#E2B13C] uppercase tracking-widest">
                Sunbeam shadows
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MEAT SECTION */}
      <div className="py-16 md:py-28 border-b border-white/5 bg-[#07111E]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[400px] h-[400px]">
              <canvas ref={meatCanvasRef} className="w-full h-full" />
              <div className="absolute top-4 left-4 bg-[#07111E]/80 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-[#5C9CE6] uppercase tracking-widest">
                Cool Ice Mist
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#5C9CE6] uppercase">
              PRODUCT 06 • COLD-CHAIN MEAT
            </span>
            <h3 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-[#5C9CE6]">
              Halal Export Meat
            </h3>
            <p className="text-lg text-[#B5C0CF] leading-relaxed">
              We supply de-boned, vacuum-packed chilled & frozen Buffalo and Sheep carcasses processed in world-class government approved APEDA abattoirs. Completely processed under pristine Halal guidelines, instantly blast-frozen to -40°C.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Origin</span>
                <p className="text-sm font-semibold text-white mt-1">APEDA Processing Plants, India</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Sanitation</span>
                <p className="text-sm font-semibold text-white mt-1">HACCP & ISO 22000 Certified</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Min Order (MOQ)</span>
                <p className="text-sm font-semibold text-white mt-1">28 Metric Tons (40ft Reefer)</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#B5C0CF]">Blast Temperature</span>
                <p className="text-sm font-semibold text-white mt-1">-40°C Flash Frozen (-18°C Transit)</p>
              </div>
            </div>
            <button
              id="meat-quote-cta"
              onClick={() => handleRequestQuote('Halal Export Meat')}
              className="px-8 py-3.5 bg-[#5C9CE6] hover:bg-[#3478C7] text-black font-semibold text-sm uppercase tracking-wider font-display rounded-xl transition-all hover:scale-105"
            >
              Request Meat Quote
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
