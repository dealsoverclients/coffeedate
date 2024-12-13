import { FormData } from '../../../types';

export const createNewPlatform = () => ({
  id: crypto.randomUUID(),
  name: '',
  url: '',
  followers: '',
});

export const updatePlatformData = (
  data: FormData['socialMedia'],
  platform: keyof FormData['socialMedia'],
  field: 'url' | 'followers',
  value: string
) => {
  if (platform === 'customPlatforms') return data;
  
  return {
    ...data,
    [platform]: {
      ...data[platform],
      [field]: value
    }
  };
};

export const updateCustomPlatform = (
  data: FormData['socialMedia'],
  index: number,
  updates: Partial<FormData['socialMedia']['customPlatforms'][0]>
) => {
  const newCustomPlatforms = [...data.customPlatforms];
  newCustomPlatforms[index] = { ...newCustomPlatforms[index], ...updates };
  return { ...data, customPlatforms: newCustomPlatforms };
};

export const addCustomPlatform = (data: FormData['socialMedia']) => ({
  ...data,
  customPlatforms: [...data.customPlatforms, createNewPlatform()],
});

export const removeCustomPlatform = (data: FormData['socialMedia'], id: string) => ({
  ...data,
  customPlatforms: data.customPlatforms.filter(platform => platform.id !== id),
});