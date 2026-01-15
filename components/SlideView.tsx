import React, { useState } from 'react';
import { SlideData, SlideType } from '../types';
import { ChevronDown, CheckCircle2, Circle, Lock, ArrowRight, Instagram } from 'lucide-react';
import IdeaGenerator from './IdeaGenerator';
import GrowthChart from './GrowthChart';

interface SlideViewProps {
  data: SlideData;
  isActive: boolean;
  onNext: () => void;
}

const SlideView: React.FC<SlideViewProps> = ({ data, isActive, onNext }) => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleCheck = (index: number) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter(i => i !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  const isOffer = data.type === SlideType.OFFER || data.type === SlideType.CTA;

  // Background styling
  const bgStyle = data.image 
    ? { backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url(${data.image})` }
    : {};

  const activeClass = isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
  
  return (
    <section 
      className="w-full h-screen snap-start relative flex flex-col items-center justify-center p-6 overflow-hidden bg-cover bg-center transition-all duration-700"
      style={bgStyle}
    >
      {/* Dynamic Background Gradients for Non-Image slides */}
      {!data.image && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-0">
          <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-pink/20 rounded-full blur-[100px]" />
        </div>
      )}

      <div className={`relative z-10 max-w-lg w-full flex flex-col items-center text-center transition-all duration-1000 delay-300 ${activeClass}`}>
        
        {/* Header Section */}
        {data.type === SlideType.COVER && (
          <div className="mb-8 animate-pulse-slow">
            <Instagram className="w-16 h-16 text-white mb-4 mx-auto" />
            <div className="px-4 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur text-xs tracking-widest uppercase mb-4 inline-block">
              Masterclass Gratuita
            </div>
          </div>
        )}

        <h1 className={`font-display font-black leading-tight mb-4 ${
          data.type === SlideType.COVER ? 'text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-pink to-brand-purple' : 'text-3xl md:text-4xl text-white'
        }`}>
          {data.title}
        </h1>

        {data.subtitle && (
          <h2 className="text-xl md:text-2xl font-bold text-gray-200 mb-6">
            {data.subtitle}
          </h2>
        )}

        {data.description && (
          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-md">
            {data.description}
          </p>
        )}

        {/* Highlight Box */}
        {data.highlight && (
          <div className="mb-8 px-6 py-3 bg-gradient-to-r from-brand-purple/20 to-brand-pink/20 border-l-4 border-brand-yellow rounded-r-lg backdrop-blur-md">
            <p className="font-bold text-white italic">"{data.highlight}"</p>
          </div>
        )}

        {/* Content Type: Bullets */}
        {data.bullets && data.type !== SlideType.INTERACTIVE_CHECKLIST && (
          <div className="w-full text-left space-y-4 mb-8 bg-black/40 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
            {data.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 min-w-[20px]">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                </div>
                <span className="text-gray-200 text-sm md:text-base">{bullet}</span>
              </div>
            ))}
          </div>
        )}

        {/* Content Type: Checklist */}
        {data.type === SlideType.INTERACTIVE_CHECKLIST && data.bullets && (
          <div className="w-full max-w-sm space-y-3 mb-8">
            {data.bullets.map((bullet, idx) => (
              <button 
                key={idx}
                onClick={() => toggleCheck(idx)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                  checkedItems.includes(idx) 
                    ? 'bg-brand-pink/20 border-brand-pink text-white' 
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                }`}
              >
                {checkedItems.includes(idx) ? <CheckCircle2 className="text-brand-pink w-6 h-6" /> : <Circle className="w-6 h-6" />}
                <span className="text-left font-medium">{bullet}</span>
              </button>
            ))}
            <p className="text-xs text-center text-gray-500 mt-2">Toque para marcar o que você sente.</p>
          </div>
        )}

        {/* Content Type: AI Generator */}
        {data.type === SlideType.AI_GENERATOR && (
          <IdeaGenerator />
        )}

        {/* Content Type: Chart */}
        {data.type === SlideType.CHART && (
          <GrowthChart />
        )}

        {/* Content Type: Offer/CTA */}
        {isOffer && (
          <div className="w-full mt-4">
             {data.type === SlideType.OFFER && (
               <div className="flex justify-center items-center gap-2 mb-6">
                 <span className="text-gray-400 line-through text-lg">R$ 97,00</span>
                 <span className="text-brand-yellow font-black text-3xl">R$ 39,70</span>
               </div>
             )}
             
             <a 
              href={data.ctaLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-full block"
             >
               <div className="absolute -inset-1 bg-gradient-to-r from-brand-yellow via-brand-pink to-brand-purple rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200 animate-pulse"></div>
               <button className="relative w-full bg-white text-black font-black text-lg py-4 px-8 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                 {data.ctaText} <ArrowRight className="w-6 h-6" />
               </button>
             </a>
             <div className="mt-4 flex justify-center items-center gap-2 text-xs text-gray-400">
                <Lock className="w-3 h-3" /> Compra 100% Segura via Hubla
             </div>
          </div>
        )}

        {/* Navigation Hint */}
        {data.type === SlideType.COVER && (
          <button 
            onClick={onNext}
            className="absolute bottom-10 animate-bounce text-white/50 hover:text-white transition-colors flex flex-col items-center"
          >
            <span className="text-xs mb-2 uppercase tracking-widest">Começar</span>
            <ChevronDown className="w-8 h-8" />
          </button>
        )}

      </div>
    </section>
  );
};

export default SlideView;