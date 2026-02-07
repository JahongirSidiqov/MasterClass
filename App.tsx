
import React, { useState } from 'react';
import { CTAButton } from './components/CTAButton';
import { BenefitItem } from './components/BenefitItem';
import { AdminDashboard } from './components/AdminDashboard';
import { APP_TITLE, BENEFITS, TEACHER_IMAGE_PATH } from './constants';

const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [imgError, setImgError] = useState(false);

  const secretTrigger = () => {
    setClicks(c => c + 1);
    if (clicks + 1 > 2) { 
      setIsAdminOpen(true); 
      setClicks(0); 
    }
    // Agar 1 soniya ichida 3 marta bosilmasa, hisoblagichni nolga tushiradi
    setTimeout(() => setClicks(0), 1000);
  };

  return (
    <div className="h-screen w-full bg-slate-100 flex items-center justify-center p-0 md:p-4 overflow-hidden">
      <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
      
      <div className="w-full max-w-md h-full max-h-[800px] bg-white flex flex-col justify-between p-4 shadow-xl">
        <header className="text-center py-1">
          <h1 className="text-xl font-black uppercase tracking-tighter leading-none">{APP_TITLE}</h1>
        </header>

        <div 
          onClick={secretTrigger}
          className="relative aspect-square rounded-xl overflow-hidden bg-slate-200 border-2 border-slate-50 shadow-inner flex items-center justify-center cursor-pointer active:scale-[0.98] transition-transform"
        >
          {!imgError ? (
            <img 
              src={TEACHER_IMAGE_PATH} 
              alt="Teacher" 
              className="w-full h-full object-cover select-none"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center text-slate-400">
              <i className="fa-solid fa-user-graduate text-6xl mb-2"></i>
              <span className="text-[10px] font-bold">RASM YUKLANMADI</span>
            </div>
          )}
          <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-[10px] font-black uppercase shadow-sm">
            <span className="inline-block w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse mr-1"></span> Live
          </div>
        </div>

        <section className="space-y-2 bg-slate-50 p-3 rounded-xl">
          {BENEFITS.map(b => <BenefitItem key={b.id} text={b.text} icon={b.icon} />)}
        </section>

        <footer className="space-y-3 pb-2">
          <CTAButton className="!py-4 shadow-xl" />
          <div className="text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">+2,481 KISHI QO'SHILDI</p>
            <p className="text-[8px] text-slate-300 font-bold uppercase mt-1">© {new Date().getFullYear()} CEFR EXPERT PRO</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
