import React from 'react';
import { Megaphone } from 'lucide-react';
import { FormData } from '../../types';
import { InputField } from '../ui/InputField';

interface PaidTrafficProps {
  data: FormData['trafficSources']['paid'];
  onChange: (data: FormData['trafficSources']['paid']) => void;
}

export const PaidTraffic: React.FC<PaidTrafficProps> = ({ data, onChange }) => {
  const handleChange = (name: string, value: string) => {
    if (name === 'platforms') {
      onChange({ ...data, platforms: value.split(',').map(p => p.trim()) });
    } else {
      onChange({ ...data, [name]: value });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Megaphone className="w-5 h-5 text-blue-500" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Paid Traffic</h3>
      </div>
      
      <InputField
        label="Monthly Ad Spend ($)"
        type="number"
        id="monthlySpend"
        name="monthlySpend"
        value={data.monthlySpend}
        onChange={(e) => handleChange('monthlySpend', e.target.value)}
        min="0"
      />

      <InputField
        label="Primary Platforms"
        type="text"
        id="platforms"
        name="platforms"
        value={data.platforms.join(', ')}
        onChange={(e) => handleChange('platforms', e.target.value)}
        placeholder="e.g., Facebook, Google Ads"
        helperText="Separate platforms with commas"
      />
    </div>
  );
};