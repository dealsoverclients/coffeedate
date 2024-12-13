import React from 'react';
import { Share2, Plus } from 'lucide-react';
import { FormData } from '../../types';
import { SocialPlatform } from './SocialPlatform';
import { CustomSocialPlatform } from './CustomSocialPlatform';
import { useSocialPlatforms } from './hooks/useSocialPlatforms';
import {
  updatePlatformData,
  updateCustomPlatform,
  addCustomPlatform,
  removeCustomPlatform,
} from './utils/platformHelpers';

interface SocialMediaPresenceProps {
  data: FormData['socialMedia'];
  onChange: (data: FormData['socialMedia']) => void;
}

export const SocialMediaPresence: React.FC<SocialMediaPresenceProps> = ({ data, onChange }) => {
  const { platforms } = useSocialPlatforms();

  const handlePlatformChange = (platform: keyof typeof data, field: 'url' | 'followers', value: string) => {
    onChange(updatePlatformData(data, platform, field, value));
  };

  const handleCustomPlatformChange = (index: number, updates: Partial<FormData['socialMedia']['customPlatforms'][0]>) => {
    onChange(updateCustomPlatform(data, index, updates));
  };

  const handleAddCustomPlatform = () => {
    onChange(addCustomPlatform(data));
  };

  const handleRemoveCustomPlatform = (id: string) => {
    onChange(removeCustomPlatform(data, id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Share2 className="w-6 h-6 text-blue-500" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Social Media Presence
        </h3>
      </div>

      <div className="space-y-8">
        {/* Main social platforms */}
        {Object.entries(platforms).map(([key, { label }]) => (
          <SocialPlatform
            key={key}
            platform={key as keyof typeof data}
            label={label}
            data={data[key as keyof typeof data] as { url: string; followers: string }}
            onChange={(field, value) => handlePlatformChange(key as keyof typeof data, field, value)}
          />
        ))}

        {/* Custom platforms */}
        {data.customPlatforms?.map((platform, index) => (
          <CustomSocialPlatform
            key={platform.id}
            platform={platform}
            onUpdate={(updates) => handleCustomPlatformChange(index, updates)}
            onRemove={() => handleRemoveCustomPlatform(platform.id)}
          />
        ))}

        {/* Add custom platform button */}
        <button
          onClick={handleAddCustomPlatform}
          className="w-full py-4 flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg border-2 border-dashed border-blue-200 dark:border-blue-800 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">Add Another Social Platform</span>
        </button>
      </div>
    </div>
  );
};