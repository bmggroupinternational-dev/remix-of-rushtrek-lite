import dohaImage from "@/assets/destinations/doha.png";

export interface TravelPackage {
  id: string;
  destination: string;
  country: string;
  duration: string;
  startingPrice: number;
  currency: string;
  validFrom?: string;
  validTo?: string;
  category: 'beach' | 'city' | 'adventure' | 'sports' | 'family';
  inclusions: string[];
  image: string;
  featured: boolean;
}

export interface LocalExperience {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const packages: TravelPackage[] = [
  {
    id: "bali-family",
    destination: "Bali",
    country: "Indonesia",
    duration: "5 Nights / 6 Days",
    startingPrice: 872,
    currency: "USD",
    validFrom: "Jan 2025",
    validTo: "Dec 2025",
    category: "family",
    inclusions: ["Private villa with pool", "Temple tours", "Rice terrace visit"],
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    featured: true,
  },
  {
    id: "maldives-beach",
    destination: "Maldives",
    country: "Maldives",
    duration: "4 Nights / 5 Days",
    startingPrice: 2121,
    currency: "USD",
    validFrom: "Jan 2025",
    validTo: "Dec 2025",
    category: "beach",
    inclusions: ["Water villa stay", "Full board meals", "Snorkeling trip"],
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    featured: true,
  },
  {
    id: "doha-city",
    destination: "Doha",
    country: "Qatar",
    duration: "4 Nights / 5 Days",
    startingPrice: 1050,
    currency: "USD",
    validFrom: "Jan 2025",
    validTo: "Dec 2025",
    category: "city",
    inclusions: ["Luxury hotel stay", "Desert safari", "City tour"],
    image: dohaImage,
    featured: true,
  },
  {
    id: "dubai-city",
    destination: "Dubai",
    country: "UAE",
    duration: "5 Nights / 6 Days",
    startingPrice: 772,
    currency: "USD",
    validFrom: "Jan 2025",
    validTo: "Dec 2025",
    category: "city",
    inclusions: ["5-star hotel accommodation", "Airport transfers", "City tour included"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    featured: true,
  },
  {
    id: "capetown-adventure",
    destination: "Cape Town",
    country: "South Africa",
    duration: "6 Nights / 7 Days",
    startingPrice: 1208,
    currency: "USD",
    validFrom: "Jan 2025",
    validTo: "Dec 2025",
    category: "adventure",
    inclusions: ["Table Mountain tour", "Cape Town city tour", "Wine tasting"],
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    featured: true,
  },
  {
    id: "singapore-family",
    destination: "Singapore",
    country: "Singapore",
    duration: "4 Nights / 5 Days",
    startingPrice: 918,
    currency: "USD",
    validFrom: "Jan 2025",
    validTo: "Dec 2025",
    category: "family",
    inclusions: ["Universal Studios pass", "Night Safari", "Gardens by the Bay"],
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    featured: true,
  },
  {
    id: "mauritius-beach",
    destination: "Mauritius",
    country: "Mauritius",
    duration: "5 Nights / 6 Days",
    startingPrice: 1805,
    currency: "USD",
    validFrom: "Jan 2025",
    validTo: "Dec 2025",
    category: "beach",
    inclusions: ["Beachfront resort", "Catamaran cruise", "Spa treatment"],
    image: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800&q=80",
    featured: false,
  },
  {
    id: "seychelles-beach",
    destination: "Seychelles",
    country: "Seychelles",
    duration: "5 Nights / 6 Days",
    startingPrice: 877,
    currency: "USD",
    validFrom: "Jan 2025",
    validTo: "Dec 2025",
    category: "beach",
    inclusions: ["Island resort stay", "Boat excursions", "Nature reserve tour"],
    image: "https://images.unsplash.com/photo-1589979481223-deb893043163?w=800&q=80",
    featured: false,
  },
  {
    id: "thailand-adventure",
    destination: "Thailand",
    country: "Thailand",
    duration: "7 Nights / 8 Days",
    startingPrice: 668,
    currency: "USD",
    validFrom: "Jan 2025",
    validTo: "Dec 2025",
    category: "adventure",
    inclusions: ["Bangkok & Phuket combo", "Island hopping", "Thai cooking class"],
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
    featured: false,
  },
  {
    id: "istanbul-city",
    destination: "Istanbul",
    country: "Turkey",
    duration: "6 Nights / 7 Days",
    startingPrice: 872,
    currency: "USD",
    validFrom: "Jan 2025",
    validTo: "Dec 2025",
    category: "city",
    inclusions: ["Historic tours", "Bosphorus cruise", "Turkish bath experience"],
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=80",
    featured: false,
  },
  {
    id: "zimbabwe-adventure",
    destination: "Zimbabwe",
    country: "Zimbabwe",
    duration: "5 Nights / 6 Days",
    startingPrice: 1035,
    currency: "USD",
    validFrom: "Jan 2025",
    validTo: "Dec 2025",
    category: "adventure",
    inclusions: ["Victoria Falls tour", "Safari game drives", "Zambezi River cruise"],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    featured: false,
  },
  {
    id: "malaysia-family",
    destination: "Malaysia",
    country: "Malaysia",
    duration: "5 Nights / 6 Days",
    startingPrice: 412,
    currency: "USD",
    validFrom: "Jan 2025",
    validTo: "Dec 2025",
    category: "family",
    inclusions: ["Kuala Lumpur city tour", "Petronas Towers visit", "Batu Caves trip"],
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
    featured: false,
  },
  {
    id: "vietnam-adventure",
    destination: "Vietnam",
    country: "Vietnam",
    duration: "6 Nights / 7 Days",
    startingPrice: 560,
    currency: "USD",
    validFrom: "Jan 2025",
    validTo: "Dec 2025",
    category: "adventure",
    inclusions: ["Ha Long Bay cruise", "Hanoi city tour", "Cu Chi Tunnels visit"],
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
    featured: false,
  },
  {
    id: "egypt-adventure",
    destination: "Egypt",
    country: "Egypt",
    duration: "7 Nights / 8 Days",
    startingPrice: 1554,
    currency: "USD",
    validFrom: "Jan 2025",
    validTo: "Dec 2025",
    category: "adventure",
    inclusions: ["Pyramids of Giza tour", "Nile River cruise", "Luxor temples visit"],
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80",
    featured: false,
  },
];

export const localExperiences: LocalExperience[] = [
  {
    id: "safari",
    title: "Safari Experiences",
    description: "Witness the Big Five and Tanzania's incredible wildlife in Serengeti, Ngorongoro, and beyond.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    link: "https://rushtrektours.com/experiences/",
  },
  {
    id: "zanzibar",
    title: "Zanzibar Escapes",
    description: "Pristine beaches, historic Stone Town, and spice tours on the enchanting island of Zanzibar.",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=800&q=80",
    link: "https://rushtrektours.com/destinations/",
  },
  {
    id: "kilimanjaro",
    title: "Mount Kilimanjaro",
    description: "Conquer Africa's highest peak with expert guides and carefully planned routes.",
    image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=800&q=80",
    link: "https://www.rushtrektours.com",
  },
];

export const ticketingFAQ = [
  {
    question: "How quickly can I get a ticket quote?",
    answer: "We typically respond within 2-4 hours during business hours. For urgent requests, reach us directly on WhatsApp for faster assistance."
  },
  {
    question: "Can you help with multi-city or complex itineraries?",
    answer: "Absolutely! We specialize in complex routing and can find the best combinations of flights to optimize your travel time and budget."
  },
  {
    question: "Do you handle group bookings?",
    answer: "Yes, we handle group bookings for corporate travel, family reunions, weddings, and more. Contact us for special group rates."
  },
  {
    question: "What if I need to change or cancel my ticket?",
    answer: "We assist with changes and rebooking based on airline policies. Fees and availability depend on your ticket type and the airline's rules."
  },
  {
    question: "Which airlines do you work with?",
    answer: "We have access to all major global airlines and can search across multiple carriers to find you the best options for your route."
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Consultation & Planning",
    description: "We discuss your travel preferences, dates, and create a custom itinerary.",
    icon: "MessageSquare",
  },
  {
    step: 2,
    title: "Air Ticketing",
    description: "We secure the best flights and confirm your bookings.",
    icon: "Plane",
  },
  {
    step: 3,
    title: "Hotel Reservations",
    description: "Handpicked accommodations matched to your style and budget.",
    icon: "Hotel",
  },
  {
    step: 4,
    title: "Transfers & Transport",
    description: "Airport pickups, chauffeurs, and seamless ground transport.",
    icon: "Car",
  },
  {
    step: 5,
    title: "Tours & Activities",
    description: "Curated experiences and local excursions for every destination.",
    icon: "Compass",
  },
  {
    step: 6,
    title: "24/7 Support",
    description: "Round-the-clock assistance from departure to return.",
    icon: "Headphones",
  },
];
