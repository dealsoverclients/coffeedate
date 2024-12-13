import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  isOpen = false,
  onToggle,
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    onToggle?.();
  };

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
      <button
        className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-lg"
        onClick={handleToggle}
      >
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      {isExpanded && (
        <div className="px-6 py-4 bg-white dark:bg-gray-900">
          {children}
        </div>
      )}
    </div>
  );
};