
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
    <div className="h-screen w-full bg-white flex flex-col items-center overflow-hidden">
      {/* Admin Dashboard */}
      <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      <div className="flex flex-col w-full max-w-md h-full px-5 py-4 justify-between">
        
        {/* Header */}
        <header className="text-center mb-1">
          <h1 
            onClick={handleTitleClick}
            className="text-xl md:text-2xl font-black text-gray-900 uppercase leading-tight select-none cursor-default tracking-tight"
          >
            {APP_TITLE}
          </h1>
        </header>

        {/* Main Content */}
        <main className="flex flex-col flex-grow items-center justify-center space-y-4 overflow-hidden">
          
          {/* Hero Image */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100 flex-shrink-0">
            <img 
              src={TEACHER_IMAGE_URL} 
              alt="CEFR Expert" 
              className="w-full h-full object-cover object-center"
              loading="eager"
              onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://github.com/JahongirSidiqov/MasterClass/blob/main/utils/teacher.png";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Benefits Section */}
          <section className="w-full bg-orange-50/70 rounded-2xl p-4 border border-orange-100/50">
            <div className="space-y-2">
              {BENEFITS.map((benefit) => (
                <BenefitItem 
                  key={benefit.id} 
                  text={benefit.text} 
                  icon={benefit.icon} 
                />
              ))}
            </div>
          </section>

          {/* Action Area */}
          <div className="w-full">
            <CTAButton className="!py-4 !text-base shadow-[0_8px_20px_rgba(249,115,22,0.4)]" />
            <div className="flex justify-center items-center mt-2 space-x-2">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                Hozir darsga qo'shilishmoqda
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-1 text-center">
          <p className="text-[9px] text-gray-300 font-medium">
            &copy; {new Date().getFullYear()} CEFR MASTERCLASS PRO
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
