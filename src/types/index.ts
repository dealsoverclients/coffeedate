export interface FormData {
  logo: string;
  companyInfo: {
    name: string;
    website: string;
    businessAge: string;
    goals: string;
    priorities: string;
  };
  trafficSources: {
    paid: {
      monthlySpend: string;
      platforms: string[];
    };
    organic: {
      monthlyVisitors: string;
      referringSites: string[];
    };
    jointVentures: {
      activePartners: string;
      totalRevenue: string;
    };
    webinar: {
      viewers: string;
      url: string;
      monthlySales: string;
    };
  };
  products: Array<{
    pricePoint: string;
    monthlyEnrollments: string;
    monthlyGraduates: string;
    totalPastParticipants: string;
    currentParticipants: string;
    monthlySalesCapacity: string;
  }>;
  community: {
    emailGeneralList: string;
    emailBuyersList: string;
    skoolGroupSize: string;
    facebookFreeGroup: string;
    facebookPaidGroup: string;
  };
  socialMedia: {
    tiktok: { url: string; followers: string };
    youtube: { url: string; followers: string };
    facebook: { url: string; followers: string };
    instagram: { url: string; followers: string };
    linkedin: { url: string; followers: string };
    customPlatforms: Array<{
      id: string;
      name: string;
      url: string;
      followers: string;
    }>;
  };
}