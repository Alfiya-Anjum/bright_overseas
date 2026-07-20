import { Product, ProcessStep, MapDestination, WhyChooseCard, Certification, GalleryItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'rice',
    name: 'Premium Rice',
    headline: "India's Royal Basmati & Non-Basmati Grains",
    description: 'Aromatic, extra-long grains harvested from the fertile plains of the Indo-Gangetic region, carefully aged to perfection.',
    detailedDescription: 'Our premium Basmati rice features exquisite aroma, fluffy texture, and grain elongation of up to twice its raw length upon cooking. We select our harvests from pristine soils irrigated by pure mineral-rich Himalayan rivers, ensuring unmatched quality.',
    origin: 'Himalayan Foothills & Karnataka, India',
    moq: '20 Metric Tons (1 Full Container Load)',
    exportQuality: 'SGS Certified Premium Export Grade',
    packaging: 'Luxury jute bags, BOPP premium bags, and customized retail branding packaging (1kg to 50kg).',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800',
    accentColor: '#F5A623', // Gold
    glowColor: 'rgba(245, 166, 35, 0.4)',
    particlesColor: '#FFD700',
    category: 'rice'
  },
  {
    id: 'pulses',
    name: 'Organic Pulses',
    headline: 'Nutrient-Rich, High-Protein Indian Legumes',
    description: 'Premium quality chickpeas, lentils, and peas sourced from Karnataka farmers, sorted using high-definition optical laser sorters.',
    detailedDescription: 'Our rich selection of pulses includes premium Chana Dal, Toor Dal, Red Lentils, and Bengal Gram. Harvested under natural rain-fed conditions, these pulses are triple-cleaned, unpolished, and packed with plant-based protein and dietary fiber.',
    origin: 'Deccan Plateau, Bidar (Karnataka), India',
    moq: '15 Metric Tons',
    exportQuality: 'Grade A Sortex Cleaned, Fit for Human Consumption',
    packaging: 'High-strength laminated PP bags, multi-walled paper sacks (25kg/50kg).',
    image: 'https://images.unsplash.com/photo-1547058881-aa0edd92aab3?auto=format&fit=crop&q=80&w=800',
    accentColor: '#FF8C32', // Orange
    glowColor: 'rgba(255, 140, 50, 0.4)',
    particlesColor: '#FFA500',
    category: 'pulses'
  },
  {
    id: 'spices',
    name: 'Luxury Spices',
    headline: 'Aromatic Treasures of Indian Soil',
    description: 'Single-origin Turmeric, Cardamom, Black Pepper, and Red Chilies packing intense essential oil content.',
    detailedDescription: 'India’s soil produces the world’s most potent spices. Our selection is sourced directly from certified organic estates. We test every batch for volatile oil content, ensuring maximum flavor, deep natural colors, and zero chemical adulteration.',
    origin: 'Western Ghats & Southern India',
    moq: '5 Metric Tons',
    exportQuality: 'ASTA Cleanliness Quality Standard, High Curcumin/Piperine Content',
    packaging: 'Vacuum-sealed air-tight foil lining packs inside protective jute cases.',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800',
    accentColor: '#FF5E36', // Bright red-orange
    glowColor: 'rgba(255, 94, 54, 0.4)',
    particlesColor: '#FF4500',
    category: 'spices'
  },
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    headline: 'Sun-Ripened Tropical Pleasures',
    description: 'Juicy Alphonso and Kesar Mangoes, seedless Grapes, Cavendish Bananas, and rich ruby Pomegranates.',
    detailedDescription: 'Hand-picked at early maturity to guarantee natural ripening during safe transit. Our tropical fruits undergo professional post-harvest wash, phytosanitary cleaning, and protective waxing, resulting in unmatched freshness.',
    origin: 'Karnataka, Maharashtra & Andhra Pradesh',
    moq: '10 Metric Tons (Reefer Containers)',
    exportQuality: 'APEDA Approved, GlobalGAP Certified',
    packaging: 'Cushioned corrugated telescopic boxes with thermal ventilation.',
    image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=800',
    accentColor: '#E2B13C', // Deep yellow
    glowColor: 'rgba(226, 177, 60, 0.4)',
    particlesColor: '#FFFF00',
    category: 'fruits'
  },
  {
    id: 'vegetables',
    name: 'Fresh Vegetables',
    headline: 'Nutritious & Farm-Fresh Farm Produce',
    description: 'Premium red Onions, farm-fresh Potatoes, Ginger, Garlic, and Green Chilies selected for long shelf-life.',
    detailedDescription: 'Our vegetables are harvested directly from Karnataka farms on the day of sorting. They undergo cooling treatments to extract field heat, safeguarding structural cell life and original color throughout global sea freight schedules.',
    origin: 'Bidar Valley & Karnataka Plains',
    moq: '12 Metric Tons (Cold-Chain Reefer)',
    exportQuality: 'Phytosanitary Checked, Zero Chemical Pesticides Residuals',
    packaging: 'Mesh net bags, well-ventilated sturdy wooden or fiberboard crates.',
    image: 'https://images.unsplash.com/photo-1566385101042-1a010c129fa6?auto=format&fit=crop&q=80&w=800',
    accentColor: '#4CAF50', // Fresh green
    glowColor: 'rgba(76, 175, 80, 0.4)',
    particlesColor: '#98FB98',
    category: 'vegetables'
  },
  {
    id: 'meat',
    name: 'Halal Export Meat',
    headline: 'Premium Grade Hygienic Meat Exports',
    description: 'De-boned, vacuum-packed, chilled & frozen Buffalo meat and Sheep carcasses processed under strict sanitary standards.',
    detailedDescription: 'Processed in government-approved state-of-the-art modern abattoirs. We maintain strict compliance with global Halal standards, instant Blast Freezing (at -40°C), and unbroken sub-zero logistics chains for maximum food safety.',
    origin: 'APEDA Approved Processing Plants, India',
    moq: '28 Metric Tons (1 Full 40ft Reefer Container)',
    exportQuality: 'SGS/APEDA Clean Certificate, ISO 22000 Food Safety',
    packaging: 'IWP (Individually Wrapped Packets) inside heavy-duty wax-coated master shipping boxes.',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=800',
    accentColor: '#5C9CE6', // Cold blue
    glowColor: 'rgba(92, 156, 230, 0.4)',
    particlesColor: '#E0FFFF',
    category: 'meat'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Source & Farm Selection',
    description: 'Ethical direct sourcing from registered cooperative farmer networks in Karnataka.',
    details: [
      'Soil nutrient analysis & water purity checks',
      'Contract farming with sustainable agricultural methods',
      'Complete seed-to-harvest traceability'
    ],
    icon: 'Wheat'
  },
  {
    id: 2,
    title: 'Quality Inspection',
    description: 'Multistage assessment in state-of-the-art laboratory testing facilities.',
    details: [
      'Color-sorting using high-res optical Sortex systems',
      'Moisture content stabilization & sizing checks',
      'Zero-residual pesticides & phytosanitary tests'
    ],
    icon: 'ShieldCheck'
  },
  {
    id: 3,
    title: 'Eco-Luxury Packaging',
    description: 'Tailored protective packing that maintains peak nutritional state.',
    details: [
      'Food-grade vacuum sealing for spices and legumes',
      'Gas-flushed pouches for structural oxygen isolation',
      'Moisture-barrier, biodegradable jute wrapping'
    ],
    icon: 'PackageCheck'
  },
  {
    id: 4,
    title: 'Smart Warehousing',
    description: 'Failsafe micro-climate storage matching dynamic crop categories.',
    details: [
      'Temperature & relative humidity digital automation',
      'Automated stock tracking matching FIFO systems',
      'Periodic scientific pest control & sanitation logs'
    ],
    icon: 'Warehouse'
  },
  {
    id: 5,
    title: 'Container Loading',
    description: 'Sealing export cargo inside heavy duty ISO intermodal containers.',
    details: [
      'Strict container hygiene and pre-cooling audits',
      'Shock-absorbing structural cargo strapping',
      'Tamper-evident customs bolt-sealing'
    ],
    icon: 'Container'
  },
  {
    id: 6,
    title: 'Precision Sea Freight',
    description: 'Optimized global ocean freight transit via premier shipping alliances.',
    details: [
      'Satellite-tracked GPS location coordinates',
      'Real-time IoT temperature monitoring (Reefers)',
      'Customs documentation clearance & Bill of Lading management'
    ],
    icon: 'Ship'
  },
  {
    id: 7,
    title: 'Global Delivery',
    description: 'Doorstep custom release delivery to partners across key global terminals.',
    details: [
      'Rapid customs terminal clearance protocols',
      'Inland secure logistics to partner distribution networks',
      'Arrival quality inspection signature closure'
    ],
    icon: 'Globe'
  }
];

export const MAP_DESTINATIONS: MapDestination[] = [
  {
    id: 'middle_east',
    name: 'Middle East (Dubai, Riyadh)',
    coordinates: { x: 55, y: 48 },
    products: ['Premium Basmati Rice', 'Luxury Spices', 'Halal Export Meat', 'Fresh Mangoes'],
    volume: '15,000+ Metric Tons/Year'
  },
  {
    id: 'europe',
    name: 'Europe (Rotterdam, Hamburg, London)',
    coordinates: { x: 42, y: 28 },
    products: ['Organic Lentils', 'Luxury Spices', 'Fresh Pomegranates', 'Grapes'],
    volume: '8,500+ Metric Tons/Year'
  },
  {
    id: 'usa',
    name: 'North America (New York, Houston, LA)',
    coordinates: { x: 18, y: 35 },
    products: ['Premium Rice', 'Luxury Cardamom', 'Gluten-free pulses'],
    volume: '12,000+ Metric Tons/Year'
  },
  {
    id: 'singapore',
    name: 'Southeast Asia (Singapore, Kuala Lumpur)',
    coordinates: { x: 75, y: 62 },
    products: ['Fresh Onions', 'Potatoes', 'Basmati Rice', 'Halal Mutton'],
    volume: '10,200+ Metric Tons/Year'
  },
  {
    id: 'australia',
    name: 'Oceania (Sydney, Melbourne)',
    coordinates: { x: 88, y: 82 },
    products: ['Luxury Spices', 'Premium Basmati Rice', 'Organic Pulses'],
    volume: '5,400+ Metric Tons/Year'
  },
  {
    id: 'africa',
    name: 'East Africa (Mombasa, Dar es Salaam)',
    coordinates: { x: 50, y: 68 },
    products: ['Non-Basmati White Rice', 'Toor Dal', 'Red Onions'],
    volume: '6,200+ Metric Tons/Year'
  }
];

export const WHY_CHOOSE_CARDS: WhyChooseCard[] = [
  {
    id: 1,
    title: 'Premium Quality',
    description: 'Multi-stage testing protocols and optical color-sorting ensure that only the most flawless grains and produce enter our shipping packaging.',
    iconName: 'Award',
    glowColor: 'rgba(245, 166, 35, 0.15)'
  },
  {
    id: 2,
    title: 'Fresh Products',
    description: 'We synchronize harvesting times directly with refrigerated freight booking schedules, preserving organic moisture, structural flavor, and nutrients.',
    iconName: 'Leaf',
    glowColor: 'rgba(76, 175, 80, 0.15)'
  },
  {
    id: 3,
    title: 'Reliable Shipping',
    description: 'Partnered with elite shipping alliances (Maersk, MSC, CMA CGM) to guarantee consistent space availability, timely departures, and transit safety.',
    iconName: 'Ship',
    glowColor: 'rgba(92, 156, 230, 0.15)'
  },
  {
    id: 4,
    title: 'Competitive Pricing',
    description: 'Direct procurement from cooperative farm networks bypassing intermediaries enables us to pass substantial cost savings onto global importers.',
    iconName: 'Coins',
    glowColor: 'rgba(255, 140, 50, 0.15)'
  },
  {
    id: 5,
    title: 'Trusted Partnerships',
    description: 'Operating with strict professional transparency, real-time tracking, active shipment audits, and contract flexibility for long-term buyers.',
    iconName: 'Handshake',
    glowColor: 'rgba(255, 94, 54, 0.15)'
  },
  {
    id: 6,
    title: 'Global Reach',
    description: 'Certified exports compliant with custom agencies across North America, European Union, Gulf States, and key Asia-Pacific terminals.',
    iconName: 'Globe',
    glowColor: 'rgba(245, 166, 35, 0.15)'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: 'APEDA Member License',
    issuer: 'Agricultural & Processed Food Products Export Development Authority',
    year: '2026',
    regNo: 'APEDA-AP-2025-095138',
    color: 'border-amber-500/30 bg-amber-500/5'
  },
  {
    id: 2,
    title: 'FSSAI Export Licence',
    issuer: 'Food Safety and Standards Authority of India',
    year: '2025',
    regNo: 'FSSAI-11524021000438',
    color: 'border-green-500/30 bg-green-500/5'
  },
  {
    id: 3,
    title: 'ISO 22000:2018 Certification',
    issuer: 'Intertek Food Quality Management System',
    year: '2025',
    regNo: 'ISO-FMS-784013-IN',
    color: 'border-blue-500/30 bg-blue-500/5'
  },
  {
    id: 4,
    title: 'SGS Premium Seal',
    issuer: 'SGS Food Inspections & Quality Audit standard',
    year: '2026',
    regNo: 'SGS-FI-9051-2026',
    color: 'border-orange-500/30 bg-orange-500/5'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'High-Tech Rice Grading',
    category: 'Warehouse',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Bespoke Premium Spices Packaging',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Ocean Carrier Loading at Port',
    category: 'Containers',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Cold-Chain Refrigerated Containers',
    category: 'Containers',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'Fragrant Turmeric Harvest Processing',
    category: 'Spices',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    title: 'Bidar Valley Organic Crops Sorting',
    category: 'Fresh Produce',
    image: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=800'
  }
];
