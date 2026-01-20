
import React from 'react';

const Features: React.FC = () => {
  return (
    <div className="space-y-0" id="specs">
      <section className="py-24 px-4 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <div className="inline-block bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-black text-sm shadow-sm">
               تكنولوجيا التحكم الذكي
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              15 سرعة مختلفة <br/> و دوران يصل لـ <span className="text-red-600 italic">32 ألف دورة</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-right">
            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-slate-100 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#006666] flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-[#006666]/20">2L</div>
              <h3 className="text-2xl font-black text-slate-900">سعة ضخمة للاستخدام الشاق</h3>
              <p className="text-slate-600 font-bold leading-relaxed">
                وعاء بسعة 2 لتر مصنوع من مواد غير قابلة للكسر، مثالي لتحضير كميات كبيرة للعائلات أو حتى للاستخدام في المطاعم والمقاهي.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-slate-100 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-red-600/20">⚡</div>
              <h3 className="text-2xl font-black text-slate-900">دقة متناهية في الطحن</h3>
              <p className="text-slate-600 font-bold leading-relaxed">
                سواء كنت تحضر عصير سموذي ناعم أو تطحن أقسى الحبوب والقهوة، الـ 15 سرعة تمنحك التحكم المثالي في القوام الذي تريده في ثوانٍ معدودة.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="flex items-center gap-6 bg-white p-6 rounded-3xl border border-slate-100 flex-row-reverse">
              <div className="text-4xl">🌡️</div>
              <div className="text-right">
                <div className="text-red-600 font-black text-xl mb-1">حماية حرارية ذكية</div>
                <div className="text-slate-500 text-sm font-bold">نظام أمان يوقف المحرك تلقائياً عند السخونة الزائدة</div>
              </div>
            </div>
            <div className="flex items-center gap-6 bg-white p-6 rounded-3xl border border-slate-100 flex-row-reverse">
              <div className="text-4xl">🛑</div>
              <div className="text-right">
                <div className="text-red-600 font-black text-xl mb-1">قاعدة مضادة للانزلاق</div>
                <div className="text-slate-500 text-sm font-bold">تصميم هندسي يمنع الاهتزاز والضوضاء أثناء التشغيل</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
