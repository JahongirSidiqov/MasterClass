
import React from 'react';
import { CTAButton } from './components/CTAButton';
import { BenefitItem } from './components/BenefitItem';
import { APP_TITLE, BENEFITS, TEACHER_IMAGE_URL } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full max-w-2xl px-6 pt-10 pb-6 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight leading-none mb-4">
          {APP_TITLE}
        </h1>
      </header>

      {/* Hero Image Section */}
      <main className="w-full max-w-2xl px-4 flex flex-col items-center">
        <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl mb-8 bg-white border-4 border-white">
          <img 
            src={TEACHER_IMAGE_URL} 
            alt="English Teacher" 
            className="w-full h-full object-cover object-top"
            loading="eager"
            onError={(e) => {
               // Fallback if the raw URL isn't accessible immediately
               (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>

        {/* First CTA */}
        <div className="w-full mb-12">
          <CTAButton />
        </div>

        {/* Content Details */}
        <section className="w-full bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100 mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 uppercase border-l-4 border-orange-500 pl-4">
            BEPUL DARSDA SIZ:
          </h2>
          
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

        {/* Second CTA */}
        <div className="w-full pb-16">
          <CTAButton />
          <p className="text-center text-gray-500 mt-6 text-sm font-medium">
            <i className="fa-solid fa-bolt text-orange-500 mr-2"></i>
            Hozirroq qo'shiling, darslar tez orada boshlanadi!
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-100 border-t border-gray-200 mt-auto">
        <div className="text-center text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} CEFR Masterclass. Barcha huquqlar himoyalangan.
        </div>
      </footer>
    </div>
  );
};

export default App;
