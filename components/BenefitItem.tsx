
import React from 'react';

interface BenefitItemProps {
  text: string;
  icon: string;
}

export const BenefitItem: React.FC<BenefitItemProps> = ({ text, icon }) => {
  return (
    <div className="flex items-start space-x-4 py-4 border-b border-gray-100 last:border-0">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg shadow-sm border border-orange-200">
        {icon}
      </div>
      <p className="text-gray-800 font-medium text-base md:text-lg leading-relaxed pt-1">
        {text}
      </p>
    </div>
  );
};
