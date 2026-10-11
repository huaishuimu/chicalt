// ChicAlt mock data matching all 18 UI screens precisely

export const CHICHI_AVATAR = '/src/assets/images/chichi_mascot_cloud_1791730590588.jpg';
export const ONBOARDING_IMAGE = '/src/assets/images/onboarding_fashion_editorial_1791730604927.jpg';
export const NIXON_WATCH_IMAGE = '/src/assets/images/product_nixon_rose_gold_watch_1791730618571.jpg';
export const SLOANE_AVATAR = '/src/assets/images/sloane_bennett_avatar_1791730631200.jpg';

export interface ProductItem {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  likes?: string;
  size?: string;
  color?: string;
  tag?: string;
}

export const SUMMER_SALE_PRODUCTS: ProductItem[] = [
  {
    id: 'sale-1',
    title: 'AirPods Max-Space Gray',
    subtitle: 'AirPods Max-Space Gray',
    category: 'Electronics & Audio',
    price: 572,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    tag: 'ChicAlt',
  },
  {
    id: 'sale-2',
    title: 'Cutout Halter Midi Dress',
    subtitle: 'Black Ribbed Evening Gown',
    category: 'Dresses',
    price: 572,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80',
    tag: 'ChicAlt',
  },
  {
    id: 'sale-3',
    title: 'Minimalist Little Black Slip',
    subtitle: 'Silk Slip with Crystal Pin',
    category: 'Dresses',
    price: 572,
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&q=80',
    tag: 'ChicAlt',
  },
  {
    id: 'sale-4',
    title: 'Crepe White Corset Dress',
    subtitle: 'Ivory Architectural Silhouette',
    category: 'Dresses',
    price: 572,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80',
    tag: 'ChicAlt',
  },
];

export const STEAL_DEALS: ProductItem[] = [
  {
    id: 'deal-1',
    title: 'Ivory Sculpted Double-Breasted Blazer',
    subtitle: 'Sharp tailored peak lapel',
    category: 'Outerwear',
    price: 572,
    image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=600&q=80',
  },
  {
    id: 'deal-2',
    title: 'Relaxed Plaid Overshirt & Khaki Trousers',
    subtitle: 'Autumn layered park look',
    category: 'Casual',
    price: 572,
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80',
  },
  {
    id: 'deal-3',
    title: 'Minimalist White Linen Shirt & Crossbody',
    subtitle: 'Lakeside serenity edit',
    category: 'Linen',
    price: 572,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
  },
  {
    id: 'deal-4',
    title: 'Chunky Wool Turtleneck & Leather Tote',
    subtitle: 'Commuter morning warmth',
    category: 'Knitwear',
    price: 572,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80',
  },
  {
    id: 'deal-5',
    title: 'Classic Wool Scarf & Tailored Trench',
    subtitle: 'Overpass breeze look',
    category: 'Outerwear',
    price: 572,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
  },
  {
    id: 'deal-6',
    title: 'Denim Button-Down & Grey High-Rise Slacks',
    subtitle: 'Iconic street metropolitan vibe',
    category: 'Workwear',
    price: 572,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
  },
];

export const UNDERWEAR_PRODUCTS: ProductItem[] = [
  {
    id: 'und-1',
    title: 'Fits Everybody Skims-Style Triangle Bra',
    subtitle: 'Effortless Chic',
    category: 'Underwear',
    price: 38.0,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
  },
  {
    id: 'und-2',
    title: 'Lace Trim Satin Balconette Bra',
    subtitle: 'Balconette',
    category: 'Underwear',
    price: 52.0,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  },
  {
    id: 'und-3',
    title: 'Seamless Ribbed Bralette Set',
    subtitle: 'Loungewear as Outerwear',
    category: 'Underwear',
    price: 28.0,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80',
  },
  {
    id: 'und-4',
    title: 'Deep V Mesh Plunge Bra',
    subtitle: 'Plunge',
    category: 'Underwear',
    price: 42.0,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
  },
  {
    id: 'und-5',
    title: 'Contour Rib High-Waist Set',
    subtitle: 'Active Sculpt',
    category: 'Underwear',
    price: 36.0,
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80',
  },
  {
    id: 'und-6',
    title: 'Everyday Soft Cotton Bralette',
    subtitle: 'Pure Essentials',
    category: 'Underwear',
    price: 30.0,
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80',
  },
];

export const WATCH_PRODUCT = {
  id: 'watch-c39',
  title: "Nixon|Women's C39 Leather Strap Watch with White Dial",
  price: 165.98,
  subsidy: 21,
  rating: 7.8,
  badge: "Genuine Products Only | Triple Refund for Counterfeits | 7-Day Return",
  aiInsight: "Crafted for the modern woman who values both precision and aesthetics, this timepiece features a crisp white dial with refined rose-gold accents, balancing understated luxury with everyday durability.",
  specs: [
    { label: 'DIAL', value: 'Dial White' },
    { label: 'Case', value: 'Case Iconic' },
    { label: 'Strap', value: 'Strap Premium' },
    { label: 'Functionality', value: 'For daily' },
    { label: 'Style', value: 'Rugged funct' },
    { label: 'Occasions', value: 'For business' },
  ],
  aiStylist: {
    match: '98% Match',
    title: 'A Perfect Fit for Your Minimalist Vibe.',
    vibe: "Style Vibe: Quiet Luxury | This clean white dial and classic rose mesh complement your palette seamlessly.",
  },
  reviewsSatisfaction: '99% Satisfaction Rate',
};

export const REVIEWS_DATA = [
  {
    id: 'rev-1',
    user: 'Lunabloom',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80',
    rating: 4,
    time: '23 hours ago',
    likes: 6,
    comments: 2,
    text: 'This watch is both elegant and reliable. Perfect for everyday wear, and it matches everything in my wardrobe!',
    photos: [
      NIXON_WATCH_IMAGE,
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=300&q=80',
    ],
  },
  {
    id: 'rev-2',
    user: 'Stella',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&q=80',
    rating: 4,
    time: '23 hours ago',
    likes: 6,
    comments: 2,
    text: 'The craftsmanship is outstanding. The links of the bracelet are buttery smooth, and the clasp closes with a secure, satisfying click.',
    photos: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&q=80',
      NIXON_WATCH_IMAGE,
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&q=80',
    ],
  },
  {
    id: 'rev-3',
    user: 'Emberly',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
    rating: 4,
    time: '23 hours ago',
    likes: 12,
    comments: 4,
    text: "Finally, a dress watch with a date window that's actually readable! A small but crucial feature that makes it my daily staple.",
    photos: [
      NIXON_WATCH_IMAGE,
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=300&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80',
    ],
  },
];

export const CART_INITIAL_ITEMS = [
  {
    id: 'cart-1',
    title: 'Align™ High-Rise Pant 25"',
    desc: 'Color: Heathered Grey Sage | Size: 6',
    price: 98.0,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=300&q=80',
  },
  {
    id: 'cart-2',
    title: 'Nico Slip Dress',
    desc: 'Nico Slip Dress - Black Floral',
    price: 218.0,
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&q=80',
  },
  {
    id: 'cart-3',
    title: 'Boy Brow + Cloud Paint Duo',
    desc: 'The Effortless Brow & Cheek Set',
    price: 42.0,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80',
  },
  {
    id: 'cart-4',
    title: 'Fits Everybody Plunge Bra',
    desc: 'Fits Everybody Plunge Bra - Onyx',
    price: 48.0,
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80',
  },
  {
    id: 'cart-5',
    title: 'The Diamond Necklace',
    desc: '14k Gold Diamond Necklace (0.10 ct tw)',
    price: 350.0,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&q=80',
  },
];

export const DISCOVERY_POSTS = [
  {
    id: 'post-1',
    creator: 'Bella_Vogue',
    views: '2.4k',
    caption: 'Golden hour layering...',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
  },
  {
    id: 'post-2',
    creator: 'Gala_Girl',
    views: '8.9k',
    caption: 'Ready for the night',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
  },
  {
    id: 'post-3',
    creator: 'Minimal_Max',
    views: '3.1k',
    caption: 'Quiet luxury winter...',
    image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    id: 'post-4',
    creator: 'Chic_Explorer',
    views: '2.4k',
    caption: 'Parisian Morning Outfits',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80',
  },
  {
    id: 'post-5',
    creator: 'Lily_Bloom',
    views: '2.4k',
    caption: 'Sunday brunch vibe check 🌸',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    id: 'post-6',
    creator: 'Urban_Echo',
    views: '4.8k',
    caption: 'Double denim is back 👖',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
];

export const MESSAGES_BRANDS = [
  { name: 'Aritzia', logo: 'A', unread: 5, color: '#111827' },
  { name: 'Lululemon', logo: 'Ω', unread: 2, color: '#E11D48' },
  { name: 'Madewell', logo: 'M', unread: 8, color: '#1E40AF' },
  { name: 'Everlane', logo: 'E', unread: 0, color: '#374151' },
];

export const MESSAGES_THREADS = [
  {
    id: 'msg-1',
    brand: 'Lululemon',
    logo: 'Ω',
    color: '#E11D48',
    unread: 2,
    preview: 'Align™ 25" in new shades...',
    time: 'Just',
  },
  {
    id: 'msg-2',
    brand: 'Aritzia',
    logo: 'A',
    color: '#111827',
    unread: 5,
    preview: 'The Super Puff in new colors is...',
    time: 'Just',
  },
  {
    id: 'msg-3',
    brand: 'Madewell',
    logo: 'M',
    color: '#1E40AF',
    unread: 8,
    preview: 'The Perfect Vintage Jean *now...',
    time: 'Just',
  },
  {
    id: 'msg-4',
    brand: 'Everlane',
    logo: 'E',
    color: '#374151',
    unread: 0,
    preview: 'The ReLeather Court Sneaker...',
    time: 'Just',
  },
  {
    id: 'msg-5',
    brand: 'Reformation',
    logo: 'Rf',
    color: '#064E3B',
    unread: 2,
    preview: 'First Look: Our vacation...',
    time: 'Just',
  },
  {
    id: 'msg-6',
    brand: 'Tower 28',
    logo: 'T28',
    color: '#F43F5E',
    unread: 0,
    preview: 'The ReLeather Court Sneaker...',
    time: 'Just',
  },
];

export const CATEGORY_CARD_ITEMS = [
  { name: 'T-shirt', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&q=80' },
  { name: 'Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80' },
  { name: 'Denim', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80' },
  { name: 'Bottoms', image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&q=80' },
  { name: 'Swimwear', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80' },
  { name: 'Jewelry', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80' },
  { name: 'Bags', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80' },
  { name: 'Lingerie', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80' },
];
