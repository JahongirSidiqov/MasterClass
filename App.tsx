
import React, { useState } from 'react';
import { CTAButton } from './components/CTAButton';
import { BenefitItem } from './components/BenefitItem';
import { AdminDashboard } from './components/AdminDashboard';
import { APP_TITLE, BENEFITS, TEACHER_IMAGE_URL } from './constants';

const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleTitleClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount + 1 >= 3) {
      setIsAdminOpen(true);
      setClickCount(0);
    }
    setTimeout(() => setClickCount(0), 2000);
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center overflow-x-hidden">
      {/* Admin Dashboard */}
      <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      <div className="flex flex-col w-full max-w-md min-h-screen px-5 py-6 justify-between">
        
        {/* Header */}
        <header className="text-center mb-4">
          <h1 
            onClick={handleTitleClick}
            className="text-xl md:text-2xl font-black text-gray-900 uppercase leading-tight select-none cursor-default tracking-tight"
          >
            {APP_TITLE}
          </h1>
        </header>

        {/* Main Content */}
        <main className="flex flex-col flex-grow items-center justify-center space-y-6">
          
          {/* Hero Image Container */}
          <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white flex-shrink-0 bg-gray-100 ring-1 ring-gray-100">
            <img 
              src={TEACHER_IMAGE_URL} 
              alt="Teacher" 
              className="w-full h-full object-cover object-top transition-all duration-700"
              onLoad={(e) => (e.currentTarget.style.opacity = "1")}
              style={{ opacity: 0 }}
              onError={(e) => {
                const target = e.currentTarget;
                // Agar GitHub RAW link ham ishlamasa, mahalliy faylni tekshiradi
                const fallbackUrl = "/teacher.png";
                if (target.src !== fallbackUrl) {
                  target.src = fallbackUrl;
                } else {
                  // Hech narsa ishlamasa, rangli placeholder
                  target.style.display = 'none';
                  target.parentElement!.classList.add('bg-orange-500');
                }
              }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            
            {/* Live Indicator Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-2.5 rounded-2xl flex items-center justify-between shadow-lg border border-white/50">
               <div className="flex items-center space-x-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-ping"></span>
                  <span className="text-[11px] font-black text-gray-800 uppercase tracking-tight">Live Masterclass</span>
               </div>
               <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">BEPUL</span>
            </div>
          </div>

          {/* Benefits Section */}
          <section className="w-full bg-orange-50/40 rounded-[2rem] p-5 border border-orange-100/60">
            <div className="space-y-3.5">
              {BENEFITS.map((benefit) => (
                <BenefitItem 
                  key={benefit.id} 
                  text={benefit.text} 
                  icon={benefit.icon} 
                />
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="w-full pt-2">
            <CTAButton className="!py-5 !text-lg !rounded-2xl shadow-[0_12px_30px_rgba(249,115,22,0.45)] hover:shadow-orange-500/60 transition-all active:translate-y-1" />
            <div className="flex items-center justify-center space-x-2 mt-4 opacity-60">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className={`w-6 h-6 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[8px] font-bold`}>
                      <i className="fa-solid fa-user"></i>
                    </div>
                  ))}
               </div>
               <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                 +2,400 o'quvchi qo'shildi
               </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="pt-6 pb-2 text-center">
          <p className="text-[9px] text-gray-400 font-bold tracking-widest uppercase">
            &copy; {new Date().getFullYear()} CEFR Expert Online
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
