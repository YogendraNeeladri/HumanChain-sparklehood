import React from 'react';
import { SortOrder } from '../types';
import { ArrowUpDown } from 'lucide-react';

interface SortControlsProps {
  sortOrder: SortOrder;
  onSortOrderChange: (order: SortOrder) => void;
}

const SortControls: React.FC<SortControlsProps> = ({ 
  sortOrder, 
  onSortOrderChange 
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
      <label className="font-medium text-gray-700 mr-3 mb-2 sm:mb-0 flex items-center">
        <ArrowUpDown className="h-4 w-4 mr-1.5" />
        Sort by Date:
      </label>
      <div className="flex space-x-2">
        <button
          onClick={() => onSortOrderChange('newest')}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
            sortOrder === 'newest' 
              ? 'bg-blue-600 text-white shadow-sm' 
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          Newest First
        </button>
        <button
          onClick={() => onSortOrderChange('oldest')}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
            sortOrder === 'oldest' 
              ? 'bg-blue-600 text-white shadow-sm' 
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          Oldest First
        </button>
      </div>
    </div>
  );
};

export default SortControls;