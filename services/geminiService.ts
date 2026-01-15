import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateVideoIdeas = async (niche: string): Promise<string[]> => {
  if (!ai) {
    console.warn("API Key not found. Returning fallback data.");
    return [
      `3 erros comuns que iniciantes em ${niche} cometem`,
      `Como começar em ${niche} com pouco dinheiro`,
      `Minha rotina diária trabalhando com ${niche}`
    ];
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate 3 viral, short-form video ideas (Reels/TikTok) for an Instagram influencer in the "${niche}" niche. 
      Keep them short, punchy, and in Portuguese. 
      Return ONLY the 3 bullet points, nothing else.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });

    const text = response.text || "";
    // Simple splitting by newline or bullet points
    const ideas = text.split('\n').filter(line => line.trim().length > 0).map(line => line.replace(/^[\d\-\.\*]+\s*/, ''));
    
    return ideas.slice(0, 3);
  } catch (error) {
    console.error("Error generating ideas:", error);
    // Fallback in case of API error
    return [
      `Bastidores: Um dia na vida de quem faz ${niche}`,
      `Tutorial rápido: Dica de ouro sobre ${niche}`,
      `Mito vs. Verdade sobre ${niche}`
    ];
  }
};
