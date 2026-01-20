
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecipeGenerator from './components/RecipeGenerator';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  const whatsappUrl = "https://wa.me/212638143786";

  useEffect(() => {
    const handleGlobalImageClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // If clicked element is an image or inside a link containing an image
      const closestLink = target.closest('a');
      const hasImg = target.tagName === 'IMG' || closestLink?.querySelector('img');
      
      if (hasImg) {
        // If it's a real external link (like WhatsApp) or a header link, let it be.
        const href = closestLink?.getAttribute('href');
        if (href && (href.startsWith('http') || href.startsWith('#'))) {
          return;
        }

        // Otherwise, for any presentation image, scroll to order
        e.preventDefault();
        const orderForm = document.getElementById('order-form');
        if (orderForm) {
          orderForm.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleGlobalImageClick, true);

    const style = document.createElement('style');
    style.innerHTML = `
      img, .cursor-pointer { 
        cursor: pointer !important; 
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important; 
      } 
      img:hover { 
        transform: scale(1.02) !important; 
        filter: brightness(1.05);
      }
      /* Prevent unwanted popups from third-party iframes if any */
      iframe { pointer-events: none; display: none !important; }
      
      /* RTL Layout specific helpers */
      .rtl-flip { transform: scaleX(-1); }
      
      @keyframes slow-bounce {
        0%, 100% { transform: translateY(-5%); }
        50% { transform: translateY(0); }
      }
      .animate-slow-bounce {
        animation: slow-bounce 3s infinite ease-in-out;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('click', handleGlobalImageClick, true);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-red-200 overflow-x-hidden bg-white text-right">
      <Navbar />
      <main>
        <Hero />
        
        {/* Trust bar / Trust Signals */}
        <div className="bg-slate-900 py-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-red-600/5 -skew-y-3 transform origin-left"></div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <div className="group">
              <div className="text-red-500 text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">🚚</div>
              <div className="text-white text-sm font-black">توصيل لكل مدن ليبيا</div>
              <div className="text-slate-500 text-[10px] mt-1">خلال 24-48 ساعة</div>
            </div>
            <div className="group">
              <div className="text-red-500 text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">💵</div>
              <div className="text-white text-sm font-black">الدفع عند الاستلام</div>
              <div className="text-slate-500 text-[10px] mt-1">بعد المعاينة والتجربة</div>
            </div>
            <div className="group">
              <div className="text-red-500 text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">🛡️</div>
              <div className="text-white text-sm font-black">ضمان سنة كاملة</div>
              <div className="text-slate-500 text-[10px] mt-1">على عيوب التصنيع والمحرك</div>
            </div>
            <div className="group">
              <div className="text-red-500 text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">🔄</div>
              <div className="text-white text-sm font-black">حق الاسترجاع</div>
              <div className="text-slate-500 text-[10px] mt-1">خلال 7 أيام من الاستلام</div>
            </div>
          </div>
        </div>

        <Features />
        
        <RecipeGenerator />
      </main>
      
      {/* WhatsApp floating button with better styling */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-[100] bg-green-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform animate-bounce flex items-center justify-center border-2 border-white"
        aria-label="Contact us on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      
      <Footer />
    </div>
  );
};

export default App;
