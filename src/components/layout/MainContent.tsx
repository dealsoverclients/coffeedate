import React from 'react';
import { Accordion } from '../Accordion';
import { CompanyInfo } from '../CompanyInfo';
import { TrafficSources } from '../TrafficSources';
import { ProductsInfo } from '../products/ProductsInfo';
import { CommunityPresence } from '../community/CommunityPresence';
import { SocialMediaPresence } from '../social/SocialMediaPresence';
import { FormData } from '../../types';

interface MainContentProps {
  formData: FormData;
  onCompanyInfoChange: (data: FormData['companyInfo']) => void;
  onTrafficSourcesChange: (data: FormData['trafficSources']) => void;
  onProductsChange: (data: FormData['products']) => void;
  onCommunityChange: (data: FormData['community']) => void;
  onSocialMediaChange: (data: FormData['socialMedia']) => void;
}

export const MainContent: React.FC<MainContentProps> = ({
  formData,
  onCompanyInfoChange,
  onTrafficSourcesChange,
  onProductsChange,
  onCommunityChange,
  onSocialMediaChange,
}) => {
  return (
    <div className="space-y-6">
      <Accordion title="Company Information" isOpen={true}>
        <CompanyInfo
          data={formData.companyInfo}
          onChange={onCompanyInfoChange}
        />
      </Accordion>
      
      <Accordion title="Traffic Sources">
        <TrafficSources
          data={formData.trafficSources}
          onChange={onTrafficSourcesChange}
        />
      </Accordion>

      <Accordion title="Products Information">
        <ProductsInfo
          data={formData.products}
          onChange={onProductsChange}
        />
      </Accordion>

      <Accordion title="Community Presence">
        <CommunityPresence
          data={formData.community}
          onChange={onCommunityChange}
        />
      </Accordion>

      <Accordion title="Social Media Presence">
        <SocialMediaPresence
          data={formData.socialMedia}
          onChange={onSocialMediaChange}
        />
      </Accordion>
    </div>
  );
};