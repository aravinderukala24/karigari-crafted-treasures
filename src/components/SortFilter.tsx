import { useState } from 'react';
import { ChevronDown, Filter, SortAsc } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

export interface SortOption {
  label: string;
  value: string;
}

export interface FilterOption {
  label: string;
  value: string;
  checked: boolean;
}

interface SortFilterProps {
  sortOptions: SortOption[];
  filterOptions: FilterOption[];
  onSortChange: (value: string) => void;
  onFilterChange: (value: string, checked: boolean) => void;
  currentSort: string;
  activeFiltersCount: number;
}

export const SortFilter = ({
  sortOptions,
  filterOptions,
  onSortChange,
  onFilterChange,
  currentSort,
  activeFiltersCount
}: SortFilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const currentSortLabel = sortOptions.find(option => option.value === currentSort)?.label || 'Sort';

  // Enhanced sort options with color and price
  const enhancedSortOptions = [
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Rating: High to Low', value: 'rating-desc' },
    { label: 'Rating: Low to High', value: 'rating-asc' },
    { label: 'Newest First', value: 'newest' },
    { label: 'Oldest First', value: 'oldest' },
    { label: 'Name: A to Z', value: 'name-asc' },
    { label: 'Name: Z to A', value: 'name-desc' },
    { label: 'Most Popular', value: 'popular' },
    { label: 'Best Sellers', value: 'bestseller' },
    ...sortOptions
  ];

  // Enhanced filter options with colors and categories
  const enhancedFilterOptions = [
    ...filterOptions,
    { label: 'Red/Pink', value: 'color-red', checked: false },
    { label: 'Blue', value: 'color-blue', checked: false },
    { label: 'Green', value: 'color-green', checked: false },
    { label: 'Yellow/Orange', value: 'color-yellow', checked: false },
    { label: 'Brown/Beige', value: 'color-brown', checked: false },
    { label: 'Black/Grey', value: 'color-black', checked: false },
    { label: 'Multicolor', value: 'color-multi', checked: false },
    { label: 'Under ₹500', value: 'price-under-500', checked: false },
    { label: '₹500 - ₹1000', value: 'price-500-1000', checked: false },
    { label: '₹1000 - ₹2000', value: 'price-1000-2000', checked: false },
    { label: 'Above ₹2000', value: 'price-above-2000', checked: false },
    { label: 'Handmade', value: 'handmade', checked: false },
    { label: 'Eco-friendly', value: 'eco-friendly', checked: false },
    { label: 'Traditional', value: 'traditional', checked: false },
    { label: 'Modern', value: 'modern', checked: false }
  ];

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {/* Sort Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <SortAsc className="h-4 w-4" />
            {currentSortLabel}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-h-64 overflow-y-auto">
          {enhancedSortOptions.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => onSortChange(option.value)}
              className={currentSort === option.value ? 'bg-muted' : ''}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Filter Dropdown */}
      <DropdownMenu open={isFilterOpen} onOpenChange={setIsFilterOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 relative">
            <Filter className="h-4 w-4" />
            Filter
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-1 px-1.5 py-0.5 text-xs">
                {activeFiltersCount}
              </Badge>
            )}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72 max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="space-y-4">
              {/* Categories */}
              <div>
                <h4 className="font-medium text-sm mb-2">Categories</h4>
                {filterOptions.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2 py-1">
                    <input
                      type="checkbox"
                      id={option.value}
                      checked={option.checked}
                      onChange={(e) => onFilterChange(option.value, e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <label 
                      htmlFor={option.value} 
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>

              {/* Colors */}
              <div>
                <h4 className="font-medium text-sm mb-2">Colors</h4>
                {enhancedFilterOptions.filter(option => option.value.startsWith('color-')).map((option) => (
                  <div key={option.value} className="flex items-center space-x-2 py-1">
                    <input
                      type="checkbox"
                      id={option.value}
                      checked={option.checked}
                      onChange={(e) => onFilterChange(option.value, e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <label 
                      htmlFor={option.value} 
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-medium text-sm mb-2">Price Range</h4>
                {enhancedFilterOptions.filter(option => option.value.startsWith('price-')).map((option) => (
                  <div key={option.value} className="flex items-center space-x-2 py-1">
                    <input
                      type="checkbox"
                      id={option.value}
                      checked={option.checked}
                      onChange={(e) => onFilterChange(option.value, e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <label 
                      htmlFor={option.value} 
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>

              {/* Style */}
              <div>
                <h4 className="font-medium text-sm mb-2">Style</h4>
                {enhancedFilterOptions.filter(option => 
                  ['handmade', 'eco-friendly', 'traditional', 'modern'].includes(option.value)
                ).map((option) => (
                  <div key={option.value} className="flex items-center space-x-2 py-1">
                    <input
                      type="checkbox"
                      id={option.value}
                      checked={option.checked}
                      onChange={(e) => onFilterChange(option.value, e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <label 
                      htmlFor={option.value} 
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SortFilter;