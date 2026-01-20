
import { GoogleGenAI, Type } from "@google/genai";
import { Recipe } from "../types";

export const generateRecipe = async (ingredients: string, mood: string): Promise<Recipe> => {
  // Initialize as per system instructions
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `أنت شيف خبير في استخدام الخلاطات عالية الأداء (مثل Silver Crest 32000 RPM). قم بتوليد وصفة باللغة العربية الفصحى تستخدم الخلاط بشكل أساسي لتحويل هذه المكونات: ${ingredients}. الحالة المطلوبة هي: ${mood}. يجب أن تبرز الوصفة قدرة الخلاط على الطحن أو الخلط أو التنعيم الفائق.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "اسم الوصفة" },
          description: { type: Type.STRING, description: "لماذا هذه الوصفة مثالية للخلاط" },
          ingredients: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "قائمة المكونات"
          },
          instructions: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "خطوات التحضير (مع ذكر السرعات المناسبة)"
          },
          prepTime: { type: Type.STRING, description: "وقت التحضير" },
          difficulty: {
            type: Type.STRING,
            description: "مستوى الصعوبة"
          }
        },
        required: ["title", "description", "ingredients", "instructions", "prepTime", "difficulty"]
      }
    }
  });

  // Access the text property directly as per instructions (no parenthesis)
  const text = response.text;
  if (!text) {
    throw new Error("حدث خطأ في توليد الوصفة.");
  }

  try {
    return JSON.parse(text) as Recipe;
  } catch (e) {
    console.error("Failed to parse recipe JSON", text);
    throw new Error("تنسيق الوصفة غير صحيح.");
  }
};
