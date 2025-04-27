import React, { useState } from 'react';
import { Incident } from '../types';
import { formatDate } from '../utils/dateUtils';
import SeverityBadge from './SeverityBadge';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface IncidentItemProps {
  incident: Incident;
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md mb-4"
    >
      <div className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 sm:mb-0">{incident.title}</h3>
          <div className="flex items-center space-x-3">
            <SeverityBadge severity={incident.severity} />
            <span className="text-sm text-gray-500">
              {formatDate(incident.reported_at)}
            </span>
          </div>
        </div>
        
        <button
          onClick={toggleExpanded}
          className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors mt-2"
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-1" />
              Hide Details
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-1" />
              View Details
            </>
          )}
        </button>

        {expanded && (
          <div className="mt-3 pt-3 border-t border-gray-100 animate-fadeIn">
            <p className="text-gray-700 text-sm leading-relaxed">{incident.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IncidentItem;