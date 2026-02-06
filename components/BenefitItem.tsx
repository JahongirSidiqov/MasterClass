
import React from 'react';

interface BenefitItemProps {
  text: string;
  icon: string;
}

export const BenefitItem: React.FC<BenefitItemProps> = ({ text, icon }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white shadow-sm transform rotate-3">
        <span className="font-black text-xs -rotate-3">{icon}</span>
      </div>
      <p className="text-gray-900 font-bold text-xs md:text-sm leading-snug">
        {text}
      </p>
    </div>
  );
};
