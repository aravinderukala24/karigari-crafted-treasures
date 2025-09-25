import { useParams } from 'react-router-dom';
import { products, categories, bestSellers } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = categories.find(c => c.id === categoryId);
  
  let categoryProducts = products;
  let pageTitle = 'All Products';
  let pageDescription = 'Explore our complete collection of authentic Indian handicrafts';

  // Handle different page types
  if (categoryId) {
    categoryProducts = products.filter(p => p.category === categoryId);
    if (category) {
      pageTitle = category.name;
      pageDescription = category.description;
    }
  } else {
    // This is for the main categories page - show all products
    pageTitle = 'All Categories';
    pageDescription = 'Browse through our complete collection of handcrafted treasures from skilled artisans across India.';
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-serif font-bold">
            {pageTitle}
          </h1>
          <p className="text-muted-foreground mt-2">{pageDescription}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.length > 0 ? (
            categoryProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;