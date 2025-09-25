import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Award, Heart } from 'lucide-react';

const artisans = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    craft: 'Blue Pottery',
    location: 'Jaipur, Rajasthan',
    experience: '25+ years',
    rating: 4.9,
    reviews: 124,
    specialties: ['Decorative Vases', 'Kitchen Sets', 'Garden Planters'],
    image: '/ceramic-vase-1.jpg',
    description: 'Master craftsman specializing in traditional Rajasthani blue pottery with Persian influences.',
    awards: ['Shilp Guru Award 2019', 'National Handicrafts Award']
  },
  {
    id: 2,
    name: 'Lakshmi Devi',
    craft: 'Terracotta Art',
    location: 'Khanapur, Karnataka',
    experience: '20+ years',
    rating: 4.8,
    reviews: 89,
    specialties: ['Tea Sets', 'Traditional Pots', 'Decorative Items'],
    image: '/ceramic-teaset-1.jpg',
    description: 'Expert in traditional terracotta techniques passed down through generations.',
    awards: ['State Handicrafts Excellence Award']
  },
  {
    id: 3,
    name: 'Mohammad Ali',
    craft: 'Pashmina Weaving',
    location: 'Srinagar, Kashmir',
    experience: '30+ years',
    rating: 4.9,
    reviews: 203,
    specialties: ['Pashmina Shawls', 'Kashmiri Embroidery', 'Luxury Textiles'],
    image: '/textile-pashmina-1.jpg',
    description: 'Third-generation pashmina weaver creating the finest Kashmiri textiles.',
    awards: ['Padma Shri 2018', 'Master Weaver Award']
  },
  {
    id: 4,
    name: 'Ravi Gowda',
    craft: 'Wood Carving',
    location: 'Channapatna, Karnataka',
    experience: '22+ years',
    rating: 4.8,
    reviews: 142,
    specialties: ['Wooden Sculptures', 'Toys', 'Decorative Items'],
    image: '/wood-elephant-1.jpg',
    description: 'Renowned wood carver from the famous Channapatna toy-making region.',
    awards: ['Karnataka State Handicrafts Award']
  },
  {
    id: 5,
    name: 'Bharti Dayal',
    craft: 'Madhubani Painting',
    location: 'Madhubani, Bihar',
    experience: '18+ years',
    rating: 4.9,
    reviews: 67,
    specialties: ['Traditional Paintings', 'Wall Art', 'Canvas Works'],
    image: '/art-madhubani-1.jpg',
    description: 'Award-winning Madhubani artist preserving ancient painting traditions.',
    awards: ['National Merit Certificate', 'Bihar Folk Art Award']
  },
  {
    id: 6,
    name: 'Suresh Jewellers',
    craft: 'Kundan Jewelry',
    location: 'Jaipur, Rajasthan',
    experience: '35+ years',
    rating: 4.9,
    reviews: 76,
    specialties: ['Bridal Sets', 'Traditional Necklaces', 'Custom Jewelry'],
    image: '/jewelry-kundan-1.jpg',
    description: 'Master jeweler specializing in traditional Kundan and Polki jewelry.',
    awards: ['Export Excellence Award', 'Rajasthan Jewelry Guild Recognition']
  }
];

const ArtisansPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="subtle-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30 mb-4">
              <Award className="h-3 w-3 mr-1" />
              Meet Our Master Craftspeople
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">
              The Artisans Behind
              <span className="block text-accent">Every Masterpiece</span>
            </h1>
            
            <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
              Discover the talented hands and creative minds that bring centuries-old traditions to life. 
              Each artisan in our community represents generations of skill, passion, and cultural heritage.
            </p>

            {/* Stats */}
            <div className="flex justify-center items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">50+</div>
                <div className="text-sm text-primary-foreground/70">Master Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">15+</div>
                <div className="text-sm text-primary-foreground/70">Indian States</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">20+</div>
                <div className="text-sm text-primary-foreground/70">Art Forms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artisans Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan) => (
              <Card key={artisan.id} className="group card-elegant overflow-hidden">
                <div className="relative h-64 overflow-hidden">
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

                <CardHeader>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-serif font-bold">{artisan.name}</h3>
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
                        {artisan.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">{artisan.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {artisan.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {artisan.awards.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                          <Award className="h-3 w-3" />
                          Awards:
                        </h4>
                        <div className="space-y-1">
                          {artisan.awards.map((award, index) => (
                            <div key={index} className="text-xs text-muted-foreground">• {award}</div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">View Products</Button>
                      <Button size="sm" variant="outline" className="flex-1">Contact</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 warm-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
            Become Part of Our Artisan Community
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Are you a skilled craftsperson looking to showcase your work to art lovers worldwide? 
            Join our community and share your heritage with the world.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground btn-glow">
            Apply to Join
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ArtisansPage;