import React from 'react';
import { Layers, Crosshair, Cpu, Coffee } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const ConceptSection: React.FC = () => {
  return (
    <section id="concept" className="relative py-20 sm:py-28 bg-[#121418] border-t border-b border-white/5 overflow-hidden">
      {/* Blueprint Grid Ambient Pattern */}
      <div className="absolute inset-0 blueprint-grid-subtle opacity-30 pointer-events-none" />

      {/* Decorative Blueprint Corner Markings */}
      <div className="absolute top-6 left-6 font-mono-tech text-[10px] text-white/20 hidden sm:block">
        + COORD // 25.1585° N, 55.3052° E
      </div>
      <div className="absolute top-6 right-6 font-mono-tech text-[10px] text-white/20 hidden sm:block">
        SECTOR: NAS-ARENA-01 +
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Editorial Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Micro-label */}
            <div className="flex items-center gap-2 font-mono-tech text-xs tracking-wider text-[#F59E0B]">
              <Crosshair className="w-3.5 h-3.5" />
              <span className="uppercase">THE RC CITIES EXPERIENCE</span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white leading-tight uppercase">
              WHERE COFFEE MEETS CONSTRUCTION
            </h2>

            {/* Editorial Body */}
            <div className="space-y-4 text-base sm:text-lg text-[#C8C5BF] leading-relaxed">
              <p>
                Inspired by the energy and ambition of Dubai, RC Cities brings the world of construction to life in miniature.
              </p>
              <p className="text-white font-medium">
                Sit back with exceptional coffee, take control of powerful RC construction machines, and experience the satisfaction of building something yourself.
              </p>
            </div>

            {/* Blueprint Concept Pillars */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#1B1E24]/60 border border-white/10 hover:border-[#F59E0B]/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-white">Full-Scale Realism</h4>
                </div>
                <p className="text-xs text-[#A8A49C] leading-normal">
                  Scale 1:14 hydraulic pistons, steel tracks, and real earth trenching with proportional radio transmitters.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1B1E24]/60 border border-white/10 hover:border-[#C2A683]/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#C2A683]/10 border border-[#C2A683]/30 flex items-center justify-center text-[#C2A683]">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-white">Specialty Roastery</h4>
                </div>
                <p className="text-xs text-[#A8A49C] leading-normal">
                  Handcrafted flat whites, cold brews, and single-origin pour overs brewed while you supervise the site.
                </p>
              </div>
            </div>

            {/* Business Anchor Location Micro Note */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono-tech text-[#99958E]">
              <Layers className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>{siteConfig.district}, {siteConfig.city} · Open Daily 10 AM – 11 PM</span>
            </div>
          </div>

          {/* Large Visual Frame with Technical Blueprint Elements */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/80 bg-[#16181D] group">
              <img
                src="/images/rcc_excavator.jpg"
                alt="Precision 1:14 scale remote controlled hydraulic excavator working in indoor construction arena"
                className="w-full h-[360px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle Tech Overlay Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101114]/90 via-transparent to-black/20" />

              {/* Technical Blueprint Callout Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#101114]/85 backdrop-blur-md border border-white/15">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono-tech text-[10px] text-[#F59E0B] uppercase tracking-wider block">
                      SITE SPECIFICATION
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-white">
                      Indoor Scaled Earth Arena & Construction Zone
                    </span>
                  </div>
                  <div className="text-right font-mono-tech text-xs text-[#C2A683]">
                    <span>1:14 HYDRAULIC</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Geometric Accent Tag */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-[#F59E0B]/50 pointer-events-none hidden sm:block" />
          </div>

        </div>
      </div>
    </section>
  );
};
