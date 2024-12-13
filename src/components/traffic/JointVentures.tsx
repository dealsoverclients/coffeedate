import React from 'react';
import { Users } from 'lucide-react';
import { FormData } from '../../types';
import { InputField } from '../ui/InputField';

interface JointVenturesProps {
  data: FormData['trafficSources']['jointVentures'];
  onChange: (data: FormData['trafficSources']['jointVentures']) => void;
}

export const JointVentures: React.FC<JointVenturesProps> = ({ data, onChange }) => {
  const handleChange = (name: string, value: string) => {
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-5 h-5 text-purple-500" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Joint Ventures</h3>
      </div>

      <InputField
        label="Number of Active Partners"
        type="number"
        id="activePartners"
        name="activePartners"
        value={data.activePartners}
        onChange={(e) => handleChange('activePartners', e.target.value)}
        min="0"
      />

      <InputField
        label="Total JV Revenue ($)"
        type="number"
        id="totalRevenue"
        name="totalRevenue"
        value={data.totalRevenue}
        onChange={(e) => handleChange('totalRevenue', e.target.value)}
        min="0"
      />
    </div>
  );
};