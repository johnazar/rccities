import React from 'react';
import { ArrowDown, MessageCircle, ChevronRight, Compass } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const scrollToExperience = () => {
    const el = document.getElementById('concept');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-16">
      {/* Background Image with Cinematic Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/rcc_hero_construction_cafe_1790579355983.jpg"
          alt="RC Cities Dubai - Remote-Controlled Construction Machines and Specialty Coffee Lounge"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-subtle"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Measured multi-layer gradient scrim for supreme legibility (WCAG AAA) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-[#101114]/75 to-[#101114]/50" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#101114]/40 to-[#101114]" />
        {/* Blueprint Grid Overlay */}
        <div className="absolute inset-0 blueprint-grid-subtle opacity-40 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 flex flex-col items-start justify-center">
        
        {/* Architectural Blueprint Spec Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono-tech text-[#C2A683] mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1B1E24]/80 border border-[#F59E0B]/30 text-[#F59E0B] tracking-wider text-[11px] uppercase font-semibold">
            <Compass className="w-3 h-3" />
            DUBAI'S RC CONSTRUCTION EXPERIENCE
          </span>
          <span className="hidden sm:inline text-white/30">/</span>
          <span className="hidden sm:inline text-white/60 tracking-wider">NAD AL SHEBA</span>
          <span className="hidden md:inline text-white/30">/</span>
          <span className="hidden md:inline text-white/60 tracking-wider">SCALE 1:14 ARENA</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mb-6">
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[0.95] uppercase">
            COFFEE <br />
            MEETS <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D97706] drop-shadow-[0_4px_24px_rgba(245,158,11,0.35)]">
              THRILL.
              {/* Subtle underline accent */}
              <span className="absolute -bottom-2 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-[#F59E0B] to-transparent rounded-full" />
            </span>
          </h1>
        </div>

        {/* Supporting Tagline & Value Proposition */}
        <p className="max-w-2xl text-lg sm:text-xl lg:text-2xl text-[#D8D4CD] font-light leading-relaxed mb-8 sm:mb-10 text-balance">
          Exceptional coffee. Remote-controlled construction. One unforgettable Dubai experience.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            onClick={onOpenBooking}
            className="group px-8 py-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-xl shadow-[#F59E0B]/25 hover:shadow-[#F59E0B]/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3"
          >
            <span>BOOK YOUR EXPERIENCE</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <a
            href={siteConfig.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-xl bg-[#1B1E24]/90 hover:bg-[#252A33] border border-white/15 hover:border-[#25D366]/50 text-white hover:text-[#25D366] font-semibold text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-3 backdrop-blur-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>CHAT ON WHATSAPP</span>
          </a>
        </div>

        {/* Key Quick Value Signals */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div>
            <div className="font-mono-tech text-xs text-[#A8A49C] uppercase tracking-wider mb-1">Scale Fleet</div>
            <div className="text-white font-semibold text-sm sm:text-base">1:14 Hydraulic Machines</div>
          </div>
          <div>
            <div className="font-mono-tech text-xs text-[#A8A49C] uppercase tracking-wider mb-1">Specialty Roasts</div>
            <div className="text-white font-semibold text-sm sm:text-base">Artisan Espresso & Filters</div>
          </div>
          <div>
            <div className="font-mono-tech text-xs text-[#A8A49C] uppercase tracking-wider mb-1">Arena Location</div>
            <div className="text-white font-semibold text-sm sm:text-base">Meydan Avenue, Nad Al Sheba</div>
          </div>
          <div>
            <div className="font-mono-tech text-xs text-[#A8A49C] uppercase tracking-wider mb-1">Open Daily</div>
            <div className="text-white font-semibold text-sm sm:text-base">10:00 AM – 11:00 PM</div>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Indicator */}
      <button
        onClick={scrollToExperience}
        aria-label="Scroll down to explore RC Cities"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-neutral-400 hover:text-[#F59E0B] transition-colors group cursor-pointer"
      >
        <span className="font-mono-tech text-[10px] tracking-widest uppercase">DISCOVER</span>
        <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#F59E0B] flex items-center justify-center transition-colors">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </button>
    </section>
  );
};
