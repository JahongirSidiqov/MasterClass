
import React from 'react';
import { TELEGRAM_CHANNEL_URL } from '../constants';

interface CTAButtonProps {
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ className = "" }) => {
  return (
    <a
      href={TELEGRAM_CHANNEL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        block w-full max-w-md mx-auto 
        bg-orange-500 hover:bg-orange-600 
        text-white font-extrabold text-lg md:text-xl
        py-5 px-6 rounded-2xl 
        shadow-[0_10px_25px_rgba(249,115,22,0.4)]
        transition-all duration-300 transform active:scale-95
        text-center animate-pulse-soft
        ${className}
      `}
    >
      &gt;&gt;&gt; BEPUL QATNASHISH &lt;&lt;&lt;
    </a>
  );
};
