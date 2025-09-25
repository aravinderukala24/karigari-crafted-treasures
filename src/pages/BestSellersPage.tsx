import { ProductCard } from '@/components/ProductCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { TrendingUp, Crown, Star } from 'lucide-react';

const BestSellersPage = () => {
  // Get products sorted by reviews (popularity)
  const bestSellers = products.sort((a, b) => b.reviews - a.reviews).slice(0, 12);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="warm-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30">
              <TrendingUp className="h-3 w-3 mr-1" />
              Most Popular Products
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">
              Best Sellers
              <span className="block text-accent">Customer Favorites</span>
            </h1>
            
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Discover what our customers love most. These handcrafted treasures have won hearts 
              with their exceptional quality, authentic craftsmanship, and timeless appeal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground btn-glow">
                <Crown className="mr-2 h-4 w-4" />
                Shop Top Picks
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                View All Reviews
              </Button>
            </div>

            {/* Popular Categories */}
            <div className="flex justify-center items-center gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">#1</div>
                <div className="text-sm text-primary-foreground/70">Ceramics</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">#2</div>
                <div className="text-sm text-primary-foreground/70">Textiles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">#3</div>
                <div className="text-sm text-primary-foreground/70">Jewelry</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-serif font-bold">Top Selling Products</h2>
              <p className="text-muted-foreground">Ranked by customer reviews and purchases</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Most Reviews</Button>
              <Button variant="outline" size="sm">Highest Rated</Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bestSellers.map((product, index) => (
              <div key={product.id} className="relative">
                {index < 3 && (
                  <Badge className={`absolute top-2 left-2 z-10 ${
                    index === 0 ? 'bg-yellow-500 text-yellow-50' :
                    index === 1 ? 'bg-gray-400 text-gray-50' :
                    'bg-amber-600 text-amber-50'
                  }`}>
                    #{index + 1} Best Seller
                  </Badge>
                )}
                <ProductCard product={product} />
                {/* Reviews indicator */}
                <div className="absolute bottom-2 right-2 bg-background/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <span className="text-xs font-medium">{product.reviews} reviews</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground">Real reviews from satisfied customers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "Beautiful craftsmanship! The blue pottery vase exceeded my expectations. 
                You can really feel the artisan's skill in every detail."
              </p>
              <div className="text-sm">
                <div className="font-medium">Priya Sharma</div>
                <div className="text-muted-foreground">Mumbai</div>
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "The pashmina shawl is absolutely gorgeous. The quality is exceptional 
                and the packaging showed such care. Will definitely order again!"
              </p>
              <div className="text-sm">
                <div className="font-medium">Rahul Gupta</div>
                <div className="text-muted-foreground">Delhi</div>
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "Love supporting traditional artisans through this platform. 
                The wooden elephant sculpture is a masterpiece. Highly recommended!"
              </p>
              <div className="text-sm">
                <div className="font-medium">Anjali Mehta</div>
                <div className="text-muted-foreground">Bangalore</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestSellersPage;