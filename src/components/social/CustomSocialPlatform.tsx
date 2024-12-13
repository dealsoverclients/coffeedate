import React from 'react';
import { Trash2 } from 'lucide-react';
import { InputField } from '../ui/InputField';
import { FormData } from '../../types';

type CustomPlatform = FormData['socialMedia']['customPlatforms'][0];

interface CustomSocialPlatformProps {
  platform: CustomPlatform;
  onUpdate: (updates: Partial<CustomPlatform>) => void;
  onRemove: () => void;
}

export const CustomSocialPlatform: React.FC<CustomSocialPlatformProps> = ({
  platform,
  onUpdate,
  onRemove,
}) => {
  return (
    <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <div className="flex justify-between items-center">
        <InputField
          label="Platform Name"
          type="text"
          value={platform.name}
          onChange={(e) => onUpdate({ name: e.target.value })}
          placeholder="Enter platform name"
          className="flex-1 mr-4"
        />
        <button
          onClick={onRemove}
          className="mt-6 p-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
          aria-label="Remove platform"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Platform URL"
          type="url"
          value={platform.url}
          onChange={(e) => onUpdate({ url: e.target.value })}
          placeholder="https://"
        />
        <InputField
          label="Number of followers"
          type="number"
          value={platform.followers}
          onChange={(e) => onUpdate({ followers: e.target.value })}
          min="0"
          placeholder="Enter number of followers"
        />
      </div>
    </div>
  );
};