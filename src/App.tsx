import React from 'react';
import { Header } from './components/layout/Header';
import { MainContent } from './components/layout/MainContent';
import { ExportButton } from './components/ExportButton';
import { useFormData } from './hooks/useFormData';

const App: React.FC = () => {
  const { formData, setFormData } = useFormData();

  const handleLogoChange = (logo: string) => {
    setFormData(prev => ({ ...prev, logo }));
  };

  const handleCompanyInfoChange = (companyInfo: typeof formData.companyInfo) => {
    setFormData(prev => ({ ...prev, companyInfo }));
  };

  const handleTrafficSourcesChange = (trafficSources: typeof formData.trafficSources) => {
    setFormData(prev => ({ ...prev, trafficSources }));
  };

  const handleProductsChange = (products: typeof formData.products) => {
    setFormData(prev => ({ ...prev, products }));
  };

  const handleCommunityChange = (community: typeof formData.community) => {
    setFormData(prev => ({ ...prev, community }));
  };

  const handleSocialMediaChange = (socialMedia: typeof formData.socialMedia) => {
    setFormData(prev => ({ ...prev, socialMedia }));
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header 
          logo={formData.logo}
          onLogoChange={handleLogoChange}
        />
        <MainContent
          formData={formData}
          onCompanyInfoChange={handleCompanyInfoChange}
          onTrafficSourcesChange={handleTrafficSourcesChange}
          onProductsChange={handleProductsChange}
          onCommunityChange={handleCommunityChange}
          onSocialMediaChange={handleSocialMediaChange}
        />
        <ExportButton formData={formData} />
      </div>
    </div>
  );
};

export default App;