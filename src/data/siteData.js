// data/siteData.js  —  All Amazon homepage content

// ── NAV DEPARTMENTS ────────────────────────────────────────
export const DEPARTMENTS = [
  "All", "Today's Deals", "Buy Again", "Customer Service",
  "Registry", "Gift Cards", "Sell", "Prime", "Browsing History",
];

export const NAV2_LINKS = [
  { label: "☰  All", bold: true, href: "#all" },
  { label: "Today's Deals", href: "#deals" },
  { label: "Customer Service", href: "#customer-service" },
  { label: "Registry", href: "#registry" },
  { label: "Gift Cards", href: "#gift-cards" },
  { label: "Sell", href: "#sell" },
  { label: "Prime", href: "#prime" },
  { label: "Buy Again", href: "#buy-again" },
  { label: "Shop by Interest", href: "#shop-by-interest" },
  { label: "Shop Holiday Deals", href: "#shop-holiday-deals" },
];

export const SEARCH_DEPARTMENTS = [
  "All Departments","Alexa Skills","Amazon Devices","Amazon Fashion",
  "Amazon Pharmacy","Appliances","Arts & Crafts","Automotive",
  "Baby","Beauty & Personal Care","Books","Computers",
  "Digital Music","Electronics","Garden & Outdoor","Grocery",
  "Handmade","Health & Household","Home & Business Services",
  "Home & Kitchen","Industrial & Scientific","Kindle Store","Luggage",
  "Movies & TV","Music","Musical Instruments","Office Products",
  "Pet Supplies","Software","Sports & Outdoors","Tools & Home Improvement",
  "Toys & Games","Video Games",
];

// ── HERO CAROUSEL ──────────────────────────────────────────
export const HERO_SLIDES = [
  {
    id: 1,
    bg: "#1e3a5f",
    gradient: "linear-gradient(90deg, rgba(12,24,39,0.82) 0%, rgba(32,57,95,0.65) 50%, rgba(63,111,161,0.5) 100%)",
    headline: "Deals you love",
    sub: "Shop today's featured deals",
    cta: "Shop now",
    emoji: "🎁",
    tag: "Holiday Sale",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    bg: "#1a3a2a",
    gradient: "linear-gradient(90deg, rgba(8,26,20,0.82) 0%, rgba(24,65,41,0.7) 50%, rgba(84,128,92,0.45) 100%)",
    headline: "Discover Amazon Devices",
    sub: "Echo, Fire TV, Kindle and more",
    cta: "Shop now",
    emoji: "📱",
    tag: "Featured",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    bg: "#3a1a1a",
    gradient: "linear-gradient(90deg, rgba(55,19,19,0.84) 0%, rgba(103,27,27,0.68) 50%, rgba(187,115,98,0.48) 100%)",
    headline: "New year, new you",
    sub: "Top picks in Health & Wellness",
    cta: "Shop deals",
    emoji: "💪",
    tag: "New Year Sale",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    bg: "#2a1a3a",
    gradient: "linear-gradient(90deg, rgba(24,18,37,0.82) 0%, rgba(65,37,87,0.68) 50%, rgba(137,104,171,0.45) 100%)",
    headline: "Gaming & Electronics",
    sub: "Huge savings on top-rated gear",
    cta: "Shop now",
    emoji: "🎮",
    tag: "Deal of the Day",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1600&q=80",
  },
];

// ── CATEGORY CARDS (below carousel) ───────────────────────
export const CATEGORY_CARDS = [
  { id: 1, title: "Start your gaming setup", emoji: "🎮", bg: "#f8f8f8", link: "#", coverImage: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80", items: ["Controllers","Headsets","Gaming Chairs","Monitors"] },
  { id: 2, title: "Shop for your home", emoji: "🏠", bg: "#f8f8f8", link: "#", coverImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80", items: ["Kitchen","Bedding","Bathroom","Décor"] },
  { id: 3, title: "Explore outdoor clothing", emoji: "🧥", bg: "#f8f8f8", link: "#", coverImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80", items: ["Jackets","Boots","Fleece","Thermal Wear"] },
  { id: 4, title: "Deals in PCs", emoji: "💻", bg: "#f8f8f8", link: "#", coverImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", items: ["Laptops","Desktops","Monitors","Accessories"] },
  { id: 5, title: "Health & wellness", emoji: "💊", bg: "#f8f8f8", link: "#", coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80", items: ["Vitamins","Fitness","Personal Care","Medical"] },
  { id: 6, title: "Fashion finds under $50", emoji: "👗", bg: "#f8f8f8", link: "#", coverImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80", items: ["Women's","Men's","Kids'","Shoes"] },
  { id: 7, title: "Kitchen must-haves", emoji: "🍳", bg: "#f8f8f8", link: "#", coverImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80", items: ["Cookware","Small Appliances","Storage","Knives"] },
  { id: 8, title: "Books, movies, music & more", emoji: "📚", bg: "#f8f8f8", link: "#", coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80", items: ["Best Sellers","New Releases","Kindle","Audible"] },
];

// ── DEALS OF THE DAY ────────────────────────────────────────
export const DEALS = [
  {
    id: 1, title: "Fire TV Stick 4K Max", category: "Amazon Devices",
    emoji: "📺", bg: "#1a1a2e", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    price: "24.99", was: "59.99", discount: "58",
    rating: 4.7, reviews: "84,521",
    prime: true, badge: "Deal of the Day",
    badgeColor: "#cc0c39",
  },
  {
    id: 2, title: "Echo Dot (5th Gen) Smart Speaker", category: "Smart Home",
    emoji: "🔊", bg: "#0a1628", image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=800&q=80",
    price: "21.99", was: "49.99", discount: "56",
    rating: 4.7, reviews: "142,839",
    prime: true, badge: "Deal of the Day",
    badgeColor: "#cc0c39",
  },
  {
    id: 3, title: "Apple AirPods Pro (2nd Generation)", category: "Electronics",
    emoji: "🎧", bg: "#1c1c1c", image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80",
    price: "189.99", was: "249.00", discount: "24",
    rating: 4.8, reviews: "96,402",
    prime: true, badge: "Limited Deal",
    badgeColor: "#cc0c39",
  },
  {
    id: 4, title: "LEGO Star Wars Millennium Falcon", category: "Toys & Games",
    emoji: "🚀", bg: "#0d0d1a", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    price: "119.97", was: "149.99", discount: "20",
    rating: 4.9, reviews: "23,187",
    prime: true, badge: "Savings",
    badgeColor: "#007600",
  },
  {
    id: 5, title: "Ninja AF101 Air Fryer", category: "Kitchen & Dining",
    emoji: "🍟", bg: "#1a0f0f", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    price: "79.99", was: "129.99", discount: "38",
    rating: 4.6, reviews: "55,839",
    prime: true, badge: "Deal",
    badgeColor: "#cc0c39",
  },
  {
    id: 6, title: "Kindle Paperwhite (16GB)", category: "Kindle E-readers",
    emoji: "📖", bg: "#0f1a1a", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    price: "99.99", was: "149.99", discount: "33",
    rating: 4.7, reviews: "71,204",
    prime: true, badge: "Deal",
    badgeColor: "#cc0c39",
  },
];

// ── PRODUCT ROWS ────────────────────────────────────────────
export const PRODUCT_ROWS = [
  {
    id: "best-sellers",
    title: "Best Sellers in Electronics",
    seeMoreHref: "#",
    products: [
      { id: 101, title: "Anker 735 Charger (Nano II 65W)", emoji: "🔌", bg: "#f5f5f5", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80", price: "29.99", was: "45.99", rating: 4.6, reviews: "8,234", prime: true },
      { id: 102, title: "Tile Pro (2022) Bluetooth Tracker", emoji: "📍", bg: "#e8f0f8", image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=800&q=80", price: "24.99", rating: 4.4, reviews: "45,821", prime: true },
      { id: 103, title: "SAMSUNG 970 EVO Plus SSD 1TB", emoji: "💾", bg: "#f0f0f8", image: "https://images.unsplash.com/photo-1555617117-08d2f87f5b22?auto=format&fit=crop&w=800&q=80", price: "79.99", was: "129.99", rating: 4.8, reviews: "28,419", prime: true },
      { id: 104, title: "Logitech MX Master 3S Mouse", emoji: "🖱️", bg: "#f8f5f0", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80", price: "89.99", was: "99.99", rating: 4.7, reviews: "31,056", prime: true },
      { id: 105, title: "Sony WH-1000XM5 Headphones", emoji: "🎧", bg: "#1a1a1a", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80", price: "279.99", was: "399.99", rating: 4.8, reviews: "19,847", prime: true },
      { id: 106, title: "Bose QuietComfort 45 Headphones", emoji: "🎵", bg: "#f5f5f5", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80", price: "199.00", was: "329.00", rating: 4.6, reviews: "14,203", prime: true },
    ],
  },
  {
    id: "recommended",
    title: "Inspired by your browsing history",
    seeMoreHref: "#",
    products: [
      { id: 201, title: "Vitamix 5200 Blender Professional-Grade", emoji: "🥤", bg: "#f0f8f0", image: "https://images.unsplash.com/photo-1578305080163-2d547297f9e1?auto=format&fit=crop&w=800&q=80", price: "449.95", was: "549.95", rating: 4.8, reviews: "9,012", prime: true },
      { id: 202, title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker", emoji: "🥘", bg: "#f8f0e8", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80", price: "79.95", was: "99.95", rating: 4.7, reviews: "126,834", prime: true },
      { id: 203, title: "KitchenAid Artisan Series Stand Mixer", emoji: "🍰", bg: "#fff0f0", image: "https://images.unsplash.com/photo-1611145367651-6303b46e0ff3?auto=format&fit=crop&w=800&q=80", price: "329.99", was: "449.99", rating: 4.8, reviews: "34,521", prime: true },
      { id: 204, title: "Nespresso Vertuo Coffee and Espresso Machine", emoji: "☕", bg: "#f5f0e8", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80", price: "119.00", was: "179.00", rating: 4.6, reviews: "42,300", prime: true },
      { id: 205, title: "Le Creuset Signature Enameled Dutch Oven", emoji: "🍲", bg: "#f8e8e8", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80", price: "359.95", was: "400.00", rating: 4.9, reviews: "8,821", prime: true },
      { id: 206, title: "Cuisinart 14-Cup Food Processor", emoji: "🔪", bg: "#f0f0f8", image: "https://images.unsplash.com/photo-1586201375761-83865001e8d4?auto=format&fit=crop&w=800&q=80", price: "159.95", was: "229.95", rating: 4.6, reviews: "17,643", prime: true },
    ],
  },
  {
    id: "gift-ideas",
    title: "Gift ideas for everyone",
    seeMoreHref: "#",
    products: [
      { id: 301, title: "Polaroid Now I-Type Instant Camera", emoji: "📸", bg: "#fff8f0", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80", price: "89.99", was: "119.99", rating: 4.5, reviews: "6,843", prime: true },
      { id: 302, title: "Nintendo Switch – OLED Model", emoji: "🎮", bg: "#e8f0f8", image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80", price: "349.99", rating: 4.8, reviews: "54,200", prime: true },
      { id: 303, title: "Kindle (16GB) – Now with 6\" Display", emoji: "📖", bg: "#f8f8f8", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80", price: "99.99", was: "139.99", rating: 4.7, reviews: "28,843", prime: true },
      { id: 304, title: "Amazon Echo Show 8 Smart Display", emoji: "🖥️", bg: "#f0f8f8", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80", price: "89.99", was: "149.99", rating: 4.6, reviews: "37,921", prime: true },
      { id: 305, title: "Apple Watch Series 9 GPS", emoji: "⌚", bg: "#f8f8f8", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80", price: "299.00", was: "399.00", rating: 4.8, reviews: "21,034", prime: true },
      { id: 306, title: "Dyson V15 Detect Cordless Vacuum", emoji: "🧹", bg: "#f5f5f0", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80", price: "649.99", was: "749.99", rating: 4.7, reviews: "12,489", prime: true },
    ],
  },
];

// ── SIGN-IN PANEL ───────────────────────────────────────────
export const SIGN_IN = {
  greeting:   "Hello, sign in",
  accountText:"Account & Lists",
};

// ── FOOTER LINKS ────────────────────────────────────────────
export const FOOTER_BACK_TOP = "Back to top";

export const FOOTER_COLS = [
  {
    title: "Get to Know Us",
    links: ["Careers","Blog","About Amazon","Investor Relations","Amazon Devices","Amazon Science"],
  },
  {
    title: "Make Money with Us",
    links: ["Sell products on Amazon","Sell on Amazon Business","Sell apps on Amazon","Become an Affiliate","Advertise Your Products","Self-Publish with Us","Host an Amazon Hub","See More Make Money with Us"],
  },
  {
    title: "Amazon Payment Products",
    links: ["Amazon Business Card","Shop with Points","Reload Your Balance","Amazon Currency Converter"],
  },
  {
    title: "Let Us Help You",
    links: ["Amazon and COVID-19","Your Account","Your Orders","Shipping Rates & Policies","Amazon Prime","Returns & Replacements","Manage Your Content and Devices","Amazon Assistant","Help"],
  },
];

export const FOOTER_BOTTOM_LINKS = [
  "Conditions of Use","Privacy Notice","Consumer Health Data Privacy Disclosure","Your Ads Privacy Choices",
];
