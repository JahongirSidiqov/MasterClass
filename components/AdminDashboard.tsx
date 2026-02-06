
import React from 'react';
import { getStats } from '../utils/tracker';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const stats = getStats();

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
          <i className="fa-solid fa-chart-line text-orange-500 mr-3"></i>
          STATISTIKA (ADMIN)
        </h3>

        <div className="grid grid-cols-1 gap-4 mb-8">
          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
            <p className="text-sm text-orange-600 font-bold uppercase mb-1">Jami bosilganlar (Local)</p>
            <p className="text-4xl font-black text-orange-700">{stats.totalClicks}</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <p className="text-sm text-blue-600 font-bold uppercase mb-1">Oxirgi faollik</p>
            <p className="text-gray-700 font-medium">
              {stats.lastClick ? new Date(stats.lastClick).toLocaleString() : 'Ma\'lumot yo\'q'}
            </p>
          </div>
        </div>

        <div className="text-sm text-gray-500 space-y-3 bg-gray-50 p-4 rounded-xl">
          <p className="font-semibold text-gray-700 underline">Professional tavsiya:</p>
          <p>1. <b>Meta Pixel</b> orqali Instagram reklamalaringizdan necha kishi o'tganini aniq ko'ra olasiz.</p>
          <p>2. Global hisoblash uchun <b>Supabase</b> yoki <b>Firebase</b> kabi bazalarni ulash lozim.</p>
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
