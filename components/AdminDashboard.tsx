
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-2xl relative">
        <h3 className="text-xl font-black mb-4 flex items-center">
          <i className="fa-solid fa-chart-line text-orange-500 mr-2"></i> STATISTIKA
        </h3>

        {loading ? <p className="text-center py-4 font-bold animate-pulse">Yuklanmoqda...</p> : (
          <div className="space-y-3">
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
              <p className="text-[10px] font-bold text-orange-600 uppercase">Jami kliklar</p>
              <p className="text-3xl font-black text-orange-700">{stats?.total_clicks || 0}</p>
            </div>
            <p className="text-[10px] text-gray-400 font-bold uppercase">
              Oxirgi faollik: {stats?.last_click ? new Date(stats.last_click).toLocaleTimeString() : '---'}
            </p>
          </div>
        )}

        <div className="mt-6 flex gap-2">
          <div className="flex-1 text-[8px] font-bold text-gray-400 uppercase bg-gray-50 p-2 rounded">Stack: Python / Neon SQL</div>
          <button onClick={onClose} className="px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-lg uppercase">Yopish</button>
        </div>
      </div>
    </div>
  );
};
