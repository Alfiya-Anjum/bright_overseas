export interface Product {
  id: string;
  name: string;
  headline: string;
  description: string;
  detailedDescription: string;
  origin: string;
  moq: string;
  exportQuality: string;
  packaging: string;
  image: string;
  accentColor: string;
  glowColor: string;
  particlesColor: string;
  category: 'rice' | 'pulses' | 'spices' | 'vegetables' | 'fruits' | 'meat';
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface MapDestination {
  id: string;
  name: string;
  coordinates: { x: number; y: number }; // Percentage from top-left (0 to 100)
  products: string[];
  volume: string;
}

export interface WhyChooseCard {
  id: number;
  title: string;
  description: string;
  iconName: string;
  glowColor: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  year: string;
  regNo: string;
  color: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}
