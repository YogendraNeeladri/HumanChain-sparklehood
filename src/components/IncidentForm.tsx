import React, { useState } from 'react';
import { Incident, Severity } from '../types';
import { AlertCircle } from 'lucide-react';

interface IncidentFormProps {
  onSubmit: (incident: Omit<Incident, 'id'>) => void;
}

interface FormErrors {
  title?: string;
  description?: string;
  severity?: string;
}

const IncidentForm: React.FC<IncidentFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<Severity>('Medium');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!severity) {
      newErrors.severity = 'Severity is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Create new incident object
    const newIncident: Omit<Incident, 'id'> = {
      title,
      description,
      severity,
      reported_at: new Date().toISOString()
    };
    
    // Submit the new incident
    onSubmit(newIncident);
    
    // Reset form
    setTitle('');
    setDescription('');
    setSeverity('Medium');
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
        Report New Incident
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Incident Title*
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
              errors.title ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Enter incident title"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description*
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
              errors.description ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Describe the incident in detail"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description}</p>
          )}
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Severity*
          </label>
          <div className="flex space-x-3">
            {(['Low', 'Medium', 'High'] as Severity[]).map((level) => (
              <label 
                key={level} 
                className={`
                  flex items-center justify-center px-4 py-2 border rounded-md text-sm font-medium cursor-pointer transition-colors
                  ${severity === level 
                    ? (level === 'Low' ? 'bg-green-100 border-green-300 text-green-800' : 
                       level === 'Medium' ? 'bg-yellow-100 border-yellow-300 text-yellow-800' : 
                       'bg-red-100 border-red-300 text-red-800') 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }
                `}
              >
                <input
                  type="radio"
                  name="severity"
                  value={level}
                  checked={severity === level}
                  onChange={() => setSeverity(level)}
                  className="sr-only"
                />
                {level}
              </label>
            ))}
          </div>
          {errors.severity && (
            <p className="mt-1 text-sm text-red-600">{errors.severity}</p>
          )}
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Incident Report'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default IncidentForm;