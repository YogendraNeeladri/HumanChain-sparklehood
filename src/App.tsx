import React, { useState } from 'react';
import Header from './components/Header';
import FilterControls from './components/FilterControls';
import SortControls from './components/SortControls';
import IncidentList from './components/IncidentList';
import IncidentForm from './components/IncidentForm';
import { Incident, Severity, SortOrder } from './types';
import { mockIncidents } from './data/mockIncidents';

function App() {
  // State management
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [selectedSeverity, setSelectedSeverity] = useState<Severity | 'All'>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  // Handle adding a new incident
  const handleAddIncident = (newIncident: Omit<Incident, 'id'>) => {
    const newId = Math.max(0, ...incidents.map(i => i.id)) + 1;
    
    const incidentWithId: Incident = {
      ...newIncident,
      id: newId
    };
    
    setIncidents(prevIncidents => [incidentWithId, ...prevIncidents]);
    
    // Show success message
    alert('Incident reported successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">AI Safety Incidents</h2>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
                <FilterControls 
                  selectedSeverity={selectedSeverity} 
                  onSeverityChange={setSelectedSeverity} 
                />
                
                <SortControls 
                  sortOrder={sortOrder} 
                  onSortOrderChange={setSortOrder} 
                />
              </div>
              
              <IncidentList 
                incidents={incidents} 
                selectedSeverity={selectedSeverity} 
                sortOrder={sortOrder} 
              />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <IncidentForm onSubmit={handleAddIncident} />
            
            <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h3 className="font-medium text-blue-800 mb-2">About this dashboard</h3>
              <p className="text-sm text-blue-700">
                This AI Safety Incident Dashboard helps track and monitor potential safety 
                issues with AI systems. Report new incidents to help improve AI safety practices
                at HumanChain.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© 2025 HumanChain | Yogendra Neeladri</p>
          <p className="mt-1 text-gray-400 text-xs">Lovely Professional University</p>
        </div>
      </footer>
    </div>
  );
}

export default App;