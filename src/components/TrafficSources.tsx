import React from 'react';
import { FormData } from '../types';
import { PaidTraffic } from './traffic/PaidTraffic';
import { OrganicTraffic } from './traffic/OrganicTraffic';
import { JointVentures } from './traffic/JointVentures';
import { WebinarVSL } from './traffic/WebinarVSL';

interface TrafficSourcesProps {
  data: FormData['trafficSources'];
  onChange: (data: FormData['trafficSources']) => void;
}

export const TrafficSources: React.FC<TrafficSourcesProps> = ({ data, onChange }) => {
  return (
    <div className="space-y-8">
      <PaidTraffic
        data={data.paid}
        onChange={(paid) => onChange({ ...data, paid })}
      />
      
      <OrganicTraffic
        data={data.organic}
        onChange={(organic) => onChange({ ...data, organic })}
      />
      
      <JointVentures
        data={data.jointVentures}
        onChange={(jointVentures) => onChange({ ...data, jointVentures })}
      />
      
      <WebinarVSL
        data={data.webinar}
        onChange={(webinar) => onChange({ ...data, webinar })}
      />
    </div>
  );
};