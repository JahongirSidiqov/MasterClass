
import React from 'react';
import { TELEGRAM_CHANNEL_URL } from '../constants';
import { trackCTAClick } from '../utils/tracker';

interface CTAButtonProps {
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ className = "" }) => {
  const handleClick = () => {
    trackCTAClick();
  };

  return (
    <a
      href={TELEGRAM_CHANNEL_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`
        block w-full max-w-xs mx-auto 
        bg-orange-500 hover:bg-orange-600 
        text-white font-black text-sm
        py-4 px-4 rounded-xl
        shadow-lg shadow-orange-500/30
        transition-all duration-300 transform active:scale-95
        text-center animate-pulse-soft
        ${className}
      `}
    >
      BEPUL QO'SHILISH
    </a>
  );
};
