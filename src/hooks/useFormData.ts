import { useState, useEffect } from 'react';
import { FormData } from '../types';

const initialFormData: FormData = {
  companyInfo: {
    name: '',
    website: '',
    businessAge: '',
    goals: '',
    priorities: '',
  },
  trafficSources: {
    paid: {
      monthlySpend: '',
      platforms: [],
    },
    organic: {
      monthlyVisitors: '',
      referringSites: [],
    },
    jointVentures: {
      activePartners: '',
      totalRevenue: '',
    },
    webinar: {
      viewers: '',
      url: '',
      monthlySales: '',
    },
  },
  products: [{
    pricePoint: '997',
    monthlyEnrollments: '50',
    monthlyGraduates: '45',
    totalPastParticipants: '500',
    currentParticipants: '150',
    monthlySalesCapacity: '100',
  }],
  community: {
    emailGeneralList: '',
    emailBuyersList: '',
    skoolGroupSize: '',
    facebookFreeGroup: '',
    facebookPaidGroup: '',
  },
  socialMedia: {
    tiktok: { url: '', followers: '' },
    youtube: { url: '', followers: '' },
    facebook: { url: '', followers: '' },
    instagram: { url: '', followers: '' },
    linkedin: { url: '', followers: '' },
    customPlatforms: [] // Initialize empty array for custom platforms
  },
};

export const useFormData = () => {
  const [formData, setFormData] = useState<FormData>(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // Ensure customPlatforms exists in loaded data
      if (!parsedData.socialMedia.customPlatforms) {
        parsedData.socialMedia.customPlatforms = [];
      }
      return parsedData;
    }
    return initialFormData;
  });

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return { formData, setFormData };
};