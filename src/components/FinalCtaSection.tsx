import React from 'react';
import { MessageCircle, ChevronRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#0B0C0E] overflow-hidden">
      {/* Background Image with Cinematic High Contrast & Warm Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/rcc_hero_construction_cafe_1790579355983.jpg"
          alt="Remote Control Cities Dubai construction terrain and coffee bar"
          className="w-full h-full object-cover opacity-30 scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/85 to-[#0B0C0E]/70" />
        <div className="absolute inset-0 blueprint-grid-amber opacity-25 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-widest text-[#F59E0B] uppercase bg-[#181A22]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#F59E0B]/30 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>YOUR NEXT COFFEE BREAK JUST GOT HEAVIER</span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.95] mb-6">
          READY TO BUILD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#E67E22]">
            SOMETHING?
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="font-display font-medium text-lg sm:text-2xl text-[#D8D4CD] tracking-wide mb-10 max-w-xl mx-auto">
          Great coffee. Big machines. Small city.
        </p>

        {/* Dual High Impact CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-black font-extrabold text-sm tracking-wider uppercase transition-all duration-200 shadow-xl shadow-[#F59E0B]/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
          >
            <span>BOOK YOUR EXPERIENCE</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <a
            href={siteConfig.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1B1E26] hover:bg-[#232733] border border-white/20 hover:border-[#25D366]/50 text-white hover:text-[#25D366] font-bold text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-3 backdrop-blur-sm shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WHATSAPP RC CITIES</span>
          </a>
        </div>

        {/* Subtitle Guarantee */}
        <div className="mt-8 font-mono-tech text-xs text-[#99958E]">
          Walk-in sessions welcome daily · Nad Al Sheba, Meydan Avenue, Dubai
        </div>

      </div>
    </section>
  );
};
