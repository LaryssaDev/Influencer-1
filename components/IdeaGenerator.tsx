import React, { useState } from 'react';
import { generateVideoIdeas } from '../services/geminiService';
import { Sparkles, Loader2, Send } from 'lucide-react';

const IdeaGenerator: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [ideas, setIdeas] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche.trim()) return;

    setLoading(true);
    const results = await generateVideoIdeas(niche);
    setIdeas(results);
    setLoading(false);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 w-full max-w-md mx-auto mt-4 shadow-xl">
      <div className="flex items-center gap-2 mb-4 text-brand-yellow">
        <Sparkles className="w-5 h-5" />
        <h3 className="font-display font-bold text-lg">Gerador de Ideias AI</h3>
      </div>
      
      <form onSubmit={handleGenerate} className="flex gap-2 mb-4">
        <input
          type="text"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          placeholder="Seu nicho (ex: moda, games...)"
          className="flex-1 bg-black/50 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-brand-pink transition-colors"
        />
        <button 
          type="submit"
          disabled={loading || !niche}
          className="bg-brand-purple hover:bg-brand-pink disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg px-4 flex items-center justify-center transition-colors"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        </button>
      </form>

      {ideas.length > 0 && (
        <div className="space-y-3 animate-fade-in-up">
          {ideas.map((idea, idx) => (
            <div key={idx} className="bg-black/30 p-3 rounded-lg border-l-4 border-brand-orange text-sm">
              {idea}
            </div>
          ))}
        </div>
      )}
      
      {ideas.length === 0 && !loading && (
        <p className="text-xs text-gray-400 text-center">
          Digite seu nicho acima para receber 3 ideias virais instantaneamente.
        </p>
      )}
    </div>
  );
};

export default IdeaGenerator;