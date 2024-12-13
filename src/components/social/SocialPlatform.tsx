import React from 'react';
import { InputField } from '../ui/InputField';
import { FormData } from '../../types';

type SocialPlatformData = {
  url: string;
  followers: string;
};

interface SocialPlatformProps {
  platform: keyof FormData['socialMedia'];
  label: string;
  data: SocialPlatformData;
  onChange: (field: 'url' | 'followers', value: string) => void;
}

export const SocialPlatform: React.FC<SocialPlatformProps> = ({
  label,
  data,
  onChange,
}) => {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-medium text-gray-900 dark:text-white">{label}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label={`${label} URL`}
          type="url"
          value={data.url}
          onChange={(e) => onChange('url', e.target.value)}
          placeholder={`https://${label.toLowerCase()}.com/...`}
        />
        <InputField
          label="Number of followers"
          type="number"
          value={data.followers}
          onChange={(e) => onChange('followers', e.target.value)}
          min="0"
          placeholder="Enter number of followers"
        />
      </div>
    </div>
  );
};