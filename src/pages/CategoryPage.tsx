import { useParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { products, categories, bestSellers } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { SortFilter, SortOption, FilterOption } from '@/components/SortFilter';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = categories.find(c => c.id === categoryId);
  
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState<FilterOption[]>([
    { label: 'Ceramics & Pottery', value: 'ceramics', checked: false },
    { label: 'Textiles & Fabrics', value: 'textiles', checked: false },
    { label: 'Woodcraft', value: 'woodcraft', checked: false },
    { label: 'Jewelry & Accessories', value: 'jewelry', checked: false },
    { label: 'Home Decor', value: 'homedecor', checked: false },
    { label: 'Traditional Art', value: 'art', checked: false }
  ]);

  const sortOptions: SortOption[] = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Customer Rating', value: 'rating' },
    { label: 'Newest First', value: 'newest' }
  ];

  let baseProducts = products;
  let pageTitle = 'All Products';
  let pageDescription = 'Explore our complete collection of authentic Indian handicrafts';

  // Handle different page types
  if (categoryId) {
    baseProducts = products.filter(p => p.category === categoryId);
    if (category) {
      pageTitle = category.name;
      pageDescription = category.description;
    }
  } else {
    // This is for the main categories page - show all products
    pageTitle = 'All Categories';
    pageDescription = 'Browse through our complete collection of handcrafted treasures from skilled artisans across India.';
  }

  // Apply filters and sorting
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = baseProducts;

    // Apply category filters (if any are selected)
    const activeFilters = filters.filter(f => f.checked).map(f => f.value);
    if (activeFilters.length > 0) {
      filtered = filtered.filter(product => activeFilters.includes(product.category));
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return a.id.localeCompare(b.id); // Assuming newer products have higher IDs
        case 'featured':
        default:
          return 0; // Keep original order for featured
      }
    });

    return sorted;
  }, [baseProducts, filters, sortBy]);

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  const handleFilterChange = (value: string, checked: boolean) => {
    setFilters(prev => prev.map(filter => 
      filter.value === value ? { ...filter, checked } : filter
    ));
  };

  const activeFiltersCount = filters.filter(f => f.checked).length;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold">
              {pageTitle}
            </h1>
            <p className="text-muted-foreground mt-2">{pageDescription}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {filteredAndSortedProducts.length} products found
            </p>
          </div>
          
          <SortFilter
            sortOptions={sortOptions}
            filterOptions={filters}
            onSortChange={handleSortChange}
            onFilterChange={handleFilterChange}
            currentSort={sortBy}
            activeFiltersCount={activeFiltersCount}
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.length > 0 ? (
            filteredAndSortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;