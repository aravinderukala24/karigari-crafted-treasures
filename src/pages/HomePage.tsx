import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/ProductCard';
import { CategoryCard } from '@/components/CategoryCard';
import { ArrowRight, Sparkles, Shield, Truck } from 'lucide-react';
import { products, categories, featuredProducts } from '@/data/products';

export const HomePage = () => {
  const categoryProductCounts = categories.map(category => ({
    ...category,
    count: products.filter(p => p.category === category.id).length
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-accent/20 text-accent-foreground border-accent/30">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Authentic Indian Handicrafts
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground leading-tight">
                  Discover the
                  <span className="block text-accent">Art of India</span>
                </h1>
                
                <p className="text-lg text-primary-foreground/90 max-w-md">
                  Handcrafted treasures from skilled artisans across India. Each piece tells a story of tradition, culture, and timeless craftsmanship.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/categories">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground btn-glow">
                      Shop Collections
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/artisans">
                    <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                      Meet Our Artisans
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-foreground">500+</div>
                    <div className="text-sm text-primary-foreground/70">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-foreground">50+</div>
                    <div className="text-sm text-primary-foreground/70">Artisans</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-foreground">15+</div>
                    <div className="text-sm text-primary-foreground/70">States</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="/hero-handicrafts.jpg"
                  alt="Beautiful Indian Handicrafts"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                <div className="absolute -bottom-4 -left-4 bg-background rounded-lg p-4 shadow-lg border">
                  <div className="text-sm font-medium">Free Shipping</div>
                  <div className="text-xs text-muted-foreground">Orders above ₹2000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-primary-foreground">Authentic Guarantee</h3>
              <p className="text-sm text-primary-foreground/80">100% genuine handicrafts from verified artisans</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-primary-foreground">Free Shipping</h3>
              <p className="text-sm text-primary-foreground/80">Free delivery on orders above ₹2000</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-primary-foreground">Artisan Support</h3>
              <p className="text-sm text-primary-foreground/80">Direct support to traditional craftspeople</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Explore Our Collections
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover handcrafted treasures from different regions of India, each category representing centuries of artistic tradition.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProductCounts.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                productCount={category.count}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Featured Products
              </h2>
              <p className="text-muted-foreground">
                Handpicked items from our talented artisans
              </p>
            </div>
            <Link to="/categories">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="warm-gradient rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">
              Stay Connected with Indian Art
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-md mx-auto">
              Get updates on new collections, artisan stories, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};