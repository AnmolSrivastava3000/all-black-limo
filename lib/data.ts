export const BUSINESS_INFO = {
  name: "All Black Limo LLC",
  brand: "ALL BLACK LIMO",
  tagline: "Luxury transportation. Without compromise.",
  subtitle: "Seattle's premier private chauffeur service across the Puget Sound region.",
  phoneDisplay: "(206) 672-8281",
  phoneHref: "tel:+12066728281",
  email: "reservations@allblacklimoseattle.com",
  location: "Seattle / Puget Sound, Washington",
  airport: "Seattle-Tacoma International Airport (SeaTac)",
  cruiseTerminals: ["Pier 66 (Bell Street Cruise Terminal)", "Pier 91 (Smith Cove Cruise Terminal)"],
  serviceAreas: ["Seattle", "Bellevue", "Tacoma", "Gig Harbor", "Redmond", "Kirkland", "SeaTac"],
  officialUrl: "https://allblacklimoseattle.com",
};

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "airport",
    number: "01",
    title: "SeaTac Airport Transfers",
    description:
      "Seamless arrivals and departures at Seattle-Tacoma International Airport (SEA) and Boeing Field (BFI) with real-time flight tracking and curbside or baggage-claim meet-and-greet.",
    highlights: ["Real-time flight monitoring", "Complimentary wait time window", "Direct curbside or terminal pickup"],
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "cruise",
    number: "02",
    title: "Pier 66 & Pier 91 Cruise Transfers",
    description:
      "Direct, luggage-ready private transfers between SeaTac Airport, downtown Seattle hotels, and both Pier 66 and Pier 91 Seattle cruise terminals.",
    highlights: ["Pier 66 & Pier 91 terminal access", "High-capacity luggage accommodations", "Group & family Sprinter options"],
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "corporate",
    number: "03",
    title: "Corporate & Executive Chauffeur",
    description:
      "Discreet, punctual black car service tailored for C-suite executives, roadshows, and visiting delegates across Seattle, Bellevue, and Redmond.",
    highlights: ["Quiet cabin workspace environment", "Dedicated corporate account billing", "Multi-stop itinerary coordination"],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "weddings",
    number: "04",
    title: "Weddings & Special Occasions",
    description:
      "White-glove bridal party and VIP guest transportation crafted for Pacific Northwest weddings, galas, and milestone celebrations.",
    highlights: ["Immaculate black-on-black fleet", "Formal uniformed chauffeurs", "Coordinated multi-vehicle dispatch"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "hourly",
    number: "05",
    title: "Hourly As-Directed Charter",
    description:
      "Flexible private chauffeur availability on your schedule—ideal for Woodinville wine tours, Kraken or Seahawks game days, and evening dining in downtown Seattle.",
    highlights: ["Chauffeur remains on standby", "Unlimited stops within charter window", "Custom Puget Sound routes"],
    image: "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=1000&q=80",
  },
];

export interface FleetVehicle {
  id: string;
  name: string;
  category: string;
  passengers: number;
  luggage: number;
  description: string;
  features: string[];
  image: string;
}

export const FLEET: FleetVehicle[] = [
  {
    id: "sedan",
    name: "Executive Luxury Sedan",
    category: "Sedan",
    passengers: 3,
    luggage: 3,
    description:
      "Ideal for solo executives and couples seeking a quiet, refined transfer to SeaTac or downtown Bellevue meetings.",
    features: ["Plush black leather interior", "Rear climate control", "Bottled water & device charging", "Tinted privacy glass"],
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "suv",
    name: "Full-Size Luxury SUV",
    category: "SUV",
    passengers: 6,
    luggage: 6,
    description:
      "Cadillac Escalade ESV & Chevrolet Suburban class vehicles offering commanding presence and generous cargo room for cruise or ski transfers.",
    features: ["All-wheel drive capability", "Captain's chair seating", "Extended cargo bay for cruise luggage", "Complimentary Wi-Fi on request"],
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "sprinter",
    name: "Mercedes-Benz Executive Sprinter",
    category: "Sprinter",
    passengers: 14,
    luggage: 14,
    description:
      "Stand-up cabin height and executive leather seating built for corporate roadshows, bridal parties, and Pier 66/91 cruise groups.",
    features: ["High-roof walk-in cabin", "Individual leather seating", "Dedicated rear luggage compartment", "PA & ambient cabin lighting"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "minibus",
    name: "Luxury Executive Minibus",
    category: "Minibus",
    passengers: 24,
    luggage: 24,
    description:
      "Coordinated group travel across Seattle, Tacoma, and Gig Harbor for conferences, corporate retreats, and large family events.",
    features: ["Panoramic touring windows", "Overhead & under-floor luggage bays", "Reclining executive seats", "Professional group logistics support"],
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context: string;
  source: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    quote:
      "Prompt, professional, and spotless SUV for our early morning transfer to SeaTac. Our chauffeur communicated via text upon arrival and handled all our cruise luggage effortlessly.",
    author: "Verified Seattle Traveler",
    context: "SeaTac Airport & Pier 91 Cruise Transfer",
    source: "Google Reviews Excerpt · All Black Limo Seattle",
    rating: 5,
  },
  {
    id: "rev-2",
    quote:
      "We booked All Black Limo for a corporate visit between Bellevue and downtown Seattle. Every pickup was 15 minutes early, the vehicle was immaculate, and the ride was whisper-quiet.",
    author: "Executive Client",
    context: "Bellevue Corporate Charter",
    source: "Client Feedback Excerpt · All Black Limo LLC",
    rating: 5,
  },
  {
    id: "rev-3",
    quote:
      "Used their Sprinter service for our family group heading to Pier 66. Having a single vehicle fit everyone and all our bags made embarkation day completely stress-free.",
    author: "Verified Cruise Passenger",
    context: "Pier 66 Group Transfer",
    source: "Google Reviews Excerpt · All Black Limo Seattle",
    rating: 5,
  },
];