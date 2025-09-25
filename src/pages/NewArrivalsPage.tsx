import { ProductCard } from '@/components/ProductCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { Sparkles, Calendar } from 'lucide-react';

const NewArrivalsPage = () => {
  // Get the most recent products (simulating new arrivals)
  const newArrivals = products.slice(0, 12);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30">
              <Calendar className="h-3 w-3 mr-1" />
              Fresh from Our Artisans
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">
              New Arrivals
              <span className="block text-accent">Latest Handicrafts</span>
            </h1>
            
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Discover the newest additions to our collection. Fresh creations from skilled artisans 
              across India, each piece reflecting contemporary artistry rooted in tradition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground btn-glow">
                <Sparkles className="mr-2 h-4 w-4" />
                Explore Collection
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Filter by Category
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-serif font-bold">Latest Additions</h2>
              <p className="text-muted-foreground">Showing {newArrivals.length} new products</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Price: Low to High</Button>
              <Button variant="outline" size="sm">Recently Added</Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newArrivals.map(product => (
              <div key={product.id} className="relative">
                <Badge className="absolute top-2 left-2 z-10 bg-accent text-accent-foreground">
                  New
                </Badge>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Be First to Know
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to get notified about new arrivals, exclusive collections, and special offers from our artisan community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-input bg-background"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewArrivalsPage;