import React from 'react';
import { Incident, Severity, SortOrder } from '../types';
import IncidentItem from './IncidentItem';
import { compareDates } from '../utils/dateUtils';

interface IncidentListProps {
  incidents: Incident[];
  selectedSeverity: Severity | 'All';
  sortOrder: SortOrder;
}

const IncidentList: React.FC<IncidentListProps> = ({ 
  incidents, 
  selectedSeverity, 
  sortOrder 
}) => {
  // Filter incidents by severity
  const filteredIncidents = selectedSeverity === 'All'
    ? incidents
    : incidents.filter(incident => incident.severity === selectedSeverity);

  // Sort incidents by date
  const sortedIncidents = [...filteredIncidents].sort((a, b) => 
    compareDates(a.reported_at, b.reported_at, sortOrder)
  );

  if (sortedIncidents.length === 0) {
    return (
      <div className="p-8 text-center bg-white rounded-lg border border-gray-200 shadow-sm">
        <p className="text-gray-600">
          No incidents found with the selected filter criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sortedIncidents.map(incident => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;