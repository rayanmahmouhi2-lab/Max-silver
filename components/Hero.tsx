
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const productImg = "https://cdn.youcan.shop/stores/4a5bda615cca87b3bfe7a7acdf62dc05/others/cXjq9DK1SDkpXPfngdnw9iMP0SM9EkhMhMsdZr1r.jpg";
  const secondaryImg = "https://cdn.youcan.shop/stores/4a5bda615cca87b3bfe7a7acdf62dc05/others/GdbpO7vJCQGkFSI3jrHfgaCQfOl9dWU74MblLoTU.jpg";
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitted(true);
      // In a real app, send this to a backend/Google Sheet
    } else {
      alert("يرجى ملء البيانات المطلوبة");
    }
  };

  const scrollToOrder = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="produit" className="pt-28 lg:pt-44 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white text-right">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Urgent Offer Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-full text-sm font-black shadow-xl shadow-red-200 animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
            عروض حصرية لسكان ليبيا فقط - تخفيضات نهاية العام
          </div>
        </div>
        
        {/* Main Headline */}
        <div className="space-y-8 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-red-600/10 blur-2xl rounded-full"></div>
            <h1 className="relative text-5xl md:text-7xl font-black text-slate-900 leading-tight">
              خلاط <span className="text-red-600">سيلفر كرست</span> <br/> 
              <span className="text-[#006666]">القوة الألمانية</span> في مطبخك
            </h1>
          </div>

          {/* Product Image - Leads to Form */}
          <div className="relative max-w-3xl mx-auto px-4 group">
            <div 
              onClick={scrollToOrder}
              className="block relative z-10 cursor-pointer"
            >
              <div className="absolute -inset-2 bg-slate-200 rounded-[50px] blur-xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <img 
                src={productImg} 
                alt="Silver Crest Blender Pro" 
                className="w-full h-auto rounded-[40px] shadow-2xl border-8 border-white transform transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
            {/* Visual proof: 4500W Badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 z-20 bg-yellow-400 text-slate-900 p-6 rounded-full shadow-2xl transform rotate-12 flex flex-col items-center justify-center font-black">
              <span className="text-4xl">4500</span>
              <span className="text-xl">WATT</span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-slate-600 leading-relaxed">
              الجهاز الجبار الذي يغنيك عن 5 أجهزة أخرى. طحن، خلط، وكسر الثلج بقوة المحرك الأصلي.
            </h2>
          </div>

          {/* Pricing & Order Form */}
          <div id="order-form" className="relative max-w-2xl mx-auto pt-4 scroll-mt-32">
            <div className="absolute inset-0 bg-yellow-400 blur-[80px] opacity-20"></div>
            <div className="relative bg-white border-2 border-yellow-400 p-8 md:p-10 rounded-[50px] shadow-2xl overflow-hidden text-right">
              <div className="absolute top-0 right-0 bg-yellow-400 text-slate-900 px-8 py-2 font-black text-sm rounded-bl-[30px]">
                توصيل مجاني لجميع المدن
              </div>
              
              <div className="flex flex-col items-center gap-6">
                {!isSubmitted ? (
                  <>
                    <div className="flex items-baseline gap-4">
                      <span className="text-slate-400 line-through text-2xl font-bold">800 د.ل</span>
                      <span className="text-red-600 text-7xl font-black tracking-tighter">299 <span className="text-3xl">د.ل</span></span>
                    </div>
                    
                    <div className="bg-red-600/10 text-red-600 px-6 py-2 rounded-full font-black text-sm">
                      تم بيع 483 قطعة هذا الأسبوع
                    </div>

                    <form onSubmit={handleSubmit} className="w-full space-y-4 mt-2">
                      <div className="space-y-2">
                        <label className="block font-black text-slate-700 mr-2">الإسم بالكامل</label>
                        <input 
                          type="text" 
                          required
                          placeholder="مثال: محمد علي"
                          className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-red-600 focus:outline-none font-bold text-right transition-all"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-black text-slate-700 mr-2">رقم الهاتف (يفضل واتساب)</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="09XXXXXXXX"
                          className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-red-600 focus:outline-none font-bold text-right transition-all"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-black text-slate-700 mr-2">المدينة / العنوان</label>
                        <input 
                          type="text" 
                          placeholder="مثال: طرابلس - حي الأندلس"
                          className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-red-600 focus:outline-none font-bold text-right transition-all"
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                        />
                      </div>
                      
                      <button 
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-6 md:py-8 rounded-[30px] text-2xl md:text-3xl font-black shadow-[0_20px_40px_-10px_rgba(220,38,38,0.5)] transition-all flex items-center justify-center gap-4 group mt-4 transform active:scale-95"
                      >
                        <span>تأكيد الطلب الآن</span>
                        <svg className="w-8 h-8 md:w-10 md:h-10 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="py-12 space-y-6 animate-in zoom-in duration-500 text-center">
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto">✓</div>
                    <h3 className="text-3xl font-black text-slate-900">شكراً لك، تم استلام طلبك!</h3>
                    <p className="text-slate-600 font-bold text-lg">سيتصل بك موظف خدمة العملاء قريباً لتأكيد الشحن إلى {formData.city}.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-red-600 font-black underline"
                    >
                      تعديل البيانات أو طلب قطعة أخرى
                    </button>
                  </div>
                )}
                <p className="text-slate-500 font-bold text-sm">الدفع عند الاستلام بعد المعاينة والتجربة</p>
              </div>
            </div>
          </div>

          {/* Secondary Detail Image */}
          <div className="relative max-w-2xl mx-auto pt-8 px-4">
             <div 
               onClick={scrollToOrder}
               className="cursor-pointer"
             >
               <img 
                 src={secondaryImg} 
                 alt="Silver Crest Details" 
                 className="w-full h-auto rounded-[30px] shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
               />
             </div>
          </div>

          {/* Final Call to Action Box */}
          <div className="pt-10">
            <div className="bg-red-600 text-white p-10 md:p-16 rounded-[50px] shadow-2xl relative overflow-hidden text-center">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              <div className="relative z-10 space-y-8">
                <h2 className="text-3xl md:text-5xl font-black leading-tight">
                  هل أنت مستعد لتجربة <br/> قوة سيلفر كريست؟
                </h2>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 inline-block">
                  <p className="text-lg font-bold mb-2">سعر التصفية الحالي:</p>
                  <div className="text-5xl font-black">299 دينار ليبي</div>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={scrollToOrder}
                    className="inline-block bg-white text-red-600 px-12 py-5 rounded-2xl text-2xl font-black hover:bg-slate-50 transition-all shadow-xl transform hover:scale-105"
                  >
                    اطلب الآن بخصم 75%
                  </button>
                </div>
                <p className="text-white/80 font-bold animate-pulse text-sm">
                   ⚡ متبقي قطع محدودة جداً في المخازن بهذا السعر
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Specs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
          {[
            {icon: "🏺", label: "2 لتر", desc: "سعة تحضير ضخمة", color: "red-500"},
            {icon: "⚡", label: "4500W", desc: "أقوى محرك في فئته", color: "blue-500"},
            {icon: "⚙️", label: "15 سرعة", desc: "تحكم دقيق كلي", color: "yellow-500"}
          ].map((item, i) => (
            <div 
              key={i}
              onClick={scrollToOrder}
              className="bg-white p-6 rounded-[30px] shadow-xl border border-slate-100 transform hover:-translate-y-2 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 bg-slate-50 text-2xl rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-50 group-hover:scale-110 transition-all">{item.icon}</div>
              <div className="text-slate-900 font-black text-xl">{item.label}</div>
              <div className="text-slate-400 text-sm font-bold">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
