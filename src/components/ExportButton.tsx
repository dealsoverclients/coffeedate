import React from 'react';
import { Download } from 'lucide-react';
import { FormData } from '../types';
import { downloadReport } from '../utils/exportData';

interface ExportButtonProps {
  formData: FormData;
}

export const ExportButton: React.FC<ExportButtonProps> = ({ formData }) => {
  return (
    <button
      onClick={() => downloadReport(formData)}
      className="fixed bottom-8 right-8 flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors"
    >
      <Download className="w-5 h-5" />
      <span>Export Report</span>
    </button>
  );
};