export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  description: string;
  images: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  tags: string[];
  materials: string[];
  dimensions?: string;
  weight?: string;
  origin: string;
  artisan?: string;
  is360View?: boolean;
}

export const categories = [
  {
    id: 'ceramics',
    name: 'Ceramics & Pottery',
    description: 'Handcrafted ceramic pieces and traditional pottery',
    image: '/ceramics-category.jpg'
  },
  {
    id: 'textiles',
    name: 'Textiles & Fabrics',
    description: 'Traditional fabrics and handwoven textiles',
    image: '/textiles-category.jpg'
  },
  {
    id: 'woodcraft',
    name: 'Woodcraft',
    description: 'Intricate wooden handicrafts and furniture',
    image: '/woodcraft-category.jpg'
  },
  {
    id: 'jewelry',
    name: 'Jewelry & Accessories',
    description: 'Traditional jewelry and handcrafted accessories',
    image: '/jewelry-category.jpg'
  },
  {
    id: 'homedecor',
    name: 'Home Decor',
    description: 'Beautiful decorative items for your home',
    image: '/homedecor-category.jpg'
  },
  {
    id: 'art',
    name: 'Traditional Art',
    description: 'Paintings, sculptures and traditional artwork',
    image: '/art-category.jpg'
  }
];

export const products: Product[] = [
  // Ceramics & Pottery (5 products)
  {
    id: 'cer001',
    name: 'Blue Pottery Decorative Vase',
    price: 2499,
    originalPrice: 3499,
    category: 'ceramics',
    description: 'Exquisite blue pottery vase handcrafted by skilled artisans from Jaipur. Features traditional Persian-inspired patterns.',
    images: ['/ceramic-vase-1.jpg', '/ceramic-vase-2.jpg', '/ceramic-vase-3.jpg', '/ceramic-vase-4.jpg', '/ceramic-vase-5.jpg'],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    tags: ['decorative', 'handmade', 'traditional'],
    materials: ['Clay', 'Natural Glazes'],
    dimensions: '25cm H x 15cm W',
    weight: '800g',
    origin: 'Jaipur, Rajasthan',
    artisan: 'Rajesh Kumar',
    is360View: true
  },
  {
    id: 'cer002',
    name: 'Terracotta Tea Set',
    price: 1899,
    category: 'ceramics',
    description: 'Complete terracotta tea set including teapot and 4 cups. Perfect for traditional tea ceremonies.',
    images: ['/ceramic-teaset-1.jpg', '/ceramic-teaset-2.jpg', '/ceramic-teaset-3.jpg', '/ceramic-teaset-4.jpg', '/ceramic-teaset-5.jpg'],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    tags: ['kitchenware', 'traditional', 'functional'],
    materials: ['Terracotta Clay'],
    dimensions: 'Teapot: 15cm H, Cups: 7cm H',
    origin: 'Khanapur, Karnataka',
    artisan: 'Lakshmi Devi'
  },
  {
    id: 'cer003',
    name: 'Glazed Ceramic Bowl Set',
    price: 1299,
    originalPrice: 1699,
    category: 'ceramics',
    description: 'Set of 6 beautifully glazed ceramic bowls with intricate hand-painted designs.',
    images: ['/ceramic-bowl-1.jpg', '/ceramic-bowl-2.jpg', '/ceramic-bowl-3.jpg', '/ceramic-bowl-4.jpg', '/ceramic-bowl-5.jpg'],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    tags: ['kitchenware', 'colorful', 'handpainted'],
    materials: ['Ceramic', 'Food-safe Glaze'],
    dimensions: '12cm diameter x 6cm H',
    origin: 'Khurja, Uttar Pradesh'
  },
  {
    id: 'cer004',
    name: 'Handmade Clay Planters',
    price: 899,
    category: 'ceramics',
    description: 'Set of 3 rustic clay planters perfect for indoor plants and herbs.',
    images: ['/ceramic-planter-1.jpg', '/ceramic-planter-2.jpg', '/ceramic-planter-3.jpg', '/ceramic-planter-4.jpg', '/ceramic-planter-5.jpg'],
    rating: 4.5,
    reviews: 73,
    inStock: true,
    tags: ['gardening', 'rustic', 'eco-friendly'],
    materials: ['Natural Clay'],
    dimensions: 'Small: 10cm, Medium: 15cm, Large: 20cm',
    origin: 'Pondicherry'
  },
  {
    id: 'cer005',
    name: 'Traditional Water Pitcher',
    price: 1599,
    category: 'ceramics',
    description: 'Large capacity traditional water pitcher with cooling properties, perfect for summer.',
    images: ['/ceramic-pitcher-1.jpg', '/ceramic-pitcher-2.jpg', '/ceramic-pitcher-3.jpg', '/ceramic-pitcher-4.jpg', '/ceramic-pitcher-5.jpg'],
    rating: 4.9,
    reviews: 67,
    inStock: true,
    tags: ['functional', 'cooling', 'traditional'],
    materials: ['Unglazed Clay'],
    dimensions: '30cm H x 20cm W',
    weight: '2kg',
    origin: 'Kumartuli, West Bengal'
  },

  // Textiles & Fabrics (5 products)
  {
    id: 'tex001',
    name: 'Handwoven Pashmina Shawl',
    price: 4999,
    originalPrice: 6999,
    category: 'textiles',
    description: 'Luxurious handwoven pashmina shawl from Kashmir, featuring intricate traditional embroidery.',
    images: ['/textile-pashmina-1.jpg', '/textile-pashmina-2.jpg', '/textile-pashmina-3.jpg', '/textile-pashmina-4.jpg', '/textile-pashmina-5.jpg'],
    rating: 4.9,
    reviews: 203,
    inStock: true,
    tags: ['luxury', 'handwoven', 'Kashmir'],
    materials: ['100% Pashmina Wool'],
    dimensions: '200cm x 70cm',
    weight: '150g',
    origin: 'Srinagar, Kashmir',
    artisan: 'Mohammad Ali'
  },
  {
    id: 'tex002',
    name: 'Banarasi Silk Dupatta',
    price: 3499,
    category: 'textiles',
    description: 'Elegant Banarasi silk dupatta with gold zari work, perfect for special occasions.',
    images: ['/textile-dupatta-1.jpg', '/textile-dupatta-2.jpg', '/textile-dupatta-3.jpg', '/textile-dupatta-4.jpg', '/textile-dupatta-5.jpg'],
    rating: 4.8,
    reviews: 145,
    inStock: true,
    tags: ['silk', 'festive', 'zari'],
    materials: ['Pure Silk', 'Gold Zari'],
    dimensions: '250cm x 90cm',
    origin: 'Varanasi, Uttar Pradesh'
  },
  {
    id: 'tex003',
    name: 'Block Print Cotton Bedsheet Set',
    price: 2299,
    originalPrice: 2999,
    category: 'textiles',
    description: 'Double bedsheet set with traditional Rajasthani block prints in vibrant colors.',
    images: ['/textile-bedsheet-1.jpg', '/textile-bedsheet-2.jpg', '/textile-bedsheet-3.jpg', '/textile-bedsheet-4.jpg', '/textile-bedsheet-5.jpg'],
    rating: 4.6,
    reviews: 189,
    inStock: true,
    tags: ['bedding', 'blockprint', 'colorful'],
    materials: ['100% Cotton'],
    dimensions: 'Double Bed (220cm x 240cm)',
    origin: 'Sanganer, Rajasthan'
  },
  {
    id: 'tex004',
    name: 'Handloom Cotton Saree',
    price: 2799,
    category: 'textiles',
    description: 'Beautiful handloom cotton saree with traditional temple border design.',
    images: ['/textile-saree-1.jpg', '/textile-saree-2.jpg', '/textile-saree-3.jpg', '/textile-saree-4.jpg', '/textile-saree-5.jpg'],
    rating: 4.7,
    reviews: 98,
    inStock: true,
    tags: ['saree', 'handloom', 'traditional'],
    materials: ['Handloom Cotton'],
    dimensions: '6.5m length',
    origin: 'Kanchipuram, Tamil Nadu'
  },
  {
    id: 'tex005',
    name: 'Madhubani Painted Stole',
    price: 1599,
    category: 'textiles',
    description: 'Hand-painted Madhubani art stole on natural cotton fabric.',
    images: ['/textile-stole-1.jpg', '/textile-stole-2.jpg', '/textile-stole-3.jpg', '/textile-stole-4.jpg', '/textile-stole-5.jpg'],
    rating: 4.5,
    reviews: 76,
    inStock: true,
    tags: ['handpainted', 'art', 'unique'],
    materials: ['Cotton', 'Natural Dyes'],
    dimensions: '180cm x 40cm',
    origin: 'Madhubani, Bihar'
  },

  // Woodcraft (5 products)
  {
    id: 'woo001',
    name: 'Carved Wooden Elephant',
    price: 3299,
    category: 'woodcraft',
    description: 'Intricately carved wooden elephant sculpture, symbol of good luck and prosperity.',
    images: ['/wood-elephant-1.jpg', '/wood-elephant-2.jpg', '/wood-elephant-3.jpg', '/wood-elephant-4.jpg', '/wood-elephant-5.jpg'],
    rating: 4.8,
    reviews: 142,
    inStock: true,
    tags: ['sculpture', 'decorative', 'auspicious'],
    materials: ['Rosewood'],
    dimensions: '25cm L x 18cm H x 10cm W',
    weight: '1.2kg',
    origin: 'Channapatna, Karnataka',
    artisan: 'Ravi Gowda'
  },
  {
    id: 'woo002',
    name: 'Sandalwood Jewelry Box',
    price: 4599,
    originalPrice: 5999,
    category: 'woodcraft',
    description: 'Exquisite sandalwood jewelry box with traditional carving and velvet interior.',
    images: ['/wood-jewelrybox-1.jpg', '/wood-jewelrybox-2.jpg', '/wood-jewelrybox-3.jpg', '/wood-jewelrybox-4.jpg', '/wood-jewelrybox-5.jpg'],
    rating: 4.9,
    reviews: 87,
    inStock: true,
    tags: ['luxury', 'storage', 'aromatic'],
    materials: ['Pure Sandalwood', 'Velvet Lining'],
    dimensions: '20cm x 15cm x 8cm',
    origin: 'Mysore, Karnataka'
  },
  {
    id: 'woo003',
    name: 'Wooden Spice Box Set',
    price: 1899,
    category: 'woodcraft',
    description: 'Traditional wooden spice box with 7 compartments and airtight lids.',
    images: ['/wood-spicebox-1.jpg', '/wood-spicebox-2.jpg', '/wood-spicebox-3.jpg', '/wood-spicebox-4.jpg', '/wood-spicebox-5.jpg'],
    rating: 4.6,
    reviews: 156,
    inStock: true,
    tags: ['kitchenware', 'functional', 'traditional'],
    materials: ['Teak Wood'],
    dimensions: '25cm diameter x 8cm H',
    origin: 'Saharanpur, Uttar Pradesh'
  },
  {
    id: 'woo004',
    name: 'Hand Carved Wooden Mirror',
    price: 2799,
    category: 'woodcraft',
    description: 'Ornate hand-carved wooden mirror frame with floral motifs.',
    images: ['/wood-mirror-1.jpg', '/wood-mirror-2.jpg', '/wood-mirror-3.jpg', '/wood-mirror-4.jpg', '/wood-mirror-5.jpg'],
    rating: 4.7,
    reviews: 93,
    inStock: true,
    tags: ['decorative', 'mirror', 'ornate'],
    materials: ['Mango Wood', 'Glass Mirror'],
    dimensions: '60cm x 45cm',
    origin: 'Jodhpur, Rajasthan'
  },
  {
    id: 'woo005',
    name: 'Bamboo Serving Tray Set',
    price: 1299,
    originalPrice: 1699,
    category: 'woodcraft',
    description: 'Eco-friendly bamboo serving tray set of 3 different sizes.',
    images: ['/wood-tray-1.jpg', '/wood-tray-2.jpg', '/wood-tray-3.jpg', '/wood-tray-4.jpg', '/wood-tray-5.jpg'],
    rating: 4.5,
    reviews: 134,
    inStock: true,
    tags: ['eco-friendly', 'serving', 'sustainable'],
    materials: ['Bamboo'],
    dimensions: 'Large: 35cm, Medium: 25cm, Small: 20cm',
    origin: 'Assam'
  },

  // Jewelry & Accessories (5 products)
  {
    id: 'jew001',
    name: 'Kundan Polki Necklace Set',
    price: 8999,
    originalPrice: 12999,
    category: 'jewelry',
    description: 'Stunning Kundan Polki necklace set with matching earrings, perfect for weddings.',
    images: ['/jewelry-kundan-1.jpg', '/jewelry-kundan-2.jpg', '/jewelry-kundan-3.jpg', '/jewelry-kundan-4.jpg', '/jewelry-kundan-5.jpg'],
    rating: 4.9,
    reviews: 76,
    inStock: true,
    tags: ['wedding', 'traditional', 'luxury'],
    materials: ['Gold Plated', 'Kundan', 'Pearls'],
    origin: 'Jaipur, Rajasthan',
    artisan: 'Suresh Jewellers'
  },
  {
    id: 'jew002',
    name: 'Silver Oxidized Bangles',
    price: 1599,
    category: 'jewelry',
    description: 'Set of 4 oxidized silver bangles with traditional tribal patterns.',
    images: ['/jewelry-bangles-1.jpg', '/jewelry-bangles-2.jpg', '/jewelry-bangles-3.jpg', '/jewelry-bangles-4.jpg', '/jewelry-bangles-5.jpg'],
    rating: 4.6,
    reviews: 234,
    inStock: true,
    tags: ['silver', 'tribal', 'set'],
    materials: ['925 Silver', 'Oxidized Finish'],
    dimensions: 'Adjustable 2.4-2.8 inches',
    origin: 'Jaipur, Rajasthan'
  },
  {
    id: 'jew003',
    name: 'Terracotta Jewelry Set',
    price: 899,
    originalPrice: 1299,
    category: 'jewelry',
    description: 'Handcrafted terracotta jewelry set including necklace, earrings and bangles.',
    images: ['/jewelry-terracotta-1.jpg', '/jewelry-terracotta-2.jpg', '/jewelry-terracotta-3.jpg', '/jewelry-terracotta-4.jpg', '/jewelry-terracotta-5.jpg'],
    rating: 4.4,
    reviews: 167,
    inStock: true,
    tags: ['eco-friendly', 'handmade', 'affordable'],
    materials: ['Terracotta Clay', 'Natural Colors'],
    origin: 'Kolkata, West Bengal'
  },
  {
    id: 'jew004',
    name: 'Brass Vintage Earrings',
    price: 1299,
    category: 'jewelry',
    description: 'Vintage style brass earrings with intricate filigree work.',
    images: ['/jewelry-brass-1.jpg', '/jewelry-brass-2.jpg', '/jewelry-brass-3.jpg', '/jewelry-brass-4.jpg', '/jewelry-brass-5.jpg'],
    rating: 4.7,
    reviews: 89,
    inStock: true,
    tags: ['vintage', 'brass', 'filigree'],
    materials: ['Brass', 'Antique Polish'],
    dimensions: '6cm length',
    origin: 'Cuttack, Odisha'
  },
  {
    id: 'jew005',
    name: 'Beaded Handbag',
    price: 2299,
    category: 'jewelry',
    description: 'Elegant beaded handbag with traditional mirror work and embroidery.',
    images: ['/jewelry-handbag-1.jpg', '/jewelry-handbag-2.jpg', '/jewelry-handbag-3.jpg', '/jewelry-handbag-4.jpg', '/jewelry-handbag-5.jpg'],
    rating: 4.5,
    reviews: 112,
    inStock: true,
    tags: ['handbag', 'beaded', 'embroidery'],
    materials: ['Cotton', 'Glass Beads', 'Mirrors'],
    dimensions: '25cm x 20cm x 8cm',
    origin: 'Kutch, Gujarat'
  },

  // Home Decor (5 products)
  {
    id: 'hom001',
    name: 'Brass Diya Set',
    price: 1599,
    category: 'homedecor',
    description: 'Set of 12 traditional brass diyas perfect for festivals and celebrations.',
    images: ['/homedecor-diya-1.jpg', '/homedecor-diya-2.jpg', '/homedecor-diya-3.jpg', '/homedecor-diya-4.jpg', '/homedecor-diya-5.jpg'],
    rating: 4.8,
    reviews: 298,
    inStock: true,
    tags: ['festival', 'brass', 'traditional'],
    materials: ['Pure Brass'],
    dimensions: '8cm diameter each',
    origin: 'Moradabad, Uttar Pradesh'
  },
  {
    id: 'hom002',
    name: 'Mandala Wall Hanging',
    price: 2199,
    originalPrice: 2999,
    category: 'homedecor',
    description: 'Intricate laser-cut wooden mandala wall hanging with LED backlighting.',
    images: ['/homedecor-mandala-1.jpg', '/homedecor-mandala-2.jpg', '/homedecor-mandala-3.jpg', '/homedecor-mandala-4.jpg', '/homedecor-mandala-5.jpg'],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    tags: ['wall-art', 'mandala', 'LED'],
    materials: ['MDF Wood', 'LED Strip'],
    dimensions: '60cm diameter',
    origin: 'Bengaluru, Karnataka'
  },
  {
    id: 'hom003',
    name: 'Kalamkari Table Runner',
    price: 1299,
    category: 'homedecor',
    description: 'Hand-painted Kalamkari table runner with natural dyes and traditional motifs.',
    images: ['/homedecor-runner-1.jpg', '/homedecor-runner-2.jpg', '/homedecor-runner-3.jpg', '/homedecor-runner-4.jpg', '/homedecor-runner-5.jpg'],
    rating: 4.6,
    reviews: 87,
    inStock: true,
    tags: ['table-decor', 'handpainted', 'natural'],
    materials: ['Cotton', 'Natural Dyes'],
    dimensions: '180cm x 40cm',
    origin: 'Srikalahasti, Andhra Pradesh'
  },
  {
    id: 'hom004',
    name: 'Copper Wind Chimes',
    price: 1899,
    category: 'homedecor',
    description: 'Handcrafted copper wind chimes with soothing melodic tones.',
    images: ['/homedecor-chimes-1.jpg', '/homedecor-chimes-2.jpg', '/homedecor-chimes-3.jpg', '/homedecor-chimes-4.jpg', '/homedecor-chimes-5.jpg'],
    rating: 4.5,
    reviews: 134,
    inStock: true,
    tags: ['copper', 'musical', 'outdoor'],
    materials: ['Pure Copper'],
    dimensions: '45cm length',
    origin: 'Thanjavur, Tamil Nadu'
  },
  {
    id: 'hom005',
    name: 'Rajasthani Door Hanging',
    price: 999,
    originalPrice: 1399,
    category: 'homedecor',
    description: 'Colorful Rajasthani door hanging with mirrors, beads and tassels.',
    images: ['/homedecor-door-1.jpg', '/homedecor-door-2.jpg', '/homedecor-door-3.jpg', '/homedecor-door-4.jpg', '/homedecor-door-5.jpg'],
    rating: 4.4,
    reviews: 189,
    inStock: true,
    tags: ['colorful', 'door-decor', 'mirrors'],
    materials: ['Cotton', 'Mirrors', 'Beads'],
    dimensions: '80cm x 25cm',
    origin: 'Jaisalmer, Rajasthan'
  },

  // Traditional Art (5 products)
  {
    id: 'art001',
    name: 'Madhubani Painting',
    price: 3499,
    category: 'art',
    description: 'Authentic Madhubani painting on handmade paper depicting traditional motifs.',
    images: ['/art-madhubani-1.jpg', '/art-madhubani-2.jpg', '/art-madhubani-3.jpg', '/art-madhubani-4.jpg', '/art-madhubani-5.jpg'],
    rating: 4.9,
    reviews: 67,
    inStock: true,
    tags: ['painting', 'traditional', 'authentic'],
    materials: ['Handmade Paper', 'Natural Pigments'],
    dimensions: '40cm x 30cm',
    origin: 'Madhubani, Bihar',
    artisan: 'Bharti Dayal'
  },
  {
    id: 'art002',
    name: 'Tanjore Painting',
    price: 5999,
    originalPrice: 7999,
    category: 'art',
    description: 'Classical Tanjore painting with gold foil work and precious stone inlay.',
    images: ['/art-tanjore-1.jpg', '/art-tanjore-2.jpg', '/art-tanjore-3.jpg', '/art-tanjore-4.jpg', '/art-tanjore-5.jpg'],
    rating: 4.8,
    reviews: 45,
    inStock: true,
    tags: ['classical', 'gold', 'premium'],
    materials: ['Canvas', 'Gold Foil', 'Precious Stones'],
    dimensions: '50cm x 40cm',
    origin: 'Thanjavur, Tamil Nadu'
  },
  {
    id: 'art003',
    name: 'Warli Art Canvas',
    price: 2299,
    category: 'art',
    description: 'Contemporary Warli art on canvas showcasing tribal life and nature.',
    images: ['/art-warli-1.jpg', '/art-warli-2.jpg', '/art-warli-3.jpg', '/art-warli-4.jpg', '/art-warli-5.jpg'],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    tags: ['tribal', 'contemporary', 'nature'],
    materials: ['Canvas', 'Acrylic Paint'],
    dimensions: '60cm x 45cm',
    origin: 'Maharashtra'
  },
  {
    id: 'art004',
    name: 'Pattachitra Scroll',
    price: 4299,
    category: 'art',
    description: 'Traditional Pattachitra scroll painting depicting mythological stories.',
    images: ['/art-pattachitra-1.jpg', '/art-pattachitra-2.jpg', '/art-pattachitra-3.jpg', '/art-pattachitra-4.jpg', '/art-pattachitra-5.jpg'],
    rating: 4.7,
    reviews: 56,
    inStock: true,
    tags: ['scroll', 'mythology', 'traditional'],
    materials: ['Palm Leaf', 'Natural Colors'],
    dimensions: '90cm x 30cm',
    origin: 'Puri, Odisha'
  },
  {
    id: 'art005',
    name: 'Gond Art Print',
    price: 1799,
    originalPrice: 2299,
    category: 'art',
    description: 'Modern Gond art print on high-quality paper with vibrant colors.',
    images: ['/art-gond-1.jpg', '/art-gond-2.jpg', '/art-gond-3.jpg', '/art-gond-4.jpg', '/art-gond-5.jpg'],
    rating: 4.5,
    reviews: 123,
    inStock: true,
    tags: ['modern', 'print', 'vibrant'],
    materials: ['Art Paper', 'Digital Print'],
    dimensions: '35cm x 25cm',
    origin: 'Madhya Pradesh'
  }
];

export const featuredProducts = products.filter(p => p.originalPrice).slice(0, 8);
export const bestSellers = products.sort((a, b) => b.reviews - a.reviews).slice(0, 6);