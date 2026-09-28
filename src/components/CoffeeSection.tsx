import React, { useState } from 'react';
import { Coffee, Sparkles, ArrowRight, ShieldCheck, CupSoda, Flame } from 'lucide-react';
import { authenticMenuCategories } from '../data/siteConfig';

interface CoffeeSectionProps {
  onOpenFullMenu: () => void;
}

export const CoffeeSection: React.FC<CoffeeSectionProps> = ({ onOpenFullMenu }) => {
  const [selectedHighlightTab, setSelectedHighlightTab] = useState('hot');

  // Featured highlights for the compact preview
  const featuredHighlights = [
    {
      name: 'Cortado',
      category: 'Signature Milk',
      price: 20,
      description: 'Equal parts silky steamed milk and double shot espresso served in a heavy faceted glass tumbler.',
      tag: 'GUEST FAVOURITE',
    },
    {
      name: 'V60 Single Origin',
      category: 'Filter & Manual',
      price: 30,
      description: 'Artisanal hand pour-over highlighting delicate floral, jasmine, and citrus acidity notes.',
      tag: 'POUR OVER',
    },
    {
      name: 'Spanish Latte',
      category: 'Sweet & Creamy',
      price: 26,
      description: 'Rich condensed milk harmoniously layered under freshly extracted dark roast espresso.',
      tag: 'DUBAI CLASSIC',
    },
    {
      name: 'Iced Matcha Latte',
      category: 'Japanese Tea',
      price: 28,
      description: 'Ceremonial grade Uji green tea whisked with fresh milk over ice crystals.',
      tag: 'CEREMONIAL',
    },
    {
      name: 'Affogato',
      category: 'Gelato & Roast',
      price: 30,
      description: 'Velvety Madagascar vanilla gelato drowned in a freshly pulled double ristretto.',
      tag: 'INDULGENT',
    },
    {
      name: 'Fresh Croissant & Pastries',
      category: 'Bakery',
      price: 8,
      description: 'Flaky pure French butter pastry, baked crisp in-house throughout the day.',
      tag: 'BAKERY',
    },
  ];

  return (
    <section id="coffee" className="py-20 sm:py-28 bg-[#121418] relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C2A683]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="font-mono-tech text-xs text-[#C2A683] tracking-widest uppercase mb-2 flex items-center gap-2">
            <Coffee className="w-3.5 h-3.5 text-[#F59E0B]" />
            SPECIALTY COFFEE BAR
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            EXCEPTIONAL COFFEE. <br className="hidden sm:inline" />
            BUILT FOR THE MOMENT.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#C8C5BF] leading-relaxed text-balance">
            Whether you're here to get behind the controls or simply enjoy the atmosphere, our coffee is made to be part of the experience.
          </p>
        </div>

        {/* Coffee Lifestyle Visual & Compact Menu Dual Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#171920] group">
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <img
                  src="/images/rcc_cafe_interior_lifestyle_1790579379113.jpg"
                  alt="Specialty coffee and relaxed lounge atmosphere at RC Cities Dubai"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171920] via-transparent to-black/30" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#101114]/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono-tech text-[10px] text-[#F59E0B] tracking-wider uppercase block">
                        ROAST QUALITY
                      </span>
                      <span className="font-display font-bold text-sm text-white">
                        Specialty Grade Single Origins & Blends
                      </span>
                    </div>
                    <span className="font-mono-tech text-xs text-[#C2A683]">100% ARABICA</span>
                  </div>
                </div>
              </div>

              {/* Craft Coffee Pillars */}
              <div className="p-5 sm:p-6 space-y-3">
                <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                  <span className="text-[#A8A49C]">Brew Temperature</span>
                  <span className="text-white font-mono-tech">93.5°C Precision Extraction</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                  <span className="text-[#A8A49C]">Milk Alternatives</span>
                  <span className="text-white font-mono-tech">Oat · Almond · Coconut</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2">
                  <span className="text-[#A8A49C]">Roast Profile</span>
                  <span className="text-white font-mono-tech">Locally Roasted Small Batch</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Menu Cards Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono-tech text-xs text-[#A8A49C] uppercase tracking-wider">
                FEATURED DRINKS & BITES
              </span>
              <span className="font-mono-tech text-xs text-[#F59E0B]">
                ALL PRICES IN AED
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredHighlights.map((item) => (
                <div
                  key={item.name}
                  onClick={onOpenFullMenu}
                  className="p-4 sm:p-5 rounded-xl bg-[#171920]/80 border border-white/10 hover:border-[#F59E0B]/40 transition-all duration-200 cursor-pointer group hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span className="font-mono-tech text-[10px] text-[#F59E0B] tracking-wider uppercase block">
                        {item.tag}
                      </span>
                      <h4 className="font-display font-bold text-base text-white group-hover:text-[#F59E0B] transition-colors">
                        {item.name}
                      </h4>
                    </div>
                    <div className="font-mono-tech font-bold text-sm text-[#C2A683] bg-[#1F232B] px-2.5 py-1 rounded border border-white/5 shrink-0">
                      {item.price} AED
                    </div>
                  </div>
                  <p className="text-xs text-[#A8A49C] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Menu Action Banner */}
            <div className="mt-6 p-5 rounded-xl bg-[#1A1D25] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-display font-bold text-sm text-white">
                  Looking for the full café collection?
                </h4>
                <p className="text-xs text-[#A8A49C] mt-0.5">
                  Over 40 beverages, pour-overs, Japanese matchas, shakes, açai bowls and bites.
                </p>
              </div>

              <button
                onClick={onOpenFullMenu}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-[#F59E0B]/20"
              >
                <span>VIEW MENU</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* Quick Menu Category Pills */}
        <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center">
          {['ESPRESSO', 'FILTER & V60', 'LATTE & FLAT WHITE', 'CAPPUCCINO', 'COLD COFFEE', 'SIGNATURE DRINKS'].map((cat) => (
            <button
              key={cat}
              onClick={onOpenFullMenu}
              className="py-3 px-2 rounded-lg bg-[#16181E] border border-white/5 hover:border-[#F59E0B]/30 hover:bg-[#1D212A] text-xs font-mono-tech text-[#C8C5BF] hover:text-[#F59E0B] transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
