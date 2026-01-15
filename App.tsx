import React, { useState, useRef, useEffect } from 'react';
import { SLIDES, EBOOK_LINK } from './constants';
import SlideView from './components/SlideView';
import ProgressBar from './components/ProgressBar';
import { ShoppingBag } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Handle Scroll to update progress bar
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollTop, clientHeight } = scrollRef.current;
        const index = Math.round(scrollTop / clientHeight);
        if (index !== currentSlide) {
          setCurrentSlide(index);
        }
      }
    };

    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (ref) {
        ref.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentSlide]);

  const scrollToNext = () => {
    if (scrollRef.current) {
      const nextIndex = Math.min(currentSlide + 1, SLIDES.length - 1);
      scrollRef.current.scrollTo({
        top: nextIndex * window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  const showStickyCTA = currentSlide > 1 && currentSlide < SLIDES.length - 1;

  return (
    <div className="relative h-screen w-full bg-black text-white font-sans overflow-hidden">
      
      <ProgressBar current={currentSlide} total={SLIDES.length} />

      <div 
        ref={scrollRef}
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
      >
        {SLIDES.map((slide, index) => (
          <SlideView 
            key={slide.id} 
            data={slide} 
            isActive={index === currentSlide}
            onNext={scrollToNext}
          />
        ))}
      </div>

      {/* Sticky Bottom CTA for Mobile Conversions */}
      {showStickyCTA && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
          <a 
            href={EBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-brand-purple to-brand-pink text-white font-bold py-3 px-5 rounded-full shadow-lg hover:shadow-brand-pink/50 transition-all hover:scale-105"
          >
            <span>E-book R$39,70</span>
            <ShoppingBag className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  );
}

export default App;