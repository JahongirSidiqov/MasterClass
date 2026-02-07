
import React, { useState, useEffect } from 'react';
import { getStatsFromBackend } from '../utils/tracker';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DBStats {
  total_clicks: number;
  last_click: string | null;
  today_clicks: number;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  const [dbStats, setDbStats] = useState<DBStats | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      getStatsFromBackend().then(data => {
        if (data) setDbStats(data);
        setLoading(false);
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <i className="fa-solid fa-xmark text-2xl"></i>
        </button>

        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
          <i className="fa-solid fa-database text-orange-500 mr-3"></i>
          SQL DATABASE STATS
        </h3>

        {loading ? (
          <div className="py-10 text-center text-gray-400">
            <i className="fa-solid fa-circle-notch animate-spin text-3xl mb-2"></i>
            <p className="text-xs font-bold uppercase">Yuklanmoqda...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
              <p className="text-sm text-orange-600 font-bold uppercase mb-1">Jami kliklar (SQL)</p>
              <p className="text-4xl font-black text-orange-700">{dbStats?.total_clicks || 0}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
                  <p className="text-[10px] text-green-600 font-bold uppercase">Bugungi kliklar</p>
                  <p className="text-xl font-black text-green-700">{dbStats?.today_clicks || 0}</p>
               </div>
               <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                  <p className="text-[10px] text-blue-600 font-bold uppercase">Backend status</p>
                  <p className="text-sm font-black text-blue-700 uppercase">Online</p>
               </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Oxirgi klik vaqti</p>
              <p className="text-xs font-bold text-gray-700">
                {dbStats?.last_click ? new Date(dbStats.last_click).toLocaleString('uz-UZ') : 'Hali klik yo\'q'}
              </p>
            </div>
          </div>
        )}

        <div className="text-[10px] text-gray-400 space-y-2 bg-gray-50 p-4 rounded-xl border border-dashed border-gray-200">
          <p className="font-bold text-gray-500">BACKEND TEXNOLOGIYASI:</p>
          <div className="flex space-x-4">
             <span className="flex items-center"><i className="fa-brands fa-python mr-1"></i> Python</span>
             <span className="flex items-center"><i className="fa-solid fa-server mr-1"></i> Django</span>
             <span className="flex items-center"><i className="fa-solid fa-database mr-1"></i> SQLite/PostgreSQL</span>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="w-full mt-6 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-colors"
        >
          Yopish
        </button>
      </div>
    </div>
  );
};
