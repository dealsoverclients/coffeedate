import { FormData } from '../types';

const formatCurrency = (value: string) => 
  value ? `$${Number(value).toLocaleString()}` : 'Not specified';

const formatNumber = (value: string) =>
  value ? Number(value).toLocaleString() : 'Not specified';

export const generateReport = (data: FormData): string => {
  const report = [
    'COFFEE DATE QUALIFIER REPORT',
    `Generated: ${new Date().toLocaleString()}`,
    '\n',
    'COMPANY INFORMATION',
    `Logo: ${data.logo ? 'Uploaded' : 'Not uploaded'}`,
    `Company Name: ${data.companyInfo.name || 'Not specified'}`,
    `Website: ${data.companyInfo.website || 'Not specified'}`,
    `Business Age: ${data.companyInfo.businessAge} years`,
    `Goals: ${data.companyInfo.goals || 'Not specified'}`,
    `Priorities: ${data.companyInfo.priorities || 'Not specified'}`,
    '\n',
    'TRAFFIC SOURCES',
    'Paid Traffic:',
    `Monthly Spend: ${formatCurrency(data.trafficSources.paid.monthlySpend)}`,
    `Platforms: ${data.trafficSources.paid.platforms.join(', ') || 'None specified'}`,
    '\nOrganic Traffic:',
    `Monthly Visitors: ${formatNumber(data.trafficSources.organic.monthlyVisitors)}`,
    `Referring Sites: ${data.trafficSources.organic.referringSites.join(', ') || 'None specified'}`,
    '\nJoint Ventures:',
    `Active Partners: ${formatNumber(data.trafficSources.jointVentures.activePartners)}`,
    `Total Revenue: ${formatCurrency(data.trafficSources.jointVentures.totalRevenue)}`,
    '\nWebinar/VSL:',
    `Viewers: ${formatNumber(data.trafficSources.webinar.viewers)}`,
    `URL: ${data.trafficSources.webinar.url || 'Not specified'}`,
    `Monthly Sales: ${formatCurrency(data.trafficSources.webinar.monthlySales)}`,
    '\n',
    'PRODUCTS INFORMATION',
    ...data.products.map((product, index) => [
      `\nProduct ${index + 1}:`,
      `Price Point: ${formatCurrency(product.pricePoint)}`,
      `Monthly Enrollments: ${formatNumber(product.monthlyEnrollments)}`,
      `Monthly Graduates: ${formatNumber(product.monthlyGraduates)}`,
      `Total Past Participants: ${formatNumber(product.totalPastParticipants)}`,
      `Current Participants: ${formatNumber(product.currentParticipants)}`,
      `Monthly Sales Capacity: ${formatNumber(product.monthlySalesCapacity)}`
    ].flat()),
    '\n',
    'COMMUNITY PRESENCE',
    `Email General List Size: ${formatNumber(data.community.emailGeneralList)}`,
    `Email Buyers List Size: ${formatNumber(data.community.emailBuyersList)}`,
    `Skool Group Size: ${formatNumber(data.community.skoolGroupSize)}`,
    `Facebook Free Group Size: ${formatNumber(data.community.facebookFreeGroup)}`,
    `Facebook Paid Group Size: ${formatNumber(data.community.facebookPaidGroup)}`,
    '\n',
    'SOCIAL MEDIA PRESENCE',
    `TikTok:`,
    `  URL: ${data.socialMedia.tiktok.url || 'Not specified'}`,
    `  Followers: ${formatNumber(data.socialMedia.tiktok.followers)}`,
    `\nYouTube:`,
    `  URL: ${data.socialMedia.youtube.url || 'Not specified'}`,
    `  Followers: ${formatNumber(data.socialMedia.youtube.followers)}`,
    `\nFacebook:`,
    `  URL: ${data.socialMedia.facebook.url || 'Not specified'}`,
    `  Followers: ${formatNumber(data.socialMedia.facebook.followers)}`,
    `\nInstagram:`,
    `  URL: ${data.socialMedia.instagram.url || 'Not specified'}`,
    `  Followers: ${formatNumber(data.socialMedia.instagram.followers)}`,
    `\nLinkedIn:`,
    `  URL: ${data.socialMedia.linkedin.url || 'Not specified'}`,
    `  Followers: ${formatNumber(data.socialMedia.linkedin.followers)}`,
  ];

  // Add custom platforms if any exist
  if (data.socialMedia.customPlatforms.length > 0) {
    report.push('\nCustom Platforms:');
    data.socialMedia.customPlatforms.forEach(platform => {
      report.push(
        `\n${platform.name}:`,
        `  URL: ${platform.url || 'Not specified'}`,
        `  Followers: ${formatNumber(platform.followers)}`
      );
    });
  }

  return report.join('\n');
};

export const downloadReport = (data: FormData) => {
  const report = generateReport(data);
  const blob = new Blob([report], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `coffee-date-qualifier-report-${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};