
import React from 'react';

interface BenefitItemProps {
  text: string;
  icon: string;
}

export const BenefitItem: React.FC<BenefitItemProps> = ({ text, icon }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex-shrink-0 w-5 h-5 rounded bg-orange-500 flex items-center justify-center text-white">
        <span className="font-black text-[9px]">{icon}</span>
      </div>
      <p className="text-gray-800 font-bold text-[10px] md:text-[11px] leading-none">
        {text}
      </p>
    </div>
  );
};
