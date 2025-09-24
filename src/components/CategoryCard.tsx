import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
  productCount?: number;
}

export const CategoryCard = ({ category, productCount }: CategoryCardProps) => {
  return (
    <Link to={`/category/${category.id}`}>
      <Card className="group overflow-hidden h-full card-elegant">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Floating badge */}
          {productCount && (
            <Badge className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm">
              {productCount} Items
            </Badge>
          )}

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className="flex items-end justify-between">
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-semibold group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-white/80 line-clamp-2">
                  {category.description}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};