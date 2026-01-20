
import React, { useState } from 'react';
import { generateRecipe } from '../services/geminiService';
import { Recipe } from '../types';

const RecipeGenerator: React.FC = () => {
  const [ingredients, setIngredients] = useState('');
  const [mood, setMood] = useState('gastronomique');
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!ingredients.trim()) {
      setError('يرجى إدخال المكونات!');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const result = await generateRecipe(ingredients, mood);
      setRecipe(result);
    } catch (err) {
      setError("الخلاط مشغول حالياً! حاول مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  const moods = [
    { id: 'gastronomique', label: '✨ أطباق فاخرة' },
    { id: 'rapide', label: '⚡ سموذي سريع' },
    { id: 'sante', label: '🥗 صحي ودايت' },
    { id: 'exotique', label: '✈️ صلصات ونكهات عالمية' }
  ];

  return (
    <section id="generateur" className="py-24 bg-slate-50 px-4">
      <div className="max-w-5xl mx-auto text-right">
        <div className="text-center mb-16">
          <span className="text-red-600 font-black text-sm uppercase tracking-widest block mb-4 italic">شيف سيلفر كريست بالذكاء الاصطناعي</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">ماذا تريد أن <span className="text-red-600 italic">تحضر</span> اليوم؟</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-bold">ذكاؤنا الاصطناعي يصمم لك وصفات مخصصة لقوة خلاطك سيلفر كريست.</p>
        </div>

        <div className="bg-white rounded-[40px] shadow-2xl p-8 lg:p-16 mb-12 border border-slate-100">
          <div className="grid md:grid-cols-2 gap-12 mb-10">
            <div className="space-y-4">
              <label className="text-sm font-black text-slate-900 uppercase tracking-widest">المكونات المتوفرة لديك</label>
              <textarea 
                placeholder="مثال: لوز، تمر، حليب، قرفة..."
                className="w-full h-40 p-6 bg-slate-50 border-2 border-transparent focus:border-red-600 rounded-3xl focus:outline-none transition-all font-bold text-right"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </div>
            <div className="space-y-4 text-right">
              <label className="text-sm font-black text-slate-900 uppercase tracking-widest">نوع الطبق</label>
              <div className="grid grid-cols-1 gap-4">
                {moods.map((m) => (
                  <button 
                    key={m.id}
                    onClick={() => setMood(m.id)}
                    className={`p-4 rounded-2xl text-right border-2 transition-all font-black capitalize ${mood === m.id ? 'border-red-600 bg-red-50 text-red-600' : 'border-slate-100 hover:border-slate-200 text-slate-500'}`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={handleGenerate}
            disabled={loading}
            className={`w-full py-6 rounded-3xl text-2xl font-black transition-all flex items-center justify-center gap-4
              ${loading ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-red-600 text-white hover:bg-red-700 shadow-2xl shadow-red-200 transform hover:-translate-y-1'}`}
          >
            {loading ? 'جاري تحضير الوصفة...' : 'ابتكر وصفتي الآن'}
          </button>
          {error && <p className="mt-6 text-red-600 text-center font-bold">{error}</p>}
        </div>

        {recipe && !loading && (
          <div className="bg-slate-900 text-white rounded-[40px] p-8 lg:p-16 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
              <div className="flex-1">
                <h3 className="text-4xl font-black tracking-tight mb-4 italic text-red-500 leading-none">{recipe.title}</h3>
                <p className="text-xl text-slate-300 font-bold leading-relaxed">{recipe.description}</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/10 px-6 py-3 rounded-2xl border border-white/10 text-center">
                   <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">الوقت</div>
                   <div className="text-xl font-black">{recipe.prepTime}</div>
                </div>
                <div className="bg-white/10 px-6 py-3 rounded-2xl border border-white/10 text-center">
                   <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">المستوى</div>
                   <div className="text-xl font-black">{recipe.difficulty}</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8 order-2 md:order-1">
                <h4 className="text-2xl font-black border-b-2 border-red-600 pb-2 inline-block">المكونات</h4>
                <ul className="space-y-4">
                  {recipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-slate-300 font-bold text-lg flex-row-reverse">
                      <span className="w-2 h-2 rounded-full bg-red-600"></span> {ing}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-8 order-1 md:order-2">
                <h4 className="text-2xl font-black border-b-2 border-red-600 pb-2 inline-block">طريقة التحضير</h4>
                <div className="space-y-8">
                  {recipe.instructions.map((step, idx) => (
                    <div key={idx} className="flex gap-6 group flex-row-reverse">
                      <span className="text-5xl font-black text-white/10 group-hover:text-red-600/50 transition-colors leading-none">{idx + 1}</span>
                      <p className="text-slate-300 leading-relaxed font-bold text-lg pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecipeGenerator;
