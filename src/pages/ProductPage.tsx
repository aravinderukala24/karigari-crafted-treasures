import { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Share2, Truck, Shield, RotateCcw, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { toast } from 'sonner';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [is360ViewActive, setIs360ViewActive] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const { addItem } = useCartStore();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast.success(`${product.name} added to cart!`, {
      description: `Quantity: ${quantity} | ₹${(product.price * quantity).toLocaleString('en-IN')}`
    });
  };

  const handle360View = () => {
    setIs360ViewActive(!is360ViewActive);
    if (!is360ViewActive && product.is360View) {
      toast.info('Drag to rotate the product in 360°');
    }
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-12 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              ref={imageRef}
              src={product.images[currentImageIndex]}
              alt={product.name}
              className={`w-full h-full object-cover transition-transform duration-300 ${
                is360ViewActive ? 'cursor-grab active:cursor-grabbing' : ''
              }`}
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
            
            {/* Image badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {discount > 0 && (
                <Badge className="bg-destructive text-destructive-foreground">
                  {discount}% OFF
                </Badge>
              )}
              {product.is360View && (
                <Badge 
                  variant="secondary" 
                  className={`cursor-pointer ${is360ViewActive ? 'bg-primary text-primary-foreground' : ''}`}
                  onClick={handle360View}
                >
                  <Eye className="h-3 w-3 mr-1" />
                  360° View
                </Badge>
              )}
            </div>

            {/* Action buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <Button
                size="icon"
                variant="secondary"
                className="bg-background/80 backdrop-blur-sm"
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-destructive text-destructive' : ''}`} />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="bg-background/80 backdrop-blur-sm"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Thumbnail images */}
          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                  index === currentImageIndex ? 'border-primary' : 'border-transparent'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>{product.origin}</span>
              {product.artisan && (
                <>
                  <span>•</span>
                  <span>by {product.artisan}</span>
                </>
              )}
            </div>
            <h1 className="text-3xl font-serif font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-accent text-accent'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-primary">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
              
              <Button
                onClick={handleAddToCart}
                className="flex-1"
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>

            <div className="flex gap-2 flex-wrap">
              {product.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 py-6 border-y">
            <div className="text-center">
              <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground">Free Shipping</p>
            </div>
            <div className="text-center">
              <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground">Authentic</p>
            </div>
            <div className="text-center">
              <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground">Easy Returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="details" className="mb-12">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
        </TabsList>
        
        <TabsContent value="details" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Product Details</h3>
                  <dl className="space-y-2 text-sm">
                    {product.dimensions && (
                      <>
                        <dt className="font-medium">Dimensions:</dt>
                        <dd className="text-muted-foreground">{product.dimensions}</dd>
                      </>
                    )}
                    {product.weight && (
                      <>
                        <dt className="font-medium">Weight:</dt>
                        <dd className="text-muted-foreground">{product.weight}</dd>
                      </>
                    )}
                    <dt className="font-medium">Origin:</dt>
                    <dd className="text-muted-foreground">{product.origin}</dd>
                    {product.artisan && (
                      <>
                        <dt className="font-medium">Artisan:</dt>
                        <dd className="text-muted-foreground">{product.artisan}</dd>
                      </>
                    )}
                  </dl>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Care Instructions</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Handle with care</li>
                    <li>• Clean with dry cloth</li>
                    <li>• Avoid direct sunlight</li>
                    <li>• Store in dry place</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="materials" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Materials Used</h3>
              <ul className="space-y-2">
                {product.materials.map((material, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {material}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="shipping" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Shipping Information</h3>
                  <p className="text-sm text-muted-foreground">
                    Free shipping on orders above ₹2000. Standard delivery takes 5-7 business days.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Return Policy</h3>
                  <p className="text-sm text-muted-foreground">
                    30-day return policy. Items must be in original condition.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-serif font-bold mb-6">Related Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <Card key={relatedProduct.id} className="group overflow-hidden">
                <Link to={`/product/${relatedProduct.id}`}>
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-sm mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="font-bold text-primary">
                      ₹{relatedProduct.price.toLocaleString('en-IN')}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;