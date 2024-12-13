import React from 'react';
import { Video } from 'lucide-react';
import { FormData } from '../../types';
import { InputField } from '../ui/InputField';

interface WebinarVSLProps {
  data: FormData['trafficSources']['webinar'];
  onChange: (data: FormData['trafficSources']['webinar']) => void;
}

export const WebinarVSL: React.FC<WebinarVSLProps> = ({ data, onChange }) => {
  const handleChange = (name: string, value: string) => {
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Video className="w-5 h-5 text-red-500" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Webinar/VSL</h3>
      </div>

      <InputField
        label="Number of Viewers"
        type="number"
        id="viewers"
        name="viewers"
        value={data.viewers}
        onChange={(e) => handleChange('viewers', e.target.value)}
        min="0"
      />

      <InputField
        label="Webinar/VSL URL"
        type="url"
        id="url"
        name="url"
        value={data.url}
        onChange={(e) => handleChange('url', e.target.value)}
        placeholder="https://"
      />

      <InputField
        label="Monthly Sales from Webinar ($)"
        type="number"
        id="monthlySales"
        name="monthlySales"
        value={data.monthlySales}
        onChange={(e) => handleChange('monthlySales', e.target.value)}
        min="0"
      />
    </div>
  );
};