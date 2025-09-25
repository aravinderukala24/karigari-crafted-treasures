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

  return (
    <div className="flex items-center gap-3">
      {/* Sort Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <SortAsc className="h-4 w-4" />
            {currentSortLabel}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {sortOptions.map((option) => (
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
        <DropdownMenuContent className="w-56">
          <div className="p-2">
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
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SortFilter;