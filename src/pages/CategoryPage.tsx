import { useParams } from 'react-router-dom';
import { products, categories } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = categories.find(c => c.id === categoryId);
  const categoryProducts = categoryId ? products.filter(p => p.category === categoryId) : products;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-serif font-bold">
            {category ? category.name : 'All Products'}
          </h1>
          {category && (
            <p className="text-muted-foreground mt-2">{category.description}</p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;