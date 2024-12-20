import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { handleDragEvents } from './utils';
import { LogoUploadProps } from './types';

export const LogoUpload: React.FC<LogoUploadProps> = ({ logo, onLogoChange }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    handleDragEvents(e, setDragActive);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onLogoChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    onLogoChange('');
  };

  return (
    <div className="w-full mb-8">
      {!logo ? (
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors
            ${dragActive 
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
              : 'border-gray-300 dark:border-gray-700'}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center gap-2">
            <Upload className="w-8 h-8 text-gray-400 dark:text-gray-500" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Drag and drop your logo here, or click to select
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Recommended size: 1200x300px
            </p>
          </div>
        </div>
      ) : (
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={logo}
            alt="Company logo"
            className="w-full h-[200px] object-contain bg-white dark:bg-gray-800"
          />
          <button
            onClick={removeLogo}
            className="absolute top-2 right-2 p-2 bg-gray-900/50 hover:bg-gray-900/70 rounded-full text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};