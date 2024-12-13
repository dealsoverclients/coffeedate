import React from 'react';
import { TrendingUp } from 'lucide-react';
import { FormData } from '../../types';
import { InputField } from '../ui/InputField';

interface OrganicTrafficProps {
  data: FormData['trafficSources']['organic'];
  onChange: (data: FormData['trafficSources']['organic']) => void;
}

export const OrganicTraffic: React.FC<OrganicTrafficProps> = ({ data, onChange }) => {
  const handleChange = (name: string, value: string) => {
    if (name === 'referringSites') {
      onChange({ ...data, referringSites: value.split(',').map(s => s.trim()) });
    } else {
      onChange({ ...data, [name]: value });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-green-500" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Organic Traffic</h3>
      </div>

      <InputField
        label="Monthly Visitors"
        type="number"
        id="monthlyVisitors"
        name="monthlyVisitors"
        value={data.monthlyVisitors}
        onChange={(e) => handleChange('monthlyVisitors', e.target.value)}
        min="0"
      />

      <InputField
        label="Referring Sites"
        type="text"
        id="referringSites"
        name="referringSites"
        value={data.referringSites.join(', ')}
        onChange={(e) => handleChange('referringSites', e.target.value)}
        placeholder="e.g., Google, Twitter, LinkedIn"
        helperText="Separate sites with commas"
      />
    </div>
  );
};