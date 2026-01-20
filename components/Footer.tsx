
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 text-right">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="space-y-4">
          <span className="text-3xl font-black tracking-tighter text-white">
            سيلفر<span className="text-red-600">كريست</span> <span className="text-sm border border-red-600 px-2 rounded ml-2">الأصلي</span>
          </span>
          <p className="text-slate-400 font-bold max-w-xs">
            الخلاط الأقوى في ليبيا بشهادة آلاف المستخدمين. جودة أصلية ومحرك يدوم طويلاً.
          </p>
        </div>

        <div className="flex gap-8 text-slate-400 font-bold text-sm">
          <a href="#" className="hover:text-red-500 transition">اتصل بنا</a>
          <a href="#" className="hover:text-red-500 transition">سياسة الضمان</a>
          <a href="#" className="hover:text-red-500 transition">شروط التوصيل</a>
        </div>

        <p className="text-slate-500 text-xs font-bold">
          © {new Date().getFullYear()} سيلفر كريست ليبيا - جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
