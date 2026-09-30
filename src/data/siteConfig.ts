export interface FleetMachine {
  id: string;
  name: string;
  category: string;
  scale: string;
  power: string;
  description: string;
  features: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Master Operator';
  image: string;
}

export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  badge?: string;
}

export interface MenuCategory {
  title: string;
  categoryKey: string;
  items: MenuItem[];
}

export interface RentalRate {
  title: string;
  duration: string;
  scale: string;
  price: number;
  unit: string;
  description: string;
  popular?: boolean;
}

export interface GroupPackage {
  title: string;
  guests: string;
  duration: string;
  price: number;
  includes: string[];
  highlight?: boolean;
}

/**
 * Centrally managed business configuration for RC Cities Dubai.
 * Easily replace the WhatsApp number, social handles, or Google Maps coordinates here.
 */
export const siteConfig = {
  businessName: 'RC Cities',
  legalName: 'Remote Control Cities LLC',
  mainTagline: 'Coffee Meets Thrill',
  supportingTagline: 'Masters of Coffee and Remote Control Fun',
  city: 'Dubai',
  district: 'Nad Al Sheba',
  address: 'First, Shop 2, The Galleries, Meydan Avenue, Nad Al Sheba, Dubai, UAE',
  shortAddress: 'The Galleries, Meydan Avenue, Nad Al Sheba, Dubai',
  coordinates: {
    lat: '25.1585° N',
    lng: '55.3052° E',
    zone: 'NAS-02 // MEYDAN DISTRICT',
  },
  hours: 'Daily 10:00 AM – 11:00 PM',
  email: 'contact@rccities.ae',

  // Configurable WhatsApp Contact Number (Format: Country code without +)
  // Edit this variable to link directly to the venue's live WhatsApp business phone!
  WHATSAPP_NUMBER: '971500000000',

  // Social & Maps URLs
  INSTAGRAM_URL: 'https://instagram.com/rccities.dubai',
  GOOGLE_MAPS_URL: 'https://maps.google.com/?q=RC+Cities+Cafe+Gaming+Venue',
  BOOKING_ANCHOR: '#booking-calculator',

  // Dynamic WhatsApp Link Generator
  getWhatsAppUrl: (customMessage?: string): string => {
    const defaultMsg = "Hi RC Cities! I'd like to know more about the RC construction experience & reserve a session.";
    const encoded = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/${siteConfig.WHATSAPP_NUMBER}?text=${encoded}`;
  },

  getCorporateWhatsAppUrl: (groupSize?: string): string => {
    const msg = `Hi RC Cities! I'd like to enquire about hosting a corporate team-building event${groupSize ? ` for around ${groupSize} guests` : ''}. Could you share package availability?`;
    return `https://wa.me/${siteConfig.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  },
};

export const fleetMachines: FleetMachine[] = [
  {
    id: 'volvo-a40g-hauler',
    name: 'Volvo A40G Articulated Hauler',
    category: 'Heavy Earth Hauler',
    scale: '1:14 Scale',
    power: '6x6 Dual-Cylinder Hydraulic Dump',
    description: 'The heavyweight backbone of our construction arena. Features all-wheel 6x6 drive, heavy dump bed with dual hydraulic rams, and working beacon lights.',
    features: ['Real sand payload capacity', 'Proportional steering pivot', 'LED work lights & sound engine', 'Dual hydraulic lift'],
    difficulty: 'Beginner',
    image: '/images/rcc_fleet.jpg',
  },
  {
    id: 'heavy-crawler-excavator',
    name: 'Hydraulic Crawler Excavator',
    category: 'Trench & Bucket Excavation',
    scale: '1:14 Scale',
    power: 'Full Metal Hydraulic Arm & Dual Tracks',
    description: 'Precision engineering at its best. Multi-valve hydraulic pump system delivers real digging power to scoop and load heavy sand piles into haulers.',
    features: ['360° infinite turret rotation', 'Steel toothed bucket', 'Individual track crawler control', 'Authentic mechanical sounds'],
    difficulty: 'Intermediate',
    image: '/images/rcc_excavator.jpg',
  },
  {
    id: 'track-bulldozer',
    name: 'Track Crawler Bulldozer',
    category: 'Earth Moving & Levelling',
    scale: '1:14 Scale',
    power: 'Twin High-Torque Track Drives + Ripper',
    description: 'Move tons of scaled earth with authority. Equipped with an articulated front angle blade and rear multi-shank ripper for breaking packed substrate.',
    features: ['Heavy alloy push blade', 'Rear hydraulic ground ripper', 'High traction metal grouser tracks', 'Desert earth capability'],
    difficulty: 'Intermediate',
    image: '/images/rcc_fleet.jpg',
  },
  {
    id: 'heavy-wheel-loader',
    name: 'Articulated Wheel Loader',
    category: 'Rapid Bucket Loading',
    scale: '1:14 Scale',
    power: 'Hydraulic High-Lift Front Bucket',
    description: 'Fast, agile, and incredibly satisfying to operate. Pivot-steer mechanism paired with deep bucket scooping for rapid material handling.',
    features: ['High-capacity loading scoop', 'Center pivot hydraulic articulation', 'Heavy tread off-road tyres', 'Proportional remote response'],
    difficulty: 'Beginner',
    image: '/images/rcc_hero.jpg',
  },
];

export const rentalRates: RentalRate[] = [
  {
    title: 'Scale 1:14 Heavy Construction',
    duration: '30 Minutes',
    scale: '1:14 Hydraulic Scale',
    price: 50,
    unit: 'AED',
    description: 'Full access to heavy hydraulic excavators, Volvo dumpers, and bulldozers on the indoor sand terrain.',
    popular: true,
  },
  {
    title: '4WD Scale Crawlers',
    duration: '30 Minutes',
    scale: '1:18 & 1:24 Scale',
    price: 35,
    unit: 'AED',
    description: 'Agile four-wheel drive rock crawlers and utility machines built for fast terrain tackling.',
  },
  {
    title: 'Owned Machine Track Access',
    duration: '30 Minutes',
    scale: '1:18 & 1:24 Scale',
    price: 30,
    unit: 'AED',
    description: 'Bring your own compatible RC construction vehicle or crawler to enjoy our custom arena.',
  },
];

export const groupPackages: GroupPackage[] = [
  {
    title: 'Crew Session',
    guests: 'Up to 5 Guests',
    duration: '2 Hours Session',
    price: 900,
    includes: [
      'Dedicated arena zone & multiple 1:14 machines',
      'Artisan F&B package included',
      'Hands-on machine briefing by RC instructor',
      'Complimentary specialty drinks',
    ],
  },
  {
    title: 'Squad & Team Challenge',
    guests: 'Up to 10 Guests',
    duration: '2 Hours Session',
    price: 1600,
    highlight: true,
    includes: [
      'Full fleet access with multi-vehicle cooperative tasks',
      'Generous café catering & specialty coffee menu',
      'Scorekeeping & mini earth-moving team challenge',
      'Reserved lounge seating overlooking arena',
    ],
  },
  {
    title: 'Corporate / Department Takeover',
    guests: 'Up to 15 Guests',
    duration: '2 Hours Session',
    price: 2600,
    includes: [
      'Exclusive arena takeover with dedicated operator staff',
      'Premium specialty coffee & artisan pastry buffet',
      'Customized construction team-building missions',
      'Branded digital photo highlights & crew briefing',
    ],
  },
];

export const authenticMenuCategories: MenuCategory[] = [
  {
    title: 'Hot Coffee',
    categoryKey: 'hot',
    items: [
      { name: 'Espresso', price: 18, description: 'Double shot of locally roasted single origin with thick golden crema' },
      { name: 'Americano', price: 19, description: 'Hot water poured over double espresso shots' },
      { name: 'Double Espresso', price: 20, description: 'Intense, aromatic double extraction' },
      { name: 'Cortado', price: 20, description: 'Equal parts velvety microfoam and rich espresso in a signature glass tumbler', badge: 'House Favourite' },
      { name: 'Piccolo', price: 20, description: 'Single ristretto shot stretched with silky steamed milk' },
      { name: 'Cappuccino', price: 23, description: 'Classic creamy milk foam dusted with cocoa powder' },
      { name: 'Caffe Latte', price: 23, description: 'Smooth espresso layered with delicate microfoam art' },
      { name: 'Flat White', price: 26, description: 'Double ristretto with micro-textured velvety milk' },
      { name: 'Café Mocha', price: 26, description: 'Rich Belgian chocolate ganache melted with hot espresso and milk' },
      { name: 'Spanish Latte', price: 26, description: 'Sweetened condensed milk balanced with robust espresso' },
      { name: 'Affogato', price: 30, description: 'Scoop of premium Madagascar vanilla gelato drowned in hot espresso' },
    ],
  },
  {
    title: 'Cold & Filter',
    categoryKey: 'cold-filter',
    items: [
      { name: 'Iced Americano', price: 19, description: 'Chilled espresso over crystal clear ice' },
      { name: 'Iced Spanish Latte', price: 26, description: 'Layered sweet milk, cold espresso, and ice' },
      { name: 'Caramel Frappe', price: 30, description: 'Blended espresso, homemade caramel drizzle, and whip' },
      { name: 'Cascara Infusion', price: 30, description: 'Refreshing brewed coffee cherry tea with fruit notes' },
      { name: 'Cold Hibiscus', price: 25, description: 'Ruby red brewed floral infusion, lightly sweetened' },
      { name: 'V60 Pour Over', price: 30, description: 'Hand-dripped filter highlight bringing out delicate floral & citrus notes' },
      { name: 'Chemex Filter', price: 44, description: 'Clean, sediment-free brew served in an iconic glass hourglass carafe' },
    ],
  },
  {
    title: 'Japanese & Teas',
    categoryKey: 'matcha-tea',
    items: [
      { name: 'Iced Matcha', price: 28, description: 'Ceremonial grade Uji Japanese matcha whisked with fresh milk over ice', badge: 'Top Seller' },
      { name: 'Matcha Frappe', price: 28, description: 'Blended ceremonial green tea, sweet milk, and vanilla ice' },
      { name: 'Matcha Latte', price: 28, description: 'Warm steamed Japanese green tea latte' },
      { name: 'Milky Oolong', price: 28, description: 'Natural sweet cream aromatic whole-leaf Taiwanese oolong' },
      { name: 'Ciao Bella', price: 24, description: 'Mediterranean herb and citrus blossom infusion' },
      { name: 'Masala Chai', price: 28, description: 'Simmered whole spices, black tea, and honeyed warm milk' },
      { name: 'Mountain Mint', price: 30, description: 'Fresh crisp dried alpine peppermint leaves' },
      { name: 'De-Stress Tea', price: 28, description: 'Soothing chamomile, lavender, and lemon verbena blend' },
    ],
  },
  {
    title: 'Shakes & Non-Coffee',
    categoryKey: 'refreshers',
    items: [
      { name: 'Hot Belgian Chocolate', price: 20, description: 'Steamed 70% dark Belgian cocoa with velvety milk' },
      { name: 'Chocolate Milkshake', price: 30, description: 'Thick churned gelato and cocoa nib crunch' },
      { name: 'Pistachio Milkshake', price: 30, description: 'Real Bronte pistachio paste blended with sweet cream' },
      { name: 'Açai Bowl', price: 35, description: 'Organic frozen Brazilian açai topped with fresh banana, berries, granola', badge: 'Signature' },
      { name: 'Açai Smoothie', price: 31, description: 'Cold drinkable blended wild açai with guarana and almond milk' },
      { name: 'Basil Lemonade', price: 25, description: 'Muddled fresh Genovese basil leaves and cold pressed lemons' },
      { name: 'Fruit Smoothie', price: 30, description: 'Seasonal tropical purees and passionfruit' },
    ],
  },
  {
    title: 'Pastries & Bites',
    categoryKey: 'bites',
    items: [
      { name: 'Fresh Croissant', price: 8, description: 'Flaky golden French butter pastry, baked crisp daily' },
      { name: 'Artisan Crepe', price: 35, description: 'Thin griddled crepe with chocolate hazelnut or fruit compote' },
      { name: 'Carrot Cake', price: 25, description: 'Spiced walnut sponge with light cream cheese frosting' },
      { name: 'Strawberry Cheesecake', price: 22, description: 'New York style baked cheesecake with strawberry glaze' },
      { name: 'Chocolate Caramel Tart', price: 22, description: 'Fudge caramel layered under dark chocolate ganache' },
      { name: 'Nuggets & French Fries', price: 30, description: 'Crisp seasoned chicken tenders served with hot fries' },
      { name: 'Skin-On French Fries', price: 15, description: 'Golden sea-salted fries with house dipping sauce' },
    ],
  },
];
