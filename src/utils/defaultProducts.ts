// Default products for artisans who don't have specific products defined
export const getDefaultProducts = (artisanId: number, craft: string) => {
  const baseProducts = [
    {
      id: `p${artisanId}-1`,
      name: `Handcrafted ${craft} Item`,
      price: 999,
      originalPrice: 1299,
      image: '/placeholder.svg',
      rating: 4.5,
      reviews: 20,
      description: `Beautiful handcrafted ${craft.toLowerCase()} piece made with traditional techniques`
    },
    {
      id: `p${artisanId}-2`,
      name: `Traditional ${craft} Set`,
      price: 1599,
      originalPrice: 1999,
      image: '/placeholder.svg',
      rating: 4.7,
      reviews: 35,
      description: `Complete set of traditional ${craft.toLowerCase()} items`
    },
    {
      id: `p${artisanId}-3`,
      name: `Premium ${craft} Collection`,
      price: 2499,
      originalPrice: 2999,
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 28,
      description: `Premium quality ${craft.toLowerCase()} collection for connoisseurs`
    },
    {
      id: `p${artisanId}-4`,
      name: `Custom ${craft} Order`,
      price: 1899,
      originalPrice: 2299,
      image: '/placeholder.svg',
      rating: 4.9,
      reviews: 42,
      description: `Custom made ${craft.toLowerCase()} piece tailored to your preferences`
    },
    {
      id: `p${artisanId}-5`,
      name: `${craft} Gift Set`,
      price: 1299,
      originalPrice: 1599,
      image: '/placeholder.svg',
      rating: 4.6,
      reviews: 18,
      description: `Perfect gift set featuring beautiful ${craft.toLowerCase()} items`
    }
  ];

  // Customize based on craft type
  switch (craft.toLowerCase()) {
    case 'pottery':
    case 'ceramic':
      return baseProducts.map(p => ({
        ...p,
        image: p.id.endsWith('-1') ? '/ceramic-vase-1.jpg' : 
               p.id.endsWith('-2') ? '/ceramic-teaset-1.jpg' :
               p.id.endsWith('-3') ? '/ceramic-bowl-1.jpg' :
               p.id.endsWith('-4') ? '/ceramic-planter-1.jpg' : '/ceramic-vase-1.jpg'
      }));
    
    case 'textile':
    case 'weaving':
      return baseProducts.map(p => ({
        ...p,
        image: p.id.endsWith('-1') ? '/textile-pashmina-1.jpg' : 
               p.id.endsWith('-2') ? '/textile-dupatta-1.jpg' :
               p.id.endsWith('-3') ? '/textile-bedsheet-1.jpg' : '/textile-pashmina-1.jpg'
      }));
    
    case 'jewelry':
      return baseProducts.map(p => ({
        ...p,
        image: p.id.endsWith('-1') ? '/jewelry-kundan-1.jpg' : 
               p.id.endsWith('-2') ? '/jewelry-bangles-1.jpg' :
               p.id.endsWith('-3') ? '/jewelry-terracotta-1.jpg' : '/jewelry-kundan-1.jpg'
      }));
    
    case 'wood carving':
    case 'woodcraft':
      return baseProducts.map(p => ({
        ...p,
        image: p.id.endsWith('-1') ? '/wood-elephant-1.jpg' : 
               p.id.endsWith('-2') ? '/wood-jewelrybox-1.jpg' :
               p.id.endsWith('-3') ? '/wood-spicebox-1.jpg' : '/wood-elephant-1.jpg'
      }));
    
    case 'painting':
    case 'art':
      return baseProducts.map(p => ({
        ...p,
        image: p.id.endsWith('-1') ? '/art-madhubani-1.jpg' : 
               p.id.endsWith('-2') ? '/art-tanjore-1.jpg' :
               p.id.endsWith('-3') ? '/art-warli-1.jpg' : '/art-madhubani-1.jpg'
      }));
    
    default:
      return baseProducts;
  }
};