import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Star, Palette, Users, Shield, Truck, Award } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Custom Craftsmanship",
      description: "Personalize every piece with our master artisans to create something truly unique"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Direct from Artisans",
      description: "Connect directly with skilled craftspeople, supporting traditional art forms"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Authenticity Guaranteed",
      description: "Every product is verified authentic, preserving centuries-old traditions"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Safe Delivery",
      description: "Secure packaging and reliable shipping to bring art safely to your door"
    }
  ];

  const categories = [
    { name: "Textiles", image: "/textiles-category.jpg", count: "120+ Products" },
    { name: "Woodcraft", image: "/woodcraft-category.jpg", count: "85+ Products" },
    { name: "Ceramics", image: "/ceramics-category.jpg", count: "90+ Products" },
    { name: "Art", image: "/art-category.jpg", count: "150+ Products" },
    { name: "Jewelry", image: "/jewelry-category.jpg", count: "75+ Products" },
    { name: "Home Decor", image: "/homedecor-category.jpg", count: "200+ Products" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-b from-muted/50 to-background">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-handicrafts.jpg"
            alt="Traditional Indian Handicrafts"
            className="w-full h-full object-cover opacity-30"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-wide">
            KΛRIGΛRI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            Discover authentic Indian handicrafts, where every piece tells a story of tradition, artistry, and cultural heritage.
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            <strong>For Art Lovers & Culture Enthusiasts:</strong> We connect you directly with master artisans across India, offering authentic handcrafted products and personalized customization services that preserve centuries-old traditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/home">
              <Button size="lg" className="px-8 py-3">
                Explore Collection
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 py-3">
              Meet Our Artisans
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Why Choose KΛRIGΛRI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of authentic craftsmanship with personalized service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Explore Our Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              From traditional textiles to contemporary ceramics
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to="/home" className="group">
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="aspect-square relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                      <p className="text-xs opacity-90">{category.count}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Trusted by Art Lovers Worldwide
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join thousands of satisfied customers who have discovered the beauty of authentic Indian handicrafts. Our commitment to quality, authenticity, and personalized service has made us a trusted name in traditional crafts.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Master Artisans</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">States Covered</div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold">4.9/5</span>
                <span className="text-muted-foreground">from 2,500+ reviews</span>
              </div>

              <Link to="/auth">
                <Button size="lg" className="px-8">
                  Start Your Journey
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img
                src="/hero-handicrafts.jpg"
                alt="Artisan at work"
                className="w-full rounded-lg shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary/90 text-primary-foreground">
                  <Award className="h-3 w-3 mr-1" />
                  Certified Authentic
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Discover Authentic Craftsmanship?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our curated collection of handcrafted treasures and create something uniquely yours with our customization services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/home">
              <Button size="lg" className="px-8">
                Shop Collection
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="px-8">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;