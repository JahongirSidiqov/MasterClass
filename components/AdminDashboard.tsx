
import React, { useState, useEffect } from 'react';
import { getStatsFromBackend } from '../utils/tracker';

export const AdminDashboard: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      getStatsFromBackend().then(data => {
        setStats(data);
        setLoading(false);
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="bg-white w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
        <div className="bg-orange-500 p-6 text-white">
          <h3 className="text-xl font-black flex items-center justify-between">
            <span><i className="fa-solid fa-database mr-2"></i> LIVE DATA</span>
            <button onClick={onClose} className="hover:rotate-90 transition-transform">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </h3>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="flex flex-col items-center py-10">
              <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="font-bold text-slate-400 uppercase text-xs tracking-widest">Bazadan ma'lumot olinmoqda...</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-end justify-between border-b pb-4">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Jami kliklar</p>
                  <p className="text-4xl font-black text-slate-900 leading-none">{stats?.total_clicks || 0}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-[10px] font-black rounded uppercase">Active Now</span>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-3 tracking-widest">Oxirgi 10 ta faollik vaqti:</p>
                <div className="max-h-[200px] overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                  {stats?.last_clicks?.length > 0 ? stats.last_clicks.map((time: string, i: number) => (
                    <div key={i} className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <div className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></span>
                        <span className="text-[10px] font-bold text-slate-600 uppercase">Foydalanuvchi #{stats.total_clicks - i}</span>
                      </div>
                      <span className="text-[9px] font-mono text-slate-400">
                        {new Date(time).toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                      </span>
                    </div>
                  )) : (
                    <p className="text-center text-[10px] text-slate-300 py-4 uppercase font-bold tracking-tighter">Ma'lumotlar mavjud emas</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t flex items-center justify-between">
          <p className="text-[8px] font-black text-slate-300 uppercase">Neon SQL / Netlify Serverless</p>
          <button 
            onClick={onClose} 
            className="text-[10px] font-black bg-slate-900 text-white px-4 py-2 rounded-xl active:scale-95 transition-transform"
          >
            YOPISH
          </button>
        </div>
      </div>
    </div>
  );
};
