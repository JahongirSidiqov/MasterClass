
import React, { useState } from 'react';
import { CTAButton } from './components/CTAButton';
import { BenefitItem } from './components/BenefitItem';
import { AdminDashboard } from './components/AdminDashboard';
import { APP_TITLE, BENEFITS, TEACHER_IMAGE_PATH } from './constants';

const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [imgStatus, setImgStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  const handleTitleClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount + 1 >= 3) {
      setIsAdminOpen(true);
      setClickCount(0);
    }
    setTimeout(() => setClickCount(0), 2000);
  };

  return (
    <div className="min-h-screen w-full bg-slate-100 flex flex-col items-center justify-start overflow-hidden">
      <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      <div className="flex flex-col w-full max-w-md h-screen max-h-[850px] px-4 py-3 justify-between bg-white shadow-2xl">
        
        {/* Header - Super Compact */}
        <header className="text-center">
          <h1 
            onClick={handleTitleClick}
            className="text-lg md:text-xl font-black text-gray-900 uppercase leading-tight tracking-tighter select-none"
          >
            {APP_TITLE}
          </h1>
        </header>

        {/* Hero Image - 1:1 Aspect Ratio */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md border-2 border-slate-50 flex-shrink-0 my-1">
          {imgStatus !== 'error' ? (
            <img 
              src={TEACHER_IMAGE_PATH} 
              alt="Teacher" 
              className={`w-full h-full object-cover transition-opacity duration-300 ${imgStatus === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
              onError={() => setImgStatus('error')}
              onLoad={() => setImgStatus('loaded')}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-orange-500 text-white">
               <i className="fa-solid fa-user-tie text-4xl opacity-50"></i>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1 shadow-sm">
            <span className="flex h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse"></span>
            <span className="text-[9px] font-black text-gray-800 uppercase tracking-tighter">Live Masterclass</span>
          </div>
        </div>

        {/* Benefits - Vertical List */}
        <section className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-1.5">
          {BENEFITS.map((benefit) => (
            <BenefitItem 
              key={benefit.id} 
              text={benefit.text} 
              icon={benefit.icon} 
            />
          ))}
        </section>

        {/* CTA & Trust - Tightened spacing */}
        <div className="space-y-2">
          <CTAButton className="!py-3.5 !text-base shadow-orange-500/40" />
          
          <div className="flex flex-col items-center">
             <div className="flex items-center space-x-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <p className="text-slate-500 text-[9px] font-bold uppercase tracking-tight">
                  +2,481 kishi bugun ro'yxatdan o'tdi
                </p>
             </div>
             <p className="text-[7px] text-slate-300 uppercase font-bold">
               &copy; {new Date().getFullYear()} CEFR Expert PRO • SQL Backed
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
