import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Award, Heart, Phone, Package, Clock } from 'lucide-react';
import ArtisanProductModal from '@/components/ArtisanProductModal';
import { getDefaultProducts } from '@/utils/defaultProducts';
import artisan1 from '@/assets/artisan-1.jpg';
import artisan2 from '@/assets/artisan-2-teen.jpg';
import artisan3 from '@/assets/artisan-3.jpg';
import artisan4 from '@/assets/artisan-4.jpg';
import artisan5 from '@/assets/artisan-5.jpg';
import artisan6 from '@/assets/artisan-6.jpg';
import artisan7 from '@/assets/artisan-7.jpg';
import artisan8 from '@/assets/artisan-8.jpg';
import artisan9 from '@/assets/artisan-9.jpg';
import artisan10 from '@/assets/artisan-10.jpg';
import artisan11 from '@/assets/artisan-11.jpg';
import artisan12 from '@/assets/artisan-12.jpg';
import artisan13 from '@/assets/artisan-13.jpg';
import artisan14 from '@/assets/artisan-14.jpg';
import artisan15 from '@/assets/artisan-15.jpg';
import artisan16 from '@/assets/artisan-16.jpg';
import artisan17 from '@/assets/artisan-17.jpg';
import artisan18 from '@/assets/artisan-18.jpg';
import artisan19 from '@/assets/artisan-19.jpg';
import artisan20 from '@/assets/artisan-20.jpg';

const artisans = [
  {
    id: 1,
    name: 'Charitha Reddy',
    type: 'Professional Entrepreneur (Captain)',
    craft: 'Blue Pottery & Digital Innovation',
    location: 'Hyderabad, Telangana',
    address: '15-A, Pottery Lane, Banjara Hills',
    contact: '+91 98765 43210',
    experience: '8+ years',
    rating: 4.9,
    reviews: 342,
    totalOrders: 1250,
    specialties: ['Modern Pottery', 'Digital Marketing for Artisans', 'Business Development'],
    image: artisan1,
    description: 'Captain of KΛRIGΛRI platform, combining traditional pottery with modern business strategies. Charitha has revolutionized how artisans connect with global markets through innovative digital solutions.',
    awards: ['Young Entrepreneur Award 2023', 'Digital Innovation in Crafts 2024'],
    testimonials: [
      { reviewer: 'Aravind', rating: 5, comment: 'Charitha\'s leadership has transformed our artisan community. Her innovative approach is remarkable!' },
      { reviewer: 'Customer A', rating: 5, comment: 'Beautiful pottery with excellent customer service. Quick delivery too!' }
    ],
    products: [
      {
        id: 'p1-1',
        name: 'Blue Pottery Vase',
        price: 1599,
        originalPrice: 1999,
        image: '/ceramic-vase-1.jpg',
        rating: 4.9,
        reviews: 67,
        description: 'Handcrafted blue pottery vase with traditional Rajasthani designs'
      },
      {
        id: 'p1-2',
        name: 'Ceramic Tea Set',
        price: 2299,
        originalPrice: 2799,
        image: '/ceramic-teaset-1.jpg',
        rating: 4.8,
        reviews: 45,
        description: 'Complete ceramic tea set with modern functionality'
      },
      {
        id: 'p1-3',
        name: 'Decorative Bowl Set',
        price: 899,
        originalPrice: 1199,
        image: '/ceramic-bowl-1.jpg',
        rating: 4.7,
        reviews: 38,
        description: 'Set of decorative ceramic bowls for serving'
      },
      {
        id: 'p1-4',
        name: 'Garden Planter',
        price: 1299,
        originalPrice: 1599,
        image: '/ceramic-planter-1.jpg',
        rating: 4.8,
        reviews: 29,
        description: 'Beautiful ceramic planter for indoor plants'
      },
      {
        id: 'p1-5',
        name: 'Digital Marketing Course',
        price: 4999,
        originalPrice: 6999,
        image: '/ceramic-vase-1.jpg',
        rating: 4.9,
        reviews: 124,
        description: 'Complete digital marketing course for artisans'
      }
    ]
  },
  {
    id: 2,
    name: 'Aravind Sharma',
    type: 'Teen Entrepreneur',
    craft: 'Wood Carving & Digital Design',
    location: 'Mysore, Karnataka',
    address: '23, Channapatna Road, Mysore',
    contact: '+91 98765 43211',
    experience: '5+ years',
    rating: 4.8,
    reviews: 287,
    totalOrders: 980,
    specialties: ['Traditional Wood Carving', '3D Design', 'Custom Sculptures'],
    image: artisan2,
    description: 'Young talented wood carver who bridges traditional techniques with modern design software. At just 19, Aravind creates stunning pieces that blend heritage craftsmanship with contemporary aesthetics.',
    awards: ['Karnataka Wood Craft Excellence 2022', 'Young Innovator Award 2024'],
    testimonials: [
      { reviewer: 'Sathvika', rating: 5, comment: 'Aravind\'s work is absolutely stunning! His attention to detail is incredible for someone so young.' },
      { reviewer: 'Customer B', rating: 5, comment: 'The wooden elephant sculpture exceeded all expectations. Amazing talent!' }
    ],
    products: [
      {
        id: 'p2-1',
        name: 'Handcrafted Wooden Elephant',
        price: 1299,
        originalPrice: 1599,
        image: '/wood-elephant-1.jpg',
        rating: 4.9,
        reviews: 45,
        description: 'Beautifully carved traditional elephant sculpture'
      },
      {
        id: 'p2-2',
        name: 'Wooden Jewelry Box',
        price: 899,
        originalPrice: 1199,
        image: '/wood-jewelrybox-1.jpg',
        rating: 4.8,
        reviews: 32,
        description: 'Elegant wooden jewelry box with intricate carvings'
      },
      {
        id: 'p2-3',
        name: 'Custom Wood Sculpture',
        price: 2499,
        originalPrice: 2999,
        image: '/wood-elephant-1.jpg',
        rating: 4.9,
        reviews: 18,
        description: 'Personalized wooden sculptures made to order'
      },
      {
        id: 'p2-4',
        name: 'Wooden Spice Box Set',
        price: 799,
        originalPrice: 999,
        image: '/wood-spicebox-1.jpg',
        rating: 4.7,
        reviews: 28,
        description: 'Traditional spice storage with modern functionality'
      },
      {
        id: 'p2-5',
        name: 'Decorative Wall Art',
        price: 1599,
        originalPrice: 1899,
        image: '/wood-elephant-1.jpg',
        rating: 4.8,
        reviews: 22,
        description: 'Hand-carved wooden wall art pieces'
      }
    ]
  },
  {
    id: 3,
    name: 'Sathvika Patel',
    type: 'Young Startup Founder',
    craft: 'Textile Innovation & Weaving',
    location: 'Ahmedabad, Gujarat',
    address: '45, Textile Hub, CG Road',
    contact: '+91 98765 43212',
    experience: '5+ years',
    rating: 4.9,
    reviews: 298,
    totalOrders: 1150,
    specialties: ['Sustainable Textiles', 'Modern Weaving', 'Eco-friendly Dyes'],
    image: artisan3,
    description: 'Young entrepreneur revolutionizing textile industry with sustainable practices. Sathvika combines traditional weaving with eco-friendly materials to create contemporary fashion.',
    awards: ['Young Innovator Award 2024', 'Sustainable Fashion Pioneer 2023'],
    testimonials: [
      { reviewer: 'Nagi', rating: 5, comment: 'Sathvika\'s sustainable approach is inspiring. Her textiles are both beautiful and eco-conscious!' },
      { reviewer: 'Customer C', rating: 5, comment: 'Love the vibrant colors and soft texture. Supporting sustainable fashion!' }
    ],
    products: [
      {
        id: 'p3-1',
        name: 'Pashmina Shawl',
        price: 2999,
        originalPrice: 3499,
        image: '/textile-pashmina-1.jpg',
        rating: 4.9,
        reviews: 78,
        description: 'Handwoven sustainable pashmina with eco-friendly dyes'
      },
      {
        id: 'p3-2',
        name: 'Cotton Dupatta Set',
        price: 1299,
        originalPrice: 1599,
        image: '/textile-dupatta-1.jpg',
        rating: 4.8,
        reviews: 56,
        description: 'Organic cotton dupatta with traditional patterns'
      },
      {
        id: 'p3-3',
        name: 'Bedsheet Set',
        price: 1899,
        originalPrice: 2399,
        image: '/textile-bedsheet-1.jpg',
        rating: 4.7,
        reviews: 43,
        description: 'Premium cotton bedsheet set with natural dyes'
      },
      {
        id: 'p3-4',
        name: 'Eco-friendly Saree',
        price: 3999,
        originalPrice: 4999,
        image: '/textile-pashmina-1.jpg',
        rating: 4.9,
        reviews: 32,
        description: 'Traditional saree made with sustainable materials'
      },
      {
        id: 'p3-5',
        name: 'Textile Workshop Kit',
        price: 2499,
        originalPrice: 2999,
        image: '/textile-dupatta-1.jpg',
        rating: 4.8,
        reviews: 28,
        description: 'Complete kit for learning sustainable textile techniques'
      }
    ]
  },
  {
    id: 4,
    name: 'Nagamani Devi',
    type: 'Housewife Artisan',
    craft: 'Traditional Painting & Home Decor',
    location: 'Madhubani, Bihar',
    address: '12, Village Road, Madhubani',
    contact: '+91 98765 43213',
    experience: '15+ years',
    rating: 4.8,
    reviews: 195,
    totalOrders: 650,
    specialties: ['Madhubani Paintings', 'Wall Art', 'Traditional Motifs'],
    image: artisan4,
    description: 'Dedicated housewife who has mastered the ancient art of Madhubani painting. Nagi preserves cultural traditions while supporting her family through her artistic skills.',
    awards: ['Folk Art Preservation Award 2022', 'Women Empowerment in Arts 2023'],
    testimonials: [
      { reviewer: 'Peena', rating: 5, comment: 'Nagi\'s paintings bring so much culture and beauty to our homes. Truly talented!' },
      { reviewer: 'Customer D', rating: 5, comment: 'The traditional motifs are painted with such precision. Authentic and beautiful!' }
    ]
  },
  {
    id: 5,
    name: 'Peena Kumari',
    type: 'Startup Entrepreneur',
    craft: 'Jewelry Design & Innovation',
    location: 'Jaipur, Rajasthan',
    address: '78, Jewelry Market, Pink City',
    contact: '+91 98765 43214',
    experience: '6+ years',
    rating: 4.9,
    reviews: 421,
    totalOrders: 1450,
    specialties: ['Contemporary Jewelry', 'Fusion Designs', 'Custom Orders'],
    image: artisan5,
    description: 'Young entrepreneur creating contemporary jewelry designs that blend traditional techniques with modern aesthetics. Peena\'s innovative approach has attracted customers worldwide.',
    awards: ['Young Designer Award 2024', 'Innovation in Jewelry 2023'],
    testimonials: [
      { reviewer: 'Mani', rating: 5, comment: 'Peena\'s jewelry designs are absolutely gorgeous! Modern yet traditional.' },
      { reviewer: 'Customer E', rating: 5, comment: 'The craftsmanship is exceptional. Received so many compliments!' }
    ]
  },
  {
    id: 6,
    name: 'Mani Bhushan',
    type: 'Master Craftsman',
    craft: 'Terracotta & Ceramic Art',
    location: 'Kumartuli, West Bengal',
    address: '34, Potter\'s Lane, Kumartuli',
    contact: '+91 98765 43215',
    experience: '30+ years',
    rating: 4.9,
    reviews: 267,
    totalOrders: 890,
    specialties: ['Terracotta Sculptures', 'Religious Idols', 'Decorative Items'],
    image: artisan6,
    description: 'Master craftsman with three decades of experience in terracotta art. Mani\'s work represents the rich cultural heritage of Bengal\'s pottery traditions.',
    awards: ['Master Craftsman Award 2020', 'Cultural Heritage Preservation 2022'],
    testimonials: [
      { reviewer: 'Charitha', rating: 5, comment: 'Mani\'s terracotta work is simply extraordinary. Such skill and dedication!' },
      { reviewer: 'Customer F', rating: 5, comment: 'The sculpture arrived perfectly packed and is even more beautiful in person!' }
    ]
  },
  {
    id: 7,
    name: 'Lakshmi Narayanan',
    type: 'Housewife Artisan',
    craft: 'Embroidery & Textile Art',
    location: 'Kanchipuram, Tamil Nadu',
    address: '56, Silk Weavers Street',
    contact: '+91 98765 43216',
    experience: '18+ years',
    rating: 4.8,
    reviews: 234,
    totalOrders: 780,
    specialties: ['Traditional Embroidery', 'Silk Work', 'Bridal Accessories'],
    image: artisan7,
    description: 'Skilled housewife artisan specializing in intricate embroidery work. Her attention to detail and traditional techniques create stunning textile masterpieces.',
    awards: ['Traditional Craft Excellence 2023'],
    testimonials: [
      { reviewer: 'Customer G', rating: 5, comment: 'The embroidery work is incredibly detailed. Beautiful traditional craftsmanship!' }
    ]
  },
  {
    id: 8,
    name: 'Rajesh Metalworks',
    type: 'Professional Artisan',
    craft: 'Brass & Metal Craft',
    location: 'Moradabad, Uttar Pradesh',
    address: '89, Brass City Market',
    contact: '+91 98765 43217',
    experience: '22+ years',
    rating: 4.8,
    reviews: 312,
    totalOrders: 1100,
    specialties: ['Brass Sculptures', 'Metal Decoratives', 'Religious Items'],
    image: artisan8,
    description: 'Professional metal craftsman creating exquisite brass and metal artworks. Known for precision and quality in decorative and functional metal items.',
    awards: ['Metal Craft Excellence Award 2022'],
    testimonials: [
      { reviewer: 'Customer H', rating: 5, comment: 'The brass lamp is gorgeous and well-crafted. Excellent quality!' }
    ]
  },
  {
    id: 9,
    name: 'Priya Startup Studio',
    type: 'Young Entrepreneur',
    craft: 'Leather Craft & Accessories',
    location: 'Chennai, Tamil Nadu',
    address: '23, Leather Export Zone',
    contact: '+91 98765 43218',
    experience: '4+ years',
    rating: 4.7,
    reviews: 189,
    totalOrders: 560,
    specialties: ['Leather Bags', 'Wallets', 'Custom Accessories'],
    image: artisan9,
    description: 'Young entrepreneur creating premium leather products with modern designs. Focus on quality craftsmanship and contemporary styling.',
    awards: ['Young Entrepreneur Recognition 2024'],
    testimonials: [
      { reviewer: 'Customer I', rating: 5, comment: 'The leather bag quality is outstanding. Modern design with traditional craftsmanship!' }
    ]
  },
  {
    id: 10,
    name: 'Meera Folk Arts',
    type: 'Housewife Artist',
    craft: 'Folk Painting & Art',
    location: 'Udaipur, Rajasthan',
    address: '67, Artist Colony, Lake City',
    contact: '+91 98765 43219',
    experience: '16+ years',
    rating: 4.8,
    reviews: 156,
    totalOrders: 420,
    specialties: ['Miniature Paintings', 'Folk Art', 'Traditional Themes'],
    image: artisan10,
    description: 'Talented housewife artist preserving Rajasthani folk art traditions. Her paintings capture the vibrant culture and stories of Rajasthan.',
    awards: ['Folk Art Preservation Award 2023'],
    testimonials: [
      { reviewer: 'Customer J', rating: 5, comment: 'The miniature painting is incredibly detailed. A true work of art!' }
    ]
  },
  {
    id: 11,
    name: 'Vikram Glass Studio',
    type: 'Startup Innovator',
    craft: 'Glass Art & Innovation',
    location: 'Pune, Maharashtra',
    address: '45, Innovation Hub, Hinjewadi',
    contact: '+91 98765 43220',
    experience: '7+ years',
    rating: 4.9,
    reviews: 203,
    totalOrders: 650,
    specialties: ['Glass Sculptures', 'Modern Art', 'Custom Installations'],
    image: artisan11,
    description: 'Innovative startup founder combining traditional glassblowing with modern artistic expressions. Creates unique contemporary glass art pieces.',
    awards: ['Innovation in Glass Art 2024'],
    testimonials: [
      { reviewer: 'Customer K', rating: 5, comment: 'The glass sculpture is breathtaking. Modern art at its finest!' }
    ]
  },
  {
    id: 12,
    name: 'Kamala Traditional Dolls',
    type: 'Housewife Artisan',
    craft: 'Traditional Doll Making',
    location: 'Mysore, Karnataka',
    address: '34, Doll Makers Lane',
    contact: '+91 98765 43221',
    experience: '20+ years',
    rating: 4.8,
    reviews: 178,
    totalOrders: 540,
    specialties: ['Traditional Dolls', 'Cultural Figures', 'Festival Decorations'],
    image: artisan12,
    description: 'Expert doll maker creating traditional Indian dolls representing various cultural themes. Her work brings joy to children and preserves cultural heritage.',
    awards: ['Traditional Craft Award 2022'],
    testimonials: [
      { reviewer: 'Customer L', rating: 5, comment: 'The dolls are beautifully crafted and culturally authentic. Kids love them!' }
    ]
  },
  {
    id: 13,
    name: 'Suresh Stone Arts',
    type: 'Master Sculptor',
    craft: 'Stone Carving & Sculpture',
    location: 'Makrana, Rajasthan',
    address: '78, Marble Market, Makrana',
    contact: '+91 98765 43222',
    experience: '28+ years',
    rating: 4.9,
    reviews: 145,
    totalOrders: 380,
    specialties: ['Marble Sculptures', 'Architectural Elements', 'Religious Carvings'],
    image: artisan13,
    description: 'Master stone carver working with the finest Makrana marble. His sculptures showcase the traditional art of stone carving with exceptional skill.',
    awards: ['Master Sculptor Award 2021'],
    testimonials: [
      { reviewer: 'Customer M', rating: 5, comment: 'The marble sculpture is absolutely perfect. Museum-quality craftsmanship!' }
    ]
  },
  {
    id: 14,
    name: 'Eco Beauty Startup',
    type: 'Young Entrepreneur',
    craft: 'Natural Cosmetics & Packaging',
    location: 'Bangalore, Karnataka',
    address: '56, Eco Park, Electronic City',
    contact: '+91 98765 43223',
    experience: '3+ years',
    rating: 4.7,
    reviews: 267,
    totalOrders: 890,
    specialties: ['Organic Skincare', 'Eco Packaging', 'Natural Ingredients'],
    image: artisan14,
    description: 'Young entrepreneur creating sustainable beauty products with traditional Indian ingredients. Focus on eco-friendly practices and natural wellness.',
    awards: ['Sustainable Business Award 2024'],
    testimonials: [
      { reviewer: 'Customer N', rating: 5, comment: 'Love the natural ingredients and eco-friendly packaging. Great for sensitive skin!' }
    ]
  },
  {
    id: 15,
    name: 'Tabla Singh Music',
    type: 'Master Craftsman',
    craft: 'Musical Instrument Making',
    location: 'Varanasi, Uttar Pradesh',
    address: '23, Music Street, Varanasi',
    contact: '+91 98765 43224',
    experience: '35+ years',
    rating: 4.9,
    reviews: 89,
    totalOrders: 220,
    specialties: ['Tabla', 'Sitar', 'Traditional Instruments'],
    image: artisan15,
    description: 'Master craftsman creating traditional Indian musical instruments. His tabla and sitar are used by renowned musicians across the country.',
    awards: ['Music Craft Excellence 2020', 'Heritage Preservation Award 2023'],
    testimonials: [
      { reviewer: 'Customer O', rating: 5, comment: 'The tabla sound quality is exceptional. Professional-grade instruments!' }
    ]
  },
  {
    id: 16,
    name: 'Woolen Wonders',
    type: 'Housewife Artisan',
    craft: 'Knitting & Woolen Crafts',
    location: 'Kullu, Himachal Pradesh',
    address: '45, Valley View, Kullu',
    contact: '+91 98765 43225',
    experience: '14+ years',
    rating: 4.8,
    reviews: 298,
    totalOrders: 950,
    specialties: ['Woolen Shawls', 'Sweaters', 'Traditional Patterns'],
    image: artisan16,
    description: 'Skilled housewife artisan creating beautiful woolen products using traditional Himalayan techniques. Her shawls and sweaters provide warmth with style.',
    awards: ['Mountain Craft Award 2023'],
    testimonials: [
      { reviewer: 'Customer P', rating: 5, comment: 'The woolen shawl is incredibly soft and warm. Perfect for winter!' }
    ]
  },
  {
    id: 17,
    name: 'Tech Craft Fusion',
    type: 'Tech Startup Founder',
    craft: 'Digital-Traditional Craft Fusion',
    location: 'Gurgaon, Haryana',
    address: '89, Tech Hub, Cyber City',
    contact: '+91 98765 43226',
    experience: '5+ years',
    rating: 4.8,
    reviews: 178,
    totalOrders: 540,
    specialties: ['3D Printed Crafts', 'Digital Design', 'Traditional Fusion'],
    image: artisan17,
    description: 'Innovative startup founder merging traditional crafts with cutting-edge technology. Creating unique products that blend heritage with modern innovation.',
    awards: ['Tech Innovation Award 2024'],
    testimonials: [
      { reviewer: 'Customer Q', rating: 5, comment: 'Amazing fusion of technology and tradition. Truly innovative products!' }
    ]
  },
  {
    id: 18,
    name: 'Calligraphy Creations',
    type: 'Professional Artist',
    craft: 'Calligraphy & Script Art',
    location: 'Delhi, NCR',
    address: '67, Art District, Karol Bagh',
    contact: '+91 98765 43227',
    experience: '11+ years',
    rating: 4.9,
    reviews: 156,
    totalOrders: 430,
    specialties: ['Arabic Calligraphy', 'Devanagari Scripts', 'Modern Typography'],
    image: artisan18,
    description: 'Professional calligrapher mastering multiple script styles. Creates beautiful handwritten artworks for special occasions and decorative purposes.',
    awards: ['Calligraphy Excellence Award 2023'],
    testimonials: [
      { reviewer: 'Customer R', rating: 5, comment: 'The calligraphy work is absolutely stunning. Perfect for our wedding invitations!' }
    ]
  },
  {
    id: 19,
    name: 'Green Bags Initiative',
    type: 'Eco Entrepreneur',
    craft: 'Sustainable Bag Making',
    location: 'Kochi, Kerala',
    address: '34, Eco Zone, Marine Drive',
    contact: '+91 98765 43228',
    experience: '4+ years',
    rating: 4.7,
    reviews: 345,
    totalOrders: 1200,
    specialties: ['Jute Bags', 'Recycled Materials', 'Eco-friendly Designs'],
    image: artisan19,
    description: 'Young eco-conscious entrepreneur creating sustainable bags from recycled and natural materials. Leading the movement towards environmental responsibility.',
    awards: ['Eco Innovation Award 2024'],
    testimonials: [
      { reviewer: 'Customer S', rating: 5, comment: 'Love the eco-friendly bags! Stylish and environmentally conscious.' }
    ]
  },
  {
    id: 20,
    name: 'Cultural Masks Studio',
    type: 'Heritage Artist',
    craft: 'Traditional Mask Making',
    location: 'Thrissur, Kerala',
    address: '56, Cultural Center, Thrissur',
    contact: '+91 98765 43229',
    experience: '25+ years',
    rating: 4.9,
    reviews: 134,
    totalOrders: 290,
    specialties: ['Kathakali Masks', 'Traditional Theater', 'Cultural Preservation'],
    image: artisan20,
    description: 'Master artist specializing in traditional Kerala mask making for Kathakali and other classical art forms. Preserves ancient cultural traditions through his craft.',
    awards: ['Cultural Heritage Award 2022', 'Traditional Arts Excellence 2024'],
    testimonials: [
      { reviewer: 'Customer T', rating: 5, comment: 'The Kathakali mask is absolutely authentic and beautifully crafted. Museum quality!' }
    ]
  }
];

const ArtisansPage = () => {
  const [selectedArtisan, setSelectedArtisan] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProducts = (artisan: any) => {
    // Use artisan's products if available, otherwise generate default products
    const products = artisan.products || getDefaultProducts(artisan.id, artisan.craft);
    setSelectedArtisan({ ...artisan, products });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArtisan(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="subtle-gradient py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 md:space-y-6">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30 mb-4">
              <Award className="h-3 w-3 mr-1" />
              Meet Our Master Craftspeople
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground animate-fade-in">
              The Artisans Behind
              <span className="block text-accent">Every Masterpiece</span>
            </h1>
            
            <p className="text-base md:text-lg text-primary-foreground/90 max-w-3xl mx-auto px-4">
              Discover the talented hands and creative minds that bring centuries-old traditions to life. 
              Each artisan in our community represents generations of skill, passion, and cultural heritage.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 pt-6 md:pt-8">
              <div className="text-center animate-scale-in">
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">20+</div>
                <div className="text-xs md:text-sm text-primary-foreground/70">Expert Artisans</div>
              </div>
              <div className="text-center animate-scale-in" style={{animationDelay: '0.1s'}}>
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">12+</div>
                <div className="text-xs md:text-sm text-primary-foreground/70">Indian States</div>
              </div>
              <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">15+</div>
                <div className="text-xs md:text-sm text-primary-foreground/70">Art Forms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artisans Grid */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {artisans.map((artisan, index) => (
              <Card key={artisan.id} className="group card-elegant overflow-hidden animate-fade-in hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img
                    src={artisan.image}
                    alt={`${artisan.name}'s work`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-medium">{artisan.experience}</span>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg md:text-xl font-serif font-bold line-clamp-1">{artisan.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="text-sm font-medium">{artisan.rating}</span>
                        <span className="text-xs text-muted-foreground">({artisan.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <Badge variant="secondary" className="text-xs">{artisan.craft}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span className="truncate">{artisan.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">{artisan.type}</Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-3">{artisan.description}</p>
                    
                    {/* Contact & Stats */}
                    <div className="grid grid-cols-2 gap-2 p-3 bg-muted/20 rounded-lg">
                      <div className="flex items-center gap-1">
                        <Package className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{artisan.totalOrders} orders</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{artisan.experience}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {artisan.specialties.slice(0, 2).map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                        {artisan.specialties.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{artisan.specialties.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Reviews Preview */}
                    {artisan.testimonials && artisan.testimonials.length > 0 && (
                      <div>
                        <div className="p-2 bg-muted/10 rounded text-xs">
                          <div className="flex items-center gap-1 mb-1">
                            {[...Array(artisan.testimonials[0].rating)].map((_, i) => (
                              <Star key={i} className="h-2.5 w-2.5 fill-accent text-accent" />
                            ))}
                            <span className="font-medium">{artisan.testimonials[0].reviewer}</span>
                          </div>
                          <p className="text-muted-foreground line-clamp-2">{artisan.testimonials[0].comment}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        className="flex-1 animate-fade-in"
                        onClick={() => handleViewProducts(artisan)}
                      >
                        View Products
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Contact
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 md:py-16 warm-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">
            Become Part of Our Artisan Community
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Are you a skilled craftsperson looking to showcase your work to art lovers worldwide? 
            Join our community and share your heritage with the world.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground btn-glow animate-fade-in">
            Apply to Join
          </Button>
        </div>
      </section>

      {/* Product Modal */}
      {selectedArtisan && (
        <ArtisanProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          artisanName={selectedArtisan.name}
          products={selectedArtisan.products || []}
        />
      )}
    </div>
  );
};

export default ArtisansPage;