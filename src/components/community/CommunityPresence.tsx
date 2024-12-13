import React from 'react';
import { Users } from 'lucide-react';
import { FormData } from '../../types';
import { InputField } from '../ui/InputField';

interface CommunityPresenceProps {
  data: FormData['community'];
  onChange: (data: FormData['community']) => void;
}

export const CommunityPresence: React.FC<CommunityPresenceProps> = ({ data, onChange }) => {
  const handleChange = (name: string, value: string) => {
    onChange({ ...data, [name]: value });
  };

  const fields = [
    {
      name: 'emailGeneralList',
      label: 'Email General List Size',
      placeholder: 'Enter number of subscribers',
    },
    {
      name: 'emailBuyersList',
      label: 'Email Buyers List Size',
      placeholder: 'Enter number of buyers',
    },
    {
      name: 'skoolGroupSize',
      label: 'Skool Group Size',
      placeholder: 'Enter number of members',
    },
    {
      name: 'facebookFreeGroup',
      label: 'Facebook Free Group Size',
      placeholder: 'Enter number of members',
    },
    {
      name: 'facebookPaidGroup',
      label: 'Facebook Paid Group Size',
      placeholder: 'Enter number of members',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Users className="w-6 h-6 text-indigo-500" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Community Presence
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {fields.map(({ name, label, placeholder }) => (
          <InputField
            key={name}
            label={label}
            type="number"
            value={data[name as keyof typeof data]}
            onChange={(e) => handleChange(name, e.target.value)}
            placeholder={placeholder}
            min="0"
          />
        ))}
      </div>
    </div>
  );
};