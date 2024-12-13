import React from 'react';
import { FormData } from '../types';

interface CompanyInfoProps {
  data: FormData['companyInfo'];
  onChange: (data: FormData['companyInfo']) => void;
}

export const CompanyInfo: React.FC<CompanyInfoProps> = ({ data, onChange }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Company Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Website URL
        </label>
        <input
          type="url"
          id="website"
          name="website"
          value={data.website}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div>
        <label htmlFor="businessAge" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Business Age (years)
        </label>
        <input
          type="number"
          id="businessAge"
          name="businessAge"
          value={data.businessAge}
          onChange={handleChange}
          min="0"
          step="0.5"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div>
        <label htmlFor="goals" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Goals
        </label>
        <textarea
          id="goals"
          name="goals"
          value={data.goals}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div>
        <label htmlFor="priorities" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Priorities
        </label>
        <textarea
          id="priorities"
          name="priorities"
          value={data.priorities}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>
    </div>
  );
};