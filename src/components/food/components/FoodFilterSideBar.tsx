import { User } from "lucide-react";
import type { FilterType } from "../types";

export const FilterSidebar: React.FC<{
    activeFilters: FilterType[];
    toggleFilter: (filter: FilterType) => void;
  }> = ({ activeFilters, toggleFilter }) => (
    <div className="bg-white rounded-xl p-6 sticky top-40">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">Hi, Rahul</p>
          <p className="text-sm text-gray-500">Bengaluru</p>
        </div>
      </div>
  
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Filters</h3>
          <div className="space-y-2">
            {[
              { key: 'community', label: 'Community Match', icon: '✅' },
              { key: 'cuisine', label: 'Cuisine' },
              { key: 'distance', label: 'Distance' },
              { key: 'veg', label: 'Dietary' }
            ].map(filter => (
              <label key={filter.key} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={activeFilters.includes(filter.key as FilterType)}
                  onChange={() => toggleFilter(filter.key as FilterType)}
                  className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                />
                <span className="text-gray-700">{filter.icon} {filter.label}</span>
              </label>
            ))}
          </div>
        </div>
  
        <div className="pt-4 border-t">
          <h3 className="font-semibold text-gray-900 mb-3">More Filters</h3>
          <div className="space-y-2 text-gray-600">
            {['Events', 'Cuisines', 'Dietary', 'Price Range'].map(item => (
              <div key={item} className="flex justify-between items-center">
                <span>{item}</span>
                <span className="text-purple-600">+</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );