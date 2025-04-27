import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-6 px-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <AlertTriangle className="h-8 w-8 mr-3" />
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            HumanChain
            <span className="block text-sm md:text-base font-normal mt-1 text-blue-100">
              AI Safety Incident Dashboard
            </span>
          </h1>
        </div>
        <div className="flex items-center">
          <span className="text-sm mr-2 text-blue-100">Monitoring AI Safety Since 2025</span>
          <span className="bg-blue-800 px-3 py-1 rounded-full text-xs font-medium">
            Intern Project
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;