import { useMemo } from 'react';

export const useSocialPlatforms = () => {
  const platforms = useMemo(() => ({
    tiktok: { label: 'TikTok' },
    youtube: { label: 'YouTube' },
    facebook: { label: 'Facebook' },
    instagram: { label: 'Instagram' },
    linkedin: { label: 'LinkedIn' }
  }), []);

  return { platforms };
};