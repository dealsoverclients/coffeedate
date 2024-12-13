import React from 'react';
import { Coffee } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <Coffee className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
        Coffee Date Qualifier
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        Identify and qualify lucrative business opportunities in the info product market
      </p>
    </div>
  );
};