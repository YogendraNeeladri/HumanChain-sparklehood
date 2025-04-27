import React from 'react';
import { Severity } from '../types';

interface FilterControlsProps {
  selectedSeverity: Severity | 'All';
  onSeverityChange: (severity: Severity | 'All') => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ 
  selectedSeverity, 
  onSeverityChange
}) => {
  const severityOptions: (Severity | 'All')[] = ['All', 'Low', 'Medium', 'High'];

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
      <label className="font-medium text-gray-700 mr-3 mb-2 sm:mb-0">
        Filter by Severity:
      </label>
      <div className="flex space-x-2">
        {severityOptions.map((severity) => (
          <button
            key={severity}
            onClick={() => onSeverityChange(severity)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              selectedSeverity === severity 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {severity}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterControls;