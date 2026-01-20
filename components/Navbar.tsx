
import React from 'react';

const Navbar: React.FC = () => {
  const orderUrl = "#order-form";

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-2">
              سيلفر<span className="text-red-600">كريست</span> <span className="text-xs bg-slate-900 text-white px-2 py-0.5 rounded">PRO</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-10 space-x-reverse items-center font-bold text-sm">
            <a href="#produit" className="text-slate-500 hover:text-red-600 transition">المنتج</a>
            <a href="#specs" className="text-slate-500 hover:text-red-600 transition">المواصفات</a>
            <a href="#generateur" className="text-slate-500 hover:text-red-600 transition">وصفات بالذكاء الاصطناعي</a>
            <a
              href={orderUrl}
              className="bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 transition shadow-lg shadow-red-200"
            >
              اطلب الآن -75%
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
