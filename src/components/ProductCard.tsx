import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star, Eye, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { toast } from 'sonner';
import { ProductView360 } from './ProductView360';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
}

export const ProductCard = ({ product, variant = 'default' }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [show360View, setShow360View] = useState(false);
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    toast.success(`${product.name} added to cart!`, {
      description: `₹${product.price.toLocaleString('en-IN')}`
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    toast.success(
      isWishlisted ? 'Removed from wishlist' : 'Added to wishlist'
    );
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group product-card overflow-hidden h-full">
      <div className="relative aspect-square overflow-hidden">
        {product.is360View && show360View ? (
          <ProductView360 images={product.images} productName={product.name} />
        ) : (
          <>
            <Link to={`/product/${product.id}`}>
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            </Link>
          </>
        )}
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {discount > 0 && (
            <Badge className="bg-destructive text-destructive-foreground">
              {discount}% OFF
            </Badge>
          )}
          {product.is360View && (
            <Badge 
              variant="secondary" 
              className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setShow360View(!show360View)}
            >
              <RotateCcw className="h-3 w-3 mr-1" />
              360° View
            </Badge>
          )}
        </div>

        {/* Action buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 bg-background/80 backdrop-blur-sm"
            onClick={handleWishlist}
          >
            <Heart 
              className={`h-4 w-4 ${isWishlisted ? 'fill-destructive text-destructive' : ''}`} 
            />
          </Button>
          <Link to={`/product/${product.id}`}>
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 bg-background/80 backdrop-blur-sm"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Quick add to cart */}
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-1">
            <Button
              onClick={handleAddToCart}
              className="flex-1 h-8 text-xs bg-primary/90 backdrop-blur-sm hover:bg-primary"
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-3 w-3 mr-1" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
            <Link to={`/customize/${product.id}`} className="flex-1">
              <Button
                variant="secondary"
                className="w-full h-8 text-xs bg-background/90 backdrop-blur-sm"
              >
                Customize
              </Button>
            </Link>
          </div>
        </div>

        {/* Image dots */}
        {product.images.length > 1 && (
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {product.images.slice(0, 3).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-primary' : 'bg-background/60'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentImageIndex(index);
                }}
              />
            ))}
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-center gap-1 text-sm">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? 'fill-accent text-accent'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-muted-foreground">
              ({product.reviews})
            </span>
          </div>

          <Link to={`/product/${product.id}`}>
            <h3 className="font-medium text-sm leading-tight hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <div className="flex items-center gap-2">
            <span className="font-bold text-primary">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{product.origin}</span>
            {product.artisan && (
              <span>by {product.artisan}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};